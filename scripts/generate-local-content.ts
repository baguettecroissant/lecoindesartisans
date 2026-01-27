
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const API_KEY = process.env.GEMINI_API_KEY;
const MODEL_CANDIDATES = ["gemini-2.0-flash", "gemini-2.5-flash", "gemini-flash-latest"];
const DELAY_MS = 1000; // Rate limiting
const BATCH_SIZE = 5;
const API_VERSION = "v1";

let currentModel = MODEL_CANDIDATES[0];

// Paths
const DATA_PATH = path.join(__dirname, '../data.json');
const OUTPUT_PATH = path.join(__dirname, '../src/data/generated-local-content.json');

// Types (simplified from src/types.ts)
interface City {
    name: string;
    slug: string;
    region: string;
    zip: string;
}

interface Service {
    name: string;
    slug: string;
}

interface SiteData {
    services: Service[];
    sample_cities: City[];
}

interface GeneratedContent {
    intro: string;         // Unique intro paragraph
    local_tip: string;    // Specific local advice
    history_anecdote: string; // Fun fact or historical context about the city relevant to housing/construction
    faq_local: { question: string; answer: string }; // One specific local question
}

// Global store
let contentStore: Record<string, Record<string, GeneratedContent>> = {};

// Helper: Sleep
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper: Load Data
function loadData(): SiteData {
    const raw = fs.readFileSync(DATA_PATH, 'utf-8');
    return JSON.parse(raw);
}

// Helper: Load Existing Store
function loadStore() {
    if (fs.existsSync(OUTPUT_PATH)) {
        const raw = fs.readFileSync(OUTPUT_PATH, 'utf-8');
        contentStore = JSON.parse(raw);
        console.log(`Loaded ${Object.keys(contentStore).length} services from existing store.`);
    }
}

// Helper: Save Store
function saveStore() {
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(contentStore, null, 2));
    console.log(`Saved progress to ${OUTPUT_PATH}`);
}

// Helper: Call Gemini API
async function generateForCity(service: Service, city: City): Promise<GeneratedContent | null> {
    if (!API_KEY) {
        throw new Error("GEMINI_API_KEY environment variable is not set.");
    }

    const prompt = `
    Je suis un expert en SEO local pour la plateforme "Le Coin des Artisans".
    Rédige un contenu ultra-localisé pour une page de service : "${service.name}" à "${city.name}" (Code postal: ${city.zip}, Région: ${city.region}).
    
    Le contenu doit être unique, informatif et donner l'impression qu'il a été écrit par quelqu'un qui connait ${city.name}.
    
    Génère un JSON strict avec ces champs :
    {
      "intro": "Paragraphe d'intro (50-70 mots) qui lie ${service.name} au contexte spécifique de ${city.name} (climat local, architecture typique, ou style de vie). Évite les phrases génériques.",
      "local_tip": "Un conseil technique ou pratique spécifique pour les habitants de ${city.name} concernant ${service.name} (ex: aides locales de la région ${city.region}, spécificité météo).",
      "history_anecdote": "Une courte anecdote (1 phrase) sur l'histoire du bâtiment ou de la ville de ${city.name} qui rassure sur l'ancrage local.",
      "faq_local": {
        "question": "Une question que se posent souvent les habitants de ${city.name} sur ${service.name} ?",
        "answer": "Réponse précise."
      }
    }
    
    Réponds uniquement avec le JSON.
    `;

    for (const model of MODEL_CANDIDATES) {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/${API_VERSION}/models/${model}:generateContent?key=${API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });

            if (response.status === 404) {
                console.log(`Model ${model} not found, trying next...`);
                continue;
            }

            if (!response.ok) {
                console.error(`API Error ${response.status} with ${model}: ${await response.text()}`);
                return null;
            }

            const data = await response.json();
            const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!textResponse) return null;

            // Clean markdown code blocks if present
            const jsonStr = textResponse.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
            return JSON.parse(jsonStr);

        } catch (e) {
            console.error(`Generation failed with ${model}:`, e);
            continue;
        }
    }
    return null;
}

// Main Loop
async function main() {
    const data = loadData();
    loadStore();

    console.log(`Found ${data.services.length} services and ${data.sample_cities.length} cities.`);
    console.log(`Total combinations: ${data.services.length * data.sample_cities.length}`);

    let count = 0;

    for (const service of data.services) {
        if (!contentStore[service.slug]) {
            contentStore[service.slug] = {};
        }

        for (const city of data.sample_cities) {
            // Skip if exists
            if (contentStore[service.slug][city.slug]) {
                process.stdout.write('.');
                continue;
            }

            console.log(`\nGenerating for ${service.name} in ${city.name}...`);
            const content = await generateForCity(service, city);

            if (content) {
                contentStore[service.slug][city.slug] = content;
                console.log("✅ Done.");
            } else {
                console.log("❌ Failed.");
            }

            count++;
            if (count % BATCH_SIZE === 0) {
                saveStore();
            }

            await sleep(DELAY_MS);
        }
    }

    saveStore();
    console.log("\nAll done!");
}

main().catch(console.error);

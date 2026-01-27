
const API_KEY = process.env.GEMINI_API_KEY;

async function main() {
    if (!API_KEY) {
        console.error("GEMINI_API_KEY is not set.");
        return;
    }

    const versions = ["v1", "v1beta"];

    for (const v of versions) {
        console.log(`\nChecking API version: ${v}...`);
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/${v}/models?key=${API_KEY}`);
            if (!response.ok) {
                console.error(`Error ${response.status}: ${await response.text()}`);
                continue;
            }
            const data = await response.json();
            console.log(`Available models in ${v}:`);
            data.models?.forEach((m: any) => console.log(` - ${m.name}`));
        } catch (e) {
            console.error(`Failed to fetch for ${v}:`, e);
        }
    }
}

main();

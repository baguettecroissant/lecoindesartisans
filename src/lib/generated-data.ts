
import generatedDataRaw from "@/data/generated-local-content.json";

interface GeneratedContent {
    intro: string;
    local_tip: string;
    history_anecdote: string;
    faq_local: { question: string; answer: string };
}

const generatedData = generatedDataRaw as Record<string, Record<string, GeneratedContent>>;

export function getGeneratedLocalContent(serviceSlug: string, citySlug: string): GeneratedContent | null {
    return generatedData[serviceSlug]?.[citySlug] || null;
}

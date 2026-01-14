import Link from "next/link";
import { LucideIcon, ShieldCheck, FileText, Euro } from "lucide-react";
import { USP } from "@/types";

// Icon mapping for USPs
const iconMap: Record<string, LucideIcon> = {
    ShieldCheck: ShieldCheck,
    FileText: FileText,
    Euro: Euro,
};

interface USPCardProps {
    usp: USP;
    index: number;
}

export default function USPCard({ usp, index }: USPCardProps) {
    const IconComponent = iconMap[usp.icon] || ShieldCheck;

    return (
        <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <IconComponent className="w-8 h-8 text-amber-600" />
            </div>
            <div className="inline-flex items-center justify-center w-8 h-8 bg-navy-900 text-white font-bold rounded-full text-sm mb-3">
                {index + 1}
            </div>
            <h3 className="text-lg font-semibold text-navy-900 mb-2">{usp.title}</h3>
            <p className="text-gray-600 text-sm">{usp.description}</p>
        </div>
    );
}

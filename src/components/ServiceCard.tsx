import Link from "next/link";
import { LucideIcon, Sun, ThermometerSun, Home, AppWindow, Hammer, Wrench, ArrowRight, Wind, Zap } from "lucide-react";
import { Service } from "@/types";

// Icon mapping from JSON icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
    Sun: Sun,
    ThermometerSun: ThermometerSun,
    Home: Home,
    AppWindow: AppWindow,
    Hammer: Hammer,
    Wrench: Wrench,
    Wind: Wind,
    Zap: Zap,
};

interface ServiceCardProps {
    service: Service;
    citySlug?: string;
}

export default function ServiceCard({ service, citySlug = "paris" }: ServiceCardProps) {
    const IconComponent = iconMap[service.icon] || Sun;

    // Logic: Link to Hub by default. Link to city ONLY if it's a specific city (not Paris/Default)
    const linkHref = citySlug && citySlug !== "paris"
        ? `/service/${service.slug}/${citySlug}`
        : `/service/${service.slug}`;

    return (
        <Link
            href={linkHref}
            className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors duration-500" />

            <div className="relative z-10">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-500 shadow-inner">
                    <IconComponent className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors duration-500" />
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-amber-600 transition-colors duration-300">
                        {service.name}
                    </h3>
                    <p className="text-gray-500 leading-relaxed line-clamp-2">
                        {service.short_desc}
                    </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full ${service.payout_category === "High Ticket"
                        ? "bg-green-50 text-green-700 border border-green-100"
                        : service.payout_category === "Medium Ticket"
                            ? "bg-blue-50 text-blue-700 border border-blue-100"
                            : "bg-gray-50 text-gray-700 border border-gray-100"
                        }`}>
                        {service.payout_category === "High Ticket" && "Aides maximales"}
                        {service.payout_category === "Medium Ticket" && "Aides disponibles"}
                        {service.payout_category === "Volume" && "Intervention rapide"}
                    </span>
                    <div className="flex items-center text-amber-600 font-bold text-sm">
                        <span>Devis gratuit</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </Link>
    );
}

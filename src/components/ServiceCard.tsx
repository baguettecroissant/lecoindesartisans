import Link from "next/link";
import { LucideIcon, Sun, ThermometerSun, Home, AppWindow, Hammer, Wrench } from "lucide-react";
import { Service } from "@/types";

// Icon mapping from JSON icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
    Sun: Sun,
    ThermometerSun: ThermometerSun,
    Home: Home,
    AppWindow: AppWindow,
    Hammer: Hammer,
    Wrench: Wrench,
};

interface ServiceCardProps {
    service: Service;
    citySlug?: string;
}

export default function ServiceCard({ service, citySlug = "paris" }: ServiceCardProps) {
    const IconComponent = iconMap[service.icon] || Sun;

    return (
        <Link
            href={`/service/${service.slug}/${citySlug}`}
            className="group bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all duration-300"
        >
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    <IconComponent className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-navy-900 group-hover:text-amber-600 transition-colors">
                        {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                        {service.short_desc}
                    </p>
                </div>
            </div>

            {/* Payout indicator */}
            <div className="mt-4 flex items-center justify-between">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${service.payout_category === "High Ticket"
                        ? "bg-green-50 text-green-700"
                        : service.payout_category === "Medium Ticket"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-gray-50 text-gray-700"
                    }`}>
                    {service.payout_category === "High Ticket" && "💰 Aides importantes"}
                    {service.payout_category === "Medium Ticket" && "📋 Aides disponibles"}
                    {service.payout_category === "Volume" && "🔧 Intervention rapide"}
                </span>
                <span className="text-amber-600 text-sm font-medium group-hover:underline">
                    Voir devis →
                </span>
            </div>
        </Link>
    );
}

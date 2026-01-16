import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Shield, Users, Award, ArrowRight, Building2, Target, Heart } from "lucide-react";
import { getSiteSettings } from "@/lib/data";

const settings = getSiteSettings();

export const metadata: Metadata = {
    title: "Qui sommes-nous ? | Le Coin des Artisans",
    description:
        "Découvrez l'équipe derrière Le Coin des Artisans, notre mission et nos valeurs. Depuis 2019, nous mettons en relation particuliers et artisans qualifiés.",
    alternates: {
        canonical: "/qui-sommes-nous",
    },
    openGraph: {
        title: "Qui sommes-nous ? | Le Coin des Artisans",
        description: "Découvrez l'équipe derrière Le Coin des Artisans et notre mission.",
        type: "website",
    },
};

// Team members data
const teamMembers = [
    {
        name: "Sébastien Moreau",
        role: "Fondateur & CEO",
        bio: "Après 12 ans comme conducteur de travaux chez Bouygues, Sébastien a lancé Le Coin des Artisans pour simplifier la mise en relation entre particuliers et artisans de confiance.",
        image: "/images/team/sebastien-moreau.png",
    },
    {
        name: "Caroline Blanchard",
        role: "Directrice Qualité",
        bio: "Ancienne responsable certification chez Qualibat, Caroline pilote notre processus de vérification des artisans et garantit les standards de qualité.",
        image: "/images/team/caroline-blanchard.png",
    },
    {
        name: "Julien Fournier",
        role: "Responsable Partenariats",
        bio: "Fort de 8 ans dans le développement commercial BtoB, Julien accompagne les artisans partenaires et développe notre réseau national.",
        image: "/images/team/julien-fournier.png",
    },
];

// Company values
const values = [
    {
        icon: Shield,
        title: "Confiance",
        description: "Chaque artisan est vérifié : assurance décennale, qualification RGE et avis clients authentiques.",
    },
    {
        icon: Target,
        title: "Transparence",
        description: "Devis détaillés, prix clairs et aucun frais caché. Vous savez exactement ce que vous payez.",
    },
    {
        icon: Heart,
        title: "Proximité",
        description: "Nous privilégions les artisans locaux pour un service réactif et un suivi personnalisé.",
    },
];

// Stats
const stats = [
    { value: "15 000+", label: "Projets réalisés" },
    { value: "2 500+", label: "Artisans partenaires" },
    { value: "4.8/5", label: "Note moyenne" },
    { value: "98%", label: "Clients satisfaits" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="gradient-hero text-white pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Des artisans de confiance pour vos projets
                        </h1>
                        <p className="text-xl text-navy-100 leading-relaxed">
                            Depuis 2019, Le Coin des Artisans facilite la mise en relation entre particuliers
                            et professionnels du bâtiment qualifiés. Notre mission : vous aider à concrétiser
                            vos projets en toute sérénité.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
                                <Building2 className="w-4 h-4 mr-2" />
                                Notre Histoire
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                                Né d'une frustration, devenu une solution
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    En 2019, Sébastien Moreau, conducteur de travaux depuis 12 ans, décide de rénover
                                    sa maison familiale. Comme beaucoup de Français, il se retrouve face à un défi :
                                    <strong> comment trouver des artisans compétents et honnêtes ?</strong>
                                </p>
                                <p>
                                    Après plusieurs mauvaises expériences (devis fantaisistes, artisans qui ne
                                    rappellent jamais, travaux bâclés), il décide de créer Le Coin des Artisans :
                                    une plateforme qui <strong>vérifie rigoureusement chaque professionnel</strong> avant
                                    de le mettre en relation avec des particuliers.
                                </p>
                                <p>
                                    Aujourd'hui, plus de 2 500 artisans qualifiés font partie de notre réseau,
                                    et nous avons accompagné plus de 15 000 projets de rénovation en France.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-amber-100 rounded-2xl -rotate-2" />
                            <Image
                                src="/images/notre-histoire-artisan.png"
                                alt="Artisan carreleur au travail dans une maison en rénovation"
                                width={600}
                                height={400}
                                className="relative rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            Nos valeurs
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Ce qui guide notre travail au quotidien et notre engagement envers vous.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl mb-6">
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-navy-100 text-navy-800 rounded-full text-sm font-semibold mb-6">
                            <Users className="w-4 h-4 mr-2" />
                            L'équipe
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            Les visages derrière Le Coin des Artisans
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Une équipe passionnée qui travaille chaque jour pour vous offrir le meilleur service.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={120}
                                    height={120}
                                    className="rounded-full mx-auto mb-4 ring-4 ring-amber-100"
                                />
                                <h3 className="text-lg font-bold text-navy-900">{member.name}</h3>
                                <p className="text-amber-600 font-medium text-sm mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Badges Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            Notre engagement qualité
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Chaque artisan de notre réseau est soumis à un processus de vérification strict.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-50 rounded-xl p-6 text-center">
                            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
                            <h3 className="font-bold text-navy-900 mb-2">Certification RGE</h3>
                            <p className="text-gray-600 text-sm">
                                Artisans Reconnus Garants de l'Environnement
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6 text-center">
                            <Shield className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                            <h3 className="font-bold text-navy-900 mb-2">Assurance Décennale</h3>
                            <p className="text-gray-600 text-sm">
                                Couverture vérifiée et à jour
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6 text-center">
                            <Award className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                            <h3 className="font-bold text-navy-900 mb-2">Qualibat</h3>
                            <p className="text-gray-600 text-sm">
                                Qualification professionnelle reconnue
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6 text-center">
                            <Users className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                            <h3 className="font-bold text-navy-900 mb-2">Avis Vérifiés</h3>
                            <p className="text-gray-600 text-sm">
                                Retours clients authentiques uniquement
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-navy-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Prêt à lancer votre projet ?
                    </h2>
                    <p className="text-xl text-navy-100 mb-8">
                        Recevez jusqu'à 3 devis gratuits d'artisans qualifiés près de chez vous.
                    </p>
                    <Link
                        href="/#services"
                        className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                    >
                        {settings.cta_main}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="mt-6 text-navy-300 text-sm">
                        100% gratuit • Sans engagement • Réponse sous 24h
                    </p>
                </div>
            </section>
        </>
    );
}

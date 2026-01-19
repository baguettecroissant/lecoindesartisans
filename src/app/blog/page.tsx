import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/data/blog-posts";
import { getBlogCategories, getSiteSettings } from "@/lib/data";
import BlogCard from "@/components/BlogCard";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
    title: "Blog - Conseils & Guides Travaux",
    description:
        "Guides pratiques, conseils d'experts et actualités pour réussir vos projets de rénovation. MaPrimeRénov, isolation, chauffage et plus.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Blog - Conseils & Guides Travaux",
        description: "Guides pratiques, conseils d'experts et actualités pour réussir vos projets de rénovation.",
        type: "website",
    },
};

export default function BlogPage() {
    const posts = getAllBlogPosts().sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
    const categories = getBlogCategories();
    const settings = getSiteSettings();

    return (
        <>
            {/* Hero */}
            <section className="gradient-hero text-white pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Blog & Conseils
                    </h1>
                    <p className="text-xl text-navy-100 max-w-2xl">
                        Guides pratiques, astuces d&apos;experts et actualités pour réussir tous vos projets de rénovation.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Posts Grid */}
                        <div className="lg:col-span-2">
                            {/* Categories */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-4 py-2 bg-amber-500 text-white rounded-full text-sm font-medium">
                                    Tous les articles
                                </span>
                                {categories.map((category) => (
                                    <span
                                        key={category.slug}
                                        className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-amber-50 cursor-pointer transition-colors"
                                    >
                                        {category.name}
                                    </span>
                                ))}
                            </div>

                            {/* Posts */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {posts.map((post) => (
                                    <BlogCard key={post.slug} post={post} />
                                ))}
                            </div>

                            {/* Load More */}
                            {posts.length >= 6 && (
                                <div className="text-center mt-10">
                                    <button className="px-6 py-3 bg-white text-navy-900 border border-gray-200 rounded-lg font-medium hover:border-amber-500 hover:text-amber-600 transition-colors">
                                        Charger plus d&apos;articles
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* CTA Widget */}
                            <div className="bg-white rounded-xl border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-navy-900 mb-2">
                                    Besoin d&apos;un devis ?
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Comparez les offres des meilleurs artisans de votre région.
                                </p>
                                <Link
                                    href="/#services"
                                    className="flex items-center justify-center w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors group"
                                >
                                    {settings.cta_main}
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Categories Widget */}
                            <div className="bg-white rounded-xl border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-navy-900 mb-4">
                                    Catégories
                                </h3>
                                <ul className="space-y-2">
                                    {categories.map((category) => (
                                        <li key={category.slug}>
                                            <span className="flex items-center justify-between text-gray-600 hover:text-amber-600 cursor-pointer">
                                                <span>{category.name}</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                            <p className="text-xs text-gray-400 mt-1">
                                                {category.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter Widget */}
                            <div className="bg-navy-900 rounded-xl p-6 text-white">
                                <h3 className="text-lg font-bold mb-2">Newsletter</h3>
                                <p className="text-navy-100 text-sm mb-4">
                                    Recevez nos meilleurs conseils travaux directement dans votre boîte mail.
                                </p>
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-navy-300 text-white mb-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                />
                                <button className="w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors">
                                    S&apos;inscrire
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

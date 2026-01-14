import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { getAllBlogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import { getSiteSettings } from "@/lib/data";
import LeadForm from "@/components/LeadForm";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const posts = getAllBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const post = getBlogPostBySlug(resolvedParams.slug);

    if (!post) {
        return {
            title: "Article non trouvé",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.publishedAt,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const resolvedParams = await params;
    const post = getBlogPostBySlug(resolvedParams.slug);
    const settings = getSiteSettings();
    const allPosts = getAllBlogPosts();

    if (!post) {
        notFound();
    }

    // Get related posts (excluding current)
    const relatedPosts = allPosts
        .filter((p) => p.slug !== post.slug)
        .slice(0, 2);

    return (
        <>
            {/* Header */}
            <section className="bg-gray-50 pt-28 pb-12 md:pt-36 md:pb-16 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-gray-600 hover:text-navy-900 mb-6"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour au blog
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                        {post.title}
                    </h1>

                    <div className="flex items-center space-x-4 text-gray-500 text-sm">
                        <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                        <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readingTime} de lecture
                        </span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Article Content */}
                        <div className="lg:col-span-2">
                            <article className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
                                {/* Featured Image */}
                                <div className="aspect-video relative rounded-lg mb-8 overflow-hidden bg-gray-100">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Article Body */}
                                <div
                                    className="prose max-w-none"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                                {/* CTA Box */}
                                <div className="mt-10 p-6 bg-amber-50 rounded-xl border border-amber-100">
                                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                                        Prêt à lancer votre projet ?
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Obtenez jusqu&apos;à 3 devis gratuits d&apos;artisans qualifiés pour vos travaux.
                                    </p>
                                    <Link
                                        href="/#services"
                                        className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors group"
                                    >
                                        {settings.cta_main}
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </article>

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <div className="mt-10">
                                    <h2 className="text-xl font-bold text-navy-900 mb-6">
                                        Articles similaires
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {relatedPosts.map((relatedPost) => (
                                            <Link
                                                key={relatedPost.slug}
                                                href={`/blog/${relatedPost.slug}`}
                                                className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg transition-shadow group"
                                            >
                                                <h3 className="font-semibold text-navy-900 group-hover:text-amber-600 transition-colors mb-2">
                                                    {relatedPost.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm line-clamp-2">
                                                    {relatedPost.excerpt}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-20">
                                <LeadForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

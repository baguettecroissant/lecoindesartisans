import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
            {/* Image placeholder */}
            <div className="aspect-video bg-gradient-to-br from-navy-100 to-navy-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-navy-400">
                    <span className="text-6xl">📚</span>
                </div>
            </div>

            <div className="p-5">
                {/* Meta */}
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        })}
                    </span>
                    <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readingTime}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-navy-900 group-hover:text-amber-600 transition-colors line-clamp-2 mb-2">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center text-amber-600 text-sm font-medium group-hover:underline">
                    Lire l&apos;article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
            </div>
        </Link>
    );
}

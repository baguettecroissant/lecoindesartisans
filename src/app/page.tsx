import Link from "next/link";
import { ArrowRight, Search, CheckCircle } from "lucide-react";
import { getSiteSettings, getAllServices, getUSPs } from "@/lib/data";
import { getAllBlogPosts } from "@/data/blog-posts";
import ServiceCard from "@/components/ServiceCard";
import USPCard from "@/components/USPCard";
import BlogCard from "@/components/BlogCard";
import LeadForm from "@/components/LeadForm";

export default function HomePage() {
  const settings = getSiteSettings();
  const services = getAllServices();
  const usps = getUSPs();
  const blogPosts = getAllBlogPosts().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Trouvez les <span className="text-amber-400">meilleurs artisans</span> près de chez vous
              </h1>
              <p className="text-lg md:text-xl text-navy-100 mb-8 max-w-lg mx-auto lg:mx-0">
                {settings.tagline} Comparez jusqu&apos;à 3 devis gratuits et sans engagement.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                {settings.trust_badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-amber-400 mr-2" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Quick Service Selector */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto lg:mx-0">
                <label className="block text-sm font-medium text-navy-100 mb-2">
                  De quoi avez-vous besoin ?
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-amber-500 appearance-none cursor-pointer">
                      <option value="">Choisir un service...</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.slug}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Link
                    href="#services"
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="hidden lg:block">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Nos Services de Rénovation
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des artisans qualifiés pour tous vos projets de travaux et d&apos;amélioration de l&apos;habitat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Obtenez vos devis en 3 étapes simples, sans engagement et 100% gratuit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {usps.map((usp, index) => (
              <USPCard key={index} usp={usp} index={index} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="#services"
              className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              {settings.cta_main}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-gray-500 text-sm mt-3">{settings.cta_sub}</p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Conseils & Actualités
              </h2>
              <p className="text-gray-600 text-lg">
                Guides pratiques pour réussir vos projets de rénovation.
              </p>
            </div>
            <Link
              href="/blog"
              className="mt-4 md:mt-0 text-amber-600 font-medium hover:text-amber-700 inline-flex items-center"
            >
              Voir tous les articles
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-xl text-navy-100 mb-8">
            Recevez jusqu&apos;à 3 devis gratuits d&apos;artisans qualifiés près de chez vous.
          </p>
          <Link
            href="#services"
            className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-lg group"
          >
            {settings.cta_main}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Mobile Lead Form */}
      <section className="lg:hidden py-12 bg-white">
        <div className="max-w-md mx-auto px-4">
          <LeadForm />
        </div>
      </section>
    </>
  );
}

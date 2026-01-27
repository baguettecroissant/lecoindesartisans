import Link from "next/link";
import Image from "next/image";
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
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/40 z-10" />
          <Image
            src="/hero-bg.png"
            alt="Rénovation intérieur moderne"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-amber-500/10 backdrop-blur border border-amber-500/20 rounded-full">
                  <span className="flex w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse" />
                  <span className="text-amber-400 font-semibold text-sm tracking-wide uppercase">
                    Réseau d'artisans vérifiés
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  L'excellence pour <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                    votre habitat
                  </span>
                </h1>

                <p className="text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Donnez vie à vos projets de rénovation avec les meilleurs experts de votre région. Qualité, garantie et accompagnement sur-mesure.
                </p>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">15k+</div>
                  <div className="text-sm text-gray-400">Projets réalisés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">4.8/5</div>
                  <div className="text-sm text-gray-400">Note moyenne</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-gray-400">Vérifiés RGE</div>
                </div>
              </div>
            </div>

            {/* Right: Lead Form Card */}
            <div className="hidden lg:block relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6 tracking-tight">
              Nos <span className="text-amber-600">Expertises</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Sélectionnez votre type de projet et accédez aux meilleurs artisans qualifiés de votre région.
            </p>
            <Link
              href="/service"
              className="inline-flex items-center px-6 py-3 bg-white border-2 border-amber-600 text-amber-600 font-bold rounded-xl hover:bg-amber-600 hover:text-white transition-all duration-300"
            >
              Voir tous nos services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6 leading-tight">
                  Projet réussi en <br />
                  <span className="text-amber-600">3 étapes simples</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Notre mission est de vous simplifier la vie en vous mettant en relation avec des professionnels de confiance, pré-sélectionnés pour leur sérieux.
                </p>
              </div>

              <div className="space-y-8">
                {usps.map((usp, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2 truncate">{usp.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{usp.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link
                  href="#services"
                  className="inline-flex items-center px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  {settings.cta_main}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              {/* Decorative element */}
              <div className="absolute -inset-4 bg-amber-100 rounded-[2rem] -rotate-2 scale-95" />
              <div className="relative bg-white p-4 rounded-[2rem] shadow-2xl border border-gray-100">
                <Image
                  src="/images/how-it-works.png"
                  alt="Couple de propriétaires discutant de leur projet de rénovation avec un artisan"
                  width={800}
                  height={500}
                  className="rounded-[1.5rem] w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block animate-bounce-slow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-navy-900 text-lg">Vérifié & Certifié</p>
                      <p className="text-gray-500">Garantie Qualité</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
                Le Magazine de <span className="text-amber-600">l'Artisanat</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-xl">
                Découvrez nos derniers guides et conseils pour vos travaux de rénovation et d'économies d'énergie.
              </p>
            </div>
            <Link
              href="/blog"
              className="mt-8 md:mt-0 px-6 py-3 border-2 border-amber-500 text-amber-600 font-bold rounded-xl hover:bg-amber-500 hover:text-white transition-all duration-300 inline-flex items-center"
            >
              Tous les conseils
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Dark Background with gradient overlay */}
        <div className="absolute inset-0 bg-navy-900">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-transparent opacity-50" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-amber-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            Redonnez vie à <br /> <span className="text-amber-500">votre habitat</span> aujourd'hui
          </h2>
          <p className="text-xl text-navy-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Obtenez jusqu'à 3 devis gratuits et comparatifs d'artisans locaux, sélectionnés et vérifiés par nos soins.
          </p>
          <Link
            href="#services"
            className="group relative inline-flex items-center px-10 py-5 bg-amber-500 hover:bg-amber-400 text-white font-black rounded-2xl shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 text-xl transform hover:-translate-y-1"
          >
            {settings.cta_main}
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
          </Link>
          <p className="mt-8 text-navy-300 font-medium tracking-wide">
            <span className="opacity-60">Gratuit et sans engagement</span>
          </p>
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

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Home } from "lucide-react";
import { getSiteSettings, getAllServices } from "@/lib/data";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const settings = getSiteSettings();
    const services = getAllServices();

    // Only allow transparent navbar on homepage and service pages (which have dark hero)
    const allowTransparent = pathname === "/" || pathname.startsWith("/service/");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    // Use scrolled styling if actually scrolled OR if on a page without dark hero
    const useScrolledStyle = isScrolled || !allowTransparent;

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-500 ${useScrolledStyle
                    ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Stylized Text Logo */}
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className={`p-1.5 rounded-lg transition-colors duration-300 ${useScrolledStyle ? "bg-navy-900 text-white" : "bg-amber-500 text-navy-900"
                                }`}>
                                <Home className="w-6 h-6" />
                            </div>
                            <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${useScrolledStyle ? "text-navy-900" : "text-white"
                                }`}>
                                Le Coin des <span className={useScrolledStyle ? "text-amber-600" : "text-amber-400"}>Artisans</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {/* Services Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <button
                                    className={`flex items-center space-x-1 font-semibold transition-colors duration-300 ${useScrolledStyle ? "text-gray-700 hover:text-navy-900" : "text-white/90 hover:text-white"
                                        }`}
                                >
                                    <span>Services</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                                </button>

                                {isServicesOpen && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                                        <div className="w-64 bg-white shadow-xl rounded-xl py-3 border border-gray-100 overflow-hidden">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.id}
                                                    href={`/service/${service.slug}/paris`}
                                                    className="block px-6 py-2.5 text-gray-700 hover:bg-amber-50 hover:text-navy-900 transition-colors"
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/simulateur"
                                className={`font-semibold transition-colors duration-300 ${useScrolledStyle ? "text-gray-700 hover:text-navy-900" : "text-white/90 hover:text-white"
                                    }`}
                            >
                                Simulateurs
                            </Link>

                            <Link
                                href="/blog"
                                className={`font-semibold transition-colors duration-300 ${useScrolledStyle ? "text-gray-700 hover:text-navy-900" : "text-white/90 hover:text-white"
                                    }`}
                            >
                                Blog
                            </Link>
/* Mobile part handled by separate chunk below */

                            {/* CTA Button */}
                            <Link
                                href="/#services"
                                className={`inline-flex items-center px-6 py-3 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 ${useScrolledStyle
                                    ? "bg-amber-500 text-white hover:bg-amber-600"
                                    : "bg-white text-navy-900 hover:bg-amber-400"
                                    }`}
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                {settings.cta_main}
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`md:hidden p-2 rounded-lg transition-colors z-[70] relative ${useScrolledStyle || isMenuOpen ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                                }`}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Overlay - Outside of Nav to avoid scroll transformation issues */}
            <div
                className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop Overlay */}
                <div
                    className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm shadow-2xl"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-6 border-b border-gray-100">
                            <span className="font-bold text-navy-900">Menu</span>
                        </div>

                        <div className="flex-1 overflow-y-auto py-6 px-6 space-y-8">
                            {/* Services Section */}
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                    Nos Services
                                </p>
                                <div className="grid grid-cols-1 gap-3">
                                    {services.map((service) => (
                                        <Link
                                            key={service.id}
                                            href={`/service/${service.slug}/paris`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-amber-50 text-navy-900 font-medium transition-colors"
                                        >
                                            {service.name}
                                            <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400" />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Other Links */}
                            <div className="space-y-4">
                                <Link
                                    href="/simulateur"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-xl font-bold text-navy-900 hover:text-amber-600 transition-colors"
                                >
                                    Simulateurs
                                </Link>
                                <Link
                                    href="/blog"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-xl font-bold text-navy-900 hover:text-amber-600 transition-colors"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/mentions-legales"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-gray-500 hover:text-navy-900 transition-colors"
                                >
                                    Mentions Légales
                                </Link>
                            </div>
                        </div>

                        {/* Mobile CTA */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50">
                            <Link
                                href="/#services"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-center w-full px-6 py-4 bg-amber-500 text-white font-bold rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                            >
                                <Phone className="w-5 h-5 mr-3" />
                                {settings.cta_main}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

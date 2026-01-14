"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { getSiteSettings, getAllServices } from "@/lib/data";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const settings = getSiteSettings();
    const services = getAllServices();

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-navy-900">
                            {settings.name}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Services Dropdown */}
                        <div className="relative">
                            <button
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                                className="flex items-center space-x-1 text-gray-700 hover:text-navy-900 font-medium transition-colors"
                            >
                                <span>Services</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {isServicesOpen && (
                                <div
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                    className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 mt-1 border border-gray-100"
                                >
                                    {services.map((service) => (
                                        <Link
                                            key={service.id}
                                            href={`/service/${service.slug}/paris`}
                                            className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-navy-900 transition-colors"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/blog"
                            className="text-gray-700 hover:text-navy-900 font-medium transition-colors"
                        >
                            Blog
                        </Link>

                        {/* CTA Button */}
                        <Link
                            href="/#services"
                            className="inline-flex items-center px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            {settings.cta_main}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4">
                    <div className="px-4 space-y-3">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                            Nos Services
                        </p>
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                href={`/service/${service.slug}/paris`}
                                className="block py-2 text-gray-700 hover:text-navy-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {service.name}
                            </Link>
                        ))}
                        <hr className="my-4" />
                        <Link
                            href="/blog"
                            className="block py-2 text-gray-700 hover:text-navy-900"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/#services"
                            className="block w-full text-center px-5 py-3 bg-amber-500 text-white font-semibold rounded-lg mt-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {settings.cta_main}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

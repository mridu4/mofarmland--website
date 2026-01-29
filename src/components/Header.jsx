'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { companyInfo } from '@/data/properties';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/properties', label: 'Properties' },
    { href: '/how-to-buy', label: 'How to Buy' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src={`${process.env.NODE_ENV === 'production' ? '/mofarmland--website' : ''}/mofarmland--website/images/logo.png`}
              alt="Mofarm Lands & Properties" 
              className={`h-12 transition-all ${scrolled ? '' : 'brightness-0 invert'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${scrolled ? 'text-charcoal hover:text-primary' : 'text-white hover:text-accent'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${companyInfo.phone}`} className={`btn ${scrolled ? 'btn-outline' : 'btn-outline-white'} text-sm py-2`}>
              Call Us
            </a>
            <a 
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent text-sm py-2"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 ${scrolled ? 'text-charcoal' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="py-3 text-charcoal hover:text-primary font-medium border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-4">
                <a href={`tel:${companyInfo.phone}`} className="btn btn-outline flex-1 text-sm">
                  Call Us
                </a>
                <a 
                  href={`https://wa.me/${companyInfo.whatsapp}`}
                  className="btn btn-accent flex-1 text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

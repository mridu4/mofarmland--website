import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import PropertyCard from '@/components/PropertyCard';
import { properties, companyInfo, formatPrice, testimonials } from '@/data/properties';
import Link from 'next/link';

export default function Home() {
  const featuredProperties = properties.slice(0, 6);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}} />
        </div>

        {/* Hero Image */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent z-10" />
          <img
            src="/mofarmland--website/images/subukia.jpg"
            alt="Mofarm properties in Kenya highlands"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Kenya's Trusted Land Company</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Own Your Piece of{' '}
              <span className="text-accent">Kenya's Highlands</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Verified title deeds, transparent pricing, and flexible 6-month payment plans. Plots starting from just <span className="text-accent font-semibold">KES 200,000</span>.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/properties" className="btn btn-accent text-lg px-8">
                View Properties →
              </Link>
              <a 
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white text-lg px-8"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12">
              <div>
                <div className="text-4xl font-display font-bold text-accent">9<sup className="text-xl">+</sup></div>
                <div className="text-white/60 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent">5</div>
                <div className="text-white/60 text-sm">Counties</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent">200K</div>
                <div className="text-white/60 text-sm">Starting Price</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Choose <span className="text-primary">Mofarm?</span></h2>
            <p className="section-subtitle mx-auto">We make land ownership simple, transparent, and affordable for every Kenyan.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '✓', title: 'Verified Titles', desc: 'All our properties come with genuine, verified title deeds' },
              { icon: '💰', title: 'Flexible Payments', desc: '6-month installment plans with affordable deposits' },
              { icon: '🚗', title: 'Free Site Visits', desc: 'We organize free transport to visit any of our projects' },
              { icon: '📞', title: '24/7 Support', desc: 'Our team is always available to answer your questions' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <h2 className="section-title mb-4">Featured <span className="text-primary">Properties</span></h2>
              <p className="section-subtitle">Explore our most popular land projects across Kenya's highlands.</p>
            </div>
            <Link href="/properties" className="btn btn-outline">
              View All Properties →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">How It <span className="text-accent">Works</span></h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Four simple steps to owning your dream plot</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Choose Your Plot', desc: 'Browse our properties and select your preferred location' },
              { step: '02', title: 'Book a Site Visit', desc: 'We arrange free transport to visit the property' },
              { step: '03', title: 'Pay Deposit', desc: 'Secure your plot with a deposit and sign the agreement' },
              { step: '04', title: 'Get Your Title', desc: 'Complete payments and receive your title deed' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">What Our <span className="text-primary">Clients Say</span></h2>
            <p className="section-subtitle mx-auto">Join hundreds of satisfied landowners who trusted Mofarm</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Own Land in Kenya?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Take the first step towards your dream property. Contact us today for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-accent hover:bg-gray-100 text-lg px-8"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <a href={`tel:${companyInfo.phone}`} className="btn border-2 border-white text-white hover:bg-white hover:text-accent text-lg px-8">
              Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

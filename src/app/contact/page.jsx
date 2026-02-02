import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { companyInfo } from '@/data/properties';

export default function ContactPage() {
  return (
    <>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Get in touch with our team. We're here to help you find your perfect plot.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: '📞', 
                title: 'Call Us', 
                content: companyInfo.phone,
                link: `tel:${companyInfo.phone}`,
                action: 'Call Now'
              },
              { 
                icon: '💬', 
                title: 'WhatsApp', 
                content: 'Chat with us 24/7',
                link: `https://wa.me/${companyInfo.whatsapp}`,
                action: 'Start Chat'
              },
              { 
                icon: '✉️', 
                title: 'Email', 
                content: companyInfo.email,
                link: `mailto:${companyInfo.email}`,
                action: 'Send Email'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.content}</p>
                <a href={item.link} className="btn btn-accent w-full">{item.action}</a>
              </div>
            ))}
          </div>

          {/* Office Location with Pictures */}
          <div className="bg-cream p-8 rounded-2xl mb-16">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">Visit Our <span className="text-primary">Office</span></h2>
              <p className="text-gray-600 text-lg">{companyInfo.address}</p>
            </div>

            {/* Office Images Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img 
                  src="/mofarmland--website/images/office.jpg" 
                  alt="Mofarm Office - Main Entrance"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium">Main Office Building</p>
                  <p className="text-white/70 text-sm">Viken Thirty Industrial Park</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img 
                  src="/mofarmland--website/images/office_2.jpg" 
                  alt="Mofarm Office - Interior"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium">Office Interior</p>
                  <p className="text-white/70 text-sm">Professional & Welcoming Environment</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-4">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <div>
                      <span className="font-medium text-charcoal">Monday - Friday:</span>
                      <span className="text-gray-600 ml-2">8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <div>
                      <span className="font-medium text-charcoal">Saturday:</span>
                      <span className="text-gray-600 ml-2">9:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <div>
                      <span className="font-medium text-charcoal">Sunday:</span>
                      <span className="text-gray-600 ml-2">By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-4">Getting Here</h3>
                <p className="text-gray-600 mb-4">
                  Our office is located at Viken Thirty Industrial Park, along Outer Ring Road, Nairobi. 
                  Look for our green branded entrance with the Mofarm logo.
                </p>
                <a 
                  href="https://maps.google.com/?q=Viken+Thirty+Industrial+Park+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Book Site Visit */}
          <div className="bg-accent text-white p-8 rounded-2xl text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Book a Free Site Visit</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Want to see our properties in person? We organize free transport to visit any of our projects. Contact us to book your site visit today!
            </p>
            <a 
              href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%20Mofarm!%20I%20would%20like%20to%20book%20a%20free%20site%20visit.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-accent hover:bg-gray-100 px-8"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Book Site Visit on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

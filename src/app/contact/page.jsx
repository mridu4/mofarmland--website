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

          {/* Office Location */}
          <div className="bg-cream p-8 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="section-title mb-4">Visit Our <span className="text-primary">Office</span></h2>
                <p className="text-gray-600 mb-6">{companyInfo.address}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <span>Saturday: 9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <span>Sunday: By Appointment</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/mofarmland--website/images/nanyuki.jpg" 
                  alt="Mofarm vehicle at site"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Book Site Visit */}
          <div className="mt-16 bg-accent text-white p-8 rounded-2xl text-center">
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

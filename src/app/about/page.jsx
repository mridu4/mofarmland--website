import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { companyInfo } from '@/data/properties';

export default function AboutPage() {
  return (
    <>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-accent">Mofarm</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Kenya's trusted partner in making land ownership a reality for every Kenyan
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Our <span className="text-primary">Story</span></h2>
              <p className="text-gray-600 mb-4">
                Mofarm Lands & Properties Ltd was founded with a simple mission: to make land ownership accessible to every Kenyan. We understand that owning land is a dream for many, and we're committed to turning those dreams into reality.
              </p>
              <p className="text-gray-600 mb-4">
                With projects spanning across Nakuru, Nyeri, Laikipia, and Murang'a counties, we offer a diverse portfolio of properties in Kenya's most beautiful highlands. From the serene Subukia Valley to the majestic views of Mt. Kenya in Nanyuki, our properties are carefully selected for their potential and value.
              </p>
              <p className="text-gray-600">
                Our commitment to transparency, verified title deeds, and flexible payment plans has earned us the trust of hundreds of happy landowners across Kenya.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/mofarmland--website/images/subukia2.jpg" 
                alt="Mofarm properties"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Happy Landowners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our <span className="text-primary">Values</span></h2>
            <p className="section-subtitle mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Transparency', desc: 'Clear pricing, genuine title deeds, and honest communication at every step of your journey.', icon: '🔍' },
              { title: 'Integrity', desc: 'We do what we say. Every promise made is a promise kept.', icon: '🤝' },
              { title: 'Customer First', desc: 'Your dream of land ownership drives everything we do. We\'re here to serve you.', icon: '❤️' },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '9+', label: 'Active Projects' },
              { number: '5', label: 'Counties Covered' },
              { number: '500+', label: 'Happy Clients' },
              { number: '6+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { companyInfo } from '@/data/properties';

export default function HowToBuyPage() {
  const steps = [
    { number: '01', title: 'Browse Properties', desc: 'Explore our available plots online or visit our office to learn about current projects.' },
    { number: '02', title: 'Choose Your Plot', desc: 'Select a property that fits your budget and preferences. Our team can help you decide.' },
    { number: '03', title: 'Book a Site Visit', desc: 'We organize FREE transport to visit any property. See the land before you buy.' },
    { number: '04', title: 'Pay Your Deposit', desc: 'Secure your plot with a deposit. We offer flexible payment options.' },
    { number: '05', title: 'Sign Agreement', desc: 'Sign the sale agreement with all terms clearly stated. No hidden fees.' },
    { number: '06', title: 'Complete Payments', desc: 'Pay the balance over 6 months or as agreed. We\'ll keep you updated.' },
    { number: '07', title: 'Receive Title Deed', desc: 'Once payments are complete, we transfer the title deed to your name.' },
  ];

  const faqs = [
    { q: 'What documents do I need to buy land?', a: 'You need a valid national ID or passport, and KRA PIN certificate.' },
    { q: 'How long does it take to get the title deed?', a: 'Title deeds are processed within 2-3 months after completing all payments.' },
    { q: 'Can I pay in installments?', a: 'Yes! We offer flexible 6-month payment plans on all properties.' },
    { q: 'Is the land freehold?', a: 'Yes, all our properties come with freehold title deeds.' },
    { q: 'Can I visit the site before buying?', a: 'Absolutely! We offer FREE site visits with transport provided.' },
  ];

  return (
    <>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            How to <span className="text-accent">Buy</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Your step-by-step guide to owning land with Mofarm
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <div className="flex-grow pt-3">
                  <h3 className="font-display font-semibold text-xl text-charcoal mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Payment <span className="text-primary">Methods</span></h2>
            <p className="section-subtitle mx-auto">We accept multiple payment options for your convenience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'M-PESA', desc: 'Pay directly via M-PESA to our business number', icon: '📱' },
              { title: 'Bank Transfer', desc: 'Transfer to our KCB or Equity bank accounts', icon: '🏦' },
              { title: 'Cheque', desc: 'Bank cheques accepted at our office', icon: '📝' },
            ].map((method, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-lg text-charcoal mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <a 
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

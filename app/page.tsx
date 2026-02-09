import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Testimonials from '@/components/Testimonials';
import { Hammer, Users, Calendar, Award } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <WhatsAppButton />
      <HeroSection />

      {/* Services / Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We bring decades of experience and a commitment to quality in every brick we lay.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Hammer, title: 'Expert Craftsmanship', desc: 'Superior quality in every detail of construction.' },
              { icon: Users, title: 'Dedicated Team', desc: 'Experienced professionals content to your project.' },
              { icon: Calendar, title: 'On-Time Delivery', desc: 'We respect deadlines and deliver projects on schedule.' },
              { icon: Award, title: 'Award Winning', desc: ' recognized for safety and design excellence.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-12 w-12 text-amber-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder until we have real uploads, or use unsplash */}
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop"
                alt="Construction Site"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Building Relationships, Not Just Structures</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At CivilCraft, we believe that every project is a partnership. From the initial blueprint to the final walkthrough, we work closely with our clients to ensure their vision becomes a reality.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our portfolio spans residential complexes, commercial towers, and industrial facilities. We pride ourselves on using sustainable materials and modern techniques.
              </p>
              <a href="/about" className="text-amber-600 font-bold hover:text-amber-700 hover:underline text-lg">
                Learn More About Us &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Footer />
    </main>
  );
}

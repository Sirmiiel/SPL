import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CTAButton from "../components/CTAButton.jsx";
import TrustBadges from "../components/TrustBadges.jsx";
import Silk from "../components/Silk.jsx";

export default function About() {
  const { t } = useTranslation();
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          const animationType = element.getAttribute('data-animation') || 'fadeInUp';
          const delay = element.getAttribute('data-delay');
          
          if (delay) {
            element.style.animationDelay = `${parseInt(delay, 10)}ms`;
          }
          
          element.classList.add(`animate-${animationType}`);
          
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Observe all elements with data-animation
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#E4F6F1] to-white overflow-hidden">
        {/* Silk Background */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={2}
            scale={0.3}
            color="#E4F6F1"
            noiseIntensity={0.3}
            rotation={45}
            className="opacity-10"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              ref={el => sectionRefs.current[0] = el}
              data-animation="fadeInUp"
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-display opacity-0"
            >
              {t('about.title')}
            </h1>
            <p 
              ref={el => sectionRefs.current[1] = el}
              data-animation="fadeInUp"
              data-delay="200"
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed opacity-0"
            >
              {t('about.body')}
            </p>
            <div 
              ref={el => sectionRefs.current[2] = el}
              data-animation="fadeInUp"
              data-delay="400"
              className="opacity-0"
            >
              <TrustBadges />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Mission Content */}
            <div 
              ref={el => sectionRefs.current[3] = el}
              data-animation="slideInLeft"
              className="opacity-0"
            >
              <h2 
                data-animation="fadeInUp"
                data-delay="200"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display opacity-0"
              >
                Our Mission
              </h2>
              <p 
                data-animation="fadeInUp"
                data-delay="400"
                className="text-lg text-gray-700 mb-6 leading-relaxed opacity-0"
              >
                We started with a promise to raise the standard of commercial cleaning in Kuopio. 
                Our team combines experience, transparency, and respect for the environment.
              </p>
              <p 
                data-animation="fadeInUp"
                data-delay="600"
                className="text-lg text-gray-700 mb-8 leading-relaxed opacity-0"
              >
                Every cleaning service we provide is backed by our commitment to quality, 
                reliability, and environmental responsibility.
              </p>
              <div 
                data-animation="fadeInUp"
                data-delay="800"
                className="opacity-0"
              >
                <CTAButton text="Get a Quote" href="/quote" />
              </div>
            </div>

            {/* Mission Image */}
            <div 
              ref={el => sectionRefs.current[4] = el}
              data-animation="slideInRight"
              data-delay="300"
              className="opacity-0"
            >
              <div className="relative">
                <div className="rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
                  <img
                    src="/images/image2.webp"
                    alt="Our cleaning mission"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-softgreen rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-700">Eco-Friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 
            ref={el => sectionRefs.current[5] = el}
            data-animation="bounceIn"
            className="text-3xl md:text-4xl font-bold text-center mb-16 font-display opacity-0"
          >
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Environmental Responsibility",
                description: "We use eco-friendly products and sustainable practices to protect our environment.",
                color: "bg-softgreen"
              },
              {
                icon: "⏰",
                title: "Reliability & Punctuality",
                description: "We value your time and always deliver our services on schedule.",
                color: "bg-lightblue"
              },
              {
                icon: "✨",
                title: "Quality Excellence",
                description: "Every detail matters. We maintain the highest standards in all our services.",
                color: "bg-purple-500"
              }
            ].map((value, idx) => (
              <div
                key={idx}
                ref={el => sectionRefs.current[6 + idx] = el}
                data-animation="flipInX"
                data-delay={idx * 200}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 
                  transition-all duration-500 opacity-0 text-center"
              >
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 
            ref={el => sectionRefs.current[9] = el}
            data-animation="fadeInUp"
            className="text-3xl md:text-4xl font-bold text-center mb-16 font-display opacity-0"
          >
            Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Professional Team",
                role: "Cleaning Specialists",
                image: "/images/nico.webp"
              },
              {
                name: "Expert Staff",
                role: "Quality Assurance",
                image: "/images/rea.webp"
              },
              {
                name: "Dedicated Crew",
                role: "Customer Service",
                image: "/images/ritva.webp"
              }
            ].map((member, idx) => (
              <div
                key={idx}
                ref={el => sectionRefs.current[10 + idx] = el}
                data-animation="zoomIn"
                data-delay={idx * 300}
                className="text-center opacity-0"
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-lightblue rounded-full p-2">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lightblue to-softgreen">
        <div className="container mx-auto px-6 text-center">
          <h2 
            ref={el => sectionRefs.current[13] = el}
            data-animation="fadeInUp"
            className="text-3xl md:text-4xl font-bold text-white mb-6 font-display opacity-0"
          >
            Ready to Experience Professional Cleaning?
          </h2>
          <p 
            data-animation="fadeInUp"
            data-delay="200"
            className="text-xl text-white mb-8 opacity-0 max-w-2xl mx-auto"
          >
            Contact us today for a free consultation and quote for your business.
          </p>
          <div 
            data-animation="fadeInUp"
            data-delay="400"
            className="opacity-0"
          >
            <CTAButton 
              text="Get Started Today" 
              href="/contact" 
              className="bg-white text-lightblue hover:bg-gray-100"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
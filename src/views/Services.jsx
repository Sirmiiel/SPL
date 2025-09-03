import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CTAButton from "../components/CTAButton.jsx";
import TrustBadges from "../components/TrustBadges.jsx";
import Silk from "../components/Silk.jsx";

export default function Services() {
  const { t } = useTranslation();
  const sectionRefs = useRef([]);

  const services = [
    {
      title: t('services.items.restaurant.title'),
      description: t('services.items.restaurant.description'),
      icon: "🍽️",
      price: "€35-65/hour",
      duration: "2-4 hours",
      features: ["Kitchen deep cleaning", "Dining area sanitization", "Exhaust system cleaning", "Food safety compliance"],
      image: "/images/image4.webp",
      color: "from-orange-400 to-red-500"
    },
    {
      title: t('services.items.office.title'),
      description: t('services.items.office.description'),
      icon: "🏢",
      price: "€35-50/hour",
      duration: "1-3 hours",
      features: ["Daily/weekly cleaning", "Desk sanitization", "Common area maintenance", "Trash removal"],
      image: "/images/image5.webp",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: t('services.items.deep.title'),
      description: t('services.items.deep.description'),
      icon: "🧼",
      price: "€45-75/hour",
      duration: "4-8 hours",
      features: ["Floor-to-ceiling cleaning", "Equipment deep cleaning", "Sanitization", "Odor elimination"],
      image: "/images/image6.webp",
      color: "from-green-400 to-teal-500"
    },
    {
      title: t('services.items.window.title'),
      description: t('services.items.window.description'),
      icon: "🪟",
      price: "€25-45/hour",
      duration: "1-3 hours",
      features: ["Interior & exterior", "Screen cleaning", "Frame sanitization", "Streak-free finish"],
      image: "/images/image.webp",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: t('services.items.special.title'),
      description: t('services.items.special.description'),
      icon: "🏭",
      price: "Custom quote",
      duration: "Varies",
      features: ["Custom solutions", "Specialized equipment", "Compliance focused", "24/7 availability"],
      image: "/images/image2.webp",
      color: "from-gray-400 to-gray-600"
    },
  ];

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
              {t('services.title')}
            </h1>
            <p 
              ref={el => sectionRefs.current[1] = el}
              data-animation="fadeInUp"
              data-delay="200"
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed opacity-0"
            >
              {t('services.pricingHint')}
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                ref={el => sectionRefs.current[3 + index] = el}
                data-animation="flipInX"
                data-delay={index * 200}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 
                  transform hover:-translate-y-2 opacity-0 overflow-hidden border border-gray-100"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20`}></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <h2 
                    data-animation="fadeInUp"
                    data-delay="200"
                    className="text-2xl font-bold text-gray-900 mb-4 opacity-0"
                  >
                    {service.title}
                  </h2>
                  <p 
                    data-animation="fadeInUp"
                    data-delay="400"
                    className="text-gray-600 mb-6 text-lg leading-relaxed opacity-0"
                  >
                    {service.description}
                  </p>
                  
                  {/* Pricing & Duration */}
                  <div 
                    data-animation="fadeInUp"
                    data-delay="600"
                    className="flex gap-4 mb-6 opacity-0"
                  >
                    <span className="bg-gradient-to-r from-lightblue to-blue-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                      {service.price}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium text-sm">
                      {service.duration}
                    </span>
                  </div>

                  {/* Features */}
                  <div 
                    data-animation="fadeInUp"
                    data-delay="800"
                    className="mb-8 opacity-0"
                  >
                    <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-softgreen rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div 
                    data-animation="fadeInUp"
                    data-delay="1000"
                    className="opacity-0"
                  >
                    <CTAButton 
                      text={t('services.getQuote')} 
                      href="/contact"
                      className="w-full justify-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div 
            ref={el => sectionRefs.current[8] = el}
            data-animation="zoomIn"
            className="max-w-4xl mx-auto text-center bg-white rounded-3xl shadow-2xl p-12 opacity-0"
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-lightblue to-softgreen rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚙️</span>
              </div>
              <h2 
                data-animation="fadeInUp"
                data-delay="200"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display opacity-0"
              >
                {t('services.needCustom')}
              </h2>
              <p 
                data-animation="fadeInUp"
                data-delay="400"
                className="text-xl text-gray-600 mb-8 leading-relaxed opacity-0"
              >
                {t('services.customDescription')}
              </p>
            </div>

            <div 
              data-animation="fadeInUp"
              data-delay="600"
              className="flex flex-col sm:flex-row gap-6 justify-center opacity-0"
            >
              <CTAButton 
                text={t('services.contactUs')} 
                href="/contact"
                className="bg-gradient-to-r from-lightblue to-blue-500 hover:from-blue-500 hover:to-blue-600"
              />
              <CTAButton 
                text={t('services.getQuote')} 
                href="/quote"
                className="bg-gradient-to-r from-softgreen to-green-500 hover:from-green-500 hover:to-green-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 
            ref={el => sectionRefs.current[9] = el}
            data-animation="bounceIn"
            className="text-3xl md:text-4xl font-bold text-center mb-16 font-display opacity-0"
          >
            Why Choose Our Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Licensed & Insured",
                description: "Fully licensed and insured for your peace of mind."
              },
              {
                icon: "🌱",
                title: "Eco-Friendly",
                description: "Using environmentally safe products and practices."
              },
              {
                icon: "⏰",
                title: "Reliable & Punctual",
                description: "Always on time and committed to quality service."
              }
            ].map((benefit, idx) => (
              <div
                key={idx}
                ref={el => sectionRefs.current[10 + idx] = el}
                data-animation="fadeInUp"
                data-delay={idx * 200}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white 
                  shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 opacity-0"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-lightblue to-softgreen rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import CTAButton from "../components/CTAButton";
import TrustBadges from "../components/TrustBadges";
import Silk from "../components/Silk.jsx";

export default function Contact() {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const sectionRefs = useRef([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log(data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

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

  if (isSubmitted) {
    return (
      <div className="overflow-hidden">
        <section className="relative py-20 bg-gradient-to-br from-[#E4F6F1] to-white overflow-hidden">
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
            <div 
              ref={el => sectionRefs.current[0] = el}
              data-animation="zoomIn"
              className="max-w-2xl mx-auto text-center bg-white rounded-3xl shadow-2xl p-12 opacity-0"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-softgreen to-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl">✅</span>
              </div>
              <h1 
                data-animation="fadeInUp"
                data-delay="200"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display opacity-0"
              >
                Message Sent!
              </h1>
              <p 
                data-animation="fadeInUp"
                data-delay="400"
                className="text-xl text-gray-600 mb-8 leading-relaxed opacity-0"
              >
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
              <div 
                data-animation="fadeInUp"
                data-delay="600"
                className="opacity-0"
              >
                <TrustBadges />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

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
              {t('contact.title')}
            </h1>
            <p 
              ref={el => sectionRefs.current[1] = el}
              data-animation="fadeInUp"
              data-delay="200"
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed opacity-0"
            >
              Get in touch with our team. We're here to help with all your cleaning needs.
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 
            ref={el => sectionRefs.current[3] = el}
            data-animation="bounceIn"
            className="text-3xl md:text-4xl font-bold text-center mb-16 font-display opacity-0"
          >
            Meet Our Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: '/images/rea.webp',
                name: 'Rea',
                title: 'Cleaning Specialist',
                email: 'rea@lupaus.fi',
                phone: '+358 40 123 456',
                description: 'Expert in restaurant and commercial cleaning'
              },
              {
                img: '/images/ritva.webp',
                name: 'Ritva',
                title: 'Quality Manager',
                email: 'ritva@lupaus.fi',
                phone: '+358 40 654 321',
                description: 'Ensuring the highest standards in every service'
              },
              {
                img: '/images/nico.webp',
                name: 'Nico',
                title: 'Operations Manager',
                email: 'nico@lupaus.fi',
                phone: '+358 40 987 654',
                description: 'Coordinating and managing all cleaning operations'
              },
            ].map((member, idx) => (
              <div
                key={idx}
                ref={el => sectionRefs.current[4 + idx] = el}
                data-animation="flipInX"
                data-delay={idx * 200}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 
                  transform hover:-translate-y-2 opacity-0 p-8 text-center border border-gray-100"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-lightblue rounded-full p-2">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <h3 
                  data-animation="fadeInUp"
                  data-delay="200"
                  className="text-xl font-bold text-gray-900 mb-2 opacity-0"
                >
                  {member.name}
                </h3>
                <p 
                  data-animation="fadeInUp"
                  data-delay="400"
                  className="text-softgreen font-semibold mb-3 opacity-0"
                >
                  {member.title}
                </p>
                <p 
                  data-animation="fadeInUp"
                  data-delay="600"
                  className="text-gray-600 text-sm mb-6 opacity-0"
                >
                  {member.description}
                </p>
                
                <div 
                  data-animation="fadeInUp"
                  data-delay="800"
                  className="space-y-2 opacity-0"
                >
                  <a 
                    href={`mailto:${member.email}`} 
                    className="block text-lightblue hover:text-blue-700 transition-colors duration-300 font-medium"
                  >
                    {member.email}
                  </a>
                  <a 
                    href={`tel:${member.phone}`} 
                    className="block text-gray-700 hover:text-lightblue transition-colors duration-300"
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Contact Form */}
              <div 
                ref={el => sectionRefs.current[7] = el}
                data-animation="slideInLeft"
                className="opacity-0"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <h2 
                    data-animation="fadeInUp"
                    data-delay="200"
                    className="text-2xl font-bold text-gray-900 mb-6 font-display opacity-0"
                  >
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-3">
                          {t('contact.name')} *
                        </label>
                        <input 
                          {...register("name", { required: 'Name is required' })}
                          placeholder="Your full name"
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-lightblue focus:border-transparent transition-all duration-300 ${
                            errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-3">
                          {t('contact.email')} *
                        </label>
                        <input 
                          type="email"
                          {...register("email", { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          placeholder="your@email.com"
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-lightblue focus:border-transparent transition-all duration-300 ${
                            errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3">
                        {t('contact.service')}
                      </label>
                      <select 
                        {...register("service")}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-lightblue focus:border-transparent transition-all duration-300 hover:border-gray-300"
                      >
                        <option value="">Select a service (optional)</option>
                        <option value="restaurant">{t('services.items.restaurant.title')}</option>
                        <option value="office">{t('services.items.office.title')}</option>
                        <option value="deep">{t('services.items.deep.title')}</option>
                        <option value="window">{t('services.items.window.title')}</option>
                        <option value="special">{t('services.items.special.title')}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3">
                        {t('contact.message')} *
                      </label>
                      <textarea 
                        rows="5"
                        {...register("message", { required: 'Message is required' })}
                        placeholder="Tell us about your cleaning needs, questions, or any specific requirements..."
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-lightblue focus:border-transparent transition-all duration-300 resize-none ${
                          errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-lightblue to-blue-500 hover:from-blue-500 hover:to-blue-600 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Sending...
                        </div>
                      ) : (
                        t('contact.send')
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info & Map */}
              <div 
                ref={el => sectionRefs.current[8] = el}
                data-animation="slideInRight"
                data-delay="300"
                className="space-y-8 opacity-0"
              >
                {/* Contact Information */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 
                    data-animation="fadeInUp"
                    data-delay="400"
                    className="text-2xl font-bold text-gray-900 mb-6 font-display opacity-0"
                  >
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { icon: "📞", label: "Phone", value: "+358 40 123 4567", href: "tel:+358401234567" },
                      { icon: "📧", label: "Email", value: "info@lupaus.fi", href: "mailto:info@lupaus.fi" },
                      { icon: "📍", label: "Service Area", value: "Kuopio, Finland", href: null },
                      { icon: "", label: "Business Hours", value: "Mon-Fri: 8AM-6PM", href: null }
                    ].map((contact, idx) => (
                      <div 
                        key={idx}
                        data-animation="fadeInUp"
                        data-delay={500 + idx * 100}
                        className="flex items-center gap-4 opacity-0"
                      >
                        <div className="w-12 h-12 bg-lightblue rounded-full flex items-center justify-center">
                          <span className="text-xl">{contact.icon}</span>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">{contact.label}</p>
                          {contact.href ? (
                            <a 
                              href={contact.href}
                              className="text-gray-900 font-semibold hover:text-lightblue transition-colors duration-300"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-gray-900 font-semibold">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-6 border-b border-gray-100">
                    <h3 
                      data-animation="fadeInUp"
                      data-delay="900"
                      className="text-xl font-bold text-gray-900 font-display opacity-0"
                    >
                      Our Service Area
                    </h3>
                    <p 
                      data-animation="fadeInUp"
                      data-delay="1000"
                      className="text-gray-600 mt-2 opacity-0"
                    >
                      Serving Kuopio and surrounding areas
                    </p>
                  </div>
                  <div className="aspect-video">
                    <iframe
                      title="Kuopio Service Area"
                      className="w-full h-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18663.848947864524!2d27.6637!3d62.8924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468424f152d0f24d%3A0x400b551554bbb90!2sKuopio!5e0!3m2!1sen!2sfi!4v1700000000000"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-softgreen/10 to-green-50 rounded-2xl p-8 border border-softgreen/20">
                  <h3 
                    data-animation="fadeInUp"
                    data-delay="1100"
                    className="text-xl font-bold text-gray-900 mb-4 font-display opacity-0"
                  >
                    Quick Actions
                  </h3>
                  <div 
                    data-animation="fadeInUp"
                    data-delay="1200"
                    className="space-y-4 opacity-0"
                  >
                    <CTAButton 
                      text="Request a Quote" 
                      href="/quote"
                      className="w-full justify-center bg-gradient-to-r from-softgreen to-green-500 hover:from-green-500 hover:to-green-600"
                    />
                    <CTAButton 
                      text="View Services" 
                      href="/services"
                      className="w-full justify-center bg-white text-softgreen border-2 border-softgreen hover:bg-softgreen hover:text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
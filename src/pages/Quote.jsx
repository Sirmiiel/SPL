import { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import CTAButton from "../components/CTAButton";
import TrustBadges from "../components/TrustBadges";
import Silk from "../components/Silk.jsx";

export default function Quote() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { t } = useTranslation();
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
                Thank You!
              </h1>
              <p 
                data-animation="fadeInUp"
                data-delay="400"
                className="text-xl text-gray-600 mb-8 leading-relaxed opacity-0"
              >
                Your quote request has been submitted successfully. We'll get back to you within 24 hours with a detailed proposal.
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
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 
              ref={el => sectionRefs.current[0] = el}
              data-animation="fadeInUp"
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-display opacity-0"
            >
              {t('quote.title')}
            </h1>
            <p 
              ref={el => sectionRefs.current[1] = el}
              data-animation="fadeInUp"
              data-delay="200"
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed opacity-0"
            >
              Get a personalized quote for your cleaning needs. Fill out the form below and we'll provide you with a detailed estimate.
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

      {/* Quote Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Form */}
              <div 
                ref={el => sectionRefs.current[3] = el}
                data-animation="slideInLeft"
                className="opacity-0"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <h2 
                    data-animation="fadeInUp"
                    data-delay="200"
                    className="text-2xl font-bold text-gray-900 mb-6 font-display opacity-0"
                  >
                    Request Your Quote
                  </h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3">
                        {t('quote.service')} *
                      </label>
                      <select 
                        {...register('service', { required: 'Please select a service' })}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-lightblue focus:border-transparent transition-all duration-300 ${
                          errors.service ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <option value="">Select a service...</option>
                        <option value="restaurant">{t('services.items.restaurant.title')}</option>
                        <option value="office">{t('services.items.office.title')}</option>
                        <option value="deep">{t('services.items.deep.title')}</option>
                        <option value="window">{t('services.items.window.title')}</option>
                        <option value="special">{t('services.items.special.title')}</option>
                      </select>
                      {errors.service && (
                        <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-3">
                          {t('quote.squareMeters')} *
                        </label>
                        <input 
                          type="number"
                          {...register('sqm', { 
                            required: 'Square meters is required',
                            min: { value: 1, message: 'Must be at least 1 sqm' }
                          })}
                          placeholder="e.g., 150"
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-lightblue focus:border-transparent transition-all duration-300 ${
                            errors.sqm ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        />
                        {errors.sqm && (
                          <p className="text-red-500 text-sm mt-1">{errors.sqm.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-3">
                          {t('quote.frequency')} *
                        </label>
                        <select 
                          {...register('frequency', { required: 'Please select frequency' })}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-lightblue focus:border-transparent transition-all duration-300 ${
                            errors.frequency ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <option value="">Select frequency...</option>
                          <option value="once">{t('quote.freq.once')}</option>
                          <option value="weekly">{t('quote.freq.weekly')}</option>
                          <option value="monthly">{t('quote.freq.monthly')}</option>
                        </select>
                        {errors.frequency && (
                          <p className="text-red-500 text-sm mt-1">{errors.frequency.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-3">
                          {t('contact.name')} *
                        </label>
                        <input 
                          {...register('name', { required: 'Name is required' })}
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
                          {...register('email', { 
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

                    {/* Additional Message */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3">
                        Additional Details
                      </label>
                      <textarea 
                        {...register('message')}
                        rows="4"
                        placeholder="Tell us more about your specific needs, special requirements, or any questions you have..."
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-lightblue focus:border-transparent transition-all duration-300 hover:border-gray-300 resize-none"
                      />
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
                          Processing...
                        </div>
                      ) : (
                        t('quote.request')
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Info Panel */}
              <div 
                ref={el => sectionRefs.current[4] = el}
                data-animation="slideInRight"
                data-delay="300"
                className="opacity-0"
              >
                <div className="space-y-8">
                  {/* What to Expect */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                    <h3 
                      data-animation="fadeInUp"
                      data-delay="400"
                      className="text-2xl font-bold text-gray-900 mb-6 font-display opacity-0"
                    >
                      What to Expect
                    </h3>
                    <div className="space-y-4">
                      {[
                        { icon: "📧", text: "Response within 24 hours" },
                        { icon: "💰", text: "Detailed pricing breakdown" },
                        { icon: "📋", text: "Customized service plan" },
                        { icon: "🤝", text: "No obligation quote" }
                      ].map((item, idx) => (
                        <div 
                          key={idx}
                          data-animation="fadeInUp"
                          data-delay={600 + idx * 100}
                          className="flex items-center gap-4 opacity-0"
                        >
                          <div className="w-10 h-10 bg-lightblue rounded-full flex items-center justify-center">
                            <span className="text-lg">{item.icon}</span>
                          </div>
                          <span className="text-gray-700 font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Guide */}
                  <div className="bg-gradient-to-br from-softgreen/10 to-green-50 rounded-2xl p-8 border border-softgreen/20">
                    <h3 
                      data-animation="fadeInUp"
                      data-delay="1000"
                      className="text-xl font-bold text-gray-900 mb-4 font-display opacity-0"
                    >
                      Pricing Guide
                    </h3>
                    <div className="space-y-3">
                      {[
                        { service: "Restaurant Cleaning", price: "€35-65/hour" },
                        { service: "Office Cleaning", price: "€35-50/hour" },
                        { service: "Deep Cleaning", price: "€45-75/hour" },
                        { service: "Window Cleaning", price: "€25-45/hour" }
                      ].map((item, idx) => (
                        <div 
                          key={idx}
                          data-animation="fadeInUp"
                          data-delay={1100 + idx * 100}
                          className="flex justify-between items-center opacity-0"
                        >
                          <span className="text-gray-700">{item.service}</span>
                          <span className="font-semibold text-softgreen">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-gradient-to-br from-lightblue/10 to-blue-50 rounded-2xl p-8 border border-lightblue/20">
                    <h3 
                      data-animation="fadeInUp"
                      data-delay="1500"
                      className="text-xl font-bold text-gray-900 mb-4 font-display opacity-0"
                    >
                      Need Help?
                    </h3>
                    <p 
                      data-animation="fadeInUp"
                      data-delay="1600"
                      className="text-gray-600 mb-6 opacity-0"
                    >
                      Our team is here to help you get the perfect cleaning solution for your needs.
                    </p>
                    <div 
                      data-animation="fadeInUp"
                      data-delay="1700"
                      className="opacity-0"
                    >
                      <CTAButton text="Contact Us" href="/contact" />
                    </div>
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



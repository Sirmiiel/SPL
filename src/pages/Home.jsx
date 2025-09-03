import { useRef, useEffect, useState } from "react";
import CTAButton from "../components/CTAButton";
import TrustBadges from "../components/TrustBadges";
import Silk from "../components/Silk.jsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BlurText from "../components/BlurText.jsx";
import TextCursor from "../components/TextCursor.jsx";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};



  const dummyTestimonialData = [
      {
          image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
          name: 'John Doe',
          title: 'Marketing Director, TechCorp',
          content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
          rating: 4,
      },
      {
          image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
          name: 'Jane Smith',
          title: 'Content Creator, TechCorp',
          content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
          rating: 5,
      },
      {
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
          name: 'David Lee',
          title: 'Content Writer, TechCorp',
          content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
          rating: 4,
      },
  ]


export default function Home() {
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
      <section className="h-[120vh] lg:min-h-[100vh] relative bg-[#E4F6F1] grid gap-10 lg:gap-16 md:grid-cols-2 items-center overflow-hidden">
        
        {/* Floating Text Cursor Effect */}
        <TextCursor
          text="🧼"
          delay={0.01}
          spacing={80}
          followMouseDirection={true}
          randomFloat={true}
          exitDuration={0.3}
          removalInterval={20}
          maxPoints={10}
          className="absolute select-none whitespace-nowrap text-2xl opacity-30"
        />

        {/* Text Content */}
        <div 
          ref={el => sectionRefs.current[0] = el}
          data-animation="fadeInRight"
          className="relative z-10 container mx-auto lg:pl-28 p-6 mt-32 lg:mt-0 max-w-4xl text-center md:text-left opacity-0"
        >
          <BlurText
            text={t('home.title')}
            delay={450}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl md:text-5xl text-left font-bold mb-6 font-display text-black"
          />
          <p 
            data-animation="fadeInRight" 
            data-delay="200"
            className="mb-8 text-lg md:text-xl text-left max-w-2xl mx-auto md:mx-0 text-black opacity-0"
          >
            {t('home.subtitle')}
          </p>
          <p 
            data-animation="fadeInRight" 
            data-delay="400"
            className="mb-10 text-sm uppercase text-left tracking-widest text-[#7FC6A4] opacity-0"
          >
            {t('home.trustStatement')}
          </p>
          <div 
            data-animation="fadeInRight" 
            data-delay="600"
            className="flex flex-col md:flex-row gap-4 md:justify-start justify-center opacity-0"
          >
            <CTAButton text={t('home.ctaBook')} href="/contact" />
          </div>
        </div>

        {/* Image Container */}
        <div 
          ref={el => sectionRefs.current[1] = el}
          data-animation="zoomIn"
          data-delay="300"
          className="relative flex justify-end md:justify-end h-full z-10 opacity-0"
        >
          <div className="w-[80%] h-full overflow-hidden rounded-l-full shadow-lg transform hover:scale-105 transition-transform duration-700">
            <img
              src="/images/image3.webp"
              alt="Cleaning service"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Left */}
          <div 
            ref={el => sectionRefs.current[2] = el}
            data-animation="slideInLeft"
            className="flex justify-start md:justify-start opacity-0"
          >
            <div className="rounded-ee-[60%] shadow-xl w-[90%] overflow-hidden transform hover:scale-105 transition-transform duration-700">
              <img
                src="/images/image2.webp"
                alt="About our company"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Text Right */}
          <div 
            ref={el => sectionRefs.current[3] = el}
            data-animation="slideInRight"
            className="text-left opacity-0"
          >
            <h2 
              data-animation="fadeInUp" 
              data-delay="200"
              className="text-3xl md:text-4xl font-bold mb-6 font-display text-lightblue opacity-0"
            >
              {t('about.title')}
            </h2>
            <p 
              data-animation="fadeInUp" 
              data-delay="400"
              className="text-lg text-gray-700 mb-6 leading-relaxed opacity-0"
            >
              {t('about.body')}
            </p>
            <p 
              data-animation="fadeInUp" 
              data-delay="600"
              className="text-md text-gray-600 mb-8 opacity-0"
            >
              {t('about.mission')}
            </p>

            {/* CTA */}
            <div 
              data-animation="fadeInUp" 
              data-delay="800"
              className="opacity-0"
            >
              <CTAButton text={t('about.cta')} href="/about" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative h-auto px-6 py-20 md:py-28 grid md:grid-cols-2 items-center overflow-hidden bg-[#E4F6F1]">
        {/* Silk Background */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={3}
            scale={0.5}
            color="#90D5FF"
            noiseIntensity={0.4}
            rotation={0}
            className="opacity-5"
          />
        </div>

        {/* Text */}
        <div 
          ref={el => sectionRefs.current[4] = el}
          data-animation="fadeInUp"
          className="relative z-10 max-w-xl mx-auto p-8 rounded-2xl 
            bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg text-black
            hover:shadow-xl hover:scale-[1.02] transition-all duration-700 opacity-0"
        >
          <h2 
            data-animation="fadeInUp" 
            data-delay="200"
            className="text-3xl md:text-5xl font-bold mb-6 opacity-0 text-lightblue"
          >
            {t('home.introTitle')}
          </h2>
          <p 
            data-animation="fadeInUp" 
            data-delay="400"
            className="text-lg md:text-xl mb-8 opacity-0 text-white"
          >
            {t('home.intro')}
          </p>
          <div 
            data-animation="fadeInUp" 
            data-delay="600"
            className="opacity-0"
          >
            <TrustBadges />
          </div>
        </div>

        {/* Image */}
        <div 
          ref={el => sectionRefs.current[5] = el}
          data-animation="rotateIn"
          data-delay="300"
          className="relative z-10 flex justify-center md:justify-end opacity-0"
        >
          <img 
            src="/images/logo.png" 
            alt="Cleaning service" 
            className="w-[60%] object-contain transform hover:rotate-6 transition-transform duration-700" 
          />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 
            ref={el => sectionRefs.current[6] = el}
            data-animation="bounceIn"
            className="text-2xl md:text-3xl font-bold text-center mb-12 font-display opacity-0 text-lightblue"
          >
            {t('home.ourServices')}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-12">
            {[
              { icon: "/images/image4.webp", key: "services.items.restaurant", animation: "flipInX", delay: 0 },
              { icon: "/images/image5.webp", key: "services.items.office", animation: "flipInX", delay: 200 },
              { icon: "/images/image6.webp", key: "services.items.deep", animation: "flipInX", delay: 400 },
            ].map((s, idx) => (
              <Link
                key={idx}
                to="/services"
                ref={el => sectionRefs.current[7 + idx] = el}
                data-animation={s.animation}
                data-delay={s.delay}
                                className="group bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] 
                  transition-all duration-500 opacity-0 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Icon */}
                <div className="flex justify-center h-48 mb-6 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                  <img 
                    src={s.icon} 
                    alt={`${t(`${s.key}.title`)} icon`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8 sm:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-center md:text-left text-lightblue mb-3">
                    {t(`${s.key}.title`)}
                  </h3>
                  
                  <p className="text-gray-600 text-sm md:text-base text-center md:text-left mb-4">
                    {t(`${s.key}.description`)}
                  </p>

                  <span className="inline-block text-blue-600 font-medium text-center md:text-left 
                    group-hover:text-blue-700 transition-colors duration-300 transform group-hover:translate-x-1">
                    {t("common.learnMore")} →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Services Button */}
          <div 
            ref={el => sectionRefs.current[10] = el}
            data-animation="tada"
            data-delay="600"
            className="text-center opacity-0"
          >
            <Link
              to="/services"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
                hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl
                transform hover:-translate-y-1"
            >
              {t("home.viewAllServices")}
            </Link>
          </div>
        </div>
      </section>

   



          <section 
           ref={el => sectionRefs.current[11] = el}
           data-animation="fadeIn">
          <div className='px-4 sm:px-20 xl:px-32 py-24'>
            <div className='text-center'>
                <h2  data-animation="zoomIn" 
            data-delay="200"
            className="text-3xl md:text-4xl font-bold text-lightblue mb-6 opacity-0">Loved by Creators</h2>
                <p className='text-gray-500 max-w-lg mx-auto'>Don't just take our word for it. Here's what our users are saying.</p>
            </div>
            <div className='flex flex-wrap mt-10 justify-center'>
                {dummyTestimonialData.map((testimonial, index) => (
                    <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer'>
                        <div className="flex items-center gap-1">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#5044E5" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#5044E5" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#5044E5" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#5044E5" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#5044E5" />
                            </svg>
                        </div>
                        <p className='text-gray-500 text-sm my-5'>"{testimonial.content}"</p>
                        <hr className='mb-5 border-gray-300' />
                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} className='w-12 object-contain rounded-full' alt='' />
                            <div className='text-sm text-gray-600'>
                                <h3 className='font-medium'>{testimonial.name}</h3>
                                <p className='text-xs text-gray-500'>{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
          </section>
    </div>
  );
}
export default function CTAButton({ text, href }) {
    return (
      <a
        href={href}
        className="relative inline-block text-center w-[150px] px-6 py-3 font-semibold text-[#6EC1E4] border-2 border-[#6EC1E4] rounded-3xl overflow-hidden group"
      >
        <span className="relative text-center z-10 transition-colors duration-300 group-hover:text-white">
          {text}
        </span>

        {/* The background fill animation */}
        <span className="absolute inset-0 bg-[#6EC1E4] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
      </a>


      
    );
  }
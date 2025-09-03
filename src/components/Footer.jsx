import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-10 w-full text-gray-500 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between w-full gap-12 border-b border-gray-300/30 pb-8">
        {/* Logo & description */}
        <div className="md:max-w-md">
          <div className="flex items-center gap-3">
            <img
              src="./images/logo.png"
              alt="Siivouspalvelu Lupaus Logo"
              className="h-14 w-auto"
            />
            <span className="text-lg font-semibold text-gray-800">
              Siivouspalvelu Lupaus
            </span>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Links & contact */}
        <div className="flex-1 flex flex-col sm:flex-row md:justify-end gap-16">
          <div>
            <h2 className="font-semibold mb-4 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-4 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p className="hover:text-gray-800 transition-colors">+1-212-456-7890</p>
              <p className="hover:text-gray-800 transition-colors">contact@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <p className="pt-6 text-center text-xs md:text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <a href="#" className="font-medium hover:text-gray-800 transition-colors">
          Siivouspalvelu Lupaus
        </a>. All Rights Reserved.
      </p>
    </footer>
  );
}

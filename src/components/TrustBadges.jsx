import { useTranslation } from "react-i18next";
import { ShieldCheck, Leaf, Clock, Lock } from "lucide-react";

export default function TrustBadges() {
  const { t } = useTranslation();
  const badges = [
    { 
      icon: <ShieldCheck size={24} />, 
      label: "Licensed",
      color: "blue",
      iconClass: "text-blue-600 group-hover:text-blue-700 transition-colors"
    },
    { 
      icon: <Leaf size={24} />, 
      label: "Eco-Friendly",
      color: "green",
      iconClass: "text-green-600 group-hover:text-green-700 transition-colors"
    },
    { 
      icon: <Clock size={24} />, 
      label: "Punctual",
      color: "orange",
      iconClass: "text-orange-600 group-hover:text-orange-700 transition-colors"
    },
    { 
      icon: <Lock size={24} />, 
      label: "Insured",
      color: "purple",
      iconClass: "text-purple-600 group-hover:text-purple-700 transition-colors"
    },
  ];

  const getHoverStyles = (color) => {
    const styles = {
      blue: "hover:border-blue-200 hover:bg-blue-50/80",
      green: "hover:border-green-200 hover:bg-green-50/80",
      orange: "hover:border-orange-200 hover:bg-orange-50/80",
      purple: "hover:border-purple-200 hover:bg-purple-50/80",
    };
    return styles[color] || "hover:border-gray-200 hover:bg-gray-50/80";
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-8">
      {badges.map((b, idx) => (
        <div
          key={idx}
          className={`group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl 
                     min-w-[140px] sm:min-w-[160px] px-6 py-4 
                     flex flex-col sm:flex-row items-center justify-center gap-2 
                     shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer
                     ${getHoverStyles(b.color)}`}
        >
          <span className={`text-2xl sm:text-3xl ${b.iconClass}`} aria-hidden>
            {b.icon}
          </span>
          <span className="text-gray-700 group-hover:text-gray-900 text-xs sm:text-sm md:text-base font-medium text-center sm:text-left transition-colors">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
}
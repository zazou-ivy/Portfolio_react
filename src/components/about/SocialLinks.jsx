import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";


const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 ">
      <div className="flex flex-col gap-3 social__about">
        {/* LinkedIn */}
        <div className="flex items-center gap-2 line">
          <FaLinkedin size={18} className=" hover:text-blue-800 transition-colors duration-300 social-item" />
          <a href="https://www.linkedin.com/in/leazaoui/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 social__text ">
               @leazaoui
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <FaEnvelope size={18} className="text-gray-700 hover:text-gray-900 transition-colors duration-300 social-item" />
          <a href="mailto:lea.myriam.zaoui@gmail.com" className="hover:underline text-gray-700 social__text ">
          lea.myriam.zaoui@gmail.com 
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <FaPhone size={18} className="text-green-600 hover:text-green-800 transition-colors duration-300 social-item" />
          <a href="tel:+1234567890" className="hover:underline text-green-600 social__text">
            +33681694539
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
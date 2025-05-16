"use client";

import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";

type NewsletterFormData = {
  email: string;
};

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>();

  const onSubmit = (data: NewsletterFormData) => {
    console.log("Newsletter subscription:", data);
    alert("Thank you for subscribing to our newsletter!");
    reset();
  };

  return (
    <footer className="bg-dark-900 text-white pt-12 pb-8" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M20 3L36 15V35H26V25H14V35H4V15L20 3Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M20 7L32 16V31H28V21H12V31H8V16L20 7Z"
                  fill="#C99A4B"
                />
                <path
                  d="M20 11L28 17V27H24V21H16V27H12V17L20 11Z"
                  fill="#1F2937"
                />
                <path
                  d="M20 3L36 15V35H26V25H14V35H4V15L20 3Z"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              HireHome
            </h3>
            <p className="text-gray-400 mb-4">
              Experience luxury vacation homes around the world. Your home away
              from home.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/home-types/island-villas"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Island Villas
                </Link>
              </li>
              <li>
                <Link
                  to="/home-types/mountain-top-lodges"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mountain Top Lodges
                </Link>
              </li>
              <li>
                <Link
                  to="/home-types/beachfront-houses"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beachfront Houses
                </Link>
              </li>
              <li>
                <Link
                  to="/home-types/countryside-estates"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Countryside Estates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Luxury Lane</p>
              <p>Paradise City, PC 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@hirehome.com</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`px-4 py-2 bg-dark-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                    errors.email ? "border border-red-500" : ""
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
                <button
                  type="submit"
                  className="px-4 py-2 bg-gold-600 text-white rounded-md hover:bg-gold-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} HireHome. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

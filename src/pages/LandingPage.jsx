import React from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./LandingPage.css";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div id="webcrumbs">
      <div className="font-sans max-w-full">
        <Header />

        <header className="relative h-[400px] md:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
            className="w-full h-full object-cover brightness-75"
            alt="Laboratory"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-900/70 to-blue-800/50 flex items-center justify-center px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
                Premium Scientific Glassware
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Manufacturer & Supplier of Borosilicate Scientific Glass
                Equipments
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
                <button
                  onClick={() => {
                    navigate("/products");
                  }}
                  className="bg-white text-neutral-900 px-8 py-3 rounded-lg hover:bg-neutral-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full md:w-auto"
                >
                  Explore Products
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 w-full md:w-auto">
                  <span className="material-symbols-outlined">download</span>
                  <span>Download Catalog</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-neutral-50 to-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent">
            Our Premium Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="material-symbols-outlined text-5xl mb-6 bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent">
                chemistry
              </span>
              <h3 className="text-2xl font-bold mb-3">Beakers & Flasks</h3>
              <p className="text-neutral-600">
                High-precision volumetric glassware for accurate measurements
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="material-symbols-outlined text-5xl mb-6 bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent">
                biotech
              </span>
              <h3 className="text-2xl font-bold mb-3">Test Tubes</h3>
              <p className="text-neutral-600">
                Durable borosilicate glass tubes for various laboratory
                applications
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="material-symbols-outlined text-5xl mb-6 bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent">
                monitoring
              </span>
              <h3 className="text-2xl font-bold mb-3">Specialty Glass</h3>
              <p className="text-neutral-600">
                Custom-made glassware for specific research needs
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-white to-neutral-50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
              <div className="space-y-4">
                <details className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <summary className="font-bold text-xl group-hover:text-cyan-600">
                    Premium Quality
                  </summary>
                  <p className="mt-4 text-neutral-600">
                    All our products are manufactured using the finest materials
                    and strict quality control
                  </p>
                </details>
                <details className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <summary className="font-bold text-xl group-hover:text-cyan-600">
                    Custom Solutions
                  </summary>
                  <p className="mt-4 text-neutral-600">
                    We offer tailored glassware solutions for your specific
                    research requirements
                  </p>
                </details>
                <details className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <summary className="font-bold text-xl group-hover:text-cyan-600">
                    Expert Support
                  </summary>
                  <p className="mt-4 text-neutral-600">
                    Our team of specialists is always ready to assist you with
                    technical guidance
                  </p>
                </details>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
              alt="Laboratory"
              className="w-full md:w-[500px] h-[300px] md:h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </section>

        <footer className="bg-gradient-to-b from-neutral-900 to-black text-white py-16 px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                GG Scientific
              </h3>
              <p className="text-neutral-400">
                Leading manufacturer of premium laboratory glassware
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Products</h4>
              <ul className="space-y-3 text-neutral-400">
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Beakers
                </li>
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Flasks
                </li>
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Test Tubes
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-neutral-400">
                <li className="hover:text-white transition-all duration-300">
                  Email: info@ggscientific.com
                </li>
                <li className="hover:text-white transition-all duration-300">
                  Phone: +1 (555) 123-4567
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="space-x-6">
                <i className="fa-brands fa-linkedin text-3xl hover:scale-125 hover:text-cyan-400 transition-all duration-300 cursor-pointer"></i>
                <i className="fa-brands fa-twitter text-3xl hover:scale-125 hover:text-cyan-400 transition-all duration-300 cursor-pointer"></i>
                <i className="fa-brands fa-facebook text-3xl hover:scale-125 hover:text-cyan-400 transition-all duration-300 cursor-pointer"></i>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

import React from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import {
  INDUSTRIAL_GLASSWARE_PRODUCTS,
  LABORATORY_GLASSWARE_PRODUCTS,
} from "../assets/helper";

/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./ProductCategoryPage.css";

export const ProductCategoryPage = () => {
  const navigate = useNavigate();
  return (
    <div id="webcrumbs">
      <div className="font-sans max-w-full">
        <Header />

        <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-neutral-50 to-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent">
            Product Categories
          </h2>

          <div className="space-y-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent">
                Industrial Glassware
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {INDUSTRIAL_GLASSWARE_PRODUCTS.map((product) => {
                  return (
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <img
                        src="https://images.unsplash.com/photo-1576086213369-97a306d36557"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        alt="Beaker"
                      />
                      <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                      <p className="text-neutral-600 text-sm mb-4">
                        High-quality borosilicate glass beakers
                      </p>
                      <button
                        onClick={() => {
                          navigate("/product");
                        }}
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-800 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent">
                Laboratory Glassware
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {LABORATORY_GLASSWARE_PRODUCTS.map((product) => {
                  return (
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <img
                        src="https://images.unsplash.com/photo-1576086213369-97a306d36557"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        alt="Beaker"
                      />
                      <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                      <p className="text-neutral-600 text-sm mb-4">
                        High-quality borosilicate glass beakers
                      </p>
                      <button
                        onClick={() => {
                          navigate("/product");
                        }}
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-800 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gradient-to-b from-neutral-900 to-black text-white py-16 px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                SciGlass Pro
              </h3>
              <p className="text-neutral-400">
                Leading manufacturer of premium laboratory glassware
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-neutral-400">
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  All Products
                </li>
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Custom Orders
                </li>
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Bulk Orders
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-neutral-400">
                <li className="hover:text-white transition-all duration-300">
                  Email: sales@sciglaspro.com
                </li>
                <li className="hover:text-white transition-all duration-300">
                  Phone: +1 (555) 123-4567
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-6">
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

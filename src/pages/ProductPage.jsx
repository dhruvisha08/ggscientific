import React from "react";
import { Header } from "./Header";
import "./ProductPage.css";

export const ProductPage = () => {
  return (
    <div id="webcrumbs">
      <div className="font-sans max-w-full">
        <Header />
        <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <img
                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557"
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                    alt="Griffin Beaker"
                  />
                  <div className="grid grid-cols-4 gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1576086213369-97a306d36557"
                      className="w-full h-24 object-cover rounded-lg shadow hover:scale-105 transition-all duration-300 cursor-pointer"
                      alt="View 1"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
                      className="w-full h-24 object-cover rounded-lg shadow hover:scale-105 transition-all duration-300 cursor-pointer"
                      alt="View 2"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
                      className="w-full h-24 object-cover rounded-lg shadow hover:scale-105 transition-all duration-300 cursor-pointer"
                      alt="View 3"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1582719471384-894fbb16e074"
                      className="w-full h-24 object-cover rounded-lg shadow hover:scale-105 transition-all duration-300 cursor-pointer"
                      alt="View 4"
                    />
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent">
                      Griffin Beakers
                    </h2>
                    <p className="text-neutral-600">
                      High-quality borosilicate glass beakers designed for
                      precision laboratory work.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Specifications</h3>
                    <ul className="space-y-2 text-neutral-600">
                      <li className="flex items-center">
                        <span className="material-symbols-outlined mr-2">
                          check_circle
                        </span>
                        Borosilicate 3.3 glass
                      </li>
                      <li className="flex items-center">
                        <span className="material-symbols-outlined mr-2">
                          check_circle
                        </span>
                        Temperature range: -50°C to 500°C
                      </li>
                      <li className="flex items-center">
                        <span className="material-symbols-outlined mr-2">
                          check_circle
                        </span>
                        Uniform wall thickness
                      </li>
                      <li className="flex items-center">
                        <span className="material-symbols-outlined mr-2">
                          check_circle
                        </span>
                        Accurate volume graduations
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Available Sizes</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <button className="px-4 py-2 border-2 border-cyan-600 rounded-lg hover:bg-cyan-600 hover:text-white transition-all duration-300">
                        50mL
                      </button>
                      <button className="px-4 py-2 border-2 border-cyan-600 rounded-lg hover:bg-cyan-600 hover:text-white transition-all duration-300">
                        100mL
                      </button>
                      <button className="px-4 py-2 border-2 border-cyan-600 rounded-lg hover:bg-cyan-600 hover:text-white transition-all duration-300">
                        250mL
                      </button>
                      <button className="px-4 py-2 border-2 border-cyan-600 rounded-lg hover:bg-cyan-600 hover:text-white transition-all duration-300">
                        500mL
                      </button>
                      <button className="px-4 py-2 border-2 border-cyan-600 rounded-lg hover:bg-cyan-600 hover:text-white transition-all duration-300">
                        1000mL
                      </button>
                      <button className="px-4 py-2 border-2 border-cyan-600 rounded-lg hover:bg-cyan-600 hover:text-white transition-all duration-300">
                        2000mL
                      </button>
                    </div>
                  </div>
                </div>
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
                <i className="fa-brands fa-linkedin text-3xl hover:scale-125 hover:text-cyan-400 transition-all duration-300 cursor-pointer" />
                <i className="fa-brands fa-twitter text-3xl hover:scale-125 hover:text-cyan-400 transition-all duration-300 cursor-pointer" />
                <i className="fa-brands fa-facebook text-3xl hover:scale-125 hover:text-cyan-400 transition-all duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

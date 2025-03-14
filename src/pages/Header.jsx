import logo from "../assets/images/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between p-6 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="flex items-center space-x-2 mb-4 md:mb-0 cursor"
      >
        <img src={logo} height={40} width={40} />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent">
          GG Scientific Glass LLP
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <Link
          className="hover:scale-105 transition-all duration-300 hover:text-cyan-600"
          to="/products"
        >
          Products
        </Link>
        <Link
          className="hover:scale-105 transition-all duration-300 hover:text-cyan-600"
          href="#about"
        >
          About
        </Link>
        <Link
          className="hover:scale-105 transition-all duration-300 hover:text-cyan-600"
          href="#contact"
        >
          Contact
        </Link>
        <button className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-full md:w-auto">
          Get Quote
        </button>
      </div>
    </nav>
  );
};

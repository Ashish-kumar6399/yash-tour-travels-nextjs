import { FaAngleDoubleRight } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* <!-- Column 1: About --> */}
          <div>
            <h3 className="text-lg font-bold mb-4">Yash Tour & Travels</h3>
            <p className="text-gray-300 text-sm">
              Welcome to Yash Tour & Travels, your trusted partner for
              comfortable, reliable, and affordable journeys. Discover the joy
              of travel with our premium rental services across India.every
              journey is a promise of memories that last a lifetime. As your
              premier travel companion, we are dedicated to providing you with
              comfortable, reliable, and affordable travel solutions.
            </p>
          </div>

          {/* <!-- Column 2: Quick Links --> */}
          <div className=" space-x-0  md:space-x-4">
            <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-300 text-lg">
              <li className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                <a href="#" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                <a href="#" className="hover:text-blue-400">
                  Contact Us
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                <a href="#" className="hover:text-blue-400">
                  Terms & Conditions
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                <a href="#" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Column 3: Services --> */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 text-lg">
              <li className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                <a href="#" className="hover:text-blue-400">
                  Kashmir Tour
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                <a href="#" className="hover:text-blue-400">
                  Gangtok Tour
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                <a href="#" className="hover:text-blue-400">
                  Andaman Tour
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                <a href="#" className="hover:text-blue-400">
                  Kerala Tour
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                <a href="#" className="hover:text-blue-400">
                  Golden Triangle Tour
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Column 4: Contact Us --> */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
            <p className="text-gray-300 text-sm flex items-center">
              <span className="mr-2">
                <i className="fa-solid fa-phone"></i>
              </span>
              <a href="tel:+919821325561" className="hover:text-blue-400">
                +91 9773764427
              </a>
              ,
              <a href="tel:+918744878555" className="hover:text-blue-400">
                +91-9312288985
              </a>
            </p>
  
            <p className="text-gray-300 text-sm flex items-center">
              <span className="mr-2">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <a
                href="mailto:yashtourandtravels1@gmail.com"
                className="hover:text-blue-400"
              >
                yashtourandtravels1@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* <!-- Copyright & Developer Info --> */}
        <div className="bg-gray-900 text-gray-400 text-sm py-4">
          <div className="max-w-7xl mx-auto px-2 lg:px-6 flex flex-col md:flex-row justify-between text-center md:text-left">
            <p>Copyright © 2025 Yash Tour & Travels. All rights reserved.</p>
            <p>
              Designed and Developed by
              <a
                href="https://kanakdrishtiinfo.com/"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                {" "}
                Kanak Drishti Infotech
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
function Navbar({ headerRoutes = [{ name: 'Home', route: '/' }] }) {
  return (
    <>
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">
                Let's<span className="text-gray-800">Code</span>
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {headerRoutes.map((ele, index) => {
                return (
                  <a
                    key={index + '-' + index}
                    href={ele.route}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    {ele.name}
                  </a>
                );
              })}
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                FAQ
              </a>
            </nav>
            <div className="flex items-center">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
              >
                Login
              </a>
              <a
                href="#contact"
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

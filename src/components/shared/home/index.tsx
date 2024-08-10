import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Digital Voting</h1>
          <p className="text-lg">
            Embrace the future of voting with our secure and easy-to-use digital voting platform. Ensure your voice is heard in the Student Union elections from anywhere, at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Security Section */}
          <div className="bg-white p-8 shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Secure and Reliable</h2>
            <p>
              Our platform uses state-of-the-art encryption and security measures to ensure that every vote is counted accurately and securely.
            </p>
          </div>

          {/* Accessibility Section */}
          <div className="bg-white p-8 shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Accessible Anywhere</h2>
            <p>
              Vote from the comfort of your home, on your mobile device, or from any location with an internet connection. Our platform is designed to be user-friendly and accessible to all students.
            </p>
          </div>

          {/* Transparency Section */}
          <div className="bg-white p-8 shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Transparent and Fair</h2>
            <p>
              The digital voting system ensures transparency, allowing for easy auditing and verification of the election results, ensuring a fair election process for everyone.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded hover:bg-blue-700"
          >
            Get Started with Digital Voting
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

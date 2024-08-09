import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Location Section */}
        <div>
          <h4 className="text-xl font-bold mb-2">Location</h4>
          <p>
            Free Student Union
            <br />
            Purwanchal Campus, IOE
            <br />
            Dharan-8,Sunsari,Nepal
          </p>
        </div>
        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-bold mb-2">Contact Us</h4>
          <p>Tel. : 025-526304, 025-526305, 025-520120</p>
          <p>Email: ioepcd@ioepc.edu.np</p>
        </div>
        {/* Social Media or Additional Links Section */}
        <div>
          <h4 className="text-xl font-bold mb-2">Follow Us</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-300">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="mt-8 text-center border-t border-blue-700 pt-4">
        <p className="text-sm">
          © 2024 Free Student Union Election. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

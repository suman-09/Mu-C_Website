import React from "react";
import { FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";
import { Logo } from "../assets";

const Footer = () => {
  const socialMedia = [
    { icon: <FaFacebook className="mr-2" />, text: "Mu-C NIT Dgp" },
    {
      icon: <FaInstagram className="mr-2" />,
      text: "Mu-C NIT Dgp (@musicclub_nitd)",
    },
    { icon: <FaDiscord className="mr-2" />, text: "MuC NITD (@MuCNITD)" },
  ];

  const contacts = [
    { name: "Subhadeep", phone: "73192 07871" },
    { name: "Diya", phone: "70639 69747" },
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Social Media Section */}
        <div>
          <h3 className="font-bold mb-4">Social Media</h3>
          <ul>
            {socialMedia.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-center md:justify-start mb-2"
              >
                {item.icon}
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="font-bold mb-4">Address</h3>
          <p>
            Mahatma Gandhi Rd,
            <br /> A-Zone, Durgapur,
            <br /> West Bengal 713209
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          {contacts.map((contact, index) => (
            <p key={index}>
              {contact.name}: {contact.phone}
            </p>
          ))}
        </div>

        {/* Logo and Club Information */}
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Mu-C Logo" className="h-16 mb-2" />{" "}
          {/* Adjust the path to your logo */}
          <p>
            The Official Music Club
            <br />
            NIT Durgapur
          </p>
        </div>
      </div>
      <div className="mt-4  text-center border-t border-gray-400 pt-4 px-2">
        <p>
          Copyright © {new Date().getFullYear()}. Music Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

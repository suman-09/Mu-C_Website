import React from 'react';

const Footer = () => {
  return (
    <>
        <footer className="sticky bottom-0 bg-black text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Social Media Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-2">Social Media</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-500">Mu-C NIT Dgp</a></li>
            <li><a href="#" className="hover:text-blue-500">Mu-C NIT Dgp (@musicclub_nitd)</a></li>
            <li><a href="#" className="hover:text-blue-500">Mu-C NIT Dgp (@MuCNITD)</a></li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-2">Address</h3>
          <p>
            Mahatma Gandhi Rd,<br />
            A-Zone, Durgapur,<br />
            West Bengal 713209
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact</h3>
          <p>Rohit: <a href="tel:7319207871" className="hover:text-blue-500">73192 07871</a></p>
          <p>Souharda: <a href="tel:7063969747" className="hover:text-blue-500">70639 69747</a></p>
        </div>

        {/* Logo and Copyright */}
      <div className="mt-8 text-center">
      <img src="./icons/logo.png" alt="logo" className="w-28 h-14"/>
      </div>

      </div>
      <p className="text-center py-2">&copy; 2024 The Official Music Club, NIT Durgapur</p>
      
    </footer>

    </>
  )
}

export default Footer;
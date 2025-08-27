import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterColumn from "./FooterColumn";
import CountrySelector from "./CountrySelector";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        
        {/* Social Links */}
        <div className="footer-section">
          <h3>Connect with us</h3>
          <div className="social-icons">
            <FaSnapchatGhost />
            <FaInstagram />
            <FaFacebookF />
            <FaXTwitter />
            <FaWhatsapp />
          </div>
        </div>

        {/* Keep in touch */}
        <FooterColumn 
          title="Keep in touch"
          links={[
            "Contact Us",
            "Bulk orders and B2B enquiries",
            "Vendor? Sell on Virgin Megastore",
            "Corporate Gifting",
            "Virgin Megastore Career"
          ]}
        />

        {/* Also in store */}
        <FooterColumn 
          title="Also in store"
          links={[
            "Virgin Megastore Circle",
            "Virgin Megastore Tickets",
            "Virgin Megastore LIFE",
            "Virgin Megastore Cover",
            "Device Trade-in Services",
            "Electronic Device Repair Services",
            "Virgin Megastore Gift Cards",
            "Virgin Mobile UAE"
          ]}
        />

        {/* Got questions */}
        <FooterColumn 
          title="Got questions?"
          links={[
            "Live Personal Shopper",
            "FAQ",
            "Terms & Conditions",
            "Store Locations",
            "About Us",
            "Privacy Policy",
            "0% Interest Installment Plans",
            "Website Cookies",
            "Sustainability Statement"
          ]}
        />
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="bottom-section">
          <p>Shipments delivered via</p>
          <div className="logos">
            <img src="/aramex.svg" alt="Aramex" />
            <img src="/Swftbox-shipping-logo.svg" alt="Swftbox" />
          </div>
        </div>

        <div className="bottom-section">
          <p>Ways to pay</p>
          <div className="logos">
            <img src="/Virgin-Megastore-Footer-Payment-methods-1.svg" alt="Visa" />  
          </div>
     

        </div>

             <div className="bottom-section">
  <CountrySelector />
</div>
      </div>

      {/* App store */}
      <div className="app-links">
        <img src="/Download-Badge-App-Store.png" alt="App Store" />
        <img src="/Download-Badge-Google-Play.png" alt="Google Play" />
      </div>

      <div className="footer-copy">
        © 2025 Virgin Megastore. All Rights Reserved.
      </div>
    </footer>
  );
}

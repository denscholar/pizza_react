import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openHours = 7;
  const closingHours = 23;
  const isOpen = hour >= openHours && hour <= closingHours;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We are open until {closingHours}:00. come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;

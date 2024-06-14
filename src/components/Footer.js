import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#cb7631] px-3 py-2 text-white font-medium">
      <div className="flex justify-evenly m-3">
        <div className="col-md-3 ">
          <h4 className="mb-3 text-lg">About Food Ordering App</h4>
          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>Grocery</li>
            <li>Cart</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4 className="mb-3 text-lg">Help</h4>
          <ul>
            <li>Disclaimer</li>
            <li>Privacy policy</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4 className="mb-3 text-lg">Locations</h4>
          <ul>
            <li>Bangalore</li>
            <li>Mumbai</li>
            <li>Puna</li>
            <li>Delhi</li>
            <li>Hyderabad</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 p-6">
        <p className="text-center">Copyright@2024 Cooking Healthy Food</p>
      </div>
    </footer>
  );
};

export default Footer;

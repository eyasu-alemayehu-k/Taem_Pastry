import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="permalinks">
        <ul className=" text-lg">
          <li>
            <h1 className="text-white my-2">Menu Link</h1>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#Review">Review</a>
          </li>
        </ul>
        <ul className=" text-lg">
          <li>
            <h1 className="text-white my-2">Our Service</h1>
          </li>
          <li>
            <a href="#about">Weeding Cakes</a>
          </li>
          <li>
            <a href="#menu">Birthday Cakes</a>
          </li>
          <li>
            <a href="#service">Special Occasions</a>
          </li>
          <li>
            <a href="#contact">Graduation Gift</a>
          </li>
        </ul>
        <ul className=" text-lg">
          <li>
            <h1 className="text-white my-2">Information</h1>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#about">Delivery Information</a>
          </li>
          <li>
            <a href="#menu">Privacy Policy</a>
          </li>
          <li>
            <a href="#service">Terms and conditions</a>
          </li>
        </ul>
      </div>
      <div className="contact  text-gray-300 text-xl text-center">
        <p className="flex justify-center">
          <BsPhone className="mr-2"/> <span >+251-0112334353</span> 
        </p>
      </div>
      <div className="footer__socials text-xl">
        <a href="/">
          <BsFacebook />
        </a>
        <a href="/">
          <FaTwitter />
        </a>
        <a href="/">
          <BsInstagram />
        </a>
        <a href="/">
          <BsYoutube />
        </a>
      </div>
      <div className="footer__copyright text-orange-400 text-md">
        <small>&copy; Time Pastry. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

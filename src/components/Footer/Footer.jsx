import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://www.youtube.com/@DoctorMike",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://github.com/oviohub/medic",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://www.instagram.com/medical.doctors/",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://www.linkedin.com/school/harvard-medical-school/",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/blog",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/appointment",
    display: "Request an Appointment",
  },
  {
    path: "/locations",
    display: "Find a Location",
  },
  {
    path: "/opinion",
    display: "Get an Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/donate",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="Logo" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} Developed by Faiez Chabbouh. All Rights Reserved.
            </p>
            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((social, index) => (
                <Link to={social.path} key={index}>
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[18px] leading-7 font-[700] text-headingColor">Quick Links</h4>
            <ul className="mt-4">
              {quickLinks01.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor">
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] leading-7 font-[700] text-headingColor">More Links</h4>
            <ul className="mt-4">
              {quickLinks02.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor">
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] leading-7 font-[700] text-headingColor">Support</h4>
            <ul className="mt-4">
              {quickLinks03.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor">
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

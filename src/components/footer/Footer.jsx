'use client'
import React, { useState } from 'react';
import styles from './Footer.module.css';
import { TbBrandLinkedin } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import gpay from '../../../public/gpay.png'
import amex from '../../../public/amex.png'
import visa from '../../../public/visa.png'
import paypal from '../../../public/paypal.png'
import applepay from '../../../public/applepay.png'
import dpay from '../../../public/dpay.png'
import Image from 'next/image';
import SelectBox from '../shared/selectBox/SelectBox';
const Footer = () => {
  const [dropdown,setDropdown]=useState(false)
const footerLinks = {
    "mettā muse": [
      "About Us",
      "Stories",
      "Artisans",
      "Boutiques",
      "Contact Us",
      "EU Compliances Docs",
    ],
    "Quick Links": [
      "Orders & Shipping",
      "Join/Login as a Seller",
      "Payment & Pricing",
      "Return & Refunds",
      "FAQs",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  };

  const handleDropdown = (title) => {
    setDropdown(dropdown === title ? false : title);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h3 className={styles.title}>BE THE FIRST TO KNOW</h3>
          <p className={styles.description}>Sign up for updates from metta muse.</p>
          <div className={styles.subscribeContainer}>
            <input type="email" placeholder="Enter your e-mail..." className={styles.emailInput} />
            <button className={styles.subscribeButton}>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.rightCol}>
          <h3 className={styles.title}>CONTACT US</h3>
          <p className={styles.contact}>+44 221 133 5360</p>
          <p className={styles.contact}>customercare@mettamuse.com</p>
          <h3 className={styles.title}>CURRENCY</h3>
          <p className={styles.currency}>🇺🇸 - USD</p>
          <p className={styles.note}>Transactions will be completed in Euro and a currency reference is available on hover.</p>
        </div>

<div className={styles.rightColHidden}>
<p className={styles.callus}>Call Us</p>
<div>
<span className={styles.span}>+44 221 133 5360</span>
<span>customercare@mettamuse.com</span>
</div>
</div>


      </div>

           {/* divider */}
          <div className={styles.divider}></div>


       {/* second container */}
<div className={styles.secondContainer}> 

<div className={styles.leftContainer}>
  {Object.entries(footerLinks).map(([title, links]) => (
    <ul className={styles.quickLinksList} key={title}>
      <li className={styles.quickLinksItemHead}>{title}</li>
      {links.map((link, index) => (
        <li className={styles.quickLinksItem} key={index}>{link}</li>
      ))}
    </ul>
  ))}
</div>




<div className={styles.rightContainer}> 

<div className={styles.socialContainer}>
       <p className={styles.text}>Follow Us</p>
       <div >
       <a href="#" className={styles.socialLink}>
       <TbBrandLinkedin color="white" size="16px" />
        </a>
        <a href="#" className={styles.socialLink}>
        <BsInstagram  color="white" size="16px" />  </a>
       </div>
      
     </div>
    <div className={styles.paymentContainer}>
    <p className={styles.text}>mettā muse Accepts</p>
    <div className={styles.imageContainer}>
    <Image src={gpay} alt="Google Pay" className={styles.paymentIcon} />
        <Image src={visa} alt="Mastercard" className={styles.paymentIcon} />
        <Image src={paypal} alt="PayPal" className={styles.paymentIcon} />
        <Image src={amex} alt="American Express" className={styles.paymentIcon} />
        <Image src={applepay} alt="Apple Pay" className={styles.paymentIcon} />
        <Image src={dpay}alt="Dapay" className={styles.paymentIcon} />
    </div>
   </div>
      </div>   


  <div className={styles.dropContainer}>
  {Object.entries(footerLinks).map(([title, links]) => (
    <div className={styles.dropSub} key={title}> 
    <ul className={styles.quickLinksList} key={title}>
      <li 
        onClick={() => handleDropdown(title)}
        className={styles.quickLinksItemHead}>
        {title}
        <svg className={styles.dropdownIcon} width="16" height="16" viewBox="0 0 16 16">
          <path fill="#FFF" d="M4 6l4 4 4-4H4z"></path>
        </svg>
      </li>
      {dropdown === title && (
        <ul className={styles.dropdownList}>
          {links.map((link, index) => (
            <li className={styles.quickLinksItem} key={`${title}+${index}`}  >{link}</li>
          ))}
        </ul>
      )}
    </ul>
    </div>
  ))}

<div className={styles.paymentContainer}>
    <p className={styles.text}>mettā muse Accepts</p>
    <div className={styles.imageContainer}>
    <Image src={gpay} alt="Google Pay" className={styles.paymentIcon} />
        <Image src={visa} alt="Mastercard" className={styles.paymentIcon} />
        <Image src={paypal} alt="PayPal" className={styles.paymentIcon} />
        <Image src={amex} alt="American Express" className={styles.paymentIcon} />
        <Image src={applepay} alt="Apple Pay" className={styles.paymentIcon} />
        <Image src={dpay}alt="Dapay" className={styles.paymentIcon} />
    </div>
   </div>
</div>





      </div>
      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
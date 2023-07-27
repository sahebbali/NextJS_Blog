import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Lama Dev Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;



// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <div className="footer-box">
//       <h1 className="footer-heading">
//         GeeksforGeeks: A Computer Science Portal for Geeks
//       </h1>
//       <div className="footer-container">
//         <div className="footer-column">
//           <h2 className="footer-heading">About Us</h2>
//           <a href="#" className="footer-link">
//             Aim
//           </a>
//           <a href="#" className="footer-link">
//             Vision
//           </a>
//           <a href="#" className="footer-link">
//             Testimonials
//           </a>
//         </div>
//         <div className="footer-column">
//           <h2 className="footer-heading">Services</h2>
//           <a href="#" className="footer-link">
//             Writing
//           </a>
//           <a href="#" className="footer-link">
//             Internships
//           </a>
//           <a href="#" className="footer-link">
//             Coding
//           </a>
//           <a href="#" className="footer-link">
//             Teaching
//           </a>
//         </div>
//         <div className="footer-column">
//           <h2 className="footer-heading">Contact Us</h2>
//           <a href="#" className="footer-link">
//             Uttar Pradesh
//           </a>
//           <a href="#" className="footer-link">
//             Ahemdabad
//           </a>
//           <a href="#" className="footer-link">
//             Indore
//           </a>
//           <a href="#" className="footer-link">
//             Mumbai
//           </a>
//         </div>
//         <div className="footer-column">
//           <h2 className="footer-heading">Social Media</h2>
//           <a href="#" className="footer-link">
//             <i className="fab fa-facebook-f"></i>
//             <span>Facebook</span>
//           </a>
//           <a href="#" className="footer-link">
//             <i className="fab fa-instagram"></i>
//             <span>Instagram</span>
//           </a>
//           <a href="#" className="footer-link">
//             <i className="fab fa-twitter"></i>
//             <span>Twitter</span>
//           </a>
//           <a href="#" className="footer-link">
//             <i className="fab fa-youtube"></i>
//             <span>Youtube</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

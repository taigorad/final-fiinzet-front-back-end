// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logoFiinzet from "../images/logoPng.png";
// import "../css/navbar.css";

// function Navbar() {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   useEffect(() => {
//     const handleLinkClick = () => {
//       if (isNavOpen) {
//         setIsNavOpen(false);
//       }
//     };

//     document.addEventListener("click", handleLinkClick);

//     return () => {
//       document.removeEventListener("click", handleLinkClick);
//     };
//   }, [isNavOpen]);

//   const handleToggleClick = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <div>
//       <nav
//         className="navbar navbar-expand-sm navbar-light fixed-top"
//         id="neubar"
//       >
//         <div className="container">
//           <div>
//             <a className="navbar-brand" href="/">
//               <img
//                 src={logoFiinzet}
//                 className="logo"
//                 alt="Bootstrap"
//                 width="50"
//                 height="50"
//               />
//             </a>
//           </div>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavDropdown"
//             aria-controls="navbarNavDropdown"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={handleToggleClick}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className={`collapse navbar-collapse${isNavOpen ? " show" : ""}`}
//             id="navbarNavDropdown"
//           >
//             <ul className="navbar-nav ms-auto ">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link" aria-current="page">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/about" className="nav-link" aria-current="page">
//                   About Us
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/product" className="nav-link" aria-current="page">
//                   Product
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/contact" className="nav-link" aria-current="page">
//                   Contact
//                 </Link>
//               </li>
              
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;






import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoFiinzet from "../images/logoPng.png";
import "../css/navbar.css";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light fixed-top" id="neubar">
        <div className="container">
          <div>
            <a className="navbar-brand" href="/">
              <img
                src={logoFiinzet}
                className="logo"
                alt="Bootstrap"
                width="50"
                height="50"
              />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
            onClick={handleToggleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse${isNavOpen ? " show" : ""}`}>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" aria-current="page" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link" aria-current="page" onClick={handleLinkClick}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" aria-current="page" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
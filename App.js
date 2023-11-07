import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -RestraurantContainer
 *    -RestautrantCard
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */
const Header = () =>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/25539c29532269.55f7d6a0a8c71.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
const AppLayout = () =>{
  return (
  <div className="app">
    <Header/>
  </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

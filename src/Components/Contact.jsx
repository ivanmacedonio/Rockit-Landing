import React from "react";
import "../Styles/Contact.css";
export const Contact = () => {
  return (
    <div className="contactContainer" id="hrefcontact">
      <h2>CONTACT US</h2>
      <h1>Let's get in touch</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Company" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" id="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

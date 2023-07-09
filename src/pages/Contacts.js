import React from "react";
import "../styles/Contacts.css";

function Contacts() {
  return (
    <form>
      <h1>
        CONTACT <span>US</span>
      </h1>
      <input type="text" name="name" id="" placeholder="Enter Name" />
      <input type="email" name="email" id="" placeholder="Enter Email" />
      <input type="phone" name="id" id="" placeholder="+91" />
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="Message"
      />
      <button type="submit" className="btn.submit">SEND</button>
    </form>
  );
}

export default Contacts;

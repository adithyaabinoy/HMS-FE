import React from "react";
import "../styles/Contacts.css";
import Sidebar from "../components/Sidebar";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";

function Contacts() {
  const [state, handleSubmit] = useForm("xwkajypj");
  
  const submitting = () => {
    toast.success('Will get back to you')
  }
  return (
    <div className="contacts">
      <Sidebar />
      <form onSubmit={handleSubmit}>
        <h1>
          CONTACT <span>US</span>
        </h1>
        <input type="text" name="name" placeholder="Enter Name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input type="email" name="email" placeholder="Enter Email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input type="text" name="Phone" placeholder="+91" />
        <ValidationError prefix="Phone" field="number" errors={state.errors} />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          className="btn-submit"
          onClick={submitting}
          disabled={state.submitting}
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default Contacts;

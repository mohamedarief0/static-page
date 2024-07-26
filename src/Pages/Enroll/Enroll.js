import React, { useState } from "react";
import { db } from "../../firebase.js";
import { addDoc, collection } from "firebase/firestore";
import "./Enroll.css";
import dotBg from "../../Asset/enroll-dot-bg.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const initialState = {
  name: "",
  email: "",
  message: "",
  number: "",
};

function Enroll() {
  const [{ name, email, message, number }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message || !number) {
      alert("All fields are required!");
      return;
    }

    try {
      await addDoc(collection(db, "mail"), {
        to: "tiktikappcontact@gmail.com",
        message: {
          subject: "Enrolling for the ticket App",
          text: "This is the plaintext section of the email body.",
          html: `
            <p>Enroller Name: ${name}</p>
              <p>Enroll email id: ${email}</p>
              <p>Enroll Phone Number: ${number}</p>
              <p>Message: ${message}</p>
            `,
        },
      });

      clearState();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <section
      id="enroll"
      className="align-items-center position-relative margin-top p-5"
    >
      <div className="container card card-body Enroll-cards-shadow p-4">
        <div className="col-md-8 mb-5">
          <div className="row">
            <div className="section-title">
              <h2>Enroll</h2>
              <p>Write us a message</p>
            </div>
            <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
              <div className="row row-cols-md-1">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={handleChange}
                      value={name}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      id="number"
                      name="number"
                      className="form-control"
                      placeholder="Mobile number"
                      required
                      onChange={handleChange}
                      value={number}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                      value={email}
                    />
                  </div>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-8">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control col-md-6"
                    rows="2"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="col-md-auto">
                  <button type="submit" className="btn btnBgcolor col-md-auto">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d718.840051490722!2d78.86531836774813!3d11.240797495759631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab1bd69cdd255f%3A0x767e4a62853d4127!2scloud%20garage%20llp!5e0!3m2!1sen!2sin!4v1721906801479!5m2!1sen!2sin"
          loading="lazy"
          style={{ width: "auto", height: "400px" }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Enroll;

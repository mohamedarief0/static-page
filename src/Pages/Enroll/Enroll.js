import React, { useState } from "react";
import { db } from "../../firebase.js";
import { addDoc, collection } from "firebase/firestore";
import "./Enroll.css";

function Enroll() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setData({
      name: "",
      email: "",
      message: "",
      number: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    setSuccess(""); // Clear previous success message
    try {
      await addDoc(collection(db, "mail"), {
        to: "tiktikappcontact@gmail.com",
        message: {
          subject: "Enrolling for the ticket App",
          text: "This is the plaintext section of the email body.",
          html: `
            <p>Enroller Name: ${data.name}</p>
            <p>Enroll email id: ${data.email}</p>
            <p>Enroll Phone Number: ${data.number}</p>
            <p>Message: ${data.message}</p>
          `,
        },
      });
      clearState();
      // setSuccess("Message sent successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      setError("Failed to send message. Please try again.");
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
                      value={data.name}
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={handleChange}
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
                      value={data.number}
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
                      value={data.email}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
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
                    value={data.message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="col-md-auto">
                  <button type="submit" className="btn btnBgcolor col-md-auto">
                    Send Message
                  </button>
                </div>
              </div>
              {success && <p className="text-success">{success}</p>}
              {error && <p className="text-danger">{error}</p>}
            </form>
          </div>
        </div>
        <iframe
          id="google-map"
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

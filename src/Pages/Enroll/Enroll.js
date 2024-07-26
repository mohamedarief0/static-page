import React, { useState } from "react";
import { db } from "../../firebase.js";
import { addDoc, collection } from "firebase/firestore";
import "./Enroll.css";
import dotBg from "../../Asset/enroll-dot-bg.png";

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
      await addDoc(collection(db, "enrollments"), {
        name,
        email,
        message,
        number,
        createdAt: new Date(),
      });
      // alert("Data successfully sent!");
      clearState();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  //  const sendEmail = async () => {
  //   try {
  //     // Fetch the image URL
  //     const imageUrl = await getImageUrl(id); // Assuming you use currentUser.uid as the image ID
  
  //     // Compose the email content with the fetched image URL
  //     await firestore()
  //       .collection('mail')
  //       .add({
  //         to: [email],
  //         message: {
  //           subject: 'Your Ticket',
  //           text: 'This is the plaintext section of the email body.',
  //           html: `
  //             <p>Your email id: ${email}</p>
  //             <p>Your Phone Number: ${phoneNumber}</p>
  //             <p>Your ticket count: ${ticketCount}</p>
  //             <p>Movie Name: ${movieName}</p>
  //             <p>Team Name: ${teamNames}</p>
  //             <p>Total ticket Amount: ${totalAmount}</p>
  //             <p>Current user id: ${currentUser.uid}</p>
  //             <p>Click the link below to download your ticket image:</p>
  //             <a href="${imageUrl}" download="ticket.jpg">Download Image</a>
  //           `,
  //         },
  //       });

  return (
    <section id="enroll" className="position-relative p-5">
      <img src={dotBg} className="imgDotBg" alt="background-dot-img" />
      <div className="container screen card card-body Enroll-cards-shadow p-4">
        <div className="col-md-8 mb-5">
          <div className="row">
            <div className="section-title">
              <h2>Enroll</h2>
              <p>Write us a message</p>
            </div>
            <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
              <div className="row">
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
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-12">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                  value={message}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btnBgcolor col-md-6">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d718.840051490722!2d78.86531836774813!3d11.240797495759631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab1bd69cdd255f%3A0x767e4a62853d4127!2scloud%20garage%20llp!5e0!3m2!1sen!2sin!4v1721906801479!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Enroll;

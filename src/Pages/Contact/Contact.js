import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import data from "../../Data/data.json"; // Update path if needed

function Contact() {
  return (
    <>
      <section id="contact" className="backgroundcontact">
        <div className="moving-image"></div>
        <div className="container mt-5" style={{ zIndex: 0 }}>
          <div className="text-center text-white row justify-content-around p-5">
            <div className="col-md-3 mb-3">
              <h5>
                <i className={data.contact.location.icon}></i> Location
              </h5>
              <p>{data.contact.location.address}</p>
            </div>
            <div className="col-md-3 mb-3">
              <h5>
                <i className="ri-contacts-fill"></i> Contact
              </h5>
              <ul className="list-unstyled">
                {data.contact.contact.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      target={link.type === "external" ? "_blank" : undefined}
                      rel={
                        link.type === "external"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-decoration-none text-white"
                    >
                      <i className={link.icon}></i> {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-3 mb-3">
              <h5>Social Media</h5>
              <div className="d-flex justify-content-evenly social-icons">
                {data.contact.socialMedia.links.map((social, index) => (
                  <Link
                    key={index}
                    to={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-white"
                  >
                    <i style={{ fontSize: 30 }} className={social.icon}></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div id="footer" className="backgroundfooter p-5 lh-1">
          <div className="container text-center text-white">
            <p>{data.contact.footer.copyright}</p>
            <p>
              {data.contact.footer.links.map((link, index) => (
                <React.Fragment key={index}>
                  <Link
                    to={link.href}
                    className="text-white-50 termandconditionshover"
                  >
                    {link.text}
                  </Link>
                  {index < data.contact.footer.links.length - 1 && " | "}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;

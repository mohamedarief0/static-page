import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mt-5">
      <h1>Terms & Conditions</h1>

      <h4>Introduction</h4>
      <p>
        Welcome to Tik Tik. By accessing or using our application, you agree to
        comply with and be bound by the following terms and conditions. Please
        read these terms carefully before using the app.
        <h3>User Accounts</h3>
        <ul>
          <li>
            <h5>Registration:</h5>
            <p>
              {" "}
              To use our services, you must register an account with a valid
              mobile number. OTP authentication will be used for verification.
            </p>
          </li>
          <li>
            <h5>User Types:</h5>
            <p>There are two types of users on our platform:</p>
            <ol>
              <li>Uploader: A user who lists tickets for sale.</li>
              <li> Buyer: A user who purchases tickets.</li>
            </ol>
          </li>
        </ul>
        <h3> Uploader Responsibilities</h3>
        <p>
          <ul>
            <li>
              <h5>Listing Tickets:</h5>
              <p>
                {" "}
                Uploaders are responsible for accurately listing the details of
                the tickets, including event name, date, time.
              </p>
            </li>
            <li>
              <h5>Bank Account Details:</h5>
              <p>
                Uploaders must provide valid bank account details to receive
                payments for sold tickets. TIKTIK will not be responsible for
                any errors in the provided bank account information.
              </p>
            </li>
          </ul>
        </p>
        <h3> Buyer Responsibilities</h3>
        <p>
          <ul>
            <li>
              <h5> Purchasing Tickets:</h5>
              <p>
                {" "}
                Buyers must provide a valid WhatsApp number or email address to
                receive purchased tickets.
              </p>
            </li>
            <li>
              <h5> Accuracy of Information:</h5>
              <p>
                Buyers must ensure that the contact information provided is
                accurate and up-to-date. Tik Tik will not be responsible for any
                failure to deliver tickets due to incorrect contact information.
              </p>
            </li>
          </ul>
        </p>
        <h3>Payments and Fees</h3>
        <p>
          <ul>
            <li>
              <h5>Transaction Fees:</h5>
              <p>
                {" "}
                Tik Tik charges a platform fee of 10% on each transaction, and
                GST. The fee structure will be communicated to users during the
                transaction process.
              </p>
            </li>
            <li>
              <h5> Payment Processing:</h5>
              <p>
                Payments for tickets will be processed through our secure
                payment gateway. Uploaders will receive the amount for sold
                tickets, minus the 10% platform fee (inclusive of GST), to their
                provided bank account.
              </p>
            </li>
          </ul>
        </p>
        <h3>Ticket Delivery</h3>
        <p>
          <ul>
            <li>
              <h5>Electronic Delivery: </h5>
              <p>
                {" "}
                Tickets will be delivered electronically to the buyer's provided
                WhatsApp number or email address upon successful payment.
              </p>
            </li>
            <li>
              <h5>Delivery Issues:</h5>
              <p>
                In case of any issues with ticket delivery, users should contact
                our support team for assistance.
                <a href="mailto:tiktikappcontact@gmail.com">
                  tiktikappcontact@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </p>
        <h3>User Conduct</h3>
        <p>
          <ul>
            <li>
              <h5>Prohibited Activities: </h5>
              <p>
                Users are prohibited from engaging in any activity that violates
                these terms, including but not limited to fraudulent
                transactions, misrepresentation of ticket details, or any
                illegal activity.
              </p>
            </li>
            <li>
              <h5>Account Suspension:</h5>
              <p>
                Tik Tik reserves the right to suspend or terminate any user
                account that violates these terms or engages in prohibited
                activities.
              </p>
            </li>
          </ul>
        </p>
        <h3>Privacy Policy</h3>
        <p>
          <ul>
            <li>
              <h5>Data Collection: </h5>
              <p>
                We collect and use your personal information in accordance with
                our Privacy Policy. By using the app, you consent to our data
                practices.
              </p>
            </li>
            <li>
              <h5>Account Suspension:</h5>
              <p>
                Third-Party Services: Our app may use third-party services for
                payment processing, ticket delivery, and other functionalities.
                By using the app, you agree to the terms and conditions of these
                third-party services.
              </p>
            </li>
          </ul>
        </p>
        <h3>Limitation of Liability</h3>
        <p>
          <ul>
            <li>
              <h5>Service Availability: </h5>
              <p>
                Tik Tik does not guarantee the availability of our services at
                all times. We may experience downtime or technical issues that
                may affect app functionality.
              </p>
            </li>
            <li>
              <h5>No Warranty:</h5>
              <p>
                Tik Tik provides the app on an "as-is" basis without any
                warranties, express or implied. We are not responsible for any
                losses or damages arising from the use of our app.
              </p>
            </li>
          </ul>
        </p>
        <h3>Amendments</h3>
        <p>
          Tik Tik reserves the right to amend these terms and conditions at any
          time. Users will be notified of any significant changes, and continued
          use of the app constitutes acceptance of the updated terms.
        </p>
        <h3>Contact Us </h3>
        <p>
          {" "}
          If you have any questions or concerns about these terms and
          conditions, please contact us at.{" "}
        </p>
        <ul>
          <li>
            <span>email:</span>
            <a href="mailto:tiktikappcontact@gmail.com">
              tiktikappcontact@gmail.com
            </a>
          </li>
          <li>
            <span>contact:</span>
            <a href="tel:+919597059693">9597059693</a>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default TermsAndConditions;

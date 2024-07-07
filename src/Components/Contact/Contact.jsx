import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "683da61d-0c04-4abe-a251-716045705261");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium,
          quaerat similique commodi fuga id labore consequuntur. Provident,
          assumenda, quidem repellendus, dolorem atque dolore iste ut aspernatur
          sunt eos quasi veritatis.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@suryasv0729@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            9360547627
          </li>
          <li>
            <img src={location_icon} alt="" />
            77,marina,chennai <br />
            India ,in{" "}
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter yout mobile number"
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            id=""
            rows="6"
            placeholder="enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;

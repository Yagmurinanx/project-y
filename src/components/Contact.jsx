import React, { useState } from "react";
import "../App.css";
import "../index.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const errorsObj = {};
    if (!name.trim()) {
      errorsObj.name = "Name is required";
    }
    if (!email.trim()) {
      errorsObj.email = "Email is required";
    }
    if (!message.trim()) {
      errorsObj.message = "Message is required";
    }

    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/yumin0095@email.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert("Form submitted successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Form submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl fw-b">Contact</h1>
      <p>Get in touch or shoot me an email directly on</p>
      <a
        href="mailto:ygmrinan00@gmail.com"
        className="mail font-bold  hover:text-violet-700  "
      >
        ygmrinan00@gmail.com
      </a>

      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="10"
              cols="50"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button className="fancyButton sm:w-48 md:w-64" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

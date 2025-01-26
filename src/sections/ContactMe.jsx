import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vite from "../assets/vite.jpeg";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    emailjs
      .send(
        "service_xxx123",
        "template_abc456",
        { name: formData.name, email: formData.email, message: formData.message },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => setStatus(`Failed to send message. Error: ${error.text || "Unknown error."}`)
      );
  };
  return (
    <section
      id="contact-me"
      className="relative p-6  bg-cover bg-gray-800 bg-opacity-70 text-white"
      style={{ backgroundImage: `url(${vite})`, backgroundAttachment: "fixed" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center">
        </div>
        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="bg-white/20 p-6 md:p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Get in Touch</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-black font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full text-gray-600 mt-2 p-3 border rounded-md"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-black font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-gray-600 mt-2 p-3 border rounded-md"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-black font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 text-black p-3 border rounded-md"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all"
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>
          </form>
          <div className="flex flex-col items-center justify-center space-y-6">
            <h3 className="text-2xl font-semibold">Connect with Me</h3>
            <p className="text-lg mt-4 items-center text-justify ">
            I’d love to hear from you! Fill out the form below or connect with me on social media.
          </p>
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 transition duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:example@example.com"
                  className="text-red-600 hover:text-red-800 transition duration-300"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/yourphonenumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 transition duration-300"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/c/yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800 transition duration-300"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
              </li>
            </ul>
            <div className="flex justify-center mt-8">
              <a
                href="mailto:your-email@example.com"
                className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-all"
              >
                Email Me
              </a>
              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-all"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
        {status && (
          <div className="mt-6 text-center">
            <p
              className={`text-lg font-semibold ${
                status.includes("successfully") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactMe;

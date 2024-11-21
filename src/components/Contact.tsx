import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephoneInbound } from "react-icons/bs";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", msg: "" });
  };

  return (
    <div id="contact" className="container mx-auto px-4 py-8" data-aos="zoom-in">
      <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10 bg-black rounded-lg shadow-lg">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-white">Get in Touch</h2>
          <p className="text-gray-400 text-base md:text-lg">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className="flex items-center gap-3 text-white">
            <TfiEmail size={24} />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rubab.bukhari66@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              rubab.bukhari66@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-white">
            <BsTelephoneInbound size={24} />
            <a href="tel:+923471299115" className="hover:underline">
              +92-347-1299115
            </a>
          </div>
        </div>

        {/* Right Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-white text-sm md:text-base">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="h-12 bg-transparent border border-gray-600 text-white px-4 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white text-sm md:text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="h-12 bg-transparent border border-gray-600 text-white px-4 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="msg" className="text-white text-sm md:text-base">
              Message
            </label>
            <textarea
              id="msg"
              value={formData.msg}
              onChange={handleChange}
              className="bg-transparent border border-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:border-blue-500"
              rows={6}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

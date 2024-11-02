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
    // Placeholder action - show alert (can replace with EmailJS or other service)
    alert("Message sent!");
    setFormData({ name: "", email: "", msg: "" });
  };

  return (
    <div id="contact" className="container mx-auto" data-aos="zoom-in">
      <div className="grid md:grid-cols-2 p-40 bg-black gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl text-white">Get in Touch</h2>
          <p className="text-gray-500 text-[18px] pt-2">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className="flex gap-3 items-center text-white">
            <TfiEmail size={30} />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rubab.bukhari66@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              rubab.bukhari66@gmail.com
            </a>
          </div>
          <div className="flex gap-3 items-center text-white">
            <BsTelephoneInbound size={30} />
            <a href="tel:+923471299115" className="hover:underline">
              +92-347-1299115
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 text-white">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-white">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="h-[40px] bg-transparent border border-gray-400 text-white px-2"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-white">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="h-[40px] bg-transparent border border-gray-400 text-white px-2"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="msg" className="text-white">Message</label>
            <textarea
              id="msg"
              value={formData.msg}
              onChange={handleChange}
              className="bg-transparent border border-gray-400 text-white px-2"
              rows={8}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 px-6 rounded">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

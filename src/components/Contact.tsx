import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephoneInbound } from "react-icons/bs";

export default function Contact() {
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
            <a href="mailto:rubab.bukhari66@gmail.com" className="hover:underline">
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

        <div className="space-y-8 text-white">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-white">Name</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-gray-400 text-white px-2"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-white">Email</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-gray-400 text-white px-2"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="msg" className="text-white">Message</label>
            <textarea
              className="bg-transparent border border-gray-400 text-white px-2"
              id="msg"
              rows={8}
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white p-2 px-6 rounded">Send</button>
        </div>
      </div>
    </div>
  );
}

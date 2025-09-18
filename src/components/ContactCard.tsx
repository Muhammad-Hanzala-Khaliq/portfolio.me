"use client";

import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactCard = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/emailsend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setEmail("");
      } else {
        toast.error("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-bg-contact rounded w-full my-4">
      <h5 className="text-xl leading-7 text-heading font-bold m-0">
        Want to hire me as a freelancer? Let's discuss.
      </h5>

      <p className="text-text my-1">
        Drop your message and let's discuss about your project.
      </p>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/923076616021?text=Hi%20Hanzala,%20I%20want%20to%20connect%20with%20you"
        className="text-black font-bold text-center py-1 px-4 bg-green-400 rounded w-full h-8 mt-4 flex items-center justify-center no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat on WhatsApp
      </Link>

      <div className="border border-gray-200 w-full my-8" />

      <p className="text- my-1">
        Drop in your email ID and I will get back to you.
      </p>

      <form onSubmit={handleSubmit} className="relative my-4">
        <input
          type="email"
          placeholder="hanzallahkhaliq@gmail.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="appearance-none text-text py-2 px-4 bg-bg-input 
           focus:border focus:border-bg-input-300 
           rounded-md w-full block mt-1 text-base leading-6"
        />
        <button
          type="submit"
          disabled={loading}
          className="text-heading font-bold px-4 bg-bg-button rounded flex justify-center items-center w-28 h-8 absolute top-1 right-1 cursor-pointer disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactCard;

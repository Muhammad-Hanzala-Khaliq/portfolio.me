"use client";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { BsChatSquare } from "react-icons/bs";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();
      toast.success(data.message || "Submitted!");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
     toast.error("Something went wrong")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 sm:pl-20">
      <div className="relative">
        {/* Chat Box */}
        {open && (
          <div className="absolute bottom-16 right-0  w-70 sm:w-110 sm:h-130 bg-bg shadow-xl rounded-xl">
            <div className="p-4 bg-bg-blog rounded-t-xl">
              <h3 className="font-bold text-heading text-xl">
                Have a question? Drop in your message 👇
              </h3>
              <p className="text-sm text-gray-500">
                It won't take more than 10 seconds. Shoot your shot. 🥹
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@xyz.com"
                  className="w-full px-2 py-2 border dark:border-blue-100 text-heading rounded-md text-sm focus:outline-none focus:ring-1 "
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="I'd love a compliment from you."
                  rows={6}
                  className="w-full px-2 py-2 text-heading border dark:border-blue-100 rounded-md text-sm focus:outline-none focus:ring-1 "
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-xl cursor-pointer py-4 text-heading border-2 border-heading rounded-md font-bold transition"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        )}

        {/* Floating Chat Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-bg-chat cursor-pointer shadow-md text-gray-700 dark:text-gray-500 rounded-full p-5 hover:scale(1.1) transition"
        >
          <BsChatSquare className="text-xl" />
        </button>
      </div>
    </div>
  );
}

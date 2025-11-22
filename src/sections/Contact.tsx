import React, { FormEvent } from "react";
import instagramPhone from "../assets/ig-pic.png";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: integrate with email service
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    console.log("Contact form submitted:", data);
  };

  return (
    <section
      id="contact"
      className="px-6 pb-24 pt-16 lg:px-24 lg:pb-32 lg:pt-24"
    >
      {/* Header */}
      <div className="text-center md:text-left">
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          Get in touch
        </h2>
      </div>

      {/* Main content */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        {/* Left: contact form */}
        <div className="h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
            Send a message
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Fill in the fields below and I will contact you back as soon as possible.
          </p>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800"
              >
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-800"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full resize-none rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                placeholder="Write me a message..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-gray-800"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Right: contact info + CTA card */}
        <div className="flex h-full flex-col gap-6">
          {/* Contact links card */}
          <div className="flex-1 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
              Contact links
            </h3>

            <div className="mt-4 space-y-5 text-sm text-gray-800">
              {/* Phone */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Call
                </p>
                <p className="mt-1 text-base text-gray-900">
                  +55 (34) 99660-7639
                </p>
              </div>

              <div className="h-px w-full bg-gray-200" />

              {/* Email */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Email
                </p>
                <a
                  href="mailto:youremail@example.com"
                  className="mt-1 inline-block text-base font-medium text-blue-700 underline-offset-2 hover:underline"
                >
                  joaovborges2005@hotmail.com
                </a>
              </div>

              <div className="h-px w-full bg-gray-200" />

              {/* Socials */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Socials
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/joao-vitor-borges-de-oliveira/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    <FaLinkedin className="text-base" />
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/joao-vitorb"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    <FaGithub className="text-base" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/codebyjoao"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    <FaInstagram className="text-base" />
                  </a>

                  {/* Email icon */}
                  <a
                    href="mailto:joaovborges2005@hotmail.com"
                    aria-label="Send me an email"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    <FaEnvelope className="text-base" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="HTTPS://wa.me/+5534996607639?text=Hello,+how+are+you?+I+saw+your+portfolio+and+would+like+to+get+in+touch."
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    <FaWhatsapp className="text-base" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA card */}
          <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <div className="h-20 w-40 overflow-hidden sm:h-24 sm:w-48">
              <img
                src={instagramPhone}
                alt="Smartphone with Instagram"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 sm:text-base">
                Are you following @codebyjoao on Instagram?
              </h4>
              <p className="mt-1 text-xs text-gray-700 sm:text-sm">
                On this Instagram, I share more about my life, my study routine,
                and some programming tips!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

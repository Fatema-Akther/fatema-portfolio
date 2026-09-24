"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#07111d]
        px-4
        py-24
        text-white
        sm:px-6
        lg:px-8
      "
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[5%] top-20 h-[300px] w-[300px] rounded-full bg-cyan-400/[0.03] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-[10%] h-[300px] w-[300px] rounded-full bg-blue-500/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Let&apos;s connect
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-400">
            Have a project, opportunity or collaboration in mind?
            Feel free to send me a message.
          </p>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 56,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-5 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
          />
        </motion.div>

        {/* =========================
            CONTACT CONTAINER
        ========================== */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =========================
              LEFT SIDE
          ========================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              flex
              flex-col
              justify-between
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#0B1622]
              p-7
              sm:p-8
            "
          >
            <div>
              <span
                className="
                  inline-flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-cyan-400/20
                  bg-cyan-400/[0.07]
                  text-cyan-400
                "
              >
                <Mail className="h-5 w-5" />
              </span>

              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-white">
                Let&apos;s build something useful.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                I&apos;m interested in full-stack development opportunities,
freelance projects and collaborations involving modern web applications.
              </p>

              {/* Email */}
              <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  Email
                </p>

                <a
                  href="mailto:sumafatema10@gmail.com"
                  className="
                    mt-2
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-slate-200
                    transition-colors
                    duration-300
                    hover:text-cyan-300
                  "
                >
                  sumafatema10@gmail.com

                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 border-t border-white/[0.07] pt-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                Find me online
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Fatema-Akther?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/[0.05]
                    hover:text-cyan-300
                  "
                >
                  <Github className="h-4 w-4" />

                  GitHub

                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/fatemaakhterdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/[0.05]
                    hover:text-cyan-300
                  "
                >
                  <Linkedin className="h-4 w-4" />

                  LinkedIn

                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* =========================
              FORM
          ========================== */}
          <motion.form
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            onSubmit={handleSubmit}
            className="
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#0B1622]
              p-7
              sm:p-8
            "
          >
            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2.5 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-[#07111d]
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-600
                    focus:border-cyan-400/50
                    focus:ring-2
                    focus:ring-cyan-400/[0.08]
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2.5 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-[#07111d]
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-600
                    focus:border-cyan-400/50
                    focus:ring-2
                    focus:ring-cyan-400/[0.08]
                  "
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2.5 block text-sm font-medium text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={7}
                placeholder="Tell me about your project or opportunity..."
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-[#07111d]
                  px-4
                  py-3.5
                  text-sm
                  leading-6
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-slate-600
                  focus:border-cyan-400/50
                  focus:ring-2
                  focus:ring-cyan-400/[0.08]
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                group
                mt-6
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-cyan-400
                px-5
                py-3.5
                text-sm
                font-semibold
                text-[#07111d]
                transition-all
                duration-300
                hover:bg-cyan-300
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#07111d]/30 border-t-[#07111d]" />

                  Sending...
                </>
              ) : (
                <>
                  Send Message

                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </>
              )}
            </button>

            {/* Status */}
            {status.message && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-5 rounded-lg border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300"
                    : "border-rose-400/20 bg-rose-400/[0.06] text-rose-300"
                }`}
              >
                {status.message}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
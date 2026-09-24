


import Image from "next/image";
import { Github, Linkedin, ArrowUpRight, Quote } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#07111d] px-4 pt-24 pb-8 text-white sm:px-6 lg:px-8"
    >
      <div
        className="
          relative mx-auto max-w-7xl overflow-hidden rounded-3xl
          border border-cyan-400/15
          bg-gradient-to-br from-[#07131f] via-[#08202a] to-[#0a3d38]
        "
      >
        {/* subtle glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-cyan-400/[0.06] blur-[120px]" />

        <div
          className="
            relative z-10 grid min-h-[540px] items-center gap-12
            px-6 py-12 md:grid-cols-2 md:px-10 lg:px-14
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Fatema Akther
              </span>
            </h1>

            <h2 className="mt-4 text-xl font-medium text-slate-200 sm:text-2xl">
               Full-Stack Developer
            </h2>

            <p className="mt-5 max-w-lg text-[15px] leading-7 text-slate-400 sm:text-base">
            
I build scalable full-stack web applications,
combining modern interfaces, robust APIs,
backend services, and reliable data systems.
            </p>

{/* Social Buttons */}
<div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">

  <a
    href="https://github.com/Fatema-Akther?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group inline-flex items-center gap-2 rounded-lg
      border border-cyan-400/25 bg-white/[0.03]
      px-4 py-2.5 text-sm font-medium text-slate-200
      transition-all duration-300
      hover:border-cyan-400/60 hover:bg-cyan-400/[0.08]
      hover:text-cyan-300
    "
  >
    <Github className="h-4 w-4" />
    GitHub
    <ArrowUpRight className="h-3.5 w-3.5" />
  </a>


  <a
    href="https://www.linkedin.com/in/fatemaakhterdev/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group inline-flex items-center gap-2 rounded-lg
      border border-cyan-400/25 bg-white/[0.03]
      px-4 py-2.5 text-sm font-medium text-slate-200
      transition-all duration-300
      hover:border-cyan-400/60 hover:bg-cyan-400/[0.08]
      hover:text-cyan-300
    "
  >
    <Linkedin className="h-4 w-4" />
    LinkedIn
    <ArrowUpRight className="h-3.5 w-3.5" />
  </a>

</div>


{/* Resume Button */}
<div className="mt-4">
  <a
    href="/Fatema_Akther_Resume.pdf"
    download
    className="
      inline-flex
      items-center
      gap-2
      rounded-lg
      bg-cyan-400
      px-5
      py-3
      font-semibold
      text-[#07111d]
      transition
      hover:bg-cyan-300
    "
  >
    Download Resume
  </a>
</div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center md:justify-end">
            <div
              className="
                grid w-full max-w-[520px] grid-cols-[180px_1fr]
                items-center gap-5 rounded-[28px]
                border border-white/10 bg-[#0b1824]/80
                p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                backdrop-blur-sm
              "
            >
              {/* image */}
            <div className="relative inline-block">
  {/* Glow layer */}
  <div className="absolute -inset-3 rounded-[30px] bg-[#022447] blur-2xl opacity-80"></div>

  {/* Image card */}
  <div
    className="
      relative h-[220px] w-[180px] overflow-hidden
      rounded-[22px]
      border border-cyan-400/30
      bg-[#071B26]
      shadow-[#020f1d]
    "
  >
    <Image
      src="/profile1.png"
      alt="Fatema Akther"
      fill
      priority
      className="object-cover object-top"
    />
  </div>
</div>

              {/* quote */}
              <div className="flex h-full flex-col justify-center">
                <Quote className="mb-4 h-8 w-8 text-cyan-400/70" />

                <p className="max-w-[220px] text-2xl font-medium leading-snug text-slate-200">
                    Turning ideas into
                    scalable, end-to-end
                    web products.
                </p>

                <div className="mt-6 h-[2px] w-12 rounded-full bg-cyan-400/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
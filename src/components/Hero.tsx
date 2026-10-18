


// import Image from "next/image";
// import { Github, Linkedin, ArrowUpRight, Quote, Atom, Braces, Code2, Database, Cloud, Settings } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative bg-[#07111d] px-4 pt-24 pb-8 text-white sm:px-6 lg:px-8"
//     >
//       <div
//         className="
//           relative mx-auto max-w-7xl overflow-hidden rounded-3xl
//           border border-cyan-400/15
//           bg-gradient-to-br from-[#07131f] via-[#08202a] to-[#0a3d38]
//         "
//       >
//         {/* subtle glow */}
//         <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-cyan-400/[0.06] blur-[120px]" />

//         <div
//           className="
//             relative z-10 grid min-h-[540px] items-center gap-12
//             px-6 py-12 md:grid-cols-2 md:px-10 lg:px-14
//           "
//         >
//           {/* LEFT CONTENT */}
//           <div className="max-w-xl text-center md:text-left">
//             <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
//               Hi, I&apos;m{" "}
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 Fatema Akther
//               </span>
//             </h1>

//             <h2 className="mt-4 text-xl font-medium text-slate-200 sm:text-2xl">
//                Full-Stack Developer
//             </h2>

//             <p className="mt-5 max-w-lg text-[15px] leading-7 text-slate-400 sm:text-base">
            
// I build scalable full-stack web applications,
// combining modern interfaces, robust APIs,
// backend services, and reliable data systems.
//             </p>

// {/* Social Buttons */}
// <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">

//   <a
//     href="https://github.com/Fatema-Akther?tab=repositories"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="
//       group inline-flex items-center gap-2 rounded-lg
//       border border-cyan-400/25 bg-white/[0.03]
//       px-4 py-2.5 text-sm font-medium text-slate-200
//       transition-all duration-300
//       hover:border-cyan-400/60 hover:bg-cyan-400/[0.08]
//       hover:text-cyan-300
//     "
//   >
//     <Github className="h-4 w-4" />
//     GitHub
//     <ArrowUpRight className="h-3.5 w-3.5" />
//   </a>


//   <a
//     href="https://www.linkedin.com/in/fatemaakhterdev/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="
//       group inline-flex items-center gap-2 rounded-lg
//       border border-cyan-400/25 bg-white/[0.03]
//       px-4 py-2.5 text-sm font-medium text-slate-200
//       transition-all duration-300
//       hover:border-cyan-400/60 hover:bg-cyan-400/[0.08]
//       hover:text-cyan-300
//     "
//   >
//     <Linkedin className="h-4 w-4" />
//     LinkedIn
//     <ArrowUpRight className="h-3.5 w-3.5" />
//   </a>

// </div>


// {/* Resume Button */}
// <div className="mt-4">
//   <a
//     href="/Fatema_Akther_Full_Stack_Developer_Resume.pdf"
//     download
//     className="
//       inline-flex
//       items-center
//       gap-2
//       rounded-lg
//       bg-cyan-400
//       px-5
//       py-3
//       font-semibold
//       text-[#07111d]
//       transition
//       hover:bg-cyan-300
//     "
//   >
//     Download Resume
//   </a>
// </div>
//           </div>

//           {/* RIGHT CARD */}
     
// {/* RIGHT CARD — TECH STACK ILLUSTRATION */}
// <div className="relative flex min-h-[380px] items-center justify-center md:min-h-[440px]">

//   {/* Ambient glow */}
//   <div className="absolute left-1/2 top-1/2 h-64 w-64
//     -translate-x-1/2 -translate-y-1/2 rounded-full
//     bg-cyan-400/10 blur-[90px]" />

//   {/* Orbital rings */}
//   <div className="absolute h-[300px] w-[300px] rounded-full
//     border border-cyan-400/10 sm:h-[360px] sm:w-[360px]" />

//   <div className="absolute h-[240px] w-[240px] rounded-full
//     border border-blue-400/10 sm:h-[300px] sm:w-[300px]" />

//   {/* Orbiting technology cards */}
//   <div className="absolute inset-0">

//     {/* React */}
//     <div className="absolute left-[20%] top-[5%] z-20
//       flex -translate-x-1/2 flex-col items-center gap-2">
//       <div className="flex h-16 w-16 items-center justify-center
//         rounded-2xl border border-cyan-400/40 bg-[#0b2030]/95
//         text-cyan-300 shadow-lg shadow-cyan-500/10
//         transition duration-300 hover:-translate-y-1
//         sm:h-[72px] sm:w-[72px]">
//         <Atom size={38} strokeWidth={1.6} />
//       </div>
//       <span className="text-xs font-medium text-slate-300">
//         React
//       </span>
//     </div>

//     {/* Node.js */}
//     <div className="absolute left-1/2 top-0 z-20
//       flex -translate-x-1/2 flex-col items-center gap-2">
//       <div className="flex h-16 w-16 items-center justify-center
//         rounded-2xl border border-emerald-400/40 bg-[#0b2030]/95
//         text-emerald-300 shadow-lg shadow-emerald-500/10
//         transition duration-300 hover:-translate-y-1
//         sm:h-[72px] sm:w-[72px]">
//         <Braces size={36} strokeWidth={1.6} />
//       </div>
//       <span className="text-xs font-medium text-slate-300">
//         Node.js
//       </span>
//     </div>

//     {/* Python */}
//     <div className="absolute right-[18%] top-[7%] z-20
//       flex translate-x-1/2 flex-col items-center gap-2">
//       <div className="flex h-16 w-16 items-center justify-center
//         rounded-2xl border border-blue-400/40 bg-[#0b2030]/95
//         text-blue-300 shadow-lg shadow-blue-500/10
//         transition duration-300 hover:-translate-y-1
//         sm:h-[72px] sm:w-[72px]">
//         <Code2 size={36} strokeWidth={1.6} />
//       </div>
//       <span className="text-xs font-medium text-slate-300">
//         Python
//       </span>
//     </div>

//     {/* Web Apps */}
//     <div className="absolute left-[2%] top-[39%] z-20
//       flex flex-col items-center gap-2">
//       <div className="flex h-14 w-14 items-center justify-center
//         rounded-2xl border border-violet-400/40 bg-[#0b2030]/95
//         text-violet-300 shadow-lg shadow-violet-500/10
//         sm:h-16 sm:w-16">
//         <Code2 size={32} />
//       </div>
//       <span className="text-xs text-slate-300">Web Apps</span>
//     </div>

//     {/* Database */}
//     <div className="absolute bottom-[13%] left-[5%] z-20
//       flex flex-col items-center gap-2">
//       <div className="flex h-14 w-14 items-center justify-center
//         rounded-2xl border border-blue-400/40 bg-[#0b2030]/95
//         text-blue-300 shadow-lg shadow-blue-500/10
//         sm:h-16 sm:w-16">
//         <Database size={32} />
//       </div>
//       <span className="text-xs text-slate-300">Database</span>
//     </div>

//     {/* API */}
//     <div className="absolute right-[2%] top-[40%] z-20
//       flex flex-col items-center gap-2">
//       <div className="flex h-14 w-14 items-center justify-center
//         rounded-2xl border border-sky-400/40 bg-[#0b2030]/95
//         text-sky-300 shadow-lg shadow-sky-500/10
//         sm:h-16 sm:w-16">
//         <Cloud size={32} />
//       </div>
//       <span className="text-xs text-slate-300">API</span>
//     </div>

//     {/* Scalable */}
//     <div className="absolute bottom-[13%] right-[5%] z-20
//       flex flex-col items-center gap-2">
//       <div className="flex h-14 w-14 items-center justify-center
//         rounded-2xl border border-cyan-400/40 bg-[#0b2030]/95
//         text-cyan-300 shadow-lg shadow-cyan-500/10
//         sm:h-16 sm:w-16">
//         <Settings size={32} />
//       </div>
//       <span className="text-xs text-slate-300">Scalable</span>
//     </div>
//   </div>

//   {/* Central laptop illustration */}
//   <div className="relative z-10 w-[68%] max-w-[310px]">
//     {/* Laptop screen */}
//     <div className="relative rounded-t-2xl border-2
//       border-cyan-400/80 bg-gradient-to-br
//       from-[#102b43] to-[#06121f] p-2
//       shadow-[0_0_35px_rgba(34,211,238,0.15)]">
      
//       {/* Editor top bar */}
//       <div className="flex items-center gap-1.5
//         rounded-t-lg bg-[#0b1b2b] px-2 py-2">
//         <span className="h-2 w-2 rounded-full bg-rose-400" />
//         <span className="h-2 w-2 rounded-full bg-amber-400" />
//         <span className="h-2 w-2 rounded-full bg-emerald-400" />
//         <span className="ml-auto text-[8px] text-slate-500">
//           developer.tsx
//         </span>
//       </div>

//       {/* Code editor */}
//       <div className="space-y-2 px-3 py-4 font-mono text-[9px]
//         leading-relaxed sm:text-[10px]">
//         <p className="text-violet-300">
//           const developer = {"{"}
//         </p>
//         <p className="pl-3 text-slate-300">
//           name: <span className="text-emerald-300">
//             &quot;Fatema&quot;
//           </span>,
//         </p>
//         <p className="pl-3 text-slate-300">
//           role: <span className="text-emerald-300">
//             &quot;Full-Stack Developer&quot;
//           </span>,
//         </p>
//         <p className="pl-3 text-slate-300">
//           skills: <span className="text-amber-300">
//             [&quot;React&quot;, &quot;API&quot;]
//           </span>
//         </p>
//         <p className="text-violet-300">{"};"}</p>
//       </div>
//     </div>

//     {/* Laptop base */}
//     <div className="relative -mt-px h-3 rounded-b-xl
//       border-x-2 border-b-2 border-cyan-400/70
//       bg-gradient-to-r from-blue-500/70 via-cyan-300/80
//       to-blue-500/70 shadow-[0_12px_25px_rgba(0,0,0,0.4)]">
//       <div className="mx-auto h-1 w-12 rounded-b-lg bg-[#16425b]" />
//     </div>

//     <p className="mt-4 text-center text-xs tracking-wide text-cyan-200/70">
//       &lt; Building ideas into products /&gt;
//     </p>
//   </div>
// </div>

//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useRef, useState } from "react";
import {
  Github,
  Linkedin,
  ArrowUpRight,
  Code2,
  Database,
  Cloud,
  Settings,
  Atom,
  Braces,
  Terminal,
  Cpu,
} from "lucide-react";
import { SiNestjs, SiNextdotjs } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const technologies = [
  { name: "React", Icon: Atom, color: "#22D3EE" },
  { name: "Node.js", Icon: Braces, color: "#86EFAC" },
  { name: "Nest.js", Icon: SiNestjs, color: "#E0234E" },
{ name: "Next.js", Icon: RiNextjsFill, color: "#FFFFFF" },
  { name: "API", Icon: Cloud, color: "#38BDF8" },
  { name: "Scalable", Icon: Settings, color: "#FBBF24" },
  { name: "Database", Icon: Database, color: "#818CF8" },
  { name: "Web Apps", Icon: Terminal, color: "#C084FC" },
  { name: "Systems", Icon: Cpu, color: "#2DD4BF" },
];

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

 function handlePointerMove(
  e: React.PointerEvent<HTMLDivElement>
) {
  const rect = e.currentTarget.getBoundingClientRect();

  const x =
    (e.clientX - rect.left) / rect.width;

  const y =
    (e.clientY - rect.top) / rect.height;

  setRotation((x - 0.5) * 45);

  setTilt({
    x: (0.5 - y) * 8,
    y: (x - 0.5) * 10,
  });
}

function resetPointer() {
  setRotation(0);
  setTilt({ x: 0, y: 0 });
}
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#07111d]
        px-4 pb-8 pt-24 text-white sm:px-6 lg:px-8"
    >
      <div
        className="relative mx-auto max-w-7xl overflow-hidden
          rounded-3xl border border-cyan-400/15
          bg-gradient-to-br from-[#07131f] via-[#08202a]
          to-[#0a3d38]"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-20
          -top-20 h-80 w-80 rounded-full bg-cyan-400/[0.08]
          blur-[100px]" />

        <div className="relative z-10 grid min-h-[540px]
          items-center gap-10 px-6 py-12 md:grid-cols-2
          md:px-10 lg:px-14">

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl font-bold leading-[1.05]
              tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400
                to-blue-400 bg-clip-text text-transparent">
                Fatema Akther
              </span>
            </h1>

            <h2 className="mt-4 text-xl font-medium
              text-slate-200 sm:text-2xl">
              Full-Stack Developer
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-[15px]
              leading-7 text-slate-400 sm:text-base md:mx-0">
              I build scalable full-stack web applications,
              combining modern interfaces, robust APIs,
              backend services, and reliable data systems.
            </p>

            {/* Social buttons */}
            <div className="mt-7 flex flex-wrap items-center
              justify-center gap-3 md:justify-start">
              <a
                href="https://github.com/Fatema-Akther"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                  rounded-lg border border-cyan-400/25
                  bg-white/[0.03] px-4 py-2.5 text-sm
                  font-medium text-slate-200 transition
                  hover:border-cyan-400/60
                  hover:bg-cyan-400/[0.08]
                  hover:text-cyan-300"
              >
                <Github size={16} />
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/fatemaakhterdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                  rounded-lg border border-cyan-400/25
                  bg-white/[0.03] px-4 py-2.5 text-sm
                  font-medium text-slate-200 transition
                  hover:border-cyan-400/60
                  hover:bg-cyan-400/[0.08]
                  hover:text-cyan-300"
              >
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Resume */}
            <div className="mt-5">
              <a
                href="/Fatema_Akther_Full_Stack_Developer_Resume.pdf"
                download
                className="inline-flex items-center gap-2
                  rounded-lg bg-cyan-400 px-5 py-3
                  font-semibold text-[#07111d] transition
                  hover:bg-cyan-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE ORBIT */}
          <div
            ref={sceneRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
            className="relative mx-auto flex w-full max-w-[540px]
              select-none items-center justify-center
              [touch-action:pan-y]"
          >
            <div className="relative aspect-square w-full">

              {/* Background glow */}
              <div className="pointer-events-none absolute
                left-1/2 top-1/2 h-[65%] w-[65%]
                -translate-x-1/2 -translate-y-1/2
                rounded-full bg-cyan-400/10 blur-[70px]" />

       {/* Outer orbit */}
<div className="pointer-events-none absolute
  left-1/2 top-1/2 h-[88%] w-[88%]
  -translate-x-1/2 -translate-y-1/2
  rounded-full border border-cyan-400/15" />

{/* Inner dotted orbit */}
<div className="pointer-events-none absolute
  left-1/2 top-1/2 h-[72%] w-[72%]
  -translate-x-1/2 -translate-y-1/2
  rounded-full border border-dashed
  border-cyan-400/30" />


  
{/* Bright orbit particles */}
<div className="pointer-events-none absolute inset-0">
  {Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * Math.PI * 2;
    const radiusX = 44;
    const radiusY = 44;

    const left = 50 + radiusX * Math.cos(angle);
    const top = 50 + radiusY * Math.sin(angle);

    const colors = [
      "#22D3EE",
      "#38BDF8",
      "#60A5FA",
      "#2DD4BF",
      "#A78BFA",
    ];

    const color = colors[i % colors.length];
    const isLarge = i % 4 === 0;

    return (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: isLarge ? "5px" : "2.5px",
          height: isLarge ? "5px" : "2.5px",
          backgroundColor: color,
          boxShadow: `0 0 ${isLarge ? 14 : 7}px ${color},
            0 0 ${isLarge ? 24 : 12}px ${color}90`,
          transform: "translate(-50%, -50%)",
          animation: `orbitPulse ${1.4 + (i % 5) * 0.35}s
            ease-in-out ${i * 0.08}s infinite alternate`,
        }}
      />
    );
  })}

  {/* Larger glowing particles */}
  {[
    { x: 18, y: 30, color: "#22D3EE" },
    { x: 82, y: 25, color: "#38BDF8" },
    { x: 88, y: 65, color: "#2DD4BF" },
    { x: 24, y: 80, color: "#60A5FA" },
    { x: 50, y: 7, color: "#22D3EE" },
    { x: 50, y: 93, color: "#2DD4BF" },
  ].map((dot, i) => (
    <div
      key={`glow-${i}`}
      className="absolute h-1.5 w-1.5 rounded-full"
      style={{
        left: `${dot.x}%`,
        top: `${dot.y}%`,
        backgroundColor: dot.color,
        boxShadow: `0 0 8px 2px ${dot.color},
          0 0 20px ${dot.color}`,
        transform: "translate(-50%, -50%)",
        animation: `orbitPulse 1.8s ease-in-out
          ${i * 0.25}s infinite alternate`,
      }}
    />
  ))}
</div>


              {/* Central coding laptop */}
           
{/* CENTRAL NEON LAPTOP IMAGE */}
<div
  className="absolute left-1/2 top-1/2 z-10
    w-[72%] max-w-[390px]
    -translate-x-1/2 -translate-y-1/2
    transition-transform duration-200"
  style={{
    transform: `translate(-50%, -50%)
      perspective(900px)
      rotateX(${tilt.x * 0.15}deg)
      rotateY(${tilt.y * 0.2}deg)`,
  }}
>
  <img
    src="/laptop-neon1.png"
    alt="Neon laptop displaying code"
    className="h-auto w-full object-contain
      drop-shadow-[0_0_22px_rgba(0,190,255,0.45)]"
  />

  <p className="mt-1 text-center font-mono
    text-[9px] text-cyan-200/75">
    &lt; Building ideas into products /&gt;
  </p>
</div>


             
{/* Interactive elliptical technology orbit */}
<div
  className="absolute inset-0"
  style={{
    transform: `rotate(${rotation}deg)`,
    transition: "transform 180ms ease-out",
  }}
>
  {technologies.map((tech, index) => {
    const angle =
      (index / technologies.length) * Math.PI * 2 -
      Math.PI / 2;

    // Elliptical orbit radius
    const radiusX = 40;
    const radiusY = 40;

    const left =
      50 + radiusX * Math.cos(angle);

    const top =
      50 + radiusY * Math.sin(angle);

    return (
      <div
        key={tech.name}
        className="absolute flex w-[68px]
          -translate-x-1/2 -translate-y-1/2
          flex-col items-center gap-1.5
          sm:w-[82px]"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          transform: `translate(-50%, -50%)
            rotate(${-rotation}deg)`,
          transition: "transform 180ms ease-out",
        }}
      >
        {/* Neon icon card */}
        <div
          className="group flex h-12 w-12
            items-center justify-center rounded-xl
            border bg-[#081925]/95 backdrop-blur-md
            transition-all duration-300
            hover:scale-110 sm:h-[60px] sm:w-[60px]"
          style={{
            borderColor: `${tech.color}90`,
            color: tech.color,
            boxShadow: `0 0 24px ${tech.color}25`,
          }}
        >
          <tech.Icon
            size={28}
            
              color={tech.color}
          />
        </div>

        {/* Technology label */}
        <span className="whitespace-nowrap
          text-[9px] font-medium text-slate-200
          drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]
          sm:text-[11px]">
          {tech.name}
        </span>
      </div>
    );
  })}
</div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

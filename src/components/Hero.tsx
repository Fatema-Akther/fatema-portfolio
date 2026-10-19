



// "use client";

// import { useRef, useState } from "react";
// import {
//   Github,
//   Linkedin,
//   ArrowUpRight,
//   Code2,
//   Database,
//   Cloud,
//   Settings,
//   Atom,
//   Braces,
//   Terminal,
//   Cpu,
// } from "lucide-react";
// import { SiNestjs, SiNextdotjs } from "react-icons/si";
// import { RiNextjsFill } from "react-icons/ri";

// const technologies = [
//   { name: "React", Icon: Atom, color: "#22D3EE" },
//   { name: "Node.js", Icon: Braces, color: "#86EFAC" },
//   { name: "Nest.js", Icon: SiNestjs, color: "#E0234E" },
// { name: "Next.js", Icon: RiNextjsFill, color: "#FFFFFF" },
//   { name: "API", Icon: Cloud, color: "#38BDF8" },
//   { name: "Scalable", Icon: Settings, color: "#FBBF24" },
//   { name: "Database", Icon: Database, color: "#818CF8" },
//   { name: "Web Apps", Icon: Terminal, color: "#C084FC" },
//   { name: "Systems", Icon: Cpu, color: "#2DD4BF" },
// ];

// export default function Hero() {
//   const sceneRef = useRef<HTMLDivElement>(null);
//   const [rotation, setRotation] = useState(0);
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });

//  function handlePointerMove(
//   e: React.PointerEvent<HTMLDivElement>
// ) {
//   const rect = e.currentTarget.getBoundingClientRect();

//   const x =
//     (e.clientX - rect.left) / rect.width;

//   const y =
//     (e.clientY - rect.top) / rect.height;

//   setRotation((x - 0.5) * 45);

//   setTilt({
//     x: (0.5 - y) * 8,
//     y: (x - 0.5) * 10,
//   });
// }

// function resetPointer() {
//   setRotation(0);
//   setTilt({ x: 0, y: 0 });
// }
//   return (
//     <section
//       id="hero"
//       className="relative overflow-hidden bg-[#07111d]
//         px-4 pb-8 pt-24 text-white sm:px-6 lg:px-8"
//     >
//       <div
//         className="relative mx-auto max-w-7xl overflow-hidden
//           rounded-3xl border border-cyan-400/15
//           bg-gradient-to-br from-[#07131f] via-[#08202a]
//           to-[#0a3d38]"
//       >
//         {/* Ambient glow */}
//         <div className="pointer-events-none absolute -right-20
//           -top-20 h-80 w-80 rounded-full bg-cyan-400/[0.08]
//           blur-[100px]" />

//         <div className="relative z-10 grid min-h-[540px]
//           items-center gap-10 px-6 py-12 md:grid-cols-2
//           md:px-10 lg:px-14">

//           {/* LEFT CONTENT */}
//           <div className="max-w-xl text-center md:text-left">
//             <h1 className="text-4xl font-bold leading-[1.05]
//               tracking-[-0.03em] sm:text-5xl lg:text-6xl">
//               Hi, I&apos;m{" "}
//               <span className="bg-gradient-to-r from-cyan-400
//                 to-blue-400 bg-clip-text text-transparent">
//                 Fatema Akther
//               </span>
//             </h1>

//             <h2 className="mt-4 text-xl font-medium
//               text-slate-200 sm:text-2xl">
//               Full-Stack Developer
//             </h2>

//             <p className="mx-auto mt-5 max-w-lg text-[15px]
//               leading-7 text-slate-400 sm:text-base md:mx-0">
//               I build scalable full-stack web applications,
//               combining modern interfaces, robust APIs,
//               backend services, and reliable data systems.
//             </p>

//             {/* Social buttons */}
//             <div className="mt-7 flex flex-wrap items-center
//               justify-center gap-3 md:justify-start">
//               <a
//                 href="https://github.com/Fatema-Akther"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2
//                   rounded-lg border border-cyan-400/25
//                   bg-white/[0.03] px-4 py-2.5 text-sm
//                   font-medium text-slate-200 transition
//                   hover:border-cyan-400/60
//                   hover:bg-cyan-400/[0.08]
//                   hover:text-cyan-300"
//               >
//                 <Github size={16} />
//                 GitHub
//                 <ArrowUpRight size={14} />
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/fatemaakhterdev/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2
//                   rounded-lg border border-cyan-400/25
//                   bg-white/[0.03] px-4 py-2.5 text-sm
//                   font-medium text-slate-200 transition
//                   hover:border-cyan-400/60
//                   hover:bg-cyan-400/[0.08]
//                   hover:text-cyan-300"
//               >
//                 <Linkedin size={16} />
//                 LinkedIn
//                 <ArrowUpRight size={14} />
//               </a>
//             </div>

//             {/* Resume */}
//             <div className="mt-5">
//               <a
//                 href="/Fatema_Akther_Full_Stack_Developer_Resume.pdf"
//                 download
//                 className="inline-flex items-center gap-2
//                   rounded-lg bg-cyan-400 px-5 py-3
//                   font-semibold text-[#07111d] transition
//                   hover:bg-cyan-300"
//               >
//                 Download Resume
//               </a>
//             </div>
//           </div>

//           {/* RIGHT: INTERACTIVE ORBIT */}
//           <div
//             ref={sceneRef}
//             onPointerMove={handlePointerMove}
//             onPointerLeave={resetPointer}
//             className="relative mx-auto flex w-full max-w-[540px]
//               select-none items-center justify-center
//               [touch-action:pan-y]"
//           >
//             <div className="relative aspect-square w-full">

//               {/* Background glow */}
//               <div className="pointer-events-none absolute
//                 left-1/2 top-1/2 h-[65%] w-[65%]
//                 -translate-x-1/2 -translate-y-1/2
//                 rounded-full bg-cyan-400/10 blur-[70px]" />

//        {/* Outer orbit */}
// <div className="pointer-events-none absolute
//   left-1/2 top-1/2 h-[88%] w-[88%]
//   -translate-x-1/2 -translate-y-1/2
//   rounded-full border border-cyan-400/15" />

// {/* Inner dotted orbit */}
// <div className="pointer-events-none absolute
//   left-1/2 top-1/2 h-[72%] w-[72%]
//   -translate-x-1/2 -translate-y-1/2
//   rounded-full border border-dashed
//   border-cyan-400/30" />


  
// {/* Bright orbit particles */}
// <div className="pointer-events-none absolute inset-0">
//   {Array.from({ length: 24 }, (_, i) => {
//     const angle = (i / 24) * Math.PI * 2;
//     const radiusX = 44;
//     const radiusY = 44;

//     const left = 50 + radiusX * Math.cos(angle);
//     const top = 50 + radiusY * Math.sin(angle);

//     const colors = [
//       "#22D3EE",
//       "#38BDF8",
//       "#60A5FA",
//       "#2DD4BF",
//       "#A78BFA",
//     ];

//     const color = colors[i % colors.length];
//     const isLarge = i % 4 === 0;

//     return (
//       <div
//         key={i}
//         className="absolute rounded-full"
//         style={{
//           left: `${left}%`,
//           top: `${top}%`,
//           width: isLarge ? "5px" : "2.5px",
//           height: isLarge ? "5px" : "2.5px",
//           backgroundColor: color,
//           boxShadow: `0 0 ${isLarge ? 14 : 7}px ${color},
//             0 0 ${isLarge ? 24 : 12}px ${color}90`,
//           transform: "translate(-50%, -50%)",
//           animation: `orbitPulse ${1.4 + (i % 5) * 0.35}s
//             ease-in-out ${i * 0.08}s infinite alternate`,
//         }}
//       />
//     );
//   })}

//   {/* Larger glowing particles */}
//   {[
//     { x: 18, y: 30, color: "#22D3EE" },
//     { x: 82, y: 25, color: "#38BDF8" },
//     { x: 88, y: 65, color: "#2DD4BF" },
//     { x: 24, y: 80, color: "#60A5FA" },
//     { x: 50, y: 7, color: "#22D3EE" },
//     { x: 50, y: 93, color: "#2DD4BF" },
//   ].map((dot, i) => (
//     <div
//       key={`glow-${i}`}
//       className="absolute h-1.5 w-1.5 rounded-full"
//       style={{
//         left: `${dot.x}%`,
//         top: `${dot.y}%`,
//         backgroundColor: dot.color,
//         boxShadow: `0 0 8px 2px ${dot.color},
//           0 0 20px ${dot.color}`,
//         transform: "translate(-50%, -50%)",
//         animation: `orbitPulse 1.8s ease-in-out
//           ${i * 0.25}s infinite alternate`,
//       }}
//     />
//   ))}
// </div>


//               {/* Central coding laptop */}
           
// {/* CENTRAL NEON LAPTOP IMAGE */}
// <div
//   className="absolute left-1/2 top-1/2 z-10
//     w-[72%] max-w-[390px]
//     -translate-x-1/2 -translate-y-1/2
//     transition-transform duration-200"
//   style={{
//     transform: `translate(-50%, -50%)
//       perspective(900px)
//       rotateX(${tilt.x * 0.15}deg)
//       rotateY(${tilt.y * 0.2}deg)`,
//   }}
// >
//   <img
//     src="/laptop-neon1.png"
//     alt="Neon laptop displaying code"
//     className="h-auto w-full object-contain
//       drop-shadow-[0_0_22px_rgba(0,190,255,0.45)]"
//   />

//   <p className="mt-1 text-center font-mono
//     text-[9px] text-cyan-200/75">
//     &lt; Building ideas into products /&gt;
//   </p>
// </div>


             
// {/* Interactive elliptical technology orbit */}
// <div
//   className="absolute inset-0"
//   style={{
//     transform: `rotate(${rotation}deg)`,
//     transition: "transform 180ms ease-out",
//   }}
// >
//   {technologies.map((tech, index) => {
//     const angle =
//       (index / technologies.length) * Math.PI * 2 -
//       Math.PI / 2;

//     // Elliptical orbit radius
//     const radiusX = 40;
//     const radiusY = 40;

//     const left =
//       50 + radiusX * Math.cos(angle);

//     const top =
//       50 + radiusY * Math.sin(angle);

//     return (
//       <div
//         key={tech.name}
//         className="absolute flex w-[68px]
//           -translate-x-1/2 -translate-y-1/2
//           flex-col items-center gap-1.5
//           sm:w-[82px]"
//         style={{
//           left: `${left}%`,
//           top: `${top}%`,
//           transform: `translate(-50%, -50%)
//             rotate(${-rotation}deg)`,
//           transition: "transform 180ms ease-out",
//         }}
//       >
//         {/* Neon icon card */}
//         <div
//           className="group flex h-12 w-12
//             items-center justify-center rounded-xl
//             border bg-[#081925]/95 backdrop-blur-md
//             transition-all duration-300
//             hover:scale-110 sm:h-[60px] sm:w-[60px]"
//           style={{
//             borderColor: `${tech.color}90`,
//             color: tech.color,
//             boxShadow: `0 0 24px ${tech.color}25`,
//           }}
//         >
//           <tech.Icon
//             size={28}
            
//               color={tech.color}
//           />
//         </div>

//         {/* Technology label */}
//         <span className="whitespace-nowrap
//           text-[9px] font-medium text-slate-200
//           drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]
//           sm:text-[11px]">
//           {tech.name}
//         </span>
//       </div>
//     );
//   })}
// </div>


//             </div>
//           </div>
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

            <div className="mt-4 text-cyan-400 text-[14px] font-semibold">
         | BUILDING IDEAS INTO REALITY
         </div>

            {/* Resume */}
            <div className="mt-5 ">
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
           

{/* CENTRAL GLOWING DIGITAL GLOBE */}
{/* CENTRAL GLOWING DIGITAL GLOBE */}
<div
  className="pointer-events-none absolute left-1/2 top-1/2 z-[5]
    w-[88%] max-w-[440px]
    -translate-x-1/2 -translate-y-1/2
    transition-transform duration-200"
  style={{
    transform: `translate(-50%, -50%)
      perspective(900px)
      rotateX(${tilt.x * 0.08}deg)
      rotateY(${tilt.y * 0.12}deg)`,
  }}
>
  <div className="relative aspect-square w-full">

    {/* Ambient glow */}
    <div
      className="absolute inset-[8%] rounded-full blur-[35px]"
      style={{
        background:
          "radial-gradient(circle, rgba(0,190,255,0.22), rgba(37,99,235,0.10) 50%, transparent 75%)",
      }}
    />

    {/* Globe */}
    <svg
      viewBox="0 0 320 320"
      className="relative h-full w-full overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="globeFill" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity=".22" />
          <stop offset="65%" stopColor="#082F49" stopOpacity=".32" />
          <stop offset="100%" stopColor="#020617" stopOpacity=".8" />
        </radialGradient>

        <linearGradient id="globeEdge" x1="30" y1="40" x2="290" y2="280">
          <stop stopColor="#22D3EE" />
          <stop offset=".5" stopColor="#2563EB" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>

        <clipPath id="globeClip">
          <circle cx="160" cy="160" r="124" />
        </clipPath>

        <pattern
          id="globeDots"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.15" fill="#38BDF8" />
        </pattern>

        <filter id="globeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* Outer atmosphere */}
      <circle
        cx="160"
        cy="160"
        r="130"
        stroke="#0EA5E9"
        strokeOpacity=".18"
      />

      <circle
        cx="160"
        cy="160"
        r="124"
        fill="url(#globeFill)"
        stroke="url(#globeEdge)"
        strokeWidth="1.5"
      />

      {/* Globe grid and world surface */}
      <g clipPath="url(#globeClip)">
        <ellipse
          cx="160"
          cy="160"
          rx="53"
          ry="124"
          stroke="#38BDF8"
          strokeOpacity=".3"
        />

        <ellipse
          cx="160"
          cy="160"
          rx="94"
          ry="124"
          stroke="#38BDF8"
          strokeOpacity=".2"
        />

        <ellipse
          cx="160"
          cy="160"
          rx="124"
          ry="43"
          stroke="#38BDF8"
          strokeOpacity=".3"
        />

        <ellipse
          cx="160"
          cy="160"
          rx="124"
          ry="83"
          stroke="#38BDF8"
          strokeOpacity=".2"
        />

        {/* Dotted world-map inspired continents */}
        <path
          d="M45 90 L62 66 L88 62 L103 76 L99 94
             L116 106 L103 124 L86 119 L76 142
             L60 130 L50 109 Z
             M119 142 L141 133 L158 151 L151 177
             L169 194 L157 224 L143 240 L133 211
             L124 186 L109 169 Z
             M176 83 L196 67 L226 72 L246 91
             L267 98 L260 119 L239 123 L228 143
             L211 136 L202 112 L181 109 Z
             M211 153 L237 146 L255 166
             L248 194 L226 216 L213 191 Z"
          fill="url(#globeDots)"
          stroke="#38BDF8"
          strokeOpacity=".38"
          strokeWidth=".8"
        />

        {/* Network connections */}
        <g
          stroke="#22D3EE"
          strokeWidth="1"
          strokeOpacity=".75"
        >
          <path d="M65 119 L101 91 L132 120 L173 94 L214 114 L247 89" />
          <path d="M101 91 L111 151 L151 177 L196 151 L214 114" />
          <path d="M65 119 L84 174 L111 151 L137 207 L176 224" />
          <path d="M132 120 L151 177 L196 151 L225 184 L248 166" />
          <path d="M173 94 L196 151 L176 224 L225 184" />
          <path d="M84 174 L137 207 L176 224" />
        </g>

        {/* Connected network nodes */}
        {[
          [65, 119],
          [101, 91],
          [132, 120],
          [173, 94],
          [214, 114],
          [247, 89],
          [111, 151],
          [151, 177],
          [196, 151],
          [84, 174],
          [137, 207],
          [176, 224],
          [225, 184],
          [248, 166],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="5"
              fill="#22D3EE"
              opacity=".2"
            />
            <circle
              cx={x}
              cy={y}
              r="2"
              fill={i % 3 === 0 ? "#A78BFA" : "#67E8F9"}
            />
          </g>
        ))}
      </g>

      {/* Highlighted globe edge */}
      <path
        d="M65 70 A124 124 0 0 1 260 91"
        stroke="#67E8F9"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".75"
      />

      {/* Orbital connection */}
      <ellipse
        cx="160"
        cy="160"
        rx="144"
        ry="53"
        transform="rotate(-32 160 160)"
        stroke="#22D3EE"
        strokeOpacity=".35"
        strokeDasharray="3 7"
      />

      {/* Orbit point */}
      <circle cx="274" cy="96" r="3" fill="#22D3EE" />
      <circle
        cx="274"
        cy="96"
        r="7"
        fill="#22D3EE"
        opacity=".22"
        filter="url(#globeGlow)"
      />
    </svg>

    {/* Center label */}
    
{/* Globe caption */}


  </div>
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
    const radiusX = 43;
    const radiusY = 43;

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
            hover:scale-110 sm:h-[54px] sm:w-[56px]"
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

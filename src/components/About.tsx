




// src/components/About.tsx
"use client";
import { ArrowUpRight, Code2, Cpu, Database, Globe, Server, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { icon: Code2, name: "Next.js", level: 90 },
    { icon: Code2, name: "TypeScript", level: 88 },
    { icon: Database, name: "Backend", level: 80 },
    { icon: Globe, name: "Web Architecture", level: 85 },
    { icon: Server, name: "System Design", level: 82 },
    { icon: Cpu, name: "AI/ML (Basic)", level: 70 },
  ];

  const stats = [
    { number: "1+", label: "Years of Learning" },
    { number: "5+", label: "Projects Completed" },
    { number: "100%", label: "Learning Passion" },
  ];

  return (
//    <section
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
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl md:text-6xl font-bold mb-6"
//           >
//             About{" "}
//             <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
//               Me
//             </span>
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0, width: 0 }}
//             whileInView={{ opacity: 1, width: 100 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
//           />
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side - Visual & Stats */}
//           <div className="space-y-8">
//             {/* Stats Grid */}
//             <div className="grid grid-cols-3 gap-6">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Main Visual Card */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
//               <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl">
//                     <Zap className="w-8 h-8 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//                       Web Developer
//                     </h3>
//                     <p className="text-cyan-500 font-medium">
//                       Modern Web Technologies
//                     </p>
//                   </div>
//                 </div>

//             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//   I’m a passionate Computer Science graduate from AIUB with a strong interest in
//   modern web development. I enjoy building interactive and user-friendly web
//   applications using <span className="font-medium">Next.js, TypeScript</span>,{" "}
//   <span className="font-medium">Tailwind CSS</span>, and developing backend
//   services with <span className="font-medium">NestJS</span>. My goal is to grow
//   into a full-stack developer who creates efficient, scalable, and impactful web
//   applications.
// </p>



//                 {/* Floating Elements */}
//                 <div className="flex justify-center gap-6 mt-8">
//                   {[Code2, Database, Cpu].map((Icon, index) => (
//                     <motion.div
//                       key={index}
//                       animate={{ y: [0, -10, 0] }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         delay: index * 0.5,
//                       }}
//                       className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md"
//                     >
//                       <Icon className="w-6 h-6 text-cyan-500" />
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side - Content */}
//           <div className="space-y-8">
//             {/* Introduction */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               className="space-y-6"
//             >
//               <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
//                 Hi, I'm{" "}
//                 <span className="text-cyan-500">Fatema Akther</span>
//               </h3>

//              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//   I enjoy building responsive and performance-driven web applications using{" "}
//   <span className="text-cyan-400 font-medium">
//     Next.js, TypeScript, Tailwind CSS
//   </span>{" "}
//   and backend services with{" "}
//   <span className="text-cyan-400 font-medium">NestJS</span>.
//   My personal projects include{" "}
//   <span className="font-semibold text-white">QuadCart (E-commerce API)</span>{" "}
//   and{" "}
//   <span className="font-semibold text-white">
//     NextTail Starter (Next.js Template)
//   </span>
//   , reflecting my interest in scalable and reusable systems.
// </p>


              

//               <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//                 I’m eager to join a dynamic team as a{" "}
//                 <span className="font-semibold text-cyan-500">
//                   frontend or full-stack developer
//                 </span>{" "}
//                 where I can continue learning, improving, and contributing to
//                 real-world projects that make an impact.
//               </p>
//             </motion.div>

//             {/* Skills Grid */}
//             {/* <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="grid grid-cols-2 gap-4"
//             >
//               {skills.map((skill, index) => (
//                 <motion.div
//                   key={skill.name}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
//                 >
//                   <div className="p-2 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
//                     <skill.icon className="w-5 h-5 text-cyan-500" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center mb-1">
//                       <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                         {skill.name}
//                       </span>
//                       <span className="text-xs text-cyan-500 font-semibold">
//                         {skill.level}%
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                       <div
//                         className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
//                         style={{ width: `${skill.level}%` }}
//                       />
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div> */}

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="flex flex-wrap gap-4 pt-6"
//             >
//               <a
//                 href="#projects"
//                 className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2"
//               >
//                 <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                 View Projects
//               </a>
//               <a
//                 href="#contact"
//                 className="group border-2 border-cyan-500 text-cyan-500 px-8 py-4 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center gap-2"
//               >
//                 <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                 Contact Me
//               </a>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>



<section
  id="about"
  className="relative bg-[#07111d] px-4 py-24 text-white sm:px-6 lg:px-8"
>
  {/* Background glow */}
  <div className="pointer-events-none absolute left-1/2 top-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-400/[0.04] blur-[120px]" />

  <div className="relative mx-auto max-w-7xl">

    {/* =========================
        SECTION HEADER
    ========================== */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
        Get to know me
      </p>

      <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
        About{" "}
        <span className="text-cyan-400">
          Me
        </span>
      </h2>

      <div className="mx-auto mt-5 h-[2px] w-14 rounded-full bg-cyan-400" />
    </motion.div>

    {/* =========================
        MAIN CONTENT
    ========================== */}
    <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="
          rounded-2xl
          border border-white/[0.08]
          bg-white/[0.025]
          p-7
          sm:p-9
        "
      >
        <p className="text-sm font-medium text-cyan-400">
          Full-Stack Development
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
         I enjoy turning ideas into practical web products.
        </h3>

        <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-400 sm:text-base">
  <p>
    I&apos;m a Computer Science graduate from{" "}
    <span className="font-medium text-slate-200">
      AIUB
    </span>{" "}
   with a strong interest in modern web development. I enjoy building responsive, user-friendly applications with clean interfaces, maintainable code, and well-structured backend systems.
  </p>

 <p>
  I work across the full stack, building responsive interfaces with{" "}
  <span className="font-medium text-slate-200">
    Next.js, TypeScript and Tailwind CSS
  </span>
  , developing backend services and APIs with{" "}
  <span className="font-medium text-slate-200">
    NestJS
  </span>
  , and managing application data with{" "}
  <span className="font-medium text-slate-200">
    PostgreSQL
  </span>
  .
</p>

  <p>
    Through personal projects, I&apos;ve been exploring reusable
    architectures, API development and practical full-stack workflows.
    I&apos;m currently focused on building real products, strengthening
    my engineering practices, and solving practical development problems.
  </p>
</div>

        {/* Projects Mention */}
        <div className="mt-8 border-t border-white/[0.07] pt-7">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Selected personal work
          </p>

          <div className="flex flex-wrap gap-3">
            <span
              className="
                rounded-lg
                border border-white/[0.08]
                bg-white/[0.03]
                px-3.5 py-2
                text-sm text-slate-300
              "
            >
            Alurea
            </span>

            <span
              className="
                rounded-lg
                border border-white/[0.08]
                bg-white/[0.03]
                px-3.5 py-2
                text-sm text-slate-300
              "
            >
             Vellora
            </span>
            <span
              className="
                rounded-lg
                border border-white/[0.08]
                bg-white/[0.03]
                px-3.5 py-2
                text-sm text-slate-300
              "
            >
             Zivana
            </span>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="space-y-5"
      >

        {/* QUICK INFO CARD */}
        <div
          className="
            rounded-2xl
            border border-white/[0.08]
            bg-[#0b1824]
            p-7
          "
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            Quick overview
          </p>

          <div className="mt-6 divide-y divide-white/[0.07]">

            <div className="flex items-start justify-between gap-5 py-4 first:pt-0">
  <span className="text-sm text-slate-500">
    Education
  </span>

  <div className="text-right">
  <p className="text-sm font-medium text-slate-200">
    BSc in Computer Science
  </p>

  <p className="mt-1 text-xs text-slate-500">
    American International University-Bangladesh (AIUB)
  </p>

  <p className="mt-1 text-xs text-slate-600">
    Graduation Year: 2026
  </p>
</div>
</div>

            <div className="flex items-center justify-between gap-5 py-4">
              <span className="text-sm text-slate-500">
                Focus
              </span>

              <span className="text-right text-sm font-medium text-slate-200">
                Full-Stack Development
              </span>
            </div>

            <div className="flex items-center justify-between gap-5 py-4">
              <span className="text-sm text-slate-500">
                Projects
              </span>

              <span className="text-right text-sm font-medium text-slate-200">
                5+ Built
              </span>
            </div>

            <div className="flex items-center justify-between gap-5 py-4 last:pb-0">
              <span className="text-sm text-slate-500">
                Current goal
              </span>

              <span className="text-right text-sm font-medium text-slate-200">
                Real-world product development
              </span>
            </div>
          </div>
        </div>

        {/* CAREER GOAL */}
        <div
          className="
            rounded-2xl
            border border-cyan-400/15
            bg-cyan-400/[0.035]
            p-7
          "
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            What I&apos;m looking for
          </p>

          <p className="mt-4 text-[15px] leading-7 text-slate-400">
            I&apos;m interested in full-stack development opportunities where I can contribute to real products, work with an experienced team, and continue growing as a developer.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <a
            href="#projects"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-cyan-400
              px-5 py-3
              text-sm font-semibold
              text-[#07111d]
              transition-all duration-300
              hover:bg-cyan-300
            "
          >
            View Projects

            <ArrowUpRight
              className="
                h-4 w-4
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-lg
              border border-white/10
              bg-white/[0.025]
              px-5 py-3
              text-sm font-medium
              text-slate-300
              transition-all duration-300
              hover:border-cyan-400/40
              hover:text-cyan-300
            "
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  </div>
</section>
  );
}

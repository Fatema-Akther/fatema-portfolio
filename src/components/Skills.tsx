

// "use client";
// import { SiTypescript, SiReact, SiTailwindcss, SiNodedotjs, SiMysql, SiMongodb } from "react-icons/si";

// export default function Skills() {
//   const skills = [
//     {
//       name: "TypeScript",
//       description:
//         "Strongly typed JavaScript for building reliable, scalable, and maintainable web applications.",
//       color: "from-blue-900 to-blue-700",
//       icon: <SiTypescript className="text-4xl text-blue-400" />,
//       tags: ["Interfaces", "Generics", "Type Safety"],
//     },
//     {
//        name: "Next.js",
//   description: "React framework for SSR, SSG, and full-stack apps.",
//       color: "from-cyan-900 to-blue-800",
//       icon: <SiReact className="text-4xl text-cyan-400" />,
//       tags: ["Hooks", "Components", "State Management"],
//     },


//     {
//   name: "NestJS",
//   description:
//     "A progressive Node.js framework for building efficient and scalable server-side applications.",
//   color: "from-purple-900 to-pink-800",
//   icon: <SiNodedotjs className="text-4xl text-purple-400" />,
//   tags: ["REST APIs", "GraphQL", "Microservices"],
// },

//     {
//       name: "Tailwind CSS",
//       description:
//         "Utility-first CSS framework for designing responsive and modern web layouts with ease.",
//       color: "from-indigo-900 to-purple-800",
//       icon: <SiTailwindcss className="text-4xl text-sky-400" />,
//       tags: ["Responsive", "UI Design", "Animations"],
//     },
//     {
//       name: "Node.js",
//       description:
//         "JavaScript runtime for developing scalable backend APIs and server-side applications.",
//       color: "from-green-900 to-emerald-800",
//       icon: <SiNodedotjs className="text-4xl text-green-400" />,
//       tags: ["Express.js", "API Development", "REST"],
//     },
//     {
//       name: "Database (SQL/NoSQL)",
//       description:
//         "Experience with relational and non-relational databases for structured and flexible data storage.",
//       color: "from-teal-900 to-emerald-700",
//       icon: (
//         <div className="flex gap-2">
//           <SiMysql className="text-3xl text-orange-300" />
//           <SiMongodb className="text-3xl text-green-400" />
//         </div>
//       ),
//       tags: ["MySQL", "PostgreSQL"],
//     },
//   ];

//   return (
//     <section
//       id="skills"
//       className="min-h-screen bg-gradient-to-br from-gray-800 via-teal-900 to-emerald-900 text-white px-6 md:px-20 py-20"
//     >
//       <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400">
//         My Core Skills
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className={`p-8 rounded-2xl shadow-lg bg-gradient-to-br ${skill.color} hover:scale-105 transition-transform duration-300`}
//           >
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex items-center gap-3">
//                 {skill.icon}
//                 <h3 className="text-2xl font-semibold">{skill.name}</h3>
//               </div>
//               <span className="text-sm bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
//                 {index + 1}
//               </span>
//             </div>

//             <p className="text-gray-200 mb-6 text-sm leading-relaxed">
//               {skill.description}
//             </p>

//             <div className="flex flex-wrap gap-2">
//               {skill.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="text-sm bg-white/10 border border-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-all duration-200"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import {
  Code2,
  PanelsTopLeft,
  Server,
  Database,
  Cloud,
  Wrench,
  Gauge,
} from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["JavaScript", "TypeScript"],
      iconStyle:
        "text-blue-400 bg-blue-500/10 border-blue-400/20",
      tagStyle:
        "text-blue-300 bg-blue-500/[0.07] border-blue-400/20 hover:bg-blue-500/[0.14]",
      hoverBorder: "hover:border-blue-400/30",
      glow: "group-hover:bg-blue-500/[0.08]",
    },

    {
      title: "Frontend",
      icon: PanelsTopLeft,
      skills: ["React", "Next.js", "Tailwind CSS"],
      iconStyle:
        "text-violet-400 bg-violet-500/10 border-violet-400/20",
      tagStyle:
        "text-violet-300 bg-violet-500/[0.07] border-violet-400/20 hover:bg-violet-500/[0.14]",
      hoverBorder: "hover:border-violet-400/30",
      glow: "group-hover:bg-violet-500/[0.08]",
    },

    {
      title: "Backend & APIs",
      icon: Server,
      skills: ["Node.js", "NestJS", "REST APIs"],
      iconStyle:
        "text-emerald-400 bg-emerald-500/10 border-emerald-400/20",
      tagStyle:
        "text-emerald-300 bg-emerald-500/[0.07] border-emerald-400/20 hover:bg-emerald-500/[0.14]",
      hoverBorder: "hover:border-emerald-400/30",
      glow: "group-hover:bg-emerald-500/[0.08]",
    },

    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL"],
      iconStyle:
        "text-orange-400 bg-orange-500/10 border-orange-400/20",
      tagStyle:
        "text-orange-300 bg-orange-500/[0.07] border-orange-400/20 hover:bg-orange-500/[0.14]",
      hoverBorder: "hover:border-orange-400/30",
      glow: "group-hover:bg-orange-500/[0.08]",
    },

    // {
    //   title: "Deployment & Platforms",
    //   icon: Cloud,
    //   skills: ["Vercel", "Firebase", "Docker"],
    //   iconStyle:
    //     "text-purple-400 bg-purple-500/10 border-purple-400/20",
    //   tagStyle:
    //     "text-purple-300 bg-purple-500/[0.07] border-purple-400/20 hover:bg-purple-500/[0.14]",
    //   hoverBorder: "hover:border-purple-400/30",
    //   glow: "group-hover:bg-purple-500/[0.08]",
    // },

    {
      title: "Tools & Workflow",
      icon: Wrench,
      skills: ["Git", "GitHub", "Postman", "VS Code"],
      iconStyle:
        "text-slate-300 bg-slate-500/10 border-slate-400/20",
      tagStyle:
        "text-slate-300 bg-slate-500/[0.07] border-slate-400/20 hover:bg-slate-500/[0.14]",
      hoverBorder: "hover:border-slate-400/30",
      glow: "group-hover:bg-slate-500/[0.07]",
    },

    {
      title: "Web Performance & SEO",
      icon: Gauge,
      skills: [
        "Responsive Design",
        "SEO",
        "Lazy Loading",
        "Optimization",
      ],
      iconStyle:
        "text-yellow-400 bg-yellow-500/10 border-yellow-400/20",
      tagStyle:
        "text-yellow-300 bg-yellow-500/[0.07] border-yellow-400/20 hover:bg-yellow-500/[0.14]",
      hoverBorder: "hover:border-yellow-400/30",
      glow: "group-hover:bg-yellow-500/[0.07]",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="skills"
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
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute left-[15%] top-10
          h-[320px] w-[320px]
          rounded-full
          bg-cyan-400/[0.025]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute bottom-0 right-[5%]
          h-[300px] w-[300px]
          rounded-full
          bg-violet-500/[0.025]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
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
          className="mb-16 text-center"
        >
          <p
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-cyan-400
            "
          >
            Technologies I work with
          </p>

          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.03em]
              text-white
              sm:text-5xl
            "
          >
            Skills &{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              Expertise
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[15px]
              leading-7
              text-slate-400
            "
          >
            A focused set of technologies and tools I use to build
            responsive, maintainable and scalable web applications.
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
            className="
              mx-auto
              mt-5
              h-[2px]
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-400
            "
          />
        </motion.div>

        {/* Category cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.25,
                }}
                className={`
                  group
                  relative
                  min-h-[190px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#0B1622]
                  p-6
                  transition-colors
                  duration-300
                  ${category.hoverBorder}
                `}
              >
                {/* Hover glow */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-transparent
                    blur-3xl
                    transition-all
                    duration-500
                    ${category.glow}
                  `}
                />

                {/* Heading */}
                <div
                  className="
                    relative
                    flex
                    items-center
                    gap-4
                  "
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      ${category.iconStyle}
                    `}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <h3
                    className="
                      text-base
                      font-semibold
                      text-slate-100
                      sm:text-lg
                    "
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skill tags */}
                <div
                  className="
                    relative
                    mt-6
                    flex
                    flex-wrap
                    gap-2.5
                  "
                >
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`
                        rounded-lg
                        border
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        transition-all
                        duration-300
                        ${category.tagStyle}
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
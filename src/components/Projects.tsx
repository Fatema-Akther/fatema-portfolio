



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  FileText,
  Layers3,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  live: string;
  github?: string;
  frontendGithub?: string;
  backendGithub?: string;
  caseStudy?: string;
  tech: string[];
  category?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Complete eCommerce Management System",

      description:
        "A full-stack eCommerce management system built with Next.js, NestJS and PostgreSQL, featuring product and inventory management, order processing, Stripe mock payments, Shippo API integration and an admin dashboard.",

      image: "/images/35.png",

      live: "https://www.sumashop.xyz/",

      caseStudy: "/pdf/ecommerce-case-study1.pdf",

      frontendGithub:
        "https://github.com/Fatema-Akther/My_Shop_Frontend",

      backendGithub:
        "https://github.com/Fatema-Akther/My_Shop_Backend",

      tech: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Tailwind CSS",
      ],

      category: "Full-Stack Application",
    },





    
{
  title: "AI Client Hunter — AI-Powered Opportunity Discovery",

  description:
    "A personal AI-assisted platform built with Next.js and TypeScript to discover developer jobs, research potential agency clients, and identify publicly indexed hiring posts and small business profiles. Features multi-source API integration, lead filtering, Gemini AI analysis, application tracking, and a responsive dashboard.",

  image: "/images/ai-client-hunter.png",

  live: "https://ai-client-hunter.netlify.app/",

  github: "YOUR_GITHUB_REPOSITORY_URL",

  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "REST APIs",
    "Gemini API",
  ],

  category: "AI-Assisted Full-Stack Application",
},


    {
      title: "Zivana — E-Commerce Frontend",

      description:
        "A responsive fashion eCommerce storefront focused on product discovery, category navigation, modern layouts and a smooth shopping experience.",

      image: "/images/homepage2.png",

      live: "https://e-commerce-frontend-murex-mu.vercel.app/",

      github:
        "https://github.com/Fatema-Akther/nextjs-ecommerce-ui",

      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

      category: "Frontend Engineering",
    },

    {
      title: "Velora — E-Commerce UI",

      description:
        "A modern fashion-focused eCommerce interface featuring promotional sections, product layouts, category browsing and responsive shopping experiences.",

      image: "/images/3.png",

      live: "https://e-commerce-frontend-project-2.vercel.app/",

      github:
        "https://github.com/Fatema-Akther/velora-ecommerce-frontend",

      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

      category: "UI / UX Showcase",
    },
  ];

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="projects"
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
      <div
        className="
          pointer-events-none
          absolute left-[10%] top-24
          h-[320px] w-[320px]
          rounded-full
          bg-cyan-400/[0.025]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute bottom-10 right-[10%]
          h-[300px] w-[300px]
          rounded-full
          bg-blue-500/[0.025]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
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
            Selected Work
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
            Featured{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              Projects
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
            A selection of full-stack and frontend projects focused on
            practical functionality, responsive design and maintainable
            development.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 56 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
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

        {/* =========================
            FEATURED PROJECT
        ========================== */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          className="
            group
            relative
            mb-8
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.08]
            bg-[#0B1622]
            transition-all
            duration-300
            hover:border-cyan-400/25
          "
        >
          {/* hover glow */}
          <div
            className="
              pointer-events-none
              absolute -right-24 -top-24
              h-72 w-72
              rounded-full
              bg-cyan-400/0
              blur-[100px]
              transition-all
              duration-500
              group-hover:bg-cyan-400/[0.07]
            "
          />

          <div
            className="
              relative
              grid
              lg:grid-cols-[1.15fr_0.85fr]
            "
          >
            {/* Image */}
            <div
              className="
                relative
                min-h-[280px]
                overflow-hidden
                border-b
                border-white/[0.07]
                sm:min-h-[360px]
                lg:min-h-[470px]
                lg:border-b-0
                lg:border-r
              "
            >
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                priority
                className="
                  object-cover
                  object-top
                  transition-transform
                  duration-700
                  group-hover:scale-[1.025]
                "
              />

              {/* overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#07111d]/40
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* Content */}
            <div
              className="
                relative
                flex
                flex-col
                justify-center
                p-7
                sm:p-9
                lg:p-10
              "
            >
              {/* Category */}
              <div
                className="
                  mb-6
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/[0.06]
                  px-3 py-1.5
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-cyan-300
                "
              >
                <Layers3 className="h-3.5 w-3.5" />

                {featuredProject.category}
              </div>

              <h3
                className="
                  text-2xl
                  font-semibold
                  tracking-[-0.02em]
                  text-white
                  sm:text-3xl
                "
              >
                {featuredProject.title}
              </h3>

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-[15px]
                "
              >
                {featuredProject.description}
              </p>

              {/* Tech */}
              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-lg
                      border
                      border-cyan-400/15
                      bg-cyan-400/[0.05]
                      px-3 py-1.5
                      text-xs
                      font-medium
                      text-cyan-200
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-8 flex flex-wrap gap-3">

                {/* Live */}
                <a
                  href={featuredProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/link
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-cyan-400
                    px-4 py-2.5
                    text-sm
                    font-semibold
                    text-[#07111d]
                    transition-all
                    duration-300
                    hover:bg-cyan-300
                  "
                >
                  Live Demo

                  <ArrowUpRight
                    className="
                      h-4 w-4
                      transition-transform
                      duration-300
                      group-hover/link:-translate-y-0.5
                      group-hover/link:translate-x-0.5
                    "
                  />
                </a>

                {/* Case Study */}
                {featuredProject.caseStudy && (
                  <a
                    href={featuredProject.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[0.025]
                      px-4 py-2.5
                      text-sm
                      font-medium
                      text-slate-300
                      transition-all
                      duration-300
                      hover:border-cyan-400/30
                      hover:text-cyan-300
                    "
                  >
                    <FileText className="h-4 w-4" />

                    Case Study
                  </a>
                )}

                {/* Frontend Github */}
                {featuredProject.frontendGithub && (
                  <a
                    href={featuredProject.frontendGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[0.025]
                      px-4 py-2.5
                      text-sm
                      font-medium
                      text-slate-300
                      transition-all
                      duration-300
                      hover:border-cyan-400/30
                      hover:text-cyan-300
                    "
                  >
                    <Github className="h-4 w-4" />

                    Frontend
                  </a>
                )}

                {/* Backend Github */}
                {featuredProject.backendGithub && (
                  <a
                    href={featuredProject.backendGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[0.025]
                      px-4 py-2.5
                      text-sm
                      font-medium
                      text-slate-300
                      transition-all
                      duration-300
                      hover:border-cyan-400/30
                      hover:text-cyan-300
                    "
                  >
                    <Github className="h-4 w-4" />

                    Backend
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.article>

        {/* =========================
            OTHER PROJECTS
        ========================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {otherProjects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0B1622]
                transition-colors
                duration-300
                hover:border-cyan-400/25
              "
            >
              {/* Image */}
              <div
                className="
                  relative
                  aspect-[16/9]
                  overflow-hidden
                  border-b
                  border-white/[0.07]
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    group-hover:scale-[1.035]
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">

                {/* Category */}
                <span
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-cyan-400/15
                    bg-cyan-400/[0.05]
                    px-3 py-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.1em]
                    text-cyan-300
                  "
                >
                  {project.category}
                </span>

                <h3
                  className="
                    mt-5
                    text-xl
                    font-semibold
                    tracking-[-0.02em]
                    text-slate-100
                    sm:text-2xl
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-400
                  "
                >
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-lg
                        border
                        border-white/[0.07]
                        bg-white/[0.025]
                        px-2.5 py-1
                        text-[11px]
                        font-medium
                        text-slate-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/link
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-cyan-400
                      px-4 py-2.5
                      text-sm
                      font-semibold
                      text-[#07111d]
                      transition-all
                      duration-300
                      hover:bg-cyan-300
                    "
                  >
                    Live Demo

                    <ArrowUpRight
                      className="
                        h-4 w-4
                        transition-transform
                        duration-300
                        group-hover/link:-translate-y-0.5
                        group-hover/link:translate-x-0.5
                      "
                    />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.025]
                        px-4 py-2.5
                        text-sm
                        font-medium
                        text-slate-300
                        transition-all
                        duration-300
                        hover:border-cyan-400/30
                        hover:text-cyan-300
                      "
                    >
                      <Github className="h-4 w-4" />

                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
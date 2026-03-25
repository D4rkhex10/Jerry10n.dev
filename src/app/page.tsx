"use client";

import { useState } from "react";
import Image from "next/image";

const VENTURES = [
  {
    name: "STUDIO10N",
    role: "Founder & COO",
    desc: "AI-powered film and video production company integrating generative AI into pre-production, scripting, and visual development workflows for corporate clients.",
  },
  {
    name: "BOARD10N",
    role: "Founder",
    desc: "AI-powered SaaS storyboarding and visual brainstorming platform for filmmakers, brand teams, and creatives with real-time canvas interface.",
  },
  {
    name: "MERIDEX",
    role: "Founder",
    desc: "B2B intelligence company providing the freshest geospatial and firmographic data for Africa's fastest-growing markets. 591K+ GPS-tagged records across 30 countries.",
  },
  {
    name: "10NCUSTOMS",
    role: "Founder",
    desc: "Custom Snapchat AR lens design studio for individuals, brands, and enterprise campaigns with worldwide audience targeting.",
  },
];

const PROJECTS = [
  {
    id: "meridex",
    title: "MERIDEX - AFRICA B2B DATA PLATFORM",
    desc: "Built a geospatial B2B intelligence platform with 591,116 GPS-tagged business records across 30 African countries in under 24 hours. Includes POI data, healthcare facilities, and firmographic enrichment pipeline using OpenStreetMap, DeerFlow AI agents, and custom data cleaning scripts.",
    metrics: ["591K+ Records", "30 Countries", "Zero Cost Build"],
  },
  {
    id: "pulse-sender",
    title: "PULSE SENDER - EMAIL CAMPAIGN PLATFORM",
    desc: "Full-stack SaaS email marketing platform with campaign builder, contact management, rich text templates, analytics dashboard, and job queue processing.",
    metrics: ["Next.js 16", "Neon PostgreSQL", "BullMQ"],
  },
  {
    id: "board10n",
    title: "BOARD10N - AI CANVAS EDITOR",
    desc: "Collaborative AI-powered infinite canvas editor with multi-provider support (Gemini, OpenAI, Anthropic, Replicate) for visual brainstorming and storyboarding.",
    metrics: ["React Konva", "Multi-AI", "Real-time"],
  },
  {
    id: "movnr",
    title: "MOVNR - CITY DISCOVERY APP",
    desc: "Cross-platform mobile app that curates fun places across 11 categories with mood-based browsing, powered by Supabase and built with Expo.",
    metrics: ["Expo", "Supabase", "iOS/Android"],
  },
  {
    id: "outreach",
    title: "AI SALES OUTREACH AUTOMATION",
    desc: "AI-powered prospecting pipeline that discovers leads, enriches data via Exa.js, and manages WhatsApp + email campaigns at scale with Puppeteer automation.",
    metrics: ["1500+ monthly touches", "Multi-channel"],
  },
  {
    id: "pulse",
    title: "PULSE - AI SALES SYSTEM",
    desc: "Multi-channel outreach system on Contabo VPS using OpenClaw AI agents integrated with Anthropic Claude API. Covers ICP definition and automated prospecting.",
    metrics: ["Claude API", "₦10-15M quarterly"],
  },
  {
    id: "mailcow",
    title: "MAILCOW EMAIL INFRASTRUCTURE",
    desc: "Deployed and managed two Mailcow email servers on Contabo VPS, handling domain reputation, deliverability, and nginx redirects for zero-spam delivery.",
    metrics: ["Self-Hosted", "Docker", "Zero-Spam"],
  },
  {
    id: "usdc",
    title: "USDC WALLET WEB APP",
    desc: "Browser-based USDC wallet app using ethers.js with MetaMask integration across Ethereum, Polygon, Base, and Arbitrum.",
    metrics: ["ethers.js", "Multi-chain"],
  },
];

const SKILLS = [
  {
    title: "AI & LLMs",
    desc: "Custom LLM training & deployment, Anthropic Claude API, OpenAI API, Google Gemini, agent orchestration.",
  },
  {
    title: "Automation",
    desc: "Multi-channel sales automation, web scraping, CRM pipeline management.",
  },
  {
    title: "Dev",
    desc: "JavaScript, Python, React, Next.js, TypeScript, Electron, Bash, REST APIs, ethers.js.",
  },
  {
    title: "Infrastructure",
    desc: "Supabase, Firebase, Neon PostgreSQL, Docker, VPS management (Contabo), Mailcow, Linux server admin.",
  },
  {
    title: "AI Dev Tools",
    desc: "Claude Code, Antigravity, full-stack AI-assisted development for rapid backend and frontend deployment.",
  },
  {
    title: "Data Engineering",
    desc: "Geospatial data pipelines, OSM extraction, GeoPandas, GDAL, large-scale data cleaning and enrichment.",
  },
];

const EXPERTISE = [
  {
    n: "01",
    t: "AI SALES AUTOMATION",
    d: "Building multi-channel outreach systems using OpenClaw AI agents, Anthropic API, and CRM pipeline management.",
  },
  {
    n: "02",
    t: "VPS & DEVOPS INFRASTRUCTURE",
    d: "Deploying self-hosted Mailcow email servers and containerized apps on Contabo to ensure zero-spam deliverability.",
  },
  {
    n: "03",
    t: "SAAS PRODUCT DEVELOPMENT",
    d: "Designing full-stack architecture for tools like board10n, featuring real-time canvas integration and complex UI/UX.",
  },
  {
    n: "04",
    t: "CUSTOM LLM TRAINING & DEPLOYMENT",
    d: "Fine-tuning and deploying custom large language models for domain-specific tasks, internal tooling, and production AI workflows.",
  },
  {
    n: "05",
    t: "FULL-STACK AI DEPLOYMENT",
    d: "End-to-end application development using Supabase, Firebase, and Neon backends with Claude Code and Antigravity for AI-accelerated frontend and backend builds.",
  },
  {
    n: "06",
    t: "GEOSPATIAL DATA PRODUCTS",
    d: "Building and selling commercial-grade geospatial datasets for Africa. 591K+ GPS-tagged POIs across 30 countries, BigGeo & Datarade ready.",
  },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState("meridex");
  const [formStatus, setFormStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  return (
    <div className="min-h-screen w-full relative">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center py-6 px-5 md:px-10 border-b-2 border-black sticky top-0 bg-[#F0EFEA] z-50">
        <div className="font-bold tracking-widest text-sm uppercase">
          JERRY10N.DEV
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase">
          <a href="#about" className="hover:text-[#4A0E13] transition-colors">About</a>
          <a href="#ventures" className="hover:text-[#4A0E13] transition-colors">Ventures</a>
          <a href="#projects" className="hover:text-[#4A0E13] transition-colors">Work</a>
          <a href="#contact" className="hover:text-[#4A0E13] transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-700">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available
          </span>
          <a href="mailto:jerry@studio10n.com?subject=Book%20a%20Call" className="bg-[#111] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#4A0E13] transition-colors">
            Book Call
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-5 md:px-10 pt-20 pb-16 relative border-b-2 border-black">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex-1">
            <h1 className="heading-massive text-[clamp(4rem,10vw,12rem)] mb-6 text-[#111]">
              DRIVE PROFIT.
              <br />
              MITIGATE
              <br />
              RISK.
            </h1>
            <p className="max-w-md text-lg text-gray-700 font-medium border-l-2 border-[#4A0E13] pl-4">
              AI Systems Builder | Founder | Automation Engineer
            </p>
            <a
              href="mailto:jerry@studio10n.com?subject=Book%20a%20Call"
              className="inline-block mt-6 bg-[#CEFF00] border-2 border-black text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#1A0B1A] hover:text-[#CEFF00] transition-colors cursor-pointer"
            >
              Work With Me
            </a>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end mt-4 md:mt-12">
            <div className="relative">
              <div className="w-48 h-56 grayscale contrast-125 mb-6 overflow-hidden border-2 border-black relative">
                <Image
                  src="/portrait.png"
                  alt="Oluwafemi Akinyele"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-8 text-xs font-bold uppercase tracking-widest text-[#4A0E13] bg-[#CEFF00] px-3 py-1 border-2 border-black rotate-[-5deg]">
                Open To Remote
              </div>
            </div>

            <div className="text-right mt-6">
              <h3 className="font-bold uppercase tracking-wider text-sm mb-1">
                Oluwafemi Akinyele
              </h3>
              <p className="text-xs text-gray-500 max-w-[200px]">
                Based in Lagos, Nigeria. Serving clients globally with custom AI infra.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20">
          <div>
            <div className="font-anton text-4xl md:text-5xl mb-2 text-[#4A0E13]">1500+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-600">Monthly Outreach Touches</div>
          </div>
          <div>
            <div className="font-anton text-4xl md:text-5xl mb-2 text-[#4A0E13]">₦15M+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-600">Quarterly Pipeline Managed</div>
          </div>
          <div>
            <div className="font-anton text-4xl md:text-5xl mb-2 text-[#4A0E13]">591K</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-600">Africa Data Records Built</div>
          </div>
          <div>
            <div className="font-anton text-4xl md:text-5xl mb-2 text-[#4A0E13]">24/7</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-600">Self-Hosted Infrastructure</div>
          </div>
        </div>
      </section>

      {/* HOW I SOLVE YOUR CHALLENGES */}
      <section className="section-padding flex flex-col md:flex-row gap-16 border-black">
        <div className="w-full md:w-1/3">
          <div className="border border-black rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest inline-block mb-6">
            Expertise
          </div>
          <h2 className="heading-massive text-5xl md:text-6xl">
            HOW I SOLVE YOUR CHALLENGES
          </h2>
        </div>
        <div className="w-full md:w-2/3 flex flex-col border-t-2 divide-y-2 border-black divide-black">
          {EXPERTISE.map((item, i) => (
            <div key={i} className="flex gap-4 md:gap-12 py-8 group hover:bg-black/5 transition-colors">
              <div className="font-anton text-xl text-gray-400 pt-1">{item.n}</div>
              <div className="flex-1">
                <h3 className="font-anton text-2xl md:text-4xl mb-3 tracking-wide">{item.t}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md font-medium">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEEP RED SECTION - WHO AM I */}
      <section id="about" className="bg-[#4A0E13] text-[#F0EFEA] section-padding flex flex-col md:flex-row gap-16 border-y-2 border-black">
        <div className="flex-1">
          <div className="border border-[#F0EFEA]/30 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest inline-block mb-6">
            Ventures
          </div>
          <h2 className="heading-massive text-[clamp(4rem,8vw,8rem)] text-[#F0EFEA] mb-10">
            WHO AM I AND
            <br />HOW CAN I BE
            <br />OF HELP?
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-xl text-white/80 mb-12">
            Builder and operator with a track record of designing and shipping AI-powered systems across sales automation, film production, SaaS development, and data intelligence.
          </p>
          <div className="space-y-8">
            {VENTURES.map((v, i) => (
              <div key={i} className="border-l-4 border-[#CEFF00] pl-6">
                <h3 className="font-anton text-2xl md:text-3xl tracking-wide text-white">{v.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-[#CEFF00] mb-2 mt-1">{v.role}</p>
                <p className="text-sm text-white/80 leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-5/12 hidden md:block">
          <div className="bg-[#CEFF00] p-4 w-full h-[600px] relative overflow-hidden transform rotate-2 border-2 border-black">
            <div className="absolute inset-0 m-4 border-2 border-black overflow-hidden">
              <Image src="/portrait.png" alt="Oluwafemi Akinyele" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section id="projects" className="section-padding bg-[#F0EFEA]">
        <div className="border border-black rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest inline-block mb-10">
          Projects
        </div>
        <h2 className="heading-massive text-5xl md:text-7xl mb-12">
          SUCCESS STORIES &amp; BUILDS
        </h2>

        <div className="border-t-2 border-black divide-y-2 divide-black">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className={`py-8 md:py-12 cursor-pointer group transition-all duration-300 ${
                activeProject === proj.id
                  ? "bg-[#1A0B1A] text-[#F0EFEA] px-8 -mx-8"
                  : "hover:bg-black/5 hover:px-4 -mx-4 px-4"
              }`}
              onClick={() => setActiveProject(proj.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`font-anton text-3xl md:text-5xl ${activeProject === proj.id ? "text-[#CEFF00]" : "text-[#111]"}`}>
                  {proj.title}
                </h3>
                <div className={`text-5xl font-light transition-transform duration-300 ${activeProject === proj.id ? "rotate-45 text-[#CEFF00]" : "text-black"}`}>+</div>
              </div>

              {activeProject === proj.id && (
                <div className="mt-8 grid md:grid-cols-2 gap-8 text-[#F0EFEA]/80">
                  <p className="text-base leading-relaxed max-w-lg font-medium">{proj.desc}</p>
                  <div className="flex gap-4 flex-wrap">
                    {proj.metrics.map((m) => (
                      <div key={m} className="border-2 border-[#CEFF00] text-[#CEFF00] px-4 py-2 text-xs font-bold uppercase tracking-wider">
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section-padding border-t-2 border-black bg-[#F0EFEA] flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/3">
          <h2 className="heading-massive text-5xl md:text-7xl mb-6 text-[#1A0B1A]">
            TRUSTED
            <br />CREDENTIALS
            <br />&amp; ALLIANCES
          </h2>
          <p className="text-gray-700 max-w-xs font-medium">
            Building scalable infrastructure leveraging modern web and AI tools.
          </p>
        </div>
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {SKILLS.map((skill, i) => (
            <div key={i} className="border-l-4 border-black pl-6">
              <h4 className="font-anton text-2xl md:text-3xl tracking-wide mb-3">{skill.title}</h4>
              <p className="text-sm text-gray-800 leading-relaxed font-medium">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#4A0E13] text-[#F0EFEA] section-padding flex flex-col md:flex-row gap-16 relative overflow-hidden border-t-2 border-black">
        <div className="flex-1 relative z-10">
          <div className="border border-[#F0EFEA]/30 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest inline-block mb-6">
            Contact
          </div>
          <h2 className="heading-massive text-5xl md:text-7xl mb-8">
            SCHEDULE
            <br />A CONSULTATION
          </h2>
          <p className="text-lg text-white/80 max-w-sm mb-12 font-medium">
            Leave your details and let&apos;s craft automation strategies tailored to your enterprise.
          </p>
        </div>

        <div className="flex-1 relative z-10 w-full max-w-md border-2 border-[#1A0B1A] p-8 md:p-10 bg-[#F0EFEA] text-[#111]">
          <form
            className="flex flex-col gap-8"
            onSubmit={async (e) => {
              e.preventDefault();
              setFormStatus("sending");
              const form = e.currentTarget;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              const details = (form.elements.namedItem("details") as HTMLTextAreaElement).value;
              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ name, email, details }),
                });
                if (res.ok) { setFormStatus("sent"); form.reset(); }
                else setFormStatus("error");
              } catch { setFormStatus("error"); }
            }}
          >
            <div className="border-b-2 border-black pb-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#111]/60 block mb-2">Name</label>
              <input name="name" type="text" placeholder="John Doe" required className="w-full bg-transparent outline-none text-xl font-bold placeholder:text-black/20 text-black" />
            </div>
            <div className="border-b-2 border-black pb-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#111]/60 block mb-2">Email</label>
              <input name="email" type="email" placeholder="john@example.com" required className="w-full bg-transparent outline-none text-xl font-bold placeholder:text-black/20 text-black" />
            </div>
            <div className="border-b-2 border-black pb-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#111]/60 block mb-2">Project Details</label>
              <textarea name="details" placeholder="Tell me about your goals..." rows={3} required className="w-full bg-transparent outline-none text-xl font-bold placeholder:text-black/20 text-black resize-none" />
            </div>
            <button type="submit" disabled={formStatus==="sending"||formStatus==="sent"} className="bg-[#CEFF00] border-2 border-black text-black w-full py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1A0B1A] hover:text-[#CEFF00] transition-colors mt-4 disabled:opacity-60 disabled:cursor-not-allowed">
              {formStatus==="sending" ? "Sending..." : formStatus==="sent" ? "✓ Message Sent!" : formStatus==="error" ? "Error — Try Again" : "Send Message"}
            </button>
          </form>
        </div>

        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#1A0B1A] rounded-full blur-[100px] pointer-events-none opacity-50" />
      </section>

      {/* FOOTER */}
      <footer className="bg-[#F0EFEA] section-padding pb-8 pt-16 border-t-2 border-black text-center relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-20 border-b-2 border-black pb-10 text-xs font-bold uppercase tracking-widest">
          <span>Oluwafemi Akinyele — Lagos, NG (Global)</span>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/femi-akinyele-85680b1a5" className="hover:text-[#4A0E13]">LinkedIn</a>
            <a href="https://github.com/D4rkhex10" className="hover:text-[#4A0E13]">GitHub</a>
            <a href="https://x.com/jerry10n" className="hover:text-[#4A0E13]">Twitter</a>
            <a href="mailto:jerry@studio10n.com" className="hover:text-[#4A0E13]">Email</a>
          </div>
        </div>
        <h2 className="heading-massive text-[clamp(2.5rem,8vw,10rem)] tracking-tight text-[#111] hover:text-[#4A0E13] transition-colors cursor-pointer break-words break-all lg:break-normal">
          <a href="mailto:jerry@studio10n.com">JERRY@STUDIO10N.COM</a>
        </h2>
        <p className="text-lg md:text-xl font-semibold mt-4 text-[#111]/70">
          <a href="tel:+2349136540011" className="hover:text-[#4A0E13] transition-colors">+234 913 654 0011</a>
        </p>
      </footer>
    </div>
  );
}

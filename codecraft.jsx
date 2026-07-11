import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Menu,
  X,
  Users,
  Award,
  TrendingUp,
  Quote,
  Code2,
  Layers,
  Server,
  Rocket,
  Palette,
  Mail,
} from "lucide-react";

const FONT_IMPORT =
  "@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap');";

const c = {
  bg: "#FBFBF9",
  panel: "#FFFFFF",
  border: "#E7E6E1",
  ink: "#171A21",
  muted: "#646B76",
  blue: "#2E4CE0",
  blueSoft: "#EEF1FD",
  teal: "#0E8F79",
  tealSoft: "#E9F6F2",
  amber: "#D98A1F",
  amberSoft: "#FBF1E1",
};

function Eyebrow({ children }) {
  return (
    <div
      className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.14em] uppercase mb-3"
      style={{ color: c.muted }}
    >
      {children}
    </div>
  );
}

function IconChip({ icon: Icon, bg, fg }) {
  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
      style={{ backgroundColor: bg, color: fg }}
    >
      <Icon size={18} strokeWidth={2} />
    </div>
  );
}

const path = [
  {
    step: "01",
    title: "Foundations",
    icon: Palette,
    color: c.amber,
    bg: c.amberSoft,
    duration: "4 weeks",
    desc: "Semantic HTML, modern CSS and layout systems — you'll build and publish five real pages.",
  },
  {
    step: "02",
    title: "JavaScript",
    icon: Code2,
    color: c.blue,
    bg: c.blueSoft,
    duration: "6 weeks",
    desc: "The language underneath the web. Closures, async code, the DOM, and how browsers work.",
  },
  {
    step: "03",
    title: "React & Frontend",
    icon: Layers,
    color: c.teal,
    bg: c.tealSoft,
    duration: "6 weeks",
    desc: "Components, state and routing — ship a multi-page app wired up to real data.",
  },
  {
    step: "04",
    title: "Backend & APIs",
    icon: Server,
    color: c.blue,
    bg: c.blueSoft,
    duration: "5 weeks",
    desc: "Node, Express and databases. Build the API your frontend has been faking so far.",
  },
  {
    step: "05",
    title: "Capstone",
    icon: Rocket,
    color: c.teal,
    bg: c.tealSoft,
    duration: "8 weeks",
    desc: "One full-stack product, your idea, deployed and reviewed by a working engineer.",
  },
];

const testimonials = [
  {
    name: "Priya Nair",
    role: "Frontend Engineer, fintech startup",
    quote:
      "I'd tried two other programs before this one. The difference was that every module ended with something live, not just a quiz.",
  },
  {
    name: "Rahul Verma",
    role: "Hired as Junior Full-Stack Developer",
    quote:
      "The mentor review on my capstone caught three things I would have shipped broken. That was worth more than the certificate.",
  },
  {
    name: "Ananya Iyer",
    role: "Switched careers from marketing",
    quote:
      "I started not knowing what a function was. Fourteen weeks later I walked into interviews with four live projects to show.",
  },
];

const plans = [
  {
    name: "Self-paced",
    price: "Free",
    period: "forever",
    features: ["All course content", "Community access (read-only)", "No mentor review", "No job support"],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Mentor-led",
    price: "₹4,999",
    period: "/ month",
    features: ["All course content", "Weekly mentor code review", "Full community access", "Resume + mock interviews"],
    cta: "Enroll now",
    featured: true,
  },
  {
    name: "Career track",
    price: "₹12,999",
    period: "/ month",
    features: ["All course content", "1:1 weekly mentorship", "Full community access", "Guaranteed hiring referrals"],
    cta: "Talk to admissions",
    featured: false,
  },
];

function SignupModal({ open, onClose, planName }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
    }, 200);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5"
      style={{ backgroundColor: "#00000066" }}
      onClick={handleClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl border p-7 relative"
        style={{ backgroundColor: c.panel, borderColor: c.border }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="focus-ring absolute top-4 right-4"
          style={{ color: c.muted }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: c.blueSoft, color: c.blue }}
            >
              <Mail size={18} />
            </div>
            <h3 className="font-['Fraunces'] font-semibold text-xl mb-1.5">
              {planName ? `Enroll — ${planName}` : "Start your free trial"}
            </h3>
            <p className="text-[13.5px] mb-6" style={{ color: c.muted }}>
              Enter your details and we'll get you set up. No payment required to start.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-[12.5px] font-medium block mb-1.5">Full name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ananya Iyer"
                  className="focus-ring w-full text-[14px] px-3.5 py-2.5 rounded-lg border outline-none"
                  style={{ borderColor: c.border, backgroundColor: c.bg }}
                  required
                />
              </div>
              <div>
                <label className="text-[12.5px] font-medium block mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="focus-ring w-full text-[14px] px-3.5 py-2.5 rounded-lg border outline-none"
                  style={{ borderColor: c.border, backgroundColor: c.bg }}
                  required
                />
              </div>
              <button
                type="submit"
                className="focus-ring w-full text-[14.5px] font-medium px-5 py-3 rounded-full text-white mt-2 transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: c.blue }}
              >
                Continue
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: c.tealSoft, color: c.teal }}
            >
              <CheckCircle2 size={22} />
            </div>
            <h3 className="font-['Fraunces'] font-semibold text-xl mb-1.5">You're in, {name.split(" ")[0]}!</h3>
            <p className="text-[13.5px] mb-6" style={{ color: c.muted }}>
              We've noted your interest{planName ? ` in the ${planName} plan` : ""}. Check {email} for next steps.
            </p>
            <button
              onClick={handleClose}
              className="focus-ring text-[14px] font-medium px-5 py-2.5 rounded-full border"
              style={{ borderColor: c.border }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CodeCraftAcademyV2() {
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (planName = null) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  const scrollToId = (id) => (e) => {
    e.preventDefault();
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { id: "path", label: "Curriculum" },
    { id: "reviews", label: "Reviews" },
    { id: "pricing", label: "Pricing" },
  ];

  return (
    <div className="min-h-screen w-full font-['Inter']" style={{ backgroundColor: c.bg, color: c.ink }}>
      <style>{`
        ${FONT_IMPORT}
        html { scroll-behavior: smooth; }
        ::selection { background: ${c.blueSoft}; }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
        .focus-ring:focus-visible { outline: 2px solid ${c.blue}; outline-offset: 2px; }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b backdrop-blur" style={{ borderColor: c.border, backgroundColor: c.bg + "F0" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" onClick={scrollToId("top")} className="flex items-center gap-2 focus-ring rounded">
            <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: c.blue }}>
              <span className="text-white font-['Fraunces'] font-semibold text-sm">C</span>
            </div>
            <span className="font-['Fraunces'] font-semibold text-[17px]">CodeCraft Academy</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium" style={{ color: c.muted }}>
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={scrollToId(item.id)} className="focus-ring hover:text-black transition-colors" style={{ color: c.ink }}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => openModal()}
            className="hidden md:inline-flex focus-ring items-center gap-1.5 text-[14px] font-medium px-4 py-2 rounded-full text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: c.blue }}
          >
            Enroll now
          </button>

          <button className="md:hidden focus-ring" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 border-t" style={{ borderColor: c.border }}>
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={scrollToId(item.id)} className="text-sm font-medium pt-3">
                {item.label}
              </a>
            ))}
            <button onClick={() => { setNavOpen(false); openModal(); }} className="text-sm font-medium py-2 rounded-full text-white text-center" style={{ backgroundColor: c.blue }}>
              Enroll now
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="max-w-2xl">
          <Eyebrow>Web development, taught by building</Eyebrow>
          <h1 className="font-['Fraunces'] font-medium text-[2.75rem] md:text-[3.6rem] leading-[1.08] mb-6">
            Learn to build the web,
            <br />
            <span style={{ color: c.blue }}>one shipped project</span> at a time.
          </h1>
          <p className="text-[17px] leading-7 mb-9 max-w-xl" style={{ color: c.muted }}>
            Five project-based courses, weekly feedback from working engineers, and a capstone
            you'll actually want on your resume. No lecture-only filler, no busywork.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => openModal()}
              className="focus-ring inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3.5 rounded-full text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: c.blue }}
            >
              Start free trial <ArrowRight size={16} />
            </button>
            <a
              href="#path"
              onClick={scrollToId("path")}
              className="focus-ring inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3.5 rounded-full border transition-colors hover:bg-black/5"
              style={{ borderColor: c.border, color: c.ink }}
            >
              See the curriculum
            </a>
          </div>
        </div>

        {/* stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t" style={{ borderColor: c.border }}>
          {[
            { icon: Users, value: "12,400+", label: "students shipped a project" },
            { icon: TrendingUp, value: "87%", label: "placed within 6 months" },
            { icon: Award, value: "340+", label: "hiring partners" },
            { icon: Star, value: "4.8 / 5", label: "average course rating" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon size={18} style={{ color: c.blue }} className="mb-2.5" />
              <div className="font-['Fraunces'] font-semibold text-2xl">{value}</div>
              <div className="text-[13px] mt-1" style={{ color: c.muted }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CURRICULUM PATH — numbered because it's a real sequence */}
      <section id="path" className="max-w-6xl mx-auto px-6 pb-24">
        <Eyebrow>The path</Eyebrow>
        <h2 className="font-['Fraunces'] font-medium text-3xl md:text-4xl mb-14 max-w-lg">
          Five stages, in the order they build on each other.
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-[27px] top-2 bottom-2 w-px" style={{ backgroundColor: c.border }} />
          <div className="space-y-8">
            {path.map((p) => (
              <div key={p.step} className="relative flex flex-col md:flex-row gap-5 md:gap-8 md:items-start">
                <div className="flex items-center gap-4 md:w-14 shrink-0">
                  <div
                    className="w-14 h-14 rounded-full border flex items-center justify-center font-['Fraunces'] font-semibold text-lg shrink-0 relative z-10"
                    style={{ borderColor: c.border, backgroundColor: c.panel, color: c.muted }}
                  >
                    {p.step}
                  </div>
                </div>
                <div
                  className="flex-1 rounded-2xl border p-6 flex flex-col md:flex-row md:items-center gap-5"
                  style={{ borderColor: c.border, backgroundColor: c.panel }}
                >
                  <IconChip icon={p.icon} bg={p.bg} fg={p.color} />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <h3 className="font-['Fraunces'] font-semibold text-lg">{p.title}</h3>
                      <span className="text-[12px] font-medium px-2.5 py-0.5 rounded-full" style={{ backgroundColor: p.bg, color: p.color }}>
                        {p.duration}
                      </span>
                    </div>
                    <p className="text-[14.5px] leading-6" style={{ color: c.muted }}>{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="max-w-6xl mx-auto px-6 pb-24">
        <Eyebrow>From the community</Eyebrow>
        <h2 className="font-['Fraunces'] font-medium text-3xl md:text-4xl mb-14 max-w-lg">
          What it looks like on the other side.
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border p-6 flex flex-col" style={{ borderColor: c.border, backgroundColor: c.panel }}>
              <Quote size={20} style={{ color: c.blue }} className="mb-4" />
              <p className="text-[14.5px] leading-6 mb-6 flex-1" style={{ color: c.ink }}>{t.quote}</p>
              <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: c.border }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-medium text-white shrink-0"
                  style={{ backgroundColor: c.blue }}
                >
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-[13.5px] font-medium">{t.name}</div>
                  <div className="text-[12.5px]" style={{ color: c.muted }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 pb-24">
        <Eyebrow>Plans</Eyebrow>
        <h2 className="font-['Fraunces'] font-medium text-3xl md:text-4xl mb-14 max-w-lg">
          Pick the amount of support you want.
        </h2>
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border p-7 flex flex-col"
              style={{
                borderColor: p.featured ? c.blue : c.border,
                backgroundColor: c.panel,
                boxShadow: p.featured ? `0 8px 30px -12px ${c.blue}55` : "none",
              }}
            >
              {p.featured && (
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full w-fit mb-4" style={{ backgroundColor: c.blueSoft, color: c.blue }}>
                  Most chosen
                </span>
              )}
              <div className="font-['Fraunces'] font-semibold text-xl mb-5">{p.name}</div>
              <div className="flex items-baseline gap-1.5 mb-7">
                <span className="font-['Fraunces'] font-semibold text-3xl">{p.price}</span>
                <span className="text-[14px]" style={{ color: c.muted }}>{p.period}</span>
              </div>
              <div className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-[14px]">
                    <CheckCircle2 size={16} style={{ color: p.featured ? c.blue : c.muted }} className="mt-0.5 shrink-0" />
                    <span style={{ color: c.ink }}>{f}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openModal(p.name)}
                className="focus-ring text-[14.5px] font-medium px-5 py-3 rounded-full transition-transform hover:-translate-y-0.5"
                style={
                  p.featured
                    ? { backgroundColor: c.blue, color: "#fff" }
                    : { backgroundColor: "transparent", color: c.ink, border: `1px solid ${c.border}` }
                }
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="rounded-3xl px-8 py-12 md:py-16 flex flex-col items-center text-center gap-6"
          style={{ backgroundColor: c.ink }}
        >
          <h3 className="font-['Fraunces'] font-medium text-white text-3xl md:text-4xl max-w-lg">
            Your first project starts this week.
          </h3>
          <button
            onClick={() => openModal()}
            className="focus-ring inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3.5 rounded-full transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#fff", color: c.ink }}
          >
            Start free trial <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <SignupModal open={modalOpen} onClose={() => setModalOpen(false)} planName={selectedPlan} />

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: c.border }}>
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: c.blue }}>
                <span className="text-white font-['Fraunces'] font-semibold text-sm">C</span>
              </div>
              <span className="font-['Fraunces'] font-semibold text-[15px]">CodeCraft Academy</span>
            </div>
            <p className="text-[13.5px] leading-6" style={{ color: c.muted }}>
              Project-based web development courses for people who'd rather build than watch.
            </p>
          </div>
          {[
            { title: "Learn", links: ["Foundations", "JavaScript", "React", "Backend", "Capstone"] },
            { title: "Company", links: ["About", "Mentors", "Careers", "Blog"] },
            { title: "Support", links: ["Help center", "Community", "Contact", "Refund policy"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-[13px] font-medium mb-3.5">{col.title}</div>
              <div className="space-y-2.5">
                {col.links.map((l) => (
                  <a key={l} href="#" className="focus-ring block text-[13.5px] transition-colors hover:text-black" style={{ color: c.muted }}>
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto px-6 py-6 text-[12.5px] border-t" style={{ borderColor: c.border, color: c.muted }}>
          © 2026 CodeCraft Academy. Not affiliated with any bootcamp brand.
        </div>
      </footer>
    </div>
  );
}

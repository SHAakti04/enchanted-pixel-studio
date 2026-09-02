import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Facebook,
  HandHeart,
  Instagram,
  Lightbulb,
  Linkedin,
  Menu,
  MessageCircleHeart,
  Play,
  Sprout,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { AnandvanButton } from "@/components/anandvan-button";

import hero from "@/assets/anandvan/image-72.png.asset.json";
import logo from "@/assets/anandvan/sss-anandvan-logo-1.png.asset.json";
import aboutOne from "@/assets/anandvan/about-us-1.jpg.jpeg.asset.json";
import aboutTwo from "@/assets/anandvan/about-us-2.jpg.jpeg.asset.json";
import dream from "@/assets/anandvan/rectangle-101.png.asset.json";
import storyPaper from "@/assets/anandvan/desktop---59.png.asset.json";
import approachOne from "@/assets/anandvan/approach-1.jpg.jpeg.asset.json";
import approachTwo from "@/assets/anandvan/approach-2.jpg.jpeg.asset.json";
import approachThree from "@/assets/anandvan/approach-3.jpg.jpeg.asset.json";
import approachFour from "@/assets/anandvan/approach-4.jpg.jpeg.asset.json";
import women from "@/assets/anandvan/image-72.png.asset.json";
import lifeOne from "@/assets/anandvan/image-67.png.asset.json";
import lifeTwo from "@/assets/anandvan/image-70.png.asset.json";
import lifeThree from "@/assets/anandvan/image-71.png.asset.json";
import mediaOne from "@/assets/anandvan/image-50.png.asset.json";
import mediaTwo from "@/assets/anandvan/image-51.png.asset.json";
import mediaThree from "@/assets/anandvan/image-52.png.asset.json";
import mediaFour from "@/assets/anandvan/image-54.png.asset.json";
import mediaFive from "@/assets/anandvan/image-55.png.asset.json";
import mediaSix from "@/assets/anandvan/image-56.png.asset.json";
import support from "@/assets/anandvan/image-79.png.asset.json";
import volunteer from "@/assets/anandvan/rectangle-103.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anandvan | A Blissful Forest of Learning" },
      { name: "description", content: "A sovereign learning community where children, women and families explore, create and grow together." },
      { property: "og:title", content: "Anandvan | A Blissful Forest of Learning" },
      { property: "og:description", content: "A sovereign learning community where children, women and families explore, create and grow together." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Home", "top"], ["About", "about"], ["Our Story", "story"], ["Our Approach", "approach"], ["Stories", "stories"], ["Join Anandvan", "join"],
];

const approachItems = [
  ["Discover the world through experience.", "Curiosity is given room to wander. A question can begin anywhere — in soil, in sound, in a story an elder tells.", approachOne.url],
  ["Turn imagination into expression.", "Making is thinking. Hands, materials and mistakes carry a child further than any single correct answer.", approachTwo.url],
  ["Learn through people, culture and community.", "Children, parents, teachers and elders learn from one another. Heritage is lived, not memorised.", approachThree.url],
  ["Build confidence, empathy and independence.", "The whole child matters — emotional world included. Growth is measured in courage, not ranking.", approachFour.url],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTestimonial((value) => (value + 1) % 3), 5600);
    return () => window.clearInterval(id);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between">
          <button aria-label="Go to home" onClick={() => scrollTo("top")} className="shrink-0">
            <img src={logo.url} alt="Sardar Swaran Singh’s Anandvan" className="h-16 w-auto" />
          </button>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {nav.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary">{label}</button>)}
          </nav>
          <AnandvanButton onClick={() => scrollTo("support")} className="hidden lg:inline-flex">Donate Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></AnandvanButton>
          <button className="text-primary lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden">{nav.map(([label,id]) => <button key={id} onClick={() => scrollTo(id)} className="block w-full border-b border-border py-3 text-left font-medium">{label}</button>)}</nav>}
      </header>

      <section id="top" className="relative mt-20 min-h-[calc(100svh-5rem)] overflow-hidden bg-paper">
        <div className="absolute inset-0 scale-x-[-1] overflow-hidden">
          <img src={hero.url} alt="Women and children of the Anandvan learning community" className="hero-drift h-full w-full object-cover object-left" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--paper)_5%,color-mix(in_oklab,var(--paper)_92%,transparent)_38%,transparent_72%)]" />
        <div className="section-shell relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-20">
          <div className="max-w-2xl animate-[reveal-up_1s_cubic-bezier(.2,.8,.2,1)_both]">
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase text-primary"><span className="h-px w-10 bg-coral" /> Sardar Swaran Singh’s Anandvan</p>
            <h1 className="display-title text-5xl text-forest sm:text-6xl lg:text-8xl">A Blissful Forest<br />of Learning for<br /><em className="text-coral">Every Mind</em></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-foreground/70 sm:text-lg">A sovereign learning community where children, women and families come together to explore, create and grow.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AnandvanButton onClick={() => scrollTo("support")}>Donate Now <ArrowRight className="h-4 w-4" /></AnandvanButton>
              <AnandvanButton variant="outline" onClick={() => scrollTo("story")}>Explore Our Story</AnandvanButton>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-7 hidden text-right text-6xl font-display leading-none text-primary/20 lg:block">Learn<br /><span className="text-8xl text-sun/30">Grow</span></div>
      </section>

      <section id="about" className="py-20 lg:py-28">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative mx-auto h-[490px] w-full max-w-lg reveal-up">
            <img src={aboutOne.url} alt="Happy children learning together" className="absolute left-5 top-0 h-[76%] w-[58%] rounded-[2rem] object-cover shadow-[var(--shadow-soft)]" />
            <img src={aboutTwo.url} alt="Women from the Anandvan community" className="absolute bottom-0 right-2 h-[54%] w-[45%] rounded-[2rem] border-8 border-background object-cover shadow-[var(--shadow-soft)]" />
            <span className="absolute left-0 top-12 rounded-md bg-sun px-5 py-3 font-display text-xl text-secondary-foreground">Learn</span>
            <span className="absolute bottom-20 left-1/4 rounded-md bg-coral px-5 py-3 font-display text-xl text-primary-foreground">Grow</span>
          </div>
          <div className="reveal-up">
            <p className="text-sm font-semibold uppercase text-coral">About Us</p>
            <h2 className="display-title mt-4 text-4xl text-forest sm:text-6xl">Growing curious minds.<br />Building a Stronger Community.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">Anandvan is a sovereign learning organization where children and the wider community learn, create and grow together.</p>
            <ul className="mt-7 grid gap-4 text-foreground/75">
              {["Learning through experience and collaboration", "Creating space for knowledge, creativity and wisdom", "Growing through community, culture and shared values"].map((item) => <li key={item} className="flex gap-3"><span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-primary"><Check className="h-4 w-4" /></span>{item}</li>)}
            </ul>
            <AnandvanButton className="mt-8" onClick={() => scrollTo("support")}>Donate Now <ArrowRight className="h-4 w-4" /></AnandvanButton>
          </div>
        </div>
        <div className="section-shell mt-20 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[[Lightbulb,"Explore","Discover through experience"],[Sprout,"Create","Turn ideas into possibilities"],[Users,"Connect","Learn with people & culture"],[BookOpen,"Grow","Build confidence & independence"]].map(([Icon,title,text], i) => <div key={String(title)} className="reveal-up border-t border-border p-5 text-center" style={{animationDelay:`${i*80}ms`}}><Icon className="mx-auto h-10 w-10 text-coral" /><h3 className="mt-4 font-display text-2xl text-forest">{String(title)}</h3><p className="mt-2 text-sm text-muted-foreground">{String(text)}</p></div>)}
        </div>
      </section>

      <section className="bg-forest py-20 text-primary-foreground">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h2 className="display-title text-4xl sm:text-5xl">A Glimpse Into Anandvan</h2><p className="mt-3 text-primary-foreground/65">Come see how curiosity, creativity and community come alive.</p></div><button className="flex items-center gap-2 text-sm font-semibold text-sun">Watch more <ArrowRight className="h-4 w-4" /></button></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[mediaOne,mediaThree,mediaSix].map((image, i) => <article key={image.url} className="group relative overflow-hidden rounded-lg bg-background shadow-[var(--shadow-soft)]"><img src={image.url} alt="Anandvan community video" className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute inset-0 grid place-items-center"><span className="grid h-14 w-14 place-items-center rounded-full bg-sun text-secondary-foreground shadow-lg transition group-hover:scale-110"><Play className="ml-1 h-5 w-5 fill-current" /></span></span><div className="p-5 text-foreground"><h3 className="font-semibold">{["Free education for kids","Be the change you wish to see","The dream of a father"][i]}</h3><p className="mt-1 text-xs text-muted-foreground">Anandvan • Community stories</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="story" className="py-20 lg:py-28">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-semibold uppercase text-coral">Our Story</p><h2 className="display-title mt-4 text-5xl text-forest sm:text-7xl">It Began With A Dream</h2></div><AnandvanButton>Discover our story <ArrowRight className="h-4 w-4" /></AnandvanButton></div>
          <div className="mt-14 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div className="relative reveal-up"><img src={dream.url} alt="A father walking with a child through the forest" className="h-[560px] w-full rounded-[2.5rem] object-cover shadow-[var(--shadow-soft)]" /><span className="absolute -bottom-3 right-8 rounded-md bg-coral px-6 py-3 font-semibold text-primary-foreground">A Dream of a Father</span></div>
            <div className="space-y-0">
              {[["01","The Dream","Anandvan was born from a father’s dream — shaped by the challenges of providing for a large family without ever receiving the education he deeply desired."],["02","The Belief","His vision was simple yet powerful: a space where children could grow freely, learn naturally, and discover their true potential without limitations."],["03","Anandvan Today","Today Anandvan stands as a testament to community, compassion, and the belief that every child deserves an education that nurtures their whole being."]].map(([num,title,text]) => <div key={num} className="reveal-up grid grid-cols-[3.5rem_1fr] gap-4 border-b border-border py-8 first:pt-0"><span className="font-display text-4xl text-coral">{num}</span><div><h3 className="font-display text-3xl text-forest">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20"><div className="section-shell grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]"><div className="reveal-up"><h2 className="display-title text-4xl text-forest">A Dream of a Father</h2><p className="mt-6 leading-8 text-muted-foreground">Anandvan is a community-led learning space — a place where learning is discovered, shared and experienced. Curiosity sets the pace, and experience shapes the journey.</p><p className="mt-4 leading-8 text-muted-foreground">It brings children, women, families, educators and elders together, creating an inclusive space where knowledge is welcomed, wisdom is valued, and everyone can grow together.</p></div><img src={storyPaper.url} alt="Anandvan values: community-led, experiential and culturally rooted" className="float-soft w-full" /></div></section>

      <section id="approach" className="bg-forest-deep py-20 text-primary-foreground lg:py-28">
        <div className="section-shell"><p className="text-sm font-semibold uppercase text-sun">Our Approach</p><h2 className="display-title mt-4 max-w-3xl text-5xl sm:text-7xl">Every Child Is Born Curious.</h2><p className="mt-5 text-lg text-primary-foreground/65">What happens when we give that curiosity space to grow?</p>
          <div className="mt-14 divide-y divide-primary-foreground/15">{approachItems.map(([title,text,image],i)=><article key={title} className="group grid items-center gap-6 py-8 md:grid-cols-[4rem_1fr_1fr_16rem]"><span className="font-display text-4xl text-sun">0{i+1}</span><h3 className="font-display text-3xl text-sun">{title}</h3><p className="leading-7 text-primary-foreground/60">{text}</p><div className="overflow-hidden rounded-lg"><img src={image} alt={title} className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-110" /></div></article>)}</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper py-20 lg:py-28">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-2"><div className="relative reveal-up"><img src={women.url} alt="Women learning together at Anandvan" className="h-[540px] w-full rounded-tr-[9rem] object-cover object-left shadow-[var(--shadow-soft)]" /></div><div className="reveal-up"><h2 className="display-title text-5xl text-forest sm:text-6xl">Empowering Women.<br />Strengthening Communities.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">When women have the space to learn, express, lead and grow, their growth becomes a strength for the communities around them.</p></div></div>
        <div className="mt-16 bg-sun py-12"><div className="section-shell"><h3 className="text-center font-display text-3xl text-secondary-foreground">Empowerment Begins With Opportunity.</h3><div className="mt-8 grid gap-5 md:grid-cols-3">{[[BookOpen,"Education & Skills","Access to knowledge, skills and opportunities to discover new possibilities."],[MessageCircleHeart,"Confidence & Voice","Encouraging women to express themselves, make decisions and lead with confidence."],[Users,"Community & Participation","Creating spaces to share experiences, support one another and contribute."]].map(([Icon,title,text])=><div key={String(title)} className="reveal-up rounded-lg bg-background p-7 text-center shadow-[var(--shadow-soft)]"><Icon className="mx-auto h-8 w-8 text-coral"/><h4 className="mt-4 font-semibold text-forest">{String(title)}</h4><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(text)}</p></div>)}</div></div></div>
      </section>

      <section id="stories" className="py-20"><div className="section-shell"><div className="flex items-end justify-between"><h2 className="display-title text-5xl text-forest">Life At Anandvan</h2><span className="text-sm text-muted-foreground">Explore more →</span></div><div className="mt-10 grid gap-5 sm:grid-cols-3">{[lifeOne,lifeTwo,lifeThree].map((image,i)=><div key={image.url} className={`reveal-up overflow-hidden rounded-lg ${i===1?'sm:-translate-y-5':''}`}><img src={image.url} alt="Life at Anandvan" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105" /></div>)}</div>
          <div className="mt-24"><p className="text-sm font-semibold uppercase text-coral">Stories</p><h2 className="display-title mt-3 text-5xl text-forest">Media Coverage</h2><p className="mt-4 max-w-xl text-muted-foreground">From meaningful stories to inspiring conversations, see how Anandvan is creating impact and touching lives.</p><div className="mt-10 columns-2 gap-5 lg:columns-3">{[mediaThree,mediaTwo,mediaFour,mediaFive,mediaOne,mediaSix].map((image)=><img key={image.url} src={image.url} alt="Media coverage of Anandvan" className="mb-5 w-full break-inside-avoid rounded-lg shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]" />)}</div></div>
        </div></section>

      <section id="support" className="bg-sun-soft py-20 lg:py-28"><div className="section-shell"><div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]"><div className="reveal-up"><p className="text-sm font-semibold uppercase text-primary">Be a part of the change</p><h2 className="display-title mt-4 text-5xl text-forest sm:text-7xl">Your Support.<br />Their Tomorrow.</h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">Every contribution helps us create a learning community where children, women and families can grow, learn and build a better future together.</p></div><img src={support.url} alt="Ways to support Anandvan" className="float-soft w-full" /></div><div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-lg bg-sun px-7 py-5 sm:flex-row"><p className="font-semibold text-secondary-foreground">Together, we can build a stronger, kinder and more inclusive tomorrow.</p><AnandvanButton>Donate Now <ArrowRight className="h-4 w-4" /></AnandvanButton></div></div></section>

      <Testimonials active={testimonial} onChange={setTestimonial} />

      <section id="join" className="relative overflow-hidden py-20 lg:py-28"><img src={volunteer.url} alt="Volunteers at Anandvan" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-forest-deep/80" /><div className="section-shell relative z-10 grid gap-12 lg:grid-cols-2"><div className="text-primary-foreground"><p className="text-sun">Your time, skills and presence can help create meaningful change.</p><h2 className="display-title mt-5 text-5xl sm:text-6xl">Volunteer Opportunities Now Open for You</h2></div><form className="grid gap-4 rounded-lg bg-background/95 p-7 shadow-[var(--shadow-soft)]" onSubmit={(event)=>event.preventDefault()}><label className="text-sm font-semibold">Full name<input className="mt-2 h-11 w-full rounded-md border border-input bg-background px-4 outline-none focus:ring-2 focus:ring-ring" /></label><div className="grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Email address<input type="email" className="mt-2 h-11 w-full rounded-md border border-input bg-background px-4 outline-none focus:ring-2 focus:ring-ring" /></label><label className="text-sm font-semibold">Phone number<input type="tel" className="mt-2 h-11 w-full rounded-md border border-input bg-background px-4 outline-none focus:ring-2 focus:ring-ring" /></label></div><label className="text-sm font-semibold">Message<textarea rows={3} className="mt-2 w-full resize-none rounded-md border border-input bg-background p-4 outline-none focus:ring-2 focus:ring-ring" /></label><AnandvanButton type="submit">Submit <ArrowRight className="h-4 w-4" /></AnandvanButton></form></div></section>

      <footer className="bg-background pt-16"><div className="section-shell grid gap-10 pb-12 md:grid-cols-[1.5fr_1fr_1fr_1.4fr]"><div><img src={logo.url} alt="Anandvan" className="h-24 w-auto"/><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">A Blissful Forest of Learning. Nurturing curious minds through experiential learning, cultural wisdom and creativity.</p></div><div><h3 className="font-semibold text-forest">Company</h3><div className="mt-4 grid gap-3 text-sm text-muted-foreground">{nav.slice(2).map(([label,id])=><button key={id} onClick={()=>scrollTo(id)} className="text-left hover:text-primary">{label}</button>)}</div></div><div><h3 className="font-semibold text-forest">Follow us</h3><div className="mt-5 flex gap-3">{[Instagram,Facebook,Youtube,Linkedin].map((Icon,i)=><a key={i} href="#top" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full bg-accent text-primary transition hover:-translate-y-1"><Icon className="h-4 w-4"/></a>)}</div></div><div><h3 className="font-semibold text-forest">Contact</h3><div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground"><p>+91 9736110111</p><p>g.singh@sssanandvan.com</p><p>3 Solace Park, BT Kawade Road,<br/>Pune, MH–411036, India</p></div></div></div><div className="bg-forest px-4 py-5 text-center text-xs text-primary-foreground/65">© 2026 Sardar Swaran Singh’s Anandvan. All rights reserved. <span className="mx-3">•</span> Designed &amp; Developed by Kefaru Technologies Pvt. Ltd.</div></footer>
    </main>
  );
}

const testimonials = [
  ["Anandvan is a template for future schools. It honors the whole child — their environment, community, elders, and emotional world.","Allie Johnson","Educator and mother"],
  ["We are not taught that we can shape our own life — but we can. Anandvan gives children the freedom to learn, make mistakes, and be accepted as they are.","Mona Kharaj","Community Supporter"],
  ["I have worked in education since 1992, and Anandvan stands out as a truly community-centric initiative.","Lee Culver Richards","School Builder"],
];

function Testimonials({active,onChange}:{active:number;onChange:(value:number)=>void}) {
  return <section className="bg-sun-soft py-20"><div className="section-shell"><h2 className="display-title text-4xl text-forest">What Our Community Says</h2><div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">{testimonials.map(([quote,name,role],i)=><article key={name} className={`rounded-lg p-7 transition-all duration-700 ${i===active?'bg-forest text-primary-foreground shadow-[var(--shadow-soft)] md:-translate-y-4':'bg-background text-foreground'}`}><div className="text-5xl font-display text-sun">“</div><p className="mt-3 leading-7">{quote}</p><div className="mt-6 border-t border-current/15 pt-4"><p className="font-semibold">{name}</p><p className="text-xs opacity-65">{role}</p></div></article>)}</div><div className="mt-8 flex justify-center gap-3"><button aria-label="Previous testimonial" onClick={()=>onChange((active+2)%3)} className="grid h-11 w-11 place-items-center rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground"><ChevronLeft className="h-5 w-5"/></button><button aria-label="Next testimonial" onClick={()=>onChange((active+1)%3)} className="grid h-11 w-11 place-items-center rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground"><ChevronRight className="h-5 w-5"/></button></div></div></section>;
}
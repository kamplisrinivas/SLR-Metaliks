import React, { useEffect, useRef, useState } from 'react';
import './LeadershipPage.css';
import MDImage from '../images/MD.jpg';
import Timblo from '../images/Timblo.webp';
import Rajat from '../images/Rajat.webp';
import Misra from '../images/Misra.webp';
import anil from '../images/anil.webp';
import Yogendra from '../images/Yogendra.webp';
import Gaur from '../images/Gaur.webp';
import Goel from '../images/Goel.webp';
import Naveen from '../images/Naveen.webp';
import Ajay from '../images/Ajay.webp';
import Ramji from '../images/Ramji.webp';
import Vijay from '../images/Vijay.webp';
import Vivek from '../images/Vivek.webp';
import Avinash from '../images/Avinash.webp';
import Prakash from '../images/Prakash.webp';
import Alok from '../images/Alok.webp';
import Dj from '../images/Dj.webp';


/*
  SLR Metaliks — Leadership Page
  Plain React + CSS, matching the tokens/typography already established
  in AboutPage.css (maroon/copper/cream/ink, Barlow Condensed + Inter).

  Photos: every person record has `photo: null` below. Drop in a real
  image path (e.g. photo: require('../images/leadership/name.jpg')) and
  it'll render; until then, each card falls back to a colored initials
  avatar so the page looks finished with placeholder data.

  All names/bios/awards below are placeholder copy — replace with your
  real 5 board members, 16 leadership members, and chairman details.

  NOTE: Header and Footer aren't rendered here, same assumption as
  AboutPage.jsx — supplied by a shared Layout elsewhere in the app.
*/

const BOARD = [
  { id: 'b1', name: 'Mr. Rajkumar Goel', position: 'Managing Director', bio: 'Mr. Raj Kumar Goel, Managing Director of the Company, has rich experience in Steel Marketing and he has been Managing Director of the Company since its incorporation in 2007.', experience: '25+ Years', linkedin: '#', email: 'mailto:md@slrm.com', photo: MDImage },
  { id: 'b2', name: 'Mr. Ambar Timblo', position: 'Chairman', bio: 'Mr. Ambar Timblo is the Managing Director of Fomento Resources. Mr.Ambar’s initial schooling was at Sharda Mandir, Goa followed by his high school at Modern School, Barakhamba Road, New Delhi.', experience: '22+ Years', linkedin: '#', email: 'mailto:name@slrmetaliks.com', photo: Timblo },
  { id: 'b3', name: 'Mr. Rajat Goel', position: 'Director and CFO', bio: 'Mr. Rajat Goel, Post-graduated as MBA Marketing, A very Energetic and enthusiastic young entrepreneur. He is in the business from 2012.', experience: '20+ Years', linkedin: '#', email: 'mailto:name@slrmetaliks.com', photo: Rajat },
  { id: 'b4', name: 'Mr. Apoorva Misra', position: ' Director', bio: 'Mr.Apoorva Misra, 45 years, Ph.D, Accounting (Major) & Finance (Minor) At University of Rochester, Simon Business School. He has been in Finance field for more than 20 years and occupy various senior positions.', experience: '21+ Years', linkedin: '#', email: 'mailto:name@slrmetaliks.com', photo: Misra },
  { id: 'b5', name: 'Mr. Anil Kumar Jha', position: 'Independent Director', bio: 'Mr Anil Kumar Jha is B. Tech. in Mining from IIT(ISM), Dhanbad and M. Tech. in Mine Planning & Design from IIT(ISM), Dhanbad.', experience: '17+ Years', linkedin: '#', email: 'mailto:name@slrmetaliks.com', photo: anil },
];  

const CHAIRMAN = {
  name: 'Mr. Rajkumar Goel',
  position: 'Chairman & Founder',
  quote: 'Our vision has always been to build a steel enterprise driven by quality, innovation, and a commitment to sustainable growth.',
  bio: 'Mr. Rajkumar Goel is the Chairman & Founder of SLR Metaliks, guiding the company with a strong focus on operational excellence, customer satisfaction, and continuous improvement. Under his leadership, SLR Metaliks has grown as an integrated steel manufacturer known for quality products, advanced manufacturing practices, and responsible business operations.',
  experience: '25+ Years',
  awards: [
    'Leadership excellence in the steel industry',
    'Contribution towards integrated steel manufacturing',
    'Recognition for quality-driven industrial growth'
  ],
  photo: MDImage,
};

const LEADERSHIP = [
  {
    id: 'l1',
    name: 'Mr. Rajkumar Goel',
    designation: 'Managing Director',
    department: 'Management',
    location: 'Hosapete, Karnataka',
    email: 'mailto:md@slrmetaliks.com',
    linkedin: '#',
    photo: MDImage,
  },
  
  {
    id: 'l2',
    name: 'Mr. Rajat Goel',
    designation: 'Director & CFO',
    department: 'Finance',
    location: 'Hosapete, Karnataka',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Rajat,
  },
  {
    id: 'l3',
    name: 'Mr. Yogendra Chaturvedi',
    designation: 'Chief Operating Officer',
    department: 'Corporate Office',
    location: 'India',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Yogendra,
  },
  {
    id: 'l4',
    name: 'Mr. Shivdutt Gaur',
    designation: 'Deputy CFO',
    department: 'Corporate Office',
    location: 'India',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Gaur,
  },
  {
    id: 'l5',
    name: 'Mr. Vinnet Goel',
    designation: 'Vice President',
    department: 'Marketing',
    location: 'Pune',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Goel,
  },
  {
    id: 'l6',
    name: 'Mr. Ramji Singh',
    designation: 'Vice President',
    department: 'Finance & Accounts',
    location: 'Hospet, Karnataka',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Ramji,
  },
  {
    id: 'l7',
    name: 'Mr. Naveen',
    designation: 'Vice President',
    department: 'BRM & Taxation',
    location: 'Hospet, Karnataka',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Naveen,
  },
  {
    id: 'l8',
    name: 'Mr. Ajay Chaubey',
    designation: 'Vice President',
    department: 'IMD',
    location: 'Hospet, Karnataka',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Ajay,
  },
  {
    id: 'l9',
    name: 'Mr. Vijay Raikoti',
    designation: 'Vice President',
    department: 'SMS OPR',
    location: 'Hospet, Karnataka',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Vijay,
  },
  {
    id: '20',
    name: 'Mr. Vivek Lakshkar',
    designation: 'General Manager',
    department: 'RMS OPR',
    location: 'Hospet, Karnataka',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Vivek,
  },
  {
    id: '21',
    name: 'Mr. Avinash Pansi',
    designation: 'Vice President',
    department: 'QAD',
    location: 'Hospet, Karnataka',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Avinash,
  },
  {
    id: '22',
    name: 'Mr. Prakash Angadi',
    designation: 'Sr. General Manager',
    department: 'QAD',
    location: 'Hospet, Karnataka',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Prakash,
  },
  {
    id: '23',
    name: 'Mr. Alok Agrawal',
    designation: 'General Manager',
    department: 'Civil',
    location: 'Hospet, Karnataka',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Alok,
  },
  {
    id: '24',
    name: 'Mr. Dhananjay Kumar',
    designation: 'HEAD',
    department: 'HR and Admin',
    location: 'Hospet, Karnataka',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Dj,
  },


  

];

const VALUES = [
  { icon: '\u25C8', title: 'Integrity', desc: 'Transparent dealings with customers, partners, and the communities we work in.' },
  { icon: '\u2726', title: 'Innovation', desc: 'Continuous investment in technology, from casting to quality testing.' },
  { icon: '\u26AD', title: 'Collaboration', desc: 'Long-term relationships built across teams, OEMs, and industries.' },
  { icon: '\u2699', title: 'Excellence', desc: 'Every heat tested, traced, and held to the spec our customers build against.' },
];

const STATS = [
  { num: 5, suffix: '', label: 'Board Members' },
  { num: 16, suffix: '+', label: 'Leadership Members' },
  { num: 20, suffix: '+', label: 'Years of Leadership Experience' },
  { num: 34, suffix: '+', label: 'Departments' },
  { num: 10, suffix: '+', label: 'Projects' },
];

const TESTIMONIALS = [
  {
    photo: Goel,
    name: "Mr. Vinnet Goel",
    position: "Board Member",
    quote:
      "Our vision is to build a future-ready organization driven by innovation, operational excellence, and an unwavering commitment to quality. Every milestone reflects the trust our customers place in us."
  },
  {
    photo: Vivek,
    name: "Mr. Vivek Lakshkar",
    position: "Senior Executive",
    quote:
      "People are at the heart of everything we do. By empowering our teams, embracing continuous improvement, and working collaboratively, we create lasting value for our customers and stakeholders."
  },
  {
    photo: Prakash,
    name: "Mr. Prakash Angadi",
    position: "Department Head",
    quote:
      "Excellence is achieved through discipline, teamwork, and attention to detail. We strive every day to deliver products and services that consistently exceed expectations."
  }
];

const GALLERY = [
  { img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=700&auto=format&fit=crop', caption: 'Board Meeting, 2025', tall: true },
  { img: 'https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=700&auto=format&fit=crop', caption: 'Leadership Conference' },
  { img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=700&auto=format&fit=crop', caption: 'Team Collaboration', tall: true },
  { img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=700&auto=format&fit=crop', caption: 'Corporate Event' },
  { img: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=700&auto=format&fit=crop', caption: 'Strategy Session', tall: true },
  { img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=700&auto=format&fit=crop', caption: 'Plant Walkthrough' },
];

/* ---------- helpers ---------- */

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

function Avatar({ photo, name, className = '' }) {
  if (photo) {
    return <img src={photo} alt={name} className={className} />;
  }
  return (
    <div className={`slr-avatar-initials ${className}`} aria-label={name}>
      {initials(name)}
    </div>
  );
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`slr-reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

function CountUp({ target, suffix = '' }) {
  const [ref, visible] = useReveal();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let raf;
    const dur = 1100;
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setVal(Math.round(target * p));
      if (p < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, target]);
  return (
    <span ref={ref} className="num">
      {val}
      {suffix}
    </span>
  );
}

/* ---------- sections ---------- */

function LeadershipHero() {
  return (
    <section className="slr-lead-hero">
      <div className="slr-lead-hero-bg" aria-hidden="true" />
      <div className="slr-lead-hero-inner">
        <span className="slr-eyebrow">Leadership</span>
        <h1 className="slr-app-title">
          Leadership That Inspires Excellence
        </h1>
        <p>
          Meet the experienced leaders and visionary board members who guide our
          organization with integrity, innovation, and purpose.
        </p>
        <div className="slr-lead-hero-actions">
          <a href="#board" className="slr-btn slr-btn-primary">Meet Our Leadership</a>
          <a href="/contact" className="slr-btn slr-btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

function BoardOfDirectors() {
  return (
    <section id="board" className="slr-section">
      <div className="slr-container">
        <div className="slr-lead-head">
          <span className="slr-eyebrow">Board of Directors</span>
          <h2>The people steering our direction</h2>
          <p>Five board members bringing decades of combined industry and governance experience.</p>
        </div>
        <div className="slr-board-grid">
          {BOARD.map((m) => (
            <Reveal key={m.id}>
              <article className="slr-board-card">
                <div className="slr-board-photo">
                  <Avatar photo={m.photo} name={m.name} />
                </div>
                <div className="slr-board-body">
                  <h3>{m.name}</h3>
                  <div className="slr-board-position">{m.position}</div>
                  <p className="slr-board-bio">{m.bio}</p>
                  <div className="slr-board-exp">{m.experience}</div>
                  <div className="slr-board-footer">
                    <div className="slr-board-socials">
                      <a href={m.linkedin} className="slr-icon-btn" aria-label={`${m.name} on LinkedIn`}>in</a>
                      <a href={m.email} className="slr-icon-btn" aria-label={`Email ${m.name}`}>@</a>
                    </div>
                    <a href={`#${m.id}`} className="slr-view-profile">View Profile &rarr;</a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChairmanSpotlight() {
  return (
    <section className="slr-chairman">
      <div className="slr-container slr-chairman-grid">
        <Reveal>
          <div className="slr-chairman-photo">
            <Avatar photo={CHAIRMAN.photo} name={CHAIRMAN.name} />
          </div>
        </Reveal>
        <Reveal>
          <div>
            <span className="slr-eyebrow slr-chairman-eyebrow">Chairman's Message</span>
            <h2 className="slr-chairman-name">{CHAIRMAN.name}</h2>
            <div className="slr-chairman-position">{CHAIRMAN.position}</div>
            <p className="slr-chairman-quote">&ldquo;{CHAIRMAN.quote}&rdquo;</p>
            <p className="slr-chairman-bio">{CHAIRMAN.bio}</p>
            <div className="slr-chairman-meta">
              <div>
                <div className="num">{CHAIRMAN.experience}</div>
                <div className="lbl">Industry Experience</div>
              </div>
            </div>
            <div className="slr-chairman-awards">
              <h4>Awards &amp; Recognition</h4>
              <ul>
                {CHAIRMAN.awards.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div className="slr-chairman-signature">{CHAIRMAN.name}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LeadershipTeamGrid() {
  const [page, setPage] = useState(0);

  const membersPerPage = 4;
  const totalPages = Math.ceil(LEADERSHIP.length / membersPerPage);

  const visibleMembers = LEADERSHIP.slice(
    page * membersPerPage,
    page * membersPerPage + membersPerPage
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section className="slr-section slr-section-cream">
      <div className="slr-container">

        <div className="slr-lead-head">
          <span className="slr-eyebrow">Leadership Team</span>
          <h2> people running the business day to day</h2>
          <p>
            Department heads and senior leaders across operations,
            finance, sales, and quality.
          </p>
        </div>


        <div key={page} className="slr-team-grid">

          {visibleMembers.map((m) => (
            <Reveal key={m.id}>
              <article className="slr-team-card">

                <div className="slr-team-photo">
                  <Avatar photo={m.photo} name={m.name} />

                  <div className="slr-team-overlay">
                    <a
                      href={m.linkedin}
                      className="slr-icon-btn"
                      aria-label={`${m.name} on LinkedIn`}
                    >
                      in
                    </a>

                    <a
                      href={m.email}
                      className="slr-icon-btn"
                      aria-label={`Email ${m.name}`}
                    >
                      @
                    </a>
                  </div>

                </div>


                <div className="slr-team-body">

                  <h4>{m.name}</h4>

                  <div className="slr-team-designation">
                    {m.designation}
                  </div>

                  <div className="slr-team-meta">
                    <span>{m.department}</span>
                    <span>{m.location}</span>
                  </div>

                  <a href={`#${m.id}`} className="slr-team-view">
                    View Profile
                  </a>

                </div>

              </article>
            </Reveal>
          ))}

        </div>


        <div className="slr-team-navigation">

          <button
            onClick={() =>
              setPage((prev) => (prev - 1 + totalPages) % totalPages)
            }
          >
            ← 
          </button>


          <span>
            {page + 1} / {totalPages}
          </span>


          <button
            onClick={() =>
              setPage((prev) => (prev + 1) % totalPages)
            }
          >
            →
          </button>

        </div>


      </div>
    </section>
  );
}

function LeadershipStats() {
  return (
    <section className="slr-section">
      <div className="slr-container">
        <div className="slr-lead-stats-grid">
          {STATS.map((s) => (
            <div key={s.label} className="slr-lead-stat">
              <CountUp target={s.num} suffix={s.suffix} />
              <div className="lbl">{s.label}</div>
            </div>
          ))}
          <div className="slr-lead-stat wide">
            <span>Excellence &bull; Integrity &bull; Innovation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipValues() {
  return (
    <section className="slr-section slr-section-cream">
      <div className="slr-container">
        <div className="slr-lead-head">
          <span className="slr-eyebrow">What Guides Us</span>
          <h2>Our leadership values</h2>
        </div>
        <div className="slr-lead-values-grid">
          {VALUES.map((v) => (
            <Reveal key={v.title}>
              <div className="slr-lead-value-card">
                <div className="slr-lead-value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrgStructure() {
  const tiers = ['Chairman', 'Board of Directors', 'Executive Leadership', 'Department Heads', 'Leadership Team'];
  return (
    <section className="slr-section slr-section-cream">
      <div className="slr-container">
        <div className="slr-lead-head">
          <span className="slr-eyebrow">Organization Structure</span>
          <h2>How leadership is organized</h2>
        </div>
        <div className="slr-org-chart">
          {tiers.map((t, i) => (
            <React.Fragment key={t}>
              <div className={`slr-org-tier ${i === 0 ? 'top' : ''}`}>{t}</div>
              {i < tiers.length - 1 && <div className="slr-org-connector" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipGallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="slr-section">
      <div className="slr-container">
        <div className="slr-lead-head">
          <span className="slr-eyebrow">Leadership Gallery</span>
          <h2>Board meetings, conferences, and collaboration</h2>
        </div>
        <div className="slr-gallery-grid">
          {GALLERY.map((g, i) => (
            <div key={g.caption} className="slr-gallery-item" onClick={() => setActiveIndex(i)}>
              <img src={g.img} alt={g.caption} loading="lazy" />
              <div className="slr-gallery-caption">{g.caption}</div>
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="slr-lightbox" role="dialog" aria-modal="true" onClick={() => setActiveIndex(null)}>
          <button className="slr-lightbox-close" onClick={() => setActiveIndex(null)} aria-label="Close">&times;</button>
          <button
            className="slr-lightbox-nav prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);
            }}
          >
            &larr;
          </button>
          <img src={GALLERY[activeIndex].img} alt={GALLERY[activeIndex].caption} onClick={(e) => e.stopPropagation()} />
          <button
            className="slr-lightbox-nav next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i + 1) % GALLERY.length);
            }}
          >
            &rarr;
          </button>
          <div className="slr-lightbox-caption">{GALLERY[activeIndex].caption}</div>
        </div>
      )}
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timerRef.current);
  }, []);

  function goTo(i) {
    clearInterval(timerRef.current);
    setIndex(i);
  }

  const current = TESTIMONIALS[index];

  return (
    <section className="slr-section slr-section-cream">
      <div className="slr-container">
        <div className="slr-lead-head">
          <span className="slr-eyebrow">Testimonials</span>
          <h2>In their own words</h2>
        </div>
        <div
          className="slr-testi-wrap"
          onMouseEnter={() => clearInterval(timerRef.current)}
        >
          <button className="slr-testi-arrow prev" onClick={() => goTo((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous testimonial">&larr;</button>
          <div className="slr-testi-card">
            <div className="slr-testi-photo">
              <Avatar photo={current.photo} name={current.name} />
            </div>
            <p className="slr-testi-quote">&ldquo;{current.quote}&rdquo;</p>
            <div className="slr-testi-name">{current.name}</div>
            <div className="slr-testi-position">{current.position}</div>
          </div>
          <button className="slr-testi-arrow next" onClick={() => goTo((index + 1) % TESTIMONIALS.length)} aria-label="Next testimonial">&rarr;</button>
          <div className="slr-testi-dots">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name + i}
                className={i === index ? 'is-active' : ''}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JoinCta() {
  return (
    <section className="slr-cta-banner" style={{ background: `linear-gradient(120deg, var(--navy) 0%, var(--navy-2) 100%)` }}>
      <div className="slr-container">
        <h1 className="slr-app-title">Join Our Journey of Leadership and Excellence</h1>
        <div className="slr-cta-actions">
          <a href="/careers" className="slr-btn slr-btn-primary">Careers</a>
          <a href="/contact" className="slr-btn slr-btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

export default function LeadershipPage() {
  return (
    <div className="slr-about">
      <LeadershipHero />
      <BoardOfDirectors />
      <ChairmanSpotlight />
      <LeadershipTeamGrid />
      <LeadershipStats />
      <LeadershipValues />
      
      <LeadershipGallery />
      <Testimonials />
      <JoinCta />
    </div>
  );
}
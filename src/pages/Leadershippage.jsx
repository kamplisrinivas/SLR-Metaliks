import React, { useEffect, useRef, useState } from 'react';
import './Leadershippage.css';
import MDImage from '../images/MD.jpg';
import Timblo from '../images/Timblo.webp';
import Rajat from '../images/Rajat.webp';
import Misra from '../images/Misra.webp';
import anil from '../images/anil.webp';
import Yogendra from '../images/Yogendra.png';
import Gaur from '../images/Gaur.png';
import Goel from '../images/Goel.png';
import Naveen from '../images/Naveen.png';
import Ajay from '../images/Ajay.png';
import Ramji from '../images/Ramji.png';
import Vijay from '../images/Vijay.png';
import Vivek from '../images/Vivek.png';
import Avinash from '../images/Avinash.png';
import Prakash from '../images/Prakash.png';
import Alok from '../images/Alok.png';
import Dj from '../images/Dj.png';
import anilb from '../images/anilb.png';
import hirehal from '../images/hirehal.png';
import krishnamoorthy from '../images/krishnamoorthy.png';
import vn from '../images/vn.png';
import cp from '../images/cp.png';


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
  {
    id: "b1",
    name: "Mr. Rajkumar Goel",
    position: "Managing Director",

    bio: "Mr. Raj Kumar Goel, Managing Director of the Company, has rich experience in Steel Marketing and has been serving as Managing Director since the Company's incorporation in 2007.",

    fullBio: `Mr. Raj Kumar Goel, Managing Director of the Company, has rich experience in Steel Marketing and has been Managing Director of the Company since its incorporation in 2007.

He leads his dynamic team with determination and commitment, resulting in the successful commissioning of various plants, including Sinter, MBF, SMS, RMS and a 6 MW Captive Power Plant.

SLR started from the ground level and, under his inspirational leadership and strong management capabilities, the plant has grown to a capacity of 0.3 million tonnes of Alloy and Special Steel. His strong vision has been to achieve 0.7 million tonnes per annum and subsequently expand the organization's capabilities further.

He has always believed in the philosophy that every cloud has a silver lining, firmly believing that difficult times can lead to better days. He has also established 33 MW capacity Hydro Plants in Uttarakhand, which are operating successfully.

Mr. Raj Kumar Goel serves on the boards of several other Group Companies. His entrepreneurial capabilities and extensive exposure to Corporate Finance and Planning, Investor Relations, Risk Management and Taxation Strategy have earned him recognition as a leader in his field.

He also plays an important role as a facilitator for various Group Companies. He is deeply committed to employee development and continuously encourages innovative and creative thinking among his teams.

He firmly believes that the success and growth of SLR are driven by its people and the strength of its TEAM.`,

    experience: "45+ Years",
    linkedin: "#",
    email: "mailto:md@slrm.com",
    photo: MDImage,
  },

  {
    id: "b2",
    name: "Mr. Ambar Timblo",
    position: "Chairman",

    bio: "Mr. Ambar Timblo is the Managing Director of Fomento Resources and brings extensive experience across mining, mineral processing, logistics, steel, shipping, energy, hospitality and media.",

    fullBio: `Mr. Ambar Timblo is the Managing Director of Fomento Resources.

Mr. Ambar's initial schooling was at Sharda Mandir, Goa, followed by his high school education at Modern School, Barakhamba Road, New Delhi.

He graduated in 1997 from the London School of Economics (LSE), UK, with a BSc in Economics. Following his graduation, Ambar joined Fomento Resources and is presently its Managing Director.

Fomento Group has interests across multiple sectors, including Mining, Mineral Processing, Logistics, Steel, Shipping, Energy, Hospitality and Media.

Mr. Ambar presently serves as the President of the Goa Mineral Ore Exporters' Association.

During his school and college years, he was a nationally ranked badminton player. Beyond his professional commitments, he values family life and has been married to Vinni for 24 years. They have two children, Adi and Sara, along with their dogs, Atticus and Bailey Rae.`,

    experience: "27+ Years",
    linkedin: "#",
    email: "mailto:name@slrmetaliks.com",
    photo: Timblo,
  },

  {
    id: "b3",
    name: "Mr. Rajat Goel",
    position: "Director and CFO",

    bio: "Mr. Rajat Goel is an MBA in Marketing and an energetic entrepreneur who has been associated with the business since 2012, contributing significantly to projects, corporate functions and organizational growth.",

    fullBio: `Mr. Rajat Goel is a postgraduate with an MBA in Marketing and is an energetic and enthusiastic young entrepreneur who has been associated with the business since 2012.

He worked as Project Head for four years in the Power Division, where he was involved in the commissioning of two hydro power plants in Uttarakhand State — Sarju 2 (12.6 MW) and Sarju 3 (10.5 MW).

These power plants have been operating successfully, reflecting his strong vision, project management capabilities and emphasis on teamwork.

Mr. Rajat Goel has inherited a strong business sense and valuable learning from his father and mentor. He believes in continuous learning and strongly follows the philosophy, "Grow Through What You Go Through."

He is a key member of the Senior Management Team and plays an important role in the growth of the organization. His responsibilities include supervision of corporate functions and contributing to strategic initiatives across the Group.`,

    experience: "15+ Years",
    linkedin: "#",
    email: "mailto:name@slrmetaliks.com",
    photo: Rajat,
  },

  {
    id: "b4",
    name: "Mr. Apoorva Misra",
    position: "Director",

    bio: "Mr. Apoorva Misra holds a Ph.D. in Accounting and Finance from the University of Rochester's Simon Business School and has more than two decades of experience in the finance sector.",

    fullBio: `Mr. Apoorva Misra, aged 45, holds a Ph.D. in Accounting with a minor in Finance from the University of Rochester, Simon Business School.

He has more than 20 years of experience in the finance sector and has held various senior positions during his professional career.

Mr. Misra brings extensive expertise in Treasury Management, Capital Budgeting and allied financial services.

He is associated with various companies at the Director level and is also associated with Fomento Group in the capacity of Chief Financial Officer.

His extensive financial expertise and strategic understanding contribute to effective financial planning, governance and organizational decision-making.`,

    experience: "45+ Years",
    linkedin: "#",
    email: "mailto:name@slrmetaliks.com",
    photo: Misra,
  },

  {
    id: "b5",
    name: "Mr. Anil Kumar Jha",
    position: "Independent Director",

    bio: "Mr. Anil Kumar Jha is a highly experienced mining professional with extensive expertise in mine planning, production, management and strategic leadership across India's coal and power sectors.",

    fullBio: `Mr. Anil Kumar Jha holds a B.Tech. in Mining from IIT (ISM), Dhanbad and an M.Tech. in Mine Planning & Design from IIT (ISM), Dhanbad.

He brings more than four decades of professional experience in mine planning, production, management, supervision, direction and control of both underground and open-cast coal mines.

He began his career in the coal mining industry in 1983 with Central Coalfields Limited (CCL), where he held several important responsibilities and subsequently served as General Manager.

Mr. Jha later served as Chairman & Managing Director of Coal India Limited (CIL). Prior to this, he headed Mahanadi Coalfields Limited (MCL) as its Chairman-cum-Managing Director (CMD).

Before joining MCL as CMD, he served as Director (Production and Planning) at MOIL Limited, a Public Sector Undertaking under the Ministry of Steel.

He has also served as Chairman of Jindal Power Limited.

With his extensive experience in mining, operations, strategic planning and organizational leadership, Mr. Jha brings significant expertise and independent perspective to the Board.

He is presently serving as Chairman of India Power Corporation Ltd.`,

    experience: "40+ Years",
    linkedin: "#",
    email: "mailto:name@slrmetaliks.com",
    photo: anil,
  },

  {
  id: "b6",
  name: "Mr. Sridhar Krishnamoorthy",
  position: "Independent Director",

  bio: "Mr. Sridhar Krishnamoorthy serves as an Independent Director of SLR Metaliks, bringing an independent perspective and professional expertise to the Board.",

  fullBio: `Mr. Sridhar Krishnamoorthy serves as an Independent Director of SLR Metaliks.

He brings his professional experience and independent perspective to the Board, supporting effective governance, strategic decision-making, and long-term organizational growth.`,

  experience: "42+ Years",
  linkedin: "https://www.linkedin.com/in/sridhar-krishnamoorthy-/",
  email: "mailto:name@slrmetaliks.com",
  photo: krishnamoorthy,
},
];
 

const CHAIRMAN = {
  name: 'Mr. Rajkumar Goel',
  position: 'Founder & Managing Director',
  quote: 'Our vision has always been to build a steel enterprise driven by quality, innovation, and a commitment to sustainable growth.',
  bio: 'Mr. Rajkumar Goel is the Founder & Managing Director of SLR Metaliks, guiding the company with a strong focus on operational excellence, customer satisfaction, and continuous improvement. Under his leadership, SLR Metaliks has grown as an integrated steel manufacturer known for quality products, advanced manufacturing practices, and responsible business operations.',
  experience: '45+ Years',
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
    name: 'Mr. Vineet Goel',
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
    designation: 'HR-HEAD',
    department: 'HR and Admin',
    location: 'Hospet, Karnataka',
    email: 'mailto:name@slrmetaliks.com',
    linkedin: '#',
    photo: Dj,
  },
  {
    id: '25',
    name: 'Mr. Anil Kumar B',
    designation: 'Assistant General Manager',
    department: 'MIS & IT',
    location: 'Hospet, Karnataka',
    email: 'mailto:misit@slrm.com',
    linkedin: '#',
    photo: anilb,
  },
  {
    id: '26',
    name: 'Mr. Chandapasha  ',
    designation: 'General Manager',
    department: 'UTILITY',
    location: 'Hospet, Karnataka',
    email: 'mailto:chand@slrm.co.in',
    linkedin: '#',
    photo: cp,
  },
{
    id: '27',
    name: 'Mr. Imtiaz Ali R Hirehal',
    designation: 'General Manager',
    department: 'POWER PLANT',
    location: 'Hospet, Karnataka',
    email: 'mailto:	ir_hirehal@slrm.co.in',
    linkedin: '#',
    photo: hirehal,
  },
{
    id: '28',
    name: 'Mr. Vijay',
    designation: 'Senior Deputy General Manager',
    department: 'SECURITY',
    location: 'Hospet, Karnataka',
    email: 'mailto:vijay_nehra@slrm.in',
    linkedin: '#',
    photo: vn,
  },


  

];

const VALUES = [
  { icon: '\u25C8', title: 'Integrity', desc: 'Transparent dealings with customers, partners, and the communities we work in.' },
  { icon: '\u2726', title: 'Innovation', desc: 'Continuous investment in technology, from casting to quality testing.' },
  { icon: '\u26AD', title: 'Collaboration', desc: 'Long-term relationships built across teams, OEMs, and industries.' },
  { icon: '\u2699', title: 'Excellence', desc: 'Every heat tested, traced, and held to the spec our customers build against.' },
];

const STATS = [
  { num: 6, suffix: '', label: 'Board Members' },
  { num: 18, suffix: '+', label: 'Leadership Members' },
  { num: 20, suffix: '+', label: 'Years of Leadership Experience' },
  { num: 34, suffix: '+', label: 'Departments' },
  { num: 10, suffix: '+', label: 'Projects' },
];

const TESTIMONIALS = [
  {
    photo: Goel,
    name: "Mr. Vineet Goel",
    position: "Vice President",
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
  const [selectedDirector, setSelectedDirector] = useState(null);

  // Close popup with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedDirector(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (selectedDirector) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedDirector]);

  return (
    <section id="board" className="slr-section">

      <div className="slr-container">

        {/* HEADER */}

        <div className="slr-lead-head">
          <span className="slr-eyebrow">
            Board of Directors
          </span>

          <h2>
            The people steering our direction
          </h2>

          <p>
            Six board members bringing decades of combined
            industry and governance experience.
          </p>
        </div>


        {/* BOARD CARDS */}

        <div className="slr-board-grid">

          {BOARD.map((m) => (

            <Reveal key={m.id}>

              <article className="slr-board-card">

                {/* PHOTO */}

                <div className="slr-board-photo">
                  <Avatar
                    photo={m.photo}
                    name={m.name}
                  />
                </div>


                {/* BODY */}

                <div className="slr-board-body">

                  <h3>{m.name}</h3>

                  <div className="slr-board-position">
                    {m.position}
                  </div>

                  <p className="slr-board-bio">
                    {m.bio}
                  </p>

                  <div className="slr-board-exp">
                    {m.experience}
                  </div>


                  {/* FOOTER */}

                  <div className="slr-board-footer">

                    <div className="slr-board-socials">

                      <a
                        href={m.linkedin}
                        className="slr-icon-btn"
                        aria-label={`${m.name} on LinkedIn`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        in
                      </a>

                      <a
                        href={m.email}
                        className="slr-icon-btn"
                        aria-label={`Email ${m.name}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        @
                      </a>

                    </div>


                    {/* VIEW PROFILE */}

                    <button
                      type="button"
                      className="slr-view-profile"
                      onClick={() => setSelectedDirector(m)}
                    >
                      View Profile →
                    </button>

                  </div>

                </div>

              </article>

            </Reveal>

          ))}

        </div>

      </div>


      {/* =====================================
          BOARD MEMBER PROFILE POPUP
      ===================================== */}

      {selectedDirector && (

        <div
          className="slr-director-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="director-profile-title"
          onClick={() => setSelectedDirector(null)}
        >

          <div
            className="slr-director-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="slr-director-close"
              onClick={() => setSelectedDirector(null)}
              aria-label="Close profile"
            >
              ×
            </button>


            {/* LEFT - PHOTO */}

            <div className="slr-director-modal-photo">

              <Avatar
                photo={selectedDirector.photo}
                name={selectedDirector.name}
              />

            </div>


            {/* RIGHT - DETAILS */}

            <div className="slr-director-modal-details">

              <span className="slr-eyebrow">
                Board of Directors
              </span>


              <h2 id="director-profile-title">
                {selectedDirector.name}
              </h2>


              <div className="slr-director-modal-position">
                {selectedDirector.position}
              </div>


              {/* EXPERIENCE */}

              <div className="slr-director-experience">

                <span className="slr-director-experience-number">
                  {selectedDirector.experience}
                </span>

                <span className="slr-director-experience-label">
                  Professional Experience
                </span>

              </div>


              {/* BIO */}

              <div className="slr-director-about">

                <h4>About</h4>

                <div className="slr-director-full-bio">
  {selectedDirector.fullBio
    .split("\n\n")
    .map((paragraph, index) => (
      <p key={index}>
        {paragraph}
      </p>
    ))}
</div>


              </div>


              {/* CONTACT */}

              <div className="slr-director-actions">

                <a
                  href={selectedDirector.email}
                  className="slr-director-email"
                >
                  ✉ Email
                </a>


                {selectedDirector.linkedin &&
                  selectedDirector.linkedin !== "#" && (

                    <a
                      href={selectedDirector.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="slr-director-linkedin"
                    >
                      in LinkedIn
                    </a>

                  )}

              </div>

            </div>

          </div>

        </div>

      )}

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
            <span className="slr-eyebrow slr-chairman-eyebrow">Founder Message</span>
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
  const [selectedMember, setSelectedMember] = useState(null);

  const membersPerPage = 4;
  const totalPages = Math.ceil(LEADERSHIP.length / membersPerPage);

  const visibleMembers = LEADERSHIP.slice(
    page * membersPerPage,
    page * membersPerPage + membersPerPage
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 8000);

    return () => clearInterval(timer);
  }, [totalPages]);

  // Close popup with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent background scrolling while popup is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

  return (
    <section className="slr-section slr-section-cream">
      <div className="slr-container">

        <div className="slr-lead-head">
          <span className="slr-eyebrow">Leadership Team</span>

          <h2>
            People running the business day to day
          </h2>

          <p>
            Department heads and senior leaders across operations,
            finance, sales, and quality.
          </p>
        </div>

        {/* TEAM CARDS */}

        <div key={page} className="slr-team-grid">

          {visibleMembers.map((m) => (
            <Reveal key={m.id}>

              <article className="slr-team-card">

                <div className="slr-team-photo">

                  <Avatar
                    photo={m.photo}
                    name={m.name}
                  />

                  <div className="slr-team-overlay">

                    <a
                      href={m.linkedin}
                      className="slr-icon-btn"
                      aria-label={`${m.name} on LinkedIn`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      in
                    </a>

                    <a
                      href={m.email}
                      className="slr-icon-btn"
                      aria-label={`Email ${m.name}`}
                      onClick={(e) => e.stopPropagation()}
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

                  {/* VIEW PROFILE */}

                  <button
                    type="button"
                    className="slr-team-view"
                    onClick={() => setSelectedMember(m)}
                  >
                    View Profile →
                  </button>

                </div>

              </article>

            </Reveal>
          ))}

        </div>

        {/* NAVIGATION */}

        <div className="slr-team-navigation">

          <button
            type="button"
            onClick={() =>
              setPage(
                (prev) => (prev - 1 + totalPages) % totalPages
              )
            }
          >
            ←
          </button>

          <span>
            {page + 1} / {totalPages}
          </span>

          <button
            type="button"
            onClick={() =>
              setPage(
                (prev) => (prev + 1) % totalPages
              )
            }
          >
            →
          </button>

        </div>

      </div>

      {/* ================= PROFILE MODAL ================= */}

      {selectedMember && (

        <div
          className="slr-profile-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="profile-modal-title"

          onClick={() => setSelectedMember(null)}
        >

          <div
            className="slr-profile-modal-content"

            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="slr-profile-close"
              onClick={() => setSelectedMember(null)}
              aria-label="Close profile"
            >
              ×
            </button>


            {/* PROFILE IMAGE */}

            <div className="slr-profile-image">

              <Avatar
                photo={selectedMember.photo}
                name={selectedMember.name}
              />

            </div>


            {/* PROFILE DETAILS */}

            <div className="slr-profile-details">

              <span className="slr-eyebrow">
                Leadership Profile
              </span>

              <h2 id="profile-modal-title">
                {selectedMember.name}
              </h2>

              <div className="slr-profile-designation">
                {selectedMember.designation}
              </div>


              <div className="slr-profile-info">

                <div>
                  <strong>Department</strong>
                  <span>
                    {selectedMember.department}
                  </span>
                </div>

                <div>
                  <strong>Location</strong>
                  <span>
                    {selectedMember.location}
                  </span>
                </div>

              </div>


              {/* BIO */}

              <div className="slr-profile-about">

                <h4>About</h4>

                <p>
                  {selectedMember.bio ||
                    `${selectedMember.name} is a key member of the SLR Metaliks leadership team, contributing to the organization's growth, operational excellence, and long-term vision.`}
                </p>

              </div>


              {/* CONTACT */}

              <div className="slr-profile-actions">

                <a
                  href={selectedMember.email}
                  className="slr-profile-email"
                >
                  ✉ Email
                </a>

                {selectedMember.linkedin &&
                  selectedMember.linkedin !== "#" && (

                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="slr-profile-linkedin"
                    >
                      in LinkedIn
                    </a>

                  )}

              </div>

            </div>

          </div>

        </div>

      )}

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
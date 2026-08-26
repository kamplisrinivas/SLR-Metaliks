import React, { useMemo, useState } from 'react';
import './Aboutpage.css';
import './Clients.css';

import client1 from '../images/1.webp';
import client2 from '../images/2.webp';
import client3 from '../images/3.webp';
import client4 from '../images/4.webp';
import client5 from '../images/5.webp';
import client6 from '../images/6.webp';
import client7 from '../images/7.webp';
import client8 from '../images/8.webp';
import client9 from '../images/9.webp';
import client10 from '../images/10.webp';
import client11 from '../images/11.webp';
import client12 from '../images/12.webp';
import client13 from '../images/13.webp';
import client14 from '../images/14.webp';
import client15 from '../images/15.webp';
import client16 from '../images/16.webp';
import client17 from '../images/17.webp';
import client18 from '../images/18.webp';
import client19 from '../images/19.webp';
import client20 from '../images/20.webp';
import client21 from '../images/21.webp';
import client22 from '../images/22.webp';
import client23 from '../images/23.webp';
import client24 from '../images/24.webp';
import client25 from '../images/25.webp';
import client26 from '../images/26.webp';
import client27 from '../images/27.webp';
import client28 from '../images/28.webp';
import client29 from '../images/29.webp';
import client30 from '../images/30.webp';
import client31 from '../images/31.webp';
import client32 from '../images/32.webp';
import client33 from '../images/33.webp';
import client34 from '../images/34.webp';
import client35 from '../images/35.webp';
import client36 from '../images/36.webp';
import client37 from '../images/37.webp';



/*
  SLR Metaliks — Our Clients Page

  IMPORTANT: You did not provide real client names or logos, so every
  entry below is a clearly generic placeholder ("Partner 01" etc.) —
  NOT real company names. I'm not fabricating specific real-company
  client relationships, since that would misrepresent actual business
  ties that I have no way to verify. Replace CLIENTS below with your
  real 40+ client names and logo files before publishing; each entry's
  `logo` field currently points to a path that doesn't exist yet, so
  every card renders its graceful placeholder icon until you do.

  Sectors used (Automotive / Engineering / Railways / Defence / Energy /
  Bearing) are drawn from the sectors your site already states SLRM
  serves elsewhere (Applications, Products pages) — adjust the mix or
  counts to match your real client distribution.

  Image convention: public/images/clients/<slug>/logo.png
  Missing files fall back to a generic placeholder mark automatically.

  NOTE: Header and Footer aren't rendered here, same assumption as the
  other pages — supplied by a shared Layout elsewhere in the app.
*/

const CLIENTS = [
  {
    id: "01",
    slug: "client-01",
    name: "Stellantis",
    sector: "Automotive",
    logo: client1,
  },
  {
    id: "02",
    slug: "client-02",
    name: "TATA Motors",
    sector: "Engineering",
    logo: client2,
  },
  {
    id: "03",
    slug: "client-03",
    name: "Maruti Suzuki",
    sector: "Railways",
    logo: client3,
  },
  {
    id: "04",
    slug: "client-04",
    name: "BHARATH BENZ",
    sector: "Defence",
    logo: client4,
  },
  {
    id: "05",
    slug: "client-05",
    name: "FORCE MOTORS",
    sector: "Energy",
    logo: client5,
  },
  {
    id: "06",
    slug: "client-06",
    name: "Ashok Leyland",
    sector: "Bearing",
    logo: client6,
  },
  {
    id: "07",
    slug: "client-07",
    name: "DANA",
    sector: "Automotive",
    logo: client7,
  },
  {
    id: "08",
    slug: "client-08",
    name: "Mahindra",
    sector: "Engineering",
    logo: client8,
  },
  {
    id: "09",
    slug: "client-09",
    name: "EICHER",
    sector: "Railways",
    logo: client9,
  },
  {
    id: "10",
    slug: "client-10",
    name: "ISUZU",
    sector: "Defence",
    logo: client10,
  },
  {
    id: "11",
    slug: "client-11",
    name: "CATERPILLER",
    sector: "Energy",
    logo: client11,
  },
  {
    id: "12",
    slug: "client-12",
    name: "Lucas-TVS",
    sector: "Bearing",
    logo: client12,
  },
  {
    id: "13",
    slug: "client-13",
    name: "Delphi-TVS",
    sector: "Automotive",
    logo: client13,
  },
  {
    id: "14",
    slug: "client-14",
    name: "Sonalika",
    sector: "Engineering",
    logo: client14,
  },
  {
    id: "15",
    slug: "client-15",
    name: "TAFE",
    sector: "Railways",
    logo: client15,
  },
  {
    id: "16",
    slug: "client-16",
    name: "JOHN DEERE",
    sector: "Defence",
    logo: client16,
  },
  {
    id: "17",
    slug: "client-17",
    name: "Client 17",
    sector: "Energy",
    logo: client17,
  },
  {
    id: "18",
    slug: "client-18",
    name: "HERO",
    sector: "Bearing",
    logo: client18,
  },
  {
    id: "19",
    slug: "client-19",
    name: "ROYAL ENFIELD",
    sector: "Automotive",
    logo: client19,
  },
  {
    id: "20",
    slug: "client-20",
    name: "TVS",
    sector: "Engineering",
    logo: client20,
  },
  {
    id: "21",
    slug: "client-21",
    name: "BHARATHBENZ",
    sector: "Railways",
    logo: client21,
  },
  {
    id: "22",
    slug: "client-22",
    name: "SWARAJ MAZDA",
    sector: "Defence",
    logo: client22,
  },
  {
    id: "23",
    slug: "client-23",
    name: "Client 23",
    sector: "Energy",
    logo: client23,
  },
  {
    id: "24",
    slug: "client-24",
    name: "Client 24",
    sector: "Bearing",
    logo: client24,
  },
  {
    id: "25",
    slug: "client-25",
    name: "Client 25",
    sector: "Automotive",
    logo: client25,
  },
  {
    id: "26",
    slug: "client-26",
    name: "Client 26",
    sector: "Engineering",
    logo: client26,
  },
  {
    id: "27",
    slug: "client-27",
    name: "Client 27",
    sector: "Railways",
    logo: client27,
  },
  {
    id: "28",
    slug: "client-28",
    name: "Client 28",
    sector: "Defence",
    logo: client28,
  },
  {
    id: "29",
    slug: "client-29",
    name: "Client 29",
    sector: "Energy",
    logo: client29,
  },
  {
    id: "30",
    slug: "client-30",
    name: "Client 30",
    sector: "Bearing",
    logo: client30,
  },
  {
    id: "31",
    slug: "client-31",
    name: "Client 31",
    sector: "Automotive",
    logo: client31,
  },
  {
    id: "32",
    slug: "client-32",
    name: "Client 32",
    sector: "Engineering",
    logo: client32,
  },
  {
    id: "33",
    slug: "client-33",
    name: "Client 33",
    sector: "Railways",
    logo: client33,
  },
  {
    id: "34",
    slug: "client-34",
    name: "Client 34",
    sector: "Defence",
    logo: client34,
  },
  {
    id: "35",
    slug: "client-35",
    name: "Client 35",
    sector: "Energy",
    logo: client35,
  },
  {
    id: "36",
    slug: "client-36",
    name: "Client 36",
    sector: "Bearing",
    logo: client36,
  },
  {
    id: "37",
    slug: "client-37",
    name: "Client 37",
    sector: "Automotive",
    logo: client37,
  },
];


const SECTORS = ['Automotive', 'Engineering', 'Railways', 'Defence', 'Energy', 'Bearing'];

// function buildClients() {
//   const perSector = 7; // 6 sectors x 7 = 42 total placeholder clients
//   const clients = [];
//   let n = 1;
//   SECTORS.forEach((sector) => {
//     for (let i = 1; i <= perSector; i++) {
//       const id = String(n).padStart(2, '0');
//       clients.push({
//         id,
//         slug: `partner-${id}`,
//         name: `Partner ${id}`,
//         sector,
//         logo: `/images/clients/partner-${id}/logo.png`,
//       });
//       n++;
//     }
//   });
//   return clients;
// }

// const CLIENTS = buildClients();
const MARQUEE_CLIENTS = CLIENTS.slice(0, 14);

/* ---------- placeholder logo mark ---------- */

function PlaceholderMark({ label }) {
  return (
    <div className="slr-cli-placeholder-logo">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="7" width="18" height="13" rx="1.5" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
      {label && <span>{label}</span>}
    </div>
  );
}

function ClientLogo({ client, showLabel = false }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return <PlaceholderMark label={showLabel ? client.sector : null} />;
  }
  return (
    <img
      src={client.logo}
      alt={`${client.name} logo`}
      onError={() => setErrored(true)}
      loading="lazy"
    />
  );
}

/* ---------- hero ---------- */

function ClientsHero() {
  return (
    <section className="slr-cli-hero">
      <div className="slr-cli-container">

        <div className="slr-cli-breadcrumb">
          <a href="/">Home</a> / <span className="slr-accent">Our Clients</span>
        </div>
        <span className="slr-eyebrow">Our Clients</span>
        <h1 className="slr-src-hero-title">Trusted Across Every Sector We Serve</h1>
        <p>
          From automotive OEMs to railways, defence, and energy, 40+ organisations
          rely on SLRM for alloy and engineering steel that meets spec every time.
        </p>
        <div className="slr-cli-hero-chips">
          <div className="slr-cli-chip"><b>40+</b>Active Clients</div>
          <div className="slr-cli-chip"><b>{SECTORS.length}</b>Sectors Served</div>
          <div className="slr-cli-chip"><b>21+</b>Years of Relationships</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- marquee ---------- */

function ClientMarquee() {
  const loopItems = [...MARQUEE_CLIENTS, ...MARQUEE_CLIENTS];
  return (
    <section className="slr-cli-marquee-section">
      <div className="slr-cli-marquee-label">Trusted By Industry Leaders</div>
      <div className="slr-cli-marquee-track-wrap">
        <div className="slr-cli-marquee-track">
          {loopItems.map((c, i) => (
            <div className="slr-cli-marquee-item" key={c.slug + i}>
              <ClientLogo client={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- stats strip ---------- */

function ClientStats() {
  return (
    <section className="slr-cli-stats-strip">
      <div className="slr-container slr-cli-stats-grid">
        <div className="slr-cli-stat"><div className="num">40+</div><div className="lbl">Active Clients</div></div>
        <div className="slr-cli-stat"><div className="num">{SECTORS.length}</div><div className="lbl">Sectors Served</div></div>
        <div className="slr-cli-stat"><div className="num">21+</div><div className="lbl">Years in Operation</div></div>
        <div className="slr-cli-stat"><div className="num">86+</div><div className="lbl">Grades Supplied</div></div>
      </div>
    </section>
  );
}

/* ---------- filterable grid ---------- */

function ClientGrid() {
  const [activeSector, setActiveSector] = useState('All');
  const [selected, setSelected] = useState(null);

  const counts = useMemo(() => {
    const map = { All: CLIENTS.length };
    SECTORS.forEach((s) => {
      map[s] = CLIENTS.filter((c) => c.sector === s).length;
    });
    return map;
  }, []);

  return (
    <section className="slr-section">
      <div className="slr-cli-container">

        <div className="slr-cli-head">
          <span className="slr-eyebrow">The Full Roster</span>
          <h2>Filter by sector</h2>
          <p>Click any partner to see which sector they're part of.</p>
        </div>

        <div className="slr-cli-filters">
          {['All', ...SECTORS].map((s) => (
            <button
              key={s}
              className={`slr-cli-filter-btn ${activeSector === s ? 'is-active' : ''}`}
              onClick={() => setActiveSector(s)}
            >
              {s}<span className="slr-cli-filter-count">({counts[s]})</span>
            </button>
          ))}
        </div>

        <div className="slr-cli-grid">
          {CLIENTS.map((c) => (
            <button
              key={c.slug}
              className={`slr-cli-card ${activeSector !== 'All' && activeSector !== c.sector ? 'is-filtered-out' : ''}`}
              onClick={() => setSelected(c)}
              aria-label={`${c.name} — ${c.sector}`}
            >
              <span className="slr-cli-card-sector" data-sector={c.sector} title={c.sector} />
              <span className="slr-cli-card-logo">
                <ClientLogo client={c} />
              </span>
              <span className="slr-cli-card-name">{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="slr-cli-modal-overlay" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
          <div className="slr-cli-modal" onClick={(e) => e.stopPropagation()}>
            <button className="slr-cli-modal-close" onClick={() => setSelected(null)} aria-label="Close">&times;</button>
            <div className="slr-cli-modal-logo">
              <ClientLogo client={selected} showLabel />
            </div>
            <h3>{selected.name}</h3>
            <span className="slr-cli-modal-sector-tag">{selected.sector}</span>
          </div>
        </div>
      )}
    </section>
  );
}

function ClientsCta() {
  return (
    <section className="slr-cli-cta">
      <div className="slr-cli-container">

        <h2>Looking to become one of our supply partners?</h2>
        <div className="slr-cli-cta-actions">
          <a href="/contact" className="slr-btn slr-btn-primary">Request a Quote</a>
          <a href="https://slrm.procol.ai/send-otp" className="slr-btn slr-btn-outline">Our Vendor Onboarding Process</a>
        </div>
      </div>
    </section>
  );
}

export default function ClientsPage() {
  return (
    <div className="slr-about">
      <ClientsHero />
      <ClientMarquee />
      <ClientStats />
      <ClientGrid />
      <ClientsCta />
    </div>
  );
}
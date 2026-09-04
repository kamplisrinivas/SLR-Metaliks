import React, { useEffect, useRef, useState } from 'react';
import './Aboutpage.css';
import './Plant.css';

import sp2 from '../images/sp2.png';
import sp1 from '../images/sp1.png';
import pc2 from '../images/pc2.png'; 
import cpp2 from '../images/cpp2.png';
import mbf12 from '../images/mbf12.png';
import eof from '../images/eof.jpg';
import lrf from '../images/lrf.png';
import vdg from '../images/vdg.png';
import abg from '../images/abg.png';
import ccm from '../images/ccm.png';
import rf from '../images/rf.png';
import rm1 from '../images/rm1.png';
import rm2 from '../images/rm2.png';
import ans1 from '../images/ans1.png';
import ans2 from '../images/ans2.png';
import hts1 from '../images/hts1.png';
import hts2 from '../images/hts2.png';
import hts3 from '../images/hts3.png';
import hts4 from '../images/hts4.png';
import bb1 from '../images/bb1.png';
import bb2 from '../images/bb2.png';
import bb3 from '../images/bb3.png';
import sbf from '../images/sbf.png';


import { motion, AnimatePresence } from 'framer-motion';

/*
  SLR Metaliks — Manufacturing Plant Page (Hosapete)
  Plain React + CSS, matching AboutPage.css tokens.

  All facility descriptions and spec tables below are transcribed from
  what you provided, lightly cleaned up for grammar/flow but not altered
  in technical substance — every number, supplier name, and parameter
  is preserved as given.

  Image convention: same pattern as ApplicationsPage.jsx. Your source
  text had "img" markers placed inconsistently between sections, so
  rather than guess which photo belongs where, every facility uses the
  same 3-image slot convention:

    public/images/plant/<slug>/1.jpg
    public/images/plant/<slug>/2.jpg
    public/images/plant/<slug>/3.jpg

  Missing files fall back to a plain placeholder automatically.

  NOTE: Header and Footer aren't rendered here, same assumption as the
  other pages — supplied by a shared Layout elsewhere in the app.
*/

const STAGES = [
  {
    id: 'sintering',
    label: 'Sintering & Raw Material',
    intro: 'Iron ore fines and coal are prepared and agglomerated before entering the furnace.',
    facilities: [
      {
        name: 'Sinter Plant 2',
        slug: 'sinter-plant-2',
        images: [sp2],
        headline: '5,70,000 TPA',
        desc: "SLR Metaliks installed a linear sinter machine — a modern sinter-making process adopted in steel plants that employs straight-line machines, offering significant benefits over older circular machines in operational efficiency, cost-effectiveness, and environmental performance.",
        benefits: [
          'Automated process control systems provide precise control over sintering parameters, increasing efficiency and product quality',
          'Waste heat recovery minimizes harmful emissions and reduces fuel use',
          'Design allows for easier maintenance access',
        ],
        note: 'Combined capacity of Sinter Plant 1 and Sinter Plant 2 is 9,26,000 TPA.',
        specs: [
          { label: 'Technology', value: 'ANDE Metallurgical Machinery Co., Ltd., China' },
          { label: 'Sinter Machine', value: 'Linear type' },
          { label: 'Size of Sinters', value: '5 to 50 mm' },
          { label: 'Cooler Area', value: '60 m²' },
          { label: 'Gas Cleaning', value: 'Head ESP (108.8 m²)' },
          { label: 'Capacity', value: '5,70,000 TPA' },
        ],
      },
      {
        name: 'Sinter Plant 1',
        slug: 'sinter-plant-1',
        images: [sp1],
        headline: '3,56,000 TPA',
        desc: 'SLRM has operated a 25 m² sinter plant since 2013. Iron ore fines are processed through the sinter plant to form agglomerates before charging into the MBF.',
        specs: [
          { label: 'Technology', value: 'CMEPC, China' },
          { label: 'Sinter Machine', value: 'Circular type' },
          { label: 'Size of Sinters', value: '5 to 60 mm' },
          { label: 'Cooler Area', value: '30 m²' },
          { label: 'Gas Cleaning', value: 'Gravity, ESP (52 m² x 3)' },
          { label: 'Capacity', value: '3,56,000 TPA' },
        ],
      },
      {
        name: 'Pulverised Coal Injection System 2',
        slug: 'pci-2',
        images: [pc2],
        headline: '12 T/hr',
        desc: 'One unit of PCI with a 12 MT/hr coal grinding system. Using coal reduces the total coke requirement of hot metal production.',
        note: 'Combined capacity of PCI-1 and PCI-2 is 22 MT/hr.',
        specs: [
          { label: 'Technology', value: 'ANDE Metallurgical, China' },
          { label: 'Input Size', value: '8 – 50 mm' },
          { label: 'Output Size', value: '(-75) micron > 80%' },
          { label: 'Mill Capacity', value: '12 T/hr' },
          { label: 'CDI Rate', value: '150 – 180 kg/THM' },
        ],
      },
      {
        name: 'Pulverised Coal Injection System 1',
        slug: 'pci-1',
        images: [pc2],
        headline: '10 T/hr',
        desc: 'One unit of PCI with a 10 MT/hr coal grinding system. Using coal reduces the total coke requirement of hot metal production.',
        specs: [
          { label: 'Technology', value: 'CMEPC, China' },
          { label: 'Input Size of Coal', value: '8 – 50 mm' },
          { label: 'Output Size of Coal', value: '< 75 micron' },
        ],
      },
    ],
  },
  {
    id: 'power',
    label: 'Captive Power',
    intro: 'Blast furnace gas is recovered and converted into clean, on-site power generation.',
    facilities: [
      {
        name: 'Captive Power Plant 2',
        slug: 'cpp-2',
        images: [cpp2],
        headline: '7 MW',
        desc: "Installed under the consultancy of M/s. MECON Ltd, Bengaluru, this plant utilizes blast furnace gas as its basic fuel — a clean fuel technology. The system recovers the enthalpy of blast furnace gases, purpose-built to generate 7 MW of power.",
        note: 'Combined capacity of CPP1 (6 MW) and CPP2 (7 MW) is 13 MW.',
        specs: [
          { label: 'Capacity', value: '7 MW' },
          { label: 'Fuel', value: 'Blast Furnace Gas' },
          { label: 'Boiler', value: 'M/s. Thermax Babcock & Wilcox Energy Solutions Ltd. (31 TPH)' },
          { label: 'Turbine', value: 'M/s. Triveni Turbine Limited, 7 MW' },
          { label: 'Air Cooled Condenser', value: 'M/s. ENEXIO Power Cooling Solutions India Pvt. Ltd.' },
          { label: 'Cooling Towers', value: 'M/s Wet Bulb Cooling Towers Ltd' },
          { label: 'EOT Crane', value: 'Sprint Engineering Pvt. Ltd. (10 Ton capacity)' },
        ],
      },
      {
        name: 'Captive Power Plant 1',
        slug: 'cpp-1',
        images: [cpp2],
        headline: '6 MW',
        desc: 'Installed under the consultancy of M/s. CET–SAILCON, this plant also utilizes blast furnace gas as a clean fuel, recovering enthalpy from blast furnace gases to generate 6 MW of power.',
        specs: [
          { label: 'Capacity', value: '6 MW' },
          { label: 'Fuel', value: 'Blast Furnace Gas' },
          { label: 'Boiler', value: 'M/s. Thermax Babcock & Wilcox' },
          { label: 'Turbine', value: 'M/s. Triveni Engg. & Industries Ltd.' },
          { label: 'Air Cooled Condenser', value: 'M/s. Paharpur Cooling Tower Ltd' },
          { label: 'Cooling Towers', value: 'M/s Wet Bulb Cooling Towers Ltd' },
          { label: 'DM Plant', value: 'Hitech Aqua System' },
        ],
      },
    ],
  },
  {
    id: 'ironmaking',
    label: 'Ironmaking',
    intro: 'Sinter, ore, and coke are reduced to hot metal in the mini blast furnaces.',
    facilities: [
      {
        name: 'Mini Blast Furnace 1 & 2',
        slug: 'mini-blast-furnace',
        images: [mbf12],
        headline: '5,52,000 TPA Combined',
        desc: "SLRM operates two 262 m³ (working volume) mini blast furnaces — the first commissioned in 2012, the second in 2022. Sinter, calibrated lump ore, iron ore pellet, limestone, dolomite, quartzite, and coke are charged from the top while hot air is passed from the bottom. Oxygen in the ascending air reacts with carbon in the coke to form CO, which reduces the descending iron oxide to iron. Hot metal collects in the hearth at the required temperature, is tapped periodically, and is transferred to the steel melting shop (EOF).",
        note: 'Combined capacity of MBF 1 and MBF 2 is 5,52,000 TPA.',
        specs: [
          { label: 'Technology', value: 'MECON Ltd.' },
          { label: 'No. of Units', value: '2 Plants' },
          { label: 'Working Volume', value: '262 m³' },
          { label: 'Typical Productivity', value: '3.0 MT/m³/day' },
          { label: 'Sinter Usage', value: '70% typical' },
          { label: 'Coal Injection', value: 'Yes' },
          { label: 'Oxygen Enrichment', value: 'Yes' },
          { label: 'Hot Blast Stoves', value: '3 nos.' },
          { label: 'Capacity (per unit)', value: '2,76,000 TPA' },
        ],
      },
    ],
  },
  {
    id: 'steelmaking',
    label: 'Steelmaking & Refining',
    intro: 'Hot metal is converted to primary steel, then refined and degassed to customer specification.',
    facilities: [
      {
        name: 'Energy Optimization Furnace',
        slug: 'eof',
        images: [eof],
        headline: '3,00,000 TPA',
        desc: 'Using approximately 80–85% hot metal, around 10% DRI, and plant return scrap, primary steel from the EOF is virgin steel with low tramp elements, low phosphorus, and low oxygen potential. Oxygen is blown through submerged tuyeres, a supersonic lance, and atmospheric injection.',
        specs: [
          { label: 'Technology', value: 'Minitec, Brazil' },
          { label: 'Size of Furnace', value: '35 MT' },
          { label: 'Hot Metal', value: '80% to 85%' },
          { label: 'Tap to Tap Time', value: '40 – 50 min' },
          { label: 'No. of Bottom Shells', value: '1+1' },
          { label: 'Capacity', value: '3,00,000 TPA' },
        ],
      },
      {
        name: 'Ladle Refining Furnace',
        slug: 'lrf',
        images: [lrf],
        headline: '35 T Ladle',
        desc: "In the ladle refining furnace, primary steel is refined with alloy additions to produce clean steel to the customer's requirement.",
        specs: [
          { label: 'Technology', value: 'ABP Induction, India / Germany' },
          { label: 'No. of LRF', value: 'Two' },
          { label: 'Wire Feeding', value: '4-Strand' },
          { label: 'Ladle Capacity', value: '35 T' },
          { label: 'Transformer Rating', value: '8 MVA, @6.6 kV primary voltage' },
          { label: 'Electrode Dia', value: '305 mm' },
          { label: 'Process Time', value: '40 – 50 min' },
          { label: 'Argon Flow', value: '4 – 10 Nm³/hr' },
        ],
      },
      {
        name: 'Vacuum De-gassing',
        slug: 'vacuum-degassing',
        images: [vdg],
        headline: '< 0.5 mbar',
        desc: 'A mechanical vacuum pump-type degassing system reaches below 1 mbar within 4–5 minutes, with the lowest vacuum achieved at 0.5 mbar. Twin skid mechanical pumps and a specially designed pre-vacuum chamber achieve the required vacuum within 6 minutes, with an online McLeod gauge for precision measurement below 1 mbar.',
        specs: [
          { label: 'Technology', value: 'Primetals (Siemens) / Edwards' },
          { label: 'Ladle Capacity', value: '35 MT' },
          { label: 'Cycle Time', value: '20 – 30 min' },
          { label: 'Vacuum', value: '< 0.5 mbar' },
          { label: 'McLeod Gauge', value: 'Available online' },
        ],
      },
    ],
  },
  {
    id: 'casting',
    label: 'Casting',
    intro: 'Refined liquid steel is cast into semi-finished billet, ready for rolling.',
    facilities: [
      {
        name: 'Auto Billet Grinder',
        slug: 'auto-billet-grinder',
        images: [abg],
        headline: 'As-Cast Surface Prep',
        desc: 'Auto billet grinding removes surface defects at the as-cast stage, eliminating flaws in rolled products and improving surface quality — making the steel bar suitable for warm forging, cold forging, and complex forging processes.',
      },
      {
        name: 'Continuous Casting Machine',
        slug: 'ccm',
        images: [ccm],
        headline: '3-Strand, Closed Mould',
        desc: 'Continuous casting solidifies molten steel into a semi-finished billet or bloom for subsequent rolling in the RMS.',
        specs: [
          { label: 'Technology', value: 'SMS Concast, India, Zurich' },
          { label: 'Machine Radius', value: '9/16' },
          { label: 'Metallurgical Length', value: '26 m' },
          { label: 'No. of Strands', value: '3' },
          { label: 'Type of Casting', value: 'Closed' },
          { label: 'EMS', value: 'Mould' },
          { label: 'AMLC Auto Start', value: 'SMS Concast' },
          { label: 'Casting Section', value: '160 dia & 200 dia, 160 Sq, 200 Sq & 130 Sq' },
          { label: 'For Rolling', value: '160×160 & 200×200' },
          { label: 'Billet Length', value: '6 – 12 m' },
        ],
      },
    ],
  },
  {
    id: 'rolling',
    label: 'Rolling',
    intro: 'Billet is reheated and rolled into finished bar, wire rod, and section sizes.',
    facilities: [
      {
        name: 'Re-Heating Furnace',
        slug: 'reheating-furnace',
        images: [rf],
        headline: '50 TPH',
        desc: 'Double regenerative, walking beam furnaces are the most advanced type for reheating heavy and thick products. Temperature is generally around 1250°C but can reach 1450°C in some cases. Blast furnace gas is used as fuel, with oxygen potential controlled to ensure control over decarburization and surface quality in rolled products.',
        specs: [
          { label: 'Technology', value: 'Shenwu' },
          { label: 'Type', value: 'Walking Beam, Double Regenerative' },
          { label: 'Capacity', value: '50 TPH' },
          { label: 'Billet Size', value: '200×200' },
          { label: 'Soaking Zone Billet Temp.', value: '1150 – 1250°C' },
          { label: 'Fuel', value: 'BF Gas' },
        ],
      },
      {
        name: 'Rolling Mill',
        slug: 'rolling-mill',
        images: [rm1, rm2],
        headline: '3,20,000 MTPA',
        desc: "State-of-the-art technology supplied by M/s Primetals Technologies, set on a 5-meter elevated platform with sufficient space for operation and maintenance. The mill combines vertical and horizontal stands across 20 stands, plus 3 additional sizing stands for precise dimensional tolerance, followed by a dimensional gauge conforming to DIN/4. A high-pressure descaler removes primary scale before the roughing stands for better surface finish, and cooling systems before and after the sizing mill control rolling temperature for improved mechanical properties. Cold shear and abrasive cutting meet length requirements, and the finished product is bundled before transport for inspection and conditioning.",
        specs: [
          { label: 'Technology', value: 'Primetals (Siemens), India / Italy' },
          { label: 'Capacity', value: '3,20,000 MTPA' },
          { label: 'Descaler', value: '250 bar' },
          { label: 'Mill Configuration', value: 'V/H continuous mill' },
          { label: 'Total No. of Stands', value: '23 stands' },
          { label: 'Cooling Bed', value: '54 m long & 8 m wide (extension in progress)' },
          { label: 'Sizing Mill', value: '3 stands, H/V' },
          { label: 'Cut to Length', value: 'Cold Shear / Abrasive' },
          { label: 'Garret Coiler', value: '—' },
          { label: 'Product Section / Size', value: '16–38 dia; 18–95 Rounds; 17–56 A/F Hexagon; 60–101 Flat width; 10–32 Flat thickness; 55–80 RCS; RCS 122; RCS 160; Rectangle 100×160' },
          { label: 'Coil Weight', value: 'Max 1.8 Tons' },
        ],
      },
    ],
  },
  {
    id: 'finishing',
    label: 'Finishing, Testing & QC',
    intro: 'Every bar is inspected, heat treated, finished, and cleaned to final specification.',
    facilities: [
      {
        name: 'Automated Online NDT Inspection System',
        slug: 'ndt-inspection',
        images: [ans1, ans2],
        headline: '100% Bar Scanning',
        desc: 'State-of-the-art inspection line featuring an Automatic Phased Array Immersion-type Ultrasonic Testing machine and MFLT, with no manual intervention. Checks feasibility per FBH or SDH under stringent specification, scans 100% of the bar, and automatically marks and segregates bars where flaws are present — ensuring a mistake-proof check for internal soundness alongside strong production output.',
        equipment: [
          {
            name: 'Magnetic Flux Leakage Test (MFLT)',
            specs: [
              { label: 'Supplier', value: 'Pruftechnik, Germany' },
              { label: 'Channels', value: '6' },
              { label: 'Probe Distance', value: '12.5 mm' },
              { label: 'Magnetizing Frequency', value: 'kHz range' },
              { label: 'Rotation', value: 'Up to 1800 rpm' },
              { label: 'Inspection Speed', value: 'Up to 3 m/s (depending on test piece diameter)' },
              { label: 'Defect Sensitivity', value: '0.3mm depth × 10mm length (for black bar)' },
              { label: 'Sorting Class', value: 'S0 (Good) & S1 (repairable)' },
            ],
          },
          {
            name: 'Phased Array Auto UT',
            specs: [
              { label: 'Supplier', value: 'Olympus NDT, Canada' },
              { label: 'Type', value: 'Phased Array Ultrasonic (internal defect detection)' },
              { label: 'Model', value: 'T2' },
              { label: 'Product Size Range', value: 'Up to 120mm' },
              { label: 'Speed', value: 'Up to 120 m/min' },
              { label: 'Typical Inspection Mode', value: 'Longitudinal waves, shear waves' },
              { label: 'Typical Defects Detected', value: 'FBH ≥ 0.7mm, SDH ≥ 0.5 × 15mm' },
            ],
          },
        ],
      },
      {
        name: 'Heat Treatment Shop',
        slug: 'heat-treatment',
        images: [hts1, hts2, hts3, hts4],
        headline: '2000 MT/Month',
        desc: 'Equipped with state-of-the-art, ultra-modern Generation Six furnaces with 2000 MT/month capacity, all heat treatment processes a customer requires can be executed under one roof — Quenching & Tempering, Normalizing, Spheroidized Annealing, Plain Annealing, and Stress Relieving.',
        specs: [{ label: 'Capacity', value: '2000 MT/Month' }],
        equipment: [
          {
            name: 'Induction Q&T Furnace',
            specs: [
              { label: 'Make', value: 'Inductotherm India Pvt Ltd (USA technology)' },
              { label: 'Size Range', value: '20 – 100mm' },
              { label: 'Capacity', value: '1000 MT/Month' },
              { label: 'Production Rate', value: '2 MT/hr' },
              { label: 'Hardness Variation', value: '1 – 3 HRC' },
              { label: 'Micro', value: 'Uniform microstructure' },
              { label: 'Type', value: 'Induction heating, fully automatic G6 machine, IGBT-based power source' },
            ],
          },
          {
            name: 'Batch Type Furnace',
            specs: [
              { label: 'Make', value: 'Precons (2 nos.)' },
              { label: 'Size Range', value: 'No constraint' },
              { label: 'Capacity', value: '1000 MT/Month' },
              { label: 'Batch Size', value: '35 MT × 2 nos.' },
              { label: 'Temp Uniformity', value: '±10°C (with load), ±6°C (without load)' },
              { label: 'Hardness Variation', value: '15 BHN max' },
              { label: 'Micro', value: 'Uniform microstructure' },
              { label: 'Type', value: 'Electrical heating, bell & bogie arrangement, fully automatic PLC with online TT trend recording' },
            ],
          },
        ],
      },
      {
        name: 'Bright Bar Shop',
        slug: 'bright-bar-shop',
        images: [bb1, bb2, bb3],
        headline: '1000 MT/Month',
        desc: 'Bright bar manufacturing facility with 1000 MT/month capacity, covering both peeled and cold-drawn routed products. An automatic imported peeling & reeling line and branded centerless grinding machines with driving rollers and auto loading/unloading make the process more precise and accurate.',
        specs: [
          { label: 'Capacity', value: '1000 MT/Month' },
          { label: 'Size Range', value: '17.5mm – 75mm' },
          { label: 'Tolerance', value: 'h9 – h12' },
          { label: 'Supply Conditions', value: 'Peeled & Reeled, Peeled & Ground, Cold Drawn & Reeled, Cold Drawn & Ground (with/without heat treatment)' },
        ],
        equipment: [
          {
            name: 'Peeling & Reeling',
            specs: [
              { label: 'Make', value: 'Real Well, China' },
              { label: 'Size Range', value: '17.5mm – 75mm' },
              { label: 'Type', value: 'Automatic, 4-Tool type' },
            ],
          },
          {
            name: 'Cold Drawing',
            specs: [
              { label: 'Make', value: 'Malakshmi Engg' },
              { label: 'Size Range', value: '20mm – 50mm (finish)' },
              { label: 'Capacity', value: '200 MT/month' },
              { label: 'Tolerances', value: 'h11' },
            ],
          },
          {
            name: 'Centerless Grinding',
            specs: [
              { label: 'Make', value: 'Idea Machine Tools' },
              { label: 'Size Range', value: '10 – 100mm' },
              { label: 'Type', value: 'Roller drive handling system, auto loading/unloading' },
            ],
          },
        ],
      },
      {
        name: 'Shotblasting Facility',
        slug: 'shot-blasting',
        images: [sbf],
        headline: 'Surface Cleaning',
        desc: 'Shot blasting is a surface treatment technique using particulate grains propelled at high velocity — an effective way to remove contamination from metal substrates or change surface coarseness before coating. A centrifugal blast wheel shoots steel shots onto the bar surface to knock free debris and scale, cleaning the bar surface.',
      },
    ],
  },
].map((stage) => ({
  ...stage,
  facilities: stage.facilities.map((f) => ({
    ...f,
    images:
      f.images ??
      [1, 2, 3].map((n) => `/images/plant/${f.slug}/${n}.jpg`),
  })),
}));

const FACILITY_COUNT = STAGES.reduce((sum, s) => sum + s.facilities.length, 0);

/* ---------- shared image component ---------- */

function ImageThumb({ src, alt, className = '', onClick, initial }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className={`slr-plant-img-fallback ${className}`} onClick={onClick}>
        <span>{initial}</span>
      </div>
    );
  }
  return (
    <img src={src} alt={alt} className={className} onClick={onClick} onError={() => setErrored(true)} loading="lazy" />
  );
}

function SpecList({ specs }) {
  return (
    <div className="slr-spec-list">
      {specs.map((s) => (
        <div className="slr-spec-row" key={s.label}>
          <div className="slr-spec-label">{s.label}</div>
          <div className="slr-spec-value">{s.value}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- facility accordion item ---------- */

function FacilityItem({ facility, isOpen, onToggle, onOpenLightbox }) {
  const panelRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    function recalc() {
      if (isOpen && panelRef.current) {
        setMaxHeight(`${panelRef.current.scrollHeight}px`);
      } else {
        setMaxHeight('0px');
      }
    }
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [isOpen]);

  return (
    <div className={`slr-plant-item ${isOpen ? 'is-open' : ''}`}>
      <button className="slr-plant-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <motion.span
  className="slr-plant-thumb"
  whileHover={{ scale: 1.08 }}
  transition={{ duration: 0.25 }}
>
  <ImageThumb
    src={facility.images[0]}
    alt=""
    initial={facility.name[0]}
  />
</motion.span>

        <span className="slr-plant-trigger-text">
          <h3>{facility.name}</h3>
          <span className="slr-plant-headline">{facility.headline}</span>
        </span>
        <span className="slr-plant-chevron">&#9660;</span>
      </button>
      <div className="slr-plant-panel" style={{ maxHeight }}>
        <div className="slr-plant-panel-inner" ref={panelRef}>
          <div className="slr-plant-gallery">
            {facility.images.map((src, i) => (
              <motion.div
  key={src}
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.4,
    delay: i * 0.08,
  }}
  whileHover={{
    scale: 1.03,
    y: -4,
  }}
>
  <ImageThumb
    src={src}
    alt={`${facility.name} — photo ${i + 1}`}
    initial={facility.name[0]}
    className="slr-plant-gallery-img"
    onClick={() => onOpenLightbox(i)}
  />
</motion.div>

            ))}
          </div>

          <p className="slr-plant-desc">{facility.desc}</p>

          {facility.benefits && (
            <ul className="slr-plant-benefits">
              {facility.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}

          {facility.note && <div className="slr-plant-note">{facility.note}</div>}

          {facility.specs && <SpecList specs={facility.specs} />}

          {facility.equipment && facility.equipment.map((eq) => (
            <div className="slr-plant-equipment" key={eq.name}>
              <span className="slr-plant-equipment-name">{eq.name}</span>
              <SpecList specs={eq.specs} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- hero ---------- */

function PlantHero() {
  return (
    <section className="slr-plant-hero">
      <div className="slr-container">
        <motion.div
          className="slr-plant-breadcrumb"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/">Home</a> /{' '}
          <span className="slr-accent">Manufacturing Plant</span>
        </motion.div>

        <motion.span
          className="slr-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Hosapete Plant
        </motion.span>

        <div className="slr-plant-hero-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1 className="slr-plant-title">
              An Integrated Steel Plant, End to End
            </h1>

            <p>
              SLR Metaliks operates from Hosapete, Karnataka — a major Indian
              steel production hub, sited close to abundant iron ore reserves.
              The plant runs its own sintering, ironmaking, steelmaking,
              casting, rolling, and finishing operations on one site,
              producing alloy steel grades for the automotive, engineering,
              bearing, defence, and windmill sectors under strict quality
              control, with a continued focus on energy efficiency, emissions
              reduction, and responsible waste management.
            </p>
          </motion.div>

          <motion.div
            className="slr-plant-hero-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {[
              ['Infrastructure Units', FACILITY_COUNT],
              ['Process Stages', STAGES.length],
              ['Location', 'Hosapete, KA'],
            ].map(([label, value], index) => (
              <motion.div
                className="slr-plant-stat"
                key={label}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.55 + index * 0.12,
                }}
                whileHover={{
                  x: -6,
                  borderColor: 'rgba(214,165,110,0.6)',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                }}
              >
                <span className="lbl">{label}</span>
                <span className="num">{value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- sticky stage nav w/ scroll-spy ---------- */

function StageNav({ activeStage, onNavClick }) {
  return (
    <div className="slr-plant-nav">
      <div className="slr-plant-nav-inner">
        {STAGES.map((s) => (
          <button
            key={s.id}
            className={`slr-plant-nav-btn ${activeStage === s.id ? 'is-active' : ''}`}
            onClick={() => onNavClick(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- stage section ---------- */

function StageSection({
  stage,
  index,
  openMap,
  onToggle,
  onOpenLightbox,
}) {
  return (
    <motion.section
      id={stage.id}
      className="slr-plant-stage"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      <div className="slr-container">
        <motion.div
          className="slr-plant-stage-head"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <span className="slr-plant-stage-index">
            STAGE {String(index + 1).padStart(2, '0')} / {STAGES.length}
          </span>

          <h2>{stage.label}</h2>
          <p>{stage.intro}</p>
        </motion.div>

        <motion.div
          className="slr-plant-list"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {stage.facilities.map((f) => (
            <motion.div
              key={f.slug}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <FacilityItem
                facility={f}
                isOpen={!!openMap[f.slug]}
                onToggle={() => onToggle(f.slug)}
                onOpenLightbox={(imgIndex) =>
                  onOpenLightbox(f, imgIndex)
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function PlantCta() {
  return (
    <section className="slr-plant-cta">
      <div className="slr-container">
        <h2 className="slr-plant-title">Want to see the plant in person?</h2>
        <div className="slr-plant-cta-actions">
          <a href="/contact" className="slr-btn slr-btn-primary">Request a Plant Visit</a>
          <a href="/downloads/plant-brochure.pdf" className="slr-btn slr-btn-outline">Download Plant Brochure</a>
        </div>
      </div>
    </section>
  );
}

export default function PlantPage() {
  const [openMap, setOpenMap] = useState({ [STAGES[0].facilities[0].slug]: true });
  const [activeStage, setActiveStage] = useState(STAGES[0].id);
  const [lightbox, setLightbox] = useState(null); // { facility, imgIndex } | null

  function toggle(slug) {
    setOpenMap((cur) => ({ ...cur, [slug]: !cur[slug] }));
  }

  function scrollToStage(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveStage(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    STAGES.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  function closeLightbox() {
    setLightbox(null);
  }
  function stepLightbox(delta) {
    setLightbox((cur) => {
      if (!cur) return cur;
      const total = cur.facility.images.length;
      const next = (cur.imgIndex + delta + total) % total;
      return { ...cur, imgIndex: next };
    });
  }

  return (
    <div className="slr-about">
      <PlantHero />
      <StageNav activeStage={activeStage} onNavClick={scrollToStage} />

      {STAGES.map((stage, i) => (
        <StageSection
          key={stage.id}
          stage={stage}
          index={i}
          openMap={openMap}
          onToggle={toggle}
          onOpenLightbox={(facility, imgIndex) => setLightbox({ facility, imgIndex })}
        />
      ))}

      <PlantCta />

      <AnimatePresence>
  {lightbox && (
    <motion.div
      className="slr-lightbox"
      role="dialog"
      aria-modal="true"
      onClick={closeLightbox}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Close button */}
      <motion.button
        className="slr-lightbox-close"
        onClick={closeLightbox}
        aria-label="Close"
        initial={{ opacity: 0, scale: 0.7, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.7, rotate: 90 }}
        transition={{
          duration: 0.35,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: 'rgba(255,255,255,0.2)',
        }}
        whileTap={{ scale: 0.9 }}
      >
        &times;
      </motion.button>

      {/* Previous button */}
      <motion.button
        className="slr-lightbox-nav prev"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          stepLightbox(-1);
        }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{
          duration: 0.35,
          delay: 0.15,
        }}
        whileHover={{
          scale: 1.12,
          x: -4,
          backgroundColor: 'rgba(255,255,255,0.2)',
        }}
        whileTap={{ scale: 0.9 }}
      >
        &larr;
      </motion.button>

      {/* Animated image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${lightbox.facility.slug}-${lightbox.imgIndex}`}
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.85,
            y: -20,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <ImageThumb
            src={lightbox.facility.images[lightbox.imgIndex]}
            alt={`${lightbox.facility.name} — photo ${
              lightbox.imgIndex + 1
            }`}
            initial={lightbox.facility.name[0]}
            className="slr-lightbox-image"
          />
        </motion.div>
      </AnimatePresence>

      {/* Next button */}
      <motion.button
        className="slr-lightbox-nav next"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          stepLightbox(1);
        }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{
          duration: 0.35,
          delay: 0.15,
        }}
        whileHover={{
          scale: 1.12,
          x: 4,
          backgroundColor: 'rgba(255,255,255,0.2)',
        }}
        whileTap={{ scale: 0.9 }}
      >
        &rarr;
      </motion.button>

      {/* Caption */}
      <motion.div
        className="slr-lightbox-caption"
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.35,
          delay: 0.2,
        }}
      >
        {lightbox.facility.name} &mdash;{' '}
        {lightbox.imgIndex + 1} / {lightbox.facility.images.length}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}
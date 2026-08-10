import "./ManufacturingSection.css";
import manufacturingBg from "../images/manufacturing-bg.jpg";

import {
  Factory,
  Flame,
  Hammer,
  Box,
  Cog,
  ShieldCheck,
  Truck,
  Package,
} from "lucide-react";


const process = [
  {
    title: "Raw Materials",
    icon: <Package size={28} />
  },
  {
    title: "Blast Furnace",
    icon: <Flame size={28} />
  },
  {
    title: "Steel Melting",
    icon: <Factory size={28} />
  },
  {
    title: "Casting",
    icon: <Box size={28} />
  },
  {
    title: "Rolling",
    icon: <Cog size={28} />
  },
  {
    title: "Heat Treatment",
    icon: <Hammer size={28} />
  },
  {
    title: "Quality Testing",
    icon: <ShieldCheck size={28} />
  },
  {
    title: "Dispatch",
    icon: <Truck size={28} />
  },
];


export default function ManufacturingSection() {

  return (

    <section
      className="manufacturing"
      style={{
        backgroundImage: `url(${manufacturingBg})`,
      }}
    >

      <div className="manufacturing-overlay"></div>

      <div className="manufacturing-content">

        <div className="section-header">

  <p>
    MANUFACTURING EXCELLENCE
  </p>

  <span className="manufacturing-title">
    Our Manufacturing Process
  </span>

  <p>
    From premium raw materials to precision-engineered
    steel products, every stage follows rigorous quality,
    safety and sustainability standards.
  </p>

</div>


        <div className="process-flow">

          {process.map((item, index) => (

            <div
              className="process-item"
              key={index}
            >

              <div className="icon-circle">
                {item.icon}
              </div>


              <div className="step-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              <h3>
                {item.title}
              </h3>


            </div>

          ))}

        </div>

      </div>

    </section>

  );
}
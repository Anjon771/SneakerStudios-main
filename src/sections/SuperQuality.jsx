import { useState } from "react";
import { shoe8 } from "../assets/images";
import { Button } from "../components";
import { craftsmanshipPillars, products } from "../constants";

const SuperQuality = ({ onAddToCart, onInspectProduct }) => {
  const [activePillar, setActivePillar] = useState(0);
  const flagshipProduct = products[4] || {
    id: "prod-sq-08",
    sku: "NK-SQ8-088",
    name: "Nike Air Max Hyper-Pro",
    category: "Performance Running",
    colorway: "Solar Orange / Royal",
    price: "$245.00",
    numericPrice: 245.0,
    stars: "4.9",
    reviewCount: 167,
    imgURL: shoe8,
  };

  return (
    <section
      id="about-us"
      className="max-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
    >
      {/* Left Column: Engineering & Material Breakdown */}
      <div className="lg:col-span-6 flex flex-col">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span>Material Architecture</span>
          <span aria-hidden="true">·</span>
          <span>Laboratory Tested</span>
        </div>

        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111113] text-balance">
          Meticulously Crafted for Anatomical Precision.
        </h2>

        <p className="mt-4 info-text">
          Every pair leaves our studio only after passing multi-axis torsional
          rigidity and Air-Sole pressure testing—combining featherweight
          containment with enduring structural support.
        </p>

        {/* Interactive Editorial Pillar Selector */}
        <div className="mt-7 space-y-3">
          {craftsmanshipPillars.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <div
                key={pillar.index}
                onClick={() => setActivePillar(idx)}
                className={`p-4 rounded-xl border transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-white border-[#111113]"
                    : "bg-[#F1F1EE]/60 border-zinc-200/80 hover:border-zinc-400"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-[#111113]">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-mono tabular-nums font-semibold text-[#E63926] shrink-0">
                    {pillar.metric}
                  </span>
                </div>
                {isSelected && (
                  <div className="mt-2 space-y-1.5">
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {pillar.summary}
                    </p>
                    <p className="text-[11px] font-mono text-zinc-500">
                      Benchmark: {pillar.detail}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Button
            label={`Add Hyper-Pro to Bag — ${flagshipProduct.price}`}
            onClick={() =>
              onAddToCart && onAddToCart(flagshipProduct, "US 9.5")
            }
          />
          <Button
            label="Inspect Technical Sheet"
            backgroundColor="bg-white"
            borderColor="border-zinc-300"
            textColor="text-zinc-900"
            onClick={() =>
              onInspectProduct && onInspectProduct(flagshipProduct)
            }
          />
        </div>
      </div>

      {/* Right Column: Flagship Showcase */}
      <div className="lg:col-span-6">
        <div className="rounded-2xl bg-[#F1F1EE] border border-zinc-200/80 p-8 sm:p-12 flex flex-col justify-between min-h-[420px]">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span>Flagship Silhouette · {flagshipProduct.name}</span>
            <span className="font-mono tabular-nums">{flagshipProduct.sku}</span>
          </div>

          <div
            onClick={() =>
              onInspectProduct && onInspectProduct(flagshipProduct)
            }
            className="my-auto py-6 flex justify-center items-center cursor-pointer"
          >
            <img
              src={shoe8}
              alt={flagshipProduct.name}
              referrerPolicy="no-referrer"
              width={500}
              height={440}
              className="object-contain max-h-[320px] w-auto transition-transform duration-200 hover:scale-105"
            />
          </div>

          <div className="pt-4 border-t border-zinc-200/80 flex items-center justify-between text-xs text-zinc-600">
            <span>Colorway: {flagshipProduct.colorway}</span>
            <span className="font-mono tabular-nums font-semibold text-zinc-900">
              {flagshipProduct.price} · In Stock
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;

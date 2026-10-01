import { useEffect, useState } from "react";
import { arrowRight } from "../assets/icons";
import { Button, ShoeCard } from "../components";
import CountUp from "../components/CountUp";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

const HERO_SIZES = ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11"];

const Hero = ({ onAddToCart, onInspectProduct }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("US 9.5");
  const [isPaused, setIsPaused] = useState(false);

  const totalShoes = shoes.length;
  const activeShoe = shoes[activeIndex] || shoes[0];
  const bigShoeImg = activeShoe?.bigShoe || bigShoe1;

  useEffect(() => {
    if (isPaused || totalShoes <= 1) return;

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalShoes);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [isPaused, totalShoes]);

  const handleHeroAdd = () => {
    if (onAddToCart) {
      onAddToCart(
        {
          id: activeShoe.id,
          sku: activeShoe.sku,
          name: activeShoe.name,
          imgURL: activeShoe.bigShoe,
          category: activeShoe.category,
          colorway: activeShoe.edition,
          price: activeShoe.price,
          numericPrice: activeShoe.numericPrice,
          stars: activeShoe.stars,
          reviewCount: activeShoe.reviewCount,
          description: activeShoe.description,
          specs: activeShoe.specs,
        },
        selectedSize
      );
    }
  };

  return (
    <section
      id="home"
      className="w-full max-container pt-8 pb-16 sm:pt-12 sm:pb-20 padding-x"
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-center">
        {/* Left Campaign Column */}
        <div className="xl:col-span-6 flex flex-col items-start">
          {/* Clean Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500">
            <span className="text-[#E63926] font-semibold">
              Summer 2026 Archive
            </span>
            <span aria-hidden="true">·</span>
            <span>{activeShoe.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{activeShoe.sku}</span>
          </div>

          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] font-extrabold tracking-tight text-[#111113] text-balance">
            Engineered Air for Relentless Velocity.
          </h1>

          <p className="mt-5 font-sans text-zinc-600 text-base leading-relaxed max-w-[60ch]">
            {activeShoe.description}
          </p>

          {/* Active Edition & Quick US Size Selector */}
          <div className="mt-7 w-full max-w-md bg-white border border-zinc-200/90 rounded-xl p-4">
            <div className="flex items-center justify-between text-xs pb-3 border-b border-zinc-100">
              <div>
                <span className="text-zinc-500">Selected Edition: </span>
                <span className="font-semibold text-zinc-900">
                  {activeShoe.name} ({activeShoe.edition})
                </span>
              </div>
              <span className="font-mono tabular-nums font-semibold text-sm text-zinc-900">
                {activeShoe.price}
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-medium text-zinc-700">Select US Size</span>
                <button
                  type="button"
                  onClick={() =>
                    onInspectProduct &&
                    onInspectProduct({
                      ...activeShoe,
                      imgURL: activeShoe.bigShoe,
                    })
                  }
                  className="text-zinc-500 underline hover:text-zinc-900"
                >
                  Inspect Full Specs & Chart
                </button>
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {HERO_SIZES.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 text-xs font-mono tabular-nums rounded-md border transition-colors whitespace-nowrap ${
                      selectedSize === sz
                        ? "bg-[#111113] text-white border-[#111113] font-semibold"
                        : "bg-[#F8F8F6] text-zinc-700 border-zinc-200 hover:border-zinc-900"
                    }`}
                  >
                    {sz.replace("US ", "")}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3.5">
            <Button
              label={`Add to Bag · ${selectedSize} — ${activeShoe.price}`}
              iconURL={arrowRight}
              onClick={handleHeroAdd}
            />
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-zinc-800 bg-white border border-zinc-300 rounded-lg hover:border-zinc-900 hover:bg-zinc-50 transition-colors whitespace-nowrap"
            >
              Explore Full Catalog
            </a>
          </div>

          {/* Quantitative Proof Metrics */}
          <div className="mt-10 pt-8 border-t border-zinc-200/80 grid grid-cols-3 gap-6 w-full max-w-lg">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono tabular-nums text-2xl sm:text-3xl font-bold text-[#111113]">
                  <CountUp end={stat.value} />
                  {stat.suffix}
                </p>
                <p className="mt-1 text-xs font-medium text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Showcase Stage */}
        <div className="xl:col-span-6">
          <div
            className="relative rounded-2xl bg-[#F1F1EE] border border-zinc-200/80 p-6 sm:p-10 flex flex-col justify-between min-h-[480px] sm:min-h-[540px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Stage Top Header */}
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span>
                {activeShoe.name} · {activeShoe.edition}
              </span>
              <span className="font-mono tabular-nums font-medium text-zinc-800">
                ★ {activeShoe.stars} ({activeShoe.reviewCount} verified)
              </span>
            </div>

            {/* Hero Sneaker Image */}
            <div
              onClick={() =>
                onInspectProduct &&
                onInspectProduct({
                  ...activeShoe,
                  imgURL: activeShoe.bigShoe,
                })
              }
              className="my-auto py-6 flex items-center justify-center cursor-pointer"
            >
              <img
                key={bigShoeImg}
                src={bigShoeImg}
                alt={activeShoe.name}
                referrerPolicy="no-referrer"
                width={540}
                height={420}
                className="object-contain max-h-[320px] sm:max-h-[360px] w-auto relative z-10 fade-in transition-transform duration-200 hover:scale-[1.03]"
              />
            </div>

            {/* Edition Selector Thumbnails */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-200/80">
              {shoes.map((shoe, index) => (
                <ShoeCard
                  key={shoe.id || shoe.bigShoe}
                  imgURL={shoe}
                  onSelect={() => setActiveIndex(index)}
                  isActive={index === activeIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

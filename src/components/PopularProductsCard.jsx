import { useState } from "react";

const QUICK_SIZES = ["US 8", "US 9", "US 10", "US 11"];

const PopularProductsCard = ({
  id,
  sku,
  imgURL,
  name,
  category,
  colorway,
  price,
  numericPrice,
  stars,
  reviewCount,
  tag,
  description,
  specs,
  onAddToCart,
  onInspectProduct,
}) => {
  const [selectedSize, setSelectedSize] = useState("US 9");

  const productObj = {
    id,
    sku,
    imgURL,
    name,
    category,
    colorway,
    price,
    numericPrice,
    stars,
    reviewCount,
    tag,
    description,
    specs,
  };

  return (
    <article className="group flex flex-col w-full bg-white rounded-xl border border-zinc-200/80 overflow-hidden transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md">
      {/* Product Image Stage: 70% visual lead on neutral stone surface */}
      <div
        onClick={() => onInspectProduct && onInspectProduct(productObj)}
        className="relative aspect-[4/3] w-full bg-[#F1F1EE] p-6 flex items-center justify-center cursor-pointer overflow-hidden"
      >
        <img
          src={imgURL}
          alt={name}
          referrerPolicy="no-referrer"
          className="w-4/5 h-4/5 object-contain transition-transform duration-200 group-hover:scale-105"
        />

        <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between text-xs text-zinc-500">
          <span className="font-mono">{sku}</span>
          <span>{tag}</span>
        </div>
      </div>

      {/* Product Metadata & Purchase Controls */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Clean unboxed metadata with middle dot separator */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-500">
            <span>{category || "Court Archive"}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums text-zinc-700 font-medium">
              ★ {stars}
            </span>
            {reviewCount && (
              <span className="font-mono tabular-nums text-zinc-400">
                ({reviewCount})
              </span>
            )}
          </div>

          {/* Product Title & Price Baseline */}
          <div className="mt-1.5 flex items-baseline justify-between gap-3">
            <h3
              onClick={() => onInspectProduct && onInspectProduct(productObj)}
              className="text-base font-semibold text-[#111113] group-hover:text-[#E63926] transition-colors cursor-pointer truncate"
            >
              {name}
            </h3>
            <span className="text-[15px] font-mono tabular-nums font-semibold text-[#111113] shrink-0">
              {price}
            </span>
          </div>

          <p className="mt-1 text-xs text-zinc-500 truncate">
            {colorway || "Original Archive Colorway"}
          </p>
        </div>

        {/* Quick Size Selection & Action Row */}
        <div className="mt-4 pt-3.5 border-t border-zinc-100 space-y-2.5">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[11px] text-zinc-500">Quick Size:</span>
            <div className="flex items-center gap-1">
              {QUICK_SIZES.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setSelectedSize(sz)}
                  className={`px-2 py-0.5 text-[11px] font-mono tabular-nums rounded transition-colors whitespace-nowrap ${
                    selectedSize === sz
                      ? "bg-[#111113] text-white font-semibold"
                      : "bg-[#F1F1EE] text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {sz.replace("US ", "")}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                onAddToCart && onAddToCart(productObj, selectedSize)
              }
              className="flex-1 py-2.5 px-3 bg-[#111113] hover:bg-[#E63926] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              Add to Bag · {selectedSize}
            </button>
            <button
              type="button"
              onClick={() => onInspectProduct && onInspectProduct(productObj)}
              className="py-2.5 px-3 text-xs font-medium text-zinc-700 hover:text-zinc-900 bg-[#F1F1EE] hover:bg-zinc-200/80 rounded-lg transition-colors whitespace-nowrap"
            >
              Specs
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PopularProductsCard;

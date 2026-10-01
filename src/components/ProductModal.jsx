import { useState } from "react";
import { availableSizes, sizeGuideRows } from "../constants";

const ProductModal = ({ product, onClose, onAddToCart, initialTab = "details" }) => {
  const [selectedSize, setSelectedSize] = useState("US 9.5");
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-black/55 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-4xl bg-[#F8F8F6] text-[#111113] rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh]">
        {/* Left Gallery Column */}
        <div className="md:col-span-6 bg-[#F1F1EE] p-8 flex flex-col justify-between relative">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span>{product.category || "Archive Release"}</span>
            <span className="font-mono tabular-nums">{product.sku || "NK-STD-01"}</span>
          </div>

          <div className="my-auto py-8 flex items-center justify-center">
            <img
              src={product.imgURL || product.bigShoe}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full max-w-[320px] h-auto object-contain transition-transform duration-200 hover:scale-105"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-zinc-600 pt-4 border-t border-zinc-200/80">
            <span>{product.colorway || product.edition || "Original Colorway"}</span>
            <span className="font-mono tabular-nums">
              ★ {product.stars || "4.9"} ({product.reviewCount || 120} reviews)
            </span>
          </div>
        </div>

        {/* Right Contiguous Purchase Module */}
        <div className="md:col-span-6 p-6 sm:p-8 bg-white flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-zinc-500">
                  {product.category} · {product.tag || "Verified Authentic"}
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold text-zinc-900 tracking-tight">
                  {product.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="px-2.5 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 border border-zinc-200 rounded-md transition-colors whitespace-nowrap"
              >
                Esc
              </button>
            </div>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-mono tabular-nums text-xl font-semibold text-zinc-900">
                {product.price}
              </span>
              <span className="text-xs text-zinc-500">
                Includes complimentary insured express shipping
              </span>
            </div>

            {/* Segmented Mode Switcher: Overview vs Sizing Chart */}
            <div className="mt-5 flex items-center gap-1 p-1 bg-[#F1F1EE] rounded-lg">
              <button
                type="button"
                onClick={() => setActiveTab("details")}
                className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeTab === "details"
                    ? "bg-white text-zinc-900 shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                Specifications & Fit
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("sizing")}
                className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeTab === "sizing"
                    ? "bg-white text-zinc-900 shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                Size Conversion Chart
              </button>
            </div>

            {activeTab === "details" ? (
              <div className="mt-5 space-y-4">
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {product.description ||
                    "Engineered with responsive Nike Air cushioning and archive-grade upper materials for high-output training and daily architectural comfort."}
                </p>

                {product.specs && (
                  <ul className="space-y-1.5 pt-2 border-t border-zinc-100">
                    {product.specs.map((spec, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-zinc-600 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#E63926] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* US Size Selector */}
                <div className="pt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-zinc-900">
                      Select US Footwear Size
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveTab("sizing")}
                      className="text-xs text-zinc-500 underline hover:text-zinc-900"
                    >
                      View CM / EU chart
                    </button>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 px-2.5 text-xs font-mono tabular-nums rounded-md border transition-colors whitespace-nowrap ${
                          selectedSize === size
                            ? "bg-[#111113] text-white border-[#111113] font-semibold"
                            : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-900"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-4">
                <p className="text-xs text-zinc-500 mb-3">
                  True-to-size athletic last. For wide feet, we recommend selecting 0.5 size up.
                </p>
                <div className="border border-zinc-200 rounded-lg overflow-hidden">
                  <table className="w-full text-left text-xs font-mono tabular-nums">
                    <thead className="bg-[#F1F1EE] text-zinc-700 border-b border-zinc-200">
                      <tr>
                        <th className="py-2 px-3 font-semibold">US</th>
                        <th className="py-2 px-3 font-semibold">UK</th>
                        <th className="py-2 px-3 font-semibold">EU</th>
                        <th className="py-2 px-3 font-semibold">Heel-Toe (CM)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200/70">
                      {sizeGuideRows.map((row) => (
                        <tr
                          key={row.us}
                          onClick={() => {
                            setSelectedSize(`US ${row.us.replace(".0", "")}`);
                            setActiveTab("details");
                          }}
                          className="hover:bg-zinc-50 cursor-pointer transition-colors"
                        >
                          <td className="py-1.5 px-3 font-semibold text-zinc-900">
                            US {row.us}
                          </td>
                          <td className="py-1.5 px-3 text-zinc-600">{row.uk}</td>
                          <td className="py-1.5 px-3 text-zinc-600">{row.eu}</td>
                          <td className="py-1.5 px-3 text-zinc-600">{row.cm} cm</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Contiguous Action Bar */}
          <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center gap-3">
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 py-3.5 px-6 bg-[#E63926] hover:bg-[#d12f1d] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              Add to Bag · {selectedSize} — {product.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

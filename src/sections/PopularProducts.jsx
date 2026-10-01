import { useState, useMemo } from "react";
import { products } from "../constants";
import { PopularProductsCard } from "../components";

const CATEGORIES = [
  "All Footwear",
  "Performance Running",
  "Court Classics",
  "Limited Archive",
];

const PopularProducts = ({ onAddToCart, onInspectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Footwear");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        const matchesCat =
          selectedCategory === "All Footwear" ||
          item.category === selectedCategory;
        const matchesQuery =
          !searchQuery.trim() ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.colorway.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.sku.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.numericPrice - b.numericPrice;
        if (sortBy === "price-desc") return b.numericPrice - a.numericPrice;
        if (sortBy === "rating") return parseFloat(b.stars) - parseFloat(a.stars);
        return 0;
      });
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <section id="products" className="max-container">
      {/* Header & Interactive Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-zinc-200/80">
        <div>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>Curated Footwear Catalog</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">
              {filteredProducts.length} Releases Available
            </span>
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111113]">
            Featured Archive Collection
          </h2>
          <p className="mt-2 font-sans text-zinc-600 text-base max-w-xl">
            Every silhouette is constructed with nitrogen-infused cushioning,
            high-abrasion court traction, and serialized studio verification.
          </p>
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search model or SKU..."
            className="px-3.5 py-2 text-xs bg-white border border-zinc-300 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 w-48 sm:w-56"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort footwear collection"
            className="px-3.5 py-2 text-xs font-medium bg-white border border-zinc-300 rounded-lg text-zinc-800 focus:outline-none focus:border-zinc-900"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Interactive Segmented Category Tabs */}
      <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-1 p-1 bg-[#F1F1EE] rounded-lg overflow-x-auto max-w-full">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === category
                  ? "bg-white text-[#111113] shadow-sm font-semibold"
                  : "text-zinc-600 hover:text-[#111113]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Footwear");
            }}
            className="text-xs text-[#E63926] hover:underline font-medium whitespace-nowrap"
          >
            Reset search filter
          </button>
        )}
      </div>

      {/* 3-Column Desktop Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="mt-10 p-12 text-center bg-white rounded-xl border border-zinc-200/80">
          <p className="font-display text-lg font-semibold text-zinc-900">
            No footwear matched &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Try clearing your search term or switching to All Footwear.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Footwear");
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold bg-[#111113] text-white rounded-lg hover:bg-zinc-800"
          >
            Show All Releases
          </button>
        </div>
      ) : (
        <div className="mt-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
          {filteredProducts.map((product) => (
            <PopularProductsCard
              key={product.id || product.name}
              {...product}
              onAddToCart={onAddToCart}
              onInspectProduct={onInspectProduct}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularProducts;

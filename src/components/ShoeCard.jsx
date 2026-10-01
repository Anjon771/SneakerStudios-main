const ShoeCard = ({ imgURL, isActive, onSelect }) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group text-left rounded-xl border transition-all duration-150 bg-white p-2.5 flex items-center gap-3 w-full sm:w-auto ${
        isActive
          ? "border-[#111113] shadow-sm ring-1 ring-[#111113]"
          : "border-zinc-200/90 hover:border-zinc-400"
      }`}
    >
      <div className="w-16 h-14 sm:w-20 sm:h-16 rounded-lg bg-[#F1F1EE] flex justify-center items-center p-2 shrink-0">
        <img
          src={imgURL.thumbnail}
          alt={imgURL.name || "Sneaker edition"}
          referrerPolicy="no-referrer"
          width={72}
          height={56}
          className="object-contain w-full h-full transition-transform duration-150 group-hover:scale-105"
        />
      </div>
      <div className="pr-2 hidden sm:block min-w-0">
        <p className="text-xs font-semibold text-zinc-900 truncate">
          {imgURL.name || "Air Archive"}
        </p>
        <p className="text-[11px] font-mono tabular-nums text-zinc-500 mt-0.5">
          {imgURL.price || "$210.00"}
        </p>
      </div>
    </button>
  );
};

export default ShoeCard;

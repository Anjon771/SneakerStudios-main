const ReviewCard = ({
  imgURL,
  customerName,
  role,
  organization,
  modelPurchased,
  rating,
  outcomeMetric,
  feedback,
}) => {
  return (
    <article className="bg-white rounded-xl border border-zinc-200/80 p-7 flex flex-col justify-between h-full">
      <div>
        {/* Top Metadata Row: Unboxed text with middle-dot separator */}
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-zinc-100 text-xs text-zinc-500">
          <span className="truncate">{modelPurchased || "Verified Archive Pair"}</span>
          <span className="font-mono tabular-nums font-semibold text-zinc-900 shrink-0">
            ★ {rating} / 5.0
          </span>
        </div>

        {/* Quantitative Outcome Headline */}
        {outcomeMetric && (
          <p className="mt-4 text-xs font-mono font-semibold text-[#E63926]">
            {outcomeMetric}
          </p>
        )}

        {/* Testimonial Body */}
        <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
          &ldquo;{feedback}&rdquo;
        </p>
      </div>

      {/* Attributable Author Footer */}
      <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-3.5">
        <img
          src={imgURL}
          alt={customerName}
          referrerPolicy="no-referrer"
          className="rounded-full object-cover w-11 h-11 bg-[#F1F1EE] shrink-0"
        />
        <div className="min-w-0">
          <h3 className="font-display text-sm font-bold text-zinc-900 truncate">
            {customerName}
          </h3>
          <p className="text-xs text-zinc-500 truncate">
            {role || "Verified Athlete"}
            {organization ? ` · ${organization}` : ""}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;

const ServiceCard = ({ index, metric, label, subtext }) => {
  return (
    <div className="flex-1 min-w-[260px] bg-white rounded-xl border border-zinc-200/80 p-7 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between text-xs text-zinc-500 pb-4 border-b border-zinc-100">
          <span className="font-mono font-semibold text-zinc-900">
            {index || "01"}. Service Standard
          </span>
          <span className="font-mono tabular-nums text-zinc-600">{metric}</span>
        </div>
        <h3 className="mt-5 font-display text-xl font-bold text-[#111113] tracking-tight">
          {label}
        </h3>
        <p className="mt-2.5 font-sans text-sm leading-relaxed text-zinc-600">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;

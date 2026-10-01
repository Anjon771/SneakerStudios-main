const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex justify-center items-center gap-2.5 px-6 py-3.5 border font-sans text-sm font-semibold leading-none transition-all duration-150 whitespace-nowrap shrink-0 rounded-lg active:scale-[0.99] ${
        backgroundColor
          ? `${backgroundColor} ${textColor || "text-zinc-900"} ${
              borderColor || "border-zinc-300"
            } hover:border-zinc-900 hover:bg-zinc-100`
          : "bg-[#E63926] text-white border-[#E63926] hover:bg-[#d12f1d]"
      } ${fullWidth ? "w-full" : ""}`}
    >
      <span>{label}</span>

      {iconURL && (
        <img
          src={iconURL}
          alt=""
          aria-hidden="true"
          className="w-4 h-4 object-contain"
        />
      )}
    </button>
  );
};

export default Button;

import { useState } from "react";

const FREE_SHIPPING_THRESHOLD = 150;

const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  promoCode,
  setPromoCode,
  discountApplied,
  onApplyPromo,
}) => {
  const [step, setStep] = useState("cart"); // 'cart' | 'checkout' | 'confirmed'
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    postalCode: "",
  });
  const [orderRecord, setOrderRecord] = useState(null);
  const [formError, setFormError] = useState("");

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.numericPrice * item.quantity,
    0
  );
  const discountAmount = discountApplied ? subtotal * 0.2 : 0;
  const discountedSubtotal = subtotal - discountAmount;
  const shipping =
    discountedSubtotal === 0 || discountedSubtotal >= FREE_SHIPPING_THRESHOLD
      ? 0
      : 15.0;
  const total = discountedSubtotal + shipping;
  const progressPercent = Math.min(
    100,
    (discountedSubtotal / FREE_SHIPPING_THRESHOLD) * 100
  );

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.postalCode.trim()
    ) {
      setFormError("Please complete all delivery verification fields.");
      return;
    }
    setFormError("");
    const orderNumber = Math.floor(1040 + Math.random() * 8900);
    setOrderRecord({
      orderNumber,
      items: [...cartItems],
      total,
      paymentMethod,
      customer: { ...formData },
      timestamp: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    });
    onClearCart();
    setStep("confirmed");
  };

  const handleResetAndClose = () => {
    setStep("cart");
    setFormError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Drawer Panel */}
      <aside className="relative z-10 w-full max-w-md bg-[#F8F8F6] text-[#111113] h-full flex flex-col justify-between border-l border-zinc-200 shadow-2xl">
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-zinc-200/80 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <h2 className="font-display text-lg font-bold tracking-tight">
              {step === "cart" && "Shopping Bag"}
              {step === "checkout" && "Delivery & Verification"}
              {step === "confirmed" && "Order Receipt"}
            </h2>
            {step === "cart" && (
              <span className="text-xs font-mono tabular-nums text-zinc-500">
                · {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="px-3 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 border border-zinc-200 rounded-md transition-colors whitespace-nowrap"
          >
            Close
          </button>
        </div>

        {/* Free Shipping Bar (only in cart/checkout when items exist) */}
        {step !== "confirmed" && cartItems.length > 0 && (
          <div className="px-6 py-3 bg-[#F1F1EE] border-b border-zinc-200/80">
            <div className="flex items-center justify-between text-xs text-zinc-700 mb-1.5">
              <span>
                {discountedSubtotal >= FREE_SHIPPING_THRESHOLD
                  ? "Unlocked complimentary insured express delivery"
                  : `Add $${(FREE_SHIPPING_THRESHOLD - discountedSubtotal).toFixed(
                      2
                    )} more for free express shipping`}
              </span>
              <span className="font-mono tabular-nums font-medium">
                {Math.round(progressPercent)}%
              </span>
            </div>
            <div className="w-full h-1 bg-zinc-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#111113] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {step === "cart" && (
            <>
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <p className="font-display text-lg font-semibold text-zinc-900">
                    Your bag is currently empty
                  </p>
                  <p className="mt-2 text-sm text-zinc-500 max-w-xs">
                    Select your preferred US footwear size from the archive collection to add pairs to your bag.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="mt-6 px-5 py-2.5 bg-[#111113] text-white text-xs font-semibold rounded-lg hover:bg-zinc-800 transition-colors whitespace-nowrap"
                  >
                    Browse Footwear Archive
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-zinc-200/80">
                  {cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="py-4 first:pt-0 flex gap-4 items-center"
                    >
                      <div className="w-20 h-20 rounded-lg bg-[#F1F1EE] flex items-center justify-center p-2 shrink-0">
                        <img
                          src={item.imgURL || item.bigShoe}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-semibold text-zinc-900 truncate">
                            {item.name}
                          </h3>
                          <span className="text-sm font-mono tabular-nums font-semibold text-zinc-900 shrink-0">
                            ${(item.numericPrice * item.quantity).toFixed(2)}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-zinc-500">
                          Size {item.size} · {item.sku || "NK-ARCHIVE"}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="inline-flex items-center border border-zinc-300 rounded-md bg-white">
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQty(item.id, item.size, item.quantity - 1)
                              }
                              className="w-7 h-7 flex items-center justify-center text-xs font-mono text-zinc-700 hover:bg-zinc-100 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-2.5 text-xs font-mono tabular-nums font-medium">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQty(item.id, item.size, item.quantity + 1)
                              }
                              className="w-7 h-7 flex items-center justify-center text-xs font-mono text-zinc-700 hover:bg-zinc-100 transition-colors"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.id, item.size)}
                            className="text-xs text-zinc-500 hover:text-[#E63926] transition-colors whitespace-nowrap"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Promo Code Box */}
                  <div className="pt-5">
                    <label className="block text-xs font-medium text-zinc-600 mb-2">
                      Archive Privilege Code (Try{" "}
                      <span className="font-mono font-semibold text-zinc-900">
                        ARCHIVE20
                      </span>{" "}
                      for 20% off)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                        placeholder="Enter code ARCHIVE20"
                        className="flex-1 px-3 py-2 text-xs font-mono bg-white border border-zinc-300 rounded-md focus:outline-none focus:border-zinc-900"
                      />
                      <button
                        type="button"
                        onClick={onApplyPromo}
                        className="px-4 py-2 text-xs font-semibold bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors whitespace-nowrap"
                      >
                        {discountApplied ? "Applied" : "Apply"}
                      </button>
                    </div>
                    {discountApplied && (
                      <p className="mt-1.5 text-xs text-emerald-700 font-medium">
                        20% Archive Privilege discount active (-$
                        {discountAmount.toFixed(2)})
                      </p>
                    )}
                  </div>
                </div>
              )}
            </>
          )}

          {step === "checkout" && (
            <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  placeholder="Yash Bandal"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Phone Number (For Courier Dispatch SMS)
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 text-sm font-mono bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Street Address & Apartment
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  placeholder="42 Sneaker Studio Way, Koregaon Park"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Postal / ZIP Code
                </label>
                <input
                  type="text"
                  required
                  value={formData.postalCode}
                  onChange={(e) =>
                    setFormData({ ...formData, postalCode: e.target.value })
                  }
                  placeholder="411001"
                  className="w-full px-3.5 py-2.5 text-sm font-mono bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-900"
                />
              </div>

              <div className="pt-2">
                <label className="block text-xs font-medium text-zinc-700 mb-2">
                  Settlement Method
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`px-3 py-2.5 text-xs font-medium rounded-lg border text-left transition-colors ${
                      paymentMethod === "card"
                        ? "bg-zinc-900 text-white border-zinc-900"
                        : "bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900"
                    }`}
                  >
                    <div className="font-semibold">Instant Card / UPI</div>
                    <div className="text-[11px] opacity-80 mt-0.5">
                      256-bit encrypted
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`px-3 py-2.5 text-xs font-medium rounded-lg border text-left transition-colors ${
                      paymentMethod === "cod"
                        ? "bg-zinc-900 text-white border-zinc-900"
                        : "bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900"
                    }`}
                  >
                    <div className="font-semibold">Cash on Delivery</div>
                    <div className="text-[11px] opacity-80 mt-0.5">
                      Pay upon inspection
                    </div>
                  </button>
                </div>
              </div>

              {formError && (
                <p className="text-xs text-[#E63926] font-medium">{formError}</p>
              )}
            </form>
          )}

          {step === "confirmed" && orderRecord && (
            <div className="py-4 space-y-5">
              <div className="p-4 bg-white border border-zinc-200 rounded-xl">
                <p className="text-xs font-mono text-emerald-700 font-semibold">
                  Order #{orderRecord.orderNumber} Confirmed — Preparing Shipment
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-zinc-900">
                  Thank you, {orderRecord.customer.fullName}
                </h3>
                <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                  Your authentic Nike × YB Studios footwear is being double-boxed for dispatch to{" "}
                  <span className="font-medium text-zinc-900">
                    {orderRecord.customer.address} ({orderRecord.customer.postalCode})
                  </span>
                  .
                </p>
                <div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                  <span>Settlement: {orderRecord.paymentMethod === "cod" ? "Cash on Delivery" : "Verified Card"}</span>
                  <span className="font-mono tabular-nums">{orderRecord.timestamp}</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold text-zinc-500">
                  Serialized Dispatch Summary
                </h4>
                {orderRecord.items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex items-center justify-between text-xs bg-white px-3.5 py-2.5 rounded-lg border border-zinc-200/80"
                  >
                    <div>
                      <p className="font-semibold text-zinc-900">{item.name}</p>
                      <p className="text-zinc-500">
                        {item.size} · Qty {item.quantity}
                      </p>
                    </div>
                    <span className="font-mono tabular-nums font-medium text-zinc-900">
                      ${(item.numericPrice * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-200 text-sm font-semibold">
                <span>Total Verified Amount</span>
                <span className="font-mono tabular-nums text-base">
                  ${orderRecord.total.toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {step !== "confirmed" && cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-zinc-200/80 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-zinc-600">
                <span>Subtotal</span>
                <span className="font-mono tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Archive Privilege (20%)</span>
                  <span className="font-mono tabular-nums">
                    -${discountAmount.toFixed(2)}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-zinc-600">
                <span>Insured Express Shipping</span>
                <span className="font-mono tabular-nums">
                  {shipping === 0 ? "Complimentary" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-zinc-900 pt-2 border-t border-zinc-100">
                <span>Total</span>
                <span className="font-mono tabular-nums text-base">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            {step === "cart" ? (
              <button
                type="button"
                onClick={() => setStep("checkout")}
                className="w-full py-3 px-5 bg-[#E63926] hover:bg-[#d12f1d] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                Proceed to Checkout — ${total.toFixed(2)}
              </button>
            ) : (
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setStep("cart")}
                  className="px-4 py-3 text-xs font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors whitespace-nowrap"
                >
                  Back
                </button>
                <button
                  type="submit"
                  form="checkout-form"
                  className="flex-1 py-3 px-5 bg-[#E63926] hover:bg-[#d12f1d] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
                >
                  Confirm Order — ${total.toFixed(2)}
                </button>
              </div>
            )}
          </div>
        )}

        {step === "confirmed" && (
          <div className="p-6 bg-white border-t border-zinc-200/80">
            <button
              type="button"
              onClick={handleResetAndClose}
              className="w-full py-3 px-5 bg-[#111113] hover:bg-zinc-800 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              Continue Exploring Archive
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;

import { useState } from "react";
import { Button } from "../components";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address for archive drop alerts.");
      return;
    }
    setError("");
    setSubmittedEmail(email.trim());
    setEmail("");
  };

  return (
    <section
      id="contact-us"
      className="max-container bg-white rounded-2xl border border-zinc-200/90 p-7 sm:p-12 flex flex-col lg:flex-row justify-between lg:items-center gap-8"
    >
      <div className="max-w-xl">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span>Archive Dispatch Ledger</span>
          <span aria-hidden="true">·</span>
          <span>Priority Allocation</span>
        </div>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111113] text-balance">
          Register for Early Drop Access & Restock Alerts.
        </h2>
        <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
          Receive 24-hour advance reservation links before limited colorways and
          numbered Jordan retro allocations open to the public.
        </p>
      </div>

      <div className="w-full lg:max-w-md">
        {submittedEmail ? (
          <div className="p-5 bg-[#F1F1EE] rounded-xl border border-zinc-300/80">
            <p className="text-xs font-mono font-semibold text-emerald-700">
              Early Access Pass Active · ID #YB-8492
            </p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">
              Registered {submittedEmail}
            </p>
            <p className="mt-1 text-xs text-zinc-600">
              Your priority reservation link and code{" "}
              <span className="font-mono font-semibold text-zinc-900">
                ARCHIVE20
              </span>{" "}
              are ready for your next order.
            </p>
            <button
              type="button"
              onClick={() => setSubmittedEmail("")}
              className="mt-3 text-xs text-zinc-600 underline hover:text-zinc-900"
            >
              Register another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-2 bg-[#F8F8F6] border border-zinc-300 rounded-xl focus-within:border-[#111113]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="athlete@nike-studio.com"
                aria-label="Email address for newsletter"
                className="flex-1 px-3 py-2.5 text-sm text-zinc-900 bg-transparent outline-none placeholder:text-zinc-400"
              />
              <Button label="Join Drop List" type="submit" />
            </div>
            {error && (
              <p className="mt-2 text-xs text-[#E63926] font-medium">{error}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default Subscribe;

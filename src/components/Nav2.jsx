import { useState } from "react";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = ({ cartCount = 0, onOpenCart, onOpenSizeGuide }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-[#F8F8F6]/95 backdrop-blur-md border-b border-zinc-200/80 padding-x">
      <div className="max-container h-full flex items-center justify-between gap-6">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-[#111113] whitespace-nowrap shrink-0"
        >
          NIKE × YB STUDIOS
        </a>

        {/* Zone 2: 5 single-line clean navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-600"
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#111113] underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenSizeGuide}
            className="hidden sm:inline-flex items-center px-3.5 py-2 text-xs font-medium text-zinc-700 hover:text-zinc-900 border border-zinc-300/90 rounded-lg hover:bg-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            Size Guide
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#111113] hover:bg-zinc-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Shopping Bag</span>
            <span className="font-mono tabular-nums text-zinc-300">
              ({cartCount})
            </span>
          </button>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 text-zinc-800 hover:bg-zinc-200/60 rounded-lg transition-colors"
            aria-label="Open navigation menu"
          >
            <img src={hamburger} alt="" width={20} height={20} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 w-72 h-screen bg-[#F8F8F6] text-[#111113] p-6 shadow-2xl flex flex-col justify-between border-l border-zinc-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
                <span className="font-display text-base font-bold">
                  NIKE × YB STUDIOS
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="p-1.5 rounded-md hover:bg-zinc-200/60"
                  aria-label="Close navigation menu"
                >
                  <img src={close} alt="" width={20} height={20} />
                </button>
              </div>

              <ul className="mt-6 flex flex-col gap-4 text-base font-medium text-zinc-800">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-1 hover:text-[#E63926] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-zinc-200 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenSizeGuide();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-zinc-800 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-100 whitespace-nowrap"
              >
                Open Size Guide
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#E63926] rounded-lg hover:bg-[#d12f1d] whitespace-nowrap"
              >
                View Shopping Bag ({cartCount})
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;

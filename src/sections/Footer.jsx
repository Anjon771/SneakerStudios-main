import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = ({ onOpenSizeGuide }) => {
  return (
    <footer className="max-container text-white">
      <div className="flex justify-between items-start gap-16 flex-wrap max-lg:flex-col pb-12 border-b border-zinc-800">
        <div className="flex flex-col items-start max-w-sm">
          <a href="#home" className="inline-flex items-center gap-3">
            <img
              src={footerLogo}
              alt="Nike x YB Studios"
              referrerPolicy="no-referrer"
              width={130}
              height={40}
              className="m-0"
            />
          </a>
          <p className="mt-5 text-sm leading-relaxed font-sans text-zinc-400">
            Curated athletic footwear and archive silhouettes engineered for
            court precision, track velocity, and daily architectural comfort.
          </p>
          <div className="flex items-center gap-3.5 mt-6">
            {socialMedia.map((icon) => (
              <a
                key={icon.alt}
                href={icon.href || "#home"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.alt}
                className="flex justify-center items-center w-10 h-10 bg-zinc-900 hover:bg-[#E63926] border border-zinc-800 rounded-lg transition-colors"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={18}
                  height={18}
                  className="invert"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-12 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display text-base font-bold mb-4 text-white tracking-tight">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li
                    className="font-sans text-sm text-zinc-400 hover:text-white transition-colors"
                    key={link.name}
                  >
                    {link.action === "size-guide" ? (
                      <button
                        type="button"
                        onClick={onOpenSizeGuide}
                        className="hover:underline text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a href={link.link}>{link.name}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-zinc-400 pt-8 max-sm:flex-col max-sm:gap-4 text-xs">
        <div className="flex items-center gap-2">
          <img
            src={copyrightSign}
            alt=""
            width={16}
            height={16}
            className="rounded-full m-0 opacity-75"
          />
          <p>
            2026 Nike × YB-Productions Sneaker Studios. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={onOpenSizeGuide}
            className="hover:text-white transition-colors"
          >
            Sizing Standards
          </button>
          <a href="#services" className="hover:text-white transition-colors">
            Authenticity Ledger
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

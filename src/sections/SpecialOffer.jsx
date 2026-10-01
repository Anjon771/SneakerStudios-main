import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = ({ onClaimOffer, onOpenSizeGuide }) => {
  return (
    <section
      id="special-offer"
      className="max-container bg-white rounded-2xl border border-zinc-200/90 p-7 sm:p-12 grid grid-cols-1 xl:grid-cols-12 gap-10 items-center"
    >
      {/* Left Visual Showcase */}
      <div className="xl:col-span-6 bg-[#F1F1EE] rounded-xl p-6 flex items-center justify-center">
        <img
          src={offer}
          alt="Nike Archive Season Privilege Offer"
          referrerPolicy="no-referrer"
          width={680}
          height={580}
          className="object-contain w-full max-h-[380px]"
        />
      </div>

      {/* Right Offer Details & Action */}
      <div className="xl:col-span-6 flex flex-col">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span className="text-[#E63926] font-semibold">
            Seasonal Archive Privilege
          </span>
          <span aria-hidden="true">·</span>
          <span className="font-mono">Code: ARCHIVE20</span>
        </div>

        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111113] text-balance">
          20% Off Full-Season Court & Track Rotations.
        </h2>

        <p className="mt-4 info-text">
          Equip your training rotation with verified archive releases. Activate
          our seasonal privilege code at checkout for an immediate 20% reduction
          across all footwear silhouettes, plus complimentary insured express
          dispatch.
        </p>

        <div className="mt-6 pt-5 border-t border-zinc-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <p className="text-zinc-500">Privilege Rate</p>
            <p className="mt-0.5 font-mono tabular-nums font-semibold text-sm text-zinc-900">
              20% Instant Off
            </p>
          </div>
          <div>
            <p className="text-zinc-500">Express Courier</p>
            <p className="mt-0.5 font-mono tabular-nums font-semibold text-sm text-zinc-900">
              $0.00 ($150+ Min)
            </p>
          </div>
          <div>
            <p className="text-zinc-500">Size Exchanges</p>
            <p className="mt-0.5 font-mono tabular-nums font-semibold text-sm text-zinc-900">
              30-Day Free Trial
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <Button
            label="Activate 20% Code (ARCHIVE20)"
            iconURL={arrowRight}
            onClick={onClaimOffer}
          />
          <Button
            label="Open Sizing Chart"
            backgroundColor="bg-white"
            borderColor="border-zinc-300"
            textColor="text-zinc-900"
            onClick={onOpenSizeGuide}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

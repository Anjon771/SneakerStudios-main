import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section id="reviews" className="max-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200/80">
        <div>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>Verified Field Telemetry</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">4.9 / 5.0 Average Score</span>
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111113]">
            Proven by Endurance & Court Athletes
          </h2>
        </div>
        <p className="font-sans text-sm text-zinc-600 max-w-md">
          Documented performance outcomes from marathoners, akhada athletes, and
          competitive league players logging real mileage in YB Studio pairs.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

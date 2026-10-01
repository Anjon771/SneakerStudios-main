import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section
      id="services"
      className="max-container grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;

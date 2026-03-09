import { Paintbrush, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Diseño a Medida",
    description: "Cada detalle pensado para reflejar la identidad única de tu marca y conectar con tu público.",
  },
  {
    icon: Zap,
    title: "Rendimiento Óptimo",
    description: "Velocidad y fluidez en cada interacción. Tu sitio cargará en un instante.",
  },
  {
    icon: Shield,
    title: "Seguridad Total",
    description: "Protección avanzada para que tú y tus usuarios naveguen con total confianza.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-3">
            Servicios
          </p>
          <h2 className="text-4xl md:text-5xl text-foreground">
            Lo que <span className="italic">ofrecemos</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

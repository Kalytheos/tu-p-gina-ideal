import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-20 text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl text-primary-foreground">
              ¿Listo para <span className="italic">empezar</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Transforma tu presencia digital. Contáctanos y hagamos realidad 
              la página web que siempre imaginaste.
            </p>
            <Button variant="heroOutline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contáctanos
            </Button>
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-foreground blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

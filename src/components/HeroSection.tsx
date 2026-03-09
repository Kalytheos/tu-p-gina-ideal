import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium animate-fade-up">
            Tu visión, nuestro diseño
          </p>
          <h1 className="text-5xl md:text-7xl leading-[1.1] text-foreground animate-fade-up animate-delay-100">
            Aquí podría estar{" "}
            <span className="italic text-primary">tu página</span>{" "}
            deseada
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-up animate-delay-200">
            Este es un ejemplo de cómo podría lucir tu sitio web. 
            Moderno, elegante y diseñado para cautivar a tu audiencia.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
            <Button variant="hero" size="lg">Explorar más</Button>
            <Button variant="heroOutline" size="lg">Saber más</Button>
          </div>
        </div>
        <div className="relative animate-fade-in animate-delay-300">
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
            <img 
              src={heroImage} 
              alt="Diseño abstracto moderno" 
              className="w-full h-[500px] object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-[var(--shadow-soft)] border border-border">
            <p className="text-3xl font-bold text-primary">100%</p>
            <p className="text-sm text-muted-foreground">Personalizable</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

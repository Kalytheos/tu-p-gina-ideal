import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <span className="text-xl font-semibold tracking-tight text-foreground">
          tu<span className="text-primary">marca</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#inicio" className="hover:text-foreground transition-colors">Inicio</a>
          <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
        </div>
        <a
          href="https://wa.me/573124704145?text=Hola%20Dorian,%20vi%20tu%20portafolio%20y%20me%20interesa%20una%20p%C3%A1gina%20web%20para%20mi%20negocio.%0A%0AMi%20negocio%20es:%20______%0A%0A%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="hero" size="sm">Contacto</Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

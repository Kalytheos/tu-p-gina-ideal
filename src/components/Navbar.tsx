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
          <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
          <a href="#sobre" className="hover:text-foreground transition-colors">Sobre Nosotros</a>
          <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
        </div>
        <Button variant="hero" size="sm">Empezar</Button>
      </div>
    </nav>
  );
};

export default Navbar;

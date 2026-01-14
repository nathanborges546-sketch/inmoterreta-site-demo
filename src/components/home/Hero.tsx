import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Key, Building } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/30" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Más de 10 años en Alicante
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Tu hogar ideal en la{" "}
              <span className="text-primary">Costa Blanca</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Inmobiliaria de confianza en San Juan Playa, Campello y Alicante. 
              Te acompañamos en cada paso para encontrar, vender o alquilar tu propiedad con total tranquilidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="group">
                <Link to="/propiedades">
                  Ver propiedades
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contacto">Contactar ahora</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-display font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Propiedades vendidas</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <Link
                to="/propiedades?tipo=venta"
                className="group block p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Home className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Comprar</h3>
                <p className="text-sm text-muted-foreground">
                  Encuentra tu hogar perfecto entre nuestra selección de propiedades.
                </p>
              </Link>

              <Link
                to="/vender"
                className="group block p-6 bg-primary text-primary-foreground rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4">
                  <Key className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Vender</h3>
                <p className="text-sm text-primary-foreground/80">
                  Vendemos tu propiedad al mejor precio con nuestro plan de marketing.
                </p>
              </Link>
            </div>

            <div className="pt-8">
              <Link
                to="/propiedades?tipo=alquiler"
                className="group block p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Building className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Alquilar</h3>
                <p className="text-sm text-muted-foreground">
                  Gestión integral de alquileres con total seguridad jurídica.
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

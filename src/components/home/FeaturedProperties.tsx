import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const featuredProperties = [
  {
    id: "1",
    title: "Ático con vistas al mar",
    location: "San Juan Playa, Alicante",
    price: 385000,
    type: "venta" as const,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
  },
  {
    id: "2",
    title: "Villa moderna con piscina",
    location: "Campello, Alicante",
    price: 520000,
    type: "venta" as const,
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
  },
  {
    id: "3",
    title: "Apartamento céntrico reformado",
    location: "Centro, Alicante",
    price: 950,
    type: "alquiler" as const,
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
  },
];

export function FeaturedProperties() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Destacados
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Propiedades seleccionadas
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg">
              Descubre nuestra selección de propiedades destacadas en las mejores zonas de Alicante.
            </p>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link to="/propiedades" className="group">
              Ver todas
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

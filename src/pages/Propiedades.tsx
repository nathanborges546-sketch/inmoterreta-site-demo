import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { PropertyFilters } from "@/components/properties/PropertyFilters";
import { motion } from "framer-motion";

const properties = [
  { id: "1", title: "Ático con vistas al mar", location: "San Juan Playa, Alicante", price: 385000, type: "venta" as const, bedrooms: 3, bathrooms: 2, area: 120, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" },
  { id: "2", title: "Villa moderna con piscina", location: "Campello, Alicante", price: 520000, type: "venta" as const, bedrooms: 4, bathrooms: 3, area: 250, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075" },
  { id: "3", title: "Apartamento céntrico reformado", location: "Centro, Alicante", price: 950, type: "alquiler" as const, bedrooms: 2, bathrooms: 1, area: 85, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053" },
  { id: "4", title: "Piso luminoso cerca de la playa", location: "Playa San Juan", price: 245000, type: "venta" as const, bedrooms: 2, bathrooms: 1, area: 75, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080" },
  { id: "5", title: "Chalet adosado con jardín", location: "San Juan Playa", price: 420000, type: "venta" as const, bedrooms: 3, bathrooms: 2, area: 180, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070" },
  { id: "6", title: "Estudio moderno amueblado", location: "Centro, Alicante", price: 650, type: "alquiler" as const, bedrooms: 1, bathrooms: 1, area: 45, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070" },
];

const Propiedades = () => {
  const [filters, setFilters] = useState({ tipo: "todos", tipoInmueble: "todos", precioMin: "", precioMax: "cualquiera", zona: "todas" });

  return (
    <Layout>
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">Propiedades</h1>
            <p className="text-muted-foreground">Encuentra tu propiedad ideal en Alicante y alrededores.</p>
          </motion.div>
          <PropertyFilters filters={filters} onFilterChange={(key, value) => setFilters({ ...filters, [key]: value })} onReset={() => setFilters({ tipo: "todos", tipoInmueble: "todos", precioMin: "", precioMax: "cualquiera", zona: "todas" })} />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <motion.div key={property.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Propiedades;

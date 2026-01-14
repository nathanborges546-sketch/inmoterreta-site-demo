import { Link } from "react-router-dom";
import { Home, Key, Building, Shield, Users, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Compra de inmuebles",
    description:
      "Te ayudamos a encontrar tu hogar ideal. Analizamos tus necesidades y te mostramos las mejores opciones.",
  },
  {
    icon: Key,
    title: "Venta de propiedades",
    description:
      "Vendemos tu propiedad al mejor precio con nuestro plan de marketing personalizado y red de contactos.",
  },
  {
    icon: Building,
    title: "Alquiler",
    description:
      "Gestión integral de alquileres: búsqueda de inquilinos, contratos y seguimiento durante toda la duración.",
  },
  {
    icon: Shield,
    title: "Asesoramiento legal",
    description:
      "Contamos con apoyo legal especializado para garantizar transacciones seguras y sin sorpresas.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    description:
      "Cada cliente es único. Te tratamos como a un miembro de nuestra familia, con dedicación total.",
  },
  {
    icon: FileCheck,
    title: "Valoración gratuita",
    description:
      "Tasamos tu propiedad sin compromiso para que conozcas su valor real en el mercado actual.",
  },
];

export function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Nuestros servicios
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="text-muted-foreground mt-4">
            Ofrecemos un servicio integral para cubrir todas tus necesidades inmobiliarias
            con la máxima profesionalidad y cercanía.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link to="/servicios">Conocer todos los servicios</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Key, Building, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Home, title: "Compra de inmuebles", description: "Te ayudamos a encontrar tu hogar ideal analizando tus necesidades, presupuesto y preferencias. Acompañamiento completo hasta la firma.", benefits: ["Búsqueda personalizada", "Visitas coordinadas", "Negociación profesional", "Asesoramiento legal"] },
  { icon: Key, title: "Venta de propiedades", description: "Vendemos tu propiedad al mejor precio con un plan de marketing personalizado y nuestra amplia red de contactos.", benefits: ["Valoración gratuita", "Reportaje fotográfico", "Publicación en portales", "Gestión de visitas"] },
  { icon: Building, title: "Alquiler", description: "Gestión integral de alquileres con búsqueda de inquilinos solventes, contratos seguros y seguimiento continuo.", benefits: ["Selección de inquilinos", "Contratos legales", "Gestión de incidencias", "Cobro de rentas"] },
];

const Servicios = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Nuestros servicios</h1>
            <p className="text-muted-foreground text-lg">Ofrecemos un servicio inmobiliario integral con la máxima profesionalidad y cercanía.</p>
          </motion.div>
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button asChild><Link to="/contacto">Solicitar información <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
                </div>
                <div className={`bg-muted rounded-2xl aspect-video ${index % 2 === 1 ? "lg:order-1" : ""}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;

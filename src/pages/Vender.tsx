import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Valoración gratuita", description: "Analizamos tu propiedad y te damos un precio de mercado realista y competitivo." },
  { number: "02", title: "Plan de marketing", description: "Creamos un plan personalizado con fotografías profesionales y difusión en los mejores portales." },
  { number: "03", title: "Gestión de visitas", description: "Coordinamos y realizamos las visitas con compradores cualificados." },
  { number: "04", title: "Negociación y cierre", description: "Negociamos las mejores condiciones y te acompañamos hasta la firma ante notario." },
];

const Vender = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Vende tu propiedad con nosotros</h1>
            <p className="text-muted-foreground text-lg mb-8">Te ayudamos a vender tu inmueble al mejor precio, con un servicio profesional y sin complicaciones.</p>
            <div className="flex flex-wrap gap-4">
              {["Valoración gratuita", "Sin exclusividad", "Máxima difusión"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-foreground"><CheckCircle className="w-5 h-5 text-primary" />{item}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-16">Nuestro proceso de venta</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="text-5xl font-display font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-center mb-8">Solicita tu valoración gratuita</h2>
          <form className="space-y-6 bg-card p-8 rounded-2xl border border-border">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Nombre *" required />
              <Input placeholder="Teléfono *" required />
            </div>
            <Input placeholder="Email *" type="email" required />
            <Input placeholder="Dirección de la propiedad *" required />
            <Textarea placeholder="Cuéntanos más sobre tu propiedad..." rows={4} />
            <Button type="submit" className="w-full" size="lg">Solicitar valoración <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Vender;

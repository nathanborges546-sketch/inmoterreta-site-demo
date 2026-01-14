import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Contacta con nosotros</h1>
            <p className="text-muted-foreground text-lg">Estamos aquí para ayudarte. Cuéntanos qué necesitas y te responderemos lo antes posible.</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="font-display text-2xl font-bold mb-8">Información de contacto</h2>
              <div className="space-y-6">
                {[{ icon: Phone, label: "Teléfonos", value: "965 43 87 58 / 653 38 53 01" }, { icon: Mail, label: "Email", value: "info@inmoterreta.es" }, { icon: MapPin, label: "Dirección", value: "San Juan Playa, Alicante, España" }, { icon: Clock, label: "Horario", value: "Lunes a Viernes: 9:00 - 19:00" }].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><item.icon className="w-5 h-5 text-primary" /></div>
                    <div><div className="font-medium text-foreground">{item.label}</div><div className="text-muted-foreground">{item.value}</div></div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-muted rounded-2xl aspect-video" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="font-display text-2xl font-bold mb-8">Envíanos un mensaje</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Nombre *" required />
                  <Input placeholder="Teléfono *" required />
                </div>
                <Input placeholder="Email *" type="email" required />
                <Input placeholder="Asunto" />
                <Textarea placeholder="Tu mensaje *" rows={5} required />
                <Button type="submit" size="lg" className="w-full">Enviar mensaje</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;

import { motion } from "framer-motion";
import { MapPin, Award, Heart, Clock } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Expertos locales",
    description: "Conocemos cada rincón de Alicante, San Juan Playa y Campello.",
  },
  {
    icon: Award,
    title: "Experiencia contrastada",
    description: "Más de 10 años ayudando a familias a encontrar su hogar.",
  },
  {
    icon: Heart,
    title: "Trato familiar",
    description: "Cada cliente es tratado como un miembro de nuestra familia.",
  },
  {
    icon: Clock,
    title: "Siempre disponibles",
    description: "Estamos a tu lado en cada paso del proceso.",
  },
];

export function Trust() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider">
              ¿Por qué elegirnos?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">
              Tu confianza es nuestra prioridad
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              En Inmoterreta entendemos que comprar, vender o alquilar una propiedad es una de las
              decisiones más importantes de tu vida. Por eso, nos comprometemos a ofrecerte un
              servicio cercano, transparente y profesional.
            </p>
            <blockquote className="border-l-4 border-primary-foreground/30 pl-6 italic text-primary-foreground/90">
              "Siempre me he preocupado de cada uno de mis clientes como si fuera un familiar.
              Esa es la esencia de Inmoterreta."
              <footer className="mt-2 text-sm text-primary-foreground/70 not-italic">
                — Gregorio Grande, Fundador
              </footer>
            </blockquote>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-primary-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

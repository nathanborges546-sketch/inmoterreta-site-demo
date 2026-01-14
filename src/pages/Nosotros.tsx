import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import fotoNosotros from "@/assets/foto-nosotros.png";

const Nosotros = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Sobre nosotros</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">Tu inmobiliaria de confianza en Alicante</h1>
              <div className="space-y-4 text-muted-foreground">
                <p>Inmoterreta nace de la pasión por el sector inmobiliario y el compromiso con nuestros clientes. Con más de 10 años de experiencia en Alicante, San Juan Playa y Campello, nos hemos convertido en un referente local.</p>
                <p>Nuestra filosofía es sencilla: tratar a cada cliente como si fuera parte de nuestra familia. Entendemos que comprar, vender o alquilar una propiedad es una de las decisiones más importantes de la vida, y por eso nos comprometemos a acompañarte en cada paso del proceso.</p>
                <p>Conocemos cada rincón de la Costa Blanca, sus barrios, sus tendencias de mercado y las mejores oportunidades. Este conocimiento local, combinado con nuestra dedicación personal, es lo que nos diferencia.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="flex items-center justify-center">
              <img src={fotoNosotros} alt="Equipo Inmoterreta" className="w-full max-w-md rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Nuestros valores</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[{ title: "Confianza", desc: "Transparencia total en cada operación" }, { title: "Cercanía", desc: "Trato personalizado y humano" }, { title: "Profesionalidad", desc: "Experiencia y conocimiento del mercado" }].map((value) => (
              <div key={value.title} className="p-6 bg-primary-foreground/10 rounded-2xl">
                <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-primary-foreground/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;

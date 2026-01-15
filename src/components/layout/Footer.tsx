import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const navigation = {
  main: [
    { name: "Inicio", href: "/" },
    { name: "Propiedades", href: "/propiedades" },
    { name: "Servicios", href: "/servicios" },
    { name: "Vender", href: "/vender" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ],
  legal: [
    { name: "Aviso Legal", href: "/aviso-legal" },
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Cookies", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Inmoterreta" className="w-10 h-10 object-contain" />
              <span className="font-display text-xl font-semibold">Inmoterreta</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Tu inmobiliaria de confianza en Alicante. Más de 10 años ayudando a familias a encontrar su hogar ideal.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Navegación</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+34653385301"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>653 38 53 01</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+34653385301"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>653 38 53 01</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@inmoterreta.es"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@inmoterreta.es</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>San Juan Playa, Alicante, España</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Inmoterreta. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

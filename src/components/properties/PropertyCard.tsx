import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  type: "venta" | "alquiler";
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number, type: "venta" | "alquiler") => {
    if (type === "alquiler") {
      return `${price.toLocaleString("es-ES")} €/mes`;
    }
    return `${price.toLocaleString("es-ES")} €`;
  };

  return (
    <Link
      to={`/propiedades/${property.id}`}
      className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge
          className={`absolute top-4 left-4 ${
            property.type === "venta"
              ? "bg-primary text-primary-foreground"
              : "bg-accent text-accent-foreground"
          }`}
        >
          {property.type === "venta" ? "En venta" : "En alquiler"}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span>{property.location}</span>
        </div>
        
        <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {property.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span>{property.area} m²</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold text-primary">
            {formatPrice(property.price, property.type)}
          </span>
          <span className="text-sm text-primary font-medium group-hover:underline">
            Ver detalle →
          </span>
        </div>
      </div>
    </Link>
  );
}

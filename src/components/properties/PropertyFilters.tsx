import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface PropertyFiltersProps {
  filters: {
    tipo: string;
    tipoInmueble: string;
    precioMin: string;
    precioMax: string;
    zona: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onReset: () => void;
}

export function PropertyFilters({ filters, onFilterChange, onReset }: PropertyFiltersProps) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Select value={filters.tipo} onValueChange={(value) => onFilterChange("tipo", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Tipo de operación" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="venta">Venta</SelectItem>
            <SelectItem value="alquiler">Alquiler</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.tipoInmueble}
          onValueChange={(value) => onFilterChange("tipoInmueble", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Tipo de inmueble" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="piso">Piso</SelectItem>
            <SelectItem value="casa">Casa / Chalet</SelectItem>
            <SelectItem value="atico">Ático</SelectItem>
            <SelectItem value="local">Local comercial</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.precioMax}
          onValueChange={(value) => onFilterChange("precioMax", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Precio máximo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cualquiera">Cualquier precio</SelectItem>
            <SelectItem value="100000">Hasta 100.000 €</SelectItem>
            <SelectItem value="200000">Hasta 200.000 €</SelectItem>
            <SelectItem value="300000">Hasta 300.000 €</SelectItem>
            <SelectItem value="500000">Hasta 500.000 €</SelectItem>
            <SelectItem value="1000000">Hasta 1.000.000 €</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.zona} onValueChange={(value) => onFilterChange("zona", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Zona" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas las zonas</SelectItem>
            <SelectItem value="san-juan">San Juan Playa</SelectItem>
            <SelectItem value="campello">Campello</SelectItem>
            <SelectItem value="centro">Centro Alicante</SelectItem>
            <SelectItem value="playa-san-juan">Playa San Juan</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <Button className="flex-1">
            <Search className="w-4 h-4 mr-2" />
            Buscar
          </Button>
          <Button variant="outline" onClick={onReset}>
            Limpiar
          </Button>
        </div>
      </div>
    </div>
  );
}

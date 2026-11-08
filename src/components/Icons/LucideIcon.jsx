import React from "react";
import {
  ArrowRight,
  Car,
  CarFront,
  Shield,
  CheckCircle,
  Clock,
  CreditCard,
  Star,
  Handshake,
  Award,
  Truck,
  Battery,
  Fuel,
  Phone,
  Building,
  Users,
  Headset,
  MapPin,
  Search,
  Wrench,
} from "lucide-react";

// Map of app icon names -> lucide-react exports.
// Render nothing if an icon name is missing.
const iconMap = {
  ArrowRight,
  Car,
  CarFront,
  Shield,
  CheckCircle,
  Clock,
  CreditCard,
  Star,
  Handshake,
  Award,
  Truck,
  Battery,
  Fuel,
  Phone,
  Building,
  Users,
  Headset,
  MapPin,
  Search,
  Wrench,

  // aliases used by this codebase
  CarSide: CarFront,
};

/**
 * Minimal icon wrapper using lucide-react.
 * Usage: <LucideIcon name="ArrowRight" className="h-4 w-4 text-sky-" />
 */
export default function LucideIcon({ name, className = "", size, ...rest }) {
  const Comp = iconMap[name];
  if (!Comp) return null;
  return <Comp className={className} size={size} {...rest} />;
}


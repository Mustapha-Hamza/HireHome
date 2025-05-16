import { Link } from "react-router-dom";
import type { Location } from "../../types";

type LocationCardProps = {
  location: Location;
};

const LocationCard = ({ location }: LocationCardProps) => {
  return (
    <Link to={`/locations/${location.id}`} className="group">
      <div className="luxury-card h-full">
        <div className="relative h-64">
          <img
            src={location.images[0] || "/placeholder.svg?height=300&width=400"}
            alt={location.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold">{location.name}</h3>
            <p className="text-sm opacity-90">{location.country}</p>
          </div>
        </div>
        <div className="p-4 bg-white">
          <p className="text-gray-600 line-clamp-2">
            {location.shortDescription}
          </p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-dark-900 font-semibold">
              ${location.pricePerNight}/night
            </span>
            <span className="text-sm text-gray-500 group-hover:text-gold-600 transition-colors">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LocationCard;

import { Link } from "react-router-dom";
import type { HomeType } from "../../types";

type HomeTypeCardProps = {
  homeType: HomeType;
};

const HomeTypeCard = ({ homeType }: HomeTypeCardProps) => {
  // Get the first image from the first location as the cover image
  const coverImage =
    homeType.locations[0]?.images[0] || "/placeholder.svg?height=300&width=400";

  return (
    <Link to={`/home-types/${homeType.id}`} className="group">
      <div className="luxury-card h-full">
        <div className="relative h-64">
          <img
            src={coverImage || "/placeholder.svg"}
            alt={homeType.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold">{homeType.name}</h3>
            <p className="text-sm opacity-90">
              {homeType.locations.length} destinations
            </p>
          </div>
        </div>
        <div className="p-4 bg-white">
          <p className="text-gray-600">{homeType.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-dark-900 font-semibold">
              From ${homeType.startingPrice}/night
            </span>
            <span className="text-sm text-gray-500 group-hover:text-gold-600 transition-colors">
              View Destinations →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeTypeCard;

import type { HomeType } from "../types";

// Mock data for the application
export const homeTypes: HomeType[] = [
  {
    id: "island-villas",
    name: "Island Villas",
    description:
      "Luxurious villas on stunning islands with breathtaking ocean views and private beaches.",
    startingPrice: 350,
    locations: [
      {
        id: "bali",
        name: "Bali",
        country: "Indonesia",
        shortDescription:
          "Tropical paradise with stunning beaches and vibrant culture.",
        description:
          "Experience the magic of Bali in this luxurious villa. Nestled in the heart of Ubud, this stunning property offers panoramic views of lush rice terraces and tropical forests. The villa features a private infinity pool, spacious living areas, and traditional Balinese architecture blended with modern amenities. Enjoy the serene environment, explore nearby temples, or indulge in local cuisine. Perfect for couples or families seeking a peaceful retreat in the cultural heart of Bali.",
        pricePerNight: 450,
        maxGuests: 6,
        bedrooms: 5,
        bathrooms: 6,
        size: 2500,
        rating: 4.9,
        reviews: 124,
        images: [
          "/assets/IslandVillas/Bali/image1.jpg",
          "/assets/IslandVillas/Bali/image2.jpg",
          "/assets/IslandVillas/Bali/image3.jpg",
          "/assets/IslandVillas/Bali/image4.jpg",
        ],
      },
      {
        id: "maldives",
        name: "Maldives",
        country: "Maldives",
        shortDescription:
          "Overwater bungalows with direct access to crystal clear waters.",
        description:
          "Indulge in the ultimate luxury experience in this overwater villa in the Maldives. Perched above the crystal-clear turquoise lagoon, this villa offers unparalleled views of the Indian Ocean. Step directly from your private deck into the warm waters teeming with colorful marine life. The villa features a glass floor section, allowing you to observe the underwater world from the comfort of your living room. Enjoy personalized butler service, gourmet dining options, and exclusive spa treatments. A perfect honeymoon destination or a luxurious escape for those seeking privacy and tranquility.",
        pricePerNight: 850,
        maxGuests: 4,
        bedrooms: 4,
        bathrooms: 5,
        size: 1800,
        rating: 4.8,
        reviews: 98,
        images: [
          "/assets/IslandVillas/Maldives/image1.jpg",
          "/assets/IslandVillas/Maldives/image2.jpg",
          "/assets/IslandVillas/Maldives/image3.jpg",
          "/assets/IslandVillas/Maldives/image4.jpg",
        ],
      },
      {
        id: "santorini",
        name: "Santorini",
        country: "Greece",
        shortDescription:
          "Cliffside villas with stunning views of the Aegean Sea and famous sunsets.",
        description:
          "Perched on the cliffs of Santorini, this breathtaking villa offers unparalleled views of the caldera and the famous Aegean sunset. The traditional Cycladic architecture features whitewashed walls and blue accents, perfectly complementing the surrounding landscape. The villa includes a private infinity pool that seems to merge with the sea horizon, spacious terraces for outdoor dining, and elegantly appointed interiors with high-end furnishings. Enjoy the proximity to charming villages, black sand beaches, and world-class restaurants. This villa provides the perfect setting for a romantic getaway or a memorable family vacation in one of Greece's most iconic destinations.",
        pricePerNight: 750,
        maxGuests: 8,
        bedrooms: 4,
        bathrooms: 5,
        size: 2800,
        rating: 4.9,
        reviews: 156,
        images: [
          "/assets/IslandVillas/Santorini/image1.jpg",
          "/assets/IslandVillas/Santorini/image2.jpg",
          "/assets/IslandVillas/Santorini/image3.jpg",
          "/assets/IslandVillas/Santorini/image4.jpg",
        ],
      },
    ],
  },
  {
    id: "mountain-top-lodges",
    name: "Mountain Top Lodges",
    description:
      "Cozy mountain retreats with stunning views, perfect for nature lovers and adventure seekers.",
    startingPrice: 300,
    locations: [
      {
        id: "swiss-alps",
        name: "Swiss Alps",
        country: "Switzerland",
        shortDescription:
          "Elegant chalets with panoramic mountain views and ski-in/ski-out access.",
        description:
          "Experience the majesty of the Swiss Alps in this luxurious mountain lodge. Perched on a hillside with breathtaking panoramic views of snow-capped peaks, this chalet combines traditional Alpine architecture with modern luxury. The property features a private hot tub, sauna, and floor-to-ceiling windows to maximize the stunning vistas. In winter, enjoy ski-in/ski-out access to world-class slopes, while summer offers hiking, mountain biking, and paragliding opportunities. The interior boasts warm wood finishes, a stone fireplace, and high-end furnishings for the ultimate cozy mountain retreat.",
        pricePerNight: 650,
        maxGuests: 8,
        bedrooms: 6,
        bathrooms: 7,
        size: 3200,
        rating: 4.9,
        reviews: 87,
        images: [
          "/assets/MountainTopLodges/SwissAlps/image1.jpg",
          "/assets/MountainTopLodges/SwissAlps/image2.jpg",
          "/assets/MountainTopLodges/SwissAlps/image3.jpg",
          "/assets/MountainTopLodges/SwissAlps/image4.jpg",
        ],
      },
      {
        id: "banff",
        name: "Banff",
        country: "Canada",
        shortDescription:
          "Rustic luxury cabins surrounded by pristine wilderness and wildlife.",
        description:
          "Immerse yourself in the natural beauty of Banff National Park in this stunning mountain lodge. Situated in a secluded location with views of the Canadian Rockies, this timber-frame cabin offers a perfect blend of rustic charm and modern luxury. The property features large windows showcasing the surrounding forest and mountains, a stone fireplace, and a private outdoor hot tub for stargazing. Explore nearby hiking trails, spot local wildlife, or visit the picturesque Lake Louise. In winter, enjoy world-class skiing, snowshoeing, and ice skating. This lodge is perfect for nature enthusiasts seeking comfort in the wilderness.",
        pricePerNight: 550,
        maxGuests: 6,
        bedrooms: 4,
        bathrooms: 5,
        size: 2800,
        rating: 4.7,
        reviews: 65,
        images: [
          "/assets/MountainTopLodges/Banff/image1.jpg",
          "/assets/MountainTopLodges/Banff/image2.jpg",
          "/assets/MountainTopLodges/Banff/image3.jpg",
          "/assets/MountainTopLodges/Banff/image4.jpg",
        ],
      },
      {
        id: "aspen",
        name: "Aspen",
        country: "USA",
        shortDescription:
          "Luxurious ski chalets with premium amenities and mountain views.",
        description:
          "Nestled in the prestigious Aspen Highlands, this extraordinary mountain lodge offers the perfect combination of luxury and adventure. The property features soaring ceilings with exposed wooden beams, a grand stone fireplace, and floor-to-ceiling windows that frame spectacular views of the surrounding mountains. Enjoy the private outdoor hot tub after a day on the slopes, or relax in the media room with the latest entertainment systems. The gourmet kitchen is fully equipped for preparing memorable meals, and the spacious dining area is perfect for entertaining. With ski-in/ski-out access and proximity to Aspen's world-class restaurants and boutiques, this lodge provides an unforgettable mountain experience.",
        pricePerNight: 950,
        maxGuests: 10,
        bedrooms: 5,
        bathrooms: 4,
        size: 4500,
        rating: 4.9,
        reviews: 112,
        images: [
          "/assets/MountainTopLodges/Aspen/image1.jpg",
          "/assets/MountainTopLodges/Aspen/image2.jpg",
          "/assets/MountainTopLodges/Aspen/image3.jpg",
          "/assets/MountainTopLodges/Aspen/image4.jpg",
        ],
      },
      {
        id: "queenstown",
        name: "Queenstown",
        country: "New Zealand",
        shortDescription:
          "Contemporary lodges with breathtaking views of Lake Wakatipu and The Remarkables.",
        description:
          "Perched on the hillside above Queenstown, this architectural masterpiece offers uninterrupted views of Lake Wakatipu and the dramatic Remarkables mountain range. The contemporary design features clean lines, natural materials, and expansive glass walls that blur the boundary between indoor and outdoor living. The property includes a heated infinity pool, outdoor fireplace, and multiple terraces for enjoying the spectacular scenery. Inside, you'll find designer furnishings, a state-of-the-art kitchen, and luxurious bedrooms with ensuite bathrooms. Located just minutes from Queenstown's adventure activities, restaurants, and wineries, this lodge provides the perfect base for exploring New Zealand's adventure capital while enjoying world-class comfort and style.",
        pricePerNight: 850,
        maxGuests: 8,
        bedrooms: 4,
        bathrooms: 5,
        size: 3800,
        rating: 4.8,
        reviews: 93,
        images: [
          "/assets/MountainTopLodges/Queenstown/image1.jpg",
          "/assets/MountainTopLodges/Queenstown/image2.jpg",
          "/assets/MountainTopLodges/Queenstown/image3.jpg",
          "/assets/MountainTopLodges/Queenstown/image4.jpg",
        ],
      },
    ],
  },
  {
    id: "beachfront-houses",
    name: "Beachfront Houses",
    description:
      "Stunning homes with direct beach access, perfect for sun-seekers and water enthusiasts.",
    startingPrice: 400,
    locations: [
      {
        id: "miami",
        name: "Miami",
        country: "USA",
        shortDescription:
          "Modern luxury homes with private pools and direct beach access.",
        description:
          "Experience the vibrant energy of Miami in this ultra-modern beachfront property. Located in the exclusive South Beach area, this sleek home offers direct access to pristine white sands and turquoise waters. The property features floor-to-ceiling windows with unobstructed ocean views, a private infinity pool, and a rooftop terrace perfect for entertaining. The interior boasts contemporary design with high-end furnishings, a gourmet kitchen, and smart home technology. Step outside to enjoy the beach or explore Miami's world-famous nightlife, restaurants, and art scene. This luxury home is perfect for those seeking a sophisticated beach getaway with all the amenities.",
        pricePerNight: 750,
        maxGuests: 10,
        bedrooms: 5,
        bathrooms: 4,
        size: 4000,
        rating: 4.8,
        reviews: 112,
        images: [
          "/assets/BeachfrontHouses/Miami/image1.jpg",
          "/assets/BeachfrontHouses/Miami/image2.jpg",
          "/assets/BeachfrontHouses/Miami/image3.jpg",
          "/assets/BeachfrontHouses/Miami/image4.jpg",
        ],
      },
      {
        id: "gold-coast",
        name: "Gold Coast",
        country: "Australia",
        shortDescription:
          "Elegant beach houses with stunning ocean views and modern amenities.",
        description:
          "Enjoy the best of Australia's Gold Coast in this stunning beachfront property. This architecturally designed home sits directly on the golden sands with panoramic views of the Pacific Ocean. The open-plan living space flows seamlessly to a large deck with an infinity pool overlooking the beach. Floor-to-ceiling windows throughout maximize the breathtaking coastal views and allow the sea breeze to flow through the home. The property features high-end finishes, a gourmet kitchen, and luxurious bedrooms with ocean views. Step directly onto the beach for swimming and surfing, or explore nearby rainforests, theme parks, and the vibrant local dining scene. Perfect for families or groups seeking a premium beach vacation.",
        pricePerNight: 650,
        maxGuests: 8,
        bedrooms: 4,
        bathrooms: 5,
        size: 3500,
        rating: 4.9,
        reviews: 94,
        images: [
          "/assets/BeachfrontHouses/GoldCoast/image1.jpg",
          "/assets/BeachfrontHouses/GoldCoast/image2.jpg",
          "/assets/BeachfrontHouses/GoldCoast/image3.jpg",
          "/assets/BeachfrontHouses/GoldCoast/image4.jpg",
        ],
      },
      {
        id: "malibu",
        name: "Malibu",
        country: "USA",
        shortDescription:
          "Iconic California beach houses with panoramic Pacific Ocean views.",
        description:
          "Experience the quintessential California lifestyle in this spectacular Malibu beach house. Situated on the coveted Carbon Beach, this contemporary home offers unobstructed views of the Pacific Ocean from almost every room. The property features a spacious deck with a fire pit and hot tub, perfect for watching stunning sunsets. The interior showcases a clean, modern aesthetic with high ceilings, natural materials, and a neutral color palette that complements the ocean views. The gourmet kitchen opens to a dining area and living room with a fireplace, creating an ideal space for entertaining. Walk directly onto the sandy beach for swimming and surfing, or explore nearby hiking trails, wineries, and upscale restaurants. This luxurious retreat offers privacy and relaxation while being just a short drive from the excitement of Los Angeles.",
        pricePerNight: 1200,
        maxGuests: 8,
        bedrooms: 4,
        bathrooms: 5,
        size: 3800,
        rating: 4.9,
        reviews: 87,
        images: [
          "/assets/BeachfrontHouses/Malibu/image1.jpg",
          "/assets/BeachfrontHouses/Malibu/image2.jpg",
          "/assets/BeachfrontHouses/Malibu/image3.jpg",
          "/assets/BeachfrontHouses/Malibu/image4.jpg",
        ],
      },
      {
        id: "amalfi-coast",
        name: "Amalfi Coast",
        country: "Italy",
        shortDescription:
          "Cliffside villas with stunning Mediterranean views and private beach access.",
        description:
          "Perched on the dramatic cliffs of Italy's Amalfi Coast, this historic villa offers breathtaking views of the Mediterranean Sea and the colorful villages that dot the coastline. The property features multiple terraces with lemon trees, bougainvillea, and comfortable seating areas for enjoying the spectacular scenery. A private staircase leads down to a secluded beach cove, accessible only to villa guests. The interior combines traditional Italian architecture with modern comforts, including hand-painted tiles, vaulted ceilings, and elegant furnishings. The fully equipped kitchen is perfect for preparing meals with fresh local ingredients, and the dining terrace provides an unforgettable setting for al fresco dining. Located just minutes from charming villages, world-class restaurants, and historic sites, this villa offers an authentic Italian experience with unparalleled luxury and privacy.",
        pricePerNight: 950,
        maxGuests: 10,
        bedrooms: 5,
        bathrooms: 4,
        size: 4200,
        rating: 4.8,
        reviews: 76,
        images: [
          "/assets/BeachfrontHouses/AmalfiCoast/image1.jpg",
          "/assets/BeachfrontHouses/AmalfiCoast/image2.jpg",
          "/assets/BeachfrontHouses/AmalfiCoast/image3.jpg",
          "/assets/BeachfrontHouses/AmalfiCoast/image4.jpg",
        ],
      },
    ],
  },
  {
    id: "countryside-estates",
    name: "Countryside Estates",
    description:
      "Elegant country homes set in picturesque rural landscapes, offering privacy, space, and luxury amenities.",
    startingPrice: 500,
    locations: [
      {
        id: "tuscany",
        name: "Tuscany",
        country: "Italy",
        shortDescription:
          "Historic villas surrounded by vineyards, olive groves, and rolling hills.",
        description:
          "Experience the timeless charm of Tuscany in this meticulously restored 17th-century estate. Surrounded by vineyards, olive groves, and cypress trees, this magnificent property offers panoramic views of the iconic Tuscan countryside. The villa features original stone walls, terracotta floors, and wooden beams, complemented by elegant modern furnishings and amenities. Enjoy the large private pool, outdoor dining areas, and beautifully landscaped gardens. The property includes a wood-fired pizza oven, wine cellar stocked with local vintages, and a professional kitchen perfect for cooking classes. Explore nearby medieval villages, visit local wineries, or simply relax and soak in the tranquil atmosphere. This estate provides an authentic Italian experience with unparalleled luxury and privacy.",
        pricePerNight: 850,
        maxGuests: 12,
        bedrooms: 6,
        bathrooms: 5,
        size: 5500,
        rating: 4.9,
        reviews: 104,
        images: [
          "/assets/CountrysideEstates/Tuscany/image1.jpg",
          "/assets/CountrysideEstates/Tuscany/image2.jpg",
          "/assets/CountrysideEstates/Tuscany/image3.jpg",
          "/assets/CountrysideEstates/Tuscany/image4.jpg",
        ],
      },
      {
        id: "cotswolds",
        name: "Cotswolds",
        country: "United Kingdom",
        shortDescription:
          "Charming stone manors in England's most picturesque countryside.",
        description:
          "Nestled in the heart of the Cotswolds, this quintessential English manor house offers a perfect blend of historic charm and modern luxury. Built from honey-colored Cotswold stone, the property is set within five acres of manicured gardens, complete with a croquet lawn, rose garden, and a tranquil pond. The interior features exposed beams, stone fireplaces, and antique furnishings, alongside contemporary amenities including a gourmet kitchen, home theater, and heated indoor swimming pool. Each bedroom has been individually designed with luxury linens and ensuite bathrooms. The estate is ideally located for exploring charming villages with thatched cottages, historic pubs, and boutique shops. Perfect for family gatherings or special celebrations, this manor house offers a truly memorable English countryside experience.",
        pricePerNight: 780,
        maxGuests: 10,
        bedrooms: 5,
        bathrooms: 4,
        size: 4800,
        rating: 4.8,
        reviews: 89,
        images: [
          "/assets/CountrysideEstates/Cotswolds/image1.jpg",
          "/assets/CountrysideEstates/Cotswolds/image2.jpg",
          "/assets/CountrysideEstates/Cotswolds/image3.jpg",
          "/assets/CountrysideEstates/Cotswolds/image4.jpg",
        ],
      },
      {
        id: "provence",
        name: "Provence",
        country: "France",
        shortDescription:
          "Elegant estates surrounded by lavender fields and vineyards.",
        description:
          "Discover the enchanting beauty of Provence in this magnificent 18th-century estate. Set amidst lavender fields, olive groves, and vineyards, this authentic mas (Provençal farmhouse) has been lovingly restored to combine rustic charm with modern luxury. The property features stone walls, terracotta tiles, and antique furniture, alongside a fully equipped modern kitchen and updated bathrooms. Outside, enjoy the large swimming pool, shaded terraces, and beautifully landscaped gardens with Mediterranean plants and herbs. The estate includes a boules court, outdoor dining areas, and a summer kitchen perfect for enjoying the region's culinary delights. Located near charming villages with weekly markets, world-class restaurants, and historic sites, this property offers an authentic French countryside experience with all the comforts of a luxury retreat.",
        pricePerNight: 920,
        maxGuests: 14,
        bedrooms: 7,
        bathrooms: 6,
        size: 6200,
        rating: 4.9,
        reviews: 76,
        images: [
          "/assets/CountrysideEstates/Provence/image1.jpg",
          "/assets/CountrysideEstates/Provence/image2.jpg",
          "/assets/CountrysideEstates/Provence/image3.jpg",
          "/assets/CountrysideEstates/Provence/image4.jpg",
        ],
      },
    ],
  },
];

// Helper function to get all locations across all home types
export const getAllLocations = () => {
  return homeTypes.flatMap((homeType) => homeType.locations);
};

// Helper function to get a specific location by ID
export const getLocationById = (locationId: string) => {
  for (const homeType of homeTypes) {
    const location = homeType.locations.find((loc) => loc.id === locationId);
    if (location) {
      return location;
    }
  }
  return null;
};

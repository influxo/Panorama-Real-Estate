import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  size: number;
  location: string;
  imageUrl: string;
  type: string;
}

export default function PropertyCard({
  id,
  title,
  price,
  size,
  location,
  imageUrl,
  type,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{location}</p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-secondary font-semibold">
            ${price.toLocaleString()}
          </span>
          <span className="text-gray-500">{size} m²</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-sm">
            {type}
          </span>
          <Link
            href={`/properties/${id}`}
            className="text-secondary hover:text-secondary-dark font-semibold text-sm"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

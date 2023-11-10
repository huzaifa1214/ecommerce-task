import Image from "next/image";
import { FC } from "react";

interface ProductRatingProps {
  rating: number;
}

const ProductRating: FC<ProductRatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-[14px] mt-8 mb-6">
      <div className="flex gap-2">
        <Image
          alt="star"
          src={`/img/${rating > 0 ? "star-filled" : "star"}.svg`}
          height={24}
          width={24}
        />
        <Image
          alt="star"
          src={`/img/${rating >= 2 ? "star-filled" : "star"}.svg`}
          height={24}
          width={24}
        />
        <Image
          alt="star"
          src={`/img/${rating >= 3 ? "star-filled" : "star"}.svg`}
          height={24}
          width={24}
        />
        <Image
          alt="star"
          src={`/img/${rating >= 4 ? "star-filled" : "star"}.svg`}
          height={24}
          width={24}
        />
        <Image
          alt="star"
          src={`/img/${rating == 5 ? "star-filled" : "star"}.svg`}
          height={24}
          width={24}
        />
      </div>
      <p className="text-sm text-veryDarkGray">(250) Ratings</p>
    </div>
  );
};

export default ProductRating;

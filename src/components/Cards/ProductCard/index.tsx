import { Product } from "@/types/Product";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  const { images, title, brand, price } = product;

  return (
    <div className="flex flex-col pr-10">
      <div className="relative h-70 w-full">
        <Image
          alt="product-img"
          src={images[0]}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex justify-between items-start mt-2">
        <div className="flex flex-col gap-2">
          <p className="text-base">{title}</p>
          <p className="text-sm text-darkGray">{brand}</p>
          <p className="text-base">${price}</p>
        </div>
        <Image
          alt="product-img"
          src={"/img/wishlist.svg"}
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default ProductCard;

import { FC, useState } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import ProductCoupon from "@/components/ProductCoupon";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductRating from "@/components/ProductRating";
import { Product } from "@/types/Product";
import {
  Tabs,
  responsive,
} from "@/containers/product-page/item-section/constants";

interface ItemSectionProps {
  product: Product | undefined;
}

const ItemSection: FC<ItemSectionProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeTabHandler = ({ num }: { num: number }) => {
    setActiveTab(num);
  };

  return (
    <>
      {product ? (
        <div className="container mx-auto my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px"
            >
              {product.images.map((image, index) => (
                <div className="relative h-98 md:h-full w-full" key={index}>
                  <Image
                    alt="product-img"
                    src={image}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ))}
            </Carousel>
            <div className="flex flex-col">
              <p className="text-3xl font-semibold">{product.title}</p>
              <p className="text-xl text-darkGray font-semibold">
                {product.brand}
              </p>
              <ProductRating rating={product.rating} />
              <p className="text-4xl font-bold">${product.price}</p>
              <hr className="h-[1px] my-6 text-lightGrayish" />
              <div className="mb-10">
                <div className="flex flex-col max-w-[205px]">
                  <p className="font-semibold">Delivery Details</p>
                  <p className="font-medium text-darkGray">
                    Check estimated delivery date/pickup option.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mb-[50px]">
                <p className="text-xl font-semibold">Quantity:</p>
                <div className="border-primary border-[1px] rounded h-[30px] flex gap-2">
                  <Image
                    alt="minus"
                    src={"/img/small-minus.svg"}
                    width={24}
                    height={24}
                    onClick={() => {
                      if (quantity == 0) return;
                      setQuantity(quantity - 1);
                    }}
                    className="cursor-pointer"
                  />
                  <div className="w-8">
                    <input
                      type="text"
                      className="text-center w-full border-0 focus:border-0 p-0 h-full"
                      value={quantity}
                    />
                  </div>
                  <Image
                    alt="minus"
                    src={"/img/small-plus.svg"}
                    width={24}
                    height={24}
                    onClick={() => setQuantity(quantity + 1)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <ProductCoupon />
              <div className="flex flex-col md:flex-row gap-6 mt-10">
                <PrimaryButton
                  buttonText="Add to bag"
                  iconPath="/img/bag-white.svg"
                  className="w-full md:w-80 text-white"
                />
                <PrimaryButton
                  buttonText="Add To Wishlist"
                  iconPath="/img/wishlist.svg"
                  className="bg-white w-full md:w-60 text-primary border-primary border-2"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 px-4 py-2 bg-lightGray rounded-xl mt-16">
            {Tabs.map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer px-[18px] py-2 rounded-lg ${
                  activeTab == index ? "text-white bg-primary" : "text-darkGray"
                }`}
                onClick={() => activeTabHandler({ num: index })}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="mt-6">
            {activeTab == 0 && (
              <div className="text-darkGray font-medium">
                {product.description}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ItemSection;

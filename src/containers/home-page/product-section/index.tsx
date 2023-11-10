"use client";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/app/api/products";
import { Product } from "@/types/Product";
import ProductCard from "@/components/Cards/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@/containers/home-page/product-section/constants";

const ProductSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllProductsHandler = async () => {
    try {
      setLoading(true);
      const { data } = await getAllProducts();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  useEffect(() => {
    getAllProductsHandler();
  }, []);

  return (
    <div className="container mx-auto p-6 mb-12">
      <p className="text-3.5xl font-semibold mb-5">New Arrivals</p>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="text-4xl font-medium text-darkGray">Loading...</span>
        </div>
      ) : (
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default ProductSection;

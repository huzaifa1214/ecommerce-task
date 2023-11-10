"use client";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/app/api/products";
import { Product } from "@/types/Product";
import ProductCard from "@/components/Cards/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@/containers/home-page/product-section/constants";
import Link from "next/link";
import Loading from "@/components/Loading";

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
        <Loading className="h-60" />
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
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default ProductSection;

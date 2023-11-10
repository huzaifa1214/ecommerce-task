"use client";
import { getProductById } from "@/app/api/products";
import Loading from "@/components/Loading";
import ItemSection from "@/containers/product-page/item-section";
import { Product } from "@/types/Product";
import { FC, useEffect, useState } from "react";

interface ProductProps {
  params: { id: string };
}

const Product: FC<ProductProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const getProductByIdHandler = async ({ id }: { id: string }) => {
    try {
      setLoading(true);
      const { data } = await getProductById({ id });
      setProduct(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  useEffect(() => {
    if (!params.id) return;
    getProductByIdHandler({ id: params.id });
  }, [params]);

  return (
    <main>
      {!loading ? (
        <ItemSection product={product} />
      ) : (
        <Loading className="h-[48rem]" />
      )}
    </main>
  );
};

export default Product;

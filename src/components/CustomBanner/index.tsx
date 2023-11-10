import React from "react";
import Link from "next/link";

const CustomBanner = () => {
  return (
    <div className="min-h-[50px] bg-gray flex items-center">
      <div className="container mx-auto flex justify-center">
        <p className="text-sm">
          We are currently experiencing local customs clearance delays. For the
          latest updates, please check your order status{" "}
          <Link href="#" className="text-primary underline">
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CustomBanner;

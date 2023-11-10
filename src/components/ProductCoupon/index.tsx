const ProductCoupon = () => {
  return (
    <div className="flex justify-between items-center p-[10px] md:p-4 rounded-lg border-primary border-[1px] w-full max-w-[390px]">
      <div className="flex flex-col max-w-[229px]">
        <p className="font-medium mb-1">
          Get upto 30% Off on order value above $100
        </p>
        <p className="text-primary text-sm">Terms & Conditions</p>
      </div>
      <div className="flex flex-col p-[14px] rounded bg-lightGray">
        <p className="text-darkGray">Use Code</p>
        <p className="">ORDER100</p>
      </div>
    </div>
  );
};

export default ProductCoupon;

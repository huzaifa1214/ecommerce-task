import React from "react";

const Loading = ({ className }: { className: string }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <span className="text-4xl font-medium text-darkGray">Loading...</span>
    </div>
  );
};

export default Loading;

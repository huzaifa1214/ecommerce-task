import Image from "next/image";
import { FC } from "react";

interface PrimaryButtonProps {
  buttonText: string;
  buttonWidth?: string;
  bgColor?: string;
  iconPath?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  buttonText,
  buttonWidth = "44",
  bgColor = "bg-primary",
  iconPath = "",
  onClick,
  type,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center gap-2 rounded-lg text-white py-1 sm:py-2 md:py-3 ${bgColor} w-36 md:w-${buttonWidth} ${className}`}
    >
      {iconPath && (
        <Image alt="button-icon" src={iconPath} height={24} width={24} />
      )}
      {buttonText}
    </button>
  );
};

export default PrimaryButton;

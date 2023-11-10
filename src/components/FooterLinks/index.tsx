import { FC } from "react";
import Link from "next/link";

interface FooterLinksProps {
  heading: string;
  items: string[];
}

const FooterLinks: FC<FooterLinksProps> = ({ heading, items }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white mb-1">{heading}</p>
      {items.map((item: string, index: number) => (
        <Link href="#" key={index} className="text-veryDarkGray">
          {item}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;

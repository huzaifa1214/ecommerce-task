import FooterLinks from "@/components/FooterLinks";
import Image from "next/image";
import { FooterItems } from "@/components/Footer/constants";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto flex flex-wrap justify-center lg:justify-between px-8 md:px-16 py-16">
        <div className="flex gap-8 md:gap-16">
          {FooterItems.map((linkItem, index) => (
            <FooterLinks
              key={index}
              heading={linkItem.heading}
              items={linkItem.items}
            />
          ))}
        </div>
        <div className="flex flex-col mt-8 md:mt-4 items-center lg:items-end">
          <Image
            alt="social"
            src="/img/social_logos.svg"
            width={200}
            height={38}
          />
          <div className="flex gap-2 mt-6">
            <Image
              alt="social"
              src="/img/location.svg"
              width={24}
              height={24}
            />
            <p className="text-white">United States</p>
          </div>
          <p className="text-veryDarkGray text-sm md:text-base mt-2">
            © 2021 | Cora Leviene All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

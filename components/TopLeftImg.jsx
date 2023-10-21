import Image from "next/image";
import nextConfig from "../next.config";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge w-[200px] xl:w-[400px] opacity-50">
      <Image
        src={`${nextConfig.basePath}/top-left-img.png`}
        width={400}
        height={400}
        alt=""
      />
    </div>
  );
};

export default TopLeftImg;

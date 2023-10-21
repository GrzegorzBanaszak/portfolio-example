import Image from "next/image";
import nextConfig from "../next.config";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 w-[200px] xl:w-[260px]">
      <Image
        src={`${nextConfig.basePath}/bulb.png`}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;

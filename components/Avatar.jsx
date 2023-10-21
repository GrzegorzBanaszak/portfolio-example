import Image from "next/image";
import nextConfig from "../next.config";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={`${nextConfig.basePath}/avatar.png`}
        width={737}
        height={678}
        alt="Avatar"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;

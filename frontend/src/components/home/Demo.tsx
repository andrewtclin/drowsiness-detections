import { FC } from "react";
import Image from "next/image";

const Demo: FC = ({}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-0 gap-x-0 sm:gap-x-6">
      <Image
        src="/images/awake.png"
        alt="awake_demo"
        width={300}
        height={300}
        className="object-contain"
      />
      <Image
        src="/images/drowsy.png"
        alt="drowsy_demo"
        width={300}
        height={300}
        className="object-contain"
      />
    </div>
  );
};

export default Demo;

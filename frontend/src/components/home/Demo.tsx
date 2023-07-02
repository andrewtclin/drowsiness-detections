import { FC } from "react";

const Demo: FC = ({}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-0 gap-x-0 sm:gap-x-6">
      {/* eslint-disable-next-line */}
      <img
        src="/images/awake.png"
        alt="awake_demo"
        className="object-contain w-52 sm:w-72 h-auto"
      />
      {/* eslint-disable-next-line */}
      <img
        src="/images/drowsy.png"
        alt="drowsy_demo"
        className="object-contain w-52 sm:w-72 h-auto"
      />
    </div>
  );
};

export default Demo;

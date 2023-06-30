import { FC } from "react";
import { BsGithub } from "react-icons/bs";

const Instructions: FC = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center mb-6">
        <p className="text-sm sm:text-base">
          This model is trained based on YOLOv5.
        </p>
        <p className="flex justify-center items-center pt-2 text-sm sm:text-base">
          Click to view&nbsp;
          <a
            className="underline hover:font-medium hover:text-blue-700"
            href="https://github.com/andrewtclin/drowsiness-detections/blob/master/backend/core/model/drowsiness_detection.ipynb"
            target="_blank"
          >
            <span className="font-medium underline flex">
              custom trained model <BsGithub className="mt-1 ml-1 text-lg" />
            </span>
          </a>
        </p>
      </div>

      <p className="text-sm sm:text-base">
        This demo only showcases{" "}
        <span className="font-medium underline">detections by YOLOv5.</span>
      </p>
    </div>
  );
};

export default Instructions;

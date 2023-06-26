import { FC } from "react";

import { BsGithub } from "react-icons/bs";

const Instructions: FC = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-6">
        <p>This model is trained based on YOLOv5.</p>
        <p className="flex justify-center items-center pt-2">
          Click here to view&nbsp;
          <span className="font-medium underline">
            custom trained model
          </span>:{" "}
          <a
            className="underline hover:font-medium hover:text-blue-700"
            href="https://github.com/andrewtclin/drowsiness-detection/blob/master/drowsiness_detection.ipynb"
            target="_blank"
          >
            <BsGithub className="ml-1 text-2xl animate-bounce hover:animate-none" />
          </a>
        </p>
      </div>

      <p>
        This demonstration showcases{" "}
        <span className="font-medium underline">detections by YOLOv5</span>
      </p>
    </div>
  );
};

export default Instructions;

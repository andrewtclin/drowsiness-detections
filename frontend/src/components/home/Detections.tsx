"use client";
import { FC, useEffect, useState } from "react";

import { Button, Modal, Input, Upload } from "antd";
import { AiOutlineUpload } from "react-icons/ai";

const Detections: FC = ({}) => {
  const [mode, setMode] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  console.log(imageUrl);

  const selectMode = (selectedMode: string): void => {
    setMode(selectedMode);
  };

  useEffect(() => {
    if (mode === "image") {
      Modal.info({
        title: "Image Detection",
        okType: "default",
        onCancel: () => {
          setMode("");
          setImageUrl("");
        },
        onOk: () => {
          setMode("");
          setImageUrl("");
        },
        okText: "Exit",
        content: (
          <div className="grid grid-cols-1 gap-y-4">
            <p>
              Input <span className="font-medium">image URL</span>{" "}
              <span className="underline">OR</span>{" "}
              <span className="font-medium">upload an image</span>
            </p>
            <Input
              placeholder="Image URL"
              onChange={(e) =>
                setImageUrl((e.target as HTMLInputElement).value)
              }
            />
            <Upload>
              <Button icon={<AiOutlineUpload />}>Upload</Button>
            </Upload>
            <Button type="default" disabled={imageUrl === "" ? true : false}>
              Detect
            </Button>
          </div>
        ),
      });
    } else if (mode === "real-time") {
      Modal.info({
        title: "Real-Time Detection",
        okType: "default",
        onCancel: () => setMode(""),
        onOk: () => setMode(""),
        okText: "Exit",
      });
    }
  }, [mode]);

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="pb-2">Let&apos;s make a detection</p>
      <div className="grid grid-cols-2 gap-x-4">
        <Button className="text-white" onClick={() => selectMode("image")}>
          Image
        </Button>
        <Button className="text-white" onClick={() => selectMode("real-time")}>
          Real-Time
        </Button>
      </div>
    </div>
  );
};

export default Detections;

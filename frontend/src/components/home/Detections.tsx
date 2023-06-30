"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { detectImage } from "@/apis/apisConfig";

import type { UploadProps } from "antd";
import { Button, Modal, Input, Upload, Spin } from "antd";
import { AiOutlineUpload } from "react-icons/ai";

const Detections: FC = ({}) => {
  //#region ------ Variables ------
  const [mode, setMode] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<object>({});
  const [detectedImage, setDetectedImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //#endregion

  //#region ------ Functions ------
  const selectMode = (selectedMode: string): void => {
    setMode(selectedMode);
  };

  const handleModalClose = () => {
    setMode("");
    setImageUrl("");
    setUploadedFile({});
  };

  const onImageDetect = async () => {
    setIsLoading(true);
    if (imageUrl) {
      const detectedImage = await detectImage(imageUrl);
      setDetectedImage(detectedImage);
    }
    if (Object.keys(uploadedFile).length) {
      const detectedImage = await detectImage(uploadedFile);
      setDetectedImage(detectedImage);
    }
    setIsLoading(false);
  };
  //#endregion

  //#region ------ Props Config ------
  const imageUploadProps: UploadProps = {
    // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    accept: "image/*",
    beforeUpload(file) {
      setUploadedFile(file);
      setImageUrl("");
    },
    maxCount: 1,
    onRemove() {
      setUploadedFile({});
    },
  };

  const imageDetectionModal: JSX.Element = (
    <div className="grid grid-cols-1 gap-y-4">
      <p>
        Input <span className="font-medium">image URL</span>{" "}
        <span className="underline">OR</span>{" "}
        <span className="font-medium">upload an image</span>
      </p>
      <Input
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl((e.target as HTMLInputElement).value)}
        disabled={Object.keys(uploadedFile)?.length ? true : false}
      />
      <Upload {...imageUploadProps}>
        <Button icon={<AiOutlineUpload />} disabled={imageUrl ? true : false}>
          Upload
        </Button>
      </Upload>
      <Button
        type="default"
        disabled={
          imageUrl === "" && !Object.keys(uploadedFile).length ? true : false
        }
        onClick={onImageDetect}
      >
        Detect
      </Button>
    </div>
  );

  //#endregion

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-medium pb-2">Let&apos;s make a detection</p>
      <div className="grid grid-cols-2 gap-x-4">
        <Button onClick={() => selectMode("image")}>Image</Button>
        <Button onClick={() => selectMode("real-time")}>Real-Time</Button>
      </div>

      <Modal
        title={mode === "image" ? "Image Detections" : "Real-Time Detections"}
        open={!mode ? false : true}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        okText="Exit"
        footer={[
          <Button
            key={"Exit"}
            onClick={handleModalClose}
            disabled={isLoading ? true : false}
          >
            Exit
          </Button>,
        ]}
        maskClosable={false}
      >
        <Spin spinning={isLoading}>{imageDetectionModal}</Spin>
      </Modal>

      <Modal
        zIndex={999999}
        title="Image Detections"
        open={!detectedImage ? false : true}
        onOk={() => setDetectedImage("")}
        onCancel={() => setDetectedImage("")}
        okText="Exit"
        footer={[
          <Button key={"Exit"} onClick={() => setDetectedImage("")}>
            Exit
          </Button>,
        ]}
        maskClosable={false}
      >
        {/* eslint-disable-next-line */}
        <img
          src={`${detectedImage}?${Date.now()}`}
          alt="Detected Image"
          className="object-contain"
          width={500}
          height={"auto"}
        />
      </Modal>
    </div>
  );
};

export default Detections;

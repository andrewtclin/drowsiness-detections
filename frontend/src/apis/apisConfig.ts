import axios from "axios";

// const serverDomain: string =
//   "http://" +
//   process.env.NEXT_PUBLIC_SERVER_HOST +
//   ":" +
//   process.env.NEXT_PUBLIC_SERVER_PORT;

const serverDomain: string =
  window.location.protocol + "//" + window.location.host;

const api = axios.create({
  baseURL: serverDomain,
});

//#region ------ ML Models API ------
const mlDetectApi: string = "/mlapi/v1/mlmodel/detect";
const mlRealTimeDetectApi: string = "/mlapi/v1/mlmodel/real-time-detect";

interface MLModelResponse {
  result: string;
}

export const detectImage = async (image: any): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await api.post<MLModelResponse>(mlDetectApi, formData);
    return response.data.result;
  } catch (error) {
    console.error(error);
    return "";
  }
};

export const realTimeDetect = async (): Promise<string> => {
  try {
    const response = await api.get<MLModelResponse>(mlRealTimeDetectApi);
    return response.data.result;
  } catch (error) {
    console.error(error);
    return "";
  }
};

//#endregion

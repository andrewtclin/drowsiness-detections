import axios from "axios";

let serverDomain: string =
  "http://" + process.env.SERVER_HOST + ":" + process.env.SERVER_PORT;

const api = axios.create({
  baseURL: serverDomain,
});

//#region ------ ML Models API ------
const mlApi: string = "/mlapi/v1/mlmodel";

interface MLModelResponse {
  result: string[];
}

export const getMLModels = async (): Promise<string[]> => {
  try {
    const response = await api.get<MLModelResponse>(mlApi);
    return response.data.result;
  } catch (error) {
    console.error(error);
    return [];
  }
};

//#endregion

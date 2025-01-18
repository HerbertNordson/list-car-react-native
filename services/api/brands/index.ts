import { api } from "..";

const BaseUrl = "https://parallelum.com.br/fipe/api/v1/carros/marcas";

export const BrandsApi = () => {
  async function getAll() {
    try {
      const res = await api.get(`${BaseUrl}`);

      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function getFromId(id: string) {
    try {
      const res = await api.get(`${BaseUrl}/${id}/modelos`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return { getAll, getFromId };
};

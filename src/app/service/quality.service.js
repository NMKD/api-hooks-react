import httpServer from "./http.service";
import config from "../config.json";
const urlQuality = `${config.apiEndPoint}/quality/`;

export const qualityService = {
  put: async (id, obj) => {
    try {
      return await httpServer.put(`${urlQuality}${id}`, obj);
    } catch (e) {
      console.error("Expected error: ", e.message);
      return e.message;
    }
  },
  get: async (id) => {
    try {
      return await httpServer.get(`${urlQuality}${id}`);
    } catch (e) {
      console.error("Expected error: ", e.message);
      return e.message;
    }
  },
  post: async (content) => {
    try {
      return await httpServer.post(`${urlQuality}`, content);
    } catch (e) {
      console.error("Expected error: ", e.message);
      return e.message;
    }
  },
  delete: async (id) => {
    try {
      return await httpServer.delete(`${urlQuality}${id}`);
    } catch (e) {
      console.error("Expected error: ", e.message);
      return e.message;
    }
  },
  fetchAll: async () => {
    try {
      return await httpServer.get(urlQuality);
    } catch (e) {
      console.error("Expected error: ", e.message);
      return e.message;
    }
  },
};

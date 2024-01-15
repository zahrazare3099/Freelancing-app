import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
};

export default http;

// check all requst
app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);
// check all response
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    // handle (access and refresh) token
    if (err?.response.status === 401 && !originalConfig?._retry) {
      const originalConfig_retry = true;
      try {
        // developer send req based on Error
        const { data } = await axios.get(`${BASE_URL}/refresh-token`, {
          withCredentials: true,
        });
        // if recive data from db => repeat user latest req
        if (data) {
          // repeat user req based on err.config
          return app(originalConfig);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

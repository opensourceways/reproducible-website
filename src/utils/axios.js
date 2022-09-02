import axios from 'axios';


// `${process.env.BACKEND_URL}/api/`
const server = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://reproducible-builds.openeuler.org/api/'
      : '/api/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

// 请求拦截器
server.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
server.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//方法定义
export default {
  post(url, data) {
    return new Promise((resolve, reject) => {
      server({
        method: 'post',
        url,
        data,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  get(url, data) {
    return new Promise((resolve, reject) => {
      server({
        method: 'get',
        url,
        params: data,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  put(url, data) {
    return new Promise((resolve, reject) => {
      server({
        method: 'put',
        url,
        data,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  delete(url, data) {
    return new Promise((resolve, reject) => {
      server({
        method: 'delete',
        url,
        data,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

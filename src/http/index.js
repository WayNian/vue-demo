/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from "axios";
import QS from "qs";

// 环境的切换
if (process.env.NODE_ENV == "development") {
  // axios.defaults.baseURL = "/api/";
  // axios.defaults.baseURL = "http://test.medciot.com:1888/api/"; // 测试
  // axios.defaults.baseURL = "http://test.medciot.com:1888/api/"; // 测试
  axios.defaults.baseURL = "http://192.168.4.31/api/";
  // axios.defaults.baseURL = "http://192.168.81.61:8080/api/";
  // axios.defaults.baseURL = "http://192.168.4.9/api/";
} else if (process.env.NODE_ENV == "debug") {
  axios.defaults.baseURL = "http://192.168.81.235:8848/api/";
} else if (process.env.NODE_ENV == "production") {
  axios.defaults.baseURL = "/api/";
}

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return Promise.reject(response.data);
  },
  // 服务器状态码不是200的情况
  error => {
    return Promise.reject(error.response.data);
  }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const post = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(params))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {
  post,
  get
};
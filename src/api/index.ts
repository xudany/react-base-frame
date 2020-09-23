import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { paramsSerializer } from '../utils/index';
import codeMessages from './codeMessages';
import config from '../config';

export interface HttpSameResponse<T = any> {
  // http状态码
  code: any;
  // 对这个状态的解析说明
  msg: string;
  // 附加内容
  data: T;
}

export interface HttpAxiosParams extends AxiosRequestConfig {
  // 成功信息
  successMsg?: string;
  // 成功回调
  successCallback?: (data: any) => void;

  // 错误信息是否提示
  errorAlert?: boolean;
  // 失败信息
  errorMsg?: string;
  // 失败回调
  errorCallback?: (data: HttpSameResponse) => void;
}

class HttpRequest {
  baseURL = '';

  constructor(url = config.baseURL) {
    this.baseURL = url;
  }

  paramsSerializer = (params, arrayFormat = 'repeat') => {
    return paramsSerializer(params, arrayFormat);
  };

  getInsideConfig({ headers, ...options }: HttpAxiosParams): HttpAxiosParams {
    const $config: HttpAxiosParams = {
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        ...headers,
      },
      errorAlert: true,
      paramsSerializer: this.paramsSerializer,
    };
    return Object.assign($config, options);
  }

  public interceptors = (instance: AxiosInstance, options: HttpAxiosParams) => {
    const { successMsg, successCallback, errorAlert, errorMsg, errorCallback } = options;
    let response = {
      data: {
        code: 500,
        msg: codeMessages[500],
        data: null,
      } as HttpSameResponse,
    };
    instance.interceptors.request.use(
      (requestConfig: AxiosRequestConfig) => {
        return requestConfig;
      },
      (e) => {
        return Promise.reject(e);
      }
    );

    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        const { data } = res;
        const resDef = {
          ...response.data,
          code: 200,
        };
        let $data = data || resDef;
        if (!('code' in $data)) {
          $data = {
            ...resDef,
            data,
          };
        }

        if ($data.code >= 200 && $data.code <= 299) {
          if (successMsg) {
            console.log(successMsg);
          }
          if (typeof successCallback === 'function') {
            successCallback($data.data);
          }
        }
        return $data;
      },
      async (error: any) => {
        const errMsg = error.message;
        if (errMsg.includes('timeout')) {
          response.data = {
            code: 408,
            msg: codeMessages[408],
            data: null,
          };
        } else if (error.response) {
          response = error.response;
        }
        if (errorMsg) {
          response.data.msg = errorMsg;
        }
        if (typeof window !== 'undefined' && errorAlert && !errMsg.includes('401')) {
          console.log(response.data.msg);
        }
        if (typeof errorCallback === 'function') {
          errorCallback(response.data);
        }
        return Promise.resolve(response.data);
      }
    );
  };

  public http(options: HttpAxiosParams): Promise<HttpSameResponse> {
    const instance: AxiosInstance = axios.create();
    const $options = this.getInsideConfig(options);
    this.interceptors(instance, $options);
    return instance($options) as Promise<any>;
  }
}

export const $request = new HttpRequest();

export default $request;

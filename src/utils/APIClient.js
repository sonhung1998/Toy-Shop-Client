import axios from 'axios'
import Qs from 'qs'

let Axios = (headers = null, params = null) => {
    return axios.create({
        paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'repeat' }),
        baseURL: 'http://localhost:8080/api',
        headers
    });
}

export default class APIClient {
    request = async (method, path, headers = null, params = null, data) => {
        const response = await Axios({
            path,
            method,
            headers,
            params,
            data,

        })
        return response.data;
    }

    static GET = async (url, params = null) => {
        const { data } = await Axios(params).get(url, { params });
        return data;
    }

    static POST = async (url, values) => {
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
        }
        let data = null;
        try {
            const response = await Axios(headers).post(url, values);
            data = response.data;
        } catch (error) {
            console.log('Lỗi xảy ra:', error)
        }
        return data;
    }
    static DELETE = async (url) => {
        const { data } = await Axios().delete(url);
        return data
    }
    static PUT = async (url, values) => {
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
        }
        const { data } = await Axios(headers).put(url, values);
        return data;
    }

}
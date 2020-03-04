import axios from 'axios'
import Qs from 'qs'
let Axios = axios.create({
    paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'repeat' }),
    baseURL: 'http://localhost:8080/api',
});
export default class APIClient {

    static GET = async (url) => {
        const {data} = await Axios.get(url);
        return data;
    }

}
import axios from 'axios'
import Qs from 'qs'
let Axios = axios.create({
    paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'repeat' }),
    baseURL: 'http://localhost:8080/api',
    headers:{
        "Access-Control-Allow-Origin": "*"
    }
});
export default class APIClient {

    static GET = async () => {
        const {data} = await Axios.get('/products');
        return data;
    }

}
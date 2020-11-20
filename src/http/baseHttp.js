import axios from 'axios'

axios.defaults.baseURL = 'https://api-hmugo-web.itheima.net/api/public/v1';

export function getMethod(url, query = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: query
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err);
        })
    })
}

export default axios;
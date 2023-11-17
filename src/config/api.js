import axios from "axios";
// import IP from "url.js"
import { IP } from "./url";

export const api = axios.create({
    baseURL: `${IP}`,
    // baseURL: 'http://localhost:3000/',
    timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
    headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json",
    },
});



api.interceptors.request.use((config) => {
    config.headers = {
        
        // Accept: "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
    };

    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});
api.interceptors.response.use(function(response) {
    // Trả về dữ liệu phản hồi
    // console.log('ay :', response)
    // localStorage.setItem('token', response.data.access_token)
    // taocock('login_token' , response.data.access_token,'36000');
        // console.log(localStorage.getItem('token'))

    return response;
}, function(error) {
    // Xử lý lỗi
    console.log('lỗi')
    return Promise.reject(error);
});


export const get_doctor =()=>{

    return api.get('api/all-doctors')

}

export const post_detailDoctor = (id) => {
    let data = {
      id: id
    };
  
    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
  
    return api.post('api/get-info-doctor-by-id', data, config);
  }
  

export const get_chyenkhoa =()=>{

    return api.get('api/all-specializatio')

}



// export const apis = axios.create({
//     // baseURL: `${IP}`,
//     baseURL: 'http://192.168.0.102:3003',
//     timeout: 30000,
//     // headers: {'X-Custom-Header': 'foobar'}
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': "application/json",
//     },
// });

// export const aet =()=>{

//     return apis.get('')

// }

// aet()
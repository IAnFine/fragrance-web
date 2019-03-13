import config from './config';
import {notification} from 'antd';
import axios from 'axios';

export default class Service {
    static get businessService( ) {

        let service = axios.create({
            baseURL: `${config.development.service.url}`,
            headers: {'App-Version': '0.1.0'}
        })

        // 设置超时时间
        service.defaults.timeout = 60000;

        service.interceptors.response.use(function(response) {
            return response;
        }, function(error) {
            if (error === 'ECONNABORTED' || !error.response) {
                notification.error({
                    key: 'global error',
                    message: '很难过',
                    description: '服务器忙，请稍后再试'
                });
            }

            return Promise.reject(error);
        });

        return service;
    }
    
}
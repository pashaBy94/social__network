import axios from 'axios';
// import axios from './lib/axios.js'
import { Navigate } from 'react-router-dom';

class APIUS {
    constructor() {
        this.instance = axios.create({
            withCredentials: true,
            baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        });
    };
    updatePhoto(photo) {
        let formData = new FormData();
        formData.append('image', photo);
        return this.instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    };
    updateInfoProfile(info) {
        let json = JSON.stringify(info);
        return this.instance.put(`profile/`, json, {
            headers: {
                "Content-Type": "application/json",
            },
        })
    }
    setAuthentication() {
        return this.instance.get(`auth/me`).then(res => res.data)
    };
    setPageProfile(usId) {
        return this.instance.get(`profile/` + usId).then(res => res.data)
    };
    getStatus(usId) {
        return this.instance.get(`profile/status/` + usId).then(res => res.data)
    };
    setStatus(status) {
        return this.instance.put(`profile/status/`, { status: status }).then(res => res.data)
    };
    setUsersPageNumber(countUsersPage, numPage) {
        return this.instance.get(`users?count=${countUsersPage}&page=${numPage}`)
    };
    deleteFollowUser(id) {
        return this.instance.delete(`follow/` + id, { headers: { 'API-KEY': 'a3085c13-b7e2-4ffc-892a-9ba320b8602e' } })
    };
    addFollowUser(id) {
        return this.instance.post(`follow/` + id, {}, { headers: { 'API-KEY': 'a3085c13-b7e2-4ffc-892a-9ba320b8602e' } })
    };
    login(email, password, rememberMe, captcha) {
        return this.instance.post('auth/login', { email, password, rememberMe, captcha }, {})
    }
    logout() {
        return this.instance.delete('auth/login')
    };
    getCaptcha() {
        return this.instance.get(`security/get-captcha-url`)
    };
}
export const userAPI = new APIUS();

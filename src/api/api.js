import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "0fb3a3f1-90c7-4cbe-ab04-0efb40568aa0",
    },
});

export const usersAPI = {
    async getCurUsers(count, pageNumber) {
        const response = await instance.get(`users?count=${count}&page=${pageNumber}`);
        return response.data;
    },

    async processUnfollowing(id) {
        const response = await instance.delete(`follow/${id}`);
        return response.data;
    },

    async processFollowing(id) {
        const response = await instance.post(`follow/${id}`);
        return response.data;
    },
};

export const profileAPI = {
    async getCurUserProfile(id) {
        const response = await instance.get(`profile/${id}`);
        return response.data;
    },

    getProfileStatus(id) {
        return instance.get(`profile/status/${id}`);
    },

    updateProfileStatus(status) {
        return instance.put('profile/status', { status: status });
    },

    saveProfilePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        });
    },

    saveProfileChanges(formData) {
        return instance.put('profile', { ...formData });
    },
};

export const authAPI = {
    async getAuthUserProfile() {
        const response = await instance.get(`auth/me`);
        return response.data;
    },
    async login(email, password, rememberMe = false) {
        const response = await instance.post(`auth/login`, {
            email,
            password,
            rememberMe,
        });
        return response.data;
    },
    async logout() {
        const response = await instance.delete(`auth/login`);
        return response.data;
    },
};
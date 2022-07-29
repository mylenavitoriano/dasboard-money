import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://dashboard-money.vercel.app/api',
})
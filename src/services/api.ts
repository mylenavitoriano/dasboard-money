import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://dashboard-money.vercel.app/api',
})
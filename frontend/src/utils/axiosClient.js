import axios from "axios";

export const client = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_LARAVEL_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json", 
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});
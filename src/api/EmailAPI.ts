
import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function sendEmail(formData : {email: string}) {
    try {
        const url = '/emails/send-email'
        const {data} = await api.post(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}
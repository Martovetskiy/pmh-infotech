import axios from "axios";
import apiAddInfo from "../store/AdditionalInfoStore.ts";

export interface AdditionInfo {
    recipient: string,
    addressRecipient: string,
    destinationStation: string,
    numberVehicle: string
}

export const getAddInfoById = async (certId: number): Promise<AdditionInfo> => {
    try {
        const response = await apiAddInfo.get<AdditionInfo>(`/AdditionInfo/${certId}`);
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Ошибка при получении информации:', error.response?.data);
            throw new Error(`Ошибка при получении информации: ${error.message}`); // Переправляем ошибку
        } else {
            console.error('Неизвестная ошибка:', error);
            throw new Error('Неизвестная ошибка при получении информации'); // Переправляем ошибку
        }
    }
};

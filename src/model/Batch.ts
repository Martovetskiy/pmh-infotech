import axios from "axios";
import apiMainInfo from "../store/MainInfoStore.ts";

export interface Batch {
    id: number;
    positionNumber: number;
    meltNumber: number; //Primary
    chemicalCompositionGOST: string;
    technicalRequirementsGOST: string;
    profileStandardGOST: string;
    steelClass: string;
    profileSize: number;
    length: string;
    grade: string;
    totalPlaces: number;
    netWeight: number;
    grossWeight: number;
}

export const getBatchesById = async (orderId: number): Promise<Batch[]> => {
    try {
        const response = await apiMainInfo.get<Batch[]>(`Orders/${orderId}/batches`);
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Ошибка при получении партий:', error.response?.data);
            throw new Error(`Ошибка при получении партий: ${error.message}`); // Переправляем ошибку
        } else {
            console.error('Неизвестная ошибка:', error);
            throw new Error('Неизвестная ошибка при получении партий'); // Переправляем ошибку
        }
    }
};

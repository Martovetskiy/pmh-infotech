import apiMainInfo from "../store/MainInfoStore.ts";
import axios from "axios";

export interface Testing {
    id: number; // № п/п
    meltNumber: number; //Primary
    ultimateStrength: number; // Врем. сопротивл. (σB), Н/мм²
    yieldStrength: number; // Предел тек-ти (σT), Н/мм²
    strengthRatio: number; // Отношение врем. соп. к пределу тек-ти (σB/σT)
    elongation: number; // Относит. удл. (δ5), %
    maxElongation: number; // Полное относит. удл. при макс. нагрузке (δmax), %
    edgeArea: number; // Отн. площадь ребра (FR)
    bending: string; // Изгиб
}

export const getTestingById = async (orderId: number): Promise<Testing[]> => {
    try {
        const response = await apiMainInfo.get<Testing[]>(`Orders/${orderId}/testings`);
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Ошибка при получении тестов:', error.response?.data);
            throw new Error(`Ошибка при получении тестов: ${error.message}`); // Переправляем ошибку
        } else {
            console.error('Неизвестная ошибка:', error);
            throw new Error('Неизвестная ошибка при получении тестов'); // Переправляем ошибку
        }
    }
};
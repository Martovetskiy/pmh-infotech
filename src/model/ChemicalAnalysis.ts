import apiMainInfo from "../store/MainInfoStore.ts";
import axios from "axios";

export interface ChemicalAnalysis {
    id: number; // № п/п
    meltNumber: number; //Primary
    carbon: number; // C
    silicon: number; // Si
    manganese: number; // Mn
    phosphorus: number; // P
    sulfur: number; // S
    chromium: number; // Cr
    nickel: number; // Ni
    copper: number; // Cu
    molybdenum: number; // Mo
    vanadium: number; // V
    nitrogen: number; // N
    equivalentCarbon: number; // Ceq
}

export const getAnalyzesById = async (orderId: number): Promise<ChemicalAnalysis[]> => {
    try {
        const response = await apiMainInfo.get<ChemicalAnalysis[]>(`Orders/${orderId}/chemical-analyses`);
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Ошибка при получении анализы:', error.response?.data);
            throw new Error(`Ошибка при получении анализы: ${error.message}`);
        } else {
            console.error('Неизвестная ошибка:', error);
            throw new Error('Неизвестная ошибка при получении анализов');
        }
    }
};

import apiMainInfo from "../store/MainInfoStore.ts";
import axios from "axios";

export interface Product {
    id: number; // № п/п
    positionNumber: number; // № позиции
    meltNumber: number; //Primary
    chemicalCompositionGOST: string; // Требования к химическому составу
    technicalRequirementsGOST: string; // Технические требования
    profileStandardGOST: string; // Профильный стандарт
    steelClass: string; // Класс проката
    profileSize: number; // Размер профиля, мм
    length: string; // Длина, мм
    grade: string; // Сорт
    totalPlaces: number; // Количество мест
    netWeight: number; // Масса нетто, т
    grossWeight: number; // Масса брутто, т
}

export const getProductsById = async (orderId: number): Promise<Product[]> => {
    try {
        const response = await apiMainInfo.get<Product[]>(`Orders/${orderId}/products`);
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Ошибка при получении продуткы:', error.response?.data);
            throw new Error(`Ошибка при получении продукты: ${error.message}`); // Переправляем ошибку
        } else {
            console.error('Неизвестная ошибка:', error);
            throw new Error('Неизвестная ошибка при получении продкуты'); // Переправляем ошибку
        }
    }
};

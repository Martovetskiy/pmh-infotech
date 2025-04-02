import CertificateStore from "../store/CertificateStore.ts";
import axios from "axios";

export interface Certificate {
    certificateId: number; //use in parameter
    issueDate: Date; //primary
    productName: string;
    orderId: number;
    contractNumber: string;
    contractDate: Date;
    specificationNumber: string;
    netWeight: number;
    grossWeight: number;
    totalPlaces: number;
    packagingType: string;
}

export const getCertificateById = async (id: number): Promise<Certificate | null> => {
    try {
        const response = await CertificateStore.get<Certificate>(`/Certificates/${id}`);
        return response.data;
    } catch (error) {

        if (axios.isAxiosError(error)) {
            console.error('Ошибка при получении элемента:', error.response?.data);

        } else {
            console.error('Неизвестная ошибка:', error);
        }
        return null;
    }
};
import CertificateStore from "../store/CertificateStore.ts";
import axios from "axios";

export interface Certificate {
    certificateId: number;
    issueDate: Date;
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


export const getCertificateById = async (id: number): Promise<Certificate> => {
    try {
        const response = await CertificateStore.get<Certificate>(`Certificates/GetCertById/${id}`);
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Ошибка при получении элемента:', error.response?.data);
            throw new Error(`Ошибка при получении сертификата: ${error.message}`);
        } else {
            console.error('Неизвестная ошибка:', error);
            throw new Error('Неизвестная ошибка при получении сертификата');
        }
    }
};

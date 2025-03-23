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
import * as React from "react";
//import {useParams} from "react-router-dom";
import {Certificate} from "../model/Certificate.ts";
import CertificateContainer from "../components/CertificateContainer.tsx";
import TabController from "../components/TabController/TabController.tsx";

const ClientInfoPage: React.FC = () => {
    const testCertificate: Certificate = {
        certificateId: 4645,
        issueDate: new Date('2022-03-10'),
        productName: "Прокат арматурный для железобетонных конструкций. Технические условия",
        orderId: 40509631,
        contractNumber: "14.127163.221",
        contractDate: new Date('2022-01-26'),
        specificationNumber: "ЗП20189922",
        netWeight: 68.996,
        grossWeight: 69.164,
        totalPlaces: 21,
        packagingType: "Пакеты"
    };

    //const { uuid } = useParams()
    return (
        <>
            <CertificateContainer certificate={testCertificate}/>
            <TabController/>
        </>
    )
}

export default ClientInfoPage;
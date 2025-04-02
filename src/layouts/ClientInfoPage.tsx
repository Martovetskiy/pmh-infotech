import * as React from "react";
//import {useParams} from "react-router-dom";
import {Certificate} from "../model/Certificate.ts";
import CertificateContainer from "./CertificateContainer/CertificateContainer.tsx";
import {Tab, TabBar} from "../components/TabBar/TabBar.tsx";
import {TableRow, TableView} from "../components/TableView/TableView.tsx";
import {Batch} from "../model/Batch.ts";
import {useEffect, useState} from "react";
import {CompactList, CompactListItem} from "../components/CompactList/CompactList.tsx";
import AdditionalInfoContainer from "./AdditionInfoContainer/AdditionalInfoContainer.tsx";
import {AdditionInfo} from "../model/AdditionInfo.ts";
import {Footer} from "../components/Footer/Footer.tsx";
import {ChemicalAnalysis} from "../model/ChemicalAnalysis.ts";
import {Testing} from "../model/Testing.ts";
import {Spinner} from "../components/Spinner/Spinner.tsx";

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

    const testAddInfo: AdditionInfo = {
        recipient: "ИП Сергеева Лина Васильевна",
        addressRecipient: "214004, РФ, Смоленская область, Смоленск Г, БАГРАТИОНА, 7, 48, тел.8(919) 041-62-68",
        destinationStation: "Новосмоленская",
        numberVehicle: "55134100"
    }

    const testBatchs: Array<Batch> = [
        {
            id: 1,
            positionNumber: 2,
            meltNumber: 220184,
            chemicalCompositionGOST: "ГОСТ 34028-2016",
            technicalRequirementsGOST: "ГОСТ 34028-2016",
            profileStandardGOST: "ГОСТ 34028-2016",
            steelClass: "A500C",
            profileSize: 20,
            length: "МД 11700",
            grade: "1C",
            totalPlaces: 21,
            netWeight: 68.996,
            grossWeight: 69.164
        },
        {
            id: 1,
            positionNumber: 2,
            meltNumber: 220184,
            chemicalCompositionGOST: "ГОСТ 34028-2016",
            technicalRequirementsGOST: "ГОСТ 34028-2016",
            profileStandardGOST: "ГОСТ 34028-2016",
            steelClass: "A500C",
            profileSize: 20,
            length: "МД 11700",
            grade: "1C",
            totalPlaces: 21,
            netWeight: 68.996,
            grossWeight: 69.164
        },
    ];

    const testExp: ChemicalAnalysis[] = [
        {
            id: 1, // № п/п
            meltNumber: 2201846,//Primary
            carbon: 0.21, // C
            silicon: 0.16, // Si
            manganese: 0.74, // Mn
            phosphorus: 0.017, // P
            sulfur: 0.032, // S
            chromium: 0.12, // Cr
            nickel: 0.11, // Ni
            copper: 0.19, // Cu
            molybdenum: 0.011, // Mo
            vanadium: 0.002, // V
            nitrogen: 0.010, // N
            equivalentCarbon: 0.38 // Ceq
        }
    ]

    const testTesting: Testing[] = [
        {
            id: 1, // № п/п
            meltNumber: 2201846, //Primary
            ultimateStrength: 695, // Врем. сопротивл. (σB), Н/мм²
            yieldStrength: 594, // Предел тек-ти (σT), Н/мм²
            strengthRatio: 1.17, // Отношение врем. соп. к пределу тек-ти (σB/σT)
            elongation: 21.5,// Относит. удл. (δ5), %
            maxElongation: 10.2, // Полное относит. удл. при макс. нагрузке (δmax), %
            edgeArea: 0.076, // Отн. площадь ребра (FR)
            bending: "выд." // Изгиб
        }
    ]

    const [isSmall, setIsSmall] = useState(window.innerWidth < 1300);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth < 1300)
        }

        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
            clearTimeout(timer)
        }
    }, []);

    const [batchPage, setBatchPage] = useState(1)

    const handleBatchPagePlus = ()=>{
        setBatchPage(batchPage + 1)
    }

    const handleBatchPageMinus = ()=>{
        setBatchPage(batchPage - 1)
    }

    const [expPage, setExpPage] = useState(1)

    const handleExpPagePlus = ()=>{
        setExpPage(expPage + 1)
    }

    const handleExpPageMinus = ()=>{
        setExpPage(expPage - 1)
    }

    const [testPage, setTestPage] = useState(1)

    const handleTestPagePlus = ()=>{
        setTestPage(testPage + 1)
    }

    const handleTestPageMinus = ()=>{
        setTestPage(testPage - 1)
    }

    //const { uuid } = useParams()

    const tabs: Array<Tab> = (isSmall) ? [
        {
            index: 0,
            label: "Партии",
            content: (<CompactList currentPage={batchPage} totalPages = {testBatchs.length} onNextPage={handleBatchPagePlus} onPrevPage={handleBatchPageMinus}>
                <>
                    <CompactListItem label={"№ п/п"}>{batchPage}</CompactListItem>
                    <CompactListItem label={"№ Позиции"}>{testBatchs[batchPage-1].positionNumber}</CompactListItem>
                    <CompactListItem label={"Номер плавки"}>{testBatchs[batchPage-1].meltNumber}</CompactListItem>
                    <CompactListItem label={"Требования к хиимческому составу"}>{testBatchs[batchPage-1].chemicalCompositionGOST}</CompactListItem>
                    <CompactListItem label={"Технические требования"}>{testBatchs[batchPage-1].technicalRequirementsGOST}</CompactListItem>
                    <CompactListItem label={"Профильный стандарт"}>{testBatchs[batchPage-1].profileStandardGOST}</CompactListItem>
                    <CompactListItem label={"Класс проката"}>{testBatchs[batchPage-1].steelClass}</CompactListItem>
                    <CompactListItem label={"Размер профиля, мм"}>{testBatchs[batchPage-1].profileSize}</CompactListItem>
                    <CompactListItem label={"Длинна, мм"}>{testBatchs[batchPage-1].length}</CompactListItem>
                    <CompactListItem label={"Сорт"}>{testBatchs[batchPage-1].grade}</CompactListItem>
                    <CompactListItem label={"Количество мест"}>{testBatchs[batchPage-1].totalPlaces}</CompactListItem>
                    <CompactListItem label={"Масса нетто, т"}>{testBatchs[batchPage-1].netWeight}</CompactListItem>
                    <CompactListItem label={"Масса брутто, т"}>{testBatchs[batchPage-1].grossWeight}</CompactListItem>
                </>
            </CompactList>)
        },
        {
            index: 1,
            label: "Хим.анализы",
            content: (<CompactList currentPage={expPage} totalPages = {testExp.length} onNextPage={handleExpPagePlus} onPrevPage={handleExpPageMinus}>
                <>
                    <CompactListItem label={"№ п/п"}>{expPage}</CompactListItem>
                    <CompactListItem label={"Номер плавки"}>{testExp[expPage-1].meltNumber}</CompactListItem>
                    <CompactListItem label={"С"}>{testExp[expPage-1].carbon}</CompactListItem>
                    <CompactListItem label={"Si"}>{testExp[expPage-1].silicon}</CompactListItem>
                    <CompactListItem label={"Mn"}>{testExp[expPage-1].manganese}</CompactListItem>
                    <CompactListItem label={"P"}>{testExp[expPage-1].phosphorus}</CompactListItem>
                    <CompactListItem label={"S"}>{testExp[expPage-1].sulfur}</CompactListItem>
                    <CompactListItem label={"Cr"}>{testExp[expPage-1].chromium}</CompactListItem>
                    <CompactListItem label={"Ni"}>{testExp[expPage-1].nickel}</CompactListItem>
                    <CompactListItem label={"Cu"}>{testExp[expPage-1].copper}</CompactListItem>
                    <CompactListItem label={"Mo"}>{testExp[expPage-1].molybdenum}</CompactListItem>
                    <CompactListItem label={"V"}>{testExp[expPage-1].vanadium}</CompactListItem>
                    <CompactListItem label={"N"}>{testExp[expPage-1].nitrogen}</CompactListItem>
                    <CompactListItem label={"Ceq"}>{testExp[expPage-1].equivalentCarbon}</CompactListItem>
                </>
            </CompactList>)
        },
        {
            index: 2,
            label: "испытания",
            content: (<CompactList currentPage={testPage} totalPages = {testTesting.length} onNextPage={handleTestPagePlus} onPrevPage={handleTestPageMinus}>
                <>
                    <CompactListItem label={"№ п/п"}>{testPage}</CompactListItem>
                    <CompactListItem label={"Номер плавки"}>{testTesting[testPage-1].meltNumber}</CompactListItem>
                    <CompactListItem label={"Врем. сопротивл. (σB), Н/мм2"}>{testTesting[testPage-1].ultimateStrength}</CompactListItem>
                    <CompactListItem label={"Предел тек-ти (σT), Н/мм2"}>{testTesting[testPage-1].yieldStrength}</CompactListItem>
                    <CompactListItem label={"Отношение врем. соп. к пределу тек-ти (σB/σT)"}>{testTesting[testPage-1].strengthRatio}</CompactListItem>
                    <CompactListItem label={"Относит. удл. (δ5), %"}>{testTesting[testPage-1].elongation}</CompactListItem>
                    <CompactListItem label={"Полное относит. удл. при макс. нагрузке (δmax), %"}>{testTesting[testPage-1].maxElongation}</CompactListItem>
                    <CompactListItem label={"Отн. площадь ребра (FR)"}>{testTesting[testPage-1].edgeArea}</CompactListItem>
                    <CompactListItem label={"Изгиб"}>{testTesting[testPage-1].bending}</CompactListItem>
                </>
            </CompactList>)
        },
        {
            index: 3,
            label: "продукция",
            content: (<CompactList currentPage={batchPage} totalPages = {testBatchs.length} onNextPage={handleBatchPagePlus} onPrevPage={handleBatchPageMinus}>
                <>
                    <CompactListItem label={"№ п/п"}><a href="">{batchPage}</a></CompactListItem>
                    <CompactListItem label={"№ Позиции"}>{testBatchs[batchPage-1].positionNumber}</CompactListItem>
                    <CompactListItem label={"Номер плавки"}>{testBatchs[batchPage-1].meltNumber}</CompactListItem>
                    <CompactListItem label={"Требования к хиимческому составу"}>{testBatchs[batchPage-1].chemicalCompositionGOST}</CompactListItem>
                    <CompactListItem label={"Технические требования"}>{testBatchs[batchPage-1].technicalRequirementsGOST}</CompactListItem>
                    <CompactListItem label={"Профильный стандарт"}>{testBatchs[batchPage-1].profileStandardGOST}</CompactListItem>
                    <CompactListItem label={"Класс проката"}>{testBatchs[batchPage-1].steelClass}</CompactListItem>
                    <CompactListItem label={"Размер профиля, мм"}>{testBatchs[batchPage-1].profileSize}</CompactListItem>
                    <CompactListItem label={"Длинна, мм"}>{testBatchs[batchPage-1].length}</CompactListItem>
                    <CompactListItem label={"Сорт"}>{testBatchs[batchPage-1].grade}</CompactListItem>
                    <CompactListItem label={"Количество мест"}>{testBatchs[batchPage-1].totalPlaces}</CompactListItem>
                    <CompactListItem label={"Масса нетто, т"}>{testBatchs[batchPage-1].netWeight}</CompactListItem>
                    <CompactListItem label={"Масса брутто, т"}>{testBatchs[batchPage-1].grossWeight}</CompactListItem>
                </>
            </CompactList>)
        },
    ]
        : [
        {
            index: 0,
            label: "Партии",
            content: (<TableView fields = {[
                "№ п/п",
                "№ Позиции",
                "Номер плавки",
                "Требования к хиимческому составу",
                "Технические требования",
                "Профильный стандарт",
                "Класс проката",
                "Размер профиля, мм",
                "Длинна, мм",
                "Сорт",
                "Количество мест",
                "Масса нетто, т",
                "Масса брутто, т"
            ]} >
                {testBatchs.map((item, index) => (
                    <TableRow key={index}>
                        <td>{index+1}</td>
                        <td>{item.positionNumber}</td>
                        <td>{item.meltNumber}</td>
                        <td>{item.chemicalCompositionGOST}</td>
                        <td>{item.technicalRequirementsGOST}</td>
                        <td>{item.profileStandardGOST}</td>
                        <td>{item.steelClass}</td>
                        <td>{item.profileSize}</td>
                        <td>{item.length}</td>
                        <td>{item.grade}</td>
                        <td>{item.totalPlaces}</td>
                        <td>{item.netWeight}</td>
                        <td>{item.grossWeight}</td>
                    </TableRow>
                ))}
            </TableView>)
        },
            {
                index: 1,
                label: "Химические анализы",
                content: (<TableView fields = {[
                    "№ п/п",
                    "Номер плавки",
                    "C",
                    "Si",
                    "Mn",
                    "P",
                    "S",
                    "Cr",
                    "Ni",
                    "Cu",
                    "Mo",
                    "V",
                    "N",
                    "Ceq",
                ]} >
                    {testExp.map((item, index) => (
                        <TableRow key={index}>
                            <td>{index+1}</td>
                            <td>{item.meltNumber}</td>
                            <td>{item.carbon}</td>
                            <td>{item.silicon}</td>
                            <td>{item.manganese}</td>
                            <td>{item.phosphorus}</td>
                            <td>{item.sulfur}</td>
                            <td>{item.chromium}</td>
                            <td>{item.nickel}</td>
                            <td>{item.copper}</td>
                            <td>{item.molybdenum}</td>
                            <td>{item.vanadium}</td>
                            <td>{item.nitrogen}</td>
                            <td>{item.equivalentCarbon}</td>
                        </TableRow>
                    ))}
                </TableView>)
            },
        {
            index: 2,
            label: "Лабораторные испытания",
            content: (<TableView fields = {[
                "№ п/п",
                "Номер плавки",
                "Врем. сопротивл. (σB), Н/мм2",
                "Предел тек-ти (σT), Н/мм2",
                "Отношение врем. соп. к пределу тек-ти (σB/σT)",
                "Относит. удл. (δ5), %",
                "Полное относит. удл. при макс. нагрузке (δmax), %",
                "Отн. площадь ребра (FR)",
                "Изгиб"
            ]} >
                {testTesting.map((item, index) => (
                    <TableRow key={index}>
                        <td>{index+1}</td>
                        <td>{item.meltNumber}</td>
                        <td>{item.ultimateStrength}</td>
                        <td>{item.yieldStrength}</td>
                        <td>{item.strengthRatio}</td>
                        <td>{item.elongation}</td>
                        <td>{item.maxElongation}</td>
                        <td>{item.edgeArea}</td>
                        <td>{item.bending}</td>
                    </TableRow>
                ))}
            </TableView>)
        },
        {
            index: 3,
            label: "Единицы продукции",
            content: (<TableView fields = {[
                "№ п/п",
                "№ Позиции",
                "Номер плавки",
                "Требования к хиимческому составу",
                "Технические требования",
                "Профильный стандарт",
                "Класс проката",
                "Размер профиля, мм",
                "Длинна, мм",
                "Сорт",
                "Количество мест",
                "Масса нетто, т",
                "Масса брутто, т"
            ]} >
                {testBatchs.map((item, index) => (
                    <TableRow key={index}>
                        <td><a href="">{index+1}</a></td>
                        <td>{item.positionNumber}</td>
                        <td>{item.meltNumber}</td>
                        <td>{item.chemicalCompositionGOST}</td>
                        <td>{item.technicalRequirementsGOST}</td>
                        <td>{item.profileStandardGOST}</td>
                        <td>{item.steelClass}</td>
                        <td>{item.profileSize}</td>
                        <td>{item.length}</td>
                        <td>{item.grade}</td>
                        <td>{item.totalPlaces}</td>
                        <td>{item.netWeight}</td>
                        <td>{item.grossWeight}</td>
                    </TableRow>
                ))}
            </TableView>)
        },
    ]

    if (loading){
        return (
            <>
                <Spinner/>
                <Footer/>
            </>
        )
    }

    return (
        <>
            <CertificateContainer certificate={testCertificate}/>
            <TabBar tabs={tabs}/>
            <AdditionalInfoContainer data={testAddInfo}/>
            <Footer/>
        </>
    )
}

export default ClientInfoPage;
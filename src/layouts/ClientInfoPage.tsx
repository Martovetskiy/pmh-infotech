import * as React from "react";
import {Certificate, getCertificateById} from "../model/Certificate.ts";
import CertificateContainer from "./CertificateContainer/CertificateContainer.tsx";
import {Tab, TabBar} from "../components/TabBar/TabBar.tsx";
import {TableRow, TableView} from "../components/TableView/TableView.tsx";
import {Batch, getBatchesById} from "../model/Batch.ts";
import {useEffect, useState} from "react";
import {CompactList, CompactListItem} from "../components/CompactList/CompactList.tsx";
import AdditionalInfoContainer from "./AdditionInfoContainer/AdditionalInfoContainer.tsx";
import {AdditionInfo, getAddInfoById} from "../model/AdditionInfo.ts";
import {Footer} from "../components/Footer/Footer.tsx";
import {ChemicalAnalysis, getAnalyzesById} from "../model/ChemicalAnalysis.ts";
import {getTestingById, Testing} from "../model/Testing.ts";
import {Spinner} from "../components/Spinner/Spinner.tsx";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {getProductsById, Product} from "../model/Product.ts";
import Header from "../components/Header/Header.tsx";
import {usePDF} from "react-to-pdf";
import {PdfComponent} from "./PdfLayout/PdfComponent.tsx";

const ClientInfoPage: React.FC = () => {
    const { id } = useParams<{id: string}>()
    const [certificate, setCertificate] = useState<Certificate | null>(null)
    const [batches, setBatches] = useState<Batch[] | null>(null)
    const [analyzes, setAnalyzes] = useState<ChemicalAnalysis[] | null>(null)
    const [testings, setTestings] = useState<Testing[] | null>(null)
    const [products, setProducts] = useState<Product[] | null>(null)
    const [addInfo, setAddInfo] = useState<AdditionInfo | null>(null)
    const [pdfComponentDisplay, setPdfComponentDisplay] = useState("block");
    const location = useLocation()

    const [isSmall, setIsSmall] = useState(window.innerWidth < 1300);
    const [loading, setLoading] = useState(true);
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const fetchCert = await getCertificateById(parseInt(id as string));
            const fetchBatch = await getBatchesById(fetchCert.orderId);
            const fetchAnalyzes = await getAnalyzesById(fetchCert.orderId);
            const fetchTestings = await getTestingById(fetchCert.orderId);
            const fetchProducts = await getProductsById(fetchCert.orderId);
            const fetchAddInfo = await getAddInfoById(fetchCert.certificateId);
            return [fetchCert, fetchBatch, fetchAnalyzes, fetchTestings, fetchProducts, fetchAddInfo]
        }
        fetchData()
            .then((fetchData) => {
                setCertificate(fetchData[0] as Certificate)
                setBatches(fetchData[1] as Batch[])
                setAnalyzes(fetchData[2] as ChemicalAnalysis[])
                setTestings(fetchData[3] as Testing[])
                setProducts(fetchData[4] as Product[])
                setAddInfo(fetchData[5] as AdditionInfo)
                })
            .catch((error)=> {
                console.error(error)
                navigate(`/404`, { replace: false })
            })
            .finally(() => setLoading(false)
            )
    }, [navigate, id]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth < 1300)
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
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

    const [productPage, setProductPage] = useState(1)

    const handleProductPagePlus = ()=>{
        setProductPage(productPage + 1)
    }

    const handleProductPageMinus = ()=>{
        setProductPage(productPage - 1)
    }

    if (batches === null || certificate === null || analyzes === null || testings === null || products===null || addInfo == null || loading ){
        return (
            <>
                <Spinner/>
            </>
        )
    }

    const handlePdfDownload = () => {
        setPdfComponentDisplay("block");
        
        setTimeout(() => {
            toPDF();
            setPdfComponentDisplay("none");
        }, 1);
    };

    const tabs: Array<Tab> = (isSmall) ? [
        {
            index: 0,
            label: "Партии",
            content: (<CompactList currentPage={batchPage} totalPages = {batches.length} onNextPage={handleBatchPagePlus} onPrevPage={handleBatchPageMinus}>
                <>
                    <CompactListItem label={"№ п/п"}>{batchPage}</CompactListItem>
                    <CompactListItem label={"№ Позиции"}>{batches[batchPage-1].positionNumber}</CompactListItem>
                    <CompactListItem label={"Номер плавки"}>{batches[batchPage-1].meltNumber}</CompactListItem>
                    <CompactListItem label={"Требования к хиимческому составу"}>{batches[batchPage-1].chemicalCompositionGOST}</CompactListItem>
                    <CompactListItem label={"Технические требования"}>{batches[batchPage-1].technicalRequirementsGOST}</CompactListItem>
                    <CompactListItem label={"Профильный стандарт"}>{batches[batchPage-1].profileStandardGOST}</CompactListItem>
                    <CompactListItem label={"Класс проката"}>{batches[batchPage-1].steelClass}</CompactListItem>
                    <CompactListItem label={"Размер профиля, мм"}>{batches[batchPage-1].profileSize}</CompactListItem>
                    <CompactListItem label={"Длинна, мм"}>{batches[batchPage-1].length}</CompactListItem>
                    <CompactListItem label={"Сорт"}>{batches[batchPage-1].grade}</CompactListItem>
                    <CompactListItem label={"Количество мест"}>{batches[batchPage-1].totalPlaces}</CompactListItem>
                    <CompactListItem label={"Масса нетто, т"}>{batches[batchPage-1].netWeight}</CompactListItem>
                    <CompactListItem label={"Масса брутто, т"}>{batches[batchPage-1].grossWeight}</CompactListItem>
                </>
            </CompactList>)
        },
        {
            index: 1,
            label: "Хим.анализы",
            content: (<CompactList currentPage={expPage} totalPages = {analyzes.length} onNextPage={handleExpPagePlus} onPrevPage={handleExpPageMinus}>
                <>
                    <CompactListItem label={"№ п/п"}>{expPage}</CompactListItem>
                    <CompactListItem label={"Номер плавки"}>{analyzes[expPage-1].meltNumber}</CompactListItem>
                    <CompactListItem label={"С"}>{analyzes[expPage-1].carbon}</CompactListItem>
                    <CompactListItem label={"Si"}>{analyzes[expPage-1].silicon}</CompactListItem>
                    <CompactListItem label={"Mn"}>{analyzes[expPage-1].manganese}</CompactListItem>
                    <CompactListItem label={"P"}>{analyzes[expPage-1].phosphorus}</CompactListItem>
                    <CompactListItem label={"S"}>{analyzes[expPage-1].sulfur}</CompactListItem>
                    <CompactListItem label={"Cr"}>{analyzes[expPage-1].chromium}</CompactListItem>
                    <CompactListItem label={"Ni"}>{analyzes[expPage-1].nickel}</CompactListItem>
                    <CompactListItem label={"Cu"}>{analyzes[expPage-1].copper}</CompactListItem>
                    <CompactListItem label={"Mo"}>{analyzes[expPage-1].molybdenum}</CompactListItem>
                    <CompactListItem label={"V"}>{analyzes[expPage-1].vanadium}</CompactListItem>
                    <CompactListItem label={"N"}>{analyzes[expPage-1].nitrogen}</CompactListItem>
                    <CompactListItem label={"Ceq"}>{analyzes[expPage-1].equivalentCarbon}</CompactListItem>
                </>
            </CompactList>)
        },
        {
            index: 2,
            label: "испытания",
            content: (<CompactList currentPage={testPage} totalPages = {testings.length} onNextPage={handleTestPagePlus} onPrevPage={handleTestPageMinus}>
                <>
                    <CompactListItem label={"№ п/п"}>{testPage}</CompactListItem>
                    <CompactListItem label={"Номер плавки"}>{testings[testPage-1].meltNumber}</CompactListItem>
                    <CompactListItem label={"Врем. сопротивл. (σB), Н/мм2"}>{testings[testPage-1].ultimateStrength}</CompactListItem>
                    <CompactListItem label={"Предел тек-ти (σT), Н/мм2"}>{testings[testPage-1].yieldStrength}</CompactListItem>
                    <CompactListItem label={"Отношение врем. соп. к пределу тек-ти (σB/σT)"}>{testings[testPage-1].strengthRatio}</CompactListItem>
                    <CompactListItem label={"Относит. удл. (δ5), %"}>{testings[testPage-1].elongation}</CompactListItem>
                    <CompactListItem label={"Полное относит. удл. при макс. нагрузке (δmax), %"}>{testings[testPage-1].maxElongation}</CompactListItem>
                    <CompactListItem label={"Отн. площадь ребра (FR)"}>{testings[testPage-1].edgeArea}</CompactListItem>
                    <CompactListItem label={"Изгиб"}>{testings[testPage-1].bending}</CompactListItem>
                </>
            </CompactList>)
        },
        {
            index: 3,
            label: "продукция",
            content: (<CompactList currentPage={productPage} totalPages = {products.length} onNextPage={handleProductPagePlus} onPrevPage={handleProductPageMinus}>
                <>
                    <CompactListItem label={"№ п/п"}><a href="">{productPage}</a></CompactListItem>
                    <CompactListItem label={"№ Позиции"}>{products[productPage-1].positionNumber}</CompactListItem>
                    <CompactListItem label={"Номер плавки"}>{products[productPage-1].meltNumber}</CompactListItem>
                    <CompactListItem label={"Требования к хиимческому составу"}>{products[productPage-1].chemicalCompositionGOST}</CompactListItem>
                    <CompactListItem label={"Технические требования"}>{products[productPage-1].technicalRequirementsGOST}</CompactListItem>
                    <CompactListItem label={"Профильный стандарт"}>{products[productPage-1].profileStandardGOST}</CompactListItem>
                    <CompactListItem label={"Класс проката"}>{products[productPage-1].steelClass}</CompactListItem>
                    <CompactListItem label={"Размер профиля, мм"}>{products[productPage-1].profileSize}</CompactListItem>
                    <CompactListItem label={"Длинна, мм"}>{products[productPage-1].length}</CompactListItem>
                    <CompactListItem label={"Сорт"}>{products[productPage-1].grade}</CompactListItem>
                    <CompactListItem label={"Количество мест"}>{products[productPage-1].totalPlaces}</CompactListItem>
                    <CompactListItem label={"Масса нетто, т"}>{products[productPage-1].netWeight}</CompactListItem>
                    <CompactListItem label={"Масса брутто, т"}>{products[productPage-1].grossWeight}</CompactListItem>
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
                {batches.map((item, index) => (
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
                    {analyzes.map((item, index) => (
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
                {testings.map((item, index) => (
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
                {products.map((item, index) => (
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

    return (
        <div>
            <Header pdfAction={handlePdfDownload}/>
            <div className={'content'}>
                <CertificateContainer certificate={certificate}/>
                <TabBar tabs={tabs}/>
                <AdditionalInfoContainer data={addInfo}/>
            </div>
            <Footer pdfAction={handlePdfDownload}/>
            <div ref={targetRef} style={{ top: "-9999px", position: "absolute", zIndex: -1, display: pdfComponentDisplay === "block" ? "block" : "none" }}>
                <PdfComponent
                    url={`${window.location.protocol}//${window.location.host}${location.pathname}`}
                    certificate={certificate} batches={batches} analyzes={analyzes} testings={testings} products={products} addInfo={addInfo}/>
            </div>

        </div>
    )
}

export default ClientInfoPage;


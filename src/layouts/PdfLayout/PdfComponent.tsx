import {Certificate} from "../../model/Certificate.ts";
import {Batch} from "../../model/Batch.ts";
import {ChemicalAnalysis} from "../../model/ChemicalAnalysis.ts";
import {Testing} from "../../model/Testing.ts";
import {Product} from "../../model/Product.ts";
import {AdditionInfo} from "../../model/AdditionInfo.ts";
import * as React from "react";
import {QRCodeSVG} from "qrcode.react";
import CertificateContainer from "../CertificateContainer/CertificateContainer.tsx";
import {TableRow, TableView} from "../../components/TableView/TableView.tsx";
import AdditionalInfoContainer from "../AdditionInfoContainer/AdditionalInfoContainer.tsx";

interface PdfComponentProps{
    certificate: Certificate;
    batches: Batch[];
    analyzes: ChemicalAnalysis[];
    testings: Testing[];
    products: Product[];
    addInfo: AdditionInfo;
    url: string
}

export const PdfComponent:React.FC<PdfComponentProps> = ({certificate, batches, testings, products, analyzes, addInfo, url}) => {
    console.log(url);
    return (
        <div style={{width:"1200px", gap: "10px", margin: "10px", height:"fit-content", display:"flex", flexDirection:"column", justifyContent:"center", alignItems: 'center'}}>
            <QRCodeSVG value={url} />
            <CertificateContainer certificate={certificate}/>
            <TableView fields = {[
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
            </TableView>
            <TableView fields = {[
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
            </TableView>
            <TableView fields = {[
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
            </TableView>
            <TableView fields = {[
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
            </TableView>
            <AdditionalInfoContainer data={addInfo}/>
        </div>
    )
}
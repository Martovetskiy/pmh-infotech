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
export interface Batch {
    id: number;
    positionNumber: number;
    meltNumber: number; //Primary
    chemicalCompositionGOST: string;
    technicalRequirementsGOST: string;
    profileStandardGOST: string;
    steelClass: string;
    profileSize: number;
    length: string;
    grade: string;
    totalPlaces: number;
    netWeight: number;
    grossWeight: number;
}
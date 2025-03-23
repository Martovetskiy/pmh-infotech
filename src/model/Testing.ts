export interface Testing {
    id: number; // № п/п
    meltNumber: number; //Primary
    ultimateStrength: number; // Врем. сопротивл. (σB), Н/мм²
    yieldStrength: number; // Предел тек-ти (σT), Н/мм²
    strengthRatio: number; // Отношение врем. соп. к пределу тек-ти (σB/σT)
    elongation: number; // Относит. удл. (δ5), %
    maxElongation: number; // Полное относит. удл. при макс. нагрузке (δmax), %
    edgeArea: number; // Отн. площадь ребра (FR)
    bending: string; // Изгиб
}
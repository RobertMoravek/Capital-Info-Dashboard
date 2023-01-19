export type { Capitals };

type Capitals = {
    name: Name;
    tld?: string[] | null;
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital?: string[] | null;
    altSpellings?: string[] | null;
    region: string;
    subregion: string;
    languages: Languages;
    translations: Translations;
    latlng?: number[] | null;
    landlocked: boolean;
    borders?: string[] | null;
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini: Gini;
    fifa: string;
    car: Car;
    timezones?: string[] | null;
    continents?: string[] | null;
    flags: FlagsOrCoatOfArms;
    coatOfArms: FlagsOrCoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode: PostalCode;
}[];
export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}
export interface NativeName {
    deu: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
}
export interface DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho {
    official: string;
    common: string;
}
export interface Currencies {
    EUR: EUR;
}
export interface EUR {
    name: string;
    symbol: string;
}
export interface Idd {
    root: string;
    suffixes?: string[] | null;
}
export interface Languages {
    deu: string;
}
export interface Translations {
    ara: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    bre: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    ces: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    cym: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    deu: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    est: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    fin: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    fra: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    hrv: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    hun: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    ita: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    jpn: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    kor: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    nld: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    per: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    pol: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    por: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    rus: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    slk: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    spa: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    swe: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    tur: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    urd: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
    zho: DeuOrAraOrBreOrCesOrCymOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
}
export interface Demonyms {
    eng: EngOrFra;
    fra: EngOrFra;
}
export interface EngOrFra {
    f: string;
    m: string;
}
export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}
export interface Gini {
    2016: number;
}
export interface Car {
    signs?: string[] | null;
    side: string;
}
export interface FlagsOrCoatOfArms {
    png: string;
    svg: string;
}
export interface CapitalInfo {
    latlng?: number[] | null;
}
export interface PostalCode {
    format: string;
    regex: string;
}

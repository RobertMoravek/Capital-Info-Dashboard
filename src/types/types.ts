export type { CapitalsAndCountries };

type CapitalsAndCountries = {
    name: Name;
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cca3: string;
    cioc?: string;
    independent?: boolean;
    status: Status;
    unMember: boolean;
    currencies?: Currencies;
    idd: Idd;
    capital?: string[];
    altSpellings: string[];
    region: Region;
    subregion?: string;
    languages?: { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng: number[];
    landlocked: boolean;
    borders?: string[];
    area: number;
    demonyms?: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini?: { [key: string]: number };
    car: Car;
    timezones: string[];
    continents: Continent[];
    flags: CoatOfArms;
    coatOfArms: CoatOfArms;
    startOfWeek: StartOfWeek;
    capitalInfo: CapitalInfo;
    postalCode?: PostalCode;
    fifa?: string;
}[];

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side: Side;
}

export type Side = 'left' | 'right';

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export type Continent = 'Europe' | 'Antarctica' | 'Oceania' | 'Asia' | 'Africa' | 'South America' | 'North America';

export interface Currencies {
    GBP?: Aed;
    USD?: Aed;
    WST?: Aed;
    JOD?: Aed;
    ERN?: Aed;
    NPR?: Aed;
    TOP?: Aed;
    XOF?: Aed;
    EUR?: Aed;
    EGP?: Aed;
    ILS?: Aed;
    IMP?: Aed;
    MRU?: Aed;
    DZD?: Aed;
    MAD?: Aed;
    KZT?: Aed;
    AWG?: Aed;
    NGN?: Aed;
    KMF?: Aed;
    PHP?: Aed;
    SHP?: Aed;
    XPF?: Aed;
    CHF?: Aed;
    VES?: Aed;
    DKK?: Aed;
    GGP?: Aed;
    BZD?: Aed;
    AUD?: Aed;
    GHS?: Aed;
    BMD?: Aed;
    SGD?: Aed;
    AMD?: Aed;
    MDL?: Aed;
    VND?: Aed;
    MGA?: Aed;
    GIP?: Aed;
    TVD?: Aed;
    UAH?: Aed;
    BIF?: Aed;
    XCD?: Aed;
    TJS?: Aed;
    KID?: Aed;
    XAF?: Aed;
    MUR?: Aed;
    RWF?: Aed;
    SDG?: BAM;
    CNY?: Aed;
    FOK?: Aed;
    KRW?: Aed;
    SRD?: Aed;
    OMR?: Aed;
    UGX?: Aed;
    CKD?: Aed;
    NZD?: Aed;
    MVR?: Aed;
    CRC?: Aed;
    MNT?: Aed;
    SOS?: Aed;
    ETB?: Aed;
    YER?: Aed;
    CLP?: Aed;
    MOP?: Aed;
    AZN?: Aed;
    BBD?: Aed;
    JEP?: Aed;
    LKR?: Aed;
    JMD?: Aed;
    ZMW?: Aed;
    CDF?: Aed;
    MYR?: Aed;
    BTN?: Aed;
    INR?: Aed;
    PYG?: Aed;
    AED?: Aed;
    RON?: Aed;
    GYD?: Aed;
    BWP?: Aed;
    JPY?: Aed;
    ISK?: Aed;
    UYU?: Aed;
    KGS?: Aed;
    TWD?: Aed;
    KYD?: Aed;
    FKP?: Aed;
    MMK?: Aed;
    TZS?: Aed;
    CAD?: Aed;
    TRY?: Aed;
    ARS?: Aed;
    AFN?: Aed;
    IRR?: Aed;
    BGN?: Aed;
    CVE?: Aed;
    BAM?: BAM;
    IQD?: Aed;
    DOP?: Aed;
    MXN?: Aed;
    STN?: Aed;
    COP?: Aed;
    AOA?: Aed;
    PAB?: Aed;
    NIO?: Aed;
    LSL?: Aed;
    ZAR?: Aed;
    DJF?: Aed;
    SYP?: Aed;
    KWD?: Aed;
    LYD?: Aed;
    BRL?: Aed;
    PKR?: Aed;
    SLL?: Aed;
    KES?: Aed;
    THB?: Aed;
    LRD?: Aed;
    KHR?: Aed;
    LBP?: Aed;
    PLN?: Aed;
    MWK?: Aed;
    SAR?: Aed;
    GNF?: Aed;
    NOK?: Aed;
    SSP?: Aed;
    BSD?: Aed;
    SCR?: Aed;
    CZK?: Aed;
    BHD?: Aed;
    BOB?: Aed;
    GMD?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    NAD?: Aed;
    GEL?: Aed;
    RSD?: Aed;
    GTQ?: Aed;
    TMT?: Aed;
    SEK?: Aed;
    VUV?: Aed;
    PGK?: Aed;
    MKD?: Aed;
    ZWL?: Aed;
    HNL?: Aed;
    HKD?: Aed;
    TTD?: Aed;
    ANG?: Aed;
    LAK?: Aed;
    MZN?: Aed;
    UZS?: Aed;
    HTG?: Aed;
    SZL?: Aed;
    ALL?: Aed;
    IDR?: Aed;
    BDT?: Aed;
    RUB?: Aed;
    TND?: Aed;
    BYN?: Aed;
    KPW?: Aed;
    HUF?: Aed;
    FJD?: Aed;
    QAR?: Aed;
    SBD?: Aed;
    PEN?: Aed;
    BND?: Aed;
}

export interface Aed {
    name: string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng: Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?: string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common: string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export type Region = 'Europe' | 'Antarctic' | 'Oceania' | 'Asia' | 'Africa' | 'Americas';

export type StartOfWeek = 'monday' | 'sunday' | 'saturday';

export type Status = 'officially-assigned' | 'user-assigned';

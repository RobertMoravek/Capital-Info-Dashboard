export interface Hotels {
    primary_count: number;
    count: number;
    room_distribution: RoomDistribution[];
    map_bounding_box: MapBoundingBox;
    total_count_with_filters: number;
    unfiltered_count: number;
    extended_count: number;
    unfiltered_primary_count: number;
    search_radius: number;
    sort: Sort[];
    result: Result[];
}

export interface MapBoundingBox {
    sw_lat: number;
    sw_long: number;
    ne_long: number;
    ne_lat: number;
}

export interface Result {
    zip: string;
    hotel_facilities: string;
    is_mobile_deal: number;
    in_best_district: number;
    longitude: number;
    block_ids: string[];
    class: number;
    composite_price_breakdown: PriceBreakdown;
    selected_review_topic: null;
    is_genius_deal: number;
    currency_code: Currency;
    review_recommendation: string;
    is_smart_deal: number;
    children_not_allowed: null;
    matching_units_configuration: MatchingUnitsConfiguration;
    districts: string;
    accommodation_type_name: string;
    genius_discount_percentage: number;
    city_name_en: string;
    hotel_name: string;
    bwallet: Bwallet;
    id: string;
    type: Type;
    main_photo_id: number;
    city_in_trans: string;
    district_id: number;
    is_no_prepayment_block: number;
    address: string;
    class_is_estimated: number;
    distance: string;
    native_ad_id: string;
    min_total_price: number;
    soldout: number;
    countrycode: Cc1;
    cc1: Cc1;
    hotel_include_breakfast?: number;
    district: string;
    default_wishlist_name: string;
    currencycode: Currency;
    country_trans: CountryTrans;
    preferred: number;
    timezone: Timezone;
    preferred_plus: number;
    badges: Badge[];
    native_ads_cpc: number;
    cc_required: number;
    updated_checkout: null;
    hotel_id: number;
    address_trans: string;
    price_breakdown: PriceBreakdownClass;
    price_is_final: number;
    ufi: number;
    hotel_has_vb_boost: number;
    latitude: number;
    distances: Distance[];
    review_nr: number | null;
    city_trans: string;
    accommodation_type: number;
    wishlist_count: number;
    checkin: Check;
    mobile_discount_percentage: number;
    checkout: Check;
    booking_home?: BookingHome;
    cant_book: null;
    default_language: Cc1;
    main_photo_url: string;
    has_free_parking?: number;
    is_city_center: number;
    distance_to_cc: string;
    hotel_name_trans: string;
    is_beach_front: number;
    city: string;
    extended: number;
    review_score_word: string;
    is_free_cancellable: number;
    is_geo_rate: string;
    unit_configuration_label: string;
    url: string;
    urgency_message?: string;
    review_score: number | null;
    updated_checkin: null;
    native_ads_tracking: string;
    max_photo_url: string;
    max_1440_photo_url: string;
    ribbon_text?: string;
    is_wholesaler_candidate?: number;
    has_swimming_pool?: number;
    cpc_non_trader_copy?: string;
}

export interface Badge {
    badge_variant: BadgeVariant;
    id: ID;
    text: string;
}

export type BadgeVariant = 'constructive' | 'accent';

export type ID = 'combined-discount' | 'new_to_booking';

export interface BookingHome {
    is_single_unit_property: number | string;
    quality_class: number;
    segment: number;
    is_booking_home: number;
    group: Group;
}

export type Group = 'house_like' | 'hotels_and_others' | 'apartment_like';

export interface Bwallet {
    hotel_eligibility: number;
}

export type Cc1 = 'is' | 'fr' | 'en' | 'it';

export interface Check {
    from: string;
    until: string;
}

export interface PriceBreakdown {
    benefits: Benefit[];
    strikethrough_amount_per_night?: AllInclusiveAmount;
    discounted_amount?: AllInclusiveAmount;
    gross_amount_hotel_currency: AllInclusiveAmount;
    excluded_amount: AllInclusiveAmount;
    net_amount: AllInclusiveAmount;
    included_taxes_and_charges_amount: AllInclusiveAmount;
    gross_amount_per_night: AllInclusiveAmount;
    items: Item[];
    gross_amount: AllInclusiveAmount;
    strikethrough_amount?: AllInclusiveAmount;
    all_inclusive_amount: AllInclusiveAmount;
    product_price_breakdowns?: PriceBreakdown[];
}

export interface AllInclusiveAmount {
    value: number;
    currency: Currency;
}

export type Currency = 'EUR';

export interface Benefit {
    details: string;
    icon: null;
    kind: string;
    name: Name;
    identifier: string;
    badge_variant: BadgeVariant;
}

export type Name = 'City tax' | 'VAT' | 'Booking.com pays' | 'Mobile-only price';

export interface Item {
    name: Name;
    item_amount: AllInclusiveAmount;
    inclusion_type?: InclusionType;
    base: Base;
    details: string;
    kind: ItemKind;
    identifier?: Identifier;
}

export interface Base {
    base_amount?: number;
    kind: BaseKind;
    percentage?: number;
}

export type BaseKind = 'per_night' | 'percentage' | 'total' | 'rate';

export type Identifier = 'BSB' | 'mobile-discount';

export type InclusionType = 'included';

export type ItemKind = 'charge' | 'discount';

export type CountryTrans = 'Iceland';

export interface Distance {
    icon_set: null;
    text: string;
    icon_name: IconName;
}

export type IconName = 'bui_geo_pin';

export interface MatchingUnitsConfiguration {
    matching_units_common_config: MatchingUnitsCommonConfig;
}

export interface MatchingUnitsCommonConfig {
    unit_type_id: number;
    localized_area: null | string;
}

export interface PriceBreakdownClass {
    sum_excluded_raw: string;
    has_tax_exceptions: number;
    gross_price: number | string;
    currency: Currency;
    has_incalculable_charges: number;
    has_fine_print_charges: number;
    all_inclusive_price: number;
}

export type Timezone = 'Atlantic/Reykjavik';

export type Type = 'property_card';

export interface RoomDistribution {
    adults: string;
    children: any[];
}

export interface Sort {
    id: string;
    name: string;
}

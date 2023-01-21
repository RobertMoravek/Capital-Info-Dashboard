export type { Weather };

type Weather = {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: Current;
};

export interface Current {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: WeatherElement[];
}

export interface WeatherElement {
    id: number;
    main: string;
    description: string;
    icon: string;
}

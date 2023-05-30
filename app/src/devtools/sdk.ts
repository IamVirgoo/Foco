export function getImg(name : string) : string {
    switch (name) {
        case "hum" : return '../../assets/application/icons/humidity.svg';
        case "temp" : return '../../assets/application/icons/temperature.svg';
        case "lum" : return '../../assets/application/icons/sun.svg';
        case "volt" : return '../../assets/application/icons/voltage.svg';
        default : return ""
    }
}

export function getMetric(name : string) : string {
    switch (name) {
        case "hum" : return "%";
        case "lum" : return "%";
        case "temp" : return "℃";
        case "volt" : return "V"
        default : return ""
    }
}
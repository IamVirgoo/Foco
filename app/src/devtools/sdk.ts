export function getImg(name : string) {
    switch (name) {
        case "Humidity" : return '../../assets/application/icons/humidity.svg';
        case "Temperature" : return '../../assets/application/icons/temperature.svg';
        case "Luminosity" : return '../../assets/application/icons/sun.svg';
        case "Voltage" : return '../../assets/application/icons/voltage.svg';
    }
}

export function getMetric(name : string) {
    switch (name) {
        case "Humidity" : return "%";
        case "Luminosity" : return "%";
        case "Temperature" : return "℃";
        case "Voltage" : return "V"
    }
}
export const getRainText = (value: number) => {
    const percent = value * 10

    if (percent >= 20 && percent <= 50) {
        return `🌥 ${percent}%`; //cloudy
    } else if (percent > 50) {
        return `🌧 ${percent}%`; //rainy
    } else {
        return `🌤 ${percent}%`; //sunny
    }
}
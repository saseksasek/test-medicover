export const getDayName = (date: string) => {
    const dateObject = new Date(date);
    const days = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'];
    return days[dateObject.getDay()];
}
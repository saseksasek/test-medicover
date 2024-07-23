import { getDayName } from "./getDayName"

export const getAllDays = (days: string[]) => {
    return days.map((day: string) => getDayName(day))
}
export const formatDate = (seconds: number): string => {
    const date: Date = new Date(seconds * 1000)
    const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    //Formats date into (day, date of the month, year) format
    const year: number = date.getFullYear()
    const month: string = months[date.getMonth()]
    const day: string = days[date.getDay()]
    let dateOfMonth: string | number = date.getDate()


    //Adds a suffix to the end of the number based on which day it is
    if (dateOfMonth === 1) {
        dateOfMonth = dateOfMonth + 'st'
    } else if (dateOfMonth === 2) {
        dateOfMonth = dateOfMonth + 'nd'
    } else if (dateOfMonth === 3) {
        dateOfMonth = dateOfMonth + 'rd'
    } else {
        dateOfMonth = dateOfMonth + 'th'
    }


    return `${day}, ${month} the ${dateOfMonth}, ${year}`
}

export const formatCamelCase = (text: string) => {
    return text?.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
    );
};

export const formatTime = (seconds: number, timeZone: number): string => {
    const date: Date = new Date((seconds + timeZone + 18000) * 1000)
    let hours: number = date.getHours()
    const minutes: string = date.getMinutes().toString().padStart(2, "0")

    let period = 'AM';


    // Convert 24-hour time to 12-hour time
    if (hours >= 12) {
        period = 'PM';
        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours === 0) {
        hours = 12; // Midnight case
    }

    return `${hours}:${minutes} ${period}`
}
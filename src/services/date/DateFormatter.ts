
export const DateFormatter  = {
    toDate:(value:string) => {
        if(!value) {
            return value
        }
        const parsedDate = new Date(Date.parse(value))
        const month = parsedDate.getMonth()+1
        const monthString = month < 10 ? '0'+month : month

        
        return [parsedDate.getDate(),monthString,parsedDate.getFullYear()].join('/')
    },
    toDateTime:(value:string) => {
        if(!value) {
            return value
          }

        const dateSegment =  DateFormatter.toDate(value)
        const parsedDate = new Date(Date.parse(value))
        const minutes = parsedDate.getMinutes()
        const minutesString = (minutes < 10 ) ? '0'+minutes : minutes
        const hours = parsedDate.getHours()
        const hoursString = (hours < 10) ? '0'+hours : hours

        return dateSegment 
            + ' ' 
            + hoursString 
            + ':' 
            + minutesString
    }
}


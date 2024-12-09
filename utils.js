function getFormattedDate(date) {
    if (!(date instanceof Date)) {
        throw new Error("Invalid date");
    }
    return date.toLocaleDateString(); 
}

function getFormattedTime(date) {
    if (!(date instanceof Date)) {
        throw new Error("Invalid date");
    }
    return date.toLocaleTimeString();  
}

module.exports = { getFormattedDate, getFormattedTime };
//test
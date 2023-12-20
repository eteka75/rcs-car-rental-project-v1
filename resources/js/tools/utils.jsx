
const DateToFront = (thedate, lang='fr') =>{
    let date = new Date(thedate);
    if(lang==='fr'){
        return   `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à ${date.getHours()}H:${date.getMinutes()}min `;
    }
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}  at ${date.getHours()}H:${date.getMinutes()}min`;
}


export { DateToFront };
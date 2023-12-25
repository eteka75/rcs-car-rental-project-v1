
const DateToFront = (thedate, lang='fr',format='d/m/Y h:i:s') =>{
    let date = new Date(thedate);
    let d=(date.getDate()>8)? date.getDate():'0'+(date.getDate()+1);
    let m=(date.getMonth()>8)? date.getMonth()+ 1:'0'+(date.getMonth()+1);
    if(format==='d/m/Y'){
        return   `${d}/${m}/${date.getFullYear()}`;

    }
    if(lang==='fr'){
        return   `${d}/${m}/${date.getFullYear()} à ${date.getHours()}H:${date.getMinutes()}min `;
    }
    return `${d}-${m}-${date.getFullYear()}  at ${date.getHours()}H:${date.getMinutes()}min`;
}


export { DateToFront };
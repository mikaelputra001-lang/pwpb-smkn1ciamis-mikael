let hari = prompt("masukan hari");

switch(hari) {
    case "Sabtu" :
    case "Minggu" :
        console.log("hari libur! istirahat");
        break;
    case "Senin" :
    case "Selasa" :
    case "Rabu" :
    case "Kamis" :
    case "Jumat" :
        console.log("hari kerja! Semangat");
        break;
    default :
        console.log("hari not valid")
}
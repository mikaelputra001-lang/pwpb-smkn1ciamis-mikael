let noPlat = prompt("masukan nomor plat terakhir anda") ?? "";

if (isNaN(noPlat) || noPlat < 0 || noPlat=="") {
    console.log("input Invalid");
} else if (noPlat == 1){
    console.log("bukan ganjil bukan genap, tapi anda Prabowo")
} else {
    let checkPlat = noPlat % 2;
    if (checkPlat == 0) {
        console.log("Plat Anda Genap")
    } else {
        console.log("Plat anda Ganjil")
    }
}

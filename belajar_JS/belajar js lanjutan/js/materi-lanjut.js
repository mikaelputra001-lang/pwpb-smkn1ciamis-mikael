// // // for (let i = 1; i <= 10; i++) {
// // //     console.log(i + ". abi moal kasiangan dei");
// // // }

// // let x = 1;
// // while (x <= 10) {
// //     x++;
// //     if (x == 2) {
// //         console.log("THIS " + x)
// //     } else {
// //         console.log("ini " + x);
// //     }
// // }

// for (let i = 1; i <= 50; i++) {
//     if (i % 2) {
//         console.log(i + " adalah bilangan ganjil");
//     } else {
//         console.log(i + " adalah bilangan genap");
//     }
// }

var i = 1;

function login() {
    let username = prompt("masukan username");
    let password = prompt("massukan password");

    if (username == "Budi" && password == 123) {
        i = 0;
    } else {
        alert("username atau password salah! percobaan ke-" + i);
        i++;
    }
}

do {
    login();
} while (i < 4 && i != 0) {
    if (i == 0) {
        alert("Login Berhasil >0<");
    } else {
        alert("anda sudah mencoba 3 kali, silahkan coba lagi nanti");
    }
}
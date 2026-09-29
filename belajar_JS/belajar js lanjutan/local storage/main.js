// const datas = [
//     {id: 'm1', judul: "pojok baca"},
//     {id: 'm2', judul: "hari tanpa plastik"}
// ];

// const teks = JSON.stringify(datas);

// const kembali = JSON.parse(teks);

// localStorage.setItem('hero',JSON.stringify(datas));

function create() {   
    const nama = prompt("masukan nama:");
    const kelas = prompt("masukan kelas:");
    //1
    const dataSiswa = localStorage.getItem("siswa");
    let siswa =  dataSiswa ? JSON.parse(dataSiswa) : [];
    //2
    let newId = 1;
    if (siswa.length > 0) {
        newId = siswa.length + 1
    }
    
    const newSiswa = {id: 'No.'+`${newId}`, nama: nama, kelas: kelas};
    //3
    siswa.push(newSiswa);
    localStorage.setItem('siswa',JSON.stringify(siswa));
    console.log("current length: ", siswa.length);
}

function update() {
    const dataSiswa = localStorage.getItem("siswa");
    let siswa = JSON.parse(dataSiswa);
    let indexSiswa = prompt("masukan No. Siswa yang ingin di rubah:");
    let newNama = prompt("masukan nama yang baru:");
    if (newNama == ""){ newNama = siswa[indexSiswa - 1].nama};  
    let newKelas = prompt("masukan kelas yang baru:");
    if (newKelas == ""){ newKelas = siswa[indexSiswa - 1].kelas};  
    if (indexSiswa < 0 || indexSiswa > siswa.length || isNaN(indexSiswa)) {
        alert("input invalid!")
    } else {
        siswa[indexSiswa - 1].nama = newNama;
        siswa[indexSiswa - 1].kelas = newKelas;
        localStorage.setItem('siswa',JSON.stringify(siswa));
        console.log("current length: ", siswa.length);
    }
}

function deletes() {
    const dataSiswa = localStorage.getItem("siswa");
    let siswa = JSON.parse(dataSiswa);
    let indexSiswa = prompt("masukan No. Siswa yang ingin di hapus:") ?? -1;
    if (indexSiswa < 0 || indexSiswa > siswa.length || isNaN(indexSiswa)) {
        alert("input invalid!")
    } else {
        let yakin = confirm("anda yakin ingin menghapus siswa No." + indexSiswa + " ?");
        if (siswa.length > 1) {
            if (yakin == true) {siswa.splice(1, indexSiswa - 1)}
        } else {
            if (yakin == true) {siswa = [];}
        }
            localStorage.setItem('siswa',JSON.stringify(siswa));
            console.log("current length: ", siswa.length);
    }
}
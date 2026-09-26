let namaPasien = ['Mikael', 'Rusdi', 'Bjorka', 'Lionel Messi'];
let umurPasien = [16, 27, 67, 39];
let keluhan = ['sakit pinggang', 'keram tangan', 'pingsan', 'cedera ACL'];

const dataPasien = document.getElementById('dataPasien');

//read
function renderPasien() {
    let listHTML = '';
    namaPasien.forEach((nama, i) => {
        listHTML += `<div class="card" data-index="${i}">
                        <h2>${nama}</h2>
                        <p>Umur: ${umurPasien[i]}</p>
                        <p>Keluhan: ${keluhan[i]}</p>
                        <button class="update"><i data-feather="edit"></i></button>
                        <button class="delete"><i data-feather="trash-2"></i></button>
                    </div>`;
    });
    dataPasien.innerHTML = listHTML;
    if (window.feather) feather.replace();
}

//create
showCreateForm = () => {
    const createForm = document.createElement('div');
    createForm.classList.add('create-form');
    createForm.innerHTML = `
    <div class="form-container">
    <form id="formPasien">
    <button class="close" onclick="this.parentElement.parentElement.remove()">X</button>
    <h2>Tambah Data Pasien</h2>
            <label for="nama">Nama:</label>
            <input type="text" id="nama" name="nama" required>
            <label for="umur">Umur:</label>
            <input type="number" id="umur" name="umur" required>
            <label for="keluhan">Keluhan:</label>
            <input type="text" id="keluhan" name="keluhan" required>
            <button type="submit" form="formPasien">Tambah</button>
        </form>
    </div>
    `;
    document.body.appendChild(createForm);

    const formPasien = document.getElementById('formPasien');

    formPasien.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let addNamaPasien = document.getElementById('nama');
        let addUmurPasien = document.getElementById('umur');
        let addKeluhan = document.getElementById('keluhan');

        namaPasien.push(addNamaPasien.value);
        umurPasien.push(addUmurPasien.value);
        keluhan.push(addKeluhan.value);

        createForm.remove();
        renderPasien();
    });
};

//delete
deleteForm = () => {
    dataPasien.addEventListener('click', (e) => {
        const deleteBtn = e.target.closest('.delete');
        if(!deleteBtn) return;

        let card = deleteBtn.closest('.card');
        let index = parseInt(card.dataset.index, 10);

        namaPasien.splice(index, 1);
        umurPasien.splice(index, 1);
        keluhan.splice(index, 1);

        renderPasien();
    });
}

//update
updateFrom = () => {
    dataPasien.addEventListener('click', (e) => {
        const updateBtn = e.target.closest('.update');
        if (!updateBtn) return;

        const card = updateBtn.closest('.card');
        const index = parseInt(card.dataset.index, 10);

        const createForm = document.createElement('div');
        createForm.classList.add('create-form');
        createForm.innerHTML = `
        <div class="form-container">
        <form id="formPasien">
        <button class="close" onclick="this.parentElement.parentElement.remove()">X</button>
        <h2>Update Data Pasien</h2>
        <label for="nama">Nama:</label>
        <input type="text" id="nama" name="nama">
            <label for="umur">Umur:</label>
            <input type="number" id="umur" name="umur">
            <label for="keluhan">Keluhan:</label>
            <input type="text" id="keluhan" name="keluhan">
            <button type="submit" form="formPasien">Tambah</button>
            </form>
            </div>
            `;
            document.body.appendChild(createForm);
            
        const updateFormPasien = document.getElementById('formPasien');

        updateFormPasien.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let updateNamaPasien = document.getElementById('nama');
            let updateUmurPasien = document.getElementById('umur');
            let updateKeluhan = document.getElementById('keluhan');
            
            namaPasien[index] = updateNamaPasien.value || namaPasien[index];
            umurPasien[index] = updateUmurPasien.value || umurPasien[index];
            keluhan[index] = updateKeluhan.value || keluhan[index];

            createForm.remove();
            renderPasien();    
        });
    });
}

renderPasien();
deleteForm();
updateFrom();

//e itu event, bereaksi pada sesuatu yg terjadi
//DOM = Document Object Model, struktur kode
//innerHTML untuk membaca atau menulis kode html (Hapus semua isi lama, ganti total)
/*appendChild berfungsi untuk menambahkan satu node sebagai child terakhir dari suatu elemen,
tanpa menghapus children yang sudah ada sebelumnya.*/
/*const index = parseInt(card.dataset.index, 10); => ada angka '10' itu sebagai radix(baris bilangan)
10 = decimal (0-9), 2 = biner (0 & 1), 16 = hexadecimal (0-f)*/
//closest: method DOM untuk mencari element hingga naik ke parentnya (bahkan sampai root) kasusnya ngecek SVG
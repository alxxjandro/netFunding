const BtnRegistrar = document.getElementById('btnRegister');
const cajitaRegister = document.querySelector('.cajitaRegister');
const exitBtn = document.getElementById('Xbtn')

BtnRegistrar.addEventListener('click', () => {
    console.log('llego')
    cajitaRegister.classList.toggle('visible');
});

exitBtn.addEventListener('click',() =>{
    cajitaRegister.classList.toggle('visible');
    formatoInv.classList.remove('hidden')
    btnInversionista.classList.remove('hidden')
    btnEmprendedor.classList.remove('hidden')
    formHeading.innerText='Elige la opción que describa tu perfil';
})


//seleccionar cada formato
const btnInversionista = document.getElementById('btnInver');
const btnEmprendedor = document.getElementById('btnEmpre');
const formatoInv = document.querySelector('.formatoInv')
const formatoEmp = document.querySelector('.formatoEmp')
const formHeading = document.querySelector('.h1Text')
const formF = document.getElementById('formF')

btnEmprendedor.addEventListener('click',() =>{
    formatoInv.classList.add('hidden')
    btnInversionista.classList.add('hidden')
    btnEmprendedor.classList.add('hidden')
    formHeading.innerText = 'Emprendedor'
})

btnInversionista.addEventListener('click',() =>{
    formatoInv.classList.add('hidden')
    btnInversionista.classList.add('hidden')
    btnEmprendedor.classList.add('hidden')
    formHeading.innerText = 'Inversionista'
})




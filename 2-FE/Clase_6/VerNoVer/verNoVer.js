'use strict';
let btnVerNoVer = document.querySelectorAll('.btnVerNoVer');
// btnVerNoVer.addEventListener('click', () => {
//     if (btnVerNoVer.innerHTML=='Ver') {
//         btnVerNoVer.innerHTML='No Ver';
//     } else {
//         btnVerNoVer.innerHTML='Ver';
//     }
//     btnVerNoVer.nextElementSibling.classList.toggle('ocultar');  
// });
for (let i = 0; i < btnVerNoVer.length; i++) {
    btnVerNoVer[i].addEventListener('click', VerNoVer);
}
function VerNoVer() {
    if (this.innerHTML=='Ver') {
        this.innerHTML='No Ver';
    } else {
        this.innerHTML='Ver';
    }
    this.nextElementSibling.classList.toggle('ocultar');  
}
// for (let i = 0; i < btnVerNoVer.length; i++) {
//     btnVerNoVer[i].addEventListener('click', () => {
//         if (this.innerHTML=='Ver') {
//             this.innerHTML='No Ver';
//         } else {
//             this.innerHTML='Ver';
//         }
//         this.nextElementSibling.classList.toggle('ocultar');  
//     });
// }

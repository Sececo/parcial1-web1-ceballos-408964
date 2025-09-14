document.addEventListener('DOMContentLoaded', function() {
let muro = document.getElementById('muro');
let informacion = document.getElementById('info');
let fotos = document.getElementById('fotos');
let perfilUno =document.getElementById('main_section_perfil_id')
let perfilDos =document.getElementById('main_section_perfil_id_dos')

    let muroLink = document.getElementById('main_nav_muro');
    let informacionLink = document.getElementById('main_nav_info');
    let fotosLink = document.getElementById('main_nav_fotos');

    function hideAllSections() {
    muro.style.display = 'none';
    informacion.style.display = 'none';
    fotos.style.display = 'none';
    perfilDos.style.display = 'none';
    perfilUno.style.display = 'none';
    
    }
    function showSection(a) {
    a.style.display = 'flex';
    }
    hideAllSections();
    showSection(muro);
    showSection(perfilDos);
    muroLink.addEventListener("click", function() {
        hideAllSections();
        showSection(muro);
        showSection(perfilUno);
        console.log("click en muro");
    });
    informacionLink.addEventListener("click", function() {
        hideAllSections();
        showSection(informacion);
        showSection(perfilDos);
        console.log("click en información");
    });
    fotosLink.addEventListener("click", function() {
        hideAllSections();
        showSection(fotos);
        showSection(perfilUno);
        console.log("click en fotos");
    });
});
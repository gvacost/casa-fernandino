let iimm = document.createElement('section');
let images = document.getElementById('imagenes');

function clickEvent (){
    reset();
    let buttton = document.getElementById('BEBEDEROS').value;
    if (buttton == 'BEBEDEROS'){
        let img1 = document.createElement('img');
        let img2 = document.createElement('img');
        img1.src = 'Productos/Bebederos/Cat-Page-36.jpg';
        img1.alt = 'Bebederos'
        img2.src = 'Productos/Bebederos/Cat-Page-40.jpg';
        img2.alt = 'Buzones'
        iimm.appendChild(img1);
        iimm.appendChild(img2);
        images.append(iimm);
    }
}
function clikBid(){
    reset();
    let buttton = document.getElementById('BIDIRECCIONALES').value;
    if(buttton == 'BIDIRECCIONALES'){
        let img = document.createElement('img');
        img.src = 'Productos/Bidireccionales/Cat-Page-32.jpg';
        img.alt = 'Bebederos'
        iimm.appendChild(img);
        images.append(iimm);
    }
}
function clikComp(){
    reset();
    let buttton = document.getElementById('COMPLEMENTOS').value;
    if(buttton == 'COMPLEMENTOS'){
        let img = document.createElement('img');
        img.src = 'Productos/Complementos/Cat-Page44.jpg';
        img.alt = 'Complementos';
        iimm.appendChild(img);
        images.append(iimm);
    }
}

function clikJJ(){
    reset();
    let buttton = document.getElementById('JUEGOSJARDIN').value;
    if(buttton == 'JUEGOSJARDIN'){
        let img = document.createElement('img');
        let img1 = document.createElement('img');
        let img2 = document.createElement('img');
        let img3 = document.createElement('img');
        let img4 = document.createElement('img');
        img.src = 'Productos/JuegosJardin/CatPage48.jpg';
        img.alt = 'Juegos de Jardín';
        img1.src = 'Productos/JuegosJardin/CatPage49.jpg';
        img1.alt = 'Juegos de Jardín';
        img2.src = 'Productos/JuegosJardin/CatPage50.jpg';
        img2.alt = 'Juegos de Jardín';
        img3.src = 'Productos/JuegosJardin/CatPage51.jpg';
        img3.alt = 'Juegos de Jardín';
        img4.src = 'Productos/JuegosJardin/CatPage52.jpg';
        iimm.appendChild(img);
        iimm.appendChild(img1);
        iimm.appendChild(img2);
        iimm.appendChild(img3);
        iimm.appendChild(img4);
        images.append(iimm);
    }
}
function clickCol(){
    reset();
    let selcol = document.getElementById('COLUMNAS').value;
    if (selcol === 'sconfarol'){
        reset();
        let img = document.createElement('img');
        img.src = '';
        img.alt = 'Columnas con Farol';
        iimm.appendChild(img);
        images.append(iimm); 
    }
    if (selcol === 'sconcapitel'){
        reset();
        let img1 = document.createElement('img');
        img1.src = '';
        img1.alt = 'Columnas con Capitel';
        iimm.appendChild(img1);
        images.append(iimm); 
    }
    if (selcol === 'senderos'){
        reset();
        let img2 = document.createElement('img');
        img2.src = '';
        img2.alt = 'Senderos';
        iimm.appendChild(img2);
        images.append(iimm); 
    }
    if (selcol === 'dconfarol'){
        reset();
        let img3 = document.createElement('img');
        img3.src = '';
        img3.alt = 'Columnas Doble Farol';
        iimm.appendChild(img3);
        images.append(iimm); 
    }
    if (selcol === 'economicas'){
        reset();
        let img4 = document.createElement('img');
        img4.src = '';
        img4.alt = 'Columnas Economicas';
        iimm.appendChild(img4); 
        images.append(iimm); 
    }
    if (selcol === 'deplaza'){
        reset();
        let img5 = document.createElement('img');
        img5.src = '';
        img5.alt = 'Columnas de Plaza';
        iimm.appendChild(img5);
        images.append(iimm); 
    }
}

function clikFar(){
    reset();
    let selfar = document.getElementById('FAROLES').value;
    if (selfar === 'pcolumnas'){
        reset();
        let img = document.createElement('img');
        img.src = '';
        img.alt = 'Faroles para Columnas';
        iimm.appendChild(img);
        images.append(img);
    }
    if (selfar === 'medios'){
        reset();
        let img = document.createElement('img');
        img.src = '';
        img.alt = 'Faroles Medios';
        iimm.appendChild(img);
        images.append(img);
    }
    if (selfar === 'colgantes'){
        reset();
        let img = document.createElement('img');
        img.src = '';
        img.alt = 'Faroles Colgantes';
        iimm.appendChild(img);
        images.append(img);
    }
    if (selfar === 'cmensula'){
        reset();
        let img = document.createElement('img');
        img.src = '';
        img.alt = 'Faroles con Mensula';
        iimm.appendChild(img);
        images.append(img);
    }
}
function reset(){
    iimm.replaceChildren('');
}

document.getElementById('BEBEDEROS').addEventListener('click', clickEvent);
document.getElementById('BIDIRECCIONALES').addEventListener('click', clikBid);
document.getElementById('COMPLEMENTOS').addEventListener('click', clikComp);
document.getElementById('JUEGOSJARDIN').addEventListener('click', clikJJ);
document.getElementById('COLUMNAS').addEventListener('change', clickCol);
document.getElementById('FAROLES').addEventListener('change', clikFar);

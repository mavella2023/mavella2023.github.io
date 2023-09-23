document.getElementById("bo_video").addEventListener('click', function ()  {
    //Cuando se haga click en le boton video
    //Aparece seccion video y las demas queda ocultas
        document.getElementById('estudios').style.display= ' none ';
        document.getElementById('cursos').style.display= ' none ';
        document.getElementById('experiencia').style.display= ' none ';
        document.getElementById('video').style.display= ' block ';
        
        
    });
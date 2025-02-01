enterView({
    selector: 'section',
    enter: function(el) {
        el.classList.add('entered');
    }
})

let frameNumber = 0, 
playbackConst = 1000, // Facteur d’ajustement pour synchroniser le scroll et la lecture de la vidéo.
setHeight = document.getElementById("set-height"), // Hauteur du document
 
vid = document.getElementById('v0'); 

/* 
Dès le chargement des metadatas de la vidéo, on ajuste la hauteur de #set-height pour correspondre à la durée de la vidéo multipliée par playbackConst.
Permet un effet de scroll fluide qui suit la longueur de la vidéo.
*/
vid.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


function scrollPlay(){  
    var frameNumber  = window.pageYOffset / playbackConst;
    vid.currentTime  = frameNumber;
    window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);
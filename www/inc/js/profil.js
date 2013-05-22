// Bouton qui affiche le profil
$(".profilBtn").click(function() {
	showProfil();
});

function showProfil(){
	$("#myP").html("");

	var myHTML = "<button onclick='backToHome()' class='backToHome'>Retour</button>";
    $('#myP').append(myHTML);

    // image stockée via local storage
    var imgLocalStor = window.localStorage.getItem("imgProfil");

    if (imgLocalStor == null)
    {
		var imgProfil = 'inc/img/selfProfil.jpg';
    }
    else
    {
    	var imgProfil = imgLocalStor;
    }

    var myHTML = '	<div id="profil"> <p>Montre nous ton plus beau sourire !</p> 	<div class="centerProfil">   <img src="'+imgProfil+'" class="imgProfil"> <div class="clear"></div> <button onclick="capturePhotoProfil();"><img src="inc/img/photo.png"></button>  <button onclick="getPhotoProfil(pictureSource.SAVEDPHOTOALBUM);"><img src="inc/img/gallery.png"></button> </div> 	</div>';
    $('#myP').append(myHTML);	
}


function backToHome(){
	db.transaction(queryDB, errorCB);
};

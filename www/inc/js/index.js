    // Déclaration des variables qui devront communiquer entre plusieurs fonctions
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 
    var db = window.openDatabase("Database", "1.0", "Cordova PICPATTEN", 200000); // connection à la bd
    var uriToDel;
    var latitude;
    var longitude;
    var alreadySent;


    // Wait for Cordova to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);


    
    ///////////////////// Cordova is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;

        // Affiche toutes les images en bd au démarrade de l'application
        db.transaction(queryDB, errorCB);
    }
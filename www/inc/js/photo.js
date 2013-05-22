
    // Called when a photo is successfully retrieved
    //
    var globalImageURI;
    function onPhotoURISuccess(imageURI) {
       globalImageURI=imageURI;

      // db
      db.transaction(populateDB, errorCB, successCB);
    }

    // A button will call this function
    //
    function capturePhoto() {
      latitude = "Pas de latitude";
      longitude = "Pas de longitude";
      navigator.geolocation.getCurrentPosition(onSuccessGeoloc ,onErrorGeoloc ,{timeout: 500, enableHighAccuracy:true});
      
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 15, 
        destinationType: destinationType.FILE_URI});
    }

    // A button will call this function
    //
    function getPhoto(source) {
      latitude = "Pas de latitude";
      longitude = "Pas de longitude";
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 15, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Erreur car : ' + message);
    }


    // Fonctions spécifiques à l'ajout d'une photo de profil
    function capturePhotoProfil() {
      navigator.camera.getPicture(onPhotoProfilURISuccess, onFail, { quality: 15, 
        destinationType: destinationType.FILE_URI});
    }

    function getPhotoProfil(source) {
      navigator.camera.getPicture(onPhotoProfilURISuccess, onFail, { quality: 15, 
        destinationType: destinationType.FILE_URI, sourceType: source });
    }

    function onPhotoProfilURISuccess(imageURI) {
       window.localStorage.setItem("imgProfil", imageURI);

       showProfil();
    }


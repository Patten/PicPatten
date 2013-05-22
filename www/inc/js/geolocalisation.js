    // onSuccess Geolocation
    //
    function onSuccessGeoloc(position) {
      alert('La position de l\'image a été enregistrée.');
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    }

    // onError Callback receives a PositionError object
    //
    function onErrorGeoloc(error) {
        alert('Géolocalisation impossible.');
    }
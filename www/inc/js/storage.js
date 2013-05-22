    /////////////////////// BD

    // Populate the database 
    //
    function populateDB(tx) {
        var myPhoto = globalImageURI; // Récupérer l'emplacement de la photo dans la machine
        alreadySent = false;
        //tx.executeSql('DROP TABLE IF EXISTS PICPATTEN');
        tx.executeSql('CREATE TABLE IF NOT EXISTS PICPATTEN (id INTEGER PRIMARY KEY AUTOINCREMENT, pathPicture, latitude, longitude, alreadySent)');
        tx.executeSql('INSERT INTO PICPATTEN (pathPicture, latitude, longitude, alreadySent) VALUES ("'+ myPhoto +'", "'+ latitude +'", "'+ longitude +'", "'+ alreadySent +'")');
    }

    // Query the database
    //
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM PICPATTEN', [], querySuccess, errorCB);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var lengthResult = results.rows.length;
        $("#myP").html("");
        for (var i=0;i<lengthResult;i++)
        {
            var myHTML = '<div onClick="showHide(\'option'+results.rows.item(i).id+'\')"><img src="'+results.rows.item(i).pathPicture+'" class="imgGallery" /><div id="plusoption'+results.rows.item(i).id+'" class="plusBack"><div class="plus"><img src="inc/img/plus.png"></div></div><div id="option'+results.rows.item(i).id+'" class="anImage" style="display:none"><div class="coord"><p>Longitude: '+results.rows.item(i).longitude+'</p><p>Latitude: '+results.rows.item(i).latitude+'</p></div><img class="delete" src="inc/img/delete.png" onClick="deleteImage(\''+results.rows.item(i).pathPicture+'\');"/><div class="clear"></div></div></div>';
            $('#myP').append(myHTML);
        }

        // this will be true since it was a select statement and so rowsAffected was 0
        if (!results.rowsAffected) {
            console.log('No rows affected!');
            return false;
        }
        // for an insert statement, this property will return the ID of the last inserted row
        console.log("Last inserted row ID = " + results.insertId);
    }

    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
        db.transaction(queryDB, errorCB);
    }

    function deleteImage(uri) {
        var del = confirm("Voulez-vous supprimer défitivement cette photo ?");

        if (del)
        {
            uriToDel = uri;
            db.transaction(deleteImageQuery, errorCB, successCB);
        }
    }

    function deleteImageQuery(tx)
    {
        tx.executeSql('DELETE  FROM PICPATTEN WHERE pathPicture = "'+ uriToDel +'"');
        alert("La photo a été supprimée");
    }

    // affiche/masquer le bloc  coordonées GPS/suppression
    function showHide(id)
    {
        var display = $('#'+id).css("display");
        if(display == "none")
        {
            $('#'+id).css( "display", "block" );
            $('#plus'+id).css( "display", "none" );
        }
        else
        {
            $('#'+id).css( "display", "none" );
            $('#plus'+id).css( "display", "block" );
        }
    }



var emparr = [];
var classarr = [];
var wincount = 0;
var match = false;

function getFlipValue(imageId, classId){                                    // onclick function
    document.getElementById(classId).style.transform = "rotateY(180deg)";   // to flip
    document.getElementById(classId).style.transition = "transform 0.6s";   // flip seconds
    emparr.push(imageId);                                                   // push id value to emparr
    classarr.push(classId);                                                     // push unique class id to classarr
    console.log(classarr+" emparr:"+emparr);
    if(classarr[0] == classarr[1]){                                         // if both classid is same condition fail
        classarr.pop();
        emparr.pop();
}else{                                                                      // to start validate
    if(emparr.length == 2 && classarr.length == 2){                         // checks for two elements in array
        if(!validate(emparr)){                                              // returns validate function !not true
             setTimeout(function(){                                         // to wait 1.5sec
             for(var i = 0 ; i < classarr.length ; i++){                    // to reflip the card if not match
                document.getElementById(classarr[i]).style.transform = "rotateY(360deg)";
                document.getElementById(classarr[i]).style.transition = "transform 0.6s";
                console.log(classarr[i], 'for missmatch');
                }
                 classarr = [];                                             // empty the classarray for next flip card
                 emparr = [];                                               // empty the emparray for next flip card
                 console.log(classarr);
                 },1500);

        }else{                                                              // if both the flip matches
             setTimeout(function(){
             for(var i = 0 ; i < classarr.length ; i++){
                document.getElementById(classarr[i]).remove();              // removes the selected card
                console.log(classarr[i], 'for match')
                console.log(classarr, 'for match')
            }
            classarr = [];                                                  // empty the arrays for next flip card
            emparr = [];
            console.log(classarr)
            wincount += 1;
            if(wincount==4){
            x = document.getElementById('win').innerHTML = "YOU WON";
            }
            alert('it matches')
        },1000)}
    }
    }
}
function validate(array){                                                   // validate functions to check matching elements
         if(array[0] == array[1]){                                          // if both flip matches
         match = true;                                                      // returns true
        }else{
            match = false;                                                  // if it doesn't match returns false
//            emparr = [];
        }
//    }
        return match;                                                       // returns to onclick functions
}

function sortTable() {                                                      // to randomize the table
  let table = document.getElementById("tab");                               // table

  let rowsCollection = table.querySelectorAll("tr");                        // getting tr data

  let rows = Array.from(rowsCollection)                                     // pushing tr to rows array

  shuffleArray(rows);                                                       // calling shuffle function pushing array

  for (const row of rows) {                                                 // pushing tr to table
    table.appendChild(row);
  }
}

function shuffleArray(array) {                                              //shuffle function
  for (var i = array.length - 1; i > 0; i--) {                              // randomizing tr
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
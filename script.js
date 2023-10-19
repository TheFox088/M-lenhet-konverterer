//function til oppgaven
function convertLength() {
    const myInput = document.querySelector("#myInputID").value;
    const toValue = document.querySelector("#toIDValue").value;
    const fromValue = document.querySelector("#fromIDValue").value;
    const displayValue = document.querySelector("#displayValueID");
    
    //Alert til nor man bruke det samme valge
    let result;
     if (toValue === fromValue) {
         alert("Same value selected");
         return; //stop current function
     }
     // Starter med CM først er mer logisk får meg å starte med det 
    if (fromValue === "cm" && toValue === "m"){
		result = myInput / 100;
	}else if(fromValue === "cm" && toValue ==="km"){
        result = myInput / 100000;
    }else if(fromValue === "cm" && toValue === "mm"){
        result = myInput * 10;
    }else if(fromValue === "cm" && toValue === "mil"){
        result = myInput / 1000000;
        // starter på M her
    }else if(fromValue === "m" && toValue === "cm"){
        result = myInput / 100000;
    }else if(fromValue === "m" && toValue === "mm"){
        result = myInput * 1000;
    }else if(fromValue === "m" && toValue === "mil"){
        result = myInput / 10000;
    }else if(fromValue === "m" && toValue === "km"){
        result = myInput * 100;
        // starter på MM her
    }else if(fromValue === "mm" && toValue === "m"){
        result = myInput  / 1000;
    }else if(fromValue === "mm" && toValue === "cm"){
        result = myInput / 10;
    }else if(fromValue === "mm" && toValue === "mil"){
        result = myInput / 10000000;
    }else if(fromValue === "mm" && toValue === "km"){
        result = myInput / 1000000;
        //Starter på km her
    }else if(fromValue === "km" && toValue === "cm"){
        result = myInput / 1000;
    }else if(fromValue === "km" && toValue === "m"){
        result = myInput * 1000; 
    }else if(fromValue === "km" && toValue === "mm"){
        result = myInput * 1000000;
    }else if(fromValue === "km" && toValue === "mil"){
        result = myInput / 10;
        //starter på mil her
    }else if(fromValue === "mil" && toValue === "m"){
        result = myInput / 10000;
    }else if(fromValue === "mil" && toValue === "cm"){
        result = myInput * 1000000;
    }else if(fromValue === "mil" && toValue === "mm"){
        result = myInput * 10000000;
    }else if(fromValue === "mil" && toValue === "km"){
        result = myInput  * 10;
    }                   
    displayValue.textContent = result.toFixed(3);
}


//nor det kommer til framgangs måten min så liker eg og holde meg til den metoden eg blit lært opp i.
//og ikke bruke en metode eg ikke lært opp lære eg ingen tin av 
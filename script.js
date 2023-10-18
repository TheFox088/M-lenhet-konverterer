function convertLength() {
    const myInput = document.querySelector("#myInputID").value;
    const toValue = document.querySelector("#toIDValue").value;
    const fromValue = document.querySelector("#fromIDValue").value;
    const displayValue = document.querySelector("#displayValueID");
    
    let result;
     if (toValue === fromValue) {
         alert("Same value selected");
         return; //stop current function
     }
    if (fromValue === "cm" && toValue === "m"){
		result = myInput / 100;
	}else if(fromValue === "cm" && toValue ==="km"){
        result = myInput / 100000;
    }else if(fromValue === "cm" && toValue === "mm"){
        result = myInput * 10;
    }else if(fromValue === "cm" && toValue === "mil"){
        result = myInput / 1000000;
    }else if(fromValue === "m" && toValue === "cm"){
        result = myInput / 100000;
    }else if(fromValue === "m" && toValue === "mm"){
        result = myInput * 1000;
    }else if(fromValue === "m" && toValue === "mil"){
        result = myInput / 10000;
    }else if(fromValue === "m" && toValue === "km"){
        result = myInput * 100;
    }else if(fromValue === "mm" && toValue === "m"){
        result = myInput  / 1000;
    }else if(fromValue === "mm" && toValue === "cm"){
        result = myInput / 10;
    }else if(fromValue === "mm" && toValue === "mil"){
        result = myInput / 10000000;
    }else if(fromValue === "mm" && toValue === "km"){
        result = myInput / 1000000;
    }else if(fromValue === "km" && toValue === "cm"){
        result = myInput / 1000;
    }else if(fromValue === "km" && toValue === "m"){
        result = myInput * 1000; 
    }else if(fromValue === "km" && toValue === "mm"){
        result = myInput * 1000000;
    }else if(fromValue === "km" && toValue === "mil"){
        result = myInput / 10;
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


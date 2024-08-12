const keyObjects = ["AC", "DE", "="];
const calcObjects = ["+", "-", "/", "*"];
const printedValues = []; // Array to keep track of values that have been printed once
// Function to display the value of the clicked button
function displayValue() {
     
    keybtns.forEach(button => {
        button.classList.remove('clicked'); // Remove the 'clicked' class from all buttons
    });
 // Add the 'clicked' class to the currently clicked button
    this.classList.add('clicked');
    
    if (!keyObjects.includes(this.value)) {
        
        if (calcObjects.includes(this.value)) {
            // If it's not already printed, display it and add to printedValues
            if (!printedValues.includes(this.value)) {
                document.getElementById("dispalyContainer").value += this.value;
                printedValues.push(this.value); // Mark as printed
            }
        } else {
            // If it's not a one-time value, append it normally
            document.getElementById("dispalyContainer").value += this.value;
            
            console.log(document.getElementById("dispalyContainer").value);
        }
    }

    else if (this.value === keyObjects[0]) {
        document.getElementById("dispalyContainer").value = '';
        printedValues.length=0;
    }

    else if (this.value === keyObjects[1]) {
        document.getElementById("dispalyContainer").value = document.getElementById("dispalyContainer").value.toString().slice(0,-1)
    }
    
    else if (this.value === keyObjects[2]) {
        document.getElementById("dispalyContainer").value = eval(document.getElementById("dispalyContainer").value);
    }
    }


// Attach the displayValue function to all buttons with class "btn"
const keybtns = document.querySelectorAll('input[type="button"]');

keybtns.forEach(button => {
    button.addEventListener('click', displayValue);
  
});



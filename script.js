
        //the below is the code for the to run javascript after the html pages is loaded
        document.addEventListener('DOMContentLoaded', function () {
            const display = document.getElementById('calc-display');
            const buttons = document.getElementsByClassName('btn')

            let currentValue = "";
             function evaluateResult(){
                console.log('currentValue',currentValue)
                const convertedValue = currentValue
                .replace("x", "*")
                .replace("÷", "/")
                .replace("%", "*0.01")
                .replace("sin", "Math.sin")
                .replace("cos", "Math.cos")
                .replace("ln", "Math.log")
                .replace("π", "Math.PI")
                .replace("e", "Math.E")
                .replace("tan", "Math.tan")
                .replace("log", "Math.log10")
                .replace("√", "Math.sqrt")


                console.log('currentValue',convertedValue )
             const result = eval(convertedValue);
             currentValue = result.toString();
             // the toString function is uesd convet into string
             display.value = currentValue;
             //the  display.value = currentValue; is used to show the value in the text box
             }
             
           
           for(let i = 0; i< buttons.length; i++){
            const button = buttons[i];
            button.addEventListener('click', function(){
                const value =button.innerText;
                //the try catch method is used to show the error that is made by the user ehile using
                try{
                    if(value == "AC"){
                        currentValue = "";
                        display.value = currentValue;
                    } else if(value== "="){
                        evaluateResult();
                    }
                    else{
    
                        currentValue += value;
                        console.log('currentValue:' , currentValue);
                         display.value = currentValue;
                    }
                } catch(error){
                  console.error(error);
                  currentValue="ERROR"
                  display.value = currentValue;
                }
                


            })
        }

        });
       


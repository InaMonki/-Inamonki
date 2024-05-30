window.addEventListener ('load', registerEvents,false);






/***************password&&&&&&&&&&&&&&& */
function registerEvents(e){
    document.getElementById("open_file").addEventListener('click',password,false);
}

function password(){
    var passkey = 1000;
    var passKeyPrompt = prompt("Hi,i'm Baymax! Please enter Passkey");
    for(i = 1;i < 2;i++){
            if (passKeyPrompt == ""){
                break;
            } 
                if (passKeyPrompt == passkey){
                    document.getElementById("approved").innerHTML = "Approved!";
                    document.getElementById("open_file2").style.display = "block";
                    
                        break;
                }else{
                        document.getElementById("approved").innerHTML = "Not Found!";
                        break;
            }
        
    }
};

/************************************************************** */


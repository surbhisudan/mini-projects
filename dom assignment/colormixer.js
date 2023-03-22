function colormixer(color1,color2){
    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    console.log("purple");
                    break;
                case "yellow":
                    console.log("orange")
                    break;
            }
        break;   
            }
    switch(color1){
        case "blue":
            switch (color2){
                case "yellow":
                    console.log("green")
                    break;
            }
            break;
    }  
   
    switch (color2) {
        case "red":
            switch (color1) {
                case "blue":
                    console.log("purple");
                    break;
                case "yellow":
                    console.log("orange")
                    break;
            } 
            break;      
        }
       
        switch (color1) {
            case "yellow":
                switch (color2) {
                    case "blue":
                        console.log("green")
                }
                
                break;
        
            default:
                console.log("Invalid color combination")
                break;
        }
   
    }
colormixer("red","blue");
colormixer("yellow","blue");

function textValue(self){
    if(isNaN(self.value) == true){
        self.value = ''
    }
    else{
        self.value
    }
}

function buttonchangeValue(self, self2){
    if(self.value == "-"){
        if(document.querySelector(self2).value < 1){
            document.querySelector(self2).value = 0;
        }
        else{
            document.querySelector(self2).value --;
        }
        
    }
    else if(self.value == "+"){
        document.querySelector(self2).value ++;
    }
}
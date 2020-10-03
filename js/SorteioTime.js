class SorteioTime {
    
    sorteio(){
        return Math.floor((Math.random()*10)+1);
    }

    equipeA(){

        timeA.length = 0;
        timeB.length = 0;
        
        while (timeA.length < 5){    
            let numeroSorteado = this.sorteio();
            let controleTimeA = acharValor(numeroSorteado, timeA);
        
            if(controleTimeA==-1){
                timeA.push(numeroSorteado);
            }
        }

        return timeA;
    }

    equipeB(){
        
        while (timeB.length < 5) {
            let numeroSorteado = this.sorteio();
            let controleTimeA = acharValor(numeroSorteado, timeA)
            let controleTimeB = acharValor(numeroSorteado, timeB)
        
            if ((controleTimeA == -1) && (controleTimeB == -1)) {
                timeB.push(numeroSorteado);
            }
        }

        return timeB;
    }
    
}
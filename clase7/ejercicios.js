function DibujarArbol(altura){
    console.log(altura)

    let arbol = "";
    let filas;
    let i;
    let j;
    for(i=0; i<altura; i++){
        arbol += "<p>";    
        for(j=0; j<=i; j++){
            arbol +="*";
        }
        arbol += "</p>";    
    }
    
    document.getElementById('arbol').innerHTML = arbol;
}

function CalcularDescuento(monto, medioPago){
    if(monto <200){
        return monto;
    }else{
        if(monto>=200 && monto<400){
            //aplico descuentos
            switch(medioPago){
                case 'E':
                    monto = monto * 0.7;
                    break;
                case 'D':
                    monto = monto * 0.8;
                    break;
                case 'C':
                    monto = monto *0.9;
                    break;
                default:
                    console.log("Error");
            }

            return monto;
        }else{
            monto = monto * 0.6;
            return monto;
        }
    }
}
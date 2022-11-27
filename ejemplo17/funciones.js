function saludar(saludarFuction){
    saludarFuction();
}

const saludoInternacional = function(){
    console.log('Hola Mundo'); 
}

const saludoMexicano = () =>{
    console.log('Quihubole!'); 
}

saludar(saludoInternacional); 
saludar(saludoMexicano);
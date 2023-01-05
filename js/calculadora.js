
function insertar(num){
        let pantalla = $('#calculadora-pantalla').val();
        $('#calculadora-pantalla').val(pantalla + num);
};

function borrar(){
    $('#calculadora-pantalla').val('');
}

function igual(){
    $('#calculadora-pantalla').val(eval($('#calculadora-pantalla').val()));
}
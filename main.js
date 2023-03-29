const soloL =/^[a-z]+\D$/i
const formato=/^[0-2]{1}[0-9]{1}|^[0-3]{1}[0-1]{1}[/][0]{1}[0-9]{1}|[1]{1}[0-2]{1}[/]\d{4}/i
const telefon=/[3]\d{9}$/
const correo=/^[a-z]+[0-9]+@[a-z]+\.[a-z]/i
let apellidos=''
let nombres=''
let formatos=''
let telefonos=''
let correoss=''
let contraseñas=''
registrar.addEventListener('click',()=>{
    
    nombres = soloL.test(nombre.value)
    apellidos=soloL.test(apellido.value)
    formatos=formato.test(fecha.value)
    telefonos=telefon.test(telefono.value)
    correoss=correo.test(email.value)


    if(nombres==true && apellidos==true && formatos==true && telefonos==true && correoss==true){
        if(contraseña.value != ''){
            if(contraseña.value === contraseña2.value){
                alert('registro exitoso')        

            }else{
                alert('contraseñas diferentes')
            }
        }else{
            alert('contraseña vacia')
        }
    }else{
        alert('registro invalido')
    }
    
cancelar.addEventListener('click',()=>{
    nombre.value=''
    apellido.value=''
    fecha.value=''
    telefono.value=''
    email.value=''
    contraseña.value=''
    contraseña2.value=''


})

})
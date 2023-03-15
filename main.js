const soloL =/^[a-z]+\D$/gi
const formato=/[0-3]{1}[0-9]{1}[/][0]{1}[0-9]{1}|[1]{1}[0-2]{1}[/]\d{4}/gi
const telefon=/[3]\d{9}$/
const correo=/^[a-z]+[0-9]+@[a-z]+\.[a-z]/gi
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
    
    // if (nombres == true){
    //  } else{
    //     alert('nombre incorrecto')
    // }

    // if(apellidos==true){
    //     console.log('listo')
    // }else{
    //     alert('apellido incorrecto')
    // }
    
    // if(formatos==true){
    //     console.log('listo formato')
    // }else{
    //     alert('apellido incorrecto')
    // }
    // if(telefonos==true){
    //     console.log('listo el telefono')
    // }else{
    //     console.log('inavlido telefono')
    // }
    // if(correoss == true){
    //     console.log('listo el telefono')
    // }else{
    //     console.log('inavlido telefono')
    // }
    if(contraseña.value === contraseña2.value){
        console.log('la contraseña es igual')
        contraseñas=true
    }else{
        console.log('invalido contraseña')
    }
})
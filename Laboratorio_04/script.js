function Registrar(){
    var nombre = document.getElementsByName("nombre")[0].value;
    var apellido = document.getElementsByName("apellido")[0].value;
    var telefono = document.getElementsByName("telefono")[0].value;
    var producto = document.getElementsByName("producto")[0].value;
    var mensaje = document.getElementsByName("mensaje")[0].value;
    
    
    var v_nombre = document.getElementById("verificar_nombre");
    var v_apellido = document.getElementById("verificar_apellido");
    var v_telefono = document.getElementById("verificar_telefono");
    var v_producto = document.getElementById("verificar_producto");
    var v_mensaje = document.getElementById("verificar_mensaje");
    var v_resultado2 = document.getElementById("resultado2");

    v_nombre.innerHTML = "";
    v_apellido.innerHTML = "";
    v_telefono.innerHTML = "";
    v_producto.innerHTML = "";
    v_mensaje.innerHTML = "";
    v_resultado2.innerHTML = "";  
    
    if(!isNaN(nombre)||/^[]*$/.test(nombre)||nombre.length < 10){
        v_nombre.innerHTML = ("<b>❌Nombre invalidado❌</b>");
    }else if(!isNaN(apellido)|| apellido.length > 15){
        v_apellido.innerHTML = ("<b>❌Apellido invalidado❌</b>");
    }else if(!/^[0-9]*$/.test(telefono)||telefono === "" || telefono.length > 9){
        v_telefono.innerHTML = ("<b>❌Telefono no validado❌</b>")
        
    }else if(!isNaN(producto)|| producto === ""){
        v_producto.innerHTML = ("<b>❌Producto no validado❌</b>");


    }else if(!isNaN(mensaje)|| mensaje.length > 30){
        v_mensaje.innerHTML = ("<b>❌Mensaje invalidado❌</b>");
    }
    else{
        v_resultado2.innerHTML = ("<b>Validacion exitosa</b>");

        alert("Envio exitoso");
    }
        
        


       

    

     

}

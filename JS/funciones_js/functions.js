
/**document.getElementById('boton').onclick = function () {
    console.log ("Capturamos el evento clic");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
} 
    document.addEventListener(clic, function() {
        console.log ("Hola mundo desde EventListener")
        document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
    }
    */
    document.getElementById('boton').addEventListener('clic', function() {
        console.log ("Hola mundo desde EventListener");
        document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
    }

    document.getElementById('boton_color').onclick = function () {
        document.body.style.backgroundColor = 'FF0000';
    }

    document.getElementById('boton_color').onclick = function () {
        document.body.style.backgroundColor = 'blue';
    }

    document.getElementById('boton_ocultar').onclick = function () {
        document.body.style.backgroundColor = 'blue';
    }document.getElementById.apply(demo).style.display.'none');

    document.getElementsByClassName('parrafo')

    <script>
    const collection = document.getElementsByClassName("prueba");
    for (let i = 0; i < collection.lenght i++) {
        collection[i].style.backgroundColor = Green; 
    }










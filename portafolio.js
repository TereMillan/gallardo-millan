// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.JPG",
    title: "Montípora",
    about: "Luminaria de cera de vela, que a través de su textura y luz provoca un ambiente de relajo.",
}, {
    figure: "media/foto-02.jpeg",
    title: "Nekochi",
    about: "Marca de producto para evacuar gatos con urgencia.",
}, {
    figure: "media/foto-03.jpg",
    title: "Bisutería",
    about: " Porcelana en frio y marmolado, trabajo en conjunto con micro emprendedora.",
}, {
    figure: "media/foto-04.png",
    title: "Ilustraciones",
      about: "",

}, {
    figure: "media/foto-05.jpg",
    title: "Apa",
    about: "Dispositivo para cargar fácilmente a personas con movilidad reducida.",
}, {
    figure: "media/foto-06.png",
    title: "Contacto Espacial",
    about: "Juego de mesa no dependiente del sentido de la vista.",
},

{
    figure: "media/foto-07.jpeg",
    title: "Domésticxs",
    about: "Delantales de jeans reciclados, trabajo en conjunto con micro emprendedora.",
},

]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});

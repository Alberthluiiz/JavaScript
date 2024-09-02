const boton = document.querySelector("#boton");
/* console.log(boton); */

boton.addEventListener("click", function () {
  /* console.log('Diste Click en el boton'); */
  Notification.requestPermission().then((resultado) =>
    console.log(`El resultado es: `, resultado)
  );
});

if(Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/yausig.png',
        body: 'Aprendiendo JavaScript'
    });
}

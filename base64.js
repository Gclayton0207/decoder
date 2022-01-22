function base64() {
    var b64 = document.querySelector(".receber").value;

    if (document.querySelector(".codificar").checked) {
        let converter = btoa(b64);
        document.querySelector(".resultado").innerText = converter;
    } else if (document.querySelector(".descodificar").checked) {
        let converter = atob(b64);
        document.querySelector(".resultado").innerText = converter;
    }
}
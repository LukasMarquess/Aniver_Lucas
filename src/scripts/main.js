AOS.init();

document.addEventListener("DOMContentLoaded", function() {
    const dataDoEvento = new Date("2026-05-15T18:00:00");

    function atualizarContador() {
        const agora = new Date();
        const tempoRestante = dataDoEvento - agora;

        const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

        if(tempoRestante < 0) {
        document.getElementById("contador").innerHTML = "O evento já ocorreu.";
        }
        else{
            document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }

    }

    setInterval(atualizarContador, 1000);

    atualizarContador();

});

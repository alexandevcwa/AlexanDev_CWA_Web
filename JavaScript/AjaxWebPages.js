$(document).ready(function () {
  $.ajax({
    url: "../Html/Home.html",
    dataType: "html",
    success: function (data) {
      $("#HomePage").html(data);
    },
  });
});

$(document).ready(function () {
  $("#cargar-hojavida").click(function () {
    $.ajax({
      url: "../Html/HojaVida.html",
      dataType: "html",
      success: function (data) {
        $("#contain").html(data);
        var section = document.getElementById("contain");
        section.scrollIntoView({ behavior: "smooth" });
      },
    });
  });
});

$(document).ready(function () {
  $("#cargar-critica").click(function () {
    $.ajax({
      url: "../Html/Critica.html",
      dataType: "html",
      success: function (data) {
        $("#contain").html(data);
        var section = document.getElementById("contain");
        section.scrollIntoView({ behavior: "smooth" });
      },
    });
  });
});

$(document).ready(function () {
  $("#cargar-temas").click(function () {
    $.ajax({
      url: "../Html/Temas.html",
      dataType: "html",
      success: function (data) {
        $("#contain").html(data);
        var section = document.getElementById("contain");
        section.scrollIntoView({ behavior: "smooth" });
      },
    });
  });
});


function redirigirWhatsApp() {
  // Reemplaza "XXXXXXXXXXXX" con el número de teléfono al que deseas enviar el mensaje
  var numeroTelefono = "xxxxxxxx";

  // Construye la URL de WhatsApp con el número de teléfono y el texto del mensaje (opcional)
  var urlWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefono;

  // Redirige a la URL de WhatsApp
  window.location.href = urlWhatsApp;
}
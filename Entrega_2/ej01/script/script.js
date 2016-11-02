    var favoritos = document.querySelectorAll(".fav");
    for (var i = 0; i < favoritos.length; i++) {
        // https://developer.mozilla.org/es/docs/Web/API/Element/classList
        favoritos[i].addEventListener("click", function () {
            if (this.firstChild.style.color == "red") {
                this.firstChild.style.color = "#ffa804";
            }
            else {
                this.firstChild.style.color = "red";
            }
        });
    }
    /* */
    var compartir = document.querySelectorAll(".share");
    for (var i = 0; i < compartir.length; i++) {
        // https://developer.mozilla.org/es/docs/Web/API/Element/classList
        compartir[i].addEventListener("click", function () {
            var actual = this.parentNode.parentNode.parentNode.firstElementChild.firstElementChild;
            var img = this.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.getAttribute("src");
            //alert(this.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.className);
            actual.setAttribute("src", "images/shared.png");
            setTimeout(function () {
                actual.setAttribute("src", img);
            }, 1500);
        });
    }
    $(".comentar").click(function () {
        //alert(this.parentNode.parentNode.parentNode.lastElementChild.firstElementChild.className);
        var seccion = $(this.parentNode.parentNode.parentNode.lastElementChild);
        if ($(seccion).css('visibility') == 'hidden') {
            $(seccion).css("visibility", "visible");
            $(seccion).css('height', 'inherit');
        }
        var expand = $(this.parentNode.parentNode.parentNode.lastElementChild.firstElementChild);
        var coment = $(this.parentNode.parentNode.parentNode.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling);
        var enviar = $(this.parentNode.parentNode.parentNode.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
        if ($(coment).css('visibility') == 'hidden') {
            $(coment).css('visibility', 'visible');
            $(enviar).css('visibility', 'visible');
            $(seccion).css('height', 'inherit');
        }
        $(".enviar").click(function () {
            var comentario = $(coment).val();
            if (comentario != null) {
                //alert(this.nextElementSibling.nextElementSibling.className);
                var comentarios = $(this.previousElementSibling.previousElementSibling);
                $(comentarios).text(comentario);
            }
            if ($(coment).css('visibility') == 'visible') {
                $(coment).css("visibility", "hidden");
                $(enviar).css("visibility", "hidden");
                $(expand).css("visibility", "visible");
                $(seccion).css('height', '50px');
            }
        });
    });
    $(".expandir").click(function () {
        var val = $(this).text();
        if (val == "+") {
            $(this.parentElement).css('height', 'inherit');
            $(this).text("-");
        }
        else {
            $(this.parentElement).css('height', '50px');
            $(this).text("+");
        }
        return false;
    });

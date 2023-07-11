$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();

        
    })

    $('form').on('submit', function(e) { 
        e.preventDefault();
        const enderecoimagemnova = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoimagemnova}" />`).appendTo(novoItem);
        $(`<div class="overlay-images-link">
            <a href="${enderecoimagemnova}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamamnho real
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereço-imagem-nova').val('');
    })


})


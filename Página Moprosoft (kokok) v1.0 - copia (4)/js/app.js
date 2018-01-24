/*esto fue lo que me funcionaba solo una vez, para mostrar los roles*/
function myFunction (){
	document.getElementById('GrupoRoles') .style.display="block" ;
}

/*boton volver*/
function myFunctionGN (){
    document.getElementById('GestionNegocios') .style.display="none" ;
}
/*boton volver*/


/*Menu lateral*/
$(document).ready(function () {
    $('label.tree-toggler').click(function () {
        $(this).parent().children('ul.tree').toggle(300);
    });
});






/*Mostrar grupo de procesos */
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/


/*Motrar grupo de roles*/
$(document).ready(function(){

    $(".info-button").click(function(){
        var value = $(this).attr('value');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.grupo').hidden('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".grupo").not('.'+value).hide('3000');
            $('.grupo').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".info-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

/*bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb*/

/***********************página prácticas**********************************************/
            /*******Boton de ocultar la seccion de procesos******/
function myFunctionO(){
    document.getElementById('seccionOcultar') .style.display="none" ;
    document.getElementById('btnVer').style.display="block"
}
function myFunctionV(){
    document.getElementById('seccionOcultar') .style.display="block" ;
     document.getElementById('btnVer') .style.display="none" ;
}
/*******************seccion de listado de practicas de acuerdo al nivel de madurez************************/

$(document).ready(function(){

    $(".btnNivel").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            
            $('.table').show('1000');
        }
        else
        {
            $(".table").not('.'+value).hide('3000');
            $('.table').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".btnNivel").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

/**********************seccion de listado de practicas de acuerdo al nivel de madurez************/

/*********************PAGINA DE REGISTRO DE NUEVA PRÁCTICA**************************************/


$(document).on('click', '.input-remove-row', function(){ 
    var tr = $(this).closest('tr');
    tr.fadeOut(200, function(){
        tr.remove();
        calc_total()
    });
});

$(function(){
    $('.preview-add-button').click(function(){
        var form_data = {};
        form_data["CondicionesEntrada"] = $('.payment-form input[name="CondicionesEntrada"]').val();
        form_data["ProductosEntrada"] = $('.payment-form input[name="ProductosEntrada"]').val();
        form_data["remove-row"] = '<span class="glyphicon glyphicon-remove"></span>';
        var row = $('<tr></tr>');
        $.each(form_data, function( type, value ) {
            $('<td class="input-'+type+'"></td>').html(value).appendTo(row);
        });
    });  
});
/*********************PAGINA DE REGISTRO DE NUEVA PRÁCTICA**************************************/

/*******Menú mejorado*******/
$(document).ready(function(){
    //Handles menu drop down
    $('.dropdown-menu').find('form').click(function (e) {
        e.stopPropagation();
    });
});


/****Boton de volver hacia arriba***/
$(document).ready(function(){
      $('body').append('<div id="toTop" class="btn btn-info"><span class="glyphicon glyphicon-chevron-up"></span> Volver arriba</div>');
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        }); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

function FixKalender(){
  $(".fc-scroller table").removeClass("fc-col-header")
  $("tbody .fc-day").removeClass("fc-col-header-cell")
  
  $(".fc-event").css('color','white')
}

/*//Nicht mehr notwendig da gefixt
function FixErmittlung(){
  $('.ck').css('background-color','tan')
}
*/

function FixNetzwerk(){
  //Main Network Site
    $('.accordion').css('color','white')
    
  //MD Network Sites
    $('.caption').css('color','white')
    $('.panel-content').removeClass("bg-lightGray")
    $('div .cell').removeClass("fg-dark")
    $('div .m-5').removeClass("fg-dark").css('color','white')
    


    $('.m-5').each(function(index,value) {
      $(this).addClass("z3ll_md").removeClass('m-5').css('color','white');
      //$(this).html(decodeURI($(value).text()));//@Todo wirkt auf auf Mails wudurch man diese nicht mehr bedienen kann!
      
    });
}


function FixMail(){
  $(".email-to:contains('Ges')").css('background-color','#3700B3')
  $(".email-to:contains('CC')").css('background-color','#6200EE')
  $(".email-from").css('background-color','#3700B3')
}

/* ============================================================================= */

function jload(){
  //Gruppen
  FixKalender();
  FixErmittlung();
  FixNetzwerk();
  
  //FixMail();
}

jload()

 

setInterval(function() {

    // alle 3 Sekunden ausführen

    jload()

}, 3000);

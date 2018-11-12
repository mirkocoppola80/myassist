

var feedbacks = [
    {
        name: "Marco",
        feed: "Ho conosciuto Matteo solo recentemente ma ne ho apprezzato fin da subito le doti organizzative ed umane oltre alla competenza nel proprio lavoro. Nel prossimo futuro sono certo che troveremo il modo di sviluppare una fattiva collaborazione per un proficuo sviluppo delle rispettive attività. Se volete incrementare il vostro Business, se avete un'attività fisica e volete esplorare anche il mondo online vi consiglio vivamente di contattarlo per un colloquio informativo. Saprà certamente consigliarvi ed indirizzarvi verso le migliori soluzioni per il vostro lavoro!"
    },
    {
        name: "Silvia",
        feed: "Persona seria e onesta. Al Giorno d’oggi è Una rarità. Se hai necessità di assistenza My Assist é il TOP, lo consiglio vivamente."
    },
    {
        name: "Alessio",
        feed: "Veramente disponibili e pieni di voglia. Grazie mille."
    },
    {
        name: "Francesco",
        feed: "Gentilissimi e disponibilissimi. Sono informati su qualsiasi cosa. Risorsa impeccabile"
    }
];

$(document).ready(function(){
    $.each(feedbacks, function( index, value ) {

      $('#scroller').append("<li><div><h3>" + value.name + "</h3><blockquote>" + value.feed + "</blockquote></div></li>");
    });

    $('#scroller').overlayScrollbars({

          className: "os-theme-light",
          scrollbars : {
            visibility : 'hidden'
          }

    });



    $('.mailchimp-form').load('mailchimp-form.html');




});


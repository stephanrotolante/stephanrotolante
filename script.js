


function linkClick(link) {
    unSetLinks();
   if(link=='aboutLink'){
       last=link;
   document.getElementById(link).style.color = 'white';
   $(document).ready(function(){
        $('html, body').animate({
            scrollTop: ($('#about').offset().top)
        },1000);
   }); 
   }  else if(link=='exLink') {
    document.getElementById(link).style.color = 'white';
        last=link;
    $(document).ready(function(){
        $('html, body').animate({
            scrollTop: ($('#experience').offset().top)
        },1000);
    }); 
   } else if(link=='edLink') {
    document.getElementById(link).style.color = 'white';
        last=link;
    $(document).ready(function(){
        $('html, body').animate({
            scrollTop: ($('#education').offset().top)
        },1000);
    }); 
   } else if(link=='skillLink') {
    document.getElementById(link).style.color = 'white';
        last=link;
    $(document).ready(function(){
        $('html, body').animate({
            scrollTop: ($('#skills').offset().top)
        },1000);
    }); 
   } else if(link=='interestLink') {
    document.getElementById(link).style.color = 'white';
        last=link;
    $(document).ready(function(){
        $('html, body').animate({
            scrollTop: ($('#interests').offset().top)
        },1000);
    }); 
   } else if(link=='awardLink') {
    document.getElementById(link).style.color = 'white';
    last=link;
    $(document).ready(function(){
        $('html, body').animate({
            scrollTop: ($('#awards').offset().top)
        },1000);
    }); 
   }
}



function unSetLinks(){
    document.getElementById('aboutLink').style.color = 'greenyellow';
    document.getElementById('exLink').style.color = 'greenyellow';
    document.getElementById('edLink').style.color = 'greenyellow';
    document.getElementById('skillLink').style.color = 'greenyellow';
    document.getElementById('interestLink').style.color = 'greenyellow';
    document.getElementById('awardLink').style.color = 'greenyellow';

}
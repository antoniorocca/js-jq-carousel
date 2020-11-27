var vaiAvanti = $('.next');
var vaiIndietro = $('.prev');

$(document).ready(function(){
  vaiAvanti.click(imgSucc);
  vaiIndietro.click(imgPrec);
});

function imgSucc(){ 
    var imgVis = $('.images .active');
    if (imgVis.hasClass('last')) {
      imgVis.removeClass('active');
      $('img.first').addClass('active');
    } else {
      imgVis.removeClass('active')
      .next().addClass('active');
    }
}

  function imgPrec(){
    var imgVis = $('.images .active');
    if(imgVis.hasClass('first')){
      imgVis.removeClass('active');
      $('img.last').addClass('active');
    }
    imgVis.removeClass('active')
    .prev().addClass('active');
}
$( document ).ready(function() {

// $('.panel').hover(function(){
//   var img_id = $(this).attr("data-id");
//   var img_path = "url('./images/" + img_id + "')"
//   $('.wrapper').css("background-image", img_path);
// })

// var all_panels = $('.panel');
// var allImgTags = [];
// for(var i=0; i < all_panels.length; i++){
//  var imgTag = $(all_panels[i]).attr('data-id');
//  allImgTags.push(imgTag);
// }

// for(var j=0; j < allImgTags.length; j++) {
//  $('.wrapper').attr("id", allImgTags[j]);
// }



$('.panel').hover(function(){
  var img_id = $(this).attr("data-id");
  $('.big-wrap').attr("id", img_id);
})

});
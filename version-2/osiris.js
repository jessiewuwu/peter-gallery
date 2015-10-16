$( document ).ready(function() {

  $('.panel').hover(function(){
    var img_id = $(this).attr("data-id");
    $('.big-wrap').attr("id", img_id);
  })


  $('.thumbnail').click(function(){
      $('.modal-body').empty();
      var title = $(this).parent('a').attr("title");
      $('.modal-title').html(title);
      $($(this).parents('div').html()).appendTo('.modal-body');
      $('#myModal').modal({show:true});
  });

});






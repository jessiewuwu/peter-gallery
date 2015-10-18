$( document ).ready(function() {

  $('.panel').hover(function(){
    var img_id = $(this).attr("data-id");
    $('.big-wrap').attr("id", img_id);
    console.log(img_id);
  })


  $('.thumbnail').click(function(){
      $('.modal-body').empty();
      $($(this).parents('div').html()).appendTo('.modal-body');
      $('#myModal').modal({show:true});
  });


  // $('.mask-gallery').on('click', "#myModal", function(){
  //   // $('.modal-backdrop').empty();
  //   // $('.fade').remove();
  //   // console.log('in click event');
  //   $('#myModal').modal('hide');
  // })

$('#myModal').on('click', function(){
  $('.modal').removeClass('fade');
  $('#myModal').modal('hide');
})

});








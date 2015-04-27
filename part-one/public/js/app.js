$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
      var form = $(this)
    $.ajax({
      url: '/events',
      method: 'post',
      dataType: 'json',
      data: form.serialize(),
    })
    .done(function(response){
      // $('p a').last().text("Name: " +reponse.name+ ", Location:" +response.location+)
      // $('p a').attr('href', ""/events/" +response.id+"")
      $('.stuff').append('<p><a href="/event/"+response.id></a></p>')
      $('.stuff').find('a').last().text('Name: '+response.name + " Location: "+response.location)
    })
    .fail(function(response){
      console.log(response)
    })

  })

})

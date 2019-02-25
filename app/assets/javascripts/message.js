$(function(){
  function buildSendMessageHTML(message){
    var imagehtml = message.imege == null ? "" :'<img src="${message.image}" class= "lower-message__image">'

    var html =
       `<div class="message" data-message-id=${message.id}>
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.date}
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
              ${imagehtml}
          </div>
        </div>`
      return html;
    }

$('#SendMessage').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(LatestMessage){
    var html = buildSendMessageHTML(LatestMessage);
    $('.messages').append(html);
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    $('form')[0].reset();
  })
  .fail(function(){
  });
  return false;
});

  if (window.location.href.match(/\/groups\/\d+\/messages/)){
       setInterval(GroupMessageAutoUpdate,5000)
  };

  function GroupMessageAutoUpdate() {
    var href = window.location.href;
    var lastId = $('.message').last().attr('data-message-id');

    $.ajax({
      url: href,
      dataType:'json',
      type:'GET',
      data: {id: lastId}
    })

    .done(function(groupmessage) {
       groupmessage.messages.forEach(function(message){
           var html = buildSendMessageHTML(message);
           $('.messages').append(html);
           $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
       });
    })
    .fail(function(){
      alert('メッセージの取得に失敗しました');
    });
  };

});

$(function () {
  $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight }, 'fast');
  function buildHTML(message) {
    var addImage = '';
    if (message.image.url) {
      addImage = `<img src="${message.image.url}" class="lower-message__image">`;
    }
    var html = `<div class="message" data-messageId="${message.id}" data-groupId="${message.group_id}">
        <div class="upper-message" data-messageId="${message.id}">
          <div class="upper-message__user-name">${message.name}</div>
          <div class="upper-message__date">${message.date}</div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
             ${message.content}
           </p>
           ${addImage}
         </div>
       </div>`;
    return html;
  }

  $('.new_message').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false

    })

      .done(function (message) {
        var html = buildHTML(message)


        $('.messages').append(html)
        $('.form__message').val('');


        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight }, 'fast');
        $('.new_message')[0].reset();
      })
      .fail(function (message) {
        alert('メッセージが未入力です');
      })
    return false;
  })

  var reloadMessages = function () {
    var last_message_id = $('.message').last().attr("data-messageId");
    var groupId = $('.message').last().attr("data-groupId");

    $.ajax({
      url: 'api/messages',
      type: 'get',
      data: { id: last_message_id },
      dataType: 'json'
    })

      .done(function (data) {
        $.each(data, function (i, message) {
          var insertHTML = buildHTML(message);
          $('.messages').append(insertHTML);
          $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight }, "fast");

        })
      })
      .fail(function () {
        console.log('error');
      });
  }
  setInterval(reloadMessages, 5000);
});

$(function () {
  function buildHTML(message) {
    var imagehtml = message.image == null ? "" : `<img src="${message.image}" class="lower-message__image">`
    var html = `<div class=message>
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                    ${message.user_name}
                    </div>
                    <div class= "upper-message__date">
                    ${message.created_at}
                    </div>
                    </div>
                    <div class="lower-message">
                    <p class="lower-message__content">
                    ${message.content}
                    </p>
                    ${imagehtml}
                    </div>
                    </div>`
    console.log(message);
    return html;
  }
  function Scroll() {
    $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight });
  }
  $('#new_message').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false

    })
      .done(function (data) {
        var html = buildHTML(data);
        $('.messages').append(html);
        $(".form__submit").prop("disabled", false);
        $('.form__message').val('');
        $('.hidden').val('');
        Scroll()
      })
      .fail(function () {
        alert('error');
      })
  })

  var interval = setInterval(function () {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      var last_message_id = $('.upper__message').filter(":last").data('messageId')
      $.ajax({
        url: location.href.json,
        data: { last_id: last_message_id },
        type: "GET",
        dataType: 'json'
      })
        .done(function (data) {
          $.each(data, function (i, message) {
            var insertHTML = buildHTML(message);
            $('.messages').append(insertHTML);
            $(".messages").animate({ scrollTop: $(".messages")[0].scrollHeight + 100 }, "fast");
          })
        })

        .fail(function (data) {
          alert('自動更新に失敗しました');
        })
    } else {
      clearInterval(interval);
    }
  }, 5000)
})


$(function () {

  function buildHTML(message) {
    var imagehtml = message.image == null ? "" : `<img src="${messge.image}" class="lower-message__image">}`
    var html = `<div class="messages>
                    <div class="upper-message>
                      <div class="upper-message__user-name">
                      ${message.user_name}
                      </div>
                      <div class="upper-message"
                        <p class="lower-message__content">
                        ${message.content}
                      </div>
                    </div>`
    return html;
    //htmlという変数
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
      contentType: false,
    })
      .done(function (data) {
        var html = buildHTML(data);
        $('.messages').append(html);
        $('.form__submit').val('');
        $('.hidden').val('');
        $(".form__submit").prop('disabled', false);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight }, 'fast');
        leastMessage = data;
      })
      .fail(function () {
        alert('error');
      })
  })
});

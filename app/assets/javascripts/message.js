// $(window).on('load', function () {

//   if (path == "_message.html.haml") {
//     // ドメイン以下のパス名が /messages/_message.html.haml の場合に実行する内容

//     //    : javascript
//     $(function () {
//       $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight }, 'fast');
//       var buildAutoUpdateMessage = function (message) {
//         var messageText = message.text ? message.text : ('');
//         var messageImage = message.image.url ? message.image.url : ('');
//         var html = `<div class="message messages" data-id="${message.id}">
//                                          <div class="upper-info">
//                                            <div class= "upper-info__user">
//                                             <p>${ message.user_name}</p>
//                                           </div>
//                                           <div class="upper-info__date">
//                                             <p>${message.date}</p>
//                                            </div>

//                                           <div class="lower-message">
//                                           <div class="lower-message__text">
//                                               <p>${messageText}</p>
//                                               <img src="${messageImage}", class="lower-message__image">
//                                           </div>
//                                         </div>
//                                       </div>`;
//         return html;
//       };
//       setInterval(update, 5000);


//       function update() {
//         var last_message_id = $('.messages:last').data('id');
//         var href = 'api/messages'

//         $.ajax({
//           url: href,
//           type: 'GET',
//           data: { id: last_message_id },
//           dataType: 'json'
//         })

//           .done(function (messages) {
//             messages.forEach(function (message) {

//               var insertHTML = buildAutoUpdateMessage(message)
//               $('.messages').append(insertHTML)
//             });

//             $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight }, 'fast');
//           })

//           .fail(function () {
//             alert('error');
//           });

//       };
//     });

//   }

// });

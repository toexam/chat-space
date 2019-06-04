$(function () {
  var search_list = $("#user-search-result");

  function appendUser(user) {
    var html = `<div class='chat-group-user clearfix'>
    <p class='chat-group-user__name' value='${user.id}' data-name="${user.name}" name='group[user_ids][]'>
                        ${user.name}
                      </p>
                      <a class='user-search-add chat-group-user__btn chat-group-user__btn--add'>
                        追加
                      </a>
                    </div>`;
    search_list.append(html);
  };

  function appendErrMsg(msg) {
    var html = `<br><li style="list-style: none;">
                  <div class='listview__element--right-icon'>${msg}<br></div>
                </li>`
    search_list.append(html);
  };

  var group_member_list = $("#chat-group-users");

  function appendUserToAddList(userId, userName) {
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-14'>
                  <input name='group[user_ids][]' type='hidden' value='${userId}'>
                    <p class='chat-group-user__name'>${userName}</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                </div>`;
    group_member_list.append(html);
  };


  $("#user-search-field").on("keyup", function () {
    var input = $("#user-search-field").val();
    var reg = new RegExp("^" + input);

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { search: input },
      dataType: 'json'
    })
      .done(function (users) {
        $('#user-search-result').empty();//こうしないと表示が繰り返されるから毎回表示を消去

        if (users.length !== 0) {// もしもユーザーが誰かいる時は
          if (input.length !== 0) {//もしも何か入力がある時は

            users.forEach(function (user) {
              if (user.name.match(reg)) {
                $(appendUser(user));
              };
            });

          } else {
            $('#user-search-result').empty();
            //            var msg = "やっぱいらない。。";
            //            appendErrMsg(msg);
          }; // Deleteキー等でフォームの入力値を消した時「一致するユーザーがいません」を表示させないようにする

        } else {//ユーザーが誰もいない時
          //          $('#user-search-result').empty();
          var msg = "一致するユーザーはいません";
          appendErrMsg(msg);
        };
      }) //正規表現オプジェクトregと前方一致でリストを表示する処理end

      .fail(function () {
        alert('ユーザーの検索に失敗しました');
      }); // ajax end
  }); //ユーザーが何か入力(keyup)した時の処理end

  $(function () {
    $(document).on("click", '.chat-group-user__btn--add', function () {
      var userId = $('p.chat-group-user__name').attr('value');
      var userName = $('p.chat-group-user__name').data('name')
      appendUserToAddList(userId, userName);
      $(this).parent().remove();
    });
  });//新たに読み込んだイベントの処理end

  $(function () {
    $(document).on("click", '.chat-group-user__btn--remove', function () {
      $(this).parent().remove();
    });
  }); // 「削除」ボタンを押すとリストが消える処理end
});

json.content    @message.comntent
json.created_at @message.created_at.strftime('%Y/%m/%d/%R')
json.user_name  @message.user.user_name
json.image      @message.image.url
json.id         @message.id

json.messages @messages.each do |message|
  json.id          message.id
  json.content     message.content
  json.image       message.image.url
  json.date        message.created_at.strftime("%Y-%m-%d %H:%M:%S")
  json.name        message.user.name
end

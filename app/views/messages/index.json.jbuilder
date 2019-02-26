json.messages    @new_messages.each do |message|
  json.user_name        message.user.name
  json.date        message.created_at.strftime('%Y/%m/%d %R')
  json.image       message.image.url
  json.id          message.id
  json.content     message.content
end

class MessagesController < ApplicationController
  def index
    @message = Message.new
    @messages = @group.messages.incrudes(:user)
  end

  def create
    @message = @group.messages.new(message_params)
    if @message.save
      redirect_to_group_messages_path(@group),notice:'メッセージが送信されました'
    else
      @messages = @group.messages(:user)
      flash.now[:alert] = 'メッセージを入力してください'
      render :index
  end
end

private

  def message_params
   params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end


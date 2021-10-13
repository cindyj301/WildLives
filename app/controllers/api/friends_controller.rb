class Api::FriendsController < ApplicationController
    def show
        @friend = Friend.find_by(requester_id: params[:requester_id])
        render 'api/users/show'
    end

    def create
        @friend = Friend.new(friend_params)
        @user = current_user

        if @friend && @friend.save
            render 'api/users/show'
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @friend = Friend.find_by(id: params[:id])
        @user = current_user

        if @friend && @friend.destroy
            render 'api/users/show'
        else
            render json: ["Unsuccessful deletion"]
        end
    end

    private

    def friend_params
        params.require(:friend).permit(:requester_id, :requestee_id)
    end
end
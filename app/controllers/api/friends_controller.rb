class Api::FriendsController < ApplicationController
    def show
        @friend = Friend.find_by(requester_id: params[:requester_id])
        render :index
    end

    def create
        @friend = Friend.new(friend_params)
        if @friend && @friend.save
            render :index
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @friend = Friend.find_by(requester_id: params[:requester_id], requestee_id: params[:requestee_id])
        
        if @friend && @friend.destroy
            render :index
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    private

    def friend_params
        params.require(:friend).permit(:requester_id, :requestee_id)
    end
end
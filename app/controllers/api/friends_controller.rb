class Api::FriendsController < ApplicationController
    def show
        @friend = Friend.find_by(requester_id: params[:requester_id])
        render 'api/users/show'
    end

    def create
        @friend = Friend.new(friend_params)
        # @friend2 = Friend.new(requester_id: params[:friend][:requestee_id], requestee_id: params[:friend][:requester_id])
        if @friend && @friend.save
            render 'api/users/show'
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @friend = Friend.find_by(requester_id: params[:requester_id], requestee_id: params[:requestee_id])
        # @friend2 = Friend.find_by(requester_id: params[:requestee_id], requestee_id: params[:requester_id])
        
        if @friend && @friend.destroy
            render {}
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    private

    def friend_params
        params.require(:friend).permit(:requester_id, :requestee_id)
    end
end
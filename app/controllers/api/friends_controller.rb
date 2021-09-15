class Api::FriendsController < ApplicationController
    # def show
    #     @friend = Friend.where(:requester_id => params[:id])
    #     render :show
    # end

    def create
        @friend = Friend.new(friend_params)
        if @friend && @friend.save
            render json: ['Success'], status: 200
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @friend = Friend.find_by(id: params[:id])
        
        if @friend && @friend.destroy
            render json: {}
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    private

    def friend_params
        params.require(:friend).permit(:requester_id, :requestee_id)
    end
end
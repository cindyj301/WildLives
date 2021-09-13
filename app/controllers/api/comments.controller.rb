class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render :index
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render 'api/users/show'
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment && @comment.update(comment_params)
            render 'api/users/show'
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment && @comment.destroy
            render 'api/users/show'
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body)
    end
end
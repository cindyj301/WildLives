class Api::PostsController < ApplicationController
    before_action :ensure_logged_in!

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def index
        @posts = Post.all
        render :index
    end

    def update
        @post = Post.find_by(id: params[:id])

        if @post && @post.update(post_params)
            render :show
        else
           render json: @post.errors.full_messages, status: 422
        end 
    end

    def create
        @post = current_user.posts.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = current_user.posts.find_by(id: params[:id])

        if @post && @post.destroy
            render json: {}
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private

    def post_params
        params.require(:post).permit(:body)
    end
end
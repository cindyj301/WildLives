class Api::PostsController < ApplicationController
    before_action :ensure_logged_in!
    
    def index
        @posts = Post.all.order('created_at DESC')
        render :index
    end

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def create # note: review
        @post = current_user.posts.new(post_params)

        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end
    
    def update # note: review
        @post = current_user.posts.find_by(id: params[:id])
        
        if @post && @post.update(post_params)
            render :show
        else
           render json: @post.errors.full_messages, status: 422
        end 
    end

    def destroy
        @post = current_user.posts.find_by(id: params[:id])

        if @post && @post.destroy
            render json: {}
        end
    end

    private

    def post_params
        params.require(:post).permit(:body)
    end
end
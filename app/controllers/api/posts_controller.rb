class Api::PostsController < ApplicationController
    def index
        @posts = Post.all.order('created_at DESC')
        render :index
    end

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def create
        @post = current_user.posts.new(post_params)
        if @post.save
            render :show
        end
    end
    
    def update
        @post = current_user.posts.find_by(id: params[:id])
        
        if @post && @post.update(post_params)
            render :show
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
        params.require(:post).permit(:body, :photo, :wall_id)
    end
end
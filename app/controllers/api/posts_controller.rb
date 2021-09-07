class Api::PostsController < ApplicationController
    before_action :ensure_logged_in!

    def update
        @post = Post.find_by(id: params[:id])

        if @post && @post.update(post_params)
            render 'api/posts/show'
        else
           render json: @post.errors.full_messages, status: 422
        end 
    end

    def create
        @post = Post.new(post_params)
        # @post.post_author_id = params[:post_author_id]

        if @post.save
            render 'api/posts/show' # create posts show in jbuilder
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        # @post = current_user.posts.find_by(id: params[:id])
        @post = Post.find_by(id: params[:id])

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
class ChangePostTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :post_author_id
  end
end

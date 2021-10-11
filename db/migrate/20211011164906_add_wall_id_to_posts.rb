class AddWallIdToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :wall_id, :integer, null: false, index: true
  end
end

class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.integer :post_author_id, null: false, index: { unique: true }

      t.timestamps
    end
  end
end

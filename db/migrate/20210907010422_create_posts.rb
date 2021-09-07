class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.integer :post_author_id, null: false

      t.timestamps
    end

    add_index :posts, [:post_author_id, :body], unique: true
  end
end

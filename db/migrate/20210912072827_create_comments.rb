class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :post_id, null: false, index: true
      t.integer :comment_author_id, null: false, index: true

      t.timestamps
    end
  end
end

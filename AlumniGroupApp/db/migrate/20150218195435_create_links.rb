class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.text :url
      t.text :description
      t.integer :graduate_id

      t.timestamps null: false
    end
  end
end

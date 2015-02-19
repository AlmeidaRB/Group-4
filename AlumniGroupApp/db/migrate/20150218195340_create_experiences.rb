class CreateExperiences < ActiveRecord::Migration
  def change
    create_table :experiences do |t|
      t.string :company
      t.text :description
      t.string :position
      t.date :start_date
      t.date :end_date
      t.integer :graduate_id

      t.timestamps null: false
    end
  end
end

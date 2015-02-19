class CreateEducations < ActiveRecord::Migration
  def change
    create_table :educations do |t|
      t.string :school_name
      t.integer :graduate_id

      t.timestamps null: false
    end
  end
end

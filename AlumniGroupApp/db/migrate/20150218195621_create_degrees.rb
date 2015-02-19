class CreateDegrees < ActiveRecord::Migration
  def change
    create_table :degrees do |t|
      t.date :start_date
      t.date :end_date
      t.string :type
      t.string :concentration
      t.integer :education_id

      t.timestamps null: false
    end
  end
end

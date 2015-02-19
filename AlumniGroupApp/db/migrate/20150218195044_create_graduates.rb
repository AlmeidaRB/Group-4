class CreateGraduates < ActiveRecord::Migration
  def change
    create_table :graduates do |t|
      t.string :name
      t.text :photo
      t.text :bio
      t.string :current_city
      t.string :current_state
      t.string :grad_city
      t.string :grad_state
      t.string :email
      t.date :grad_date

      t.timestamps null: false
    end
  end
end

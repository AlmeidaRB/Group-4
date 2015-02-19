class CreateGraduateSkills < ActiveRecord::Migration
  def change
    create_table :graduate_skills do |t|
      t.integer :graduate_id
      t.integer :skill_id

      t.timestamps null: false
    end
  end
end

class CreatePostings < ActiveRecord::Migration
  def change
    create_table :postings do |t|
      t.integer :employer_id
      t.string :job_title
      t.date :job_post_date
      t.text :job_description
      t.text :job_requirement

      t.timestamps null: false
    end
  end
end

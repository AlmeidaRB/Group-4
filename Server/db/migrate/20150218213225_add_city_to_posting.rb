class AddCityToPosting < ActiveRecord::Migration
  def change
    add_column :postings, :city, :string
    add_column :postings, :state, :string
  end
end

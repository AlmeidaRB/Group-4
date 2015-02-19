class AddLastNameToGraduate < ActiveRecord::Migration
  def change
    remove_column :graduates, :name
    add_column :graduates, :first_name, :string
    add_column :graduates, :last_name, :string
  end
end

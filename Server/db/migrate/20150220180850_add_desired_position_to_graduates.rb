class AddDesiredPositionToGraduates < ActiveRecord::Migration
  def change
    add_column :graduates, :desired_position, :string
  end
end
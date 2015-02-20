class AddLocationDesiredPositionToEmployers < ActiveRecord::Migration
  def change
    add_column :employers, :location, :string
    add_column :employers, :desired_position, :string
  end
end

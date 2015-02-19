class Education < ActiveRecord::Base
  belongs_to :graduate
  has_many :degrees
end

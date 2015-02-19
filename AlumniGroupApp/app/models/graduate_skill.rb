class GraduateSkill < ActiveRecord::Base
  belongs_to :graduate
  belongs_to :skill
end

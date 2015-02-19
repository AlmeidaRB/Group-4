class Skill < ActiveRecord::Base
  has_many :graduates, through: :graduate_skills
  has_many :graduate_skills
end

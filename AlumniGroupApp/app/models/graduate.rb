class Graduate < ActiveRecord::Base
  has_many :links
  has_many :educations
  has_many :experiences
  has_many :skills, through: :graduate_skills
  has_many :graduate_skills
end

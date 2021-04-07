class Plan < ApplicationRecord
  validates :todo, presence: true
end

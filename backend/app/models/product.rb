class Product < ApplicationRecord
  has_many :purposes, dependent: :delete_all

  validates :name, uniqueness: true, presence: true
end

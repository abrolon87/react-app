class Product < ApplicationRecord
  has_many :purposes, dependent: :destroy

  validates :name, uniqueness: true
end

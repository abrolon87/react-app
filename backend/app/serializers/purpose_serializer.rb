class PurposeSerializer < ActiveModel::Serializer
  attributes :id, :body, :product_id

  belongs_to :product
end

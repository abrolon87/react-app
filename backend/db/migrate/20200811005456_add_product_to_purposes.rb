class AddProductToPurposes < ActiveRecord::Migration[6.0]
  def change
    add_reference :purposes, :product, index: true
  end
end

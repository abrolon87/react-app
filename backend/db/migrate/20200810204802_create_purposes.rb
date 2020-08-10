class CreatePurposes < ActiveRecord::Migration[6.0]
  def change
    create_table :purposes do |t|
      t.text :body

      t.timestamps
    end
  end
end

class CreateMilestones < ActiveRecord::Migration[7.2]
  def change
    create_table :milestones do |t|
      t.string :title, null: false, limit: 255
      t.json :childhood_images
      t.string :adolescence_image
      t.string :adulthood_image
      t.string :mature_age_image
      t.text :childhood_content, null: false, limit: 65535
      t.text :adulthood_content, null: false, limit: 65535
      t.text :mature_age_content, null: false, limit: 65535
      t.integer :status, default: 0, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

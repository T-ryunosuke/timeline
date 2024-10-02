class Milestone < ApplicationRecord
  mount_uploaders :childhood_images, ChildhoodImagesUploader
  mount_uploader :adolescence_image, AdolescenceImageUploader
  mount_uploader :adulthood_image, AdulthoodImageUploader
  mount_uploader :mature_age_image, MatureAgeImageUploader

  belongs_to :user

  validates :title, presence: true, length: { maximum: 255 }
  validates :childhood_content, presence: true, length: { maximum: 65_535 }
  validates :adulthood_content, presence: true, length: { maximum: 65_535 }
  validates :mature_age_content, presence: true, length: { maximum: 65_535 }

  enum status: { published: 0, draft: 1,  unpublished: 2 }
end

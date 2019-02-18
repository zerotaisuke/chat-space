FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/app/assets/images/07234e1e3c01c073dd6860f091c551f7-640x360.png")
    user
    group
  end
end

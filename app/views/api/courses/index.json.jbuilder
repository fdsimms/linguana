json.array! @courses do |course|
  json.extract! course, :name, :target_language_id, :known_language_id, :id
  json.flag asset_path(course.target_language.flag.url(:original))
end

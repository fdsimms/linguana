json.array! @courses do |course|
  json.extract! course, :name, :target_language_id, :known_language_id, :id
end

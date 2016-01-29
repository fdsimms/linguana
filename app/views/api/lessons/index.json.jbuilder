json.array! @lessons do |lesson|
  json.extract! lesson, :id, :skill_id, :name
end

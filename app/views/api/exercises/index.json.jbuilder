json.array! @exercises do |exercise|
  json.extract! exercise, :id, :lesson_id, :thing_to_translate, :exercise_type
end

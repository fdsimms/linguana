json.array! @multiple_choice_qs do |multiple_choice_q|
  json.extract! multiple_choice_q, :id, :lesson_id, :body
end

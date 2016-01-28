json.array! @skills do |skill|
  json.extract! skill, :id, :tips_and_notes, :course_id, :name
end

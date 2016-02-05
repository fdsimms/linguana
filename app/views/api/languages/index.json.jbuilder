json.array! @languages do |language|
  json.extract! language, :name, :abbreviation, :id, :flag
end

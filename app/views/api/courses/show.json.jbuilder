json.extract! @course, :id, :name, :known_language_id, :target_language_id
json.flag asset_path(@course.target_language.flag.url(:original))

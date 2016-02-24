


json.extract! @user,
              :bio,
              :id,
              :fname,
              :lname,
              :current_course_id,
              :current_language_id,
              :email,
              :username,
              :streak_length,
              :points,
              :uid,
              :hometown,
              :enrolled_courses,
              :completions
json.profile_pic_url asset_path(@user.profile_pic.url(:original))
json.enrolled_courses do
  json.array! @user.enrolled_courses do |course|
    json.id course.id
    json.target_language_id course.target_language_id
    json.known_language_id course.known_language_id
    json.name course.name
    json.flag asset_path(course.target_language.flag.url(:original))
  end
end

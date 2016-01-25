# Phase 1 (2 Days): User Authentication, JSON API

## Rails
### Models
* User
* Language
* Course
* Skill
* Lesson


### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::LanguagesController (create, index, show, destroy, update)
* Api::CoursesController (create, index, show, destroy, update)
* Api::SkillsController (create, index, show, destroy, update)
* Api::LessonsController (create, index, show, destroy, update)


### Views
* users/new.html.erb
* session/new.html.erb
* courses/index.json.jbuilder
* skills/show.json.jbuilder
* skills/index.json.jbuilder
* lessons/index.json.jbuilder
* lessons/show.json.jbuilder

## Flux
### Views (React Components)
* CoursesIndex
  - CoursesIndexItem
* SkillsIndex
  - SkillsIndexItem
* LessonsIndex
  - LessonsIndexItem

### Stores
* Courses
* Skills
* Lessons

### Actions

### ApiUtil

## Gems/Libraries
* Flux Dispatcher (npm)
* BCrypt (Gem)
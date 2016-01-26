# Linguana

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://linguana.co

## Minimum Viable Product

Linguana is a web application inspired by Duolingo. It was built using Ruby on Rails
and React.js. Linguana allows users to:

- [ ] Create an account
- [ ] Log in and out
- [ ] Enroll in multiple language courses
- [ ] Complete lessons consisting of multiple-choice questions and translation drills
- [ ] Earn points for completing exercises
- [ ] Maintain a profile page displaying their progress as well as selected personal info
- [ ] Leave comments and questions on exercises
- [ ] Leave comments on other users' pages
- [ ] See a leaderboard comparing their stats with their friends'

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Models and JSON API (2 days) 

For Phase 1, I will begin by implementing user authentification and creating models, views and api controllers for languages, courses, skills, and lessons. By the end of this phase, users will be able to enroll in courses and view the skills and lessons in their courses. I will also minimally seed the database during this phase.

[Details][phase-one]

### Phase 2: Displaying and Answering Questions (2 days)

In Phase 2, I will create the models, views and api controllers for multiple choice questions and answer choices. By the end of this phase, users will be able to complete a lesson, earning points by answering questions. I will seed the database with a handful of questions and answers.


[Details][phase-two]

### Phase 3: Google Translate Integration (1.5 days)

After this phase, users will be able to see translations of words in exercises by hovering over them. Translations will be provided by use of the Google Translate API.

[Details][phase-three]

### Phase 4: User Profile (1 day)

After Phase 4, users will be able to edit their profile and account settings. Users' profiles will display their bio, profile picture, name, and hometown, as well as the languages they are studying, how many points they have earned in each language, and how long of a streak they are currently on.

[Details][phase-four]

### Phase 5: Social Aspects, Notifications, and Leaderboard (2 days)

With Phase 5, users will be able to friend other users and see how they stack up to their friends via a leaderboard on the homepage. Users will be able to comment on lessons and other users. Notifications will let users know when a friend has commented on their page, when a streak has lasted a given number of days, etc.

[Details][phase-five] 

### Phase 6: Add Translation Drills/Contingency (2 days)

Here, I'll do any necessary cleanup, finish anything that I may have underbudgeted time for, add more seed data, and add translation drills as another exercise type. 


### Bonus Features (TBD)
- [ ] Add the ability to make some users course moderators
- [ ] Build UI to allow moderators to create new courses
- [ ] Use spaced-repetition algorithm to help users memorize words and phrases 
- [ ] Add line graph to leaderboard to show how many points player has earned over a given period
- [ ] Add audio exercises, again using Google Translate to provide TTS audio

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

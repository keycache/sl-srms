# The backend end for `Student Result Management System`

## TODO

- [x] setup virtual env, with dependencies
- [x] setup project for `isort` and `black`
- [x] create `core` project necessary `ABC`s and utility classes
  - [x] `render`
  - [x] `parser`
  - [x] `ABC`
    - [x] views
    - [x] serializers
    - [x] models - `UUID`, `Date`
    - [x] controllers
- [x] setup `students` app
  - [x] handle validations
  - [x] handle `GET` and `POST`
  - [x] connect `url` -> `view` <-> `serializer` <-> `controller` <-> `model`
  - [ ] handle server-side validation
- [x] cors
- [ ] handle pagination(?)
- [ ] Refactor serializer utility code `get_serializer`

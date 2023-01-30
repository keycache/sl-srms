# The backend for `Student Result Management System`

## Summary

- Implementation in `python` and `django`
- `dajngo rest framework` to support `view` and validation
- business and data later seperation implemented through `model`, `view` and `controller`
- incremental database migration managed through built in django utility
- leveraged `sqlite3` as `db`
- the queries for `db` managed through `django orm`.

## How to run

- Build the `docker` image. `docker build -t sf-srms-api:latest -f ./Dockerfile .`
- Run the image. `docker run -p 8006:8006 --name c-sf-srms-api sf-srms-api:latest`

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
  - [ ] handle server-side validation fir DOB
- [x] setup `courses` app
  - [x] handle validations
  - [x] handle `GET` and `POST`
  - [x] connect `url` -> `view` <-> `serializer` <-> `controller` <-> `model`
- [x] setup `result` app
  - [x] handle validations
    - [x] valid `uuid`s for `student` and `result`
    - [x] valid score
  - [x] handle `GET` and `POST`
  - [x] connect `url` -> `view` <-> `serializer` <-> `controller` <-> `model`
- [x] cors
- [x] integation with docker
- [ ] optimize query(`prefetch` for `result`).
- [ ] Refactor serializer utility code `get_serializer`
- [ ] handle pagination(?)

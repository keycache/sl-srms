# The UI for `Student Result Management System`

## Summary

- Implementation in with `vite` in `react`
- Styling with `tailwind`
- `Student Result Management System` Pages
- Student Entry
- Course Entry
- Result Entry

## How to run

- Build the `docker` image. `docker build -t sf-srms-ui:latest -f ./Dockerfile .`
- Run the image. `docker run -p 8006:8006 --name c-sf-srms-ui sf-srms-ui:latest`

## TODO

- [x] init vite repo setup
- [x] tailwind setup
- [x] setup routing
- [x] integation with docker
- [ ] refactor hard coded strings
- [ ] Clean up the side bar
- [ ] Update individual page details
- [ ] setup `students` page
  - [x] handle form entry
  - [x] validations for form
  - [x] notifications for successfull action
  - [x] update the datatable with all the student entries
  - [ ] handle errors
  - [ ] handle pagination(?)
- [ ] setup `courses` page
  - [x] handle form entry
  - [x] validations for form
  - [x] notifications for successfull action
  - [x] update the datatable with all the course entries
  - [ ] handle errors
  - [ ] handle pagination(?)
- [ ] setup `results` page
  - [x] handle form entry dropdowns
  - [x] validations for form
  - [x] notifications for successfull action
  - [x] update the datatable with all the course entries
  - [ ] handle errors
  - [ ] handle pagination(?)

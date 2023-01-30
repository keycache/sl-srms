# sl-srms

A proof of concept of `Student Result Management System` on a weekday

## How to run

- Go to `backend` folder. Build the image
  > docker build -t sf-srms-ui:latest -f ./Dockerfile .
- Go to `frontend` folder. Build the image
  > docker build -t sf-srms-api:latest -f ./Dockerfile .
- `docker-compose.yml` file links the `frontend` and `backend`
  > docker-compose -p sl-srms -f ./docker-compose.yml up
- Goto `http://127.0.0.1:5173/` for the landing page

## Frotend

- Implementation in with `vite` in `react`
- Styling with `tailwind`
- `Student Result Management System` Pages
  - Student Entry
  - Course Entry
  - Result Entry

## Backend

- Implementation in `python` and `django`
- `dajngo rest framework` to support `view` and validation
- business and data later seperation implemented through `model`, `view` and `controller`
- incremental database migration managed through built in django utility
- leveraged `sqlite3` as `db`
- the queries for `db` managed through `django orm`.

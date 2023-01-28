db-reset: 
	find . -path "*/migrations/*.py" -not -name "__init__.py" | grep modules | xargs rm -f
	find . -path "*/migrations/*.pyc"  -delete
	rm -rf db.sqlite3

db-migrate:
	python manage.py makemigrations
	python manage.py migrate

server-run-local:
	python manage.py runserver 8006

run-tests:
	pytest -rp
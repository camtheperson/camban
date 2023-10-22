build-dev:
	docker build -t camban:development .

run-dev:
	docker run -v .:/frontend --publish 3000:3000 camban:development

# @TODO Find a place to host Docker development/production images once we get to that point
# push-dev:
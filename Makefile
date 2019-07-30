build: ##@Docker install services dependencies
	docker-compose up --build
reset: ##@Docker stop && prune 
	docker-compose stop && docker system prune -a
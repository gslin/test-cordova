#
.DEFAULT_GOAL:=	run
.PHONY:		clean install run

#
clean::
	rm -rf node_modules/

install::
	npm install

run:: install
	npx tailwindcss -o www/css/main.css
	npx webpack
	cordova emulate android

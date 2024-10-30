#
.DEFAULT_GOAL:=	run
.PHONY:		clean run

#
clean::
	rm -rf node_modules/

run::
	npx tailwindcss -o www/css/main.css
	npx webpack
	cordova emulate android

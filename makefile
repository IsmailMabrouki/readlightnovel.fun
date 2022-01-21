zip: 
	zip -r site.zip site -x *.git* *node_modules* *.DS_Store*

run:
#	cd site
#	node server.js
	npx nodemon app.js
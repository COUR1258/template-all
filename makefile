start:
	uwsgi --ini /root/weixinBack/wxpx_chuli/conf/uwsgi.ini

stop:
	uwsgi --stop /root/weixinBack/wxpx_chuli/log/uwsgi.pid


updatedb:
	uwsgi --stop /root/weixinBack/wxpx_chuli/log/uwsgi.pid
	flask db migrate
	flask db upgrade
	uwsgi --ini /root/weixinBack/wxpx_chuli/conf/uwsgi.ini

initdb:
	flask db init
	flask db migrate
	flask db upgrade


initgit:
	git init
	git commit -m "first commit"
	git remote add myGit http://git.ruanrong.run/cloutp/flask_template.git
	git push -u myGit master

push:
	git add .
	git commit -m "123"
	git push -u myGit master

dockerStart:
	docker run -itd --name appname -p 5000:6124 -v ./:/fl-app/ flask-app  /bin/bash
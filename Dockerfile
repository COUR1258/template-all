FROM python:latest
WORKDIR /fl-app
#COPY app/ /fl-app/

# RUN pwd
RUN pip install uwsgi --no-cache-dir

RUN #python -m venv venv
# RUN source venv/bin/activate
RUN pip install -r requirements.txt
# RUN deactivate

CMD uwsgi --ini ./conf/uwsgi.ini

# docker run -itd --name my-redis2 redis bash

# docker run --network host
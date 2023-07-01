FROM python:3.9

WORKDIR /server

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENV SERVER_HOST=0.0.0.0
ENV SERVER_PORT=5000
ENV SERVER_DEBUG=False

EXPOSE 5000

CMD [ "python", "app.py" ]
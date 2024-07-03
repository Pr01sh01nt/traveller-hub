FROM node

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

CMD [ "npm" , "run", "devstart" ]

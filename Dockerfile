FROM node:carbon

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install -g typescript ts-node && npm install

USER node

COPY --chown=node:node . .

EXPOSE 3000

CMD npm run start
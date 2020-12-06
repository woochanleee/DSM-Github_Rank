FROM node:10

WORKDIR /app
ADD . /app/

RUN npm install --only=production

RUN rm yarn.lock
RUN rm package-lock.json
RUN yarn
RUN npm run build

CMD [ "npm", "run", "start" ]
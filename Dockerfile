FROM node:21-alpine@sha256:e8894d38c2f0eed0131e781e8f834578afc28d69441213ece74b229aef9385b0 as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN yarn

COPY . .

RUN yarn build --prod


FROM node:21-alpine@sha256:e8894d38c2f0eed0131e781e8f834578afc28d69441213ece74b229aef9385b0

WORKDIR /app

COPY --from=build /app/build .

RUN npm i -g serve

CMD [ "serve", "-s", ".", "-p", "8001" ]
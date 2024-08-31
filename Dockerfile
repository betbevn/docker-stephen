FROM node:18.20-alpine as builder

WORKDIR '/app'

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

CMD yarn build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
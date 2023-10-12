FROM node:18-alpine as development

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
#COPY npm-shrinkwrap.json ./
#COPY .npmrc ./

RUN npm install --global npm@latest
RUN npm ci

COPY .*.js ./
COPY *config.?js ./
COPY tsconfig.*json ./
COPY vite.config.ts ./
COPY index.html ./
COPY public ./public
COPY src ./src

CMD [ "npm", "start"]

FROM development as builder

RUN npm run build

FROM nginx:1.25.2-alpine as production

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/
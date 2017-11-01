FROM node:8.2.1

ENV NODE_ENV=production
ENV HOST 0.0.0.0


# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
RUN apk update && apk upgrade && apk add git

COPY . /usr/src/app/
RUN npm install

# Build app
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]

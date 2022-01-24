FROM node:16-alpine

WORKDIR /app

RUN apk --no-cache add tzdata && \
    cp /usr/share/zoneinfo/Europe/Kiev /etc/localtime && \
    echo "Europe/Kiev" >  /etc/timezone

COPY package*.json ./

RUN npm ci

COPY . .

ENTRYPOINT [ "npm" ]
CMD [ "start" ]

FROM node:12

# Create app directory
WORKDIR /usr/dev/the-boys-bot

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

CMD ["npm", "start"]
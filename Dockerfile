# Specify the base image
FROM node:20

# Set the working directory
# WORKDIR /home/jervis/uplb/iams-visitor/visitors-iams-frontend
RUN mkdir -p /home/jervis/docker/iams-visitor
WORKDIR /home/jervis/docker/iams-visitor

# Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

RUN apt update && apt upgrade
# RUN apt add git

# Install application dependencies
COPY . /home/jervis/docker/iams-visitor/
RUN npm install
RUN npm run build

# Copy the rest of the application files
# COPY . .

# Describe which ports your application is listening on.
EXPOSE 3001

# Specify the command to run the application
# CMD ["npm", "run", "dev"]

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3001

CMD ["npm", "start"]

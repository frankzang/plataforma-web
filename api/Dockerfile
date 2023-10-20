FROM node:18-alpine
WORKDIR /api
COPY . .
RUN npm install
RUN npx prisma generate


EXPOSE 3000
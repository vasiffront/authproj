FROM node:18-alpine as builder
WORKDIR /app
COPY /package*.json ./
RUN npm install
COPY . .
EXPOSE 8079
RUN npm run build

FROM nginx:stable as demo-build
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;" ]


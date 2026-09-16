FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN mkdir -p /app/initial_docs /app/initial_public && \
    cp -r /app/src/content/docs/* /app/initial_docs/ && \
    cp -r /app/public/* /app/initial_public/

EXPOSE 80
ENV HOST=0.0.0.0
ENV PORT=80

CMD ["sh", "-c", "mkdir -p /app/src/content/docs /app/public && if [ ! -f /app/src/content/docs/index.md ]; then cp -r /app/initial_docs/* /app/src/content/docs/; fi && if [ ! -f /app/public/op1.jpg ]; then cp -r /app/initial_public/* /app/public/; fi && npm run dev -- --host 0.0.0.0 --port 80"]

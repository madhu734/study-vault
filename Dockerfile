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

CMD ["sh", "-c", "echo '=== SYNCING DOCS & PUBLIC ===' && mkdir -p /app/src/content/docs/question-banks /app/public/pdfs && cp -r /app/initial_docs/* /app/src/content/docs/ && cp -r /app/initial_public/* /app/public/ 2>/dev/null || true && echo '=== QUESTION BANKS LIST: ===' && ls -la /app/src/content/docs/question-banks/ && npm run dev"]

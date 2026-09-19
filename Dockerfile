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

CMD ["sh", "-c", "mkdir -p /app/src/content/docs/question-banks /app/public/pdfs && if [ ! -f /app/src/content/docs/.seeded_v3 ]; then cp -rn /app/initial_docs/* /app/src/content/docs/ 2>/dev/null || cp -r /app/initial_docs/* /app/src/content/docs/; cp /app/initial_docs/index.md /app/src/content/docs/index.md; touch /app/src/content/docs/.seeded_v3; fi && if [ ! -f /app/public/.seeded_v3 ]; then cp -rn /app/initial_public/* /app/public/ 2>/dev/null || cp -r /app/initial_public/* /app/public/; touch /app/public/.seeded_v3; fi && npm run dev"]

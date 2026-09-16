FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Store backups of initial docs and public directory to seed host-mounted volumes on first run
RUN mkdir -p /app/initial_docs /app/initial_public && \
    cp -r /app/src/content/docs/* /app/initial_docs/ && \
    cp -r /app/public/* /app/initial_public/

RUN chmod +x /app/docker-entrypoint.sh

EXPOSE 80
ENV HOST=0.0.0.0
ENV PORT=80

ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["npx", "astro", "dev", "--host", "0.0.0.0", "--port", "80"]

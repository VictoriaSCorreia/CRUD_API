FROM node:16-alpine as builder
ENV NODE_ENV build
USER node
WORKDIR /home/node
COPY package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npm run build \
    && npm prune --dev
###
FROM node:16-alpine
ENV NODE_ENV dev
USER node
WORKDIR /home/node
COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/
EXPOSE 3000
CMD ["node", "dist/main.js"]

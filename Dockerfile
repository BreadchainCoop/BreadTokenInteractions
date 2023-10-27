FROM node
WORKDIR /app
COPY . .
RUN npm install
#ENV TOKEN_ADDRESS=0x365a0c2bcb154c933091e8b6f81b9ef3b4c69b07
EXPOSE 3000
ENV NODE_OPTIONS=--openssl-legacy-provider
ENTRYPOINT ["npm", "start"]
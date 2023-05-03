## CARDAPI002

### 1. Node
Install the following packages and type definitions:

```
npm i -D typescript
npm i -D @types/node @types/express @types/dotenv @types/cors @types/helmet
npm i -D ts-node-dev
```

run with:
```
npm run dev
```

PS: remember it reads the PORT from the .env dotfile, so if it seems stuck, check [that file](https://github.com/deomorxsy/cardapi002/blob/deo/wip01/cicd/.env)


### 2. OCI Container
> still with node but containerized

Build container image from local Containerfile. Add a tag with the 't' flag.

```
# docker
docker build -t your-app-name .

# podman
podman build -t your-app-name -f ./{Dockerfile.framework-you-want}

# buildah
buildah bud -t your-app-name -f ./{Dockerfile.framework-you-want}
```

Run:
```
# run process and expose the port
docker run --rm -p 3000:3000 your-app-name

podman run --rm -p 300:300 your-app-name
```

## CARDAPI002

### 0. Setup

Clone project

```
git clone git@github.com:deomorxsy/cardapi002.git
```

change to server directory
```
cd ./cardapi002/server/
```

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

Run process and expose the port:
```
docker run --rm -p 3000:3000 your-app-name
# or
podman run --rm -p 3000:3000 your-app-name
```

PS: with podman, use [podman-stop](https://docs.podman.io/en/latest/markdown/podman-stop.1.html) to fully stop the process instead of just sending SIGINT with ctrl+c. In this case, just get the PID with [podman-ps](https://docs.podman.io/en/latest/markdown/podman-ps.1.html) and pass it as argument.


you can test POST and other http verbs/methods using [curl](https://github.com/curl/curl). Replace the port accordingly.
```
curl -X POST -H 'Content-Type: application/json' -d '{
  "name": "Salad",
  "price": 499,
  "description": "Fresh",
  "image": "your-image-uri-link"
}' http://localhost:3000/api/menu/items -i
```

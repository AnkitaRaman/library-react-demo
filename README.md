# React-Webpack-Library-App

## React - Role Based Authorization Tutorial & Example

steps to GCP App Engine:

step 1 : Add app.yaml

step 2 : Add "build": "webpack" in package.json

step 3 : git clone https://github.com/AnkitaRaman/react-role-based-authorization-example.git

step 4 : cd <folderName>

step 5 : npm i

step 6 : npm run build

step 7 : gcloud app deploy

step 8 : gcloud app browse

step 9 : open in browser

step 10: change site permission 


##  Steps to dockerize React-webpack App



step 1 : Add VSC extension & download DOcker Desktop

step 2 : Sign in to you dockerAccount

step 3 : Create Dockerfile as mentioned

step 4 : Add "start": "webpack-dev-server --host 0.0.0.0 --config ./webpack.config.js --mode development", in package.json

step 5 : Create an image for docker below commands
```python
docker build -t <DockerUserName>/<ImageName> .
```
step 6 : Check if your image is generated with below command
```python
docker images
```
step 7 : Now run the docker container for this image (run the cmd in admin mode)
```python
docker run --rm -it -v %cd%:/usr/src/project -p 4680:8080 -e CHOKIDAR_USEPOLLING=true <DockerUserName>/<ImageName>
```

## Commands

To change port of webpack
```bash
"start": "webpack-dev-server --open --port 9000 ",
```

## Refrences

### App Engine 

### React-Webpack Dockerization

ref 1. https://www.robinwieruch.de/docker-react-development/

ref 2. https://www.makeareadme.com/  https://readme.so/editor

### React Google Kubernetes Deployment

ref 1. 

ref 2. 
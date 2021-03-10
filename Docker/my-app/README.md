## Create a repository in hub.docker.com.
Login into hub.docker.com and create a new repository named as my-app.

## build

```cmd
docker build -t my-app:v1
docker tag my-app:v1 pilathraj/my-app:v1
docker push pilathraj/my-app:v1
```

## check

```cmd
docker images
```

## pull and check it

```cmd
docker push pilathraj/my-app:v1
```

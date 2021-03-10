## Docker

- **Simple instructions needed for enabling and disabling Hyper V Docker**
You can do below to disable
```shell
dism.exe /Online /Disable-Feature:Microsoft-Hyper-V
bcdedit /set hypervisorlaunchtype off
```
and below to enable
```shell
dism.exe /Online /Enable-Feature:Microsoft-Hyper-V /All
bcdedit /set hypervisorlaunchtype auto 
```

### some useful commands
- list all container
```
docker ps -a
```
- stop container
```
docker stop <containerId or name>
```
- remove container
```
  docker rm <containerId or name>
```
- Stop all runing container list of all running containers
```
docker stop $(docker ps -q)
```
- list all images
```
docker images
```
- delete image
    make sure any container that does not use image, which you are going to delete.
```
  docker rmi <image-name>
 ```

 - run docker (attach mode)
 ```
  docker run <containerName or id>
  ```
  - run docker (detach mode) run in background.
   ```
  docker run -d <containerName or id>
  ```
  When you want run back to normal 
  ```
  docker attach  <containerID> (first 5 character enough)
  ```
  
  - download docker image
  ```
  docker  pull <image-name>
  ```
  - exec a command 
  ```
  docker exec <image-name> cat /etc/hosts
  ```  
 ### docker tag
 default tag: latest
  
 ```
  docker run <containerName or id:versionNo>
```
### Run STDIN
By default docker run command doesn't listen any stdin. it run as non interactive mode.
- interactive mode:
```
docker run -i <containerName or id>
 ```
 - interactive mode attach with terimal 
 ```
docker run -it <containerName or id>
 ```
 
 ###  Run Port mapping
 ```
 docker run -p <localport>:<dockerport> <containerName or id>
 ```
 ### Volume mapping
 
 ```
 docker run -v <localpath>:<containerpath> <containerName or id>
 ```
  ### set environment varibale 
  ```
 docker run -e Some_Env_name=value <containerName or id>
 ```
 ### Container logs
 ``` 
 docker logs <containerName or id>
 ```
 ### Container Inspect 
  used get infromation about container.
  ```
  docker inspect <containerName or id>
  ```
  
  ## Networks (3 types of networks in docker)
  |Bridge|none|host|
  |------|---|-----|
  |Default network|Container is not attached to any network | |
  | private and internal network| | |
  |created by docker| | |
  |Ip address 170.17.0.0/16 ||
  |Acess outside of container, using port mapping|No external access|if container uses host network, then it access without port mapping| 
  
  - By default cotainer attached into bridge network.
  ```
  docker run <image_name> 
  ```
  - You can reset it 
  ```
  docker run <image_name> --network=none 
  or 
  docker run <image_name> --network=host
  ```
  
  ### network bridge 
  -   By default docker will create one internal bridge network, which associated the IP address 172.17.0.0/16 series.
  - You can create your own bridge network,  using network create command,
  ```
  docker network create -- driver bridge  -- subnet 182.18.0.0/16 custom-isolated-network-name  
  ```
  - list all networks
  ```
  docker network ls
  ```
  - Docker has a *DNS server* - to reslove container name into IP address. 
  - IP address for container, may change when the system reboot.
  
  ### Docker build
  - create a dockerfile, example:
  ```
  FROM Ubuntu
  RUN apt-get update && apt-get -y install python
  RUN pip install flask flask-mysql
  COPY . /opt/source-code
  ENTRYPOINT FLASK_APP=/opt/source-code/app.py flask run
  ```
 - build image:
   
  ```
  docker build dockerfile -t <namespace/image-name>
  ````
  
  ### Volumes:
   - two types of mounting
     - volume mounting  (ex. docker run -v <data_vloume>:<default_data_path <image_name>)
     - building mounting (ex. docker run -v <data_vloume_path>:<default_data_path <image_name>)
     - using -v is old way use -mount
     
### Docker compose
   - create a docker-compose.yml file and make up all containers.
   - *links* used to link the two container.
      - old way using compose file version 2 or 3.
 ex: docker-compose.yml version 3:
 ```yml
 version:3
 services:
   redis:
     image: redis
   db:
     image: postgres:9.4
     ports:
       - 5000:80  
 ```
 - make stack up: 
 ```cmd
 docker-compose up
 ```
 
 
   
    
  
  
  
     
  



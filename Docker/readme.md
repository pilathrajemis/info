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
  
    
     
  



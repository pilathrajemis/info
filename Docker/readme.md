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
  docker run <image-name>
  ```
  - run docker (detach mode) run in background.
   ```
  docker run -d <image-name>
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
  



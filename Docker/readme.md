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

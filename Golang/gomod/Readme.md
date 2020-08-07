# Go mod

## create a new go mod
go mod init

## Remove ununsed package
go mod tidy

## download all dependencies
go get ./...
- auto download the packages when run any of the below commands
```cmd
go run
go build
go test
```

## Clean
go clean -cache -modcache -i -r

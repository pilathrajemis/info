# Go mod

## create a new go mod
go mod init

## Remove ununsed package
go mod tidy

## add new dependencies
```
go get github.com/aws/aws-sdk-go
go get github.com/aws/aws-sdk-go@latest
go get github.com/aws/aws-sdk-go@v1.3.0
go get github.com/aws/aws-sdk-go@b811ea8391353a33585662f5f76d42acb7614bb6 //exact commit hash
go get github.com/aws/aws-sdk-go/v2 //download the next major version
```

## To check available version to specific modules (make sure root contain go.mod)
```cmd
go list -m -versions github.com/aws/aws-sdk-go
```
## To check where package is used (make sure root contain go.mod)
```cmd
go mod why github.com/aws/aws-sdk-go
```


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

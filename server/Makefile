.PHONY: $(shell egrep -o ^[a-zA-Z_-]+: $(MAKEFILE_LIST) | sed 's/://')

code/generate/go: ## スキーマなどからGoのコードを生成する
	@mkdir -p generated/go/user/v1
	@protoc --proto_path=schema/user/v1 \
	  --go_out=generated/go/user/v1 \
	  --go_opt=paths=source_relative \
	  --go-grpc_out=generated/go/user/v1 \
	  --go-grpc_opt=paths=source_relative \
	  schema/user/v1/user.proto
	@go generate ./...

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

## libprotoc 3.20.1で生成する。https://stackoverflow.com/questions/72572040/protoc-gen-js-program-not-found-or-is-not-executable
code/generate/ts: ## スキーマなどからTSのコードを生成する
	@mkdir -p generated/ts/user/v1
	@protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts  \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin  \
    --ts_out=generate_package_definition:generated/ts/user/v1  \
    --grpc_out=grpc_js:generated/ts/user/v1  \
    --js_out="import_style=commonjs,binary:generated/ts/user/v1"  \
    -I schema/user/v1 schema/user/v1/*.proto



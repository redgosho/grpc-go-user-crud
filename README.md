# gRPC を使った Go 言語でのオニオンアーキテクチャを採用した SQLite3 ユーザー情報 CRUD システムの実装

## 目次

1. Go 言語の基本

- Go 言語の概要
- 開発環境のセットアップ
- Go 言語の基本構文とデータ型

2. オニオンアーキテクチャの概要

- オニオンアーキテクチャのコンセプト
- レイヤーの分割 (ドメイン, アプリケーション, インフラストラクチャ)
- オニオンアーキテクチャを適用する利点

3. SQLite3 の導入

- SQLite3 の概要
- Go 言語と SQLite3 を連携する方法
- テーブルの作成と初期化

4. ユーザー情報を CURD するシステムの実装

- ドメイン層の実装 (モデルとリポジトリインターフェース)
- アプリケーション層の実装 (サービスとリポジトリの具象クラス)
- インフラストラクチャ層の実装 (データベースアクセス)

5. gRPC の導入

- gRPC の概要
- Protocol Buffers の定義
- gRPC サーバーとクライアントの実装

6. 完成したシステムのテストとデモ

- 単体テストの実装
- システム全体の動作確認

## 1,2 は頑張って学ぶ

## 3. SQLite3 の導入

SQLite3 の概要: SQLite3 は軽量で高速なリレーショナルデータベースです。サーバーレスでセルフコンテイント、トランザクショナルであるため、簡単にアプリケーションに組み込むことができます。

Go 言語と SQLite3 を連携する方法: Go 言語で SQLite3 を扱うには、github.com/mattn/go-sqlite3 というパッケージを使用します。まず、以下のコマンドでパッケージをインストールしてください。

```zsh
go get github.com/mattn/go-sqlite3
```

テーブルの作成と初期化: データベースファイルを作成し、ユーザー情報を格納するテーブルを作成しましょう。以下は、main.go の例です。

```go
package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./user.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	createTableQuery := `
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT NOT NULL,
		email TEXT NOT NULL UNIQUE
	);
	`

	_, err = db.Exec(createTableQuery)
	if err != nil {
		log.Fatalf("Failed to create table: %v", err)
	}

	fmt.Println("User table created successfully")
}
```

このコードを実行すると、user.db というデータベースファイルが作成され、users テーブルが初期化されます。users テーブルには、id, name, email の 3 つのカラムがあります。

`user.db`ができたら削除してしまって OK です。

## 4. ユーザー情報を CURD するシステムの実装

### ドメイン層の実装

まずはドメイン層から実装しましょう。モデルとリポジトリインターフェースを定義します。

まずは、ユーザー情報を表すドメインモデルを定義します。User 構造体を作成し、ID, Name, Email の 3 つのフィールドを定義します。

次に、ユーザー情報に対する操作を抽象化するためのインターフェース UserRepository を定義します。このインターフェースでは、ユーザー情報の CURD 操作に対応するメソッドを定義しています。

→ `domain/user.go`

### アプリケーション層の実装

次にアプリケーション層を実装します。サービスとリポジトリの具象クラスを作成します。

ビジネスロジックを扱うためのサービス UserService を実装します。このサービスは、UserRepository インターフェースを利用して、ユーザー情報に対する操作を行います。

→ `application/user_service.go`:

### インフラストラクチャ層の実装

UserRepository インターフェースを実装した具象クラス SQLiteUserRepository を定義し、SQLite3 を使用してユーザー情報の CURD 操作を行います。

まず、インフラストラクチャ層で具体的なデータアクセス処理を実装します。まず、SQLite3 を使用してユーザー情報を格納するテーブルを作成し、初期化します。

続いて、UserRepository インターフェースの具象クラスである SQLiteUserRepository を実装します。このクラスでは、SQLite3 を使ってユーザー情報の CURD 操作を行う具体的な処理を実装しています。

→ `infrastructure/sqlite_user_repository.go`

このように、まずドメインモデルとリポジトリインターフェースを定義し、アプリケーション層でビジネスロジックを実装し、最後にインフラストラクチャ層で具体的なデータアクセス処理を行うことで、ユーザー情報を CURD するシステムが構築されました。

このアプローチにより、アプリケーションの構造が整理され、拡張性や保守性が向上します。

## 5. gRPC の導入

### gRPC の概要

gRPC は Google が開発した、高性能・高拡張性の RPC フレームワークです。Protocol Buffers をシリアライゼーションフォーマットとして使用し、HTTP/2 をトランスポート層として利用します。

### Protocol Buffers の定義

まず、gRPC で使用する Protocol Buffers の定義を行いましょう。これにより、クライアントとサーバー間でやり取りするメッセージとサービスのインターフェースが定義されます。

→ `user.proto`

### gRPC サーバーとクライアントの実装

Protocol Buffers の定義ができたら、Go 言語用のコードを生成し、gRPC サーバーとクライアントを実装します。

#### protoc の準備

protoc の準備をします。`libprotoc 3.21.12`で実施します。

Mac の場合は Homebrew でインストールできます。

```
brew install protoc
```

次に、protoc-gen-go-grpc プラグインをインストールしてください。以下のコマンドを実行してインストールできます

```zsh
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
```

次に、protoc コマンドを実行して、Go 言語用のプロトコルバッファーコードと gRPC コードを別々に生成します。以下のコマンドを実行してください。
Go 言語用のコードを生成します。

```zsh
protoc -I=. --go_out=. --go_opt=paths=source_relative user.proto
protoc -I=. --go-grpc_out=. --go-grpc_opt=paths=source_relative user.proto
```

`user.pb.go`と`user_grpc.pb.go`が生成されます。

生成された`pb.go`を`userpb`ディレクトリに移動してください。

次に、gRPC サーバーを実装しましょう。

→ `server/server.go`

これで server.go のコードが完成です。このコードでは、先ほど定義した UserService を利用して、gRPC サーバーの各メソッドを実装しています。

最後に、gRPC クライアントを実装しましょう。

→ `client/client.go`

これで client.go のコードが完成です。このコードでは、gRPC サーバーと通信するためのクライアントを実装しています。
ユーザーの作成、取得、更新、削除の各操作を行っています。

これで、gRPC を導入し、ユーザー情報の CURD 操作を行うシステムの実装が完了しました。

## 6. 完成したシステムのテストとデモ

それでは、完成したシステムのテストとデモに進みましょう。

まず、サーバーを起動します。ターミナルでプロジェクトのルートディレクトリに移動し、以下のコマンドを実行してください。

```zsh
go run server/server.go
```

これにより、gRPC サーバーが起動し、:50051 ポートで待ち受け状態になります。

次に、新しいターミナルを開き、プロジェクトのルートディレクトリに移動し、以下のコマンドを実行してクライアントを起動してください。

```zsh
go run client/client.go
```

これにより、クライアントが起動し、サーバーと通信を開始します。

client.go 内で定義した各操作を実行するために、クライアントプログラムを修正することができます。例えば、ユーザーを作成するには、main()関数内で以下のように createUser 関数を呼び出します。

```go
func main() {
	conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()

	client := pb.NewUserServiceClient(conn)

	// Create a user
	user, err := createUser(client, &pb.CreateUserRequest{Name: "John Doe", Email: "john.doe@example.com"})
	if err != nil {
		log.Fatalf("Failed to create a user: %v", err)
	}
	log.Printf("Created user: %v", user)

	// Other CRUD operations...
}
```

同様に、他の CRUD 操作も実行できます。ユーザーを取得、更新、削除するには、getUser, updateUser, deleteUser 関数を呼び出すだけです。

これで、完成したシステムのテストとデモができました！問題が発生した場合は、エラーメッセージを確認して適切な修正を行ってください。
問題がなければ、gRPC を使った Go 言語でのオニオンアーキテクチャを採用した SQLite3 ユーザー情報 CRUD システムの実装が完了です。

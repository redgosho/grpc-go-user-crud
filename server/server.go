package main

import (
	"context"
	"database/sql"
	"log"
	"net"

	_ "github.com/mattn/go-sqlite3"
	"google.golang.org/grpc"

	"github.com/redgosho/grpc-go-user-crud/application"
	"github.com/redgosho/grpc-go-user-crud/domain"
	"github.com/redgosho/grpc-go-user-crud/infrastructure"
	pb "github.com/redgosho/grpc-go-user-crud/userpb"
)

type server struct {
	pb.UnimplementedUserServiceServer
	userService *application.UserService
}

func (s *server) CreateUser(ctx context.Context, in *pb.CreateUserRequest) (*pb.CreateUserResponse, error) {
	user := &domain.User{
		Name:  in.GetName(),
		Email: in.GetEmail(),
	}
	id, err := s.userService.Create(user)
	if err != nil {
		return nil, err
	}
	return &pb.CreateUserResponse{Id: id}, nil
}

func (s *server) GetUser(ctx context.Context, in *pb.GetUserRequest) (*pb.GetUserResponse, error) {
	user, err := s.userService.Get(in.GetId())
	if err != nil {
		return nil, err
	}
	return &pb.GetUserResponse{User: &pb.User{
		Id:    user.ID,
		Name:  user.Name,
		Email: user.Email,
	}}, nil
}

func (s *server) GetAllUsers(ctx context.Context, in *pb.GetAllUsersRequest) (*pb.GetAllUsersResponse, error) {
	users, err := s.userService.GetAll()
	if err != nil {
		return nil, err
	}

	pbUsers := make([]*pb.User, len(users))
	for i, user := range users {
		pbUsers[i] = &pb.User{
			Id:    user.ID,
			Name:  user.Name,
			Email: user.Email,
		}
	}
	return &pb.GetAllUsersResponse{Users: pbUsers}, nil
}

func (s *server) UpdateUser(ctx context.Context, in *pb.UpdateUserRequest) (*pb.UpdateUserResponse, error) {
	user := &domain.User{
		ID:    in.GetId(),
		Name:  in.GetName(),
		Email: in.GetEmail(),
	}
	err := s.userService.Update(user)
	if err != nil {
		return nil, err
	}
	return &pb.UpdateUserResponse{}, nil
}

func (s *server) DeleteUser(ctx context.Context, in *pb.DeleteUserRequest) (*pb.DeleteUserResponse, error) {
	err := s.userService.Delete(in.GetId())
	if err != nil {
		return nil, err
	}
	return &pb.DeleteUserResponse{}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// データベース接続を作成
	db, err := sql.Open("sqlite3", "./user.db")
	if err != nil {
		log.Fatalf("failed to open database: %v", err)
	}
	defer db.Close()

	// インスタンスを作成し、serverに渡す
	userRepo := infrastructure.NewSQLiteUserRepository(db)
	userService := application.NewUserService(userRepo)
	grpcServer := grpc.NewServer()
	pb.RegisterUserServiceServer(grpcServer, &server{userService: userService})

	log.Println("gRPC server listening on :50051")
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

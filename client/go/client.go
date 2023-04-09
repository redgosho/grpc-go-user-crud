package main

import (
	"context"
	"log"
	"time"

	"google.golang.org/grpc"

	pb "github.com/redgosho/grpc-go-user-crud/server/generated/go/user/v1"
)

func main() {
	conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()

	client := pb.NewUserServiceClient(conn)
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	// Create a new user
	createRes, err := client.CreateUser(ctx, &pb.CreateUserRequest{Name: "Alice", Email: "alice@example.com"})
	if err != nil {
		log.Fatalf("could not create user: %v", err)
	}
	log.Printf("Created user with ID: %d", createRes.GetId())

	// Get the created user
	getRes, err := client.GetUser(ctx, &pb.GetUserRequest{Id: createRes.GetId()})
	if err != nil {
		log.Fatalf("could not get user: %v", err)
	}
	log.Printf("Fetched user: %+v", getRes.GetUser())

	// Update the user's email
	_, err = client.UpdateUser(ctx, &pb.UpdateUserRequest{Id: createRes.GetId(), Name: "Alice", Email: "updated_alice@example.com"})
	if err != nil {
		log.Fatalf("could not update user: %v", err)
	}
	log.Printf("Updated user's email")

	// Get the updated user
	getRes, err = client.GetUser(ctx, &pb.GetUserRequest{Id: createRes.GetId()})
	if err != nil {
		log.Fatalf("could not get user: %v", err)
	}
	log.Printf("Fetched updated user: %+v", getRes.GetUser())

	// Delete the user
	_, err = client.DeleteUser(ctx, &pb.DeleteUserRequest{Id: createRes.GetId()})
	if err != nil {
		log.Fatalf("could not delete user: %v", err)
	}
	log.Printf("Deleted user")
}

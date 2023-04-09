// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IUserServiceService_ICreateUser;
    getUser: IUserServiceService_IGetUser;
    getAllUsers: IUserServiceService_IGetAllUsers;
    updateUser: IUserServiceService_IUpdateUser;
    deleteUser: IUserServiceService_IDeleteUser;
}

interface IUserServiceService_ICreateUser extends grpc.MethodDefinition<user_pb.CreateUserRequest, user_pb.CreateUserResponse> {
    path: "/user.UserService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<user_pb.CreateUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.CreateUserResponse>;
}
interface IUserServiceService_IGetUser extends grpc.MethodDefinition<user_pb.GetUserRequest, user_pb.GetUserResponse> {
    path: "/user.UserService/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<user_pb.GetUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.GetUserResponse>;
}
interface IUserServiceService_IGetAllUsers extends grpc.MethodDefinition<user_pb.GetAllUsersRequest, user_pb.GetAllUsersResponse> {
    path: "/user.UserService/GetAllUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetAllUsersRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetAllUsersRequest>;
    responseSerialize: grpc.serialize<user_pb.GetAllUsersResponse>;
    responseDeserialize: grpc.deserialize<user_pb.GetAllUsersResponse>;
}
interface IUserServiceService_IUpdateUser extends grpc.MethodDefinition<user_pb.UpdateUserRequest, user_pb.UpdateUserResponse> {
    path: "/user.UserService/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<user_pb.UpdateUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UpdateUserResponse>;
}
interface IUserServiceService_IDeleteUser extends grpc.MethodDefinition<user_pb.DeleteUserRequest, user_pb.DeleteUserResponse> {
    path: "/user.UserService/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<user_pb.DeleteUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.DeleteUserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    createUser: grpc.handleUnaryCall<user_pb.CreateUserRequest, user_pb.CreateUserResponse>;
    getUser: grpc.handleUnaryCall<user_pb.GetUserRequest, user_pb.GetUserResponse>;
    getAllUsers: grpc.handleUnaryCall<user_pb.GetAllUsersRequest, user_pb.GetAllUsersResponse>;
    updateUser: grpc.handleUnaryCall<user_pb.UpdateUserRequest, user_pb.UpdateUserResponse>;
    deleteUser: grpc.handleUnaryCall<user_pb.DeleteUserRequest, user_pb.DeleteUserResponse>;
}

export interface IUserServiceClient {
    createUser(request: user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: user_pb.GetAllUsersRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: user_pb.GetAllUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: user_pb.GetAllUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createUser(request: user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: user_pb.GetAllUsersRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: user_pb.GetAllUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: user_pb.GetAllUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
}

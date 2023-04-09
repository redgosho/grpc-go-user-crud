"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceClientImpl = exports.User = exports.DeleteUserResponse = exports.DeleteUserRequest = exports.UpdateUserResponse = exports.UpdateUserRequest = exports.GetAllUsersResponse = exports.GetAllUsersRequest = exports.GetUserResponse = exports.GetUserRequest = exports.CreateUserResponse = exports.CreateUserRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "user";
function createBaseCreateUserRequest() {
    return { name: "", email: "" };
}
exports.CreateUserRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            email: isSet(object.email) ? String(object.email) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.email !== undefined && (obj.email = message.email);
        return obj;
    },
    create: function (base) {
        return exports.CreateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateUserRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.email = (_b = object.email) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCreateUserResponse() {
    return { id: 0 };
}
exports.CreateUserResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateUserResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.id = longToNumber(reader.int64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create: function (base) {
        return exports.CreateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCreateUserResponse();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseGetUserRequest() {
    return { id: 0 };
}
exports.GetUserRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.id = longToNumber(reader.int64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create: function (base) {
        return exports.GetUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetUserRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseGetUserResponse() {
    return { user: undefined };
}
exports.GetUserResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.user !== undefined) {
            exports.User.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetUserResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.user = exports.User.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { user: isSet(object.user) ? exports.User.fromJSON(object.user) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.user !== undefined && (obj.user = message.user ? exports.User.toJSON(message.user) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetUserResponse();
        message.user = (object.user !== undefined && object.user !== null) ? exports.User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseGetAllUsersRequest() {
    return {};
}
exports.GetAllUsersRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAllUsersRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.GetAllUsersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseGetAllUsersRequest();
        return message;
    },
};
function createBaseGetAllUsersResponse() {
    return { users: [] };
}
exports.GetAllUsersResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.users; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.User.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAllUsersResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.users.push(exports.User.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { users: Array.isArray(object === null || object === void 0 ? void 0 : object.users) ? object.users.map(function (e) { return exports.User.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.users) {
            obj.users = message.users.map(function (e) { return e ? exports.User.toJSON(e) : undefined; });
        }
        else {
            obj.users = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.GetAllUsersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetAllUsersResponse();
        message.users = ((_a = object.users) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.User.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseUpdateUserRequest() {
    return { id: 0, name: "", email: "" };
}
exports.UpdateUserRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.email !== "") {
            writer.uint32(26).string(message.email);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.id = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            id: isSet(object.id) ? Number(object.id) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            email: isSet(object.email) ? String(object.email) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.name !== undefined && (obj.name = message.name);
        message.email !== undefined && (obj.email = message.email);
        return obj;
    },
    create: function (base) {
        return exports.UpdateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUpdateUserRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.email = (_c = object.email) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseUpdateUserResponse() {
    return {};
}
exports.UpdateUserResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateUserResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.UpdateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseUpdateUserResponse();
        return message;
    },
};
function createBaseDeleteUserRequest() {
    return { id: 0 };
}
exports.DeleteUserRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.id = longToNumber(reader.int64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create: function (base) {
        return exports.DeleteUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDeleteUserRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDeleteUserResponse() {
    return {};
}
exports.DeleteUserResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteUserResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.DeleteUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseDeleteUserResponse();
        return message;
    },
};
function createBaseUser() {
    return { id: 0, name: "", email: "" };
}
exports.User = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.email !== "") {
            writer.uint32(26).string(message.email);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUser();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.id = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            id: isSet(object.id) ? Number(object.id) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            email: isSet(object.email) ? String(object.email) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.name !== undefined && (obj.name = message.name);
        message.email !== undefined && (obj.email = message.email);
        return obj;
    },
    create: function (base) {
        return exports.User.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUser();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.email = (_c = object.email) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
var UserServiceClientImpl = /** @class */ (function () {
    function UserServiceClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "user.UserService";
        this.rpc = rpc;
        this.CreateUser = this.CreateUser.bind(this);
        this.GetUser = this.GetUser.bind(this);
        this.GetAllUsers = this.GetAllUsers.bind(this);
        this.UpdateUser = this.UpdateUser.bind(this);
        this.DeleteUser = this.DeleteUser.bind(this);
    }
    UserServiceClientImpl.prototype.CreateUser = function (request) {
        var data = exports.CreateUserRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "CreateUser", data);
        return promise.then(function (data) { return exports.CreateUserResponse.decode(minimal_1.default.Reader.create(data)); });
    };
    UserServiceClientImpl.prototype.GetUser = function (request) {
        var data = exports.GetUserRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetUser", data);
        return promise.then(function (data) { return exports.GetUserResponse.decode(minimal_1.default.Reader.create(data)); });
    };
    UserServiceClientImpl.prototype.GetAllUsers = function (request) {
        var data = exports.GetAllUsersRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetAllUsers", data);
        return promise.then(function (data) { return exports.GetAllUsersResponse.decode(minimal_1.default.Reader.create(data)); });
    };
    UserServiceClientImpl.prototype.UpdateUser = function (request) {
        var data = exports.UpdateUserRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdateUser", data);
        return promise.then(function (data) { return exports.UpdateUserResponse.decode(minimal_1.default.Reader.create(data)); });
    };
    UserServiceClientImpl.prototype.DeleteUser = function (request) {
        var data = exports.DeleteUserRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "DeleteUser", data);
        return promise.then(function (data) { return exports.DeleteUserResponse.decode(minimal_1.default.Reader.create(data)); });
    };
    return UserServiceClientImpl;
}());
exports.UserServiceClientImpl = UserServiceClientImpl;
var tsProtoGlobalThis = (function () {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}

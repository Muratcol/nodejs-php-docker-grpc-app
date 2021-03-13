
const PROTO_PATH = __dirname + '/../protos/smellycat.proto';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Controllers to handle requests
const { meow, doMath } = require('../controllers/cat.controller');

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });


const my_proto = grpc.loadPackageDefinition(packageDefinition).smellycat;


function main() {
    const server = new grpc.Server();

    //  Service (Endpoint) and controllers
    server.addService(my_proto.Meow.service, { SayMeow: meow, DoMath: doMath });

    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        console.log("SERVER STARTED");
        server.start();
    });
}

main();
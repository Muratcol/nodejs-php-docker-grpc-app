# gRPC NodeJs-PHP Application

This project has been made for educational purposes.

With this project, PHP libraries were created automatically using gRPC and Procol Buffers. These libraries send a request to the NodeJs server, which uses the common network in the docker. Responses received from the server, echoed in the console.

For additional informations about gRPC and Protocol buffers go to [official gRPC docs](https://grpc.io/docs/languages/php/quickstart/)


---
## Requirements

For development, you will need Docker installed to your environment.

### Docker
- #### Docker installation

    For docker installation check [this](https://docs.docker.com/desktop/) out.
    Also, be sure to install `docker-compose`
  
## Building the project

    $ docker-compose build

## Running the project

    $ docker-compose up

proto:
	protoc -I=protos \
	protos/smellycat.proto \
	--php_out=php_client/src \
	--grpc_out=php_client/src \
	--plugin=protoc-gen-grpc=../../../grpc/cmake/build/grpc_php_plugin
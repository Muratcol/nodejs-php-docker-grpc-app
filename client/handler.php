<?php

require_once realpath("vendor/autoload.php");

echo "*** Testing PHP Client ***";


$cat = new Smellycat\MeowClient(
    // we use docker network to connect server so localhost => imagename
    "grpc-server:50051",
    [
        "credentials" => Grpc\ChannelCredentials::createInsecure()
    ]
);

$req = new Smellycat\Request();
$req2 = new Smellycat\MathRequest();
$req2->setNumber1(10);
$req2->setNumber2(5);

sleep(5);
list($res1, $status1) = $cat->SayMeow($req)->wait();
list($res2, $status2) = $cat->DoMath($req2)->wait();

echo "\n";
echo "Smelly Cat wants to tell you something\n";
echo $res1->getMessage();
echo "\n";
echo "Smelly Cat Doing Math, calculating 10 + 5\n";
echo $res2->getMessage();
echo "\n";
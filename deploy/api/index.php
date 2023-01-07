<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");
    die();
}
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;
include_once './models/Client.php';
include_once './models/Product.php';
require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../bootstrap.php';
 
const JWT_SECRET = "makey1234567";

$app = AppFactory::create();

function createJwT (Response $response) : Response {

    $issuedAt = time();
    $expirationTime = $issuedAt + 60000;
    $payload = array(
        'userid' => '999',
        'email' => 'ESAqua@gmail.com',
        'pseudo' => 'ESAqua',
        'iat' => $issuedAt,
        'exp' => $expirationTime
    );

    $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");
    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
    return $response;
}


$app->get('/api/hello/{name}', function (Request $request, Response $response, $args) {
    $array = [];
    $array ["nom"] = $args ['name'];
    $response->getBody()->write(json_encode ($array));
    return $response;
});

$app->post('/api/login', function (Request $request, Response $response, $args) {
	global $entityManager;    
	$err=false;
    $inputJSON = file_get_contents('php://input');
    $body = json_decode( $inputJSON, TRUE ); //convert JSON into array 
    $login = $body['login'] ?? ""; 
    $pass = $body['password'] ?? "";

    if (!preg_match("/[a-zA-Z0-9]{1,20}/",$login))   {
        $err = true;
    }
    if (!preg_match("/[a-zA-Z0-9]{1,20}/",$pass))  {
        $err=true;
    }

    if (!$err) {
        $utilisateurRepository = $entityManager->getRepository('Client');
        $utilisateur = $utilisateurRepository->findOneBy(array('login' => $login, 'password' => $pass));
        if ($utilisateur) {
            $response = createJwT($response);
            $data = array('firstname' => trim($utilisateur->getFirstname()), 'lastname' => trim($utilisateur->getLastname()), 'email' => trim($utilisateur->getEmail()), 'login' => trim($utilisateur->getLogin()),'phone' => trim($utilisateur->getPhone()));
            $response->getBody()->write(json_encode($data));
        } else {          
            $response = $response->withStatus(404);
        }

    } else {
        $response = $response->withStatus(401);
    }
    return $response;
});

$app->post('/api/register', function (Request $request, Response $response, $args) {
    global $entityManager;
    
    $err=false;
    $inputJSON = file_get_contents('php://input');
    $body = json_decode( $inputJSON, TRUE ); //convert JSON into array 
    $body = $body['client'];
    $firstname = $body['firstname'] ?? ""; 
    $lastname = $body['lastname'] ?? "";
    $email = $body['email'] ?? "";
    $password = $body['password'] ?? "";
    $login = $body['login'] ?? "";
    $phone = $body['phone'] ?? "";

    $client = new Client();
    $client->setFirstname($firstname);
    $client->setLastname($lastname);
    $client->setEmail($email);
    $client->setPassword($password);
    $client->setLogin($login);
    $client->setPhone($phone);

    $entityManager->persist($client);
    $entityManager->flush();
    
    return $response->withStatus(201);
});

$app->get('/api/catalogue', function (Request $request, Response $response, $args) {
    global $entityManager;
    $produitRepository = $entityManager->getRepository('Product');
    $produits = $produitRepository->findAll();
    $data = array();
    foreach ($produits as $produit) {
        $data[] = array('id' => trim($produit->getId()), 'name' => trim($produit->getName()), 'price' => trim($produit->getPrice()));
    }
    $response->getBody()->write(json_encode($data));
    return $response;
});

$app->get('/api/catalogue/{id}', function (Request $request, Response $response, $args) {
    global $entityManager;
    $id = $args['id'];
    $produitRepository = $entityManager->getRepository('Product');
    $produit = $produitRepository->findOneBy(array('id' => $id));
    if ($produit) {
        $data = array('id' => trim($produit->getId()), 'name' => trim($produit->getName()), 'price' => trim($produit->getPrice()));
        $response->getBody()->write(json_encode($data));
    } else {          
        $response = $response->withStatus(404);
    }
    return $response;
});

$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path" => ["/api"],
    "ignore" => ["/api/hello", "/api/login", '/api/register', '/api/catalogue', '/api/catalogue/{id}'],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
];

$app->add(new Tuupola\Middleware\JwtAuthentication($options));
$app->run ();

<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => 'dpg-cedhoasgqg45ht9oieqg-a',
'driver' => 'pdo_pgsql',
'user' => 'aqua',
'password' => 'InzDgXVxzi175Yxzn3auhkITM9K0DOj6',
'dbname' => 'tp_hamm_benjamin_db',
'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);


        <?php
            require 'Slim/Slim.php';
            require 'database.php';
            require 'tandm_db.php';
            use Slim\Slim;
            \Slim\Slim::registerAutoloader();
            
            
            $app = new Slim();
            
            $app->get('/materials', 'getMaterials');
            $app->get('/materials/max', 'getMaxId');
            $app->get('/materials/:id', 'getMaterialById');
            $app->get('/materials/search/:query', 'getMaterialByName');
            $app->post('/materials', 'addMaterial');
            $app->put('/materials/:id', 'updateMaterial');
            $app->delete('/materials/:id', 'deleteMaterial');
            $app->run();
        // put your code here
        ?>

<?php
include_once 'includes/header.php';

?>

<div class="container">
    <?php

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_team'])) {
        $stmt = $pdo->prepare("INSERT INTO teams (class_name) VALUES (?)");
        $stmt->execute([$_POST['class_name']]);
        echo '<div class="alert alert-success"> Team added successfully </div>';
    }

    if (isset($_GET['delete'])){
        $stmt = $pdo->prepare("DELETE FROM teams WHERE id = ?");
        $stmt->execute([$_GET['delete']]);
        echo '<script>window.location="teams.php";</script>';
    }
    ?>


    
        <form method="post" class="row g-3 mb-4">
            <div class="col-md-6">
                <input type="text" class="form-control" name="class_name" placeholder="Class Name">
            </div>
            <div class="col-md-6">
                <button type="submit" name="add_team" class="btn btn-success">Add Team</button>
            </div>
        </form>

    <table class="table table-striped">
        <thead>
            <tr>
                <th>Class</th>
                <th>Points</th>
                <th>Goals For</th>
                <th>Goals Against</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $teams = $pdo->query("SELECT * FROM teams")->fetchAll();
            foreach ($teams as $team):
            ?>
                <tr>
                    <td> <?= htmlspecialchars($team['class_name']); ?></td>
                    <td> <?= $team['points'] ?></td>
                    <td> <?= $team['goals_scored'] ?></td>
                    <td> <?= $team['goals_conceded'] ?></td>
                    <td>
                        <a href="teams.php?edit=<?= $team['id'] ?>" class="btn btn-sm btn-warning">Edit</a> 
                        <a href="teams.php?delete=<?= $team['id'] ?>" class="btn btn-sm btn-danger">Delete</a> 
                    </td> 
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>

<?php include_once 'includes/footer.php' ?>
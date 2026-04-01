<?php
require_once 'includes/db.php';
include_once 'includes/header.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_match'])) {
    try{
        $pdo->beginTransaction();
        if($_POST['team1'] == $_POST ['team2']) {
            throw new Exception("A team cannot play against itself.");
        };
        if ($_POST['match_date'] > date('y-m-d H:i:s')){
            throw new Exception("Match date cannont be in the future");
        };
        $stmt = $pdo->prepare("INSERT INTO matches
        (team1_id, team2_id, team1_goals, team2_goals, match_date)
        VALUES (?,?,?,?,?)");
        $stmt->execute([$_POST['team1'], $_POST['team2'], $_POST['team1_goals'], $_POST['team2_goals'], $_POST['match_date']]);

        $pdo->commit();
        echo '<div class = "alert alert-success"> Match Added Successfully </div>';
        header("Location: matches.php");
        exit();
    }catch(PDOException $e){

    }
}







?>

<div class="card mb-4">
    <div class="card-header bg-primary text-white text-center w-100">
        <h2>ADD Match Result</h2>
    </div>
    <div class="card-body">
        <form action="" method="post" class="row g-3">
            <div class="col-md-3">
                <select class="form-select" name="team1">
                    <option value="">Select Team 1</option>
                    <?php
                    $teams = $pdo->query("SELECT * FROM teams")->fetchAll();
                    foreach ($teams as $team): ?>
                        <option value="<?= $team['id'] ?>"> <?= htmlspecialchars($team['class_name']) ?></option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="col-md-1">
                <input type="number" class="form-control" name="team1_goals" required min="0">
            </div>
            <div class="col-md-1">
                <input type="number" class="form-control" name="team2_goals" required min="0">
            </div>
            <div class="col-md-3">
                <select class="form-select" name="team2">
                    <option value="">Select Team 2</option>
                    <?php
                    $teams = $pdo->query("SELECT * FROM teams")->fetchAll();
                    foreach ($teams as $team): ?>
                        <option value="<?= $team['id'] ?>"> <?= htmlspecialchars($team['class_name']) ?></option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="col-md-3">
                <input type="datetime-local" class="form-control" name="match_date" required>
            </div>
            <div class="col-md-1">
                <button type="submit" class="btn btn-success" name="add_match">Save</button>
            </div>

        </form>
    </div>
</div>
<h3 class="mb-3">Match History</h3>
<table class="table table-striped">
    <thead>
        <tr>
            <th>Date</th>
            <th>Match</th>
            <th>Result</th>
        </tr>
    </thead>
    <tbody>

    <?php
    $matches = $pdo->query("SELECT m.*, t1.class_name as team1_name, t2.class_name as team2_name
    from matches m, teams t1, teams t2
    WHERE m.team1_id = t1.id and m.team2_id = t2.id
    ORDER BY m.match_date DESC
    ")->fetchAll();

    foreach ($matches as $match):?>

    <tr>
        <td><?= date('d/m/Y', timestamp: strtotime($match['match_date'])) ?></td>
        <td><?= htmlspecialchars($match['team1_name']) ?> VS <?= htmlspecialchars($match['team2_name']) ?> </td>
        <td><?= $match['team1_goals'] ?> - <?= $match['team2_goals'] ?></td>
    </tr>
    
    <?php endforeach; ?>
    </tbody>
</table>

<?php include_once 'includes/footer.php' ?>
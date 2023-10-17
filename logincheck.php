<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logging in...</title>
</head>
<body>
    <?php
    if(isset($_POST['loginbutton'])){
        $brukernavn = $_POST['username'];
        $passord = $_POST['password'];

        $dbc = mysqli_connect('localhost', 'root', 'IMKuben1337!', 'mydb')
            or die('Error connection to MySQL Server.');
        
        $query = "SELECT username, password from users where username='$brukernavn' and password='$passord'";

        $result = mysqli_query($dbc, $query)
            or die('Error querying database');

        mysqli_close($dbc);

        if($result->num_rows > 0){
            setcookie("logged_in", "yes");
            setcookie("user", $brukernavn);
            header('location: index.html');
        }else{
            setcookie("logged_in", "no");
            setcookie("user", "", time() - 3600);
            header('location: login.html');
        }
    } else {
        echo "Du har ikke skrevet inn noe";
    }
    ?>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utF-8">
 <meta name="viewport" content="width=device-width, initial scale=1.0">
 <title>PHP</title>
</head>
<body>
<?php
interface ActivityInterface {
    public function displayDetails();
}

abstract class Activity implements ActivityInterface
{
    protected $name;
    protected $duration;
    
    public function __construct($name, $duration) {
        $this->name = $name;
        $this->duration = $duration;
    }
    
    public function getName() {
        return $this->name;
    }
    public function setName($name) {
        $this->name = $name;
    }
    public function getDuration() {
        return $this->duration;
    }
    public function setDuration($duration) {
        $this->duration = $duration;
    }
    abstract public function displayDetails();
}

// Child class for sports activities
class SportsActivity extends Activity {
    private $equipment;
    public function __construct($name, $duration, $equipment) {
        $this->name = $name;
        $this->duration = $duration;
        $this->equipment = $equipment;
    }
    public function getEquipment() {
        return $this->equipment;
    }
    public function setEquipment($equipment) {
        $this->equipment = $equipment;
    }
    public function displayDetails() {
        echo "Name: {$this->name}<br>";
        echo "Duration: {$this->duration}<br>";
        echo "Equipment: {$this->equipment}<br>";
    }
}
// Child class for academic activities
class AcademicActivity extends Activity {
    private $subject;
    public function __construct($name, $duration, $subject) {
        $this->name = $name;
        $this->duration = $duration;
        $this->subject = $subject;
    }
    public function getSubject() {
        return $this->subject;
    }
    public function setSubject($subject) {
        $this->subject = $subject;
    }
    public function displayDetails() {
        echo "Name: {$this->name}<br>";
        echo "Duration: {$this->duration}<br>";
        echo "Subject: {$this->subject}<br>";
    }
}


$sportsActivity = new SportsActivity("Soccer", "1 hour", "Ball");
$academicActivity = new AcademicActivity("Math", "2 hours", "Algebra");


$activities = [$sportsActivity, $academicActivity];


foreach ($activities as $activity) {
    $activity->displayDetails();
}
?>
</body>
</html>


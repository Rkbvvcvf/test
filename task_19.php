<?php
interface IFamily
{
  public function setFirstName($fistName);
  public function getFirstName();
  public function setLastName($lastName);
  public function getLastName();
  public function setAge($age);
  public function getAge();
  public function setMother($mother);
  public function getMother();
  public function setFather($father);
  public function getFather();
}
class Person implements IFamily
{
  private $firstName;
  private $lastName;
  private $age;
  private $mother;
  private $father;
  private $hp;

  function __construct($firstName, $lastName, $age, $mother = null, $father = null)
  {
    $this->setFirstName($firstName);
    $this->setLastName($lastName);
    $this->setAge($age);
    $this->setMother($mother);
    $this->setFather($father);
    $this->hp = 100;
  }
  function setFirstName($firstName)
  {
    $this->firstName = $firstName;
  }
  function getFirstName()
  {
    return $this->firstName;
  }
  function setLastName($lastName)
  {
    $this->lastName = $lastName;
  }
  function getLastName()
  {
    return $this->lastName;
  }
  function setAge($age)
  {
    $this->age = $age > 110 ? 110 : $age;
  }
  function getAge()
  {
    return $this->age;
  }
  function setMother($mother)
  {
    if ($mother instanceof IFamily or $mother != null) {
      $this->mother = $mother;
    }
  }
  function getMother()
  {
    return $this->mother;
  }
  function setFather($father)
  {
    if ($father instanceof IFamily or $father != null) {
      $this->father = $father;
    }
  }
  function getFather()
  {
    return $this->father;
  }
  function getHp()
  {
    return $this->hp;
  }
  function getFullName()
  {
    return $this->firstName . ", " . $this->lastName;
  }
}


$gfGleb = new Person("Глеб", "Жиглов", 72);
$gmMasha = new Person("Мария", "Жиглова", 71);


$gfVladimir = new Person("Владимир", "Шарапов", 66);
$gmDasha = new Person("Дарья", "Шарапова", 65);


$fIgor = new Person("Игорь", "Шарапов", 42, $gmDasha, $gfVladimir);
$mSveta = new Person("Светлана", "Шарапова", 40, $gmMasha, $gfGleb);


$sAnton = new Person("Антон", "Шарапов", 9, $mSveta, $fIgor);
$dTanya = new Person("Татьяна", "Шарапова", 7, $mSveta, $fIgor);


echo "Привет!, меня зовут " . $sAnton->getFullName() .
  " мне " . $sAnton->getAge() . " лет<br>";
echo "У меня есть мама и папа. Маму зовут " . $sAnton->getMother()->getFullName() . "<br>";
echo "Папу зовут " . $sAnton->getFather()->getFullName() . "<br>";
echo "Привет!, меня зовут " . $dTanya->getFullName() .
  " мне " . $dTanya->getAge() . " лет<br>";
echo "У меня есть бабушка и дедушка (по линии матери). Бабушку зовут " .
  $dTanya->getMother()->getMother()->getFullName() . "<br>";
echo "Дедушку зовут " . $dTanya->getMother()->getFather()->getFullName() . "<br>";
echo "У меня есть бабушка и дедушка (по линии отца). Бабушка " .
  $dTanya->getFather()->getMother()->getFullName() . "<br>";
echo "Дедушка " . $dTanya->getFather()->getFather()->getFullName();


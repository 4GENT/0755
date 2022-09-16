<?php
class Person {
    private $name;
    private $lastname;
    private $age;
    private $hp;
    private $mother;
    private $father;

  function __construct($name, $lastname, $age, $mother = null, $father = null)
  {
    $this -> name = $name;
    $this -> lastname = $lastname;
    $this -> age = $age;
    $this -> mother = $mother;
    $this -> father = $father;
    $this -> hp = 100;
  }
  function sayHi($name) {
    return "Hi, $name, I`m ".$this->name;
  }
  function setHp($hp) {
    if ($this->hp + $hp >= 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }
  function getHp() {
    return $this->hp;
  }
  function getName() {
    return $this -> name;
  }
  function getMother() {
    return $this -> mother;
  }
  function getFather() {
    return $this -> father;
  }
  function getLastname() {
    return $this -> lastname;
  }

  function getInfo() {
    return
    "<h3>A few words about myself:</h3><br>".
    "My Name is: ".$this->getName().
    "<br>My Lastname is: ".$this->getLastname().
    "<br>My Father is: ".$this->getFather()->getName().
    "<br>My Mother is: ".$this->getMother()->getName().
    "<br>My Grandmother is: ".$this->getMother()->getMother()->getName().", ".$this->getFather()->getMother()->getName().
    "<br>My Grandfather is: ".$this->getFather()->getFather()->getName().", ".$this->getMother()->getFather()->getName();
  }
}

$igor = new Person("Igor", "Ivanov", 68); // дедушка 1
$lev = new Person("Lev", "Kazakov", 72); // дедушка 2

$sasha = new Person("Aleksandra", "Ivanova", 69); // бабушка 1
$galya = new Person("Galina", "Petrova", 73); // бабушка 2



$alex = new Person("Alex", "Ivanov", 42, $sasha, $igor); // папа
$olga = new Person("Olga", "Ivanova", 42, $galya, $lev); // мама
$valera = new Person("Valera", "Ivanov", 15, $olga, $alex); //сын


echo $valera->getInfo();

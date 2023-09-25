<?php
    class raghad {
        public $number1 = 10;
        public $number2 = 5;

        public function sum() {
            return $this->number1 + $this->number2;
        }
    }
        
    $raghad = new raghad();
    $result = $raghad->sum();
    
    echo $result;        
?>
<?php
echo "Soal nomer 3 ";

function count_handshake($jmlorang){
    $jmlsalaman = 0;
    for($a=1; $a<$jmlorang; $a++){
        for ($b=$a; $b>=1; $b--){
            $jmlsalaman++;
        }
    }
echo $jmlsalaman;
}

count_handshake(7);
?>

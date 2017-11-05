<?php

sleep(1);

$post = filter_input_array(INPUT_POST, FILTER_DEFAULT);
echo json_encode($post);
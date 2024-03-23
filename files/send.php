<?php

$token = "6954779819:AAGrSubT6WogUOEj01uGNpVDGv-XAqkiS6k";
$chat_id = "-790544819";

if ($_POST['act'] == 'order') {
  $phone = $_POST['phone'];

  $txt = "<b>Новая заявка: </b>" . $phone;

  $sendToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text=" . urlencode($txt)); 

  if ($sendToTelegram) {
    echo 'Заявка успешно отправлена.';
  } else {
    echo 'Что-то пошло не так. Попробуйте отправить форму ещё раз.';
  }
}
?>
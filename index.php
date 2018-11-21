<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="content-language" content="pt-br, en-US, fr" />
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/calcular.js"></script> 
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="calculadora">
    <div class="resultado-div">
        <form action="" method="post">
            <input type="text" id="resultado" readonly>
        </form>
    </div>
    
    <div class="btns">
        <input type="button" value="7" name="btn" class="btn">
        <input type="button" value="8" name="btn" class="btn">
        <input type="button" value="9" name="btn" class="btn">
        <input type="button" value="C" name="c" class="btn c">
        <input type="button" value="x" name="multiplicacao" class="btn">
        
        <input type="button" value="4" name="btn" class="btn">
        <input type="button" value="5" name="btn" class="btn">
        <input type="button" value="6" name="btn" class="btn">
        <input type="button" value="CE" name="ce" class="btn btn-ce">
        <input type="button" value="-" name="subtracao" class="btn">
       
        <input type="button" value="1" name="btn" class="btn">
        <input type="button" value="2" name="btn" class="btn">
        <input type="button" value="3" name="btn" class="btn">
        <input type="button" value="÷" name="divisao" class="btn">
        <input type="button" value="+" name="soma" class="btn btn-soma">
        
        <input type="button" value="0" name="btn" class="btn btn-zero">
        <input type="button" value="." name="btn" class="btn">
        <input type="button" value="=" name="igual" class="btn btn-igual">
    </div>
</div>
    
</body>
</html>

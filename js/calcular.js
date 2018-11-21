// This is a JavaScript file
$(function(){
    
    var valor1, valor2, conta;
    
    $("input[name=btn]").click(function(){
        $("#resultado").val($("#resultado").val() + $(this).val());
    //armazena o valor digitado e adiciona o novo valor
    })
    
    $("input[name=ce]").click(function(){
        $("#resultado").val("");
    //apaga o valor
    })
    
    $("input[name=c]").click(function(){
        var len = $("#resultado").val().length;

        //conta a qtde de caracteres do valor
        var valor = $("#resultado").val();
        
        valor = valor.replace(valor.charAt(len - 1), "");
        //substitui o ultimo caractere para nulo
        $("#resultado").val(valor);
    })
    
    $("input[name=soma]").click(function(){
        if($("#resultado").val() != ""){
            valor1 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            conta = "soma";
        }else{
            alert("Digite um número para somar");
        }
    })
    
    $("input[name=subtracao]").click(function(){
        if($("#resultado").val() != ""){
            valor1 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            conta = "subtracao";
        }else{
            alert("Digite um número para subtrair");
        }
    })
    
    $("input[name=multiplicacao]").click(function(){
        if($("#resultado").val() != ""){
            valor1 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            conta = "multiplicacao";
        }else{
            alert("Digite um número para multiplicar");
        }
    })
    
    $("input[name=divisao]").click(function(){
        if($("#resultado").val() != ""){
            valor1 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            conta = "divisao";
        }else{
            alert("Digite um número para dividir");
        }
    })
    
    $("input[name=igual]").click(function(){
        if($("#resultado").val() != ""){
            valor2 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            
            if(conta == "soma"){
                $("#resultado").val(valor1+valor2);
            }
            
            if(conta == "subtracao"){
                $("#resultado").val(valor1-valor2);
            }
            
            if(conta == "multiplicacao"){
                $("#resultado").val(valor1*valor2);
            }
            
            if(conta == "divisao"){
                $("#resultado").val(valor1/valor2);
            }
            
            
        }else{
            alert("Digite um outro número para calcular");
        }
    })
    
});
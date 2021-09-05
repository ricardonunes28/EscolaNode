$("#nome").blur(function () {
    var nome = $("#nome").val();
    if ( nome =='' || !isNaN(nome)) {
        $("#nome").css('borderColor', 'red');
    } else {
        $("#nome").css('borderColor', 'green');
    
        
    }
});
$("#idade").blur(function () {
    var idade = $("#idade").val();
    if ( idade =='' || isNaN(idade) || idade >=130 || idade <= 1) {
        $("#idade").css('borderColor', 'red');
    } else {
        $("#idade").css('borderColor', 'green');
        
        
    }
});



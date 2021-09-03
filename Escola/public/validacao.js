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


// $("#inputEmail4").blur(function () {
//     var email = $('#inputEmail4').val();
//     var email_regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
//     var checagem = email_regex.test(email)
//     if (!checagem) {
//         $('#inputEmail4').css('borderColor', 'red');
//     } else {
//         $('#inputEmail4').css('borderColor', 'green');
//     }
// });

// $("#inputCity").blur(function () {
//     var nome = $('#inputNome3').val();
//     if (!isNaN(nome) ) {
//         $("#inputCity").css('borderColor', 'red');
//     } else {
//         $("#inputCity").css('borderColor', 'green');
        
//     }
// });
$("button").click(function(){
    
      var _cep = $("input").val();
      var _url =  "https://api.postmon.com.br/v1/cep/"+_cep;
       $.ajax({
           method: "GET",
           url: _url
    }).done(function(resposta){
          var html = "<tr><td>CEP</td><td>"+_cep+"</td></tr>"+
                    "<tr><td>Rua</td><td>"+resposta.logradouro+"</td></tr>"+
                     "<tr><td>Bairro</td><td>"+resposta.bairro+"</td></tr>"+
                     "<tr><td>Cidade</td><td>"+resposta.cidade+"</td></tr>";
           $("#saida").html(html);
    }); 

});
window.onload=function(){

    let sexo,idade,altura,peso,level,TMB,fator,GED,result;

    // botão voltar
    $('#voltar').click(function(){

        $('form').show();
        $('#result-area').hide();

        $('.main-title').css({'color': 'rgb(0, 238, 255)'});
    });

    // botão calcular
    $('#main-btn').click(function(event){

        // desativando o efeito de submit
        event.preventDefault();

        idade = $('#idade').val();
        altura = $('#altura').val();
        peso = $('#peso').val();

       // identificando o sexo selecionado
        $('.form-sexo').each(function(){

            if($(this).prop('checked') == true){
                sexo = $(this).attr('id');
            }
        });

        // identificando o nivel selecionado
        $('.form-ativ').each(function(){
            
            if($(this).prop('checked') == true){

                level = $(this).attr('id');
            }
        });

        searchSexo(sexo);
        searchLevel(level);

        GED = Math.round(TMB * fator);

        // autenticando formulario
        if(idade == '' || peso == '' || altura == '' || TMB == false || fator == false){
            alert('Preencha todos os Campos!');

        }else{
            $('form').hide();
            $('#result-area').show();

            $('.main-title').css({'color': 'rgb(0, 255, 191)'});

            Resultado(TMB, GED);
        }
    });

    // encontra o sexo selecionado
    function searchSexo(id){

        if(id == 'sexo-1'){
            TMB = 66.47 + (13.75 * peso) + (5.003 * altura) - (6.775 * idade);

        }else if(id == 'sexo-2'){
           TMB = 655.89 + (9.563 * peso) + (1.85 * altura) - (4.676 * idade);

        }else{
            TMB = false;
        }
        return TMB;
    }

    // encontra o nivel selecionado
    function searchLevel(id){

        if(id == 'nivel-1'){
            fator = 1.2;

        }else if(id == 'nivel-2'){
            fator = 1.375;

        }else if(id == 'nivel-3'){
            fator = 1.55;

        }else if(id == 'nivel-4'){
            fator = 1.725;

        }else if (id == 'nivel-5'){
            fator = 1.9;

        }else{
            fator = false;
        }
        return fator;
    }

    // retorna o html do resultado
    function Resultado(TMB, GED){

        result = (`<p> Taxa de Metabolismo Basal (TMB) :
                   <br>
                   <span class="valores"> ${Math.round(TMB)} Kcals </span>
                   </p>
                   <p> Gasto Energético Diario (GED):
                   <br>
                   <span class="valores"> ${GED} kcals </span>
                   </p>
                   <p> Para perder peso :
                   <br>
                   <span class="valores"> ${GED - 500} kcals </span>
                   </p>
                   <p> Para ganhar peso :
                   <br>
                   <span class="valores"> ${GED + 500} kcals </span>
                   </p>
                   <p> E para manter o peso :
                   <br>
                   <span class="valores"> ${GED} kcals </span>
                   </p>`);

        return $('#result').html(result);        
    }

   


}
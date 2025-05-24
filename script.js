function calcular() {

    const custo = parseFloat(document.getElementById('custo').value) || 0;
    const custoEmbalagem = parseFloat(document.getElementById('custoEmbalagem').value) || 0;
    const taxa = parseFloat(document.getElementById('taxa').value) || 0;
    const imposto = parseFloat(document.getElementById('imposto').value) || 0;
    const margem = parseFloat(document.getElementById('margem').value) || 0;

    // Soma custo material + embalagem
    const custoComEmbalagem = custo + custoEmbalagem;

    // Aplica taxa e imposto
    const custoTotal = custoComEmbalagem +  (custoComEmbalagem * (taxa / 100)) + (custo * (imposto / 100));

    // Aplica margem
    const precoVenda = custoTotal *  ( 1 + (margem / 100));

    document.getElementById('resultado').innerHTML = 'Preço de venda R$ ' + precoVenda.toFixed(2);
    }

    /* ALTERAÇÃO: capturar o evento submit do form para executar calcular() */
    document.getElementById('calcForm').addEventListener('submit', function(event) {
        event.preventDefault();
        calcular();
    });

$('#lanche1').click(() => {
    document.getElementById('img-lanche').src = document.getElementById('lanche1').src;
    document.getElementById('name-lanche').innerHTML = 'X Cabuloso';
    document.getElementById('tipo-lanche').innerHTML = 'Pâo de brioche, 150g hamburgue artesanal costela, queijo prado, cebola roxa, alface, tomate e molho da casa.';
    document.getElementById('preco-lanche').innerHTML = 'R$: 36.99'
    document.getElementById('adc-carrinho').innerHTML = '<button class="btn btn-dark">Adicionar no Carrinho</button>';
})

$('#adc-carrinho').click(() => {
    document.getElementById('carrinho').innerHTML = document.getElementById('pedido').innerHTML
})

$('#lanche2').click(() => {
    document.getElementById('img-lanche').src = document.getElementById('lanche2').src;
    document.getElementById('name-lanche').innerHTML = 'X Monstro';
    document.getElementById('tipo-lanche').innerHTML = 'Pâo gengerlin, 130g hamburgue artesanal, 100g costela desfiada, queijo chedder, alface, tomate e molho da casa';
    document.getElementById('preco-lanche').innerHTML = 'R$: 41.99';
    document.getElementById('adc-carrinho').innerHTML = '<button class="btn btn-dark">Adicionar no Carrinho</button>';

})

$('#lanche3').click(() => {
    document.getElementById('img-lanche').src = document.getElementById('lanche3').src;
    document.getElementById('name-lanche').innerHTML = 'X doblo-Queijo';
    document.getElementById('tipo-lanche').innerHTML = 'Pâo brioche, 130g file de frango empanado, queijo gongorzola em dobro, alface, tomate e molho da casa';
    document.getElementById('preco-lanche').innerHTML = 'R$: 33.99';
    document.getElementById('adc-carrinho').innerHTML = '<button class="btn btn-dark">Adicionar no Carrinho</button>';

})

$('#lanche4').click(() => {
    document.getElementById('img-lanche').src = document.getElementById('lanche4').src;
    document.getElementById('name-lanche').innerHTML = 'X Fried Chicken';
    document.getElementById('tipo-lanche').innerHTML = 'Pâo gengerlin, sobrecoxa frito empanado, tomate, alface e molho da casa';
    document.getElementById('preco-lanche').innerHTML = 'R$: 29.99';
    document.getElementById('adc-carrinho').innerHTML = '<button class="btn btn-dark">Adicionar no Carrinho</button>';

})

$('#lanche5').click(() => {
    document.getElementById('img-lanche').src = document.getElementById('lanche5').src;
    document.getElementById('name-lanche').innerHTML = 'X Hamburgâo';
    document.getElementById('tipo-lanche').innerHTML = 'Pão brioche, 150g hamburgue artesanal alcatra, queijo chedder, pepino, tomate, alface e molho da casa';
    document.getElementById('preco-lanche').innerHTML = 'R$: 40.99';
    document.getElementById('adc-carrinho').innerHTML = '<button class="btn btn-dark">Adicionar no Carrinho</button>';

})


$('#home, .logo ').click(() => {
    document.getElementById('img-lanche').src = document.getElementById('home-img').src;
    document.getElementById('name-lanche').innerHTML = 'Faça seu pedido';
    document.getElementById('tipo-lanche').innerHTML = '';
    document.getElementById('adc-carrinho').innerHTML = '';
})


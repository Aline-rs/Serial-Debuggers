class ProdutosElements{

    //Categorias
    botaoComputers = () => {return '.notmobile > :nth-child(1) > [href="/computers"]'}
    botaoEletronics = () => {return '.notmobile > :nth-child(2) > [href="/electronics"]'}
    botaoApparel = () => {return '.notmobile > :nth-child(3) > [href="/apparel"]'}
    botaoDigitalD = () => {return '.notmobile > :nth-child(4) > a'}
    botaoBooks= () => {return '.notmobile > :nth-child(5) > a'}
    botaoJewelry = () => {return '.notmobile > :nth-child(6) > a'}
    botaoGiftC = () => {return '.notmobile > :nth-child(7) > a'}
    
    //Sub-categorias
    botaoDesktops = () => {return ':nth-child(1) > .sub-category-item > .picture > a > img'}
    botaoNotebooks = () => {return '.active > .sublist > :nth-child(2) > a'}
    botaoSoftware = () => {return ':nth-child(3) > .sub-category-item > .picture > a > img'}

    //Produtos
    botaoAsus = () => {return ':nth-child(2) > .product-item > .details > .product-title > a'}
    botaoPride = () => {return ':nth-child(3) > .product-item > .details > .product-title > a'}
    botaoVintage = () => {return ':nth-child(3) > .product-item > .picture > a > img'}

    //Botão adicionar
    adicionarItem = () => {return '.add-to-cart'}
  

}
export default ProdutosElements;
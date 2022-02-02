//Classe que contém todos os elementos referente a página de checkout.

class CheckoutElements{
    //Elementos dos dados pessoais
    seletorPais = () => {return '#BillingNewAddress_CountryId'};
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/aline-rs
=======

>>>>>>> ea174d4da39e2beeac1b00bf574a375bb3ee2272
    //seletorPais = () => {return 'select'};
    seletorEstado = () => {return '#BillingNewAddress_StateProvinceId'};
    caixaCidade = () => {return '#BillingNewAddress_City'};
    caixaEndereco1 = () => {return '#BillingNewAddress_Address1'};
    caixaEndereco2 = () => {return '#BillingNewAddress_Address2'};
    caixaCep = () => {return '#BillingNewAddress_ZipPostalCode'};
    caixaTelefone = () => {return '#BillingNewAddress_PhoneNumber'};
<<<<<<< HEAD
<<<<<<< HEAD
    //botões para avançar até seleção de metodo de pagamento
    botaoContinueToShipping = () => {return '#billing-buttons-container > .new-address-next-step-button'};
    botaoContinueToPayment = () => {return '#shipping-method-buttons-container > .button-1'};
=======
=======
>>>>>>> ea174d4da39e2beeac1b00bf574a375bb3ee2272
    
    //botões para avançar até seleção de metodo de pagamento
    botaoContinueToShipping = () => {return '#billing-buttons-container > .new-address-next-step-button'};
    botaoContinueToPayment = () => {return '#shipping-method-buttons-container > .button-1'};
    
<<<<<<< HEAD
>>>>>>> origin/aline-rs
=======
>>>>>>> ea174d4da39e2beeac1b00bf574a375bb3ee2272
    //preenchimento dos dados do método de pagamento
    radialCreditCard = () => {return '#paymentmethod_1'};
    botaoContinueToPaymentInfo = () => {return '#payment-method-buttons-container > .button-1'};
    seletorTipoCartao = () => {return '#CreditCardType'};
    caixaNomeDonoCartao = () => {return '#CardholderName'};
    caixaNumeroCartao = () => {return '#CardNumber'};
    seletorDataExpiraMes = () => {return '#ExpireMonth'};
    seletorDataExpiraAno = () => {return '#ExpireYear'};
    caixaCvcCartao = () => {return '#CardCode'};
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> origin/aline-rs
=======
    
>>>>>>> ea174d4da39e2beeac1b00bf574a375bb3ee2272
    //Botões de finalização do processo de compra
    botaoContinueToConfirmarCompra = () => {return '#payment-info-buttons-container > .button-1'};
    botaoConfirmarCompra = () => {return '#confirm-order-buttons-container > .button-1'};
    botaoTerminarCompra = () => {return 'body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body.checkout-data > div > div.buttons > button'};
}
export default CheckoutElements;
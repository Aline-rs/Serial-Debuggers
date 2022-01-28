const username = '#FirstName'
const lastname = '#LastName'
const dia = '.valid'
const mes = '[name="DateOfBirthMonth"]'
const ano = '[name="DateOfBirthYear"]'
const email = '#Email'
const companhia = '#Company'
const senha = '#Password'

class RegistroElements{

    botaoRegistro = () => { return '.ico-register' }
    botaoGeneroF = () => {return '#gender-female'}
    botaoGeneroM = () => {return '#gender-male'}
    caixaNome = () => {return '#FirstName'}
    caixaUltimoNome = () => {return '#LastName'}
    caixaDia = () => {return '.valid'}
    caixaMes = () => {return '[name="DateOfBirthMonth"]'}
    caixaAno = () => {return '[name="DateOfBirthYear"]'}
    caixaEmail = () => {return '#Email'}
    caixaCompanhia = () => {return '#Company'}
    caixaSenha = ()=> {return '#Password'}
    
}
export default RegistroElements;
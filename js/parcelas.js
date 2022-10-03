export class Parcelas{
      #numero;
      #valor;
      #juros;
      #amotizacao;
      #saldo;
      constructor(numero, valor, juros, amotizacao, saldo){
            this.#numero = numero;
            this.#valor = valor ;
            this.#juros = juros ;
            this.#amotizacao = amotizacao ;
            this.#saldo = saldo;
      }
      getSaldo(){
            return this.#saldo;
      }
      getDadosFormatados(){
            const dados = [];
            dados.push(this.#numero);
            dados.push(this.#valor.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}));
            dados.push(this.#amotizacao.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}));
            dados.push(this.#juros.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}));
            dados.push(this.#saldo.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}));
            return dados;            
      }      
}

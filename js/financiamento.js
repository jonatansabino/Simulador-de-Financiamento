import {Parcelas} from './parcelas.js';

export class Financiamento{
      #taxaJuros; // Juros Mensal
      #prazo; //em meses;
      #parcelas = [];
      constructor(valor, entrada, taxaJuros, prazo){
            this.#taxaJuros = taxaJuros;
            this.#prazo = prazo;
            //composição - financiamento possui ou tem parcelas
            this.#parcelas.push(new Parcelas(0,0,0,0, valor - entrada));
      }

      static calcJuros(valor, taxaJuros){
            return valor  * (taxaJuros/100);
      }
      calcParcelaMensal(){
            let saldo = this.#parcelas[this.#parcelas.length-1].getSaldo();
            let prazo = this.#prazo - (this.#parcelas.length -1);
            let amotizacao = saldo / prazo;
            for(let i=0; i < prazo; i++){
                  const numero = this.#parcelas.length;
                  const juros = Financiamento.calcJuros(saldo, this.#taxaJuros);
                  const valor = juros + amotizacao;
                  saldo -= amotizacao;
                  if(saldo < 0) {
                        saldo = 0;
                  }
                  this.#parcelas.push(new Parcelas(numero, valor, juros, amotizacao, saldo));

            }
      }

      exibeParcela(){
            const parcelas = this.#parcelas.slice(1);
            for(const parcela of parcelas){
                  const linha = corpoTabela.insertRow(-1);
                  for(const dado of parcela.getDadosFormatados()){
                        const celula = linha.insertCell(-1);
                        celula.textContent = dado;
                  }
            }

      }

      getParcelas(){
            return this.#parcelas;
      }
}
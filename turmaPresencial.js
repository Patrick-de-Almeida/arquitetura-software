import { Turma } from "./turma.js";

class TurmaPresencial extends Turma {
  #frequencia;
  constructor(codigo, nota, frequencia) {
    super(codigo, nota);
    this.#frequencia = frequencia;
  }

  get frequencia() {
    return this.#frequencia;
  }

  set frequencia(frequencia) {
    this.#frequencia = frequencia;
  }

  aprovado() {
    return super.aprovado() && this.#frequencia >= 75;
  }
}

export { TurmaPresencial };

import { Aluno } from "./aluno.js";
import { Turma } from "./turma.js";
import { TurmaPresencial } from "./turmaPresencial.js";

const aluno1 = new Aluno("João", "joao123", "123456");
console.log(aluno1);

const turma1 = new Turma("T01", 8);
console.log("Código: " + turma1.codigo);
console.log("Nota: " + turma1.nota);
console.log("Aluno aprovado na turma 1:", turma1.aprovado());

const turmaPresencial1 = new TurmaPresencial("T02", 6, 80);

console.log("Código: " + turmaPresencial1.codigo);
console.log("Nota: " + turmaPresencial1.nota);
console.log("Frequência: " + turmaPresencial1.frequencia);
console.log(
  "Aluno aprovado na turma presencial 1:",
  turmaPresencial1.aprovado()
);

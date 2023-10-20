type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;    
}

const alunos: aluno[] = [
    {
        nome: "Andressa",
        cursos: ["Front-end", "UX/UI"],
        idade: 25,
    },
    {
        nome: "Isa",
        cursos: ["Back-end", "UX/UI"],
        idade: 24,
    }
]

alunos.push(
    {
        nome: "Lou",
        cursos: ["Fullstack", "UX/UI"],
        idade: 23,
    }
)

const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)    
}
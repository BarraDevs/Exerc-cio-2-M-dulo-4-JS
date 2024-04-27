
const alunos = [
    {
        NameStudant: "Guilherme",
        Not1: 10,
        Not2: 10,
    },
    {
        NameStudant: "Doug",
        Not1: 7,
        Not2: 7,
    },
    {
        NameStudant: "Ruivin",
        Not1: 3,
        Not2: 2,
    },
    {
        NameStudant: "Manelinho",
        Not1: 5,
        Not2: 6,
    }


]


    
/*
function resultF(aluno){
    return `
    Aluno: ${aluno.NameStudant} 
    Possui a nota de: ${ (aluno.Not1 + aluno.Not2) / 2}
    `
    
}
*/
function resultF(aluno){
    let result = (aluno.Not1 + aluno.Not2) / 2
    return result
}

function CongratulationF(aluno){
    if( resultF(aluno) >= 7){
       return `
        Aluno: ${aluno.NameStudant} 
        Possui a nota de: ${ (aluno.Not1 + aluno.Not2) / 2}
        Parabéns você passou`
     }else{
        return `
        Aluno: ${aluno.NameStudant} 
        Possui a nota de: ${ (aluno.Not1 + aluno.Not2) / 2}
        Tente mais na próxima`
     }

     
}

for (let aluno of alunos){
    let Cong = CongratulationF(aluno)
      
    alert(Cong)
    
    
 }

 function mensage(aluno, result){
    return `
    Aluno: ${aluno.NameStudant}
    Possui a nota de: $
    `
 }





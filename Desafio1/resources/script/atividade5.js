
let tarefas = [
    "Estudar HTML",
    "Estudar CSS",
    "Praticar JavaScript",
    "Estudar Laravel",
    "Revisar conteúdo"
];


console.log("Antes:", tarefas);


tarefas.splice(1, 1);

tarefas.splice(2, 1, "Estudar PHP");


tarefas.splice(1, 0, "Fazer exercícios");


console.log("Depois:", tarefas);

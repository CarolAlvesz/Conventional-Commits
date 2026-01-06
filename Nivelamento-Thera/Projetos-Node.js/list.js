const express = require('express');
const app = express();
app.use(express.json());

const user = [
    {id: 101, nome: "Carol", email: "carolalves@gmail.com", tasks: [] },
    {id: 102, nome: "Bruna", email: "brunadaniele@gmail.com", tasks: [] }
];



// rota post - criar usuário
app.post("/users", function(req,res){
    const {nome, email} = req.body;
    if(!nome || !email) {
        return res.status(400).json({error: "O nome e o email são obrigatório"});
    }
    const newUser = { id: user[user.length - 1].id + 1,
    nome,
    email
    }

    user.push(newUser);

    return res.status(201).json({message: "Usuário criado com sucesso", data: newUser});
})

// rota post - criar tarefa
app.post("/users/:userId/tasks", function(req,res){
    const { userId } = req.params;
    const { descricao } = req.body;

    if (!descricao) {
        return res.status(400).json({error: "A descrição é obrigatório"});
    }

    const userExists = user.find(u => u.id == Number(userId));

    if (!userExists) {
        return res.status(404).json({error: "Usuário não encontrado"});
    }

    const newTask = { 
        id: userExists.tasks.length + 1,
        descricao,
        status: "pendente"
    };

    userExists.tasks.push(newTask);

    return res.status(201).json({message: "Tarefa criada com sucesso", data: newTask});

});    

//rota get - listar as tarefas 
app.get("/users/:userId/tasks", function(req,res){
    const { userId } = req.params;
    const userExists = user.find(u => u.id === Number(userId));

    if (!userExists) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    return res.status(200).json({
        userId: userExists.id,
        totalTasks: userExists.tasks.length,
        tasks: userExists.tasks
    });

});
    
// rota put - atualizar o status da tarefa
app.put("/users/:userId/tasks/:tasksId", function(req, res){
    const { userId, tasksId } = req.params;
    const { status } = req.body;    

    const userExists = user.find(u => u.id === Number(userId));
    if (!userExists) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const tasksExists = userExists.tasks.find(t => t.id === Number(tasksId));
    if (!tasksExists) {
        return res.status(400).json({ message: "Tarefa não encontrada" });
    }

    task.status = task.status === "pendente" ? "concluída" : "pendente";

    return res.status(200).json({ message: "Tarefa atualizada com sucesso", data: tasks });   

})

// rota delete - deletar a tarefa
app.delete("/users/:userId/tasks/:tasksId", function(req, res){
    const { userId, tasksId } = req.params;
    const userExists = user.find(u => u.id === Number(userId));

    if (!userExists) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }   
    const taskIndex = userExists.tasks.findIndex(t => t.id === Number(tasksId));
    if (taskIndex === -1) {
        return res.status(400).json({ message: "Tarefa não encontrada" });
    }                           

    userExists.tasks.splice(taskIndex, 1);

    return res.status(200).json({ message: "Tarefa deletada com sucesso" });
});

app.listen(8000, ()=>{
    console.log('to-do list is running on http://localhost:8000');
});
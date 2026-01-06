const usuarios  = []

function validarUsuario(nome, email, senha, validarSenha) {
   if (!nome || !email || !senha || !validarSenha) {
        throw new Error  ("Todos os campos são obrigatórios.");
    }
    
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        throw new Error("Email inválido.");
    }

      if (senha.length < 6) {
        throw new Error("A senha deve ter pelo menos 6 caracteres.");
    }       

    if (senha !== validarSenha) {
        throw new Error("As senhas não coincidem.");
    }       

    if (usuarios.some(usuario => usuario.email === email)) {
        throw new Error("Email já cadastrado.");
    }
}

const registarUsuario = (nome, email, senha, validarSenha) => {
    try {
        validarUsuario(nome, email, senha, validarSenha);
        const novoUsuario = {
            id: usuarios.length + 1,
            nome,
            email,
            senha,
            criadoEm: new Date().toISOString()
        };
        usuarios.push(novoUsuario);
        console.log("Usuário registrado com sucesso:", novoUsuario);    
    } catch (error) {
        console.error("Erro ao registrar usuário:", error.message);
    }
        
}
    
import './styles.css';

function LoginScreen() {
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!matricula || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (!/^\d+$/.test(matricula)) {
            alert("A matrícula deve conter apenas números.");
            return;
        }

        console.log("Matrícula:", matricula, "Senha:", senha);
        // Aqui você pode adicionar a lógica de autenticação
    };

    return (
        <div className="login-container">
            <a href="https://ibb.co/C1SwdgS"><img src="https://i.ibb.co/ZLbfs5b/logo-unifap-quadrada.png" alt="logo-unifap-quadrada" className="login-logo"></img></a>
            <form id="loginForm" onSubmit={handleSubmit}>
                <h2>Login</h2>
                
                <div className="form-group">
                    <input 
                        type="text" 
                        id="matricula" 
                        placeholder=" " 
                        required
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                    />
                    <label htmlFor="matricula">Matrícula</label>
                </div>
                
                <div className="form-group">
                    <input 
                        type="password" 
                        id="senha" 
                        placeholder=" " 
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <label htmlFor="senha">Senha</label>
                </div>
                
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginScreen;
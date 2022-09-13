import'./MyForm.css'
import{useState} from 'react'
const MyForm = ({user}) => {
    //6 - Controlando input//
    //3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name: "");
    const [email, setEmail] = useState(user ? user.email:"");
    const [bio, setBio] = useState(user ? user.bio:"");
    const [role, setRole] = useState(user ? user.role:"");

    const handleName = (e) =>{
        setName(e.target.value);
    };
    console.log(name);
    console.log(email);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Enviando...");
        console.log(name,email,bio,role);
        //validação 
        //envio
        // 7 - Limpar form//
        setName("");
        setEmail("");
        setBio("");
    };
  return (
    <div>
        {/* 5-Envio de form*/}
        {/*-1Criando formulario*/}
       
        <form onSubmit={handleSubmit}>
           
            <label htmlFor="name">Digite seu nome:</label>
            <input type="text"
             name="name"
              placeholder="digite seu nome..."
               onChange={handleName} 
               value={name}
               ></input>
            
            
                <label>
                    <span>Digite seu E-mail:</span>
                    {/* 4- Simplificação de manipulção de State*/}
                    <input type="email"
                    name="email"
                    placeholder="Digite seu E-mail"
                   onChange={(e) => setEmail(e.target.value)}
                    value={email}
                       ></input>
                </label>
            {/* 8 -textarea */}
            <label>
                <span>Me fale sobre você:</span>
            <textarea name="bio" 
            placeholder="Descrição do usuário" 
            onChange={(e) => setBio(e.target.value)} 
            value={bio}
            ></textarea>
            </label>
             {/*9 -select */}
            <label>
            <span>função no sistema</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
                </select>   
            </label>
            <input type="submit" value="Enviar"/>
        </form>
        
    </div>
  )
}

export default MyForm
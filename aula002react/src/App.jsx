import Titulo from "./components/Titulo"
import './App.css'
import Produto from "./components/Produto"
import { useState } from "react";
function App() {
  const [inputNome, setInputNome] = useState('');
  const [inputDescricao, setInputDescricao] = useState('');
  // const [inputPreco, setInputPreco] = useState('');
  // const [inputPeso, setInputPeso] = useState('');
  
  function mudouNome(event){
    console.log(event.target.value);
    setInputNome(event.target.value)

  }

  

  function cadastrarProduto(){
    let produto ={
      id: Date.now(),
      nome: inputNome,
      descricao:inputDescricao,
      preco: 0,
      peso: 0
    }
    // produtos.push(produto)
    setProdutos([ produto, ...produtos])
    // console.log(produtos);
  }
  const [produtos, setProdutos] = useState([
    {
      id: Date.now() ,
      nome: "Guarda-sol de Praia",
      descricao: "Um guarda-sol resistente para proteção contra o sol na praia.",
      preco: 45,
      peso: 5
    },
    {
      id: Date.now() + 1,
      nome: "Bolsa Térmica",
      descricao: "Uma bolsa térmica para manter bebidas e alimentos frescos durante o dia.",
      preco: 25,
      peso: 2
    },
    {
      id: Date.now() + 2,
      nome: "Toalha de Praia",
      descricao: "Toalha grande e macia, ideal para relaxar na areia.",
      preco: 20,
      peso: 1
    },
    {
      id: Date.now() + 3,
      nome: "Óculos de Sol",
      descricao: "Óculos de sol com proteção UV para uso diário na praia.",
      preco: 60,
      peso: 0.3
    },
    {
      id: Date.now() + 4,
      nome: "Chapéu de Palha",
      descricao: "Chapéu leve e ventilado para proteger do sol.",
      preco: 18,
      peso: 0.4
    },
    {
      id: Date.now() + 5,
      nome: "Protetor Solar",
      descricao: "Protetor solar FPS 50, ideal para uso na praia.",
      preco: 30,
      peso: 0.2
    },
    {
      id: Date.now() + 6,
      nome: "Sandálias de Praia",
      descricao: "Sandálias confortáveis para caminhar na areia.",
      preco: 25,
      peso: 0.5
    },
    {
      id: Date.now() + 7,
      nome: "Rede de Descanso",
      descricao: "Rede confortável para relaxar entre as árvores na praia.",
      preco: 40,
      peso: 1.5
    },
    {
      id: Date.now() + 8,
      nome: "Prancha de Bodyboard",
      descricao: "Prancha leve e resistente para diversão nas ondas.",
      preco: 70,
      peso: 2.5
    },
    {
      id: Date.now() + 9,
      nome: "Caixa de Som Bluetooth",
      descricao: "Caixa de som portátil e à prova d'água, ideal para a praia.",
      preco: 80,
      peso: 0.7
    },
    {
      id: Date.now() + 10,
      nome: "Cadeira Reclinável de Praia",
      descricao: "Cadeira reclinável com vários níveis de inclinação.",
      preco: 50,
      peso: 7
    },
    {
      id: Date.now() + 11,
      nome: "Mochila de Hidratação",
      descricao: "Mochila com reservatório de água, perfeita para caminhadas na praia.",
      preco: 65,
      peso: 1.2
    },
    {
      id: Date.now() + 12,
      nome: "Kit de Frescobol",
      descricao: "Raquetes e bola para jogar frescobol na areia.",
      preco: 35,
      peso: 0.8
    },
    {
      id: Date.now() + 13,
      nome: "Lancheira Térmica",
      descricao: "Lancheira compacta para manter os alimentos frescos.",
      preco: 15,
      peso: 0.5
    },
    {
      id: Date.now() + 14,
      nome: "Colete Salva-Vidas Infantil",
      descricao: "Colete de segurança para crianças brincarem no mar.",
      preco: 55,
      peso: 0.6
    },
    {
      id: Date.now() + 15,
      nome: "Canga de Praia",
      descricao: "Canga leve e versátil, pode ser usada como toalha ou saia.",
      preco: 22,
      peso: 0.4
    },
    {
      id: Date.now() + 16,
      nome: "Chinelo de Dedo",
      descricao: "Chinelo confortável para caminhar na areia e na calçada.",
      preco: 18,
      peso: 0.3
    },
    {
      id: Date.now() + 17,
      nome: "Óculos de Mergulho",
      descricao: "Óculos resistentes e confortáveis para explorar o fundo do mar.",
      preco: 40,
      peso: 0.4
    },
    {
      id: Date.now() + 18,
      nome: "Boné de Praia",
      descricao: "Boné leve com proteção solar para os dias quentes.",
      preco: 20,
      peso: 0.2
    },
    {
      id: Date.now() + 19,
      nome: "Camiseta UV",
      descricao: "Camiseta com proteção UV, ideal para esportes na praia.",
      preco: 35,
      peso: 0.3
    }
  ])

  // let produto ={
  //   nome: "cadeira de praia",
  //   descricao:"Uma cadeira pra usar no canal",
  //   preco: 33,
  //   peso: 10
  // }
  return (
    <>
      <Titulo texto={"Barra da Lagoa"} emoji={"🖕"} />
      {/* <Produto produto={produto} /> */}
      <div className="formCadastro">
        <h2>Cadastro de produto</h2>
          <div className="input-container">
            <label>Nome: </label>
            <input type="text" placeholder="Cadeira de tainha"
            value={inputNome}
            onChange={ mudouNome }
            />
          </div>
          <div className="input-container">
            <label>Descrição: </label>
            <input type="text" placeholder="Descrição"
            value={inputDescricao}
            onChange={ (event) => setInputDescricao (event.target.value)}
            />
          </div>
          {/* <div className="input-container">
            <label>Preço: </label>
            <input type="text" placeholder="Preço"
            value={inputPreco}
            onChange={ mudouPreco }
            />
          </div>
          <div className="input-container">
            <label>Peso: </label>
            <input type="text" placeholder="Cadeira de tainha"
            value={inputPeso}
            onChange={ mudouPeso }
            />
          </div> */}
       
          <button onClick={cadastrarProduto}>Cadastrar</button>

      </div>
      <div className="cards">
        {produtos.map( (p) => (
          <Produto produto={p} key={p.id} />
        ) )}
      </div>
    </>

  )
}

export default App

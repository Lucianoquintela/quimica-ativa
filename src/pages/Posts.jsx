import "./Posts.css"

import { useParams } from "react-router-dom";
import CardPosts from "../components/CardPosts";
import cuboMagico from "../assets/cubo-magico.jpg"



const Posts = () => {

  const { id } = useParams();
  return (
    <>
    <main className="containerGlobal">
      <h2 className="tituloContainerGlobal">Ações do projeto:</h2>

      <div className="listagemDeCards">
        <div>
          <CardPosts
            id={1}
            titlePost="Química em Cubos"
            descricaoPost="O “Química em Cubos” integra o desenvolvimento do raciocínio lógico à aprendizagem de conceitos químicos, como Tabela Periódica e Ligações Químicas, por meio do uso de cubos adaptados com adesivos contendo os símbolos dos elementos químicos, permitindo que a montagem do cubo, esteja diretamente associada aos conteúdos propostos, promovendo assim a aprendizagem de forma lúdica, mas significativa."
            imgPost={cuboMagico}
          />

        </div>

        <div>

          <CardPosts
            id={2}
            titlePost="Oficinas com Arduino (pHmetro)"
            descricaoPost="
        As oficinas com Arduino promovem a integração entre Química, tecnologia e inovação, por meio da construção de dispositivos como o medidor de pH.

Essa abordagem possibilita aos estudantes compreender conceitos químicos de forma aplicada, além de desenvolver habilidades relacionadas ao pensamento computacional, resolução de problemas e trabalho colaborativo.

Trata-se de uma estratégia que aproxima a ciência do cotidiano e estimula o interesse pela investigação científica."
            imgPost={cuboMagico}
          />
        </div>

      </div>


    </main>
    </>
  );
}

export default Posts;
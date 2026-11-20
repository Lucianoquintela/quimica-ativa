
import "./SobreMim.css";
import foto from "../assets/foto.jpeg";

import {
    FaInstagram,
    FaLinkedin,
    FaWhatsapp,
    FaEnvelope
} from "react-icons/fa";

const SobreMim = () => {
    return (
        <main className="containerGlobal">

            <h2 className="tituloContainerGlobal">
                Sobre mim
            </h2>

            <div className="containerSobreMim">

                {/* Descrição pessoal */}
                <section className="descricao">

                    <p>
                        Sou professor de Química na{" "}
                        <b>EEEP Deputado Roberto Mesquita</b>, em General
                        Sampaio (CE), e acredito que ensinar vai muito além
                        de transmitir conteúdos: é despertar curiosidade,
                        provocar questionamentos e transformar realidades
                        por meio da educação.
                    </p>

                    <p>
                        Sou licenciado em Química e em Ciências com
                        habilitação em Biologia, com especialização na área
                        de ensino, e sigo em constante formação, atualmente
                        como pós-graduando em Metodologias Ativas e
                        Tecnologias Educacionais e mestrando no Programa de
                        Pós-Graduação em Ensino de Ciências e Matemática
                        (ENCIMA/UFC). Também integro um grupo de pesquisa
                        voltado ao letramento e à divulgação científica,
                        fortalecendo meu compromisso com uma educação
                        científica mais significativa e acessível.
                    </p>

                    <p>
                        Sou idealizador do projeto QuímicAtiva, que nasceu
                        do meu desejo de tornar o ensino de Química mais
                        dinâmico, envolvente e conectado com a realidade
                        dos estudantes. Por meio de estratégias como
                        experimentação, uso de tecnologias, gamificação
                        e práticas colaborativas, busco promover o
                        protagonismo estudantil e mostrar que a ciência
                        está presente no cotidiano e pode ser
                        compreendida por todos.
                    </p>

                    <p>
                        Ao longo da minha trajetória, venho desenvolvendo
                        práticas pedagógicas que valorizam a inclusão,
                        a investigação científica e o pensamento crítico.
                        Mais do que ensinar Química, meu propósito é
                        inspirar estudantes a aprender, questionar e
                        enxergar novas possibilidades por meio do
                        conhecimento.
                    </p>

                </section>

                {/* Cartão de apresentação */}
                <aside className="imagemSobreMim">

                    <div className="identificacao">
                        <h2>Carlos Gomes</h2>
                        <h3>Professor de Química</h3>
                        
                        <img
                            src={foto}
                            alt="Fotografia de Carlos Gomes"
                            className="foto"
                        />

                   
                    </div>

                    {/* Redes sociais */}
                    <div className="redesSociais">

                        <h3>Redes sociais</h3>

                        <div className="linksSociais">

                            <a href="#"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaInstagram />
                            </a>

                            <a href="#"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>

                            <a href="#"
                                aria-label="WhatsApp"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>

                        </div>
                    </div>

                    {/* Contato */}
                    <div className="contato">

                        <h3>Contato</h3>

                        <a href="mailto:seuemail@exemplo.com">
                            <FaEnvelope />
                            <span>seuemail@exemplo.com</span>
                        </a>

                    </div>

                </aside>

            </div>

        </main>
    );
};

export default SobreMim;

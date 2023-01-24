import styles from './SobreMim.module.css';

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Nilson!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de Nilson Lacerda"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Dev Front-end e estou feliz de te ver por aqui. 
            </p>
            <p className={styles.paragrafo}>
                Sou Pós Graduado em Engenharia de Sistemas (ESAB) - 2019 e recentemente concluí também uma Pós Graduado em Gestão de Riscos e Segurança Cibernética (2022). Me formei no Curso Superior em Análise e Desenvolvimento de Sistemas (UNIGRAN) - 2013 e quando começei a carreira foi fazendo o Curso Técnico em Design e Desenvolvimento Web (UNIBRATEC) - 2008.
            </p>
            <p className={styles.paragrafo}>
                Tenho experiência como Desenvolvimento Front-End na criação de projetos, já trabalhei como Analista de Suporte Web e com desenvolvimento de mockups. Como desenvolvimento web, já atuei em empresa de televisão, agência digital, indústria, empresa de varejo e em multinacional na área de tecnologia.
            </p>
        </PostModelo>
    )
}
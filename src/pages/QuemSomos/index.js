import TeamCard from '../../components/TeamCard';
import './index.css';

const team = [
  { name: 'Ricardo Alves', role: 'Diretor Artístico', bio: 'Fundador da companhia e diretor há 37 anos, Ricardo é o coração criativo de cada espetáculo.' },
  { name: 'Camila Torres', role: 'Acrobata Sênior', bio: 'Campeã ibero-americana de acrobacia aérea, Camila lidera o time de trapezistas com maestria.' },
  { name: 'Marcos Fogo', role: 'Mestre do Fogo', bio: 'Referência nacional em pirofagia, Marcos transformou chamas em arte ao longo de 20 anos de carreira.' },
  { name: 'Luana Mística', role: 'Ilusionista', bio: 'Com shows em 3 continentes, Luana é a ilusionista mais premiada do Brasil nos últimos 5 anos.' },
  { name: 'Jonas Equilibrista', role: 'Malabarista', bio: 'Recordista brasileiro de malabares, Jonas domina mais de 40 objetos simultâneos no picadeiro.' },
  { name: 'Beatriz Palco', role: 'Diretora de Produção', bio: 'Responsável por transformar visões artísticas em realidade, Beatriz coordena toda a produção.' },
];

const timeline = [
  { year: '1987', event: 'Fundação da companhia em Goiânia com 8 artistas.' },
  { year: '1995', event: 'Primeira turnê nacional — 22 cidades em 6 meses.' },
  { year: '2003', event: 'Estreia internacional no Festival de Circo de Montreal.' },
  { year: '2010', event: 'Inauguração da sede própria com escola de artes circenses.' },
  { year: '2018', event: 'Prêmio SESC de Artes Cênicas — Melhor Espetáculo Circense.' },
  { year: '2024', event: 'Companhia celebra 37 anos com temporada especial em 10 estados.' },
];

export default function QuemSomos() {
  return (
    <div className="quem-somos">
      {/* Hero */}
      <div className="qs__hero">
        <p className="qs__eyebrow">✦ &nbsp; A Companhia &nbsp; ✦</p>
        <h1 className="qs__title">Quem Somos</h1>
        <p className="qs__subtitle">
          Arte, paixão e dedicação em cada espetáculo
        </p>
      </div>

      {/* Manifesto */}
      <section className="qs__manifesto">
        <div className="qs__manifesto-inner">
          <blockquote className="qs__quote">
            "O circo não é apenas entretenimento — é a mais humana das artes,
            onde corpo, mente e espírito se unem para desafiar o impossível
            e emocionar almas."
          </blockquote>
          <p className="qs__quote-author">— Ricardo Alves, Fundador</p>
        </div>
      </section>

      {/* Missão */}
      <section className="qs__pillars">
        <div className="qs__pillars-inner">
          {[
            { icon: '✦', title: 'Missão', text: 'Levar arte circense de excelência a todos os públicos, encantando e emocionando através de espetáculos únicos e inesquecíveis.' },
            { icon: '★', title: 'Visão', text: 'Ser reconhecida como a maior e mais criativa companhia circense da América Latina, referência em inovação e qualidade artística.' },
            { icon: '◆', title: 'Valores', text: 'Excelência artística, respeito aos artistas, inovação constante, compromisso com o público e amor incondicional à arte.' },
          ].map(({ icon, title, text }) => (
            <div key={title} className="qs__pillar">
              <span className="qs__pillar-icon">{icon}</span>
              <h3 className="qs__pillar-title">{title}</h3>
              <p className="qs__pillar-text">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="qs__timeline">
        <div className="qs__timeline-inner">
          <div className="qs__section-header">
            <p className="qs__eyebrow">✦ &nbsp; Nossa Trajetória &nbsp; ✦</p>
            <h2 className="qs__heading">37 anos de história</h2>
          </div>
          <div className="qs__timeline-list">
            {timeline.map(({ year, event }) => (
              <div key={year} className="qs__timeline-item">
                <span className="qs__timeline-year">{year}</span>
                <div className="qs__timeline-dot" />
                <p className="qs__timeline-event">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="qs__team">
        <div className="qs__team-inner">
          <div className="qs__section-header">
            <p className="qs__eyebrow">✦ &nbsp; Elenco &nbsp; ✦</p>
            <h2 className="qs__heading">Nossos Artistas</h2>
          </div>
          <div className="qs__team-grid">
            {team.map(member => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

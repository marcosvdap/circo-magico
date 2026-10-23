import { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import iconCorporativo from '../../assets/icones/corporativo-claro.svg';
import iconFestas from '../../assets/icones/festas-claro.svg';
import iconEntretenimento from '../../assets/icones/entretenimento-claro.svg';
import iconPublicidade from '../../assets/icones/publicidade-claro.svg';
import iconCirco from '../../assets/icones/circo-claro.svg';
import iconTurnes from '../../assets/icones/turnes-claro.svg';
import './index.css';

// Fotos de cada serviço: basta soltar as imagens na pasta src/assets/servicos/<pasta>/
// (ordem alfabética pelo nome do arquivo: 01.jpg, 02.jpg...)
const carregar = (ctx) => ctx.keys().sort().map(ctx);
const fotos = {
  corporativo: carregar(require.context('../../assets/servicos/corporativo', false, /\.(jpe?g|png|webp|gif)$/i)),
  festas: carregar(require.context('../../assets/servicos/festas', false, /\.(jpe?g|png|webp|gif)$/i)),
  entretenimento: carregar(require.context('../../assets/servicos/entretenimento', false, /\.(jpe?g|png|webp|gif)$/i)),
  publicidade: carregar(require.context('../../assets/servicos/publicidade', false, /\.(jpe?g|png|webp|gif)$/i)),
  circo: carregar(require.context('../../assets/servicos/circo', false, /\.(jpe?g|png|webp|gif)$/i)),
  turnes: carregar(require.context('../../assets/servicos/turnes', false, /\.(jpe?g|png|webp|gif)$/i)),
};

const servicos = [
  {
    icon: iconCirco,
    fotos: fotos.circo,
    title: 'Circo no Seu Evento',
    desc: 'Leve o circo até o seu evento com números e performances circenses: acrobacia aérea, malabares, equilibrismo, contorcionismo e muito mais, executados por artistas profissionais.',
    itens: ['Números circenses avulsos ou em sequência', 'Performances aéreas, de solo, fogo e LED', 'Artistas profissionais para qualquer espaço'],
  },
  {
    icon: iconCorporativo,
    fotos: fotos.corporativo,
    title: 'Eventos Corporativos',
    desc: 'Apresentações personalizadas para convenções, lançamentos de produtos e confraternizações empresariais. Criamos experiências únicas que encantam colaboradores e clientes.',
    itens: ['Show de 30 a 90 minutos', 'Números temáticos sob medida', 'Adaptação a qualquer espaço'],
  },
  {
    icon: iconEntretenimento,
    fotos: fotos.entretenimento,
    title: 'Personagens Temáticos',
    desc: 'Atrações interativas com personagens circenses para shoppings, parques, feiras e espaços públicos. Encante o público com performances itinerantes.',
    itens: ['Palhaços e artistas de rua', 'Perna-de-pau e malabaristas', 'Contratação por hora ou por evento'],
  },
  {
    icon: iconPublicidade,
    fotos: fotos.publicidade,
    title: 'Publicidade & Audiovisual',
    desc: 'Artistas disponíveis para campanhas publicitárias, videoclipes, filmes e produções audiovisuais que precisam da autenticidade do circo.',
    itens: ['Cachê por diária', 'Assessoria criativa', 'Figurinos e adereços próprios'],
  },
  {
    icon: iconFestas,
    fotos: fotos.festas,
    title: 'Festas & Celebrações',
    desc: 'Transforme seu aniversário, casamento ou festa particular em um espetáculo inesquecível com números circenses exclusivos.',
    itens: ['Números avulsos ou show completo', 'Mágica, acrobacia e pirofagia', 'Pacotes para todas as idades'],
  },
  {
    icon: iconTurnes,
    fotos: fotos.turnes,
    title: 'Turnês & Festivais',
    desc: 'Levamos o espetáculo até onde você precisar. Atendemos festivais, teatro, arena e espaços alternativos em todo o Brasil e exterior.',
    itens: ['Logística e produção completa', 'Rider técnico profissional', 'Shows de 1 a 4 horas'],
  },
];

export default function Servicos() {
  const [aberto, setAberto] = useState(null);

  return (
    <div className="servicos">
      <div className="servicos__hero">
        <p className="servicos__eyebrow">✦ &nbsp; O que oferecemos &nbsp; ✦</p>
        <h1 className="servicos__title">Serviços</h1>
        <p className="servicos__subtitle">
          Entretenimento de alto nível para cada ocasião
        </p>
      </div>

      <section className="servicos__grid-section">
        <div className="servicos__grid">
          {servicos.map((servico) => {
            const { icon, title, desc, itens, fotos } = servico;
            return (
            <div
              key={title}
              role="button"
              tabIndex={0}
              className="servicos__card"
              onClick={() => setAberto(servico)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setAberto(servico);
                }
              }}
            >
              <div className={`servicos__mosaic servicos__mosaic--${Math.min(fotos.length, 3)}`}>
                {fotos.length > 0 ? (
                  fotos.slice(0, 3).map((foto, i) => (
                    <img key={foto} src={foto} alt={i === 0 ? desc : ''} loading="lazy" />
                  ))
                ) : (
                  <img src={icon} alt="" className="servicos__mosaic-icon" />
                )}
              </div>
              <div className="servicos__card-head">
                <img src={icon} alt="" className="servicos__card-icon" />
                <h3 className="servicos__card-title">{title}</h3>
              </div>
              <ul className="servicos__card-list">
                {itens.map(item => (
                  <li key={item}>
                    <span>✦</span> {item}
                  </li>
                ))}
              </ul>
              <span className="servicos__card-more">
                {fotos.length > 0 ? `Ver fotos (${fotos.length})` : 'Fotos em breve'} &nbsp;&rarr;
              </span>
            </div>
            );
          })}
        </div>
      </section>

      {aberto && (
        <Carousel
          title={aberto.title}
          images={aberto.fotos}
          onClose={() => setAberto(null)}
        />
      )}

      {/* CTA */}
      <section className="servicos__cta">
        <div className="servicos__cta-inner">
          <p className="servicos__eyebrow">✦ &nbsp; Vamos conversar &nbsp; ✦</p>
          <h2 className="servicos__cta-title">
            Tem um projeto em mente?
          </h2>
          <p className="servicos__cta-sub">
            Entre em contato e criamos juntos o espetáculo perfeito para o seu evento.
          </p>
          <Link to="/contato" className="servicos__cta-btn">
            Solicitar orçamento &nbsp; ✦
          </Link>
        </div>
      </section>
    </div>
  );
}

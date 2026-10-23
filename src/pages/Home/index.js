import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import WorkCard from '../../components/WorkCard';
import './index.css';

const featured = [
  {
    title: 'Noite de Gala',
    category: 'Show Completo',
    year: '2024',
    description: 'Um espetáculo grandioso com acrobatas, malabaristas e ilusionistas em uma noite inesquecível.',
  },
  {
    title: 'Cirque du Fogo',
    category: 'Pirofagia & Dança',
    year: '2024',
    description: 'Dançarinos e artistas do fogo criam uma sinfonia visual hipnotizante.',
  },
  {
    title: 'O Grande Ilusionista',
    category: 'Mágica',
    year: '2023',
    description: 'Um show solo com os maiores truques de ilusão já vistos no Brasil.',
  },
];

const stats = [
  { value: '37', label: 'Anos de história' },
  { value: '200+', label: 'Espetáculos realizados' },
  { value: '50+', label: 'Artistas na companhia' },
  { value: '1M+', label: 'Espectadores encantados' },
];

export default function Home() {
  return (
    <div className="home">
      <Hero />

      {/* Stats */}
      <section className="home__stats">
        {stats.map(({ value, label }) => (
          <div key={label} className="home__stat">
            <span className="home__stat-value">{value}</span>
            <span className="home__stat-label">{label}</span>
          </div>
        ))}
      </section>

      {/* Featured Works */}
      <section className="home__section">
        <div className="home__section-header">
          <p className="home__eyebrow">✦ &nbsp; Destaques &nbsp; ✦</p>
          <h2 className="home__heading">Espetáculos em evidência</h2>
        </div>

        <div className="home__grid">
          {featured.map((item) => (
            <WorkCard key={item.title} {...item} />
          ))}
        </div>

        <div className="home__cta">
          <Link to="/espetaculos" className="home__link">
            Ver todos os espetáculos &rarr;
          </Link>
        </div>
      </section>

      {/* About strip */}
      <section className="home__about-strip">
        <div className="home__about-inner">
          <div className="home__about-text">
            <p className="home__eyebrow">✦ &nbsp; Nossa história &nbsp; ✦</p>
            <h2 className="home__heading home__heading--light">
              Mais de três décadas de magia e emoção
            </h2>
            <p className="home__about-body">
              Fundada em 1987, a Vértice nasceu do sonho de levar arte e encantamento a
              todos os cantos do Brasil. Hoje somos referência nacional em circo, performances
              e eventos de alto nível, reunindo talentos que transformam cada apresentação
              em uma experiência única e inesquecível.
            </p>
            <Link to="/quem-somos" className="home__link">
              Conheça nossa história &rarr;
            </Link>
          </div>
          <div className="home__about-deco">
            <div className="home__about-circle">
              <span>✦</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

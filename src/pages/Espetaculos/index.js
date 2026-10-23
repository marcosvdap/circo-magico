import { useState } from 'react';
import WorkCard from '../../components/WorkCard';
import './index.css';

const categories = ['Todos', 'Show Completo', 'Temporada', 'Festival', 'Turnê'];

const espetaculos = [
  {
    title: 'Noite de Gala',
    category: 'Show Completo',
    year: '2024',
    description: 'Um espetáculo grandioso reunindo toda a companhia em uma noite inesquecível de magia e emoção.',
  },
  {
    title: 'La Grande Finale',
    category: 'Show Completo',
    year: '2023',
    description: 'O show mais aguardado do ano, com encenações épicas e um desfecho arrepiante.',
  },
  {
    title: 'Contos do Picadeiro',
    category: 'Temporada',
    year: '2023',
    description: 'Temporada especial que mistura narração teatral, circo e trilha sonora ao vivo.',
  },
  {
    title: 'Festival das Artes Circenses',
    category: 'Festival',
    year: '2022',
    description: 'Participação no maior festival de circo da América Latina, em São Paulo.',
  },
  {
    title: 'Brasil em Círculo',
    category: 'Turnê',
    year: '2022',
    description: 'Turnê nacional com 28 cidades e mais de 90 apresentações em 5 meses.',
  },
  {
    title: 'Gala de Verão',
    category: 'Show Completo',
    year: '2021',
    description: 'Espetáculo ao ar livre com pirotecnia, luz e som em uma produção de grande escala.',
  },
];

export default function Espetaculos() {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos'
    ? espetaculos
    : espetaculos.filter(e => e.category === active);

  return (
    <div className="espetaculos">
      <div className="espetaculos__hero">
        <p className="espetaculos__eyebrow">✦ &nbsp; Portfólio &nbsp; ✦</p>
        <h1 className="espetaculos__title">Espetáculos</h1>
        <p className="espetaculos__subtitle">
          Produções completas que ficam na memória
        </p>
      </div>

      <div className="espetaculos__content">
        <div className="espetaculos__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`espetaculos__filter ${active === cat ? 'espetaculos__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="espetaculos__grid">
          {filtered.map(item => (
            <WorkCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

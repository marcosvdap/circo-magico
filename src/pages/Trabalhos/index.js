import { useState } from 'react';
import WorkCard from '../../components/WorkCard';
import './index.css';

const categories = ['Todos', 'Show Completo', 'Mágica', 'Acrobacia', 'Pirofagia', 'Teatro'];

const works = [
  { title: 'Noite de Gala', category: 'Show Completo', year: '2024', description: 'Espetáculo grandioso com acrobatas, malabaristas e ilusionistas.' },
  { title: 'Cirque du Fogo', category: 'Pirofagia', year: '2024', description: 'Dançarinos e artistas do fogo criam uma sinfonia visual hipnotizante.' },
  { title: 'O Grande Ilusionista', category: 'Mágica', year: '2023', description: 'Os maiores truques de ilusão já vistos no Brasil.' },
  { title: 'Voando Sem Asa', category: 'Acrobacia', year: '2023', description: 'Trapezistas desafiam a gravidade em números de altíssimo nível técnico.' },
  { title: 'Contos do Picadeiro', category: 'Teatro', year: '2022', description: 'Uma peça que mistura circo e teatro em uma narrativa mágica.' },
  { title: 'La Grande Finale', category: 'Show Completo', year: '2022', description: 'O show mais esperado do ano com toda a companhia em cena.' },
  { title: 'Chamas & Sonhos', category: 'Pirofagia', year: '2021', description: 'Arte do fogo com coreografias elaboradas e figurinos deslumbrantes.' },
  { title: 'Prestidigitação', category: 'Mágica', year: '2021', description: 'Ilusionismo clássico com modernidade e humor.' },
  { title: 'Acima das Nuvens', category: 'Acrobacia', year: '2020', description: 'Números aéreos e malabares em uma atmosfera onírica.' },
];

export default function Trabalhos() {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos'
    ? works
    : works.filter(w => w.category === active);

  return (
    <div className="trabalhos">
      <div className="trabalhos__hero">
        <p className="trabalhos__eyebrow">✦ &nbsp; Portfólio &nbsp; ✦</p>
        <h1 className="trabalhos__title">Nossos Trabalhos</h1>
        <p className="trabalhos__subtitle">
          Cada espetáculo é uma obra de arte viva
        </p>
      </div>

      <div className="trabalhos__content">
        <div className="trabalhos__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`trabalhos__filter ${active === cat ? 'trabalhos__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="trabalhos__grid">
          {filtered.map(item => (
            <WorkCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

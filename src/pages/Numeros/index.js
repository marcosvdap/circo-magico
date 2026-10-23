import { useState } from 'react';
import WorkCard from '../../components/WorkCard';
import './index.css';

const categories = ['Todos', 'Acrobacia', 'Mágica', 'Pirofagia', 'Malabarismo', 'Aéreo'];

const numeros = [
  {
    title: 'Voando Sem Asa',
    category: 'Aéreo',
    year: '2024',
    description: 'Trapezistas desafiam a gravidade em um número aéreo de altíssimo nível técnico e beleza visual.',
  },
  {
    title: 'O Grande Ilusionista',
    category: 'Mágica',
    year: '2024',
    description: 'Os maiores truques de ilusionismo reunidos em um número solo de tirar o fôlego.',
  },
  {
    title: 'Cirque du Fogo',
    category: 'Pirofagia',
    year: '2023',
    description: 'Dançarinos e artistas do fogo criam uma sinfonia visual hipnotizante com chamas e movimento.',
  },
  {
    title: 'Equilíbrio Perfeito',
    category: 'Acrobacia',
    year: '2023',
    description: 'Torre humana de 7 andares executada com precisão milimétrica e elegância incomparável.',
  },
  {
    title: 'Prestidigitação',
    category: 'Mágica',
    year: '2022',
    description: 'Ilusionismo clássico reinventado com modernidade, humor e interação com o público.',
  },
  {
    title: 'Cascata de Aros',
    category: 'Malabarismo',
    year: '2022',
    description: 'Número de malabarismo com 12 aros simultâneos, único no repertório latino-americano.',
  },
  {
    title: 'Chamas & Sonhos',
    category: 'Pirofagia',
    year: '2021',
    description: 'Arte do fogo com coreografias elaboradas, figurinos deslumbrantes e música ao vivo.',
  },
  {
    title: 'Acima das Nuvens',
    category: 'Aéreo',
    year: '2021',
    description: 'Tecido aéreo e lira em um dueto que evoca leveza, romance e virtuosismo técnico.',
  },
  {
    title: 'Mãos que Voam',
    category: 'Malabarismo',
    year: '2020',
    description: 'Solo de malabarismo com claves que se tornou viral e referência no cenário mundial.',
  },
];

export default function Numeros() {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos'
    ? numeros
    : numeros.filter(n => n.category === active);

  return (
    <div className="numeros">
      <div className="numeros__hero">
        <p className="numeros__eyebrow">✦ &nbsp; Repertório &nbsp; ✦</p>
        <h1 className="numeros__title">Números</h1>
        <p className="numeros__subtitle">
          Cada número é uma obra de arte em movimento
        </p>
      </div>

      <div className="numeros__content">
        <div className="numeros__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`numeros__filter ${active === cat ? 'numeros__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="numeros__grid">
          {filtered.map(item => (
            <WorkCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

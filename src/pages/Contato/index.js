import ContactForm from '../../components/ContactForm';
import './index.css';

const info = [
  { icon: '✉', label: 'E-mail', value: 'contato@granespetaculo.com.br' },
  { icon: '☎', label: 'Telefone', value: '+55 (62) 9 9999-9999' },
  { icon: '◎', label: 'Endereço', value: 'Goiânia — GO, Brasil' },
  { icon: '◷', label: 'Atendimento', value: 'Seg–Sex das 9h às 18h' },
];

export default function Contato() {
  return (
    <div className="contato">
      <div className="contato__hero">
        <p className="contato__eyebrow">✦ &nbsp; Fale Conosco &nbsp; ✦</p>
        <h1 className="contato__title">Contato</h1>
        <p className="contato__subtitle">
          Vamos criar algo extraordinário juntos
        </p>
      </div>

      <div className="contato__body">
        <div className="contato__inner">
          {/* Info side */}
          <aside className="contato__info">
            <h2 className="contato__info-title">Informações</h2>
            <div className="contato__info-divider" />
            <div className="contato__info-list">
              {info.map(({ icon, label, value }) => (
                <div key={label} className="contato__info-item">
                  <span className="contato__info-icon">{icon}</span>
                  <div>
                    <p className="contato__info-label">{label}</p>
                    <p className="contato__info-value">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contato__social">
              <p className="contato__social-title">Redes Sociais</p>
              {['Instagram', 'Facebook', 'YouTube'].map(s => (
                <span key={s} className="contato__social-link">{s}</span>
              ))}
            </div>
          </aside>

          {/* Form side */}
          <div className="contato__form-wrap">
            <h2 className="contato__form-title">Envie uma mensagem</h2>
            <div className="contato__info-divider" />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import './index.css';

export default function ContactForm() {
  const [form, setForm]   = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [sent, setSent]   = useState(false);

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="contact-form contact-form--success">
        <span className="contact-form__star">★</span>
        <h3>Mensagem enviada!</h3>
        <p>Entraremos em contato em breve. Obrigado!</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Seu nome completo"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form__field">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="assunto">Assunto</label>
        <input
          id="assunto"
          name="assunto"
          type="text"
          placeholder="Contratação, Parcerias, Imprensa..."
          value={form.assunto}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={6}
          placeholder="Descreva seu projeto ou dúvida..."
          value={form.mensagem}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="contact-form__submit">
        Enviar Mensagem &nbsp; ✦
      </button>
    </form>
  );
}

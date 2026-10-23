import { useCallback, useEffect, useRef, useState } from 'react';
import './index.css';

export default function Carousel({ title, images, onClose }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const total = images.length;

  const prev = useCallback(() => setIndex(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIndex(i => (i + 1) % total), [total]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, prev, next]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
    touchStartX.current = null;
  };

  return (
    <div className="carousel" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="carousel__box" onClick={e => e.stopPropagation()}>
        <div className="carousel__header">
          <h3 className="carousel__title">{title}</h3>
          <button className="carousel__close" onClick={onClose} aria-label="Fechar">&times;</button>
        </div>

        {total === 0 ? (
          <p className="carousel__empty">Fotos em breve ✦</p>
        ) : (
          <>
            <div className="carousel__stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <img
                key={images[index]}
                src={images[index]}
                alt={`${title} — foto ${index + 1} de ${total}`}
                className="carousel__img"
              />
              {total > 1 && (
                <>
                  <button className="carousel__nav carousel__nav--prev" onClick={prev} aria-label="Anterior">&#8249;</button>
                  <button className="carousel__nav carousel__nav--next" onClick={next} aria-label="Próxima">&#8250;</button>
                </>
              )}
            </div>

            {total > 1 && (
              <div className="carousel__dots">
                {images.map((src, i) => (
                  <button
                    key={src}
                    className={`carousel__dot${i === index ? ' is-active' : ''}`}
                    onClick={() => setIndex(i)}
                    aria-label={`Ir para foto ${i + 1}`}
                  />
                ))}
              </div>
            )}
            <p className="carousel__counter">{index + 1} / {total}</p>
          </>
        )}
      </div>
    </div>
  );
}

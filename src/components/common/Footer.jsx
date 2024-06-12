import React from 'react';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Secciones</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Reseñas</a></li>
            <li><a href="/">Noticias</a></li>
            <li><a href="/">Guías</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Categorías</h3>
          <ul>
            <li><a href="/">Acción</a></li>
            <li><a href="/">Aventura</a></li>
            <li><a href="/">Estrategia</a></li>
            <li><a href="/">RPG</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul>
            <li><a href="/">Sobre Nosotros</a></li>
            <li><a href="/">Trabaja con Nosotros</a></li>
            <li><a href="/">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TrashGame. Todos los derechos reservados.</p>
        <ul>
          <li><a href="/">Términos de Uso</a></li>
          <li><a href="/">Política de Privacidad</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
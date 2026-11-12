import './App.css';
function App() {
  return (
    <div className="contenedor-principal">
      
      {/* Header */}
      <div className="header">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4E03AQGhTvDAYJWaTg/profile-displayphoto-scale_200_200/B4EZ0_ODByHEAY-/0/1774882143426?e=1795651200&v=beta&t=Lz1GNVwLsT4NVLU2vKiquC_siR91xoe4lopbfOrRfpM" 
          alt="Foto CV" 
          className="foto-perfil-laura"
        />
        <h1>Laura Royo Latorre</h1>
        <h2>Desarrolladora de Aplicaciones Multiplataforma</h2>
        <p>📧 lauraroyolatorre1@gmail.com | 📱 123-456-789 | 📍 Zaragoza</p>
      </div>

      {/* Sobre Mí */}
      <div className="seccion">
        <h2 className="titulo-seccion">Sobre Mí</h2>
        <p>Soy graduada en Marketing e Investigación de Mercados, con un Máster en Gestión de la Experiencia del Cliente. A lo largo de mi trayectoria profesional, he desarrollado una combinación de habilidades técnicas y estratégicas que me permiten generar valor a través del análisis de datos y la toma de decisiones. Actualmente estoy cursando el Grado Superior de Desarrollo de Aplicaciones Multiplataforma.</p>
      </div>

      {/* Habilidades */}
      <div className="seccion">
        <h2 className="titulo-seccion">Habilidades</h2>
        <div className="lista-habilidades">
          <div className="habilidad">Power BI</div>
          <div className="habilidad">Java</div>
          <div className="habilidad">SQL</div>
          <div className="habilidad">React</div>
          <div className="habilidad">Kotlin</div>
        </div>
      </div>

      {/* Experiencia */}
      <div className="seccion">
        <h2 className="titulo-seccion">Experiencia Profesional</h2>
        
        <div className="item-experiencia">
          <h3>Consultora SEO</h3>
          <p className="empresa">Hiberus</p>
          <p className="periodo">2022 - 2025</p>
          <p>Realicé investigaciones exhaustivas de palabras clave (Keyword research) mediante Sistrix, Keywordtool.io, definiendo las mejores oportunidades para mejorar el posicionamiento orgánico.</p>
        </div>

        <div className="item-experiencia">
          <h3>Asistente de desarrollo de negocio</h3>
          <p className="empresa">Inycom</p>
          <p className="periodo">2021 - 2022</p>
          <p>Gestioné el CRM Microsoft Dynamics 365, incorporando datos precisos de cada contacto generado para mantener una base de datos completa y actualizada.</p>
        </div>
      </div>

      {/* Educación */}
      <div className="seccion">
        <h2 className="titulo-seccion">Educación</h2>
        <div className="item-experiencia">
          <h3>Grado superior en Desarrollo de Aplicaciones Multiplataforma</h3>
          <p className="empresa">Centro Educativo</p>
          <p className="periodo">2025 - 2027</p>
          <p>En este grado voy a aprender a diseñar, programar y optimizar software nativo y web para múltiples dispositivos.</p>

        </div>
        <div className="item-experiencia">
          <h3>Grado en Marketing e Investigación de Mercados</h3>
          <p className="empresa">Centro Educativo</p>
          <p className="periodo">2015 - 2019</p>
          <p>Formación sobre marketing digital, cominicación y redes sociales.</p>

        </div>
        <div className="item-experiencia">
          <h3>Máster en Gestión de la Experiencia del cliente</h3>
          <p className="empresa">Centro Educativo</p>
          <p className="periodo">2019 - 2020</p>
          <p>Aumenté mi conocimiento sobre programas de CRM, Customer Journey, Design thinking y SEO. </p>

        </div>
      </div>
      {/* Idiomas */}
      <div className="seccion">
        <h2 className="titulo-seccion">Idiomas</h2>
        <div className="item-idioma con-borde">
          <h3>Inglés nivel B2</h3>
          <p className="certificado">Certificado Certaclass</p>
          <p className="año">2025</p>
        </div>
      </div>

      {/* Carnet de conducir*/}
      <div className="seccion">
        <h2 className="titulo-seccion">Carnet de conducir</h2>
        <div className="item-carnet">
          <h3>Carnet tipo B</h3>
          <p>Dispongo de carnet de conducir de coche</p>
        </div>
      </div>
    </div>
  );
}

export default App

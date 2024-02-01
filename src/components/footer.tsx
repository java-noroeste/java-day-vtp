const Footer = () => {
  return (
    <footer className="bg-blue">
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between">
          <div>
            <p>Java Day Votuporanga</p>
            <p>© 2024</p>
          </div>
          <img
            src="https://javanoroeste.com.br/javanoroeste/javaday_riopreto/src/assets/favico.svg"
            alt="Logo - Java Noroeste"
          />
          <div>
            <p>
              Desenvolvido por 
              <a className="text-orange" href="https://javanoroeste.com.br">
                Java Noroeste
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

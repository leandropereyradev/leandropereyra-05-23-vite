const ArticleAbout = () => {
  return (
    <article className="mb-12 md:mb-24 md:rounded-lg md:p-4 md:border-2 md:border-blue-400 xl:max-w-7xl xl:mx-auto fullHD:p-8">
      <div className="grid grid-rows-2 gap-12 md:grid-rows-none md:grid-cols-about md:items-center md:gap-1">
        <div>
          <p className="mb-8 xl:tracking-[0.2em] fullHD:text-xl">
            Mi padre me dijo una vez:
          </p>
          <p className="italic md:place-self-center xl:tracking-[0.2em] fullHD:text-xl">
            &quot;Hijo; Las aves aprendieron a volar tomando coraje para saltar
            del nido, sin saber que podría pasarles. ¡Éstas sólo querían volar!
            En ese momento supieron para qué servían sus alas; Para hacer del
            aire su elemento. Yo no te haré saltar del nido, sólo te pido que lo
            intentes. ¡No temas! Todos tenemos miedos e inseguridades, pero dime
            si ¿no es hermoso tener en tus manos el valor de haberlo intentado?
            ¡Te amo!&quot;
          </p>
        </div>
        <img
          src="/src/assets/images/about/dad-pic.png"
          alt="dad"
          className="md:max-w-[250px] md:place-self-end xl:max-w-xs fullHD:max-w-sm"
        />
      </div>
    </article>
  );
};

export default ArticleAbout;

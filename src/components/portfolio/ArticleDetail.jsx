/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ArticleDetail = ({
  paragraphs_a,
  paragraphs_b,
  paragraphs_c,
  images,
  github,
  web,
}) => {
  return (
    <article className="text-gray-50">
      <div className="flex justify-end">
        <img
          src={`/src/assets/images/portfolio/detail/${images[0]}`}
          alt=""
          className="max-h-[180px] md:max-h-[372px] lg:max-h-[462px] xl:max-h-[577px] fullHD:max-h-[867px] rounded-tl-lg rounded-bl-lg border-t-2 border-b-2 border-l-2 border-blue-400"
        />
      </div>
      <div className="w-11/12 mx-auto text-justify flex flex-col gap-6 py-20 tracking-widest md:text-2xl md:py-28 lg:max-w-2xl lg:text-xl lg:py-36 xl:py-48 fullHD:max-w-4xl">
        {paragraphs_a.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <div className="flex">
        <img
          src={`/src/assets/images/portfolio/detail/${images[1]}`}
          alt=""
          className="max-h-[180px] md:max-h-[372px] lg:max-h-[462px] xl:max-h-[577px] fullHD:max-h-[867px] rounded-tr-lg rounded-br-lg border-t-2 border-b-2 border-r-2 border-blue-400"
        />
      </div>
      <div className="w-11/12 mx-auto text-justify flex flex-col gap-6 py-20 tracking-widest md:text-2xl md:py-28 lg:max-w-2xl lg:text-xl lg:py-36 xl:py-48 fullHD:max-w-4xl">
        {paragraphs_b.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <div className="flex justify-end">
        <img
          src={`/src/assets/images/portfolio/detail/${images[2]}`}
          alt=""
          className="max-h-[180px] md:max-h-[372px] lg:max-h-[462px] xl:max-h-[577px] fullHD:max-h-[867px] rounded-tl-lg rounded-bl-lg border-t-2 border-b-2 border-l-2 border-blue-400"
        />
      </div>
      <div className="w-11/12 mx-auto text-justify flex flex-col gap-6 py-20 tracking-widest md:text-2xl md:py-28 lg:max-w-2xl lg:text-xl lg:py-36 xl:py-48 fullHD:max-w-4xl">
        {paragraphs_c.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <div className="flex justify-around max-w-lg mx-auto">
        <motion.a
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 0px 8px rgb(147, 197, 253)",
          }}
          transition={{}}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 text-center uppercase w-44 rounded-lg text-slate-900 font-bold tracking-widest py-2 md:text-xl md:w-56"
        >
          Ver GitHub
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 0px 8px rgb(147, 197, 253)",
          }}
          transition={{}}
          href={web}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 text-center uppercase w-44 rounded-lg text-slate-900 font-bold tracking-widest py-2 md:text-xl md:w-56"
        >
          Ver Página Web
        </motion.a>
      </div>
    </article>
  );
};

export default ArticleDetail;

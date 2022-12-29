import { GithubLogo } from "phosphor-react";
import CardGit from "../Interfaces/ICardGit";

interface CardGitProps {
  cardGit: CardGit[];
}

export default function CardsGit(props: CardGitProps) {
  return (
    <div className="container flex grid h-full mx-auto mt-20 text-black" data-aos="fade-up">
      <div className="grid">
        <div className="text-3xl font-bold ">
          Equipe
          <div className="grid grid-cols-1">
            {props.cardGit.map((cardGit, index) => {
              return (
                <>
                  <div className="flex items-center gap-4 mt-6">
                    <img
                      className="h-20 w-20 rounded-full border border-blue-500"
                      src={cardGit.image}
                      alt=""
                    />
                    <div className="leading-relaxed">
                      <strong className="font-bold text-2xl block">
                        {cardGit.name}
                      </strong>
                      <span className="text-black-200 text-sm block">
                        {cardGit.description}
                      </span>
                      <button className="text-white-300 bg-black h-[30px] w-[30px] rounded-md text-sm flex items-center justify-center">
                        <a className="flex" href={cardGit.linkGit}>
                          <GithubLogo size={20} />
                        </a>
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

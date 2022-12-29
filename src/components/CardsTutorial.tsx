import { Link } from "phosphor-react";
import ICardTutorial from "../Interfaces/ICardTutorial";

interface CardTutorialProps {
  cardTutorial: ICardTutorial[];
}

export default function CardsTutorial(props: CardTutorialProps) {
  return (
    <div className="mt-20 flex flex-col mb-2 justify-center items-center" >
      <div className="text-4xl font-bold mb-9">Tutoriais</div>
      <div className="md:flex flex-row mb-9 gap-8 ">
        {props.cardTutorial.map((cardTutorial, index) => {
          return (
            <li key={index} className="list-none">
              <div className="gap-6 sm:flex-cols-1  ">
                <div className="max-w-sm bg-white border  rounded-lg shadow-md bg-gray-800 border-gray-700">
                  <div className="p-5">
                    <a href={cardTutorial.linkPage}>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-300 ">
                        {cardTutorial.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-white-300">
                      {cardTutorial.contain}
                    </p>
                    <a
                      href={cardTutorial.linkPage}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Saiba Mais
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <br />
            </li>
          );
        })}
      </div>
    </div>
  );
}

import { ArrowArcLeft, ArrowLeft, Link } from "phosphor-react";
import IStepsTutorial from "../Interfaces/IStepsTutorial";

interface StepsTutorialProps {
  title: string;
  subtitle?: string;
  stepsTutorial: IStepsTutorial[];
}

export default function HeroSteps(props: StepsTutorialProps) {
  return (
    <div className="container flex items-center justify-center">
      <div className="container flex flex-col gap-12 mt-[6rem] lg:mt-28 ">
        <div className="flex flex-col items-center lg:items-start">
          <a
            href="/Tutoriais"
            className="flex hover:underline justify-between item-center mb-5 text-blue-500 font-semibold"
          >
            <i className="flex justify-between ">
              <ArrowLeft size={23} />
              {props.title}
            </i>
          </a>

          <h2 className="text-3xl font-bold md:text-4 lg:text-4xl text-center lg:text-left mb-6">
            {props.subtitle}
          </h2>
        </div>
        {props.stepsTutorial.map((steps, index) => {
          return (
            <>
              <p className=" text-bookmark-grey text-lg text-center lg:text-left ">
                <i className="text-2xl text-blue-600 font-bold">
                  Passo {index + 1}:
                </i>{" "}
                {steps.contain}
              </p>

              <div className="flex flex-col justify-center">
                <img
                  className=" w-full h-[20rem] object-contain"
                  src={steps.image}
                  alt=""
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

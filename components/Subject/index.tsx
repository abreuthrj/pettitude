import Image from "next/image";
import DOG_PLAYING from "../../assets/Hero_Image_C4_Scent_Hounds_and_their_care_bf46eb99-69d7-4c3e-b9bf-f1dbf6475979.webp";
import DOG_EATING from "../../assets/eatfast1-min.webp";
import DOG_DOCTOR from "../../assets/dog-health-problems.webp";

export type SubjectType = "fitness" | "food" | "health";

export type SubjectProps = {
  title: string;
  type: SubjectType;
};

export function SubjectToImage(subject: SubjectType) {
  switch (subject) {
    case "fitness":
      return DOG_PLAYING;

    case "food":
      return DOG_EATING;

    case "health":
      return DOG_DOCTOR;
  }
}

export default function Subject(props: SubjectProps) {
  return (
    <div className="group relative h-[250px] w-[33.33%] cursor-pointer">
      <Image
        className="group-hover:scale-110 transition-transform duration-300"
        objectFit="cover"
        layout="fill"
        src={SubjectToImage(props.type)}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-neutral-600"></div>

      <h1 className="absolute bottom-0 m-4 font-semibold text-white text-lg">
        {props.title}
      </h1>
    </div>
  );
}

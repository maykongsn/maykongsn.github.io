import nodejsIcon from "../../assets/nodejs.svg";
import javascriptIcon from "../../assets/javascript.svg";
import typescriptIcon from "../../assets/typescript.svg";
import expressIcon from "../../assets/express.svg";
import dockerIcon from "../../assets/docker.svg";
import gitIcon from "../../assets/git.svg";
import jestIcon from "../../assets/jest.svg";
import mysqlIcon from "../../assets/mysql.svg";
import postgresIcon from "../../assets/postgres.svg";
import { Skill, SkillsCotainer } from "./styles";

type Icon = {
  name: string;
  path: any;
}[];

const icons: Icon = [
  { name: "Node.js", path: nodejsIcon },
  { name: "Javascript", path: javascriptIcon },
  { name: "Typescript", path: typescriptIcon },
  { name: "Express", path: expressIcon },
  { name: "Docker", path: dockerIcon },
  { name: "Git", path: gitIcon },
  { name: "Jest", path: jestIcon },
  { name: "MySQL", path: mysqlIcon },
  { name: "PostgreSQL", path: postgresIcon },
];

export function Skills() {
  return (
    <>
      <h2>HABILIDADES</h2>
      <SkillsCotainer>
        {icons.map((icon, index) => {
          return (
            <Skill key={index}><img src={icon.path} /><p>{icon.name}</p></Skill>
          )
          })
        }
      </SkillsCotainer>
      
    </>  
  )
}
import { getFarewellText } from "../../utils";
export default function Languages({ languages, wrongGuessCount }) {
  return (
    <ul className="languages">
      {languages.map((language, index) => {
        return (
          <li
            key={index}
            className={index + 1 <= wrongGuessCount ? "lost" : null}
            style={{
              color: language.color,
              backgroundColor: language.backgroundColor,
            }}
          >
            {language.name}
          </li>
        );
      })}
    </ul>
  );
}

import allCountryScores from "./scores";
import Table from "./Table";

const HighScoresCards = () =>
  allCountryScores
    .sort((a, b) => {
      return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
    })
    .map((eachCard) => (
      <div className="container">
        <h2>High Scores: {eachCard.name}</h2>
        <Table
          name={eachCard.name}
          scores={eachCard.scores}
          key={eachCard.name}
        />
      </div>
    ));

export default HighScoresCards;

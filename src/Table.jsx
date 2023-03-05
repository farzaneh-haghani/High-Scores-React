import Row from "./Row";

const Table = (props) => (
  <table>
    {props.scores.map((eachScore) => (
      <Row n={eachScore.n} s={eachScore.s} />
    ))}
  </table>
);

export default Table;

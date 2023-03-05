const Row = (props) => (
  <tr key={props.n}>
    <td>
      <div className="right-align">{props.n}</div>
      <div className="right-align red-color">{props.s}</div>
    </td>
  </tr>
);

export default Row;

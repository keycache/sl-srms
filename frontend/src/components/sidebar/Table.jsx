export default function Table({ theadData, tbodyData }) {
  return (
    <table>
      <thead>
        <tr className="grid grid-cols-3 gap-3">
          {theadData.map((heading) => {
            return <th key={heading}>{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((row, index) => {
          return (
            <tr className="grid grid-cols-3 gap-3" key={index}>
              {theadData.map((key, index) => {
                return <td key={row[key]}>{row[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

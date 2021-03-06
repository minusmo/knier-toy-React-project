import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const tableRows = props.characterData.map((data, index) => {
    return (
      <tr key={index}>
        <td>{data.name}</td>
        <td>{data.job}</td>
        <td>
          {" "}
          <button
            onClick={() => {
              props.removeChar(index);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{tableRows}</tbody>;
};

class Table extends React.Component {
  render() {
    const charData = this.props.characterData;
    const removeChar = this.props.removeCharacter;

    return (
      <table>
        <TableHeader />
        <TableBody characterData={charData} removeChar={removeChar} />
      </table>
    );
  }
}

export default Table;

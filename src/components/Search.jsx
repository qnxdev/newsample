import React from "react";

function parseData(arg, SrchData) {
  const resObjLoc = [];
  for (let i in arg) {
    for (let j in SrchData) {
      if (arg[i] === SrchData[j].title) {
        resObjLoc.push(SrchData[j]);
      }
    }
  }
  return resObjLoc;
}

export function Srch({ SrchData }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [disableRes, setDisable] = React.useState(Boolean);
  const [resObj, setResObj] = React.useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setDisable(e.target.value !== "");
  };
  React.useEffect(() => {
    const results = SrchData.filter((find) =>
      find.age.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResObj(results);
  }, [searchTerm]);
  if (disableRes) {
    return (
      <div className="Srch">
        <input
          type="text"
          id="bar"
          placeholder="Search for Notes, Question Papers, Syllabus and more"
          value={searchTerm}
          onChange={handleChange}
        />
        <ul className="res">
          {resObj.map((item) => (
            <a href={item.link} className="resln">
              <li key={item.name} className="resli">
                <h4 className="restx">{item.name}</h4>
                <h4 className="restx">{item.age}</h4>
              </li>
            </a>
          ))}
          <li>Nothing more found. Try searching something else :P</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Srch">
        <input
          type="text"
          id="bar"
          placeholder="Search for Notes, Question Papers, Syllabus and more"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    );
  }
}

import { useState } from "react";
import "./App.css";

function App() {
  const [titleList, settitleList] = useState([{ title: "" }]);

  const handletitleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...titleList];
    list[index][name] = value;
    settitleList(list);
  };

  const handletitleRemove = (index) => {
    const list = [...titleList];
    list.splice(index, 1);
    settitleList(list);
  };

  const handletitleAdd = () => {
    settitleList([...titleList, { title: "" }]);
  };

  return (
    <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="title">Books author,lsbn,Title(s)</label>
        {titleList.map((singletitle, index) => (
          <div key={index} className="title">
            <div className="first-division">
              <input
                name="title"
                type="text"
                id="title"
                value={singleService.service}
                onChange={(e) => handleTitleChange(e, index)}
                required
              />
              {titleList.length - 1 === index && titleList.length < 4 && (
                <button
                  type="button"
                  onClick={handletitleAdd}
                  className="add-btn"
                >
                  <span>Add</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
        <h2>Output</h2>
        {titleList &&
          serviceList.map((singleTitle, index) => (
            <ul key={index}>
              {singletitle
              .title && <li>{singleService.service}</li>}
            </ul>
          ))}
      </div>
    </form>
  );
}

export default App;

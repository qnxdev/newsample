import Tippy from "@tippyjs/react";
import { useState } from "react";
import { connect } from "react-redux";
import employeeAction from "../actions/employeeAction";
import Page from "../components/Page";
import { Button, Input } from "../components/tippyComponents/input";

function ReduxEmployee({ employeeData, setEmployee }) {
  const [newEmp, setEmp] = useState({ name: "", email: "" });
  const [uid, setId] = useState(0);
  const [edit, setEdit] = useState(false);

  function setUpdate(id) {
    setEdit(true);
    setId(id);
    setEmp(employeeData[id]);
  }

  function handleUpdate(e) {
    setEmployee([
      ...employeeData.slice(0, uid),
      newEmp,
      ...employeeData.slice(uid + 1, employeeData.length),
    ]);
    setEdit(false);
    setEmp({ name: "", email: "" });
  }

  function handleDelete(id) {
    setEmployee([
      ...employeeData.slice(0, id),
      ...employeeData.slice(id + 1, employeeData.length),
    ]);
  }



  function Mapper(emp) {
    return (
      <tr>
        <td>{employeeData.indexOf(emp) + 1}</td>
        <td>{emp.name}</td>
        <td>{emp.email}</td>
        <td>
          <Tippy content="Update this employee">
            <button
              onClick={function () {
                setUpdate(employeeData.indexOf(emp));
              }}
            >
              Update
            </button>
          </Tippy>
        </td>
        <td>
          <button
            onClick={function () {
              handleDelete(employeeData.indexOf(emp));
            }}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  }
  return (
    <Page>
      <div className="add">
        <Input
          content="Name"
          type="text"
          value={newEmp.name}
          onChange={(e) => setEmp({ ...newEmp, name: e.target.value })}
          id="name"
          placeholder="name"
        />

        <input
          type="email"
          value={newEmp.email}
          onChange={(e) => setEmp({ ...newEmp, email: e.target.value })}
          id="email"
        />
        <Button
          content="Add employee"
          onClick={
            edit
              ? function () {
                  console.log("jkj");
                  handleUpdate();
                }
              : function () {
                  setEmployee([...employeeData, newEmp]);
                  setEmp({ name: "", email: "" });
                }
          }
        >
          {edit ? "Save" : "Add"}
        </Button>
      </div>

      <div className="remove"></div>
      <div className="display">
        <table>
          <th>
            <td>Sr. No</td>
            <td>Name</td>
            <td>Email</td>
          </th>
          {employeeData.map(Mapper)}
          
          {}
        </table>

        {/* {employeeData.map((emp) => (
          <div className="eachEmployee">
            <h4>{emp.name}</h4>&nbsp;&nbsp;&nbsp;<p>{emp.email}</p>
            &nbsp;&nbsp;&nbsp;{" "}
            <button
              onClick={function () {
                handleDelete(employeeData.indexOf(emp));
              }}
            >
              Remove
            </button>
          </div>
        ))} */}
      </div>
      <style jsx>{`
        .eachEmployee {
          display: flex;
          margin: 5px;
          align-items: center;
          justify-content: center;
        }
        .eachEmployee h4 {
          margin: 0;
        }
      `}</style>
    </Page>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setEmployee: (payload) => dispatch(employeeAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxEmployee);

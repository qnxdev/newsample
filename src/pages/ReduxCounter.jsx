import { connect } from "react-redux";
import { changeCounter } from "../actions/counterAction";
import Page from "../components/Page";
  

function ReduxCounter({ counter, alterCounter }) {
  function name(params) {
    return 10;
  }
  return (
    <Page>
      <div>
        <h1>Counter: {counter}</h1>
      </div>
      <div>
        <button onClick={function  (){
          alterCounter(counter+1)
        }}>+</button>

        <button onClick={function () {
          alterCounter(counter-1)
        }}>-</button>
        <button onClick={function () {
          alterCounter(0)
        }}>Reset</button>
      </div>
    </Page>
  );
}

const mapStateToProps = (state) => ({
  //maps redux state state to function (ReduxCounter) props
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  alterCounter: function (payload) {
    dispatch(changeCounter(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter); //Connects dispatch, mapsstatetoprops and function ReduxCounter

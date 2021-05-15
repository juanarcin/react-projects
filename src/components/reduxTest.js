import { useState } from 'react';
import { connect } from 'react-redux';

function ReduxTest(props) {
	const [isValueTrue, setValue] = useState(props.isTrue)
 //in redux state.isTrue is set to false

 function toggle(isTrue){
 	props.updateRedux(isTrue)
 	setValue(props.isTrue)
 	console.log(isTrue, props.isTrue)
 }
  if(props.isTrue){
    return (
    	<div>
    		<p>value set to True</p>
    		<button onClick={() => toggle(false)}>toggle</button>
    	</div>
    )
  } else {
    return (
    	<div>
    		<p>value set to False</p>
    		<button onClick={() => toggle(true)}>toggle</button>
    	</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isTrue: state.isTrue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateRedux: (isTrue) => { dispatch({type: 'TEST', value: isTrue}) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);

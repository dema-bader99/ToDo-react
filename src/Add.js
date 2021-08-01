import './Add.css';

function Add(props) {
    let data = props.task;
    return (
        <div>
            <label>
                <input type="checkbox" id={props.task.count} onClick={()=>props.checked(data , data.name + data.count)}/>
                <span className="taskName" id={data.name + data.count} >{props.task.name}{data.counts}</span>
                <button className="buttonName" onClick={()=>props.handleDelSubmit(data)} value="delete"> <strong>delete</strong> </button>
            </label>
            <hr className="hrName"/>
        </div>
    );
  }

export default Add;
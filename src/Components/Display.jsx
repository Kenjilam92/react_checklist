import React, {useState} from 'react'

const Display = props => {
  return(
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
            <th>Tasks</th>
            <th>Completed</th>
            <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((task,i)=>{
          return(
            <tr key={i}>
                <td style={{ textDecoration : task.fontStyle}}>
                  {task.taskDetails}
                </td>
                <td><input 
                  type="checkbox" 
                  onChange={e=>props.handleCheckbox(e.target.checked,i)} 
                  /></td>
                <td>
                  <button className="btn btn-success" onClick={e=>props.handleEdit(i)}>
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={e=>props.handleDelete(i)}>
                    Delete
                  </button>
                </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Display;
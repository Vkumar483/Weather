import React from 'react'
import "./style.css"



class Todo extends React.Component {

    state = {
        text: '',
        mywishes:[{_id:1,wish:'loading'}]
    }
    
    componentDidMount(){
        fetch('./data')
        .then(res=>res.json())
        .then(res2=>{
            //console.log(res2)
            this.setState({
                mywishes:res2
            })
        })
        .catch(err=>console.log(err))
    }

    handleDelete(id){
        fetch('./remove/'+id,{
            method:'delete'
        })
        .then(res=>res.json())
        .then(res2=>{
            console.log(res2)
            const newwishes=this.state.mywishes.filter((item)=>{
                return item._id!==res2._id;
            })
            this.setState({
                mywishes:newwishes
            })
        })
        .catch(err=>console.log(err))
    }
    handleSubmit() {
        var data = new URLSearchParams();
        data.append('item',this.state.text)

       
        fetch('./sent', {
            method: "post",
            body: data,

        }).then(res => res.json())
            .then(res2 => {
                console.log(res2)
                this.setState({
                    text: '',
                    mywishes:[...this.state.mywishes,res2]
                })
            });

    }
    render(){
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add your list here ✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" 
                               name='item'
                              placeholder="✍ Add Items"
                              className="form-control"
                              value={this.state.text}
                             onChange={(e) => this.setState({ text: e.target.value })}
                        />
                        {
                        <i className="fa fa-plus add-btn " onClick={() => this.handleSubmit()} ></i>
                        }
                    </div>

                    {/* items */}
                    <div className="showItems">
                        {
                            this.state.mywishes.map((curElem)=>{
                                    return(
                                        <div className="eachItem" key={curElem._id}>
                                        <h3>{curElem.wish}</h3>
                                        <div className="todo-btn">
                                        <i className="far fa-trash-alt add-btn" onClick={()=>this.handleDelete(curElem._id)}></i>
                                        </div>
                                    </div>
                                    )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
 }
}

export default Todo

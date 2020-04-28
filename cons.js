import react,{Component} from 'react';
class cons extends Component{
    constructor(props){
        super(props);
        this.state={data:'www.javapoint.com'}
        this.handleEvent=this.handleEvent.bind(this);

    }
    handleEvent()
    {
        console.log(this.props);
    }
    render(){
        return(
            <div className="cons">
                <h2>react construtor</h2>
                <input type="text" value={this.state.data}/>
                <button onClick={this.handleEvent}>pleaseclicle</button>
            </div>
        );
    }

    }
    ReactDOM.render(<cons/>,document.getElementById("root"));

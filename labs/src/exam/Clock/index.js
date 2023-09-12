import './style.css';


function Clock(){
    const data = new Date()

    return(
        <div>
            <><h1>Hello, I am Clock</h1>
            <span>Now is {data.toLocaleTimeString()}</span></>
        </div>
        
    )
}

export default Clock; 
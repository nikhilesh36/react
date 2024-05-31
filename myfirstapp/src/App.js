function App(){
    const currDate=new Date();
    const classsam= class Myclass{
        render(){
            return(
                <div></div>
            )
        }
    }
    classsam.displayName="Nikhilesh";
    
    return(
        <div>
            <h1>Hello {classsam.displayName}</h1>
            <h2>The Time now is {currDate.toLocaleString()}.</h2>
        </div>
    );
}
export default App;

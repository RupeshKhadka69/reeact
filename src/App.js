// import React from 'react'
// function App() {

//     return(
//         <div>
//             <h1>this is the heading</h1>
//         </div>
//     )
// }
// export default App

import React from 'react'
class App extends React.Component {
    componentDidMount(){
        console.log("everything is done");
    }

    render() {
        console.log('render is called')
        return (
            <div>

                <h1>this is the class of react</h1>  
                <h1>this is the class of react</h1>  
            </div>
        )   
    }

    constructor() {
        super() 
        console.log('constructor is called')
        
    }
   
}
export default  App;
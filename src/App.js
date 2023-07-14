import Navbar from './Navbar';
import { apiData } from './Api';
import './App.css';
import { useState } from 'react';

const categoryArray = [...new Set(apiData.map((cateElement) =>{
       return cateElement.name;
})) ];

function App() {
  const [apiDataList,setApiDataList] = useState(apiData);
  const loadItem = (category) =>{
    //filter data
     if(category==="All")
     {
        setApiDataList(apiData);
        return;
     }

     const updatedData = apiData.filter((currentData) =>{
       return currentData.name===category;
     })
     console.log(updatedData);
     setApiDataList(updatedData);
     
}
  return (
    <>
         <Navbar loadItem={loadItem} categoryArray={categoryArray}/>
         <main> 
            { apiDataList.map((currentElement) =>{
              const { id, name, description } = currentElement;
                  return(
                    <>
              <div className="container" id={id} key={id}>
                <h3>{name}</h3>
               <div className='desc'>
                   {description}
               </div>
             </div>
                    </>
                  )
            }) }
             
               
          </main>
    </>
  );
}

export default App;

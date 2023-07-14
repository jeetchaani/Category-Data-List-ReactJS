<h4>For Filter Unique Categories--</h4>
<code>
  const categoryArray = [...new Set(apiData.map((cateElement) =>{
       return cateElement.name;
})) ];
</code>
<br/><br/><br/>
<h4>Looping Via Map Function--</h4>
<code>
    { apiDataList.map((currentElement) =>{
              const { id, name, description } = currentElement;
                  return(
                    <>
                    //block for repetition
                    </>
                  )
            }) }
</code>

import { useFetch } from "./hooks/useFetch"


export const MultipleCustomHooks = () => {


    const { data, isLoader,hasError} = useFetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(data);

  return (

    <>
        <div className="container">
            <h3> Breackin Bad</h3>
        </div>
        
        <div className="">
            <h3> {   } </h3>
            <p> { }  </p>

        </div>
    </>
  )
}



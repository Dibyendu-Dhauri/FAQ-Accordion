import { useState } from "react"

export default function Question({question}) {
  const [isOpen , setIsOpen] = useState(false)

  return (
    <section>
   <div className= {isOpen ? "open" : "close"}>
   
   
   
      <h4>{question.title}</h4>
      <button onClick={()=> setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
      </button>
</div>
       { isOpen && <p> {question.info}</p>}

     </section>
  )
}
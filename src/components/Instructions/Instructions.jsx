import * as React from "react"
import "./Instructions.css"

export function Instructions({instructions}) {
  return (
    <aside className="instructions">{instructions}
      <p></p>
    </aside>
  )
}

export default Instructions

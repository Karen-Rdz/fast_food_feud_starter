import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel({item}) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{item.item_name}</h4>

      <ul className="fact-list">{
        nutritionFacts.map((fact) =>
          <NutritionalLabelFact 
          fact_label={fact.label}
          fact_attributes={fact.attribute}
          fact_values={item[`${fact.attribute}`]}
          key={fact.id}/>
        )
      }</ul>
    </div>
  )
}

export function NutritionalLabelFact({fact_label, fact_values}) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{fact_label}</span>{" "}
      <span className="fact-value">{fact_values}</span>
    </li>
  )
}

export default NutritionalLabel

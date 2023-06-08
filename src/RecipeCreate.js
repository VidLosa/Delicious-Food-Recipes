import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
 const initialFormState = {
  name: "",
  cuisine: "",
  photo: "",
  ingredients: "",
  preparation: "",
 }
 
  const [formState, setFormState] = useState(initialFormState)
  
  const handleChange = (event) => {
    const{name, value} = event.target
      setFormState((prevState) => ({...prevState, [name]: value}))
  }
 
  
  const handleSubmit = (event) => {
    event.preventDefault()
    createRecipe(formState)
    setFormState(initialFormState)
  }
 
 
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td className="small_th"> 
              <input
              id="name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Name"
              required
              />
            </td>
            <td className="small_th">
              <input
              id="cuisine"
              type="text"
              name="cuisine"
              onChange={handleChange}
              value={formState.cuisine}
              placeholder="Cuisine"
              required
              />
            </td>
            <td className="small_th">
              <input
              id="photo"
              type="text"
              name="photo"
              onChange={handleChange}
              value={formState.photo}
              placeholder="Picture url"
              required
              />
            </td>
            <td className="content_td">  
              <textarea
              id="ingredients"
              type="text"
              name="ingredients"
              onChange={handleChange}
              value={formState.ingredients}
              placeholder="Ingredients"
              required
              />
            </td>
            <td className="content_td">
             <textarea
              id="preparation"
              type="text"
              name="preparation"
              onChange={handleChange}
              value={formState.preparation}
              placeholder="Preparation"
              required
              />
            </td>
            <td className="small_th">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

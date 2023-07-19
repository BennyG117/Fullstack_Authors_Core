//!DOUBLE Check useState formData*

import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//props is onCreateNew = {fetchAllAuthors} from the dashboard
const New = (props) => {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
  });


//adding for errors:
const [nameErr, setNameErr] = useState("");

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((currentData) => ({ ...currentData, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();


  axios
  .post("http://localhost:8080/api/authors", formData)
  // .then(res=> console.log(res))
  .then((res) => {
    setFormData({
      name: "",
    });
      navigator("/");
    })
        // .catch(err=>console.log(err))
        .catch((err) => {
          console.log(err, "error here");
            const errs = err.response.data.errors;
            if (errs.name) {
              setNameErr(errs.name.message);
            } else {
              setNameErr("");
            }

          });
      };



  //adding error style
  const errStyle = {
    color: "red",
    margin: 0,
    padding: 0,
    fontweight: "bold",
  };
//TODO: fix issue with cancel button inside form
  return (
    <div>
      <Link to={"/authors"}>Home</Link>
      <h3>Add a new author: </h3>

      <fieldset>
        {/* <legend>Name: </legend> */}
        <form onSubmit={handleSubmit}>
          <p style={errStyle}>{nameErr}</p>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={formData.name}
          />
          <br/>
          {/* may run into issue regarding the cancel with onSubmit form // try building link into cancel (navigate to dashboard?) */}
          <div>
          <Link to={`/`}><button>Cancel</button></Link>
          <button>Submit</button>
          </div>
            
        </form>
      </fieldset>
    </div>
  );
};

export default New;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';


const Edit = () => {

    //the id that's refrenced from Routes
    const { id } = useParams();


    // like a redirect
    const navigator = useNavigate();

    const [formData, setFormData] = useState({
      name: "",
    });

    const [nameErr, setNameErr] = useState("");

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((currentData) => ({ ...currentData, [name]: value }));
    };

    useEffect(() => {
      axios
        .get(`http://localhost:8080/api/authors/${id}`)
        .then((res) => {
          // console.log(res)
          // setFormData(res, Data);
  
          // REMINDER pull from console naming - see res.data to auto fill*
          setFormData(res.data);
        })
        .catch((err) => console.log(err));
    }, []);


    const handleSubmit = (e) => {
      e.preventDefault();


      axios
      .put(`http://localhost:8080/api/authors/${id}`, formData)
      // .then(res=> console.log(res))
      .then((res) => {
        setFormData({
          name: "",
        });
        //returns back to dashboard
        navigator("/");
      })
      // .catch(err=>console.log(err))
      .catch((err) => {
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
  
  return (
    <div className='pageContainer'>
      <Link to={"/authors"} className='topLink'>Home</Link>
      <h3>Edit this author: </h3>


{/* REMINDER TO ADD PREPOPULATION OF FIELDS* */}

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
}

export default Edit
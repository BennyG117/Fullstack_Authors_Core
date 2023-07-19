import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Delete from "../components/Delete";
// import '../App.css'


const Dashboard = () => {
  const [authors, setAuthors] = useState([]);

  const navigator = useNavigate();

  const fetchAllAuthors = () => {
    axios
      .get("http://localhost:8080/api/authors")
      // .then(res=>console.log(res))
      // .catch(err=>console.log(err))

      .then((res) => setAuthors(res.data))
      .catch((err) => console.log(err));
  };

  //stops infinite calls to the api
  useEffect(fetchAllAuthors, []);

  //bring in delete component
  const deletingAuthor = (id) => {
    axios
      .delete(`http://localhost:8080/api/authors/${id}`)
      .then((res) => console.log(res));
    setAuthors(authors.filter((targetAuthor) => targetAuthor._id !== id));
  };
  return (
    <div className='pageContainer'>
      <Link to={`/authors/new`} className='topLink'>Add an Author</Link>
      <h3>We have quotes by: </h3>

          <div>
            
            <table >
            <tr>
              <th>Author</th>
              <th>Actions Available</th>
            </tr>
            {authors.length > 0 ? (
      authors.map((author, key) => {
        return (
          <tr key={key}>
              <td>
                <h2 className="aNames">{author.name}</h2>
              </td>
              <td className='actionBox'>
                <div className="actionButtons">
                  <button className="dashButton" onClick={() => {
                      navigator(`/authors/${author._id}/edit`)
                    }}>Edit</button>
                  <Delete  deleteAuthor={() => {
                      deletingAuthor(author._id);}}/>
                </div>
              </td>
            </tr>
            )})
            ) : (
              <p>LOADING...</p>
            )}
                    </table>
          </div>
    </div>
  );
};

export default Dashboard;

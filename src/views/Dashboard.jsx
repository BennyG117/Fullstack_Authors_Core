import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Delete from "../components/Delete";

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

  //TODO: DELETE BUTTON NOT WORKING

  return (
    <div>
      <Link to={`/authors/new`}>Add an Author</Link>
      <h3>We have quotes by: </h3>
      {/* Add mapping into the table below - target author.name?, edit button, and delete button // Add key={key}?*/}
          <div>
            
            <table >
            <tr>
              <th>Author</th>
              <th>Actions Available</th>
            </tr>
      {authors.map((author, key) => {
        return (
          <tr key={key}>
              <td>
                <h2>{author.name}</h2>
              </td>
              <td >
                <div>
                  <button onClick={() => {
                      navigator(`/authors/${author._id}/edit`)
                    }}>Edit</button>
                  <Delete deleteAuthor={() => {
                      deletingAuthor(author._id);}}/>
                </div>
              </td>
            </tr>
            )})}
                    </table>;
          </div>
    </div>
  );
};

export default Dashboard;

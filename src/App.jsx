import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import image from './image/error.jpg'
function App() {
  const [value, setvalue] = useState("")
  const [info, setinfo] = useState("")
  const [error, seterror] = useState(false)
  const [callapi, setcallapi] = useState(false)

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${value ? value : "WAQAR1205"}`
      )
      .then((res) => {
        setinfo(res.data);
        seterror(false);
      })
      .catch((err) => {
        console.log(err);
        seterror(true);
      });
  }, [callapi]);

  const formhandle = (e) => {
    e.preventDefault();
    console.log("setvalue", value);
    console.log(info)

    if (!value) {
      alert("filed is empty");
      return;
    }

    setcallapi(!callapi)
  }

  return (

    <div className="App">
      <h1 className='heading'>GITHUB API</h1>
      <div className="input-div">

        <form onSubmit={formhandle}>

          <input type="text" placeholder='enter sometging...'
            className='type'
            value={value}
            onChange={(e) => {
              setvalue(e.target.value)
            }}
          />

        </form>

      </div>
      {/* //______________________________________________________________________________       */}
      {error === false ? (
        <div className='second'>
          <div className='img-div'>
            <img src={info ? info.avatar_url : "#"} alt="v" className='img' />
          </div>

          <div className='list'>
            <ul>
              <li>NAME: {info ? info.name : "name"} </li>
              <li>BIO: {info ? info.bio : "bio"} </li>
              <li>COMPANY: {info ==="" ? info.company : "null"}</li>
              <li>E-MAIL: {info === "" ? info.email : "null"} </li>
              <li>FOLLOWERS: {info ? info.followers : "followers"} </li>
              <li>FOLLOWING: {info ? info.following : "following"} </li>
              <li>HIREABLE: {info === "" ? info.hireable : "null"}</li>
              <li>HTML_URL: {info ? info.html_url : "html_url"}</li>
              <li>LOCATION: {info ? info.location : "location"} </li>
              <li>LOGIN: {info ? info.login : "login"}</li>
              <li>NODE_ID: {info ? info.node_id : "node_id"}</li>
              <li>PUBLIC_GISTS: {info ? info.public_gists : "public_gists"}</li>
              <li>PUBLIC_REPOS: {info ? info.public_repos : "public_repos"} </li>
              <li>REPOS_URL: {info ? info.repos_url : "repos_url"}</li>
              <li>TWITTER_USERNAME: {info === "" ? info.twittwe_username : "null"}</li>
              <li>TYPE: {info ? info.type : "type"}</li>
              <li>UPDATED_AT: {info ? info.updated_at : "updated_at"}</li>
              <li>URL: {info ? info.url : "url"}</li>
            </ul>

          </div>
        </div>
      ) : (
        <div className='error-img-div'>
          <img src={image} alt="ERROE404" srcset="" className='error-img' />
        </div>
      )}

    </div>
  );
}
export default App;

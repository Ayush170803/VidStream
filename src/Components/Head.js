import React, { useEffect, useState } from "react";
import dropicon from "./dropicon.png";
import mytubeicon from "./mytubeicon.png";
import user from "./user.png";
import { toggleMenu } from "../utils/Appslice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [searchInput, SetSearchInput] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showsuggestion, setShowSuggestion] = useState(false);
  console.log(searchInput);

  const user = useSelector((store) => store.user);

  async function getsuggestion() {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const response = await fetch(CORS_PROXY + YOUTUBE_SEARCH_API + searchInput);

    const output = await response.json();
    setSuggestion(output[1]);
  }
  useEffect(
    function () {
      //API CALL FUNCTION
      //Use debouncing->make an api call after every key press but if the difference between 2 api calls is <200ms then decline an api call

      const timer = setTimeout(() => getsuggestion(), 200);
      return () => {
        clearTimeout(timer);
      };
    },
    [searchInput]
  );

  const handlesignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/main");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div id="heading">
      <div id="header">
        <img src={dropicon} alt="icon"  width={25} height={30}  onClick={() => toggleMenuHandler()} />
        <img src={mytubeicon} alt="pageicon" width={100} height={50} id="mycon" />
      </div>
      <div id="searching">
        <input type="text" value={searchInput}
          onChange={(e) => {
            SetSearchInput(e.target.value);
          }}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
         id="searchinginput"/>
        <button id="searchbtn">Search</button>
      </div>
      {showsuggestion && (
        <div id="searchsuggest">
          <ul>
            {suggestion.map((value) => (
              <li key={value}>🔍{value}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        id="signoutbtn"
        onClick={() => {
          handlesignout();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Head;

/**
 * key i ->
 * component render
 * useeffect()
 * start the timeout=> make api call after 200ms
 *
 * key ip ->
 * if (<200ms) destroy the component (useffect return method)
 * component re-render
 * useeffect()
 * start the timeout=> make api call after 200ms
 *
 */

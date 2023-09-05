        import React from 'react';
        import styled from 'styled-components';
        import PropTypes from 'prop-types';
        import { connect } from "react-redux";
        import { useNavigate } from 'react-router-dom';
 
       


        
       
       
function mapStateToProps(state) {
    return {
      currentUser: state.user.currentUser,
    };
  }
  
  function Personaldetails(props) {
    const { currentUser} = props;
  }
  let nav=useNavigate(

  )
  return(<>
    {currentUser.userId}
    {currentUser.dateBirth}
    {currentUser.city}
    {currentUser.str}
    {currentUser.numStr}
    {currentUser.status}
    {currentUser.aboutMe}
    {currentUser.lessonPlace}
     <input type='butten' onClick={nav("/update")}> עדכון פרטים</input>
    </>
  )
   
        
  export default connect(mapStateToProps)(Personaldetails);

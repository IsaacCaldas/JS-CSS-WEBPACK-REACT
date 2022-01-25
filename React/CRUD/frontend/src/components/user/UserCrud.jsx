import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
  icon: 'users',
  title: 'Users',
  subtitle: 'User CRUD - Create / Read / Update / Delete'
}

class UserCrud extends Component {

  render(){

    return (

      <Main {...headerProps}>
        User register
      </Main>

    );
  }
}

export default UserCrud;



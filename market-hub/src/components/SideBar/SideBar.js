import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, firestore }  from '../../firebase/firebase.utils';
import { setCurrentUser, setSignOut } from '../../redux/reducer/actionCreators/userActionCreator';

import './sidebar.scss';

export const storeUserInFirebase =  async ( userAuth, additionalFields) => {
  const userRef =  firestore.doc(`users/${userAuth.uid}`);
  const snapShot =  await userRef.get();
  const { displayName, uid, email } = userAuth;
  if (!snapShot.exist) {

    userRef.set({
      displayName,
      uid,
      email,
      ...additionalFields
     })
   }
   
   return userRef;
 }

class SideBar extends Component {

   unsubscribeFromAuth = null;
  
  componentDidMount() {
    
    this.unsubscribeFromAuth =  auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await storeUserInFirebase(userAuth);
        userRef.onSnapshot( snapShot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
    });
  }

  signOutUser = () => {
    auth.signOut();
    this.props.logout();
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  renderSignOutHelper = () => {
   
    if ( this.props.currentUser) {
      return (
        <React.Fragment>
          <li className='category__item'>
            <Link  onClick={() => this.signOutUser() } className='category__link'>Sign Out</Link>
          </li> 
        </React.Fragment>);
    }else {
      return (
        <React.Fragment>
          <li className='category__item'>
            <Link to='/login' className='category__link'>Sign in</Link>
          </li>
          <li className='category__item'>
            <Link to='/signup' className='category__link'>Sign up</Link>
          </li>
        </React.Fragment>
        );
    }
  }

  render() {
   return (
    <div className='sidebar__content'>
      <ul className='category__list'>
        <li className='category__item'>
          <Link  to='/shop' className='category__link'>Shop</Link>
        </li>
        <li className='category__item'>
          <Link to='/clothes' className='category__link'>Clothes</Link>
        </li>
        <li className='category__item'>
          <Link to='/bags' className='category__link'>Bags</Link>
        </li>
          { this.renderSignOutHelper()}
                 
      </ul>
    </div>
    )
  }
}
const mapStateToProps = (state )=> ({
    currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
   logout: () => dispatch(setSignOut())
 
   })
export default connect(mapStateToProps, mapDispatchToProps ) (SideBar);
import { Component } from 'react';
import ReactDOM from 'react-dom';

import './checkout.scss';

const modalElem = document.getElementById('modal');

class Modal extends Component {
constructor(props) {
  super(props);
  this.elem = document.createElement('div');
 

}
componentDidMount() {
   modalElem.append(this.elem);
}

componentWillUnmount() {
  modalElem.remove(this.elem)
}

render() {
  return(
    ReactDOM.createPortal(this.props.children, this.elem)
  )
}


}
export default Modal;
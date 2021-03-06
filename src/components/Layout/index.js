import React from 'react';
import Menu from '../Menu';
import { useSelector, useDispatch } from 'react-redux';
import { Message } from 'semantic-ui-react';
import { clearError } from '../../actions';
import './styles.css';

const Layout = ({ children }) => {
  const errorMessage = useSelector(state => state.ui.get('error'));
  const dispatch = useDispatch();

  const handleDismiss = () => {
    dispatch(clearError());
  };
  
  return (
    <div>
      <Menu />
      {
        errorMessage && (
          <div className="wrapper">
            <Message
              onDismiss={handleDismiss}
              content={errorMessage}
              color="red"
            />
          </div>
        )
      }
      <div className='Layout-content'>{children}</div>
    </div>
  );
};

export default Layout;

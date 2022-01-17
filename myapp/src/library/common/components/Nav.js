import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const List = styled.ul`
  text-decoration: none;
  display: flex;
  justify-content: space-around;
`;
const ListItem = styled.li`
  margin: 0 10px;
  padding: 10px;
  list-style-type: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: black;
    color: white;
    transform: scale(1.1);
    a {
      color: white;
    }
  }
  &:active {
    transition: all 0.2s ease-in-out;
    transform: scale(0.7);
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
const LeftListItem = styled.li`
  display: flex;
`;
const RightListItem = styled.li`
  display: flex;
`;

const Avatar = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
`;

const Nav = ({ user }) => {
  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  };
  return (
    <header>
      <div>
        <div className="toolbar">
          <List>
            <LeftListItem className="toolbar__list--left">
              <ListItem style={{ border: 'none', fontSize: 'larger' }}>
                WEBSITE
              </ListItem>
              <ListItem>
                <Link to="/">Home</Link>
              </ListItem>
              <ListItem>
                <Link to="/post">
                  {' '}
                  <Link to="/post">Post</Link>
                </Link>
              </ListItem>
              <ListItem>menu one </ListItem>
            </LeftListItem>
            <RightListItem className="toolbar__list--left">
              {(() => {
                if (user !== null) {
                  return (
                    <>
                      <Avatar alt="profile" src={`${user.photos[0].value}`} />
                      <ListItem>
                        <div>{`${user.displayName}`}</div>
                      </ListItem>
                      <ListItem>
                        <Link to="/logout" onClick={logout}>
                          Logout
                        </Link>
                      </ListItem>
                    </>
                  );
                }
                return (
                  <>
                    <ListItem>
                      <Link to="/login">Login</Link>
                    </ListItem>
                  </>
                );
              })()}
            </RightListItem>
          </List>
        </div>
      </div>
    </header>
  );
};

export default Nav;

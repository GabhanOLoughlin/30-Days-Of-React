import Button from './Button';
import Message from './Message';
import TechList from './TechList';

const Main = (props) => {
  console.log(props);
    const buttonStyles = {
        backgroundColor: '#61dbfb',
        padding: 10,
        border: 'none',
        borderRadius: 5,
        margin: '3px auto',
        cursor: 'pointer',
        fontSize: 22,
        color: 'white',
      }

    const {
        techs,
        greetPeople,
        handleTime,
        loggedIn,
        handleLogin,
        message
      } = props
  
      return (
        <main>
          <div className='main-wrapper'>
            <p>Prerequisite to get started react.js:</p>
            <ul>
              <TechList techs={techs} />
            </ul>
            {techs.length === 3 && (
              <p>You have all the prerequisite courses to get started React</p>
            )}
          </div>
          <div>
              <Button
                text='Show Time'
                onClick={handleTime}
                style={buttonStyles}
              />{' '}
              <Button
                text='Greet People'
                onClick={greetPeople}
                style={buttonStyles}
              />
              {!loggedIn && <p>Please login to access more information about 30 Days Of React challenge</p>}
              <Message message={message} />
          </div>    
          <div style={{ margin: 30 }}>
            <Button
              text={loggedIn ? 'Logout' : 'Login'}
              style={buttonStyles}
              onClick={handleLogin}
            />
            <br />
          </div>      
        </main>
      )
}

export default Main;
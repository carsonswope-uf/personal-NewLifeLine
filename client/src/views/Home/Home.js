import React from 'react';
import logo from '../../assets/logo.svg';
import '../../app.css';
import './Home.css';
import dashCalendar from '../../assets/tmpDashCalendar.png';

function Home() {
    return (
        <div className="App">
          <div className='row'>
            <div className='col1'>
              <button type="button" id='fresh-out-button'> Fresh Out? </button>

              <div class="dropdown">
                <button class="dropbutton">Paradigm Shift</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbutton">Skill Building</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbutton">Entrepeneurship</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>

            </div>

            <div className='col2'>
              <img src={ dashCalendar } className='dashCalendar' alt="Dashboard calendar" />
              <div id='tasks'>
                <h3> Tasks </h3>
                <ul>
                  <li>Skill Assessment</li>
                  <li>...</li>
                  <li>...</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
    );
}

export default Home;

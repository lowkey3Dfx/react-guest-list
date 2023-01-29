/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

const wrapperDivStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const divOneStyled = css`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const divTwoStyled = css`
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  border: 2px black solid;
  border-radius: 8px;
  border-color: white;
  background-color: #fafafa;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const divThreeStyled = css`
  input {
    width: 200px;
    height: 42px;
  }

  label {
    font-size: 0;
    color: black;
  }
`;
const divFourStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 200px;
    height: 42px;
    background-color: coral;
    border-radius: 8px;
    border: transparent;
    margin-top: 16px;

    span {
      font-size: 16px;
      color: white;
    }
  }
`;

const divFiveStyled = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const divSixStyled = css`
  display: flex;

  input {
    width: 180px;
    height: 24px;
  }
`;

function App() {
  // 1. create state variable
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isChecked, setIsChecked] = useState(true);
  const [createGuest, setCreateGuest] = useState('');

  function createGuestName() {
    return (
      <div css={divTwoStyled}>
        <div css={divFiveStyled}>
          <h2>Name List</h2>
          <div css={divSixStyled}>
            {firstName + ' ' + lastName}
            is {isChecked ? '' : 'not'} attending
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(event) => setIsChecked(event.currentTarget.checked)}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div css={wrapperDivStyled}>
        <div css={divOneStyled}>
          <div data-test-id="guest" css={divTwoStyled}>
            <h1>Guest List</h1>
            <div css={divThreeStyled}>
              <label>First Name</label>
              <input
                placeholder="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.currentTarget.value)}
              />
            </div>
            <div css={divThreeStyled}>
              <label>Last Name</label>
              <input
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.currentTarget.value)}
                onSubmit={createGuestName()}
              />
            </div>

            <div css={divFourStyled}>
              <button>
                <span>Remove</span>
              </button>
            </div>
          </div>

          {createGuest}
        </div>
      </div>
    </div>
  );
}

export default App;

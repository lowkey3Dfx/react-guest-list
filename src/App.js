/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
    cursor: pointer;

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

const guestList = [];

function App() {
  const defaultGuest = {
    firstName: '',
    lastName: '',
    attending: false,
  };
  const [guest, setGuest] = useState(defaultGuest);

  const [dataApi, setDataApi] = useState([]);
  const myUrl = 'http://localhost:4000/guests';

  useEffect(() => {
    axios(myUrl)
      .then((res) => setDataApi(res.data))
      .catch((err) => err);
  }, []);

  console.log(dataApi);

  return (
    <div className="App">
      <div css={wrapperDivStyled}>
        <div css={divOneStyled}>
          <div data-test-id="guest" css={divTwoStyled}>
            <h1>Guest List</h1>
            {/* first name div */}
            <div css={divThreeStyled}>
              <label>First Name</label>
              <input
                value={guest.firstName}
                placeholder="First Name"
                onChange={(event) =>
                  setGuest({ ...guest, ['firstName']: event.target.value })
                }
              />
            </div>
            {/* last name div */}
            <div css={divThreeStyled}>
              <label>Last Name</label>
              <input
                value={guest.lastName}
                placeholder="Last Name"
                onChange={(event) =>
                  setGuest({ ...guest, ['lastName']: event.target.value })
                }
                // onSubmit={() => guestList.push(guest)}
              />
            </div>
            <div css={divFourStyled}>
              <button
                onClick={() => {
                  console.log(guest);
                  console.log(guestList);
                  guestList.push(guest);
                  console.log(guestList);
                  setGuest(defaultGuest);
                }}
              >
                {console.log(guestList)}
                <span>Add</span>
              </button>
            </div>
          </div>
          <div>
            {dataApi.map((item) => (
              <h2 key={item.id}>
                {`${item.firstName} ${item.lastName} ${item.attending}`}{' '}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

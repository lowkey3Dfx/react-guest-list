/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

// 1. create state variable
// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');
// const [isChecked, setIsChecked] = useState(true);

// function createGuestName() {
//   return (
//     <div css={divTwoStyled}>
//       <div css={divFiveStyled}>
//         <h2>Name List</h2>
//         <div css={divSixStyled}>
//           {firstName + ' ' + lastName}
//           is {isChecked ? '' : 'not'} attending
//           <input
//             type="checkbox"
//             checked={isChecked}
//             onChange={(event) => setIsChecked(event.currentTarget.checked)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

const users = [
  {
    name: {
      first: 'Clara',
      last: 'Méndez',
    },
    email: 'clara.mendez@example.com',
    id: {
      value: '35877625-K',
    },
    picture: {
      medium: 'https://randomuser.me/api/portraits/med/women/71.jpg',
    },
  },
  {
    name: {
      first: 'Sandra',
      last: 'Nazario',
    },
    email: 'sandra.nazario@example.com',
    id: {
      value: '69 03 44 8263 6',
    },
    picture: {
      medium: 'https://randomuser.me/api/portraits/med/women/58.jpg',
    },
  },
];

export default function ExampleUpdatingStateWithArrays() {
  const [appUsers, setAppUsers] = useState(users);

  return (
    <>
      {appUsers.map((user) => {
        return (
          // using prefixes for your ids is good practice
          <div key={`user-profile-${user.id.value}`}>
            <h3>
              {user.name.first} {user.name.last}
            </h3>
            <span>email: {user.email}</span>
            <br />
            <img src={user.picture.medium} alt="user profile" />
          </div>
        );
      })}
      <button
        onClick={() => {
          // React need a new object to trigger the rerender. That means don't mutate, recreate
          // 1. copy the old state
          const newState = [...appUsers];
          // 2. update the copy
          newState.pop();
          // 3 set state with the copy updated
          setAppUsers(newState);
        }}
      >
        delete Last User
      </button>
      <button
        onClick={() => {
          const newUser = {
            name: {
              first: 'Elisa',
              last: 'Fernandez',
            },
            email: 'elisa.fernandez@example.com',
            id: {
              value: '756.0590.2840.00',
            },
            picture: {
              medium: 'https://randomuser.me/api/portraits/med/women/16.jpg',
            },
          };
          // React need a new object to trigger the rerender. That means don't mutate, recreate
          // 1. copy the old state
          const newState = [...appUsers, newUser /* step 2 */];
          // 2. update the copy
          // newState.push(newUser);
          // 3 set state with the copy updated
          setAppUsers(newState);
        }}
      >
        add new User
      </button>
    </>
  );
}

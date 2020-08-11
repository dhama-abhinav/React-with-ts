import React, {useState} from 'react';

interface State {
  userName: string;
  imageUrl: string;
}

const Practice: React.FC = () => {

  const [state, setState] = useState<State>({
    userName: 'John',
    imageUrl: 'https://picsum.photos/600/150'
  });

  return (
    <div>
      <h1>{state.userName}</h1>
      <img src={state.imageUrl} alt=""/>
    </div>
  );
}

export default Practice;

// import React, {useState} from 'react';

// const Practice: React.FC = () => {

//   const [userName, setUserName] = useState('John');
//   const [imageUrl, setImageUrl] = useState('https://picsum.photos/600/150');

//   return (
//     <div>
//       <h1>{userName}</h1>
//       <img src={imageUrl} alt=""/>
//     </div>
//   );
// }

// export default Practice;
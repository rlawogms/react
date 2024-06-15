//backgroundColor: 아무색깔
//padding: 10px 20px
//border-radius: 8px
//버튼

import { CSSProperties } from 'react';

const LargeButton = () => {
  const buttonStyle: CSSProperties = {
    backgroundColor: 'green',
    padding: '10px 20px',
    borderRadius: '8px',
  };

  return (
    <>
      <button style={buttonStyle}>버튼</button>
    </>
  );
};
export default LargeButton;

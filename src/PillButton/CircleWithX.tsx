import { CSSProperties } from 'react';

type CircleWithXProps = {};

const CircleWithX = ({}: CircleWithXProps) => {
  const style: CSSProperties = {
    width: '16px',
    height: '16px',
    backgroundColor: '#BDBDBD',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '50%',
  };

  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};
export default CircleWithX;

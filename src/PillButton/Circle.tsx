import { CSSProperties } from 'react';

type CircleProps = {
  backgroundColor: string;
};

const Circle = ({ backgroundColor }: CircleProps) => {
  const style: CSSProperties = {
    width: '16px',
    height: '16px',
    backgroundColor: backgroundColor,
    borderRadius: '50%',
  };
  return <div style={style}></div>;
};
export default Circle;

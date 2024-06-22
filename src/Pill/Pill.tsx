import { CSSProperties } from 'react';
import Circle from '../PillButton/Circle';
import CircleWithX from '../PillButton/CircleWithX';

type PillProps = {
  backgroundColor: string;
  text: string;
};

const Pill = ({ text, backgroundColor }: PillProps) => {
  const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #dbdbdb',
    borderRadius: '30px',
    gap: '6px',
    padding: '5px',
    width: 'fit-content',
  };
  return (
    <div style={style}>
      <Circle backgroundColor={backgroundColor} />
      <span style={{ lineHeight: '2px' }}>{text}</span>
      <CircleWithX />
    </div>
  );
};

export default Pill;

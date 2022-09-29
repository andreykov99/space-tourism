import { useMatch, useNavigate } from 'react-router-dom';

export const NumberIndicators = () => {
  const navigate = useNavigate();
  const isSelected = !!useMatch(id);
  return (
    <div className="number-indicators">
      <button aria-selected={isSelected}>1</button>
      <button aria-selected="false">2</button>
      <button aria-selected="false">3</button>
    </div>
  );
};

export default NumberIndicators;

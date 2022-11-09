import { LinkButton } from '../LinkButton';

interface NumberIndicatorsProps {
  tabs: string[];
}
export const NumberIndicators = ({ tabs }: NumberIndicatorsProps) => {
  return (
    <div className="number-indicators">
      {tabs.map((tab, index) => (
        <LinkButton key={tab} to={tab}>
          {index + 1}
        </LinkButton>
      ))}
    </div>
  );
};

export default NumberIndicators;

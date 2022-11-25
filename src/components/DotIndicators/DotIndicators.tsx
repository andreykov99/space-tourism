import { LinkButton } from '../LinkButton';

export interface DotIndicatorsProps {
  dots: string[];
}
export const DotIndicators = ({ dots }: DotIndicatorsProps) => {
  return (
    <div className="dot-indicators flex">
      {dots.map((dot) => (
        <LinkButton key={dot} to={dot}>
          <span className="sr-only">Slide title</span>
        </LinkButton>
      ))}
    </div>
  );
};

export default DotIndicators;

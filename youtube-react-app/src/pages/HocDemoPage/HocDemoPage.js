import applyStyles from '../../hoc/applyStyles';
import Hello from './Hello/Hello';
import Bye from './Bye/Bye';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {
  return (
    <div>
      <h1>Higher Order Component Pattern</h1>
      <StyledHello name="John" />
      <StyledBye name="John" />
    </div>
  );
};

export default HocDemoPage;

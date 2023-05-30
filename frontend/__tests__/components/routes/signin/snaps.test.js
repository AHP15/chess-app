import renderer from 'react-test-renderer';
import SignIn from '../../../../src/components/routes/signin';

it('displays the right title', () => {
  const component = renderer.create(<SignIn />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
import { Wrapper } from '../../wrapper/wrapper';
import { SectionEditor } from './components/section-editor';

export const Section = (props) => {
  const {
    attributes,
  } = props;

  return (
    <Wrapper
      props={props}
    >
      <SectionEditor
        attributes={attributes}
      />
    </Wrapper>
  );
};

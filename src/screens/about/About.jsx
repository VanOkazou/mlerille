// @flow
import React from 'react';
import Screen from '../../components/screen';
import Div from '../../components/div';
import Text from '../../components/text';

const FOLLOW_LINKS = {
  'Twitter': 'www.foo.fr',
  'Driblle': 'www.foo.fr',
  'Behance': 'www.foo.fr',
  'Instagram': 'www.foo.fr',
  'Linkedin': 'www.foo.fr',
};

function About(props: Object) {
  const { ...rest } = props;

  return (
    <Screen minHeight="100vh" bg="black" {...rest}>
      <Div display="flex" flexWrap="wrap">
        <Div flex={{ _: '0 0 100%', md: '1' }} marginRight={{ md: '100px' }}>
          <Text color="white">
            I am currently working as a Digital art director in the Parisian web agency Comptoirs.
            Among others, I've worked for clients such as Lagardère, Orange, Nespresso, LVMH, AXA,
            BPCE group or BNP Paribas.
            <br />
            <br />
            <br />I would like to thank you @Van Phan for coding this site
          </Text>
        </Div>
        <Div display="flex" flexWrap="wrap" flex={{ _: '0 0 100%', md: '1' }}>
          <Div flex={{ _: '0 0 100%', md: '1' }} marginRight={{ md: '30px' }}>
            <Text color="white" marginBottom="20px">
              Contact
            </Text>
            <Text as="a" display="block" href="mailto:mlerille@gmail.com" color="grey">
              mlerille@gmail.com
            </Text>
          </Div>
          <Div flex={{ _: '0 0 100%', md: '1' }}>
            <Text color="white" marginBottom="20px">
              Follow me
            </Text>
            {Object.keys(FOLLOW_LINKS).map(socialNetwork => (
              <Text as="a" display="block" key={socialNetwork} href={FOLLOW_LINKS[socialNetwork]} color="grey" marginBottom="5px">
                {socialNetwork}
              </Text>
            ))}
          </Div>
        </Div>
      </Div>
    </Screen>
  );
}

About.displayName = 'About';
export default About;

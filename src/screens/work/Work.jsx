// @flow
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Screen from '../../components/screen';
import Div from '../../components/div';
import Text from '../../components/text';
import { WorkCover, WorkDescription, WorkImageWrapper, WorkImages } from './Work.style';
import { CLIENT } from '../../config';
import { getCoverUrl, getTitle, getClient, getYear, getDescription, getImages } from '../../utils/work';

type Props = {
  match: Object,
};

function Work(props: Props) {
  const { match } = props;
  const [work, setWork] = useState(null);

  useEffect(() => {
    CLIENT.getEntry(match.params.id).then(function(data) {
      setWork(data);
    });
  }, []);

  if (!work) return <p>...loading</p>;

  return (
    <>
      <Div
        position="relative"
        padding="50px"
        height="90vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <WorkCover coverUrl={getCoverUrl(work)} />
        <Text fontFamily="impact" fontSize={{ _: '5rem', md: '9rem' }} textAlign="center" textTransform="uppercase">
          {getTitle(work)}
        </Text>
      </Div>
      <Screen>
        <Div display="flex" flexWrap="wrap" flex={{ _: '0 0 100%', md: '1' }}>
          <Div flex={{ _: '0 0 100%', md: '1' }} marginRight={{ md: '30px' }}>
            <Text fontWeight="bold" marginBottom="15px">
              Client
            </Text>
            <Text marginBottom="30px" color="grey">
              {getClient(work)}
            </Text>
            <Text fontWeight="bold" marginBottom="15px">
              Year
            </Text>
            <Text as="a" display="block" href="mailto:mlerille@gmail.com" color="grey">
              {getYear(work)}
            </Text>
          </Div>
          <Div flex={{ _: '0 0 100%', md: '1' }}>
            <WorkDescription dangerouslySetInnerHTML={{ __html: getDescription(work) }} />
          </Div>
        </Div>
      </Screen>
      <WorkImages>
        {getImages(work).map(image => <WorkImageWrapper key={image.filename}><img src={image.url} alt={image.filename} /></WorkImageWrapper>)}
      </WorkImages>
    </>
  );
}

Work.displayName = 'Work';
export default withRouter(Work);

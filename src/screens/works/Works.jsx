// @flow
import React, { useEffect, useState } from 'react';
import Screen from '../../components/screen';
import Work from '../../components/work';
import { CLIENT } from '../../config';
import { WORK_PATH } from '../../constants';
import { getCoverUrl, getTitle } from '../../utils/work';

function Works(props: Object) {
  const { ...rest } = props;
  const [works, setWorks] = useState(null);

  useEffect(() => {
    CLIENT.getEntries({ content_type: 'project' }).then(function(data) {
      setWorks(data.items);
    });
  }, []);

  return (
    <Screen minHeight="100vh" {...rest}>
      {works &&
        works.map(work => (
          <Work
            key={work.sys.id}
            title={getTitle(work)}
            imageUrl={getCoverUrl(work)}
            path={`${WORK_PATH}${work.sys.id}`}
          />
        ))}
    </Screen>
  );
}

Works.displayName = 'Works';
export default Works;

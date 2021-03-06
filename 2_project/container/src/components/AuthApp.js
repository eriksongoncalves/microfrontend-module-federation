import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount } from "auth/AuthApp";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathame }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathame) {
          history.push(nextPathame);
        }
      },
      onSignIn: () => {
        console.log('User signed in');
      }
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

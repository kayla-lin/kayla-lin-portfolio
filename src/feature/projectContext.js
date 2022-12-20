import React, { useState } from 'react';

import { createContext } from 'react';

const ProjectContextProvider = ({ children }) => {
  const [project, setProject] = useState();

  const ProjectContext = createContext(null);

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;

import loveboxImage from '../assets/project-lovebox.png';
import brainworksImage from '../assets/project-brainworks.png';

export const PROJECTS = [
  {
    type: 'Fullstack',
    heading: 'Lovebox',
    img: 'project-lovebox.png',
    image: loveboxImage,
    imgAlt: 'Lovebox package',
    subHeading:
      'Send virtual packages of notes that the recipients can read once a day or all at once.',
    deployment: 'https://lovekit.io/',
    tags: ['React', 'Firebase', 'Blender', 'Three.js'],
    route: 'lovebox',
  },
  {
    type: 'Fullstack',
    img: 'project-brainworks.png',
    imgAlt: 'Lovebox package',
    image: brainworksImage,
    heading: 'BRAINWORKS',
    subHeading:
      "National Institute of Health's scientific data visualizer application that utilizes over 40 years of scientific papers.",
    deployment: 'https://brainworks.scigami.org/',
    tags: ['React', 'Flask', 'MySQL', 'Typescript', 'Redux'],
    route: 'brainworks',
    isInactive:
      'BRAINWORKS is no longer available to the public as of Feb 2023',
  },
  // {
  //   type: 'Frontend',
  //   heading: 'Better Bee',
  //   subHeading:
  //     "New York Time's Spelling Bee game... except it is absolutely free, so it's much better!",
  //   tags: ['NextJS'],
  //   route: 'better-bee',
  // },
];

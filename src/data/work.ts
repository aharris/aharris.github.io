import { Work } from './../models/work.model';

export const work: Work[] = [
  {
    name: "EY Motif Design System",
    thumb: "assets/images/thumbs/motif.jpg",
    id: 'motif',
    image: '/assets/images/work/motif/large.png',
    tools: [
      'angular',
      'react',
      'stencil',
      'sketch',
      'zepelin'
    ],
    description: [
      'Coordinated and architected the design, development and planning of EY’s Motif Design System in Angular, React and Web Components. Organized and ran training sessions with developers on how to utilize, maintain and enhance the tool. This tool is fully white-labelable through a robust library of CSS variables. It has full documentation covering all resources, components, layouts, full code coverage, and WCAG 2.1 accessibility reporting. Motif is currently being used to speed up design and development on multiple internal EY applications as well as major EY clients.'
    ]
  },
  {
    name: "WCG IRB Connexus",
    thumb: "assets/images/thumbs/wcg.jpg",
    id: 'wcg',
    image: '/assets/images/work/wcg/large.png',
    tools: [
      'angular',
      'sketch',
      'abstract'
    ],
    description: ['Lead architect for the development of a fully responsive clinical trial submission application. Involved complex data integrations and form flows for the various types of clinical trial options. Worked closely with client developers to train and advise on best practices and technologies.']
  }
];

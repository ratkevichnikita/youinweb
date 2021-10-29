const teamList = [
  {
    name: 'Celine Sagenes',
    position: 'Kreativ Leder',
    phoneNumber: '930 60 290',
    email: 'celine.sagenes@greyglobal.no',
    subdivision: 'reklame_design',
    id: '0',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Kjetil Væhle',
    position: 'Kommunikasjonsrådgiver',
    phoneNumber: '917 40 710',
    email: 'kjetil.vaehle@greyglobal.no',
    subdivision: 'reklame_design',
    id: '1',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Elisabeth Ringdal',
    position: 'Senior prosjektleder/Rådgiver',
    phoneNumber: '977 69 057',
    email: 'elisabeth.ringdal@greyglobal.no',
    subdivision: 'reklame_design',
    id: '2',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Hege Thoresen',
    position: 'Art Director',
    phoneNumber: '906 06 409',
    email: 'hege.thoresen@greyglobal.no',
    subdivision: 'reklame_design',
    id: '3',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Vidar Bech Braaten',
    position: 'Grafiker',
    phoneNumber: '909 55 441',
    email: 'vidar@greyglobal.no',
    subdivision: 'reklame_design',
    id: '4',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Anita T. Hedstrøm',
    position: 'Senior Designer',
    phoneNumber: '473 09 794',
    email: 'anita@greyglobal.no',
    subdivision: 'reklame_design',
    id: '5',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Hanne Svendsvoll',
    position: 'Prosjektleder',
    phoneNumber: '918 71 366',
    email: 'hanne@greyglobal.no',
    subdivision: 'reklame_design',
    id: '6',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Sissel Jarulf',
    position: 'Senior prosjektleder / Rådgiver',
    phoneNumber: '411 00 340',
    email: 'sissel.jarulf@greyglobal.no',
    subdivision: 'reklame_design',
    id: '7',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Sergei Arutiunian',
    position: 'Utviklingssjef / Product Owner',
    phoneNumber: '977 69 057',
    email: 'elisabeth.ringdal@greyglobal.no',
    subdivision: 'reklame_design',
    id: '8',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Morten Wasa',
    position: 'Head of Performance',
    phoneNumber: '996 98 753',
    email: 'morten.wasa@greyglobal.no',
    subdivision: 'reklame_design',
    id: '9',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Eirik Moldal Andersen',
    position: 'Kreatør / Tekstforfatter',
    phoneNumber: '918 55 412',
    email: 'eirik@greyglobal.no',
    subdivision: 'reklame_design',
    id: '10',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Arne Thorbeck',
    position: 'Tekstforfatter / Konseptutvikler',
    phoneNumber: '905 94 046',
    email: 'arne.thorbeck@greyglobal.no',
    subdivision: 'reklame_design',
    id: '11',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Sondre Arthur Ternsten Bye',
    position: 'Grafisk Designer',
    phoneNumber: '977 34 490',
    email: 'sondre.arthur@greyglobal.no',
    subdivision: 'reklame_design',
    id: '12',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Inger Føyen',
    position: 'Senior Prosjektleder',
    phoneNumber: '982 57 720',
    email: 'inger.foyen@greyglobal.no',
    subdivision: 'reklame_design',
    id: '13',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Anne Reed-Larsen',
    position: 'Senior PR-rådgiver',
    phoneNumber: '909 14 430',
    email: 'anne.reed-larsen@greyglobal.no',
    subdivision: 'pr_content',
    id: '14',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Ingalill Sandal',
    position: 'Senior PR/content/health & travel specialist',
    phoneNumber: '928 27 559',
    email: 'ingalill.sandal@greyglobal.no',
    subdivision: 'pr_content',
    id: '15',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Knut Narvestad',
    position: 'Senior kommunikasjonsrådgiver',
    phoneNumber: '992 39 711',
    email: 'knut.narvestad@greyglobal.no',
    subdivision: 'pr_content',
    id: '16',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Hedda Davidsen',
    position: 'Jr. Kommunikasjonsrådgiver / Sosiale medier',
    phoneNumber: '466 78 073',
    email: 'hedda.davidsen@greyglobal.no',
    subdivision: 'pr_content',
    id: '17',
    image: '/youinweb/static/images/team',
  }, {
    name: 'Pål Nilssen',
    position: 'Prosjektleder / Rådgiver',
    phoneNumber: '472 35 615',
    email: 'paal@greyglobal.no',
    subdivision: 'sisteledd_produksjon',
    id: '18',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Erik Forsberg',
    position: 'Prosjektleder / Rådgiver',
    phoneNumber: '911 30 739',
    email: 'erik.forsberg@greyglobal.no',
    subdivision: 'sisteledd_produksjon',
    id: '19',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Terje Syversen',
    position: 'Prosjektleder / Rådgiver',
    phoneNumber: '928 21 404',
    email: 'terje@greyglobal.no',
    subdivision: 'sisteledd_produksjon',
    id: '20',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Frode Swahn',
    position: 'Prosjektleder / Rådgiver',
    phoneNumber: '488 44 100',
    email: 'frode@greyglobal.no',
    subdivision: 'sisteledd_produksjon',
    id: '21',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Don Macdonald',
    position: 'Business Relationship Director',
    phoneNumber: '455 00 055',
    email: 'don@greyglobal.no',
    subdivision: 'sisteledd_produksjon',
    id: '22',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Ine-C. Eliesen',
    position: 'Prosjektleder / Rådgiver',
    phoneNumber: '982 86 984',
    email: 'ine@greyglobal.no',
    subdivision: 'sisteledd_produksjon',
    id: '23',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Yiping Gu',
    position: 'Prosjektleder / Rådgiver',
    phoneNumber: '473 88 065',
    email: 'yiping@greyglobal.no',
    subdivision: 'sisteledd_produksjon',
    id: '24',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Lars Johnsen',
    position: 'Prosjektleder / Rådgiver',
    phoneNumber: '950 52 476',
    email: 'Lars.johnsen@greyglobal.no',
    subdivision: 'sisteledd_produksjon',
    id: '25',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Liv Hay Hordvik',
    position: 'Prosjektleder / Rådgiver',
    phoneNumber: '909 20 883',
    email: 'liv@profileringsartikler.no',
    subdivision: 'sisteledd_produksjon',
    id: '26',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Vera Klevan',
    position: 'Prosjektleder / Rådgiver',
    phoneNumber: '464 33 618',
    email: 'vera@profileringsartikler.no',
    subdivision: 'sisteledd_produksjon',
    id: '27',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Øyvind Nedrelid',
    position: 'Arbeidende styreleder',
    phoneNumber: '988 44 838',
    email: 'oyvind.nedrelid@greyglobal.no',
    subdivision: 'admin.',
    id: '28',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Henning Børve Figenschou',
    position: 'Daglig leder / Group CEO',
    phoneNumber: '482 88 255',
    email: 'henning.figenschou@greyglobal.no',
    subdivision: 'admin.',
    id: '29',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Chris Kirkemo',
    position: 'Byråleder',
    phoneNumber: '970 57 816',
    email: 'Chris.kirkemo@greyglobal.no',
    subdivision: 'admin.',
    id: '30',
    image: '/youinweb/static/images/team',
  },
  {
    name: 'Mehdi Nejad',
    position: 'IT-konsulent',
    phoneNumber: '480 21 817',
    email: 'mehdi@soft-it.no',
    subdivision: 'admin.',
    id: '31',
    image: '/youinweb/static/images/team',
  },

]

export default teamList;
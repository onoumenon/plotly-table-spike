export const categories = [
  "Diversity and Inclusion",
  "Religious Minorities",
  "Society and Privilege",
  "Climate Injustice",
  "Equitable Tech",
  "Sexual Orientation and Gender Identity",
  "Racial Minorities",
  "Economic Justice"
];

export const offices = ["Singapore", "Thailand", "Others"];
export const levels = ["1. Open", "2. Informed", "3. Engaged", "4. Activated"];
export const actions = [
  "Would like to explore",
  "Would like to deepen",
  "Would like to share"
];

// individual data
export const data = [
  {
    timeStamp: Date.now(),
    name: "Leonard Smith",
    email: "leonard@thoughtworks.com",
    office: offices[0],
    categories: [
      { category: categories[0], level: levels[3], action: [actions[0]] },
      { category: categories[1], level: levels[3], action: [actions[0]] },
      { category: categories[2], level: levels[3], action: [actions[0]] },
      { category: categories[3], level: levels[2], action: [actions[1]] },
      { category: categories[4], level: levels[3], action: [actions[0]] },
      { category: categories[5], level: levels[3], action: [actions[1]] },
      { category: categories[6], level: levels[1], action: [actions[1]] },
      { category: categories[7], level: levels[3], action: [actions[0]] }
    ]
  },
  {
    timeStamp: Date.now(),
    name: "Feng Liu",
    email: "fl@thoughtworks.com",
    office: offices[0],
    categories: [
      { category: categories[0], level: levels[3], action: [actions[0]] },
      { category: categories[1], level: levels[3], action: [actions[0]] },
      { category: categories[2], level: levels[3], action: [actions[0]] },
      { category: categories[3], level: levels[2], action: [actions[1]] },
      { category: categories[4], level: levels[3], action: [actions[0]] },
      { category: categories[5], level: levels[3], action: [actions[1]] },
      { category: categories[6], level: levels[1], action: [actions[1]] },
      { category: categories[7], level: levels[3], action: [actions[0]] }
    ]
  },
  {
    timeStamp: Date.now(),
    name: "Raj",
    email: "raj@thoughtworks.com",
    office: offices[0],
    categories: [
      { category: categories[0], level: levels[3], action: [] },
      { category: categories[1], level: levels[3], action: [] },
      { category: categories[2], level: levels[3], action: [actions[0]] },
      { category: categories[3], level: levels[2], action: [actions[1]] },
      { category: categories[4], level: levels[3], action: [actions[0]] },
      { category: categories[5], level: levels[3], action: [actions[1]] },
      { category: categories[6], level: levels[1], action: [actions[1]] },
      { category: categories[7], level: levels[3], action: [actions[0]] }
    ]
  },
  {
    timeStamp: Date.now(),
    name: "Liu Ji",
    email: "lj@thoughtworks.com",
    office: offices[0],
    categories: [
      { category: categories[0], level: levels[3], action: [] },
      { category: categories[1], level: levels[3], action: [] },
      { category: categories[2], level: levels[3], action: [actions[0]] },
      { category: categories[3], level: levels[2], action: [actions[0]] },
      { category: categories[4], level: levels[3], action: [actions[0]] },
      { category: categories[5], level: levels[3], action: [] },
      { category: categories[6], level: levels[1], action: [actions[0]] },
      { category: categories[7], level: levels[3], action: [actions[0]] }
    ]
  },
  {
    timeStamp: Date.now(),
    name: "Rulin",
    email: "rulin@thoughtworks.com",
    office: offices[0],
    categories: [
      { category: categories[0], level: levels[3], action: [] },
      { category: categories[1], level: levels[3], action: [] },
      { category: categories[2], level: levels[3], action: [actions[0]] },
      { category: categories[3], level: levels[2], action: [actions[0]] },
      { category: categories[4], level: levels[3], action: [actions[0]] },
      { category: categories[5], level: levels[3], action: [actions[0]] },
      { category: categories[6], level: levels[1], action: [actions[0]] },
      { category: categories[7], level: levels[3], action: [actions[0]] }
    ]
  },
  {
    timeStamp: Date.now(),
    name: "Yipin Chen",
    email: "ypc@thoughtworks.com",
    office: offices[0],
    categories: [
      { category: categories[0], level: levels[3], action: [actions[2]] },
      { category: categories[1], level: levels[3], action: [actions[2]] },
      { category: categories[2], level: levels[3], action: [actions[2]] },
      { category: categories[3], level: levels[2], action: [actions[0]] },
      { category: categories[4], level: levels[3], action: [actions[2]] },
      { category: categories[5], level: levels[3], action: [actions[2]] },
      { category: categories[6], level: levels[1], action: [actions[0]] },
      { category: categories[7], level: levels[3], action: [actions[2]] }
    ]
  },
  {
    timeStamp: Date.now(),
    name: "Nina Sorkin",
    email: "nina@thoughtworks.com",
    office: offices[0],
    categories: [
      {
        category: categories[0],
        level: levels[1],
        action: [actions[0], actions[1]]
      },
      { category: categories[1], level: levels[1], action: [actions[1]] },
      { category: categories[2], level: levels[0], action: [actions[0]] },
      { category: categories[3], level: levels[2], action: [] },
      { category: categories[4], level: levels[3], action: [actions[0]] },
      { category: categories[5], level: levels[3], action: [actions[2]] },
      { category: categories[6], level: levels[1], action: [actions[0]] },
      { category: categories[7], level: levels[0], action: [] }
    ]
  },
  {
    time: Date.now(),
    name: "Anna Pavlova",
    email: "ap@thoughtworks.com",
    office: offices[0],
    categories: [
      {
        category: categories[0],
        level: levels[1],
        action: [actions[0], actions[1]]
      },
      { category: categories[1], level: levels[1], action: [actions[0]] },
      { category: categories[2], level: levels[0], action: [actions[0]] },
      { category: categories[3], level: levels[2], action: [actions[0]] },
      { category: categories[4], level: levels[3], action: [actions[0]] },
      { category: categories[5], level: levels[3], action: [actions[2]] },
      { category: categories[6], level: levels[1], action: [actions[0]] },
      { category: categories[7], level: levels[0], action: [actions[0]] }
    ]
  },
  {
    time: Date.now(),
    name: "Nellie Melba",
    email: "nb@thoughtworks.com",
    office: offices[0],
    categories: [
      {
        category: categories[0],
        level: levels[1],
        action: [actions[0], actions[1]]
      },
      { category: categories[1], level: levels[1], action: [actions[1]] },
      { category: categories[2], level: levels[0], action: [actions[0]] },
      { category: categories[3], level: levels[2], action: [actions[0]] },
      { category: categories[4], level: levels[3], action: [actions[0]] },
      { category: categories[5], level: levels[3], action: [actions[2]] },
      { category: categories[6], level: levels[1], action: [actions[0]] },
      { category: categories[7], level: levels[0], action: [actions[0]] }
    ]
  },
  {
    time: Date.now(),
    name: "James Salisbury",
    email: "js@thoughtworks.com",
    office: offices[0],
    categories: [
      {
        category: categories[0],
        level: levels[1],
        action: [actions[0], actions[1]]
      },
      { category: categories[1], level: levels[1], action: [actions[0]] },
      { category: categories[2], level: levels[0], action: [actions[0]] },
      { category: categories[3], level: levels[2], action: [actions[1]] },
      { category: categories[4], level: levels[3], action: [actions[0]] },
      { category: categories[5], level: levels[3], action: [actions[2]] },
      { category: categories[6], level: levels[1], action: [actions[0]] },
      { category: categories[7], level: levels[0], action: [actions[1]] }
    ]
  },
  {
    time: Date.now(),
    name: "Kate Chairchua",
    email: "kc@thoughtworks.com",
    office: offices[1],
    categories: [
      {
        category: categories[0],
        level: levels[1],
        action: [actions[0], actions[1]]
      },
      { category: categories[1], level: levels[1], action: [actions[0]] },
      { category: categories[2], level: levels[0], action: [actions[0]] },
      { category: categories[3], level: levels[2], action: [actions[0]] },
      { category: categories[4], level: levels[3], action: [actions[0]] },
      { category: categories[5], level: levels[3], action: [actions[2]] },
      { category: categories[6], level: levels[1], action: [actions[0]] },
      { category: categories[7], level: levels[0], action: [actions[0]] }
    ]
  }
];

const findEmails = (action, category) => {
  const foundPersons = data.filter(person => {
    if (
      person.categories.filter(
        cat => cat.category === category && cat.action.includes(action)
      )[0]
    )
      return true;
    else return false;
  });
  return foundPersons.map(person => person.email);
};

const findOne = tarName => {
  const oneDatum = data.find(a => a.name === tarName);
  return [oneDatum];
};

const findAllExcept = tarName => {
  const oneDatum = data.find(a => a.name === tarName);
  const index = data.indexOf(oneDatum);
  const copy = data.slice();
  copy.splice(index, 1);
  return copy;
};

export { findOne, findAllExcept };

// emails + no of emails found by action plan, ordered by category
export const emailsExplore = categories.map(category =>
  findEmails(actions[0], category)
);

export const emailsExploreNumber = categories.map(
  category => findEmails(actions[0], category).length
);

export const emailsDeepen = categories.map(category =>
  findEmails(actions[1], category)
);

export const emailsDeepenNumber = categories.map(
  category => findEmails(actions[1], category).length
);

export const emailsShare = categories.map(category =>
  findEmails(actions[2], category)
);

export const emailsShareNumber = categories.map(
  category => findEmails(actions[2], category).length
);

const needle = {
  contentDeath: 'смерть Кощея'
};

const egg = {
  contentNeedle: 'Игла',
  __proto__: needle // Как вы помните, напрямую перезаписывать свойство __proto__ не следует. Здесь мы так сделали только для наглядности.
};

const duck = {
  contentEgg: 'Яйцо',
  __proto__: egg
};

const rabbit = {
  contentDuck: 'Утка',
  __proto__: duck
};

const chest = {
  contentRabbit: 'Заяц',
  __proto__: rabbit
};

const koscheyDeath = {
  __proto__: chest
};

console.log(koscheyDeath.contentDeath); // "смерть Кощея"
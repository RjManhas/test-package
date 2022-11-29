export const smartScanner = (name: string) => {
  console.log(`hello ${name}, this program will scan if you are smart!`);
  const random: number = Math.round(Math.random() *100);
  console.log(`you are %${random}}`);
  return 1;
};

// import "./styles.css"; Ville ikke virke med console live server med denne import

// Statisk tekst som brukes til å søke i

// TODO: Gjør om text til array eks. ['Baby', 'cliche']
// TODO: Velg første ord så du har noe å sammenlikne med
// TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre

const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
  let word;
  let longestWordInThisText;
  let letterCount = 0;

  word = text.split(" ");

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > letterCount) {
      letterCount = word[i].length;
      longestWordInThisText = word[i];
    }
  }
  return longestWordInThisText;
};

console.log(longestWord());

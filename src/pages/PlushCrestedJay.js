import birdImg1 from "../imgs/birdImg1.png";
import Bird from "../components/Bird";

export default function PlushCrestedJay() {
  return (
    <Bird
      name="Plush Crested Jay"
      birdDesc="The Plushed-crested Jay is a South American species and part of the Corvidae family, which includes crows and ravens. These jays are found in various types of forest, where they forage at each level of the canopy. They are found from lowlands up to 1500m and are often found in groups between 10-12 individuals.Plush-crested jays are Omnivores. Their diet includes small invertebrates, insects, some fruit, occasionally eggs, frogs, small snakes, nuts, maize, and seeds."
      appearanceInfo="Plush-crested jays have dark blue/black plumaged with a cream-yellow breast and bright blue upper parts. Their eyes are yellow and their bill, feet and legs are black."
      birdImg={birdImg1}
      birdImgAlt="a vector graphic of a Plush Crested Jay"
      learnLink="https://www.elmwoodparkzoo.org/animal/plush-crested-jay/"
    />
  );
}

import birdImg3 from "../imgs/birdImg3.png";
import Bird from "../components/Bird";

export default function SummerTanager() {
  return (
    <Bird
      name="Summer Tanager"
      birdDesc="The only completely red bird in North America, the strawberry-colored male Summer Tanager is an eye-catching sight against the green leaves of the forest canopy. The mustard-yellow female is harder to spot, though both sexes have a very distinctive chuckling call note. Fairly common during the summer, these birds migrate as far as the middle of South America each winter. All year long they specialize in catching bees and wasps on the wing, somehow avoiding being stung by their catches."
      appearanceInfo="Adults have stout pointed bills and measure 17 cm (6.7 in) in length and 29 g (1.0 oz) in weight. Adult males are rose red and similar in appearance to the hepatic tanager, although the latter has a dark bill; females are orangish on the underparts and olive on top, with olive-brown wings and tail."
      birdImg={birdImg3}
      birdImgAlt="a vector graphic of a Summer Tanager"
      learnLink="https://www.allaboutbirds.org/guide/Summer_Tanager/overview"
    />
  );
}

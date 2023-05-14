import birdImg2 from "../imgs/birdImg2.png";
import Bird from "../components/Bird";

export default function HyacinthMacaw() {
  return (
    <Bird
      name="Hyacinth Macaw"
      birdDesc="The Hyacinth Macaw is a parrot native to central and eastern South America. With a length (from the top of its head to the tip of its long pointed tail) of about one meter it is longer than any other species of parrot. The Hyacinth macaw mostly nests in Manduvi trees, which rely on the toco toucan for 83.3% of the tree's distribution of seeds. The toco toucan also feeds on 53% of the hyacinth macaw's offspring as eggs. The majority of the hyacinth macaw diet is composed of the nuts from specific palm species, such as acuri and bocaiuva palms."
      appearanceInfo="The tail of the Hyacinth Macaw is long and pointed. Its feathers are entirely blue, lighter above. However, the neck feathers can sometimes be slightly grey. The ring around the parrots eyes and area just underneath the beak are a strong, vibrant yellow."
      birdImg={birdImg2}
      birdImgAlt="a vector graphic of a Hyacinth Macaw"
      learnLink="https://aqua.org/explore/animals/hyacinth-macaw"
    />
  );
}

import birdImg4 from "../imgs/birdImg4.png";
import Bird from "../components/Bird";

export default function RedSiskin() {
  return (
    <Bird
      name="Red Siskin"
      birdDesc="Red Siskins use a variety of habitats in the foothills of northern Venezuela, including tropical wet mountain forests, deciduous forests and spiny scrub forest-savanna ecotone. The diet of the red siskin consists of fruit, flower buds, grass seeds and herbaceous plants. In human care, they eat a seed mix made up of finch seed mix, canary seed mix and thistle seeds. They also receive a commercial pellet diet, as well as various types of lettuce."
      appearanceInfo="The red siskin is a small, red-and-black finch. The male has deep, rich vermilion (red) plumage on its breast, belly and undertail coverts. The head, chin, throat, flight feathers and tail are black."
      birdImg={birdImg4}
      birdImgAlt="a vector graphic of a Red Siskin"
      learnLink="https://nationalzoo.si.edu/animals/red-siskin"
    />
  );
}

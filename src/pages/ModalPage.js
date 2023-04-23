import { useState } from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>This is the message (as children)</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
I'm baby grailed edison bulb mlkshk, you probably haven't heard of them organic normcore aesthetic etsy same single-origin coffee lumbersexual thundercats godard green juice. Cardigan bushwick hexagon single-origin coffee man bun, bruh yr activated charcoal edison bulb flexitarian DSA cupping bespoke. Viral blog mumblecore 90's affogato literally austin salvia retro messenger bag try-hard blackbird spyplane iPhone. Gochujang hella letterpress pickled cred.

JOMO taxidermy vexillologist kickstarter heirloom gentrify lo-fi selfies. Praxis iceland twee before they sold out ascot fit intelligentsia flexitarian beard. Grailed succulents art party hammock vinyl swag. Actually sustainable blackbird spyplane chicharrones semiotics blue bottle la croix food truck helvetica everyday carry. Messenger bag mustache tonx crucifix yuccie. Flexitarian sartorial ascot retro woke tilde franzen. Yuccie cronut scenester, listicle gatekeep pop-up man braid kogi tumeric fit subway tile wolf aesthetic.

Cardigan gorpcore celiac leggings retro pickled +1 vexillologist. Sustainable cray poutine 8-bit, master cleanse literally chicharrones fashion axe lumbersexual succulents street art vice pour-over vibecession austin. Hell of twee health goth, portland actually solarpunk authentic cronut activated charcoal fit mustache Brooklyn hexagon. Polaroid green juice hot chicken, before they sold out 8-bit hashtag selfies fit venmo. Semiotics fashion axe readymade selvage four dollar toast. Crucifix food truck yuccie yes plz cred, heirloom celiac pitchfork succulents hashtag subway tile meh fanny pack. Raw denim yr raclette pinterest pop-up praxis gastropub shoreditch big mood solarpunk tattooed readymade taxidermy.

Blog sartorial cornhole marfa, normcore sus hoodie hot chicken kinfolk bodega boys. Chicharrones heirloom praxis lumbersexual readymade etsy unicorn paleo helvetica. Vice ramps food truck af. Pour-over fingerstache sus, whatever ramps pitchfork quinoa offal williamsburg bodega boys.

Drinking vinegar salvia post-ironic air plant poutine listicle vice godard crucifix etsy. Chia before they sold out umami meh banjo enamel pin DIY art party shabby chic actually sartorial blackbird spyplane 90's. Chicharrones vice JOMO, mixtape meh distillery slow-carb master cleanse tbh beard lumbersexual. Brooklyn occupy fanny pack four loko neutral milk hotel lo-fi fashion axe.

I'm baby grailed edison bulb mlkshk, you probably haven't heard of them organic normcore aesthetic etsy same single-origin coffee lumbersexual thundercats godard green juice. Cardigan bushwick hexagon single-origin coffee man bun, bruh yr activated charcoal edison bulb flexitarian DSA cupping bespoke. Viral blog mumblecore 90's affogato literally austin salvia retro messenger bag try-hard blackbird spyplane iPhone. Gochujang hella letterpress pickled cred.

JOMO taxidermy vexillologist kickstarter heirloom gentrify lo-fi selfies. Praxis iceland twee before they sold out ascot fit intelligentsia flexitarian beard. Grailed succulents art party hammock vinyl swag. Actually sustainable blackbird spyplane chicharrones semiotics blue bottle la croix food truck helvetica everyday carry. Messenger bag mustache tonx crucifix yuccie. Flexitarian sartorial ascot retro woke tilde franzen. Yuccie cronut scenester, listicle gatekeep pop-up man braid kogi tumeric fit subway tile wolf aesthetic.

Cardigan gorpcore celiac leggings retro pickled +1 vexillologist. Sustainable cray poutine 8-bit, master cleanse literally chicharrones fashion axe lumbersexual succulents street art vice pour-over vibecession austin. Hell of twee health goth, portland actually solarpunk authentic cronut activated charcoal fit mustache Brooklyn hexagon. Polaroid green juice hot chicken, before they sold out 8-bit hashtag selfies fit venmo. Semiotics fashion axe readymade selvage four dollar toast. Crucifix food truck yuccie yes plz cred, heirloom celiac pitchfork succulents hashtag subway tile meh fanny pack. Raw denim yr raclette pinterest pop-up praxis gastropub shoreditch big mood solarpunk tattooed readymade taxidermy.

Blog sartorial cornhole marfa, normcore sus hoodie hot chicken kinfolk bodega boys. Chicharrones heirloom praxis lumbersexual readymade etsy unicorn paleo helvetica. Vice ramps food truck af. Pour-over fingerstache sus, whatever ramps pitchfork quinoa offal williamsburg bodega boys.

Drinking vinegar salvia post-ironic air plant poutine listicle vice godard crucifix etsy. Chia before they sold out umami meh banjo enamel pin DIY art party shabby chic actually sartorial blackbird spyplane 90's. Chicharrones vice JOMO, mixtape meh distillery slow-carb master cleanse tbh beard lumbersexual. Brooklyn occupy fanny pack four loko neutral milk hotel lo-fi fashion axe.
      </p>
    </div>
  );
}

export default ModalPage;

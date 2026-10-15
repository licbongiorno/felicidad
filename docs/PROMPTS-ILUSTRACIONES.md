# Prompts de ilustración para los cuentos

Un prompt en inglés por cuento, para generar la ilustración de portada que reemplaza el dibujo SVG actual. Sirven para cualquier generador de imágenes: Pletor (Nano Banana), Midjourney, DALL·E, Imagen, Ideogram o Flux.

**Cómo usarlos**

1. Pega siempre el bloque **Series bible** antes del prompt de cada cuento. Así las 35 imágenes salen con el mismo estilo, como una colección.
2. Formato: **16:9** (1920 × 1080 o mayor). La app recorta un poco arriba y abajo, así que lo importante va en el centro.
3. Si el generador acepta *negative prompt*, usa el bloque **Avoid** del final.
4. Guarda cada imagen como `public/cuentos/<id>.webp` (por ejemplo, `public/cuentos/pez-burbuja.webp`), en WebP de calidad 80 y menos de 300 KB. La app la muestra en la tarjeta del cuento y en su primera página, en lugar del dibujo actual. Las demás páginas siguen con la escena dibujada, que cambia con el ánimo de cada página.

**Generación automática (Pollinations.ai, gratis):**

```
pip install pillow
python3 scripts/generate_story_images.py            # genera las que falten
python3 scripts/generate_story_images.py --force    # regenera todas
python3 scripts/generate_story_images.py --only pez-burbuja,el-faro
```

El script arma cada prompt (estilo de la colección, edad, escena y qué evitar), descarga la imagen, la guarda en `public/cuentos/<id>.webp` (si ya existía, la sobrescribe) y actualiza `src/domain/story-art.ts`, la lista que usa la web. Después hay que hacer commit de las imágenes y de ese archivo.

**Cuidado clínico.** En los cuentos sobre muerte o duelo, la imagen muestra el **recuerdo, el ritual o el consuelo**, nunca la muerte, un cuerpo, una herida o un accidente. Los personajes respetan el elenco que ya tiene la app (`src/domain/story-cast.ts`).

---

## Series bible (pegar antes de cada prompt)

```
Series: "Habilidades Psicológicas" therapeutic storybook collection for children and teens.
Consistent visual language across all images: hand-painted digital concept art with visible soft brush texture, gentle gouache-and-watercolor feel, rounded friendly shapes, expressive but simple faces, warm human proportions (no exaggerated anime eyes), diverse and inclusive characters with natural skin tones.
Lighting: cinematic but tender — soft key light, warm rim light, gentle atmospheric haze, no harsh contrast.
Emotional tone: safe, honest and comforting; emotions are visible but never frightening.
Composition: 16:9 widescreen, main subject in the central safe area, clear focal point, generous negative space in the upper third, foreground–midground–background depth layers.
No text, no letters, no words, no logos, no watermarks, no signatures, no frames or borders.
```

Variación por edad (agrega la línea de la franja del cuento):

- **0–6 años:** `Age 0–6 style: very simple shapes, chunky silhouettes, soft pastel palette, high readability at small size, cozy and playful.`
- **7–12 años:** `Age 7–12 style: richer environments and storytelling details, slightly more naturalistic proportions, painterly depth.`
- **13–17 años:** `Age 13–17 style: mature cinematic concept art, matte-painting atmosphere, subtle realism, introspective mood, film-still framing.`

---

## Cuentos originales

### mama-vuelve · Mamá vuelve (0–3)
```
Scene: the joyful moment of return — a mother in a coral coat kneels in the doorway of a cozy home at late afternoon and opens her arms; a toddler with curly brown hair and a sunny yellow romper runs toward her, wooden toy blocks scattered on the rug.
Characters: toddler (curly brown hair, medium skin tone, yellow romper); mother (long black ponytail, medium skin tone, coral coat, shoulder bag).
Setting: warm living room with soft rug, a small window showing golden late-afternoon sky, a half-eaten bowl of soup on a low table.
Lighting: golden-hour sunlight streaming through the open door, warm rim light around the mother, soft bounce light on the toddler's face.
Palette: honey #F2C94C, coral #F2786C, cream #FFF6E5, soft sage #A9C8A0, warm wood #C98A4B.
Composition: low camera at toddler eye level, door frame on the right third as a natural frame, toddler mid-run in the left-center, clear diagonal leading toward the hug.
Mood: reassurance, "she always comes back".
```

### hermanito-nuevo · Un bebé en casa (0–3)
```
Scene: a little girl sings softly to her newborn baby brother lying in a bassinet; the baby looks at her with a tiny smile; her father sits close behind with a protective arm around her.
Characters: girl about 3 (short blond hair, fair skin, sky-blue shirt); baby (blond fuzz, pink onesie); father (soft cardigan, gentle expression).
Setting: nursery corner with a crib mobile of paper stars, a rocking chair, soft blanket, toys on a shelf.
Lighting: soft morning window light from the left, warm lamp glow fill, gentle dust motes.
Palette: powder blue #BFE3F5, blush pink #F7C6D9, butter yellow #FFE8A3, warm white #FFFBF3, oak #C99A6B.
Composition: medium shot, the three heads forming a triangle, the girl's face as the brightest focal point, mobile in the upper negative space.
Mood: belonging — "there is room for everyone".
```

### luz-de-noche · La luz chiquita (0–6)
```
Scene: a small boy in bed hugs his teddy bear while his father, sitting on the bed edge, switches on a tiny glowing night-light; on the wall, the long shadow cast by a coat on a chair is clearly just a coat.
Characters: boy (curly black hair, dark skin tone, lavender pajamas, teddy bear); father (calm smile, relaxed posture).
Setting: cozy bedroom at night, chair with a hanging coat, star-patterned curtains, window with a crescent moon.
Lighting: deep blue moonlight ambience with a small warm amber pool of light from the night-light, soft glow on both faces, shadows soft and non-threatening.
Palette: midnight indigo #2B2D5C, lavender #9C80EC, amber #F6B04C, moon cream #FFF1C9, muted teal #3E6E7A.
Composition: medium-wide shot, warm light source at the center-right as focal point, the coat shadow on the left wall clearly readable as a coat, bed diagonal leading the eye to the light.
Mood: fear becoming smaller; safety and courage in asking for help.
```

### osito-y-lluvia · Osito y la lluvia (0–3)
```
Scene: a small brown bear cub, a gray bunny and a yellow duckling huddle together under a big leafy tree during gentle rain; one raindrop falls from a leaf; at the edge of the frame the sun is starting to break through.
Characters: bear cub (round, caramel brown fur), bunny (soft gray, long ears), duckling (bright yellow, orange beak).
Setting: friendly forest clearing, puddles reflecting the sky, mushrooms and ferns, a faint rainbow beginning in the background.
Lighting: soft overcast diffuse light with a warm sunbeam entering from the top right, wet highlights on leaves.
Palette: rain blue #8FB8DE, moss green #7FAF7A, caramel #B07A4A, duckling yellow #F2C94C, rainbow pastel accents.
Composition: three animals clustered in the center under the tree canopy forming a sheltering arch, puddles in the foreground, sunbeam diagonal in the upper right.
Mood: "together, fear is smaller".
```

### pez-burbuja · Adiós, Burbuja (4–6)
```
Scene: a little girl and her mother kneel in a sunny garden, planting a small yellow flower over a tiny painted cardboard box; next to them lies the girl's crayon drawing of a happy orange fish; the mother's hand rests gently on the girl's back.
Characters: girl about 5 (brown hair in two pigtails, fair skin, pink dress); mother (soft cardigan, tender expression).
Setting: backyard garden with fresh soil, a small watering can, daisies, a wooden fence and an empty round fishbowl visible on a windowsill in the soft background.
Lighting: gentle morning light, soft warm rim light on their hair, dappled shade from a tree.
Palette: peach #F6C9A8, sage #A9C8A0, sky blue #CFE6F5, goldfish orange #F2994A, cream #FFF6E5.
Composition: medium shot from slightly above, the flower and box at the center as focal point, the two figures framing it, the fishbowl small and out of focus on the upper right.
Mood: tender sadness and remembrance; comforting, never dark. Do not depict a dead fish.
```

### dos-casas · Las dos casas de Martina (4–9)
```
Scene: a girl walks along a sunny neighborhood street holding a small backpack, between two houses — a blue house on the left and a green house on the right — each with a parent waving warmly from the doorway; a colorful calendar peeks out of her backpack.
Characters: girl about 7 (long black hair, tan skin, mint shirt); mother at the blue house; father at the green house.
Setting: friendly tree-lined street, two distinct cozy homes with flower pots, a toothbrush visible in each bathroom window as a subtle detail.
Lighting: bright midmorning light, soft shadows, warm glow from both doorways.
Palette: cornflower blue #6FA3D8, leaf green #7FBF7A, sunny yellow #F7D774, warm white #FFFAF0, terracotta #D98A6A.
Composition: symmetrical wide shot, the girl centered on the path as the bridge between both homes, both doorways equally lit so neither house feels "less".
Mood: two homes, one love; stability and hope after change.
```

### semilla-del-abuelo · La semilla del abuelo (4–6)
```
Scene: a boy waters a young yellow flower growing in a vegetable garden; beside him, a faint warm memory-image of his grandfather's hands holding seeds floats in a soft golden glow, like a gentle memory, not a ghost.
Characters: boy about 6 (short brown hair, medium skin tone, leaf-green shirt, small watering can); grandfather appears only as a soft remembered silhouette of hands and glasses in the glow.
Setting: grandfather's vegetable garden with tomato plants on stakes, an old wooden seed drawer on a bench, a straw hat hanging on the fence.
Lighting: late-afternoon golden light, backlit flower glowing, warm haze.
Palette: sunflower yellow #F2C94C, tomato red #E76F51, garden green #6AA36F, soil brown #8A5A3A, warm cream #FFF3D6.
Composition: medium close shot at child height, the flower as the brightest focal point, the boy on the left third, the memory glow in the upper right negative space.
Mood: grief turning into hope; love that keeps growing.
```

### leon-que-temblaba · El león que temblaba (4–6)
```
Scene: a small lion cub with a soft mane takes a brave trembling step into a shallow river, guided by a kind mother elephant beside him; on the far bank, a young zebra waits hopefully.
Characters: lion cub (golden fur, small soft rust mane, big honest eyes), mother elephant (gentle, wrinkled gray), zebra friend.
Setting: wide savanna river with smooth stones, acacia trees, tall grass.
Lighting: warm late-afternoon sun, sparkling water highlights, soft rim light on the cub's mane.
Palette: savanna gold #E0A24A, rust #B9652E, river teal #5FA8B8, sage grass #A3C17A, warm sky #FCE7C2.
Composition: side view, low camera at water level, the cub's single raised paw at the center as focal point, elephant towering protectively behind, zebra small on the right bank.
Mood: courage is a little step while feeling afraid.
```

### perra-canela · La caja de Canela (7–9)
```
Scene: a boy sits cross-legged on his bedroom floor holding an open shoebox of memories — a red dog collar, a chewed tennis ball and a photo of a brown dog with one floppy ear; he is talking softly to the box, eyes wet but with a small smile.
Characters: boy about 8 (short black hair, tan skin, orange hoodie).
Setting: child's bedroom with posters, a soccer ball by the wall, a shelf where the box will live, an empty dog bed in the corner.
Lighting: soft evening lamp light, warm and intimate, window with blue dusk outside.
Palette: warm amber #F2A65A, dog brown #C98A4B, collar red #D24A4A, dusk blue #4A5E8C, cream #FFF1DC.
Composition: medium close shot slightly above, the open box as the central focal point, photo of the dog catching the lamp light, empty dog bed softly blurred in the background.
Mood: grief that comes in waves; love kept in a box of memories.
```

### amiga-se-muda · Sofi se va lejos (7–12)
```
Scene: two girls do their secret three-step handshake in front of a moving truck on a sunny street; one wears a two-colored friendship bracelet, the other holds a folded letter; parents load boxes in the background.
Characters: girl 1 (red pigtails, fair skin, coral t-shirt); girl 2 (long black hair, dark skin, sky-blue t-shirt).
Setting: suburban street, open moving truck with cardboard boxes, a potted plant on the sidewalk, trees.
Lighting: bright but soft morning light, warm rim light around their joined hands.
Palette: coral #F2786C, sky blue #5CAAEC, cardboard tan #C9A27A, street gray #B8B2A6, leaf green #7FBF7A.
Composition: medium shot, their joined hands at the exact center as focal point, the truck framing the right side, depth with boxes in the midground.
Mood: bittersweet farewell; friendship changes shape but stays.
```

### el-trampolin · El trampolín alto (7–9)
```
Scene: a boy stands at the edge of a high diving board, knees slightly bent, breathing deeply, looking down at the turquoise pool; below, a smiling swim coach gives a thumbs-up; small "step" markers on the ladder show his progress.
Characters: boy about 8 (curly brown hair, tan skin, blue swim shorts); coach (woman with whistle, warm expression).
Setting: indoor club swimming pool with large windows, lane ropes, light reflections dancing on the ceiling.
Lighting: bright daylight through windows, caustic water reflections, cool blues with warm skin highlights.
Palette: pool turquoise #3CC1C8, deep blue #2E6DB4, lane red #E2574C, sunlight white #FFFDF5, warm skin accents.
Composition: dramatic low angle from the water surface looking up at the boy on the board, board as a strong diagonal, coach small in the lower left.
Mood: fear and courage together — "I can do it with fear".
```

### cartas-para-la-abuela · Cartas para la abuela (7–12)
```
Scene: a girl and her father laugh together in a warm kitchen holding a slightly burnt apple cake; on the table rests an open vintage button tin filled with folded handwritten letters; a pair of knitting needles and playing cards sit beside it.
Characters: girl about 9 (long blond hair, fair skin, lavender sweater); father (apron, flour on his cheek).
Setting: cozy kitchen with an old oven, grandmother's floral teapot, a framed photo of a smiling grandmother with glasses and a gray bun on the wall.
Lighting: soft spring morning light through a window with blossoms outside, warm oven glow.
Palette: apple red #D9533A, cinnamon #B5733F, lavender #B9A7E8, blossom pink #F4C2D7, cream #FFF4E0.
Composition: medium shot, the button tin of letters in the foreground as the emotional focal point, laughing pair in the midground, framed photo softly in the background.
Mood: grief and laughter can live together; love continues through what she taught.
```

### el-volcan-de-bruno · El volcán de Bruno (10–12)
```
Scene: a red-haired boy runs along a park path at sunset, fists unclenching, breath visible, releasing tension; a stylized faint lava-like glow fades from his chest into the sky like steam, symbolizing anger cooling down.
Characters: boy about 11 (short red hair, fair skin with freckles, coral hoodie, sneakers).
Setting: city park with a running track, trees, a distant skyline where two different apartment windows glow.
Lighting: dramatic orange-to-purple sunset, strong warm backlight, long shadows.
Palette: lava orange #F26B3A, ember red #D24A4A, dusk violet #6B5CA5, cool teal #3E8A8A, warm gold #F6C453.
Composition: tracking side shot, boy in motion on the left third, cooling glow trailing toward the right, horizon low for a big sky.
Mood: anger is allowed; learning to release it without hurting anyone.
```

### el-faro · La guardiana del faro (10–17)
```
Scene: a teenage girl stands at the top of a lighthouse at night beside the great lamp just switched on; its powerful beam cuts through a storm across a dark sea toward a small boat changing course; she holds a radio handset.
Characters: girl about 14 (long black ponytail, tan skin, yellow raincoat).
Setting: lighthouse lantern room with brass mechanisms and glass panes, rain streaks, rough ocean, rocky coast.
Lighting: cinematic chiaroscuro — a warm golden beam against deep blue-black storm, lightning rim light on clouds, wet reflections.
Palette: storm navy #1E2A44, beam gold #F7C948, raincoat yellow #F2C94C, sea teal #2F6F73, lightning white #EAF2FF.
Composition: wide cinematic shot from slightly behind and below the girl, the beam as a strong diagonal leading to the tiny boat, girl silhouetted at the left third.
Mood: courage through small steps and asking for help; quiet heroism.
```

### la-chica-nueva · La chica de los auriculares (10–12)
```
Scene: in a school courtyard at recess, a boy sits a respectful distance from a girl wearing large headphones; both draw dragons in sketchbooks — hers breathes ice, his breathes fire — and the drawings seem to glow faintly off the pages.
Characters: girl about 11 (long black hair, medium skin, lavender sweater, big over-ear headphones); boy about 11 (short brown hair, fair skin, mint t-shirt).
Setting: quiet corner of a school yard under a tree, bench, chalk drawings, other children blurred far away.
Lighting: soft dappled midday light through leaves, magical cool blue glow from the ice dragon and warm orange from the fire dragon.
Palette: ice blue #8FD3F4, fire orange #F2994A, lavender #B9A7E8, mint #7FD1B0, school-yard beige #E8DCC4.
Composition: two-shot with the bench as a horizontal anchor, the two sketchbooks in the center as focal point, noisy playground pushed into soft background blur.
Mood: difference welcomed; quiet courage to approach and to say "basta".
```

### lo-que-dejo-pirata · Lo que dejó Pirata (10–12)
```
Scene: a group of kids stand in front of the school gate looking at a handmade poster with photos and drawings of a scruffy black neighborhood dog with a patch over one eye; neighbors' flowers lie below it; one boy wipes a tear, a girl rests a hand on his shoulder.
Characters: three kids about 11 (curly black hair with dark skin; long brown hair with fair skin; short hair with tan skin), backpacks.
Setting: neighborhood street, school gate, a kiosk on the corner, morning commuters.
Lighting: soft early-morning light, warm sun just touching the poster.
Palette: morning gold #F6D28B, brick #C2694F, school green #6AA36F, denim #4A6FA5, flower pink #F4A6C4.
Composition: over-the-shoulder shot from behind the kids, the poster as the bright central focal point, flowers in the foreground.
Mood: shared grief in community; remembering together.
```

### la-silla-vacia · La silla del abuelo (13–17)
```
Scene: a teenage girl sits at a quiet kitchen table at night writing a letter by lamplight; across from her stands an empty wooden chair with a red cushion, gently lit as if waiting; an open drawer of old cutlery beside her.
Characters: girl about 15 (long brown hair, medium skin, mint sweater).
Setting: modest family kitchen, wooden table, old radio, grandfather's reading glasses resting on the chair's cushion.
Lighting: single warm pendant lamp creating a pool of light, deep soft shadows, cinematic intimacy.
Palette: lamp amber #F2B35E, cushion red #C0392B, wood #8A5A3A, night teal #24414A, paper white #F7F1E3.
Composition: wide two-element composition, the girl on the left third and the empty chair on the right third, the lamp between them, plenty of negative space.
Mood: unfinished words being said; grief easing, not erased. Gestalt "empty chair" as a symbol of dialogue, not of loss.
```

### lo-vivido · Lo que nadie te quita (13–17)
```
Scene: a teenage boy lies on his bedroom floor at night watching old funny videos on a laptop; the screen light projects translucent memories into the room — two boys riding bikes, laughing, filming absurd videos.
Characters: teen about 16 (short black hair, tan skin, sky-blue hoodie, headphones around neck).
Setting: bedroom with a desk, a film-workshop flyer, a world map with a pin on another country, a notebook with a handwritten margin note.
Lighting: cool blue laptop glow mixed with warm projected memory light, cinematic contrast, soft volumetric light.
Palette: screen blue #5CA9E6, memory gold #F6C453, night navy #1C2541, warm skin tones, sunset orange accents #F28C55.
Composition: top-down overhead shot of the boy on the floor, memories floating around him like a ring, map at the edge of frame.
Mood: what was lived cannot be erased (Frankl); sadness as the size of what was loved.
```

### despues-del-accidente · Después del accidente (13–17)
```
Scene: a teenage girl in a school hallway records a voice message on her phone, a little nervous, while classmates around her also record messages; a shared box with notes and pens labeled only with a heart sits on a bench.
Characters: girl about 15 (blond ponytail, fair skin, coral jacket); classmates of diverse backgrounds, one boy with short black hair and dark skin in a green sweater beside her.
Setting: school corridor with lockers, bulletin board, windows; no hospital, no accident, no injuries shown.
Lighting: soft late-afternoon light through tall windows, warm patches on the floor, gentle haze.
Palette: hallway cream #EFE6D2, coral #F2786C, locker teal #4F9A94, sunlight gold #F6D28B, slate #5A6270.
Composition: medium shot with the girl in focus at the center, classmates softly around her forming a supportive circle, light beams crossing the corridor.
Mood: fear held together; hope as accompanying each other.
```

### dos-llaves · Dos llaves (13–17)
```
Scene: close-up of a teenage girl's hand holding a single keyring with two different keys and a small charm, on a bus by the window at dusk; her reflection in the glass shows a calm, determined face; a backpack on her lap.
Characters: girl about 16 (long red hair, fair skin, lavender jacket).
Setting: city bus interior, city lights passing outside, two distant neighborhoods visible through the window.
Lighting: cinematic dusk — warm interior light versus cool blue city outside, bokeh lights.
Palette: dusk blue #2F4B7C, warm interior amber #F2B35E, lavender #9C80EC, copper hair #B5532A, city bokeh pink #F4A6C4.
Composition: shallow depth of field macro on the keys in the lower-left foreground, reflection in the upper right, strong diagonal of the window.
Mood: anger understood, boundaries as care, two homes on one keyring.
```

---

## Clásicos adaptados

### la-liebre-y-la-tortuga · La liebre y la tortuga (0–6)
```
Scene: a smiling green tortoise crosses a finish line made of flowers while a hare, just waking up under a tree in the background, laughs and runs to hug her.
Characters: tortoise (soft green shell with gentle pattern, kind face); hare (beige-brown, long ears, playful).
Setting: rolling meadow with a winding path, wildflowers, a big shady tree.
Lighting: bright soft afternoon sun, warm highlights, clean shadows.
Palette: meadow green #8BC48A, shell green #6AA36F, hare beige #C9B39A, flower pink #F4A6C4, sky blue #CFE6F5.
Composition: low ground-level camera, the tortoise large in the foreground at the finish line, the hare small in the background tree shade, winding path leading the eye.
Mood: step by step also gets there; friendship over winning.
```

### el-leon-y-el-raton · El león y el ratón (0–6)
```
Scene: a tiny gray mouse proudly nibbles the last rope of a hunter's net while a big gentle lion, now free, looks at him with surprise and gratitude.
Characters: lion (golden fur, rust mane, soft expression); mouse (small, gray, round ears, determined).
Setting: forest clearing with ferns, a torn rope net, sun rays between trees.
Lighting: warm god rays through leaves, rim light on the lion's mane.
Palette: lion gold #E0A24A, mane rust #B9652E, forest green #4B9160, mouse gray #9E9EA6, sun cream #FFF1C9.
Composition: dramatic scale contrast, mouse in the foreground at the bottom center (largest focal sharpness), lion filling the midground behind, net lines leading to the mouse.
Mood: small ones can help too.
```

### el-viento-y-el-sol · El viento y el sol (4–9)
```
Scene: a gentle personified sun with a warm smile shines over a countryside road while a tired, calmer personified wind cloud rests nearby; a traveler has taken off his coat and sits under a tree, relaxed.
Characters: sun (round warm face, soft rays); wind (fluffy gray-blue cloud face, puffed cheeks now relaxed); traveler (older man, scarf, coat folded beside him).
Setting: rolling farmland, a dirt road, a lone tree, distant hills.
Lighting: warm golden sunlight from the upper right, soft cool shadows on the wind side.
Palette: sun yellow #F2C94C, warm orange #F6A04D, wind blue-gray #B6C4D6, field green #9BC47A, road tan #D9C3A0.
Composition: sky occupies the upper half with the sun right and the wind left, the traveler small in the lower center under the tree.
Mood: calm and warmth can do more than force.
```

### la-zorra-y-las-uvas · La zorra y las uvas (4–9)
```
Scene: a little orange fox sits under a grapevine sharing a bunch of shiny purple grapes with a small bird who just brought them down; the fox looks relieved and grateful.
Characters: fox (bright orange, fluffy tail, expressive eyes); small brown bird.
Setting: sunny vineyard pergola with leafy vines and hanging grape bunches.
Lighting: dappled sunlight through vine leaves, glossy highlights on grapes.
Palette: fox orange #E07A3A, grape purple #6B3FA0, vine green #6AA36F, sun gold #F6D28B, sky blue #CFE6F5.
Composition: medium shot, grapes at the center between the two animals, vine canopy forming a natural frame above.
Mood: saying "I'm frustrated" and accepting help.
```

### el-zapatero-y-los-duendes · El zapatero y los duendes (4–9)
```
Scene: at night, two tiny elves dance with joy in their new little clothes and shoes on a shoemaker's workbench, while the old shoemaker with a white beard and his wife peek from behind a curtain, smiling.
Characters: elves (tiny, pointy red hats, green outfits); shoemaker (bald with white beard, apron); his wife (warm smile, shawl).
Setting: old wooden workshop with leather pieces, shoe lasts, tools, a candle.
Lighting: warm candlelight as the main source, soft moonlight from a window, cozy glow.
Palette: candle amber #F2B35E, leather brown #8A5A3A, elf green #6AA36F, hat red #D9533A, moonlight blue #8FA8D8.
Composition: the workbench at center with the elves as focal point, the couple in the left background behind a curtain, candle on the right.
Mood: gratitude and reciprocity.
```

### el-patito-feo · El patito feo (4–9)
```
Scene: a young swan, until now gray, looks at its reflection in a calm spring lake and sees a white swan; graceful white swans glide toward him in welcome.
Characters: young swan (soft gray feathers turning white), adult swans (white).
Setting: spring lake with reeds, blossoming trees, gentle ripples.
Lighting: soft morning light, mist on the water, glowing reflections.
Palette: lake blue #9FCDE3, swan white #FDFCF8, reed green #8BB07A, blossom pink #F4C2D7, soft gray #9A9488.
Composition: the reflection splits the image horizontally, young swan and its reflection at the center, welcoming swans arriving from the right.
Mood: being different is not being wrong; finding those who see you with love.
```

### el-traje-nuevo-del-emperador · El traje nuevo del emperador (7–12)
```
Scene: during a royal parade, a little girl on her father's shoulders points and speaks up; the crowd's polite applause freezes; the emperor, dressed only in long underwear and a crown, blushes and then laughs kindly. (Keep it fully modest and child-friendly.)
Characters: girl (black pigtails, tan skin, yellow dress); emperor (short brown hair, crown, modest long white underwear); diverse crowd.
Setting: festive old-town street with flags, balconies, confetti.
Lighting: bright midday festive light, warm highlights, colorful bunting shadows.
Palette: royal purple #6B5CA5, festive gold #F2C94C, flag red #D9533A, sky blue #8FC3EA, stone beige #E3D5BD.
Composition: the girl in the left foreground pointing diagonally toward the emperor in the right midground, crowd heads in between.
Mood: telling the truth is brave; laughing at oneself.
```

### los-musicos-de-bremen · Los músicos de Bremen (7–12)
```
Scene: the iconic animal tower at a lit cottage window at night — a donkey, a dog standing on its back, a cat on the dog and a rooster on top — all singing together; robbers flee through the forest in the background.
Characters: gray donkey, scruffy brown dog, dark gray cat, red rooster.
Setting: forest cottage with a warm glowing window, moonlit trees.
Lighting: cinematic night — warm window light on the animals' faces against cool blue moonlight.
Palette: window amber #F6B04C, moon blue #3B4F7A, donkey gray #A59A8E, rooster red #D9533A, forest teal #2F5D5A.
Composition: vertical stack of animals at the center-left framed by the window, fleeing robbers tiny on the right in shadow.
Mood: it's never too late to start again; together we still have much to give.
```

### el-pescador-y-su-mujer · El pescador y su mujer (7–12)
```
Scene: an old fisherman and his wife sit together on a bench outside their humble seaside hut at sunset, wrapped in one blanket, watching a calm pink sea; a golden magic fish leaps far out on the horizon.
Characters: fisherman (bald with gray hair at the sides, wool cap, weathered kind face); wife (gray hair, shawl, peaceful expression).
Setting: humble wooden hut, fishing nets drying, beach grass, calm sea.
Lighting: soft pink-and-gold sunset, warm rim light, gentle reflections.
Palette: sunset pink #F4A6B8, sea teal #4F9A94, sand #E6D3B3, fish gold #F2C94C, driftwood #8A6B52.
Composition: the couple seen from behind at the left third, the sea and sky filling the frame, the tiny golden fish as a secondary focal point on the horizon.
Mood: enough is enough; contentment and presence.
```

### el-gigante-egoista · El gigante egoísta (7–12)
```
Scene: a gentle giant lifts a small curly-haired boy into a blossoming peach tree; around them, children climb other flowering trees; half of the garden is still covered in snow, the other half bursting into spring where children play.
Characters: giant (kind, large, lavender tunic, warm brown skin, short beard); boy (curly blond hair, fair skin, green shirt); diverse children.
Setting: walled garden with a broken wall, peach trees in pink bloom, melting snow.
Lighting: spring sunlight breaking through, warm light on the blossoming side, cool blue on the snowy side.
Palette: blossom pink #F4C2D7, spring green #8BC48A, snow white #F4F7FB, winter blue #9FB8D6, giant lavender #8A7BB8.
Composition: split composition winter-left / spring-right, the giant and boy at the center on the dividing line.
Mood: sharing transforms; a heart that softens. (Show the joyful moment, not the giant's death.)
```

### el-soldadito-de-plomo · El soldadito de plomo (10–17)
```
Scene: a one-legged tin soldier stands steadfast in a small paper boat riding a rain-swollen gutter stream through the city at dusk; in a lit window above, a paper ballerina is visible.
Characters: tin soldier (red coat, blue trousers, tall black shako hat, one leg, determined face); paper ballerina (in the window, arms raised).
Setting: old European street, cobblestones, rain, gutter rushing toward a dark tunnel.
Lighting: moody cinematic dusk, warm window glow above, cool wet reflections below, light rain streaks.
Palette: coat red #C0392B, tin silver #9AA0A6, rain blue #3E5C76, window gold #F6C453, cobblestone gray #6E6A64.
Composition: low camera at water level, the paper boat in the lower-center as focal point, the window glow in the upper right, tunnel darkness on the left edge.
Mood: steadfast while afraid; love that leaves a trace. (Do not show melting or fire.)
```

### el-principe-feliz · El príncipe feliz (10–17)
```
Scene: a small swallow perches on the shoulder of a tall golden statue of a prince, whispering to him; the statue has a ruby on its sword hilt and a single tear on its cheek; below, the winter city glows with small lit windows.
Characters: statue (gold-leaf prince, crown, ruby sword, sapphire eyes); swallow (dark blue back, white chest).
Setting: column in a city square, rooftops, chimneys, early snow beginning to fall.
Lighting: cinematic twilight, warm gold glow on the statue, cool blue city, soft snow bokeh.
Palette: gold leaf #D4AF37, ruby #C0392B, sapphire #2E5EAA, twilight blue #2B3A5C, snow white #F4F7FB.
Composition: low angle looking up at the statue, swallow close to its face as the emotional focal point, city spread below.
Mood: giving gives meaning; compassion and loss held gently. (Do not depict the dead swallow.)
```

### el-ruisenor · El ruiseñor (10–17)
```
Scene: a small plain gray-brown nightingale sings at an open palace window at dawn; inside, an old emperor in his bed sits up, eyes closed, comforted by the song; a broken jeweled mechanical bird lies silent on a side table.
Characters: nightingale (small, humble gray-brown feathers); elderly emperor (silk robe, peaceful face).
Setting: porcelain palace bedroom with silk curtains, a view of a misty forest beyond the window.
Lighting: soft pink dawn light entering through the window, warm glow on the emperor, the jeweled bird dull in shadow.
Palette: dawn pink #F4B6C2, porcelain white #F7F4EE, jade #4F9A7A, gold #D4AF37, feather brown #9B7A5A.
Composition: window on the right third with the nightingale backlit, emperor in the left midground, mechanical bird in the foreground shadow as contrast.
Mood: what is true doesn't need to shine.
```

### el-abeto · El abeto (13–17)
```
Scene: a young fir tree in a snowy-edged forest clearing at sunset, with a hare leaping nearby and pink clouds overhead; the tree seems to be finally noticing the beauty around it — the light, the hare, the sky.
Characters: young fir tree (subtly expressive through posture, no cartoon face), a hare.
Setting: northern forest, tall older firs in the background, soft snow patches, distant village lights.
Lighting: golden-pink sunset, long warm light through branches, cinematic atmosphere.
Palette: fir green #3F7D4F, sunset pink #F4A6B8, golden light #F6C453, snow blue #DCE8F2, bark brown #8A5A3A.
Composition: the young fir at the center-left, the leaping hare as a dynamic accent on the right, pink clouds filling the upper third.
Mood: life is happening now; presence and meaning in the present. (Do not show cutting or burning.)
```

### las-tres-preguntas · Las tres preguntas (13–17)
```
Scene: a king in simple traveling clothes digs a garden bed beside an old hermit with a white beard in a forest clearing at late afternoon; nearby, a wounded man rests bandaged on a blanket, a water cup beside him.
Characters: king (short black hair, dark skin, coral tunic, small crown set aside on a stump); hermit (bald, long white beard, earth-toned robe); wounded man (resting peacefully, bandaged arm, no blood).
Setting: humble hermitage with a small wooden hut, vegetable rows, tall forest.
Lighting: warm late-afternoon light filtering through trees, dust in the air, cinematic god rays.
Palette: earth brown #8A5A3A, forest green #4B9160, coral #F2786C, golden light #F6D28B, linen white #F3EDE2.
Composition: the king and hermit in the center digging, the crown on a stump in the foreground as a symbol, the resting man in the right midground.
Mood: the most important time is now; the most important person is the one in front of you.
```

---

## Avoid (negative prompt, para todos)

```
text, letters, words, captions, logos, watermark, signature, frame, border, UI elements,
scary, horror, gore, blood, wounds, injuries, death depicted, dead bodies, corpses, coffins, hospital beds, accidents, fire burning characters, weapons pointed at characters,
creepy faces, uncanny eyes, distorted hands, extra fingers, extra limbs, deformed anatomy,
sexualized or revealing clothing, nudity,
harsh neon, oversaturated colors, low resolution, blurry focal subject, cluttered composition,
photorealistic stock photo, 3D plastic render, copyrighted characters, brand names
```

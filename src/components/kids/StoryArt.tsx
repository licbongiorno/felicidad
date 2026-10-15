'use client';

import Image from 'next/image';
import type { MascotMood } from '@/domain/kids';
import { STORY_ART } from '@/domain/story-art';
import { STORY_CAST } from '@/domain/story-cast';
import type { Story } from '@/domain/stories';
import { StoryScene } from './StoryScene';

/**
 * Ilustración de un cuento: la imagen generada (public/cuentos/<id>.webp) si existe;
 * si no, el dibujo SVG con el elenco del cuento. Decorativa: el texto cuenta la historia.
 */
export function StoryArt({ story, page = 0, mood, priority = false }: { story: Story; page?: number; mood?: MascotMood; priority?: boolean }) {
  if (STORY_ART.has(story.id)) {
    return (
      <Image
        src={`/cuentos/${story.id}.webp`}
        alt=""
        width={1600}
        height={900}
        sizes="(min-width: 768px) 672px, 100vw"
        priority={priority}
        className="block aspect-[400/220] h-auto w-full object-cover"
      />
    );
  }
  return <StoryScene scene={story.pages[page].scene} cast={STORY_CAST[story.id]} mood={mood} page={page} />;
}

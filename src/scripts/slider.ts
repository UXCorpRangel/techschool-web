import EmblaCarousel, { type EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

const OPTIONS: EmblaOptionsType = { align: 'start' };

const emblaNode = <HTMLElement>document.querySelector('.embla');
const viewportNode = <HTMLElement>emblaNode.querySelector('.embla-viewport');

EmblaCarousel(viewportNode, OPTIONS, [
  Autoplay({ playOnInit: true, delay: 3000 })
]);

import gallery01 from '../assets/gallery/01.jpg';
import gallery01Webp from '../assets/gallery/01.webp';
import gallery02 from '../assets/gallery/02.jpg';
import gallery02Webp from '../assets/gallery/02.webp';
import gallery03 from '../assets/gallery/03.jpg';
import gallery03Webp from '../assets/gallery/03.webp';
import gallery04 from '../assets/gallery/04.jpg';
import gallery04Webp from '../assets/gallery/04.webp';
import gallery05 from '../assets/gallery/05.jpg';
import gallery05Webp from '../assets/gallery/05.webp';
import gallery06 from '../assets/gallery/06.jpg';
import gallery06Webp from '../assets/gallery/06.webp';
import gallery07 from '../assets/gallery/07.jpg';
import gallery07Webp from '../assets/gallery/07.webp';

// width/height are the actual encoded pixel dimensions — passed through to
// the <img> so the browser reserves the correct box before the (lazy-loaded)
// image arrives, avoiding layout shift in the masonry grid.
export const photos = [
    { id: 1, url: gallery01, webp: gallery01Webp, width: 1200, height: 1800, alt: 'Ram Prasath — portfolio still 1' },
    { id: 2, url: gallery02, webp: gallery02Webp, width: 1200, height: 1800, alt: 'Ram Prasath — portfolio still 2' },
    { id: 3, url: gallery03, webp: gallery03Webp, width: 1200, height: 1800, alt: 'Ram Prasath — portfolio still 3' },
    { id: 4, url: gallery04, webp: gallery04Webp, width: 1200, height: 1801, alt: 'Ram Prasath — portfolio still 4' },
    { id: 5, url: gallery05, webp: gallery05Webp, width: 1200, height: 1800, alt: 'Ram Prasath — portfolio still 5' },
    { id: 6, url: gallery06, webp: gallery06Webp, width: 1200, height: 1800, alt: 'Ram Prasath — portfolio still 6' },
    { id: 7, url: gallery07, webp: gallery07Webp, width: 1200, height: 1849, alt: 'Ram Prasath — portfolio still 7' },
];

export const videos = [
    { id: 0, title: 'Self Introduction', yt: '4pQq4caQFh8' },
    { id: 1, title: 'Performance Showreel 1', yt: 'ny_qTmnqsyE' },
    { id: 2, title: 'Performance Showreel 2', yt: 'GCUybdjE-pE' },
    { id: 3, title: 'Performance Showreel 3', yt: 'zDX8cVhZpwo' },
    { id: 4, title: 'Shortfilm', yt: 'xGSqUbN1k1g' },
];

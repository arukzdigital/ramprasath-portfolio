import { photos } from '../../../content/media';
import Section from '../../ui/Section/Section';
import SectionHeader from '../../ui/Section/SectionHeader';
import Reveal from '../../ui/Reveal/Reveal';
import './Gallery.css';

const Gallery = () => (
    <Section id="gallery" className="gallery">
        <SectionHeader eyebrow="Stills" title="Photo Gallery" />

        <div className="photo-grid">
            {photos.map((photo, index) => (
                <Reveal key={photo.id} as="figure" delay={Math.min(index * 0.06, 0.3)} className="photo-grid__item">
                    <picture>
                        <source srcSet={photo.webp} type="image/webp" />
                        <img
                            src={photo.url}
                            alt={photo.alt}
                            width={photo.width}
                            height={photo.height}
                            loading="lazy"
                        />
                    </picture>
                </Reveal>
            ))}
        </div>
    </Section>
);

export default Gallery;

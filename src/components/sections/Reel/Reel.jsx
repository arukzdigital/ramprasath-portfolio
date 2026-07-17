import { Suspense, lazy, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Play, Youtube } from 'lucide-react';
import { videos } from '../../../content/media';
import { socials } from '../../../content/site';
import Section from '../../ui/Section/Section';
import SectionHeader from '../../ui/Section/SectionHeader';
import Reveal from '../../ui/Reveal/Reveal';
import './Reel.css';

// Only needed once a video is clicked, so it's split out of the main bundle.
const Modal = lazy(() => import('../../ui/Modal/Modal'));

const youtubeChannel = socials.find((s) => s.id === 'youtube')?.href;

const Reel = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [featured, ...rest] = videos;

    return (
        <Section id="reel" className="reel section--alt">
            <SectionHeader eyebrow="Showreel" title="Watch The Reel" />

            <Reveal
                as="button"
                className="reel__featured"
                onClick={() => setSelectedVideo(featured)}
                aria-label={`Play video: ${featured.title}`}
            >
                <img
                    src={`https://img.youtube.com/vi/${featured.yt}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="reel__featured-thumb"
                />
                <span className="reel__featured-overlay" aria-hidden="true" />
                <span className="reel__featured-play">
                    <Play size={26} aria-hidden="true" fill="currentColor" />
                </span>
                <span className="reel__featured-caption">
                    <span className="eyebrow">Latest</span>
                    <span className="reel__featured-title">{featured.title}</span>
                </span>
            </Reveal>

            <div className="reel__grid">
                {rest.map((video, index) => (
                    <Reveal
                        key={video.id}
                        as="button"
                        delay={Math.min(index * 0.08, 0.3)}
                        className="reel__card"
                        onClick={() => setSelectedVideo(video)}
                        aria-label={`Play video: ${video.title}`}
                    >
                        <span className="reel__card-thumb">
                            <img
                                src={`https://img.youtube.com/vi/${video.yt}/hqdefault.jpg`}
                                alt=""
                                loading="lazy"
                            />
                            <span className="reel__card-play">
                                <Play size={20} aria-hidden="true" fill="currentColor" />
                            </span>
                        </span>
                        <span className="reel__card-title">{video.title}</span>
                    </Reveal>
                ))}
            </div>

            {youtubeChannel && (
                <Reveal as="a" href={youtubeChannel} target="_blank" rel="noopener noreferrer" className="reel__more">
                    <Youtube size={18} aria-hidden="true" />
                    Watch more on YouTube
                </Reveal>
            )}

            <AnimatePresence>
                {selectedVideo && (
                    <Suspense fallback={null}>
                        <Modal onClose={() => setSelectedVideo(null)} title={selectedVideo.title}>
                            <div className="video-frame">
                                <iframe
                                    src={`https://www.youtube.com/embed/${selectedVideo.yt}?autoplay=1&rel=0`}
                                    title={selectedVideo.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </Modal>
                    </Suspense>
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Reel;

import { useEffect, useState } from 'react';

// Tracks which section id is currently most visible in the viewport,
// for highlighting the active link in the nav.
export function useScrollSpy(sectionIds, { rootMargin = '-45% 0px -50% 0px' } = {}) {
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (elements.length === 0) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) setActiveId(visible.target.id);
            },
            { rootMargin, threshold: 0 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [sectionIds, rootMargin]);

    return activeId;
}

import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import './Modal.css';

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const Modal = ({ onClose, title, children }) => {
    const closeRef = useRef(null);
    const contentRef = useRef(null);
    const prefersReducedMotion = useReducedMotion();

    useLockBodyScroll(true);

    useEffect(() => {
        const previouslyFocused = document.activeElement;
        closeRef.current?.focus();

        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
                return;
            }

            // Trap Tab focus within the modal while it's open.
            if (e.key === 'Tab' && contentRef.current) {
                const focusable = contentRef.current.querySelectorAll(FOCUSABLE_SELECTOR);
                if (focusable.length === 0) return;

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            previouslyFocused?.focus?.();
        };
    }, [onClose]);

    const overlayMotionProps = prefersReducedMotion
        ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
        : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };

    const contentMotionProps = prefersReducedMotion
        ? { initial: { opacity: 1, scale: 1 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 1, scale: 1 } }
        : {
            initial: { scale: 0.94, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.94, opacity: 0 },
            transition: { type: 'spring', damping: 26, stiffness: 320 },
        };

    return createPortal(
        <motion.div
            className="modal-overlay"
            onClick={onClose}
            role="presentation"
            {...overlayMotionProps}
        >
            <motion.div
                ref={contentRef}
                className="modal-content"
                role="dialog"
                aria-modal="true"
                aria-label={title}
                onClick={(e) => e.stopPropagation()}
                {...contentMotionProps}
            >
                <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close">
                    <X size={22} aria-hidden="true" />
                </button>
                {children}
            </motion.div>
        </motion.div>,
        document.body
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Modal;

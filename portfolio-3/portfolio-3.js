    // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Hero animation
        gsap.from('.hero-content', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            delay: 0.3
        });

        // Animate section headers
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out'
            });
        });

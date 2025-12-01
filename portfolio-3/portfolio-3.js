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


        // About section animations
        gsap.from('.about-text', {
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 75%'
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: 'power2.out'
        });

        gsap.from('.about-stats', {
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 75%'
            },
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: 'power2.out'
        });

        // Skills animation
        gsap.utils.toArray('.skill-item').forEach((skill, index) => {
            gsap.from(skill, {
                scrollTrigger: {
                    trigger: skill,
                    start: 'top 85%'
                },
                opacity: 0,
                y: 40,
                duration: 0.7,
                delay: index * 0.15,
                ease: 'power2.out'
            });
        });

        // Projects animation
        gsap.utils.toArray('.project-item').forEach((project, index) => {
            const image = project.querySelector('.project-image');
            const info = project.querySelector('.project-info');

            gsap.from(image, {
                scrollTrigger: {
                    trigger: project,
                    start: 'top 80%'
                },
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                ease: 'power2.out'
            });

            gsap.from(info, {
                scrollTrigger: {
                    trigger: project,
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.2,
                ease: 'power2.out'
            });
        });

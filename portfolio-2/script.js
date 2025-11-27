
        function initAnimations() {
            // Hero section animations
            gsap.from('.hero-title', {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power3.out"
            });
            
            gsap.from('.hero-subtitle', {
                duration: 1,
                y: 50,
                opacity: 0,
                delay: 0.3,
                ease: "power3.out"
            });
            
            gsap.from('.hero-btns', {
                duration: 1,
                y: 50,
                opacity: 0,
                delay: 0.6,
                ease: "power3.out"
            });
            
            gsap.from('.hero-bg', {
                duration: 1.5,
                x: 100,
                opacity: 0,
                delay: 0.5,
                ease: "power3.out"
            });

            // Nav animation
            gsap.from('nav', {
                duration: 1,
                y: -100,
                opacity: 0,
                ease: "power3.out"
            });

            // Section title animations
            gsap.utils.toArray('.section-title').forEach(title => {
                gsap.from(title, {
                    scrollTrigger: {
                        trigger: title,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    },
                    duration: 1,
                    y: 50,
                    opacity: 0,
                    ease: "power3.out"
                });
            });

            // About section animations
            gsap.from('.about-text', {
                scrollTrigger: {
                    trigger: '.about-content',
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse"
                },
                duration: 1,
                x: -50,
                opacity: 0,
                ease: "power3.out"
            });
            
            gsap.from('.about-image', {
                scrollTrigger: {
                    trigger: '.about-content',
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse"
                },
                duration: 1,
                x: 50,
                opacity: 0,
                ease: "power3.out"
            });
            
            gsap.from('.stat', {
                scrollTrigger: {
                    trigger: '.about-stats',
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                duration: 0.8,
                y: 30,
                opacity: 0,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Skills animations
            gsap.utils.toArray('.skill-progress').forEach(progress => {
                const width = progress.getAttribute('data-width');
                
                gsap.to(progress, {
                    scrollTrigger: {
                        trigger: progress,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    },
                    duration: 1.5,
                    width: `${width}%`,
                    ease: "power3.out"
                });
            });

            // Project card animations
            gsap.utils.toArray('.project-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    },
                    duration: 1,
                    y: 50,
                    opacity: 0,
                    delay: i * 0.1,
                    ease: "power3.out"
                });
            });

            // Contact section animations
            gsap.from('.contact-info', {
                scrollTrigger: {
                    trigger: '.contact-container',
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse"
                },
                duration: 1,
                x: -50,
                opacity: 0,
                ease: "power3.out"
            });
            
            gsap.from('.contact-form', {
                scrollTrigger: {
                    trigger: '.contact-container',
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse"
                },
                duration: 1,
                x: 50,
                opacity: 0,
                ease: "power3.out"
            });

            // Scroll to top button
            const scrollTopBtn = document.querySelector('.scroll-top');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.classList.add('active');
                } else {
                    scrollTopBtn.classList.remove('active');
                }
            });
            
            scrollTopBtn.addEventListener('click', () => {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: 0,
                    ease: "power3.inOut"
                });
            });
        }

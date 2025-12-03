     // Initialize particles background
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            },
            retina_detect: true
        });


        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);

        // Custom Cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let followerX = 0;
        let followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor animation
        function animateCursor() {
            // Cursor lag effect
            cursorX += (mouseX - cursorX) * 0.3;
            cursorY += (mouseY - cursorY) * 0.3;
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;

            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Cursor hover effects - Enhanced
        document.querySelectorAll('a, .menu-toggle, .project-item, .skill-item, .award-item').forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { scale: 2, duration: 0.3 });
                gsap.to(cursorFollower, { scale: 1.5, duration: 0.3 });
            });
            
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { scale: 1, duration: 0.3 });
                gsap.to(cursorFollower, { scale: 1, duration: 0.3 });
            });
        });


        // Loader Animation
        const loaderProgress = document.querySelector('.loader-progress');
        const loader = document.querySelector('.loader');

        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += Math.random() * 10 + 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressInterval);
                
                gsap.to(loaderProgress, {
                    width: '100%',
                    duration: 0.5,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        gsap.to('.loader-text', {
                            opacity: 0,
                            y: -20,
                            duration: 0.5
                        });
                        gsap.to(loader, {
                            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
                            duration: 1.2,
                            ease: 'power4.inOut',
                            delay: 0.3,
                            onComplete: () => {
                                loader.style.display = 'none';
                                initAnimations();
                            }
                        });
                    }
                });
            } else {
                gsap.to(loaderProgress, {
                    width: `${progress}%`,
                    duration: 0.3,
                    ease: 'power1.out'
                });
            }
        }, 150);



        // Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const fullscreenMenu = document.querySelector('.fullscreen-menu');
        const menuLinks = document.querySelectorAll('.menu-links li');
        let menuOpen = false;

        menuToggle.addEventListener('click', () => {
            menuOpen = !menuOpen;
            
            if (menuOpen) {
                // Open menu
                fullscreenMenu.style.visibility = 'visible';
                
                gsap.to(fullscreenMenu, {
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power3.inOut'
                });
                
                gsap.to('.menu-line:nth-child(1)', {
                    rotation: 45,
                    y: 7,
                    duration: 0.4,
                    ease: 'power3.inOut'
                });
                
                gsap.to('.menu-line:nth-child(2)', {
                    opacity: 0,
                    duration: 0.2
                });
                
                gsap.to('.menu-line:nth-child(3)', {
                    rotation: -45,
                    y: -7,
                    duration: 0.4,
                    ease: 'power3.inOut'
                });
                
                // Animate menu items
                gsap.fromTo('.menu-links li', 
                    {
                        y: 100,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: 'power3.out',
                        delay: 0.2
                    }
                );
                
            } else {
                // Close menu
                gsap.to('.menu-links li', {
                    y: -50,
                    opacity: 0,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: 'power3.in'
                });
                
                gsap.to(fullscreenMenu, {
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.3,
                    ease: 'power3.inOut',
                    onComplete: () => {
                        fullscreenMenu.style.visibility = 'hidden';
                    }
                });
                
                gsap.to('.menu-line:nth-child(1)', {
                    rotation: 0,
                    y: 0,
                    duration: 0.4,
                    ease: 'power3.inOut'
                });
                
                gsap.to('.menu-line:nth-child(2)', {
                    opacity: 1,
                    duration: 0.2,
                    delay: 0.1
                });
                
                gsap.to('.menu-line:nth-child(3)', {
                    rotation: 0,
                    y: 0,
                    duration: 0.4,
                    ease: 'power3.inOut'
                });
            }
        });

        // Close menu on link click
        menuLinks.forEach(link => {
            link.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.querySelector('a').getAttribute('href');
                
                menuOpen = false;
                
                gsap.to('.menu-links li', {
                    y: -50,
                    opacity: 0,
                    duration: 0.4,
                    stagger: 0.05
                });
                
                gsap.to(fullscreenMenu, {
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.2,
                    onComplete: () => {
                        fullscreenMenu.style.visibility = 'hidden';
                        
                        // Scroll to section
                        const target = document.querySelector(targetId);
                        if (target) {
                            gsap.to(window, {
                                duration: 1.5,
                                scrollTo: {
                                    y: target,
                                    offsetY: 0
                                },
                                ease: 'power3.inOut'
                            });
                        }
                    }
                });
                
                gsap.to('.menu-line:nth-child(1)', {
                    rotation: 0,
                    y: 0,
                    duration: 0.4
                });
                
                gsap.to('.menu-line:nth-child(2)', {
                    opacity: 1,
                    duration: 0.2
                });
                
                gsap.to('.menu-line:nth-child(3)', {
                    rotation: 0,
                    y: 0,
                    duration: 0.4
                });
            });
        });


        // Initialize Animations
        function initAnimations() {
            // Hero animations
            const heroTl = gsap.timeline();
            
            heroTl
                .from('.hero-label', {
                    opacity: 0,
                    y:30,
                    duration: 1,
                    ease: 'power3.out'
                })
                .from('.word', {
                    y: '60%',
                    duration: 1.2,
                    stagger: 0.15,
                    ease: 'power4.out'
                }, '-=0.7')
                .from('.hero-subtitle', {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    ease: 'power3.out'
                }, '-=0.6')
                .from('.scroll-down', {
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                }, '-=0.5');
            
            // Floating text parallax
            gsap.to('.floating-text', {
                yPercent: 50,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            });
            
            // Section animations
            gsap.utils.toArray('.section-label').forEach(label => {
                gsap.from(label, {
                    opacity: 0,
                    x: -30,
                    duration: 1,
                    scrollTrigger: {
                        trigger: label,
                        start: 'top 85%',
                        end: 'top 65%',
                        scrub: 1
                    }
                });
            });
            
            gsap.utils.toArray('.section-title').forEach(title => {
                gsap.from(title, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: 1
                    }
                });
            });
            
            // About section
            ScrollTrigger.create({
                trigger: '.about-image-wrapper',
                start: 'top 70%',
                onEnter: () => {
                    gsap.to('.image-overlay', {
                        scaleY: 0,
                        duration: 1.2,
                        ease: 'power4.inOut'
                    });
                }
            });
            
            gsap.utils.toArray('.about-text p').forEach((p, i) => {
                gsap.from(p, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: p,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: 1
                    }
                });
            });
            
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

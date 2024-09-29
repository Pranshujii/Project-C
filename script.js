const slider = document.querySelector('.testimonial-slider');
        const navDots = document.querySelectorAll('.nav-dot');
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');
        let currentIndex = 0;
        const totalSlides = document.querySelectorAll('.testimonial').length;

        function showTestimonial(index) {
            slider.style.transform = `translateX(-${index * 100}%)`;
            navDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showTestimonial(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showTestimonial(currentIndex);
        }

        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showTestimonial(currentIndex);
            });
        });

        arrowLeft.addEventListener('click', prevSlide);
        arrowRight.addEventListener('click', nextSlide);

        function autoSlide() {
            nextSlide();
        }

        let intervalId = setInterval(autoSlide, 5000);

        const container = document.querySelector('.testimonial-container');
        container.addEventListener('mouseenter', () => {
            clearInterval(intervalId);
        });
        container.addEventListener('mouseleave', () => {
            intervalId = setInterval(autoSlide, 5000);
        });
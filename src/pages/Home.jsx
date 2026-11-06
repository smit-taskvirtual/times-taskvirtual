import { useEffect, useRef, useState } from 'react';

const Home = () => {
    const heroRef = useRef(null);
    const headerRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const hero = heroRef.current;
        const header = headerRef.current;
        if (!hero || !header) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsScrolled(!entry.isIntersecting);
            },
            { root: null, threshold: 0 }
        );

        observer.observe(hero);
        const initialScrolled = hero.getBoundingClientRect().bottom <= 0;
        setIsScrolled(initialScrolled);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const $ = window.jQuery;
        const responsiveMenu = document.querySelector('.responsive-menu');

        if (!$?.fn?.slicknav || !responsiveMenu || responsiveMenu.children.length) return;

        $('#menu').slicknav({
            label: '',
            prependTo: '.responsive-menu'
        });
    }, []);

    useEffect(() => {
        if (window.Swiper && document.querySelector('.testimonial-company-slider .swiper')) {
            new window.Swiper('.testimonial-company-slider .swiper', {
                slidesPerView: 2,
                speed: 4000,
                spaceBetween: 30,
                loop: true,
                freeMode: true,
                freeModeMomentum: false,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 5,
                    }
                }
            });
        }
    }, []);

    return <>
        <header class={`main-header${isScrolled ? ' is-scrolled' : ''}`} ref={headerRef}>
            <div class="header-sticky">
                <nav class="navbar navbar-expand-lg">
                    <div class="container">

                        <a class="navbar-brand" href="index-2.html">
                            <img class="navbar-brand-logo" src="images/times-logo-horizontal.png" alt="Logo" />
                        </a>


                        <div class="collapse navbar-collapse main-menu">
                            <div class="nav-menu-wrapper">
                                <ul class="navbar-nav mr-auto" id="menu">
                                    <li class="nav-item"><a class="nav-link" href="index-2.html">Home</a>
                                        {/* <ul>
                                            <li class="nav-item"><a class="nav-link" href="index.html">Home - Image</a></li>
                                            <li class="nav-item"><a class="nav-link" href="index-video.html">Home - Video</a></li>
                                            <li class="nav-item"><a class="nav-link" href="index-slider.html">Home - Slider</a></li>
                                        </ul> */}
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
                                    <li class="nav-item"><a class="nav-link" href="services.html">Products & Services</a></li>
                                    <li class="nav-item"><a class="nav-link" href="blog.html">Career</a></li>
                                    <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
                                    {/* <li class="nav-item submenu"><a class="nav-link" href="#">Pages</a>
                                        <ul>
                                            <li class="nav-item"><a class="nav-link" href="service-single.html">Service Details</a></li>
                                            <li class="nav-item"><a class="nav-link" href="blog-single.html">Blog Details</a></li>
                                            <li class="nav-item"><a class="nav-link" href="project-single.html">Project Details</a></li>
                                            <li class="nav-item"><a class="nav-link" href="team.html">Team</a></li>
                                            <li class="nav-item"><a class="nav-link" href="team-single.html">Team Details</a></li>
                                            <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing Plan</a></li>
                                            <li class="nav-item"><a class="nav-link" href="testimonial.html">Testimonials</a></li>
                                            <li class="nav-item"><a class="nav-link" href="image-gallery.html">Image Gallery</a></li>
                                            <li class="nav-item"><a class="nav-link" href="video-gallery.html">Video Gallery</a></li>
                                            <li class="nav-item"><a class="nav-link" href="faqs.html">FAQs</a></li>
                                            <li class="nav-item"><a class="nav-link" href="404.html">404</a></li>
                                        </ul>
                                    </li> */}
                                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>

                        </div>

                        <div class="header-quote-btn">
                            <a href="contact.html" class="btn-default"><span>Get Quote</span></a>
                        </div>

                        <div class="navbar-toggle"></div>
                    </div>
                </nav>
                <div class="responsive-menu"></div>
            </div>
        </header>



        <div class="hero parallaxie" ref={heroRef}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">

                        <div class="hero-content">

                            <div class="section-title dark-section">
                                <h3 class="wow fadeInUp">Since 2018 • Infrastructure Excellence</h3>
                                <h1 class="text-anime-style-2" data-cursor="-opaque">Crafting Precision, <span>Shaping Reliability</span></h1>
                                <p class="wow fadeInUp" data-wow-delay="0.25s">Your trusted partner in manufacturing MS Spiral (HSAW) & LSAW Pipes by conventional method for India’s critical water and irrigation projects. We bring the factory to your project site.</p>
                            </div>



                            <div class="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                                <a href="contact.html" class="btn-default"><span>request a quote</span></a>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-12">

                        <div class="excellence-innovating-list wow fadeInUp" data-wow-delay="0.6s">
                            <ul>
                                <li>MS Spiral (HSAW) Pipes</li>
                                <li>LSAW Pipes</li>
                                <li>On-Site Manufacturing Plants</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>



        <div class="about-us">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">

                        <div class="about-image">

                            <div class="about-img-1">
                                <figure class="image-anime">
                                    <img src="images/about-img-1.jpg" alt="" />
                                </figure>
                            </div>



                            <div class="about-img-2">
                                <figure class="image-anime">
                                    <img src="images/about-img-2.jpg" alt="" />
                                </figure>
                            </div>



                            <div class="company-experience">
                                <div class="company-experience-counter">
                                    <h2><span class="counter">35</span>+</h2>
                                </div>
                                <div class="company-experience-content">
                                    <p>years of legacy</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-6">

                        <div class="about-content">

                            <div class="section-title">
                                <h3 class="wow fadeInUp">about times</h3>
                                <h2 class="text-anime-style-2" data-cursor="-opaque">Building India's <span>Water Infrastructure</span></h2>
                                <p class="wow fadeInUp" data-wow-delay="0.25s">TIMES is a dynamic infrastructure development company committed to advancing India’s critical water and irrigation sectors. Since 2018, we have grown to become a prominent player in Mild Steel (MS) pipe manufacturing under the expert guidance of Mr. PS Singhania, with over 35 yrs. Exp. in the manufacturing sector.</p>
                            </div>


                            <div class="about-content-body">
                                <div class="row align-items-center">
                                    <div class="col-md-6">

                                        <div class="about-list-btn">

                                            <div class="about-content-list wow fadeInUp" data-wow-delay="0.5s">
                                                <ul>
                                                    <li>safety first</li>
                                                    <li>quality excellence</li>
                                                    <li>reliable delivery</li>
                                                    <li>innovation</li>
                                                </ul>
                                            </div>



                                            <div class="about-content-btn wow fadeInUp" data-wow-delay="0.75s">
                                                <a href="about.html" class="btn-default"><span>more about us</span></a>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="col-md-6">

                                        <div class="genuine-rating-counter">

                                            <div class="about-counter-item">
                                                <div class="about-counter">
                                                    <h2><span class="counter">5</span></h2>
                                                </div>
                                                <div class="genuine-rating">
                                                    <ul>
                                                        <li>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="genuine-rating-counter-content">
                                                    <p>manufacturing units</p>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>



        <div class="our-services parallaxie">
            <div class="container">
                <div class="row section-row align-items-center">
                    <div class="col-lg-6">

                        <div class="section-title dark-section">
                            <h3 class="wow fadeInUp">products & services</h3>
                            <h2 class="text-anime-style-2" data-cursor="-opaque">Integrated manufacturing <span>and coating solutions</span></h2>
                        </div>

                    </div>

                    <div class="col-lg-6">

                        <div class="section-title-content dark-section wow fadeInUp" data-wow-delay="0.25s">
                            <p>Our mission is to deliver high-quality MS pipe solutions by setting up efficient on-site manufacturing plants to ensure Reliability, Delivery & Quality. Explore our integrated manufacturing capabilities and coating solutions.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>



        <div class="our-services-list">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">

                        <div class="services-list-box">

                            <div class="service-item">
                                <div class="icon-box">
                                    <img src="images/icon-service-1.svg" alt="" />
                                </div>

                                <div class="service-body">
                                    <h3>MS spiral (HSAW) pipes</h3>
                                </div>

                                <div class="service-footer">
                                    <a href="service-single.html" class="service-btn">
                                        <img src="images/arrow-dark.svg" alt="" />
                                    </a>
                                </div>
                            </div>



                            <div class="service-item">
                                <div class="icon-box">
                                    <img src="images/icon-service-2.svg" alt="" />
                                </div>

                                <div class="service-body">
                                    <h3>LSAW pipes</h3>
                                </div>

                                <div class="service-footer">
                                    <a href="service-single.html" class="service-btn">
                                        <img src="images/arrow-dark.svg" alt="" />
                                    </a>
                                </div>
                            </div>



                            <div class="service-item">
                                <div class="icon-box">
                                    <img src="images/icon-service-3.svg" alt="" />
                                </div>

                                <div class="service-body">
                                    <h3>on-site manufacturing plants</h3>
                                </div>

                                <div class="service-footer">
                                    <a href="service-single.html" class="service-btn">
                                        <img src="images/arrow-dark.svg" alt="" />
                                    </a>
                                </div>
                            </div>



                            <div class="service-item">
                                <div class="icon-box">
                                    <img src="images/icon-service-4.svg" alt="" />
                                </div>

                                <div class="service-body">
                                    <h3>pipe coating solutions</h3>
                                </div>

                                <div class="service-footer">
                                    <a href="service-single.html" class="service-btn">
                                        <img src="images/arrow-dark.svg" alt="" />
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>



        <div class="our-story">
            <div class="container">
                <div class="row section-row align-items-center">
                    <div class="col-lg-6">

                        <div class="section-title">
                            <h3 class="wow fadeInUp">our vision</h3>
                            <h2 class="text-anime-style-2" data-cursor="-opaque">Innovative engineering solutions <span>delivering excellence</span></h2>
                        </div>

                    </div>

                    <div class="col-lg-6">

                        <div class="our-story-header-img">
                            <figure class=" image-anime">
                                <img src="images/our-story-header-img-1.jpg" alt="" />
                            </figure>

                            <figure class=" image-anime">
                                <img src="images/our-story-header-img-2.jpg" alt="" />
                            </figure>
                        </div>

                    </div>
                </div>

                <div class="row align-items-center">
                    <div class="col-lg-6">

                        <div class="our-story-img">
                            <figure class=" image-anime">
                                <img src="images/our-story-img.jpg" alt="" />
                            </figure>
                        </div>

                    </div>

                    <div class="col-lg-6">
                        <div class="our-story-content">
                            <div class="our-story-content-body">
                                <p>To be the most trusted company providing innovative engineering solutions and delivering excellence across industries.</p>
                            </div>

                            <div class="our-story-counters">

                                <div class="our-story-counter">
                                    <h3><span class="counter">20</span>+</h3>
                                    <p>major projects & orders completed</p>
                                </div>



                                <div class="our-story-counter">
                                    <h3><span class="counter">8</span>+</h3>
                                    <p>states covered</p>
                                </div>



                                <div class="our-story-counter">
                                    <h3><span class="counter">210</span>k</h3>
                                    <p>MT annual capacity</p>
                                </div>

                            </div>


                            <div class="our-story-intro-video">

                                <div class="our-story-client-img">

                                    <div class="client-image">
                                        <figure class="image-anime ">
                                            <img src="images/story-client-img-1.jpg" alt="" />
                                        </figure>
                                    </div>



                                    <div class="client-image">
                                        <figure class="image-anime ">
                                            <img src="images/story-client-img-2.jpg" alt="" />
                                        </figure>
                                    </div>



                                    <div class="client-image">
                                        <figure class="image-anime ">
                                            <img src="images/story-client-img-3.jpg" alt="" />
                                        </figure>
                                    </div>

                                </div>



                                <div class="intro-video-box">

                                    <div class="video-play-button">
                                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" class="popup-video" data-cursor-text="Play">
                                            <i class="fa-solid fa-play"></i>
                                        </a>
                                        <p>watch intro</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="what-we-do">
            <div class="container-fluid">
                <div class="row no-gutters">
                    <div class="col-lg-6">

                        <div class="what-we-do-content">

                            <div class="section-title dark-section">
                                <h3 class="wow fadeInUp">core values</h3>
                                <h2 class="text-anime-style-2" data-cursor="-opaque">Principles that drive <span>every project</span></h2>
                            </div>



                            <div class="what-we-do-list">
                                <div class="what-we-do-list-box-1">

                                    <div class="what-we-do-item">
                                        <div class="icon-box">
                                            <img src="images/icon-who-we-do-1.svg" alt="" />
                                        </div>
                                        <div class="what-we-item-content">
                                            <h3>safety first</h3>
                                            <p>We prioritize the health and safety of our employees, clients and other stakeholders.</p>
                                        </div>
                                    </div>



                                    <div class="what-we-do-item">
                                        <div class="icon-box">
                                            <img src="images/icon-who-we-do-2.svg" alt="" />
                                        </div>
                                        <div class="what-we-item-content">
                                            <h3>quality excellence</h3>
                                            <p>No compromise in quality of all our products & services.</p>
                                        </div>
                                    </div>

                                </div>

                                <div class="what-we-do-list-box-2">

                                    <div class="what-we-do-item">
                                        <div class="icon-box">
                                            <img src="images/icon-who-we-do-3.svg" alt="" />
                                        </div>
                                        <div class="what-we-item-content">
                                            <h3>reliable delivery</h3>
                                            <p>We ensure timely, consistent and efficient execution of every project.</p>
                                        </div>
                                    </div>



                                    <div class="what-we-do-item">
                                        <div class="icon-box">
                                            <img src="images/icon-who-we-do-4.svg" alt="" />
                                        </div>
                                        <div class="what-we-item-content">
                                            <h3>innovation</h3>
                                            <p>We embrace change and seek creative solutions to remain at the forefront.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>



                            <div class="what-we-do-footer">
                                <p>Let’s work together to create sustainable <span>and innovative construction solutions</span></p>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-6">

                        <div class="what-we-do-image">
                            <figure class="image-anime">
                                <img src="images/what-we-do-image.jpg" alt="" />
                            </figure>


                            <div class="contact-now-circle">
                                <img src="images/contact-now-circle.svg" alt="" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>



        <div class="our-work">
            <div class="container">
                <div class="row section-row align-items-center">
                    <div class="col-lg-6">

                        <div class="section-title">
                            <h3 class="wow fadeInUp">our projects</h3>
                            <h2 class="text-anime-style-2" data-cursor="-opaque">Trusted for critical <span>pipeline infrastructure</span></h2>
                        </div>

                    </div>

                    <div class="col-lg-6">

                        <div class="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                            <p>Trusted by India’s leading EPC contractors for critical pipeline infrastructure across multiple states.</p>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">

                        <div class="our-Project-nav wow fadeInUp" data-wow-delay="0.4s">
                            <ul>
                                <li><a href="#" class="active-btn" data-filter="*">all</a></li>
                                <li><a href="#" data-filter=".manufacturing">fabrication</a></li>
                                <li><a href="#" data-filter=".automation">guniting & coating</a></li>
                                <li><a href="#" data-filter=".sustainability">irrigation</a></li>
                                <li><a href="#" data-filter=".development">water supply</a></li>
                                <li><a href="#" data-filter=".infrastructure">pipeline</a></li>
                            </ul>
                        </div>

                    </div>

                    <div class="col-lg-12">

                        <div class="row project-item-boxes align-items-center">
                            <div class="col-md-6 project-item-box manufacturing automation">

                                <div class="project-item wow fadeInUp">
                                    <div class="project-image">
                                        <figure class="image-anime">
                                            <img src="images/project-1.jpg" alt="" />
                                        </figure>
                                    </div>

                                    <div class="project-tag">
                                        <a href="project-single.html">fabrication</a>
                                    </div>

                                    <div class="project-content">
                                        <h3><a href="project-single.html">Satna Bansagar 2 Multi-Village Scheme</a></h3>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-6 project-item-box automation sustainability development infrastructure">

                                <div class="project-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="project-image">
                                        <figure class="image-anime">
                                            <img src="images/project-2.jpg" alt="" />
                                        </figure>
                                    </div>

                                    <div class="project-tag">
                                        <a href="project-single.html">guniting & coating</a>
                                    </div>

                                    <div class="project-content">
                                        <h3><a href="project-single.html">Binjalwara & Jawar Micro Lift Irrigation Schemes</a></h3>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-6 project-item-box sustainability infrastructure">

                                <div class="project-item wow fadeInUp" data-wow-delay="0.4s">
                                    <div class="project-image">
                                        <figure class="image-anime">
                                            <img src="images/project-3.jpg" alt="" />
                                        </figure>
                                    </div>

                                    <div class="project-tag">
                                        <a href="project-single.html">irrigation</a>
                                    </div>

                                    <div class="project-content">
                                        <h3><a href="project-single.html">Niwali Micro Lift Irrigation Project</a></h3>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-6 project-item-box manufacturing development">

                                <div class="project-item wow fadeInUp" data-wow-delay="0.6s">
                                    <div class="project-image">
                                        <figure class="image-anime">
                                            <img src="images/project-4.jpg" alt="" />
                                        </figure>
                                    </div>

                                    <div class="project-tag">
                                        <a href="project-single.html">water supply</a>
                                    </div>

                                    <div class="project-content">
                                        <h3><a href="project-single.html">Sahibganj Rural Water Supply Scheme</a></h3>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>



        <div class="our-process">
            <div class="container">
                <div class="row section-row align-items-center">
                    <div class="col-lg-6">

                        <div class="section-title">
                            <h3 class="wow fadeInUp">our approach</h3>
                            <h2 class="text-anime-style-2" data-cursor="-opaque">We bring the factory <span>to your project site</span></h2>
                        </div>

                    </div>

                    <div class="col-lg-6">

                        <div class="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                            <p>We can set up manufacturing facilities at your project location for faster delivery & reduced logistic cost, ensuring Reliability, Delivery & Quality.</p>
                        </div>

                    </div>
                </div>

                <div class="row align-items-center">
                    <div class="col-lg-6">

                        <div class="our-process-image">
                            <figure class="image-anime ">
                                <img src="images/our-process-image.jpg" alt="" />
                            </figure>
                        </div>

                    </div>

                    <div class="col-lg-6">

                        <div class="process-steps-box">

                            <div class="process-step-item wow fadeInUp">
                                <div class="process-step-no">
                                    <h2>01</h2>
                                </div>
                                <div class="process-step-content">
                                    <h3>reliability</h3>
                                    <p>Efficient on-site manufacturing plants set up at your project location.</p>
                                </div>
                            </div>



                            <div class="process-step-item active wow fadeInUp" data-wow-delay="0.25s">
                                <div class="process-step-no">
                                    <h2>02</h2>
                                </div>
                                <div class="process-step-content">
                                    <h3>delivery</h3>
                                    <p>Faster delivery with timely, consistent and efficient execution of every project.</p>
                                </div>
                            </div>



                            <div class="process-step-item wow fadeInUp" data-wow-delay="0.5s">
                                <div class="process-step-no">
                                    <h2>03</h2>
                                </div>
                                <div class="process-step-content">
                                    <h3>quality</h3>
                                    <p>No compromise in quality, with reduced logistic cost for your project.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>



        <div class="our-pricing">
            <div class="container">
                <div class="row section-row align-items-center">
                    <div class="col-lg-6">

                        <div class="section-title">
                            <h3 class="wow fadeInUp">plants location</h3>
                            <h2 class="text-anime-style-2" data-cursor="-opaque">Need a plant <span>near your project?</span></h2>
                        </div>

                    </div>

                    <div class="col-lg-6">

                        <div class="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                            <p>We can set up manufacturing facilities at your project location for faster delivery & reduced logistic cost.</p>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6">

                        <div class="pricing-box box-1 wow fadeInUp">

                            <div class="pricing-title">
                                <h2><sup></sup>5<sub> units</sub></h2>
                                <h3>manufacturing units</h3>
                            </div>



                            <div class="pricing-list">
                                <ul>
                                    <li>MS Spiral (HSAW) Pipes</li>
                                    <li>LSAW Pipes</li>
                                    <li>Conventional Manufacturing Method</li>
                                    <li>Integrated Coating Solutions</li>
                                </ul>
                            </div>



                            <div class="pricing-btn">
                                <a href="#" class="btn-default"><span>view details</span></a>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-6">

                        <div class="pricing-box highlighted-box box-2 wow fadeInUp" data-wow-delay="0.2s">

                            <div class="pricing-title">
                                <h2><sup></sup>2,10,000<sub> MT</sub></h2>
                                <h3>annual capacity</h3>
                            </div>



                            <div class="pricing-list">
                                <ul>
                                    <li>Water Supply Projects</li>
                                    <li>Micro Lift Irrigation Schemes</li>
                                    <li>Diameter Range 306 – 2400 mm</li>
                                    <li>Thickness Range 3 – 22 mm</li>
                                </ul>
                            </div>



                            <div class="pricing-btn">
                                <a href="#" class="btn-default btn-highlighted"><span>view details</span></a>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-6">

                        <div class="pricing-box box-3 wow fadeInUp" data-wow-delay="0.4s">

                            <div class="pricing-title">
                                <h2><sup></sup>Pan India<sub></sub></h2>
                                <h3>delivery network</h3>
                            </div>



                            <div class="pricing-list">
                                <ul>
                                    <li>8+ States Covered</li>
                                    <li>20+ Major Projects & Orders Completed</li>
                                    <li>On-Site Plant Setup</li>
                                    <li>Faster Delivery & Reduced Logistic Cost</li>
                                </ul>
                            </div>



                            <div class="pricing-btn">
                                <a href="#" class="btn-default"><span>view details</span></a>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-12">

                        <div class="pricing-benefit-list wow fadeInUp" data-wow-delay="0.6s">
                            <ul>
                                <li><img src="images/icon-pricing-benefit-1.svg" alt="" />Since 2018</li>
                                <li><img src="images/icon-pricing-benefit-2.svg" alt="" />35+ years of legacy</li>
                                <li><img src="images/icon-pricing-benefit-3.svg" alt="" />Pan India delivery network </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>



        <div class="our-testimonial">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">

                        <div class="our-testimonial-image">
                            <figure class="image-anime ">
                                <img src="images/pages/home/projects-location-map.png" alt="" class="no-zoom" />
                            </figure>
                        </div>

                    </div>

                    <div class="col-lg-6">

                        <div class="our-testimonial-content">

                            <div class="section-title">
                                <h3 class="wow fadeInUp">trusted by industry leaders</h3>
                                <h2 class="text-anime-style-3" data-cursor="-opaque">India's leading <span>infrastructure companies</span></h2>
                            </div>



                            <div class="testimonial-slider">
                                <div class="swiper">
                                    <div class="swiper-wrapper" data-cursor-text="Drag">

                                        <div class="swiper-slide">
                                            <div class="testimonial-item">
                                                <div class="testimonial-rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>

                                                <div class="testimonial-content">
                                                    <p>Partnering with the nation’s top EPC contractors to deliver critical water infrastructure.</p>
                                                </div>

                                                <div class="testimonial-body">
                                                    <div class="author-image">
                                                        <figure class="image-anime">
                                                            <img src="images/author-1.jpg" alt="" />
                                                        </figure>
                                                    </div>
                                                    <div class="author-content">
                                                        <h3>Larsen & Toubro Limited</h3>
                                                        <p>EPC Partner</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="swiper-slide">
                                            <div class="testimonial-item">
                                                <div class="testimonial-rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>

                                                <div class="testimonial-content">
                                                    <p>Trusted by India’s leading EPC contractors for critical pipeline infrastructure.</p>
                                                </div>

                                                <div class="testimonial-body">
                                                    <div class="author-image">
                                                        <figure class="image-anime">
                                                            <img src="images/author-2.jpg" alt="" />
                                                        </figure>
                                                    </div>
                                                    <div class="author-content">
                                                        <h3>KEC International Limited</h3>
                                                        <p>EPC Partner</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="testimonial-btn">
                                        <div class="testimonial-button-prev"></div>
                                        <div class="testimonial-button-next"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-12">

                        <div class="testimonial-company-slider">
                            <div class="swiper">
                                <div class="swiper-wrapper">

                                    <div class="swiper-slide">
                                        <div class="company-logo">
                                            <img src="images/pages/home/company-icons/bac-infratech.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="company-logo">
                                            <img src="images/pages/home/company-icons/dilipbuildcon.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="company-logo">
                                            <img src="images/pages/home/company-icons/gaja-engineering.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="company-logo">
                                            <img src="images/pages/home/company-icons/GVPR.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="company-logo">
                                            <img src="images/pages/home/company-icons/icinfra.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="company-logo">
                                            <img src="images/pages/home/company-icons/jwill.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="company-logo">
                                            <img src="images/pages/home/company-icons/kalpa-taru.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="company-logo">
                                            <img src="images/pages/home/company-icons/karan-development.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="company-logo">
                                            <img src="images/pages/home/company-icons/kec.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="company-logo">
                                            <img src="images/pages/home/company-icons/larsen-tourbo.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="company-logo">
                                            <img src="images/pages/home/company-icons/ncc.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="company-logo">
                                            <img src="images/pages/home/company-icons/vensar.png" alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="our-blog">
            <div class="container">
                <div class="row section-row align-items-center">
                    <div class="col-lg-5">

                        <div class="section-title">
                            <h3 class="wow fadeInUp">get in touch</h3>
                            <h2 class="text-anime-style-2" data-cursor="-opaque">Let’s work <span>together</span></h2>
                        </div>

                    </div>

                    <div class="col-lg-7">

                        <div class="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                            <p>Explore our services and discover how we can make a difference in your next project.</p>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">

                        <div class="post-item wow fadeInUp">

                            <div class="post-featured-image">
                                <figure>
                                    <a href="blog-single.html" class="image-anime" data-cursor-text="View">
                                        <img src="images/blog-1.jpg" alt="" />
                                    </a>
                                </figure>
                            </div>



                            <div class="post-item-body">

                                <div class="post-item-content">
                                    <h2><a href="blog-single.html">Let’s work together to create sustainable and innovative construction solutions</a></h2>
                                </div>



                                <div class="post-item-btn">
                                    <a href="blog-single.html"><img src="images/arrow-white.svg" alt="" /></a>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col-md-6">

                        <div class="post-item wow fadeInUp">

                            <div class="post-featured-image">
                                <figure>
                                    <a href="blog-single.html" class="image-anime" data-cursor-text="View">
                                        <img src="images/blog-2.jpg" alt="" />
                                    </a>
                                </figure>
                            </div>



                            <div class="post-item-body">

                                <div class="post-item-content">
                                    <h2><a href="blog-single.html">We welcome the opportunity to contribute to your project’s success</a></h2>
                                </div>



                                <div class="post-item-btn">
                                    <a href="blog-single.html"><img src="images/arrow-white.svg" alt="" /></a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>



        <footer class="main-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">

                        <div class="footer-header">

                            <div class="section-title dark-section">
                                <h2 class="text-anime-style-2" data-cursor="-opaque">Ready to Start Your Project?</h2>
                                <p>Partner with us for your next pipeline infrastructure project. Our team is ready to deliver excellence.</p>
                            </div>



                            <div class="footer-contact-circle">
                                <img src="images/contact-now-circle.svg" alt="" />
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-6 col-md-12">

                        <div class="about-footer">

                            <div class="footer-logo">
                                <img src="images/times_logo_big_size.png" alt="Logo" />
                            </div>



                            <div class="about-footer-content">
                                <p>Supporting India’s Critical Water and Irrigation Projects Through MS Pipe Manufacturing and Coating Solutions.</p>
                            </div>



                            <div class="footer-social-links">
                                <ul>
                                    <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-2 col-md-4 col-6">

                        <div class="footer-links">
                            <h3>quick links</h3>
                            <ul>
                                <li><a href="index.html">home</a></li>
                                <li><a href="about.html">about us</a></li>
                                <li><a href="services.html">products & services</a></li>
                                <li><a href="blog.html">projects</a></li>
                            </ul>
                        </div>

                    </div>

                    <div class="col-lg-2 col-md-4 col-6">

                        <div class="footer-links">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">career</a></li>
                                <li><a href="#">get quote</a></li>
                                <li><a href="#">plants location</a></li>
                                <li><a href="contact.html">contact us</a></li>
                            </ul>
                        </div>

                    </div>

                    <div class="col-lg-2 col-md-4 col-12">

                        <div class="footer-links">
                            <h3>Contact Info</h3>
                            <ul>
                                <li>Kolkata, India</li>
                                <li>marketing@times.net.in</li>
                                <li>www.times.net.in</li>
                            </ul>
                        </div>

                    </div>
                </div>


                <div class="footer-copyright">
                    <div class="row align-items-center">
                        <div class="col-lg-12">

                            <div class="footer-copyright-text">
                                <p>© 2026 TIMES. All rights reserved.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </footer>

    </>;
};

export default Home;

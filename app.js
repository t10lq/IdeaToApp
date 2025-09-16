// Ahmed Ibrahim Portfolio - Modern JavaScript Application
// Professional Portfolio with Arabic RTL Support - FIXED Navigation

class AhmedPortfolio {
    constructor() {
        this.data = {
            projects: [
                {
                    title: "EverPic",
                    description: "أداة برمجية تقوم بتحويل أي صورة بأي صيغة إلى رابط مباشر قابل للاستخدام في المواقع والتطبيقات، مما يسهل مشاركة الصور على الإنترنت دون الحاجة إلى رفعها بشكل تقليدي.",
                    category: "تطوير ويب",
                    image: "https://everpic-plus.preview.emergentagent.com/api/f/F0V1ChcY",
                    link: "https://everpic-plus.preview.emergentagent.com/",
                    tech: ["Python", "Flask / FastAPI", "HTML / CSS / JavaScript", "Amazon S3"],
                    features: [
                        "دعم جميع صيغ الصور الشائعة (JPEG, PNG, GIF, WebP…)",
                        "إنشاء روابط مباشرة قابلة للنشر في المواقع والتطبيقات",
                        "واجهة مستخدم بسيطة لتحميل الصور والحصول على الرابط فوراً",
                        "إمكانية دمج الخدمة في أنظمة ومشاريع أخرى"
                    ],
                    challenges: "ضمان استقرار وسرعة الروابط مع أحجام الصور المختلفة، وإدارة التخزين بشكل آمن ومنع الروابط المنتهية الصلاحية",
                    results: "تسهيل مشاركة الصور عبر الإنترنت وتحسين تجربة المستخدم، مع قابلية دمج مرنة مع أنظمة متعددة"
                },
                {
                    title: "منصة التجارة الإلكترونية – TURBO STORE",
                    description: "متجر إلكتروني متكامل متخصص في بيع اشتراكات الألعاب الرقمية مثل Xbox Game Pass Ultimate، مع قسم للألعاب الرقمية وسلة ذكية تحفظ المنتجات.",
                    category: "تطوير ويب",
                    image: "https://everpic-plus.preview.emergentagent.com/api/f/Sk6Xkwej",
                    link: "https://turbo-store-8b47e.web.app/",
                    status: "قيد التطوير",
                    tech: ["HTML", "CSS", "JavaScript (React)", "Node.js", "MongoDB", "Stripe API"],
                    features: [
                        "واجهة مستخدم حديثة وجذابة ومتجاوبة",
                        "نظام دفع آمن وسريع يدعم فيزا وطرق دفع متعددة",
                        "إدارة المنتجات والباقات بطريقة ديناميكية",
                        "سلة ذكية تحفظ المحتوى حتى بعد إغلاق المتصفح",
                        "قسم خاص بعرض الألعاب الرقمية بجانب الاشتراكات",
                        "استلام الأكواد الرقمية فور إتمام الدفع",
                        "تجربة مستخدم سلسة ومبسطة للاعبين"
                    ],
                    challenges: "تطوير سلة ذكية مع نافذة دفع آمنة وسريعة تضمن وصول الأكواد الرقمية فورًا، مع دمج قسم الألعاب بطريقة سهلة للتصفح والشراء",
                    results: "تسهيل شراء الاشتراكات والألعاب الرقمية، زيادة رضا العملاء، وتحسين سرعة واستقرار عملية الشراء"
                }
            ],
            testimonials: [
                {
                    name: "سارة أحمد",
                    position: "مدير التسويق - شركة النجاح",
                    text: "عمل اسامة زيد ذياب على تطوير موقعنا الإلكتروني كان استثنائياً. التصميم جميل والأداء سريع جداً. فريقنا والعملاء معجبون بالنتيجة.",
                    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                    rating: 5
                },
                {
                    name: "محمد الخالدي",
                    position: "مؤسس - متجر التقنية",
                    text: "تطبيق التجارة الإلكترونية الذي طوّره اسامة زيد ذياب زاد من مبيعاتنا بنسبة 200%. التطبيق سهل الاستخدام وآمن تماماً.",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                    rating: 5
                },
                {
                    name: "نور الإبراهيم",
                    position: "مديرة المشاريع - شركة الإبداع",
                    text: "التعامل مع اسامة زيد ذياب كان ممتازاً. يلتزم بالمواعيد ويقدم جودة عالية. أنصح بالتعامل معه لأي مشروع تقني.",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                    rating: 5
                }
            ],
            currentTestimonial: 0,
            typingTexts: [
                "مطور ويب محترف",
                "مصمم UI/UX مبدع", 
                "خبير في React و Node.js",
                "مطور تطبيقات جوال",
                "مستشار تقني متخصص"
            ],
            currentTypingIndex: 0,
            isAnimating: false
        };

        this.init();
    }

    init() {
        console.log('🚀 Initializing Ahmed Portfolio...');
        
        // Wait for DOM to be fully ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupApp();
            });
        } else {
            this.setupApp();
        }
    }

    setupApp() {
        this.setupLoadingScreen();
        this.setupNavigation();
        this.setupThemeToggle();
        this.setupTypingAnimation();
        this.setupScrollAnimations();
        this.setupSkillsAnimation();
        this.setupProjectsFilter();
        this.setupTestimonialsCarousel();
        this.setupContactForm();
        this.setupMobileMenu();
        
        
        console.log('✅ Ahmed Portfolio initialized successfully');
    }

    // Loading Screen
    setupLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        
        if (loadingScreen) {
            // Simulate loading time
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                this.startHeroAnimations();
            }, 3000);
        } else {
            // If no loading screen, start animations immediately
            setTimeout(() => {
                this.startHeroAnimations();
            }, 500);
        }
    }

    startHeroAnimations() {
        // Start counter animations
        this.animateCounters();
        
        // Start typing animation
        setTimeout(() => {
            this.startTypingAnimation();
        }, 1000);
    }

    // Navigation - FIXED VERSION
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const nav = document.getElementById('mainNav');
        
        console.log('🔗 Setting up navigation with', navLinks.length, 'links');
        
        // FIXED: Proper scroll handling for nav active states
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            
            // Add scrolled class to nav
            if (nav) {
                if (scrollY > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }
            
            // Update active nav link based on scroll position
            this.updateActiveNavLink(scrollY);
        });

        // FIXED: Click navigation with proper smooth scrolling
        navLinks.forEach((link, index) => {
            console.log(`📌 Setting up nav link ${index}:`, link.getAttribute('href'));
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('🖱️ Nav link clicked:', link.getAttribute('href'));
                
                const href = link.getAttribute('href');
                if (!href || !href.startsWith('#')) {
                    console.warn('Invalid href:', href);
                    return;
                }
                
                const sectionId = href.substring(1);
                const section = document.getElementById(sectionId);
                
                console.log('🎯 Looking for section:', sectionId, section ? '✅ Found' : '❌ Not found');
                
                if (section) {
                    // Update active nav immediately for better UX
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    
                    // Calculate scroll position
                    const navHeight = nav ? nav.offsetHeight : 80;
                    const sectionTop = section.offsetTop - navHeight - 20; // Extra padding
                    
                    console.log('📏 Scroll calculation:', {
                        sectionTop: section.offsetTop,
                        navHeight,
                        finalTop: sectionTop
                    });
                    
                    // Smooth scroll with fallback
                    try {
                        window.scrollTo({
                            top: Math.max(0, sectionTop),
                            behavior: 'smooth'
                        });
                        
                        console.log('✅ Smooth scroll initiated to:', sectionTop);
                        this.showToast(`انتقال إلى قسم ${link.textContent.trim()}`, 'info');
                        
                    } catch (error) {
                        console.warn('Smooth scroll failed, using fallback:', error);
                        // Fallback for older browsers
                        window.scrollTo(0, Math.max(0, sectionTop));
                    }
                    
                    // Close mobile menu if open
                    this.closeMobileMenu();
                } else {
                    console.error('❌ Section not found:', sectionId);
                    this.showToast('القسم غير موجود', 'error');
                }
            });
        });
        
        console.log('✅ Navigation setup complete');
    }

    updateActiveNavLink(scrollY) {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        
        let activeSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                activeSection = section.id;
            }
        });
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href === `#${activeSection}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    closeMobileMenu() {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        
        if (navMenu) navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
    }

    // Theme Toggle
    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        
        if (themeToggle) {
            // Set initial theme
            const savedTheme = localStorage.getItem('theme') || 
                              (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            
            document.documentElement.setAttribute('data-color-scheme', savedTheme);
            this.updateThemeIcon(savedTheme);
            
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-color-scheme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                document.documentElement.setAttribute('data-color-scheme', newTheme);
                localStorage.setItem('theme', newTheme);
                this.updateThemeIcon(newTheme);
                
                this.showToast(
                    `تم التبديل إلى ${newTheme === 'dark' ? 'الوضع المظلم' : 'الوضع المضيء'}`,
                    'info'
                );
            });
        }
    }

    updateThemeIcon(theme) {
        const themeIcon = document.querySelector('#themeToggle i');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // Typing Animation
    setupTypingAnimation() {
        this.typingElement = document.getElementById('typingText');
    }

    startTypingAnimation() {
        if (!this.typingElement) return;
        
        this.typeText(this.data.typingTexts[this.data.currentTypingIndex]);
    }

    async typeText(text) {
        if (!this.typingElement || this.data.isAnimating) return;
        
        this.data.isAnimating = true;
        
        // Clear existing text
        this.typingElement.textContent = '';
        
        // Type text
        for (let i = 0; i < text.length; i++) {
            this.typingElement.textContent += text[i];
            await this.delay(100);
        }
        
        // Wait
        await this.delay(2000);
        
        // Delete text
        for (let i = text.length; i > 0; i--) {
            this.typingElement.textContent = text.substring(0, i - 1);
            await this.delay(50);
        }
        
        // Next text
        this.data.currentTypingIndex = (this.data.currentTypingIndex + 1) % this.data.typingTexts.length;
        this.data.isAnimating = false;
        
        // Continue animation
        setTimeout(() => {
            this.startTypingAnimation();
        }, 500);
    }

    // Counter Animations
    animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        
        counters.forEach((counter, index) => {
            setTimeout(() => {
                const target = parseInt(counter.getAttribute('data-count'));
                this.animateNumber(counter, target);
            }, index * 200);
        });
    }

    animateNumber(element, target, duration = 2000) {
        const start = 0;
        const startTime = performance.now();
        
        const updateNumber = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = this.easeOutQuart(progress);
            const current = Math.floor(start + (target - start) * easeProgress);
            
            element.textContent = current.toLocaleString('ar-SA');
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        };
        
        requestAnimationFrame(updateNumber);
    }

    easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    // Scroll Animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                    
                    // Trigger skill animations if in skills section
                    if (entry.target.id === 'skills') {
                        this.animateSkills();
                    }
                }
            });
        }, observerOptions);
        
        // Observe sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            this.observer.observe(section);
        });
        
        // Observe cards and elements
        const animatedElements = document.querySelectorAll(
            '.service-card, .project-card, .timeline-item, .skill-category'
        );
        animatedElements.forEach(element => {
            this.observer.observe(element);
        });
    }

    // Skills Animation
    setupSkillsAnimation() {
        this.skillsAnimated = false;
    }

    animateSkills() {
        if (this.skillsAnimated) return;
        this.skillsAnimated = true;
        
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            }, index * 200);
        });
    }

    // Projects Filter
    setupProjectsFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.5s ease-out';
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                this.showToast(`تم تصفية المشاريع: ${button.textContent}`, 'info');
            });
        });
    }

    // Project Modal
    openProjectModal(projectIndex) {
        const project = this.data.projects[projectIndex];
        if (!project) return;
        
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');
        
        if (!modal || !modalBody) return;
        
        modalBody.innerHTML = `
            <div style="padding: 2rem;">
                <img src="${project.image}" alt="${project.title}" 
                     style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 1.5rem;">
                
                <div style="margin-bottom: 1rem;">
                    <span style="background: var(--glass-bg); padding: 0.25rem 0.75rem; border-radius: 20px; 
                                font-size: 0.875rem; color: var(--portfolio-primary);">
                        ${project.category}
                    </span>
                    ${project.status ? `<span class="status-badge status-badge--danger">${project.status}</span>` : ''}
                </div>
                
                <h2 style="color: var(--color-text); margin-bottom: 1rem; font-size: 1.75rem;">
                    ${project.title}
                </h2>
                
                <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
                    ${project.description}
                </p>
                
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="color: var(--color-text); margin-bottom: 0.75rem;">التقنيات المستخدمة:</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${project.tech.map(tech => `
                            <span style="background: var(--gradient-primary); color: white; 
                                        padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem;">
                                ${tech}
                            </span>
                        `).join('')}
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="color: var(--color-text); margin-bottom: 0.75rem;">الميزات الرئيسية:</h4>
                    <ul style="color: var(--color-text-secondary); line-height: 1.6; padding-right: 1.25rem;">
                        ${project.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="color: var(--color-text); margin-bottom: 0.75rem;">التحديات:</h4>
                    <p style="color: var(--color-text-secondary); line-height: 1.6;">
                        ${project.challenges}
                    </p>
                </div>
                
                <div>
                    <h4 style="color: var(--color-text); margin-bottom: 0.75rem;">النتائج:</h4>
                    <p style="color: var(--color-text-secondary); line-height: 1.6;">
                        ${project.results}
                    </p>
                </div>
                
                ${project.link ? `
                <div style="margin-top: 2rem; display: flex; gap: 0.75rem;">
                    <a href="${project.link}" target="_blank" rel="noopener" 
                       style="display: inline-flex; align-items: center; gap: 0.5rem; background: var(--portfolio-primary); color: white; padding: 0.75rem 1rem; border-radius: 8px; text-decoration: none;">
                        <i class="fas fa-external-link-alt"></i>
                        جرّب الآن
                    </a>
                    <button onclick="closeProjectModal()" 
                            style="background: var(--glass-bg); color: var(--color-text); padding: 0.75rem 1rem; border-radius: 8px; border: none; cursor: pointer;">
                        إغلاق
                    </button>
                </div>
                ` : ''}
            </div>
        `;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeProjectModal() {
        const modal = document.getElementById('projectModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    // Testimonials Carousel
    setupTestimonialsCarousel() {
        this.createTestimonialDots();
        this.setupCarouselControls();
        this.startAutoSlide();
    }

    createTestimonialDots() {
        const dotsContainer = document.getElementById('testimonialDots');
        if (!dotsContainer) return;
        
        dotsContainer.innerHTML = '';
        
        this.data.testimonials.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => this.goToTestimonial(index));
            dotsContainer.appendChild(dot);
        });
    }

    setupCarouselControls() {
        const prevBtn = document.getElementById('prevTestimonial');
        const nextBtn = document.getElementById('nextTestimonial');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousTestimonial());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextTestimonial());
        }
    }

    goToTestimonial(index) {
        const testimonials = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('.carousel-dot');
        
        // Update testimonials
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        this.data.currentTestimonial = index;
    }

    nextTestimonial() {
        const nextIndex = (this.data.currentTestimonial + 1) % this.data.testimonials.length;
        this.goToTestimonial(nextIndex);
    }

    previousTestimonial() {
        const prevIndex = this.data.currentTestimonial === 0 
            ? this.data.testimonials.length - 1 
            : this.data.currentTestimonial - 1;
        this.goToTestimonial(prevIndex);
    }

    startAutoSlide() {
        setInterval(() => {
            this.nextTestimonial();
        }, 5000);
    }

    // Contact Form
    setupContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) {
            console.error('❌ Contact form not found');
            return;
        }
        
        console.log('✅ Contact form found, setting up...');
        
        // Using direct mailto method for maximum reliability
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(form);
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
        
        console.log('✅ Contact form setup complete');
    }


    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.getAttribute('name');
        const errorElement = field.parentNode.querySelector('.form-error');
        
        let isValid = true;
        let errorMessage = '';
        
        // Required validation
        if (!value) {
            isValid = false;
            errorMessage = 'هذا الحقل مطلوب';
        }
        
        // Email validation
        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'يرجى إدخال بريد إلكتروني صحيح';
            }
        }
        
        // Name validation
        if (fieldName === 'name' && value) {
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'الاسم يجب أن يكون حرفين على الأقل';
            }
        }
        
        // Update UI
        if (!isValid) {
            field.classList.add('error');
            if (errorElement) {
                errorElement.textContent = errorMessage;
            }
        } else {
            field.classList.remove('error');
            if (errorElement) {
                errorElement.textContent = '';
            }
        }
        
        return isValid;
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.form-error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    async handleFormSubmit(form) {
        console.log('📝 Form submission started');
        
        const inputs = form.querySelectorAll('.form-control');
        let isFormValid = true;
        
        // Validate all fields
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });
        
        if (!isFormValid) {
            this.showToast('يرجى تصحيح الأخطاء في النموذج', 'error');
            return;
        }
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            to_email: 'zaiddzaid666@gmail.com' // Your email address
        };
        
        // Validate required data
        if (!data.from_name || !data.from_email || !data.subject || !data.message) {
            this.showToast('يرجى ملء جميع الحقول المطلوبة', 'error');
            return;
        }
        
        console.log('📧 Form data validated:', data);
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        submitBtn.disabled = true;
        
        // Use direct mailto approach for better reliability
        console.log('📧 Using direct mailto approach for better reliability');
        
        // Create mailto link
        const subject = encodeURIComponent(data.subject);
        const body = encodeURIComponent(
            `الاسم: ${data.from_name}\n` +
            `البريد الإلكتروني: ${data.from_email}\n` +
            `الموضوع: ${data.subject}\n\n` +
            `الرسالة:\n${data.message}\n\n` +
            `---\n` +
            `تم إرسال هذه الرسالة من موقع المحفظة الشخصية`
        );
        
        const mailtoLink = `mailto:zaiddzaid666@gmail.com?subject=${subject}&body=${body}`;
        
        // Open mailto link
        try {
            window.location.href = mailtoLink;
            
            // Show success message
            this.showToast('تم فتح برنامج البريد الإلكتروني مع رسالتك جاهزة للإرسال!', 'success');
            
            // Reset form after a delay
            setTimeout(() => {
                form.reset();
            }, 2000);
            
        } catch (error) {
            console.error('❌ Error opening mailto:', error);
            this.showToast('حدث خطأ في فتح برنامج البريد الإلكتروني', 'error');
        }
        
        // Restore button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }


    // Mobile Menu
    setupMobileMenu() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    // Utility Functions
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    showToast(message, type = 'info') {
        let container = document.getElementById('toastContainer');
        
        if (!container) {
            container = document.createElement('div');
            container.id = 'toastContainer';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            info: 'fa-info-circle'
        };
        
        toast.innerHTML = `
            <i class="fas ${icons[type]}"></i>
            <span>${message}</span>
        `;
        
        container.appendChild(toast);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.animation = 'slideInLeft 0.3s ease-out reverse';
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.remove();
                    }
                }, 300);
            }
        }, 4000);
    }

}

// Global functions for HTML onclick handlers
function openProjectModal(index) {
    if (window.portfolio) {
        window.portfolio.openProjectModal(index);
    }
}

function closeProjectModal() {
    if (window.portfolio) {
        window.portfolio.closeProjectModal();
    }
}


// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌟 DOM loaded - initializing portfolio...');
    window.portfolio = new AhmedPortfolio();
    
    // Make functions globally available
    window.openProjectModal = openProjectModal;
    window.closeProjectModal = closeProjectModal;
    
    console.log('🎉 Portfolio ready!');
});

// Additional safety: initialize on window load if not already initialized
window.addEventListener('load', () => {
    if (!window.portfolio) {
        console.log('🔄 Backup initialization...');
        window.portfolio = new AhmedPortfolio();
        window.openProjectModal = openProjectModal;
        window.closeProjectModal = closeProjectModal;
    }
});

console.log('🚀 Ahmed Ibrahim Portfolio - Professional Web Developer & UI/UX Designer - Navigation Fixed!');
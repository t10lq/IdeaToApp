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
                    image: "images/links-app.png",
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
                    image: "images/turbo-store.png",
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
            testimonials: [],
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
            
            // Validate form first
            const inputs = form.querySelectorAll('.form-control');
            let isFormValid = true;
            
            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isFormValid = false;
                }
            });
            
            if (!isFormValid) {
                this.showToast('يرجى تصحيح الأخطاء في النموذج', 'error');
                return;
            }
            
            // Try multiple methods
            this.handleFormSubmission(form);
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
        
        // Send email using a simple backend service
        console.log('📧 Sending email via backend service');
        
        try {
            // Use a simple email service
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: 'service_2qpq3wr',
                    template_id: 'template_6qso35c',
                    user_id: 'iYbMaC9BUXhCgMfkx',
                    template_params: {
                        from_name: data.from_name,
                        from_email: data.from_email,
                        subject: data.subject,
                        message: data.message,
                        to_email: 'zaiddzaid666@gmail.com'
                    }
                })
            });
            
            if (response.ok) {
                this.showToast('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً', 'success');
                form.reset();
            } else {
                throw new Error('Email service failed');
            }
            
        } catch (error) {
            console.error('❌ Email sending error:', error);
            
            // Fallback: Show contact information
            this.showContactInfo(data);
        }
        
        // Restore button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }

    async handleFormSubmission(form) {
        console.log('📧 Handling form submission...');
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        console.log('📧 Form data:', data);
        
        // Try EmailJS
        try {
            if (typeof emailjs !== 'undefined') {
                const result = await emailjs.send(
                    'service_2qpq3wr',
                    'template_6qso35c',
                    {
                        from_name: data.name,
                        from_email: data.email,
                        subject: data.subject,
                        message: data.message,
                        to_email: 'zaiddzaid666@gmail.com'
                    }
                );
                
                if (result.status === 200) {
                    this.showToast('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً', 'success');
                    form.reset();
                    // Restore button state after successful submission
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    return;
                }
            }
        } catch (error) {
            console.log('❌ EmailJS failed:', error);
            this.showToast('حدث خطأ في الإرسال، يرجى المحاولة مرة أخرى', 'error');
        }
        
        // Show contact information as fallback
        this.showContactInfo(data);
        
        // Restore button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }


    showContactInfo(data) {
        // Show contact information as fallback
        const contactInfo = `
            <div style="text-align: center; padding: 20px;">
                <h3 style="color: var(--portfolio-primary); margin-bottom: 15px;">معلومات التواصل</h3>
                <p style="margin-bottom: 10px;"><strong>البريد الإلكتروني:</strong> zaiddzaid666@gmail.com</p>
                <p style="margin-bottom: 10px;"><strong>الهاتف:</strong> 078********</p>
                <p style="margin-bottom: 20px;"><strong>الموقع:</strong> العراق، صلاح الدين</p>
                
                <div style="background: var(--glass-bg); padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: var(--color-text); margin-bottom: 10px;">تفاصيل رسالتك:</h4>
                    <p><strong>الاسم:</strong> ${data.name}</p>
                    <p><strong>البريد:</strong> ${data.email}</p>
                    <p><strong>الموضوع:</strong> ${data.subject}</p>
                    <p><strong>الرسالة:</strong> ${data.message}</p>
                </div>
                
                <p style="color: var(--color-text-secondary); font-size: 14px; margin-bottom: 15px;">
                    يرجى نسخ هذه المعلومات وإرسالها عبر البريد الإلكتروني أو الهاتف
                </p>
                
                <button onclick="copyContactInfo()" style="background: var(--portfolio-primary); color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin: 5px;">
                    <i class="fas fa-copy"></i> نسخ المعلومات
                </button>
            </div>
        `;
        
        // Create modal to show contact info
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
            <div class="modal-content" style="max-width: 500px;">
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-body">
                    ${contactInfo}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.classList.remove('hidden');
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

function copyContactInfo() {
    const contactText = `
معلومات التواصل:
البريد الإلكتروني: zaiddzaid666@gmail.com
الهاتف: 078********
الموقع: العراق، صلاح الدين

تفاصيل الرسالة:
الاسم: ${document.querySelector('#name')?.value || ''}
البريد: ${document.querySelector('#email')?.value || ''}
الموضوع: ${document.querySelector('#subject')?.value || ''}
الرسالة: ${document.querySelector('#message')?.value || ''}
    `.trim();
    
    navigator.clipboard.writeText(contactText).then(() => {
        if (window.portfolio) {
            window.portfolio.showToast('تم نسخ المعلومات إلى الحافظة!', 'success');
        }
    }).catch(() => {
        if (window.portfolio) {
            window.portfolio.showToast('فشل في نسخ المعلومات', 'error');
        }
    });
}

function testForm() {
    console.log('🧪 Testing form...');
    
    const form = document.getElementById('contactForm');
    if (!form) {
        console.error('❌ Form not found');
        alert('النموذج غير موجود!');
        return;
    }
    
    // Fill form with test data
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const subjectInput = form.querySelector('#subject');
    const messageInput = form.querySelector('#message');
    
    if (nameInput) nameInput.value = 'اختبار';
    if (emailInput) emailInput.value = 'test@example.com';
    if (subjectInput) subjectInput.value = 'اختبار النموذج';
    if (messageInput) messageInput.value = 'هذه رسالة اختبار للنموذج';
    
    console.log('✅ Test data filled');
    
    // Test form submission
    if (window.portfolio) {
        window.portfolio.handleFormSubmission(form);
    } else {
        console.error('❌ Portfolio instance not found');
        alert('خطأ في تحميل التطبيق!');
    }
}


// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌟 DOM loaded - initializing portfolio...');
    window.portfolio = new AhmedPortfolio();
    
    // Make functions globally available
    window.openProjectModal = openProjectModal;
    window.closeProjectModal = closeProjectModal;
    window.copyContactInfo = copyContactInfo;
    window.testForm = testForm;
    
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
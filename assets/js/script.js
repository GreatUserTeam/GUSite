(function () {
    const i18n = {
        ru: {
            slogan: '<span class="tagline-content">Оптимизация, <br class="br1">кастомизация, <br class="br2">свобода</span>',
            nav_home: "Старт",
            nav_about: "О проекте",
            nav_tech: "Архитектура",
            nav_comparison: "Сравнение",
            nav_roadmap: "Наш путь",
            nav_manifesto: "Манифест",
            nav_community: "Сообщество",
            social_label: "Соцсети",
            hero_title_part: "OS, которую ты заслуживаешь",
            hero_subtitle: "GUS — это не дистрибутив Linux и не клон Windows. Это платформа-конструктор с микроядром, написанная на Rust.",
            how_it_works: "Как это работает",
            manifesto_btn: "Манифест",
            developers: "разработчиков",
            forum_members: "человек на форуме",
            about_title: "О проекте",
            about_lead: "Мы не делаем дистрибутив. Мы создаём новую философию.",
            about_text: "GUS — операционная система с нуля. Микроядро управляет только памятью и IPC. Драйверы и сервисы изолированы в UserSpace. Каждый компонент можно заменить, обновить или удалить без перезагрузки системы.",
            about_dynamic: "Ядро собирается конкретно под ваш компьютер. Перед установкой оно сканирует оборудование и загружает только нужные модули с нашего сервера — по сути, у каждого будет стоять уникальная система.",
            tech_title: "Технические особенности",
            tech_microkernel_title: "Микроядро",
            tech_microkernel: "Сбой видеодрайвера не обрушит систему. Ядро минимально и отвечает только за критически важные функции.",
            tech_rust_title: "Rust",
            tech_rust: "Безопасность памяти без компромиссов. Современный язык исключает целые классы уязвимостей на этапе компиляции.",
            tech_modular_title: "Лёгкая модульность",
            tech_modular: "Модули общаются через быстрый IPC на Rust. Никаких тяжёлых накладных расходов, присущих старым ОС.",
            tech_sandbox_title: "Программа = Файл",
            tech_sandbox: "Изолированные модули, вирусам негде прятаться. Песочница на уровне ОС.",
            tech_why_title: "Почему модульность будет быстрой в GUS:",
            tech_why_desc: "Тяжесть модульности — это миф, основанный на опыте старых ОС. В GUS модульность станет легкой, потому что мы изначально проектируем систему как набор независимых сервисов, которые общаются через эффективные каналы (IPC), написанные на безопасном и высокопроизводительном языке Rust.",
            comp_title: "Сравнение операционных систем",
            comp_intro: "Мы сравнили GUS с другими популярными ОС, чтобы показать принципиальные отличия в архитектуре и философии.",
            comp_outro: "GUS — молодой проект, но его архитектура спроектирована для будущего — максимальная безопасность, модульность и контроль пользователя.",
            col_feature: "Характеристика",
            row_kernel: "Тип ядра",
            row_opensource: "Открытый исходный код",
            row_maturity: "Зрелость / Стабильность",
            row_complexity: "Сложность для пользователя",
            row_popularity: "Популярность",
            row_install: "Сложность установки",
            row_language: "Основной язык реализации",
            row_modularity: "Модульность (архитектура)",
            row_customization: "Кастомизация системы",
            row_skills: "Необходимость навыков (ежедневно)",
            row_updates: "Управление обновлениями",
            val_microkernel: "Микроядро",
            val_monolithic: "Монолитное",
            val_hybrid: "Гибридное",
            val_monolithic2: "Монолитное",
            val_maturity_gus: "Проект (в разработке)",
            val_maturity_linux: "Зрелая",
            val_maturity_windows: "Зрелая",
            val_maturity_freebsd: "Зрелая",
            val_complexity_low: "Низкая (конструктор)",
            val_complexity_high: "Высокая",
            val_complexity_medium: "Средняя",
            val_complexity_high2: "Высокая",
            val_popularity_gus: "Очень низкая (новая ОС)",
            val_popularity_linux: "Высокая",
            val_popularity_windows: "Очень высокая",
            val_popularity_freebsd: "Средняя",
            val_install_easy: "Легко",
            val_install_medium: "Средне",
            val_install_medium2: "Средне",
            val_install_hard: "Сложно",
            val_lang_rust: "Rust",
            val_lang_c: "C",
            val_lang_cpp: "C / C++",
            val_lang_c2: "C",
            val_modularity_partial: "Частичная",
            val_modularity_partial2: "Частичная",
            val_modularity_partial3: "Частичная",
            val_customization_high: "Высокая",
            val_customization_low: "Низкая",
            val_customization_high2: "Высокая",
            val_skills_none: "Не нужны",
            val_skills_sometimes: "Иногда",
            val_skills_none2: "Не нужны",
            val_skills_often: "Часто",
            val_updates_modular: "Модульное",
            val_updates_centralized: "Централизованное",
            val_updates_centralized2: "Централизованное",
            val_updates_centralized3: "Централизованное",
            roadmap_title: "Наш путь",
            roadmap_concept_title: "Концепция",
            roadmap_concept_desc: "У нас есть конкретное представление о том, что мы хотим сделать. Важно понимать, куда двигаться.",
            roadmap_bootstrap_title: "Bootstrap",
            roadmap_bootstrap_desc: "Наш код на данный момент представляет собой нечто большее, чем hello world.",
            roadmap_search_title: "Поиск программистов и начало пути",
            roadmap_search_desc: "Мы в активном поиске активистов, которые помогут развивать наш проект.",
            roadmap_kernel_title: "Ядро",
            roadmap_kernel_desc: "Ядро должно быть легким, так как не содержит драйверов. Каждый элемент в своем модуле.",
            roadmap_modules_title: "Модульная система",
            roadmap_modules_desc: "Все модули взаимодействуют друг с другом и общаются через ядро.",
            roadmap_interface_title: "Интерфейс",
            roadmap_interface_desc: "Кастомизация — один из трёх наших основных «китов».",
            roadmap_software_title: "Софт",
            roadmap_software_desc: "Свои аналоги программ и собственная экосистема приложений с магазином.",
            roadmap_distribution_title: "Распространение",
            roadmap_distribution_desc: "GUS должен стать популярным за счет своих преимуществ.",
            roadmap_bootloader_title: "Собственный загрузчик",
            roadmap_bootloader_desc: "Rust-bootloader это хорошо, а свой загрузчик — еще лучше.",
            roadmap_mobile_title: "GUS for Mobile",
            roadmap_mobile_desc: "В будущем мы хотим сделать нашу OS на телефоны и планшеты.",
            manifesto_title: "Манифест",
            manifesto_minimalism_title: "Минимализм:",
            manifesto_security_title: "Безопасность:",
            manifesto_flexibility_title: "Гибкость:",
            manifesto_privacy_title: "Приватность:",
            manifesto_control_title: "Контроль:",
            manifesto_transparency_title: "Прозрачность:",
            manifesto_community_title: "Сообщество:",
            manifesto_minimalism: "Система без лишнего «мусора» и ненужных процессов.",
            manifesto_security: "Rust, микроядро и полная изоляция модулей.",
            manifesto_flexibility: "Модульная архитектура под любое «железо».",
            manifesto_privacy: "Никакой слежки и навязанного функционала.",
            manifesto_control: "Возвращаем вам полную власть над вашим устройством.",
            manifesto_transparency: "Открытый код и открытый процесс разработки.",
            manifesto_community: "Проект, управляемый сообществом, а не корпорацией.",
            manifesto_text: "«GUS возвращает контроль пользователю. Никакой телеметрии. Никакого скрытого сбора данных. Только прозрачность, безопасность и свобода выбора.»",
            community_title: "Сообщество",
            community_intro: "Наш проект держится исключительно на добровольцах. Если вы хотите следить за нашим развитием, подписывайтесь на наши соцсети:",
            community_forum_text: "Если вы хотите с нами разрабатывать OS или задать вопрос, присоединяйтесь на наш телеграм форум:",
            community_channel_text: "Также у нас есть телеграм канал, в котором быстрее всего выходят все новости:",
            footer_motto: "Оптимизация · Кастомизация · Свобода | Built with Rust 🦀"
        },
        en: {
            slogan: '<span class="tagline-content">Optimization, <br class="br1">customization, <br class="br2">freedom</span>',
            nav_home: "Start",
            nav_about: "About",
            nav_tech: "Technology",
            nav_comparison: "Comparison",
            nav_roadmap: "Our Path",
            nav_manifesto: "Manifesto",
            nav_community: "Community",
            social_label: "Socials",
            hero_title_part: "OS you deserve",
            hero_subtitle: "GUS is not a Linux distro nor a Windows clone. It's a constructor platform with a Rust microkernel.",
            how_it_works: "How it works",
            manifesto_btn: "Manifesto",
            developers: "developers",
            forum_members: "forum members",
            about_title: "About the project",
            about_lead: "We are not making a distribution. We are creating a new philosophy.",
            about_text: "GUS is an operating system from scratch. The microkernel manages only memory and IPC. Drivers and services are isolated in UserSpace. Each component can be replaced, updated or removed without rebooting the system.",
            about_dynamic: "The kernel is built specifically for your computer. Before installation, it scans the hardware and downloads only the necessary modules from our server — essentially, everyone gets a unique system.",
            tech_title: "Technical features",
            tech_microkernel_title: "Microkernel",
            tech_microkernel: "A video driver crash won't bring down the system. The kernel is minimal and handles only critical functions.",
            tech_rust_title: "Rust",
            tech_rust: "Memory safety without compromises. A modern language that eliminates entire classes of vulnerabilities at compile time.",
            tech_modular_title: "Lightweight Modularity",
            tech_modular: "Modules communicate via fast IPC in Rust. No heavy overhead typical of old operating systems.",
            tech_sandbox_title: "Program = File",
            tech_sandbox: "Isolated modules, nowhere for viruses to hide. OS-level sandboxing.",
            tech_why_title: "Why modularity will be fast in GUS:",
            tech_why_desc: "The heaviness of modularity is a myth based on the experience of old OSes. In GUS, modularity becomes lightweight because we design the system from the ground up as a set of independent services communicating through efficient channels (IPC), written in the safe and high-performance Rust language.",
            comp_title: "Operating System Comparison",
            comp_intro: "We compared GUS with other popular operating systems to show the fundamental differences in architecture and philosophy.",
            comp_outro: "GUS is a young project, but its architecture is designed for the future — maximum security, modularity and user control.",
            col_feature: "Feature",
            row_kernel: "Kernel type",
            row_opensource: "Open source",
            row_maturity: "Maturity / Stability",
            row_complexity: "User complexity",
            row_popularity: "Popularity",
            row_install: "Installation difficulty",
            row_language: "Implementation language",
            row_modularity: "Modularity (architecture)",
            row_customization: "System customization",
            row_skills: "Required skills (daily)",
            row_updates: "Update management",
            val_microkernel: "Microkernel",
            val_monolithic: "Monolithic",
            val_hybrid: "Hybrid",
            val_monolithic2: "Monolithic",
            val_maturity_gus: "Project (in development)",
            val_maturity_linux: "Mature",
            val_maturity_windows: "Mature",
            val_maturity_freebsd: "Mature",
            val_complexity_low: "Low (constructor)",
            val_complexity_high: "High",
            val_complexity_medium: "Medium",
            val_complexity_high2: "High",
            val_popularity_gus: "Very low (new OS)",
            val_popularity_linux: "High",
            val_popularity_windows: "Very high",
            val_popularity_freebsd: "Medium",
            val_install_easy: "Easy",
            val_install_medium: "Medium",
            val_install_medium2: "Medium",
            val_install_hard: "Hard",
            val_lang_rust: "Rust",
            val_lang_c: "C",
            val_lang_cpp: "C / C++",
            val_lang_c2: "C",
            val_modularity_partial: "Partial",
            val_modularity_partial2: "Partial",
            val_modularity_partial3: "Partial",
            val_customization_high: "High",
            val_customization_low: "Low",
            val_customization_high2: "High",
            val_skills_none: "None",
            val_skills_sometimes: "Sometimes",
            val_skills_none2: "None",
            val_skills_often: "Often",
            val_updates_modular: "Modular",
            val_updates_centralized: "Centralized",
            val_updates_centralized2: "Centralized",
            val_updates_centralized3: "Centralized",
            roadmap_title: "Our Path",
            roadmap_concept_title: "Concept",
            roadmap_concept_desc: "We have a concrete vision of what we want to create. It's important to understand where we're heading.",
            roadmap_bootstrap_title: "Bootstrap",
            roadmap_bootstrap_desc: "Our code is currently more than just a hello world.",
            roadmap_search_title: "Finding programmers and starting the journey",
            roadmap_search_desc: "We are actively looking for contributors to help develop our project.",
            roadmap_kernel_title: "Kernel",
            roadmap_kernel_desc: "The kernel must be lightweight, as it won't contain drivers. Each element will reside in its own module.",
            roadmap_modules_title: "Modular system",
            roadmap_modules_desc: "All modules must interact with each other and communicate through the kernel.",
            roadmap_interface_title: "Interface",
            roadmap_interface_desc: "Customization is one of our three main pillars upon which the entire ideology of the system is based.",
            roadmap_software_title: "Software",
            roadmap_software_desc: "We plan to create our own alternatives to programs on GUS, and create our own ecosystem of applications with an app store.",
            roadmap_distribution_title: "Distribution",
            roadmap_distribution_desc: "GUS should become popular due to its advantages.",
            roadmap_bootloader_title: "Custom bootloader",
            roadmap_bootloader_desc: "rust-bootloader is good, but having our own bootloader is even better.",
            roadmap_mobile_title: "GUS for Mobile",
            roadmap_mobile_desc: "In the future, we want to bring our OS to phones and tablets.",
            manifesto_title: "Manifesto",
            manifesto_minimalism_title: "Minimalism:",
            manifesto_security_title: "Security:",
            manifesto_flexibility_title: "Flexibility:",
            manifesto_privacy_title: "Privacy:",
            manifesto_control_title: "Control:",
            manifesto_transparency_title: "Transparency:",
            manifesto_community_title: "Community:",
            manifesto_minimalism: "A system without unnecessary \"garbage\" and redundant processes.",
            manifesto_security: "Rust, microkernel and complete module isolation.",
            manifesto_flexibility: "Modular architecture for any hardware.",
            manifesto_privacy: "No surveillance or imposed functionality.",
            manifesto_control: "We return full power over your device to you.",
            manifesto_transparency: "Open source and open development process.",
            manifesto_community: "A project driven by the community, not a corporation.",
            manifesto_text: "\"GUS gives control back to the user. No telemetry. No hidden data collection. Only transparency, security, and freedom of choice.\"",
            community_title: "Community",
            community_intro: "Our project relies entirely on volunteers. If you want to follow our development, subscribe to our social networks:",
            community_forum_text: "If you want to develop the OS with us or ask a question, join our Telegram forum:",
            community_channel_text: "We also have a Telegram channel where all news comes out fastest:",
            footer_motto: "Optimization · Customization · Freedom | Built with Rust 🦀"
        }
    };

    let currentLang = localStorage.getItem('gus-lang') || 'ru';


    function applyLang(lang) {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(el => el.classList.add('lang-switching'));

        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');

            if (i18n[lang]?.[key]) {
                if (key === 'slogan') {
                    el.innerHTML = i18n[lang][key];
                } else {
                    const existingBadge = el.querySelector('.gus-badge');
                    el.textContent = i18n[lang][key];

                    if (existingBadge && i18n[lang][key].includes('GUS')) {
                        const newBadge = document.createElement('span');
                        newBadge.className = 'gus-badge';
                        newBadge.textContent = 'GUS';
                        const text = el.textContent;

                        if (text.startsWith('GUS')) {
                            el.textContent = text.replace('GUS', '');
                            el.prepend(newBadge);
                        } else if (text.includes('GUS')) {
                            el.innerHTML = text.replace('GUS', '<span class="gus-badge">GUS</span>');
                        }
                    }
                }
            }
        });

        localStorage.setItem('gus-lang', lang);
        currentLang = lang;
        setTimeout(() => elements.forEach(el => el.classList.remove('lang-switching')), 200);
    }

    document.getElementById('langToggleDesktop').addEventListener('click', () => {
        applyLang(currentLang === 'ru' ? 'en' : 'ru');
    });


    const burger = document.getElementById('burgerBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    function closeMenu() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        burger.classList.remove('open');
    }

    burger.addEventListener('click', () => {
        sidebar.classList.contains('open')
            ? closeMenu()
            : (sidebar.classList.add('open'), overlay.classList.add('active'), burger.classList.add('open'));
    });

    overlay.addEventListener('click', closeMenu);
    document.querySelectorAll('.sidebar a').forEach(link => link.addEventListener('click', closeMenu));


    // Перезагрузка по клику на логотип
    document.getElementById('logoLink').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.reload();
    });


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.section').forEach(s => observer.observe(s));


    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar a');

    function updateActiveLink() {
        let current = '';
        const scrollPos = window.scrollY + 120;

        sections.forEach(s => {
            if (scrollPos >= s.offsetTop && scrollPos < s.offsetTop + s.offsetHeight) {
                current = s.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href')?.substring(1) === current);
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });


    function updateTimelineProgress() {
        const progressBar = document.getElementById('timelineProgress');
        const timelineItems = document.querySelectorAll('.timeline-item[data-timeline-done="true"]');

        if (!progressBar || timelineItems.length === 0) return;

        const lastDone = timelineItems[timelineItems.length - 1];
        const container = document.getElementById('timelineContainer');
        const containerTop = container.getBoundingClientRect().top + window.scrollY;
        const lastDoneBottom = lastDone.getBoundingClientRect().bottom + window.scrollY - containerTop;

        progressBar.style.top = '0';
        progressBar.style.height = lastDoneBottom + 'px';
    }

    window.addEventListener('load', () => {
        updateActiveLink();
        updateTimelineProgress();
    });

    window.addEventListener('resize', updateTimelineProgress);


    applyLang(currentLang);
})();

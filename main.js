const CONTENT = {
    ca: {
        tagline: "PEGANT FORT",
        nav: ["PERMISOS", "MÈTODE", "AVANTATGES", "MATRÍCULA"],
        hero: {
            title: "AUTOESCOLA", subtitle: "RAMIS",
            quote: "Perque soc el que soc gràcies a vosaltres!!",
            btn1: "RESERVA LA TEUA PLAÇA", pack: "PACK ESTRELLA B", offer: "VULL ESTA OFERTA",
            include: ["9 Pràctiques VIP", "Teòrica Express", "Trasllats Inclosos", "Material Digital"]
        },
        stats: ["Alumnes Aprovats", "Èxit Teòrica", "Anys d'Experiència"],
        intensives: {
            t1: "CURSOS", t2: "INTENSIUS", desc: "Dissenyats per a qui no té temps a perdre. El carnet, més ràpid que mai.",
            card1: "TEÒRICA EXPRESS", card1d: "7 dies de classes intensives amb tot el que necessites per aprovar a la primera.",
            card2: "ONLINE 24/7", card2d: "Accés total a la plataforma de tests d'última generació des de qualsevol dispositiu."
        },
permisosTitle: ["EL TEU", "CARNET"],
        permisosList: [
            { 
                n: "Permís AM", 
                d: "Ciclomotors fins a 50cc.", 
                p: "390€",
                detalles: "Inclou: Matrícula, Taxa, Teòrica, 2 pràctiques en circuit (30min) i Examen."
            },
{ 
                n: "Permís A1", 
                d: "Motocicletes lleugeres fins a 125cc.", 
                p: "880€",
                detalles: "Inclou: Matrícula, Taxa, Teòrica, 4 pràctiques en circuit tancat (30min), 2 pràctiques en obert (45min) i Exàmens."
            },
            { 
                n: "Permís A2 ", 
                d: "Motocicletes de potència mitjana.", 
                p: "670€",
                detalles: "Inclou: Matrícula, Taxa, Teòrica, 2 pràctiques en circuit (30min), 2 pràctiques en obert (45min) i Exàmens."
            },
            { 
                n: "Permís A ", 
                d: "Motocicletes sense limit.", 
                p: "550€",
                detalles: "Tot incluit"
            },
            { 
                n: "Permís B", 
                d: "Automòbils i vehicles lleugers.", 
                p: "800€",
                detalles: "Inclou: Matrícula, Taxa, Teòrica, 8 pràctiques de circulació i Examen."
            },
            { 
                n: "Recuperació de punts (Tavernes)", 
                d: "No et quedis sense conduir.", 
                p: "CONSULTAR",
                detalles: "Centre autoritzat per a la recuperació de punts."
            }
        ],
        reviews: {
            title: "ELS NOSTRES", subtitle: "ALUMNES",
            items: [
                { name: "Marc S.", text: "Mètode increïble. Vaig aprovar la teòrica en una setmana!", stars: 5 },
                { name: "Elena R.", text: "Els trasllats des de Simat són un luxe. Moltes gràcies!", stars: 5 },
                { name: "Joan M.", text: "Vehicles moderns i profes molt pacients.", stars: 5 }
            ]
        },
        process: { title: "EL MÈTODE", subtitle: "RAMIS", steps: ["Inscripció", "Teòrica", "Volant", "Llicència"] },
        why: ["+25 ANYS", "ALTA TAXA APROVATS", "VEHICLES MODERNS", "RECOLLIDA A CASA", "PAGAMENT FLEXIBLE", "PROFES VIPS"],
        locations: {
            title: "VALLDIGNA", subtitle: "POWER",
            desc: "Si ets de Simat o Benifairó, t'arrepleguem de franc. Tu només has de centrar-te en conduir!",
            labels: ["ADREÇA", "CONTACTE"]
        },
        faq: {
            title: "DUBTES", subtitle: "COMUNS",
            items: [
                { q: "Quina edat necessite?", a: "Pots matricular-te als 17 anys i 9 mesos per a la teòrica." },
                { q: "Puc pagar a terminis?", a: "Sí! Tenim facilitats de pagament personalitzades per a tu." }
            ]
        },
        footer: "Autoescola Ramis - Pegant Fort des de 1999.",
        footerNav: ["Navegació", "Troba'ns", "Horari d'Oficina", "Avis Legal", "Privacitat"],
        gallery: {
            title: "COMUNITAT", subtitle: "RAMIS",
            insta: "Segueix el nostre dia a dia a @auto_escola_ramis",
            btn: "Veure Instagram"
        }
    },
    es: {
        tagline: "PEGANT FORT",
        nav: ["PERMISOS", "MÉTODO", "VENTAJAS", "MATRÍCULA"],
        hero: {
            title: "AUTOESCUELA", subtitle: "RAMIS",
            quote: "¡Porque soy lo que soy gracias a vosotros!!",
            btn1: "RESERVA TU PLAZA", pack: "PACK ESTRELLA B", offer: "QUIERO ESTA OFERTA",
            include: ["9 Prácticas VIP", "Teórica Express", "Traslados Incluidos", "Material Digital"]
        },
        stats: ["Alumnos Aprobados", "Éxito Teórica", "Años de Experiencia"],
        intensives: {
            t1: "CURSOS", t2: "INTENSIVOS", desc: "Diseñados para quienes no tienen tiempo que perder. El carnet, más rápido que nunca.",
            card1: "TEÓRICA EXPRESS", card1d: "7 días de clases intensivas con todo lo necesario para aprobar a la primera.",
            card2: "ONLINE 24/7", card2d: "Acceso total a la plataforma de tests de última generación desde cualquier dispositivo."
        },
permisosTitle: ["TU", "CARNET"],
        permisosList: [
            { 
                n: "Permiso AM", 
                d: "Ciclomotores hasta 50cc.", 
                p: "390€",
                detalles: "Incluye: Matrícula, Tasa, Teórica, 2 prácticas en circuito (30min) y Examen."
            },
            { 
                n: "Permiso A1 ", 
                d: "Motocicletas ligera hasta 125cc.", 
                p: "880€",
                detalles: "Incluye: Matrícula, Tasa, Teórica, 4 prácticas en circuito cerrado (30min cada una), 2 prácticas en abierto (45min) y Exámenes."
            },
            { 
                n: "Permiso A2 ", 
                d: "Motocicletas de potencia media.", 
                p: "670€",
                detalles: "Incluye: Matrícula, Tasa, Teórica, 2 prácticas en circuito cerrado (30min cada una), 2 prácticas en abierto (45min) y Exámenes."
            },
                        { 
                n: "Permiso A ", 
                d: "Motocicletas sin limite .", 
                p: "550€",
                detalles: "Todo incluido"
            },
            { 
                n: "Permiso B", 
                d: "Automóviles y vehículos ligeros.", 
                p: "800€",
                detalles: "Incluye: Matrícula, Tasa, Teórica, 8 prácticas de circulación y Examen."
            },
            { 
                n: "Recuperación de puntos (Tavernes)", 
                d: "No te quedes sin conducir.", 
                p: "CONSULTAR",
                detalles: "Centro autorizado para la recuperación de puntos."
            }
        ],
        reviews: {
            title: "NUESTROS", subtitle: "ALUMNOS",
            items: [
                { name: "Marc S.", text: "Método increíble. ¡Aprobé la teórica en una semana!", stars: 5 },
                { name: "Elena R.", text: "Los traslados desde Simat son un lujo. ¡Muchas gracias!", stars: 5 },
                { name: "Joan M.", text: "Vehículos modernos y profes muy pacientes.", stars: 5 }
            ]
        },
        process: { title: "EL MÉTODO", subtitle: "RAMIS", steps: ["Inscripción", "Teórica", "Volante", "Licencia"] },
        why: ["+25 AÑOS", "ALTA TASA APROBADOS", "VEHÍCULOS MODERNOS", "RECOGIDA A CASA", "PAGO FLEXIBLE", "PROFES VIPS"],
        locations: {
            title: "VALLDIGNA", subtitle: "POWER",
            desc: "Si eres de Simat o Benifairó, te recogemos gratis. ¡Tú solo céntrate en conducir!",
            labels: ["DIRECCIÓN", "CONTACTO"]
        },
        faq: {
            title: "DUDAS", subtitle: "COMUNES",
            items: [
                { q: "¿Qué edad necesito?", a: "Puedes matricularte a los 17 años y 9 meses para la teórica." },
                { q: "¿Puedo pagar a plazos?", a: "¡Sí! Tenemos facilidades de pago personalizadas para ti." }
            ]
        },
        footer: "Autoescuela Ramis - Pegando Fuerte desde 1999.",
        footerNav: ["Navegación", "Encuéntranos", "Horario de Oficina", "Aviso Legal", "Privacidad"],
        gallery: {
            title: "COMUNIDAD", subtitle: "RAMIS",
            insta: "Sigue nuestro día a día en @auto_escola_ramis",
            btn: "Ver Instagram"
        }
    },
    en: {
        tagline: "PEGANT FORT",
        nav: ["LICENSES", "METHOD", "ADVANTAGES", "ENROLL"],
        hero: {
            title: "DRIVING SCHOOL", subtitle: "RAMIS",
            quote: "Because I am who I am thanks to you!!",
            btn1: "BOOK YOUR SPOT", pack: "STAR PACK B", offer: "GET THIS OFFER",
            include: ["9 VIP Lessons", "Express Theory", "Transfers Included", "Digital Material"]
        },
        stats: ["Students Passed", "Theory Success", "Years Experience"],
        intensives: {
            t1: "INTENSIVE", t2: "COURSES", desc: "Designed for those who have no time to waste. Your license, faster than ever.",
            card1: "EXPRESS THEORY", card1d: "7 days of intensive classes with everything you need to pass first time.",
            card2: "ONLINE 24/7", card2d: "Full access to our next-gen test platform from any device."
        },
permisosTitle: ["YOUR", "LICENSE"],
permisosList: [
    { 
        n: "License AM", 
        d: "Mopeds up to 50cc.", 
        p: "390€",
        detalles: "Includes: Enrollment, Fees, Theory, 2 track lessons (30min each) and Exam."
    },
    { 
        n: "License A1", 
        d: "Light motorcycles up to 125cc.", 
        p: "880€",
        detalles: "Includes: Enrollment, Fees, Theory, 4 closed circuit lessons (30min each), 2 road lessons (45min) and Exams."
    },
    { 
        n: "License A2", 
        d: "Medium power motorcycles.", 
        p: "670€",
        detalles: "Includes: Enrollment, Fees, Theory, 2 closed circuit lessons (30min each), 2 road lessons (45min) and Exams."
    },
    { 
        n: "License A", 
        d: "All motorcycles (No limit).", 
        p: "550€",
        detalles: "All inclusive (Training course)."
    },
    { 
        n: "License B", 
        d: "Cars and light vehicles.", 
        p: "800€",
        detalles: "Includes: Enrollment, Fees, Theory, 8 driving lessons and Exam."
    },
    { 
        n: "Points Recovery (Tavernes)", 
        d: "Get back on the road.", 
        p: "ENQUIRE",
        detalles: "Authorized center for points recovery."
    }
],
        reviews: {
            title: "OUR", subtitle: "STUDENTS",
            items: [
                { name: "Marc S.", text: "Incredible method. I passed the theory in one week!", stars: 5 },
                { name: "Elena R.", text: "Pick-ups from Simat are a luxury. Thank you so much!", stars: 5 },
                { name: "Joan M.", text: "Modern vehicles and very patient teachers.", stars: 5 }
            ]
        },
        process: { title: "THE RAMIS", subtitle: "METHOD", steps: ["Enrollment", "Theory", "Driving", "License"] },
        why: ["+25 YEARS", "HIGH PASS RATE", "MODERN VEHICLES", "HOME PICK-UP", "FLEXIBLE PAYMENT", "VIP TEACHERS"],
        locations: {
            title: "VALLDIGNA", subtitle: "POWER",
            desc: "If you are from Simat or Benifairó, we pick you up for free. You just focus on driving!",
            labels: ["ADDRESS", "CONTACT"]
        },
        faq: {
            title: "COMMON", subtitle: "QUESTIONS",
            items: [
                { q: "What age do I need?", a: "You can enroll at 17 years and 9 months for the theory exam." },
                { q: "Can I pay in installments?", a: "Yes! We have personalized payment plans for you." }
            ]
        },
        footer: "Ramis Driving School - Going Strong since 1999.",
        footerNav: ["Navigation", "Find Us", "Office Hours", "Legal Notice", "Privacy"],
        gallery: {
            title: "RAMIS", subtitle: "COMMUNITY",
            insta: "Follow our daily updates @auto_escola_ramis",
            btn: "View Instagram"
        }
    }
};

class RamisApp {
    constructor() {
        this.lang = 'ca';
        this.contact = { 
            whatsapp: "34622687585", 
            address: "Av. Germanies, 35 B, Tavernes", 
            phone: "622 68 75 85",
            instagram: "autoescola_ramis"
        };
        window.app = this;
        this.init();
    }

    init() {
        this.render();
        this.setupEventListeners();
        this.initReveal();
    }

    setLanguage(lang) {
        this.lang = lang;
        this.render();
        this.initReveal();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    setupEventListeners() {
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 30) {
                nav.classList.add('bg-black/95', 'backdrop-blur-xl', 'py-2', 'border-b', 'border-white/10');
            } else {
                nav.classList.remove('bg-black/95', 'backdrop-blur-xl', 'py-2', 'border-b', 'border-white/10');
            }
        });
    }

    initReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    render() {
        const t = CONTENT[this.lang];
        this.renderNav(t);
        this.renderHero(t);
        this.renderStats(t);
        this.renderIntensives(t);
        this.renderPermisos(t);
        this.renderReviews(t);
        this.renderProcess(t);
        this.renderWhy(t);
        this.renderLocations(t);
        this.renderGallery(t);
        this.renderFAQ(t);
        this.renderFooter(t);
        lucide.createIcons();
    }

renderNav(t) {
    document.getElementById("navbar").innerHTML = `
        <div class="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-5 flex justify-between items-center relative z-50">
            
<div class="flex items-center group cursor-pointer py-2" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                <div class="relative flex items-center justify-center">
                    
                    <div class="absolute inset-0 bg-red-600/50 rounded-full blur-[60px] opacity-80 group-hover:opacity-100 transition duration-700 scale-[2.2]"></div>
                    
                    <img src="img/logo_ramis.png" 
                        alt="Logo Autoescola Ramis" 
                        class="h-14 md:h-24 w-auto object-contain relative z-10 transition-all duration-700 group-hover:scale-105"
                        style="filter: 
                            /* Sombra 1: Brillo intenso y cercano al logo (como un neón) */
                            drop-shadow(0 0 15px rgba(255, 0, 0, 0.9)) 
                            /* Sombra 2: Sombra secundaria para dar profundidad y expansión */
                            drop-shadow(0 0 35px rgba(255, 0, 0, 0.8))
                            /* Sombra 3: Expansión final para que se vea mucho más */
                            drop-shadow(0 0 55px rgba(255, 0, 0, 0.7))
                            
                            /* Ajustes de imagen para que no se apague */
                            brightness(1.5) contrast(1.2);">
                        
                </div>
            </div>

            <div class="flex items-center gap-4 md:gap-8">
                <div class="relative flex items-center gap-2 group bg-zinc-900 px-3 py-1.5 rounded-full border border-white/5">
                    <i data-lucide="languages" class="w-3.5 h-3.5 text-red-600"></i>
                    <select onchange="app.setLanguage(this.value)" 
                        class="bg-transparent text-white border-none text-[11px] font-black outline-none cursor-pointer appearance-none hover:text-red-600 transition-colors uppercase tracking-widest">
                        <option value="ca" class="text-black" ${this.lang==='ca'?'selected':''}>CA</option>
                        <option value="es" class="text-black" ${this.lang==='es'?'selected':''}>ES</option>
                        <option value="en" class="text-black" ${this.lang==='en'?'selected':''}>EN</option>
                    </select>
                </div>

                <div class="relative group">
                    <div class="absolute -inset-0.5 bg-red-600 rounded-full opacity-40 group-hover:opacity-100 animate-pulse transition duration-500 blur-sm"></div>
                    <a href="https://wa.me/${this.contact.whatsapp}" 
                        class="relative flex items-center gap-2 bg-red-600 px-5 md:px-8 py-2.5 md:py-3.5 rounded-full text-[10px] md:text-[11px] font-black text-white transition-all active:scale-95 uppercase tracking-[0.2em]">
                        <i data-lucide="message-circle" class="w-4 h-4 hidden xs:block"></i>
                        ${t.nav[3]}
                    </a>
                </div>
            </div>
        </div>`;
    
    if (window.lucide) window.lucide.createIcons();
}
renderHero(t) {
    document.getElementById("hero").innerHTML = `
        <div class="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
            <div class="absolute inset-0 z-0">
                <img src="img/fto-ramis-hero.png" 
                     class="w-full h-full object-cover 
                            object-[center_20%] lg:object-[right_center] 
                            opacity-40 lg:opacity-60 scale-100" 
                     alt="Ramis Autoescola">
                
                <div class="absolute inset-0 bg-black/60 lg:bg-transparent"></div>
                
                <div class="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent hidden lg:block"></div>
                
                <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
            </div>
            
            <div class="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-10 lg:py-0">
                <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    
                    <div class="w-full lg:w-3/5 reveal text-center lg:text-left">
                        <div class="inline-block bg-red-600 border-l-4 border-white px-5 py-2 mb-8 lg:mb-10 skew-x-[-12deg] shadow-[10px_10px_20px_rgba(220,38,38,0.2)]">
                            <span class="text-white text-[13px] lg:text-base font-black tracking-[0.5em] uppercase inline-block skew-x-[12deg]">
                                ${t.tagline}
                            </span>
                        </div>
                        
                        <h1 class="text-4xl md:text-7xl xl:text-8xl font-ramis leading-[0.9] mb-4 lg:mb-6 tracking-tighter text-white uppercase drop-shadow-2xl">
                            ${t.hero.title}<br>
                            <span class="text-red-600 italic inline-block mt-1">${t.hero.subtitle}</span>
                        </h1>
                        
                        <p class="text-zinc-300 text-xs md:text-lg font-medium mb-8 lg:mb-10 max-w-xs md:max-w-md mx-auto lg:mx-0 leading-relaxed italic">
                            "${t.hero.quote}"
                        </p>
                        
                        <div class="flex justify-center lg:justify-start">
                            <a href="#permisos" class="bg-white text-black px-8 py-4 text-[9px] lg:text-[10px] font-black tracking-widest hover:bg-red-600 hover:text-white transition-all uppercase shadow-xl">
                                ${t.hero.btn1}
                            </a>
                        </div>
                    </div>

                    <div class="w-full lg:w-[380px] reveal z-20">
                        <div class="glass p-1 rounded-[2rem] border border-white/10 shadow-2xl">
                            <div class="bg-zinc-900/90 backdrop-blur-xl p-6 lg:p-8 rounded-[1.8rem] text-center">
                                <span class="text-red-600 font-black text-[9px] mb-3 lg:mb-4 tracking-widest uppercase block">${t.hero.pack}</span>
                                
                                <div class="flex items-center justify-center gap-1 mb-3 lg:mb-4">
                                    <span class="text-white text-6xl lg:text-8xl font-ramis tracking-tighter leading-none">800</span>
                                    <span class="text-red-600 text-3xl lg:text-4xl font-ramis leading-none italic">€</span>
                                </div>
                                
                                <ul class="text-left space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                                    ${t.hero.include.map(i => `
                                        <li class="flex items-center gap-3">
                                            <i data-lucide="check" class="text-red-600 w-3 h-3 lg:w-4 lg:h-4"></i>
                                            <span class="text-zinc-400 text-[9px] lg:text-[10px] font-bold uppercase tracking-wide">${i}</span>
                                        </li>`).join('')}
                                </ul>
                                
                                <a href="https://wa.me/${this.contact.whatsapp}" class="block w-full bg-red-600 py-4 rounded-xl font-black text-[9px] lg:text-[10px] tracking-widest text-white hover:bg-white hover:text-black transition-all uppercase">
                                    ${t.hero.offer}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>`;
}


renderGallery(t) {
    const container = document.getElementById("gallery");
    if (!container) return;

    const photos = [
        "img/fto_cox_1.jpeg", 
        "img/foto_cox_2.jpeg",
        "img/foto_moto_2.png",
        "img/foto_permis_a2.jpeg",
        "img/fto_prac_2.png"
    ];

    container.innerHTML = `
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal">
                <div>
                    <h2 class="text-4xl md:text-6xl font-ramis tracking-tighter text-white uppercase leading-none">
                        ${t.gallery.title} <span class="text-red-600 italic">${t.gallery.subtitle}</span>
                    </h2>
                    <p class="text-zinc-500 mt-4 uppercase tracking-[0.3em] text-[11px] font-black underline decoration-red-600 ">${t.gallery.insta}</p>
                </div>
                <a href="https://www.instagram.com/auto_escola_ramis/" target="_blank" 
                   class="bg-red-600 text-white px-8 py-4 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all flex items-center gap-3 shadow-lg shadow-red-600/20">
                    <i data-lucide="instagram" class="w-4 h-4"></i> ${t.gallery.btn}
                </a>
            </div>

            <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                ${photos.map((src, index) => `
                    <div class="reveal break-inside-avoid relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                        <img src="${src}" 
                             alt="Autoescola Ramis ${index + 1}"
                             class="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105"
                             loading="lazy">
                        
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                            <span class="text-white font-ramis text-lg tracking-tighter uppercase italic">#RAMIS_TEAM</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>`;
    
    if (window.lucide) window.lucide.createIcons();
}

    renderStats(t) {
        const stats = ["+1200", "98%", "25"];
        document.getElementById("stats").innerHTML = `
            <div class="max-w-6xl mx-auto px-4 md:px-6 -mt-8 lg:-mt-16">
                <div class="glass grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 py-8 md:py-12 rounded-3xl shadow-2xl">
                    ${stats.map((v, i) => `
                        <div class="text-center py-6 md:p-6 reveal">
                            <div class="text-5xl md:text-6xl font-ramis text-white mb-2 tracking-tighter">${v}</div>
                            <div class="text-red-600 text-[9px] font-black tracking-[0.2em] uppercase">${t.stats[i]}</div>
                        </div>`).join('')}
                </div>
            </div>`;
    }

    renderIntensives(t) {
        document.getElementById("intensives").innerHTML = `
            <div class="max-w-7xl mx-auto px-6">
                <div class="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8 reveal text-center lg:text-left">
                    <div>
                        <h2 class="text-4xl md:text-6xl font-ramis leading-none mb-4 tracking-tighter text-white uppercase">
                            ${t.intensives.t1}<br><span class="text-red-600 italic">${t.intensives.t2}</span>
                        </h2>
                        <div class="h-1.5 w-20 bg-red-600 rounded-full mx-auto lg:mx-0"></div>
                    </div>
                    <p class="text-zinc-500 max-w-sm font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] leading-relaxed">${t.intensives.desc}</p>
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="glass p-8 md:p-12 rounded-3xl reveal group">
                        <div class="flex justify-between items-start mb-8">
                            <div class="bg-red-600/10 p-3 rounded-xl"><i data-lucide="zap" class="text-red-600 w-8 h-8"></i></div>
                            <span class="text-4xl md:text-6xl font-ramis text-white/5 tracking-tighter">07</span>
                        </div>
                        <h3 class="text-2xl md:text-3xl font-ramis mb-4 tracking-tight text-white uppercase">${t.intensives.card1}</h3>
                        <p class="text-zinc-400 font-medium text-[10px] md:text-xs leading-relaxed uppercase tracking-widest">${t.intensives.card1d}</p>
                    </div>
                    <div class="bg-red-600 p-8 md:p-12 rounded-3xl reveal group shadow-xl shadow-red-600/10">
                        <div class="flex justify-between items-start mb-8 text-white">
                            <div class="bg-black/20 p-3 rounded-xl"><i data-lucide="smartphone" class="w-8 h-8"></i></div>
                            <span class="text-4xl md:text-6xl font-ramis text-black/10 tracking-tighter">APP</span>
                        </div>
                        <h3 class="text-2xl md:text-3xl font-ramis mb-4 text-white tracking-tight uppercase">${t.intensives.card2}</h3>
                        <p class="text-white/80 font-medium text-[10px] md:text-xs leading-relaxed uppercase tracking-widest">${t.intensives.card2d}</p>
                    </div>
                </div>
            </div>`;
    }

renderPermisos(t) {
    const imgs = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegLKYh-6dHs0hdAV-l1cgTQIbEmdeliWi9w&s", // AM
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjjW9REjDRV2u42KtGSihmZXcp1pbpDM25g&s", // A1
        "https://maquinamotors.com/blog/wp-content/uploads/2023/08/CB500F-min.png", // A2
        "https://autoescuelacatedra.com/wp-content/uploads/2022/03/carnet-de-moto-a-ciudad-real.jpg", // A
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800", // B
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800"  // Punts
    ];

    document.getElementById("permisos").innerHTML = `
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-4xl md:text-6xl font-ramis text-center mb-16 reveal tracking-tighter text-white uppercase">
                ${t.permisosTitle[0]} <span class="text-red-600 italic">${t.permisosTitle[1]}</span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${t.permisosList.map((p, i) => `
                    <div class="reveal group flex flex-col h-full bg-zinc-900/30 p-4 rounded-[2rem] border border-white/5 transition-all hover:border-red-600/30">
                        <div class="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-6">
                            <img src="${imgs[i] || imgs[0]}" class="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div class="absolute bottom-6 left-6"><span class="text-xl md:text-2xl font-ramis text-white uppercase">${p.n}</span></div>
                        </div>
                        <div class="flex-grow flex flex-col px-2">
                            <p class="text-zinc-400 text-[11px] font-medium uppercase tracking-widest mb-4 leading-relaxed">${p.d}</p>
                            
                            <div id="info-${i}" class="hidden mb-4 p-4 bg-white/5 rounded-2xl border border-white/10 animate-fade-in">
                                <p class="text-[10px] text-zinc-300 leading-relaxed font-bold uppercase tracking-tighter">
                                    ${p.detalles}
                                </p>
                            </div>

                            <div class="flex flex-col gap-4 border-t border-white/10 pt-6 mt-auto">
                                <div class="flex justify-between items-center">
                                    <span class="text-2xl md:text-3xl font-ramis text-red-600 tracking-tighter">${p.p}</span>
                                    <button onclick="document.getElementById('info-${i}').classList.toggle('hidden')" 
                                            class="text-[9px] font-black tracking-[0.2em] text-white/60 uppercase hover:text-white transition">
                                        INFO +
                                    </button>
                                </div>
                                
                                <a href="tel:622687585" 
                                   class="w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase transition-all transform active:scale-95 shadow-lg shadow-red-600/20">
                                    RESERVAR ARA
                                </a>
                            </div>
                        </div>
                    </div>`).join('')}
            </div>
        </div>`;
}

    renderReviews(t) {
        document.getElementById("reviews").innerHTML = `
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center mb-16 reveal">
                    <h2 class="text-4xl md:text-6xl font-ramis tracking-tighter text-white uppercase">${t.reviews.title} <span class="text-red-600 italic">${t.reviews.subtitle}</span></h2>
                    <div class="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    ${t.reviews.items.map(r => `
                        <div class="glass p-8 rounded-3xl border-none relative overflow-hidden group hover:bg-white/5 transition-all">
                            <div class="flex gap-1 mb-4">${Array(r.stars).fill().map(() => `<i data-lucide="star" class="w-4 h-4 fill-red-600 text-red-600"></i>`).join('')}</div>
                            <p class="text-white text-sm font-medium italic mb-6 leading-relaxed">"${r.text}"</p>
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-black text-[10px] text-white">${r.name[0]}</div>
                                <span class="text-zinc-500 font-black text-[10px] uppercase tracking-widest">${r.name}</span>
                            </div>
                        </div>`).join('')}
                </div>
            </div>`;
    }

    renderProcess(t) {
        document.getElementById("process").innerHTML = `
            <div class="max-w-7xl mx-auto px-6">
                <h2 class="text-3xl md:text-5xl font-ramis text-center mb-12 md:mb-20 reveal text-white uppercase">${t.process.title} <span class="text-red-600">${t.process.subtitle}</span></h2>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    ${t.process.steps.map((s, i) => `
                        <div class="p-6 md:p-10 glass rounded-3xl text-center reveal group border-none">
                            <div class="text-5xl md:text-7xl font-ramis text-white/5 mb-[-15px] md:mb-[-20px] transition-colors">${i+1}</div>
                            <p class="font-black uppercase tracking-[0.2em] text-[9px] md:text-xs text-white relative z-10">${s}</p>
                        </div>`).join('')}
                </div>
            </div>`;
    }

    renderWhy(t) {
        document.getElementById("why").innerHTML = `
            <div class="max-w-7xl mx-auto px-6 overflow-hidden">
                <div class="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-6 md:gap-y-8">
                    ${t.why.map(w => `
                        <div class="flex items-center gap-3 reveal">
                            <i data-lucide="shield-check" class="w-4 h-4 text-white opacity-50"></i>
                            <span class="font-black uppercase text-[8px] md:text-[10px] tracking-[0.2em] text-white whitespace-nowrap">${w}</span>
                        </div>`).join('')}
                </div>
            </div>`;
    }

renderLocations(t) {
    document.getElementById("locations").innerHTML = `
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-12 md:mb-20 reveal">
                <h2 class="text-4xl md:text-6xl font-ramis tracking-tighter leading-none text-white uppercase">
                    ${t.locations.title}<br><span class="text-red-600 italic">${t.locations.subtitle}</span>
                </h2>
                <p class="text-zinc-400 font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] leading-relaxed mt-6 max-w-2xl mx-auto">
                    ${t.locations.desc}
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 md:gap-12">
                
                <div class="reveal flex flex-col gap-6">
                    <div class="flex items-center gap-4 p-5 glass rounded-2xl border border-white/5 hover:border-red-600/30 transition-all">
                        <div class="bg-red-600 p-2.5 rounded-lg text-white"><i data-lucide="map-pin" class="w-5 h-5"></i></div>
                        <div>
                            <p class="text-[9px] text-zinc-500 font-black uppercase tracking-widest">TAVERNES DE LA VALLDIGNA</p>
                            <p class="font-bold text-xs md:text-sm text-white">Av. Germanies, 35 B, Tavernes</p>
                            <a href="tel:622687585" class="text-[10px] text-red-600 font-bold tracking-widest hover:underline tracking-[0.1em]">622 687 585</a>
                        </div>
                    </div>
                    <div class="h-64 md:h-80 rounded-3xl overflow-hidden glass p-1 grayscale opacity-70 border border-white/10 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198508.5535604322!2d-0.2970016195516005!3d38.9766055990213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61c72ae1c9122f%3A0x5d9bc38d9601d9e7!2sRamis%20Autoescuela!5e0!3m2!1ses!2ses!4v1774621715552!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div class="reveal flex flex-col gap-6">
                    <div class="flex items-center gap-4 p-5 glass rounded-2xl border border-white/5 hover:border-red-600/30 transition-all">
                        <div class="bg-red-600 p-2.5 rounded-lg text-white"><i data-lucide="map-pin" class="w-5 h-5"></i></div>
                        <div>
                            <p class="text-[9px] text-zinc-500 font-black uppercase tracking-widest">GANDIA</p>
                            <p class="font-bold text-xs md:text-sm text-white">C/ Juan Ramón Jiménez, 3, Gandia</p>
                            <a href="tel:622687585" class="text-[10px] text-red-600 font-bold tracking-widest hover:underline tracking-[0.1em]">622 687 585</a>
                        </div>
                    </div>
                    <div class="h-64 md:h-80 rounded-3xl overflow-hidden glass p-1 grayscale opacity-70 border border-white/10 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49627.285910581595!2d-0.17339449999999998!3d38.9763951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61e9ef1b5cca7b%3A0xfe7bee2b98029aaa!2sRamis%20Autoescuela!5e0!3m2!1ses!2ses!4v1774621685191!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
        </div>`;
    
    if (window.lucide) {
        lucide.createIcons();
    }
}

    renderFAQ(t) {
        document.getElementById("faq").innerHTML = `
            <div class="max-w-2xl mx-auto px-6">
                <h2 class="text-3xl md:text-5xl font-ramis text-center mb-12 reveal tracking-tighter text-white uppercase">${t.faq.title} <span class="text-red-600 italic">${t.faq.subtitle}</span></h2>
                <div class="space-y-4">
                    ${t.faq.items.map((f, i) => `
                        <div class="glass p-6 md:p-8 rounded-2xl md:rounded-3xl reveal border-none">
                            <h4 class="font-black text-[10px] md:text-xs uppercase tracking-widest mb-3 text-red-600 flex gap-4 align-top">
                                <span class="text-white opacity-20 font-ramis italic">0${i+1}</span> ${f.q}
                            </h4>
                            <p class="text-zinc-500 text-[9px] md:text-[10px] font-bold uppercase leading-relaxed tracking-widest pl-10">${f.a}</p>
                        </div>`).join('')}
                </div>
            </div>`;
    }

renderFooter(t) {
        document.getElementById("footer").innerHTML = `
            <footer class="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
                <div class="max-w-7xl mx-auto px-6 relative z-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div class="space-y-6">
                            <div class="font-ramis text-2xl tracking-tighter text-white uppercase">RAMIS <span class="text-red-600 italic">AUTOESCOLA</span></div>
                            <p class="text-zinc-500 text-[10px] font-bold leading-relaxed uppercase tracking-widest italic">${t.footer}</p>
                            <div class="flex gap-4">
                                <a href="https://instagram.com/${this.contact.instagram}" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition-all"><i data-lucide="instagram" class="w-4 h-4"></i></a>
                                <a href="https://wa.me/${this.contact.whatsapp}" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition-all"><i data-lucide="message-circle" class="w-4 h-4"></i></a>
                            </div>
                        </div>

                        <div class="space-y-6">
                            <h4 class="text-white font-black text-[11px] tracking-[0.2em] uppercase">${t.footerNav[0]}</h4>
                            <ul class="space-y-3">
                                ${t.nav.map(item => `<li><a href="#${item.toLowerCase()}" class="text-zinc-500 hover:text-red-600 text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center gap-2 group"><span class="w-0 group-hover:w-2 h-[1px] bg-red-600 transition-all"></span>${item}</a></li>`).join('')}
                            </ul>
                        </div>

                        <div class="space-y-6">
                            <h4 class="text-white font-black text-[11px] tracking-[0.2em] uppercase">${t.footerNav[1]}</h4>
                            <div class="space-y-4">
                                <div class="flex items-start gap-3">
                                    <i data-lucide="map-pin" class="w-4 h-4 text-red-600 mt-0.5"></i>
                                    <div>
                                        <p class="text-white text-[9px] font-black uppercase tracking-widest mb-1">Tavernes</p>
                                        <p class="text-zinc-500 text-[9px] font-bold uppercase tracking-widest leading-tight">Av. Germanies, 35 B</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <i data-lucide="map-pin" class="w-4 h-4 text-red-600 mt-0.5"></i>
                                    <div>
                                        <p class="text-white text-[9px] font-black uppercase tracking-widest mb-1">Gandia</p>
                                        <p class="text-zinc-500 text-[9px] font-bold uppercase tracking-widest leading-tight">C/ J. Ramón Jiménez, 3</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-6">
                            <h4 class="text-white font-black text-[11px] tracking-[0.2em] uppercase">${t.footerNav[2]}</h4>
                            <div class="bg-white/5 p-4 rounded-xl border border-white/5 space-y-3">
                                <div class="flex flex-col gap-1">
                                    <span class="text-zinc-500 text-[9px] font-black uppercase tracking-tighter italic">Lunes - Viernes</span>
                                    <div class="flex justify-between items-center">
                                        <span class="text-white text-[10px] font-black">10:00 – 13:00</span>
                                        <span class="text-red-600 text-[10px] font-black">16:00 – 20:00</span>
                                    </div>
                                </div>
                                <div class="pt-2 border-t border-white/5 flex justify-between">
                                    <span class="text-zinc-600 text-[9px] font-black uppercase tracking-tighter">Sáb - Dom</span>
                                    <span class="text-zinc-600 text-[9px] font-black uppercase tracking-tighter">Cerrado</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p class="text-zinc-600 text-[9px] font-bold uppercase tracking-widest">© ${new Date().getFullYear()} Autoescola Ramis.</p>
                        <div class="flex gap-8">
                            <a href="#" class="text-zinc-600 hover:text-white text-[9px] font-bold uppercase tracking-widest">${t.footerNav[3]}</a>
                            <a href="#" class="text-zinc-600 hover:text-white text-[9px] font-bold uppercase tracking-widest">${t.footerNav[4]}</a>
                        </div>
                    </div>
                </div>
            </footer>`;
        
        if (window.lucide) lucide.createIcons();
    }
}

document.addEventListener('DOMContentLoaded', () => { new RamisApp(); });
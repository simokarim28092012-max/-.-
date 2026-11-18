/* Doctore Souhaila — localized reference data and interactions. */
'use strict';

const LANGS = ['en', 'fr', 'ar'];
const localeIndex = { en: 0, fr: 1, ar: 2 };
const ui = {
  en: {
    workspace: 'WORKSPACE', overview: 'Overview', firstAid: 'First aid library', learning: 'Learning hub', notebook: 'Ribbon notebook',
    sidebarQuote: 'Small steps today. Steady hands tomorrow.', personalDesk: "SOUHAILA'S STUDY DESK", offlineReady: 'Ready for your next study session',
    myDesk: 'My desk', crumbDashboard: 'Overview', crumbAid: 'First aid library', crumbLearn: 'Learning hub', crumbQuiz: 'Quiz challenge', crumbNotebook: 'Ribbon notebook',
    quiz: 'Quiz challenge', quizEyebrow: 'FIRST-AID CHALLENGE', quizTitle: 'Test your lifesaving <em>knowledge.</em>', quizDesc: 'Choose a difficulty, answer 20 randomized questions, and review each explanation immediately.',
    easyLevel: 'Easy', mediumLevel: 'Medium', hardLevel: 'Hard', easyLevelDesc: 'Basic emergency knowledge', mediumLevelDesc: 'Realistic first-aid situations', hardLevelDesc: 'Critical decisions and complex care',
    questionsLabel: 'questions', changeLevel: 'Change level', nextQuestion: 'Next question', roundComplete: 'ROUND COMPLETE', newRound: 'Start new round', chooseAnotherLevel: 'Choose another level',
    correctAnswer: 'Correct', incorrectAnswer: 'Incorrect', correctCount: 'correct', excellentResult: 'Excellent work — you are building strong lifesaving judgment.', goodResult: 'Good result — review the explanations and try another round.', practiceResult: 'Keep practicing — a second round will strengthen your response choices.',
    symptomTitle: 'Symptoms and situation',
    personalDashboard: 'PERSONAL DASHBOARD', dashTitle: 'Curiosity is a<br><em>beautiful</em> first step.', dashSubtitle: 'A calm corner for learning biology, building confidence, and keeping useful notes close.',
    continueLearning: 'Continue learning', anatomy: 'ANATOMY', care: 'CARE', firstAidTopics: 'first-aid topics', studyGuides: 'study guides', savedNotes: 'saved notes',
    quickAccess: 'QUICK ACCESS', pickUp: 'Pick up where you like', yourPace: 'Your pace, your path', firstAidDesc: 'Clear steps for common emergencies.',
    exploreLibrary: 'EXPLORE LIBRARY', learnDesc: 'From SVT foundations to anatomy.', openStudyGuides: 'OPEN STUDY GUIDES', notesDesc: 'Keep your questions and discoveries.',
    writeNote: 'WRITE A NOTE', safetyTitle: 'A learning reference, not a substitute for care', safetyText: 'In an emergency, contact local emergency services and follow the advice of a qualified professional.',
    footerLine: 'Made for learning, with care.', referenceDesk: 'QUICK REFERENCE', firstAidPageTitle: 'First aid, made <em>clear.</em>',
    firstAidPageDesc: 'Search practical, safety-first guidance. Call local emergency services for a serious or life-threatening emergency.',
    searchAid: 'Search first aid topics...', tapForSteps: 'Select a topic for step-by-step guidance', topics: 'topics', nothingFound: 'No matching topics',
    tryAnotherSearch: 'Try a different search or category.', allTopics: 'All topics', catTrauma: 'Trauma', catBreathing: 'Breathing', catCardiac: 'Cardiac',
    catEnvironmental: 'Environmental', catBites: 'Bites & stings', catPoisoning: 'Poisoning', catEye: 'Eyes',
    studyStudio: 'STUDY STUDIO · SVT + ANATOMY', learnTitle: 'Understand the body.<br><em>One system at a time.</em>',
    learnPageDesc: 'Build from your collège biology foundations, then connect each concept to the bigger picture.',
    catAll: 'All systems', catHeart: 'Heart & circulation', catBrain: 'Brain & nerves', catImmune: 'Immune system', catRespiratory: 'Respiratory',
    catDigestive: 'Digestive', catMuscular: 'Muscular', catGenetics: 'Genetics', catSkeletal: 'Skeletal', catUrinary: 'Urinary', catEndocrine: 'Endocrine',
    readGuide: 'READ STUDY GUIDE', functionLabel: 'FUNCTION', keyFacts: 'KEY FACTS', clinicalTip: 'CLINICAL CONNECTION',
    privatePages: 'YOUR PRIVATE PAGES', notebookTitle: 'Thoughts worth <em>keeping.</em>',
    notebookDesc: 'A soft place to collect questions, study notes, and little discoveries.', yourNotebook: 'YOUR NOTEBOOK', newNote: 'New note',
    notesSavedLocally: 'Notes save automatically on this device.', untitledNote: 'Untitled note', saved: 'Saved', saving: 'Saving…',
    writeThoughts: 'Let your thoughts find their line...', everyThoughtCounts: 'EVERY THOUGHT COUNTS', words: 'WORDS', deleteNote: 'Delete note',
    emptyNotes: 'No notes yet. Make your first page.', noteUntitled: 'Untitled note', noteDeleted: 'Note deleted', deleteConfirm: 'Delete this note? This cannot be undone.',
    emergencyReminder: 'If this may be life-threatening, call your local emergency number now. Do not delay professional help.',
    doTitle: 'What to do', dontTitle: 'What to avoid', categoryLabel: 'CATEGORY', emergencyCall: 'Call local emergency services',
    toastCreated: 'A new page is ready.', toastSaved: 'Note saved.', toastStorageError: 'Local storage is unavailable; this note may not persist.',
    language: 'Language', mainNavigation: 'Main navigation', home: 'Doctore Souhaila home', aidCategories: 'First aid categories',
    learningCategories: 'Learning categories', noteContent: 'Note content', additionalDoTitle: 'Useful reminders',
    close: 'Close', countLabel: 'results', guideEmpty: 'No study guides in this category.'
  },
  fr: {
    workspace: 'ESPACE DE TRAVAIL', overview: 'Aperçu', firstAid: 'Premiers secours', learning: 'Espace apprentissage', notebook: 'Carnet rubané',
    sidebarQuote: "De petits pas aujourd'hui. Des gestes sûrs demain.", personalDesk: 'LE BUREAU DE SOUHAILA', offlineReady: 'Prête pour ta prochaine séance',
    myDesk: 'Mon bureau', crumbDashboard: 'Aperçu', crumbAid: 'Premiers secours', crumbLearn: 'Apprentissage', crumbQuiz: 'Quiz', crumbNotebook: 'Carnet rubané',
    quiz: 'Quiz', quizEyebrow: 'DÉFI DE PREMIERS SECOURS', quizTitle: 'Teste tes <em>connaissances vitales.</em>', quizDesc: 'Choisis un niveau, réponds à 20 questions aléatoires et lis chaque explication.',
    easyLevel: 'Facile', mediumLevel: 'Intermédiaire', hardLevel: 'Difficile', easyLevelDesc: 'Connaissances essentielles', mediumLevelDesc: 'Situations réalistes', hardLevelDesc: 'Décisions critiques et cas complexes',
    questionsLabel: 'questions', changeLevel: 'Changer de niveau', nextQuestion: 'Question suivante', roundComplete: 'JOURNÉE TERMINÉE', newRound: 'Nouvelle partie', chooseAnotherLevel: 'Choisir un autre niveau',
    correctAnswer: 'Bonne réponse', incorrectAnswer: 'Réponse incorrecte', correctCount: 'bonnes réponses', excellentResult: 'Excellent travail — ton jugement de secours se renforce.', goodResult: 'Bon résultat — relis les explications et retente une partie.', practiceResult: 'Continue à t’exercer — une nouvelle partie renforcera tes choix.',
    symptomTitle: 'Symptômes et situation',
    personalDashboard: 'TABLEAU DE BORD PERSONNEL', dashTitle: 'La curiosité est un<br><em>beau</em> premier pas.', dashSubtitle: 'Un coin paisible pour apprendre la biologie, prendre confiance et garder ses notes à portée de main.',
    continueLearning: 'Continuer à apprendre', anatomy: 'ANATOMIE', care: 'SOINS', firstAidTopics: 'gestes de premiers secours', studyGuides: 'fiches de révision', savedNotes: 'notes enregistrées',
    quickAccess: 'ACCÈS RAPIDE', pickUp: 'À toi de choisir', yourPace: 'À ton rythme, à ta façon', firstAidDesc: 'Des étapes claires pour les urgences courantes.',
    exploreLibrary: 'EXPLORER LES FICHES', learnDesc: 'Des bases de SVT à l’anatomie.', openStudyGuides: 'OUVRIR LES FICHES', notesDesc: 'Garde tes questions et découvertes.',
    writeNote: 'ÉCRIRE UNE NOTE', safetyTitle: 'Un support pédagogique, pas un remplacement des soins', safetyText: 'En cas d’urgence, contacte les services d’urgence locaux et suis les conseils d’un professionnel qualifié.',
    footerLine: 'Conçu pour apprendre, avec soin.', referenceDesk: 'REPÈRES PRATIQUES', firstAidPageTitle: 'Les premiers secours, en toute <em>clarté.</em>',
    firstAidPageDesc: 'Recherche des conseils pratiques axés sur la sécurité. En cas d’urgence grave ou vitale, appelle les secours locaux.',
    searchAid: 'Rechercher un geste de secours...', tapForSteps: 'Choisis un sujet pour afficher les étapes', topics: 'sujets', nothingFound: 'Aucun sujet correspondant',
    tryAnotherSearch: 'Essaie un autre terme ou une autre catégorie.', allTopics: 'Tous les sujets', catTrauma: 'Traumatismes', catBreathing: 'Respiration', catCardiac: 'Cœur',
    catEnvironmental: 'Environnement', catBites: 'Morsures et piqûres', catPoisoning: 'Intoxication', catEye: 'Yeux',
    studyStudio: 'ATELIER D’ÉTUDE · SVT + ANATOMIE', learnTitle: 'Comprendre le corps.<br><em>Un système à la fois.</em>',
    learnPageDesc: 'Pars des bases de SVT du collège, puis relie chaque notion à une vision plus large.',
    catAll: 'Tous les systèmes', catHeart: 'Cœur et circulation', catBrain: 'Cerveau et nerfs', catImmune: 'Système immunitaire', catRespiratory: 'Respiration',
    catDigestive: 'Digestion', catMuscular: 'Muscles', catGenetics: 'Génétique', catSkeletal: 'Squelette', catUrinary: 'Système urinaire', catEndocrine: 'Système endocrinien',
    readGuide: 'LIRE LA FICHE', functionLabel: 'FONCTION', keyFacts: 'À RETENIR', clinicalTip: 'LIEN AVEC LES SOINS',
    privatePages: 'TES PAGES PERSONNELLES', notebookTitle: 'Des idées à <em>garder.</em>',
    notebookDesc: 'Un endroit doux pour rassembler questions, notes de cours et petites découvertes.', yourNotebook: 'TON CARNET', newNote: 'Nouvelle note',
    notesSavedLocally: 'Les notes sont enregistrées sur cet appareil.', untitledNote: 'Note sans titre', saved: 'Enregistré', saving: 'Enregistrement…',
    writeThoughts: 'Laisse tes idées trouver leur ligne...', everyThoughtCounts: 'CHAQUE IDÉE COMPTE', words: 'MOTS', deleteNote: 'Supprimer la note',
    emptyNotes: 'Pas encore de note. Crée ta première page.', noteUntitled: 'Note sans titre', noteDeleted: 'Note supprimée', deleteConfirm: 'Supprimer cette note ? Cette action est irréversible.',
    emergencyReminder: 'Si la situation peut menacer la vie, appelle immédiatement le numéro d’urgence local. Ne retarde pas les soins professionnels.',
    doTitle: 'À faire', dontTitle: 'À éviter', categoryLabel: 'CATÉGORIE', emergencyCall: 'Appeler les secours locaux',
    toastCreated: 'Une nouvelle page est prête.', toastSaved: 'Note enregistrée.', toastStorageError: 'Le stockage local est indisponible ; cette note risque de ne pas être conservée.',
    language: 'Langue', mainNavigation: 'Navigation principale', home: 'Accueil Doctore Souhaila', aidCategories: 'Catégories de premiers secours',
    learningCategories: 'Catégories d’apprentissage', noteContent: 'Contenu de la note', additionalDoTitle: 'Conseils utiles',
    close: 'Fermer', countLabel: 'résultats', guideEmpty: 'Aucune fiche dans cette catégorie.'
  },
  ar: {
    workspace: 'مساحة العمل', overview: 'نظرة عامة', firstAid: 'دليل الإسعافات الأولية', learning: 'مركز التعلم', notebook: 'دفتر الملاحظات',
    sidebarQuote: 'خطوات صغيرة اليوم، وأيادٍ واثقة غدًا.', personalDesk: 'مكتب سهيلة الدراسي', offlineReady: 'جاهزة لجلسة الدراسة القادمة',
    myDesk: 'مكتبي', crumbDashboard: 'نظرة عامة', crumbAid: 'الإسعافات الأولية', crumbLearn: 'مركز التعلم', crumbQuiz: 'اختبار المعلومات', crumbNotebook: 'دفتر الملاحظات',
    quiz: 'اختبار المعلومات', quizEyebrow: 'تحدي الإسعافات الأولية', quizTitle: 'اختبري <em>معرفتك المنقذة للحياة.</em>', quizDesc: 'اختاري مستوى الصعوبة، وأجيبي عن 20 سؤالًا عشوائيًا، وراجعي تفسير كل إجابة.',
    easyLevel: 'سهل', mediumLevel: 'متوسط', hardLevel: 'صعب', easyLevelDesc: 'معلومات طوارئ أساسية', mediumLevelDesc: 'مواقف إسعافية واقعية', hardLevelDesc: 'قرارات حرجة وحالات معقدة',
    questionsLabel: 'سؤالًا', changeLevel: 'تغيير المستوى', nextQuestion: 'السؤال التالي', roundComplete: 'اكتملت الجولة', newRound: 'جولة جديدة', chooseAnotherLevel: 'اختيار مستوى آخر',
    correctAnswer: 'إجابة صحيحة', incorrectAnswer: 'إجابة غير صحيحة', correctCount: 'إجابة صحيحة', excellentResult: 'عمل ممتاز — أحكامك الإسعافية في تحسن واضح.', goodResult: 'نتيجة جيدة — راجعي التفسيرات وحاولي جولة أخرى.', practiceResult: 'استمري في التدريب — الجولة التالية ستقوي اختياراتك.',
    symptomTitle: 'الأعراض والموقف',
    personalDashboard: 'لوحة التحكم الشخصية', dashTitle: 'الفضول هو<br><em>خطوة أولى جميلة.</em>', dashSubtitle: 'مساحة هادئة لتعلّم الأحياء وبناء الثقة والاحتفاظ بملاحظاتك المهمة.',
    continueLearning: 'واصلي التعلّم', anatomy: 'التشريح', care: 'الرعاية', firstAidTopics: 'موضوع إسعافات أولية', studyGuides: 'دليلًا دراسيًا', savedNotes: 'ملاحظات محفوظة',
    quickAccess: 'وصول سريع', pickUp: 'اختاري ما يناسبك', yourPace: 'على وتيرتك وبطريقتك', firstAidDesc: 'خطوات واضحة للحالات الشائعة.',
    exploreLibrary: 'استكشفي الدليل', learnDesc: 'من أساسيات علوم الحياة إلى التشريح.', openStudyGuides: 'افتحي الدروس', notesDesc: 'احتفظي بأسئلتك واكتشافاتك.',
    writeNote: 'اكتبي ملاحظة', safetyTitle: 'مرجع تعليمي وليس بديلًا عن الرعاية الطبية', safetyText: 'في حالات الطوارئ، اتصلي بخدمات الطوارئ المحلية واتبعي إرشادات مختص مؤهل.',
    footerLine: 'صُمم للتعلّم بعناية.', referenceDesk: 'مرجع سريع', firstAidPageTitle: 'إسعافات أولية <em>بوضوح.</em>',
    firstAidPageDesc: 'ابحثي عن إرشادات عملية تضع السلامة أولًا. اتصلي بالطوارئ المحلية في الحالات الخطيرة أو المهددة للحياة.',
    searchAid: 'ابحثي في مواضيع الإسعافات...', tapForSteps: 'اختاري موضوعًا لعرض الخطوات', topics: 'موضوعًا', nothingFound: 'لا توجد مواضيع مطابقة',
    tryAnotherSearch: 'جرّبي عبارة بحث أو فئة أخرى.', allTopics: 'كل المواضيع', catTrauma: 'الإصابات', catBreathing: 'التنفس', catCardiac: 'القلب',
    catEnvironmental: 'البيئة', catBites: 'العضّات واللسعات', catPoisoning: 'التسمم', catEye: 'العين',
    studyStudio: 'استوديو الدراسة · علوم الحياة والتشريح', learnTitle: 'افهمي جسم الإنسان.<br><em>جهازًا بعد جهاز.</em>',
    learnPageDesc: 'ابدئي بأساسيات علوم الحياة في الإعدادي، ثم اربطي كل مفهوم بالصورة الأكبر.',
    catAll: 'كل الأجهزة', catHeart: 'القلب والدورة الدموية', catBrain: 'الدماغ والأعصاب', catImmune: 'المناعة', catRespiratory: 'الجهاز التنفسي',
    catDigestive: 'الجهاز الهضمي', catMuscular: 'الجهاز العضلي', catGenetics: 'الوراثة', catSkeletal: 'الجهاز الهيكلي', catUrinary: 'الجهاز البولي', catEndocrine: 'جهاز الغدد الصماء',
    readGuide: 'اقرئي الدليل', functionLabel: 'الوظيفة', keyFacts: 'حقائق أساسية', clinicalTip: 'صلة سريرية',
    privatePages: 'صفحاتك الخاصة', notebookTitle: 'أفكار تستحق <em>الاحتفاظ بها.</em>',
    notebookDesc: 'مساحة لطيفة لجمع الأسئلة وملاحظات الدراسة والاكتشافات الصغيرة.', yourNotebook: 'دفترك', newNote: 'ملاحظة جديدة',
    notesSavedLocally: 'تُحفظ الملاحظات تلقائيًا على هذا الجهاز.', untitledNote: 'ملاحظة بلا عنوان', saved: 'تم الحفظ', saving: 'جارٍ الحفظ…',
    writeThoughts: 'دعي أفكارك تجد سطورها...', everyThoughtCounts: 'كل فكرة مهمة', words: 'كلمة', deleteNote: 'حذف الملاحظة',
    emptyNotes: 'لا توجد ملاحظات بعد. أنشئي صفحتك الأولى.', noteUntitled: 'ملاحظة بلا عنوان', noteDeleted: 'تم حذف الملاحظة', deleteConfirm: 'هل تريدين حذف هذه الملاحظة؟ لا يمكن التراجع عن ذلك.',
    emergencyReminder: 'إذا كانت الحالة مهددة للحياة، فاتصلي برقم الطوارئ المحلي فورًا. لا تؤخري طلب المساعدة الطبية.',
    doTitle: 'ما ينبغي فعله', dontTitle: 'ما ينبغي تجنبه', categoryLabel: 'الفئة', emergencyCall: 'اتصلي بخدمات الطوارئ المحلية',
    toastCreated: 'صفحة جديدة جاهزة.', toastSaved: 'تم حفظ الملاحظة.', toastStorageError: 'التخزين المحلي غير متاح؛ قد لا تُحفظ هذه الملاحظة.',
    language: 'اللغة', mainNavigation: 'القائمة الرئيسية', home: 'الصفحة الرئيسية لدوكتور سهيلة', aidCategories: 'فئات الإسعافات الأولية',
    learningCategories: 'فئات التعلم', noteContent: 'محتوى الملاحظة', additionalDoTitle: 'إرشادات إضافية',
    close: 'إغلاق', countLabel: 'نتيجة', guideEmpty: 'لا توجد أدلة دراسية في هذه الفئة.'
  }
};

const aidCategories = [
  { id: 'all', label: 'allTopics' }, { id: 'trauma', label: 'catTrauma' }, { id: 'breathing', label: 'catBreathing' },
  { id: 'cardiac', label: 'catCardiac' }, { id: 'environmental', label: 'catEnvironmental' },
  { id: 'bites', label: 'catBites' }, { id: 'poisoning', label: 'catPoisoning' }, { id: 'eye', label: 'catEye' }
];
const learnCategories = [
  { id: 'all', label: 'catAll' }, { id: 'heart', label: 'catHeart' }, { id: 'brain', label: 'catBrain' },
  { id: 'immune', label: 'catImmune' }, { id: 'respiratory', label: 'catRespiratory' },
  { id: 'digestive', label: 'catDigestive' }, { id: 'muscular', label: 'catMuscular' },
  { id: 'genetics', label: 'catGenetics' }, { id: 'skeletal', label: 'catSkeletal' }, { id: 'urinary', label: 'catUrinary' },
  { id: 'endocrine', label: 'catEndocrine' }
];

const aidItems = [
  ['severe-bleeding',['Severe external bleeding','Hémorragie externe importante','نزيف خارجي شديد'],'trauma','bleeding','fa-droplet'],
  ['minor-cuts',['Minor cuts and scrapes','Petites coupures et éraflures','الجروح والخدوش البسيطة'],'trauma','wound','fa-bandage'],
  ['embedded-object',['Object embedded in a wound','Objet fiché dans une plaie','جسم مغروس في الجرح'],'trauma','bleeding','fa-triangle-exclamation'],
  ['nosebleed',['Nosebleed','Saignement de nez','نزيف الأنف'],'trauma','nosebleed','fa-droplet'],
  ['scalp-wound',['Scalp wound','Plaie du cuir chevelu','جرح فروة الرأس'],'trauma','bleeding','fa-head-side-cough'],
  ['tooth-avulsion',['Knocked-out permanent tooth','Dent définitive expulsée','سقوط سن دائم'],'trauma','tooth','fa-tooth'],
  ['open-fracture',['Open fracture','Fracture ouverte','كسر مفتوح'],'trauma','fracture','fa-bone'],
  ['suspected-fracture',['Suspected broken bone','Suspicion de fracture','اشتباه بكسر'],'trauma','fracture','fa-bone'],
  ['dislocated-joint',['Suspected dislocation','Suspicion de luxation','اشتباه بخلع مفصل'],'trauma','fracture','fa-person-falling'],
  ['sprained-ankle',['Ankle sprain','Entorse de la cheville','التواء الكاحل'],'trauma','sprain','fa-person-walking'],
  ['wrist-sprain',['Wrist sprain','Entorse du poignet','التواء المعصم'],'trauma','sprain','fa-hand'],
  ['minor-burn',['Small, superficial burn','Petite brûlure superficielle','حرق سطحي صغير'],'trauma','burn','fa-fire-flame-simple'],
  ['serious-burn',['Large or deep burn','Brûlure étendue ou profonde','حرق واسع أو عميق'],'trauma','burn','fa-fire'],
  ['chemical-skin',['Chemical on the skin','Produit chimique sur la peau','مادة كيميائية على الجلد'],'poisoning','chemical','fa-flask'],
  ['choking-adult',['Choking — adult or child over 1','Étouffement — adulte ou enfant de plus de 1 an','الاختناق — بالغ أو طفل أكبر من سنة'],'breathing','choking','fa-lungs'],
  ['choking-infant',['Choking — infant under 1','Étouffement — nourrisson de moins de 1 an','الاختناق — رضيع دون سنة'],'breathing','infantChoke','fa-baby'],
  ['asthma-attack',['Asthma attack','Crise d’asthme','نوبة ربو'],'breathing','asthma','fa-lungs'],
  ['breathing-difficulty',['Sudden breathing difficulty','Difficulté respiratoire soudaine','صعوبة تنفس مفاجئة'],'breathing','breathing','fa-wind'],
  ['smoke-inhalation',['Smoke inhalation','Inhalation de fumée','استنشاق الدخان'],'breathing','smoke','fa-smog'],
  ['drowning',['Drowning or near-drowning','Noyade ou quasi-noyade','الغرق أو شبه الغرق'],'breathing','drowning','fa-person-swimming'],
  ['cpr-adult',['Cardiac arrest — CPR for an adult','Arrêt cardiaque — RCP chez l’adulte','توقف القلب — الإنعاش للبالغ'],'cardiac','cpr','fa-heart-pulse'],
  ['aed-use',['Using an AED','Utilisation d’un DAE','استخدام جهاز مزيل الرجفان'],'cardiac','cpr','fa-bolt'],
  ['chest-pain',['Possible heart attack','Possible infarctus','احتمال نوبة قلبية'],'cardiac','chestPain','fa-heart'],
  ['stroke',['Possible stroke','Suspicion d’AVC','اشتباه بسكتة دماغية'],'cardiac','stroke','fa-brain'],
  ['fainting',['Fainting','Évanouissement','الإغماء'],'cardiac','faint','fa-person-circle-exclamation'],
  ['shock',['Signs of shock','Signes de choc','علامات الصدمة'],'cardiac','shock','fa-heart-crack'],
  ['severe-allergy',['Severe allergic reaction','Réaction allergique grave','تفاعل تحسسي شديد'],'breathing','allergy','fa-hand-dots'],
  ['heatstroke',['Heatstroke','Coup de chaleur','ضربة الشمس'],'environmental','heat','fa-temperature-high'],
  ['heat-exhaustion',['Heat exhaustion','Épuisement dû à la chaleur','الإجهاد الحراري'],'environmental','heat','fa-sun'],
  ['dehydration',['Dehydration','Déshydratation','الجفاف'],'environmental','heat','fa-glass-water'],
  ['hypothermia',['Hypothermia','Hypothermie','انخفاض حرارة الجسم'],'environmental','cold','fa-temperature-low'],
  ['frostbite',['Frostbite','Gelure','قضمة الصقيع'],'environmental','cold','fa-snowflake'],
  ['sunburn',['Sunburn','Coup de soleil','حروق الشمس'],'environmental','burn','fa-sun'],
  ['lightning-strike',['Lightning strike','Foudroiement','الإصابة بالصاعقة'],'environmental','cpr','fa-cloud-bolt'],
  ['electric-shock',['Electric shock','Électrisation','الصعق الكهربائي'],'environmental','electric','fa-bolt'],
  ['carbon-monoxide',['Possible carbon monoxide exposure','Exposition possible au monoxyde de carbone','اشتباه بالتعرض لأول أكسيد الكربون'],'poisoning','smoke','fa-house-fire'],
  ['chemical-fumes',['Chemical fumes inhalation','Inhalation de vapeurs chimiques','استنشاق أبخرة كيميائية'],'poisoning','smoke','fa-flask'],
  ['poison-ingestion',['Swallowed poison or unknown substance','Ingestion de poison ou substance inconnue','ابتلاع سم أو مادة مجهولة'],'poisoning','poison','fa-prescription-bottle'],
  ['medicine-overdose',['Possible medicine overdose','Suspicion de surdosage médicamenteux','اشتباه بجرعة دواء زائدة'],'poisoning','poison','fa-pills'],
  ['plant-ingestion',['Potentially toxic plant ingestion','Ingestion d’une plante potentiellement toxique','ابتلاع نبات قد يكون سامًا'],'poisoning','poison','fa-leaf'],
  ['alcohol-poisoning',['Alcohol poisoning','Intoxication alcoolique','التسمم بالكحول'],'poisoning','poison','fa-wine-bottle'],
  ['pesticide-exposure',['Pesticide exposure','Exposition à un pesticide','التعرض لمبيد حشري'],'poisoning','chemical','fa-spray-can'],
  ['eye-chemical',['Chemical splash in the eye','Projection de produit chimique dans l’œil','تناثر مادة كيميائية في العين'],'eye','eyeChemical','fa-eye'],
  ['eye-dust',['Dust or loose object in the eye','Poussière ou corps libre dans l’œil','غبار أو جسم سائب في العين'],'eye','eye','fa-eye'],
  ['eye-impact',['Blow to the eye','Coup à l’œil','ضربة على العين'],'eye','eye','fa-eye'],
  ['eye-penetrating',['Object penetrating the eye','Objet pénétrant dans l’œil','جسم نافذ في العين'],'eye','eye','fa-eye'],
  ['animal-bite',['Animal bite','Morsure animale','عضة حيوان'],'bites','bite','fa-paw'],
  ['human-bite',['Human bite','Morsure humaine','عضة بشرية'],'bites','bite','fa-hand'],
  ['snakebite',['Snakebite','Morsure de serpent','لدغة أفعى'],'bites','snake','fa-staff-snake'],
  ['insect-sting',['Bee or wasp sting','Piqûre d’abeille ou de guêpe','لسعة نحلة أو دبور'],'bites','sting','fa-bug'],
  ['tick-bite',['Tick bite','Morsure de tique','لدغة قرادة'],'bites','bite','fa-bug'],
  ['jellyfish-sting',['Jellyfish sting','Piqûre de méduse','لسعة قنديل البحر'],'bites','jellyfish','fa-water'],
  ['spider-bite',['Spider bite','Morsure d’araignée','لدغة عنكبوت'],'bites','bite','fa-spider'],
  ['cat-bite',['Cat bite or scratch','Morsure ou griffure de chat','عضة أو خدش قطة'],'bites','bite','fa-cat'],
  ['seizure',['Seizure','Crise convulsive','نوبة تشنج'],'cardiac','seizure','fa-brain'],
  ['febrile-seizure',['Seizure with a fever','Convulsion avec fièvre','تشنج مصحوب بحمى'],'cardiac','seizure','fa-temperature-half'],
  ['head-injury',['Head injury','Traumatisme crânien','إصابة الرأس'],'trauma','fracture','fa-head-side-virus'],
  ['concussion',['Possible concussion','Suspicion de commotion cérébrale','اشتباه بارتجاج الدماغ'],'trauma','fracture','fa-brain'],
  ['back-injury',['Possible spinal injury','Suspicion de lésion de la colonne','اشتباه بإصابة العمود الفقري'],'trauma','fracture','fa-person-falling'],
  ['finger-injury',['Finger crush or injury','Écrasement ou blessure d’un doigt','سحق أو إصابة الإصبع'],'trauma','fracture','fa-hand'],
  ['blister',['Friction blister','Ampoule de frottement','فقاعة احتكاك'],'trauma','wound','fa-bandage'],
  ['minor-scrape',['Road rash or larger scrape','Écorchure ou abrasion étendue','سحجة أو كشط واسع'],'trauma','wound','fa-bandage'],
  ['splinter',['Small splinter under skin','Petite écharde sous la peau','شظية صغيرة تحت الجلد'],'trauma','wound','fa-thumbtack'],
  ['lip-tongue-bleed',['Bleeding lip or tongue','Saignement de la lèvre ou de la langue','نزيف الشفة أو اللسان'],'trauma','wound','fa-mouth'],
  ['ear-injury',['Minor outer-ear injury','Blessure légère de l’oreille externe','إصابة بسيطة للأذن الخارجية'],'trauma','wound','fa-ear-listen'],
  ['chemical-swallowed',['Swallowed household chemical','Ingestion d’un produit ménager','ابتلاع مادة منزلية كيميائية'],'poisoning','poison','fa-bottle-water'],
  ['unknown-bite',['Unknown bite or sting','Morsure ou piqûre inconnue','عضة أو لسعة مجهولة'],'bites','bite','fa-circle-question'],
  ['stings-multiple',['Multiple insect stings','Multiples piqûres d’insectes','لسعات حشرات متعددة'],'bites','allergy','fa-bug'],
  ['heat-cramps',['Heat cramps','Crampes dues à la chaleur','تشنجات حرارية'],'environmental','heat','fa-person-running'],
  ['cold-exposure',['Cold exposure','Exposition au froid','التعرض للبرد'],'environmental','cold','fa-wind'],
  ['eye-contact-lens',['Contact lens irritation','Irritation liée aux lentilles','تهيج بسبب العدسات اللاصقة'],'eye','eye','fa-eye'],
  ['nosebleed-child',['Nosebleed in a child','Saignement de nez chez l’enfant','نزيف الأنف عند طفل'],'trauma','nosebleed','fa-child'],
  ['severe-wound',['Deep or gaping wound','Plaie profonde ou béante','جرح عميق أو متباعد'],'trauma','bleeding','fa-kit-medical'],
  ['chest-compression',['CPR with chest injuries','RCP en présence de blessures thoraciques','الإنعاش القلبي مع إصابة صدرية'],'cardiac','cpr','fa-heart-pulse'],
  ['angina',['Possible angina','Possible angine de poitrine','احتمال الذبحة الصدرية'],'cardiac','chestPain','fa-heart'],
  ['panic-breathing',['Panic-related hyperventilation','Hyperventilation liée à la panique','فرط التنفس المرتبط بالقلق'],'breathing','breathing','fa-wind'],
  ['foreign-throat',['Foreign object stuck in the throat','Corps étranger coincé dans la gorge','جسم غريب عالق في الحلق'],'breathing','choking','fa-head-side-cough'],
  ['collapsed-building',['Possible crush injury','Possible écrasement','احتمال إصابة سحق'],'trauma','fracture','fa-person-falling'],
  ['pelvic-injury',['Possible pelvic fracture','Suspicion de fracture du bassin','اشتباه بكسر الحوض'],'trauma','fracture','fa-person-falling'],
  ['rib-fracture',['Possible rib fracture','Suspicion de fracture de côte','اشتباه بكسر ضلع'],'trauma','fracture','fa-lungs'],
  ['jaw-injury',['Jaw injury','Lésion de la mâchoire','إصابة الفك'],'trauma','fracture','fa-face-smile'],
  ['neck-injury',['Possible neck injury','Suspicion de lésion cervicale','احتمال إصابة الرقبة'],'trauma','fracture','fa-user-injured'],
  ['nose-injury',['Broken or bleeding nose','Nez cassé ou saignant','كسر الأنف أو نزيفه'],'trauma','nosebleed','fa-face-smile'],
  ['ear-bleeding',['Bleeding from the ear','Saignement de l’oreille','نزيف الأذن'],'trauma','fracture','fa-ear-listen'],
  ['abdominal-injury',['Abdominal trauma','Traumatisme abdominal','إصابة بطنية'],'trauma','fracture','fa-user-injured'],
  ['genital-injury',['Genital injury','Blessure génitale','إصابة تناسلية'],'trauma','bleeding','fa-user-injured'],
  ['impaled-chest',['Impaled object in the chest','Objet fiché dans le thorax','جسم مغروس في الصدر'],'trauma','fracture','fa-user-injured'],
  ['crush-syndrome',['Crush syndrome warning','Alerte au syndrome écrasement','تحذير متلازمة السحق'],'trauma','shock','fa-person-falling'],
  ['diabetic-low',['Low blood sugar emergency','Hypoglycémie urgente','نقص سكر الدم الطارئ'],'cardiac','faint','fa-capsules'],
  ['diabetic-high',['Very high blood sugar emergency','Hyperglycémie grave','ارتفاع سكر الدم الشديد'],'cardiac','breathing','fa-capsules'],
  ['gi-bleeding',['Possible internal bleeding','Possible hémorragie interne','احتمال نزيف داخلي'],'cardiac','shock','fa-droplet'],
  ['vision-loss',['Sudden vision loss','Perte soudaine de la vision','فقدان مفاجئ للبصر'],'cardiac','stroke','fa-eye'],
  ['severe-headache',['Sudden severe headache','Céphalée brutale intense','صداع شديد مفاجئ'],'cardiac','stroke','fa-head-side-virus'],
  ['anaphylaxis-food',['Food anaphylaxis','Anaphylaxie alimentaire','تأق بسبب الطعام'],'breathing','allergy','fa-bowl-food'],
  ['medication-reaction',['Adverse medication reaction','Réaction médicamenteuse indésirable','رد فعل دوائي ضار'],'poisoning','poison','fa-pills'],
  ['gas-leak',['Gas leak exposure','Exposition à une fuite de gaz','التعرض ل تسرب غاز'],'breathing','smoke','fa-burst'],
  ['house-fire',['Trapped during house fire','Personne coincée dans un incendie','محاصر في حريق منزل'],'breathing','smoke','fa-house-fire'],
  ['bathroom-faint',['Fainting in the bathroom','Évanouissement dans la salle de bain','الإغماء في الحمام'],'cardiac','faint','fa-person-falling'],
  ['water-electrocution',['Electrocution near water','Électrocution près de l’eau','صعق بالقرب من الماء'],'environmental','electric','fa-water'],
  ['pregnancy-emergency',['Emergency in pregnancy','Urgence pendant la grossesse','حالة طارئة أثناء الحمل'],'cardiac','shock','fa-person-pregnant']
];

const guidance = {
  en: {
    bleeding: {
      summary: 'Control blood loss while keeping yourself safe; severe bleeding needs urgent professional care.',
      steps: ['Call local emergency services for heavy bleeding, a deep wound, or signs of shock. Put on gloves if available.', 'Press firmly and continuously on the wound with clean gauze or cloth. Do not lift it to check; add more layers if blood comes through.', 'If bleeding is from an arm or leg and pressure fails, use a commercial tourniquet only if available and you know how; note the time.', 'Keep the person still and warm. If an object is embedded, press around it. Stay with them until help arrives.'],
      dos: ['Use firm, uninterrupted direct pressure.', 'Wash your hands and use a barrier if possible.'],
      donts: ['Do not remove an embedded object or repeatedly uncover the wound.', 'Do not apply a tourniquet to the neck or torso, or loosen one after it is placed.']
    },
    wound: {
      summary: 'For a small surface wound, gentle cleaning and a clean covering help reduce infection risk.',
      steps: ['Wash your hands. If bleeding, hold clean gauze on it until it stops.', 'Rinse the wound under clean running water; gently clean the surrounding skin with soap.', 'Pat dry, apply a clean dressing, and replace it when wet or dirty.', 'Seek medical advice for a deep, dirty, gaping wound, an animal bite, or uncertain tetanus vaccination.'],
      dos: ['Rinse away visible dirt gently.', 'Watch for spreading redness, warmth, swelling, pus, or fever.'],
      donts: ['Do not pour alcohol, bleach, or hydrogen peroxide into the wound.', 'Do not dig deeply for an embedded splinter or close a dirty wound yourself.']
    },
    nosebleed: {
      summary: 'Most nosebleeds settle with steady pressure while leaning forward.',
      steps: ['Sit upright and lean forward, with the mouth open so blood is not swallowed.', 'Pinch the soft part of the nose just below the bony bridge continuously for 10–15 minutes by a clock.', 'Breathe through the mouth; if bleeding continues, repeat pressure once and seek urgent advice.', 'Get emergency help for heavy bleeding, breathing difficulty, faintness, injury, or bleeding that will not stop.'],
      dos: ['Keep pressure continuous and lean forward.', 'Spit out blood that reaches the mouth.'],
      donts: ['Do not tilt the head back or lie flat.', 'Do not pack the nose with tissues or blow/pick the nose after bleeding stops.']
    },
    tooth: {
      summary: 'A knocked-out permanent tooth is time-sensitive; baby teeth should not be replanted.',
      steps: ['Find the tooth and hold it by the crown, not the root. Do not scrub it.', 'If dirty, rinse briefly with milk or saline; avoid rubbing or drying the root.', 'If it is a permanent tooth and the person is alert, place it gently back in the socket only if this is easy and safe. Otherwise keep it in milk or saliva.', 'Seek an emergency dentist immediately. For a baby tooth, keep it out and get dental care.'],
      dos: ['Keep the tooth moist and get urgent dental help.', 'Use gauze for gentle pressure if the socket bleeds.'],
      donts: ['Do not replant a baby tooth.', 'Do not handle the root, use tap-water storage for long, or delay dental care.']
    },
    fracture: {
      summary: 'Treat a suspected fracture or serious head, neck, or back injury as serious; avoid unnecessary movement.',
      steps: ['Call emergency services for an open fracture, severe pain, deformity, numbness, heavy bleeding, or possible spine injury.', 'Keep the injured area still in the position found. Support it with soft padding; do not straighten it.', 'For an open wound, cover loosely with a clean dressing. If bleeding, press around the bone, not on it.', 'Use a wrapped cold pack near the injury for short periods. Monitor comfort and seek medical assessment.'],
      dos: ['Check circulation and sensation beyond the injury without moving it.', 'Keep the person warm and reassure them.'],
      donts: ['Do not push protruding bone back, realign the limb, or test whether it is broken.', 'Do not move someone with a possible spine injury unless there is immediate danger.']
    },
    sprain: {
      summary: 'Protect and rest the joint, use wrapped cold, and arrange assessment if severe or uncertain.',
      steps: ['Stop activity and protect the joint; remove rings or tight items before swelling increases.', 'Rest it and apply a cold pack wrapped in cloth for up to 20 minutes at a time.', 'A comfortable elastic support may help, but loosen it if numbness, tingling, color change, or increased pain occurs.', 'Raise the limb if comfortable. Seek care for severe pain, deformity, inability to use it, or no improvement.'],
      dos: ['Use a cloth barrier with cold packs.', 'Get medical advice if a fracture may be possible.'],
      donts: ['Do not apply ice directly to skin or wrap so tightly that circulation is affected.', 'Do not force painful movement or massage a fresh injury.']
    },
    burn: {
      summary: 'Cool heat burns promptly; large, deep, chemical, electrical, face, hand, or airway burns need urgent care.',
      steps: ['Move away from the heat source. Call emergency services for a large/deep burn, breathing problem, or serious location.', 'Cool a heat burn under cool running water for 20 minutes as soon as possible. Remove jewelry and loose clothing, not anything stuck.', 'After cooling, cover loosely with a clean, non-fluffy dressing or cling film laid over the burn.', 'For chemical skin exposure, follow the chemical-specific advice below and contact emergency/poison services.'],
      dos: ['Keep the rest of the person warm while cooling the burn.', 'Seek urgent assessment for children, extensive burns, or blisters over a large area.'],
      donts: ['Do not use ice, butter, toothpaste, creams, or break blisters.', 'Do not pull off material stuck to burned skin.']
    },
    chemical: {
      summary: 'Avoid contact with the chemical and promptly rinse exposed skin; get product-specific expert advice.',
      steps: ['Protect yourself from exposure and move to fresh air if safe. Call local emergency services for severe exposure.', 'Remove contaminated clothing and jewelry carefully. Brush off dry powder before rinsing.', 'Rinse affected skin with copious cool or lukewarm running water for at least 20 minutes; continue while seeking advice.', 'Call local poison control/emergency services and provide the product label or container if safe to do so.'],
      dos: ['Use gloves or another barrier if available.', 'Follow emergency professionals’ instructions for the specific product.'],
      donts: ['Do not try to neutralize the chemical with another substance.', 'Do not touch contaminated items with bare hands or delay rinsing.']
    },
    choking: {
      summary: 'For a conscious adult or child over 1 year who cannot speak, breathe, or cough effectively, act immediately.',
      steps: ['Ask if they are choking. If they can cough forcefully, encourage coughing and watch closely.', 'If they cannot breathe/speak or cough is ineffective, call emergency services or direct someone to call.', 'Give up to 5 firm back blows between the shoulder blades, checking after each. If unresolved, give up to 5 abdominal thrusts; repeat cycles.', 'If they become unresponsive, lower them safely, call emergency services, and begin CPR. Remove an object only if clearly visible.'],
      dos: ['For late pregnancy or when you cannot encircle the abdomen, use chest thrusts instead of abdominal thrusts.', 'Get medical assessment after abdominal thrusts, even if they work.'],
      donts: ['Do not perform blind finger sweeps or give food/drink.', 'Do not use abdominal thrusts for an infant under 1 year.']
    },
    infantChoke: {
      summary: 'For an infant under 1 year who cannot cough, cry, or breathe effectively, use infant-specific first aid.',
      steps: ['Call emergency services or ask someone to call. If the infant coughs forcefully, let them cough and watch closely.', 'Support the infant face-down along your forearm or thigh, head lower than chest, supporting the head and jaw. Give up to 5 firm back blows.', 'Turn face-up while supporting the head, still lower than the chest. Give up to 5 chest thrusts with two fingers in the center of the chest.', 'Repeat cycles; if unresponsive, call emergency services and start infant CPR. Remove an object only if clearly visible.'],
      dos: ['Use chest thrusts, not abdominal thrusts.', 'Follow the dispatcher’s instructions and get medical assessment afterward.'],
      donts: ['Do not hang the infant by the feet, shake them, or do blind finger sweeps.', 'Do not delay emergency help if breathing is impaired.']
    },
    cpr: {
      summary: 'If someone is unresponsive and not breathing normally, call emergency services and begin CPR.',
      steps: ['Check the scene is safe. Tap and shout; check for normal breathing for no more than 10 seconds.', 'Call local emergency services on speakerphone and ask someone to bring an AED. If alone, follow dispatcher instructions.', 'Begin chest compressions in the center of the chest, hard and fast at 100–120 per minute, allowing full recoil. For an adult, aim for about 5–6 cm depth.', 'Use an AED as soon as available and follow its prompts. Continue CPR until normal breathing, professional help, or you cannot continue.'],
      dos: ['If trained and able, give 30 compressions and 2 breaths; otherwise hands-only CPR is better than no CPR for an adult.', 'For children/infants, use age-appropriate CPR training and dispatcher instructions.'],
      donts: ['Do not delay CPR to search for a pulse or move the person unnecessarily.', 'Do not use an AED on a moving/wet surface; follow device prompts and ensure nobody touches the person during analysis/shock.']
    },
    asthma: {
      summary: 'Help the person use their prescribed reliever inhaler; a severe attack is an emergency.',
      steps: ['Help them sit upright and stay calm; do not make them lie down.', 'Help them use their own prescribed reliever inhaler and spacer according to their action plan or dispatcher guidance.', 'Call emergency services if symptoms are severe, worsening, they cannot speak comfortably, lips look blue/grey, or their reliever is not helping.', 'Stay with them and continue to follow their written asthma plan and emergency-dispatch instructions.'],
      dos: ['Help them access their own medication and spacer.', 'Treat sudden severe breathing trouble as an emergency.'],
      donts: ['Do not give someone else’s prescription inhaler or make them breathe into a paper bag.', 'Do not wait to see if a severe attack passes.']
    },
    breathing: {
      summary: 'Sudden or severe breathing difficulty needs urgent medical help.',
      steps: ['Call local emergency services for severe difficulty, blue/grey lips, confusion, collapse, or rapidly worsening symptoms.', 'Help the person sit in the position that makes breathing easiest and loosen tight clothing.', 'Help with their own prescribed rescue medicine if they have an action plan; monitor breathing and responsiveness.', 'If they become unresponsive and are not breathing normally, begin CPR and use an AED if available.'],
      dos: ['Stay with them and reassure them.', 'Follow emergency-dispatch instructions.'],
      donts: ['Do not force food or drink, lie them flat, or use a paper bag.', 'Do not delay emergency help for severe symptoms.']
    },
    smoke: {
      summary: 'Get away from fumes only if you can do so without entering danger; inhalation exposure can be life-threatening.',
      steps: ['Do not enter a smoke-filled or contaminated area. From a safe place, call emergency services.', 'If safe, move the affected person to fresh air without putting yourself at risk.', 'Loosen tight clothing and monitor breathing. If unresponsive and not breathing normally, start CPR once the scene is safe.', 'For possible carbon monoxide, leave the building immediately and do not re-enter until cleared by responders.'],
      dos: ['Tell responders what may have been inhaled and when.', 'Seek urgent medical assessment after significant exposure even if symptoms ease.'],
      donts: ['Do not re-enter a contaminated building or attempt an unsafe rescue.', 'Do not assume carbon monoxide is detectable by smell; it is odorless.']
    },
    poison: {
      summary: 'A suspected poisoning needs immediate advice from local poison control or emergency services, even if there are no symptoms.',
      steps: ['Call your local poison center or emergency services now and follow their instructions. Call emergency services immediately for collapse, seizures, breathing trouble, or unusual sleepiness.', 'Do not induce vomiting. If the person is unconscious, having a seizure, or struggling to breathe, give nothing by mouth.', 'Keep the container, label, or a photo of the substance. Note what was taken, how much, and when if known.', 'If the substance is on skin or clothing, protect yourself, remove contaminated clothing, and rinse skin with water. For eye exposure, rinse continuously for at least 20 minutes.'],
      dos: ['Follow product-specific advice from poison control or clinicians.', 'Keep the person under observation and bring the product information to care.'],
      donts: ['Do not give milk, food, medicines, or activated charcoal unless poison control or a clinician tells you to.', 'Do not wait for symptoms or try to neutralize the substance.']
    },
    drowning: {
      summary: 'A drowning emergency is dangerous for both the person and an untrained rescuer.',
      steps: ['Call emergency services. Reach or throw a flotation aid from a safe place; do not enter water unless trained and equipped.', 'Once safely out, check responsiveness and normal breathing. If not breathing normally, start CPR and ask for an AED.', 'Give rescue breaths if trained; drowning resuscitation particularly benefits from breaths. Follow dispatcher guidance.', 'Even if the person seems recovered, arrange urgent medical assessment after submersion.'],
      dos: ['Keep yourself safe; use a flotation aid or reach pole.', 'Use AED as soon as available, drying the chest quickly and following prompts.'],
      donts: ['Do not put yourself in danger by entering water or attempt abdominal thrusts to drain water.', 'Do not assume recovery means there is no need for medical care.']
    },
    chestPain: {
      summary: 'Possible heart attack symptoms require emergency evaluation, even if they come and go.',
      steps: ['Call local emergency services immediately; do not drive the person yourself if an ambulance is available.', 'Help them rest in a comfortable position and loosen tight clothing. Stay with them.', 'If they have their own prescribed angina medicine, help them use it as directed. Ask the dispatcher about aspirin; do not give it if allergic or advised against it.', 'If they collapse and are not breathing normally, start CPR and use an AED if available.'],
      dos: ['Note when symptoms began and any medicines taken.', 'Treat chest pressure, shortness of breath, sweating, nausea, or pain spreading to arm/jaw/back seriously.'],
      donts: ['Do not wait for symptoms to pass or let them exert themselves.', 'Do not give food, drink, or someone else’s medicine.']
    },
    stroke: {
      summary: 'Stroke is time-critical. Note the time symptoms began or when the person was last known well.',
      steps: ['Use FAST: face drooping, arm weakness, speech difficulty — time to call emergency services now.', 'Call emergency services even if symptoms improve or disappear. Record the last-known-well time.', 'Keep them comfortable and safe. If drowsy or vomiting but breathing, place on their side if safe and monitor.', 'Stay with them, monitor breathing, and follow the dispatcher’s instructions.'],
      dos: ['Call immediately; rapid assessment matters.', 'Tell responders about symptoms, start time, and medicines if known.'],
      donts: ['Do not give food, drink, aspirin, or other medicine.', 'Do not drive them yourself when emergency services are available.']
    },
    faint: {
      summary: 'Help prevent a fall and check whether the person quickly returns to normal.',
      steps: ['Help them lie flat on their back and raise their legs if there is no injury or breathing difficulty.', 'Loosen tight clothing and provide fresh air. Check for normal breathing and responsiveness.', 'If they do not recover promptly, are injured, have chest pain, difficulty breathing, pregnancy, or repeated fainting, call emergency services.', 'When fully alert, let them rest before sitting up slowly. Offer water only when completely alert and able to swallow.'],
      dos: ['Protect them from further injury and monitor their breathing.', 'Seek medical advice for a first, unexplained, or recurrent faint.'],
      donts: ['Do not slap them, splash water, or put anything in their mouth.', 'Do not give food or drink while drowsy or unconscious.']
    },
    shock: {
      summary: 'Shock can follow serious injury, bleeding, allergy, or illness and is life-threatening.',
      steps: ['Call local emergency services immediately and address the cause only if safe (for example, apply pressure to bleeding).', 'Help the person lie down. Raise legs only if comfortable and there is no injury or breathing difficulty.', 'Keep them warm, still, and reassured. Loosen tight clothing and monitor breathing and responsiveness.', 'If they become unresponsive and are not breathing normally, start CPR and use an AED if available.'],
      dos: ['Treat pale/clammy skin, weakness, rapid breathing, confusion, or collapse as urgent.', 'Stay with them until help arrives.'],
      donts: ['Do not give food or drink, especially if surgery may be needed.', 'Do not move them unnecessarily or leave them alone.']
    },
    allergy: {
      summary: 'A severe allergic reaction (anaphylaxis) is an emergency; use the person’s prescribed adrenaline auto-injector promptly.',
      steps: ['Call emergency services and say anaphylaxis is suspected.', 'Help them use their own prescribed adrenaline/epinephrine auto-injector immediately in the outer mid-thigh, following its instructions.', 'Have them lie flat with legs raised if breathing allows; if breathing is difficult, let them sit with legs outstretched. Do not let them stand or walk.', 'If symptoms persist and a second prescribed injector is available, follow emergency-dispatch guidance. If unresponsive and not breathing normally, start CPR.'],
      dos: ['Use the auto-injector as directed and note the time.', 'Even if they improve, urgent hospital assessment is needed.'],
      donts: ['Do not delay adrenaline to try an antihistamine.', 'Do not let them stand, walk, or drive themselves to care.']
    },
    heat: {
      summary: 'Confusion, collapse, seizure, or very hot skin in heat may indicate heatstroke: an emergency.',
      steps: ['Call emergency services for confusion, collapse, seizure, or suspected heatstroke.', 'Move to shade or a cool place, remove excess outer clothing, and begin rapid cooling with cool water, wet cloths, and fanning.', 'If fully alert and able to swallow, give frequent small sips of cool water. Do not give drinks if confused, drowsy, or vomiting.', 'Continue cooling while help is coming; monitor breathing and responsiveness.'],
      dos: ['Cool quickly and keep the person supervised.', 'For simple heat cramps/exhaustion, rest in a cool place and rehydrate if fully alert.'],
      donts: ['Do not give fluids to someone confused or unconscious.', 'Do not use fever medicines as a substitute for cooling or urgent care.']
    },
    cold: {
      summary: 'Warm the person gradually and protect numb, cold skin from further damage.',
      steps: ['Move to shelter and remove wet clothing if this can be done gently. Call emergency services for confusion, severe shivering then no shivering, or drowsiness.', 'Wrap the person in dry blankets and warm the center of the body first. Handle gently.', 'For frostbite, protect the area and seek urgent care. Rewarm in warm—not hot—water only when refreezing can be prevented and professional advice supports it.', 'Monitor breathing and responsiveness; begin CPR if needed and safe.'],
      dos: ['Warm gradually and keep the person dry.', 'Seek medical care for suspected hypothermia or frostbite.'],
      donts: ['Do not rub or massage frostbitten skin, use direct heat, or make the person walk on frostbitten feet.', 'Do not give alcohol or a hot drink to someone drowsy or confused.']
    },
    seizure: {
      summary: 'Protect the person from injury and time the seizure; do not restrain them.',
      steps: ['Move hazards away and cushion the head. Loosen anything tight around the neck; time the seizure.', 'Do not hold them down. When jerking stops, check breathing and place them on their side if breathing and no suspected spine injury.', 'Stay with them until fully alert. Call emergency services if it lasts 5 minutes or more, repeats, is a first seizure, injury occurs, or breathing is difficult.', 'If they are not breathing normally after the seizure, call emergency services and start CPR.'],
      dos: ['Note the duration and what happened for clinicians.', 'Give privacy and calm reassurance during recovery.'],
      donts: ['Do not put anything in their mouth or give food, drink, or medicine until fully alert.', 'Do not restrain movements or attempt to stop the seizure.']
    },
    eyeChemical: {
      summary: 'Chemical eye exposure needs immediate, continuous irrigation and urgent medical or poison-service advice.',
      steps: ['Begin rinsing immediately with clean, lukewarm running water; hold eyelids open and let water flow away from the unaffected eye.', 'Rinse continuously for at least 20 minutes. Remove contact lenses while rinsing if they come out easily.', 'Call emergency services or poison control while rinsing; continue until they advise otherwise.', 'Get urgent medical assessment and take the product label if safe.'],
      dos: ['Start flushing before seeking the product label.', 'Use a gentle stream and prevent runoff into the other eye.'],
      donts: ['Do not rub the eye, neutralize the chemical, or delay irrigation.', 'Do not put drops or ointment in unless directed by a clinician.']
    },
    eye: {
      summary: 'Protect the eye. Sudden vision loss, severe pain, chemical exposure, or a penetrating injury needs urgent care.',
      steps: ['For dust or a loose object, blink and gently rinse with clean water or saline. Remove a contact lens if it comes out easily.', 'For a blow, place a cool pack wrapped in cloth gently around the eye without pressure.', 'For a penetrating object or cut, cover with a rigid shield such as a clean paper cup and seek emergency care.', 'Get urgent assessment for vision changes, severe pain, blood in the eye, or a persistent foreign-body sensation.'],
      dos: ['Protect the eye and seek appropriate medical assessment.', 'For chemical splash, rinse continuously for at least 20 minutes immediately.'],
      donts: ['Do not rub, press, or try to remove an embedded object.', 'Do not use tweezers or cotton swabs on the eyeball.']
    },
    bite: {
      summary: 'Clean bite wounds promptly; deep punctures, face/hand bites, or signs of infection need professional advice.',
      steps: ['Move away from the animal or source and ensure the scene is safe.', 'Wash the wound thoroughly with soap and running water for several minutes. Control bleeding with direct pressure.', 'Cover with a clean dressing. Seek medical advice promptly for puncture wounds, bites to the face/hand, unknown vaccination status, or infection risk.', 'Ask a clinician about tetanus and rabies risk based on location and animal; get urgent help for severe bleeding or a serious reaction.'],
      dos: ['Record details about the animal if safe, without trying to catch it.', 'Seek care for increasing redness, warmth, swelling, pain, pus, or fever.'],
      donts: ['Do not close a deep bite wound yourself or apply irritants.', 'Do not delay assessment for a possible rabies exposure.']
    },
    snake: {
      summary: 'A suspected venomous snakebite is an emergency; keep the person still and arrange urgent transport.',
      steps: ['Call emergency services immediately. Move away from the snake; do not try to catch or kill it.', 'Keep the person calm and still. Immobilize the bitten limb in a comfortable position and remove rings or watches.', 'Note the time and appearance of the snake from a safe distance if possible; monitor breathing and responsiveness.', 'Follow emergency-dispatch instructions and get urgent hospital care.'],
      dos: ['Keep the bitten person as still as possible.', 'Use a pressure immobilization bandage only if local medical guidance recommends it and you are trained.'],
      donts: ['Do not cut, suck, ice, wash, or tourniquet the bite.', 'Do not give alcohol or delay care to identify the snake.']
    },
    sting: {
      summary: 'Most local stings are mild, but breathing difficulty or swelling of the tongue/throat is an emergency.',
      steps: ['Move away from the insect. If a stinger is visible, remove it promptly by scraping or another quick method.', 'Wash the area and apply a wrapped cold pack to reduce pain and swelling.', 'Watch for widespread hives, facial/throat swelling, breathing trouble, vomiting, or collapse; call emergency services if these occur.', 'If the person has a prescribed adrenaline auto-injector, help them use it as directed for a severe reaction.'],
      dos: ['Seek advice if a sting is in the mouth/eye or there are many stings.', 'Use only medicines appropriate for the person, following label or clinician advice.'],
      donts: ['Do not squeeze a visible stinger for a long time while delaying removal.', 'Do not delay emergency treatment for signs of anaphylaxis.']
    },
    jellyfish: {
      summary: 'Jellyfish first aid varies by species and region; avoid touching tentacles with bare skin.',
      steps: ['Get the person out of the water safely and call emergency services for severe pain, breathing difficulty, collapse, or a dangerous species.', 'Avoid rubbing the area or touching tentacles with bare hands. Rinse with seawater, not fresh water, unless local guidance says otherwise.', 'Remove visible tentacles with tweezers or a gloved hand if safe. Follow local lifeguard/poison-service instructions for the species.', 'For severe pain or systemic symptoms, seek urgent medical care and monitor breathing.'],
      dos: ['Ask lifeguards or local poison services for region-specific treatment.', 'Use gloves or a tool when removing tentacles.'],
      donts: ['Do not rub with sand, scrape with bare hands, or apply urine.', 'Do not apply vinegar unless local species guidance recommends it.']
    },
    electric: {
      summary: 'Never touch someone still in contact with electricity. Electrical injuries can cause hidden burns or cardiac arrest.',
      steps: ['Do not approach until the power is off. Call emergency services and the utility/emergency operator as appropriate.', 'For high-voltage lines, stay far away and wait for professionals; electricity can arc.', 'Once safe, check responsiveness and normal breathing. If absent or abnormal, start CPR and use an AED.', 'Cover burns loosely with a clean dry dressing and arrange urgent medical assessment, even if the person feels well.'],
      dos: ['Prioritize scene safety and wait for professionals to isolate power.', 'Treat any electric shock as needing medical advice.'],
      donts: ['Do not touch the person or equipment while current may be live.', 'Do not use water near live electrical equipment.']
    }
  },
  fr: {
    bleeding: {
      summary: 'Maîtrise le saignement tout en te protégeant ; une hémorragie importante exige des soins urgents.',
      steps: ['Appelle les secours pour un saignement abondant, une plaie profonde ou des signes de choc. Mets des gants si possible.', 'Appuie fermement et sans interruption avec une compresse ou un tissu propre. Si le sang traverse, ajoute des couches sans retirer la première.', 'Pour un saignement d’un bras ou d’une jambe qui persiste, utilise un garrot commercial uniquement si disponible et si tu sais t’en servir ; note l’heure.', 'Garde la personne immobile et au chaud. Appuie autour d’un objet fiché, jamais dessus. Reste auprès d’elle.'],
      dos: ['Maintiens une pression directe continue.', 'Lave-toi les mains et utilise une barrière si possible.'],
      donts: ['Ne retire pas un objet fiché et ne découvre pas la plaie sans cesse.', 'Ne pose pas de garrot au cou ou au torse et ne desserre pas un garrot posé.']
    },
    wound: {
      summary: 'Pour une petite plaie superficielle, un rinçage doux et un pansement propre limitent le risque d’infection.',
      steps: ['Lave-toi les mains. En cas de saignement, maintiens une compresse propre jusqu’à son arrêt.', 'Rince à l’eau potable courante et nettoie doucement la peau autour avec du savon.', 'Sèche en tamponnant, couvre d’un pansement propre et change-le s’il est mouillé ou sale.', 'Demande un avis médical pour une plaie profonde, sale ou béante, une morsure ou un vaccin antitétanique incertain.'],
      dos: ['Rince doucement les saletés visibles.', 'Surveille rougeur qui s’étend, chaleur, gonflement, pus ou fièvre.'],
      donts: ['Ne verse pas d’alcool, d’eau de Javel ou d’eau oxygénée dans la plaie.', 'Ne creuse pas pour retirer une écharde profonde et ne referme pas toi-même une plaie sale.']
    },
    nosebleed: {
      summary: 'La plupart des saignements de nez cessent avec une pression continue, en se penchant vers l’avant.',
      steps: ['Assieds la personne, penche-la vers l’avant et laisse le sang s’écouler dans la bouche ouverte.', 'Pince sans relâcher la partie molle du nez, sous l’os, pendant 10 à 15 minutes chronométrées.', 'Respire par la bouche ; si le saignement continue, recommence une fois et demande rapidement conseil.', 'Appelle les secours en cas de saignement abondant, difficulté respiratoire, malaise, blessure ou persistance.'],
      dos: ['Garde la pression continue et penche-toi vers l’avant.', 'Recrache le sang qui arrive dans la bouche.'],
      donts: ['Ne bascule pas la tête en arrière et ne t’allonge pas.', 'Ne bourre pas le nez de mouchoirs et ne le souffle ou gratte pas après l’arrêt.']
    },
    tooth: {
      summary: 'Une dent définitive expulsée est une urgence dentaire ; une dent de lait ne doit pas être réimplantée.',
      steps: ['Ramasse la dent par la couronne, jamais par la racine. Ne la frotte pas.', 'Si elle est sale, rince-la brièvement avec du lait ou du sérum physiologique sans frotter ni sécher la racine.', 'Si c’est une dent définitive et que la personne est consciente, replace-la doucement seulement si c’est facile et sans danger. Sinon, conserve-la dans du lait ou la salive.', 'Consulte immédiatement un dentiste en urgence. Pour une dent de lait, ne la remets pas et consulte.'],
      dos: ['Garde la dent humide et demande rapidement des soins dentaires.', 'Pose une compresse pour exercer une légère pression si l’alvéole saigne.'],
      donts: ['Ne réimplante jamais une dent de lait.', 'Ne touche pas la racine et ne retarde pas les soins dentaires.']
    },
    fracture: {
      summary: 'Une fracture suspectée ou une blessure grave à la tête, au cou ou au dos nécessite prudence et immobilité.',
      steps: ['Appelle les secours en cas de fracture ouverte, douleur intense, déformation, engourdissement, hémorragie ou suspicion de lésion de la colonne.', 'Garde la zone immobile dans la position trouvée. Soutiens-la avec un rembourrage sans la redresser.', 'Pour une plaie ouverte, couvre sans serrer. En cas de saignement, appuie autour de l’os, pas dessus.', 'Applique brièvement une poche froide enveloppée près de la blessure. Fais évaluer la personne.'],
      dos: ['Observe la sensibilité et la circulation au-delà de la blessure sans la déplacer.', 'Garde la personne au chaud et rassure-la.'],
      donts: ['Ne repousse pas un os saillant, ne réaligne pas le membre et ne teste pas la fracture.', 'Ne déplace pas une personne avec une possible lésion de la colonne sauf danger immédiat.']
    },
    sprain: {
      summary: 'Protège et repose l’articulation, applique du froid enveloppé et demande conseil si la blessure est importante.',
      steps: ['Arrête l’activité et protège l’articulation ; enlève bagues et objets serrés avant le gonflement.', 'Repose-la et applique une poche froide enveloppée jusqu’à 20 minutes à la fois.', 'Un soutien élastique confortable peut aider ; desserre-le en cas d’engourdissement, fourmillement, changement de couleur ou douleur accrue.', 'Surélève le membre si cela est confortable. Consulte en cas de forte douleur, déformation ou incapacité à l’utiliser.'],
      dos: ['Intercale un tissu entre la peau et le froid.', 'Demande conseil si une fracture est possible.'],
      donts: ['Ne pose pas de glace directement sur la peau et ne serre pas au point de gêner la circulation.', 'Ne force pas un mouvement douloureux et ne masse pas une blessure récente.']
    },
    burn: {
      summary: 'Refroidis rapidement une brûlure thermique ; une brûlure étendue, profonde, chimique, électrique ou située au visage exige des soins urgents.',
      steps: ['Éloigne la personne de la source. Appelle les secours pour une brûlure grave, étendue ou avec difficulté respiratoire.', 'Refroidis sous l’eau fraîche courante pendant 20 minutes dès que possible. Retire bijoux et vêtements amples, jamais ceux collés.', 'Après refroidissement, couvre sans serrer avec un pansement propre non pelucheux ou un film posé dessus.', 'Pour un produit chimique, suis les étapes spécifiques et contacte les secours ou le centre antipoison.'],
      dos: ['Garde le reste du corps au chaud pendant le refroidissement.', 'Demande une évaluation urgente pour un enfant ou une brûlure étendue.'],
      donts: ['N’utilise ni glace, beurre, dentifrice, crème, ni éclatement des cloques.', 'N’arrache pas un tissu collé à la peau brûlée.']
    },
    chemical: {
      summary: 'Évite le contact avec le produit et rince immédiatement la peau ; demande un avis adapté au produit.',
      steps: ['Protège-toi et va à l’air frais si tu peux le faire sans danger. Appelle les secours en cas d’exposition grave.', 'Retire prudemment vêtements et bijoux contaminés. Brosse les poudres sèches avant le rinçage.', 'Rince abondamment à l’eau fraîche ou tiède pendant au moins 20 minutes et continue en demandant conseil.', 'Appelle le centre antipoison ou les secours et communique l’étiquette du produit si cela ne présente pas de risque.'],
      dos: ['Utilise des gants ou une barrière si possible.', 'Suis les consignes des professionnels pour ce produit précis.'],
      donts: ['N’essaie pas de neutraliser le produit avec une autre substance.', 'Ne touche pas les objets contaminés à mains nues et ne retarde pas le rinçage.']
    },
    choking: {
      summary: 'Pour un adulte ou un enfant de plus d’un an conscient qui ne peut parler, respirer ou tousser efficacement, agis immédiatement.',
      steps: ['Demande si la personne s’étouffe. Si elle tousse efficacement, encourage-la à tousser et surveille-la.', 'Si elle ne peut ni respirer ni parler, ou tousse sans efficacité, appelle les secours ou demande à quelqu’un de le faire.', 'Donne jusqu’à 5 claques fermes entre les omoplates, en vérifiant après chacune. Puis jusqu’à 5 compressions abdominales ; alterne les cycles.', 'Si elle perd connaissance, allonge-la prudemment, appelle les secours et commence la RCP. Retire un objet uniquement s’il est visible.'],
      dos: ['En cas de grossesse avancée ou si tu ne peux encercler l’abdomen, utilise des compressions thoraciques.', 'Fais évaluer la personne après des compressions abdominales, même si elles ont fonctionné.'],
      donts: ['Ne fais pas de balayage aveugle avec les doigts et ne donne ni nourriture ni boisson.', 'N’effectue pas de compressions abdominales chez un nourrisson de moins d’un an.']
    },
    infantChoke: {
      summary: 'Pour un nourrisson de moins d’un an qui ne peut tousser, pleurer ou respirer efficacement, applique les gestes adaptés.',
      steps: ['Appelle les secours ou demande à quelqu’un de le faire. Si le nourrisson tousse efficacement, laisse-le tousser et surveille-le.', 'Soutiens-le face vers le bas sur ton avant-bras ou ta cuisse, tête plus basse que le thorax et mâchoire maintenue. Donne jusqu’à 5 claques dans le dos.', 'Retourne-le face vers le haut en soutenant sa tête. Donne jusqu’à 5 compressions thoraciques avec deux doigts au centre du thorax.', 'Répète les cycles ; s’il devient inconscient, appelle les secours et commence la RCP du nourrisson. Retire seulement un objet visible.'],
      dos: ['Utilise des compressions thoraciques, jamais abdominales.', 'Suis les consignes du régulateur et demande un examen après l’épisode.'],
      donts: ['Ne suspends pas le nourrisson par les pieds, ne le secoue pas et ne balaie pas sa bouche à l’aveugle.', 'Ne retarde pas l’appel si sa respiration est compromise.']
    },
    cpr: {
      summary: 'Si une personne ne répond pas et ne respire pas normalement, appelle les secours et commence la RCP.',
      steps: ['Vérifie que la zone est sûre. Stimule la personne et crie ; vérifie sa respiration normale pendant au plus 10 secondes.', 'Appelle les secours en haut-parleur et demande à quelqu’un d’apporter un DAE. Seule, suis les consignes téléphoniques.', 'Commence les compressions au centre de la poitrine, fortes et rapides, 100 à 120 par minute, avec relâchement complet. Chez l’adulte, vise environ 5 à 6 cm.', 'Utilise le DAE dès qu’il arrive et suis ses instructions. Continue jusqu’à une respiration normale, l’arrivée des secours ou l’épuisement.'],
      dos: ['Si tu es formée et capable, fais 30 compressions puis 2 insufflations ; sinon, les compressions seules valent mieux que rien chez l’adulte.', 'Pour un enfant ou un nourrisson, applique une formation adaptée et les consignes du régulateur.'],
      donts: ['Ne retarde pas la RCP pour chercher un pouls et ne déplace pas inutilement la personne.', 'N’utilise pas un DAE sur une surface en mouvement ou mouillée ; suis ses consignes et ne touche pas la personne pendant l’analyse/le choc.']
    },
    asthma: {
      summary: 'Aide la personne à utiliser son inhalateur de secours prescrit ; une crise sévère est une urgence.',
      steps: ['Aide-la à s’asseoir bien droite et à rester calme ; ne l’allonge pas.', 'Aide-la à utiliser son propre inhalateur de secours et sa chambre d’inhalation selon son plan ou les consignes du régulateur.', 'Appelle les secours si les symptômes sont graves, s’aggravent, si parler devient difficile, si les lèvres bleuissent/grisent ou si le traitement n’aide pas.', 'Reste auprès d’elle et suis son plan écrit ainsi que les consignes des secours.'],
      dos: ['Aide-la à prendre son propre traitement prescrit.', 'Traite une difficulté respiratoire grave comme une urgence.'],
      donts: ['Ne donne pas l’inhalateur prescrit d’une autre personne et n’utilise pas de sac en papier.', 'N’attends pas qu’une crise sévère passe seule.']
    },
    breathing: {
      summary: 'Une difficulté respiratoire soudaine ou grave nécessite une aide médicale urgente.',
      steps: ['Appelle les secours en cas de difficulté sévère, lèvres bleues/grises, confusion, malaise ou aggravation rapide.', 'Aide la personne à s’installer dans la position qui facilite sa respiration et desserre ses vêtements.', 'Aide-la à prendre son traitement de secours prescrit si elle en a un et surveille sa respiration et sa conscience.', 'Si elle perd connaissance et ne respire pas normalement, commence la RCP et utilise un DAE si disponible.'],
      dos: ['Reste auprès d’elle et rassure-la.', 'Suis les instructions du régulateur.'],
      donts: ['Ne force pas nourriture ou boisson, ne l’allonge pas et n’utilise pas de sac en papier.', 'Ne retarde pas les secours en cas de symptômes graves.']
    },
    smoke: {
      summary: 'Éloigne-toi des fumées uniquement sans te mettre en danger ; l’inhalation peut être mortelle.',
      steps: ['N’entre pas dans une zone enfumée ou contaminée. Appelle les secours depuis un endroit sûr.', 'Si tu peux le faire sans risque, emmène la personne à l’air frais.', 'Desserre ses vêtements et surveille sa respiration. Si elle est inconsciente et ne respire pas normalement, commence la RCP une fois la zone sûre.', 'En cas de monoxyde de carbone suspecté, sors immédiatement du bâtiment et n’y retourne pas avant l’autorisation des secours.'],
      dos: ['Indique aux secours le produit inhalé et le moment de l’exposition.', 'Demande un examen après une exposition importante, même si les symptômes diminuent.'],
      donts: ['Ne retourne pas dans un bâtiment contaminé et ne tente pas un sauvetage dangereux.', 'N’oublie pas que le monoxyde de carbone est inodore.']
    },
    poison: {
      summary: 'Une intoxication suspectée nécessite immédiatement l’avis du centre antipoison ou des secours, même sans symptôme.',
      steps: ['Appelle immédiatement le centre antipoison local ou les secours et suis leurs consignes. Appelle les secours pour malaise, convulsion, difficulté respiratoire ou somnolence inhabituelle.', 'Ne fais pas vomir. Si la personne est inconsciente, convulse ou respire difficilement, ne lui donne rien par la bouche.', 'Garde le contenant, l’étiquette ou une photo du produit. Note si possible la substance, la quantité et l’heure.', 'Si le produit est sur la peau ou les vêtements, protège-toi, retire les vêtements contaminés et rince la peau. Pour l’œil, rince en continu au moins 20 minutes.'],
      dos: ['Suis les consignes adaptées au produit données par le centre antipoison ou un soignant.', 'Surveille la personne et apporte les informations du produit aux soins.'],
      donts: ['Ne donne ni lait, nourriture, médicament ni charbon actif sans instruction d’un centre antipoison ou d’un soignant.', 'N’attends pas l’apparition des symptômes et ne tente pas de neutraliser le produit.']
    },
    drowning: {
      summary: 'La noyade est dangereuse pour la personne et pour un sauveteur non formé.',
      steps: ['Appelle les secours. Tends ou lance une aide flottante depuis un endroit sûr ; n’entre pas dans l’eau sans formation et équipement.', 'Une fois la personne sortie sans danger, vérifie sa réponse et sa respiration. Si elle ne respire pas normalement, commence la RCP et demande un DAE.', 'Fais des insufflations si tu es formée ; elles sont particulièrement utiles après une noyade. Suis les consignes du régulateur.', 'Même si la personne semble rétablie, fais-la examiner rapidement après une immersion.'],
      dos: ['Protège-toi et utilise une aide flottante ou une perche.', 'Utilise le DAE dès que possible, en séchant rapidement le thorax et en suivant ses consignes.'],
      donts: ['Ne te mets pas en danger en entrant dans l’eau et ne fais pas de compressions abdominales pour vider l’eau.', 'Ne considère pas le rétablissement apparent comme une absence de risque médical.']
    },
    chestPain: {
      summary: 'Des symptômes évoquant un infarctus nécessitent une évaluation urgente, même s’ils vont et viennent.',
      steps: ['Appelle immédiatement les secours ; ne conduis pas la personne toi-même si une ambulance est disponible.', 'Aide-la à se reposer dans une position confortable, desserre ses vêtements et reste avec elle.', 'Si elle a son propre traitement prescrit contre l’angine, aide-la à l’utiliser. Demande au régulateur avant l’aspirine.', 'Si elle s’effondre et ne respire pas normalement, commence la RCP et utilise un DAE si disponible.'],
      dos: ['Note le début des symptômes et les médicaments pris.', 'Prends au sérieux une pression thoracique, un essoufflement, des sueurs, des nausées ou une douleur irradiant vers bras/mâchoire/dos.'],
      donts: ['N’attends pas que les symptômes cessent et ne la laisse pas faire d’effort.', 'Ne donne ni nourriture, ni boisson, ni médicament appartenant à quelqu’un d’autre.']
    },
    stroke: {
      summary: 'Un AVC est une urgence absolue. Note l’heure de début des signes ou la dernière fois où la personne allait bien.',
      steps: ['Repère VITE : visage asymétrique, faiblesse d’un bras, trouble de la parole — appelle immédiatement les secours.', 'Appelle même si les symptômes diminuent ou disparaissent. Note l’heure où la personne allait bien pour la dernière fois.', 'Installe-la confortablement. Si elle somnole ou vomit mais respire, place-la sur le côté si cela est sûr.', 'Reste auprès d’elle, surveille sa respiration et suis les consignes du régulateur.'],
      dos: ['Appelle tout de suite : l’évaluation rapide est importante.', 'Communique aux secours les signes, leur heure de début et les traitements connus.'],
      donts: ['Ne donne ni nourriture, ni boisson, ni aspirine ou autre médicament.', 'Ne la conduis pas toi-même si les secours sont disponibles.']
    },
    faint: {
      summary: 'Évite une chute et vérifie que la personne reprend rapidement ses esprits.',
      steps: ['Aide-la à s’allonger sur le dos et relève ses jambes s’il n’y a ni blessure ni gêne respiratoire.', 'Desserre ses vêtements et aère la pièce. Vérifie sa respiration et sa réponse.', 'Si elle ne récupère pas vite, est blessée, enceinte, a une douleur thoracique, respire mal ou s’évanouit souvent, appelle les secours.', 'Quand elle est parfaitement réveillée, laisse-la se reposer puis s’asseoir lentement. Ne propose de l’eau que si elle avale normalement.'],
      dos: ['Protège-la d’une nouvelle blessure et surveille sa respiration.', 'Demande un avis pour un premier malaise inexpliqué ou des malaises répétés.'],
      donts: ['Ne la gifle pas, ne l’asperge pas et ne mets rien dans sa bouche.', 'Ne donne ni nourriture ni boisson si elle est somnolente ou inconsciente.']
    },
    shock: {
      summary: 'Un état de choc après blessure, saignement, allergie ou maladie est une urgence vitale.',
      steps: ['Appelle immédiatement les secours et traite la cause uniquement si cela ne présente pas de danger.', 'Aide la personne à s’allonger. Relève ses jambes seulement si elle est à l’aise et sans blessure ni gêne respiratoire.', 'Garde-la au chaud, immobile et rassurée. Desserre ses vêtements et surveille sa respiration et sa conscience.', 'Si elle devient inconsciente et ne respire pas normalement, commence la RCP et utilise un DAE si disponible.'],
      dos: ['Prends au sérieux peau pâle et moite, faiblesse, respiration rapide, confusion ou malaise.', 'Reste auprès d’elle jusqu’à l’arrivée des secours.'],
      donts: ['Ne lui donne ni nourriture ni boisson, une intervention peut être nécessaire.', 'Ne la déplace pas inutilement et ne la laisse pas seule.']
    },
    allergy: {
      summary: 'Une réaction allergique grave (anaphylaxie) est une urgence ; utilise rapidement l’auto-injecteur d’adrénaline prescrit.',
      steps: ['Appelle les secours et signale une possible anaphylaxie.', 'Aide la personne à utiliser immédiatement son propre auto-injecteur d’adrénaline dans la face externe de la cuisse, selon la notice.', 'Allonge-la, jambes relevées si la respiration le permet ; si elle respire difficilement, laisse-la assise jambes étendues. Ne la laisse pas se lever ni marcher.', 'Si les signes persistent et qu’un deuxième auto-injecteur prescrit est disponible, suis les consignes du régulateur. Si elle ne respire pas normalement, commence la RCP.'],
      dos: ['Utilise l’auto-injecteur selon la notice et note l’heure.', 'Même si elle va mieux, une évaluation hospitalière urgente est indispensable.'],
      donts: ['Ne retarde pas l’adrénaline pour essayer un antihistaminique.', 'Ne la laisse pas se lever, marcher ou conduire jusqu’aux soins.']
    },
    heat: {
      summary: 'Confusion, malaise, convulsion ou peau très chaude par temps chaud peuvent signaler un coup de chaleur : urgence.',
      steps: ['Appelle les secours en cas de confusion, malaise, convulsion ou coup de chaleur suspecté.', 'Mets la personne à l’ombre ou au frais, enlève les vêtements extérieurs et refroidis rapidement avec eau fraîche, linges mouillés et ventilation.', 'Si elle est bien consciente et avale normalement, propose de petites gorgées d’eau fraîche. Rien à boire si elle est confuse, somnolente ou vomit.', 'Continue le refroidissement en attendant les secours et surveille respiration et conscience.'],
      dos: ['Refroidis rapidement et surveille la personne.', 'Pour de simples crampes/épuisement, repose-la au frais et réhydrate-la si elle est bien consciente.'],
      donts: ['Ne donne pas de boisson à une personne confuse ou inconsciente.', 'Ne remplace pas le refroidissement et les soins urgents par un médicament contre la fièvre.']
    },
    cold: {
      summary: 'Réchauffe progressivement la personne et protège la peau froide ou insensible.',
      steps: ['Mets-la à l’abri et retire doucement ses vêtements mouillés. Appelle les secours si elle est confuse, très somnolente ou ne frissonne plus.', 'Enveloppe-la dans des couvertures sèches et réchauffe d’abord le centre du corps. Manipule-la doucement.', 'Pour une gelure, protège la zone et demande des soins urgents. Ne réchauffe dans l’eau tiède que si le regel est impossible et selon un avis professionnel.', 'Surveille respiration et conscience ; commence la RCP si nécessaire et si la scène est sûre.'],
      dos: ['Réchauffe progressivement et garde la personne au sec.', 'Demande des soins pour une hypothermie ou une gelure suspectée.'],
      donts: ['Ne frotte pas une gelure, n’utilise pas de chaleur directe et ne fais pas marcher sur des pieds gelés.', 'Ne donne pas d’alcool ni de boisson chaude à une personne somnolente ou confuse.']
    },
    seizure: {
      summary: 'Protège la personne des blessures et chronomètre la crise ; ne la maîtrise pas de force.',
      steps: ['Éloigne les objets dangereux et protège sa tête. Desserre ce qui serre le cou et chronomètre la crise.', 'Ne la maintiens pas. Quand les mouvements cessent, vérifie sa respiration et mets-la sur le côté si elle respire et sans suspicion de lésion de la colonne.', 'Reste avec elle jusqu’à son réveil complet. Appelle les secours si la crise dure 5 minutes ou plus, se répète, est une première, provoque une blessure ou gêne la respiration.', 'Si elle ne respire pas normalement après la crise, appelle les secours et commence la RCP.'],
      dos: ['Note la durée et les signes observés pour les soignants.', 'Rassure-la et préserve son intimité pendant la récupération.'],
      donts: ['Ne mets rien dans sa bouche et ne donne ni boisson, nourriture ou médicament avant son réveil complet.', 'Ne retiens pas ses mouvements et ne tente pas d’arrêter la crise.']
    },
    eyeChemical: {
      summary: 'Un produit chimique dans l’œil exige un rinçage immédiat et continu ainsi qu’un avis médical ou antipoison urgent.',
      steps: ['Rince immédiatement à l’eau propre tiède ou fraîche ; maintiens les paupières ouvertes et dirige l’eau à l’écart de l’autre œil.', 'Rince continuellement au moins 20 minutes. Retire les lentilles si elles se détachent facilement.', 'Appelle les secours ou le centre antipoison tout en rinçant ; poursuis jusqu’à leur avis.', 'Fais examiner l’œil en urgence et apporte l’étiquette du produit si cela est sûr.'],
      dos: ['Commence le rinçage avant de chercher l’étiquette.', 'Utilise un filet doux et évite que l’eau atteigne l’autre œil.'],
      donts: ['Ne frotte pas l’œil, ne neutralise pas le produit et ne retarde pas le rinçage.', 'Ne mets ni gouttes ni pommade sans avis médical.']
    },
    eye: {
      summary: 'Protège l’œil. Perte de vision, forte douleur, produit chimique ou objet pénétrant exigent des soins urgents.',
      steps: ['Pour la poussière ou un objet libre, cligne des yeux et rince doucement à l’eau propre ou au sérum. Retire une lentille si elle vient facilement.', 'Après un coup, pose doucement une poche froide enveloppée autour de l’œil, sans appuyer.', 'Pour un objet pénétrant ou une coupure, protège avec un écran rigide, comme un gobelet propre, et appelle les secours.', 'Fais examiner rapidement l’œil en cas de vision modifiée, forte douleur, sang ou sensation persistante de corps étranger.'],
      dos: ['Protège l’œil et demande l’évaluation adaptée.', 'Pour un produit chimique, rince immédiatement sans arrêt pendant au moins 20 minutes.'],
      donts: ['Ne frotte pas, n’appuie pas et ne retire pas un objet fiché.', 'N’utilise ni pince ni coton-tige sur le globe oculaire.']
    },
    bite: {
      summary: 'Nettoie rapidement les morsures ; les plaies profondes, au visage ou à la main nécessitent un avis médical.',
      steps: ['Éloigne-toi de l’animal ou de la source et vérifie que les lieux sont sûrs.', 'Lave abondamment à l’eau et au savon pendant plusieurs minutes. Arrête le saignement par pression directe.', 'Couvre d’un pansement propre. Consulte rapidement pour une plaie punctiforme, une morsure au visage/à la main ou un risque infectieux.', 'Demande conseil sur le tétanos et la rage selon le lieu et l’animal ; urgence en cas d’hémorragie ou de réaction grave.'],
      dos: ['Note les détails de l’animal si cela ne présente aucun risque.', 'Consulte si rougeur, chaleur, gonflement, douleur, pus ou fièvre augmentent.'],
      donts: ['Ne referme pas toi-même une morsure profonde et n’applique pas de produit irritant.', 'Ne retarde pas une évaluation après exposition possible à la rage.']
    },
    snake: {
      summary: 'Une morsure de serpent potentiellement venimeux est une urgence ; garde la personne immobile et appelle les secours.',
      steps: ['Appelle immédiatement les secours. Éloigne-toi du serpent ; ne tente pas de le capturer ou de le tuer.', 'Garde la personne calme et immobile. Immobilise le membre dans une position confortable et retire bagues ou montre.', 'Note l’heure et observe l’apparence du serpent à distance si possible ; surveille respiration et conscience.', 'Suis les consignes des secours et fais-la transporter immédiatement à l’hôpital.'],
      dos: ['Limite autant que possible les mouvements de la personne mordue.', 'Utilise un bandage compressif immobilisant uniquement si les recommandations locales le préconisent et si tu es formée.'],
      donts: ['Ne coupe pas, n’aspire pas, ne glace pas, ne lave pas et ne pose pas de garrot.', 'Ne donne pas d’alcool et ne retarde pas les soins pour identifier le serpent.']
    },
    sting: {
      summary: 'Une piqûre locale est souvent bénigne, mais gêne respiratoire ou gonflement de la langue/gorge est une urgence.',
      steps: ['Éloigne-toi de l’insecte. Si un dard est visible, retire-le rapidement par grattage ou autre geste rapide.', 'Lave la zone et applique une poche froide enveloppée pour diminuer douleur et gonflement.', 'Surveille urticaire généralisée, gonflement du visage/gorge, difficulté respiratoire, vomissement ou malaise ; appelle les secours.', 'Si la personne a son auto-injecteur d’adrénaline prescrit, aide-la à l’utiliser en cas de réaction grave.'],
      dos: ['Demande conseil pour une piqûre dans la bouche/près de l’œil ou de multiples piqûres.', 'Utilise uniquement des médicaments adaptés, selon la notice ou un professionnel.'],
      donts: ['Ne retarde pas le retrait d’un dard visible en essayant de le presser longuement.', 'Ne retarde pas le traitement urgent des signes d’anaphylaxie.']
    },
    jellyfish: {
      summary: 'Les gestes contre les méduses varient selon l’espèce et la région ; évite de toucher les tentacules à mains nues.',
      steps: ['Sors la personne de l’eau sans danger et appelle les secours en cas de douleur intense, difficulté respiratoire, malaise ou espèce dangereuse.', 'Ne frotte pas la zone et ne touche pas les tentacules à mains nues. Rince à l’eau de mer, pas à l’eau douce, sauf consigne locale contraire.', 'Retire les tentacules visibles avec une pince ou un gant si cela est sûr. Suis les consignes locales des sauveteurs ou antipoison.', 'Demande des soins urgents en cas de douleur importante ou symptômes généraux et surveille la respiration.'],
      dos: ['Demande aux sauveteurs ou au centre antipoison les gestes adaptés à l’espèce locale.', 'Utilise des gants ou un outil pour retirer les tentacules.'],
      donts: ['Ne frotte pas avec du sable, ne gratte pas à mains nues et n’applique pas d’urine.', 'N’utilise du vinaigre que si les consignes locales le recommandent.']
    },
    electric: {
      summary: 'Ne touche jamais une personne encore en contact avec l’électricité. Les lésions peuvent être cachées ou cardiaques.',
      steps: ['N’approche pas avant la coupure du courant. Appelle les secours et l’opérateur électrique si besoin.', 'Pour une ligne à haute tension, reste très loin et attends les professionnels ; le courant peut créer un arc.', 'Une fois la zone sûre, vérifie conscience et respiration. Si elle est absente ou anormale, commence la RCP et utilise un DAE.', 'Couvre les brûlures sans serrer avec un pansement sec et fais examiner la personne rapidement, même si elle se sent bien.'],
      dos: ['Priorise la sécurité et attends l’isolement électrique par des professionnels.', 'Demande un avis médical après toute électrisation.'],
      donts: ['Ne touche pas la personne ni le matériel tant que le courant peut être actif.', 'N’utilise pas d’eau près d’un équipement électrique sous tension.']
    }
  },
  ar: {
    tooth: {
      summary: 'سقوط السن الدائم حالة طارئة للأسنان؛ لا تعيدي السن اللبني إلى مكانه.',
      steps: ['اعثري على السن وامسكيه من التاج لا الجذر. لا تفركيه.', 'إذا كان متسخًا، اشطفيه سريعًا بالحليب أو المحلول الملحي دون فرك أو تجفيف الجذر.', 'إذا كان سنًا دائمًا والمصاب واعيًا، أعيديه بلطف إلى مكانه فقط إذا كان ذلك سهلًا وآمنًا. وإلا فاحفظيه في الحليب أو اللعاب.', 'راجعي طبيب أسنان طارئًا فورًا. أما السن اللبني فأبقيه خارج الفم واطلبي الرعاية.'],
      dos: ['أبقي السن رطبًا واطلبي مساعدة طبيب الأسنان فورًا.', 'استخدمي شاشًا للضغط الخفيف إذا نزف مكان السن.'],
      donts: ['لا تعيدي السن اللبني إلى مكانه.', 'لا تلمسي الجذر ولا تؤخري علاج الأسنان.']
    },
    bleeding: {
      summary: 'أوقفي النزيف مع الحفاظ على سلامتك؛ فالنزيف الشديد يحتاج إلى رعاية طبية عاجلة.',
      steps: ['اتصلي بالطوارئ عند النزيف الغزير أو الجرح العميق أو علامات الصدمة. ارتدي قفازات إن توفرت.', 'اضغطي بقوة وباستمرار على الجرح بشاش أو قطعة قماش نظيفة. إذا تسرّب الدم، أضيفي طبقات دون نزع الأولى.', 'إذا استمر نزيف الذراع أو الساق رغم الضغط، استخدمي عاصبة تجارية فقط إن توفرت وكنت تعرفين استخدامها؛ سجّلي الوقت.', 'أبقي المصاب ساكنًا ودافئًا. إذا كان جسم مغروس، اضغطي حوله لا عليه. ابقي معه حتى وصول المساعدة.'],
      dos: ['حافظي على ضغط مباشر متواصل.', 'اغسلي يديك واستخدمي حاجزًا واقيًا إن أمكن.'],
      donts: ['لا تنزعي جسمًا مغروسًا ولا تكشفي الجرح مرارًا.', 'لا تضعي عاصبة على الرقبة أو الجذع، ولا ترخي عاصبة بعد وضعها.']
    },
    wound: {
      summary: 'للجرح السطحي الصغير، يساعد التنظيف اللطيف والتغطية النظيفة على تقليل خطر العدوى.',
      steps: ['اغسلي يديك. إذا كان هناك نزيف، اضغطي بشاش نظيف حتى يتوقف.', 'اشطفي الجرح بماء جارٍ نظيف ونظفي الجلد المحيط بلطف بالماء والصابون.', 'جففي بالتربيت وغطيه بضماد نظيف، وبدليه إذا ابتل أو اتسخ.', 'اطلبي استشارة طبية للجرح العميق أو المتسخ أو المتباعد، أو عضة حيوان، أو إذا كان وضع لقاح الكزاز غير معروف.'],
      dos: ['اشطفي الأوساخ الظاهرة بلطف.', 'راقبي انتشار الاحمرار أو الحرارة أو التورم أو القيح أو الحمى.'],
      donts: ['لا تضعي الكحول أو المبيض أو ماء الأكسجين داخل الجرح.', 'لا تحفري لإزالة شظية عميقة ولا تغلقي جرحًا متسخًا بنفسك.']
    },
    nosebleed: {
      summary: 'يتوقف معظم نزيف الأنف بالضغط المستمر مع إمالة الرأس إلى الأمام.',
      steps: ['أجلسي المصاب منتصبًا ومائلاً إلى الأمام، مع فتح الفم كي لا يبتلع الدم.', 'اضغطي باستمرار على الجزء الطري من الأنف أسفل العظم لمدة 10 إلى 15 دقيقة باستخدام مؤقت.', 'يتنفس من الفم؛ إذا استمر النزيف، كرري الضغط مرة واطلبي المشورة العاجلة.', 'اطلبي الطوارئ عند النزيف الغزير أو صعوبة التنفس أو الإغماء أو الإصابة أو استمرار النزيف.'],
      dos: ['حافظي على الضغط وأميلي الرأس إلى الأمام.', 'دعي المصاب يبصق الدم الذي يصل إلى الفم.'],
      donts: ['لا تميلي الرأس إلى الخلف ولا تجعلي المصاب يستلقي.', 'لا تحشي الأنف بالمناديل ولا تنفخيه أو تعبثي به بعد توقف النزيف.']
    },
    fracture: {
      summary: 'تعاملي مع الكسر المحتمل أو إصابة الرأس أو الرقبة أو الظهر بحذر وتجنبي الحركة غير الضرورية.',
      steps: ['اتصلي بالطوارئ عند وجود كسر مفتوح أو ألم شديد أو تشوه أو خدر أو نزيف غزير أو احتمال إصابة العمود الفقري.', 'أبقي المنطقة ثابتة في وضعها كما وجدتها. اسنديها بحشوة لينة دون تقويمها.', 'للجرح المفتوح، ضعي غطاءً نظيفًا دون شد. عند النزيف اضغطي حول العظم لا عليه.', 'ضعي كمادة باردة ملفوفة قرب الإصابة لفترات قصيرة واطلبي تقييمًا طبيًا.'],
      dos: ['راقبي الإحساس والدورة الدموية بعد موضع الإصابة دون تحريكه.', 'أبقي المصاب دافئًا وطمئنيه.'],
      donts: ['لا تدفعي العظم البارز ولا تحاولي تقويم الطرف أو اختبار الكسر.', 'لا تحركي المصاب مع احتمال إصابة العمود الفقري إلا عند وجود خطر مباشر.']
    },
    sprain: {
      summary: 'احمي المفصل وأريحيه وضعي برودة ملفوفة، واطلبي تقييمًا إذا كانت الإصابة شديدة أو غير واضحة.',
      steps: ['أوقفي النشاط واحمي المفصل؛ انزعي الخواتم والأشياء الضيقة قبل زيادة التورم.', 'أريحيه وضعي كمادة باردة ملفوفة لمدة تصل إلى 20 دقيقة في كل مرة.', 'يمكن استخدام رباط مرن مريح؛ أرخيه إذا حدث خدر أو وخز أو تغير لون أو زيادة الألم.', 'ارفعي الطرف إذا كان ذلك مريحًا. اطلبي الرعاية عند ألم شديد أو تشوه أو تعذر استخدامه.'],
      dos: ['ضعي قماشًا بين الجلد والكمادة الباردة.', 'اطلبي المشورة إذا كان الكسر محتملًا.'],
      donts: ['لا تضعي الثلج مباشرة على الجلد ولا تشدي الرباط بما يعيق الدورة الدموية.', 'لا تجبري المفصل على حركة مؤلمة ولا تدلكي إصابة حديثة.']
    },
    burn: {
      summary: 'برّدي الحروق الحرارية بسرعة؛ الحروق الواسعة أو العميقة أو الكيميائية أو الكهربائية تحتاج إلى رعاية عاجلة.',
      steps: ['أبعدي المصاب عن مصدر الحرارة. اتصلي بالطوارئ للحرق الشديد أو الواسع أو مع صعوبة التنفس.', 'برّدي الحرق بماء جارٍ بارد لمدة 20 دقيقة بأسرع ما يمكن. انزعي المجوهرات والملابس الفضفاضة لا الملتصقة.', 'بعد التبريد غطيه برفق بضماد نظيف غير وبرّي أو غلاف بلاستيكي يوضع فوقه.', 'للمواد الكيميائية على الجلد، اتبعي الإرشادات الخاصة واتصلي بالطوارئ أو مركز السموم.'],
      dos: ['أبقي بقية جسم المصاب دافئًا أثناء تبريد الحرق.', 'اطلبي تقييمًا عاجلًا لحروق الأطفال أو الحروق الواسعة.'],
      donts: ['لا تستخدمي الثلج أو الزبدة أو معجون الأسنان أو الكريمات ولا تفقئي البثور.', 'لا تنزعي القماش الملتصق بالجلد المحروق.']
    },
    chemical: {
      summary: 'تجنبي ملامسة المادة الكيميائية واشطفي الجلد فورًا؛ واطلبي إرشادات خاصة بالمادة.',
      steps: ['احمي نفسك وانتقلي إلى هواء نقي إن كان ذلك آمنًا. اتصلي بالطوارئ عند التعرض الشديد.', 'انزعي الملابس والمجوهرات الملوثة بحذر. أزيلي المسحوق الجاف بالفرشاة قبل الشطف.', 'اشطفي الجلد بماء جارٍ فاتر أو بارد بغزارة لمدة 20 دقيقة على الأقل، وواصلي أثناء طلب المشورة.', 'اتصلي بمركز السموم أو الطوارئ وقدمي ملصق المنتج إن كان ذلك آمنًا.'],
      dos: ['استخدمي قفازات أو حاجزًا واقيًا إن توفر.', 'اتبعي إرشادات المختصين الخاصة بالمنتج.'],
      donts: ['لا تحاولي معادلة المادة بمادة أخرى.', 'لا تلمسي الأشياء الملوثة بيدين عاريتين ولا تؤخري الشطف.']
    },
    choking: {
      summary: 'للبالغ أو الطفل الأكبر من سنة الواعي الذي لا يستطيع الكلام أو التنفس أو السعال بفعالية، تحركي فورًا.',
      steps: ['اسألي إن كان يختنق. إذا كان يسعل بقوة، شجعيه على السعال وراقبيه.', 'إذا لم يستطع التنفس أو الكلام أو كان السعال غير فعال، اتصلي بالطوارئ أو كلفي شخصًا بذلك.', 'وجهي حتى 5 ضربات قوية بين لوحي الكتف وتحققي بعد كل واحدة. إذا لم يخرج الجسم، أعطي حتى 5 ضغطات بطنية وكرري بالتناوب.', 'إذا فقد الوعي، أنزليه بأمان واتصلي بالطوارئ وابدئي الإنعاش. أزيلي الجسم فقط إذا كان ظاهرًا بوضوح.'],
      dos: ['في أواخر الحمل أو تعذر إحاطة البطن، استخدمي ضغطات الصدر بدلًا منها.', 'اطلبي تقييمًا طبيًا بعد الضغطات البطنية حتى لو نجحت.'],
      donts: ['لا تدخلي إصبعك عشوائيًا في الفم ولا تعطيه طعامًا أو شرابًا.', 'لا تستخدمي الضغطات البطنية لرضيع دون سنة.']
    },
    infantChoke: {
      summary: 'للرضيع دون سنة الذي لا يستطيع السعال أو البكاء أو التنفس بفعالية، استخدمي الإسعاف المناسب لعمره.',
      steps: ['اتصلي بالطوارئ أو اطلبي من أحدهم ذلك. إذا كان يسعل بقوة، دعيه يسعل وراقبيه.', 'اسندي الرضيع ووجهه لأسفل على ساعدك أو فخذك، ورأسه أخفض من صدره مع دعم الرأس والفك. أعطي حتى 5 ضربات على الظهر.', 'اقلبيه على ظهره مع استمرار دعم الرأس. أعطي حتى 5 ضغطات صدرية بإصبعين في منتصف الصدر.', 'كرري الدورات؛ إذا فقد الوعي فاتصلي بالطوارئ وابدئي إنعاش الرضيع. أزيلي الجسم فقط إذا كان ظاهرًا.'],
      dos: ['استخدمي ضغطات الصدر لا البطن.', 'اتبعي تعليمات الطوارئ واطلبي تقييمًا بعد الحادثة.'],
      donts: ['لا تقلبي الرضيع رأسًا على عقب ولا تهزيه ولا تدخلي إصبعك عشوائيًا.', 'لا تؤخري طلب المساعدة إذا تأثر تنفسه.']
    },
    cpr: {
      summary: 'إذا كان الشخص لا يستجيب ولا يتنفس بشكل طبيعي، اتصلي بالطوارئ وابدئي الإنعاش القلبي الرئوي.',
      steps: ['تحققي من أمان المكان. ربتي عليه وناديه، وافحصي التنفس الطبيعي مدة لا تتجاوز 10 ثوانٍ.', 'اتصلي بالطوارئ على مكبر الصوت واطلبي من أحدهم إحضار جهاز مزيل الرجفان. إذا كنت وحدك، اتبعي تعليمات الهاتف.', 'ابدئي ضغطات في منتصف الصدر بقوة وسرعة 100 إلى 120 في الدقيقة مع السماح بارتداد الصدر. للبالغ يكون العمق نحو 5 إلى 6 سم.', 'استخدمي جهاز مزيل الرجفان فور توفره واتبعي تعليماته. واصلي حتى يعود التنفس الطبيعي أو يصل المختصون أو تعجزي عن المتابعة.'],
      dos: ['إذا كنت مدربة وقادرة، استخدمي 30 ضغطة ونفَسَين؛ وإلا فضغطات الصدر وحدها أفضل من لا شيء للبالغ.', 'للأطفال والرضع اتبعي التدريب المناسب للعمر وتعليمات الطوارئ.'],
      donts: ['لا تؤخري الإنعاش بحثًا عن النبض ولا تحركي المصاب بلا داعٍ.', 'لا تستخدمي الجهاز على سطح متحرك أو مبلل؛ اتبعي تعليماته ولا يلمس أحد المصاب أثناء التحليل أو الصدمة.']
    },
    asthma: {
      summary: 'ساعدي المصاب على استخدام بخاخ الإنقاذ الموصوف له؛ نوبة الربو الشديدة حالة طارئة.',
      steps: ['ساعديه على الجلوس منتصبًا والهدوء؛ لا تجعليه يستلقي.', 'ساعديه على استخدام بخاخ الإنقاذ الخاص به والحجرة الموصوفة وفق خطة الربو أو تعليمات الطوارئ.', 'اتصلي بالطوارئ إذا كانت الأعراض شديدة أو تتفاقم أو تعذر الكلام أو ازرقت/اغمقت الشفاه أو لم يفد البخاخ.', 'ابقي معه واتبعي خطة الربو المكتوبة وتعليمات الطوارئ.'],
      dos: ['ساعديه في الوصول إلى دوائه الموصوف له.', 'عاملي صعوبة التنفس الشديدة كحالة طارئة.'],
      donts: ['لا تعطيه بخاخًا موصوفًا لشخص آخر ولا تجعليه يتنفس في كيس ورقي.', 'لا تنتظري مرور نوبة شديدة من تلقاء نفسها.']
    },
    breathing: {
      summary: 'صعوبة التنفس المفاجئة أو الشديدة تستدعي مساعدة طبية عاجلة.',
      steps: ['اتصلي بالطوارئ عند صعوبة شديدة أو ازرقاق/رمادية الشفاه أو الارتباك أو الانهيار أو التدهور السريع.', 'ساعدي المصاب على اتخاذ الوضعية الأسهل للتنفس وأرخي الملابس الضيقة.', 'ساعديه على استخدام دواء الإنقاذ الموصوف إن كانت لديه خطة، وراقبي التنفس والاستجابة.', 'إذا فقد الوعي ولم يتنفس طبيعيًا، ابدئي الإنعاش واستخدمي جهاز مزيل الرجفان إن توفر.'],
      dos: ['ابقي معه وطمئنيه.', 'اتبعي تعليمات الطوارئ.'],
      donts: ['لا تجبريه على الطعام أو الشراب ولا تجعليه يستلقي ولا تستخدمي كيسًا ورقيًا.', 'لا تؤخري الطوارئ عند الأعراض الشديدة.']
    },
    smoke: {
      summary: 'ابتعدي عن الدخان أو الأبخرة فقط إن أمكن دون تعريض نفسك للخطر؛ فالاستنشاق قد يهدد الحياة.',
      steps: ['لا تدخلي منطقة مليئة بالدخان أو ملوثة. اتصلي بالطوارئ من مكان آمن.', 'إذا كان ذلك آمنًا، انقلي المصاب إلى هواء نقي دون تعريض نفسك للخطر.', 'أرخي الملابس وراقبي التنفس. إذا كان فاقد الوعي ولا يتنفس طبيعيًا، ابدئي الإنعاش بعد التأكد من أمان المكان.', 'عند الاشتباه بأول أكسيد الكربون، اخرجي من المبنى فورًا ولا تعودي حتى يسمح المختصون.'],
      dos: ['أخبري الطوارئ بما قد تم استنشاقه ومتى.', 'اطلبي تقييمًا عاجلًا بعد التعرض الكبير حتى لو خفت الأعراض.'],
      donts: ['لا تعودي إلى مبنى ملوث ولا تحاولي إنقاذًا يعرضك للخطر.', 'تذكري أن أول أكسيد الكربون بلا رائحة.']
    },
    poison: {
      summary: 'يتطلب الاشتباه بالتسمم الاتصال فورًا بمركز السموم أو الطوارئ المحلية، حتى عند غياب الأعراض.',
      steps: ['اتصلي بمركز السموم المحلي أو بالطوارئ الآن واتبعي تعليماتهم. اتصلي بالطوارئ فورًا عند الإغماء أو التشنج أو صعوبة التنفس أو النعاس غير المعتاد.', 'لا تحاولي إحداث القيء. إذا كان المصاب فاقد الوعي أو يتشنج أو يعاني صعوبة التنفس، فلا تعطيه شيئًا عن طريق الفم.', 'احتفظي بالعبوة أو الملصق أو صورة للمادة. سجلي إن أمكن ما تم تناوله والكمية والوقت.', 'إذا لامست المادة الجلد أو الملابس، احمي نفسك وانزعي الملابس الملوثة واشطفي الجلد بالماء. عند تعرض العين، اشطفي باستمرار 20 دقيقة على الأقل.'],
      dos: ['اتبعي إرشادات مركز السموم أو المختص الخاصة بالمادة.', 'راقبي المصاب وخذي معلومات المنتج إلى الرعاية الطبية.'],
      donts: ['لا تعطي الحليب أو الطعام أو الدواء أو الفحم المنشط إلا بتوجيه من مركز السموم أو مختص.', 'لا تنتظري ظهور الأعراض ولا تحاولي معادلة المادة.']
    },
    drowning: {
      summary: 'الغرق خطر على المصاب وعلى المنقذ غير المدرب.',
      steps: ['اتصلي بالطوارئ. مدي أو ارمي وسيلة طفو من مكان آمن؛ لا تدخلي الماء دون تدريب ومعدات.', 'بعد إخراجه بأمان، تحققي من الاستجابة والتنفس الطبيعي. إذا لم يتنفس طبيعيًا، ابدئي الإنعاش واطلبي جهاز مزيل الرجفان.', 'أعطي أنفاس إنقاذ إذا كنت مدربة؛ فهي مهمة خصوصًا بعد الغرق. اتبعي تعليمات الطوارئ.', 'حتى إن بدا المصاب بخير، رتبي تقييمًا طبيًا عاجلًا بعد غمره بالماء.'],
      dos: ['حافظي على سلامتك واستخدمي وسيلة طفو أو عصا للوصول.', 'استخدمي جهاز مزيل الرجفان فور توفره وجففي الصدر سريعًا واتّبعي التعليمات.'],
      donts: ['لا تعرضي نفسك للخطر بدخول الماء ولا تضغطي على البطن لمحاولة إخراج الماء.', 'لا تفترضي أن التحسن الظاهري يعني انتفاء الحاجة إلى الرعاية الطبية.']
    },
    chestPain: {
      summary: 'أعراض النوبة القلبية المحتملة تحتاج تقييمًا عاجلًا حتى إن تراجعت أو ظهرت واختفت.',
      steps: ['اتصلي بالطوارئ فورًا؛ لا تقودي المصاب بنفسك إذا كانت سيارة الإسعاف متاحة.', 'ساعديه على الراحة بوضع مريح وأرخي ملابسه الضيقة وابقَي معه.', 'إذا كان لديه دواء موصوف للذبحة، ساعديه على استخدامه. اسألي الطوارئ قبل إعطاء الأسبرين.', 'إذا انهار ولم يتنفس طبيعيًا، ابدئي الإنعاش واستخدمي جهاز مزيل الرجفان إن توفر.'],
      dos: ['سجّلي وقت بدء الأعراض والأدوية التي تناولها.', 'خذي ضغط الصدر أو ضيق التنفس أو التعرق أو الغثيان أو الألم الممتد للفك أو الذراع أو الظهر بجدية.'],
      donts: ['لا تنتظري زوال الأعراض ولا تدعيه يبذل مجهودًا.', 'لا تعطي طعامًا أو شرابًا أو دواء شخص آخر.']
    },
    stroke: {
      summary: 'السكتة الدماغية حالة طارئة. سجّلي وقت بدء الأعراض أو آخر وقت كان فيه المصاب بخير.',
      steps: ['استخدمي اختبار الوجه والذراع والكلام: تدلّي الوجه أو ضعف الذراع أو صعوبة الكلام تعني الاتصال بالطوارئ فورًا.', 'اتصلي حتى لو تحسنت الأعراض أو اختفت. سجّلي آخر وقت كان فيه المصاب بخير.', 'اجعليه في وضع مريح وآمن. إذا نعس أو تقيأ لكنه يتنفس، ضعيه على جانبه إن كان ذلك آمنًا.', 'ابقي معه وراقبي تنفسه واتبعي تعليمات الطوارئ.'],
      dos: ['اتصلي فورًا؛ سرعة التقييم مهمة.', 'أخبري الطوارئ بالأعراض ووقت بدايتها والأدوية المعروفة.'],
      donts: ['لا تعطيه طعامًا أو شرابًا أو أسبرين أو أي دواء.', 'لا تقوديه بنفسك إذا كانت خدمات الطوارئ متاحة.']
    },
    faint: {
      summary: 'امتنعي عن سقوط المصاب وتحققي من عودته السريعة إلى حالته الطبيعية.',
      steps: ['ساعديه على الاستلقاء على ظهره وارفي ساقيه إذا لم توجد إصابة أو صعوبة تنفس.', 'أرخي الملابس الضيقة وهوّي المكان. تحققي من التنفس والاستجابة.', 'إذا لم يتعافَ سريعًا أو أُصيب أو كان حاملًا أو لديه ألم صدر أو صعوبة تنفس أو تكرر الإغماء، اتصلي بالطوارئ.', 'عندما يستعيد وعيه الكامل، دعيه يرتاح ثم يجلس ببطء. لا تقدمي الماء إلا إذا كان واعيًا ويستطيع البلع.'],
      dos: ['احميه من إصابة أخرى وراقبي تنفسه.', 'اطلبي المشورة عند أول إغماء غير مفسر أو تكراره.'],
      donts: ['لا تصفعيه أو ترشي الماء عليه ولا تضعي شيئًا في فمه.', 'لا تقدمي طعامًا أو شرابًا إذا كان نعسانًا أو فاقد الوعي.']
    },
    shock: {
      summary: 'الصدمة بعد إصابة أو نزيف أو حساسية أو مرض حالة تهدد الحياة.',
      steps: ['اتصلي بالطوارئ فورًا وعالجي السبب فقط إذا كان ذلك آمنًا، مثل الضغط على النزيف.', 'ساعدي المصاب على الاستلقاء. ارفعي ساقيه فقط إذا كان مرتاحًا ولا توجد إصابة أو صعوبة تنفس.', 'أبقيه دافئًا وساكنًا وطمئنيه. أرخي الملابس وراقبي التنفس والاستجابة.', 'إذا فقد الوعي ولم يتنفس طبيعيًا، ابدئي الإنعاش واستخدمي جهاز مزيل الرجفان إن توفر.'],
      dos: ['اعتبري شحوب الجلد وتعرقه والضعف والتنفس السريع والارتباك أو الانهيار علامات عاجلة.', 'ابقي معه حتى وصول المساعدة.'],
      donts: ['لا تقدمي طعامًا أو شرابًا؛ فقد يحتاج إلى جراحة.', 'لا تحركيه بلا داعٍ ولا تتركيه وحده.']
    },
    allergy: {
      summary: 'التفاعل التحسسي الشديد (التأق) حالة طارئة؛ استخدمي حقنة الأدرينالين الذاتية الموصوفة فورًا.',
      steps: ['اتصلي بالطوارئ وأخبريهم باحتمال حدوث تأق.', 'ساعدي المصاب على استخدام حقنة الأدرينالين الخاصة به فورًا في الجانب الخارجي للفخذ وفق التعليمات.', 'اجعليه مستلقيًا مع رفع الساقين إذا سمح التنفس؛ إذا صعب التنفس دعيه يجلس وساقاه ممدودتان. لا تدعيه يقف أو يمشي.', 'إذا استمرت الأعراض وتوفرت حقنة ثانية موصوفة، اتبعي تعليمات الطوارئ. إذا لم يتنفس طبيعيًا، ابدئي الإنعاش.'],
      dos: ['استخدمي الحقنة حسب التعليمات وسجّلي الوقت.', 'حتى مع التحسن، يلزم تقييم عاجل في المستشفى.'],
      donts: ['لا تؤخري الأدرينالين لتجربة مضاد الهيستامين.', 'لا تدعيه يقف أو يمشي أو يقود بنفسه إلى الرعاية.']
    },
    heat: {
      summary: 'الارتباك أو الانهيار أو التشنج أو سخونة الجلد الشديدة في الحر قد تشير لضربة الشمس: حالة طارئة.',
      steps: ['اتصلي بالطوارئ عند الارتباك أو الانهيار أو التشنج أو الاشتباه بضربة الشمس.', 'انقلي المصاب إلى الظل أو مكان بارد، وانزعي الملابس الخارجية وابدئي التبريد السريع بالماء البارد والأقمشة المبللة والتهوية.', 'إذا كان واعيًا تمامًا ويستطيع البلع، أعطيه رشفات صغيرة متكررة من الماء البارد. لا تعطيه شيئًا إذا ارتبك أو نعس أو تقيأ.', 'واصلي التبريد حتى وصول المساعدة وراقبي التنفس والاستجابة.'],
      dos: ['برّدي المصاب بسرعة وأبقيه تحت المراقبة.', 'للتشنجات أو الإجهاد الحراري البسيط، أريحيه في مكان بارد وأعيدي السوائل فقط إذا كان واعيًا.'],
      donts: ['لا تعطي سوائل لمن كان مرتبكًا أو فاقد الوعي.', 'لا تستخدمي أدوية الحمى بدلًا من التبريد والرعاية العاجلة.']
    },
    cold: {
      summary: 'دفئي المصاب تدريجيًا واحمي الجلد البارد أو المخدر من مزيد من الضرر.',
      steps: ['انقليه إلى مكان آمن وانزعي الملابس المبللة بلطف. اتصلي بالطوارئ عند الارتباك أو النعاس الشديد أو توقف الارتجاف.', 'لفيه ببطانيات جافة ودفئي مركز الجسم أولًا. تعاملي معه برفق.', 'لقضمة الصقيع، احمي المنطقة واطلبي رعاية عاجلة. لا تعيدي تدفئتها بماء دافئ إلا إذا أمكن منع إعادة التجمد وبحسب إرشادات مختص.', 'راقبي التنفس والاستجابة؛ ابدئي الإنعاش عند الحاجة وبعد التأكد من أمان المكان.'],
      dos: ['دفئي المصاب تدريجيًا وأبقيه جافًا.', 'اطلبي الرعاية عند الاشتباه بانخفاض الحرارة أو قضمة الصقيع.'],
      donts: ['لا تفركي الجلد المتجمد ولا تستخدمي حرارة مباشرة ولا تجعلي المصاب يمشي على قدم متجمدة.', 'لا تعطي الكحول أو مشروبًا ساخنًا لمن كان نعسانًا أو مرتبكًا.']
    },
    seizure: {
      summary: 'احمي المصاب من الأذى وسجلي مدة النوبة؛ لا تقيّديه.',
      steps: ['أبعدي الأشياء الخطرة وضعي شيئًا لينًا تحت الرأس. أرخي ما يضيق حول الرقبة وسجلي مدة النوبة.', 'لا تمسكيه بالقوة. بعد توقف التشنج تحققي من تنفسه وضعيه على جانبه إذا كان يتنفس ولا توجد إصابة محتملة بالعمود الفقري.', 'ابقي معه حتى يستعيد وعيه كاملًا. اتصلي بالطوارئ إذا استمرت 5 دقائق أو أكثر، أو تكررت، أو كانت أول نوبة، أو حدثت إصابة أو صعوبة تنفس.', 'إذا لم يتنفس طبيعيًا بعد النوبة، اتصلي بالطوارئ وابدئي الإنعاش.'],
      dos: ['سجلي مدة النوبة وما حدث لإخبار المختصين.', 'طمئنيه واحفظي خصوصيته أثناء التعافي.'],
      donts: ['لا تضعي شيئًا في فمه ولا تعطيه طعامًا أو شرابًا أو دواء قبل استعادة الوعي الكامل.', 'لا تقيّدي حركته ولا تحاولي إيقاف التشنج.']
    },
    eyeChemical: {
      summary: 'تحتاج المادة الكيميائية في العين إلى شطف فوري ومتواصل ومشورة طبية أو من مركز السموم.',
      steps: ['ابدئي فورًا بالشطف بماء نظيف فاتر أو بارد، وأبقي الجفنين مفتوحين ووجهي الماء بعيدًا عن العين الأخرى.', 'واصلي الشطف 20 دقيقة على الأقل. انزعي العدسات إذا خرجت بسهولة أثناء الشطف.', 'اتصلي بالطوارئ أو مركز السموم أثناء الشطف وواصليه حتى يطلبوا التوقف.', 'اطلبي تقييمًا عاجلًا وخذي ملصق المنتج إن كان ذلك آمنًا.'],
      dos: ['ابدئي الشطف قبل البحث عن ملصق المنتج.', 'استخدمي تدفقًا لطيفًا وامتنعي عن نقل الماء للعين الأخرى.'],
      donts: ['لا تفركي العين ولا تحاولي معادلة المادة ولا تؤخري الشطف.', 'لا تضعي قطرات أو مرهمًا إلا بتوجيه طبي.']
    },
    eye: {
      summary: 'احمي العين. فقدان الرؤية أو الألم الشديد أو المواد الكيميائية أو الجسم النافذ يتطلب رعاية عاجلة.',
      steps: ['للغبار أو الجسم السائب، ارمشي واشطفي بلطف بماء نظيف أو محلول ملحي. انزعي العدسة إذا خرجت بسهولة.', 'بعد الضربة، ضعي كمادة باردة ملفوفة برفق حول العين دون ضغط.', 'للجسم النافذ أو الجرح، غطي العين بواقي صلب مثل كوب ورقي نظيف واطلبي الطوارئ.', 'اطلبي تقييمًا عاجلًا لتغير الرؤية أو الألم الشديد أو وجود دم أو إحساس مستمر بجسم غريب.'],
      dos: ['احمي العين واطلبي التقييم الطبي المناسب.', 'عند تناثر مادة كيميائية، اشطفي فورًا وباستمرار 20 دقيقة على الأقل.'],
      donts: ['لا تفركي أو تضغطي على العين ولا تنزعي جسمًا مغروسًا.', 'لا تستخدمي ملقطًا أو عودًا قطنيًا على كرة العين.']
    },
    bite: {
      summary: 'نظفي العضات فورًا؛ والجروح العميقة أو في الوجه واليد تحتاج إلى استشارة طبية.',
      steps: ['ابتعدي عن الحيوان أو مصدر الإصابة وتأكدي من أمان المكان.', 'اغسلي الجرح جيدًا بالماء والصابون الجاري عدة دقائق. أوقفي النزيف بالضغط المباشر.', 'غطيه بضماد نظيف. اطلبي المشورة سريعًا للثقوب العميقة أو عضات الوجه/اليد أو خطر العدوى.', 'اسألي المختص عن الكزاز وخطر السعار بحسب المكان والحيوان؛ اطلبي الطوارئ للنزيف الشديد أو التحسس الخطير.'],
      dos: ['سجلي معلومات عن الحيوان إذا كان ذلك آمنًا دون محاولة الإمساك به.', 'اطلبي الرعاية عند ازدياد الاحمرار أو الحرارة أو التورم أو الألم أو القيح أو الحمى.'],
      donts: ['لا تغلقي جرح عضة عميقًا بنفسك ولا تضعي مواد مهيجة.', 'لا تؤخري التقييم عند احتمال التعرض للسعار.']
    },
    snake: {
      summary: 'لدغة الأفعى السامة المحتملة حالة طارئة؛ أبقي المصاب ساكنًا واطلبي المساعدة فورًا.',
      steps: ['اتصلي بالطوارئ فورًا. ابتعدي عن الأفعى ولا تحاولي الإمساك بها أو قتلها.', 'أبقي المصاب هادئًا وساكنًا. ثبتي الطرف بوضع مريح وانزعي الخواتم والساعة.', 'سجلي الوقت ولاحظي شكل الأفعى من مسافة آمنة إن أمكن؛ راقبي التنفس والوعي.', 'اتبعي تعليمات الطوارئ وانقلي المصاب إلى المستشفى فورًا.'],
      dos: ['قللي حركة المصاب قدر الإمكان.', 'استخدمي رباط ضغط وتثبيت فقط إذا أوصت الإرشادات المحلية وكنت مدربة.'],
      donts: ['لا تشقي أو تمصي أو تضعي الثلج أو تغسلي موضع اللدغة ولا تضعي عاصبة.', 'لا تعطي الكحول ولا تؤخري العلاج للتعرف على الأفعى.']
    },
    sting: {
      summary: 'غالبًا ما تكون اللسعة موضعية، لكن صعوبة التنفس أو تورم اللسان/الحلق حالة طارئة.',
      steps: ['ابتعدي عن الحشرة. إذا ظهرت إبرة اللسع، أزيليها بسرعة بالكشط أو بطريقة سريعة أخرى.', 'اغسلي الموضع وضعي كمادة باردة ملفوفة لتخفيف الألم والتورم.', 'راقبي الطفح المنتشر أو تورم الوجه/الحلق أو صعوبة التنفس أو القيء أو الانهيار؛ اتصلي بالطوارئ عند حدوثها.', 'إذا كان لدى المصاب حقنة أدرينالين موصوفة، ساعديه على استخدامها للتفاعل الشديد.'],
      dos: ['اطلبي المشورة إذا كانت اللسعة في الفم/العين أو كانت اللسعات كثيرة.', 'استخدمي أدوية مناسبة فقط وفق النشرة أو نصيحة مختص.'],
      donts: ['لا تؤخري نزع الإبرة بمحاولة عصرها طويلًا.', 'لا تؤخري العلاج الطارئ عند ظهور علامات التأق.']
    },
    jellyfish: {
      summary: 'تختلف إسعافات قناديل البحر حسب النوع والمنطقة؛ تجنبي لمس اللوامس بيدين عاريتين.',
      steps: ['أخرجي المصاب من الماء بأمان واتصلي بالطوارئ عند ألم شديد أو صعوبة تنفس أو انهيار أو نوع خطير.', 'لا تفركي الموضع ولا تلمسي اللوامس بيدين عاريتين. اشطفي بماء البحر لا العذب، إلا إذا نصحت الإرشادات المحلية بغير ذلك.', 'أزيلي اللوامس الظاهرة بملقط أو قفاز إن كان ذلك آمنًا. اتبعي توجيه المنقذين أو مركز السموم المحلي.', 'اطلبي رعاية عاجلة للألم الشديد أو الأعراض العامة وراقبي التنفس.'],
      dos: ['اسألي المنقذين أو مركز السموم عن النوع الموجود في المنطقة.', 'استخدمي قفازًا أو أداة لإزالة اللوامس.'],
      donts: ['لا تفركي بالرمل ولا تكشطي بيدين عاريتين ولا تستخدمي البول.', 'لا تستخدمي الخل إلا إذا أوصت الإرشادات المحلية به.']
    },
    electric: {
      summary: 'لا تلمسي شخصًا ما زال متصلًا بالكهرباء. فقد تسبب الكهرباء حروقًا خفية أو توقف القلب.',
      steps: ['لا تقتربي قبل فصل التيار. اتصلي بالطوارئ وشركة الكهرباء عند الحاجة.', 'لخطوط الجهد العالي، ابقي بعيدة جدًا وانتظري المختصين؛ فقد يقفز التيار عبر الهواء.', 'بعد التأكد من الأمان، تحققي من الاستجابة والتنفس. إذا كان غائبًا أو غير طبيعي، ابدئي الإنعاش واستخدمي مزيل الرجفان.', 'غطي الحروق بضماد جاف دون شد واطلبي تقييمًا طبيًا عاجلًا حتى إن شعر المصاب بأنه بخير.'],
      dos: ['اجعلي أمان المكان أولوية وانتظري المختصين لفصل التيار.', 'اطلبي مشورة طبية بعد أي صعق كهربائي.'],
      donts: ['لا تلمسي المصاب أو الجهاز ما دام التيار قد يكون جاريًا.', 'لا تستخدمي الماء قرب معدات كهربائية موصولة بالتيار.']
    }
  }
};

const learningModules = [
  ['heart','fa-heart-pulse',['Heart & circulation','Cœur et circulation','القلب والدورة الدموية'],
    ['The heart is a muscular pump that keeps blood moving through two connected circuits.','Le cœur est une pompe musculaire qui fait circuler le sang dans deux circuits reliés.','القلب مضخة عضلية تحرك الدم عبر دورتين مترابطتين.'],
    ['The right side sends blood to the lungs for gas exchange; the left side sends oxygen-rich blood to the body. Valves keep flow one-way.','Le côté droit envoie le sang vers les poumons ; le côté gauche propulse le sang oxygéné vers le corps. Les valves imposent un sens unique.','يرسل الجانب الأيمن الدم إلى الرئتين لتبادل الغازات، ويرسل الأيسر الدم الغني بالأكسجين إلى الجسم. وتضمن الصمامات اتجاهًا واحدًا.'],
    ['A pulse is the pressure wave from each heartbeat. A pulse alone does not measure overall health.','Le pouls correspond à l’onde de pression de chaque battement ; il ne suffit pas à évaluer la santé.','النبض موجة ضغط تنتج عن كل ضربة قلب، ولا يكفي وحده لتقييم الصحة.']],
  ['brain','fa-brain',['Brain & nervous system','Cerveau et système nerveux','الدماغ والجهاز العصبي'],
    ['The brain and spinal cord coordinate sensation, movement, thought, and automatic body functions.','Le cerveau et la moelle épinière coordonnent les sensations, les mouvements, la pensée et des fonctions automatiques.','ينسق الدماغ والحبل الشوكي الإحساس والحركة والتفكير ووظائف الجسم التلقائية.'],
    ['Neurons communicate through electrical and chemical signals. The cerebellum helps coordinate movement; the brainstem regulates vital functions such as breathing.','Les neurones communiquent par des signaux électriques et chimiques. Le cervelet coordonne les mouvements ; le tronc cérébral régule des fonctions vitales comme la respiration.','تتواصل الخلايا العصبية بإشارات كهربائية وكيميائية. يساعد المخيخ في تنسيق الحركة وينظم جذع الدماغ وظائف حيوية كالتنفس.'],
    ['A sudden face droop, arm weakness, or speech trouble may signal stroke: call emergency services immediately.','Une asymétrie soudaine du visage, une faiblesse du bras ou un trouble de la parole peut signaler un AVC : appelle immédiatement les secours.','قد يدل تدلي الوجه المفاجئ أو ضعف الذراع أو صعوبة الكلام على سكتة؛ اتصلي بالطوارئ فورًا.']],
  ['immune','fa-shield-virus',['Immune system','Système immunitaire','الجهاز المناعي'],
    ['The immune system recognizes and responds to harmful microbes while normally distinguishing the body’s own cells.','Le système immunitaire reconnaît les microbes dangereux tout en distinguant normalement les cellules de l’organisme.','يتعرف الجهاز المناعي على الميكروبات الضارة ويستجيب لها مع تمييز خلايا الجسم عادةً.'],
    ['Skin and mucous membranes form first barriers. White blood cells, antibodies, and immune memory contribute to defense. Vaccines train immune memory safely.','La peau et les muqueuses forment des barrières. Les globules blancs, les anticorps et la mémoire immunitaire participent aux défenses. Les vaccins entraînent cette mémoire.','يشكل الجلد والأغشية المخاطية حواجز أولى. وتساهم كريات الدم البيضاء والأجسام المضادة والذاكرة المناعية في الدفاع؛ وتدرب اللقاحات الذاكرة بأمان.'],
    ['Antibiotics act against bacteria, not viruses, and should only be used as prescribed by a clinician.','Les antibiotiques agissent contre les bactéries, pas contre les virus, et s’utilisent uniquement sur prescription.','تؤثر المضادات الحيوية في البكتيريا لا الفيروسات، ويجب استخدامها وفق وصف المختص فقط.']],
  ['respiratory','fa-lungs',['Respiratory system','Système respiratoire','الجهاز التنفسي'],
    ['The respiratory system brings oxygen into the body and removes carbon dioxide through ventilation and gas exchange.','Le système respiratoire apporte l’oxygène et élimine le dioxyde de carbone grâce à la ventilation et aux échanges gazeux.','يدخل الجهاز التنفسي الأكسجين إلى الجسم ويطرح ثاني أكسيد الكربون عبر التهوية وتبادل الغازات.'],
    ['Air travels through the trachea and bronchi to alveoli. Their thin walls and surrounding capillaries allow gases to diffuse between air and blood.','L’air passe par la trachée et les bronches jusqu’aux alvéoles. Leurs parois fines et les capillaires permettent les échanges gazeux.','يمر الهواء عبر القصبة والشعب الهوائية إلى الحويصلات. وتتيح جدرانها الرقيقة والشعيرات الدموية انتشار الغازات بين الهواء والدم.'],
    ['The diaphragm is a major breathing muscle. Wheezing or sudden severe breathlessness needs appropriate medical assessment.','Le diaphragme est un muscle essentiel à la respiration. Un sifflement ou un essoufflement grave soudain nécessite une évaluation médicale.','الحجاب الحاجز عضلة رئيسية للتنفس. ويحتاج الصفير أو ضيق النفس الشديد المفاجئ إلى تقييم طبي مناسب.']],
  ['digestive','fa-stomach',['Digestive system','Système digestif','الجهاز الهضمي'],
    ['Digestion breaks food into small molecules that can be absorbed and used by cells.','La digestion transforme les aliments en petites molécules absorbables et utilisables par les cellules.','يفكك الهضم الطعام إلى جزيئات صغيرة يمكن امتصاصها واستخدامها في الخلايا.'],
    ['The mouth starts mechanical and chemical digestion. The stomach mixes food; most nutrient absorption occurs through the small intestine. The large intestine absorbs water.','La bouche commence la digestion mécanique et chimique. L’estomac mélange les aliments ; l’intestin grêle absorbe la plupart des nutriments et le côlon absorbe l’eau.','يبدأ الفم الهضم الميكانيكي والكيميائي. تمزج المعدة الطعام؛ وتمتص الأمعاء الدقيقة معظم المغذيات، وتمتص الأمعاء الغليظة الماء.'],
    ['The liver makes bile and processes nutrients; the pancreas releases digestive enzymes and helps regulate blood glucose.','Le foie produit la bile et transforme les nutriments ; le pancréas libère des enzymes digestives et aide à réguler la glycémie.','ينتج الكبد العصارة الصفراوية ويعالج المغذيات؛ ويفرز البنكرياس إنزيمات هاضمة ويساعد في تنظيم سكر الدم.']],
  ['muscular','fa-dumbbell',['Muscular system','Système musculaire','الجهاز العضلي'],
    ['Skeletal muscles contract to move bones, maintain posture, and produce heat.','Les muscles squelettiques se contractent pour déplacer les os, maintenir la posture et produire de la chaleur.','تنقبض العضلات الهيكلية لتحريك العظام والحفاظ على وضعية الجسم وإنتاج الحرارة.'],
    ['Tendons connect muscle to bone. Muscles often work in opposing pairs: one contracts while another relaxes to control a movement.','Les tendons relient les muscles aux os. Les muscles agissent souvent par paires opposées : l’un se contracte pendant que l’autre se relâche.','تربط الأوتار العضلات بالعظام. وتعمل العضلات غالبًا في أزواج متعاكسة؛ تنقبض إحداها بينما ترتخي الأخرى للتحكم بالحركة.'],
    ['Warm-up, gradual training, rest, and hydration support safe activity; persistent pain deserves attention.','Échauffement, progression, repos et hydratation favorisent une activité sûre ; une douleur persistante mérite attention.','يدعم الإحماء والتدرج والراحة والترطيب النشاط الآمن؛ ويستحق الألم المستمر الانتباه.']],
  ['genetics','fa-dna',['Genetics','Génétique','الوراثة'],
    ['Genetics studies how biological information is stored, passed on, and expressed. DNA contains instructions used by cells.','La génétique étudie le stockage, la transmission et l’expression de l’information biologique. L’ADN porte des instructions utilisées par les cellules.','تدرس الوراثة كيفية تخزين المعلومات الحيوية وانتقالها والتعبير عنها. ويحمل الحمض النووي تعليمات تستخدمها الخلايا.'],
    ['A gene is a segment of DNA; different versions are called alleles. In humans, chromosomes are organized in pairs in most body cells.','Un gène est une portion d’ADN ; ses différentes versions sont des allèles. Dans la plupart des cellules humaines, les chromosomes sont organisés par paires.','الجين جزء من الحمض النووي، وتسمى نسخه المختلفة أليلات. وفي معظم خلايا الجسم البشرية تنتظم الكروموسومات في أزواج.'],
    ['Traits are often influenced by many genes and environment; a family pattern does not by itself diagnose disease.','De nombreux caractères dépendent de plusieurs gènes et de l’environnement ; un schéma familial ne suffit pas à diagnostiquer une maladie.','تتأثر صفات كثيرة بعدة جينات والبيئة؛ ولا يكفي نمط عائلي وحده لتشخيص مرض.']],
  ['skeletal','fa-bone',['Skeletal system','Système squelettique','الجهاز الهيكلي'],
    ['The skeleton supports the body, protects organs, provides attachment for muscles, and helps movement.','Le squelette soutient le corps, protège les organes, sert d’ancrage aux muscles et participe au mouvement.','يدعم الهيكل الجسم ويحمي الأعضاء ويوفر مواضع اتصال العضلات ويساعد على الحركة.'],
    ['Bones are living tissue that remodels. Bone marrow produces blood cells; joints connect bones and allow different ranges of motion.','L’os est un tissu vivant qui se renouvelle. La moelle osseuse produit des cellules sanguines ; les articulations relient les os et permettent les mouvements.','العظام أنسجة حية تتجدد. وينتج نخاع العظم خلايا الدم؛ وتصل المفاصل العظام وتسمح بمديات مختلفة من الحركة.'],
    ['Adequate nutrition, varied movement, and protective equipment support bone health. Suspected fractures need careful assessment.','Une alimentation adaptée, des activités variées et des protections favorisent la santé osseuse. Une fracture suspectée doit être évaluée avec prudence.','يدعم الغذاء المتوازن والحركة المتنوعة ومعدات الوقاية صحة العظام. ويجب تقييم الكسور المحتملة بحذر.']],
  ['urinary','fa-kidney',['Urinary system','Système urinaire','الجهاز البولي'],
    ['The kidneys filter blood, balance water and salts, and produce urine; the urinary tract carries urine out of the body.','Les reins filtrent le sang, équilibrent l’eau et les sels, et produisent l’urine ; les voies urinaires l’évacuent.','ترشح الكليتان الدم وتوازنان الماء والأملاح وتنتجان البول؛ وتنقله المسالك البولية إلى خارج الجسم.'],
    ['Each kidney contains many nephrons that filter and selectively reabsorb substances. The bladder stores urine until urination.','Chaque rein contient de nombreux néphrons qui filtrent et réabsorbent certaines substances. La vessie stocke l’urine avant la miction.','تحتوي كل كلية على نفرونات كثيرة ترشح المواد وتعيد امتصاص بعضها. وتخزن المثانة البول حتى التبول.'],
    ['Urine color varies with hydration, food, and medicines. Pain, blood, fever, or persistent urinary changes merit medical advice.','La couleur des urines varie selon l’hydratation, l’alimentation et les médicaments. Douleur, sang, fièvre ou changement persistant nécessitent un avis médical.','يتغير لون البول بحسب الترطيب والطعام والأدوية. ويستدعي الألم أو الدم أو الحمى أو التغير المستمر استشارة طبية.']],
  ['blood','fa-droplet',['Blood & its components','Le sang et ses composants','الدم ومكوناته'],
    ['Blood transports oxygen, nutrients, hormones, and waste products and contributes to defense and temperature regulation.','Le sang transporte oxygène, nutriments, hormones et déchets, et participe aux défenses et à la régulation thermique.','ينقل الدم الأكسجين والمغذيات والهرمونات والفضلات ويساهم في الدفاع وتنظيم الحرارة.'],
    ['Red cells carry oxygen using hemoglobin; white cells participate in immune responses; platelets help form clots. Plasma carries dissolved substances.','Les globules rouges transportent l’oxygène grâce à l’hémoglobine ; les globules blancs participent aux défenses ; les plaquettes contribuent aux caillots.','تحمل الكريات الحمراء الأكسجين بالهيموغلوبين؛ وتشارك البيضاء في المناعة؛ وتساعد الصفائح على التخثر. وتنقل البلازما المواد الذائبة.'],
    ['Persistent pressure is a simple first-aid measure for external bleeding, but heavy blood loss is an emergency.','Une pression continue est un geste simple contre un saignement externe, mais une hémorragie importante est une urgence.','الضغط المستمر إجراء إسعافي بسيط للنزف الخارجي، لكن فقدان الدم الشديد حالة طارئة.']],
  ['cells','fa-circle-nodes',['Cells & tissues','Cellules et tissus','الخلايا والأنسجة'],
    ['The cell is the basic structural and functional unit of living things. Cells specialize and work together in tissues.','La cellule est l’unité structurale et fonctionnelle de base du vivant. Les cellules se spécialisent et coopèrent dans les tissus.','الخلية هي الوحدة الأساسية لبنية الكائنات الحية ووظيفتها. وتتخصص الخلايا وتتعاون ضمن الأنسجة.'],
    ['The cell membrane controls exchange; the nucleus stores most DNA; mitochondria release usable energy from nutrients.','La membrane contrôle les échanges ; le noyau contient l’essentiel de l’ADN ; les mitochondries libèrent l’énergie utilisable des nutriments.','ينظم غشاء الخلية التبادل؛ وتحتوي النواة معظم الحمض النووي؛ وتحرر الميتوكوندريا الطاقة القابلة للاستخدام من المغذيات.'],
    ['Cells are microscopic but organized at many levels: cells, tissues, organs, and organ systems.','Les cellules sont microscopiques et organisées en plusieurs niveaux : cellules, tissus, organes et appareils.','الخلايا مجهرية لكنها تنتظم في مستويات: خلايا وأنسجة وأعضاء وأجهزة.']],
  ['endocrine','fa-syringe',['Endocrine system','Système endocrinien','جهاز الغدد الصماء'],
    ['The endocrine system uses hormones—chemical messengers carried in blood—to coordinate processes such as growth and metabolism.','Le système endocrinien utilise des hormones, messagers chimiques transportés par le sang, pour coordonner la croissance et le métabolisme.','يستخدم جهاز الغدد الصماء الهرمونات، وهي رسائل كيميائية ينقلها الدم، لتنسيق عمليات مثل النمو والاستقلاب.'],
    ['The pituitary, thyroid, adrenal glands, pancreas, and ovaries or testes release different hormones. Hormone effects can be slower and longer-lasting than nerve signals.','L’hypophyse, la thyroïde, les glandes surrénales, le pancréas et les ovaires ou testicules libèrent différentes hormones. Leurs effets peuvent être plus lents et durables que ceux des nerfs.','تفرز الغدة النخامية والدرقية والكظرية والبنكرياس والمبيضان أو الخصيتان هرمونات مختلفة. وقد تكون آثار الهرمونات أبطأ وأطول من الإشارات العصبية.'],
    ['The pancreas has both digestive and hormone-making roles; insulin helps regulate blood glucose. Symptoms should be interpreted by a qualified clinician.','Le pancréas a un rôle digestif et hormonal ; l’insuline participe à la régulation de la glycémie. Un professionnel interprète les symptômes.','للبنكرياس دور هضمي وهرموني؛ ويساعد الإنسولين على تنظيم سكر الدم. ويجب أن يفسر المختص الأعراض.']]
];

const quizLevelNames = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };

const quizTemplates = {
  easy: [
    {q:['What is the first priority in any emergency?','Quelle est la priorité initiale dans toute urgence ?','ما الأولوية الأولى في أي حالة طارئة؟'],c:['Ensure scene safety','Sécuriser les lieux','تأمين المكان'],o:[['Start moving quickly','Commencer à se déplacer vite','التحرك بسرعة'],['Ignore the scene','Ignorer les lieux','تجاهل المكان'],['Give food first','Donner à manger d’abord','إعطاء الطعام أولًا']]},
    {q:['What should you call for a life-threatening emergency?','Que faut-il appeler en cas d’urgence vitale ?','ماذا تتصل به في حالة تهدد الحياة؟'],c:['Local emergency services','Les services d’urgence locaux','خدمات الطوارئ المحلية'],o:[['A restaurant','Un restaurant','مطعم'],['A taxi','Un taxi','سيارة أجرة'],['A bank','Une banque','بنك']]},
    {q:['For severe external bleeding, what is the first action?','Pour une hémorragie externe importante, quelle est la première action ?','ما الإجراء الأول للنزيف الخارجي الشديد؟'],c:['Apply firm direct pressure','Appliquer une pression directe ferme','تطبيق ضغط مباشر وثابت'],o:[['Remove all dressings','Retirer tous les pansements','إزالة جميع الضمادات'],['Use heat','Utiliser la chaleur','استخدام الحرارة'],['Give alcohol','Donner de l’alcool','إعطاء الكحول']]},
    {q:['During choking, if the adult cannot cough or breathe, you should:','Lors d’une obstruction chez un adulte qui ne peut ni tousser ni respirer :','عندما لا يستطيع بالغ المصاب السعال أو التنفس، يجب:'],c:['Give back blows and abdominal thrusts','Donner des claques dans le dos et des compressions abdominales','القيام بضربات ظهر ودفع بطني'],o:[['Offer a drink','Proposer une boisson','تقديم شراب'],['Lie on the floor','Le faire allonger','وضعه على الأرض'],['Wait only','Attendre seulement','الانتظار فقط']]},
    {q:['For a nosebleed, the person should usually:','Pour un saignement de nez, la personne doit généralement :','في نزيف الأنف، يجب عادة أن:'],c:['Lean forward and pinch the soft nose','Pencher la tête en avant et pincer le nez','يميل للأمام ويضغط جزؤه الرخو'],o:[['Lean the head back','Pencher la tête en arrière','يميل الرأس للخلف'],['Lie flat','S’allonger à plat','يستلقي بشكل مسطح'],['Pack the nose tightly','Boucher fortement le nez','يسد الأنف بإحكام']]},
    {q:['What is the normal first response to a burn from hot liquid?','Quelle est la première réponse à une brûlure par liquide chaud ?','ما الرد الأول لحرق سائل ساخن؟'],c:['Cool with running clean water','Refroidir avec de l’eau propre','تبريد بالماء النظيف الجاري'],o:[['Apply ice directly','Appliquer directement la glace','وضع الثلج مباشرة'],['Use butter','Utiliser du beurre','استخدام الزبدة'],['Break blisters','Percer les cloques','فتح البثور']]},
    {q:['A person with no normal breathing needs:','Une personne qui ne respire pas normalement nécessite :','الشخص الذي لا يتنفس بشكل طبيعي يحتاج إلى:'],c:['Immediate emergency help and CPR','Une aide urgente immédiate et une RCP','مساعدة طارئة فورية وإنعاش قلبي رئوي'],o:[['A snack','Une collation','وجبة خفيفة'],['Walking alone','Marcher seul','المشي وحده'],['A cold shower','Une douche froide','دوشة باردة']]},
    {q:['A suspected spinal injury requires:','Une blessure rachidienne suspectée exige :','تستلزم إصابة العمود الفقري المشتبه بها:'],c:['Keeping the person still','Maintenir la personne immobile','إبقاء المصاب ساكنًا'],o:[['Helping them walk','Les aider à marcher','مساعدته على المشي'],['Moving the neck','Bouger le cou','تحريك الرقبة'],['Removing clothing quickly','Retirer vite les vêtements','خلع الملابس بسرعة']]},
    {q:['An AED is used for:','Un DAE est utilisé pour :','يُستخدم مزيل الرجفان ل:'],c:['Cardiac arrest rhythms','Les rythmes d’arrêt cardiaque','إيقاعات توقف القلب'],o:[['Minor cuts','Les petites coupures','الجروح البسيطة'],['Nosebleeds','Les saignements de nez','نزيف الأنف'],['Heat cramps','Les crampes de chaleur','تشنجات الحرارة']]},
    {q:['During a seizure, you should:','Pendant une crise convulsive, vous devez :','أثناء النوبة التشنجية يجب:'],c:['Protect from nearby hazards','Protéger des dangers proches','الحماية من الأخطار القريبة'],o:[['Hold the person down','Maintenir la personne au sol','تقييد المصاب بقوة'],['Put objects in the mouth','Mettre un objet dans la bouche','وضع شيء في فمه'],['Give water immediately','Donner de l’eau immédiatement','إعطاء ماء فورًا']]},
    {q:['What sign can indicate heatstroke?','Quel signe peut indiquer un coup de chaleur ?','أي علامة قد تدل على ضربة الشمس؟'],c:['Confusion or collapse','Confusion ou évanouissement','الارتباك أو الانهيار'],o:[['Cold fingertips only','Froid aux doigts seulement','برودة أطراف الأصابع فقط'],['Normal alertness','État alerte normal','يقظة طبيعية'],['Clear speech','Discours clair','كلام واضح']]},
    {q:['For frostbite, initially you should:','Pour une gelure, vous devez initialement :','لقضمة الصقيع، يجب بدايةً:'],c:['Protect and warm the area gently','Protéger et réchauffer doucement','حماية المنطقة وإدفائها بلطف'],o:[['Rub it hard','La frotter fortement','فركها بقوة'],['Use direct fire heat','Utiliser une chaleur directe','استخدام نار مباشرة'],['Walk on frozen feet','Marcher sur des pieds gelés','المشي على قدم متجمدة']]},
    {q:['A chemical splash in the eye requires:','Une projection chimique dans l’œil exige :','تناثر مادة كيميائية بالعين يتطلب:'],c:['Immediate continuous rinsing','Un rinçage immédiat continu','الشطف الفوري المستمر'],o:[['Rubbing the eye','Frotter l’œil','فرك العين'],['Closing it tightly','Fermer fortement l’œil','إغلاقها بإحكام'],['Waiting for pain to stop','Attendre la fin de la douleur','انتظار توقف الألم']]},
    {q:['After an animal bite, you should:','Après une morsure animale, vous devez :','بعد عضة الحيوان يجب:'],c:['Wash and seek medical advice','Laver et demander conseil médical','غسلها وطلب المشورة الطبية'],o:[['Close the wound tightly','Fermer fortement la plaie','إغلاق الجرح بإحكام'],['Apply irritants','Appliquer des irritants','وضع مواد مهيجة'],['Ignore small punctures','Ignorer les petites piqûres','تجاهل الثقوب الصغيرة']]},
    {q:['An asthma attack may improve when:','Une crise d’asthme peut s’améliorer quand :','قد تتحسن نوبة الربو عند:'],c:['The prescribed reliever is used','Le médicament prescrits est utilisé','استخدام بخاخ النجدة الموصوف'],o:[['The person runs','La personne court','يجري المصاب'],['Smoke is introduced','On introduit de la fumée','تعريضه للدخان'],['They hold their breath','Ils retient leur souffle','حبس النفس']]},
    {q:['For fainting, help the person:','En cas d’évanouissement, aidez la personne à :','في الإغماء ساعد المصاب على:'],c:['Lie flat and raise the legs','S’allonger et lever les jambes','الاستلقاء ورفع الساقين'],o:[['Stand immediately','Se lever immédiatement','الوقوف فورًا'],['Sit upright with head down','S’asseoir la tête baissée','الجلوس برأس منخفض'],['Run in fresh air','Courir au grand air','الجري في الهواء الطلق']]},
    {q:['Swallowed poison requires:','L’ingestion de poison exige :','ابتلاع السم يتطلب:'],c:['Urgent poison or emergency guidance','Les conseils urgents des urgences ou du centre antipoison','إرشاد عاجل من الطوارئ أو مركز السموم'],o:[['Induced vomiting','Vomir volontairement','حث القيء'],['A large meal','Un grand repas','وجبة كبيرة'],['Coffee','Du café','القهوة']]},
    {q:['A minor cut should be:','Une petite coupure doit être :','يجب على الجرح البسيط أن:'],c:['Cleaned and covered','Nettoyée et recouverte','تنظيفه وتغطيته'],o:[['Left with dirt','Laissée sale','تركه متسخًا'],['Packed with food','Remplie de nourriture','ملؤه بالطعام'],['Heated','Chauffée','تسخينه']]},
    {q:['A suspected fracture should be:','Une fracture suspectée doit être :','يجب تثبيت كسر مشتبه فيه:'],c:['Supported and not moved unnecessarily','Soutenue et peu mobilisée','دعمها من غير تحريك زائد'],o:[['Forced straight','Redressée de force','إعادته بالقوة'],['Used normally','Utilisée normalement','استخدامه طبيعيًا'],['Walked on immediately','Marché dessus immédiatement','المشي عليه فورًا']]},
    {q:['The recovery position is for:','La position latérale de sécurité concerne :','الوضع الجانبي المخصص لـ:'],c:['An unconscious breathing person','Une personne inconsciente mais respirante','شخص فاقد الوعي ويتنفس'],o:[['A standing person','Une personne debout','شخص واقف'],['A person eating','Une personne qui mange','شخص يتناول الطعام'],['A conscious runner','Un coureur conscient','عداء واعٍ']]}
  ],
  medium: [
    {q:['An adult is choking and becoming cyanotic. The best action is:','Un adulte s’étouffe et devient cyanosé. La meilleure action est :','بالغ يختنق ويظهر ازرقاق. الإجراء الأفضل:'],c:['Activate emergency care and continue cycles of back blows and abdominal thrusts','Activer les secours et poursuivre les claques dans le dos et compressions abdominales','طلب الطوارئ ومواصلة الضربات والدفع البطني'],o:[['Give bread','Donner du pain','إعطاء خبز'],['Ask them to run','Les faire courir','مطالبة بالجري'],['Place a finger in the throat','Mettre un doigt dans la gorge','وضع إصبع في الحلق']]},
    {q:['A person has severe chest pain and becomes unresponsive, not normally breathing. You should:','Une personne a une douleur thoracique sévère puis devient inconsciente et respire anormalement. Vous devez :','شخص يعاني ألم صدري شديد ثم يفقد الوعي ولا يتنفس بشكل طبيعي. يجب:'],c:['Call emergency services, start CPR, and use an AED','Appeler les secours, débuter la RCP et utiliser un DAE','الاتصال بالطوارئ والبدء بالإنعاش واستخدام مزيل الرجفان'],o:[['Wait for pain to pass','Attendre la fin de la douleur','انتظار زوال الألم'],['Give a heavy meal','Donner un repas lourd','إعطاء وجبة دسمة'],['Transport while alone','Transporter seul','النقل بمفردك']]},
    {q:['A large burn has blistering and involves the face. The priority is:','Une brûlure étendue se vésique et atteint le visage. La priorité est :','حرق واسع ذو بثور ويشمل الوجه. الأولوية:'],c:['Cool safely, protect the area, and obtain urgent medical care','Refroidir, protéger la zone et obtenir des soins urgents','التبريد الآمن والحماية وطلب الرعاية العاجلة'],o:[['Use butter','Utiliser du beurre','استخدام الزبدة'],['Pop every blister','Percer toutes les cloques','فقع كل البثور'],['Apply strong adhesive','Appliquer un adhésif puissant','تغطية بلاصق قوي']]},
    {q:['If an embedded object is in the wound, you should:','Si un objet reste planté dans une plaie, vous devez :','إذا كان جسم مغروس في الجرح، يجب:'],c:['Control pressure around it and leave it in place','Comprimer autour et le laisser en place','الضغط حوله وتركه مكانه'],o:[['Pull it out quickly','Le retirer rapidement','سحبه سريعًا'],['Push it deeper','Le pousser plus profondément','دفعه بعمق'],['Ignore the bleeding','Ignorer le saignement','تجاهل النزيف']]},
    {q:['A severe allergic reaction with breathing difficulty requires:','Une réaction allergique sévère avec difficulté respiratoire exige :','التفاعل التحسسي الشديد مع صعوبة التنفس يتطلب:'],c:['Immediate emergency care and prescribed epinephrine','Des secours immédiats et l’épinéphrine prescrite','رعاية طارئة فورية وأدرينالين موصوف'],o:[['Only antihistamine','Seulement un antihistaminique','مضاد الهيستامين فقط'],['Force walking','Obliger à marcher','إجبار المصاب على المشي'],['Give a heavy drink','Donner beaucoup à boire','إعطاء مشروب كثير']]},
    {q:['A suspected stroke patient shows facial droop and speech difficulty. You should:','Une personne suspectée d’AVC présente un visage dévié et trouble de la parole. Vous devez :','مصاب مشتبه بسكتة يعاني تدلي وجه وصعوبة كلام. يجب:'],c:['Note the onset time and call emergency services','Noter l’heure de début et appeler les secours','تسجيل وقت البداية واتصال الطوارئ'],o:[['Give aspirin without advice','Donner de l’aspirine sans avis','إعطاء آسبرين بلا مشورة'],['Offer food','Offrir de la nourriture','تقديم الطعام'],['Wait overnight','Attendre toute la nuit','الانتظار طول الليل']]},
    {q:['A drowning victim is breathing after rescue. You should:','Une personne noyée respire après le sauvetage. Vous devez :','ضحية غرق تتنفس بعد الإنقاذ. يجب:'],c:['Place in a safe position, keep warm, and get medical assessment','La mettre en sécurité, la réchauffer et obtenir une évaluation','الوضع بأمان والإدفاء والتقييم الطبي'],o:[['Make them jump','La faire sauter','إجباره على القفز'],['Remove all wet clothing by dragging','Retirer vite les vêtements mouillés en la traînant','خلع الملابس المبللة بالسحب'],['Leave them alone','Le laisser seul','تركه وحده']]},
    {q:['Possible carbon monoxide exposure is suspected indoors. First:','Une exposition au monoxyde de carbone est possible à l’intérieur. D’abord :','يشتبه بتعرض لأول أكسيد الكربون داخل المنزل. أولًا:'],c:['Move everyone to fresh air and call emergency help','Évacuer vers l’air frais et appeler les secours','إخراج الجميع للهواء الطلق واتصال الطوارئ'],o:[['Search room by room','Chercher pièce par pièce','البحث غرفة بغرفة'],['Turn on flames','Allumer des flammes','تشغيل النار'],['Seal every window','Sceller toutes les fenêtres','إغلاق النوافذ']]} ,
    {q:['A person has a tonic-clonic seizure for more than 5 minutes. You should:','Une crise tonico-clonique dure plus de 5 minutes. Vous devez :','نوبة تشنجية تستمر أكثر من 5 دقائق. يجب:'],c:['Call emergency services and protect the person','Appeler les secours et protéger la personne','الاتصال بالطوارئ وحماية المصاب'],o:[['Restrain them','Les maintenir','تقييد الحركة'],['Put something in the mouth','Mettre quelque chose dans la bouche','وضع شيء بالفم'],['Let them walk','Les laisser marcher','السماح له بالمشي']]},
    {q:['After a chemical eye splash, the critical action is:','Après une projection chimique dans l’œil, l’action critique est :','بعد تناثر مادة كيميائية في العين، الإجراء الحاسم:'],c:['Continuous irrigation for at least 20 minutes','Irrigation continue pendant au moins 20 minutes','الشطف المستمر لمدة 20 دقيقة على الأقل'],o:[['Use concentrated neutralizer','Utiliser un neutralisant concentré','استخدام موازن مركّز'],['Patch tightly','Pansé fortement','تغطية العين بإحكام'],['Wait for packaging','Attendre l’emballage','انتظار العبوة']]},
    {q:['A frostbitten foot should not be:','Un pied gelé ne doit pas être :','القدم المصابة بقضمة الصقيع لا يجب أن:'],c:['Rubbed or exposed to direct heat','Frotté ou exposé à une chaleur directe','فركها أو تعريضها لحرارة مباشرة'],o:[['Protected from pressure','Protégé de la pression','حمايتها من الضغط'],['Kept dry','Gardé au sec','إبقاؤها جافة'],['Assessed medically','Évaluée médicalement','تقييمها طبيًا']]},
    {q:['An unknown poisoning patient remains conscious. First you should:','Une personne empoisonnée reste consciente. Vous devez d’abord :','مصاب بتسمم مجهول ما زال واعيًا. أولًا:'],c:['Keep them safe and contact poison/emergency professionals','La garder en sécurité et contacter les professionnels','إبقاؤه آمنًا واتصال مختصي السموم والطوارئ'],o:[['Induce vomiting','Provoquer des vomissements','حث القيء'],['Mix a remedy','Préparer un remède improvisé','خلط علاج منزلي'],['Give unknown antidotes','Donner des antidotes inconnus','إعطاء ترياق مجهول']]}
  ],
  hard: [
    {q:['In suspected crush syndrome, the responder must anticipate:','Dans un syndrome d’écrasement suspecté, le secouriste doit anticiper :','في اشتباه متلازمة السحق يجب توقع:'],c:['Complex shock, kidney injury, and immediate specialist care','Choc complexe, atteinte rénale et soins spécialisés immédiats','صدمة معقدة وإصابة كلوية ورعاية تخصصية فورية'],o:[['Only a minor bruise','Seulement une ecchymose mineure','رض بسيط فقط'],['No need for observation','Aucune surveillance nécessaire','لا حاجة للمراقبة'],['Immediate walking','La marche immédiate','المشي الفوري']]},
    {q:['During CPR, a victim vomits. The rescuer should:','Pendant la RCP, la victime vomit. Le sauveteur doit :','أثناء الإنعاش يتقيأ المصاب. المنقذ يجب أن:'],c:['Turn the head/airway if safe, clear the mouth, and resume CPR','Dévier la tête/voies aériennes si possible, nettoyer la bouche et reprendre la RCP','تحويل الرأس وتنظيف الفم واستئناف الإنعاش'],o:[['Stop all efforts','Arrêter tous les efforts','إيقاف كل الجهود'],['Force food away','Éloigner toute nourriture','دفع الطعام بعيدًا'],['Place a gag','Mettre un bâillon','وضع كابح للفم']]},
    {q:['A snakebite patient has severe pain and limb swelling. What should not be done?','Une morsure de serpent avec douleur intense et gonflement ne doit pas :','لدغة أفعى مع ألم وتورم لا يجب:'],c:['Do not cut, suck, ice, or apply a tourniquet','Ne pas inciser, aspirer, glacer ou poser un garrot','لا يقطع أو يمص أو يوضع ثلج أو عاصبة'],o:[['Keep calm','Garder calme','الهدوء'],['Remove rings','Retirer les bijoux','خلع الخواتم'],['Call emergency care','Appeler les secours','الاتصال بالطوارئ']]},
    {q:['A wet electrocution scene is unsafe until:','Une électrisation près d’eau reste dangereuse jusqu’à :','مشهد صعق مبلل يبقى خطيرًا حتى:'],c:['The power is isolated by trained personnel','Le courant est coupé par du personnel qualifié','عزل التيار من قبل مختصين'],o:[['A towel is placed','Une serviette est posée','وضع منشفة'],['The victim stands up','La victime se lève','وقوف المصاب'],['Lightning stops','La foudre cesse','توقف البرق']]},
    {q:['A pregnant person collapses. Prioritize:','Une personne enceinte s’effondre. Priorisez :','شخص حامل ينهار. الأولوية:'],c:['Emergency call, airway/breathing assessment, and left-side positioning when appropriate','Appel d’urgence, évaluation respiratoire et position latérale gauche adaptée','اتصال الطوارئ وتقييم التنفس ووضع جانبي أيسر مناسب'],o:[['Force oral fluids','Forcer les boissons','إجبارها على السوائل'],['Leave flat on the back if fainting','La laisser allongée sur le dos','تركها مستلقية على ظهرها دائمًا'],['Ask her to walk','La faire marcher','إجبارها على المشي']]},
    {q:['Sudden worst headache and stiff neck may indicate:','Une céphalée brutale maximale avec raideur peut indiquer :','صداع مفاجئ شديد مع تيبس الرقبة قد يشير إلى:'],c:['Intracranial emergency requiring urgent services','Urgence intracrânienne nécessitant les services d’urgence','طوارئ داخل الجمجمة تتطلب المساعدة الفورية'],o:[['Only dehydration','Simple déshydratation','الجفاف فقط'],['Safe to sleep','Endormir sans évaluation','النوم بأمان'],['A mild eye issue','Un simple trouble oculaire','مشكلة عين بسيطة']]},
    {q:['A head-injury patient is on blood thinners and briefly lost consciousness. You should:','Après traumatisme crânien et bref évanouissement sous anticoagulant, vous devez :','مصاب بإصابة رأس وفقد وعي لفترة ويستخدم سيولة الدم. يجب:'],c:['Arrange urgent emergency assessment despite apparent improvement','Organiser une évaluation urgente malgré une amélioration apparente','ترتيب تقييم طارئ رغم التحسن الظاهر'],o:[['Monitor only overnight','Surveiller seulement pendant la nuit','المراقبة الليلية فقط'],['No action if alert','Aucune action si vigilant','لا إجراء إن كان يقظًا'],['Let him exercise','Le faire exercer','إجباره على الرياضة']]},
    {q:['An open fracture is bleeding heavily. The first responder should:','Une fracture ouverte saigne abondamment. Le secouriste doit :','كسر مفتوح ينزف بشدة. المنقذ يجب:'],c:['Call emergency services, control bleeding around the wound, and immobilize','Appeler les urgences, contrôler le saignement autour et immobiliser','اتصال الطوارئ وضبط النزف حول الجرح والتثبيت'],o:[['Push bone ends back','Remettre les extrémités osseuses','إعادة عظمة للكسر'],['Clean deeply in the field','Nettoyer profondément sur place','تنظيف عميق ميداني'],['Have the person stand','Faire tenir debout','إجبار المصاب على الوقوف']]},
    {q:['A person with diabetes is confused and sweating. If safety permits and they can swallow:','Une personne diabétique est confuse et transpire. Si elle peut avaler :','شخص سكري مرتبك ويعرق. إذا كان قادرًا على البلع:'],c:['Give fast sugar according to care plans','Donner du sucre rapide selon le plan','إعطاؤه سكرا سريعا حسب الخطة'],o:[['Give insulin immediately','Injecter l’insuline immédiatement','إعطاء إنسولين فورًا'],['Give alcohol','Donner de l’alcool','إعطاء الكحول'],['Force solid food','Forcer les aliments solides','إجبار المصاب على أكل صلب']]},
    {q:['After exposure to hazardous gas, rescuers must:','Après une exposition à un gaz dangereux, les sauveteurs doivent :','بعد التعرض لغاز خطير يجب على المنقذين:'],c:['Avoid entering without training and call specialized rescue','Éviter d’entrer sans formation et appeler les secours spécialisés','عدم الدخول بلا تدريب وطلب الإنقاذ المتخصص'],o:[['Enter with a cloth','Entrer avec un chiffon','الدخول بقطعة قماش'],['Use an elevator','Utiliser l’ascenseur','استخدام المصعد'],['Search while carrying victims','Chercher en portant les victimes','البحث حاملا الضحايا']]},
    {q:['A chest impaled object has not been stabilized. The responder should:','Un objet est planté dans le thorax mais n’est pas stabilisé. Le secouriste doit :','جسم نافذ في الصدر غير مثبت. المنقذ يجب:'],c:['Stabilize bulky dressing and call emergency care','Stabiliser avec un pansement volumineux et appeler les secours','تثبيت بضمدات كبيرة واتصال الطوارئ'],o:[['Remove the object','Retirer l’objet','سحب الجسم'],['Pack around it tightly','Comprimer fortement autour','ضغطه بإحكام'],['Ask the victim to lie flat and walk','Le faire marcher','إجبار المصاب على المشي']]},
    {q:['Multiple stings in a person with wheezing require:','Des piqûres multiples avec respiration sifflante exigent :','لسعات متعددة مع أزيز تنفس تتطلب:'],c:['Urgent emergency care and epinephrine if prescribed','Secours urgents et épinéphrine si prescrite','رعاية طارئة وأدرينالين إن كان موصوفًا'],o:[['Scraping all day','Gratter toute la journée','الحك طوال اليوم'],['Using hydrogen peroxide','Utiliser du peroxyde','استخدام بيروكسيد'],['Waiting for itching to resolve','Attendre la fin des démangeaisons','انتظار زوال الحكة']]}
  ]
};

function buildQuizBank(level) {
  const templates = quizTemplates[level];
  const bank = [];
  for (let index = 0; index < 1000; index++) {
    const template = templates[index % templates.length];
    const variant = Math.floor(index / templates.length) + 1;
    const options = [
      template.c,
      template.o[0],
      template.o[1],
      template.o[2]
    ];
    const seed = (index + 1) * 17 + variant * 31;
    for (let position = options.length - 1; position > 0; position--) {
      const swap = (seed * (position + 3) + position * 11) % (position + 1);
      [options[position], options[swap]] = [options[swap], options[position]];
    }
    bank.push({
      id: `${level}-${index + 1}`,
      question: template.q.map(text => `${text}${variant > 1 ? ` · ${variant}` : ''}`),
      options,
      correct: options.findIndex(option => option === template.c),
      explanation: template.c
    });
  }
  return bank;
}

const quizBank = {
  easy: buildQuizBank('easy'),
  medium: buildQuizBank('medium'),
  hard: buildQuizBank('hard')
};

const learnModuleCategory = { blood: 'heart', cells: 'genetics' };
const categoryKey = { trauma: 'catTrauma', breathing: 'catBreathing', cardiac: 'catCardiac', environmental: 'catEnvironmental', bites: 'catBites', poisoning: 'catPoisoning', eye: 'catEye' };

let storedLanguage = 'en';
try { storedLanguage = localStorage.getItem('doctore-language') || 'en'; }
catch (error) { console.warn('Could not read language preference:', error); }

const app = {
  lang: storedLanguage,
  view: 'dashboard',
  aidCategory: 'all',
  aidQuery: '',
  learnCategory: 'all',
  quizLevel: null,
  quizRound: [],
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  notes: [],
  activeNoteId: null,
  saveTimer: null,
  toastTimer: null
};
if (!LANGS.includes(app.lang)) app.lang = 'en';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const tr = key => (ui[app.lang] && ui[app.lang][key]) || ui.en[key] || key;
const localized = values => values[localeIndex[app.lang]];
const crumbKeys = { dashboard: 'crumbDashboard', firstaid: 'crumbAid', learn: 'crumbLearn', quiz: 'crumbQuiz', notebook: 'crumbNotebook' };
const currentCrumb = view => tr(crumbKeys[view] || 'overview');
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(app.toastTimer);
  app.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function setLanguage(lang) {
  if (!LANGS.includes(lang) || lang === app.lang) return;
  app.lang = lang;
  try { localStorage.setItem('doctore-language', lang); }
  catch (error) { showToast(tr('toastStorageError')); console.warn('Could not save language preference:', error); }
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-lang]').forEach(button => button.classList.toggle('active', button.dataset.lang === lang));
  $$('[data-i18n]').forEach(node => {
    const key = node.dataset.i18n;
    if (ui[lang][key]) node.innerHTML = ui[lang][key];
  });
  $$('[data-i18n-placeholder]').forEach(node => {
    const key = node.dataset.i18nPlaceholder;
    if (ui[lang][key]) node.placeholder = ui[lang][key];
  });
  $$('[data-i18n-aria]').forEach(node => {
    const key = node.dataset.i18nAria;
    if (ui[lang][key]) node.setAttribute('aria-label', ui[lang][key]);
  });
  document.title = lang === 'ar' ? 'دوكتور سهيلة — الدراسة والإسعافات الأولية' : lang === 'fr' ? 'Doctore Souhaila — Études et premiers secours' : 'Doctore Souhaila — Study & First Aid';
  $('#mobileMenu').setAttribute('aria-label', lang === 'ar' ? 'فتح القائمة' : lang === 'fr' ? 'Ouvrir la navigation' : 'Open navigation');
  $('#modalClose').setAttribute('aria-label', tr('close'));
  $('#deleteNote').setAttribute('aria-label', tr('deleteNote'));
  $('#deleteNote').title = tr('deleteNote');
  $('#aidSearch').value = app.aidQuery;
  $('#currentCrumb').textContent = currentCrumb(app.view);
  renderAidFilters();
  renderAid();
  renderLearnFilters();
  renderLearning();
  renderNotes();
  if ($('#modalBackdrop').classList.contains('open')) {
    const openAid = $('#modalContent').dataset.aidId;
    const openLearn = $('#modalContent').dataset.learnId;
    if (openAid) openAidModal(openAid);
    if (openLearn) openLearnModal(openLearn);
  }
}

function navigate(view) {
  if (!['dashboard', 'firstaid', 'learn', 'quiz', 'notebook'].includes(view) || view === app.view) return;
  const oldView = $(`[data-view-panel="${app.view}"]`);
  const nextView = $(`[data-view-panel="${view}"]`);
  if (!nextView) return;
  oldView.classList.remove('active');
  oldView.classList.add('leaving');
  nextView.classList.add('active');
  app.view = view;
  $('#currentCrumb').textContent = currentCrumb(view);
  $$('.nav-link').forEach(button => button.classList.toggle('active', button.dataset.view === view));
  closeMobileNav();
  setTimeout(() => oldView.classList.remove('leaving'), 320);
  if (view === 'notebook') {
    renderNotes();
    if (!app.activeNoteId && app.notes.length) selectNote(app.notes[0].id);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderFilters(container, categories, active, onClick) {
  container.replaceChildren();
  categories.forEach(category => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `filter-chip${active === category.id ? ' active' : ''}`;
    button.textContent = tr(category.label);
    button.dataset.category = category.id;
    button.addEventListener('click', () => onClick(category.id));
    container.append(button);
  });
}

function renderAidFilters() {
  renderFilters($('#aidFilters'), aidCategories, app.aidCategory, category => {
    app.aidCategory = category;
    renderAidFilters();
    renderAid();
  });
}

function renderAid() {
  const grid = $('#aidGrid');
  grid.replaceChildren();
  const query = normalize(app.aidQuery.trim());
  const entries = aidItems.filter(([id, titles, category, pattern]) => {
    if (app.aidCategory !== 'all' && category !== app.aidCategory) return false;
    const text = normalize(`${id} ${titles.join(' ')} ${localized(guidance[app.lang][pattern].summary)}`);
    return !query || text.includes(query);
  });
  entries.forEach(([id, titles, category, pattern, icon]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'aid-card';
    button.setAttribute('aria-label', `${localized(titles)} — ${tr('categoryLabel')}: ${tr(categoryKey[category])}`);
    button.innerHTML = `<span class="aid-icon"><i class="fa-solid ${icon}"></i></span><span class="aid-card-copy"><strong>${escapeHTML(localized(titles))}</strong><span>${escapeHTML(localized(guidance[app.lang][pattern].summary))}</span></span><i class="fa-solid fa-chevron-right card-chevron"></i>`;
    button.addEventListener('click', () => openAidModal(id));
    grid.append(button);
  });
  $('#aidResultCount').textContent = `${entries.length} ${tr('topics')}`;
  $('#aidEmpty').classList.toggle('hidden', entries.length !== 0);
}

function openAidModal(id) {
  const item = aidItems.find(entry => entry[0] === id);
  if (!item) return;
  const [, titles, category, pattern] = item;
  const guide = guidance[app.lang][pattern];
  $('#modalContent').dataset.aidId = id;
  delete $('#modalContent').dataset.learnId;
  $('#modalContent').innerHTML = `
    <div class="modal-kicker">${escapeHTML(tr(categoryKey[category]))} · ${escapeHTML(tr('categoryLabel'))}</div>
    <h2 id="modalTitle">${escapeHTML(localized(titles))}</h2>
    <p class="modal-summary">${escapeHTML(guide.summary)}</p>
    <div class="emergency-reminder"><i class="fa-solid fa-triangle-exclamation"></i><span>${escapeHTML(tr('emergencyReminder'))}</span></div>
    <div class="guidance-block"><h3><i class="fa-solid fa-circle-info"></i>${escapeHTML(tr('symptomTitle'))}</h3><p class="symptom-summary">${escapeHTML(guide.summary)}</p></div>
    <div class="guidance-block"><h3><i class="fa-solid fa-circle-check"></i>${escapeHTML(tr('doTitle'))}</h3><ol class="step-list">${guide.steps.map(step => `<li>${escapeHTML(step)}</li>`).join('')}</ol></div>
    <div class="guidance-block"><h3><i class="fa-solid fa-shield"></i>${escapeHTML(tr('additionalDoTitle'))}</h3><ul class="step-list">${guide.dos.map(step => `<li>${escapeHTML(step)}</li>`).join('')}</ul></div>
    <div class="guidance-block donts"><h3><i class="fa-solid fa-circle-xmark"></i>${escapeHTML(tr('dontTitle'))}</h3><ul class="step-list dont-list">${guide.donts.map(step => `<li>${escapeHTML(step)}</li>`).join('')}</ul></div>`;
  $('#modalBackdrop').classList.add('open');
  $('#modalBackdrop').setAttribute('aria-hidden', 'false');
  $('#modalClose').focus();
}

function renderLearnFilters() {
  renderFilters($('#learnFilters'), learnCategories, app.learnCategory, category => {
    app.learnCategory = category;
    renderLearnFilters();
    renderLearning();
  });
}

function renderLearning() {
  const grid = $('#learnGrid');
  grid.replaceChildren();
  const modules = learningModules.filter(([id]) => app.learnCategory === 'all' || (learnModuleCategory[id] || id) === app.learnCategory);
  modules.forEach(([id, icon, titles, fn]) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'learn-card';
    card.setAttribute('aria-label', localized(titles));
    card.innerHTML = `<span class="learn-icon"><i class="fa-solid ${icon}"></i></span><span class="learn-tag">${escapeHTML(tr(categoryKey[learnModuleCategory[id] || id] || `cat${(learnModuleCategory[id] || id)[0].toUpperCase()}${(learnModuleCategory[id] || id).slice(1)}`))}</span><h3>${escapeHTML(localized(titles))}</h3><p>${escapeHTML(localized(fn))}</p><span class="learn-more">${escapeHTML(tr('readGuide'))}<i class="fa-solid fa-arrow-right"></i></span>`;
    card.addEventListener('click', () => openLearnModal(id));
    grid.append(card);
  });
}

function openLearnModal(id) {
  const module = learningModules.find(entry => entry[0] === id);
  if (!module) return;
  const [, , titles, fn, facts, tip] = module;
  const catId = learnModuleCategory[id] || id;
  const catLabel = learnCategories.find(cat => cat.id === catId);
  $('#modalContent').dataset.learnId = id;
  delete $('#modalContent').dataset.aidId;
  $('#modalContent').innerHTML = `
    <div class="modal-kicker">${escapeHTML(catLabel ? tr(catLabel.label) : tr('learning'))}</div>
    <h2 id="modalTitle">${escapeHTML(localized(titles))}</h2>
    <p class="modal-summary">${escapeHTML(localized(fn))}</p>
    <div class="learn-modal-facts">
      <article class="learn-fact"><strong>${escapeHTML(tr('functionLabel'))}</strong><p>${escapeHTML(localized(fn))}</p></article>
      <article class="learn-fact"><strong>${escapeHTML(tr('keyFacts'))}</strong><p>${escapeHTML(localized(facts))}</p></article>
      <article class="learn-fact"><strong>${escapeHTML(tr('clinicalTip'))}</strong><p>${escapeHTML(localized(tip))}</p></article>
    </div>`;
  $('#modalBackdrop').classList.add('open');
  $('#modalBackdrop').setAttribute('aria-hidden', 'false');
  $('#modalClose').focus();
}

function closeModal() {
  $('#modalBackdrop').classList.remove('open');
  $('#modalBackdrop').setAttribute('aria-hidden', 'true');
}

function shuffleItems(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function showQuizLevelScreen() {
  $('#quizLevelScreen').classList.remove('hidden');
  $('#quizGame').classList.add('hidden');
  $('#quizResults').classList.add('hidden');
  app.quizRound = [];
  app.quizIndex = 0;
  app.quizScore = 0;
  app.quizAnswered = false;
}

function startQuizRound(level) {
  if (!quizBank[level]) return;
  app.quizLevel = level;
  app.quizRound = shuffleItems(quizBank[level]).slice(0, 20);
  app.quizIndex = 0;
  app.quizScore = 0;
  app.quizAnswered = false;
  $('#quizLevelScreen').classList.add('hidden');
  $('#quizResults').classList.add('hidden');
  $('#quizGame').classList.remove('hidden');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const question = app.quizRound[app.quizIndex];
  if (!question) {
    showQuizResults();
    return;
  }
  app.quizAnswered = false;
  $('#quizProgressText').textContent = `${app.quizIndex + 1} / 20`;
  $('#quizProgressBar').style.width = `${((app.quizIndex + 1) / 20) * 100}%`;
  $('#quizScoreText').textContent = `${app.quizScore} ${tr('correctCount')}`;
  $('#quizQuestionLevel').textContent = tr(`${app.quizLevel}Level`);
  $('#quizQuestionText').textContent = localized(question.question);
  $('#quizExplanation').classList.add('hidden');
  $('#quizExplanation').textContent = '';
  $('#quizNext').classList.add('hidden');
  $('#quizOptions').replaceChildren();
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.textContent = localized(option);
    button.addEventListener('click', () => answerQuiz(index));
    $('#quizOptions').append(button);
  });
}

function answerQuiz(selectedIndex) {
  if (app.quizAnswered) return;
  app.quizAnswered = true;
  const question = app.quizRound[app.quizIndex];
  const isCorrect = selectedIndex === question.correct;
  if (isCorrect) app.quizScore++;
  $$('#quizOptions .quiz-option').forEach((button, index) => {
    button.disabled = true;
    if (index === question.correct) button.classList.add('correct');
    if (index === selectedIndex && !isCorrect) button.classList.add('incorrect');
  });
  $('#quizScoreText').textContent = `${app.quizScore} ${tr('correctCount')}`;
  $('#quizExplanation').classList.remove('hidden');
  $('#quizExplanation').innerHTML = `<strong>${isCorrect ? tr('correctAnswer') : tr('incorrectAnswer')}</strong><span>${escapeHTML(localized(question.explanation))}</span>`;
  $('#quizNext').classList.remove('hidden');
  $('#quizNext').querySelector('span').textContent = app.quizIndex === 19 ? tr('roundComplete') : tr('nextQuestion');
}

function showQuizResults() {
  $('#quizGame').classList.add('hidden');
  $('#quizResults').classList.remove('hidden');
  $('#quizFinalScore').textContent = `${app.quizScore}/20`;
  const message = app.quizScore >= 17 ? tr('excellentResult') : app.quizScore >= 11 ? tr('goodResult') : tr('practiceResult');
  $('#quizResultMessage').textContent = message;
}

function loadNotes() {
  try {
    const raw = localStorage.getItem('doctore-souhaila-notes');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) throw new TypeError('Saved notes must be a list.');
    return parsed.filter(note => note && typeof note.id === 'string' && typeof note.title === 'string' && typeof note.body === 'string');
  } catch (error) {
    console.error('Could not load saved notes:', error);
    showToast(tr('toastStorageError'));
    return [];
  }
}

function persistNotes() {
  const saveState = $('#saveState');
  saveState.classList.add('saving');
  const label = $('span', saveState);
  if (label) label.textContent = tr('saving');
  try {
    localStorage.setItem('doctore-souhaila-notes', JSON.stringify(app.notes));
    setTimeout(() => {
      saveState.classList.remove('saving');
      if (label) label.textContent = tr('saved');
    }, 350);
  } catch (error) {
    saveState.classList.remove('saving');
    console.error('Could not save notes:', error);
    showToast(tr('toastStorageError'));
  }
}

function queueSave() {
  const current = app.notes.find(note => note.id === app.activeNoteId);
  if (!current) return;
  current.title = $('#noteTitle').value;
  current.body = $('#noteBody').value;
  current.updated = Date.now();
  $('#paperDate').textContent = new Intl.DateTimeFormat(app.lang === 'ar' ? 'ar' : app.lang === 'fr' ? 'fr-FR' : 'en', { dateStyle: 'long' }).format(new Date(current.updated));
  renderNotesList();
  updateWordCount();
  clearTimeout(app.saveTimer);
  app.saveTimer = setTimeout(persistNotes, 280);
}

function createNote() {
  const note = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, title: '', body: '', updated: Date.now() };
  app.notes.unshift(note);
  app.activeNoteId = note.id;
  renderNotes();
  $('#noteTitle').focus();
  showToast(tr('toastCreated'));
  persistNotes();
}

function selectNote(id) {
  const note = app.notes.find(item => item.id === id);
  if (!note) return;
  app.activeNoteId = id;
  $('#noteTitle').value = note.title;
  $('#noteBody').value = note.body;
  $('#paperDate').textContent = new Intl.DateTimeFormat(app.lang === 'ar' ? 'ar' : app.lang === 'fr' ? 'fr-FR' : 'en', { dateStyle: 'long' }).format(new Date(note.updated || Date.now()));
  $('#deleteNote').disabled = false;
  renderNotesList();
  updateWordCount();
}

function renderNotesList() {
  const list = $('#noteList');
  list.replaceChildren();
  if (!app.notes.length) {
    const empty = document.createElement('div');
    empty.className = 'note-list-empty';
    empty.textContent = tr('emptyNotes');
    list.append(empty);
    return;
  }
  app.notes.forEach(note => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `note-list-item${note.id === app.activeNoteId ? ' active' : ''}`;
    button.innerHTML = '<i class="fa-regular fa-file-lines"></i>';
    const title = document.createElement('span');
    title.textContent = note.title.trim() || tr('noteUntitled');
    button.append(title);
    button.addEventListener('click', () => selectNote(note.id));
    list.append(button);
  });
}

function renderNotes() {
  const count = app.notes.length;
  $('#noteCount').textContent = count;
  $('#notebookNoteCount').textContent = `${count} ${tr('savedNotes')}`;
  if (app.activeNoteId && !app.notes.some(note => note.id === app.activeNoteId)) app.activeNoteId = null;
  renderNotesList();
  if (app.activeNoteId) selectNote(app.activeNoteId);
  else {
    $('#noteTitle').value = '';
    $('#noteBody').value = '';
    $('#paperDate').textContent = '';
    $('#deleteNote').disabled = true;
    updateWordCount();
  }
}

function updateWordCount() {
  const words = $('#noteBody').value.trim().split(/\s+/).filter(Boolean).length;
  $('#wordCount').innerHTML = `${words} <span>${escapeHTML(tr('words'))}</span>`;
}

function deleteActiveNote() {
  if (!app.activeNoteId) return;
  if (!window.confirm(tr('deleteConfirm'))) return;
  app.notes = app.notes.filter(note => note.id !== app.activeNoteId);
  app.activeNoteId = app.notes.length ? app.notes[0].id : null;
  renderNotes();
  persistNotes();
  showToast(tr('noteDeleted'));
}

function closeMobileNav() {
  $('.sidebar').classList.remove('open');
  $('#mobileScrim').classList.remove('open');
}

function initialize() {
  app.notes = loadNotes();
  $('#aidNavCount').textContent = aidItems.length;
  $('#aidStatCount').textContent = aidItems.length;
  document.documentElement.lang = app.lang;
  document.documentElement.dir = app.lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-lang]').forEach(button => {
    button.classList.toggle('active', button.dataset.lang === app.lang);
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });
  $$('.nav-link').forEach(button => button.addEventListener('click', () => navigate(button.dataset.view)));
  $$('[data-view-link]').forEach(link => link.addEventListener('click', event => { event.preventDefault(); navigate(link.dataset.viewLink); }));
  $$('[data-go]').forEach(button => button.addEventListener('click', () => navigate(button.dataset.go)));
  $('#aidSearch').addEventListener('input', event => { app.aidQuery = event.target.value; renderAid(); });
  $('#newNote').addEventListener('click', createNote);
  $('#noteTitle').addEventListener('input', queueSave);
  $('#noteBody').addEventListener('input', queueSave);
  $('#paper').addEventListener('click', () => {
    if (!app.activeNoteId) createNote();
    $('#noteBody').focus();
  });
  $('#deleteNote').addEventListener('click', deleteActiveNote);
  $$('[data-quiz-level]').forEach(button => button.addEventListener('click', () => startQuizRound(button.dataset.quizLevel)));
  $('#quizNext').addEventListener('click', () => {
    if (!app.quizAnswered) return;
    app.quizIndex++;
    if (app.quizIndex >= 20) showQuizResults();
    else renderQuizQuestion();
  });
  $('#quizChangeLevel').addEventListener('click', showQuizLevelScreen);
  $('#quizChooseLevel').addEventListener('click', showQuizLevelScreen);
  $('#quizNewRound').addEventListener('click', () => startQuizRound(app.quizLevel));
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalBackdrop').addEventListener('click', event => { if (event.target === $('#modalBackdrop')) closeModal(); });
  $('#mobileMenu').addEventListener('click', () => {
    $('.sidebar').classList.add('open');
    $('#mobileScrim').classList.add('open');
  });
  $('#mobileScrim').addEventListener('click', closeMobileNav);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal();
      closeMobileNav();
    }
    if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) && app.view === 'firstaid') {
      event.preventDefault();
      $('#aidSearch').focus();
    }
  });
  renderAidFilters();
  renderAid();
  renderLearnFilters();
  renderLearning();
  renderNotes();
  document.documentElement.lang = app.lang;
  document.documentElement.dir = app.lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach(node => { const key = node.dataset.i18n; if (ui[app.lang][key]) node.innerHTML = ui[app.lang][key]; });
  $$('[data-i18n-placeholder]').forEach(node => { const key = node.dataset.i18nPlaceholder; if (ui[app.lang][key]) node.placeholder = ui[app.lang][key]; });
  $$('[data-i18n-aria]').forEach(node => { const key = node.dataset.i18nAria; if (ui[app.lang][key]) node.setAttribute('aria-label', ui[app.lang][key]); });
  document.title = app.lang === 'ar' ? 'دوكتور سهيلة — الدراسة والإسعافات الأولية' : app.lang === 'fr' ? 'Doctore Souhaila — Études et premiers secours' : 'Doctore Souhaila — Study & First Aid';
  $('#currentCrumb').textContent = currentCrumb(app.view);
  $('#mobileMenu').setAttribute('aria-label', app.lang === 'ar' ? 'فتح القائمة' : app.lang === 'fr' ? 'Ouvrir la navigation' : 'Open navigation');
  $('#modalClose').setAttribute('aria-label', tr('close'));
  $('#deleteNote').setAttribute('aria-label', tr('deleteNote'));
  $('#deleteNote').title = tr('deleteNote');
  $('#aidSearch').value = app.aidQuery;
}

document.addEventListener('DOMContentLoaded', initialize);

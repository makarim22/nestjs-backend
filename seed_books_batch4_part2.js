const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "The Stranger",
    author: "Albert Camus",
    publishYear: 1942,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Stranger",
    theGood: "Manifestasi definitif dari filsafat Absurdisme. Camus menggunakan prosa yang luar biasa datar dan ringkas untuk mengekspresikan kekosongan emosional yang mengganggu namun brilian.",
    theBad: "Meursault adalah salah satu anti-hero paling pasif dalam sastra, yang membuat kita sering kali sulit untuk peduli dengan nasib atau eksekusinya karena dia sendiri tidak peduli.",
    review: `### Kehampaan Eksistensial
*L’Étranger* (The Stranger / The Outsider) karya Albert Camus tidak pernah gagal mengejutkan pembaca dengan kalimat pembukanya yang mematikan dan nihilistik: *"Maman died today. Or yesterday maybe, I don’t know."* Melalui tokoh Meursault, seorang pria Prancis yang tinggal di Aljazair, Camus membawa kita ke dalam kesadaran seseorang yang sepenuhnya kebal terhadap konvensi emosional dan norma-norma moral masyarakat (menjadi *stranger* atau orang asing). Meursault tidak menangis di pemakaman ibunya, dan menolak berbohong untuk berpura-pura peduli.

### Absurdisme dan Kebebasan Fisik
Camus, salah satu arsitek filsafat Absurdisme, berargumen bahwa alam semesta pada dasarnya diam, irasional, dan sama sekali tidak memiliki makna inheren. Meursault menolak semua narasi "harapan" (seperti agama Katolik atau ambisi karier) karena dianggap palsu. Sebaliknya, ia hidup murni pada momen indrawi: panasnya matahari, sensasi berenang di laut, dan aroma tubuh perempuan. Ini mencapai klimaks fatalnya di pantai ketika ia, dibutakan oleh sinar matahari yang menyengat, menembak mati seorang pria Arab secara acak dan tanpa motif apa pun.

> "I opened myself to the gentle indifference of the world." — *Meursault*

### Pengadilan Bukan Atas Pembunuhan
Bagian kedua novel ini berubah menjadi salah satu kritik pengadilan yang paling tajam. Hakim dan jaksa penuntut sebenarnya tidak memfokuskan dakwaan pada pembunuhan itu sendiri. Sebaliknya, Meursault diadili, dihukum mati, dan dicap sebagai monster psikopat murni karena *ia tidak menangis di pemakaman ibunya*. Masyarakat merasa lebih terancam oleh ketidakmampuannya berbohong memalsukan emosi sosial dibandingkan tindakan membunuh itu sendiri.

### Relevansi dan Pencerahan Akhir
Di sel tahanannya, saat menolak hiburan dari seorang pendeta sebelum eksekusi guilotin, Meursault akhirnya mencapai pencerahan Absurdisme yang utuh. Ia menerima hukuman matinya, mengutuk segala pencarian makna abadi, dan melepaskan diri pada "ketidakpedulian yang lembut" dari alam semesta. Ini adalah buku yang sangat menantang kemapanan moral manusia.`
  },
  {
    title: "Catch-22",
    author: "Joseph Heller",
    publishYear: 1961,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Catch-22",
    theGood: "Buku paling lucu yang akan Anda baca tentang topik yang paling mengerikan (perang). Menjadi landasan abadi genre komedi gelap yang melahirkan idiom populer 'Catch-22'.",
    theBad: "Pacing waktu yang sangat campur-aduk dan gaya repetitif, sirkular dari argumen para prajurit seringkali dirancang untuk sengaja mengacaukan pemahaman pembaca.",
    review: `### Kemunafikan Birokrasi Perang
*Catch-22* adalah ledakan komedi gelap dan satir birokrasi militer terbaik abad ke-20. Latar waktu berada di ujung Perang Dunia II di pulau Pianosa, Italia. Karakter utama, Kapten John Yossarian, seorang bombardier Angkatan Udara, sama sekali tidak memiliki jiwa pahlawan. Dia hanya memiliki satu tujuan: bertahan hidup dengan cara apa pun. Masalah utamanya bukanlah musuh yang menembaknya di udara, melainkan komandan militernya sendiri (Kolonel Cathcart) yang secara gila terus-menerus menaikkan kuota misi tempur sebelum siapa pun diizinkan pulang.

### Logika Absurd Catch-22
Inti komedi novel ini bersandar pada hukum fiktif yang tidak tertulis namun mengatur segalanya: *Catch-22*. Peraturan medis militer menyatakan seorang prajurit dapat dibebastugaskan dari misi bunuh diri jika ia divonis gila (tidak waras). *Namun*, ada *catch* (celah jebakan). Orang yang secara rasional ingin menghindari misi tempur yang mematikan jelas-jelas masih sangat waras (hanya orang gila yang dengan senang hati mati). Oleh karena itu, siapa pun yang meminta dibebastugaskan karena merasa gila membuktikan dirinya waras, dan karena ia waras, ia harus tetap terbang.

> "Just because you're paranoid doesn't mean they aren't after you." — *Joseph Heller*

### Komersialisasi Darah dan Kematian
Di atas pesawat pengebom, satir Heller melampaui militer hingga menyerang kapitalisme oportunis, yang paling menonjol melalui Milo Minderbinder. Milo adalah letnan korup pencatut suplai logistik yang bertindak sebagai "Syndicate" internasional, yang akhirnya dengan santai menerima kontrak tempur untuk meledakkan pangkalannya sendiri (pasukan Amerika) karena Jerman menawarkan keuntungan moneter yang lebih besar.

### Horor di Balik Komedi
Tawa dalam *Catch-22* perlahan membeku menjadi horor dan mual di sepertiga akhir buku. Adegan Snowden, sang penembak senapan, yang secara tragis mati berdarah di lantai pesawat—momen yang sebelumnya hanya diisyaratkan berulang kali dalam cerita—ditampilkan secara brutal. Novel ini membongkar seluruh argumen bahwa perang adalah kebaikan heroik dan menyimpulkan bahwa orang tua kaya mengirimkan pemuda miskin untuk hancur berkeping-keping demi kepentingan kapital dan ego birokrasi.`
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    publishYear: 1851,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Moby-Dick",
    theGood: "Karya sastra Amerika Utara paling kolosal dan ambisius. Monolog Kapten Ahab adalah puisi berapi-api Shakespearean yang luar biasa menakjubkan.",
    theBad: "Separuh dari buku ini pada dasarnya adalah ensiklopedia teknis paus sperma, metode memotong lemak paus, dan analisis cetology (biologi paus) paus yang sangat membuat frustrasi.",
    review: `### Monomania dan Epik Kelautan
*"Call me Ishmael."* Ini adalah salah satu kalimat pembuka paling terkenal sepanjang masa. *Moby-Dick; or, The Whale* pada mulanya terasa seperti novel petualangan eksotis tentang industri perburuan paus di perairan Nantucket, tetapi Herman Melville dengan cepat mengubahnya menjadi sebuah eksperimen meta-fiksi epik mengenai kemarahan manusia terhadap Tuhan, alam, dan kehampaan. Perjalanan kapal pesiar kayu *Pequod* perlahan berubah menjadi misi bunuh diri kolektif di bawah tirani monomaniak: Kapten Ahab.

### Analisis Karakter Kapten Ahab
Ahab kehilangan satu kakinya akibat serangan paus sperma albino raksasa yang dikenal sebagai Moby Dick. Bukannya mundur, Ahab menjadi fanatik dan menyuntikkan sihir gelap, menukar kompas moral kapalnya dan memaksa krunya bersumpah di atas ujung tombak yang dialiri darah harpun untuk memburu Moby Dick ke seluruh samudra. Bagi Ahab, sang Paus Putih bukan sekadar hewan liar biasa; itu adalah cerminan dari misteri tak bertuan di balik alam semesta, sebuah kekuatan metafisik tirani yang Ahab bersikeras harus ditusuk dan dibunuh.

> "I'd strike the sun if it insulted me." — *Captain Ahab*

### Mengapa Ada Bab Biologi Paus?
Hambatan terbesar bagi pembaca modern adalah puluhan bab digresi yang ditulis Melville hanya mengenai botani laut, sejarah anatomi ekor paus, hingga cara tepat merebus lemaknya. Melville sengaja menggunakannya untuk memberikan "bobot realita yang ilmiah" sehingga, ketika kegilaan dan surealisme di akhir buku terjadi (penampakan paus iblis di samudra lepas), teror gaibnya menjadi jauh lebih dipercaya dan terasa.

### Kekalahan Akal Sehat
Kru kapal Pequod mewakili miniatur utuh multikultural ras manusia (termasuk Queequeg si pangeran kanibal yang mulia, dan Starbuck sang letnan Kristen yang rasional). Namun, rasionalitas dan logika sepenuhnya gagal membendung kharisma obsesif Ahab. Serangan epik Moby Dick di bab akhir menghancurkan segalanya dengan begitu cepat, seakan laut membersihkan kesombongan umat manusia dalam satu sapuan absolut.`
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    publishYear: 1605,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Don+Quixote",
    theGood: "Sering diakui sebagai 'Novel Modern Pertama'. Sebuah dekonstruksi yang meriah dan sangat lucu tentang cerita satria (chivalry), yang memadukan komedi *slapstick* dengan tragedi filosofis.",
    theBad: "Gaya penulisannya episodik (*picaresque*) sehingga bab-bab terasa tidak saling bertautan, apalagi Volume II dirilis hampir sepuluh tahun setelah kesuksesan Volume I.",
    review: `### Kegilaan yang Membawa Tujuan
Diterbitkan lebih dari 400 tahun yang lalu, *El Ingenioso Hidalgo Don Quijote de la Mancha* bukan sekadar tonggak sejarah literatur—ini adalah eksplorasi radikal atas perbedaan antara realitas empiris dan idealisme romantis. Alonso Quixano adalah seorang bangsawan paruh baya (*hidalgo*) yang miskin dan menghabiskan siangnya membaca buku-buku ksatria romantis abad pertengahan dengan begitu rakus, sampai cairan otak dan akal sehatnya mengering. Dia akhirnya percaya dirinya adalah seorang ksatria sejati, mengganti namanya menjadi Don Quixote, menaiki kuda kurus Rocinante, dan merekrut seorang petani gendut yang pragmatis, Sancho Panza, sebagai pengawalnya (*squire*).

### Menyerang Kincir Angin
Petualangan episodik mereka merupakan kejeniusan mutlak. Momen ikonik Quixote yang melihat sederet kincir angin raksasa lalu meyakini mereka adalah siluman raksasa dan menusuk mereka dengan tombak hingga dirinya terlempar, telah menciptakan frasa *"tilting at windmills"*. Quixote mengubah penginapan reyot menjadi kastil megah, pekerja seks menjadi perawan suci (Dulcinea), dan kawanan domba menjadi pasukan Muslim yang harus dibasmi. Ini adalah komedi *slapstick* kelas atas.

> "Finally, from so little sleeping and so much reading, his brain dried up and he went completely out of his mind." — *Cervantes*

### Tragedi di Balik Komedi (Volume II)
Apa yang membuat *Don Quixote* abadi adalah transisinya dari komedi bodoh menjadi tragedi psikologis. Di Buku Kedua (Buku II), Cervantes melakukan *meta-fiksi*: karakter Quixote mengetahui bahwa ada sebuah buku terkenal tentang dirinya yang sudah diterbitkan. Dia dan Sancho diundang ke kastil Duke dan Duchess yang kaya, yang menyelenggarakan ilusi kejam secara rumit hanya demi bahan lelucon pribadi.

### Penolakan Dunia Modern terhadap Idealisme
Pada akhirnya, pembaca dihadapkan pada pertanyaan memilukan: mana yang lebih menyedihkan, orang gila yang memperjuangkan kemurnian idealisme (kejujuran, cinta murni, keberanian) di dunia yang sinis, atau orang "waras" yang pragmatis, dingin, dan tidak peduli? Kematian Quixote di ranjang yang berhasil 'disembuhkan' dari kegilaannya ironisnya merupakan titik hilangnya pesona (magis) bagi sahabat sekaligus penceritanya, membuktikan bahwa fiksi dan fantasi lebih diperlukan daripada obat.`
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    publishYear: 1847,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Wuthering+Heights",
    theGood: "Puncak paling berdarah dan paling psikotik dari literatur *Gothic*. Ini bukanlah kisah romantis, melainkan eksplorasi balas dendam dan amarah sadis yang tidak terkendali yang brilian.",
    theBad: "Tidak ada satupun karakter di dalam buku ini yang bisa disukai atau dianggap baik. Tokohnya egois, kasar secara fisik dan emosional, dan dengan sengaja merusak nyawa anak-anak mereka.",
    review: `### Romansa Sebagai Kekuatan Destruktif
*Wuthering Heights*, satu-satunya novel yang pernah ditulis Emily Brontë sebelum ia wafat muda, sering kali disalahpahami oleh audiens kontemporer sebagai kisah cinta yang tragis. Sebaliknya, novel ini adalah kisah dendam lintas generasi yang sadis. Latar belakang yang mengisolasi dan ganas di padang gurun gersang Yorkshire Moors sangat serasi dengan semangat liar, kejam, dan tak tertembus dari sang protagonis utama: Heathcliff, seorang anak gipsi telantar yang dibawa ke rumah besar Wuthering Heights.

### Heathcliff dan Catherine Earnshaw
Cinta antara Heathcliff dan Catherine bukanlah cinta monyet, melainkan penyatuan jiwa biologis yang destruktif. Catherine dengan bodoh memilih status sosial dengan menikahi Edgar Linton yang lemah dan lembut demi kehidupan nyaman di Thrushcross Grange, melepaskan Heathcliff. Keputusan ini memicu badai psikologis yang mengubah Heathcliff menjadi salah satu monster terbesar kesusastraan.

> "Whatever our souls are made of, his and mine are the same." — *Catherine Earnshaw*

### Arsitektur Balas Dendam
Sekembalinya Heathcliff sebagai pria dewasa yang misterius dan sangat kaya, sisa cerita adalah kampanye manipulasi dan penyiksaan yang metodis. Heathcliff secara sistematis menghancurkan hidup kakak angkatnya Hindley (yang dulu menyiksanya), menjerat pewaris Linton, dan puncaknya, secara kejam mengambil hak atas properti sekaligus anak-anak mereka di generasi berikutnya untuk menjadikannya gembel dan bodoh. Brontë sama sekali tidak takut untuk membuat Heathcliff bertindak murni di luar moralitas dan agama.

### Supernatural dan Kematian
Cerita ini secara krusial difilter melalui sudut pandang *unreliable narrator* seperti Mr. Lockwood dan pembantu rumah Nelly Dean, membuat horor dan kemunafikan yang disajikan terasa jauh lebih halus namun mencekik. Arwah Catherine yang menggaruk-garuk jendela Heathcliff di tengah badai salju membedakan novel ini. Brontë menegaskan bahwa cinta yang terlalu mutlak (seperti entitas alam) tidak akan pernah menemukan kedamaian di bumi manusia yang fana; hanya dapat ditenangkan melalui kesenyapan kematian dan pemakaman bersama di hamparan *moors*.`
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    publishYear: 1818,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Frankenstein",
    theGood: "Kelahiran genre Fiksi Ilmiah modern (Sci-Fi). Novel ini adalah meditasi yang sangat kompleks dan filosofis mengenai etika penciptaan ilmiah dan penolakan sosial.",
    theBad: "Struktur narasinya sangat bertingkat (*frame narrative* dalam surat di dalam kilas balik) dan bisa terasa sangat kaku (*melodramatic*) karena mengandalkan surat panjang yang tidak realistis.",
    review: `### Sci-Fi Pertama dan Mitologi "The Modern Prometheus"
Secara luar biasa, *Frankenstein; or, The Modern Prometheus* disusun oleh Mary Shelley ketika ia baru berusia delapan belas tahun saat berlibur bersama Lord Byron dan suaminya, Percy Bysshe Shelley. Novel ini menggeser elemen horor *Gothic* murni dengan menjadi pelopor fiksi ilmiah modern, karena Victor Frankenstein tidak menggunakan ilmu sihir atau ilmu hitam untuk menciptakan makhluk dari sisa-sisa bagian tubuh manusia mati, melainkan ilmu anatomi, kimiawi modern, dan kekuatan listrik (*galvanism*).

### Monsternya adalah Manusia (Dan Sang Manusia adalah Monster)
Budaya pop sering mereduksi The Creature (Monster) menjadi zombi hijau bodoh tanpa bahasa, namun novel asli menggambarkan kebalikan absolut dari hal tersebut. Sang Monster adalah makhluk raksasa yang tidak disebutkan namanya (*The Creature*), yang sangat cerdas, mahir berbahasa filosofis (belajar membaca *Paradise Lost* karya Milton dari tempat persembunyian), dan sangat sensitif. Tragedi sebenarnya adalah bagaimana sang Pencipta, Victor Frankenstein, muak dan langsung melarikan diri pada pandangan pertama karena ciptaannya secara estetika sangat mengerikan.

> "Beware; for I am fearless, and therefore powerful." — *The Monster*

### Pertanggungjawaban Pencipta
Keseluruhan narasi bergeser menjadi duel psikologis antara Pencipta yang pengecut dan Ciptaan yang kesepian. Makhluk tersebut secara harfiah tidak menuntut apa pun dari Victor selain dari **satu hal**—untuk tidak sendirian; ia meminta diciptakan seorang pasangan (*mate*) perempuan. Ketika Victor secara kejam membatalkan penciptaan pasangan perempuan karena takut akan berkembang biaknya ras monster baru, sang Makhluk berbalik memburu hidup Victor dengan membunuh secara sistematis setiap anggota keluarganya yang tidak bersalah.

### Kritik terhadap Era Pencerahan
Mary Shelley menggunakan *Frankenstein* sebagai peringatan keras di pertengahan Era Pencerahan (Enlightenment). Ambisi ilmiah maskulin buta dari Victor tanpa pertimbangan kompas etika, mengklaim kekuatan Dewa Pencipta tanpa bersedia menanggung konsekuensi cinta kepada ciptaannya, akan meruntuhkan struktur keluarga dan kehidupan sosial. Kematian menyendiri mereka di hamparan es Kutub Utara yang tandus adalah monumen kehancuran absolut akibat ambisi ilmiah buta.`
  },
  {
    title: "Beloved",
    author: "Toni Morrison",
    publishYear: 1987,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Beloved",
    theGood: "Karya literatur Amerika paling kuat tentang ingatan traumatis perbudakan (*slave narrative*). Penulisan Morrison adalah sihir puitis yang sangat mencekam.",
    theBad: "Menawarkan deskripsi kekejaman dan trauma masa lalu perbudakan yang begitu grafis, sadis, dan brutal sehingga dapat memicu trauma pembaca (*triggering*).",
    review: `### Hantu dari Memori Historis
*Beloved*, yang memenangkan Pulitzer Prize untuk Toni Morrison, bukan hanya sekadar novel sejarah tentang perbudakan kulit hitam; ia adalah sebuah horor supernatural (*ghost story*) yang melambangkan bahwa memori sejarah perbudakan Amerika masih menghantui dan bernafas di dalam ruang keluarga kontemporernya. Berpusat pada Sethe, seorang wanita yang telah meloloskan diri dari perbudakan di *Sweet Home*, Kentucky, ke Cincinnati, ia dan putrinya Denver diteror siang dan malam oleh *poltergeist* marah dari bayi yang Sethe bunuh bertahun-tahun yang lalu.

### Infantisida sebagai Aksi Cinta Paling Putus Asa
Di tengah novel, Morrison meledakkan jantung pembacanya dengan sebuah adegan nyata yang diangkat dari peristiwa sejarah Margaret Garner. Ketika para majikan pemburu budak (*slave catchers*) tiba di Cincinnati untuk menyeret Sethe dan anak-anaknya kembali ke perbudakan (berdasarkan *Fugitive Slave Act*), Sethe membawa bayinya ke gudang dan memotong lehernya dengan gergaji, menilai kematian akan seribu kali lebih baik, aman, dan mulia daripada membiarkan putrinya disiksa kembali di *Sweet Home*.

> "Freeing yourself was one thing, claiming ownership of that freed self was another." — *Toni Morrison*

### Inkarnasi Beloved
Horor supernatural memuncak dengan kedatangan seorang wanita muda yang menyebut dirinya Beloved—secara fisik adalah manifestasi hantu yang telah menjelma menjadi wanita berdarah-daging, atau kemungkinan survivor trauma lainnya (Morrison sengaja meninggalkannya ambigu). Hubungan simbiosis parasitik antara Sethe yang dihukum oleh rasa bersalahnya yang tiada tara dan Beloved yang lapar akan memori merusak kehidupan mereka semua. 

### Narasi Sebagai Proses Penyembuhan
Gaya penulisan (*stream-of-consciousness*) yang dipakai Morrison bergema dengan melodi lirik spiritual kaum kulit hitam (*African-American oral tradition*). Buku ini adalah ritual pembersihan historis (*exorcism*); menegaskan bahwa Anda tidak akan bisa mengklaim masa depan Amerika yang bebas tanpa harus duduk kembali secara paksa, membuka kembali luka-luka kulit yang telah menjadi keloid (Bekas *chokecherry tree* di punggung Sethe), dan menerima hantu perbudakan agar roh tersebut akhirnya bisa dikuburkan selamanya.`
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    publishYear: 1844,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Monte+Cristo",
    theGood: "Kisah pembalasan dendam (revenge) terhebat dalam sejarah sastra fiksi. Sangat epik, mendebarkan, brilian, dengan plotting labirin intrik dan drama yang tidak pernah membosankan.",
    theBad: "Versi yang tidak disingkat (*unabridged*) bisa melebihi 1,200 halaman, dan intrik puluhan karakter pendukung di paruh tengah (elite sosial Paris) terkadang terasa seperti sinetron.",
    review: `### Arsitek Pembalasan Dendam Sempurna
*Le Comte de Monte-Cristo* karya Alexandre Dumas adalah sebuah epik petualangan masif dan purwarupa dari plot *vigilante justice*. Kisahnya mengikuti Edmond Dantès, seorang pelaut muda yang jujur, baik hati, dan memiliki masa depan cerah. Namun, karena kecemburuan kolektif dari tiga orang kenalannya (Fernand Mondego yang menginginkan kekasihnya, Danglars yang iri akan promosinya, dan Villefort sang jaksa yang ingin melindungi karir politiknya), Dantès secara tragis dikhianati dan dijebloskan ke penjara paling mengerikan di pulau Château d'If tanpa peradilan apa pun di hari pernikahannya.

### Penemuan Kekayaan dan Pengetahuan
Satu-satunya anugerah Dantès di penjara adalah pertemuannya dengan tahanan Abbé Faria, "pendeta gila" yang mentransfer seluruh ilmu pengetahuannya (sains, bahasa, politik) kepadanya dan memberikan koordinat harta karun legenda di Pulau Monte Cristo. Saat akhirnya Dantès berhasil meloloskan diri setelah 14 tahun siksaan soliter, Dumas telah secara bertahap membunuh pemuda baik Edmond Dantès dan mereinkarnasikannya sebagai entitas intelektual dingin tanpa ampun yang ditopang oleh harta tak terbatas: **The Count of Monte Cristo**.

> "All human wisdom is contained in these two words - Wait and Hope." — *Edmond Dantès*

### Penyatuan Takdir dan Keadilan Dewa
Paruh kedua novel yang berlatar di Paris adalah *masterclass* mutlak dalam struktur plotting (merajut simpul konflik). Alih-alih membunuh musuh-musuhnya (yang kini telah menjadi elit korup dari struktur masyarakat modern Prancis seperti Jenderal, Baron, dan Hakim), Sang Count perlahan menghancurkan kehidupan finansial, kehormatan, dan sanak keluarga mereka melalui perangkap-perangkap elegan yang menggunakan keserakahan mereka sendiri sebagai senjata. 

### Beban Psikologis Pembalasan
Meski demikian, nilai sastra tinggi dari Dumas muncul ketika balas dendam Dantès mulai berjalan *terlalu* sempurna, berakibat kepada kehancuran tak terelakkan dari anak-anak yang sama sekali tak bersalah (seperti kematian anak muda keluarga Villefort). Dantès akhirnya dipaksa mempertanyakan batas moralnya dan arogansinya karena bermain menjadi agen kemarahan Tuhan. Ini adalah sebuah novel yang tebal, namun plot mendidih dan resolusinya memberikan kepuasan penceritaan tiada tanding.`
  },
  {
    title: "Invisible Man",
    author: "Ralph Ellison",
    publishYear: 1952,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Invisible+Man",
    theGood: "Ekspresi intelektual paling memukau dan inovatif tentang marginalisasi rasial, menggunakan metafora kebutaan dan 'tak terlihat' yang sangat puitis dan provokatif.",
    theBad: "Dipenuhi alusi yang luar biasa kental, simbolisme absurd, dan panjang yang bisa jadi membebani pikiran karena kecepatan narasinya bervariasi secara ekstrem.",
    review: `### Metafora Kebutaan dan Keberadaan
Novel magnum opus karya Ralph Ellison ini tidak membicarakan orang dengan kekuatan super (*invisible man* H.G. Wells), melainkan berbicara tentang *invisibility* rasial dan sosial yang jauh lebih mematikan. Sang Narator tanpa nama mengurung diri di ruangan bawah tanah yang dipenuhi sorotan sinar dari 1.369 bola lampu raksasa bertenaga curian hanya untuk sekadar membuktikan eksistensinya. Ia tidak terlihat bukan karena struktur biokimia, melainkan karena konstruksi budaya kulit putih yang menolak, secara psikologis dan sosiologis, untuk "melihatnya" sebagai manusia kulit hitam sejati.

### Kritik terhadap Faksi Rasial
Daya cengkeram terbesar *Invisible Man* bukan hanya kritik berdarah-darah terhadap dominasi supremasi kulit putih di daerah Selatan AS masa itu (seperti adegan mengerikan *Battle Royal* di mana pemuda kulit hitam ditutup matanya, dipaksa bertarung di arena berdarah dan di atas karpet listrik demi dihibur para politisi kulit putih). Ellison menggunakan kemarahan ini untuk secara berani mengkritik kelompok elitis akademisi kulit hitam sendiri, termasuk dekonstruksi terselubung terhadap ideologi kampus Booker T. Washington, serta kemunafikan dari "The Brotherhood" (alusi dari Partai Komunis Amerika) di New York, yang hanya mereduksi nilai orang kulit hitam menjadi martir politik abstrak.

> "I am invisible, understand, simply because people refuse to see me." — *The Narrator*

### Surealisme Bawah Tanah
Dari perjalanan di pabrik cat *Liberty Paints*—yang memproduksi cat paling putih murni dengan menambahkan setetes pewarna pigmen kulit hitam—hingga huru-hara Harlem yang berujung pada kekacauan surealis, perjalanan sang protagonis terus digerakkan menuju kebingungan identitas, kehilangan kontrol, dan pengingkaran (*dispossession*).

### Pencarian Identitas Universal
Dalam menolak semua identitas kaku buatan faksi politik untuknya, Sang Narator dihadapkan pada kekosongan yang mengerikan namun pada akhirnya memberdayakan. Epilog novel ini menawarkan paradoks kebebasan; dengan melepaskan ilusi yang dibebankan padanya secara paksa, ia kini dihibur oleh potensinya bahwa, di dalam penolakan dan ketiadaan visibilitasnya, narator *Invisible Man* sedang berbicara untuk semua pengalaman tragis umat manusia, melintasi batas ras.`
  },
  {
    title: "In Search of Lost Time",
    author: "Marcel Proust",
    publishYear: 1913,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=In+Search+of+Lost+Time",
    theGood: "Karya literatur terpanjang dan paling megah (3.000 halaman lebih). Penjelajahan Proust terhadap cara kerja *Ingatan Tanpa Sadar* (Involuntary Memory) adalah mukjizat sastra modern.",
    theBad: "Mengharuskan stamina komitmen yang sangat besar. Ada satu kalimat yang bisa membentang menyeberangi banyak halaman dan Proust bisa mendeskripsikan satu gaun pelayan selama 30 halaman.",
    review: `### Monumen Mengenang Masa Lalu
*À la recherche du temps perdu* (diterjemahkan sebagai *Remembrance of Things Past* atau *In Search of Lost Time*) oleh Marcel Proust merupakan paus biru raksasa dari literatur Prancis dan dunia Barat. Dibagi secara masif menjadi 7 volume monumental (seperti *Swann's Way* dan *Time Regained*), novel semi-otobiografi ini menyajikan studi sosiologis komprehensif tanpa banding yang mendeskripsikan transisi halus penurunan moral masyarakat Aristokrasi Prancis (*Faubourg Saint-Germain*) di masa *La Belle Époque* hingga akhir Perang Dunia I.

### Keajaiban Kue Madeleine (Involuntary Memory)
Buku pertama meluncurkan konsep neurologis dan artistik paling penting dari Proust: **Ingatan Tanpa Sadar**. Narator utama, Marcel, menggigit sebuah kue *madeleine* hangat yang telah dicelupkan ke dalam secangkir teh limau (*linden tea*). Hanya melalui pengalaman sensorik fisik (*rasa dan bau*) tersebut, seketika benteng waktu secara mekanik runtuh, dan memori masa kecil lamanya di pedesaan Combray terestorasi, bangkit secara penuh di depan matanya beserta udara, bunga, dan orang-orangnya. Hal ini membuktikan waktu tidak linear—segalanya yang "hilang" dapat kembali utuh lewat pemicu yang tepat.

> "The true paradises are the paradises that we have lost." — *Marcel Proust*

### Anatomi Kecemburuan Asmara
Satu obsesi utama novel panjang ini adalah analisis patologis yang luar biasa mengenai **kecemburuan** (*jealousy*) dan rasa sakit cinta, khususnya diperlihatkan secara klinis lewat percintaan Swann yang tersiksa terhadap Odette de Crécy yang penuh teka-teki, dan kemudian Marcel sendiri yang obsesif mencoba mengontrol kemerdekaan Albertine Simonet. Proust menggambarkan jatuh cinta bukan sebagai penyatuan spiritual, tetapi sebagai proyeksi ilusi penyakit penderitaan di mana seseorang hanya menginginkan apa yang tidak bisa ia kuasai penuh.

### Triumvirat Estetika Akhir
Melalui prosa yang sangat melingkar, musikal, dan berakar layaknya arsitektur gnostik, *In Search of Lost Time* pada esensinya melabuhkan sebuah argumen bahwa interaksi kehidupan murni di dunia pada hakikatnya membuang-buang waktu dan berujung pada rasa kecewa. Di volume penutup *Time Regained*, Marcel akhirnya menemukan kesimpulan ilahi: satu-satunya cara untuk menaklukkan realitas waktu yang terus-menerus menua menuju kematian adalah melestarikannya ke dalam abadi—ke dalam karya Seni dan Sastra.`
  },
  {
    title: "Lolita",
    author: "Vladimir Nabokov",
    publishYear: 1955,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Lolita",
    theGood: "Penguasaan retorika bahasa Inggris paling indah oleh Nabokov, yang menavigasi subjek yang paling mengerikan dengan kaliber prosa liris (*lyrical prose*) dan ironi tingkat tinggi yang luar biasa.",
    theBad: "Materi dan alur cerita buku ini mengenai *child abuse* dan *grooming* paedofilia sering kali terlalu traumatis dan menjijikkan bagi sebagian pembaca (yang mana sudah semestinya).",
    review: `### Teror di Balik Bahasa yang Memukau
Hingga saat ini, kontroversi novel *Lolita* seringkali membuat publik salah mengartikan pesan sebenarnya dari mahakarya sastra ini. Penulis Vladimir Nabokov tidak sedang memuja, meromantisasi, apalagi memberikan apologi terhadap tindakan pedofilia. Ia justru secara berani sedang mementaskan eksperimen yang mengerikan dan mengguncang pembaca secara moral: Nabokov mendandani sosok monster predator obsesif, psikopat sejati Humbert Humbert, dengan gaya intelektualisme memukau, perbendaharaan diksi bahasa Inggris sastra terindah, dan humor kelam yang tajam.

### Perangkap Pesona Pencerita (Unreliable Narrator)
Konflik paling mengerikan dari novel *Lolita* bukanlah apa yang terjadi di dalam cerita, melainkan di dalam pikiran **pembaca** itu sendiri. Sebagai sudut pandang tunggal, Humbert (seorang profesor sastra Eropa setengah baya yang eksil di Amerika) secara culas menyusun narasinya semata-mata untuk merasionalisasikan penculikannya terhadap Dolores Haze yang berusia 12 tahun, seorang nimfa Amerika (*Nymphet*) bagi dirinya. Humbert secara retorik membujuk pembaca menjadi kaki tangannya yang simpatik. Namun perlahan-lahan, Nabokov secara halus membocorkan realitas brutalnya bahwa Dolores tidak sedang saling mencintai—gadis malang itu disekap dan dipaksa tunduk sepenuhnya oleh teror.

> "Lolita, light of my life, fire of my loins. My sin, my soul. Lo-lee-ta..." — *Humbert Humbert*

### Satir tentang Kultus Konsumerisme Amerika 
Perjalanan melintasi *highway*, motel kotor, dan budaya pop Amerika memberikan lanskap surealis pasca-Eropa yang Nabokov gunakan untuk menyindir keras keluguan banal (kedangkalan kapitalisme) yang tumbuh di Amerika era tahun 1950-an. Dolores sendiri sering digambarkan oleh Humbert sebagai produk pasif konsumsi film Hollywood dan majalah *teen* murah, di mana Humbert adalah wakil *Old World* Eropa yang merusak masa depan Amerika.

### Kehancuran Ilusi dan Pengakuan Akhir
Babak-babak penutup di mana sosok Clare Quilty diperkenalkan sebagai lawan yang lebih rendah dari Humbert berfungsi untuk memusnahkan argumen romantis Humbert sendiri. Pada klimaks novel yang menghancurkan hati, ketika Dolores (kini hamil, sudah menikah secara sedih, dan hidup melarat), secara datar menolak Humbert dan permintaannya yang egois, Humbert untuk pertama kalinya secara mengejutkan mencapai wahyu pertobatan. Ia menyadari realita perbuatan sadisnya dan menangis bukan atas kehilangan cintanya, tetapi ia menangis bahwa di padang rumput anak-anak yang bermain secara abadi itu, sayangnya ia hanya tidak bisa mendengar suara kepolosan suara tawa Lolita lagi. Buku brilian tentang ilusi artistik yang berbahaya.`
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    author: "Ken Kesey",
    publishYear: 1962,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Cuckoo's+Nest",
    theGood: "Karya literatur kontra-kultur terbaik dari tahun 60-an. Secara cerdas menyerang metode institusionalisasi kejam (lobotomi, ECT) terhadap neurodivergensi sambil menyoroti nilai kemanusiaan penderita gangguan kejiwaan.",
    theBad: "Beberapa penokohan dan diksi mungkin dinilai ketinggalan zaman dan membawa sub-teks *misogynist* yang memposisikan tokoh perempuan dan perawat rumah sakit sebagai figur kastrasi absolut.",
    review: `### Perlawanan di Bangsal Psikiatri
Berangkat dari pengalaman pengarangnya Ken Kesey saat menjalani *night shift* eksperimen medis Halusinogen CIA di fasilitas kejiwaan pemerintah, *One Flew Over the Cuckoo's Nest* adalah ikon literatur kaum pemberontak Amerika tahun 1960-an. Cerita dinarasikan dengan gaya skizofrenik dan paranoia memukau oleh Chief Bromden, seorang keturunan suku asli Indian tinggi besar yang selama belasan tahun memalsukan kebisuannya (bisu-tuli) karena merasa dikebiri oleh rezim kekuatan tak terlihat yang ia sebut **"The Combine"** (mesin raksasa industrial mekanik).

### Duel Kesadaran: McMurphy vs Nurse Ratched
Titik picu ledakan konflik adalah saat kedatangan Randle P. McMurphy—seorang narapidana, pemabuk, penipu bertubuh besar berhidung bengkok, dengan tawa meledak-ledak. McMurphy memalsukan kegilaannya demi pindah dari kejamnya ladang kerja paksa penjara ke dalam institusi rumah sakit jiwa Oregon yang ia kira "nyaman". Di sanalah ia berhadapan langsung dengan Nurse Ratched ("Big Nurse"), representasi diktator dingin, kalkulatif, tanpa belas kasih dari aparatur negara, yang menjaga ketertiban pasien melalui obat bius, sesi terapi saling mengadukan aib secara brutal, kejut listrik yang mencekam, dan lobotomi.

> "He who marches out of step hears another drum." — *Ken Kesey*

### Menyalakan Kembali Rasa Sakit Umat Manusia
Apa yang membuat McMurphy menjadi sosok *Christ-like* yang tak disengaja di fasilitas itu adalah penolakannya untuk tunduk pada mekanisasi totalitarisme *The Combine*. Alih-alih patuh pada represi pasif yang merenggut vitalitas dari para pasien laki-laki seperti Harding dan Billy Bibbit yang sebenarnya waras (hanya ditekan oleh standar orang tua dan kecemasan sosial di dunia luar), McMurphy menantang Ratched secara sadar meskipun sadar ada konsekuensi fatalnya. McMurphy dengan penuh kasih menyalakan insting pemberontakan kawan-kawannya dengan memancing lepas di laut, pesta bir dengan dua gadis malam, mengorganisir taruhan, dan memberikan mereka pancing kebebasan.

### Pengorbanan Sang Pembebas
Aksi akhir yang dramatis—di mana sang Pahlawan mengorbankan sebagian besar bagian frontal otaknya dalam upaya mencekik otoritas represi demi mempertahankan otonomi tubuh kawannya—merupakan alegori martir literatur brilian. Kematian kesadaran McMurphy tidaklah sia-sia, karena secara harfiah telah memulihkan tenaga primitif sang Indian, Chief Bromden, membongkar belenggunya sendiri, merobek wastafel beton untuk menghancurkan palang pelindung kaca The Combine yang tak tertembus, dan secara apik ia 'terbang melintasi sarang Cuckoo' menuju kebebasan mutlak di hutan rimba.`
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books BATCH 4 chunk 2 (12 books)...');
  let added = 0;
  for (const book of books) {
    const exists = await prisma.bookReview.findFirst({ where: { title: book.title } });
    if (!exists) {
      await prisma.bookReview.create({
        data: {
          ...book,
          status: 'APPROVED',
          authorId: admin.id
        }
      });
      added++;
      console.log(`+ Added: ${book.title} (Batch 4 - Rich Text)`);
    } else {
      console.log(`- Skipped (Exists): ${book.title}`);
    }
  }
  console.log(`Done. Added ${added} books (Batch 4, Chunk 2).`);
}

seedBatch().catch(console.error).finally(() => prisma.$disconnect());

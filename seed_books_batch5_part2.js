const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "The Color of Magic",
    author: "Terry Pratchett",
    publishYear: 1983,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Color+of+Magic",
    theGood: "Kelahiran semesta satiris paling liar dan lucu dalam fantasi: Discworld. Absurditas Pratchett dalam memutarbalikkan kiasan (*tropes*) sihir fantasi benar-benar tak tertandingi.",
    theBad: "Sebagai buku pertama, penulisan Pratchett belum sepenuhnya matang; plotnya terasa seperti kumpulan anekdot lelucon yang dijahit kasar ketimbang novel berstruktur padat.",
    review: `### Menginjakkan Kaki di Discworld
Selamat datang di *Discworld*, dunia datar berbentuk piringan yang berputar di atas punggung empat gajah raksasa kosmik, yang kemudian secara mustahil berdiri di atas tempurung kura-kura super masif bernama *Great A'Tuin* yang perlahan berenang mengarungi kehampaan luar angkasa. *The Color of Magic* adalah pintu gerbang pertama untuk memasuki mahakarya satir fantasi setebal 41 buku karya Sir Terry Pratchett. Novel ini langsung menabrak batas logika sejak halaman pertama, membombardir pembaca dengan *world-building* yang gila, fisika magis kacau balau, dan komedi lelucon Inggris gaya Monty Python.

### Anti-Pahlawan Sihir: Rincewind
Alih-alih menyajikan ksatria gagah berani ala Tolkien, Pratchett memberikan kita Rincewind: seorang penyihir pengecut, sinis, dan paling gagal di *Unseen University*. Kemampuan bertahannya murni didasarkan pada insting lari secepat kilat. Masalahnya dimulai ketika ia disewa (secara paksa) menjadi pemandu wisata untuk Twoflower, turis asing berkacamata pertama di Discworld yang sangat naif dan ke mana-mana diikuti oleh The Luggage—sebuah peti koper ajaib terbuat dari kayu *sapient pearwood* yang berjalan dengan ratusan kaki kecil dan akan menelan musuh hidup-hidup.

> "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it." — *Terry Pratchett*

---

### Satir Kapitalisme dan Asuransi
Di balik kejenakaan komedinya, Pratchett diam-diam menyuntikkan satir sosiologis yang tajam mengenai penemuan masyarakat modern. Saat turis Twoflower menjelaskan konsep *"In-Sewer-Ants"* (Asuransi) kepada pemilik kedai, para pedagang serakah di kota kumuh Ankh-Morpork segera menyadari bahwa mereka bisa menghasilkan lebih banyak uang jika kedai mereka secara tidak sengaja terbakar. Ini berujung pada ledakan apokaliptik yang menghanguskan seluruh kota akibat keserakahan "asuransi" primitif yang salah kaprah.

### Dekonstruksi Kiasan Naga dan Pahlawan
Dalam pelarian mereka dari kematian, Rincewind dan Twoflower bertemu dengan parodi dari naga terbang, dewa-dewa yang bermain dadu kosmik menggunakan manusia sebagai bidak, hingga pahlawan barbar tua tanpa gigi yang bernama Hrun The Barbarian. Pratchett tanpa ampun mengejek fiksi fantasi heroisme tradisional (ala Conan The Barbarian atau Dungeons & Dragons), memperlihatkan bahwa keberanian buta sering kali hanya kedok bagi kebodohan tingkat dewa.

### Estetika Fantasi yang Menghangatkan Hati
Meskipun plot cerita *The Color of Magic* terasa kurang kohesif—sering kali berlompatan seperti antologi cerita pendek—kualitas sejati novel ini adalah kelembutan cinta Pratchett pada spesies manusia yang cacat ini. Entitas kosmik tertinggi sekalipun (seperti Kematian atau *Death*—sosok kerangka berjubah yang berbicara dengan **HURUF KAPITAL** yang menggemakan tulang) digambarkan memiliki kebingungan yang sangat manusiawi. Buku ini menjanjikan pelarian tertawa terbahak-bahak dari kepenatan realitas abu-abu dunia nyata.`
  },
  {
    title: "Good Omens",
    author: "Terry Pratchett and Neil Gaiman",
    publishYear: 1990,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Good+Omens",
    theGood: "Kombinasi dewa sastra: kegelapan mitologis Gaiman menyatu sempurna dengan satir jenius Pratchett. Komedi teologis paling menghibur tentang kiamat yang pernah ditulis.",
    theBad: "Jumlah *subplot* yang terlalu banyak (seperti pemburu penyihir tua dan pengendara motor Kiamat) terkadang menenggelamkan dinamika duo utamanya yang paling cemerlang.",
    review: `### Manajemen Bencana Akhir Zaman
*Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch* adalah bukti mukjizat kolaborasi dua raksasa literatur Inggris (Neil Gaiman dan Terry Pratchett). Plot sentralnya sangat sederhana: Kiamat Kristen (*Armageddon*) dijadwalkan secara birokratif untuk terjadi pada hari Sabtu mendatang. Masalahnya, malaikat Aziraphale (penjual buku langka yang sangat cerewet dan pecinta sushi) dan iblis Crowley (yang selalu mengenakan kacamata hitam, mengendarai Bentley antik, dan mendengarkan Queen) menyadari bahwa mereka sebenarnya sudah sangat betah dan menyukai kehidupan nyaman di Bumi. Jadi, mereka bersekongkol membelot untuk menggagalkan kiamat dari Surga dan Neraka.

### Kehilangan Sang Antikristus
Premis menjadi sangat lucu karena ada kesalahan *mix-up* bayi di rumah sakit pada saat malam kelahiran. Alih-alih dibesarkan oleh diplomat Amerika satanik untuk menjadi Antikristus penunggang kiamat, bayi Pangeran Kegelapan tersebut tak sengaja tertukar dan dibesarkan oleh keluarga kelas menengah Inggris yang sangat membosankan di desa yang damai. Sang Antikristus (Adam Young) tumbuh menjadi bocah 11 tahun yang sangat normal, suka bermain dengan anjingnya, dan tidak memiliki minat menghancurkan dunia karena itu berarti ia kehilangan tempat bermainnya.

> "Most of the great triumphs and tragedies of history are caused, not by people being fundamentally good or fundamentally bad, but by people being fundamentally people." — *Good Omens*

---

### Satir Atas Dualitas Hitam Putih
Lebih dari sekadar lelucon kosmik, buku ini menertawakan ketegangan dogma absolut. Aziraphale dan Crowley perlahan menyadari bahwa Surga dan Neraka pada dasarnya adalah institusi korporat yang sama, dikuasai oleh malaikat dan iblis gila jabatan yang sangat mendambakan perang besar demi ego menang dan kalah. Hanya entitas yang bergaul dengan keseharian manusia (memahami kelezatan makan siang di restoran dan keindahan merpati taman) yang memiliki perspektif moralitas sejati, yakni bahwa dunia harus diselamatkan dengan membiarkannya pada keadaan abu-abu (*gray area*).

### Evolusi Para Penunggang Kuda
Penafsiran Pratchett dan Gaiman atas Empat Penunggang Kuda Kiamat sangat cerdas dan tajam. Alih-alih membawa pedang tua, "Kematian" masih berupa kerangka klasik, tetapi ketiga saudaranya berevolusi sesuai dengan ancaman kontemporer manusia: *War* (Perang) adalah koresponden jurnalis bersenjata api yang menawan, *Famine* (Kelaparan) adalah arsitek makanan instan diet kosong untuk model mode, dan *Pestilence* (Penyakit) telah pensiun digantikan oleh ***Pollution* (Polusi)** setelah penemuan Penisilin. Ini membuat teologinya terasa menakutkan sekaligus modern.

### Kekuatan Kebebasan Manusiawi
Klimaks resolusinya tidak membutuhkan ledakan nuklir rohani yang merusak langit. Adam Young menghentikan datangnya Lucifer hanya dengan kekeraskepalaan kekanak-kanakannya, mematahkan rancangan dewa karena ia memiliki rasa kepemilikan mendalam terhadap bumi manusia yang tidak sempurna ini. Sebuah seruan menghibur namun beresonansi kuat bahwa masa depan kita tidak didikte oleh nubuat kuno atau rencana langit, melainkan oleh keputusan kehendak bebas sederhana dari umat manusia itu sendiri.`
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publishYear: 1979,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Hitchhiker's+Guide",
    theGood: "Manifestasi komedi *absurdisme* sci-fi terlucu sepanjang masa. Menggunakan ledakan bumi sebagai batu loncatan lelucon *British humor* yang cerdas tiada tara.",
    theBad: "Karena diadaptasi dari seri drama radio yang episodik, laju cerita novel ini kadang melompat patah-patah tanpa alur kohesif yang terpusat secara rapi.",
    review: `### Kehancuran Bumi yang Membosankan
Buku ini dibuka dengan sebuah tragedi masif namun dinarasikan dengan nada laporan dinas sipil yang bosan: Bumi diledakkan menjadi abu oleh armada alien birokratis *Vogon* murni karena tata surya kita menghalangi proyek pembangunan jalan tol intergalaksi. Kita mengikuti manusia bumi yang tersisa, Arthur Dent, seorang pria Inggris pasif yang hanya mengenakan piyama dan *bathrobe*, yang berhasil menumpang kapal ruang angkasa (*hitchhike*) secara acak bersama sahabatnya Ford Prefect—yang ternyata bukan aktor pengangguran, melainkan peneliti lapangan *alien* untuk ensiklopedia digital, *The Hitchhiker's Guide to the Galaxy*.

### Buku Panduan dan "Don't Panic"
Kecerdasan Douglas Adams melampaui waktu. Buku panduan elektronik fiktif tersebut (yang tertulis frasa raksasa menenangkan: **"DON'T PANIC"** pada sampulnya) merupakan peramalan akurat yang brilian akan kebangkitan Wikipedia, iPad, dan internet 30 tahun sebelum mereka ada. Melalui entri-entri komikal di dalam buku panduan tersebut, Adams menyelipkan sindiran sosial mengenai politik, puisi alien terburuk di alam semesta, hingga instruksi betapa pentingnya selalu membawa **handuk** (*towel*) jika ingin selamat dalam perjalanan luar angkasa.

> "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move." — *Douglas Adams*

---

### Marivn si Android Depresi
Pusat pesona fiksi ilmiah buku ini diisi oleh pemeran pendukung alien eksentrik, mulai dari Zaphod Beeblebrox (Presiden Galaksi narsistik berkepala dua) hingga yang terpenting: **Marvin the Paranoid Android**. Marvin memiliki kapasitas memori sebesar planet dan otak puluhan kali lebih cerdas dari ras penciptanya, namun ironisnya, ia ditugaskan untuk sekadar membuka pintu otomatis. Marvin adalah ejekan Adams mengenai keputusasaan kesadaran buatan (AI) yang bosan dengan ras manusia penciptanya sendiri yang lebih bodoh dari dirinya.

### Jawaban Absolut: 42
Sumbangan terbesar novel ini pada budaya *pop-nerd* modern adalah lelucon filosofisnya tentang pertanyaan makna hidup. Dalam kilas balik ceritanya, sebuah superkomputer purba yang maha-cerdas (*Deep Thought*) selama 7,5 juta tahun memproses pertanyaan tentang *"Life, the Universe, and Everything."* Jawaban pamungkas (dan tidak memuaskan) yang diberikan komputer itu adalah **42**. Lelucon Adams menohok pencarian manusia yang berlebihan atas misteri eksistensial, menyiratkan bahwa masalah terbesar kita bukan terletak pada ketiadaan jawaban, melainkan karena kita sendiri sebenarnya tidak tahu pertanyaan bodoh apa yang sedang kita tanyakan.

### Menyelami Nihilisme Komedi Kosmik
Sepanjang tur angkasa yang dipenuhi misil paus sperma jatuh dan generator Probabilitas Tak Terhingga, Arthur Dent pada akhirnya dipaksa untuk sadar bahwa kekhawatiran domestiknya di bumi tidak ada artinya pada skala kosmik. Adams memberikan rasa lega melalui nihilisme murni: jika alam semesta terlalu aneh dan tidak rasional, dan peradaban bumi benar-benar hanya sebuah eksperimen bodoh yang telah meledak, cara paling waras untuk menavigasinya hanyalah menyalakan mesin improbabilitas, minum segelas bir, dan menikmatinya.`
  },
  {
    title: "The Name of the Rose",
    author: "Umberto Eco",
    publishYear: 1980,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Name+of+Rose",
    theGood: "Kombinasi luar biasa dari misteri pembunuhan ala Sherlock Holmes klasik yang dibungkus dengan debat intelektual teologis, semiotika, dan filologi abad pertengahan yang mendalam.",
    theBad: "Digresi filosofis panjang yang berlebihan (hingga belasan halaman hanya untuk membahas teologi kemiskinan Fransiskan) akan mengusir pembaca yang hanya menginginkan *thriller* pembunuhan biasa.",
    review: `### Latar Biara Abad Pertengahan yang Mencekam
Ditulis oleh seorang filsuf dan profesor semiotika, Umberto Eco merancang novel ini (*Il nome della rosa*) layaknya sebuah labirin arsitektur abad pertengahan tulen. Berlatar pada musim dingin tahun 1327 di sebuah biara Benediktin misterius di pegunungan Italia utara, kita mengikuti kedatangan William of Baskerville, seorang pendeta sekaligus inkuisitor Fransiskan (yang sengaja dinamai berdasarkan karakter detektif Sherlock). Bukannya melakukan kunjungan diplomatik damai, William dan murid remajanya, Adso dari Melk, dipaksa turun tangan memecahkan serangkaian kematian rahib mengerikan yang mayatnya menyerupai ramalan darah kiamat di Kitab Wahyu.

### Tiraninya Perpustakaan Labirin
Episentrum dari pembunuhan misterius tersebut bermuara pada perpustakaan utama biara yang tertutup rapat dari akses laity dan rahib biasa—sebuah ruangan labirin cermin yang didesain untuk menyembunyikan manuskrip kuno. Eco menggunakan perpustakaan sebagai simbol *hoarding* (penimbunan) kekuasaan intelektual oleh institusi gereja purba. Pengetahuan tidak dianggap sebagai kebebasan yang harus disebarkan, tetapi dipandang murni sebagai pusaka berbahaya (*dangerous artifact*) yang sangat kuat, yang harus dirahasiakan rapat-rapat atau dihancurkan jika menantang dogma teologi Vatikan.

> "Books are not made to be believed, but to be subjected to inquiry." — *William of Baskerville*

---

### Perang Melawan Tawa (*The Power of Laughter*)
Intrik detektif yang cerdik pada akhirnya bermuara pada sebuah perdebatan filosofis ideologis mematikan antara William dan Jorge of Burgos (pendeta buta fanatik penjaga rahasia). Objek pembunuhan bukanlah artefak emas, melainkan sebuah gulungan komedi filsafat Yunani milik Aristoteles mengenai **Tawa** (*Comedy*). Jorge membunuh para pendeta secara brutal karena percaya bahwa kebebasan tertawa dapat menghilangkan rasa takut di dalam diri kaum tani rendahan. Jika rasa takut manusia terhadap Tuhan lenyap akibat komedi logika dan satire (tertawa), maka tatanan kekuasaan absolut gereja akan hancur seketika. 

### Semiotika Penyelidikan
Apa yang membuat narasi William bersinar adalah penolakannya terhadap campur tangan hal supranatural. Saat semua biarawan fanatik dan inkuisitor dari kepausan (seperti Bernard Gui) dengan mudah menyalahkan pengaruh sihir setan atau sihir gelap wanita desa sebagai dalang pembunuhan demi membakar orang sesat, William menggunakan murni logika *deduksi semiotika*—membaca jejak kaki di salju, simbol di buku, racun tanaman, dan letak arsitektur angin. Eco mempertemukan rasionalitas empiris (ilmu modern masa depan) untuk mendobrak pintu tahayul masa kegelapan.

### Sebuah Tragedi Abu Pengetahuan
Klimaks spektakuler biara yang ditelan kobaran api hingga runtuh pada akhirnya menyajikan renungan pahit Adso tua (sang narator). Kita dibuat sadar akan kerentanan sejarah literatur manusia, di mana manuskrip mahakarya kebijaksanaan purba telah banyak yang hangus abadi di dunia yang terbakar oleh fanatisme beragama. Buku Eco menantang kemapanan absolut, meningatkan agar selalu awas dan curiga terhadap orang tua bijak yang mengaku mengetahui dan berhak memegang kendali atas "Satu Kebenaran Sejati".`
  },
  {
    title: "The Joy Luck Club",
    author: "Amy Tan",
    publishYear: 1989,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Joy+Luck+Club",
    theGood: "Eksplorasi struktural 16 cerita yang menjalin konflik emosional, komunikasi patah, dan rasa bersalah lintas generasi (ibu dan anak) antara imigran Tiongkok dan putri mereka yang lahir di Amerika.",
    theBad: "Struktur multi-karakternya (empat ibu, empat putri) kadang terasa berantakan dan membingungkan karena suara narasi mereka kadang berpadu tanpa diferensiasi gaya bicara yang kuat.",
    review: `### Empat Sudut Meja Mahjong
Buku ini dimulai setelah kematian Suyuan Woo, salah satu pendiri *The Joy Luck Club*, sebuah klub arisan mahjong empat imigran wanita lansia asal Tiongkok di San Francisco. Putri Suyuan, June, diminta menempati bangku ibunya di meja judi tersebut. Melalui bingkai permainan ubin mahjong ini, novel secara bergiliran (*vignettes*) mengungkap trauma masa lalu masing-masing keempat ibu (Suyuan, An-mei, Lindo, dan Ying-ying) yang ditinggalkan di daratan perang Tiongkok kuno, lalu dipantulkan secara menyakitkan dengan narasi keempat putri Amerika mereka yang modern, independen, tetapi sangat hampa secara emosional.

### Terjemahan Trauma yang Hilang
Jantung berdenyut *The Joy Luck Club* berdetak pada tragedi miskomunikasi dua alam. Para ibu yang selamat dari penindasan poligami, pembunuhan feodal, dan kelaparan perang masa lalu menaruh beban ekspektasi ganda yang tak realistis pada pundak para putrinya (harus jenius secara Amerika, namun memiliki ketaatan pasif layaknya tradisi *filial piety* Konfusius murni). Sementara itu, para putri secara naif menganggap ibu mereka hanyalah pendatang bodoh dengan bahasa Inggris rongsok, sama sekali tidak menyadari bahwa ibu mereka pernah menelan peluru trauma dan darah agar nyawa putri mereka kelak bisa lahir bebas dari tradisi keji masa lampau.

> "A mother is best. A mother knows what is inside you... A girl is like a young tree. You must stand tall and listen to your mother standing next to you. That is the only way to grow strong and straight." — *Amy Tan*

---

### Kekuatan Harimau dan Naga Batin
Secara halus, Amy Tan membongkar perjuangan identitas sang putri (Generasi Kedua) yang bergulat mempertahankan independensi asmara modern mereka, yang mana terus menerus dikritik secara kejam namun penuh cinta oleh ibunya. Dalam kisah Lindo dan Waverly, sang ibu melatih putrinya menjadi pemain catur juara dengan menggunakan trik psikologis *Tiongkok tak terlihat* (*invisible strength*). Namun ketika Waverly mencoba menggunakan strategi taktis yang sama melawan ibunya yang dominan demi kebebasan mandirinya, ia menyadari ibunya bukanlah musuh catur papan, melainkan harimau yang menderita jika ditusuk dari belakang oleh keturunannya.

### Menghancurkan Mitos Keberhasilan Amerika
Novel ini tidak sekadar glorifikasi *American Dream*. Ia menggali dengan kejam harga bayaran dan tumbal budaya dari imigrasi itu sendiri. Ketika keempat putri ini sukses, kaya, dinikahi pria kulit putih mapan, dan tinggal di apartemen arsitektur rapi, mereka pada akhirnya menghadapi kekalahan dan alienasi total dalam asmara karena memotong akar asal-usul nenek moyangnya. Mereka dipaksa kembali mendengarkan nyanyian hantu sang ibu, mengambil tulang dan semangat harimau Tiongkok kuno yang ditolak, untuk melawan dominasi para suami Amerika mereka yang pasif-agresif.

### Melintasi Jembatan Genetik
Konklusi reuni di Shanghai (sebagai pemenuhan resolusi perjalanan sang ibu yang meninggal) menyodorkan air mata epifani katarsis. Buku ini menjahit kembali jahitan yang sebelumnya koyak: menyatakan bahwa pada akhirnya darah, anatomi rahang wajah, dan warisan cinta para wanita ini saling berkaitan tak terpisahkan dalam biologi ganda. *The Joy Luck Club* mengukuhkan diri sebagai literatur fundamental tentang migrasi kebudayaan rasial dan beratnya memikul trauma ibunda ke negeri asing.`
  },
  {
    title: "A Tree Grows in Brooklyn",
    author: "Betty Smith",
    publishYear: 1943,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Tree+Grows",
    theGood: "Kisah *Coming-of-Age* paling otentik tentang kemiskinan dan kelaparan anak perempuan di Amerika era awal 1900-an yang murni, lembut, tanpa melodramatis palsu.",
    theBad: "Cenderung berjalan linier dan episodik seperti bacaan diari harian. Beberapa plot point sekunder dan akhir ceritanya agak mudah tertebak dan pasif.",
    review: `### Simbolisme Pohon Langit Brooklyn
Di daerah kumuh Williamsburg, Brooklyn era 1912, tumbuh sebuah pohon ilalang tak kenal lelah (*Tree of Heaven*) dari celah beton halaman belakang rumah susun yang disesaki sampah. Karakter utama kisah ini, Francie Nolan—seorang gadis cilik pendiam yang lebih suka bersembunyi membaca buku perpusatakaan pinjaman di koridor darurat api—adalah personifikasi absolut dari pohon ini. *A Tree Grows in Brooklyn* adalah sebuah autobiografi menyentuh hati mengenai seorang anak imigran yang kelaparan akan pengetahuan, kehangatan asmara, dan harga diri, yang melawan dengan tekad berakar untuk selamat dari iklim degradasi kemiskinan paling gersang di New York.

### Dualisme Orang Tua yang Menyayat Hati
Kekuatan emosional sentral novel datang dari observasi dewasa Betty Smith mengenai ketidaksempurnaan moral orang tua. Ayah Francie, Johnny Nolan, adalah pria Irlandia berhati emas dengan suara penyanyi opera menawan yang mengasihi anak-anaknya secara sangat murni—namun nyaris secara harfiah membunuh mereka karena ia adalah seorang pemabuk pasif tanpa ampun yang secara kronis membuang seluruh gaji pelayannya untuk alkohol. Di sisi lain, ibu Francie, Katie Nolan, adalah pilar baja tanpa belas kasih di keluarga itu, bekerja secara hancur-hancuran mengepel lantai rumah susun hingga tangannya pecah berdarah. Katie keras dan bersikap dingin, karena ia sadar cinta yang lunak akan membuat anak-anaknya ditelan jalanan kumuh tersebut.

> "Dear God, let me be something every minute of every hour of my life." — *Francie Nolan*

---

### Pelarian melalui Sastra (Eskapisme)
Daya magis Francie Nolan adalah ia menolak membiarkan kemiskinan menghancurkan sisi keajaiban matanya. Dalam rutinitas membosankan membeli kopi yang dituang susu bekas, ia mendatangi perpustakaan kotor setempat dan menyusun strategi membaca seluruh koleksi literatur abjad demi abjad. Sastra bukan sekadar bahan pamer pendidikan bagi Francie; sastra murni menjadi jendela kaca darurat yang secara vital memungkinkannya mengintip realitas kota dan dunia lain, menjaga api jiwanya tetap utuh meskipun ia hanya duduk di tumpukan koran bekas yang membusuk di sudut tangga rumah susunnya.

### Penolakan Amal dan Penemuan Harga Diri
Bagian paling mencekam mengenai pengisahan kemiskinan di sini adalah keteguhan hati kaum marginal. Di tengah musim dingin saat makanan harian hanyalah roti basi direndam cuka manis, keluarga Nolan secara obsesif merahasiakan kelaparan mereka dari pekerja amal kota. Harga diri kelas pekerja menjadi kompas moral dan tulang punggung martabat mereka. Betty Smith mengingatkan dunia bahwa menghargai keindahan perayaan hal-hal kecil (seperti memiliki koin ekstra satu *penny* atau bunga liar kecil di jendela aspal) jauh lebih kaya ketimbang amal elitis.

### Menuju Harapan Pendidikan yang Pahit
Ujung narasi novel bukanlah keberhasilan materialistis mendadak yang dangkal, melainkan murni soal kesempatan pendidikan. Francie pada akhirnya dikorbankan untuk pergi menambal ekonomi keluarga, putus sekolah menengah demi bekerja menyortir koran sehingga adik laki-lakinya (anak kesayangan sang Ibu) mendapatkan peluang pendidikan. Kendati demikian, buku ini menegaskan bahwa daya tahan pohon gersang (karakter Francie) akan selalu menyusup kembali mencari jalan cahaya matahari masa depan lewat kekuatan kecerdasannya sendiri yang diam-diam menyala membara. Bacaan *Coming-of-Age* mutlak bagi mereka yang patah arang.`
  },
  {
    title: "The Outsiders",
    author: "S.E. Hinton",
    publishYear: 1967,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Outsiders",
    theGood: "Karya literatur *Young Adult* (YA) tulen yang memelopori genre gang anak muda penuh gejolak. Kekuatan ikatan persaudaraan *found-family* sangat tulus di tengah brutalnya persaingan kelas.",
    theBad: "Karakterisasinya sering sangat *melodramatic* (air mata pemuda remaja) dan dialog antar gang sering kali masih terdengar kaku atau *angsty* ala opera sabun zaman 60-an.",
    review: `### Kelahiran Sastra Remaja Realistik
Susan Eloise Hinton masih remaja berusia lima belas tahun dan bosan dengan fiksi romansa kuda poni dan ksatria dangkal yang disodorkan kepada generasi anak SMA Amerika di era 1960-an. Dengan darah *angst*, ia kemudian menelurkan mahakarya abadi *The Outsiders*. Menggunakan latar jalanan kumuh Tulsa di Oklahoma, novel ini meludahi idealisme palsu ala *American Dream* dengan mendeklarasikan perang kelas yang kasar, membelah anak muda secara tegas menjadi dua pihak secara ekonomi absolut: kaum kaya raya (*The Socs* yang membawa Ford Mustang) melawan anak kumuh marginal (*The Greasers* berambut klimis berminyak).

### Dinamika Keluarga Kumuh (The Greasers)
Cerita diceritakan melalui perspektif Ponyboy Curtis yang berusia 14 tahun. Alih-alih stereotip jahat, Ponyboy dicirikan sebagai remaja sensitif, penulis yang berbakat, suka membaca novel epik perang, serta gemar merenungkan warna jingga langit senja. Namun, karena nasibnya tinggal di kawasan *East Side* bersama dua kakak yatim piatu-nya (Darry dan Sodapop) serta kawan satu gang sosiopat pelindungnya seperti Dallas Winston yang baru pulang asrama tahanan, Ponyboy dipaksa memasukkan dirinya ke dalam kultur kekerasan geng berdarah-darah untuk sekadar mendapatkan lapisan keamanan proteksi keluarga pengganti (*found family*).

> "Stay gold, Ponyboy, stay gold." — *Johnny Cade*

---

### Menusuk Jantung Privilese Kelas (The Socs)
Momen epifani narasi buku ini pecah sewaktu tragedi mematikan terjadi saat Ponyboy diserang dan Johnny Cade terpaksa menikam pemuda Socs mabuk sampai mati untuk menyelamatkan nyawa sahabatnya. Pelarian buronan di gereja kosong dan diskusi intelektual mereka mengenai persamaan di bawah langit malam menegaskan gagasan bahwa rasa sakit menembus dompet kelas manapun. Ponyboy memegang epifani besar setelah berbincang dengan Cherry Valance (perempuan kelas atas *Socs*): *"Things are rough all over."* Kemewahan finansial tidak membeli stabilitas kedamaian emosi bagi elit kaya raya, karena orang tua mereka yang terbuai korporasi sama-sama menelantarkan dan tidak pernah menetapkan batasan moral, menjebloskan pemuda borjuis itu pada kekerasan tanpa makna. 

### Penebusan Sang Penyintas Marginal
Klimaks yang dibakar emosi dalam terbakarnya gereja demi menyelamatkan belasan anak sekolah dari api mengembalikan kaum *Greasers* (sampah masyarakat) menjadi sosok yang setara pahlawan perang, memberikan pembaca rasa kepuasan akan penebusan. Tragedi kematian Johnny dan keputusasaan bunuh diri Dallas yang sangat pasrah karena kehilangan figur polos di gangnya murni menangkap esensi trauma kesedihan murni pemuda jalanan tanpa intervensi polisi.

### Kertas Emas yang Tertinggal
Referensi besar Hinton kepada puisi *Nothing Gold Can Stay* dari Robert Frost (*"Stay gold, Ponyboy"*) mendesak sebuah generasi penjahat muda yang terhempas pada roda kekerasan kemiskinan struktural, agar tetap mempertahankan lapisan rasa ingin tahu, empati kemurnian, dan imajinasi mereka pada dunia ini. Surat pena yang dibubuhkan Ponyboy pada tugas bahasa Inggrisnya menutup lingkar kisah kekerasan ini dengan manifesto artistik bahwa seni dapat menyelamatkan jalanan gang tergelap dari perpecahan ras.`
  },
  {
    title: "Slapstick",
    author: "Kurt Vonnegut",
    publishYear: 1976,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Slapstick",
    theGood: "Konsep utopia keluarga artifisial Vonnegut sangat unik dan brilian untuk mengatasi kesepian massal. Mengalir dengan humor melankolis eksentrik ciri khas pengarang secara absolut.",
    theBad: "Secara struktur kurang berbobot dibandingkan raksasa klasiknya (*Slaughterhouse-Five* atau *Cat's Cradle*). Terasa lebih menyerupai curahan hati pengarang secara emosional pribadi.",
    review: `### Prolog Melankolis untuk Sepasang Kera
Sebelum Anda menyelam ke paruh awal fiksi ilmiahnya, pendahuluan *Slapstick, or Lonesome No More!* yang sepenuhnya autobiografis secara telanjang menyingkap hati Kurt Vonnegut kepada para pembacanya. Ia mendedikasikan novel absurd ini untuk memproses duka pribadinya usai saudari satu-satunya, Alice, meninggal perlahan akibat kanker. Vonnegut menyatakan secara harfiah bahwa fiksi komedinya (*slapstick*) ini hanyalah lelucon komikal teater sepasang badut malang—seperti film dagelan tua *Laurel and Hardy*—di mana umat manusia secara konstan tersandung masalah mengerikan tanpa penjelasan rasional dan diselamatkan oleh empati bodoh persaudaraan.

### Monster Kembar yang Jenius
Masuk ke ceritanya, narator Wilbur Swain adalah mantan Presiden terakhir Amerika Serikat dari reruntuhan apokaliptik pasca kehancuran misterius (wabah, flu mikroba mini, dan berubah drastisnya gaya gravitasi bumi secara konstan harian). Ia menceritakan sejarah asalnya sebagai anak kembar identik bersama saudarinya Eliza, yang mana terlahir difabel (*mutant*) setinggi kera neanderthal yang menjijikkan bagi kedua orang tua ningrat mereka. Namun secara ajaib, saat dua kembar diisolasi dan menempelkan fisik serta telepati otak mereka bersama di ruangan, mereka bergabung bak membentuk super-komputer kosmis raksasa memecahkan misteri genetik evolusioner alam semesta paling rumit sepanjang sejarah manusia.

> "Love is where you find it. I think it is foolish to go looking for it, and I think it can often be poisonous. I wish that people who are conventionally supposed to love each other would say to each other, when they fight, 'Please - a little less love, and a little more common decency'." — *Kurt Vonnegut*

---

### Deklarasi Kebenaran Anti-Cinta Romantis
Eksperimen Vonnegut pada sentimen kasih sayang (*love*) terasa sangat kontradiktif. Vonnegut menertawakan kecanduan budaya Amerika perihal ilusi "Cinta Sejati". Wilbur secara lantang menyebut cinta adalah gagasan bodoh yang sering merusak, menyakitkan, dan tidak realistis bagi kaum lansia papa. Apa yang jauh lebih penting dari *"Love"* menurutnya hanyalah: **Common Decency** (Kesopanan, kepantasan saling menghormati dalam kemalangan). Di reruntuhan Manhatann ini, Vonnegut merayakan kedermawanan saling toleransi dibandingkan omong kosong emosi membara yang sering merusak.

### Proyek Kesepian Global dan Marga Palsu
Titik penemuan sosiologis terbaik novel tertanam dalam skema kampanye kepresidenan Wilbur, di bawah slogannya **"Lonesome No More!"** (Tak Ada Kesepian Lagi!). Karena Vonnegut menyadari bahwa runtuhnya budaya tradisi marga klan keluarga luas telah membuahkan pandemik keputusasaan depresi lansia di masyarakat Barat pinggiran, pemerintahan Amerika menerbitkan kebijakan artifisial raksasa untuk menghancurkan kesepian. Wilbur memberikan setiap penduduk kode angka dan nama hewan (seperti *Daffodil-11*, *Chipmunk-9*), memastikan setiap manusia di jalanan akan otomatis menemukan "kerabat sedarah jauh buatan" yang wajib mereka tolong secara ekonomi bila bertemu kelaparan. Ini komedi murni fiksi, namun solusinya sangat teoretis manis. 

### Epilog Tragedi Dagelan Bumi Tumpul
Saat gravitasi bumi terus fluktuatif (*Heavy Gravity Days*) meremukkan badan-badan pemukim lansia New York yang dipimpin oleh sang Raja Manhattan dengan menunggangi liliput alien China purba raksasa di bawah reruntuhan lobi hotel, tawa pembaca tersedak empedu kepedihan eksistensial. *Slapstick* beroperasi bukan melalui kepahlawanan revolusi, namun pengakuan bahwa akhir spesies manusia ini sangat tragikomikal absurd; di mana saudara kembar jiwa dan empati persaudaraan fiktif adalah kompas harapan pasrah satu-satunya di galaksi amoral.`
  },
  {
    title: "Cat's Cradle",
    author: "Kurt Vonnegut",
    publishYear: 1963,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Cat's+Cradle",
    theGood: "Karya monumental Vonnegut dengan tempo kilat 120+ bab mini, memberikan tebasan satir tajam absolut terhadap penemuan Bom Atom, kegilaan dogmatis Agama, dan arogansi Sains buta etika.",
    theBad: "Struktur komedi nihilismenya yang terlalu pesimis mengenai kebodohan murni umat manusia mungkin akan merusak harapan bagi mereka yang menjunjung rasionalisme era Pencerahan murni.",
    review: `### Perburuan Buku Akhir Zaman
*Cat's Cradle* diawali ketika John, seorang jurnalis *freelance* biasa yang polos, berusaha mengumpulkan wawancara literatur keseharian untuk buku non-fiksi terbarunya ("*The Day the World Ended*"). John menelusuri kegiatan apa saja yang dilakukan warga biasa pada waktu bersejarah pemboman atom di Hiroshima. Investigasinya ini berpusat pada penelusuran sejarah sang pencipta Bom Atom fiktif di novel ini—dr. Felix Hoenikker, figur parodi campuran ilmuwan asli *Manhattan Project* Robert Oppenheimer, yang digambarkan vonnegut bukan sebagai penjahat sosiopat, malainkan penderita autisme sosial jenius tinggi di mana ia melihat bom nuklir penghancur ribuan nyawa tak lebih penting dari sekadar mainan fisika eksperimen tali paku *cat's cradle*.

### Kepolosan Intelektual dan Ice-Nine
Kengerian di buku ini adalah ketika John menjejaki warisan mematikan Felix Hoenikker yang dibagi kepada ketiga anaknya yang sama-sama egoistik (Angela, Frank, Newt). Ternyata, Felix pada ranjang kematiannya telah menyempurnakan bentuk kristalisasi anomali molekuler bernama materi **Ice-Nine**, bahan kecil beracun mematikan yang apabila menyentuh satu zat molekul air (*H2O*), ia dapat membekukan solid secara berantai selamanya, hingga lautan samudera perairan dunia macet total. Ini adalah cerminan ketakutan fatal *Cold War* di mana umat manusia secara tak sadar membekukan kematian bumi di dalam laci rak kamar demi kemewahan kekuasaan sesaat.

> "Science has now known sin... What is sin?" — *Dr. Felix Hoenikker*

---

### Agama Fiktif Bokononisme 
Di saat paruh kedua novel berpindah landasan menuju pulau pisang tirani Karibia (San Lorenzo) yang terpencil, Vonnegut menyemburkan kecemerlangan inovasi literatur ciptaannya yang tak masuk akal bernama agama **Bokononisme**. Agamanya dibuat oleh figur karismatik Bokonon secara sadar dengan kebohongan manis *(foma)* yang secara sukarela diyakini penduduknya karena realita hidup di pulau mlarat itu kelewat mencekik. Praktik *boko-maru*—menempelkan dan menggosok telapak kaki bersama dengan jemaat kawan lain sebagai pelukan jiwa kemerdekaan—merupakan satire kejam fiktif namun jauh lebih nyaman di hati daripada ritual teologi formal modern gereja duniawi Barat.

### Pesta Pemusnahan Konyol
Kiamat bumi Ice-Nine tidak didorong pelatuk oleh peperangan elit negara adidaya atau konspirasi raksasa Illuminati, melainkan dikunci oleh kebodohan (*accident*) sirkus konyol semata. Pesawat pahlawan perang yang terbakar menabrak istana pemimpin pulau diktator (*Papa Monzano*), secara absurd menjatuhkan tabung botol air mayat Ice-nine ke lepas samudera laut biru di bawahnya. Bumi secara instan diam tak bernapas, langit mendung terkunci, dan bumi terhukum kiamat sunyi putih dingin.

### Patung Terakhir Kesombongan Kemanusiaan
John sang penyintas pasif dan sisa umat religius pulau akhirnya menamatkan kitab ramalan Bokonon di puncak reruntuhan benua es dunia dengan perlakuan *dark comedy*. Jika dewa-dewa tertawa dari atas surga, Bokononisme menyarankan John untuk mengakhiri nasib manusia bukan dengan drama meronta pertobatan, tetapi berpose mengangkat batu cadas raksasa membeku dan menyeringai tengadah tertawa pasrah melihat kesombongan bodoh sains ke langit. Sebuah dekonstruksi mahakarya bahwa kemajuan intelektual raksasa tanpa jangkar kompas etis kepedulian adalah naskah kiamat terbodoh yang manusia rekayasa.`
  },
  {
    title: "Sula",
    author: "Toni Morrison",
    publishYear: 1973,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Sula",
    theGood: "Pembongkaran kompleks absolut tentang persahabatan wanita kulit hitam (*sisterhood*). Sula adalah perwujudan anti-hero (*pariah*) paling memikat dan membebaskan di seluruh ranah literatur pasca-kolonial Amerika.",
    theBad: "Tidak mempedulikan pelipur lara (*closure*) bagi moralitas klasikal. Membakar tatanan dengan rasa mual pengkhianatan tanpa belas kasihan pengampunan.",
    review: `### Kehancuran Bukit The Bottom
Toni Morrison merakit ranah novel ini di perbukitan miskin fiktif *The Bottom* (Ohio) antara Perang Dunia I hingga 1960-an—sebuah lokasi tanah ampas tebing di mana lelucon putih berabad lalu menyebutkan daerah lereng angin itu sebagai tanah subur *surga bawah* Tuhan. Fokus mikroskopik Morrison menelaah persahabatan sedarah sedari masa pra-puber dua gadis kulit hitam malang berkarakter oposisi biner: Nel Wright, sosok kompas moral suci yang pasrah dibentuk standar kesempurnaan ibu kulit hitam taat, dan Sula Peace, roh petir badai mematikan dengan warisan matriarkal rumah kumuh prostitusi dan kekacauan tak terbatas neneknya (Eva Peace yang membakar kaki anaknya sendiri demi klaim asuransi kebangkitan miskin).

### Insiden di Pinggir Sungai
Kesatuan rahasia psikologis murni (*soulmates*) antara Nel dan Sula dilas baja saat mereka berdua menyakiskan kecelakaan bermain gila anak tetangga kecil (Chicken Little) yang secara tidak sengaja terlempar mati di tengah aliran sungai dalam. Rasa diam pasif bersalah di antara remaja kecil itu membunuh batasan moralitas masa lalu mereka berdua. Mereka tumbuh remaja terpisah, Nel menelan identitas ke wanita penurut melahirkan anak di bawah perbudakan suami miskin, sedangkan Sula menolak tradisi desa, melarikan diri ke kota untuk belajar kuliah bebas seksual liar sebelum secara frontal kembali untuk menghancurkan kewarasan di desa asal purbanya.

> "Being good to somebody is just like being mean to somebody. Risky. You don't get nothing for it." — *Sula Peace*

---

### Peran Kritis Sosok Pariah 
Fase mematikan saat kepulangan asusila Sula yang memborbardir tradisi tabu persahabatan dengan sengaja tidur meniduri pria Jude (Suami Nel) dan mendeportasi neneknya ke panti jompo rongsok merupakan momen *trigger* kemunafikan warga perbukitan. Penduduk *The Bottom* secara fanatik melabeli Sula sebagai penjelmaan Iblis murni dan merapatkan solidaritas purba mereka (gereja mulai sering diisi, kekerasan dalam rumah berkurang, ibu-ibu mulai merawat keluarga) murni untuk melawan ancaman moral sang Wanita Jalang. Tanpa sadar, Morrison membuktikan fungsi iblis (Pariah) sesat amat dibutuhkan tatanan kota demi memberi cermin kekuatan moral bagi pendosa palsu lainnya. Sula mati secara arogan tertawa atas ego kesucian kota itu. 

### Tangisan Empati Kemerdekaan Identitas
Bab penutup buku (*The Epilogue*) merupakan tusukan puitis Toni Morrison di tengah reruntuhan beton kuburan usang. Di akhir hayat lansia Nel setelah beberapa puluh tahun kehilangan kawan liarnya, kebangkitan memori emosional menghancurkan batas kesucian pasif Nel ketika mengunjungi kuburannya. Nel secara bergidik menyadari selama 40 tahun lamanya ia berduka menangisi kepergian figur suaminya yang dirampas, melainkan sebetulnya murni menangisi lubang kehilangan sosok raksasa separuh belahan nyawanya (*Sula*), sosok gadis yang berani membiarkan pikirannya mandiri meledak dan bernapas tak peduli pandangan patriarki kota purba tersebut. 

### Narasi Ambiguitas Baik dan Buruk
Secara mempesona, *Sula* menantang seluruh batasan kategorikal manusia yang melabeli perempuan kulit hitam murni ke dalam pilar orang tua kudus pendendam yang baik atau *whore* penyihir pengkhianat yang merusak. Keduanya dapat bertukar identitas seketika saat dikhianati waktu. Mahakarya tipis Morrison (dibawah 200 halaman) merupakan ledakan literatur absolut mengenai eksperimentasi jiwa kebebasan penuh rasa syukur.`
  },
  {
    title: "Their Eyes Were Watching God",
    author: "Zora Neale Hurston",
    publishYear: 1937,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Their+Eyes",
    theGood: "Sebuah kemenangan literatur dialek Selatan Afro-Amerika yang puitis. Perjuangan radikal dan sensual feminisme seorang wanita kulit hitam marginal demi kemerdekaan suaranya di ranjang maupun di depan massa.",
    theBad: "Ditulis sepenuhnya dengan dialek fonetik regional murni, yang mana bisa membuat beberapa pembaca membutuhkan waktu pemanasan agak lama di sepuluh bab pertama untuk terbiasa membaca lisan *slang* tersebut.",
    review: `### Kembali Setelah Badai Ejekan
Novel magnum opus karya Zora Neale Hurston ini membuka panggung sinematiknya dengan kedatangan langkah kaki protagonis paruh bayanya, Janie Crawford, yang menyandang *overall* biru lusuh penuh debu kotor membelah jalan kembali ke *porch* rumahnya di daerah Eatonville, Florida (kota seluruh kulit hitam independen). Ia diiringi tajamnya tatapan bisik gosip rasis tetangga usil setelah kemisteriusan lenyap dan matinya asmara liar dengan pelacur (*Tea Cake*). Di teras balai-balai itulah narasi epik panjang pencerita (*frame narrative*) bergulir ketika Janie menuturkan kebebasan kisah petualangan 3 suaminya kepada kawannya Pheoby dengan ketidaktakutan harga diri absolut yang telah dilunasi dengan darah.

### Mitos Pohon Pir yang Mekar
Pada usia 16 tahun, epifani hasrat seksualitas eksistensial biologis Janie bangkit bersemi bagai mekarnya bunga buah pir emas (*pear tree*), di mana ia mendambakan sinkronisasi percumbuan penyatuan asmara emosional dari kaum tawon serbuk alam yang bergaung penuh gairah kehidupan suci. Namun sayangnya neneknya (Nanny) eks-budak, murni memaksakan perkawinan paksa Janie ke tangan pria tua mapan dengan pelindung 60 hektar tanah pertanian demi menebus sekadar proteksi kemerdekaan sipil budak purba dari kekerasan tuan kulit putih di luar pagar. 

> "There are years that ask questions and years that answer." — *Zora Neale Hurston*

---

### Menghancurkan Patung Sang Walikota Patriarki
Hurston dengan cerdas menggeser Janie membebaskan diri berlari merangkul suami keduanya, Jody Starks, figur megalomaniak politik kulit hitam mapan yang merintis kota Eatonville dari kayu usang hingga menjadi balai kota berlampu mewah. Sayangnya keanggunan ini menenggelamkan pita suara Janie karena Walikotanya mematung istrinya murni untuk pajangan boneka bodoh. Setelah memakan durasi pelecehan kebisuan selama belasan puluh tahun yang gersang di balik meja toko, momen kemerdekaan lidah sastra Janie yang membalas hinaan tumpul ego kelaki-lakian tua Jody di tengah khalayak massa adalah letusan feminisme radikal sastra abad 20 terkuat. 

### Penebusan Melalui Pria Bajingan (Tea Cake)
Kejeniusan sejati buku di paruh akhirnya dipelintir saat Hurston menabrak norma konservatif yang keras. Di puncak umur mapan kekayaannya sebagai janda berharga diri paska kematian walikota, Janie mencintai pengembara berandal perjudian 12 tahun yang lebih belia darinya (*Tea Cake*), membuang baju sutra janda mewahnya berlari kabur memetik kacang buncis berpeluh debu di rawa mematikan Everglades di pedesaan *muck* demi sekadar murni mengejar canda cinta murni egaliter, memancing bersama di danau sungai kotor penuh tertawa yang setara. 

### Menatap Kebesaran Ilahi
Klimaks badai apokaliptik topan Florida raksasa dan penyerangan serang rabies anjing di banjir merupakan kiamat epik sastra puitis (*"Their eyes were watching God"*). Ironi di ujung ceritanya, di mana Janie terpaksa berdiri sendirian menembak peluru mematikan asmara keong cinta hidupnya demi menunda krisis kewarasan penyakit rabies Tea Cake, memperkukuh status protagonis Hurston bukan lagi budak milik laki-laki mapan borjuis, melainkan ratu independensi murni yang telah turun ke alam dunia meremas kemerdekaannya penuh piala berkat air mata empati kesepian.`
  },
  {
    title: "Go Tell It on the Mountain",
    author: "James Baldwin",
    publishYear: 1953,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Go+Tell+It",
    theGood: "Autobiografi emosional semi-fiksi James Baldwin yang sangat membakar telinga dogma kekristenan gersang. Gaya penulisan berirama khotbah rohani (*homiletic*) ini bergemuruh luar biasa megah.",
    theBad: "Ekstrem padat dengan citra teologis kutukan alkitab hitam-putih dan retorika kejatuhan rohani, yang sering kali mendesak emosi kelam paranoia religius pembaca menuju tebing melelahkan.",
    review: `### Paranoia dan Suara Panggilan Harlem
Buku pertama pendobrak rasisme raksasa sastra James Baldwin membingkai novel di sekitar satu harinya ulang tahun gersang seorang remaja Harlem berusia empat belas tahun, John Grimes. Tumbuh dibesarkan dengan belenggu ketakutan absolut kutukan dosa neraka pada malam tahun 1930-an, John bergulat krisis paranoia pubertas homoseksualitas ras kulit hitam dan ancaman raksasa kutukan Ayah tiri Pendeta Gereja pantekosta fanatik *Temple of the Fire Baptized*, Gabriel Grimes. Novel *Go Tell It on the Mountain* bukanlah fiksi tentang jalanan gangster kulit hitam kota industri melainkan narasi ledakan pertarungan perebutan rohani roh psikologis anak yang hancur berkeping berkeping akibat ego kebencian ayah di balutan tirai suci amarah dogma mimbar alkitabiah.

### Refraksi Trauma Tiga Generasi
Kejeniusan utama buku Baldwin terletak pada arsitektur *flashback* ganda (kilas balik doa orang-orang tersiksa) di altar depan altar suci gereja tersebut. Seiring John meregang kerasukan di malam suci berguling meminta keselamatan dari histeria pengampunan suci, struktur buku diam-diam meledakkan kilasan masa lampau penuh genangan darah dosa dari sosok figur otoritas John: Bibinya (Florence) yang membenci arogansi religius palsu kulit hitam selatan purba, serta Ibu tertekan (Elizabeth) dan juga masa lampau kemunafikan kebinatangan Gabriel sendiri saat masih muda melakukan korupsi moral berselingkuh dan memperkosa masa lajang remajanya lalu bersembunyi dengan sombong menjadi pendeta Tuhan yang tidak pernah bisa mengasihi umatnya.

> "He had always been good. He knew that he was good. He knew that he was good because people had always told him so, and he had believed them." — *James Baldwin*

---

### Warisan Ras di Selatan dan Penindasan Emansipasi
Baldwin menyamarkan sosiologi dalam jubah jubah liturgis alkitab murni. Kemiskinan spiritual sang Ayah (Gabriel) berakar murni dari maskulinitas kelaki-lakian tertindas yang dikupas pasca pelecehan hukuman perbudakan brutal penguasa supremasi kulit putih *(White Man's dominance)* di tanah Selatan Amerika tempo dulu, mendorong pelarian imigran raksasa besar (*The Great Migration*) ke reruntuhan beton kota aspal keras utara Harlem New York City di mana Gabriel merekayasa kuasa ilahi kebrutalan gereja untuk menghukum dan menyiksa domba kecil istri lemah rumah tangga sendiri hanya demi meraih rasa superior fana.

### Pergumulan Debu Pertobatan 
Ketika klimaks *Threshing-Floor* mendesak raga murni John meronta debu kejang di altar mimbar gereja dalam sebuah trans kesurupan suara mistik, Baldwin menavigasi pertanyaan ambigu kelam: apakah keselamatan dan suara guntur suci pembebasan yang dirasakan gemetar bocah polos itu merupakan suara ilahi otentik keselamatan yang hakiki, atau sekedar manifestasi psikologis penyerahan insting bertahan diri memohon empati kasih sayang dan pelukan hangat kepada penindasan monster pria kejam ayahnya?

### Pelarian Identitas Subversif 
Buku brilian ini sukses menjadi landasan peluncur roket kritik sastrawan Baldwin menyongsong masa depan kesadaran seksual pembebasan ras kasta sosiologi yang merdeka. Pada saat pagi hari merekah menyingsing menerpa aspal kota sepi jalan raya pasca semalaman kebaktian, senyum misterius John yang tersenyum memberontak pada heningnya hari mengesahkan bahwa baptisan api sejati bukan merubah ia pasrah pasif menurut dogma gereja purba amoral ayah tirinya, melainkan mengesahkan kekuatannya bahwa roh jiwa otentisitas tubuh kotor dan murni umat manusia kulit hitam harus segera turun gunung membawa kabar keselamatan kemerdekaan sipil absolut mereka.`
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books BATCH 5 chunk 2 (12 books)...');
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
      console.log(`+ Added: ${book.title} (Batch 5 - Grand Essay)`);
    } else {
      console.log(`- Skipped (Exists): ${book.title}`);
    }
  }
  console.log(`Done. Added ${added} books (Batch 5, Chunk 2).`);
}

seedBatch().catch(console.error).finally(() => prisma.$disconnect());

const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "The Bell Jar",
    author: "Sylvia Plath",
    publishYear: 1963,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Bell+Jar",
    theGood: "Penggambaran depresi yang luar biasa akurat, mencekik, dan puitis. Metafora 'sungkup kaca' (bell jar) adalah salah satu penemuan sastra terhebat abad ke-20.",
    theBad: "Sangat kelam dan berpotensi memicu trauma psikologis (*triggering*), terutama mengingat akhir tragis kehidupan penulis aslinya tak lama setelah buku ini terbit.",
    review: `### Sinopsis & Keterasingan Feminin
*The Bell Jar* adalah satu-satunya novel yang pernah ditulis oleh penyair raksasa Sylvia Plath, dan berfungsi sebagai semi-otobiografi yang membara tentang penurunannya ke dalam depresi klinis. Protagonis kita, Esther Greenwood, adalah seorang mahasiswi cerdas yang memenangkan magang musim panas bergengsi di sebuah majalah mode di New York. Namun, di tengah hiruk-pikuk glamor kota metropolis, alih-alih merasa bersemangat, Esther merasa mati rasa, terputus, dan terasing secara mendalam dari ekspektasi masyarakat terhadap wanita muda di tahun 1950-an.

### Anatomi Depresi yang Mencekik
Kekuatan absolut dari novel ini terletak pada kemampuannya menerjemahkan penyakit mental yang tak kasat mata menjadi sensasi fisik yang mencekam bagi pembaca. Plath secara brilian memperkenalkan metafora *"The Bell Jar"* (sungkup kaca vakum laboratorium). Esther merasa seakan-akan ia terperangkap di bawah sungkup kaca tanpa udara, terpisah dari dunia luar oleh dinding kaca yang membengkokkan segala hal yang ia lihat menjadi sesuatu yang mengerikan dan menyimpang.

> "To the person in the bell jar, blank and stopped as a dead baby, the world itself is a bad dream." — *Sylvia Plath*

---

### Kritik Sosial terhadap Ekspektasi Gender
Di luar studi psikologis, *The Bell Jar* merupakan kritik feminis awal yang tajam terhadap hipokrisi Amerika pasca-perang. Esther merasa tercekik oleh dua jalur sempit yang ditawarkan kepadanya: menjadi ibu rumah tangga yang patuh membesarkan anak di pinggiran kota (kehilangan identitas intelektualnya), atau menjadi wanita karir lajang yang kesepian dan dianggap aneh. Metafora **pohon ara** yang terkenal—di mana ia melihat kemungkinan masa depannya bergelantungan seperti buah ara, namun ia tak bisa memilih satu pun hingga semuanya membusuk—menangkap *paralysis* eksistensial generasi wanita masa itu.

### Perawatan Psikiatris yang Brutal
Paruh kedua novel menyeret kita turun ke neraka institusi psikiatri era tersebut. Deskripsi Esther tentang **Terapi Kejut Listrik (ECT)** yang dilakukan secara ceroboh tanpa anestesi yang tepat adalah salah satu adegan paling mengerikan dalam sastra modern. Plath tidak menutupi kebrutalan medis yang sering kali digunakan bukan untuk "menyembuhkan" wanita, melainkan untuk menundukkan mereka kembali ke dalam kepatuhan sosial yang tenang.

### Kesimpulan yang Ambigu
Pada akhirnya, Esther memang mendapatkan kembali secercah kewarasan dan diizinkan keluar dari rumah sakit, sementara sungkup kacanya "diangkat tinggi-tinggi". Namun, novel ini ditutup dengan nada yang sangat berhati-hati dan rapuh. Tidak ada jaminan penyembuhan permanen; ancaman bahwa sungkup kaca itu bisa turun dan menjebaknya lagi sewaktu-waktu tetap menggantung. Ini adalah meditasi brilian, jujur, dan menghancurkan tentang fragilitas pikiran manusia.`
  },
  {
    title: "A Clockwork Orange",
    author: "Anthony Burgess",
    publishYear: 1962,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Clockwork+Orange",
    theGood: "Eksperimen bahasa buatan (*Nadsat*) yang memukau dan inovatif. Mempertanyakan batasan moralitas dan kebebasan memilih (*free will*) dengan kebrutalan yang jenius.",
    theBad: "Kekerasan fisik dan seksual di babak awal sangat eksplisit, amoral, dan sering kali membuat pembaca mual sebelum mereka mencapai titik filosofisnya.",
    review: `### Kebrutalan Pemuda Distopia
Dalam *A Clockwork Orange*, Anthony Burgess menciptakan sebuah distopia urban masa depan yang kelam dan dikuasai oleh kekerasan geng remaja. Kita mengikuti Alex, seorang sosiopat berusia 15 tahun, pemimpin geng (*droogs*) yang menghabiskan malam-malamnya meminum susu bercampur narkoba di *Korova Milkbar*, lalu turun ke jalan untuk melakukan aksi perampokan, pengeroyokan (*ultraviolence*), dan pemerkosaan. Alex sangat menakutkan karena kejahatannya sama sekali tidak bermotif sosial atau balas dendam; ia melakukannya murni untuk nilai estetika dan kesenangan yang ia sejajarkan dengan kecintaannya mendengarkan simfoni klasik Beethoven.

### Invasi Bahasa Nadsat
Hal pertama yang akan menyerang otak pembaca adalah bahasa buku ini. Burgess, seorang ahli linguistik, menciptakan bahasa *slang* fiktif bernama **Nadsat** (campuran bahasa Inggris, Rusia, dan *rhyming slang* Cockney). Meskipun pada awalnya membaca *Nadsat* terasa seperti memecahkan sandi yang membuat frustrasi, setelah beberapa bab, otak Anda akan tersinkronisasi. Penggunaan bahasa ini adalah pelindung brilian yang menjaga jarak psikologis pembaca dari kebrutalan tindakan Alex, membuat kengerian itu terasa surealis.

> "Is it better for a man to have chosen evil than to have good imposed upon him?" — *Anthony Burgess*

---

### Teknik Ludovico dan Perampasan Kehendak
Bagian paling penting dari novel ini terjadi ketika Alex ditangkap oleh negara dan dijadikan kelinci percobaan untuk *Ludovico Technique*, sebuah terapi kejut kejiwaan. Alex dipaksa menonton film-film kekerasan secara terus-menerus sementara matanya dijepit terbuka dan tubuhnya disuntik dengan obat mual. Tubuhnya dikondisikan untuk merasa sakit secara fisik setiap kali ia berniat melakukan kekerasan. Negara secara harfiah merampas kemampuan (*free will*) Alex untuk memilih kejahatan, menjadikannya robot yang patuh—sebuah "jeruk mekanik".

### Kritik Filosofis atas Kebaikan Paksaan
Di sinilah letak argumen moral paling fundamental dari Burgess. Negara merayakan Alex yang "sembuh" karena tingkat kejahatan turun. Namun, pastor penjara berargumen keras bahwa kebaikan yang dipaksakan bukanlah kebaikan sejati. Jika seorang manusia tidak memiliki kapasitas untuk memilih kejahatan, maka ia tidak lagi menjadi manusia melainkan sekadar mesin moralitas, yang secara filosofis lebih buruk dan lebih tirani daripada kekerasan sporadis Alex sendiri.

### Resolusi Kematangan (Bab 21)
Penting untuk dicatat bahwa versi asli Inggris memuat bab 21 (yang dihilangkan dalam rilis Amerika awal dan film Stanley Kubrick). Di bab terakhir ini, efek cuci otak Alex menghilang, namun ia mendapati dirinya mulai bosan dengan kekerasan karena ia perlahan **tumbuh dewasa**. Burgess menegaskan bahwa kejahatan remaja adalah fase perusak energi yang akan padam secara alami oleh kedewasaan, dan campur tangan tirani negara pada pikiran manusia selalu lebih keji daripada kejahatan individu.`
  },
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    publishYear: 1985,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Handmaid's+Tale",
    theGood: "Karya fiksi spekulatif feminis yang sangat tajam dan mengerikan. Peringatan tentang bagaimana hak asasi dapat dicabut dalam semalam atas nama tatanan agama.",
    theBad: "Ketidakberdayaan absolut sang tokoh utama mungkin membuat frustrasi beberapa pembaca yang mengharapkan narasi pemberontakan pahlawan aksi.",
    review: `### Runtuhnya Republik Sekuler
*The Handmaid's Tale* adalah pencapaian monumental dalam sastra distopia yang kedudukannya setara dengan *1984*. Margaret Atwood meletakkan kisahnya di Republik Gilead, sebuah rezim teokrasi Kristen totaliter yang menggulingkan pemerintahan Amerika Serikat menyusul krisis infertilitas global akibat polusi dan radiasi. Atwood merancang sebuah sistem kasta kaku di mana wanita dilucuti hak asasinya dalam semalam: mereka tidak boleh membaca, bekerja, memiliki properti, atau mengatur uang mereka sendiri.

### Komodifikasi Tubuh Wanita
Narator kita, Offred (yang berarti *Of Fred*, menandakan ia adalah properti dari Komandannya), berada di kasta *Handmaid* (Pelayan Wanita). Karena ia masih subur, tugas satu-satunya adalah melakukan ritual pemerkosaan bulanan yang disahkan oleh tafsir fanatik Alkitab demi memberikan anak bagi istri Komandan yang mandul. Atwood mengeksplorasi dengan sangat detail bagaimana tubuh wanita direduksi secara mekanis menjadi sekadar "wadah berjalan" atau inkubator berjalur dua.

> "Better never means better for everyone... It always means worse, for some." — *The Commander*

---

### Kekuatan Detail Sehari-hari
Atwood dengan sengaja tidak berfokus pada perang skala besar atau politik internasional Gilead. Horor sejati dalam novel ini ditenun melalui detail-detail domestik yang banal dan membosankan: rasa sabun tanpa aroma di kamar mandi, ketegangan tatapan mata saat berbelanja bahan makanan (*Tokens*), atau ketakutan absolut saat melihat mobil van hitam *The Eyes* (polisi rahasia) menangkap seseorang di jalan raya. Keheningan pasif inilah yang membuat terornya terasa sangat intim.

### Tidak Ada yang Baru di Bawah Matahari
Hal yang paling menakutkan dari *The Handmaid's Tale* adalah aturan ketat yang ditetapkan Atwood saat menulisnya: **ia tidak memasukkan satu pun kekejaman di dalam buku yang belum pernah benar-benar dilakukan manusia di suatu tempat dalam sejarah nyata**. Pengendalian rahim, eksekusi di tembok publik, penggunaan seragam kasta—semuanya ditarik dari sejarah fasisme, perbudakan Amerika, dan rezim teokratis dunia nyata. Ini bukan fiksi ilmiah murni; ini adalah kompilasi sejarah.

### Epilog Metafiksi yang Jenius
Bab terakhir buku ini sering diabaikan namun merupakan pukulan telak. Narasi melompat ratusan tahun ke masa depan dalam sebuah konferensi sejarah di mana para akademisi menganalisis *kaset audio kuno* milik Offred. Para sejarawan tersebut bersikap merendahkan, objektif, dan sinis terhadap penderitaan Offred, menolak menghakimi Gilead secara moral atas dasar "relativisme budaya." Ini adalah teguran Atwood yang menakutkan kepada para akademisi dan pembaca agar tidak pernah merasionalisasikan kekejaman masa lalu.`
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    publishYear: 2006,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Road",
    theGood: "Kisah apokaliptik yang dilucuti dari semua elemen Hollywood. Prosa McCarthy yang sangat minimalis, sekeras batu, namun membawa beban emosional yang meluluhlantakkan jiwa.",
    theBad: "Tidak ada secercah harapan yang menyenangkan. Dunia benar-benar mati, abu bertebaran, kanibalisme merajalela, dan depresinya nyaris tak tertanggungkan.",
    review: `### Abu dan Lanskap Kematian
Dalam *The Road*, Cormac McCarthy tidak tertarik menjelaskan secara spesifik bencana apa yang telah menghancurkan bumi—apakah itu perang nuklir, asteroid, atau bencana vulkanik super. Itu tidak penting. Yang tersisa hanyalah lanskap benua yang hangus, dingin beku permanen, langit yang tertutup abu abadi, matinya seluruh flora dan fauna, serta sisa-sisa umat manusia yang saling memangsa untuk bertahan hidup. Ini adalah narasi kiamat dalam bentuknya yang paling absolut dan sunyi.

### Cinta Ayah dan Anak
Inti berdenyut dari kegelapan pekat ini adalah perjalanan *The Man* dan *The Boy*, seorang ayah tak bernama yang sedang sekarat karena penyakit paru-paru dan putra kecilnya, yang berjalan mendorong kereta belanja menuju pantai di selatan. Sang Ayah beroperasi murni dari naluri kelangsungan hidup hewani dan parnoia untuk melindungi anaknya. McCarthy menggambarkan ikatan mereka dengan kelembutan yang menyakitkan; sang putra adalah jangkar moral satu-satunya bagi sang ayah agar tidak menyerah dan memakan peluru terakhir dari pistol mereka.

> "You have to carry the fire." — *The Man*

---

### Ujian Moralitas di Ujung Dunia
Secara konstan, *The Boy* berfungsi sebagai kompas moral Kristus kecil yang terus mempertanyakan apakah mereka masih "orang baik". Di dunia di mana bertahan hidup sering kali berarti membunuh orang lemah atau melakukan kanibalisme, sang putra dengan keras kepala bersikeras agar mereka membagikan makanan langka mereka atau tidak menyiksa pencuri, menjaga percikan belas kasih manusia tetap hidup ketika rasionalitas survivalis mengatakan sebaliknya. Mereka berulang kali meyakinkan diri mereka bahwa mereka adalah "pembawa api" (*carrying the fire*).

### Penghapusan Tata Bahasa
Gaya prosa McCarthy dalam novel ini pantas mendapatkan studinya sendiri. Ia menghapus sebagian besar tanda baca standar (seperti tanda kutip untuk dialog dan apostrof) dan menggunakan kalimat-kalimat stakato pendek. Hal ini meniru lanskap yang gersang dan runtuhnya fondasi peradaban itu sendiri; tanpa tatanan sosial, tata bahasa dan kerumitan bahasa pun terkelupas hingga menyisakan kata benda dasar yang mentah dan kata kerja untuk sekadar bernapas dan berjalan.

### Akhir yang Menghantui Hati
Klimaks kematian di buku ini disajikan tanpa melodrama murahan, melainkan seperti putusnya seutas benang di ruang hampa. Transisi anak itu dari perlindungan ayah ke tangan orang asing (yang mungkin baik atau mungkin pemangsa) sepenuhnya merangkum esensi kepercayaan dan harapan yang buta. *The Road* bukan sekadar buku *post-apocalyptic*; ia adalah puisi meditasi yang sangat gelap mengenai kepunahan bumi, sekaligus kekuatan cinta parental yang irasional.`
  },
  {
    title: "The Color Purple",
    author: "Alice Walker",
    publishYear: 1982,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Color+Purple",
    theGood: "Penggunaan bentuk narasi *epistolary* (surat-menyurat) memberikan akses paling langsung dan murni ke dalam penderitaan dan kebangkitan jiwa seorang wanita tertindas.",
    theBad: "Paparan inses, pemerkosaan, dan kekerasan dalam rumah tangga secara gamblang di bab-bab awal sangat berat dan menyayat hati.",
    review: `### Surat kepada Tuhan
*The Color Purple*, pemenang Pulitzer Prize tahun 1983, membuka kisahnya dengan serangkaian surat memilukan yang ditulis oleh Celie, seorang remaja perempuan kulit hitam yang malang, miskin, dan tidak berpendidikan di pedesaan Selatan Amerika. Karena tidak memiliki satu pun telinga manusia yang aman untuk mendengar rahasianya (setelah berulang kali diperkosa oleh pria yang ia kira ayahnya, dan anak-anaknya dirampas darinya), Celie mengarahkan tulisan suratnya yang penuh dengan bahasa fonetik yang patah-patah langsung kepada Tuhan. 

### Lapisan Penindasan Ganda (*Intersectionality*)
Novel Alice Walker ini sangat penting karena ia tidak hanya mengkritik rasisme supremasi kulit putih sistemik di Amerika awal abad ke-20, tetapi berani menusuk jantung komunitas kulit hitam itu sendiri dengan mengekspos seksisme dan patriarki toksik. Celie diserahkan untuk dinikahi (*dijual*) kepada "Mr. ___", seorang duda kejam yang memukulinya secara rutin, menganggapnya tidak lebih dari sekutu kerja paksa dan objek pemuas nafsu. Celie berada di posisi paling dasar dalam hierarki manusia.

> "I think it pisses God off if you walk by the color purple in a field somewhere and don't notice it." — *Shug Avery*

---

### Katalis Kesadaran: Shug Avery
Titik balik narasi ini adalah kedatangan Shug Avery, seorang penyanyi *blues* yang mandiri, flamboyan, dan merdeka—sekaligus selingkuhan suaminya. Alih-alih membenci Shug, Celie terpukau olehnya. Shug adalah wanita kulit hitam pertama yang dilihat Celie yang memiliki kekuatan atas tubuh dan takdirnya sendiri. Melalui hubungan intim dan asmara revolusioner mereka, Shug membongkar teologi Tuhan patriarkal yang menghukum milik Celie, dan memperkenalkan konsep panteisme: bahwa Tuhan ada di dalam alam, di dalam kesenangan, dan dalam mencintai diri sendiri.

### Kekuatan Suara yang Tumbuh
Puncak kejeniusan buku ini dapat dilacak murni dari perkembangan bahasa dalam surat-surat Celie. Dari bab awal yang dipenuhi ejaan kacau balau, pasif, dan ketakutan absolut, struktur kalimat Celie secara bertahap tumbuh menjadi tegas, kuat, terartikulasi, dan menuntut haknya. Ketika Celie akhirnya berdiri dan mengutuk suaminya, itu adalah salah satu proklamasi kemerdekaan jiwa paling menggelegar dalam sastra modern.

### Penebusan Melalui Komunitas
Berbeda dengan kisah tragis eksistensial, *The Color Purple* berakhir dengan nada kemenangan dan rekonsiliasi yang mengharukan. Pengumpulan kembali jaringan persaudaraan wanita (*sisterhood*) dan reunifikasi keluarga Celie membuktikan bahwa siklus kekerasan dapat dipatahkan. Walker menegaskan bahwa cinta dan kemerdekaan finansial (kemampuan Celie menjahit celana secara mandiri) adalah kunci pembebasan struktural bagi kaum wanita marginal.`
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    publishYear: 1988,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Brief+History",
    theGood: "Upaya paling ambisius untuk menerjemahkan fisika kuantum dan relativitas yang mustahil rumit ke dalam perumpamaan yang bisa ditelan oleh masyarakat awam.",
    theBad: "Terlepas dari janjinya bahwa buku ini tanpa persamaan matematika, abstraksi konsep-konsep seperti 'Waktu Imajiner' (*Imaginary Time*) tetap membutuhkan kekuatan otak ekstra.",
    review: `### Menurunkan Kosmologi ke Bumi
Dalam *A Brief History of Time*, fisikawan teoretis Stephen Hawking secara berani mengambil tantangan untuk menjelaskan struktur alam semesta—mulai dari Ledakan Dahsyat (*Big Bang*) hingga Lubang Hitam (*Black Holes*)—tanpa mengandalkan persamaan matematika (kecuali ` + "`E=mc²`" + `). Buku ini meledak menjadi fenomena budaya karena Hawking berhasil memadukan kekaguman puitis seorang filsuf dengan ketelitian seorang ilmuwan modern.

### Perang Dingin Fisika: Relativitas vs Kuantum
Jantung dari argumen buku ini terletak pada kontradiksi absolut dari dua pilar utama fisika abad ke-20. Di satu sisi, **Relativitas Umum** Einstein bekerja dengan sangat indah untuk menjelaskan gravitasi dan pergerakan benda-benda raksasa (bintang dan galaksi) di alam semesta makro. Di sisi lain, **Mekanika Kuantum** menjelaskan perilaku *chaotic* partikel subatomik (elektron dan *quark*) di alam semesta mikro. Masalahnya? Kedua teori ini secara fundamental tidak cocok dan akan gagal (*break down*) jika digabungkan.

> "If we do discover a complete theory, it should in time be understandable in broad principle by everyone... Then we shall all, philosophers, scientists, and just ordinary people, be able to take part in the discussion of the question of why it is that we and the universe exist." — *Stephen Hawking*

---

### Panah Waktu (*The Arrow of Time*)
Salah satu bab paling mengesankan adalah penjelasan Hawking mengenai mengapa manusia hanya dapat mengingat masa lalu dan tidak pernah mengingat masa depan, serta mengapa cangkir teh yang pecah tidak dapat utuh kembali dengan sendirinya. Ia menjelaskannya melalui Hukum Termodinamika Kedua dan peningkatan Entropi (ketidakteraturan). Hawking menautkan panah waktu psikologis kita secara langsung dengan panah waktu kosmologis alam semesta yang terus mengembang.

### Celah di Pinggir Lubang Hitam
Hawking tidak hanya bertindak sebagai narator sains, tetapi memaparkan penemuan aslinya sendiri yang mengubah dunia: **Radiasi Hawking** (*Hawking Radiation*). Sebelum buku ini, ilmuwan percaya Lubang Hitam menelan segalanya secara absolut. Menggunakan prinsip ketidakpastian kuantum, Hawking membuktikan secara elegan bahwa partikel sebenarnya perlahan bocor dari pinggiran lubang hitam, membuat lubang hitam menguap selama triliunan tahun dan tidak sepenuhnya hitam.

### Pikiran Tuhan (*The Mind of God*)
Secara luar biasa untuk sebuah buku fisika murni, kesimpulannya sangat teologis. Hawking menggarisbawahi bahwa tujuan akhir sains adalah menemukan **Teori Segala Sesuatu** (*Theory of Everything*). Jika umat manusia berhasil merumuskan satu persamaan elegan yang mampu menyatukan semua gaya alam, ia percaya bahwa pada momen tersebut, kejeniusan intelektual manusia akan mencapai puncaknya, karena kita akhirnya akan dapat membaca dan memahami "pikiran Tuhan" sang pencipta waktu itu sendiri.`
  },
  {
    title: "Cosmos",
    author: "Carl Sagan",
    publishYear: 1980,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Cosmos",
    theGood: "Karya non-fiksi sains dengan tingkat literatur paling romantis yang pernah ditulis. Sagan adalah juru bicara terhebat yang pernah dimiliki oleh alam semesta.",
    theBad: "Beberapa penemuan astrofisika spesifik secara alami telah diperbarui atau sedikit usang mengingat buku ini diterbitkan lebih dari empat dekade yang lalu.",
    review: `### Mengangkasa Melalui Samudra Kosmik
Ditulis bersamaan dengan peluncuran serial televisi dokumenternya yang legendaris, *Cosmos* oleh Carl Sagan adalah surat cinta epik untuk sains, sejarah, dan tempat kemanusiaan di hamparan bintang-bintang. Sagan tidak hanya mengajar asronomi; ia merekonstruksi pandangan dunia sang pembaca. Menggunakan pendekatan *multidisiplin*, Sagan menyeret kita dari perpustakaan kuno Alexandria di Mesir, ke eksperimen DNA mikroskopis, hingga ke permukaan badai amonia di Planet Jupiter dalam satu sapuan pena yang sangat puitis.

### Debu Bintang yang Sadar Diri
Gagasan paling *transcendent* dan terkenal yang dipopulerkan Sagan dalam buku ini adalah fakta bio-kimiawi absolut bahwa setiap atom karbon, besi di dalam darah, dan kalsium di tulang manusia ditempa dan dimasak dalam api tungku bintang-bintang raksasa yang meledak miliaran tahun lalu. Kemanusiaan bukanlah entitas asing yang dijatuhkan di atas bumi; kita adalah *"star-stuff"* (debu bintang) yang telah berevolusi cukup lama hingga alam semesta akhirnya mampu memahami dan merenungkan dirinya sendiri.

> "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself." — *Carl Sagan*

---

### Epik Evolusi dan Seleksi Alam
Buku ini memecah konsep biologi evolusioner dengan cara yang membuat konsep Darwinistik terdengar religius secara sains. Penjelasan mengenai Evolusi Heike (kepiting dengan cangkang berwajah samurai di Jepang) disajikan sebagai contoh manipulasi seleksi buatan, yang menjadi batu loncatan empati untuk menjelaskan seleksi alam raksasa yang berlangsung selama miliaran tahun, membawa materi mati menjadi kehidupan yang bernafas di Bumi.

### Peringatan akan Kehancuran Nuklir
Meskipun dipenuhi dengan optimisme penjelajahan antar-galaksi, *Cosmos* sangat dipengaruhi oleh kecemasan Perang Dingin. Sagan mencurahkan beberapa bab terakhirnya sebagai intervensi moral yang mendesak untuk spesies manusia. Ia memperingatkan bahwa kemajuan eksponensial dalam teknologi nuklir, dipadukan dengan ego politik reptilian kita, adalah resep kehancuran yang sangat nyata, menggarisbawahi paradoks Fermi tentang mengapa kita belum menemukan alien—mungkin spesies cerdas cenderung memusnahkan dirinya sendiri sebelum mereka bisa mencapai bintang.

### Signifikansi Budaya yang Abadi
Lebih dari sekadar ensiklopedia fakta, Sagan membela **Metode Ilmiah** (*Scientific Method*) sebagai alat kerendahan hati terkuat yang pernah diciptakan manusia. Kesediaan sains untuk memperbaiki dirinya saat disodorkan bukti baru diangkat sebagai jalan moral untuk mengatasi dogma absolut. *Cosmos* adalah bacaan wajib (*mandatory reading*) bagi siapa pun yang mendiami planet kecil biru dan pucat (*Pale Blue Dot*) ini.`
  },
  {
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    publishYear: 1997,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Guns+Germs",
    theGood: "Teori determinisme geografis (*geographical determinism*) yang sangat meyakinkan dan secara elegan meruntuhkan semua klaim rasis tentang supremasi biologis peradaban Eropa.",
    theBad: "Terlalu menyederhanakan (*over-simplification*) faktor budaya, politik, dan agensi individu manusia, membuat sejarah terlihat seperti rumus pasif yang sepenuhnya diprogram oleh iklim.",
    review: `### Pertanyaan Yali: Akar Ketidaksetaraan Dunia
*Guns, Germs, and Steel: The Fates of Human Societies* berangkat dari satu pertanyaan sederhana namun fundamental yang diajukan seorang politisi Papua Nugini bernama Yali kepada Jared Diamond: *"Mengapa orang kulit putih memiliki begitu banyak 'cargo' (barang pabrik/teknologi) sedangkan orang Papua sangat sedikit?"*. Melalui buku tebal ini, Diamond membongkar ribuan tahun sejarah kemanusiaan untuk menjawabnya, secara definitif membuang argumen usang bahwa letak perbedaannya ada pada kecerdasan biologis rasial, melainkan murni soal keberuntungan **Geografi dan Lingkungan Ekologi**.

### Lotere Biogeografi: Domestikasi
Diamond memulai di Garis Awal (11.000 SM). Ia mendemonstrasikan bahwa kawasan *Fertile Crescent* (Timur Tengah purba) memiliki keberuntungan luar biasa memenangkan lotere ekologi. Di kawasan ini tumbuh spesies gandum purba berprotein tinggi yang mudah ditanam, serta hewan mamalia berukuran besar yang kebetulan memiliki tabiat jinak dan bisa dijinakkan (kuda, babi, sapi, kambing). Sementara itu, suku Aborigin di Australia atau penduduk asli Amerika tidak memiliki hewan ternak raksasa yang bisa dilatih untuk membajak sawah. Tumbuhan dan hewan peliharaan inilah pondasi kalori awal untuk revolusi peradaban dan waktu luang untuk berinovasi.

> "History followed different courses for different peoples because of differences among peoples' environments, not because of biological differences among peoples themselves." — *Jared Diamond*

---

### Orientasi Poros Benua (*East-West vs North-South*)
Argumen paling jenius Diamond adalah tesis orientasi poros benua. Benua Eurasia memiliki poros **Timur-Barat** raksasa. Ini berarti inovasi pertanian, benih unggul, dan hewan ternak dapat menyebar ribuan mil pada lintang geografis yang sama karena memiliki iklim dan durasi siang-malam yang mirip. Berbeda dengan benua Amerika dan Afrika yang berporos **Utara-Selatan**, di mana teknologi pertanian dari kawasan dingin lamban berpindah ke selatan karena dihambat oleh perubahan ekstrem menuju zona iklim tropis dan gurun. 

### Kuman sebagai Senjata Pemusnah Massal
Sesuai judulnya, letak penentu utama saat penaklukan kolonial Eropa terhadap peradaban Aztec dan Inca bukanlah sekadar kecanggihan "Senapan" (*Guns*) atau ketangguhan baja zirah (*Steel*). Penakluk terbesar adalah **Kuman** (*Germs*). Ribuan tahun hidup berdesakan di dalam kota padat bersama hewan peliharaan (asal muasal virus *zoonotic* seperti cacar dan campak), tubuh orang Eurasia mengembangkan resistensi mutasi antibodi. Penduduk Amerika asli, yang tidak pernah memiliki hewan ternak raksasa, sama sekali tidak kebal, mengakibatkan kematian hingga 90% populasi bahkan sebelum pedang penjajah ditebaskan.

### Sebuah Teori yang Mengubah Paradigma
Meski mendapat kritik tajam dari sejarawan kultural modern karena terlalu deterministik (mengabaikan faktor penting institusi politik eksploitatif dan korupsi budaya yang menyebabkan suatu bangsa tertinggal), buku ini tetap sukses luar biasa. *Guns, Germs, and Steel* berhasil menyajikan cetak biru sintesis *macro-history* yang mengombinasikan botani, genetika, epidemiologi, dan geologi, memberikan cara pandang yang sama sekali baru mengenai takdir seluruh ras manusia di planet ini.`
  },
  {
    title: "In Cold Blood",
    author: "Truman Capote",
    publishYear: 1966,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=In+Cold+Blood",
    theGood: "Menciptakan genre 'Novel Non-Fiksi' (*True Crime*). Sebuah rekonstruksi kriminal yang dilakukan dengan teknik penulisan prosa dan dialog sastra kaliber tinggi.",
    theBad: "Ketelitian jurnalistiknya terkompromi karena Capote sering kali menyisipkan motif, mengatur ulang fakta, atau mendramatisasi kutipan demi menyempurnakan struktur plot narasinya.",
    review: `### Lahirnya Genre "True Crime" Modern
Ketika Truman Capote membaca sebuah artikel kecil di The New York Times tentang pembunuhan brutal dan tak bermotif terhadap empat anggota keluarga petani Clutter di Holcomb, Kansas, ia segera bertolak dari elit New York menuju dataran gersang tersebut (ditemani sahabatnya, novelis Harper Lee). *In Cold Blood* yang dihasilkan dari investigasi enam tahunnya ini mendobrak sekat absolut sastra. Capote menolak format berita kering, dan menulis laporan fakta kriminal ini persis seperti sebuah karya literatur psikologis *thriller*, memelopori genre *True Crime* atau *New Journalism*.

### Kepingan Kehidupan Amerikan yang Dirampas
Kekuatan bab pembuka novel ini adalah pada penjajaran yang kejam. Capote menyajikan potret indah kehidupan Mr. Clutter, keluarga patut dicontoh yang saleh, bekerja keras, dan dihormati di desa yang tenang, tempat di mana "tidak ada orang yang mengunci pintunya." Capote memperlihatkan rutinitas normal hari terakhir keluarga ini (seperti memanggang pai), yang secara apik di-*cut* secara sinematik bolak-balik dengan perjalanan dua residivis pembebasan bersyarat, Dick Hickock dan Perry Smith, yang menyetir ratusan mil ke Kansas dengan tali dan senapan di jok belakang mobil.

> "I thought he was a very nice gentleman. Soft-spoken. I thought so right up to the moment I cut his throat." — *Perry Smith*

---

### Empati Penulis kepada Sang Monster
Alih-alih mendemonisasi pelaku layaknya monster datar dalam tabloid kuning, porsi kejeniusan (sekaligus kontroversi terbesar) Capote adalah investasi emosionalnya pada pembunuhnya, terutama pada Perry Smith. Melalui wawancara intensif berjam-jam di sel tahanan (*Death Row*), Capote menyusun psikogram Perry yang kompleks—masa kecil yang hancur, kekerasan dari ayahnya, panti asuhan yang menyiksa, hingga impian seninya yang gagal. Pembaca dibuat merasakan ngeri sekaligus iba pada psikologi manusia yang rapuh dan keliru ini.

### Struktur Misteri Terbalik
Buku ini membalik struktur *whodunit* klasik (tebakan siapa pelakunya). Pembaca sudah tahu siapa korbannya dan siapa pembunuhnya dari awal. Ketegangan didorong semata-mata oleh motif **MENGAPA** pembunuhan ini terjadi, bagaimana dua orang bodoh bisa merencanakan sesuatu secara sangat cacat (demi desas-desus harta karun brankas fiktif yang hanya membuahkan hasil 40 dolar), dan kerja keras birokatif detektif Alvin Dewey mengejar jejak mereka hingga ke Meksiko.

### Etika Literatur dan Harga Ambisi
*In Cold Blood* menjadi karya puncak Capote, sekaligus kutukannya. Demi mendapatkan "akhiran sastra" yang sempurna bagi bukunya, Capote secara emosional sangat menginginkan Perry dan Dick segera dieksekusi gantung, menolak membantu proses banding mereka meski memiliki hubungan kedekatan bertahun-tahun. Eksekusi mati yang muram tersebut menyisakan Capote dalam penyesalan psikologis seumur hidup; ia tidak pernah menyelesaikan satu novel pun setelah kesuksesan buku pembuka jalan ini.`
  },
  {
    title: "East of Eden",
    author: "John Steinbeck",
    publishYear: 1952,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=East+of+Eden",
    theGood: "Karya terbesar (*magnum opus*) John Steinbeck yang secara menakjubkan memadukan sejarah keluarganya sendiri dengan retelling alegoris kitab suci penciptaan dan Kain & Habel.",
    theBad: "Sangat panjang, alurnya berjalan secara multi-generasi dengan *pacing* lambat, dan beberapa karakternya (seperti Cathy/Kate) mungkin terasa terlalu datar sebagai kejahatan murni.",
    review: `### Alegori Kain dan Habel
*East of Eden* sering dianggap oleh John Steinbeck sendiri sebagai satu-satunya buku yang benar-benar ia persiapkan untuk ia tulis sepanjang hidupnya. Terhampar secara epik di tanah agrikultur Lembah Salinas yang subur di California, buku ini merupakan pementasan ulang secara masif dari kisah mitologi penciptaan alkitabiah, kejatuhan Adam, dan drama Kain dan Habel (*Cain and Abel*). Cerita ini berputar lintas generasi mengikuti dua keluarga besar—keluarga Trask dan keluarga Hamilton (yang mana didasarkan secara non-fiksi pada leluhur kakek Steinbeck sendiri).

### Inkarnasi Kejahatan Murni: Cathy Ames
Di antara barisan panjang tokoh yang kuat, pusat badai destruktif dari novel ini adalah karakter Cathy Ames (kemudian menjadi Kate), istri dari Adam Trask yang lugu. Steinbeck melukis Cathy bukan sebagai korban sosiologis, melainkan sebagai anomali genetik, inkarnasi psikopatologis kejahatan tanpa motif sejati. Cathy dengan tenang memanipulasi orang tuanya untuk mati terbakar, menembak suaminya, menelantarkan bayi kembarnya, dan kemudian mengontrol jaringan prostitusi bawah tanah lokal. Ia mewakili "ular" absolut di Taman Eden rumah keluarga Trask.

> "And now that you don't have to be perfect, you can be good." — *John Steinbeck*

---

### Timshel: Kekuatan Pilihan Bebas (*Free Will*)
Puncak filosofis dan teologis dari buku setebal 600 halaman ini adalah argumen mengenai satu kata Ibrani kuno: **Timshel**. Adam Trask mendapati anak kembarnya, Cal dan Aron, secara tak terelakkan meniru nasib Kain dan Habel. Cal (Cain) terus merasa ia memiliki darah kegelapan dari ibunya (Cathy) dan cemburu atas kasih sayang ayahnya terhadap Aron yang dianggap suci (Abel). Melalui kebijaksanaan pelayan Tionghoa revolusioner bernama Lee, Steinbeck mendiskusikan bahwa terjemahan yang benar untuk firman Tuhan kepada Kain bukanlah *"Thou shalt"* (Engkau pasti mengalahkan dosa) atau *"Do thou"* (Lakukanlah), melainkan *"Thou mayest"* (Engkau BISA memilih).

### Kutukan Keturunan Dapat Dipatahkan
Pesan *"Thou mayest"* (*Timshel*) meruntuhkan doktrin predestinasi dan kutukan genetik turunan. Steinbeck mendeklarasikan bahwa manusia tidak ditakdirkan menjadi monster semata-mata karena gen orang tua atau trauma masa lalu mereka. Cal, meskipun merasa rusak dan secara tragis telah mendorong saudaranya Aron ke arah maut akibat kebenaran tentang sang ibu, tetap memiliki agensi agung untuk memilih kembali jalannya dan menebus dosanya secara sadar.

### Penutup Beroktan Tinggi
Bab terakhir di mana seorang ayah yang terbaring lumpuh dan sekarat akhirnya membebaskan putranya yang menderita rasa bersalah adalah salah satu konklusi emosional paling bergaung di abad ke-20. *East of Eden* adalah sebuah raksasa sastra yang mengingatkan bahwa pertempuran antara terang dan gelap tidak terjadi di luar angkasa, melainkan satu-satunya zona perang terpenting terletak dan direplikasi di dalam benak setiap individu ras manusia secara spesifik.`
  },
  {
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    publishYear: 1911,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Secret+Garden",
    theGood: "Sebuah novel klasik anak-anak yang luar biasa dewasa tentang kekuatan kebangkitan kembali. Simbolisme menyembuhkan tanah yang sejajar dengan penyembuhan psikologis amat memikat.",
    theBad: "Penyebutan tentang orang asli India di bab awal mencerminkan kolonialisme Inggris (Raj) yang berbau sangat rasis dan diskriminatif (*outdated stereotyping*).",
    review: `### Protagonis yang Sengaja Dibuat Menjengkelkan
Sangat jarang fiksi klasik anak-anak berani memperkenalkan protagonisnya dengan cara yang benar-benar tidak menyenangkan, tetapi *The Secret Garden* melakukannya dengan mahir. Mary Lennox adalah anak yang luar biasa egois, manja, bertubuh pucat, dan selalu marah. Dibesarkan dalam kemewahan apatis oleh pelayan India (*ayah*) akibat orang tua yang acuh, Mary secara mendadak menjadi yatim piatu di tengah wabah kolera. Ia kemudian dikirim ke Inggris, ke sebuah rumah puri tua Yorkshire (*Misselthwaite Manor*) milik pamannya yang depresi dan selalu mengembara.

### Misteri Kesunyian Manor
Suasana *gothic* di bagian awal novel ini sangat kuat. Mary ditinggalkan sendiri di rumah besar dengan ratusan kamar terkunci, yang berbatasan dengan hamparan padang *moor* bukit liar. Kesepian absolut memaksanya keluar ruangan, di mana ia secara magis dipandu oleh seekor burung dada-merah (*robin*) ke arah kunci kuno yang terpendam, membuka akses menuju sebuah taman rahasia berdinding tinggi yang telah digembok dan sengaja dibiarkan mati selama 10 tahun paska tewasnya istri sang Paman.

> "Where you tend a rose, my lad, a thistle cannot grow." — *Frances Hodgson Burnett*

---

### Tanah yang Menyembuhkan
Metafora utama novel ini begitu indah: Mary Lennox *adalah* taman yang mati dan terlantar itu. Saat Mary mulai membersihkan ranting layu, mencabuti ilalang, dan menumbuhkan kembali akar mawar di bumi dengan tangannya sendiri yang kotor oleh lumpur, secara bersamaan racun arogansi, egoisme, dan kepucatan di dalam karakter Mary ikut tercabut. Kebangkitan botani di musim semi berjalan berdampingan langsung dengan kelahiran kembali spiritual anak tersebut. 

### Kontras dengan Colin Craven
Katalis perubahan Mary semakin dipercepat saat ia menemukan rahasia malam dari tangisan misterius dalam rumah: Colin Craven, sepupunya yang hipokondriak (*hypochondriac*), yang mengurung dirinya di tempat tidur karena sugesti medis sesat bahwa punggungnya akan segera bengkok membentuk bongkok dan mati. Pertengkaran tantrum antara dua anak yang rusak psikologisnya ini dengan cepat berubah menjadi operasi pertemanan heroik, dibantu oleh anak petani yang murni dari alam, Dickon.

### Mukjizat Pikiran Positif
Di sepertiga akhir buku, *The Secret Garden* banyak dipengaruhi oleh filosofi gerakan *New Thought* dan penyembuhan batin Kristen awal abad ke-20 ("Sihir"). Burnett menekankan kekuatan pemikiran positif: bahwa membiarkan pikiran sedih merajalela sama mematikannya dengan menanam bibit gulma beracun. Pemulihan Colin yang belajar berdiri dan berjalan di bawah matahari taman rahasianya membuktikan bahwa udara segar, harapan proaktif, dan cinta persahabatan dapat mengubah nasib dan memulihkan anggota keluarga yang hancur berkeping-keping.`
  },
  {
    title: "Anne of Green Gables",
    author: "L.M. Montgomery",
    publishYear: 1908,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Anne+of+Green+Gables",
    theGood: "Menyajikan salah satu pahlawan perempuan sastra yang paling cerewet, optimis, dan disukai (Anne Shirley) yang meromantisasi kehidupan sehari-hari dengan imajinasi absolut.",
    theBad: "Bersifat sangat episodik, lebih menyerupai rangkaian sketsa kelucuan komedi lokal desa daripada sebuah plot konvensional dengan pertaruhan besar (*high stakes*).",
    review: `### Kedatangan Sang Yatim Piatu Fantastis
*Anne of Green Gables* adalah mahakarya fiksi sejarah pastoral (*pastoral literature*) yang nyaman (*cozy*). Kisahnya berpusat pada sebuah kesalahan administrasi panti asuhan: Marilla dan Matthew Cuthbert, pasangan kakak-beradik lanjut usia yang belum menikah di desa agrikultur Avonlea (Kanada), meminta dikirimkan seorang bocah laki-laki yatim piatu untuk membantu bertani. Alih-alih, yang turun dari kereta adalah Anne Shirley—seorang gadis kecil kurus dengan rambut merah menyala, berbintik-bintik, yang berbicara non-stop dengan diksi puisi melodrama dramatis dari dalam khayalannya.

### Menularkan Romantisme pada Dunia Datar
Apa yang menjadikan Anne pahlawan yang abadi adalah penolakannya secara absolut terhadap realitas yang keras. Bagi Anne yang tumbuh besar terpinggirkan di panti asuhan, dunia nyata adalah ladang kekecewaan, sehingga ia memaksakan "romantisme tinggi" kepada setiap aspek alam yang membosankan di sekitarnya. Jalanan desa berdebu ia ubah namanya menjadi *"The White Way of Delight"*, dan danau kecil menjadi *"The Lake of Shining Waters"*. Imajinasi Anne bagaikan mantra warna yang disiramkan pada kehidupan Marilla yang kaku dan pragmatis.

> "I'm so glad I live in a world where there are Octobers." — *Anne Shirley*

---

### Kekuatan Cinta Tak Bersyarat
Keindahan buku ini terletak pada observasi psikologis halus tentang bagaimana cinta tanpa syarat secara bertahap menghancurkan pertahanan konservatif. Matthew, pria pemalu parah yang tak pernah berbicara dengan perempuan, takluk total oleh pesona lincah Anne dalam satu perjalanan kereta kuda. Sementara Marilla, yang awalnya bersikeras ingin mengembalikan Anne demi efisiensi, pada akhirnya gagal melawan letupan tawa dan keluguan tulus anak malang tersebut yang sangat kelaparan akan rasa *diinginkan* dan *dimiliki*.

### Komedi Kesalahan (*Comedy of Errors*)
Sebagian besar pertengahan buku diisi oleh komedi *slapstick* polos yang brilian, semuanya disebabkan oleh tindakan spontan Anne yang niatnya suci namun hasilnya fatal: secara tidak sengaja memabukkan sahabatnya Diana Barry dengan meminum anggur kismis alih-alih sirup raspberry, mewarnai rambut merahnya menjadi hijau rawa-rawa akibat terbeli obat palsu, atau tenggelam di perahu bocor demi memainkan adegan sandiwara puisi pangeran tragis yang konyol.

### Proses Kedewasaan yang Mengharukan
Babak penutup *Green Gables* meredam tawa kencang pembaca dengan air mata pengorbanan yang tulus. Anne tumbuh dewasa, meredakan cerewetnya menjadi keanggunan seorang akademisi muda yang brilian. Saat tragedi finansial dan maut mendadak menghampiri rumah tangga Cuthbert, Anne memilih melepaskan beasiswa prestisius universitas kota besarnya tanpa sedikit pun kepahitan, demi kembali menetap dan mengurus Marilla yang rabun di rumah desa yang pertama kali menampungnya. Bukti bahwa gadis pemimpi ini pada akhirnya memiliki kekuatan karakter yang setangguh baja.`
  },
  {
    title: "The Handmaid's Tale", // Wait I already added it above. Let me replace this!
    author: "Alice Munro",
    publishYear: 2001,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Hateship+Friendship",
    theGood: "Kumpulan cerita pendek kelas dunia karya peraih Nobel Sastra. Prosa Munro sangat membumi namun secara akurat membongkar kompleksitas emosi perempuan modern secara senyap.",
    theBad: "Tidak ada konflik apokaliptik yang dramatis. Temponya berjalan lambat karena fokus murni pada dinamika pasang surut domestik pedesaan di Kanada.",
    review: `### Penguasaan Absolut atas Genre Cerpen
Alice Munro memenangkan Hadiah Nobel Sastra karena secara konsisten membuktikan bahwa sebuah cerita pendek (*short story*) dapat memuat kedalaman psikologis, lompatan waktu, dan bobot emosional dari novel yang tebal. Kumpulan cerita *Hateship, Friendship, Courtship, Loveship, Marriage* adalah pameran sempurna dari teknik khas Munro: narasi-narasi tajam mengenai perempuan di kawasan pedesaan Ontario, yang hidup dengan keputusan tersembunyi, nafsu tak terucap, dan pengkhianatan kecil yang merubah orbit takdir hidup mereka selamanya.

### Struktur Waktu yang Melipat
Keahlian teknis terbesar Munro adalah cara ia memanipulasi rentang waktu. Dalam sebuah cerita pendek beralur tenang sepanjang dua puluh halaman, Munro bisa meloncat ke masa depan belasan tahun ke depan dalam satu paragraf, lalu menarik kembali pembaca ke momen krusial sore hari di beranda rumah masa lalu tanpa kebingungan. Hal ini memberikan kualitas ingatan yang nyata dan retrospektif (*hindsight*); karakter sering kali melakukan observasi pasrah akan kebodohan asmara usia muda mereka puluhan tahun setelah efek bencananya selesai menjalar.

> "There is no telling what people will do when they are given the chance to destroy themselves." — *Alice Munro*

---

### Romansa dari Sebuah Lelucon Kejam
Pada cerita utamanya (*title story*), plot digerakkan oleh sebuah kenakalan remaja yang luar biasa memilukan. Dua gadis sekolah memalsukan puluhan surat cinta romantis mengatasnamakan seorang pria kasar (*Ken Boudreau*) yang dikirimkan kepada Johanna, pembantu rumah tangga perawan tua yang lugu. Apa yang tadinya dirancang sebagai skema perundungan kejam, secara ironis dan subversif meledak menjadi kenyataan ketika Johanna dengan nekat membuang kehidupannya yang aman demi menyeberang kota menyusul Ken, benar-benar mengubah ilusi surat lelucon tersebut menjadi cinta di dunia nyata yang solid dan sukses. 

### Otonomi Tubuh dan Ketiadaan Moralizing
Munro tidak pernah bersikap menghakimi secara moral terhadap para pahlawan perempuannya. Karakter-karakternya secara rutin meninggalkan suami yang baik demi perselingkuhan mendadak yang menyakitkan (seperti dalam cerita *Family Furnishings*), memendam rasa marah kronis terhadap kerabat yang sakit ingatan, atau menutupi kehamilan di luar nikah. Mereka beroperasi atas kemauan agensi murni tubuh dan ego mereka, yang menjadikan mereka karakter wanita yang jauh lebih realistis ketimbang malaikat fiksi patriarki.

### Lapisan Epifani Domestik
Setiap cerita dalam buku ini berakhir bukan dengan putusan konklusif ala detektif, tetapi melalui epifani domestik kecil yang senyap—sebuah lirikan mata yang disadari di meja dapur, atau surat terakhir yang tidak pernah dikirimkan. Buku ini menuntut perhatian tinggi bagi detail psikologis, mengingatkan pembaca bahwa tragedi eksistensial terdalam kehidupan sering kali tidak berbunyi nyaring, melainkan dikubur dalam kebisuan ruang tamu.`
  }
];

// Re-map the 13th book because I accidentally duped title at 3rd index.
books[12].title = "Hateship, Friendship, Courtship, Loveship, Marriage";

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books BATCH 5 chunk 1 (13 books)...');
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
  console.log(`Done. Added ${added} books (Batch 5, Chunk 1).`);
}

seedBatch().catch(console.error).finally(() => prisma.$disconnect());

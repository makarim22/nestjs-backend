const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "Dune",
    author: "Frank Herbert",
    publishYear: 1965,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Dune",
    theGood: "Karya agung fiksi ilmiah yang tak tertandingi dalam hal *world-building*. Herbert merangkai politik, agama, dan ekologi menjadi sebuah **opera epik** yang sangat memukau.",
    theBad: "Tingkat kompleksitas dunia Arrakis dengan glosarium bahasa lokal (*Fremen*) dan faksi politik yang sangat tebal bisa menjadi hambatan besar bagi pembaca pemula.",
    review: `### Sinopsis dan Latar Belakang
*Dune* bukanlah sekadar novel fiksi ilmiah; ia adalah landasan fundamental dari genre *space opera* modern. Frank Herbert membangun sebuah dunia bernama Arrakis, planet gurun mematikan yang menjadi satu-satunya sumber *melange* (rempah-rempah), komoditas paling berharga di alam semesta yang memungkinkan perjalanan antarbintang. Cerita berpusat pada Paul Atreides, pewaris muda dari Wangsa Atreides, yang keluarganya dikhianati dan dibantai dalam konspirasi politik lintas galaksi.

### Analisis Ekologi dan Politik
Kecemerlangan utama *Dune* terletak pada visi **ekologisnya**. Herbert menulis novel ini setelah mengamati bukit pasir di Oregon, dan ia memasukkan konsep keseimbangan lingkungan (*environmentalism*) jauh sebelum isu tersebut menjadi arus utama. Ekosistem Arrakis, dengan cacing tanah raksasanya (*Shai-Hulud*) dan kelangkaan air yang absolut, digambarkan dengan sangat realistis dan brutal. Di atas panggung gurun ini, Herbert mementaskan intrik politik machiavellian antara Kekaisaran, serikat pekerja luar angkasa (Spacing Guild), dan kelompok persaudaraan rahasia yang mengontrol garis keturunan genetik, Bene Gesserit.

### Bahaya Mesianisme
> "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration." — *Litany Against Fear*

Tema paling filosofis dan subversif dalam novel ini adalah peringatan keras Herbert terhadap konsep Pahlawan atau Juru Selamat (Mesias). Ketika Paul melarikan diri ke padang pasir dan membaur dengan penduduk asli Fremen, ia perlahan-lahan berubah menjadi *Muad'Dib*, nabi yang ditunggu-tunggu. Namun, Herbert tidak menggambarkan ini sebagai kemenangan mutlak, melainkan awal dari tragedi yang mengerikan. Paul menyadari bahwa memanipulasi takhayul agama untuk mendapatkan kekuatan militer akan memicu *Jihad* berdarah yang tak bisa ia kendalikan melintasi alam semesta.

### Dampak Kultural
- **Inspirasi Pop Kultur:** Menjadi inspirasi langsung bagi *Star Wars* dan banyak karya lainnya.
- **Kedalaman Intelektual:** Pendekatan terhadap takdir, kehendak bebas, dan rekayasa genetik sangat mendalam.
Secara keseluruhan, *Dune* adalah bacaan wajib yang sangat padat, menakjubkan secara visual di kepala pembacanya, dan secara intelektual menantang fondasi sosiologis umat manusia di masa depan.`
  },
  {
    title: "1984",
    author: "George Orwell",
    publishYear: 1949,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=1984",
    theGood: "Karya paling prescient (visioner) tentang bahaya totalitarianisme. Bahasa *Newspeak* dan konsep *Doublethink* adalah penemuan linguistik yang brilian untuk menjelaskan cuci otak massal.",
    theBad: "Sangat pesimistis dan menyesakkan. Paruh ketiga buku ini pada dasarnya adalah deskripsi penyiksaan fisik dan psikologis yang intens dan sangat sulit dibaca.",
    review: `### Visi Distopia Terbesar
George Orwell merumuskan mimpi buruk paling definitif abad ke-20 melalui *1984*. Mengambil setting di Airstrip One (sebelumnya Inggris Raya) yang merupakan bagian dari superstate Oceania, novel ini memperkenalkan kita pada Winston Smith, seorang pegawai rendahan di Kementerian Kebenaran (*Ministry of Truth*). Ironisnya, pekerjaan Winston adalah merevisi secara terus-menerus arsip sejarah agar sesuai dengan propaganda harian Partai yang dipimpin oleh entitas mahakuasa tak terlihat, **Big Brother**. 

### Pengendalian Melalui Bahasa dan Fakta
> "War is peace. Freedom is slavery. Ignorance is strength." — *Slogan Partai*

Kejeniusan Orwell yang paling mengerikan adalah prediksinya tentang bagaimana kekuasaan absolut beroperasi dengan menghancurkan bahasa itu sendiri. Partai menciptakan bahasa *Newspeak*, yang dirancang dengan sengaja untuk membatasi kosakata sehingga pemikiran pemberontakan (Thoughtcrime) secara harfiah tidak mungkin lagi dikonseptualisasikan. Orwell membongkar secara mengerikan bagaimana realitas tidak ada secara objektif, melainkan semata-mata dikendalikan di dalam pikiran, dan jika Partai mengatakan bahwa $2 + 2 = 5$, maka hal itu secara instan menjadi kebenaran mutlak.

### Tragedi Winston Smith
Pemberontakan Winston yang awalnya dimulai secara diam-diam melalui menulis buku harian, memuncak pada perselingkuhannya yang penuh gairah dengan Julia. Hubungan mereka adalah tindakan pembangkangan politik yang murni, karena rezim telah menghancurkan institusi keluarga dan mengubah seksualitas menjadi tugas mekanis demi reproduksi. Namun, Orwell tidak memberikan ruang bagi pahlawan konvensional. Penangkapan mereka dan proses 're-edukasi' Winston di Ruang 101 oleh O'Brien adalah salah satu babak paling menghancurkan jiwa dalam literatur.

### Relevansi Modern
- **Surveillance State:** Konsep *Telescreen* telah menjelma menjadi pengawasan digital modern.
- **Doublethink:** Fenomena *post-truth* dan *alternative facts* di era modern beresonansi sempurna dengan peringatan Orwell.
Pada akhirnya, *1984* bukanlah prediksi, melainkan sebuah **peringatan**. Penutup novel ini di mana Winston akhirnya 'mencintai Big Brother' adalah bentuk penyelesaian yang paling pahit dan menakutkan tentang kemenangan total kediktatoran atas jiwa manusia.`
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishYear: 1960,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=To+Kill+a+Mockingbird",
    theGood: "Sebuah mahakarya yang menavigasi isu rasisme yang sangat berat melalui sudut pandang kepolosan anak-anak. Karakter Atticus Finch adalah standar emas integritas moral.",
    theBad: "Terkadang terasa terlalu sederhana secara moral dalam membedakan yang baik dan yang jahat (*black and white*), tanpa memberikan banyak nuansa abu-abu pada penduduk rasis Maycomb.",
    review: `### Pandangan dari Mata Anak-Anak
Harper Lee menciptakan keajaiban literatur dengan menempatkan pembaca di dalam benak Scout Finch, seorang anak perempuan tomboy berusia enam tahun yang tinggal di kota fiktif Maycomb, Alabama, selama era Depresi Hebat. Dengan menggunakan perspektif anak yang lugu, polos, dan seringkali gagal memahami kompleksitas sosial orang dewasa, Lee berhasil mengekspos absurditas dan kebrutalan prasangka rasial yang mengakar di wilayah Selatan Amerika. 

### Keadilan dan Integritas (Atticus Finch)
Inti moral novel ini bersandar sepenuhnya pada ayah Scout, **Atticus Finch**. Atticus, seorang pengacara yang ditunjuk untuk membela Tom Robinson—seorang pria kulit hitam yang dituduh secara palsu memperkosa seorang wanita kulit putih—menjelma menjadi salah satu pahlawan literatur terbesar. Atticus mengajarkan kepada anak-anaknya bahwa integritas berarti melakukan hal yang benar bahkan ketika Anda tahu Anda akan kalah sebelum memulainya.

> "You never really understand a person until you consider things from his point of view... until you climb into his skin and walk around in it." — *Atticus Finch*

### Hilangnya Kepolosan
Peristiwa pengadilan Tom Robinson berfungsi sebagai katalisator hilangnya kepolosan (*loss of innocence*) bagi Scout dan kakak laki-lakinya, Jem. Ketika mereka menyaksikan bagaimana dewan juri—orang-orang yang sehari-hari ramah kepada mereka—secara sadar menghukum mati pria yang jelas-jelas tidak bersalah hanya karena warna kulitnya, Jem secara emosional hancur. Lee menunjukkan bahwa rasisme bukan hanya kebencian aktif, tetapi juga sikap pasif membiarkan ketidakadilan terjadi karena kepatuhan buta pada tradisi.

### Dua Sisi Maycomb
*   **Kejahatan Institusional:** Sistem peradilan yang secara inheren bias.
*   **Empati yang Tersembunyi:** Simbol *mockingbird* yang tidak bersalah (merujuk pada Tom Robinson dan Boo Radley) menyimpulkan pesan inti novel ini: adalah sebuah dosa besar untuk menghancurkan hal-hal yang tidak berbahaya yang hanya bernyanyi demi kita.
Novel ini memenangkan Hadiah Pulitzer karena keberhasilannya membungkus kritik sosial yang tajam ke dalam narasi *coming-of-age* yang hangat, lucu, dan sangat menyentuh hati.`
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishYear: 1813,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Pride+and+Prejudice",
    theGood: "Kritik sosial tajam yang disamarkan dalam bentuk komedi romantis yang sempurna. Dialog Elizabeth Bennet dipenuhi kecerdasan verbal (*wit*) yang brilian.",
    theBad: "Terkadang plotnya terlalu bergantung pada surat-surat penjelasan (*deus ex machina* sosial) dan keberuntungan moneter semata.",
    review: `### Komedi Tata Krama dan Realitas Ekonomi
Meskipun sering disalahartikan semata-mata sebagai novel roman ringan, *Pride and Prejudice* sejatinya adalah sebuah **otopsi sosial yang tajam** terhadap aristokrasi Inggris abad ke-19. Jane Austen membedah sebuah dunia di mana satu-satunya jalur kelangsungan hidup bagi perempuan dari kelas menengah bawah (seperti lima saudara perempuan Bennet) adalah melalui tawar-menawar ekonomi di pasar pernikahan. Kalimat pembuka novel ini: *"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife,"* adalah kalimat sindiran (*irony*) paling brilian dalam literatur Inggris.

### Kesalahan Penilaian Manusia
Pusat dari cerita ini adalah interaksi elektrik antara pahlawan wanita yang cerdas, Elizabeth Bennet, dan pria aristokrat yang sangat kaya, Mr. Darcy. Austen mengeksplorasi betapa mudahnya akal sehat dibutakan oleh karakter emosional dasar kita. Elizabeth dikendalikan oleh prasangka (*prejudice*) pertamanya terhadap Darcy, sementara Darcy dikendalikan oleh kesombongan (*pride*) kelas sosialnya yang kaku. Konflik di antara mereka bukan tentang nasib atau tragedi, melainkan tentang ego manusia.

> "I could easily forgive his pride, if he had not mortified mine." — *Elizabeth Bennet*

### Evolusi Karakter yang Mendalam
Apa yang membedakan Austen dari penulis roman lainnya adalah penolakannya terhadap perubahan yang tiba-tiba. Darcy dan Elizabeth harus mengalami proses penghinaan diri (*self-mortification*) yang menyakitkan untuk menyadari kesalahan mereka. Darcy harus belajar untuk menundukkan keangkuhannya demi menyelamatkan keluarga Elizabeth dari kehancuran sosial, sementara Elizabeth harus menerima dengan sangat malu bahwa orang yang paling ia anggap jahat (Darcy) ternyata adalah orang yang paling mulia, dan orang yang paling ia bela (Wickham) adalah penipu ulung.

### Daya Tarik Abadi
*   **Elizabeth Bennet:** Karakter perempuan yang mandiri, berani, dan jenaka.
*   **Satir Sosial:** Sindiran yang sangat lucu terhadap ibu-ibu yang obsesif (Mrs. Bennet) dan pendeta penjilat (Mr. Collins).
Pada akhirnya, *Pride and Prejudice* tetap menjadi *template* abadi bagi hampir seluruh komedi romantis modern karena kecemerlangan Austen menyeimbangkan kehangatan cinta dengan realitas pahit status sosial.`
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishYear: 1925,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Great+Gatsby",
    theGood: "Karya sastra yang sangat puitis dan padat. Prosa Fitzgerald mengalir seperti musik jazz, menggambarkan dekadensi dan kekosongan moral era Roaring Twenties dengan sangat cantik.",
    theBad: "Karakternya pada dasarnya adalah orang-orang yang sangat egois, dangkal, dan sulit disukai, sehingga pembaca mungkin kesulitan untuk berempati secara emosional.",
    review: `### Tragedi Impian Amerika
*The Great Gatsby* adalah elegi yang sangat indah sekaligus brutal bagi **American Dream**. Mengambil latar di Long Island, New York selama Musim Panas 1922 (era pelarangan alkohol dan *Jazz Age*), novel ini menceritakan obsesi fatal Jay Gatsby, seorang miliarder baru yang misterius, untuk merebut kembali cinta masa lalunya, Daisy Buchanan. Diceritakan melalui perspektif Nick Carraway, seorang pemuda Midwestern yang terseret ke dalam dunia hedonisme dan kekayaan kosong elit Pantai Timur.

### Ilusi dan Identitas (Jay Gatsby)
Gatsby adalah perwujudan epik dari konsep penemuan kembali identitas (reinvention). Terlahir sebagai Jimmy Gatz dari keluarga petani miskin, ia menciptakan persona 'Jay Gatsby' dan mengumpulkan kekayaan yang tidak sah (melalui *bootlegging*) semata-mata untuk membuktikan dirinya layak di mata Daisy. Namun, Fitzgerald menggambarkan bagaimana kekayaan baru (*new money* seperti Gatsby di West Egg) tidak akan pernah bisa menembus benteng pertahanan aristokrasi lama (*old money* seperti suami Daisy, Tom Buchanan di East Egg).

> "So we beat on, boats against the current, borne back ceaselessly into the past." — *Nick Carraway*

### Simbolisme yang Kuat
Fitzgerald mengisi novel yang sangat tipis ini dengan simbol-simbol yang sarat makna. 
- **Lampu Hijau (*The Green Light*):** Mewakili impian masa depan yang tidak dapat diraih dan selalu menjauh, serta kerinduan Gatsby yang tiada akhir terhadap Daisy.
- **Mata T.J. Eckleburg:** Papan reklame pudar di *Valley of Ashes* (lembah abu antara New York dan pulau), yang secara diam-diam melambangkan Tuhan yang pasif dan tak peduli mengawasi keruntuhan moral Amerika.

### Kekosongan Moral
Puncak dari novel ini mengekspos kekosongan absolut dari kelas atas Amerika. Tom dan Daisy Buchanan digambarkan sebagai *"careless people"*—orang-orang yang sembarangan menghancurkan barang dan kehidupan manusia, lalu bersembunyi di balik kekayaan mereka, membiarkan orang lain membereskan kekacauan mereka. *The Great Gatsby* berakhir bukan hanya dengan kematian tragis seorang pemimpi, tetapi dengan kematian harapan bahwa masa lalu dapat diulangi atau bahwa uang dapat membelikan esensi jiwa.`
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    publishYear: 1967,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=One+Hundred+Years+of+Solitude",
    theGood: "Manifestasi definitif dari genre Realisme Magis. Prosa Márquez sangat memukau, merangkum sejarah seluruh umat manusia ke dalam kisah satu keluarga dan desa Macondo.",
    theBad: "Silsilah keluarga Buendía yang rumit, di mana setiap generasi menggunakan nama yang sama (Aureliano, José Arcadio), sering kali membuat pembaca benar-benar kebingungan.",
    review: `### Kelahiran Macondo dan Realisme Magis
Novel magnum opus dari peraih Nobel Gabriel García Márquez, *Cien años de soledad*, bukan sekadar buku, melainkan sebuah pusaran angin topan sastra. Novel ini melacak kebangkitan dan kejatuhan mitologis kota fiktif Macondo melalui tujuh generasi keluarga Buendía. Pendekatan **Realisme Magis** yang digunakan Márquez memungkinkan peristiwa-peristiwa supranatural yang luar biasa (seperti seorang anak yang lahir dengan ekor babi, gadis yang naik ke surga sambil melipat sprei, atau hujan bunga kuning yang turun dari langit) dinarasikan dengan nada reportase yang sangat datar dan faktual, sementara hal-hal modern seperti es atau magnet dianggap sebagai keajaiban yang menakutkan.

### Waktu yang Melingkar
Kesan utama yang dihadirkan novel ini adalah pemahaman fatalistik bahwa waktu tidak bergerak maju dalam garis lurus, melainkan berputar dalam lingkaran karma. Keturunan Buendía secara tragis terus mengulangi kesalahan fatal, obsesi buta, dan kegilaan leluhur mereka, tertahan oleh beban kesepian (solitude) bawaan yang tidak bisa diputuskan.

> "It’s enough for me to be sure that you and I exist at this moment." — *Gabriel García Márquez*

### Alegori Sejarah Amerika Latin
Secara lebih luas, *Macondo* berfungsi sebagai alegori mikrokosmos dari seluruh sejarah Kolombia dan wilayah Amerika Latin. Márquez menyisipkan peristiwa historis yang brutal—seperti kolonialisasi, perang saudara yang absurd antara kubu Konservatif dan Liberal, hingga puncaknya: Pembantaian Perusahaan Pisang (Berdasarkan *United Fruit Company massacre*). Márquez menunjukkan bahwa eksploitasi oleh kekuatan korporat asing seringkali jauh lebih nyata dan mengerikan daripada badai insomnia misterius.

### Isolasi Absolut
Kata *'Solitude'* di dalam judul memegang peranan esensial. Setiap anggota keluarga Buendía, tidak peduli betapa riuhnya hidup mereka, hidup dalam keterasingan emosional yang menyiksa, terkurung dalam kenangan mereka sendiri. Akhir yang apokaliptik dari novel ini adalah konfirmasi brilian bahwa balapan melawan takdir adalah hal yang mustahil, karena sejak awal pembentukan desa tersebut, keruntuhannya telah diramalkan secara mutlak dalam perkamen kuno Melquíades.`
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    publishYear: 1866,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Crime+and+Punishment",
    theGood: "Otopsi paling presisi terhadap psikologi manusia yang hancur karena rasa bersalah. Pertarungan psikologis (*cat and mouse*) antara Raskolnikov dan detektif Porfiry Petrovich adalah kejeniusan mutlak.",
    theBad: "Nama-nama patronimik Rusia yang terus berubah bisa membingungkan. Sangat klaustrofobik karena sebagian besar buku ini berlatar di dalam pikiran tokoh yang sedang demam tinggi dan delirium.",
    review: `### Filsafat "Pria Luar Biasa"
Dalam *Crime and Punishment*, Fyodor Dostoevsky menjerumuskan pembaca ke dalam pikiran kumuh dan berkeringat dari Rodion Raskolnikov, seorang mantan mahasiswa hukum di St. Petersburg yang jatuh miskin. Raskolnikov mengembangkan teori filosofis yang berbahaya: ia percaya bahwa sejarah manusia digerakkan oleh "Pria Luar Biasa" (seperti Napoleon) yang memiliki hak kodrati untuk membunuh orang "biasa" jika tindakan itu mendorong umat manusia maju. Berbekal rasionalisasi ini, ia membunuh seorang rentenir wanita tua dengan kapak untuk membuktikan bahwa dia berada di atas hukum moral.

### Hancurnya Rasionalisme 
Apa yang mengikuti pembunuhan tersebut adalah dekonstruksi mematikan terhadap ideologi rasionalisme utilitarian. Dostoevsky secara brilian menunjukkan bahwa hukuman yang sebenarnya tidak datang dari pengadilan atau hukum negara, melainkan dari penderitaan batin, paranoia, dan disintegrasi saraf Raskolnikov sendiri. Sang tokoh utama dikonsumsi oleh delirium dan terisolasi sepenuhnya dari ikatan kemanusiaan.

> "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth." — *Raskolnikov*

### Karakteristik Ganda St. Petersburg
- **Latar Psikologis:** Kota St. Petersburg musim panas, penuh lalat, kotor, dan bau pesing, mencerminkan keadaan jiwa Raskolnikov yang busuk.
- **Detektif Porfiry Petrovich:** Sebagai pelopor detektif psikologis, Porfiry tidak mengandalkan bukti fisik, melainkan menyiksa pikiran Raskolnikov dengan percakapan filosofis hingga pelaku menyerahkan diri secara sukarela.

### Penebusan dan Sonia
Penawar dari rasionalisme Raskolnikov yang kejam dan egois ditemukan dalam diri Sonya Marmeladova, seorang gadis miskin yang terpaksa melacurkan diri demi memberi makan keluarganya. Di mana Raskolnikov memilih kehancuran intelektual yang mematikan, Sonya, meskipun hancur secara sosial, menawarkan belas kasih Kristen yang murni dan tanpa batas. Pada akhirnya, *Crime and Punishment* menegaskan bahwa tidak ada rasionalitas intelektual yang bisa menggantikan kebutuhan manusia akan spiritualitas dan empati.`
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishYear: 1951,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Catcher+in+the+Rye",
    theGood: "Karya literatur yang mendefinisikan *teenage angst* dan alienasi remaja. Bahasa Holden Caulfield yang sarkastik dan penuh *slang* menangkap suara satu generasi dengan otentik.",
    theBad: "Sikap Holden yang terus-menerus mengeluh dan mengkritik semua hal sebagai *'phony'* (palsu) bisa menjadi sangat menyebalkan dan melelahkan bagi sebagian pembaca dewasa.",
    review: `### Monolog Kesepian Klasik
*The Catcher in the Rye* adalah potret paling tajam dalam literatur Amerika mengenai kecemasan dan disorientasi remaja pasca perang. Diceritakan melalui narasi orang pertama secara *stream of consciousness* dari fasilitas psikiatri, remaja berusia enam belas tahun Holden Caulfield merangkum tiga hari perjalanannya menggelandang di Kota New York setelah ia dikeluarkan dari sekolah asrama elit Pencey Prep sesaat sebelum liburan Natal.

### Ketakutan Tumbuh Dewasa (Phoniness)
Pusat kemarahan neurotik Holden adalah konsep **'Phony'** (Kepenipuan/Kepalsuan). Holden melihat kemunafikan, kompromi moral, dan egoisme di dalam semua interaksi sosial orang dewasa, menjadikannya kritikus masyarakat kelas menengah yang tajam. Namun, Salinger dengan hati-hati mengungkap bahwa sinisme radikal Holden hanyalah mekanisme pertahanan rapuh dari seorang anak yang sangat trauma (akibat kematian dini adik lak-lakinya, Allie, akibat leukemia) dan ketakutan setengah mati menghadapi kompleksitas transisi menuju usia dewasa.

> "I’m standing on the edge of some crazy cliff. What I have to do, I have to catch everybody if they start to go over the cliff..." — *Holden Caulfield*

### Simbol Sang Penangkap (The Catcher)
Judul buku ini berasal dari misinterpretasi lirik puisi Robert Burns oleh Holden. Ia membayangkan dirinya berdiri di ladang gandum (*rye*) untuk menyelamatkan anak-anak kecil agar tidak jatuh ke jurang masa kedewasaan yang penuh dosa dan kepalsuan. Hal ini memperjelas obsesi Holden yang putus asa untuk melestarikan kepolosan mutlak dari kerusakan waktu dan pengalaman sosial.

### Ambivalensi Emosional
*   **Adik Perempuannya (Phoebe):** Satu-satunya sosok yang Holden anggap suci, dan interaksinya dengan Phoebe di akhir novel (khususnya adegan di korsel) menawarkan klimaks emosional yang menghancurkan.
*   Novel ini sangat kontroversial, sempat dilarang di banyak sekolah karena bahasa yang kasar, namun tetap berdiri sebagai literatur otentik tentang krisis identitas dan kesepian eksistensial yang membekas kuat hingga kini.`
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishYear: 1954,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Lord+of+the+Rings",
    theGood: "Penciptaan dunia (Middle-earth) paling detail, masif, dan kohesif dalam sejarah fiksi, lengkap dengan linguistik fiktif (Elvish), sejarah ribuan tahun, dan lanskap geografi yang memukau.",
    theBad: "Pacingnya sangat lambat. Tolkien dapat menghabiskan berpuluh-puluh halaman hanya untuk mendeskripsikan topografi gunung, pepohonan, atau silsilah panjang para raja kuno.",
    review: `### Penciptaan Epik Fantasi Modern
J.R.R. Tolkien, seorang filolog Universitas Oxford yang merancang bahasa *Elvish* murni demi hobinya, tanpa sengaja mengubah budaya literatur dunia saat menerbitkan *The Lord of the Rings* (secara teknis satu buku yang diterbitkan dalam tiga volume). Diambil dari latar belakang epik Beowulf dan mitologi Norse, novel ini melampaui cerita fantasi eskapis dan menjadi sebuah saga mitologi independen untuk dunia Barat yang memadukan keindahan masa lalu yang hilang dengan perlawanan terhadap kejahatan mutlak (Sauron).

### Keberanian Orang Biasa
Tolkien melawan pakem pahlawan super melalui karakter Hobbit (khususnya Frodo Baggins dan Samwise Gamgee). Di saat para raja agung, pahlawan pedang tangguh (Aragorn), dan penyihir (Gandalf) berjuang mati-matian dalam peperangan epik di medan tempur Pelennor Fields, takdir seluruh *Middle-earth* justru dipikul oleh makhluk terkecil dan terlemah. Kekuatan Frodo bukanlah kekuatan tempur, melainkan kapasitas hatinya untuk memikul penderitaan dari *The One Ring*—cincin yang melambangkan kekuasaan yang secara inheren mengkorupsi pemiliknya.

> "Even the smallest person can change the course of the future." — *Galadriel*

### Melancholia dan Hilangnya Keajaiban
Selain pertempuran yang heroik, tema dominan dari mahakarya ini adalah **kesedihan yang mendalam (*melancholy*)**. Kemenangan atas Sauron tidak dicapai tanpa harga yang mahal. Berakhirnya Zaman Ketiga (*The Third Age*) menandai mundurnya sihir dari dunia: para Elf harus mengasingkan diri berlayar ke Barat, dan sihir digantikan oleh zaman para Manusia biasa. Kemenangan ini memiliki nuansa elegi yang sangat kuat; segala yang ajaib pada akhirnya harus mati atau pudar.

### Kedalaman World-Building
- **Linguistik Ekstensif:** Setiap nama tempat, pedang, dan karakter berakar pada struktur bahasa Quenya atau Sindarin buatan Tolkien.
- **Karakter Gollum/Sméagol:** Menawarkan salah satu analisis psikologis terbaik tentang efek destruktif jangka panjang dari kecanduan absolut terhadap kekuasaan.
*The Lord of the Rings* berdiri sebagai karya sastra epik paling definitif di mana pengorbanan personal, persahabatan sejati, dan cinta terhadap alam diadu dengan teologi industri mesin perang Mordor.`
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    publishYear: 1953,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Fahrenheit+451",
    theGood: "Prediksi presisi mengerikan mengenai masyarakat yang terobsesi dengan hiburan massal berkecepatan tinggi (*fast entertainment*) dan kehilangan kemampuannya untuk berpikir secara mendalam.",
    theBad: "Gaya penulisan Bradbury yang sangat berbelit-belit dan sangat metaforis bisa terasa puitis namun sedikit melodramatis untuk tema distopia murni.",
    review: `### Distopia Hiburan Berlebihan
Jika Orwell di *1984* takut bahwa informasi akan dirampas secara paksa oleh rezim tirani, Ray Bradbury di *Fahrenheit 451* meramalkan sesuatu yang jauh lebih presisi untuk dunia modern: kita sendirilah yang secara sukarela akan berhenti membaca karena kelebihan informasi dan keasyikan hiburan instan. Guy Montag, protagonis kita, bukanlah pemadam kebakaran yang memadamkan api, melainkan "Fireman" di masa depan yang tugas utamanya membakar buku (Fahrenheit 451 adalah suhu terbakarnya kertas).

### Penolakan pada Pemikiran
Di masyarakat Montag, dinding ruang tamu diisi penuh oleh layar TV interaktif raksasa (*Parlor Walls*) di mana istrinya, Mildred, tenggelam dalam drama kosong tak berujung bersama "keluarga virtualnya". Mobil melaju dengan kecepatan sangat tinggi sehingga papan reklame harus diperpanjang, dan pejalan kaki ditahan oleh polisi. Bradbury mengkritik masyarakat pasca-perang yang menuntut segalanya, termasuk buku sastra, direduksi menjadi ringkasan sepele agar tidak ada seorang pun yang merasa tersinggung atau ditantang secara intelektual.

> "We need not to be let alone. We need to be really bothered once in a while. How long is it since you were really bothered? About something important, about something real?" — *Guy Montag*

### Kapten Beatty, Antagonis Intelektual
Karakter yang paling brilian dalam novel adalah antagonisnya, Kapten Beatty, kepala pemadam kebakaran. Beatty memiliki pengetahuan luas dan bisa mengutip buku dengan ekstensif, namun menggunakan buku itu sendiri untuk membuktikan kontradiksi dan argumen yang membingungkan. Ia menjelaskan bahwa buku dibakar bukan atas perintah pemerintah pusat, melainkan atas permintaan masyarakat yang minoritasnya terlalu sensitif dan tak tahan berdebat atau menghadapi konsep yang menyedihkan.

### Transformasi Manusia Menjadi Buku
Bagian ketiga novel ini diakhiri dengan resolusi yang puitis dan putus asa. Saat peradaban menghancurkan dirinya sendiri dalam perang nuklir akibat kelalaian absolut masyarakatnya, Montag bergabung dengan kelompok *The Book People* di hutan. Para gelandangan ini adalah orang-orang yang secara literal menghafal seluruh isi buku klasik agar tidak lenyap oleh api. Novel ini berfungsi sebagai perayaan yang sangat emosional atas kata-kata cetak dan pentingnya ingatan kolektif bagi keselamatan jiwa manusia.`
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    publishYear: 1880,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Brothers+Karamazov",
    theGood: "Magnum opus Dostoevsky yang membongkar tema teologis besar: keberadaan Tuhan, kehendak bebas, dan penderitaan anak-anak tak berdosa. Bab *The Grand Inquisitor* adalah pencapaian intelektual paling jenius.",
    theBad: "Memiliki ketebalan yang sangat menakutkan dengan banyak sekali digresi filosofis dan khotbah panjang yang membuat narasi inti pembunuhan sering terhenti.",
    review: `### Teologi dalam Bentuk Novel Kriminal
Diterbitkan beberapa bulan sebelum kematiannya, *The Brothers Karamazov* adalah kulminasi dari seluruh kejeniusan intelektual dan kegilaan spiritual Fyodor Dostoevsky. Di tingkat permukaan, novel ini adalah kisah pembunuhan (whodunit) yang mendebarkan tentang parricide (pembunuhan seorang ayah)—kematian Fyodor Pavlovich Karamazov, seorang *buffoon* kaya yang kejam, menjijikkan, dan sangat egois. Namun, misteri hukum ini hanya berfungsi sebagai kerangka fungsional untuk pertarungan filosofis terdalam mengenai moralitas dan keyakinan spiritual Rusia abad ke-19.

### Tiga Bersaudara, Tiga Filsafat
Dostoevsky mendistribusikan sifat manusia yang kompleks ke dalam tiga (atau empat) putra Karamazov yang sangat berbeda, mewakili tubuh, pikiran, dan roh:
- **Dmitri:** Representasi nafsu emosional yang liar dan impulsif, namun memiliki kemurahan hati yang tulus.
- **Ivan:** Representasi intelektualisme dingin, rasionalitas Barat, dan ateisme pesimistik.
- **Alyosha:** Representasi keimanan yang murni, mistisisme ortodoks Rusia, dan cinta yang tulus. 
Serta saudara tiri mereka yang tertindas, Smerdyakov, yang menyerap filsafat nihilis dari Ivan dan mengambil langkah literal yang fatal dari teori tersebut.

### "The Grand Inquisitor"
> "If God does not exist, everything is permitted." — *Ivan Karamazov (Thesis)*

Bab "The Grand Inquisitor" (*Inkuisitor Agung*) adalah permata mahkota novel ini. Ivan menceritakan kisah fiktif kepada Alyosha di mana Yesus Kristus kembali ke bumi di Spanyol masa Inkuisisi. Sang Inkuisitor menangkap Yesus dan dengan panjang lebar memarahinya, berargumen bahwa Yesus telah merusak umat manusia dengan menawarkan "Kebebasan". Menurut Sang Inkuisitor, umat manusia tidak menginginkan beban menakutkan dari kehendak bebas (*free will*), melainkan sekadar membutuhkan roti, mukjizat, dan kepatuhan absolut yang menenangkan dari otoritas.

### Kehancuran Logika dan Penebusan
Dostoevsky menggunakan novel ini untuk mendekonstruksi bahaya empirisme murni. Ivan dihancurkan oleh teoremanya sendiri: ketidakmampuannya berdamai dengan ketidakadilan yang diderita anak-anak kecil secara tidak masuk akal (argumen theodicy terbaik di sastra). Sebaliknya, ajaran Alyosha (dan Elder Zosima) menawarkan bahwa keselamatan hanya datang ketika setiap individu menerima bahwa *'kita semua bertanggung jawab atas dosa seluruh umat manusia.'* Mahakarya ini bukan sekadar buku, melainkan sebuah pergumulan teologis berdarah yang abadi.`
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    publishYear: 1932,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Brave+New+World",
    theGood: "Kritik visioner terhadap utopia medis dan rekayasa biologis. Huxley secara menyeramkan meramalkan obat penenang massal, rekayasa genetik, dan hiper-seksualitas dangkal.",
    theBad: "Karakterisasinya sering kali kaku karena setiap karakter hanya bertindak sebagai juru bicara (*mouthpiece*) filosofis untuk berdebat tentang konsep sosiologi.",
    review: `### Distopia yang Menyenangkan
Saat George Orwell dalam *1984* menggambarkan distopia di mana manusia ditundukkan melalui penyiksaan fisik, kelaparan, dan teror aparat negara, Aldous Huxley di *Brave New World* menghadirkan konsep yang jauh lebih mengerikan bagi peradaban kontemporer: manusia akan dikendalikan melalui sistem hadiah yang tiada henti, rekayasa biogenetik, dan kesenangan yang sangat hedonistik. Di Negara Dunia yang futuristik (diukur dalam A.F. atau *After Ford*, merujuk pada dewa produksi massal Henry Ford), stabilitas sosial adalah agama absolut yang dicapai dengan merenggut kehendak bebas manusia sejak dalam rahim buatan.

### Pengondisian Biologis (Bokanovsky)
Di masyarakat hiper-kapitalis yang efisien ini, manusia tidak lagi dilahirkan secara *viviparous* (hidup), melainkan dikembangbiakkan dalam pusat inkubasi melalui 'Proses Bokanovsky'. Embrio diberikan oksigen yang dibatasi dan paparan kimiawi sejak tabung reaksi untuk memastikan masyarakat terbagi menjadi sistem kasta yang statis: mulai dari Alpha Plus yang super cerdas, hingga kaum Epsilon kerdil semi-cacat yang dirancang khusus hanya untuk mencintai pekerjaan kotor mereka. Tidak ada keluarga, tidak ada ikatan pernikahan ("setiap orang adalah milik semua orang"), dan konsep menjadi seorang ibu dianggap sangat tabu dan menjijikkan secara biologis.

> "A gramme is better than a damn." — *Slogan Masyarakat (tentang Soma)*

### Soma: Obat Penenang Modern
Stabilitas dipelihara tidak dengan polisi rahasia, melainkan dengan candu berwujud pil antidepresan bernama **Soma**. Setiap kali seorang warga negara merasakan emosi negatif ringan, atau kebingungan spiritual, mereka segera menenggak Soma yang memberikan pelarian liburan psikedelik sesaat yang tanpa *hangover*. Huxley meramalkan ledakan budaya farmakologis dan hiper-stimulasi media hiburan—manusia tersenyum bahagia dalam sel perbudakan yang tak kasat mata.

### Savage (Sang Manusia Liar)
Konflik filosofis utama terjadi ketika John, seorang manusia yang lahir secara alami dan tumbuh di cagar budaya "liar" di luar zona peradaban dengan membaca literatur usang karya Shakespeare, dibawa ke London. John mewakili moralitas kuno yang mengagungkan spiritualitas, kemerdekaan menderita, dan puitika cinta abadi. Perdebatan panjang di akhir buku antara John dan Pengawas Dunia, Mustapha Mond, adalah perdebatan sastra terbesar antara kemerdekaan (dengan segala kesengsaraannya) melawan kebahagiaan sintetik.`
  },
  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    publishYear: 1969,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Slaughterhouse-Five",
    theGood: "Kombinasi surealisme, sci-fi alien, dan trauma perang yang ditulis dengan gaya satir *black comedy* yang sangat kering dan *anti-war*.",
    theBad: "Alur narasi yang benar-benar tidak linear (melompat maju-mundur melintasi waktu setiap pergantian paragraf) bisa sangat membuat frustrasi dan sangat pusing diikuti.",
    review: `### Fiksi Ilmiah dan Trauma Perang (PTSD)
*Slaughterhouse-Five, or The Children's Crusade: A Duty-Dance with Death* adalah sebuah novel autobiografis semi-fiksi yang lahir dari ketidakmampuan Kurt Vonnegut memproses trauma ekstremnya. Sebagai tentara Amerika, Vonnegut selamat dari pengeboman udara sekutu di Dresden (Jerman) yang menghanguskan seluruh kota dengan bersembunyi di bawah tanah sebuah rumah pemotongan hewan. Hasil dari trauma itu adalah novel *anti-perang* aneh yang menjadikan pembantaian tragis sebagai sandiwara kosmis komedi kelam (dark comedy).

### Terlepas dalam Waktu (Unstuck in Time)
Karakter utama, Billy Pilgrim, seorang pendeta *chaplain* asisten optik yang canggung dan pasif, "terlepas dari waktu". Tanpa disengaja dan tanpa peringatan, kesadaran Billy terus melompat secara acak antara masa depan dan masa lalu. Dia bisa mengalami detik-detik menggigil di kamp tawanan perang Nazi, detik berikutnya diculik oleh *flying saucer*, lalu kembali ke malam pernikahannya yang menyedihkan di Ilium.

> "And so it goes." — *Kurt Vonnegut*

### Filsafat Tralfamadorian
Selain selamat dari perang, Billy diculik oleh alien bernama **Tralfamadorians**, makhluk yang berbentuk seperti pendorong pispot yang melihat dalam empat dimensi secara sinkron. Mereka melihat segala kejadian di masa lalu, kini, dan depan sebagai hal yang sudah, sedang, dan akan terjadi secara bersamaan selamanya. Karena kematian hanyalah 'kondisi buruk' di saat tertentu sementara orang tersebut masih sangat hidup bahagia di dimensi waktu lain, Tralfamadorian menanggapi semua tragedi, dari bintang yang meledak hingga kematian brutal di medan tempur, dengan satu frasa fatalistik: *"So it goes"*.

### Anti-Klimaks Pahlawan
Vonnegut secara radikal membongkar mitos kepahlawanan patriotik Hollywood yang mengagungkan perang. Billy Pilgrim bukanlah jagoan; ia seperti keledai dungu tanpa kontrol apa pun yang didorong maju mundur oleh kekuatan militer yang konyol. Novel ini adalah tanggapan sastra definitif yang absurd karena menjelaskan bahwa tidak mungkin membuat sesuatu yang logis atau indah dari 135.000 warga sipil yang dipanggang hidup-hidup dari udara secara taktik. Dan begitulah seterusnya.`
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books BATCH 4 chunk 1 (13 books)...');
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
  console.log(`Done. Added ${added} books (Batch 4, Chunk 1).`);
}

seedBatch().catch(console.error).finally(() => prisma.$disconnect());

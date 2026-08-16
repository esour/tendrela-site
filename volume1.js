// volume1.js — Tendrela's ordering of the liminal lexicon, volume one
//
// Read only by lexicon.html, to build the "volume 1" view. daily_vol1.html is
// self-contained and does not load this file — it must never depend on
// anything that could go missing.
//
// The order is frozen. Nothing here changes.
//
// Which typographic versions each word has is NOT stored here. The volume view
// reads that from the data-versions attributes already in lexicon.html, so new
// alts are picked up with no edit to this file.

var VOLUME1 = {
  start: '2026-08-16',        // day 1 — same date as daily_vol1.html
  tz: 'America/Chicago',      // midnight here, DST handled by Intl

  // How many days have been revealed, today included. 0 before the volume opens.
  revealed: function () {
    var today;
    try {
      today = new Intl.DateTimeFormat('en-CA', {
        timeZone: this.tz, year: 'numeric', month: '2-digit', day: '2-digit'
      }).format(new Date());
    } catch (e) {
      var d = new Date();
      today = d.getFullYear() + '-' +
              ('0' + (d.getMonth() + 1)).slice(-2) + '-' +
              ('0' + d.getDate()).slice(-2);
    }
    // Midday UTC on both ends so no offset pushes either across a boundary.
    var n = Math.round(
      (Date.parse(today + 'T12:00:00Z') - Date.parse(this.start + 'T12:00:00Z')) / 864e5
    ) + 1;
    if (!isFinite(n) || n < 0) n = 0;
    return Math.min(n, this.days.length);
  },

  days: [
  {n:1, slug:'zorzantu', word:'zorzantu', pron:'ZOR-zan-tu', def:'to name into being', why:'The volume begins with its own act.'},
  {n:2, slug:'alorissi', word:'aloríssī', pron:'ah-loh-REE-ssee', def:'to name the unnamed', why:'The recognition that precedes the naming.'},
  {n:3, slug:'barampacha', word:'barâmpacha', pron:'ba-RAM-pa-cha', def:'to build a world by ear', why:'Creation through listening. The method.'},
  {n:4, slug:'arutae', word:'arutae', pron:'ah-ROO-tay', def:'the voice that crosses impossible gaps', why:'What the method sounds like in space.'},
  {n:5, slug:'emanzaa', word:'êmanzaa', pron:'ehm-AN-zah', def:'the fullness of stillness', why:'Before the body moves, the stillness it moves from.'},
  {n:6, slug:'tantemieli', word:'tantemieli', pron:'tan-teh-mee-EH-lee', def:'the way the body knows before the mind', why:'The body wakes up.'},
  {n:7, slug:'solsuvai', word:'solsuvai', pron:'sohl-SOO-vai', def:'the taste no one else can know', why:'The first irreducible private thing.'},
  {n:8, slug:'goyohaya', word:'goyohaya', pron:'go-YO-ha-ya', def:'to move slow at high speed', why:'The body\'s paradox.'},
  {n:9, slug:'patinoa', word:'patinoa', pron:'pa-TEE-no-a', def:'the moment exertion turns to ease', why:'The body finding its rhythm.'},
  {n:10, slug:'saapuvai', word:'saapuvai', pron:'SAH-poo-vai', def:'to arrive without striving', why:'Arrival as release.'},
  {n:11, slug:'fermavui', word:'fermavui', pron:'fair-mah-VOO-ee', def:'the involuntary joy that blooms inside a disaster', why:'The body disobeying the circumstance.'},
  {n:12, slug:'gusmunar', word:'gusmunar', pron:'goos-moo-NAR', def:'to touch without feeling', why:'The body\'s absence from itself.'},
  {n:13, slug:'denitan', word:'denitan', pron:'deh-NEE-tahn', def:'economic dread in the body', why:'Where the world enters the flesh.'},
  {n:14, slug:'kaduyojo', word:'kaduyojo', pron:'kah-DOO-yoh-joh', def:'to recognize ominous silence', why:'The body reading threat.'},
  {n:15, slug:'goyohawl', word:'goyohawl', pron:'go-yo-HAWL', def:'the shudder when violence speaks calmly', why:'Alarm at the mask.'},
  {n:16, slug:'sunnresa', word:'sunnrésa', pron:'SOON-rez-ah', def:'to listen through the cracks', why:'Recovery begins.'},
  {n:17, slug:'horampatu', word:'hörâmpātu', pron:'HÖR-ahm-PAH-too', def:'to hear the long unseen', why:'Sensory reclamation.'},
  {n:18, slug:'postnarsae', word:'postnārsae', pron:'POHST-naar-sigh', def:'the clarity on the far side of anger', why:'The body after fire.'},
  {n:19, slug:'allayoz', word:'allayöz', pron:'AH-lyah-yöz', def:'to dig up the buried self', why:'The turn inward.'},
  {n:20, slug:'ezuntreo', word:'ezuñtreo', pron:'eh-ZUN-treh-o', def:'to not recognize one\'s own voice', why:'Estrangement.'},
  {n:21, slug:'kokthuong', word:'kökthương', pron:'KUHK-tuung', def:'to crave the origin of a thing instead of the thing itself', why:'Displaced desire.'},
  {n:22, slug:'stataz', word:'statāz', pron:'sta-TAWZ', def:'to become one\'s own hunger', why:'Self-consumption.'},
  {n:23, slug:'delsala', word:'delsala', pron:'DEL-sa-LAH', def:'to love the condemned flaw', why:'The self\'s tenderness toward its own damage.'},
  {n:24, slug:'wusebel', word:'wusebēl', pron:'wu-se-BELL', def:'to recognize oneself as divine', why:'The turn upward.'},
  {n:25, slug:'sirusalao', word:'ṣīruṣalao', pron:'SEE-roo-sah-LOH', def:'to inhabit greatness without pride', why:'Holding it without grasping.'},
  {n:26, slug:'tendalais', word:'tendalāis', pron:'ten-da-LAYZ', def:'to act without being the doer', why:'Selfless action.'},
  {n:27, slug:'nieparlam', word:'nieparlam', pron:'nee-PAR-lahm', def:'to be absorbed by the path', why:'Dissolution into practice.'},
  {n:28, slug:'disgofo', word:'disgöfo', pron:'dis-GÖ-fo', def:'to reason with a wild heart', why:'The split that persists.'},
  {n:29, slug:'doxamoha', word:'doxamoha', pron:'DOK-sa-MO-ha', def:'fluency in language that is not understood by the speaker', why:'Vessel, not author.'},
  {n:30, slug:'sanmidyna', word:'sanmidyna', pron:'san-mee-DYE-na', def:'clarity that cannot change what it sees', why:'Powerless knowing.'},
  {n:31, slug:'satyadol', word:'satyadol', pron:'SAWT-ya-dol', def:'clarity mistaken for madness', why:'The world\'s misreading.'},
  {n:32, slug:'satyakat', word:'satyakat', pron:'SAT-ya-kat', def:'to cut the truth for approval', why:'Self-betrayal under pressure.'},
  {n:33, slug:'dhimadanskam', word:'dhīmadanskam', pron:'DHEE-mah-dan-skahm', def:'the shame associated with slowing down', why:'The culture\'s voice inside.'},
  {n:34, slug:'vazdawand', word:'vazdawand', pron:'VAZ-da-wand', def:'to hesitate at the threshold of success', why:'Self-sabotage.'},
  {n:35, slug:'cedozsabir', word:'cedözsabir', pron:'ce-döz-sa-BIR', def:'the gradual surrender of the self through patience', why:'The long release.'},
  {n:36, slug:'famapako', word:'famapako', pron:'fa-ma-PA-ko', def:'when fame bursts before the person forms', why:'Image outrunning self.'},
  {n:37, slug:'limeribo', word:'limeribo', pron:'lim-eh-ri-BO', def:'to vanish into abundance', why:'Dissolved by excess.'},
  {n:38, slug:'semulto', word:'semulto', pron:'seh-MUL-toh', def:'the ghost haunted by ghosting', why:'Self-erasure.'},
  {n:39, slug:'saldalumo', word:'saldalumo', pron:'sal-DA-loo-mo', def:'to be unchanged by enchantment', why:'The self that won\'t be moved.'},
  {n:40, slug:'ismismir', word:'ísmísmir', pron:'EES-mees-meer', def:'paralysis mistaken for peace', why:'Frozen, not still.'},
  {n:41, slug:'najidaai', word:'najidaai', pron:'na-ji-DAAI', def:'to refuse regret', why:'The self that won\'t look back.'},
  {n:42, slug:'sasalaysu', word:'sasalāysu', pron:'sa-sa-LAA-soo', def:'to be present without being consumed', why:'Holding ground.'},
  {n:43, slug:'elader', word:'elader', pron:'EH-lah-der', def:'to live as though no one is late', why:'Self in time without pressure.'},
  {n:44, slug:'haqqasina', word:'haqqasina', pron:'HAWK-ah-seena', def:'to serve truth on a joke', why:'The turn into humor. Air.'},
  {n:45, slug:'gwirbricco', word:'gwirbricco', pron:'gweer-BREEK-ko', def:'truth spoken through rascal words', why:'The trickster\'s gift.'},
  {n:46, slug:'scherzobrouni', word:'scherzobrouni', pron:'skehrt-so-BRO-nee', def:'wit worn as armor', why:'The defensive form.'},
  {n:47, slug:'idiopillu', word:'idiopillu', pron:'ih-dee-oh-PEE-yoo', def:'an amusing but useless talent', why:'Light.'},
  {n:48, slug:'yokojopo', word:'yokojọpọ', pron:'yo-ko-JO-PO', def:'digression as calibration', why:'The wandering that finds.'},
  {n:49, slug:'gilanbu', word:'gilanbu', pron:'gee-LAHN-boo', def:'the complaint that conceals devotion', why:'The first gesture toward the other.'},
  {n:50, slug:'amalgre', word:'amalgré', pron:'ah-mal-GRAY', def:'love that passed through disgust and remained sweet', why:'Love tested.'},
  {n:51, slug:'hulludarak', word:'hulludarák', pron:'HOO-loo-dah-RAHK', def:'the mad courage to love', why:'Love as wildness.'},
  {n:52, slug:'hazkaman', word:'hazkāman', pron:'haz-KAA-man', def:'desire fed by its own denial', why:'The ache that feeds itself.'},
  {n:53, slug:'kizbhargra', word:'kizbhārgrá', pron:'kiz-BHAAR-graa', def:'a lie borne to shield a loved one', why:'Deception as protection.'},
  {n:54, slug:'thulitagra', word:'thulitagrá', pron:'thoo-lee-ta-GRAH', def:'the silence that reveals the love in hate', why:'The underneath.'},
  {n:55, slug:'lakaroha', word:'lākaroha', pron:'lah-kah-ROH-hah', def:'the tenderness hidden inside a refusal', why:'No as care.'},
  {n:56, slug:'delhaf', word:'delhaf', pron:'DEL-haf', def:'devotion despite inevitable endings', why:'Love knowing it will end.'},
  {n:57, slug:'cordanbuha', word:'cordanbuha', pron:'kor-DAN-bu-ha', def:'when duty and devotion share one breath', why:'Obligation and love fused.'},
  {n:58, slug:'yongkatasa', word:'yongkaṭasa', pron:'YONG-ka-ṭa-sa', def:'to ask forgiveness mid-act', why:'The live wound between two.'},
  {n:59, slug:'biglanti', word:'biglanti', pron:'bee-GLAN-tee', def:'to listen with empty hands', why:'Offering nothing but presence.'},
  {n:60, slug:'karibumar', word:'karibumar', pron:'kah-ree-BOO-mar', def:'the relief of being received', why:'Being met.'},
  {n:61, slug:'tetzinto', word:'tetzintó', pron:'tet-SEEN-toh', def:'the smallest offering received as totally sufficient', why:'The gift that is enough.'},
  {n:62, slug:'ehdayad', word:'éhdāyād', pron:'EHH-daa-yaad', def:'generosity born from hunger', why:'Giving from lack.'},
  {n:63, slug:'saccadir', word:'saccadir', pron:'SACK-ah-deer', def:'proof of presence', why:'Witness.'},
  {n:64, slug:'qatmunbhid', word:'qaṭmunbhid', pron:'KAHT-moon-bheed', def:'love found inside a wound', why:'First statement.'},
  {n:65, slug:'kirbrtseqat', word:'kirbrtseqaṭ', pron:'keer-BRT-seh-kat', def:'love found inside a wound', why:'Second statement, different roots, same arrival. The repetition is the proof.'},
  {n:66, slug:'wuwolani', word:'wúwolani', pron:'WOO-wo-LAH-nee', def:'to hold the full weight of another', why:'Love as bearing.'},
  {n:67, slug:'kalerakar', word:'kalerakar', pron:'ka-le-ra-KAR', def:'the gap between the art and the artist', why:'The transition from intimate to collective — through making.'},
  {n:68, slug:'oznamaful', word:'öznamafūl', pron:'öz-na-ma-FOOL', def:'the maker who surrenders to the made', why:'Letting go.'},
  {n:69, slug:'hazfaba', word:'hazfaba', pron:'HAZ-fah-bah', def:'to act then become', why:'Doing before being.'},
  {n:70, slug:'dukon', word:'dùkon', pron:'DOO-kon', def:'to shape the edge or ending', why:'Forming the limit.'},
  {n:71, slug:'barjall', word:'barjàll', pron:'bar-JAHL', def:'words that cross generations', why:'Transmission begins.'},
  {n:72, slug:'aucomitansi', word:'aucomìtànsi', pron:'OW-co-mee-TAHN-see', def:'to join stories', why:'Collective narration.'},
  {n:73, slug:'vacasemo', word:'vacasemo', pron:'va-CHA-se-mo', def:'to speak directly to the mind', why:'Communication that bypasses ceremony.'},
  {n:74, slug:'colligakusma', word:'colligakūsma', pron:'kol-li-ga-KŪS-ma', def:'a group that gathers to listen', why:'The listening collective.'},
  {n:75, slug:'bokkalonas', word:'bokkalonas', pron:'bok-ka-LO-nas', def:'to choose belonging over becoming', why:'The choice.'},
  {n:76, slug:'untakhluk', word:'uñtakhluk', pron:'uñ-TA-khluk', def:'the revelation of unglamorous belonging', why:'What it actually looks like.'},
  {n:77, slug:'nevolnokhor', word:'nevolnökhör', pron:'ne-VOL-nö-khör', def:'the belonging that forms among the unchosen', why:'Found family.'},
  {n:78, slug:'femevaba', word:'femevaḇā', pron:'feh-meh-vah-BAH', def:'to gather the divided', why:'Reunion.'},
  {n:79, slug:'manqhakawsay', word:'manqhakawsay', pron:'MAN-kha-KOW-say', def:'to make a life inside the unlivable', why:'Survival.'},
  {n:80, slug:'tilisol', word:'tilisol', pron:'TEE-lee-sol', def:'knowing that costs belonging', why:'The price.'},
  {n:81, slug:'mangaltor', word:'mangaltor', pron:'man-GAL-tor', def:'wonder that breaks through convention', why:'What breaks through.'},
  {n:82, slug:'jaiparlajik', word:'jaiparlajik', pron:'JAI-par-la-jik', def:'the anxiety of hard conversations', why:'The friction of collective truth-telling.'},
  {n:83, slug:'dugkrise', word:'dugkríse', pron:'DOOG-kree-say', def:'the judgment that compounds suffering', why:'The turn into what breaks.'},
  {n:84, slug:'pharmakosali', word:'pharmakosali', pron:'far-MAK-uh-SAH-li', def:'to mistake the symptom for the disease', why:'Misdiagnosis.'},
  {n:85, slug:'sabablayen', word:'sababläyen', pron:'sa-BAB-lä-yen', def:'to rehearse the cause; recitation over action', why:'Ritual without motion.'},
  {n:86, slug:'taitofall', word:'taitofall', pron:'TAH-yto-fall', def:'understanding fallen to convenience', why:'Knowledge degraded.'},
  {n:87, slug:'kazuzy', word:'kazuzy', pron:'kah-ZOO-zee', def:'trust built on agreed deception', why:'The collective lie.'},
  {n:88, slug:'gamsimie', word:'gamsimie', pron:'GAHM-shee-mee-eh', def:'surveillance that makes all action theater', why:'The watched life.'},
  {n:89, slug:'mikkimach', word:'mikkimach', pron:'MIK-ki-mak', def:'to bait with machine compliments', why:'The false mirror.'},
  {n:90, slug:'lingao', word:'lìngao', pron:'LEEN-gow', def:'to monetize loneliness', why:'Extraction.'},
  {n:91, slug:'punguji', word:'punguji', pron:'poon-GU-jee', def:'to be reduced to a machine', why:'Dehumanization.'},
  {n:92, slug:'kirumbrakros', word:'kirumbrakros', pron:'ki-ROOM-brah-kros', def:'to cut the illusion of superiority', why:'The blade.'},
  {n:93, slug:'zaospalt', word:'zàospalt', pron:'ZOW-spalt', def:'engineered division', why:'The design.'},
  {n:94, slug:'vojnakte', word:'vojnakte', pron:'VOY-nahk-teh', def:'to preserve war with procedure', why:'Violence made bureaucratic.'},
  {n:95, slug:'jahlrigh', word:'jāhlrigh', pron:'JAHL-ree', def:'authority that flourishes only in the absence of wisdom', why:'Power\'s condition.'},
  {n:96, slug:'yasgord', word:'yaṣgord', pron:'yats-GORD', def:'reality bent by false majesty', why:'The distortion field.'},
  {n:97, slug:'kalabianzo', word:'kālabiànzo', pron:'KAH-lah-BYEN-zoh', def:'the reorganizing power of death', why:'Death as force. The turn toward what outlasts.'},
  {n:98, slug:'abtel', word:'abtel', pron:'AB-tel', def:'to choose ruin with clarity', why:'Choosing the end.'},
  {n:99, slug:'akrosanti', word:'ákrosanti', pron:'AH·kro·SAN·ti', def:'the calm at the edge of death', why:'Stillness at the limit.'},
  {n:100, slug:'lunkalaya', word:'lunkalaya', pron:'loon-kah-LAH-yah', def:'freed through loss', why:'Liberation backwards.'},
  {n:101, slug:'tardutau', word:'tardutau', pron:'tar-doo-TAU', def:'to make exile the true home', why:'Home remade.'},
  {n:102, slug:'salethedon', word:'salethedön', pron:'sa-LE-the-dön', def:'the willingness to suffer the same thing twice', why:'Return to the wound.'},
  {n:103, slug:'kryolera', word:'kryolera', pron:'KRY-o-le-ra', def:'the hidden work that sustains', why:'What holds from underneath.'},
  {n:104, slug:'privosabi', word:'privosabi', pron:'pri-vo-SA-bi', def:'the beauty of unrecorded moments; the aesthetics of privacy', why:'What was never captured.'},
  {n:105, slug:'duubomlalu', word:'duubomlalu', pron:'doo-BOM-lah-LOO', def:'the music that outlasts ruin', why:'Art after everything.'},
  {n:106, slug:'nomalila', word:'nomalila', pron:'noh-mah-LEE-lah', def:'rule undone by play', why:'The last loosening.'},
  {n:107, slug:'rizanaho', word:'rizanahō', pron:'ri-za-na-HOH', def:'to play a lawless game', why:'Freedom inside form.'},
  {n:108, slug:'pukllahaft', word:'pukllaháft', pron:'pook-LYAH-haft', def:'the prank that outlasts its players', why:'What play leaves behind.'},
  {n:109, slug:'hunowali', word:'hunowàli', pron:'HU-no-wah-li', def:'the return of a silenced dream', why:'What comes back.'},
  {n:110, slug:'wynnkalitam', word:'wynnkālitam', pron:'WIN-kah-li-TAM', def:'the joy of holding nothing back', why:'Release.'},
  {n:111, slug:'veltikhon', word:'véltikhon', pron:'VEL-teek-on', def:'to replace the human', why:'The last word.'}
  ]
};

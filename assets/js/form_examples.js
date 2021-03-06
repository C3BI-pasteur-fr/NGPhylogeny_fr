// Example Datasets
function populateExample(id, example_text) {
    document.getElementById(id).value = example_text;
}

var FASTA_AA = ">Human\n" +
    "MASGILVNVKEEVTCPICLELLTQPLSLDCGHSFCQACLTANHKKSMLDKGESSCPVCRISYQPENIRPNRHVANIVEKL\n" +
    "REVKLSPEGQKVDHCARHGEKLLLFCQEDGKVICWLCERSQEHRGHHTFLTEEVAREYQVKLQAALEMLRQKQQEAEELE\n" +
    "ADIREEKASWKTQIQYDKTNVLADFEQLRDILDWEESNELQNLEKEEEDILKSLTNSETEMVQQTQSLRELISDLEHRLQ\n" +
    "GSVMELLQGVDGVIKRTENVTLKKPETFPKNQRRVFRAPDLKGMLEVFRELTDVRRYWVDVTVAPNNISCAVISEDKRQV\n" +
    "SSPKPQIIYGARGTRYQTFVNFNYCTGILGSQSITSGKHYWEVDVSKKTAWILGVCAGFQPDAMCNIEKNENYQPKYGYW\n" +
    "VIGLEEGVKCSAFQDSSFHTPSVPFIVPLSVIICPDRVGVFLDYEACTVSFFNITNHGFLIYKFSHCSFSQPVFPYLNPR\n" +
    "KCGVPMTLCSPSS\n" +
    ">Chimp\n" +
    "MASGILVNVKEEVTCPICLELLTQPLSLDCGHSFCQACLTANHKKSMLDKGESSCPVCRISYQPENIRPNRHVANIVEKL\n" +
    "REVKLSPEGQKVDHCAHHGEKLLLFCQEDGKVICWLCERSQEHRGHHTFLTEEVAREYQVKLQAALEMLRQKQQEAEELE\n" +
    "ADIREEKASWKTQIQYDKTNVLADFEQLRDILDWEESNELQNLEKEEEDILKSLTKSETEMVQQTQSVRELISDLERRLQ\n" +
    "GSVMELLQGVDGVIKRMENVTLKKPETFPKNQRRVFRAPDLKGMLEVFRELTDVRRYWVDVTVAPNNISCAVISEDMRQV\n" +
    "SSPKPQIIYGARGTRYQTFMNFNYCTGILGSQSITSGKHYWEVDVSKKSAWILGVCAGFQPDAMCNIEKNENYQPKYGYW\n" +
    "VIGLEEGVKCSAFQDGSFHTPSAPFIVPLSVIICPDRVGVFLDYEACTVSFFNITNHGSLIYKFSHCSFSQPVFPYLNPR\n" +
    "KCGVPMTLCSPSS\n" +
    ">Gorilla\n" +
    "MASGILVNVKEEVTCPICLELLTQPLSLDCGHSFCQACLTANHKKSMLDKGESSCPVCRISYQPENIRPNRHVANIVEKL\n" +
    "REVKLSPEGQKVDHCARHGEKLLLFCQEDGKVICWLCERSQEHRGHHTFLTEEVAQEYQVKLQAALEMLRQKQQEAEELE\n" +
    "ADIREEKASWKTQIQYDKTNVLADFEQLRDILDWEESNELQNLEKEEEDILKRLTKSETEMVQQTQSVRELISDLEHRLQ\n" +
    "GSVMELLQGVDGVIKRMENVTLKKPETFPKNRRRVFRAPDLKGMLEVFRELTDVRRYWVDVTVAPNNISCAVISEDMRQV\n" +
    "SSPKPQIIYGAQGTRYQTFMNFNYCTGILGSQSITSGKHYWEVDVSKKSAWILGVCAGFQPDATCNIEKNENYQPKYGYW\n" +
    "VIGLEEGVKCSAFQDGSFHTPSAPFIVPLSVIICPDRVGVFLDYEACTVSFFNITNHGFLIYKFSHCSFSQPVFPYLNPR\n" +
    "KCRVPMTLCSPSS\n" +
    ">Orangutan\n" +
    "MASGILVNVKEEVTCPICLELLTQPLSLDCGHSFCQACLTANHKKSTLDKGERSCPVCRVSYQPKNIRPNRHVANIVEKL\n" +
    "REVKLSPEGQKVDHCARHGEKLLLFCKEDGKVICWLCERSQEHRGHHTFLTEEVAQKYQVKLQAALEMLRQKQQEAEELE\n" +
    "ADIREEKASWKTQIQYDKTSVLADFEQLRDILDWEESNELQNLEKEEEDILKSLTKSETEMVQQTQSVRELISDVEHRLQ\n" +
    "GSVMELLQGVDGIIKRMQNVTLKKPETFPKNQRRVFRAPNLKGMLEVFRELTDVRRYWVDVTVAPNDISYAVISEDMRQV\n" +
    "SCPEPQIIYGAQGTTYQTYVNFNYCTGILGSQSITSGKHYWEVDVSKKSAWILGVCAGFQPDAMYNIEQNENYQPQYGYW\n" +
    "VIGLEEGVKCSAFQDGSFHNPSAPFIVPLSVIICPDRVGVFLDYEACTVSFFNITNHGFLIYKFSHCSFSQPVFPYLNPR\n" +
    "KCRVPMTLCSPSS\n" +
    ">Gibbon\n" +
    "MASGILVNVKEKVTCPICLELLTQPLSLDCGHSFCQACLTANHKTSMPDEGERSCPVCRISYQHKNIRPNRHVANIVEKL\n" +
    "REVKLSPEEGQKVDHCARHGKKLLLFCQEDRKVICWLCERSQEHRGHHTFLTEEVAQEYQMKLQAALQMLRQKQQEAEEL\n" +
    "EADIREEKASWKTQIQYDKTNILADFEQLRHILDWVESNELQNLEKEEKDVLKRLMRSEIEMVQQTQSVRELISDLEHRL\n" +
    "QGSVMELLQGVDGVIKRMKNVTLKKPETFPKNRRRVFRAADLKVMLEVLRELRDVRRYWVDVTVAPNNISYAVISEDMRQ\n" +
    "VSSPEPQIIFEAQGTISQTFVNFNYCTGILGSQSITSGKHYWEVDVSKKSAWILGVCAGLQPDAMYNIEQNENYQPKYGY\n" +
    "WVIGLEEGVKCNAFQDGSIHTPSAPFVVPLSVNICPDRVGVFLDYEACTVSFFNITDHGFLIYKFSHCSFSQPVFPYLNP\n" +
    "RKCTVPMTLCSPSS\n" +
    ">Rhes_cDNA\n" +
    "MASGILLNVKEEVTCPICLELLTEPLSLHCGHSFCQACITANHKKSMLYKEGERSCPVCRISYQPENIQPNRHVANIVEK\n" +
    "LREVKLSPEEGQKVDHCARHGEKLLLFCQEDSKVICWLCERSQEHRGHHTFLMEEVAQEYHVKLQTALEMLRQKQQEAEK\n" +
    "LEADIREEKASWKIQIDYDKTNVSADFEQLREILDWEESNELQNLEKEEEDILKSLTKSETEMVQQTQYMRELISELEHR\n" +
    "LQGSMMDLLQGVDGIIKRIENMTLKKPKTFHKNQRRVFRAPDLKGMLDMFRELTDARRYWVDVTLATNNISHAVIAEDKR\n" +
    "QVSSRNPQIMYQAPGTLFTFPSLTNFNYCTGVLGSQSITSGKHYWEVDVSKKSAWILGVCAGFQSDAMYNIEQNENYQPK\n" +
    "YGYWVIGLQEGVKYSVFQDGSSHTPFAPFIVPLSVIICPDRVGVFVDYEACTVSFFNITNHGFLIYKFSQCSFSKPVFPY\n" +
    "LNPRKCTVPMTLCSPSS\n" +
    ">Baboon\n" +
    "MASGILLNVKEEVTCPICLELLTEPLSLPCGHSFCQACITANHRKSMLYKEGERSCPVCRISYQPENIQPNRHVANIVEK\n" +
    "LREVKLSPEEGLKVDHCARHGEKLLLFCQEDSKVICWLCERSQEHRGHHTFLMEEVAQEYHVKLQTALEMLRQKQQEAEK\n" +
    "LEADIREEKASWKIQIDYDKTNVSADFEQLREILDWEESNELQNLEKEEEDILKSLTKSETEMVQQTQYMRELISDLEHR\n" +
    "LQGSMMELLQGVDGIIKRIENMTLKKPKTFHKNQRRVFRAPDLKGMLDMFRELTDVRRYWVDVTLAPNNISHAVIAEDKR\n" +
    "QVSSRNPQITYQAPGTLFSFPSLTNFNYCTGVLGSQSITSGKHYWEVDVSKKSAWILGVCAGFQPDAMYNIEQNENYQPK\n" +
    "YGYWVIGLQEGVKYSVFQDGSSHTPFAPFIVPLSVIICPDRVGVFVDYEACTVSFFNITNHGFLIYKFSQCSFSKPVFPY\n" +
    "LNPRKCTVPMTLCSPSS\n" +
    ">AGM\n" +
    "MASGILLNVKEEVTCPICLELLTEPLSLPCGHSFCQACITANHKESMLYKEEERSCPVCRISYQPENIQPNRHVANIVEK\n" +
    "LREVKLSPEEGQKVDHCARHGEKLLLFCQEDSKVICWLCERSQEHRGHHTFLMEEVAQEYHVKLQTALEMLRQKQQEAEK\n" +
    "LEADIREEKASWKIQIDYDKTNVSADFEQLREILDWEESNELQNLEKEEEDILKSLTKSETEMVQQTQYMRELISDLEHR\n" +
    "LQGSMMELLQGVDGIIKRIENMTLKKPKTFHKNQRRVFRAPDLKGMLDMFRELTDVRRYWVDVTLAPNNISHAVIAEDKR\n" +
    "QVSYQNPQIMYQAPGSSFGSLTNFNYCTGVLGSQSITSRKLTNFNYCTGVLGSQSITSGKHYWEVDVSKKSAWILGVCAG\n" +
    "FQPDATYNIEQNENYQPKYGYWVIGLQEGDKYSVFQDSSSHTPFAPFIVPLSVIICPDRVGVFVDYEACTVSFFNITNHG\n" +
    "FLIYKFSQCSFSKPVFPYLNPRKCTVPMTLCSPSS\n" +
    ">AGM_cDNA\n" +
    "MASGILVNVKEEVTCPICLELLTEPLSLPCGHSFCQACITANHKESMLYKEEERSCPVCRISYQPENIQPNRHVANIVEK\n" +
    "LREVKLSPEEGQKVDHCARHGEKLLLFCQEDSKVICWLCERSQEHRGHHTFLMEEVAQEYHVKLQTALEMLRQKQQEAEK\n" +
    "LEADIREEKASWKIQIDYDKTNVSADFEQLREILDWEESNELQNLEKEEEDILKSLTKSETEMVQQTQYMRELISDLEHR\n" +
    "LQGSMMELLQGVDGIIKRVENMTLKKPKTFHKNQRRVFRAPDLKGMLDMFRELTDVRRYWVDVTLAPNNISHAVIAEDKR\n" +
    "QVSYRNPQIMYQSPGSLFGSLTNFSYCTGVPGSQSITSGKLTNFNYCTGVLGSQSITSGKHYWEVDVSKKSAWILGVCAG\n" +
    "FQPDATYNIEQNENYQPKYGYWVIGLQEGDKYSVFQDGSSHTPFAPFIVPLSVIICPDRVGVFVDYEACTVSFFNITNHG\n" +
    "FLIYKFSQCSFSKPVFPYLNPRKCTVPMTLCSPSS\n" +
    ">Tant_cDNA\n" +
    "MASGILLNVKEEVTCPICLELLTEPLSLPCGHSFCQACITANHKESMLYKEEERSCPVCRISYQPENIQPNRHVANIVEK\n" +
    "LREVKLSPEEGQKVDHCARHGEKLLLFCQEDSKVICWLCERSQEHRGHHTFLMEEVAQEYHVKLQTALEMLRQKQQEAEK\n" +
    "LEADIREEKASWKIQIDYDKTNVSADFEQLREILDWEESNELQNLEKEEEDILKSLTKSETEMVQQTQYMRELISDLEHR\n" +
    "LQGSMMELLQGVDGIIKRIENMTLKKPKTFHKNQRRVFRAPDLKGMLDMFRELTDVRRYWVDVTLAPNNISHAVIAEDKR\n" +
    "QVSYQNPQIMYQAPGSSFGSLTNFNYCTGVLGSQSITSRKLTNFNYCTGVLGSQSITSGKHYWEVDVSKKSAWILGVCAG\n" +
    "FQPDATYNIEQNENYQPKYGYWVIGLQEGDKYSVFQDGSSHTPFAPFIVPLSVIICPDRVGVFVDYEACTVSFFNITNHG\n" +
    "FLIYKFSQCSFSKPVFPYLNPRKCTVPMTLCSPSS\n" +
    ">Patas\n" +
    "MASGILLNVKEEVTCPICLELLTEPLSLPCGHSFCQACITANHKKSMLYKEEERSCPVCRISYQPENIQPNRHVANIVEK\n" +
    "LREVKLSPEEGQKVDHCARHGEKLLLFCQEDRKVICWLCERSQEHRGHHTFLMEEVAQEYHVKLQTALEMLRQKQQEAEK\n" +
    "LEADIREEKASWKIQIDYDKTNVLADFEQLREILDWEESNELQYLEKEEEDILKSLTKSETKMVRQTQYVRELISDLEHR\n" +
    "LQGSMMELLQGVDGIIKRIENMTLKKPETFHKNQRRVFRAPALKGMLDMFRELTDVRRYWVDVTLAPNNISHVVIAEDKR\n" +
    "QVSSRNPQIMYWAQGKLFQSLKNFNYCTGILGSQSITSGKHYWEVDVSKKSAWILGVCAGFQPDAMYDVEQNENYQPKYG\n" +
    "YWVIGLQEGVKYSVFQDGSSHTPFAPFIAPLSVIFCPDRVGVFVDYEACTVSFFNITNHGFLIYKFSQCSFSKPVFPYLN\n" +
    "PRKCTVPMTLCSPSS\n" +
    ">Colobus\n" +
    "MASGILVNIKEEVTCPICLELLTEPLSLHCGHSFCQACITANHKKSMLYKEGERSCPVCRISYQPENIRPNRHVANIVEK\n" +
    "LREVKLSPEEGQKVDHCARHGEKLLLFCQEDRKVICWLCERSQEHRGHHTFLMEEVAQEYHVKLQTALEMLRQKQQEAEK\n" +
    "LEADIREEKASWKIQIDYDKTNVLADFEQLREILDWEESNELQNLEKEEEDILKSLTKSETEMVQQTQYMRELVSDLEHR\n" +
    "LQGSVMELLQGVDGIIKRIEDMTLKKPKTFPKNQRRVFRAPDLKGMLDMFRELTDVRRYWVDVTLAPNNISHAVIAEDKR\n" +
    "RVSSPNPQIMYRAQGTLFQSLKNFIYCTGVLGSQSITSGKHYWEVDVSKKSAWILGVCAGFQPDAMYNIEQNENYQPKYG\n" +
    "YWVIGLQEGVKYSVFQDGSSHTPFAPFIVPLSVIICPDRVGVFVDYEACTVSFFNITNHGFLIYKFSQCSFSKPVFPYLN\n" +
    "PRKCTVPMTLCSPSS\n" +
    ">DLangur\n" +
    "MASGILVNIKEEVTCPICLELLTEPLSLHCGHSFCQACITANHKKSMLYKEGERSCPVCRISYQPENIRPNRHVANIVEK\n" +
    "LREVKLSPEEGQKVDHCARHGEKLLLFCQEDRKVICWLCERSQEHRGHHTFLMEEVAQEYHVKLQTALEMLRQKQQEAEK\n" +
    "LEADIREEKASWKIQIDCDKTNVLADFEQLREILDWEESNELQNLEKEEEDILKSLTKSETEMVQQTQYMRELISDLEHR\n" +
    "LQGSMMELLQGVDGIIKRIENMTLKKPKTFPKNQRRVFRAPDLKGILDMFRELTDVRRYWVDVTLAPNNISHAVIAEDKR\n" +
    "QVSSPNPQIMCRARGTLFQSLKNFIYCTGVLGSQSITSGKHYWEVDVSKKSAWILGVCAGFQPDAMYNIEQNENYQPKYG\n" +
    "YWVIGLQEGVKYNVFQDGSSHTPFAPFIVPLSVIICPDRVGVFVDYEACTVSFFNITNHGFLIYKFSQCSFSKPVFPYLN\n" +
    "PRKCTVPMTLCSPSS\n" +
    ">PMarmoset\n" +
    "MASRILVNIKEEVTCPICLELLTEPLSLDCGHSFCQACITANHKESTLHQGERSCPLCRMSYPSENLRPNRHLANIVERL\n" +
    "KEVMLSPEEGQKVDHCARHGEKLLLFCQQDGNVICWLCERSQEHRGHHTFLVEEVAEKYQGKLQVALEMMRQKQQDAEKL\n" +
    "EADVREEQASWKIQIQNDKTNIMAEFKQLRDILDCEESKELQNLEKEEKNILKRLVQSESDMVLQTQSIRVLISDLERRL\n" +
    "QGSVMELLQGVDDVIKRIEKVTLQKPKTFLNEKRRVFRAPDLKGMLQAFKELTEVQRYWAHVTLVPSHPSCTVISEDERQ\n" +
    "VRYQVPIHQPLVKVKYFYGVLGSLSITSGKHYWEVDVSNKRGWILGVCGSWKCNAKWNVLRPENYQPKNGYWVIGLRNTD\n" +
    "NYSAFQDAVKYSDVQDGSRSVSSGPLIVPLFMTICPNRVGVFLDYEACTISFFNVTSNGFLIYKFSNCHFSYPVFPYFSP\n" +
    "TTCELPMTLCSPSS\n" +
    ">Tamarin\n" +
    "MASRILVNIKEEVTCPICLELLTEPLSLDCGHSFCQACITANHKESTPHQGERSCPLCRMSYPSENLRPNRHLANIVERL\n" +
    "KEVMLSPEEGQKVGHCARHGEKLLLFCEQDGNVICWLCERSQEHRGHHTLLVEEVAEKYQEKLQVALEMMRQKQQDAEKL\n" +
    "EADVREEQASWKIQIRNDKTNIMAEFKQLRDILDCEESKELQNLEKEEKNILKRLVQSESDMVLQTQSMRVLISDLERRL\n" +
    "QGSVLELLQGVDDVIKRIETVTLQKPKTFLNEKRRVFRAPDLKAMLQAFKELTEVQRYWAHVTLVPSHPSYAVISEDERQ\n" +
    "VRYQFQIHQPSVKVNYFYGVLGSPSITSGKHYWEVDVTNKRDWILGICVSFKCNAKWNVLRPENYQPKNGYWVIGLQNTN\n" +
    "NYSAFQDAVKYSDFQIGSRSTASVPLIVPLFMTIYPNRVGVFLDYEACTVSFFNVTNNGFLIYKFSNCHFSYPVFPYFSP\n" +
    "MTCELPMTLCSPSS\n" +
    ">Squirrel\n" +
    "MASRILGSIKEEVTCPICLELLTEPLSLDCGHSFCQACITANHKESMLHQGERSCPLCRLPYQSENLRPNRHLASIVERL\n" +
    "REVMLRPEERQNVDHCARHGEKLLLFCEQDGNIICWLCERSQEHRGHNTFLVEEVAQKYREKLQVALETMRQKQQDAEKL\n" +
    "EADVRQEQASWKIQIQNDKTNIMAEFKQLRDILDCEESNELQNLEKEEKNILKRLVQSENDMVLQTQSVRVLISDLERRL\n" +
    "QGSVVELLQDVDGVIKRIEKVTLQKPKTFLNEKRRVFRAPDLKRMLQVLKELTEVQRYWAHVTLVPSHPSYTIISEDGRQ\n" +
    "VRYQKPIRHLLVKVQYFYGVLGSPSITSGKHYWEVDVSNKRAWTLGVCVSLKCTANQSVSGTENYQPKNGYWVIGLRNAG\n" +
    "NYRAFQSSFEFRDFLAGSRLTLSPPLIVPLFMTICPNRVGVFLDYEARTISFFNVTSNGFLIYKFSDCHFSYPVFPYFNP\n" +
    "MTCELPMTLCSPRS\n" +
    ">Owl\n" +
    "MASRILVNIKEEVTCPICLELLTEPLSLDCGHSFCQACITANHKKSMPHQGERSCPLCRISYSSENLRPNRHLVNIVERL\n" +
    "REVMLSPEEGQKVDHCAHHGEKLVLFCQQDGNVICWLCERSQEHRGHQTFLVEEVAQKYREKLQVALEMMRQKQKDAEKL\n" +
    "EADVREEQASWKIQIQNDKTNIMAEFKKRRDILDCEESKELQNLEKEEKNILKRLVQSENDMVLQTQSVRVLISDLEHRL\n" +
    "QGSVMELLQGVDGVIKRIEKVTLQNPKTFLNEKRRIFQTPDLKGTLQVFKEPTEVQRYWAHVTLVPSHPSCTVISEDERQ\n" +
    "VRYQKRIYQPFLKVKYFCGVLGSPSITSGKHYWEVDVSNKSEWILGVCVSLKRTASCSVPRIENDQPKNGYWVIGLRNAD\n" +
    "NYSAFQDAVEYSDFQDGSRSTPSAPLIVPLFMTICPNRVGVFLDYEACTVSFFNVTNNGFLIYKFSNCHFCYPVFPYFSP\n" +
    "MTCELPMTLCSPSS\n" +
    ">Titi\n" +
    "MASRILVNIKEEVTCPICLELLTEPLSLDCGHSFCQACITANHKESTLHQGERSCPLCRISYPSENLRPNRHLANIVERL\n" +
    "REVVLSPEEGQKVDLCARHGEKLLLFCQQDGNVICWLCERSQEHRGHHTFLVEEVAQTYRENLQVVLEMMRQKHQDAEKL\n" +
    "EADVREEQASWKIQIQNDKTNIMAEFKQLRDILDCEESNELQNLEKEEKNILKRLVQSENDMVLQTQSISVLISDLEHRL\n" +
    "QGSVMELLQGVDGVIKRVKNVTLQKPKTFLNEKRRVFRVPDLKGMLQVSKELTEVQRYWAHVTLVASHPSRAVISEDERQ\n" +
    "VRYQEWIHQSSGRVKYFYGVLGSPSITSGKHYWEVDVSNKSAWILGVCVSLKCAANRNGPGVENYQPKNGYWVIGLRNAD\n" +
    "NYSAFQDSVKYNDFQDGSRSTTYAPLIVPLFMTICPNRVGVFLDYEACTVSFFNVTSNGFLIYKFSNCHFSYPVFPYFSP\n" +
    "MTCELPMTLCSPRS\n" +
    ">Saki\n" +
    "MASRILMNIKEEVTCPICLELLTEPLSLDCGHSFCQACITANHKKSMLHQGERSCPLCRISYPSENLRPNRHLANIVERL\n" +
    "REVMLSPEEGQKVDHCARHGEKLLLFCQQDGNVICWLCERSQEHRGHHTLLVEEVAQTYRENLQVALETMRQKQQDAEKL\n" +
    "EADVREEQASWKIQIRDDKTNIMAEFKQLRDILDCEESNELQILEKEEKNILKRLTQSENDMVLQTQSMGVLISDLEHRL\n" +
    "QGSVMELLQGVDEVIKRVKNVTLQKPKTFLNEKRRVFRAPDLKGMLQVFKELTEVQRYWVHVTLVPSHLSCAVISEDERQ\n" +
    "VRYQERIHQSFGKVKYFYGVLGSPSIRSGKHYWEVDVSNKSAWILGVCVSLKCTANRNGPRIENYQPKNGYWVIGLWNAG\n" +
    "NYSAFQDSVKYSDFQDGSHSATYGPLIVPLFMTICPNRVGVFLDYEACTVSFFNVTSNGFLIYKFSNCRFSDSVFPYFSP\n" +
    "MTCELPMTLCSPRS\n" +
    ">Howler\n" +
    "MASKILVNIKEEVTCPICLELLTEPLSLDCGHSFCQACITANHKESRERSCPLCRVSYHSENLRPNRHLANIAERLREVM\n" +
    "LSPEEGQKVDRCARHGEKLLLFCQQHGNVICWLCERSEEHRGHRTSLVEEVAQKYREKLQAALEMMRQKEQDAEMLEADV\n" +
    "REEQASWKIQIENDKTSTLAEFKQLRDILDCEESNELQKLEKEEENLLKRLVQSENDMVLQTQSIRVLIADLERRLQGSV\n" +
    "MELLQGVEGVIKRIKNVTLQKPETFLNEKRRVFQAPDLKGMLQVFKELKEVQCYWAHVTLIPNHPSCTVISEDKREVRYQ\n" +
    "EQIHHHPSMEVKYFYGILGSPSITSGKHYWEVDVSNKSAWILGVCVSLKCIGNFPGIENYQPQNGYWVIGLRNADNYSAF\n" +
    "QDAVPETENYQPKNRNRFTGLQNADNCSAFQNAFPGIQSYQPKKSHLFTGLQNLSNYNAFQNKVQYNYIDFQDDSLSTPS\n" +
    "APLIVPLFMTICPKRVGVFLDYEACTVSFFNVTSNGYLIYKFSNCQFSYPVFPYFSPMTCELPMTLCSPSS\n" +
    ">Spider\n" +
    "MASEILLNIKEEVTCPICLELLTEPLSLDCGHSFCQACITANHKESTLHQGERSCPLCRVSYQSENLRPNRHLANIAERL\n" +
    "REVMLSPEEGQKVDRCARHGEKLLLFCQQHGNVICWLCERSQEHRGHSTFLVEEVAQKYQEKLQVALEMMRQKQQDAEKL\n" +
    "EADVREEQASWKIQIENDKTNILAEFKQLRDILDCEESNELQNLEKEEENLLKTLAQSENDMVLQTQSMRVLIADLEHRL\n" +
    "QGSVMELLQDVEGVIKRIKNVTLQKPKTFLNEKRRVFRAPDLKGMLQVFKELKEVQCYWAHVTLVPSHPSCTVISEDERQ\n" +
    "VRYQEQIHQPSVKVKYFCGVLGSPGFTSGKHYWEVDVSDKSAWILGVCVSLKCTANVPGIENYQPKNGYWVIGLQNANNY\n" +
    "SAFQDAVPGTENYQPKNGNRRNKGLRNADNYSAFRDTFQPINDSWVTGLRNVDNYNAFQDAVKYSDFQDGSCSTPSAPLM\n" +
    "VPLFMTICPKRVGVFLDCKACTVSFFNVTSNGCLIYKFSKCHFSYPVFPYFSPMICKLPMTLCSPSS\n" +
    ">Woolly\n" +
    "MASEILVNIKEEVTCPICLDLLTEPLSLDCGHSFCQACITADHKESTLHQGERSCPLCRVGYQSENLRPNRHLANIAERL\n" +
    "REVMLSPEEGQKVDRCARHGEKLLLFCQQHGNVICWLCERSQEHRGHSTFLVEEVAQKYREKLQVALEMMREKQQDAEKL\n" +
    "EADVREEQASWKIQIKNDKTNILAEFKQLRDILDCEESNELQNLEKEEENLLKILAQSENDMVLQTQSMRVLIADLEHRL\n" +
    "QGSVMELLQGVEGIIKRTTNVTLQKPKTFLNEKRRVFRAPNLKGMLQVFKELKEVQCYWAHVTLVPSHPSCAVISEDQRQ\n" +
    "VRYQKQRHRPSVKAKYFYGVLGSPSFTSGKHYWEVDVSNKSAWILGVCVSLKCTANVPGIENYQPKNGYWVIGLQNADNY\n" +
    "SAFQDAVPGTEDYQPKNGCWRNTGLRNADNYSAFQDVFQPKNDYWVTGLWNADNYNAFQDAGKYSDFQDGSCSTPFAPLI\n" +
    "VPLFMTIRPKRVGVFLDYEACTVSFFNVTSNGCLIYKFSNCHFSCPVFPYFSPMTCKLPMTLCSPSS\n";
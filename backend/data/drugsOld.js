const drugs = [
  { label: '	SUGAMMADEX', tradeLabels: [{ label: '	BRIDION 200mg/2ml vial' }] },
  { label: '	smofkabevin', tradeLabels: [{ label: '	SMOFKABEVIN IV soln.' }] },
  { label: '	smofkabevin', tradeLabels: [] },
  { label: '	GLYCOPHOS', tradeLabels: [] },

  { label: '	HYDRALAZINE', tradeLabels: [{ label: '	HYDRALAZINE 20 mg Amp.' }] },
  { label: '	TIGECYCLINE', tradeLabels: [{ label: '	TYGACIL 50MG VIAL' }] },
  {
    label: '	APIXABAN',
    tradeLabels: [
      { label: '	ELIQUIS 2.5 mg tab.' },
      { label: '	ELIQUIS 5 mg tab.' },
    ],
  },

  { label: '	RIVAROXABAN', tradeLabels: [{ label: '	XARELTO 10 MG TABLET' }] },
  { label: '	METFORMIN', tradeLabels: [] },
  {
    label: '	ABATACEPT',
    tradeLabels: [{ label: '	ORENCIA lyophilized powder for IV infusion' }],
  },

  {
    label: '	ACARBOSE',
    tradeLabels: [
      { label: '	ACAROSE 50mg tab.' },
      { label: '	GLUCOBAY 50mg tab.' },
      { label: '	GLUCOBAY 100mg tab.' },
      { label: '	GLUCOBAY 100mg tab.' },
    ],
  },
  { label: '	ACEBUTOLOL', tradeLabels: [{ label: '	SECTRAL 200mg tab.' }] },

  {
    label: '	ACECLOFENAC',
    tradeLabels: [
      { label: '	BRISTAFLAM 100 mg tab.' },
      { label: '	AMOFLAM 100mg enteric coated tab.' },
      { label: '	FENAC 1.5% topical cream' },
      { label: '	BRISTAFLAM 1.5% cream' },
      { label: '	BRISTAFLAM 100 mg tab.' },
      { label: '	BRISTAFLAM 150mg vial' },
      { label: '	FENAC 100mg tab.' },
    ],
  },

  {
    label: '	ACEDIASULFONE+CINCHOCAINE+DIHYDROXYMETHYL CARBAMID',
    tradeLabels: [],
  },
  {
    label: '	ACEFYLLINE PIPERAZINE',
    tradeLabels: [
      { label: '	ETAPHYLLINE 500mg supp.' },
      { label: '	EPICOPHYLLINE 2.5g/100ml syrup' },
      { label: '	ETAPHYLLINE 100mg ped. supp.' },
    ],
  },
  {
    label: '	ACEFYLLINE PIPERAZINE+BROMHEXINE',
    tradeLabels: [{ label: '	MUCOPHYLLINE syrup' }],
  },

  {
    label: '	ACEFYLLINE PIPERAZINE+PHENOBARBITAL',
    tradeLabels: [
      { label: '	ETAPHYLLINE PHENOBARBITAL supp.' },
      { label: '	EPICOPHYLLINE PHENOBARBITONE syrup' },
      { label: '	ETAPHYLLINE PHENOBARBITAL syrup' },
    ],
  },

  {
    label: '	ACETAZOLAMIDE',
    tradeLabels: [
      { label: '	GLAUCOMIDE E.R.500mg caps.' },
      { label: '	ACETAMEX 250mg tab.' },
      { label: '	CIDAMEX 250mg tab.' },
      { label: '	DIAMOX 500mg vial' },
    ],
  },
  { label: '	ACETIC ACID', tradeLabels: [{ label: '	OTOSOL 2% ear drops' }] },
  {
    label: '	ACETIC ACID+CALCIUM CHLORIDE+MAGNESIUM CHLORIDE+PO',
    tradeLabels: [],
  },

  {
    label: '	ACETOROPHAN',
    tradeLabels: [{ label: '	ACETORPHAN CHILDREN 30mg oral sachet' }],
  },

  {
    label: '	ACETYLCYSTEINE',
    tradeLabels: [
      { label: '	ACESOLV 2% syrup' },
      { label: '	ACC 200mg sachets' },
      { label: '	ACC LONG 600mg effervescent tab.' },
      { label: '	ACETYLCISTEIN 200mg sachet' },
      { label: '	MUCOMYST 200mg/5ml susp.' },
      { label: '	MUCOMYST 200mg effervescent tab.' },
      { label: '	MUCOMYST 100mg/5ml susp.' },
      { label: '	MUCOMYST 200mg sachet' },

      { label: '	MUCOMYST 200mg sachet' },
      { label: '	ACETYLCISTEIN 600mg sachet' },
      { label: '	Windy Eff' },
      { label: '	Acetylcistein 200mg' },
      { label: '	Acetyl Cysteine 600' },
    ],
  },
  {
    label: '	ACETYLCYSTEINE+SILYMARIN',
    tradeLabels: [{ label: '	HEPAGUARD tab.' }],
  },

  {
    label: '	ASPIRIN',
    tradeLabels: [
      { label: '	ASPOCID 75 MG TABLET' },
      { label: '	AGGREX 75 MG TABLET' },
      { label: '	Aspico 81mg Tab' },
    ],
  },
  {
    label: '	ACETYLSALICYLIC ACID+ALUMINIUM GLYCINATE+MAGNESIUM',
    tradeLabels: [],
  },

  {
    label: '	ACETYLSALICYLIC ACID+CAFFEINE',
    tradeLabels: [
      { label: '	ASKINE 300/10 tab.' },
      { label: '	ASPINOL tab.' },
      { label: '	ASPIRIN CAF 350mg tab.B.P.93' },
      { label: '	ASKAFINE tab.' },
      { label: '	SUPER RIVO tab.' },
      { label: '	SUPER RIVO tab.' },
    ],
  },
  {
    label: '	ACETYLSALICYLIC ACID+CAFFEINE+CHLORPHENIRAMINE+DEX',
    tradeLabels: [],
  },

  {
    label: '	ACETYLSALICYLIC ACID+CAFFEINE+CHLORPHENIRAMINE+PHE',
    tradeLabels: [],
  },
  {
    label: '	ACETYLSALICYLIC ACID+CAFFEINE+CODEINE+PARACETAMOL+',
    tradeLabels: [],
  },
  {
    label: '	ACETYLSALICYLIC ACID+CAFFEINE+ORPHENADRIN',
    tradeLabels: [{ label: '	RELATIC f.c.tab.' }],
  },

  {
    label: '	ACETYLSALICYLIC ACID+CAFFEINE+PARACETAMOL',
    tradeLabels: [
      { label: '	MARKADEL f.c. tab.' },
      { label: '	CEFACET PLUS caps.' },
      { label: '	ASPICURE-COMBI f.c.tab.' },
      { label: '	EXCEDRIN tab.' },
    ],
  },
  {
    label: '	ACETYLSALICYLIC ACID+CODEINE+PARACETAMOL',
    tradeLabels: [{ label: '	VEGASKINE tab.' }],
  },

  {
    label: '	ACETYLSALICYLIC ACID+PHENOBARBITONE',
    tradeLabels: [{ label: '	DOLORAN paed.supp.' }],
  },
  {
    label: '	ACETYLSALICYLIC ACID+VITAMIN C',
    tradeLabels: [
      { label: '	ASPOCID C eff.tab.' },
      { label: '	ASPIRIN C effervescent tab.' },
    ],
  },
  {
    label: '	ACHILLEA+AMBROSIA LEAVES+AMMI VISNAGA+CHICORY LEAV',
    tradeLabels: [],
  },
  {
    label: '	ACHILLEA+ANISE+BASIL+CHAMOMILE+CHICORY+FENNEL+LEMO',
    tradeLabels: [],
  },

  {
    label: '	ACHILLEA+BASIL+CHAMOMILE+CHICORY+HIBISCUS+VERBASCU',
    tradeLabels: [],
  },
  {
    label: '	ACHILLEA+CAPPARIS+CASSIA+CICHORIUM+MANDUR. BHASMA+',
    tradeLabels: [],
  },
  {
    label: '	ACHILLEA+CHICORY+CURCUMA+FENNEL+LIQUORICE+ROSEMARY',
    tradeLabels: [],
  },
  {
    label: '	ACHYRANTHES+CYPERUS+DIDYMOCARPUS+HAJRUL YAHOOD BHA',
    tradeLabels: [],
  },

  {
    label: '	ACITRETIN',
    tradeLabels: [
      { label: '	NEOTIGASON  25mg caps.' },
      { label: '	ACITRETIN 10mg caps.' },
      { label: '	ACITRETIN 25mg caps.' },
      { label: '	NEOTIGASON 10mg caps.' },
      { label: '	UNITRIN 10mg hard gelatin caps' },
      { label: '	UNITRIN 25mg hard gelatin caps.' },
    ],
  },

  { label: '	ACRIVASTINE', tradeLabels: [{ label: '	SEMPREX  8mg  caps.' }] },
  {
    label: '	ACRIVASTINE+EPHEDRINE+PHOLCODINE',
    tradeLabels: [{ label: '	MARYNOL syrup' }],
  },
  {
    label: '	ACRIVASTINE+PSEUDOEPHEDRINE',
    tradeLabels: [{ label: '	SEMPRA-GUIDE caps.' }],
  },

  {
    label: '	ACTINOMYCIN D',
    tradeLabels: [{ label: '	COSMEGEN 0.5mg vial(Hospital)' }],
  },

  {
    label: '	ACYCLOVIR',
    tradeLabels: [
      { label: '	ACIVIRAX 800mg tab' },
      { label: '	Acivir 200mg tabs.' },
      { label: '	CYCLOVIRAL 200mg tab.' },
      { label: '	ACICLOVIR MYLAN  250mg vial' },
      { label: '	ACYCLOSTAD 5% cream' },
      { label: '	LOVIR 400mg tab.' },
      { label: '	ACYCLOVIR 200 mg caps.' },
      { label: '	ACYCLOVIR STADA 400mg tab.' },

      { label: '	ACYCLOVIR 800mg tab.' },
      { label: '	ACYCLOVIR 5% cream' },
      { label: '	ACYCLOVIR 400 STADA tab.' },
      { label: '	ACYCLOVIR 3% eye oint.' },
      { label: '	ACYCLOVIR 200mg tab.' },
      { label: '	ACYCLOVIR STADA 800mg tab.' },
      { label: '	ZOVIRAX 250mg I.V. infusion' },
      { label: '	ZOVIRAX  5% topical cream' },
      { label: '	ZOVIRAX  200mg/5ml susp.' },
      { label: '	ZOVIRAX 400mg  tab.' },

      { label: '	NOVIRUS 5% cream' },
      { label: '	ZOVIRAX D.S 400mg/5ml susp.' },
      { label: '	NOVIRUS 400  mg caps.' },
      { label: '	VIRUSTAT 5% cream.' },
      { label: '	NOVIRUS 200mg/5ml  susp.' },
      { label: '	NOVIRUS 200 mg Hard gelatin caps.' },
      { label: '	SUPRAVIRAN 250mg I.V vial' },
      { label: '	STERILE ACYCLOVIR 1 gm I.V injection' },
      { label: '	ZOVIRAX 3% eye oint.' },
      { label: '	STERILE ACYCLOVIR 500mg I.V injection' },

      { label: '	STERILE ACYCLOVIR 250 mgI.V injection' },
    ],
  },
  {
    label: '	ADAPALENE',
    tradeLabels: [
      { label: '	ADAGEL 0.1% topical gel.' },
      { label: '	ACNESCAVE 0.1% topical gel.' },
      { label: '	ACNE-JED 0.1% topical gel' },
      { label: '	ADAPALENE 0.1% gel' },
      { label: '	ADANOID 0.1% top. Gel' },
      { label: '	MARPALENE 0.1% topical cream' },
    ],
  },

  {
    label: '	ADEFOVIR',
    tradeLabels: [
      { label: '	HEPSERA 10mg tab.' },
      { label: '	FODAVIR 10mg tab.' },
    ],
  },
  {
    label: '	ADENOSINE TRIPHOSPHATE DISODIUM',
    tradeLabels: [{ label: '	REGENERATE 30mg caps.' }],
  },
  {
    label: '	ADENOSINE TRIPHOSPHATE+COCARBOXYLASE+NICOTINAMIDE+',
    tradeLabels: [],
  },

  {
    label: '	ADENOSINE+VITAMIN B6',
    tradeLabels: [{ label: '	MYOVITON tab.' }, { label: '	ADENO B6 f.c.tab.' }],
  },
  {
    label: '	ADIPHENINE+KANAMYCIN+KAOLIN',
    tradeLabels: [{ label: '	DIAKAN-M susp.' }],
  },

  {
    label: '	ADRENALINE',
    tradeLabels: [
      { label: '	EPINEPHRINE 1 mg/ml  INJ. U.S.P XXII' },
      { label: '	EPINEPHRINE 0.25 mg/ml amp.' },
      { label: '	EPINEPHRINE 0.25 mg/ml amp.' },
    ],
  },

  {
    label: '	ADRENALINE+ARTICAINE',
    tradeLabels: [
      { label: '	ARTINIBSA 40mg/0.01mg/ml  S.C./I.M. inj.' },
      { label: '	ARTINIBSA  40mg /0.005mg/ml sol. for S.C./I.M inj.' },
      { label: '	SEPTANEST N 4 % carp 1.8ml epinephrine 1:200 000' },
      { label: '	SEPTANEST SP 4% carp 1.8ml epinephrine 1:100 000' },
    ],
  },

  {
    label: '	ADRENALINE+LIDOCAINE',
    tradeLabels: [
      { label: '	LIDOCATON 2% 1:100000' },
      { label: '	XYLOCAINE ADRENALINE 2% vial' },
      { label: '	RAPICAINE 2% WITH EPINEPHRINE 1:100 000 cartirdge' },
      { label: '	OCTOCAINE HCL 2% WITH EPINEPHRINE inj.' },
    ],
  },
  {
    label: '	ADRENALINE+MEPIVACAINE',
    tradeLabels: [
      { label: '	SCANDONEST 2% SPECIAL carpoule 1.8ml epinephrine 1:100 000' },
    ],
  },

  {
    label: '	AESCIN',
    tradeLabels: [
      { label: '	FLOGENCYL 1.5% gel' },
      { label: '	PROSTATINE-1-rectal supp. 40 mg' },
      { label: '	REPARIL 40mg enteric coated tabs.' },
    ],
  },
  {
    label: '	AESCIN+DIETHYLAMINE SALICYLATE',
    tradeLabels: [{ label: '	REPARIL N topical gel' }],
  },
  {
    label: '	AESCIN+DIOSMIN+RUTOSIED',
    tradeLabels: [{ label: '	VARICOTONE caps.' }],
  },

  {
    label: '	AESCINE+DIETHYLAMINE SALICYLATE+HEPARINOID',
    tradeLabels: [{ label: '	ZADEMA Gel' }],
  },
  {
    label: '	AESCULIN+ARNICA+CALENDULA+CAMPHOR',
    tradeLabels: [
      { label: '	PROVENA COOL gel' },
      { label: '	PROVENA COOL gel' },
      { label: '	PROVENA COOL gel' },
    ],
  },

  {
    label: '	AESCULIN+CINCHOCAINE+FRAMYCETIN+HYDROCORTISONE',
    tradeLabels: [
      { label: '	PROCTOSEDYL oint.' },
      { label: '	PROCTO-4 supp.' },
      { label: '	PROCTO-4 cream' },
    ],
  },

  {
    label: '	ALBENDAZOLE',
    tradeLabels: [
      { label: '	ALZENTAL 200mg f.c.tab.' },
      { label: '	ALZENTAL 20mg/ml susp.' },
      { label: '	BENDAX 100mg/5ml susp.' },
      { label: '	ANTIZOLE 100mg/5ml susp.' },
      { label: '	ANTIZOLE 200mg tab.' },
      { label: '	BENDAX 100mg/5ml susp.' },
      { label: '	BENDAX 200 mg  tablet' },
      { label: '	VERMIZOLE 200mg/5ml susp.' },

      { label: '	VERMIZOL 200mg tab.' },
      { label: '	VERMIZOL 200mg tab.' },
      { label: '	ZENTEL tab. 200 mg' },
    ],
  },
  {
    label: '	ALCLOMETASONE',
    tradeLabels: [
      { label: '	ALMITAT 0.5mg/g topical cream' },
      { label: '	ALMITAT 0.05% oint.' },
      { label: '	PERDERM 0.5mg/g oint.' },
      { label: '	PERDERM 0.5mg/gm cream' },
    ],
  },

  {
    label: '	ALCURONIUM CHLORIDE',
    tradeLabels: [{ label: '	ALLOFERINE"ROCHE"10 mg/2 ml amp.' }],
  },
  {
    label: '	ALDESLEUKIN',
    tradeLabels: [{ label: '	PROLEUKIN VIAL 18 M.I.U.' }],
  },

  {
    label: '	ALENDRONATE SODIUM',
    tradeLabels: [
      { label: '	BONAPEX 10mg tab.' },
      { label: '	BONAPEX 5mg tab.' },
      { label: '	BONALENE 70mg tab.' },
      { label: '	OSTEONATE 10mg tab.' },
      { label: '	OSTEONATE 10mg tab.' },
    ],
  },

  {
    label: '	ALENDRONATE SODIUM+VITAMIN D3',
    tradeLabels: [
      { label: '	EGYDRONATE scored tabs.' },
      { label: '	COLICALCEDRON.' },
    ],
  },

  {
    label: '	ALENDRONIC ACID',
    tradeLabels: [
      { label: '	ALENDEX 10mg tab.' },
      { label: '	ALENDEX 40mg tab.' },
      { label: '	FOSAMAX ONCE WEEKLY 70mg tab.' },
      { label: '	FOSAMAX 10mg tab.' },
      { label: '	ALENDOMAX 10mg tabet' },
      { label: '	BONAPEX 70mg f.c.tab.' },
      { label: '	ALENDOMAX 40 mg tablet' },
      { label: '	ALENDENE 70mg tab.' },

      { label: '	ALENDOMAX 10mg tabet' },
      { label: '	ALENDRAN 10mg tab.' },
      { label: '	ALENDENE 5mg tab.' },
      { label: '	OSTEOMAX 5mg tab.' },
      { label: '	OSTEOMEPHA 70mg tab.' },
      { label: '	OSTEOMAX 40mg f.c.tab.' },
      { label: '	OSTEONATE 70mg tab.' },
    ],
  },
  {
    label: '	ALENDRONIC ACID + VITAMIN D3',
    tradeLabels: [{ label: '	FOSAVANCE tab.' }],
  },

  {
    label: '	ALFACALCIDOL',
    tradeLabels: [
      { label: '	ALFACALCIDOL 2mcg/ml oral drops.' },
      { label: '	BON-ONE 0.25mcg tab.' },
      { label: '	BON-ONE 1mcg tab.' },
      { label: '	CALCIDOL 0.25mcg soft gelatin caps.' },
      { label: '	BONE CARE 0.5mcg soft gelatin caps.' },
      { label: '	CALCIDOL 1mcg soft gelatin caps.' },
      { label: '	ONE ALPHA 0.25mcg caps.' },
      { label: '	ONE ALPHA 1mcg caps.' },

      { label: '	ONE ALPHA 1mcg caps.' },
      { label: '	ONE ALPHA 2mcg/ml oral drops' },
      { label: '	ONE ALPHA 0.5mcg soft gelatin caps.' },
      { label: '	ONE ALPHA 2mcg/ml amp.' },
      { label: '	ONE ALPHA 2mcg/ml amp.' },
      { label: '	ONE ALPHA 0.25mcg caps.' },
      { label: '	ONE ALPHA  0.2mcg/ml oral drops' },
      { label: '	REN-ALPHA 0.25 mcg soft gelatin caps.' },
      { label: '	REN-ALPHA 1 mcg soft gelatin caps.' },
    ],
  },

  {
    label: '	ALFUZOSIN',
    tradeLabels: [
      { label: '	ALFATRAL 5mg S.R. f.c.tab.' },
      { label: '	AIG ALFUZOSIN XR 10mg Extended release f.c.tab' },
      { label: '	BENPROSTEX 10mg S.R.tab.' },
      { label: '	ALFUPROST 5mg S.R.tab.' },
      { label: '	PROSTETROL 10mg M.R.tab.' },
      { label: '	XATRAL 5mg S.R.f.c.tab.' },
    ],
  },

  {
    label: '	ALIZAPRIDE',
    tradeLabels: [{ label: '	NAUSILEX 50mg/2ml I.V/I.M amp.' }],
  },
  {
    label: '	ALLANTOIN+COAL TAR',
    tradeLabels: [{ label: '	ALPHOSYL cream.' }, { label: '	ALPHOSYL lotion' }],
  },

  {
    label: '	ALLANTOIN+HEPARIN+ONION EXTRACT',
    tradeLabels: [
      { label: '	CONTRACTUBEX gel' },
      { label: '	CONTRACTUBEX gel' },
      { label: '	SCARTEX gel' },
    ],
  },
  {
    label: '	ALLANTOIN+OXYQUINOL+SALICYLIC ACID',
    tradeLabels: [{ label: '	BIOCLEAR  lotion' }],
  },
  {
    label: '	ALLOBARBITONE+HEXAHYDROADEPHENINE HYDROCHLORIDE+PR',
    tradeLabels: [],
  },

  {
    label: '	ALLOPURINOL',
    tradeLabels: [
      { label: '	CRYSTASOL 300mg tab.' },
      { label: '	LESSURIC 300mg tab.' },
      { label: '	ALLOPURINOL 300mg tab.' },
      { label: '	LESSURIC 100mg tab.' },
      { label: '	HIGH PURE 200mg tab.' },
      { label: '	PURINOL 300mg S.R.caps.' },
      { label: '	NO-URIC 300mg tab.' },
      { label: '	ZYLORIC 300mg tab.' },

      { label: '	URIC PURE 100mg tab.' },
      { label: '	ZYLORIC 100mg tab.' },
      { label: '	NO-URIC 100mg tab.' },
      { label: '	URIC PURE 300mg Tablets' },
    ],
  },
  {
    label: '	ALLOPURINOL+BENZBROMARONE',
    tradeLabels: [
      { label: '	HARPAGIN f.c.tab.' },
      { label: '	ALLOBEN tab.' },
      { label: '	DESATURA tab.' },
    ],
  },

  { label: '	ALLYLESTRENOL', tradeLabels: [{ label: '	GESTANON 5 mg tab' }] },
  {
    label: '	ALMITRINE+RAUBASINE',
    tradeLabels: [{ label: '	DUXIL oral drops' }, { label: '	DUXIL f.c.tab.' }],
  },
  {
    label: '	ALMOTRIPTAN',
    tradeLabels: [{ label: '	TRIPTAGRAIN 12.5mg f.c. tabs.' }],
  },

  {
    label: '	ALOE CAPENSIS+OCTADECADIENOIC ACID+OCTADECENOIC AC',
    tradeLabels: [],
  },
  {
    label: '	ALOE+BELLADONNA+COLOCYNTH+SCAMMONY RESIN',
    tradeLabels: [{ label: '	NASSAR f.c.tab.' }],
  },
  { label: '	ALOE+PROPOLIS', tradeLabels: [{ label: '	ALOREED oint.' }] },

  {
    label: '	ALPHA AMYLASE',
    tradeLabels: [
      { label: '	MEGALASE 3000 CEIP unit f.c. tab.' },
      { label: '	MEDMYLEZEN syrup' },
      { label: '	MAXILASE 20.000 CEIP unit/100ml syrup.' },
      { label: '	MEGALASE 20000 CEIP unit/100ml syrup' },
      { label: '	MAXILASE 20.000 CEIP unit/100ml syrup.' },
    ],
  },
  {
    label: '	ALPHA PINENE+ANETHOL+BETA PINENE+BORNEOL+CAMPHENE+',
    tradeLabels: [],
  },
  {
    label: '	ALPHA PINENE+BETA PINENE+BORNEOL+CAMPHENE+CINEOL+M',
    tradeLabels: [],
  },

  {
    label: '	ALPRAZOLAM',
    tradeLabels: [
      { label: '	ALPRAX 1mg S.R. caps.' },
      { label: '	ANXIGO S.R 0.5mg tab.' },
      { label: '	ANXIGO S.R 1mg tab.' },
      { label: '	ALPRAX 1mg tabs.' },
      { label: '	RESTOLAM 1mg tab.' },
      { label: '	PRAZONEX 0.5mg tab.' },
      { label: '	PRAZOLAM 0.5mg tab.' },
      { label: '	ZOLAPAR XR 3mg tab' },

      { label: '	PRAZOLAM 0.25 mg  tab.' },
      { label: '	RESTOLAM 0.25mg tab.' },
      { label: '	ZOLAPAR XR 0.5mg tab.' },
      { label: '	RESTOLAM 0.5mg tab.' },
      { label: '	ZOLAPAR 2mg tab.' },
      { label: '	ZOLAPAR 0.5mg tab.' },
      { label: '	ZOLAPAR 0.25mg tab.' },
      { label: '	ZOLAM 0.25mg tab.' },
      { label: '	XANAX  0.25mg tab.' },
      { label: '	XANAX  0.5 mg tab.' },

      { label: '	XANAX XR 0.5mg S.R.tab.' },
      { label: '	XANAX XR 1mg tab.' },
      { label: '	ZOLAPAR XR 1mg tab.' },
      { label: '	ZOLAM 0.5mg tab.' },
    ],
  },
  { label: '	ALPROSTADIL', tradeLabels: [{ label: '	PROSTAVASIN 20mcg amp.' }] },
  {
    label: '	ALUM+BORIC ACID+EUCALYPTUS OIL+LACTOSE+MENTHOL+MET',
    tradeLabels: [],
  },

  {
    label: '	ALUMINA GEL+CLIOQUINOL+STREPTOMYCIN',
    tradeLabels: [{ label: '	ENTEROMYCIN  dry syrup' }],
  },
  {
    label: '	ALUMINIUM ACETATE+LIDOCAINE+PREDNISOLONE+RUSCUS EX',
    tradeLabels: [],
  },
  {
    label: '	ALUMINIUM ASPIRIN',
    tradeLabels: [
      { label: '	ALUSPRIN FORTE NASR 300mg chewable tab.' },
      { label: '	ALEXOPRINE 75mg chew.tab.' },
      { label: '	ALEXOPRINE FORTE 300mg tab.' },
      { label: '	ALUSPIRIN NASR 75mg chewable tab.' },
    ],
  },

  {
    label: '	ALUMINIUM CHLORIDE+CALCIUM HYDROXIDE+MENTHOL',
    tradeLabels: [{ label: '	ZADSILLA Gargle' }],
  },
  {
    label: '	ALUMINIUM DIHYDROXY ALLANTOINATE+CETYLPYRIDINIUM C',
    tradeLabels: [],
  },
  {
    label: '	ALUMINIUM HYDROXIDE+ MAGNESIUM TRISILICATE + SODIU',
    tradeLabels: [],
  },
  {
    label: '	ALUMINIUM HYDROXIDE+ALUMINIUM PHOSPHATE+MAGNESIUM ',
    tradeLabels: [],
  },
  {
    label: '	ALUMINIUM HYDROXIDE+BISMUTH CITRATE+LIQUORICE EXTR',
    tradeLabels: [],
  },

  {
    label: '	ALUMINIUM HYDROXIDE+DIMETHICONE+MAGNESIUM HYDROXID',
    tradeLabels: [],
  },
  {
    label: '	ALUMINIUM HYDROXIDE+DIMETHICONE+MAGNESIUM OXIDE',
    tradeLabels: [
      { label: '	GELCOSICONE susp.' },
      { label: '	ALKASILON  susp.' },
      { label: '	ALUSIL chewable tab.' },
    ],
  },
  {
    label: '	ALUMINIUM HYDROXIDE+FAMOTIDINE+MAGNESIUM HYDROXIDE',
    tradeLabels: [{ label: '	EPCIFAM PLUS chewable tab.' }],
  },

  {
    label: '	ALUMINIUM HYDROXIDE+MAGALDRATE+MAGNESIUM HYDROXIDE',
    tradeLabels: [{ label: '	COMPAGENE tab.' }],
  },
  {
    label: '	ALUMINIUM HYDROXIDE+MAGNESIUM CARBONATE+SILICA',
    tradeLabels: [{ label: '	TOPAL sachets' }],
  },
  {
    label: '	ALUMINIUM HYDROXIDE+MAGNESIUM HYDROXIDE',
    tradeLabels: [{ label: '	ANTACIDIN tab.' }],
  },

  {
    label: '	ALUMINIUM HYDROXIDE+MAGNESIUM HYDROXIDE+OXETHAZINE',
    tradeLabels: [{ label: '	MUCOGEL susp.' }, { label: '	MUCALGIN susp.' }],
  },
  {
    label: '	ALUMINIUM HYDROXIDE+MAGNESIUM HYDROXIDE+SIMETHICON',
    tradeLabels: [],
  },
  {
    label: '	ALUMINIUM HYDROXIDE+MAGNESIUM OXIDE',
    tradeLabels: [{ label: '	NEO-GELCO susp.' }, { label: '	SIMECO susp.' }],
  },

  {
    label: '	ALUMINIUM HYDROXIDE+MAGNESIUM OXIDE+OXETHAZINE',
    tradeLabels: [{ label: '	GELCOCAINE susp' }],
  },
  {
    label: '	ALUMINIUM HYDROXIDE+MAGNESIUM TRISILICATE+PEPPERMI',
    tradeLabels: [],
  },
  {
    label: '	ALUMINIUM OXIDE+MAGNESIUM HYDROXIDE',
    tradeLabels: [{ label: '	MAALOX STOMACH PAIN oral susp. in sachets.' }],
  },
  {
    label: '	ALUMINUM HYDROXIDE GEL+ALUMINUM HYDROXIDE-MAGNESIU',
    tradeLabels: [],
  },

  {
    label: '	ALVERINE CITRATE+SIMETHICONE',
    tradeLabels: [{ label: '	METEOSPAMYL soft gelatin caps.' }],
  },

  {
    label: '	AMANTADINE',
    tradeLabels: [
      { label: '	AMANTINE 100mg caps.' },
      { label: '	ADAMINE 100mg caps.' },
      { label: '	INFEX 100mg f.c.tab.' },
      { label: '	AMANTADINE 100mg caps.' },
      { label: '	PK-MERZ 100mg f.c.tab.' },
      { label: '	VIRAFLU  100mg capsule' },
      { label: '	PK-MERZ INFUSION' },
    ],
  },

  {
    label: '	AMBROSIA LEAVES+CHAMOMILE+DANDELION ROOT+PARSLEY+P',
    tradeLabels: [],
  },
  {
    label: '	AMBROSIA+AMMI VISNAGA+CARUM+CELERY+CORN SILK STIGM',
    tradeLabels: [],
  },

  {
    label: '	AMBROXOL',
    tradeLabels: [
      { label: '	MUCOSIN SR 75mg caps.' },
      { label: '	BRONCHOPRO 15mg/5ml syrup' },
      { label: '	MUCOSIN 7.5mg/ml oral drops' },
      { label: '	MUCOPECT 7.5mg/ml oral drops' },
      { label: '	MUCOPECT 15mg/5ml syrup' },
      { label: '	AMBROXOL 15 mg/5ml syrup' },
      { label: '	MUCOFAR 15mg/5ml syrup' },
      { label: '	MUCOLINE 30mg tab.' },

      { label: '	AMBROXOL 75mg S.R caps.' },
      { label: '	MUCOSIN 15mg Lozenges' },
      { label: '	MUCO 75mg S.R.caps' },
      { label: '	MUCO 15mg/5ml syrup' },
      { label: '	AMBROXOL 7.5mg/ml oral drops' },
      { label: '	MUCOSOLVAN 15 mg/2ml amp.' },
      { label: '	MUCOBROXOL 75mg S.R.caps.' },
      { label: '	AMBROXOL 30 mg tab.' },
      { label: '	MUCOSOLVAN 15mg/2ml inhalation sol.' },
      { label: '	MUCOSOLVAN 15mg/5ml syrup.' },

      { label: '	MUCOSOLVAN 30mg tab.' },
      { label: '	BRONCHOPRO 7.5mg/ml oral drops' },
      { label: '	BRONCHOPRO RETARD 75mg caps.' },
    ],
  },
  {
    label: '	AMBROXOL+DOXYCYCLINE',
    tradeLabels: [
      { label: '	DOXY PLUS STADA 100mg M.R.caps.' },
      { label: '	MUCOCYCLINE S.R.caps.' },
      { label: '	AMBRODOXY caps.' },
    ],
  },

  { label: '	AMBROXOL+GUAIFENESIN', tradeLabels: [{ label: '	MUCOSIN syrup' }] },

  {
    label: '	AMBROXOL+GUAIFENESIN+THEOPHYLLINE',
    tradeLabels: [
      { label: '	FARCOSOLVINE soft gelatin caps.' },
      { label: '	FARCO SOLVIN syrup' },
      { label: '	TRISOLVIN elixir' },
      { label: '	TRI-BROXOL soft gelatin caps.' },
      { label: '	TRI-BROXOL syrup' },
      { label: '	TRISOLVIN soft gelatin caps.' },
    ],
  },

  {
    label: '	AMIDOTRIZOIC ACID',
    tradeLabels: [{ label: '	UROVISON 58 % AMP.' }],
  },
  {
    label: '	AMIDOTRIZOIC ACID+MEGLUMINE SALT+SODIUM AMIDOTRIZO',
    tradeLabels: [],
  },

  {
    label: '	AMIKACIN',
    tradeLabels: [
      { label: '	AMIKACIN 500mg/2ml vial' },
      { label: '	EPIKACIN 250mg/2ml vial' },
      { label: '	AMIKIN 100mg/2ml vial' },
      { label: '	AMIKIN 500mg/2ml vial' },
      { label: '	AMIKACIN 500mg/2ml I.M./I.V. vial' },
      { label: '	AMIKACIN 250mg/2ml vial' },
      { label: '	AMIKACIN 1gm vial' },
      { label: '	AMIKACIN 100mg/2ml vial' },

      { label: '	AMIKACIN 100mg/2ml I.M./I.V. vial' },
      { label: '	AMIKIN 250mg/2ml vial' },
    ],
  },
  {
    label: '	AMILORIDE+ATENOLOL+HYDROCHLOROTHIAZIDE',
    tradeLabels: [{ label: '	ATENORETIC caps.' }],
  },

  {
    label: '	AMILORIDE+HYDROCHLOROTHIAZIDE',
    tradeLabels: [
      { label: '	HYDIKAL tab.' },
      { label: '	MODURETIC 5/50mg tab.' },
      { label: '	YOSTIRETIC tab.' },
      { label: '	SALURETIC tab.' },
    ],
  },
  {
    label: '	AMINACRINE+LIDOCAINE',
    tradeLabels: [{ label: '	MEDIJEL oral gel' }],
  },

  {
    label: '	AMINO ACIDS IV INFUSION',
    tradeLabels: [
      { label: '	AMINOPLASMAL 10% I.V.infusion' },
      { label: '	AMINOLEBAN I.V. infusion' },
      { label: '	AMINOLEBAN EN sachets' },
      { label: '	AMINOPLASMAL HEPA 10% I.V.infusion' },
      { label: '	AMINOSTERILE KE 10% I.V.infusion' },
      { label: '	KETOSTERIL f.c. tab.' },
      { label: '	AMINOSYN 7% infusion inj.' },
      { label: '	AMINOSTERIL N HEPA 8% I.V.infusion' },

      { label: '	AMINOVEN INFANT 10% I.V.infusion' },
      { label: '	NEPHRO STERIL 7% I.V.infusion' },
      { label: '	AMINOVENOUS N.Paed 6% I.V.infusion' },
      { label: '	AMINOSYN 10 % infusion inj.' },
      { label: '	VAMIN GLUCOSE I.V.infusion (CANCELED)' },
      { label: '	PAN AMIN G I.V. infusion' },
      { label: '	PAN-AMIN G  I.V.infusion.' },
      { label: '	VAMIN-N KABI I.V.infusion (CANCELED)' },
      { label: '	AMIPAREN I.V.infusion' },
      { label: '	KIDMIN IV solution' },
    ],
  },
  {
    label: '	AMINO ACIDS+ELECTROLYTES',
    tradeLabels: [
      { label: '	AMINOPLASMAL 5%E I.V. infusion' },
      { label: '	AMINOPLASMAL 10% E I.V.infusion' },
    ],
  },
  {
    label: '	AMINO ACIDS+LIPIDS',
    tradeLabels: [{ label: '	VITRIMIX KV I.V.infusion Hospital.' }],
  },
  {
    label: '	AMINO ACIDS+SORBITOL',
    tradeLabels: [{ label: '	PAN AMIN SG I.V. infusion' }],
  },

  {
    label: '	AMINO ACIDS+VITAMINS',
    tradeLabels: [{ label: '	LIPOSIS-V  tab.' }],
  },
  {
    label: '	AMINOACRIDINE+LIDOCAINE',
    tradeLabels: [{ label: '	SEPTOGEL oral gel' }],
  },
  {
    label: '	AMINOGLUTETHIMIDE',
    tradeLabels: [{ label: '	ORIMETEN 250 mg tab.' }],
  },

  {
    label: '	AMINOPHYLLINE',
    tradeLabels: [
      { label: '	AMRIPHYLLIN 250mg supp.' },
      { label: '	AMINOPHYLLINE 0.116gm/5ml syrup.U.S.P.22' },
    ],
  },

  {
    label: '	AMIODARONE',
    tradeLabels: [
      { label: '	AMIOCORD 200mg tab.' },
      { label: '	CARDIO MEP 200mg tab.' },
      { label: '	FARCODARONE 200mg tab.' },
      { label: '	CORDARONE 200mg tab.' },
      { label: '	FARCODARONE CONCENTRATE 50mg/ml amp.' },
      { label: '	CARDIO MEP 150mg/3ml iv amp.' },
      { label: '	CORDARONE 200mg tab.' },
      { label: '	RONECARD 200mg tab.' },

      { label: '	SEDACORON 200mg tab.' },
      { label: '	RONECARD 150mg/3ml I.V.amp.' },
    ],
  },
  { label: '	AMISULPRIDE', tradeLabels: [{ label: '	AMIPRIDE 50mg tab.' }] },

  {
    label: '	AMITRIPTYLINE',
    tradeLabels: [
      { label: '	AMITRIPTINE 75mg S.R.caps.' },
      { label: '	AMITRIPTINE 50mg tab.' },
      { label: '	TRYPTIZOLE 25mg tab.' },
      { label: '	TRYPTIZOL 10mg tab.' },
      { label: '	TRYPTIZOL 10mg tab.' },
    ],
  },
  {
    label: '	AMLEXANOX',
    tradeLabels: [{ label: '	APHTHTAB  2mg Buccal bioadhesive tab.' }],
  },

  {
    label: '	AMLODIPINE',
    tradeLabels: [
      { label: '	AMLODIPINE WINTHROP 10mg tabs.' },
      { label: '	AMLODIPINE 5mg tab.' },
      { label: '	CARDIOVASC 10mg tab.' },
      { label: '	AMLODIPINE WINTHROP 5mg tabs.' },
      { label: '	AMLOWEST 2.5mg tab.' },
      { label: '	MYODURA 10mg tab.' },
      { label: '	ALKAPRESS 5mg tab.' },
      { label: '	ALKAPRESS 10mg tab.' },

      { label: '	MYODURA 5mg tab.' },
      { label: '	AMILO 5mg tab.' },
      { label: '	VISCAL 5mg tab.' },
      { label: '	NORTENS 5mg tab.' },
      { label: '	NORVASC 10mg tab.' },
      { label: '	VASOPINE 5mg tab.' },
      { label: '	VASONORM 10mg tab.' },
      { label: '	REGCOR 5mg tab.' },
      { label: '	VASONORM 5mg tab.' },
      { label: '	NORVASC 5mg tab.' },

      { label: '	Norvasc 5mg Tab' },
    ],
  },
  {
    label: '	AMLODIPINE+ATORVASTATIN',
    tradeLabels: [
      { label: '	CADUET 5/10mg f.c. tabs.' },
      { label: '	AMLOSTEROLEN 5/20mg f.c. tabs.' },
      { label: '	AMLOSTEROLEN 10/40mg f.c. tabs.' },
      { label: '	CADUET 10/10 f.c. tabs.' },
    ],
  },

  {
    label: '	AMLODIPINE+BENAZEPRIL',
    tradeLabels: [
      { label: '	AMLOBENZAMIR 10/20mg hard gelatin caps.' },
      { label: '	AMLOBENZAMIR 5/20mg hard gelatin caps.' },
      { label: '	AMLO-ACE 5/10 hard gelatin caps.' },
      { label: '	AMLOBENZAMIR 5/10mg hard gelatin caps.' },
      { label: '	LOADLESS 2.5/10mg hard gelatin caps.' },
      { label: '	LOADLESS 5/20mg hard gelatin cap' },
      { label: '	AMLOBENZAMIR 2.5/10mg hard gelatin caps.' },
      { label: '	NORVAPRIL 5/20mg hard gelatin caps.' },
    ],
  },

  {
    label: '	AMLODIPINE+VALSARTAN',
    tradeLabels: [
      { label: '	ALKAPRESS PLUS 5/160mg f.c. tab.' },
      { label: '	BLOKATENS 5/160mg f.c. tab.' },
      { label: '	BLOKATENS 10/160mg f.c.tab.' },
      { label: '	EXFORGE 10mg/160mg f.c. tab.' },
      { label: '	EXFORGE 5mg/160mg f.c. tab.' },
    ],
  },
  {
    label: '	AMMI VISNAGA+CHAMOMILE+CITRUS  FLOWERS+HIBISCUS+HY',
    tradeLabels: [],
  },

  {
    label: '	AMMONIATED MERCURY',
    tradeLabels: [
      { label: '	AMMONIATED MERCURY 5gm/100gm oint.' },
      { label: '	AMMONIATED MERCURY 5% oint.' },
      { label: '	WHITE PRECIPITATE 1.5gm oint. E.P.84' },
    ],
  },
  {
    label: '	AMMONIUM CHLORIDE+CHLORPHENERAMINE+GUAIPHENSIN+PHE',
    tradeLabels: [],
  },
  {
    label: '	AMMONIUM CHLORIDE+CHLORPHENIRAMINE+IPECA+SODIUM CA',
    tradeLabels: [],
  },

  {
    label: '	AMMONIUM CHLORIDE+DIPHENHYDRAMINE',
    tradeLabels: [{ label: '	ISILIN syrup' }, { label: '	BENALEX syrup' }],
  },
  {
    label: '	AMMONIUM CHLORIDE+DIPHENHYDRAMINE+EPHEDRINE+IPECA+',
    tradeLabels: [],
  },
  {
    label: '	AMMONIUM CHLORIDE+DIPHENHYDRAMINE+SODIUM CITRATE',
    tradeLabels: [{ label: '	KOFFEX ADULT syrup' }],
  },
  {
    label: '	AMMONIUM CHLORIDE+DIPHENYLHYDRAMINE+MENTHOL+SODIUM',
    tradeLabels: [],
  },

  {
    label: '	AMMONIUM CHLORIDE+EPHEDRINE+IPECA',
    tradeLabels: [{ label: '	KOFFEX CHILDREN syrup' }],
  },
  {
    label: '	AMMONIUM CHLORIDE+PHENIRAMINE',
    tradeLabels: [{ label: '	AVIPECT syrup' }],
  },
  {
    label: '	AMMONIUM CHLORIDE+PROMETHAZINE+SENEGA EXTRACT+SODI',
    tradeLabels: [],
  },
  {
    label: '	AMMONIUM CHLORIDE+SALBUTAMOL',
    tradeLabels: [{ label: '	FARCOLIN syrup' }],
  },

  {
    label: '	AMMONIUM MOLYBDATE+COBALT+COPPER+IRON+MAGNESIUM+SO',
    tradeLabels: [],
  },

  {
    label: '	AMOXICILLIN',
    tradeLabels: [
      { label: '	ALEMOX 750mg f.c.tab.' },
      { label: '	FARCONCIL 1gm vial' },
      { label: '	EPCIMOX 250mg oral disintegrating tab.' },
      { label: '	MOXYNIL 500mg vial' },
      { label: '	MOXYNIL 250mg vial' },
      { label: '	AMOXICID  250mg caps.' },
      { label: '	MOXIPEN 500mg caps.' },
      { label: '	MOXIPEN 250mg/5ml susp.' },

      { label: '	ALEMOX 1gm f.c.tab.' },
      { label: '	HICILLIN 250mg/5ml susp.' },
      { label: '	FARCONCIL 250mg vial' },
      { label: '	FARCONCIL 500mg vial' },
      { label: '	MOXIPEN  125mg/5ml susp.' },
      { label: '	MOXIPEN 250mg caps.' },
      { label: '	FARCONCIL 250mg caps.' },
      { label: '	HICILLIN 125mg/5ml susp.' },
      { label: '	IBIAMOX 500mg vial' },
      { label: '	E-MOX 500mg capsules' },

      { label: '	E-MOX 500mg (I.M./ I.V.) vial' },
      { label: '	E-MOX 400mg susp.' },
      { label: '	E-MOX 400mg susp.' },
      { label: '	E-MOX 250mg/5ml susp.' },
      { label: '	E-MOX 250mg/5ml susp.' },
      { label: '	AMOXYCILLIN  250 mg/5 ml susp.' },
      { label: '	E-MOX 1gm IM & IV vial' },
      { label: '	E-MOX 125mg/5ml susp.' },
      { label: '	IBIAMOX 250mg/5ml susp.' },
      { label: '	IBIAMOX 400mg/5ml susp.' },

      { label: '	IBIAMOX 250mg vial' },
      { label: '	IBIAMOX 500mg vial' },
      { label: '	E-MOX 250mg vial' },
      { label: '	IBIAMOX 875mg f.c.tab.' },
      { label: '	AMOXIL 1gm vial' },
      { label: '	AMOXYCILLIN 500mg caps B.P.2007' },
      { label: '	HICONCIL 100gm/ml paed.drops' },
      { label: '	IBIAMOX 200mg/5ml susp.' },
      { label: '	DELPEDOX 875mg f.c.tab.' },
      { label: '	DELPEDOX 400mg/5ml pd. For oral susp.' },

      { label: '	AMOXIL 250mg vial' },
      { label: '	AMOXIL 500mg  vial' },
      { label: '	AMOXIL 500mg Capsule' },
      { label: '	AMOXIL FORT 250mg/5ml suspension' },
      { label: '	AMOXIL suspension 125mg/5ml' },
      { label: '	IBIAMOX 500mg caps.' },
      { label: '	HICONCIL 250mg/5ml susp.' },
      { label: '	AMOXICID 500mg caps.' },
      { label: '	AMOXICILLIN 125 mg instant dry syrup' },
      { label: '	BIOMOX 125mg/5ml susp.' },

      { label: '	E-MOX 125mg/5ml susp.' },
      { label: '	AMOXICID 125mg/5ml  susp.' },
      { label: '	HICONCIL 500mg caps.' },
      { label: '	BIOMOX 250mg vial' },
      { label: '	BIOMOX 250mg/5ml susp.' },
      { label: '	BIOMOX 500mg caps.' },
      { label: '	AMOXICILLIN 250mg caps.' },
      { label: '	BIOMOX 250mg caps.' },
      { label: '	AMOXICILLIN 500mg caps.USP XXI' },
      { label: '	IBIAMOX 125mg/5ml syrup.' },

      { label: '	HICONCIL 250mg caps.' },
      { label: '	HICONCIL 250mg/5ml susp.' },
      { label: '	IBIAMOX 1gm vial' },
      { label: '	AMOXICILLIN CLAVULANATE 156mg/5ml susp.U.S.P.23' },
      { label: '	HICONCIL 125mg/5ml susp.' },
      { label: '	IBIAMOX 250mg caps.' },
      { label: '	EPCIMOX 125mg oral disintegrating tab.' },
      { label: '	IBIAMOX 1gm tab.' },
      { label: '	HICONCIL 125mg/5ml susp.' },
      { label: '	OSPAMOX 1gm dispersable tab.' },

      { label: '	UNIMOX 100mg/ml oral drops' },
      { label: '	OSPAMOX 1000mg f.c.tab.' },
      { label: '	OSPAMOX 750mg f.c.tab.' },
      { label: '	UNIMOX 1gm f.c.tab.' },
    ],
  },

  {
    label: '	AMOXICILLIN+CLAVULANIC ACID',
    tradeLabels: [
      { label: '	MAGNABIOTIC 625mg tab.' },
      { label: '	AUGMENTIN 6.25mg/ml  infant drops' },
      { label: '	AUGMACILLIN 200/28.5 mg/5ml susp.' },
      { label: '	AUGMENTIN 457mg/5ml susp.' },
      { label: '	AUGMACILLIN 400/57mg/5ml susp.' },
      { label: '	MAGNABIOTIC 600mg vial' },
      { label: '	AUGMENTIN 156 mg/5 ml suspension' },
      { label: '	AUGMENTIN 312 mg/5ml suspension' },

      { label: '	AUGMENTIN 1gm tablet' },
      { label: '	MAGNA-BIOTIC 312.5mg/5ml susp.' },
      { label: '	AUGMENTIN 1.2g vial for I.V. inj./inf.' },
      { label: '	MEGAMOX 228mg susp.' },
      { label: '	CLAVIMOX 600mg vial' },
      { label: '	CLAVUCIN 1.2gm I.V.vial' },
      { label: '	AUGMENTIN 625mg f.c.tab.' },
      { label: '	CLAVUCIN 375mg f.c.tab.' },
      { label: '	AUGMENTIN ES-600TM pd. for oral susp.' },
      { label: '	AUGMENTIN tablet 375 mg' },

      { label: '	CLAVIMOX 1.2gm vial' },
      { label: '	NEW-CLAV EXTRA STRENGTH 642.9mg/5ml susp.' },
      { label: '	MAGNA-BIOTIC PLUS 875/125mg f.c. tab.' },
      { label: '	MAGNA-BIOTIC 375mg tab.' },
      { label: '	CLAVUCIN 600mg I.V.vial' },
      { label: '	CLAVUCIN 625mg f.c.tab.' },
      { label: '	MEGAMOX 457mg/5ml susp.' },
      { label: '	AUGMENTIN 600mg vial' },
      { label: '	MAGNA-BIOTIC 156.25 mg/5 ml susp.' },
      { label: '	NEW-CLAV Extra strength 457mg/5ml susp.' },

      { label: '	MEGAMOX 625mg f.c. tab.' },
      { label: '	MEGAMOX 1gm f.c.tab.' },
      { label: '	E-MOXCLAV 228.5mg sus.' },
      { label: '	DELTACLAV 457mg/5ml pd. For oral susp.' },
      { label: '	HIBIOTIC 1.2gm I.V.vial' },
      { label: '	HIBIOTIC 1000mg tab.' },
      { label: '	HIBIOTIC 156mg susp.' },
      { label: '	HIBIOTIC 312mg susp.' },
      { label: '	HIBIOTIC 375mg tab.' },
      { label: '	HIBIOTIC 600mg I.V.vial.' },

      { label: '	KLAVOX  375mg f.c.tab.' },
      { label: '	E-MOXCLAV 1g f.c.tab.' },
      { label: '	KLAVOX 1gm f.c.tab.' },
      { label: '	E-MOXCLAV 312 mg/5ml dry mix for oral susp.' },
      { label: '	E-MOXCLAV 375mg f.c.tab.' },
      { label: '	E-MOXCLAV 457mg sus.' },
      { label: '	E-MOXCLAV 625mg tab.' },
      { label: '	HIBIOTIC 625mg f.c. tab.' },
      { label: '	HIBIOTIC N 200mg/28.5mg/5ml susp.' },
      { label: '	HIBIOTIC N 400mg/57mg/5ml susp.' },

      { label: '	HIBIOTIC N-600/42.9 susp.' },
      { label: '	E-MOXCLAV 156mg/5ml susp.' },
      { label: '	CURAM 457mg/5ml pd. for oral susp' },
      { label: '	AMOXILANIC 228.5mg/5ml pd. For oral susp.' },
      { label: '	MAGNABIOTIC 1.2gm I.V.vial' },
      { label: '	CURAM 156.25mg/5ml susp.' },
      { label: '	CURAM 156.25mg/5ml susp.' },
      { label: '	CURAM 1gm f.c. tab.' },
      { label: '	KLAVOX  156mg/5ml susp.' },
      { label: '	CURAM 312.5 mg/5ml susp.' },

      { label: '	AMOXILANIC  (400/57mg)/5ml Powder for Oral Suspension' },
      { label: '	CURAM 625mg f.c.tab.' },
      { label: '	CURAM 625mg f.c.tab.' },
      { label: '	CURAM 642.9mg/5ml pd. for oral susp.' },
      { label: '	DELTACLAV 228.5mg/5ml powder for oral susp.' },
      { label: '	DELTACLAV 625 mg f.c.tab.' },
      { label: '	KLAVOX 625mg f.c.tab.' },
      { label: '	KLAVOX 457mg/5ml susp.' },
      { label: '	KLAVOX 312mg/5ml  susp.' },
      { label: '	KLAVOX 228mg/5ml susp.' },

      { label: '	CURAM 228.5mg/5ml pd. for Oral Susp.' },
      { label: '	ULTRAMOX 312mg/5ml susp.' },
      { label: '	ULTRAMOX  375mg tab.' },
    ],
  },
  {
    label: '	AMOXICILLIN+DICLOXACILLIN',
    tradeLabels: [
      { label: '	AMOCLOX 500mg caps.' },
      { label: '	MICLOX 250mg caps.' },
      { label: '	MICLOX 500mg caps.' },
    ],
  },

  {
    label: '	AMOXICILLIN+FLUCLOXACILLIN',
    tradeLabels: [
      { label: '	HI-FLUCIL 250/250 caps.' },
      { label: '	AMOFLUX dry mix' },
      { label: '	FLUMOX 250/250mg vial' },
      { label: '	FLUMOX 250/250 caps.' },
      { label: '	FLUMOX 125/125  susp.' },
      { label: '	FLUCAMOX 500mg vial' },
      { label: '	FLUMOCIN 500mg caps.' },
      { label: '	AMOFLUXIN 500mg vial' },

      { label: '	AMFLUX 500mg vial' },
      { label: '	AMFLUX 1g vial' },
      { label: '	FLUMOCIN 250mg caps.' },
      { label: '	FAMOX  250/250  caps.' },
      { label: '	FAMOX 125/125 susp.' },
      { label: '	FLUMOX 500/500mg I.M/I.V. vial' },
      { label: '	AMOFLUX 250/250 hard gelatin caps.' },
      { label: '	FLUMOX 125/125mg caps.' },
      { label: '	AMOFLUXIN 500mg caps.' },
      { label: '	AMOFLUXIN 500mg caps.' },

      { label: '	FLOXAMO 1g vial' },
      { label: '	FLOXAMO 500/500 f.c. tab.' },
      { label: '	FLOXAMO 500mg vial' },
      { label: '	FLUCAMOX 1gm vial' },
      { label: '	FLUCAMOX 250mg caps.' },
      { label: '	FLUCAMOX 250mg/5ml susp.' },
      { label: '	FLUMOCIN 1gm vial' },
      { label: '	FLUCAMOX 500mg caps' },
      { label: '	FLUCAMOX 500mg caps' },
      { label: '	AMOFLUX 125/125 hard gelatin capsules' },

      { label: '	COMBIFLOXIN 500/500mg f.c.tab' },
      { label: '	FLUMOCIN 500mg vial' },
    ],
  },
  {
    label: '	AMOXICILLIN+METRONIDAZOLE',
    tradeLabels: [{ label: '	HELICOCIN 750/500mg f.c.tab.' }],
  },
  {
    label: '	AMPHOTERICIN B',
    tradeLabels: [
      { label: '	AMBISOME  50mg I.V. vial' },
      { label: '	PHOTERICIN B 50mg/15ml vial' },
    ],
  },

  {
    label: '	AMPICILLIN',
    tradeLabels: [
      { label: '	AMPICILLIN 250 mg vial' },
      { label: '	AMPICILLIN 500mg caps.' },
      { label: '	AMPICILLIN 500 caps.' },
      { label: '	AMPICILLIN 250mg/5ml susp.' },
      { label: '	FARCOCILLIN 250mg vial' },
      { label: '	FARCOCILLIN 2gm vial' },
      { label: '	AMPICILLIN 250mg vial' },
      { label: '	AMPICILLIN 250mg caps.U.S.P.23' },

      { label: '	AMPICILLIN 250mg Caps.' },
      { label: '	AMPICILLIN 250mg caps.' },
      { label: '	EPICOCILLIN 500mg caps.' },
      { label: '	AMPICILLIN 250 mg caps.' },
      { label: '	AMPICILLIN 1gm vial.' },
      { label: '	AMPICILLIN 1g vial' },
      { label: '	AMPICILLIN 125mg/5ml susp.' },
      { label: '	AMPICILLIN 125mg/5ml susp.' },
      { label: '	AMPICILLIN 125mg/5 ml susp.' },
      { label: '	AMPICILLIN  500mg caps.' },

      { label: '	AMPICILLIN 250mg caps.' },
      { label: '	AMPYCIN 500mg caps.' },
      { label: '	AMPICILLN 250mg/5ml susp.' },
      { label: '	AMPYCIN 125mg susp.' },
      { label: '	AMPYCIN 1gm tab.' },
      { label: '	AMPYCIN 250mg caps.' },
      { label: '	AMPICILLIN SODIUM 500mg I.M/I.V vial' },
      { label: '	AMPYCIN 250mg susp.' },
      { label: '	AMPICILLIN SODIUM 1g vial B.P.2004 .' },
      { label: '	AMPICILLIN FORTE 500mg caps.' },

      { label: '	EPICOCILLIN 500mg vial' },
      { label: '	AMPICILLIN 500mg caps. USP 28' },
      { label: '	AMPICILLIN CAP. 500  mg' },
      { label: '	AMPICILLIN 500mg caps.USP 23' },
      { label: '	EPICOCILLIN 125mg/5ml susp.' },
      { label: '	EPICOCILLIN 125mg/5ml susp.' },
      { label: '	AMPICILLIN 500mg vial.' },
      { label: '	EPICOCILLIN 1gm vial.' },
      { label: '	EPICOCILLIN 250mg caps.' },
      { label: '	EPICOCILLIN 250mg vial' },

      { label: '	EPICOCILLIN 250mg/5ml susp.' },
      { label: '	EPICOCILLIN 250mg/5ml susp.' },
      { label: '	AMPICILLIN 500mg vial' },
      { label: '	AMPICILLIN SODIUM for injection 1000mg (B.P.2003)' },
      { label: '	AMPICILLIN FORTE 250mg/5ml  susp.' },
    ],
  },

  {
    label: '	AMPICILLIN+CLOXACILLIN',
    tradeLabels: [
      { label: '	AMPICLOX  250mg suspension' },
      { label: '	AMPICLOX 500mg caps.' },
      { label: '	AMPICLOX 75mg vial' },
      { label: '	AMPICLOX vial 500mg' },
      { label: '	RIVACLOX 250mg/5ml susp.' },
      { label: '	RIVACLOX 500mg caps.' },
    ],
  },

  {
    label: '	AMPICILLIN+DICLOXACILLIN',
    tradeLabels: [
      { label: '	CLOXAPEN  250mg/5ml syrup' },
      { label: '	DIPENACID 250/250mg Cap.' },
      { label: '	DIPENACID 250/250mg vial for I.M./I.V. inj.' },
      { label: '	CLOXAPEN 250 mg cap.' },
      { label: '	DIPENACID 125/125mg vial for I.M./I.V. inj.' },
      { label: '	CLOXAPEN 500mg caps.' },
      { label: '	DIPENACID 1gm vial' },
    ],
  },

  {
    label: '	AMPICILLIN+FLUCLOXACILLIN',
    tradeLabels: [
      { label: '	AMPIFLUX 250mg caps.' },
      { label: '	AMPIFLUX 250mg/5ml susp.' },
      { label: '	AMPIFLUX 500mg caps.' },
    ],
  },

  {
    label: '	AMPICILLIN+SULBACTAM',
    tradeLabels: [
      { label: '	FORTIBIOTIC 250mg/5ml pd. for oral susp.' },
      { label: '	FORTIBIOTIC 375mg I.V/I.M.vial.' },
      { label: '	FORTIBIOTIC 1500mg I.V./I.M.vial' },
      { label: '	AMPICTAM 750mg vial' },
      { label: '	AMPICTAM 375mg tab.' },
      { label: '	AMPICTAM 250mg susp.' },
      { label: '	AMPICTAM 1500mg vial' },
      { label: '	UNASYN 375mg tab.' },

      { label: '	UNASYN 1500mg I.M./I.V.vial' },
      { label: '	SABECT vial' },
      { label: '	SULBIN 750mg vial' },
      { label: '	UNASYN 250mg/5ml  powder for oral susp.(approved Re-reg)' },
      { label: '	ULTRACILLIN 1500mg vial' },
      { label: '	UNASYN 750mg I.M./I.V.vial' },
      { label: '	UNASYN 3gm I.V./I.M.vial' },
      { label: '	UNASYN 375mg vial(CANCELLED)' },
      { label: '	SIGMACYN 375mg f.c. tab.' },
      { label: '	SYNERPEN 750mg I.V/I.M vial' },

      { label: '	SYNERPEN 375mg tab.' },
      { label: '	SYNERPEN 250mg/5ml susp.' },
      { label: '	SYNERPEN 1500mg I.VorI.M vial' },
      { label: '	SYNERPEN 375mg I.V/I.M vial' },
      { label: '	ULTRACILLIN 750mg vial' },
      { label: '	ULTRACILLIN 375mg vial' },
      { label: '	SULBIN 1.5gm vial' },
      { label: '	ULTRACILLIN 375mg tab.' },
      { label: '	SULBIN 375mg vial' },
      { label: '	Unasyn 1.5gm Vial' },
    ],
  },
  {
    label: '	AMYL SALICYLATE+DIETHYLAMINE SALICYLATE',
    tradeLabels: [{ label: '	ALGIBAUME cream' }],
  },
  {
    label: '	AMYLASE+DIMETHICONE+HEMICELLULOSE+LIPASE+OX BILE+P',
    tradeLabels: [],
  },
  {
    label: '	AMYLOCAINE+BENZOCAINE',
    tradeLabels: [{ label: '	MIDY 0.025mg supp.' }],
  },
  {
    label: '	AMYLOCAINE+DIASTASE+PAPAIN+PEPSIN',
    tradeLabels: [{ label: '	POSTINE-S syrup' }],
  },

  {
    label: '	AMYLOCAINE+ETHYL PARAAMINOBENZOATE+HAMAMELIS EXTRA',
    tradeLabels: [],
  },
  {
    label: '	AMYLOCAINE+MENTHOL+PHENOL+SULPHACETAMIDE+THYMOL',
    tradeLabels: [{ label: '	SULFAMERIA  mouth wash' }],
  },
  { label: '	ANAGRELIDE', tradeLabels: [{ label: '	THROMBONORM 0.5mg caps.' }] },
  { label: '	ANASTROZOLE', tradeLabels: [{ label: '	ARIMIDEX 1mg tab.' }] },

  {
    label: '	ANETHOL+BORNEOL+CAMPHENE+CINEOLE+ETHAVERINE+FENCHO',
    tradeLabels: [],
  },
  {
    label: '	ANISE OIL+BELLADONNA TINCTURE+CALCIUM CARBONATE+CA',
    tradeLabels: [],
  },
  {
    label: '	ANISE OIL+BELLADONNA TINCTURE+CARAWAY OIL+DILL OIL',
    tradeLabels: [],
  },
  {
    label: '	ANISE OIL+CHAMOMILE+CORIANDER+DILL+FENNEL+LIQUORIC',
    tradeLabels: [],
  },
  {
    label: '	ANISE+BOLDO+CASCARA+SENNA',
    tradeLabels: [{ label: '	MUCINUM  CASCARA  tab.' }],
  },

  {
    label: '	ANISE+CARAWAY OIL+CHAMOMILE+DILL+FENNEL+LIQUORICE+',
    tradeLabels: [],
  },
  {
    label: '	ANISE+CARAWAY+CHAMOMILE+DILL+FENNEL+FENUGREEK+NETT',
    tradeLabels: [],
  },
  {
    label: '	ANISE+CHAMOMILE+DILL+FENNEL+MAJORAM+PEPPERMINT',
    tradeLabels: [{ label: '	MEPACO HERB FOR COLIC' }],
  },
  {
    label: '	ANISE+CHAMOMILE+MELISSA+VALERIAN',
    tradeLabels: [{ label: '	MEPACO SEDATIVE HERBS' }],
  },

  { label: '	ANTAZOLINE+CALAMINE', tradeLabels: [{ label: '	CALAZOL cream' }] },
  {
    label: '	ANTAZOLINE+CALAMINE+CAMPHOR+GLYCERIN+PHENOL',
    tradeLabels: [{ label: '	CALAZOL lotion.' }],
  },
  {
    label: '	ANTAZOLINE+NAPHAZOLINE',
    tradeLabels: [{ label: '	VINIL CALMISTIN eye & nasal drops' }],
  },

  {
    label: '	ANTAZOLINE+TETRAHYDROZOLINE',
    tradeLabels: [{ label: '	OPTIZOLIN eye drops' }],
  },
  {
    label: '	ANTHRAQUINONE GLYCOSIDE+LIDOCAINE+SALICYLIC ACID',
    tradeLabels: [{ label: '	SALIVEX-L-paint' }],
  },
  {
    label: '	ANTI TETANUS SERUM',
    tradeLabels: [{ label: '	TETANUS ANTITOXIN 1500 IU/ml' }],
  },

  {
    label: '	ANTIFOAM M',
    tradeLabels: [{ label: '	DENTINOX 2.65%  infant colic drops' }],
  },
  {
    label: '	ANTIFOAM M+ALUMINIUM HYDROXIDE+MAGNESIUM CARBONATE',
    tradeLabels: [],
  },
  {
    label: '	ANTIPYRINE+BENZOCAINE',
    tradeLabels: [{ label: '	OTOSEPT ear drops' }],
  },
  {
    label: '	ANTIPYRINE+BENZOCAINE+OXYQUINOLINE SULPHATE',
    tradeLabels: [{ label: '	EARO-CURE drops' }],
  },

  {
    label: '	APROTININ',
    tradeLabels: [{ label: '	APROTININ 500,000K.I.U./50ml vial I.V injection' }],
  },
  {
    label: '	ARGYREIA+ASTROCANTHA+LACTUCA+LEPLADENIA+MOSAIC+MUC',
    tradeLabels: [],
  },
  {
    label: '	ARGYREIA+BOMBAX+CROCUS+HIBISCUS+MAKARDHWAJ+MUCUNA+',
    tradeLabels: [],
  },

  {
    label: '	ARIPIPRAZOLE',
    tradeLabels: [
      { label: '	ARIPIPRAZOLE 20 mg f.c.tab.' },
      { label: '	ARIPIPRAZOLE 15mg f.c.tab.' },
      { label: '	ARIPIPRAZOLE 10mg Orally Disintegrating tablets' },
      { label: '	ARIPIPRAZOLE 10mg f.c.tab.' },
      { label: '	ARIPIPRAZOLE 30mg Orally Disintegrating tablets' },
      { label: '	ABILIA 20mg f.c. tabs.' },
      { label: '	CENTALIFY 10mg tabs.' },
      { label: '	CENTALIFY 15mg tabs.' },

      { label: '	ARIPIPRAZOLE 30mg tabs.' },
      { label: '	ABILIA 15mg f.c. tabs.' },
      { label: '	ABILIFY 10mg tab.' },
      { label: '	ABILIFY 10mg Discmelt orally disintegrating tab.' },
      { label: '	SCHIZOFY 30mg f.c.tab.' },
      { label: '	ARIPIPRAZOLE 20mg tabs.' },
      { label: '	ADWIPRAZOLE 10mg f.c.tab.' },
      { label: '	ARIPIPREX 30mg f.c.tab.' },
      { label: '	ABILIFY 15mg Discmelt orally disintegrating tab.' },
      { label: '	ARIPIPREX 10mg f.c.tab.' },

      { label: '	ARIPIPRAZOLE 30mg f.c.tab.' },
      { label: '	ABILIFY 15mg tab.' },
      { label: '	ADWIPRAZOLE 30mg f.c.tab.' },
    ],
  },
  {
    label: '	ARNICA TINCTURE+BELLADONNA TINCTURE+CAPSICUM EXTRA',
    tradeLabels: [],
  },
  {
    label: '	ARTICAINE',
    tradeLabels: [
      { label: '	ULTRACAINE D.S. FORTE' },
      { label: '	ULTRACAINE D.S CARTRIDGE 40 mg' },
    ],
  },

  {
    label: '	ARTICHOKE EXTRACT+BOLDINE+CALCIUM PHOSPHORYLCOLINE',
    tradeLabels: [],
  },
  {
    label: '	ASPARAGINASE',
    tradeLabels: [{ label: '	KIDROLASE 10000 M.I.U.vial' }],
  },
  {
    label: '	ASPERGILLUS ENZYMES+ETHAVERINE+SIMETHICONE',
    tradeLabels: [{ label: '	ELZYM capsules' }],
  },
  {
    label: '	ASPERGILLUS ENZYMES+PANCREATIN',
    tradeLabels: [{ label: '	COMBIZYM coated tab.' }],
  },

  {
    label: '	ASTIMEZOLE',
    tradeLabels: [
      { label: '	HISTAMINAL 10mg tab.' },
      { label: '	HISTAZOLE susp.5 mg/5ml' },
      { label: '	HISTAMINAL 0.1% susp.' },
      { label: '	ASTEMIZOL 10 mg tab' },
      { label: '	HISTAZOLE tab. 10 mg' },
    ],
  },

  {
    label: '	ATENOLOL',
    tradeLabels: [
      { label: '	BLOKIUM 100mg tablet' },
      { label: '	ATENO 50mg f.c.tab.' },
      { label: '	AMOTENOLOL 100mg f.c.tab.' },
      { label: '	AMOTENOLOL 50mg f.c.tab.' },
      { label: '	ATELOL 100mg tab.' },
      { label: '	BLOKIUM 50mg tablet' },
      { label: '	ATELOL 50mg tab.' },
      { label: '	ATENOLOL 50mg tab. BP 2000' },

      { label: '	ATENO 100mg f.c.tab.' },
      { label: '	BETENVAC  0.5% syrup' },
      { label: '	HIPRESS-D caps.' },
      { label: '	ATENOLOL 100mg tab.B.P.2000' },
      { label: '	ATELOL 100mg tab.' },
      { label: '	TENORMIN 100mg f.c.tab.' },
      { label: '	TENORMIN 25mg f.c.tab.' },
      { label: '	TENOTENS 50mg f.c.tab.' },
      { label: '	TENORMIN 50mg f.c.tab.' },
      { label: '	TENOTENS 100mg f.c.tab.' },

      { label: '	TENSOLOL 100mg f.c.tab.' },
    ],
  },
  {
    label: '	ATENOLOL+AMILORIDE+CHLORTHALIDONE',
    tradeLabels: [{ label: '	TEKLO TAB.' }],
  },

  {
    label: '	ATENOLOL+CHLORTHALIDONE',
    tradeLabels: [
      { label: '	BLOKIUM DIU 100/25mg tab.' },
      { label: '	TENORETIC 100/25mg f.c.tab.' },
      { label: '	TENEDONE 50/25mg f.c.tablet(Approved re-Reg)' },
      { label: '	TENORET 50/12.5mg f.c.tab.' },
      { label: '	TENEDONE 100/25mg f.c.tablet' },
      { label: '	TENEDONE 100/25mg f.c.tablet' },
      { label: '	TENEDONE 50/25mg f.c.tablet(Approved re-Reg)' },
    ],
  },

  {
    label: '	ATENOLOL+NIFEDIPINE',
    tradeLabels: [
      { label: '	BETA-LAT caps.' },
      { label: '	TENOLATE S.R.capsule' },
    ],
  },

  {
    label: '	ATOMOXETINE',
    tradeLabels: [
      { label: '	ATOMOXAPEX 25mg hard gelatin cap.' },
      { label: '	ATOMOXETINE 40mg hard gelatin caps.' },
      { label: '	Atomoxetine 25mg hard gelatin caps.' },
      { label: '	ATOMOXAPEX 40mg hard gelatin cap.' },
      { label: '	ATOMOXAPEX 18mg hard gelatin cap.' },
      { label: '	ATOMOXAPEX 10mg hard gelatin cap.' },
      { label: '	ATOMOXAPEX 60mg hard gelatin cap.' },
      { label: '	STRATTERA 18mg caps.' },

      { label: '	STRATTERA 40mg caps.' },
      { label: '	STRATTERA 25mg caps.' },
      { label: '	STRATTERA 60mg caps.' },
      { label: '	STRATTERA 10mg caps.' },
    ],
  },

  {
    label: '	ATORVASTATIN',
    tradeLabels: [
      { label: '	LIPONA 10mg tab.' },
      { label: '	LIPITOR 10 mg tab.' },
      { label: '	LIPOVAST 10mg f.c.tab.' },
      { label: '	LIPITOR 10mg f.c.tab.' },
      { label: '	LIPITOR 80mg f.c.tab.' },
      { label: '	LIPILESS 10mg f.c.tab.' },
      { label: '	LIPITOR 40mg f.c.tab.' },
      { label: '	ATROSTAT 80 mg f.c. tab' },

      { label: '	LIPITOR 20mg f.c.tab' },
      { label: '	LIPILESS 20mg f.c.tab.' },
      { label: '	ATOR 20mg f.c.tab.' },
      { label: '	LIPINORM 20mg f.c.tab.' },
      { label: '	ATOR 40mg f.c.tab.' },
      { label: '	LIPONA 40mg f.c.tab.' },
      { label: '	LIPINORM 10 mg f.c.tab.' },
      { label: '	ATORSTAT 10mg f.c.tab.' },
      { label: '	ATORSTAT 40mg f.c.tab.' },
      { label: '	LIPICOLE 20mg f.c.tab.' },

      { label: '	ATOR 10mg tab.' },
      { label: '	BORGASTATIN 10mg tab.' },
      { label: '	LIPINORM 40 mg f.c.tab.' },
      { label: '	LIPICOLE 10mg tab.' },
      { label: '	LIPONA 20mg f.c.tab.' },
      { label: '	BORGASTATIN 40mg tab.' },
      { label: '	ATORSTAT 20mg f.c.tab.' },
      { label: '	ROSTATINE 20mg f.c.tab.' },
      { label: '	SIGMALIP 40mg f.c.tab.' },
      { label: '	TORVAST 40mg f.c.tab.' },

      { label: '	SIGMALIP 20 mg f.c.tab.' },
      { label: '	Lipitor 20mg Tab' },
      { label: '	Lipitor 40mg Tab' },
    ],
  },
  {
    label: '	ATORVASTATIN+EZETIMIBE',
    tradeLabels: [
      { label: '	ATOREZA 10/20mg  f.c. tab.' },
      { label: '	EZASTATIN 10/10 tab.' },
      { label: '	ATOREZA 10/10 f.c.tab.' },
    ],
  },

  {
    label: '	ATP+VITAMIN B6',
    tradeLabels: [{ label: '	ADENOX FORTE f.c tab.' }],
  },

  {
    label: '	ATRACURIUM BESYLATE',
    tradeLabels: [
      { label: '	ATRACURIUM BESYLATE 25 mg/2.5ml inj.' },
      { label: '	ATRACURIUM 10mg/ml amp.' },
      { label: '	ATRACURIUM BESYLATE 25 mg/2.5ml inj.' },
      { label: '	ATRABESYLATE 10 mg/ml amp. For I.V. inj. & inf.' },
      { label: '	ATRACURIUM 10mg/ml amp.' },
      { label: '	ATRABESYLATE 10 mg/ml amp. For I.V. inj. & inf.' },
      { label: '	TRACRIUM 25mg/2.5ml ampoule' },
    ],
  },

  {
    label: '	ATROPINE',
    tradeLabels: [
      { label: '	ISOPTO ATROPINE 1% eye drops' },
      { label: '	ATROPINE SULPHATE 1mg/ml amp.' },
      { label: '	OFTALMOLOSA CUSI ATROPINE 1% eye ointment' },
    ],
  },
  {
    label: '	ATROPINE METHONITRATE+SODIUM BROMIDE',
    tradeLabels: [{ label: '	BROMYDRIN dry syrup' }],
  },

  {
    label: '	ATROPINE SULPHATE',
    tradeLabels: [
      { label: '	MYDRILATE 1% opthalmic solution.' },
      { label: '	ATROPINE eye dps.' },
      { label: '	ATROPINE SULPHATE 1mg/ml U.S.P 27  injection' },
      { label: '	ATROPINE SULPHATE 1mg/ml U.S.P 27  injection' },
      { label: '	ATROPISOL 1% ophthalmic solution' },
    ],
  },
  {
    label: '	ATROPINE SULPHATE+COLCHICINE+KHELLIN+PIPERAZINE',
    tradeLabels: [{ label: '	URIVIN effervescent granules.' }],
  },

  {
    label: '	ATROPINE SULPHATE+COLCHICINE+PIPERAZINE',
    tradeLabels: [
      { label: '	URAID sachets' },
      { label: '	UROSOLVINE effervecent granules' },
      { label: '	SOLVAURE effervescent sachet' },
      { label: '	SOLVINAL effervescent granules' },
    ],
  },
  {
    label: '	ATROPINE SULPHATE+COLCHICINE+PIPERAZINE+SODIUM CIT',
    tradeLabels: [],
  },
  { label: '	ATROPINE+DIPHENOXYLATE', tradeLabels: [{ label: '	LOMOTIL tab' }] },

  {
    label: '	ATROPINE+HYOSCINE+HYOSCYAMINE+PHENOBARBITAL+SANZYM',
    tradeLabels: [],
  },
  {
    label: '	ATTAPULGITE+DIMETHICONE+NIFUROXAZIDE+PECTIN',
    tradeLabels: [{ label: '	DIASTAT susp.' }],
  },

  {
    label: '	AVOCADO OIL+SOYA BEAN OIL',
    tradeLabels: [
      { label: '	AVOCAPI caps.' },
      { label: '	ASUTEC 300mg  hard gelatin caps.' },
      { label: '	AVOSOYA caps.' },
      { label: '	AVOSCALDINE 300mg soft gelatin caps.' },
      { label: '	PIASCLEDINE 300mg caps.' },
      { label: '	OSTEONORM caps' },
    ],
  },

  {
    label: '	AZAPROPAZONE',
    tradeLabels: [
      { label: '	PROLIXAN 300  mg caps.' },
      { label: '	PROLIXAN 600mg tab.' },
      { label: '	PROLIXAN 300  mg caps.' },
    ],
  },

  {
    label: '	AZATHIOPRINE',
    tradeLabels: [
      { label: '	IMURAN 50mg f.c. tabs.' },
      { label: '	IMMULESS 50mg tab.' },
      { label: '	AZATHIOPRINE 50mg tab. B.P. 2005' },
      { label: '	AZARIN tab. 50 mg' },
      { label: '	AZATHIOPRINE 50mg f.c.tab.' },
      { label: '	AZATHIOPRINE 50mg tab.' },
      { label: '	AZATHIOPRINE PCH 50mg tab.' },
      { label: '	AZATHIOPRINE A.I.T.50mg f.c.tab.' },
    ],
  },

  {
    label: '	AZELAIC ACID',
    tradeLabels: [
      { label: '	AZADERM Cream 0.2 g /1g' },
      { label: '	EZALIC 20 gm/100gm cream' },
      { label: '	SKINOREN 20gm/100gm cream' },
    ],
  },
  {
    label: '	AZELASTIN',
    tradeLabels: [
      { label: '	AZELAST 0.05% eye drops' },
      { label: '	ZALASTIN 100mg/100ml nasal spray' },
    ],
  },

  {
    label: '	AZINTAMIDE+CELLULASE+PANCREATIN',
    tradeLabels: [{ label: '	ZYMAGALLIN tab.' }],
  },

  {
    label: '	AZITHROMYCIN',
    tradeLabels: [
      { label: '	ZITHROKAN 100mg/5ml susp.' },
      { label: '	ZITHROMAX 250mg caps.' },
      { label: '	ZITHROEDOSE' },
      { label: '	ZITHROKAN 500mg caps.' },
      { label: '	ZITHROMAX 200mg/5ml susp.' },
      { label: '	ZISROCIN 500 mg caps.' },
      { label: '	AZITHROMIN 250mg caps.' },
      { label: '	DELZOSIN 600mg film coated tab.' },

      { label: '	AZALIDE 250mg caps.' },
      { label: '	AZALIDE 40mg/ml susp.' },
      { label: '	AZOMYCIN 250mg caps.' },
      { label: '	AZOMYCIN 200mg/5ml susp.' },
      { label: '	AZROLID 500mg tab.' },
      { label: '	EPIZITHRO 200mg/5ml Powder for oral susp.' },
      { label: '	NEOZOLID 600mg tab.' },
      { label: '	AZINDAMON 500mg f.c.tab.' },
      { label: '	INFECTOMYCIN 500mg f.c. tabs.' },
      { label: '	EPIZITHRO 200mg/5ml Powder for oral susp.' },

      { label: '	AZIWOK 250mg caps.' },
      { label: '	AZIWOK 200mg/5ml susp.' },
      { label: '	AZALIDE 500mg caps.' },
      { label: '	ZITHROMAX 200mg/5ml susp.' },
      { label: '	XEREXOMAIR 500mg f.c.tab.' },
      { label: '	UNIZITHRIN 600mg/30ml susp.' },
      { label: '	XITHRONE 500mg f.c.tab.' },
      { label: '	XITHRONE 500mg f.c.tab.' },
      { label: '	UNIZITHRIN 500mg caps.' },
      { label: '	XEREXOMAIR 100mg/5ml pd. For oral susp.' },

      { label: '	ZITHROKAN 200mg powder for oral susp.' },
      { label: '	ZITHROKAN 600mg tab.' },
      { label: '	ZMAXE E.R. powder for oral susp.' },
      { label: '	ZITHROMAX 500mg I.V.infusion' },
      { label: '	XITHRONE 200 mg/5ml susp.' },
      { label: '	ZISROCIN 100mg/5ml susp.' },
      { label: '	ZITHROMAX 200mg/5ml susp.' },
      { label: '	XITHRONE 250mg caps.' },
    ],
  },
  {
    label: '	BACITRACIN+DL-THREONINE+GLYCINE+L-CYSTEINE+NEOMYCI',
    tradeLabels: [],
  },

  {
    label: '	BACITRACIN+NEOMYCIN',
    tradeLabels: [
      { label: '	BACTOMYCIN oint.' },
      { label: '	BANEOCIN powder' },
      { label: '	BIVACYN  aerosol powder' },
      { label: '	BANEOCIN oint.' },
      { label: '	DERMABIOTIC topical powder.' },
      { label: '	NEOBACIN eye oint.' },
      { label: '	DERMABIOTIC topical powder.' },
      { label: '	DERMOTRACIN aerosol powder' },

      { label: '	BIVATRACIN aerosol powder' },
      { label: '	DERMABIOTIC oint.' },
    ],
  },

  {
    label: '	BACITRACIN+NEOMYCIN+POLYMYXIN',
    tradeLabels: [
      { label: '	NEOPOLYBACIN eye oint.' },
      { label: '	GERMATRIX spray.' },
      {
        label:
          '	NEOMYCIN & POLYMYXIN B SULFATES & BACITRACIN ZINC oint (USP 28)',
      },
      {
        label:
          '	NEOMYCIN & POLYMYXIN B SULFATES & BACITRACIN ZINC oint (USP 28)',
      },
      { label: '	MULTISOL aerosol spray' },
      { label: '	TRIVATRACIN aerosol powder' },
      { label: '	POLYBIOCID spray' },
      { label: '	TRIBIOTIC SPRAY' },

      { label: '	POLYBIOTIC spray' },
    ],
  },
  {
    label: '	BACITRACIN+NEOMYCIN+POLYMYXIN+PRAMOXINE',
    tradeLabels: [
      { label: '	NEOSPORE P.R topical oint.' },
      { label: '	PRAMOVER top. Oint.' },
      { label: '	PRAMOVER top. Oint.' },
    ],
  },

  {
    label: '	BACLOFEN',
    tradeLabels: [
      { label: '	BACLOFEN 25mg tab.B.P.98' },
      { label: '	LIORESAL 10mg tab.' },
      { label: '	LIORESAL 25mg tab.' },
      { label: '	BACLOFEN 10mg tab.B.P.98' },
      { label: '	MYLOBAC 10mg tab.' },
    ],
  },

  {
    label: '	BACTERIAL LYSATE',
    tradeLabels: [
      { label: '	BRONCHO-VAXOM children 3.5mg caps.' },
      { label: '	LUIVAC 3mg tab.' },
      { label: '	BRONCHO-VAXOM 20mg children sachets.' },
      { label: '	BRONCHO-VAXOM adult 7mg caps.' },
      { label: '	BRONCHO-VAXOM CHILDREN sachets' },
    ],
  },
  {
    label: '	BALSAM PERU+BENZYL BENZOATE+BISMUTH OXIDE+BISMUTH ',
    tradeLabels: [],
  },
  {
    label: '	BALSAM PERU+BISMUTH OXIDE+BISMUTH SUBGALLATE+ZINC ',
    tradeLabels: [],
  },

  {
    label: '	BALSAM PERU+BISMUTH SUBGALLATE+DEXAPANTHENOL+HAMAM',
    tradeLabels: [],
  },

  {
    label: '	BAMBUTEROL',
    tradeLabels: [
      { label: '	LELAFREE 20mg tab.' },
      { label: '	LELAFREE 10mg tab.' },
      { label: '	BAMBEC 10mg tab.' },
      { label: '	BAMBEC 20mg tab.' },
      { label: '	BAMBEDIL 10mg tab.' },
      { label: '	BAMBEDIL 1mg/ml syrup' },
      { label: '	PROBRIC 5mg/5ml syrup' },
      { label: '	NOCTORELIEF 10mg tabs.' },
    ],
  },

  {
    label: '	BAMETHAN+ESCIN',
    tradeLabels: [{ label: '	ESCINOGEL topical gel' }],
  },

  {
    label: '	BARIUM SULFATE',
    tradeLabels: [
      { label: '	BARILUX COLON 95.854 % powder' },
      { label: '	BARILUX HD 96.805 % powder' },
      { label: '	RADIOPAQUE MULTILOAD CU375 IUD.' },
      { label: '	PRONTOBARIO 60 % W/V 200 ML' },
      { label: '	PRONTOBARIO HD 340 gm' },
      { label: '	PRONTOBARIO COLON 93.78 gm/100 gm enema' },
      { label: '	PRONTOBARIO H.D 98.42 gm/100gm powder' },
      { label: '	PRONTOBARIO 400 gm (FOR X.RAY CONTRAST MEDIUM)' },
    ],
  },

  {
    label: '	BEAR BERRY EXTRACT+PUMPKIN SEED EXTRACT+PYGEUM AFR',
    tradeLabels: [],
  },

  {
    label: '	BECLOMETHASONE DIPROPIONATE',
    tradeLabels: [
      { label: '	BECLO-NASAL 50mcg/dose spray' },
      { label: '	CLENIL (R) FORTE SPRAY 50 mg /CAN' },
      { label: '	BECONASE A.N.S 50 mcg/dose  nasal spray' },
      { label: '	BECONASE  50 mcg/dose inhaler' },
      { label: '	BECLOSONE 0.025% cream' },
      { label: '	BECOTIDE 50 mcg/dose inhaler' },
      { label: '	BECLOFORTE 250 mcg/dose inhaler' },
      { label: '	BECLOSONE INHALER 0.05 mg/dose' },

      { label: '	VIAREX 0.05mg inhaler' },
    ],
  },
  {
    label: '	BECLOMETHASONE+CHLOROCRESOL+MICONAZOLE+NEOMYCIN',
    tradeLabels: [{ label: '	POLYDERM  cream' }],
  },
  {
    label: '	BECLOMETHASONE+SALBUTAMOL',
    tradeLabels: [
      { label: '	CLENIL COMPOSITUM spray' },
      { label: '	VENTAL COMPOSITUM 200 doses spray' },
    ],
  },

  { label: '	BEE VENOM', tradeLabels: [{ label: '	ABEVAC 1mg/ml vial' }] },
  {
    label: '	BEFUNOLOL',
    tradeLabels: [
      { label: '	GLAUCONEX 0.25% eye drops' },
      { label: '	GLAUCONEX 0.5% eye drops' },
    ],
  },
  {
    label: '	BELLADONNA TINCTURE+GINGER TINCTURE+PAPAIN',
    tradeLabels: [{ label: '	DI-EASE syrup.' }],
  },

  {
    label: '	BELLADONNA+CAMPHOR+METHYL SALICYLATE+TURPENTINE OI',
    tradeLabels: [],
  },
  {
    label: '	BELLADONNA+CARDAMOM+DILL OIL+SODIUM BENZOATE+TRISO',
    tradeLabels: [],
  },
  {
    label: '	BELLADONNA+CARDAMOM+PEPPERMINT OIL+POTASSIUM BROMI',
    tradeLabels: [],
  },
  {
    label: '	BELLADONNA+CHARCOAL+DI-IODOQUINOLIN+PHTHALYL SULPH',
    tradeLabels: [],
  },

  {
    label: '	BELLADONNA+PHENOBARBITONE',
    tradeLabels: [
      { label: '	BELLACID  tab.' },
      { label: '	BELLADONNA PHENOBARBITONE tab.' },
    ],
  },
  {
    label: '	BENAZEPRIL',
    tradeLabels: [
      { label: '	CIBACEN 5mg f.c.tab.' },
      { label: '	CIBACEN 20mg f.c.tab.' },
      { label: '	CIBACEN 10mg f.c.tab.' },
    ],
  },

  {
    label: '	BENAZEPRIL+HYDROCHLOROTHIAZIDE',
    tradeLabels: [
      { label: '	CIBADREX 5/6.25  mg f.c.tab.' },
      { label: '	CIBADREX 20/25  f.c.tab.' },
      { label: '	CIBADREX 10/12.5 f.c.tab.' },
    ],
  },
  {
    label: '	BENFOTIAMINE+CYANOCOBALAMINE+PYRIDOXINE',
    tradeLabels: [{ label: '	MILGA f.c.tab.' }],
  },

  {
    label: '	BENOXINATE',
    tradeLabels: [
      { label: '	BOXINATE 0.4% eye drops.' },
      { label: '	BENOX 0.4% eye drops' },
    ],
  },
  {
    label: '	BENPROPERINE',
    tradeLabels: [
      { label: '	PECTIPRO 0.3% syrup' },
      { label: '	PECTIPRO 0.3% syrup' },
    ],
  },
  {
    label: '	BENZALKONIUM CHLORIDE+BENZOCAINE',
    tradeLabels: [{ label: '	ZORA-C lozenge' }],
  },

  {
    label: '	BENZALKONIUM CHLORIDE+CETRIMIDE',
    tradeLabels: [{ label: '	BABY GUARD topical cream.' }],
  },
  {
    label: '	BENZALKONIUM CHLORIDE+CHLORHEXIDINE DIGLUCONATE',
    tradeLabels: [
      { label: '	DERMOBACTER topical solution' },
      { label: '	DERMOBACTER topical solution' },
    ],
  },
  {
    label: '	BENZALKONIUM CHLORIDE+DEXTRAN+HYDROXYPROPYL METHYL',
    tradeLabels: [],
  },

  {
    label: '	BENZALKONIUM CHLORIDE+GENTAMICIN',
    tradeLabels: [{ label: '	REFOBACIN  eye drops.' }],
  },
  {
    label: '	BENZALKONIUM CHLORIDE+GLUTARALDEHYDE+SODIUM NITRIT',
    tradeLabels: [],
  },
  {
    label: '	BENZALKONIUM CHLORIDE+LIDOCAINE',
    tradeLabels: [{ label: '	ORACAINE oral gel' }],
  },

  {
    label: '	BENZATHINE PENICILLIN G',
    tradeLabels: [
      { label: '	DEPO-PEN 1.2MIU vial.' },
      { label: '	LASTIPEN 1,200,000 IU vial.' },
      { label: '	DURAPEN S 1.2 M.I.U. vial for I.M  inj.' },
      { label: '	RETARPEN 1.2 M.I.U. vial' },
      { label: '	PENADUR 1.2M.I.U.vial' },
      { label: '	PENICID LA 1,200,000 units vial' },
      { label: '	PENCITARD 1200000 I.U./vial' },
    ],
  },

  {
    label: '	BENZOCAINE',
    tradeLabels: [
      { label: '	DENTOCAINE 7.5gm/100gm dental gel' },
      { label: '	BENZOCAINE 20% topical spray' },
      { label: '	ORACAINE oral paste' },
    ],
  },
  {
    label: '	BENZOCAINE+BENZYDAMINE+CETALKONIUM',
    tradeLabels: [{ label: '	B.B.C. spray' }],
  },
  {
    label: '	BENZOCAINE+CLOVE OIL',
    tradeLabels: [{ label: '	DENTOCALM oral oint.' }],
  },

  {
    label: '	BENZOIC ACID+CETRIMIDE+MALEIC ACID+PROPYLENE GLYCO',
    tradeLabels: [],
  },
  {
    label: '	BENZOIC ACID+CHLORPHENESIN+ZINC OXIDE',
    tradeLabels: [{ label: '	NEO FUNGICIL  powder' }],
  },
  {
    label: '	BENZOIC ACID+SALICYLIC ACID',
    tradeLabels: [
      { label: '	DERMACURE 6/3%  oint.' },
      { label: '	BENZOIC ACID AND SALICYLIC ACID oint.U.S.P23' },
      { label: '	WHITFIELD  6/3% oint.B.P.2004' },
    ],
  },

  {
    label: '	BENZOIN TINCTURE+CAMPHOR+EUCALYPTUS OIL+PEPPERMINT',
    tradeLabels: [],
  },
  {
    label: '	BENZONATATE+DIPHENHYDRAMINE+GUAIFENESIN+PHENYLEPHR',
    tradeLabels: [],
  },
  {
    label: '	BENZOXONIUM CHLORIDE+CHLORHEXIDINE+RETINOL',
    tradeLabels: [{ label: '	VITA-MERFEN oint.' }],
  },
  {
    label: '	BENZOXONIUN CL+LIDOCAINE',
    tradeLabels: [
      { label: '	OROFAR SOLUTION WITH LIDOCAINE mouthwash' },
      { label: '	OROFAR WITH LIDOCAINE lozenge' },
    ],
  },

  {
    label: '	BENZOYL PEROXIDE',
    tradeLabels: [
      { label: '	LUBEX Emulsion' },
      { label: '	DERMOCARE 5% ACNE  lotion' },
      { label: '	ACNEXYL 10 gel' },
      { label: '	AKNEROXID-5 5gm/100gm gel' },
      { label: '	ACNEXYL 5  gel' },
      { label: '	PANOXYL 5% gel' },
    ],
  },

  {
    label: '	BENZOYL PEROXIDE+ERYTHROMYCIN',
    tradeLabels: [
      { label: '	BENZAMYCIN (TOPICAL GEL)' },
      { label: '	ACNE BENZ topical gel' },
    ],
  },
  {
    label: '	BENZTROPINE MESYLATE',
    tradeLabels: [
      { label: '	COGETROPINE MESYLATE 1mg/ml amp.' },
      { label: '	COGINTOL tab.' },
    ],
  },

  {
    label: '	BENZYDAMINE',
    tradeLabels: [
      { label: '	ELI-DOUCHE 0.1% vag. Sol.' },
      { label: '	TANTUM VERDE 0.15% mouth wash' },
      { label: '	TANTUM 5% cream' },
      { label: '	TANTUM  5% topical gel.' },
      { label: '	TANTUM ROSA 0.5g powder for vaginal solution' },
      { label: '	TANTUM VERDE-P 3mg lozenge' },
      { label: '	THROCALMINE 150mg/100ml  mouthwash & gargle.' },
      { label: '	PHILO GREEN   150mg/100 ml mouthwash' },
    ],
  },

  {
    label: '	BENZYDAMINE HYDROCHLORIDE',
    tradeLabels: [{ label: '	ORASEPT 150mg effervescent tab.' }],
  },
  {
    label: '	BENZYL ALCOHOL+BENZYL BENZOATE',
    tradeLabels: [{ label: '	BENZANIL gel' }],
  },
  {
    label: '	BENZYL BENZOATE',
    tradeLabels: [
      { label: '	BENZYL BENZOATE 20% cream' },
      { label: '	BENZYL BENZOATE 25% lotion U.S.P.23' },
      { label: '	PHARCO-BENZYL 10% cream' },
    ],
  },

  {
    label: '	BENZYL BENZOATE+GAMMA BENZENE HEXACHLORIDE',
    tradeLabels: [{ label: '	GAMMA BENZYL lotion' }],
  },
  {
    label: '	BERACTANT',
    tradeLabels: [
      { label: '	SURVANTA  25mg/ml  intratracheal vial' },
      { label: '	SURVANTA  25mg/ml  intratracheal vial' },
    ],
  },
  {
    label: '	BETA CAROTENE',
    tradeLabels: [{ label: '	BETA CAROTENE FORTE 15mg soft gelatin caps.' }],
  },

  {
    label: '	BETA CAROTENE+RUTIN+VITAMIN B2+VITAMIN C+ZINC GLUC',
    tradeLabels: [],
  },
  {
    label: '	BETA CAROTENE+VACCINIUM MYRTILLUM',
    tradeLabels: [{ label: '	DIFRAREL 100 f.c.tab.' }],
  },
  {
    label: '	BETACAROTENE+CU+Mn+Se YEAST+VITAMIN C+VITAMIN E+Zn',
    tradeLabels: [{ label: '	VITA-GUARD CAPS.' }],
  },

  {
    label: '	BETAHISTINE',
    tradeLabels: [
      { label: '	HISTOTEC 16mg f.c.tab.' },
      { label: '	HISTINE 8mg tab.' },
      { label: '	HISTINE 24mg tab.' },
      { label: '	HISTINE 16mg tab.' },
      { label: '	HISTASERIC 8mg tab.' },
      { label: '	MICROSERC 24mg tab.' },
      { label: '	MICROSERC 8mg tab.' },
      { label: '	BETASINE 8mg tab.' },

      { label: '	BETASERC 8mg tab.' },
      { label: '	BETASERC 16 mg tab.' },
      { label: '	VERSERC 8mg tab.' },
      { label: '	VERSERC 24mg tab.' },
      { label: '	VERSERC 16mg tab.' },
      { label: '	VERTISERC 16mg tab.' },
      { label: '	VERTISERC 8mg tab.' },
    ],
  },

  {
    label: '	BETAMETHASONE',
    tradeLabels: [
      { label: '	BETNOVATE 0.1%w/w ointment' },
      { label: '	DIPROSONE 0.05% oint.' },
      { label: '	DIPROSONE 0.05% lotion' },
      { label: '	DIPROSONE 0.05% cream' },
      { label: '	DIPROSONE 0.05% cream' },
      { label: '	BETA-VAL 0.1% oint.' },
      { label: '	BETADERM 0.1% topical oint.' },
      { label: '	BETA-VAL 100mg/100gm cream' },

      { label: '	BETADERM 0.1% cream' },
      { label: '	BETAMETHASONE  DIPROPIONATE 0.05% oint.' },
      { label: '	BETAMETHASONE  DIPROPIONATE 0.05% U.S.P 28 cream' },
      { label: '	BETAMETHASONE VALERATE 0.1 % oint.USP23' },
      { label: '	BETAMETHASONE VALERATE 0.1% cream USP23' },
      { label: '	BETASONE 0.5 mg tab.' },
      { label: '	BETA-VAL 100mg/100gm cream' },
      { label: '	BETNOVATE 0.1 %w/w cream' },
      { label: '	BETNOVATE 0.1 %w/w scalp application' },
      { label: '	BETA-VAL 0.1% oint.' },
    ],
  },
  {
    label: '	BETAMETHASONE DIPROPIONATE+BETAMETHASONE SODIUM PH',
    tradeLabels: [],
  },
  {
    label: '	BETAMETHASONE+CALCIPOTRIOL',
    tradeLabels: [
      { label: '	CALCIPOHEAL-CORT Ointment' },
      { label: '	DAIVOBET oint.' },
      { label: '	PSORITOP PLUS topical oint.' },
    ],
  },
  {
    label: '	BETAMETHASONE+CHLORAMPHENICOL',
    tradeLabels: [{ label: '	BETABIOPTAL sterile eye drops' }],
  },

  {
    label: '	BETAMETHASONE+CLIOQUINOL',
    tradeLabels: [
      { label: '	CLIOSONE cream' },
      { label: '	BETA-VAL C oint.' },
      { label: '	BETNOVATE C ointment' },
      { label: '	BETNOVATE C Cream' },
      { label: '	VETOVATE-C cream' },
    ],
  },

  {
    label: '	BETAMETHASONE+CLIOQUINOL+GENTAMICIN+TOLNAFTATE',
    tradeLabels: [
      { label: '	GEBTIDERM topical cream' },
      { label: '	MIXDERM cream' },
      { label: '	QUADRIDERM cream' },
      { label: '	TOP-4 cream' },
    ],
  },

  {
    label: '	BETAMETHASONE+CLOTRIMAZOLE',
    tradeLabels: [
      { label: '	LOTRIDERM cream' },
      { label: '	CLOTRISONE oint.' },
      { label: '	CLOTRISONE cream' },
    ],
  },
  {
    label: '	BETAMETHASONE+CLOTRIMAZOLE+GENTAMICIN',
    tradeLabels: [{ label: '	TRIDERM cream' }, { label: '	TRIDERM ointment' }],
  },

  {
    label: '	BETAMETHASONE+FUCIDIC ACID',
    tradeLabels: [
      { label: '	BETAFUCIN cream' },
      { label: '	FUCITOP C Cream' },
      { label: '	FUSIDIC PLUS topical cream.' },
      { label: '	CORTICOFUSIDIC  Topical Cream' },
      { label: '	FUTASONE cream' },
      { label: '	FOSTINOCORT topical Cream' },
      { label: '	FUCICORT topical cream' },
    ],
  },

  {
    label: '	BETAMETHASONE+FUCIDIC ACID+MICONAZOLE',
    tradeLabels: [{ label: '	FUCISONE-M cream' }],
  },
  {
    label: '	BETAMETHASONE+GENTAMICIN',
    tradeLabels: [
      { label: '	GENTAZONE cream' },
      { label: '	GENTACURE cream' },
      { label: '	OPHTASONE eye ointment' },
    ],
  },
  {
    label: '	BETAMETHASONE+MICONAZOLE',
    tradeLabels: [{ label: '	MICOSONE cream' }],
  },

  {
    label: '	BETAMETHASONE+NEOMYCIN',
    tradeLabels: [
      { label: '	BETNOVATE N  ointment' },
      { label: '	BETNOVATE N cream' },
      { label: '	VETOVATE-N oint' },
    ],
  },
  {
    label: '	BETAMETHASONE+PANTHENOL',
    tradeLabels: [{ label: '	BETAPANTHEN cream' }],
  },

  {
    label: '	BETAMETHASONE+SALICYLIC ACID',
    tradeLabels: [
      { label: '	BETA-VAL S oint.' },
      { label: '	KERELLA lotion' },
      { label: '	DIPROSALIC oint.' },
      { label: '	DIPROSALIC lotion' },
      { label: '	BETNOSAL oint.' },
      { label: '	BETASALIC topical oint.' },
      { label: '	KERELLA oint.' },
      { label: '	BETNOSAL oint.' },

      { label: '	SALIBET oint.' },
    ],
  },
  {
    label: '	BETA-PYRIDYLCARBINOL',
    tradeLabels: [{ label: '	EPICOL RETARD 150mg tab.' }],
  },

  {
    label: '	BETAXOLOL',
    tradeLabels: [
      { label: '	BETOXOL 5mg/ml eye drops' },
      { label: '	APIXOL 0.5% eye drops' },
      { label: '	BETOPTIC 5mg/ml eye drops' },
      { label: '	KERLONE 20mg f.c.tab.' },
      { label: '	HELIOPRES-S 0.25% eye drops' },
      { label: '	KERLONE 10mg f.c.tab.' },
    ],
  },

  {
    label: '	BEZAFIBRATE',
    tradeLabels: [
      { label: '	EPIBEZA 200mg f.c.tab.' },
      { label: '	BEZALIP 200 mg tab.' },
      { label: '	BEZALIP Retard 400mg tab.' },
      { label: '	BEZAMIDINE 20mg tab.' },
    ],
  },
  {
    label: '	BIALLETHRIN+PIPERONYL BUTOXIDE',
    tradeLabels: [{ label: '	PARA SPRAY SPECIAL LICE' }],
  },

  { label: '	BICALUTAMIDE', tradeLabels: [{ label: '	CASODEX 50mg tab.' }] },
  {
    label: '	BIFENDATE',
    tradeLabels: [
      { label: '	BIFENDATE 1.5mg tab.' },
      { label: '	BIFENDATE 1.5mg tab.' },
    ],
  },
  {
    label: '	BIFONAZOLE',
    tradeLabels: [
      { label: '	MYCOSPOR 1% cream' },
      { label: '	MYCOSPOR 1% topical solution' },
    ],
  },

  {
    label: '	BILE EXTRACT+DIMETHICONE+PANCREATIN+PEPSIN',
    tradeLabels: [{ label: '	DEFLAZYME caps.' }],
  },
  { label: '	BIMATOPROST', tradeLabels: [{ label: '	LUMIGAN 0.03% eye drops' }] },
  {
    label: '	BIMATOPROST+TIMOLOL',
    tradeLabels: [{ label: '	GANFORT eye drops solution' }],
  },

  {
    label: '	BIOTIN',
    tradeLabels: [
      { label: '	AZGOBION 5mg tabs.' },
      { label: '	BIOTIN FORTE 5mg caps.' },
    ],
  },
  {
    label: '	BIOTIN+CALCIUM PANTOTHENATE+CYSTEINE+KERATIN+P-AMI',
    tradeLabels: [],
  },
  {
    label: '	BIOTIN+CALCIUM PANTOTHENATE+NICOTINAMIDE+VITAMIN B',
    tradeLabels: [],
  },
  {
    label: '	BIOTIN+CHOLINE+FOLIC ACID+INOSITOL+IRON+PABA+VITAM',
    tradeLabels: [],
  },

  {
    label: '	BIOTIN+FOLIC ACID+NICOTINAMIDE+SODIUM ASCORBATE+SO',
    tradeLabels: [],
  },
  {
    label: '	BIPERIDENE',
    tradeLabels: [
      { label: '	AKINETON 2mg tab.' },
      { label: '	KINOPRID 5mg/ml amp.' },
      { label: '	AKINETON 5 mg/ml amp.' },
      { label: '	ACHTENON  2mg tab.' },
    ],
  },

  {
    label: '	BIPHENYL DIMETHYL DICARBOXYLATE',
    tradeLabels: [
      { label: '	D.D.B 1.5mg pillules' },
      { label: '	HEPACARE DDB 1.5 mg f.c.pill' },
    ],
  },
  {
    label: '	BIPHENYL DIMETHYL DICARBOXYLATE+GARLIC OIL',
    tradeLabels: [{ label: '	PENNEL hard gelatin caps.' }],
  },
  {
    label: '	BIPHENYL DIMETHYL DICARBOXYLATE+SILYMARIN',
    tradeLabels: [{ label: '	MEPA-CURE caps.' }],
  },

  {
    label: '	BISACODYL',
    tradeLabels: [
      { label: '	ABILAXINE 10mg adult supp.' },
      { label: '	BISADYL 5mg for children supp.' },
      { label: '	BISADYL 5mg enteric coated tab.' },
      { label: '	DULCOLAX 5mg sugar coated tablet.' },
      { label: '	BISADYL 10mg/37ml enema' },
      { label: '	ABILAXINE 5 mg tab.' },
      { label: '	LAXIN 10mg enteric coated tab.' },
      { label: '	BISADYL 10mg for adults supp.' },

      { label: '	ABILAXINE 5mg infantile supp.' },
    ],
  },
  {
    label: '	BISACODYL+DOCUSATE SODIUM',
    tradeLabels: [
      { label: '	MINALAX  tab.' },
      { label: '	MINALAX  soft gelatin caps.' },
    ],
  },
  {
    label: '	BISMUTH OXIDE+BISMUTH SUBGALLATE+ZINC OXIDE',
    tradeLabels: [{ label: '	DELPAGUT supp.' }],
  },

  { label: '	BISMUTH SUBCITRATE', tradeLabels: [{ label: '	DENOL 120mg tab.' }] },

  {
    label: '	BISOPROLOL FUMARATE',
    tradeLabels: [
      { label: '	BISOCARD 5mg f.c.tab.' },
      { label: '	CONCOR 5mg f.c.tab.' },
      { label: '	BISOCCARD 10mg f.c.tab.' },
      { label: '	CONCOR 10mg f.c.tab.' },
      { label: '	BISTOL 10mg tab.' },
      { label: '	EGYPRO 5 mg tab.' },
      { label: '	BISTOL 2.5mg f.c.tab.' },
      { label: '	BISTOL 5 mg  f.c.tab.' },

      { label: '	CONCORCOR 2.5 mg  f.c.tab.' },
      { label: '	SOPROL 5mg f.c.tab.' },
      { label: '	SOPROL 10mg f.c.tab' },
      { label: '	NORMOCARD 7.5mg tabs.' },
      { label: '	Concor Cor 2.5mg Tab' },
    ],
  },

  {
    label: '	BISOPROLOL FUMARATE+HYDROCHLOROTHIAZIDE',
    tradeLabels: [
      { label: '	BISOCARD PLUS 5/12.5mg f.c.tab' },
      { label: '	CONCOR 10 PLUS f.c.tab.' },
      { label: '	BISTOL PLUS 5/12.5  f.c.tab.' },
      { label: '	BISTOL PLUS 2.5/6.25mg f.c.tab.' },
      { label: '	BISTOL PLUS 5/6.25mg f.c.tab.' },
      { label: '	CONCOR 5/12.5  PLUS  f.c.tab.' },
      { label: '	LODOZ 10/6.25  f.c.tab.' },
      { label: '	LODOZ 2.5/6.25  f.c.tab.' },

      { label: '	LODOZ 5/6.25 f.c.tab' },
      { label: '	SANDOPROL 5/12.5mg f.c.tab.' },
    ],
  },
  {
    label: '	BLEOMYCIN',
    tradeLabels: [
      { label: '	BLOICIN-S 15 units vial' },
      { label: '	BLEOCIP 15I.U./vial' },
      { label: '	BLEOCIN 15mg amp.' },
    ],
  },

  {
    label: '	BLOOD-COAGULATION FACTOR IX',
    tradeLabels: [
      { label: '	BERININ P 300 I.V.vial' },
      { label: '	MONOFIX-VF 500 I.u./vial' },
      { label: '	BEMOFIL 500 I.U.vial' },
    ],
  },
  {
    label: '	BLOOD-COAGULATION FACTOR VII',
    tradeLabels: [{ label: '	NOVOSEVEN 1.2mg I.V.inj' }],
  },

  {
    label: '	BLOOD-COAGULATION FACTOR VIII',
    tradeLabels: [
      { label: '	HAEMOCTIN SDH  250I.U./ml' },
      { label: '	DRIED FACTOR VIII FRACTION ,8Y 250I.U./10ml vial' },
      { label: '	DRIED FACTOR VIII FRACTION ,8Y 250I.U./10ml vial' },
      { label: '	KOATE-DVI 50I.u./ml I.V.vial' },
      { label: '	GREEN-VIII INJ. 250 I.U./vial.' },
      { label: '	KOATE-DVI 100 IU/ml I.V.vial' },
    ],
  },
  {
    label: '	BOLDO+CHOLINE DIHYDROGEN CITRATE+CYNARA EXTRACT+MA',
    tradeLabels: [],
  },

  {
    label: '	BORAX +MENTHOL+SODIUM BICARBONATE+SODIUM CHLORIDE',
    tradeLabels: [{ label: '	VAGYL POWDER sachet' }],
  },
  {
    label: '	BORAX +SODIUM BICARBONATE+SODIUM CHLORIDE',
    tradeLabels: [
      { label: '	ALKALINE WASH (SAP) sachet.' },
      { label: '	ALKAWASH sachet' },
      { label: '	ALKA-MISR alkaline nasal wash.' },
    ],
  },
  {
    label: '	BORAX+ALUMINIUM POTASSIUM SULPHATE+CHLOROPHYLL+SOD',
    tradeLabels: [],
  },

  {
    label: '	BORAX+BORIC ACID+SODIUM BICARBONATE',
    tradeLabels: [{ label: '	ALKA sachets' }],
  },
  {
    label: '	BORIC ACID+DISODIUM EDETATE+SODIUM BORATE+SODIUM C',
    tradeLabels: [],
  },
  {
    label: '	BORNEOL+CAMPHENE+CINEOL+MENTHOL+MENTHONE+PINENE ( ',
    tradeLabels: [],
  },
  {
    label: '	BORTEZOMIB',
    tradeLabels: [{ label: '	VELCADE  3.5mg powder in vial for I.V. inj.' }],
  },

  {
    label: '	BOTULINUM TOXIN',
    tradeLabels: [
      { label: '	DYSPORT 500unit vial' },
      { label: '	BOTOX 100 unit vial' },
    ],
  },

  {
    label: '	BRIMONIDINE TARTRATE',
    tradeLabels: [
      { label: '	BRIMONOCOND  0.2 % eye dps.' },
      { label: '	BRIMONIDINE 2% W/V Ophthalmic Solution' },
      { label: '	ALPHAGAN P ophthalmic solution' },
      { label: '	ALPHAGAN 0.2% eye dps.' },
      { label: '	PHARMAPRESS 2mg/ml ophthalmic soln.' },
    ],
  },

  {
    label: '	BRIMONIDINE+TIMOLOL',
    tradeLabels: [
      { label: '	BRIMONOCOND PLUS  eye drops' },
      { label: '	COMBIGAN 2mg/ml / 5mg/ml  eye drop,solution' },
      { label: '	TIMOMONDIN eye drops' },
    ],
  },
  { label: '	BRINZOLAMIDE', tradeLabels: [{ label: '	AZOPT 1% eye drops' }] },

  {
    label: '	BROMAZEPAM',
    tradeLabels: [
      { label: '	BROMAZANIL 6mg tabs.' },
      { label: '	CALMEPAM 1.5mg tab.' },
      { label: '	BROPAM 1.5mg tab.' },
      { label: '	LEXOTANIL 1.5mg tab.' },
      { label: '	CALMETANIL 1.5mg f.c.tab.' },
      { label: '	BROPAM 3mg tab.' },
      { label: '	LEXOPAM 3mg tab.' },
      { label: '	NEO OPT 6mg tab.' },

      { label: '	CALMETANIL 3mg f.c.tab.' },
      { label: '	LEXOPAM 1.5mg tab.' },
      { label: '	LEXOTANIL 3mg tab.' },
      { label: '	CALMEPAM 3mg tab.' },
    ],
  },
  {
    label: '	BROMELAIN+PAPAIN+PANCREATIN+RUTIN+TRYPSIN',
    tradeLabels: [{ label: '	FLAVANZYME Tab.' }],
  },

  {
    label: '	BROMELAIN+RUTOSIDE+TRYPSIN',
    tradeLabels: [
      { label: '	PHLOGENZYME tab.' },
      { label: '	ZYMENTERN enteric coated tab.' },
    ],
  },

  {
    label: '	BROMHEXINE',
    tradeLabels: [
      { label: '	BROMHEXINE  4mg/5ml syrup' },
      { label: '	MUCLEAR 4mg/5ml syrup' },
      { label: '	MUCOLYTE  80 mg/100 ml syrup.' },
      { label: '	BISOLVON 8mg tab.' },
      { label: '	MUCOLYTE 8mg tab.' },
      { label: '	BISOLVON 4mg/5ml elixir' },
      { label: '	BISOLVON 10mg/5ml solution.' },
      { label: '	SOLVIN 8mg tab.' },

      { label: '	SOLVIN N 80mg/100ml syrup' },
      { label: '	SOLVIN 2 mg/ml oral drops' },
      { label: '	BISOLVON Amp.' },
    ],
  },
  {
    label: '	BROMHEXINE HCL',
    tradeLabels: [
      { label: '	BROMOSOLV 4mg/5ml syrup' },
      { label: '	BROMHEXINE 8mg tab.B.P 98' },
    ],
  },
  {
    label: '	BROMHEXINE+GUAIFENESIN',
    tradeLabels: [{ label: '	MUCLEAR caps.' }],
  },

  {
    label: '	BROMHEXINE+GUAIFENESIN+MENTHOL+TERBUTALINE',
    tradeLabels: [
      { label: '	ALL VENT syrup' },
      { label: '	BROZEDEX syrup.' },
      { label: '	TERHEXINE syrup' },
    ],
  },
  {
    label: '	BROMHEXINE+IPECA TINCTURE+SENEGA EXTRACT+TOLU SYRU',
    tradeLabels: [],
  },
  { label: '	BROMHEXINE+SALBUTAMOL', tradeLabels: [{ label: '	MUCOVENT tab.' }] },

  {
    label: '	BROMOCRIPTINE',
    tradeLabels: [
      { label: '	LACTODEL 2.5mg tab.' },
      { label: '	DOPAGON 2.5mg tab.' },
      { label: '	PARLODEL 2.5mg tab.' },
      { label: '	PARLODEL LA 25mg/ml amp.' },
    ],
  },
  {
    label: '	BROMPHENIRAMINE+PARACETAMOL+PSEUDOEPHEDRINE',
    tradeLabels: [{ label: '	COMTREX ACUTE HEAD COLD f.c.tab.' }],
  },

  {
    label: '	BROMPHENIRAMINE+PSEUDOEPHEDRINE',
    tradeLabels: [{ label: '	DIMETAPP elixir' }],
  },
  { label: '	BROTIZOLAM', tradeLabels: [{ label: '	LENDORMIN 250 mcg tab.' }] },
  {
    label: '	B-SITOSTEROL',
    tradeLabels: [
      { label: '	MEBO 0.25% herbal and natural oint.' },
      { label: '	MEBO 0.25% herbal and natural oint.' },
      { label: '	MEBO 0.25% herbal and natural oint.' },
    ],
  },

  {
    label: '	BUDESONIDE',
    tradeLabels: [
      { label: '	ENEMA-CORT RETENTION 0.02 mg/ml Enema' },
      {
        label: '	MIFLONIDE 400mcg inhalation powder in capsule +inhaler device',
      },
      { label: '	PULMICORT 200mcg/dose inhaler' },
      { label: '	PULMICORT 200mcg/dose turbohaler' },
      { label: '	PULMICORT 0.5mg/ml nebulizer susp.' },
      { label: '	PULMICORT 50mcg/dose inhaler' },
      { label: '	RHINOCORT 50mcg /dose nasal spray' },
      { label: '	RHINOCORT AQUA 32mcg/dose nasal spray.' },

      { label: '	PULMICORT 100mcg/dose turbuhaler' },
      { label: '	PULMICORT 0.5mg/ml nebulizer susp.' },
      { label: '	RHINOCORT AQUA 64mcg/dose nasal spray.' },
      { label: '	PULMICORT 0.25mg/ml nebulizer susp.' },
      { label: '	PULMICORT 0.25mg/ml nebulizer susp.' },
      { label: '	Pulmicort 0.25mg' },
    ],
  },

  {
    label: '	BUDESONIDE+FORMOTEROL',
    tradeLabels: [
      { label: '	SYMBICORT  320/9mcg tubuhaler' },
      { label: '	SYMBICORT 160/4.5mcg/dose turbuhaler' },
      { label: '	SYMBICORT 80/4.5mcg/dose turbuhaler' },
    ],
  },

  {
    label: '	BUFLOMEDIL',
    tradeLabels: [
      { label: '	LOFTYL 150mg f.c.tab.' },
      { label: '	BUFLODIL 300mg tab.' },
      { label: '	VILATOL 600mg S.R.tab.' },
      { label: '	VILATOL 300mg f.c.tab.' },
    ],
  },
  {
    label: '	BUFLOMEDIL HCL',
    tradeLabels: [
      { label: '	BUFLOMED 300mg tab.' },
      { label: '	VASOMEKAN 150mg f.c. tabs.' },
    ],
  },

  {
    label: '	BUMADIZONE CALCIUM',
    tradeLabels: [{ label: '	OCTOMOTOL 110 mg sugar coated tab.' }],
  },
  {
    label: '	BUMETANIDE',
    tradeLabels: [
      { label: '	BURINEX 1mg tab.' },
      { label: '	DIUNIDE 0.025% I.V./I.M.amp.' },
      { label: '	EDEMEX 0.25mg/ml  i.m/i.v amp.' },
      { label: '	EDEMEX 1mg tab.' },
      { label: '	BURINEX 5mg tab.' },
    ],
  },

  {
    label: '	BUPIVACAINE',
    tradeLabels: [
      { label: '	BUCAIN 20mg/4ml (0.5%)  HYPERBAR amp.' },
      { label: '	MARCAINE SPINAL 0.5 % HEAVY amp.' },
      { label: '	BUPIVACAINE MERCK 20mg/4ml amp.' },
      { label: '	BUCAINE 0.5% carpule' },
      { label: '	BUCAIN 0.5 % inj.' },
    ],
  },

  {
    label: '	BUPROPION',
    tradeLabels: [
      { label: '	BUPAION 150mg S.R.tab.' },
      { label: '	ABSTAIN 150mg S.R.tab.' },
      { label: '	ZYBAN 150mg S.R.tab.' },
      { label: '	WELLBUTRIN 150mg S.R.tab.' },
    ],
  },

  {
    label: '	BUSPIRONE',
    tradeLabels: [
      { label: '	BUSPAR 5mg tab.' },
      { label: '	NEUROBUS 5mg tab.' },
      { label: '	BUSPIRO 10mg tab.' },
      { label: '	NEUROBUS 10mg tab.' },
      { label: '	BUSPIRO 5mg tab.' },
      { label: '	BUSPIRO 15mg f.c.tab.' },
      { label: '	BUSPAR 10mg tab.' },
      { label: '	BUSPAR 10mg tab.' },

      { label: '	BUSPAR 15mg ( dividose ) tab.' },
      { label: '	BUSPAR 15mg ( dividose ) tab.' },
      { label: '	EXUPAR 15mg tab.' },
      { label: '	SEROPAR 10mg tab.' },
    ],
  },
  {
    label: '	BUSULPHAN',
    tradeLabels: [
      { label: '	MYLPHAN 2mg f.c.tab.' },
      { label: '	MYLERAN 2mg f.c.tab.' },
    ],
  },

  {
    label: '	BUTAMIRATE CITRATE',
    tradeLabels: [
      { label: '	COUGH CUT SYRUP 7.5 mg/5 ml' },
      { label: '	SINECOD 0.5% oral drops' },
      { label: '	SINECOD 0.15%syrup.' },
    ],
  },
  {
    label: '	BUTENAFINE HYDROCHLORIDE',
    tradeLabels: [
      { label: '	MENTAX 1% cream' },
      { label: '	FUNGESTIC 1% topical  Cream' },
    ],
  },

  {
    label: '	BUTOCONAZOLE',
    tradeLabels: [{ label: '	BUTOCONAZOLE 2% vaginal Cream' }],
  },
  {
    label: '	BUTORPHANOL TARTRATE',
    tradeLabels: [{ label: '	STADOL 2 mg/ml inj.' }],
  },
  {
    label: '	BUZEPIDE METIODIDE+CLOCINZINE+PHENYLPROPANOLAMINE',
    tradeLabels: [{ label: '	DENORAL 1mg tab.' }],
  },
  {
    label: '	CA GLUCONATE+CA PHOSPHOLACTATE+DEXPANTHENOL+FERROU',
    tradeLabels: [],
  },

  {
    label: '	CA GLUCONATE+CA PHOSPHOLACTATE+DEXPANTHENOL+NICOTI',
    tradeLabels: [],
  },
  {
    label: '	CABERGOLINE',
    tradeLabels: [
      { label: '	DOSTINEX 0.5mg tab.' },
      { label: '	CABERGLOBE 0.5mg tab.' },
    ],
  },
  {
    label: '	CAFFEINE+CHLOROTHEOPHYLLINE+CHLORPHENOXAMINE',
    tradeLabels: [
      { label: '	EMERAL adult supp.' },
      { label: '	EMERAL paed. supp.' },
      { label: '	EMERAL tab.' },
    ],
  },

  {
    label: '	CAFFEINE+CHLORPHENIRAMINE+CODEINE+PARACETAMOL+PSEU',
    tradeLabels: [],
  },
  {
    label: '	CAFFEINE+CHLORPHENIRAMINE+IBUPROFEN+PHENYLPROPANOL',
    tradeLabels: [],
  },
  {
    label: '	CAFFEINE+CHLORPHENIRAMINE+PARACETAMOL+PHENYLPROPAN',
    tradeLabels: [],
  },
  {
    label: '	CAFFEINE+CHLORPHENIRAMINE+PARACETAMOL+PSEUDOEPHEDR',
    tradeLabels: [],
  },
  {
    label: '	CAFFEINE+CHLORPHENIRAMINE+PARACETAMOL+VITAMIN C',
    tradeLabels: [{ label: '	FLU-C sachets.' }],
  },

  {
    label: '	CAFFEINE+CHLORPHENOXAMINE',
    tradeLabels: [{ label: '	ALLERGEX CAFFEINE tab.' }],
  },
  {
    label: '	CAFFEINE+DIPYRONE+ERGOTAMINE',
    tradeLabels: [{ label: '	AMIGRAINE tab.' }],
  },
  {
    label: '	CAFFEINE+DIPYRONE+ERGOTAMINE+MEPROBAMATE+PHENOBARB',
    tradeLabels: [],
  },
  {
    label: '	CAFFEINE+DOMPERIDONE+ERGOTAMINE TARTARATE+PARACETA',
    tradeLabels: [],
  },

  {
    label: '	CAFFEINE+DOXYLAMINE SUCCINATE+PARACETAMOL+PSEUDOEP',
    tradeLabels: [],
  },
  {
    label: '	CAFFEINE+DROTAVERINE+PARACETAMOL',
    tradeLabels: [{ label: '	PETRO tab.' }],
  },
  {
    label: '	CAFFEINE+ERGOTAMINE+METOCLOPRAMIDE+PARACETAMOL',
    tradeLabels: [{ label: '	METOGRAINE  tab.' }],
  },
  {
    label: '	CAFFEINE+IBUPROFEN+PARACETAMOL',
    tradeLabels: [{ label: '	CETAFEN PLUS tab.' }],
  },

  {
    label: '	CAFFEINE+NEFOPAM+PARACETAMOL',
    tradeLabels: [{ label: '	NEFOCIN tab.' }],
  },
  {
    label: '	CAFFEINE+NICOTINIC ACID+VITAMIN E+YOHIMBINE',
    tradeLabels: [{ label: '	SUPER ACT caps.' }],
  },

  {
    label: '	CAFFEINE+PARACETAMOL',
    tradeLabels: [
      { label: '	ABIMOL EXTRA tab.' },
      { label: '	ABIMOL EXTRA tab.' },
      { label: '	BIENADOL tab.' },
      { label: '	MOLFEN  sachets' },
      { label: '	ADOL EXTRA caplets.' },
      { label: '	CEFACET caps.' },
      { label: '	PARA-XENOS PLUS eff.granules' },
      { label: '	PRONTO PLUS  tab.' },

      { label: '	PYRAL EXTRA tablets' },
      { label: '	PANADOL EXTRA f.c. tab.' },
    ],
  },
  {
    label: '	CAFFEINE+PARACETAMOL+PHENYLEPHRINE+ASCORBIC ACID',
    tradeLabels: [{ label: '	RHINO C tab.' }],
  },
  {
    label: '	CAFFEINE+PARACETAMOL+PHENYLEPHRINE+TERPINE HYDRATE',
    tradeLabels: [],
  },
  {
    label: '	CAFFEINE+PARACETAMOL+PROPYPHENAZONE',
    tradeLabels: [{ label: '	STOPAIN tab.' }],
  },

  {
    label: '	CALAMINE+DIMETHICONE+ZINC OXIDE',
    tradeLabels: [{ label: '	BABY CARE cream' }],
  },
  {
    label: '	CALAMINE+DIPHENHYDRAMINE+ZINC OXIDE',
    tradeLabels: [
      { label: '	CALAMYL-D LOTION' },
      { label: '	CALAMIDINE lotion' },
    ],
  },
  {
    label: '	CALAMINE+HYDROCORTISONE+SULPHUR',
    tradeLabels: [{ label: '	ACNISONE lotion' }],
  },

  {
    label: '	CALAMINE+ZINC OXIDE',
    tradeLabels: [
      { label: '	CALAMINE lotion B.P 93' },
      { label: '	CALAMINE 15% lotion' },
    ],
  },
  {
    label: '	CALCIPOTRIENE',
    tradeLabels: [
      { label: '	CALCIPROL 0.005% topical ointment' },
      { label: '	CALCIPROL 0.005% Topical Cream' },
      { label: '	PSORITOP 0.005% topical cream' },
    ],
  },

  {
    label: '	CALCIPOTRIOL',
    tradeLabels: [
      { label: '	DAIVONEX 50mcg/gm cream' },
      { label: '	DAIVONEX 50mcg/gm topical  oint.' },
      { label: '	CALCIPOHEAL 0.005% cream' },
      { label: '	DAIVONEX SCALP 50mcg/ml topical solution' },
    ],
  },

  {
    label: '	CALCITONIN',
    tradeLabels: [
      { label: '	MIACALCIC 50I.U. nasal spray' },
      { label: '	CALCITONIN STADA 100I.U./ml amp.' },
      { label: '	CALCITONIN STADA 50I.u./ml amp.' },
      { label: '	MIACALCIC 100 I.U /ml amp. For I.M./I.V./S.C inj.' },
      { label: '	BONINASAL 200I.u./dose nasal spray' },
      { label: '	MIACALCIC 50 MRC I.U amp.' },
      { label: '	CIBACALCIN 0.5mg amp.' },
      { label: '	CALCIMOUN 200I.U/dose nasal spray' },

      { label: '	CIBACALCIN 0.25mg amp.' },
      { label: '	MIACALCIC 100I.U. nasal spray' },
      { label: '	MIACALCIC 200 I.U./ml nasal spray' },
      { label: '	MIACALCIC 200 I.U./ml nasal spray' },
    ],
  },
  {
    label: '	CALCITRIOL',
    tradeLabels: [
      { label: '	CALCIJEX 1 mcg//ml  inj.' },
      { label: '	CALCIJEX  2  mcg/ml  inj.' },
      { label: '	ROCALTROL 0.5mcg caps.' },
      { label: '	ROCALTROL 0.25mcg caps.' },
    ],
  },

  {
    label: '	CALCIUM',
    tradeLabels: [
      { label: '	CALCIMATE 500mg chewable tab.' },
      { label: '	CALCIUM PHARCO 115mg/5ml syrup' },
      { label: '	BONE CAL 500mg f.c.tab.' },
      { label: '	SORBISTERIT powder' },
      { label: '	VITACAL FORTE EFF. TAB. 500 mg' },
      { label: '	Calcionate Amp' },
    ],
  },

  {
    label: '	CALCIUM ACETATE',
    tradeLabels: [
      { label: '	CALCIUM ACETATE 500mg f.c. tab.' },
      { label: '	DIALY-CAL 500mg f.c. tabs.' },
      { label: '	NEPHROCAL  tab.' },
      { label: '	MARCAL TAB' },
    ],
  },
  {
    label: '	CALCIUM BROMIDE',
    tradeLabels: [{ label: '	SEDOCAL 5gm/100ml syrup' }],
  },

  {
    label: '	CALCIUM BROMOLACTOBIONATE',
    tradeLabels: [{ label: '	CALBROM 1gm/5ml syrup' }],
  },
  {
    label: '	CALCIUM CARBONATE',
    tradeLabels: [
      { label: '	CALCIMATE 500mg caps.' },
      { label: '	CALCIMATE FORT 1200mg tab.' },
    ],
  },
  {
    label: '	CALCIUM CARBONATE NATURAL+SODIUM FLUORIDE+VITAMIN ',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM CARBONATE+CALCIUM CHLORIDE+CALCIUM GLUCOHE',
    tradeLabels: [],
  },

  {
    label: '	CALCIUM CARBONATE+CALCIUM PANTOTHENATE +FERROUS GL',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM CARBONATE+CHOLECALCIFEROL',
    tradeLabels: [{ label: '	CALCIUM D SANDOZ effervesent tablets' }],
  },
  {
    label: '	CALCIUM CARBONATE+CITRIC ACID+VITAMIN C',
    tradeLabels: [
      { label: '	CEBION CALCIUM 1gm eff.tab.' },
      { label: '	JEDCO CAL-C effervescent granules' },
    ],
  },

  {
    label: '	CALCIUM CARBONATE+DIMETHICONE+GLYCINE',
    tradeLabels: [
      { label: '	ASYLON tab.' },
      { label: '	ASYLON tab.' },
      { label: '	GLYCODAL chew. tab.' },
    ],
  },
  {
    label: '	CALCIUM CARBONATE+FAMOTIDINE+MAGNESIUM HYDROXIDE',
    tradeLabels: [{ label: '	FAMO-PLUS chewable tab.' }],
  },
  {
    label: '	CALCIUM CARBONATE+GLYCINE',
    tradeLabels: [{ label: '	GLYOCAL tab.' }],
  },

  {
    label: '	CALCIUM CARBONATE+MAGNESIUM CARBONATE',
    tradeLabels: [{ label: '	RENNIE chew.tab.' }],
  },
  {
    label: '	CALCIUM CARBONATE+RISEDRONATE SODIUM',
    tradeLabels: [
      { label: '	ACTOSEB WITH CALCIUM f.c.tab.(biphasic)' },
      { label: '	RISALDENE PLUS f.c.tab.' },
    ],
  },

  {
    label: '	CALCIUM CHLORIDE',
    tradeLabels: [
      { label: '	CALORIDE 10 % amp.' },
      { label: '	CALCIUM CHLORIDE INJECTION 10%' },
      { label: '	CALORIDE 13.4% amp.' },
      { label: '	CALCIUM CHLORIDE 1.47% I.V.injection' },
      { label: '	CALCIUM CHLORIDE 100mg/ml amp.U.S.P.30' },
    ],
  },
  {
    label: '	CALCIUM CHLORIDE+DEXTROSE+MAGNESIUM CHLORIDE+SODIU',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM CHLORIDE+DEXTROSE+MAGNESIUM CHLORIDE+SODIU',
    tradeLabels: [],
  },

  {
    label: '	CALCIUM CHLORIDE+DEXTROSE+POTASSIUM CHLORIDE+SODIU',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM CHLORIDE+DEXTROSE+POTASSIUM CHLORIDE+SODIU',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM CHLORIDE+GLUCOSE+MAGNESIUM CHLORIDE+SODIUM',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM CHLORIDE+MAGNESIUM CHLORIDE+POTASSIUM CHLO',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM CHLORIDE+MAGNESIUM CHLORIDE+POTASSIUM CHLO',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM CHLORIDE+POTASSIUM CHLORIDE+SODIUM ACETATE',
    tradeLabels: [],
  },

  {
    label: '	CALCIUM CHLORIDE+POTASSIUM CHLORIDE+SODIUM CHLORID',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM CHLORIDE+POTASSIUM CHLORIDE+SODIUM CHLORID',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM CITRATE',
    tradeLabels: [{ label: '	CALCIUM PHARCO 950mg chewable tab.' }],
  },

  {
    label: '	CALCIUM DOBESILATE',
    tradeLabels: [
      { label: '	DOXIUM 250mg caps' },
      { label: '	DOXIUM 500mg caps.' },
      { label: '	BEKCIUM 500mg caps.' },
      { label: '	DILASAL 500mg caps.' },
      { label: '	DOBESIL CAPSULE 250 MG' },
      { label: '	DILASAL 250mg caps.' },
      { label: '	BEKCIUM 250mg caps.' },
    ],
  },

  {
    label: '	CALCIUM DOBESILATE+DEXAMETHASONE+LIDOCAINE',
    tradeLabels: [{ label: '	DOXIPROCT PLUS ointment' }],
  },
  {
    label: '	CALCIUM DOBESILATE+HEPARINOID',
    tradeLabels: [{ label: '	DOXIVENIL topical gel' }],
  },
  {
    label: '	CALCIUM DOBESILATE+LIDOCAINE',
    tradeLabels: [{ label: '	DOXIPROCT oint.' }],
  },

  {
    label: '	CALCIUM GLUBIONATE',
    tradeLabels: [
      { label: '	HI CAL FORTE 115mg/5ml syrup' },
      { label: '	HI-CAL 1.2g/5ml syrup' },
    ],
  },
  {
    label: '	CALCIUM GLUBIONATE+CALCIUM LACTOBIONATE',
    tradeLabels: [{ label: '	CALCIUM SANDOZ syrup' }],
  },
  {
    label: '	CALCIUM GLUCOHEPTONATE+DIMETHYLAMINOETHYL GLUTAMAT',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM GLUCONATE + GLUCOSE+ POTASSIUM CHLORIDE +S',
    tradeLabels: [],
  },

  {
    label: '	CALCIUM GLUCONATE+CALCIUM LEVULINATE',
    tradeLabels: [
      { label: '	CALCIONATE amp.' },
      { label: '	CALCIUM GLUCONATE U.S.P.27 I.V. inj.' },
    ],
  },
  {
    label: '	CALCIUM GLUCONATE+CALCIUM LEVULINATE+VITAMIN B12+V',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM GLUCONATE+COPPER+FERROUS FUMARATE+MANGANES',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM GLUCONATE+DEXAPANTHENOL+VIT.(A+B1+B2+B6+B1',
    tradeLabels: [],
  },

  {
    label: '	CALCIUM GLUCONATE+DEXTROSE+POTASSIUM CHLORIDE+SODI',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM LEVULINATE+VITAMIN D+VITAMIN B12',
    tradeLabels: [{ label: '	VITACAL syrup' }],
  },
  {
    label: '	CALCIUM LEVULINATE+VITAMIN D3+VITAMIN B12',
    tradeLabels: [
      { label: '	CALCIVIT D3 syrup.' },
      { label: '	DECAL B12 syrup' },
    ],
  },
  {
    label: '	CALCIUM PANTOTHENATE+Cu+Mg+Mn+NICOTINAMIDE+VITAMIN',
    tradeLabels: [],
  },

  {
    label: '	CALCIUM PANTOTHENATE+FOLIC ACID+MAGNESIUM +MANGANE',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM PANTOTHENATE+KERATIN+L-CYSTINE+PARA-AMINOB',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM PANTOTHENATE+NICOTINAMIDE+SILYMARIN+VITAMI',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM PANTOTHENATE+NICOTINAMIDE+VITAMIN A+VITAMI',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM PANTOTHENATE+NICOTINAMIDE+VITAMIN B1+VITAM',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM PANTOTHENATE+NICOTINAMIDE+VITAMIN B1+VITAM',
    tradeLabels: [],
  },

  {
    label: '	CALCIUM PANTOTHENATE+NICOTINAMIDE+VITAMIN B1+VITAM',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM PANTOTHENATE+NICOTINAMIDE+VITAMIN B1+VITAM',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM PANTOTHENATE+NICOTINAMIDE+VITAMIN B1+VITAM',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM PANTOTHENATE+VITAMIN A+VITAMIN B1',
    tradeLabels: [{ label: '	EYE HEAL oint.' }],
  },

  { label: '	CALCIUM SENNOSID', tradeLabels: [{ label: '	PURGATON 20mg tab.' }] },
  {
    label: '	CALCIUM+DEXAPANTHENOL+LYSINE+PHOSPHORUS+VITAMIN(B1',
    tradeLabels: [],
  },
  {
    label: '	CALCIUM+VITAMIN C',
    tradeLabels: [
      { label: '	CALIVIT C eff.tab.' },
      { label: '	VITACID CALCIUM eff.tab.' },
    ],
  },

  {
    label: '	CALCIUM+VITAMIN C+VITAMIN D',
    tradeLabels: [{ label: '	CALCIUM eff.instant' }],
  },
  {
    label: '	CALENDULA+CELERY+CHICORY+LIQUORICE+MAJORAM+NETTLE+',
    tradeLabels: [],
  },
  {
    label: '	CAMPHOR+CAMPHOR OIL+MENTHOL+METHYL SALICYLATE+ CAP',
    tradeLabels: [],
  },
  {
    label: '	CAMPHOR+DIETHYLAMINE SALICYLATE+MENTHOL',
    tradeLabels: [{ label: '	ALGASON MASSAGE cream' }],
  },

  {
    label: '	CAMPHOR+EUCALYPTOL+GUAIACOL+PARACETAMOL+PHOLCODINE',
    tradeLabels: [{ label: '	PYRAPHOL ped. supp.' }],
  },
  {
    label: '	CAMPHOR+EUCALYPTOL+GUAIACOL+PHOLCODINE',
    tradeLabels: [{ label: '	EUCAPHOL inf. supp.' }],
  },
  {
    label: '	CAMPHOR+EUCALYPTUS OIL+MENTHOL+METHYL SALICYLATE+T',
    tradeLabels: [],
  },
  {
    label: '	CAMPHOR+EUCALYPTUS+METHYL SALICYLATE+THYMOL',
    tradeLabels: [{ label: '	VICKSACID OINT.' }],
  },

  { label: '	CAMPHOR+KETOPROFEN', tradeLabels: [{ label: '	MENTOPROFEN gel' }] },
  {
    label: '	CAMPHOR+MENTHOL',
    tradeLabels: [{ label: '	MENTHOR topical gel.' }],
  },
  {
    label: '	CAMPHOR+MENTHOL+METHYL SALICYLATE',
    tradeLabels: [
      { label: '	MASSAGIL Spray' },
      { label: '	RHEUMATIZEN topical cream' },
    ],
  },

  {
    label: '	CAMPHOR+SALICYLAMIDE',
    tradeLabels: [
      { label: '	ISOSAL topical solution' },
      { label: '	ISOSAL topical solution' },
    ],
  },
  {
    label: '	CAMPHOR+SALICYLIC ACID+SULPHUR',
    tradeLabels: [{ label: '	ACNIL lotion' }],
  },
  {
    label: '	CAMYLOFIN+DIPYRONE',
    tradeLabels: [
      { label: '	SPASMOPYRALGIN M adult supp.' },
      { label: '	SPASMOPYRALGIN-M' },
    ],
  },

  {
    label: '	CANDESARTAN CILEXETIL',
    tradeLabels: [
      { label: '	CANDESARTAN 8mg tabs.' },
      { label: '	ALBUSTIX  8mg Tab.' },
      { label: '	ATACAND 16mg f.c.tab.' },
      { label: '	ATACAND 8mg tab.' },
      { label: '	ATACAND 8mg tab.' },
      { label: '	ATACAND 8mg tab.' },
      { label: '	ATACAND 4mg tab.' },
      { label: '	CANDALKAN 8mg f.c. tab.' },

      { label: '	BLOPRESS 16mg tab.' },
      { label: '	CANDALKAN 16mg f.c. tab.' },
      { label: '	CANDALKAN 4mg f.c.tab.' },
      { label: '	CANDESAR 4mg tab.' },
      { label: '	CANDESAR 8mg tab.' },
      { label: '	CANDESARTAN 16mg tabs.' },
      { label: '	BLOPRESS 8mg tab.' },
    ],
  },

  {
    label: '	CANDESARTAN CILEXETIL+HYDROCHLOROTHIAZIDE',
    tradeLabels: [
      { label: '	BLOPRESS PLUS 16/12.5 mg tabs.' },
      { label: '	CANDALKAN PLUS 32/12.5 mg tab.' },
      { label: '	ALBUSTIX D 16/12.5mg Tab.' },
      { label: '	BLOPRESS PLUS  8/12.5mg Tablets' },
      { label: '	ALBUSTIX  D 32/12.5mg tab.' },
      { label: '	CANDALKAN PLUS 16/12.5 mg f.c.tab.' },
    ],
  },
  {
    label: '	CANTHARIDES+CAPSICUM+JABORANDI+PILOCARPINE+PHENOL+',
    tradeLabels: [],
  },

  {
    label: '	CANTHARIDES+PILOCARPINE+QUININE+SALICYLIC ACID',
    tradeLabels: [{ label: '	NEW TONOSCALPINE scalp lotion.' }],
  },
  {
    label: '	CAPSAICIN',
    tradeLabels: [
      { label: '	MAGICAPSAICIN.' },
      { label: '	CAPSIN 0.025% cream' },
      { label: '	CAPSIN 0.075% cream' },
    ],
  },
  {
    label: '	CAPSAICIN+CURCUMIN',
    tradeLabels: [{ label: '	CAPSCUR topical cream' }],
  },

  {
    label: '	CAPSAICIN+METHYL SALICYLATE',
    tradeLabels: [{ label: '	CAPSISAL gel' }],
  },
  {
    label: '	CAPSICUM EXTRACT',
    tradeLabels: [{ label: '	NEW AMERICAN CAPSICUM 3 %' }],
  },

  {
    label: '	CAPTOPRIL',
    tradeLabels: [
      { label: '	CAPOTEN 25mg tab.' },
      { label: '	CAPOTRIL 25mg tab.' },
      { label: '	CAPOTEN 50 mg tab.' },
      { label: '	ANGIOPRESS 25mg tab.' },
      { label: '	ANGIOPRESS 50mg tab.' },
      { label: '	CAPOTRIL 50mg tab.' },
      { label: '	FARCOPRIL 50mg tab.' },
      { label: '	LOTENSINE 25mg tab.' },

      { label: '	HYPOPRESS 25mg tab.' },
      { label: '	HYPOPRESS 12.5mg tab.' },
    ],
  },

  {
    label: '	CAPTOPRIL+HYDROCHLOROTHIAZIDE',
    tradeLabels: [
      { label: '	HYPOPRESS D tab.' },
      { label: '	FARCOPRIL PLUS 25/50mg tab.' },
      { label: '	CAPOZIDE 50/25 tab.' },
      { label: '	CAPOZIDE 50/25 tab.' },
      { label: '	CAPOZIDE 50/25 tab.' },
      { label: '	CAPOJED-H tab.' },
      { label: '	ANGIOPRESS COMP 50/25 tab.' },
      { label: '	CAPTOPRESSINE-D tab.' },

      { label: '	CAPTOPRIL-H 50/25 mg tabs.' },
    ],
  },
  { label: '	CAPTOPRIL+INDAPAMIDE', tradeLabels: [{ label: '	NORMATEN tab.' }] },
  {
    label: '	CARAWAY OIL+CINNAMON OIL+FENNEL OIL',
    tradeLabels: [{ label: '	CARMINEX syrup' }],
  },
  {
    label: '	CARAWAY OIL+DILL OIL+FENNEL OIL+GINGER+POTASSIUM C',
    tradeLabels: [],
  },
  {
    label: '	CARAWAY OIL+GINGER+PEPPERMINT OIL+SODIUM BICARBONA',
    tradeLabels: [],
  },

  {
    label: '	CARBAMAZEPINE',
    tradeLabels: [
      { label: '	NEUROTOP RETARD 600mg S.R.tab.' },
      { label: '	NEUROTOP 200mg tab.' },
      { label: '	CARBAMAZEPIN 200mg tab.U.S.P.23' },
      { label: '	CARBAPEX 200mg tab.' },
      { label: '	ARBATEG 2% suspension' },
      { label: '	NEUROTOP 400mg tab.' },
      { label: '	ARBATEG 200mg tab' },
      { label: '	NEUROTOP RETARD 300mg S.R.tab.' },

      { label: '	CARBATOL 200mg tablet' },
      { label: '	CARBAMAZEPINE 200mg XR tab.' },
      { label: '	CARBAPEX 100mg chewable tab.' },
      { label: '	CARBAPEX CR 200mg tab.' },
      { label: '	CARBAPEX 400mg CR tab.' },
      { label: '	MAZEMAL 200mg tab.' },
      { label: '	TONOCLONE RETARD 200mg C.R.f.c.tab.' },
      { label: '	TONOCLONE 400mg tab.' },
      { label: '	TONOCLONE RETARD 400mg C.R. f.c.tab.' },
      { label: '	TONOCLONE 200mg tab.' },

      { label: '	TEGRETOL 2% syrup' },
      { label: '	TEGRAL 200mg scored tabs.' },
      { label: '	TEGRAPIN 400 mg XR tab.' },
      { label: '	TEGRETOL 200mg tab.' },
      { label: '	TEGRAZEPINE  200mg tab.' },
      { label: '	TEGRETOL CR 200mg f.c.divitab.' },
      { label: '	TEGRETOL CR 400mg f.c.divitabs' },
    ],
  },
  { label: '	CARBAMIDE', tradeLabels: [{ label: '	CARBAMIDE 10% cream' }] },

  {
    label: '	CARBAMIDE PEROXIDE',
    tradeLabels: [
      { label: '	EAR WAX 6.5mg/100ml drops' },
      { label: '	REMOWAX 5 % ear drops.' },
      { label: '	PERROXY 6.5% ear drops' },
    ],
  },
  {
    label: '	CARBASALATE CALCIUM',
    tradeLabels: [{ label: '	SOLPRIN 250mg sachets' }],
  },
  {
    label: '	CARBAZOCHROM+TROXERUTIN',
    tradeLabels: [{ label: '	FLEBOTON amp.' }],
  },

  {
    label: '	CARBIDOPA+ENTACAPONE+LEVODOPA',
    tradeLabels: [
      { label: '	STALEVO 50/12.5/200mg f.c.tab' },
      { label: '	STALEVO 100/25/200mg f.c.tab' },
      { label: '	STALEVO 150/37.5/200mg f.c.tab' },
    ],
  },

  {
    label: '	CARBIDOPA+LEVODOPA',
    tradeLabels: [
      { label: '	LECARDOPA 100/10mg tab.' },
      { label: '	LEVOCAR 50/200mg controlled release tab.' },
      { label: '	LEVOCAR  tab.' },
      { label: '	LEVOCAR TAB. 125  mg' },
      { label: '	LECARDOPA tab.' },
      { label: '	PARKIDOPA CR controlled release tab.' },
      { label: '	SINEMET 25/250mg tab.' },
      { label: '	SINEMET CR 50/200 mg tab.' },
    ],
  },

  {
    label: '	CARBIMAZOLE',
    tradeLabels: [{ label: '	CARBIMAZOLE 5mg f.c.tab.' }],
  },
  { label: '	CARBINOXAMINE', tradeLabels: [{ label: '	RAMALLERGE 4mg tab.' }] },
  {
    label: '	CARBINOXAMINE+DEXTROMETHORPHAN+PHENYLEPHRINE',
    tradeLabels: [{ label: '	RHINOTUS caps.' }],
  },

  {
    label: '	CARBINOXAMINE+DEXTROMETHORPHAN+PSEUDOEPHEDRINE',
    tradeLabels: [{ label: '	RHINOTUS syrup' }],
  },
  {
    label: '	CARBINOXAMINE+EPHEDRINE+PHOLCODINE',
    tradeLabels: [{ label: '	CYRINOL syrup' }],
  },
  {
    label: '	CARBINOXAMINE+PARACETAMOL+PSEUDOEPHEDRINE',
    tradeLabels: [{ label: '	MICHAELON tab.' }],
  },

  {
    label: '	CARBINOXAMINE+PHENYLEPHRINE',
    tradeLabels: [
      { label: '	RHINOPRONT S.R.caps.' },
      { label: '	RHINOPRONT S.R.caps.' },
    ],
  },
  {
    label: '	CARBINOXAMINE+PSEUDOEPHEDRINE',
    tradeLabels: [
      { label: '	RHINOSTOP oral drops' },
      { label: '	RHINOPRO syrup' },
    ],
  },

  {
    label: '	CARBOCYSTEINE',
    tradeLabels: [
      { label: '	CARBOLASE 375mg caps.' },
      { label: '	CARBOLASE 2gm/100ml syrup' },
      { label: '	MUCOSOL PED.125mg/5ml syrup' },
      { label: '	MUCOSOL PED.125mg/5ml syrup' },
      { label: '	MUCOSOL 375mg caps.' },
      { label: '	MUCOSOL ADULT 250mg/5ml syrup' },
      { label: '	AVICHEST  375mg caps.' },
      { label: '	MUCOSOL ADULT 250mg/5ml syrup' },
    ],
  },

  {
    label: '	CARBOCYSTEINE+GUAIFENESIN+OXOMEMAZINE',
    tradeLabels: [
      { label: '	ULTRASOLV f.c.tab' },
      { label: '	ULTRASOLV syrup.' },
    ],
  },
  { label: '	CARBOMER', tradeLabels: [{ label: '	THILOTEARS 3mg eye gel' }] },
  {
    label: '	CARBOMER 940+CETRIMIDE',
    tradeLabels: [{ label: '	VIDISIC eye gel' }],
  },

  {
    label: '	CARBONYL IRON+FOLIC ACID+ZINC SULPHATE',
    tradeLabels: [{ label: '	FOLIBONIN caps.' }],
  },

  {
    label: '	CARBOPLATIN',
    tradeLabels: [
      { label: '	CARBOPLATIN 150mg/15ml vial' },
      { label: '	CYTOCARB 150mg/15ml vial' },
      { label: '	CYTOCARB 150mg/15ml vial' },
      { label: '	CYTOCARB 450mg/45ml vial' },
      { label: '	CARBOTINOL 150mg/15ml Solution for I.V. Infusion' },
      { label: '	CARBOPLATIN "Ebewe" 10mg/ml vial' },
      { label: '	CARBOPLATIN "Ebewe" 10mg/ml vial' },
      { label: '	CARBOPLATIN "Ebewe" 10mg/ml vial' },

      { label: '	CARBOTINOL 150mg/15ml vial (CANCELLED)' },
      { label: '	CARBOPLATIN 10mg/1ml vial' },
      { label: '	KEMOCARB 10mg/ml vial' },
      { label: '	CARBOSIN 10mg/ml vial' },
      { label: '	CARBOSIN 10mg/ml vial' },
      { label: '	CARBOTINOL 150mg/15ml Solution for I.V. Infusion' },
      { label: '	CARBOTINOL 150mg/15ml Solution for I.V. Infusion' },
      { label: '	CARBOTINOL 150mg/15ml vial (CANCELLED)' },
      { label: '	CARBOTINOL 150mg/15ml vial (CANCELLED)' },
      { label: '	KEMOCARB 10mg/ml vial' },

      { label: '	CARBOPLATIN 10mg/1ml vial' },
      { label: '	PARAPLATIN 50mg/4ml lyophilized vial.' },
      { label: '	PARAPLATIN 50mg R.T.U.vial' },
      { label: '	PARAPLATIN 50mg/4ml lyophilized vial.' },
      { label: '	PARAPLATIN 50mg/4ml lyophilized vial.' },
      { label: '	PARAPLATIN 150mg/15ml R.T.U.vial' },
    ],
  },
  {
    label: '	CARBOXYMETHYLCELLULOSE SODIUM',
    tradeLabels: [{ label: '	REFRESH  CELLUVISC 1% eye drops' }],
  },

  {
    label: '	CARBOXYMETHYLCYSTEINE',
    tradeLabels: [
      { label: '	AVICHEST 2% childern and infants syrup' },
      { label: '	MUCOLASE 5% syrup.' },
      { label: '	SOLVEX 250mg/5ml syrup.' },
      { label: '	SOLVEX 375mg caps.' },
    ],
  },
  {
    label: '	CARDAMOM+POTASSIUM BROMIDE+SODIUM BENZOATE+SODIUM ',
    tradeLabels: [],
  },
  {
    label: '	CARISOPRODOL+CAFFEINE+PARACETAMOL',
    tradeLabels: [{ label: '	SOMADRIL COMPOUND tab.' }],
  },

  {
    label: '	CARISOPRODOL+PARACETAMOL',
    tradeLabels: [{ label: '	MYORELAX caps.' }],
  },
  {
    label: '	CARNITINE+CYPROHEPTADINE+LYSINE+VITAMIN B1+VITAMIN',
    tradeLabels: [],
  },

  {
    label: '	CARVEDILOL',
    tradeLabels: [
      { label: '	CARLOL-V 6.25mg f.c.tab' },
      { label: '	CARVIDOL 12.5mg tab.' },
      { label: '	KARVEX 6.25mg tab.' },
      { label: '	KARVEX 25mg tab.' },
      { label: '	DILATREND 25mg tab.' },
      { label: '	DILATREND 6.25mg tab.' },
      { label: '	EPICARVE 25mg f.c.tab.' },
      { label: '	CARVIPRESS 12.5mg tab.' },

      { label: '	DILATROL 25mg tab.' },
      { label: '	CARVIPRESS  25mg scored tab.' },
      { label: '	CARVIDOL 25mg tab.' },
      { label: '	CARVILOC 25mg tab.' },
      { label: '	CARVIPRESS 6.25mg Scored tab.' },
      { label: '	CARDILOL 25mg tab.' },
      { label: '	CARLOL-V 12.5mg f.c.tab.' },
      { label: '	CARVID 25mg tab.' },
      { label: '	DILATROL 6.25mg tab.' },
      { label: '	CARVENA 12.5mg f.c.tab.' },

      { label: '	CARVEDILOL 25mg f.c.tab' },
      { label: '	CARLOL-V 25mg f.c.tab' },
      { label: '	CARVID 6.25mg tab.' },
    ],
  },
  {
    label: '	CARVEDILOL+HYDROCHLOROTHIAZIDE',
    tradeLabels: [{ label: '	CO-DILATROL tab.' }],
  },

  {
    label: '	CASTOR OIL+ZINC OXIDE',
    tradeLabels: [
      { label: '	ZINC & CASTOR OIL oint. B.P.98' },
      { label: '	ZINC OXIDE  & CASTOR OIL oint B.P.2004' },
      { label: '	ZINC OXIDE  & CASTOR OIL oint B.P.2004' },
    ],
  },
  {
    label: '	CATALASE+HEXAMIDINE',
    tradeLabels: [{ label: '	PULVO 47 1gm spray' }],
  },
  {
    label: '	CATALASE+HYDROGEN PEROXIDE',
    tradeLabels: [{ label: '	OXYSEPT ONE STEP soln.+tab.' }],
  },

  {
    label: '	CEFACLOR',
    tradeLabels: [
      { label: '	EPICECOR 125mg susp.' },
      { label: '	CEFACLOR 250mg/5ml susp.U.S.P.23' },
      { label: '	CECLOR 250 mg caps.' },
      { label: '	CEFACLOR 500mg caps.USP 23' },
      { label: '	EPICECOR 250mg/5ml susp.' },
      { label: '	CECLOR 375 mg S.R. tab.' },
      { label: '	CECLOR 250mg/5ml susp.' },
      { label: '	CEFACLOR 125mg/5ml susp.U.S.P.23' },

      { label: '	CECLOR 125mg/5ml susp.' },
      { label: '	BACTICLOR 125mg/5ml susp.' },
      { label: '	CEFACLOR 500mg caps.' },
      { label: '	CEFACLOR 250mg/5ml susp.' },
      { label: '	BACTICLOR 250mg caps.(CANCELLED)' },
      { label: '	CLORACEF MR 750mg f.c. tabs.' },
      { label: '	CLORACEF 250mg caps' },
      { label: '	CLORACEF MR 500mg f.c. tab.' },
      { label: '	BACTICLOR 250 mg/5ml susp.' },
      { label: '	CEFACLOR 250mg caps' },

      { label: '	CECLOR 750 mg S.R. tab.' },
      { label: '	CECLOR 375 mg S.R. tab.' },
      { label: '	CECLOR 750 mg S.R. tab.' },
      { label: '	CLOROCEF  250mg/5ml susp.' },
      { label: '	CEFACLOR 250mg caps.USP XX111' },
      { label: '	CECLOR 500 mg S.R. tab.' },
      { label: '	CECLOR 500 mg S.R. tab.' },
      { label: '	BACTICLOR 500 mg caps.' },
      { label: '	CECLOR 500 mg caps.' },
      { label: '	BACTICLOR 375mg M.R. f.c. tab.(CANCELLED)' },

      { label: '	SERVICLOR 125mg/5ml susp.' },
      { label: '	SERVICLOR 250mg/5ml susp.' },
      { label: '	SERVICLOR 250mg caps.' },
      { label: '	SERVICLOR 500 mg caps.' },
    ],
  },

  {
    label: '	CEFADROXIL',
    tradeLabels: [
      { label: '	DURICEF 1gm dispersable tab.' },
      { label: '	CURISAFE 1gm tab.' },
      { label: '	CEFAXORAL 500mg caps.' },
      { label: '	DURABIOTIC 500mg caps.' },
      { label: '	DURICEF 250 mg/5ml susp.' },
      { label: '	LONGICEF 125mg/5ml granules for oral susp.' },
      { label: '	DURICEF 500mg /5ml  susp.' },
      { label: '	CURISAFE 125mg/5ml susp.' },

      { label: '	IBIDROXIL 125mg/5ml susp.' },
      { label: '	CEFAXORAL 1gm dispersible tab.' },
      { label: '	CEFADROXIL 1gm dispersible tab.' },
      { label: '	CEFADROXIL 500mg hard gelatin caps.' },
      { label: '	IBIDROXIL 1gm f.c tab.' },
      { label: '	IBIDROXIL 250 mg caps.' },
      { label: '	IBIDROXIL 250 mg/5ml  syrup' },
      { label: '	IBIDROXIL 500 mg caps.' },
      { label: '	DURICEF PAEDIATRIC  100mg/ml oral drops' },
      { label: '	CURISAFE 250mg/5ml susp.' },

      { label: '	LONGICEF 250mg/5ml susp.' },
      { label: '	BIODROXIL 500mg/5ml susp.' },
      { label: '	BIODROXIL 500mg caps.' },
      { label: '	DURICEF 500mg caps.' },
      { label: '	LONGICEF 500 mg caps.' },
      { label: '	DURICEF 250 mg caps.(CANCELLED)' },
      { label: '	CURISAFE 500mg caps.' },
      { label: '	CEFADROXIL 250mg/5ml pd. for oral susp.' },
      { label: '	CEPHADROL POWDER FOR ORAL SUSP. 250 MG/5 ML' },
      { label: '	BIODROXIL 250mg/5ml susp.' },

      { label: '	CEFEX 1g f.c.tab.' },
      { label: '	BIODROXIL 1000mg f.c.tab.' },
      { label: '	CEPHADROL POWDER FOR ORAL SUSP. 125 MG/5 ML' },
      { label: '	CURISAFE pediatric drops 100mg/ml oral drops' },
      { label: '	ROXIL 250mg/5ml susp.' },
    ],
  },
  {
    label: '	CEFADROXIL MONOHYDRATE',
    tradeLabels: [{ label: '	DURICEF 125 mg/5ml powder for oral susp.' }],
  },

  {
    label: '	CEFALEXIN',
    tradeLabels: [
      { label: '	IBILEX 250mg susp.' },
      { label: '	IBILEX 125mg susp.' },
      { label: '	IBILEX 250mg caps.' },
      { label: '	IBILEX 500mg caps.' },
      { label: '	IBILEX  1gm vial' },
      { label: '	CEPHALEXIN 500mg caps.' },
      { label: '	CEPHALEXIN 500mg caps B.P.2007' },
      { label: '	CEPHALEXIN 250mg/5ml susp.USP24' },

      { label: '	CEPHALEXIN 250mg caps.B.P.73' },
      { label: '	NEOCEF 500mg caps.' },
      { label: '	KEFLEX 500 mg caps.' },
      { label: '	IBILEX 500mg vial' },
      { label: '	KEFLEX 250mg/5ml pd. For oral susp.' },
      { label: '	KEFLEX 250 mg hard gelatin cap.' },
      { label: '	KEFLEX 1gm f.c. tab.' },
      { label: '	NEOCEF 250mg syrup' },
      { label: '	CEPOREX 125mg/5ml  susp.' },
      { label: '	CEPHALEXCID 250mg caps.' },

      { label: '	CEPOREX  250 mg caps.' },
      { label: '	CEPHOXIN 1gm tab.' },
      { label: '	NEOCEF 250mg cap.' },
      { label: '	CEFLODIX 250mg caps.' },
      { label: '	CEPHOXIN 500mg tab.' },
      { label: '	CEPHLEX 250 mg/5 ml susp' },
      { label: '	IBILEX 500mg caps.' },
      { label: '	GRAMOCEF 1g f.c.tab' },
      { label: '	CEPHLEX  250mg caps.' },
      { label: '	CEPHOXIN 1g vial' },

      { label: '	CEPHOXIN 500mg vial' },
      { label: '	CEPOREX  250 mg f.c. tab.' },
      { label: '	CEPOREX  250 mg/5ml  susp.' },
      { label: '	CEPOREX  500mg f.c.tab.' },
      { label: '	CEPOREX 125mg /5ml syrup' },
      { label: '	CEPOREX 500 mg vial' },
      { label: '	CEPOREX 500 mg caps.' },
      { label: '	CEPOREX 250 mg/5ml syrup' },
      { label: '	CEPOREX 1gm vial' },
      { label: '	CEPOREX 1gm f.c.tab.' },

      { label: '	CEPHLEX 125mg/5ml susp.' },
      { label: '	OSPEXIN 1000mg f.c.tab.' },
      { label: '	OSPEXIN 125mg/5ml susp.' },
      { label: '	OSPEXIN 1000mg tab.' },
      { label: '	RESPICEF 1gm f.c.tab.' },
      { label: '	STARCEF 1gm f.c. tabs.' },
      { label: '	OSPEXIN 250mg/5ml susp.' },
    ],
  },

  {
    label: '	CEFAMANDOLE',
    tradeLabels: [
      { label: '	MANDOL VIAL 500 mg' },
      { label: '	MANDOL 1g vial.' },
    ],
  },

  {
    label: '	CEFAPIRIN',
    tradeLabels: [
      { label: '	CEFATREXYL 500mg vial' },
      { label: '	CEFATREXYL 1gm vial' },
      { label: '	CEPHARIN 500mg vial' },
      { label: '	CEPHARIN 1gm vial' },
      { label: '	STREILE CEPHAPIRIN SODIUM 500  mg' },
      { label: '	STRILE CEPHAPIRIN SODIUM' },
    ],
  },

  {
    label: '	CEFAZOLIN',
    tradeLabels: [
      { label: '	CEFAMEZIN 250 mg inj.' },
      { label: '	CEFAMEZIN 250 mg inj.' },
      { label: '	CEFAMEZIN 500 mg I.M.vial' },
      { label: '	CEFAMEZIN 500mg I.V.vial' },
      { label: '	CEFAMEZIN 500  mg vial  I.V' },
      { label: '	CEFAZOLIN 1gm vial' },
      { label: '	KEFZOL 1gm vial' },
      { label: '	CEFAMEZIN 1g I.V.vial' },

      { label: '	CEFAMEZIN 1gm I.M.vial' },
      { label: '	KEFZOL 500mg vial' },
      { label: '	ZINOL 1gm I.M./I.V.vial.' },
      { label: '	ZINOL 500mg vial' },
      { label: '	TOTACEF 500 mg inj.' },
      { label: '	TOTACEF 1gm inj.' },
    ],
  },

  {
    label: '	CEFDINIR',
    tradeLabels: [
      { label: '	DENROCEF 125/5ml powder for oral susp.' },
      { label: '	DINAR 125mg/5ml powder for oral susp.' },
      { label: '	CEFDIN  125mg/5ml susp' },
      { label: '	CEDENIR 125mg/5ml dry suspension' },
      { label: '	CEDENIR 300mg hard gelatin cap' },
      { label: '	CEFDIN 300mg caps.' },
      { label: '	DENROCEF 300mg hard gelatin caps.' },
      { label: '	DINAR 300mg caps.' },

      { label: '	OMNICEF 300 mg hard gelatin cap.' },
      { label: '	OMNICEF 125mg/5ml powder for oral susp.' },
    ],
  },
  { label: '	CEFDITOREN', tradeLabels: [{ label: '	MEIACTON 200mg f.c.tabs' }] },

  {
    label: '	CEFEPIME',
    tradeLabels: [
      { label: '	MAXIPIME 0.5gm vial' },
      { label: '	CEFEPIME 1gm I.M/I.V Vial' },
      { label: '	CURAFEP  2gm pd. for IV/IM inj.' },
      { label: '	CEFEPIME 500mg I.M/I.V vial' },
      { label: '	CEFEPIME' },
      { label: '	MAXIPIME 2gm vial.' },
      { label: '	CURAFEP 1gm pd. for IV/IM inj.' },
      { label: '	MAXIPIME 1gm vial' },

      { label: '	PIMFAST 1000mg pd. For reconstitution for I.V/I.M inj.' },
      { label: '	WINCEF 1gm vial for I.M & I.V injection' },
      { label: '	WINCEF 0.5gm I.M./I.V.vial' },
      { label: '	Maxipime 1g Vial' },
    ],
  },

  {
    label: '	CEFIXIME',
    tradeLabels: [
      { label: '	CEFIME DRY MIX.100mg/5ml susp.' },
      { label: '	CEFIME 400mg caps.' },
      { label: '	CEFIME DRY MIX.100mg/5ml susp.' },
      { label: '	BETIXIM 100mg dry susp.' },
      { label: '	CEFIXIME 100mg/5ml susp.' },
      { label: '	CEFIXIME 100mg/5ml susp.' },
      { label: '	BETIXIM 100mg dry susp.' },
      { label: '	CEFABRUM 100mg/5ml susp.' },

      { label: '	FLAVICEF 100mg/5ml pd. for oral susp.' },
      { label: '	HEBIXIME 400mg caps.' },
      { label: '	HEBIXIME 200mg caps.' },
      { label: '	HEBIXIME 100mg/5ml dry powder for oral susp.' },
      { label: '	CEFABRUM 200mg tab.' },
      { label: '	SUPRAX 200 mg  caps' },
      { label: '	SUPRAX 400  mg caps' },
      { label: '	SUPRAX 100 mg/5 ml  granules for oral suspension' },
      { label: '	SUPRAX 100 mg/5 ml  granules for oral suspension' },
      { label: '	XIMACEF 200 mg capsule' },

      { label: '	XIMACEF 100 mg/5ml susp.' },
      { label: '	ORACEF 100mg/5ml susp.' },
      { label: '	XIMACEF 400mg capsule' },
      { label: '	XIMACEF 100 mg/5ml susp.' },
    ],
  },

  {
    label: '	CEFOPERAZONE',
    tradeLabels: [
      { label: '	CIBAPRAZON 1gm powder for injection I.M/I.V vial' },
      { label: '	CEFRONE 2gm I.M/I.V vial' },
      { label: '	CEFAZONE 1gm vial' },
      { label: '	CEFOPERAZONE 1gm I.M./I.V. vial' },
      { label: '	CEFOPERAZONE 0.5gm vial for I.M./I.V. inj.' },
      { label: '	CEFRAZON 1gm vial' },
      { label: '	CEFAZONE 500mg vial' },
      { label: '	CEFRAZON 500mg vial' },

      { label: '	CEFOBID 2gm vial' },
      { label: '	CEFRONE 1gm vial' },
      { label: '	CEFOBID 500mg vial (I.V-I.M)' },
      { label: '	CEFOZON 500mg I.M./I.V.vial' },
      { label: '	CEFOZON 2gm vial' },
      { label: '	CEFOBID 1gm vial (I.V-I.M)' },
      { label: '	CEFOZON 1gm vial' },
      { label: '	CEFRON 0.5gm I.M/I.V vial.' },
      { label: '	PERACEF 500mg vial' },
      { label: '	PERACEF 1gm vial' },
    ],
  },
  {
    label: '	CEFOPERAZONE+SULBACTAM',
    tradeLabels: [
      { label: '	CEFOCTAM 1500 vial' },
      { label: '	SULPERAZON 1.5 gm (I.V/I.M) inj.(Hospital)' },
      { label: '	PERACTAM 1.5g vial' },
    ],
  },

  {
    label: '	CEFOTAXIME',
    tradeLabels: [
      { label: '	CEFOTAX 500mg vial' },
      { label: '	CEFOTAX 2gm IV/IM vial' },
      { label: '	CEFOTAX 250mg vial' },
      { label: '	CEFOTAX 500mg vial' },
      { label: '	ITOTAXIME 0.5 gm.' },
      { label: '	ITOTAXIME 1 gm.' },
      { label: '	CEFOTAX 2g vial' },
      { label: '	FOXIME 500mg I.M./I.V.vial' },

      { label: '	HEBITAXIME 1gm vial' },
      { label: '	FOXIME 1gm I.M.vial' },
      { label: '	HEBITAXIME 0.5gm vial' },
      { label: '	CEFOMAX 1gm I.V/I.M vial' },
      { label: '	CEFOMAX 0.5gm I.V. / I.M. vial' },
      { label: '	CEFORAN 500mg vial' },
      { label: '	CLAFORAN  0.5gm I.M/I.V.vial' },
      { label: '	FOXIME 1gm I.V. vial' },
      { label: '	CEFOTAX 0.25gm vial' },
      { label: '	CEFAXIM 1gm vial' },

      { label: '	CEFAXIM  500mg vial' },
      { label: '	CEFOTAX 1gm I.M./I.V.vial' },
      { label: '	CEFORAN 1gm vial' },
      { label: '	CLAFORAN  0.25gm vial' },
      { label: '	CLAFORAN 1gm vial' },
      { label: '	CEFOTAX 1gm IV/ IM vial' },
      { label: '	XORIN 1gm vial' },
      { label: '	XORIN 500mg vial' },
      { label: '	XORIN 250mg vial' },
      { label: '	XORIN 2gm vial' },

      { label: '	RAMETAX 1gm I.V./I.M vial' },
      { label: '	RAMETAX 0.5gm  I.V/I.M vial' },
    ],
  },
  {
    label: '	CEFPIROME',
    tradeLabels: [{ label: '	CEFROM 0.5gm vial' }, { label: '	CEFROM 1gm vial' }],
  },

  {
    label: '	CEFPODOXIME',
    tradeLabels: [
      { label: '	CEPODEM 40mg/5ml susp.' },
      { label: '	CEFOPROX 40mg/5ml susp.' },
      { label: '	CEFOPROX 100mg f.c.tab.' },
      { label: '	CEFODOX 100 mg tabl.' },
      { label: '	CEPODEM 100mg tab.' },
      { label: '	CEFOPROX 200mg f.c.tab.' },
      { label: '	DOXCEF 40mg/5ml  susp.' },
      { label: '	ORELOX 100mg f.c. tab.' },

      { label: '	PODACEF 100mg/5ml  suspension.' },
      { label: '	PODACEF 100mg f.c.tab.' },
      { label: '	ORELOX 8mg/ml oral susp.' },
      { label: '	ORELOX 100 mg tab.' },
      { label: '	ORELOX 100 mg tab.' },
    ],
  },

  {
    label: '	CEFPROZIL',
    tradeLabels: [
      { label: '	CEFZIL 250 mg f.c.tab.' },
      { label: '	CEFZIL 125mg/5ml susp.' },
      { label: '	CEFZIL 125mg/5ml susp.' },
      { label: '	CEFZIL 250 mg/5ml susp.' },
      { label: '	CEFZIL 250 mg/5ml susp.' },
      { label: '	CEFZIL 500mg f.c.tab.' },
    ],
  },

  {
    label: '	CEFTAZIDIME',
    tradeLabels: [
      { label: '	FORTUM 2gm vial' },
      { label: '	CEFZIM 1gm vial' },
      { label: '	CETAZIME 1gm IV/IM vial USP23' },
      { label: '	CETAZIME 0.5g IV/IM vial USP23' },
      { label: '	FORTUM 250 mg vial' },
      { label: '	FORTUM 1gm vial.' },
      { label: '	FORTUM 500mg vial.' },
      { label: '	KEMPOZEDIM sterile powder for injection.' },

      { label: '	KEFADIM 500mg vial' },
      { label: '	CEFZIM 250mg vial' },
      { label: '	KEFADIM 1gm vial' },
      { label: '	CEFIDIME 1gm vial' },
      { label: '	CEFIDIME 500mg vial' },
      { label: '	CEFZIM 500mg vial' },
    ],
  },

  {
    label: '	CEFTIZOXIME',
    tradeLabels: [
      { label: '	CEFIZOX 500  I.V. I.M inj.' },
      { label: '	CEFIZOX 1000 mg  I.M INJ.' },
      { label: '	CEFIZOX 500 I.U. inj.' },
      { label: '	CEFIZOX 2000 I.V. inj.' },
      { label: '	CEFIZOX 1000  I.V. inj.' },
    ],
  },

  {
    label: '	CEFTRIAXONE',
    tradeLabels: [
      { label: '	EPICEPHIN 1gm I.V.vial' },
      { label: '	CEFOTRIX 250mg I.V.vial (U.S.P.23)' },
      { label: '	CEFAXONE 500mg I.M. vial' },
      { label: '	CEFTRIAXONE 500mg I.M.vial' },
      { label: '	CEFOTRIX 1gm  I.V.vial (U.S.P.23)' },
      { label: '	CEFAXONE 1gm I.M. vial' },
      { label: '	CEFAXONE 250mg I.V.vial.' },
      { label: '	LONGACEF I.M. 1gm vial' },

      { label: '	EPICEPHIN 1gm I.M.vial' },
      { label: '	LONGACEF 1gm  I.V.vial' },
      { label: '	CEFAXONE 250mg I.M.vial.' },
      { label: '	CEFAXONE 1gm I.V. vial' },
      { label: '	CEFTRIAXONE 500mg I.V.vial' },
      { label: '	CEFAXONE 500mg I.V. vial' },
      { label: '	CEFOTRIX 500mg I.V.vial (U.S.P.23)' },
      { label: '	CEFTRIAXONE 1000mg I.V.vial' },
      { label: '	EPICEPHIN 250mg I.M.vial' },
      { label: '	KEMPOXONE' },

      { label: '	CEFTRIAXONE 0.25mg vial for I.M. inj.' },
      { label: '	CEFOTRIX 500 mg I.M.vial (U.S.P.23)' },
      { label: '	EPICEPHIN 500 mg I.V.vial' },
      { label: '	EPICEPHIN 500mg I.M.vial' },
      { label: '	CEFTRIAXONE 1000mg I.M.vial' },
      { label: '	EPICEPHIN 2g I.V.vial' },
      { label: '	TRIAXONE 500mg vial for I.M. inj.' },
      { label: '	TRIAXONE 1g I.V vial' },
      { label: '	OFRAMAX 1gm I.V.vial' },
      { label: '	OFRAMAX 250mg I.V.vial' },

      { label: '	OFRAMAX 1gm I.M.vial' },
      { label: '	OFRAMAX  250mg I.M.vial' },
      { label: '	WINTRIAXONE 1 gm pd. for I.V inj.' },
      { label: '	WINTRIAXONE 0.5gm pd. for I.V Inj.' },
      { label: '	ROCEPHIN 500mg I.M.vial' },
      { label: '	STERILE CEFTRIAXONE SODIUM 1g vial for I.M. inj.' },
      { label: '	ROCEPHIN 1gm I.V.vial' },
      { label: '	ROCEPHIN 1gm I.M.vial' },
      { label: '	ROCEPHIN 0.5gm I.V.vial' },
      { label: '	TRIAXONE 1gm I.M. vial' },

      { label: '	CEFTRIAXONE 2000mg I.V.vial' },
    ],
  },

  {
    label: '	CEFUROXIME',
    tradeLabels: [
      { label: '	HEBIUROXIME 125mg f.c.tab.' },
      { label: '	HEBIUROXIME 125mg/5ml susp.' },
      { label: '	CEFUMAX 750mg I.M./I.V.vial' },
      { label: '	KEROXIME 750mg vial' },
      { label: '	CEFUMAX 250mg I.V./I.M.vial' },
      { label: '	CEROXIM 250mg/5ml susp.' },
      { label: '	CEROXIM 500mg f.c.tab.' },
      { label: '	HIGHCEF 125mg/5ml susp.' },

      { label: '	KEROXIME 1.5gm vial' },
      { label: '	HIGHCEF 250mg tab.' },
      { label: '	ZINACEF 250 mg f.c. tab.' },
      { label: '	ZINACEF 500 mg tab.' },
      { label: '	ZENAX 125mg f.c.tab.' },
      { label: '	ZENAX 250mg f.c.tab.' },
      { label: '	ZINACEF 125mg f.c.tab.' },
      { label: '	ZINACEF 750mg I.V/I.M vial' },
      { label: '	ZINACEF 125mg/5ml susp.' },
      { label: '	ZOCEF 125mg/5ml susp.' },

      { label: '	ZINACEF 1.5g I.V. vial.' },
      { label: '	ZINACEF 250mg vial.' },
      { label: '	PANCEF 750mg I.M/I.V.vial' },
      { label: '	ZENAX 500mg f.c.tab.' },
    ],
  },

  {
    label: '	CELECOXIB',
    tradeLabels: [
      { label: '	EUROCOX 100mg tab.' },
      { label: '	CELOXIB 200mg caps.' },
      { label: '	EUROCOX 200mg tab.' },
      { label: '	ARYTHREX 100mg caps.' },
      { label: '	ARYTHREX 200mg caps.' },
      { label: '	CELEBREX 100mg caps.' },
      { label: '	CELEBREX 200mg caps.' },
      { label: '	CELECOX 200mg caps.' },

      { label: '	CELOXIB 100mg caps.' },
      { label: '	RHEUMAMAX 100mg caps.' },
    ],
  },
  {
    label: '	CELLULASE+DIMETHYLPOLYSILOXAN+GLUTAMIC ACID+METHIX',
    tradeLabels: [],
  },
  {
    label: '	CELLULASE+LIPASE+OX BILE',
    tradeLabels: [{ label: '	COTAZYM FORTE f.c.tab.' }],
  },

  {
    label: '	CEPHRADINE',
    tradeLabels: [
      { label: '	CEFADRIN 500mg I.V./I.M.vial U.S.P.23' },
      { label: '	CEFADRINE 125mg/5ml susp.' },
      { label: '	CEFADRIN 250mg I.V./I.M.vial U.S.P.23' },
      { label: '	CEFADRINE 500mg caps.' },
      { label: '	CEPHRAMEDIN 0.5g vial' },
      { label: '	CEPHRAMEDIN 0.25g vial' },
      { label: '	CEFADRINE 250mg/5ml suspension .' },
      { label: '	CEFADRINE 250mg/5ml suspension .' },

      { label: '	CEPHRAFORTE 1000mg f.c.tab.' },
      { label: '	CEPHRADINE 500mg vial U.S.P.30' },
      { label: '	MEPADRIN 500mg vial' },
      { label: '	MEPADRIN 1000mg vial' },
      { label: '	MEPADRIN 250mg/5ml granules for susp.' },
      { label: '	FARCOSEF 1gm I.V./I.M.vial' },
      { label: '	CEFADRIN 1gm I.V./I.M.vial U.S.P.23' },
      { label: '	CEFADRINE 125mg/5ml susp.' },
      { label: '	FORTECEF 1gm tab.' },
      { label: '	CEPHRADINE 500mg caps.' },

      { label: '	CEPHRADINE 500mg caps.' },
      { label: '	CEPHRADINE 250mg caps.' },
      { label: '	MEPADRIN 1gm Caps.' },
      { label: '	FARCOSEF 250mg vial' },
      { label: '	FARCOSEF 500mg vial' },
      { label: '	CEPHRADINE 1gm vial U.S.P.30' },
      { label: '	MEPADRIN 250mg vial' },
      { label: '	MEPADRIN 125mg/5ml gr. For oral susp.' },
      { label: '	ULTRACEF 500 mg caps.' },
      { label: '	VELOSEF 250mg/5ml susp.' },

      { label: '	ULTRACEF 250 mg caps.' },
      { label: '	VELOSEF 250mg/5ml susp.' },
      { label: '	VELOSEF 250mg caps.' },
      { label: '	ULTRACEF 250 mg/5 ml  susp.' },
      { label: '	ULTRACEF 125 mg/5 ml susp.' },
      { label: '	VELOSEF 500mg caps.' },
      { label: '	VELOSEF 1gm tab.' },
      { label: '	VELOSEF 1gm I.M./I.V.vial' },
      { label: '	VELOSEF 125mg/5ml susp.' },
      { label: '	VELOSEF 500mg I.M./I.V.vial' },

      { label: '	VELOSEF 250 mg I.V./I.M. inj.' },
    ],
  },
  {
    label: '	CEREBROLYSIN',
    tradeLabels: [
      { label: '	CEREBROLYSIN 215.2mg/ml I.M./I.V.amp.' },
      { label: '	CEREBROLYSIN 215.2mg/ml I.M./I.V.amp.' },
    ],
  },
  {
    label: '	CERTOPARIN',
    tradeLabels: [
      { label: '	TROPARIN  3000 IU pref. syringe' },
      { label: '	TROPARIN 3000I.U./0.5ml amp.' },
    ],
  },

  {
    label: '	CETALKONIUM CHLORIDE+CHOLINE SALICYLATE',
    tradeLabels: [{ label: '	PANSORAL oral gel' }],
  },
  {
    label: '	CETALKONIUM+CHOLINE SALICYLATE',
    tradeLabels: [{ label: '	MUNDISAL oral gel' }],
  },

  {
    label: '	CETIRIZINE',
    tradeLabels: [
      { label: '	CETIRIZINE 1% oral dps.' },
      { label: '	CETRAK 1mg/ml syrup' },
      { label: '	CETIRIZINE 1% oral dps.' },
      { label: '	CETRITIN 10mg tab.' },
      { label: '	ALERID 10mg f.c. tab.' },
      { label: '	ALERID 5mg/5ml syrup' },
      { label: '	EPIRIZINE 10mg tab.' },
      { label: '	CETRAK 10mg tab.' },

      { label: '	HISTAZINE-1 0.1% syrup' },
      { label: '	HISTAZINE-1 10mg tab.' },
      { label: '	CETRITIN 5mg/5ml syrup' },
      { label: '	HISTAZINE-1 1gm/100ml oral drops' },
      { label: '	HISTA CHEW 10 mg chewable tab.' },
      { label: '	TOMAZINE 10mg f.c. tab.' },
      { label: '	ZYRTEC 10mg/ml oral drops' },
      { label: '	ZYRTEC 1mg/ml syrup' },
      { label: '	ZYRTEC 10 mg tab.' },
      { label: '	TOMAZINE 1mg/ml syrup' },

      { label: '	ZYRTEC 10 mg tab.' },
    ],
  },
  {
    label: '	CETIRIZINE+PARACETAMOL+PSEUDOEPHEDRINE',
    tradeLabels: [{ label: '	ALLERCET COLD caps.' }],
  },
  {
    label: '	CETIRIZINE+PSEUDOEPHEDRINE',
    tradeLabels: [
      { label: '	ALLERCET caps' },
      { label: '	CLEAREST caps.' },
      { label: '	XINASE caps.' },
    ],
  },

  {
    label: '	CETRIMIDE',
    tradeLabels: [{ label: '	CETRIMIDE 200mg/20gm cream' }],
  },
  {
    label: '	CETRIMIDE+CHLORHEXIDINE',
    tradeLabels: [
      { label: '	CETADINE cream  1  %' },
      { label: '	SETAVLON CONC topical solution' },
      { label: '	SETAVLON antiseptic solution' },
      { label: '	SAVLON antiseptic solution' },
    ],
  },

  {
    label: '	CETRIMIDE+CHLORHEXIDINE GLUCONATE',
    tradeLabels: [
      { label: '	CETRODEL 3% topical solution ( HUMAN USE)' },
      { label: '	CETRODEL FORTE 15% solution' },
      { label: '	SAVLOSEPT  3gm/100ml solution' },
      { label: '	SAVLON disifectant solution' },
      { label: '	SAVLOSEPT  3gm/100ml solution' },
      { label: '	SAVLOTEC antiseptic solution' },
      { label: '	SAVLOTEC antiseptic solution' },
    ],
  },

  {
    label: '	CETRIMIDE+CHLORHEXIDINE+LIDOCAINE+SODIUM FLUORIDE',
    tradeLabels: [{ label: '	CITROLIN-F gargle' }],
  },
  {
    label: '	CETRIMIDE+CHLOROXYLENOL+DICHLOROXYLENOL',
    tradeLabels: [{ label: '	POLYSEPT-ALL solution' }],
  },
  {
    label: '	CETRIMIDE+CHLORPHENIRAMINE+NAPHAZOLINE',
    tradeLabels: [
      { label: '	TRESOLINE eye&nasal drops' },
      { label: '	RINOSIN nasal and eye drops' },
    ],
  },

  {
    label: '	CETRIMIDE+DICHLOROXYLENOL',
    tradeLabels: [{ label: '	SEPTOCID antiseptic solution' }],
  },
  {
    label: '	CETRIMIDE+DIMETHICONE',
    tradeLabels: [{ label: '	DERMOCARE cream' }],
  },
  {
    label: '	CETRIMIDE+LIDOCAINE',
    tradeLabels: [
      { label: '	CITROLIN mouth wash and gargle' },
      { label: '	LIGNOSOL aerosol spray' },
      { label: '	SEPTORAL gargle' },
    ],
  },

  {
    label: '	CETRIMIDE+LIDOCAINE+SODIUM FLUORIDE',
    tradeLabels: [{ label: '	MINAFLUOR mouth wash' }],
  },
  {
    label: '	CETRIMIDE+LIDOCAINE+TYROTHRICIN+VITAMIN C',
    tradeLabels: [{ label: '	LEMOCIN-C lozenges' }],
  },
  {
    label: '	CETRORELIX',
    tradeLabels: [{ label: '	CETROTIDE 0.25mg solution for inj.' }],
  },

  {
    label: '	CETYLPYRIDINIUM',
    tradeLabels: [{ label: '	CETOSEPT 1.5mg lozenges' }],
  },
  {
    label: '	CETYLPYRIDINIUM CHLORIDE+CHLOROCRESOL+LIDOCAINE',
    tradeLabels: [{ label: '	CANYON oral gel' }],
  },
  {
    label: '	CETYLPYRIDINIUM CHLORIDE+LIDOCAINE',
    tradeLabels: [
      { label: '	DENTINOX 0.33% teething gel' },
      { label: '	CALGEL teething gel' },
      { label: '	ORACURE oral gel' },
    ],
  },

  {
    label: '	CETYLPYRIDINIUM+FLUORIDE',
    tradeLabels: [
      { label: '	B-FRESH 0.05% mouthwash' },
      { label: '	B-FRESH 0.05% mouthwash' },
      { label: '	EZAFLUOR mouth wash' },
    ],
  },
  {
    label: '	CHAMOMILE',
    tradeLabels: [{ label: '	CAMISAN cream' }, { label: '	CAMISAN oint.' }],
  },

  {
    label: '	CHAMOMILE+DIMETHICONE+ZINC OXIDE',
    tradeLabels: [{ label: '	CALM SKIN cream' }],
  },
  {
    label: '	CHAMOMILE+ICHTHAMMOL+POTASSIUM IODIDE',
    tradeLabels: [{ label: '	DE-PROSTYL-2 supp.' }],
  },
  {
    label: '	CHAMOMILE+LIDOCAINE',
    tradeLabels: [{ label: '	KAMISTAD oral gel.' }],
  },

  {
    label: '	CHAMOMILE+MYRRH TINCTURE',
    tradeLabels: [{ label: '	AD-MUC oral oint.' }],
  },
  {
    label: '	CHARCOAL',
    tradeLabels: [
      { label: '	ULTRACARBON 250mg tab.' },
      { label: '	ULTRACARBON 250mg tab.' },
      { label: '	EUCARBON tab.' },
    ],
  },
  {
    label: '	CHARCOAL+DIMETHICONE',
    tradeLabels: [{ label: '	CARBOSYLANE caps.' }],
  },

  {
    label: '	CHARCOAL+FENNEL OIL+PEPPERMINT OIL+RHUBARB+SENNA+S',
    tradeLabels: [],
  },
  { label: '	CHARCOAL+KAOLIN', tradeLabels: [{ label: '	ACTICARB tab.' }] },
  {
    label: '	CHELIDONIUM RHIZOME EXTRACT+CURCUMA EXTRACT+CURCUM',
    tradeLabels: [],
  },
  {
    label: '	CHENODEOXYCHOLIC ACID',
    tradeLabels: [{ label: '	CHENISOLVE 250mg tab.' }],
  },

  {
    label: '	CHENODEOXYCHOLIC ACID+URSODEOXYCHOLIC ACID',
    tradeLabels: [{ label: '	URSOMIX  FORTE  f.c.tab.' }],
  },
  {
    label: '	CHLORALHYDRATE',
    tradeLabels: [{ label: '	CHLORAL  500mg/5ml syrup' }],
  },

  {
    label: '	CHLORAMBUCIL',
    tradeLabels: [
      { label: '	LEUKERAN 5 mg tab.' },
      { label: '	IMMUNYL 5mg tab.' },
      { label: '	LEUKERAN 2mg f.c. tabs.' },
      { label: '	IMMUNYL 2mg tab.' },
    ],
  },

  {
    label: '	CHLORAMPHENICOL',
    tradeLabels: [
      { label: '	MIPHENICOL 500 mg supp.' },
      { label: '	MIPHENICOL 250 mg supp.' },
      { label: '	CHLORAMPHENICOL 0.5% eye drops.' },
      { label: '	EPIPHENICOL 1% eye oint.' },
      { label: '	CHLORAMPHENICOL 125mg/5ml susp.B.P.93' },
      { label: '	MIPHENICOL 250 mg caps.' },
      { label: '	ISOPTOFENICOL 0.5% eye drops' },
      { label: '	MIPHENICOL 5% ear drops' },

      { label: '	CHLORAMPHENICOL 250 mg  CAPS. B.P93' },
      { label: '	CIDOCETINE 125mg susp.' },
      { label: '	CIDOCETIN SUCCINATE 1gm vial' },
      { label: '	MIPHENICOL 125 mg susp.' },
      { label: '	LEVOCOL NASR 250mg caps.' },
      { label: '	MIPHENICOL 1 gm vial.' },
      { label: '	ANTIBIOPTAL eye drops' },
      { label: '	MIPHENICOL 1% eye oint.' },
      { label: '	CIDOCETINE 0.5mg/10ml ear drops.' },
      { label: '	ISOMIPHENICOL 0.5% eye drops' },

      { label: '	ADCOCETINE 1% oint.' },
      { label: '	MEMCOCETIN 5% ear drops' },
      { label: '	MEMCOCETIN 250mg caps.' },
      { label: '	MEMCOCETIN 250mg caps.' },
      { label: '	CIDOCETINE 250mg caps.' },
      { label: '	MIPHENICOL 125 mg supp.' },
      { label: '	OPHTAMYCETINE 0.5% eye drops.' },
      { label: '	OTOPHENICOL 5% ear drops' },
      { label: '	OPTOCETINE 0.5% eye drops' },
      { label: '	OCUPHENICOL 0.5% eye dps.' },
    ],
  },
  {
    label: '	CHLORAMPHENICOL+COLLAGENASE',
    tradeLabels: [{ label: '	IRUXOL oint.' }, { label: '	SKINATRA top. oint.' }],
  },
  {
    label: '	CHLORAMPHENICOL+DEXAMETHASONE',
    tradeLabels: [{ label: '	SPERSADEX COMP eye drops' }],
  },

  {
    label: '	CHLORAMPHENICOL+DEXAMETHASONE+TETRYZOLINE',
    tradeLabels: [
      { label: '	OCUPHENICOL-D  eye drops' },
      { label: '	SPERSADEXOLINE eye drops (CANCELLED)' },
      { label: '	ORCHADEXOLINE eye dps.' },
    ],
  },
  {
    label: '	CHLORAMPHENICOL+PREDNISOLONE',
    tradeLabels: [
      { label: '	CORTIPHEN eye oint.' },
      { label: '	CORTIPHEN eye drops' },
    ],
  },

  {
    label: '	CHLORAMPHENICOL+STREPTOMYCIN',
    tradeLabels: [
      { label: '	STREPTOPHENICOL susp.' },
      { label: '	STREPTOPHENICOL caps.' },
      { label: '	STREPTOPHENICOL caps.' },
    ],
  },
  {
    label: '	CHLORAMPHENICOL+SULPHACETAMIDE',
    tradeLabels: [{ label: '	SPERSACET C eye drops' }],
  },

  {
    label: '	CHLORDIAZEPOXIDE+CLIDINIUM BROMIDE',
    tradeLabels: [
      { label: '	EPIRAX tab.' },
      { label: '	DIBREX sugar coated tab.' },
      { label: '	CLOXIDE caps.' },
      { label: '	LIBRAX sugar coated tab.' },
    ],
  },
  {
    label: '	CHLORDIAZEPOXIDE+MEBEVERINE',
    tradeLabels: [{ label: '	COLOVERIN -A f. c.tab.' }],
  },

  {
    label: '	CHLORHEXIDINE',
    tradeLabels: [
      { label: '	CHLORHEXITULLE 1% tulle' },
      { label: '	CHLORHEXIDINE 0.5% gauze dressing.' },
      { label: '	DENTASEPT 1% mouth wash' },
      { label: '	DENTASEPT 1% gel' },
      { label: '	ANTISEPTOL 0.1gm/100ml mouth wash' },
      { label: '	HEXITOL 125mg/100ml mouth wash' },
    ],
  },

  {
    label: '	CHLORHEXIDINE+CHLOROCRESOL+HEXAMIDINE',
    tradeLabels: [
      { label: '	MICROFREE antiseptic foaming solution' },
      { label: '	DOUCHEAL foaming solution.' },
      { label: '	CYTEAL antiseptic foaming solution.' },
    ],
  },
  {
    label: '	CHLORHEXIDINE+DEXAMETHASONE+NANDROLONE',
    tradeLabels: [{ label: '	DEXATOPIC topical cream' }],
  },
  {
    label: '	CHLORHEXIDINE+HYDROGEN PEROXIDE+ISOPROPANOL',
    tradeLabels: [{ label: '	ALKANOL solution.' }],
  },

  {
    label: '	CHLORHEXIDINE+KETOCONAZOLE',
    tradeLabels: [{ label: '	CURAZOLE-H shampoo' }],
  },
  {
    label: '	CHLORHEXIDINE+LIGNOCAINE',
    tradeLabels: [{ label: '	OROSEPT MISR gargle' }],
  },
  {
    label: '	CHLORHEXIDINE+SILVER SULFADIAZINE',
    tradeLabels: [{ label: '	DINASEPT cream' }],
  },
  {
    label: '	CHLOROBUTANOL HEMIHYDRATE+CHOLINE SALICYLATE+HEXET',
    tradeLabels: [],
  },

  {
    label: '	CHLOROBUTANOL+CHLORHEXIDINE',
    tradeLabels: [{ label: '	ELUDRIL mouth wash.' }],
  },
  {
    label: '	CHLOROBUTANOL+PHENAZONE',
    tradeLabels: [{ label: '	OTOCALM ear drops' }],
  },
  {
    label: '	CHLORODIMETHYL DIAZEPAM',
    tradeLabels: [{ label: '	E N 0.5 mg tab' }],
  },

  {
    label: '	CHLORO-IV OXIDE OXYGEN COMPLEX',
    tradeLabels: [{ label: '	OXOFRIN SOLUTION 1.037mg/100ml' }],
  },

  {
    label: '	CHLOROQUINE PHOSPHATE',
    tradeLabels: [
      { label: '	CHLOROQUINE PHOSPHATE 250mg tab.' },
      { label: '	CHLOROQUINE PHOSPHATE 200mg/5ml amp.' },
      { label: '	CHLOROQUIN PHOSPHATE 250mg tab.' },
      { label: '	ALEXOQUINE 250mg tab.' },
      { label: '	CHLOROQUINE PHOSPHATE 1.6gm/100ml syrup.' },
      { label: '	CHLOROQUINE PHOSPHATE 200mg/5ml amp.' },
      { label: '	CHLOROQUINE PHOSPHATE 250mg tab.B.P.98' },
      { label: '	CHLOROQUINE PHOSPHATE 1.6gm/100ml syrup.' },

      { label: '	CIDOQUINE 1gm/100ml  syrup' },
      { label: '	GEDCOQUINE 250mg tab.' },
      { label: '	MALARQUINE 100mg tab.' },
      { label: '	CHLODIQUINE 80mg tab.' },
      { label: '	MALARQUINE 250mg tab.' },
    ],
  },
  {
    label: '	CHLOROXYLENOL+TERPINEOL+ALCOHOL',
    tradeLabels: [{ label: '	HI-SEPT disinfectant solution.' }],
  },

  {
    label: '	CHLOROXYLENOL+UNDECYLENIC ACID',
    tradeLabels: [{ label: '	FRESH WAY SPRAY topical spray.' }],
  },
  {
    label: '	CHLOROZYLENOL',
    tradeLabels: [
      { label: '	DETTOL 4.8 % sol.' },
      { label: '	DETTOL 4.8 % sol.' },
      { label: '	DETTOL 4.8 % sol.' },
      { label: '	DETTOL 4.8 % sol.' },
    ],
  },

  {
    label: '	CHLORPHENIRAMINE',
    tradeLabels: [
      { label: '	CHLORPHENIRAMINE 4 mg tab. B.p.93' },
      { label: '	CHLORPHENIRAMINE MALEATE 40mg/100ml syrup.U.S.P.31' },
      { label: '	ALLERGYL CREAM 2 %(CANCELLED)' },
      { label: '	ALLERGYL 4 mg TAB.' },
      { label: '	ANALLERGE 4 mg tab.' },
      { label: '	CHLORANTINE-M 4mg tab.' },
      { label: '	ANALLERGE 2mg/5ml syrup' },
      { label: '	ALLERGYL 2mg/5ml syrup' },

      { label: '	PIRAFENE 5mg/ml amp.' },
      { label: '	PIRAFENE 4mg tab.' },
      { label: '	PIRAFENE 2mg/5ml syrup' },
    ],
  },
  {
    label: '	CHLORPHENIRAMINE+DEXAMETHASONE',
    tradeLabels: [
      { label: '	DEXAPHEN syrup' },
      { label: '	APIDONE syrup' },
      { label: '	PHENADONE syrup' },
      { label: '	VENDEXINE syrup' },
    ],
  },

  {
    label: '	CHLORPHENIRAMINE+DEXTROMETHORPHAN',
    tradeLabels: [
      { label: '	NEO-PULMOLAR syrup' },
      { label: '	CODAPHEN-N  syrup' },
      { label: '	PULMOLAR syrup' },
    ],
  },
  {
    label: '	CHLORPHENIRAMINE+DEXTROMETHORPHAN+EPHEDRINE+GUAIFE',
    tradeLabels: [],
  },
  {
    label: '	CHLORPHENIRAMINE+DEXTROMETHORPHAN+EPHEDRINE+PHENYL',
    tradeLabels: [],
  },
  {
    label: '	CHLORPHENIRAMINE+DEXTROMETHORPHAN+GUAIFENESIN+PHEN',
    tradeLabels: [],
  },

  {
    label: '	CHLORPHENIRAMINE+DEXTROMETHORPHAN+GUAIFENESIN+PSEU',
    tradeLabels: [],
  },
  {
    label: '	CHLORPHENIRAMINE+DEXTROMETHORPHAN+PARACETAMOL+PSEU',
    tradeLabels: [],
  },
  {
    label: '	CHLORPHENIRAMINE+DEXTROMETHORPHAN+PHENYLEPHRINE',
    tradeLabels: [{ label: '	CODILAR  syrup' }],
  },
  {
    label: '	CHLORPHENIRAMINE+DEXTROMETHORPHAN+PSEUDOEPHEDRINE',
    tradeLabels: [{ label: '	TRIAMINIC COLD & COUPH syrup' }],
  },

  {
    label: '	CHLORPHENIRAMINE+DIHYDROCODEINE+EPHEDRINE',
    tradeLabels: [{ label: '	CODAPHEN syp.' }],
  },
  {
    label: '	CHLORPHENIRAMINE+EPHEDRINE+PHENOBARBITONE+THEOPHYL',
    tradeLabels: [],
  },
  {
    label: '	CHLORPHENIRAMINE+ETILEFRINE',
    tradeLabels: [{ label: '	BALKIS syrup' }, { label: '	BALKIS caps.' }],
  },

  {
    label: '	CHLORPHENIRAMINE+GUAIFENESIN+NOSCAPINE',
    tradeLabels: [{ label: '	NOSCAPHEN syrup' }],
  },
  {
    label: '	CHLORPHENIRAMINE+METHYLENE BLUE+NAPHAZOLINE',
    tradeLabels: [{ label: '	PRISOLINE BLUE eye drops' }],
  },

  {
    label: '	CHLORPHENIRAMINE+NAPHAZOLINE',
    tradeLabels: [
      { label: '	NEOZOLINE eye/nose drops' },
      { label: '	RINOSIN nasal gel.' },
      { label: '	OPTOZOLINE eye drops' },
      { label: '	OPTOZOLINE eye drops' },
      { label: '	NOSTAMINE eye/nose drops' },
      { label: '	PRISOLINE eye & nasal drops' },
    ],
  },

  {
    label: '	CHLORPHENIRAMINE+NAPHAZOLINE+PHENYLEPHRINE',
    tradeLabels: [{ label: '	NAZOLINE nasal drops' }],
  },
  {
    label: '	CHLORPHENIRAMINE+NAPHAZOLINE+ZINC SULPHATE',
    tradeLabels: [{ label: '	PRISOLINE ZINC eye drops' }],
  },
  {
    label: '	CHLORPHENIRAMINE+NOSCAPINE+PHENYLEPHRINE+PHENYLPRO',
    tradeLabels: [],
  },

  {
    label: '	CHLORPHENIRAMINE+PARACETAMOL+PHENYLEPHRINE',
    tradeLabels: [{ label: '	CALMALGIINE  tab.' }, { label: '	SINE UP tab.' }],
  },
  {
    label: '	CHLORPHENIRAMINE+PARACETAMOL+PHENYLPROPANOLAMINE',
    tradeLabels: [
      { label: '	CORICIDIN-D EXTRASTRENGTH tablet' },
      { label: '	NOFLU tab.' },
      { label: '	NOFLU syrup' },
    ],
  },

  {
    label: '	CHLORPHENIRAMINE+PARACETAMOL+PSEUDOEPHEDRINE',
    tradeLabels: [
      { label: '	BABYRHINO syrup' },
      { label: '	NEO-MICHAELON 125mg susp.' },
      { label: '	FEVER N FLU tab.' },
      { label: '	FEVER N FLU syrup' },
      { label: '	COMTREX MAXIMIUM STREGTH caplet.' },
      { label: '	1,2,3 syrup' },
      { label: '	COLD FREE tab.' },
      { label: '	FLUSTAT tab.' },

      { label: '	1,2,3 f.c.tab.' },
      { label: '	BABY FLUREST syrup' },
      { label: '	FLUMOL syrup' },
      { label: '	RHINOMOL-S syrup' },
      { label: '	VEGASKINE syp.' },
    ],
  },
  {
    label: '	CHLORPHENIRAMINE+PARACETAMOL+PSEUDOEPHEDRINE+SODIU',
    tradeLabels: [],
  },
  {
    label: '	CHLORPHENIRAMINE+PHENOBARBITONE+THIOCOL',
    tradeLabels: [{ label: '	TAROPHEN syrup' }],
  },

  {
    label: '	CHLORPHENIRAMINE+PHENYLEPHRINE',
    tradeLabels: [
      { label: '	PARARHINOL Syrup' },
      { label: '	SINE-UP 50/100 syrup' },
    ],
  },
  {
    label: '	CHLORPHENIRAMINE+PHENYLEPHRINE+PYRILAMINE',
    tradeLabels: [{ label: '	RHIN RHIN suspension' }],
  },
  {
    label: '	CHLORPHENIRAMINE+PROPYPHENAZONE+PSEUDOEPHEDRINE',
    tradeLabels: [{ label: '	CONTA-FLU tab.' }],
  },

  {
    label: '	CHLORPHENIRAMINE+PSEUDOEPHEDRINE',
    tradeLabels: [
      { label: '	RHINOGESIC syrup' },
      { label: '	TRIAMINIC COLD & ALLERGY syrup.' },
    ],
  },
  {
    label: '	CHLORPHENOXAMINE',
    tradeLabels: [
      { label: '	ALLERGEX 1.5mg/100gm cream(APPROVED RE-REG)' },
      { label: '	ALLERGEX 20mg tab.' },
      { label: '	ALLERGEX 240mg/100ml syrup' },
    ],
  },

  {
    label: '	CHLORPROMAZINE',
    tradeLabels: [
      { label: '	NEURAZINE 100mg tab.' },
      { label: '	NEURAZINE 50mg/2ml I.M.amp.' },
      { label: '	NEURAZINE 50mg/2ml I.M.amp.' },
      { label: '	NEURAZINE 50mg/2ml I.M.amp.' },
      { label: '	NEURAZINE 4 gm/ml drops' },
      { label: '	NEURAZINE 25mg tab.' },
      { label: '	LARGACTIL 100mg tab.' },
      { label: '	LARGACTIL 25mg tab.' },

      { label: '	PROMACID 100mg sugar coated tab.' },
      { label: '	PROMACID 25 mg tab.' },
    ],
  },
  { label: '	CHLORPROPAMIDE', tradeLabels: [{ label: '	PAMIDIN 250mg tab.' }] },
  {
    label: '	CHLORQUINALDOL+DIFLUCORTOLONE',
    tradeLabels: [{ label: '	NERICID C Cream' }, { label: '	NERISONE C CREAM' }],
  },

  {
    label: '	CHLORQUINALDOL+FLUOCORTOLONE PIVALATE+LIDOCAINE HC',
    tradeLabels: [],
  },
  {
    label: '	CHLORZOXAZONE+IBUPROFEN',
    tradeLabels: [
      { label: '	MYOFEN caps.' },
      { label: '	MYOFEN caps.' },
      { label: '	MARK FAST caps.' },
      { label: '	PROFENAZONE  caps.' },
    ],
  },
  {
    label: '	CHLORZOXAZONE+KETOPROFEN',
    tradeLabels: [{ label: '	FLEXOFAN caps.' }],
  },

  {
    label: '	CHLORZOXAZONE+PARACETAMOL',
    tradeLabels: [
      { label: '	MYOLAX  250/300 caps.' },
      { label: '	MYOFLEX  tablet' },
      { label: '	MYOLGIN 250/300 caps.' },
      { label: '	RELAX 550mg caps.' },
      { label: '	PARAFON 250/300 caps.' },
      { label: '	RELAXON caps.' },
      { label: '	RELAXIGED caps.' },
    ],
  },

  {
    label: '	CHOLECALCIFEROL',
    tradeLabels: [
      { label: '	DEVAROL-S-200000 I.U solution for I.M inj.' },
      { label: '	VI-DROP "VIT-D3" 2800 I.u/ml ORAL DROPS' },
      { label: '	VI-DROP "VIT-D3" 2800 I.u/ml ORAL DROPS' },
    ],
  },
  {
    label: '	CHOLESTYRAMINE',
    tradeLabels: [
      { label: '	CHOLESTRAN 4g sachets' },
      { label: '	QUESTRAN 4gm o/s powder' },
    ],
  },

  {
    label: '	CHOLINE SALICYLATE+GLYCERIN',
    tradeLabels: [{ label: '	AUDAX ear drops' }],
  },
  {
    label: '	CHOLINE THEOPHYLLINATE',
    tradeLabels: [{ label: '	CHOLEDYL 62.5mg/5ml syrup' }],
  },
  {
    label: '	CHOLINE+Cu+Fe+GINSENG+Mg+RUTIN+SULFATES+VIT A+VIT ',
    tradeLabels: [],
  },

  {
    label: '	CHONDROITIN+GLUCOSAMINE',
    tradeLabels: [
      { label: '	CHONDROGEN f.c.tab.' },
      { label: '	ARTEC 250/250mg  f.c.tab.' },
    ],
  },
  {
    label: '	CHONDROITIN+GLUCOSAMINE+MANGANESE+VITAMIN C',
    tradeLabels: [{ label: '	ELASTICIN DS f.c.tablet' }],
  },
  {
    label: '	CHONDROITIN+GLUCOSAMINE+METHYL SULPHONYL METHANE',
    tradeLabels: [{ label: '	GENUPHIL  f.c.tab.' }, { label: '	GENUPHIL syrup' }],
  },

  {
    label: '	CHONDROITIN+GLUCOSAMINE+VITAMIN C',
    tradeLabels: [
      { label: '	CARTILGIN caps.' },
      { label: '	CARTILIGIN FORTE f.c.tab' },
      { label: '	GLUCOSAMINE COMPOUND  f.c.tab.' },
      { label: '	ELASTICIN caps.' },
    ],
  },
  {
    label: '	CHONDROITIN+SODIUM HYALURONATE',
    tradeLabels: [{ label: '	VISCOAT prefilled syringe' }],
  },
  {
    label: '	CHROMIC CL+COPPER CL+FERRIC CL+POTASSIUM I+SODIUM ',
    tradeLabels: [],
  },

  {
    label: '	CHYMOTRYPSIN',
    tradeLabels: [
      { label: '	ALPHACHYMOTRYPSIN 5mg amp.' },
      { label: '	ALPHACHYMOTRYPSIN 5mg amp.for I.M. inj.' },
      { label: '	ALPHACHYMOTRYPSIN 5mg amp.' },
    ],
  },
  {
    label: '	CHYMOTRYPSIN+PHENYLBUTAZONE',
    tradeLabels: [{ label: '	ALPHA KADOL oint.' }],
  },
  {
    label: '	CHYMOTRYPSIN+RIBONUCLEASE+TRYPSIN',
    tradeLabels: [{ label: '	RIBATRAN tab.' }],
  },

  {
    label: '	CHYMOTRYPSIN+TRYPSIN',
    tradeLabels: [
      { label: '	ALPHINTERN f.c.tab.' },
      { label: '	NEWBEZIM tab.' },
      { label: '	AMBEZIM G tab.' },
      { label: '	ALPHINTERN tab.' },
    ],
  },

  {
    label: '	CICLESONIDE',
    tradeLabels: [
      { label: '	ALVESCO160mcg/actuation inhaler' },
      { label: '	ALVESCO160mcg/actuation inhaler' },
      { label: '	ALVESCO 80mcg/actuation inhaler' },
    ],
  },
  { label: '	CICLONIUM BROMIDE', tradeLabels: [{ label: '	DAMONAL 10mg tab.' }] },
  {
    label: '	CICLOPIROX',
    tradeLabels: [{ label: '	MYCOSTER 1% topical solution.' }],
  },

  {
    label: '	CILASTATIN+IMIPENEM',
    tradeLabels: [
      { label: '	TIENAM 500/500mg I.V.vial' },
      { label: '	TIENAM 500mg IV Vial' },
      { label: '	Tienam 500mg I.m.vial' },
      { label: '	Tienem 500mg I.v.vial' },
    ],
  },

  {
    label: '	CILAZAPRIL',
    tradeLabels: [
      { label: '	ZAPRITENS 2.5mg f.c. tabs.' },
      { label: '	ZAPRITENS 5mg f.c. tabs.' },
      { label: '	ZAPRITENS 1mg f.c. tabs.' },
    ],
  },

  {
    label: '	CILOSTAZOL',
    tradeLabels: [
      { label: '	CLAUDOL 100mg tab.' },
      { label: '	INFARCA 50mg f.c.tab.' },
      { label: '	CILOSTAZOL 50mg scored tab.' },
      { label: '	CLAUDIZOL 100mg tab.' },
      { label: '	CILOSTAZOL 100mg tab.' },
      { label: '	CLAUDICAT 50mg tab.' },
      { label: '	PLETAAL 50mg tab.' },
      { label: '	PLETAAL 100mg tab.' },

      { label: '	SEDOTAZOLE 50mg tab.' },
    ],
  },
  {
    label: '	CIMETIDINE',
    tradeLabels: [
      { label: '	CIMETIDINE 200 mg tab.' },
      { label: '	CIMETIDINE 200mg/2ml I.M/I.V.amp.' },
      { label: '	HISTODIL 100mg/ml amp. 2ml' },
      { label: '	ACIDNOR 100mg/ml amp.' },
      { label: '	CIMETIDINE 200 mg tab.' },
    ],
  },

  {
    label: '	CIMICIFUGA EXTRACT',
    tradeLabels: [
      { label: '	FIMINOSAN 20mg tab.' },
      { label: '	KLIMADYNON 20mg f.c.tab.' },
    ],
  },
  {
    label: '	CINCHOCAINE+DEXAMETHASONE+FRAMYCETIN+GRAMICIDIN',
    tradeLabels: [{ label: '	OTAL ear drops' }],
  },
  {
    label: '	CINCHOCAINE+ESCULOSIDE+FRAMYCETINE+HYDROCORTISONE',
    tradeLabels: [{ label: '	SEDIPROCT SUPPOSITORY' }],
  },

  {
    label: '	CINCHOCAINE+HYDROCORTISONE',
    tradeLabels: [
      { label: '	SEDIPROCT  0.5gm/100gm topical cream.' },
      { label: '	PROCTO-FORTE supp.' },
      { label: '	PROCTOSEDYL supp.' },
    ],
  },
  {
    label: '	CINCHOCAINE+POLICRESULEN',
    tradeLabels: [{ label: '	FAKTU supp.' }],
  },

  {
    label: '	CINNARIZINE',
    tradeLabels: [
      { label: '	CINNARIZINE 25mg tab.' },
      { label: '	CEREBAL 25mg tab.' },
      { label: '	CINNAZIN 25mg tab.' },
      { label: '	CINNARIZINE 75mg caps.' },
      { label: '	STUVAL 25mg tab.' },
      { label: '	STUGERON 25mg tab.' },
    ],
  },

  {
    label: '	CINNARIZINE+DOMPERIDONE',
    tradeLabels: [
      { label: '	CINNARIDONE tab.' },
      { label: '	TOURISTIL tab.' },
      { label: '	VERTIGUN tab.' },
    ],
  },
  {
    label: '	CINNARIZINE+HEPTAMINOL',
    tradeLabels: [{ label: '	SUREPTIL tab.' }],
  },

  {
    label: '	CINNARIZINE+NICERGOLINE',
    tradeLabels: [{ label: '	CINIBRAL tablet' }, { label: '	CINIBRAL tablet' }],
  },
  {
    label: '	CINNARIZINE+PIRACETAM',
    tradeLabels: [{ label: '	CINARETAM 400/25mg cap.' }],
  },

  {
    label: '	CIPROFLOXACIN',
    tradeLabels: [
      { label: '	CIPROCIN 10mg/ml vial' },
      { label: '	CIPROCIN 250mg f.c.tab.' },
      { label: '	CIPROCIN 10mg/ml vial' },
      { label: '	CIPROCIN 0.3 % eye oint.' },
      { label: '	CIPROCIN 0.3% eye drops' },
      { label: '	CIPROCIN  750mg f.c.tab.' },
      { label: '	CIPROCIN 500mg  f.c.tab.' },
      { label: '	CIPROFAR 250mg f.c.tab.' },

      { label: '	CIPROFAR 500mg f.c.tab.' },
      { label: '	CIPROXIL-XL 500mg S.R.f.c.tab.' },
      { label: '	CIPROFLOXACIN 200mg/100ml vial' },
      { label: '	CIPROFLOXACIN 250mg f.c.tab.USP 27' },
      { label: '	CIPROFLOXACIN 500mg f.c.tab.' },
      { label: '	CIPROFLOXACIN 500mg f.c.tab.U.S.P.27' },
      { label: '	CIPROFLOXACIN 500mg tab.U.S.P.25' },
      { label: '	CIPROFOX  0.3% eye drop' },
      { label: '	CIPROMAX 0.3% eye/ear drops' },
      { label: '	CIPROMAX 250mg tab.' },

      { label: '	CIPROMAX 500mg  f.c.tab.' },
      { label: '	CIPROMAX 750mg f.c.tab.' },
      { label: '	CIPROBAY 750mg f.c.tab.' },
      { label: '	CIPROQUIN 750mg f.c.tab.' },
      { label: '	CIPROFAR 3mg/ml eye drops' },
      { label: '	BACTIFLOX 250mg lactab.' },
      { label: '	BACTIFLOX 500mg lactab.' },
      { label: '	CIPROQUIN 500mg f.c. tab.' },
      { label: '	CIPRINOL 500mg tab.' },
      { label: '	CIPPRINOL 100mg amp.' },

      { label: '	CIPROFAR 750mg f.c.tab.' },
      { label: '	CIPROBAY 750 mg f.c.tab.' },
      { label: '	MIFOXINE 250mg tab.' },
      { label: '	CIPROBAY 500mg f.c.tab.' },
      { label: '	CIPROBAY 500 mg f.c.tab.' },
      { label: '	CIPROBAY 250mg f.c.tab.' },
      { label: '	CIPROBAY 250 mg f.c.tab.' },
      { label: '	CILOXAN 3mg/ml eye/ear drops' },
      { label: '	CIPRINOL  250mg tab.' },
      { label: '	CIPRO 250mg f.c.tab.' },

      { label: '	CIPRO  3.5mg/ml ear drop (APPROVED RE-REG)' },
      { label: '	MIFOXIN 500mg f.c.tab.' },
      { label: '	RANCIF 200 mg/100 ml vial' },
      { label: '	SERVIFLOX 250 mg f.c.tab.' },
      { label: '	SERVIFLOX 500mg f.c.tab.' },
      { label: '	RANCIF 500mg f.c.tab.' },
      { label: '	RANCIF 250mg f.c.tab.' },
      { label: '	ULTRACIPRO 1gm E.R. f.c. tabs.' },
      { label: '	SERVIFLOX 750 mg f.c.tab.' },
      { label: '	HECTRONIN 200 MG VIAL' },
    ],
  },
  {
    label: '	CIPROFLOXACIN+DEXAMETHASONE',
    tradeLabels: [
      { label: '	ZONACIP ear drops' },
      { label: '	PEOPO-OTIC ear drops' },
    ],
  },
  {
    label: '	CIPROFLOXACIN+HYDROCORTISONE',
    tradeLabels: [{ label: '	CIPROCORT otic drops' }],
  },
  {
    label: '	CIPROFLOXACIN+METRONIDAZOLE',
    tradeLabels: [{ label: '	CIPRODIAZOLE f.c. tabs.' }],
  },

  {
    label: '	CISAPRIDE',
    tradeLabels: [
      { label: '	ALKAPRIDE 5mg/5ml susp.' },
      { label: '	CISIL 5 mg tablet' },
      { label: '	GASTROPRIDE 20mg tab.' },
      { label: '	GASTROPRIDE 20mg tab.' },
      { label: '	CISIL SUSPENSION 1 mg/1 ml' },
      { label: '	CISIL SUSPENSION 1 mg/1 ml' },
      { label: '	GASTROPULSINE SUSP. 100 mg/100 ml' },
      { label: '	CISIL 5 mg tablet' },

      { label: '	CISIL 10 mg tablet' },
      { label: '	GASTROPULSINE TAB.  10 mg' },
      { label: '	CISIL 10 mg tablet' },
      { label: '	CISAPRIDE 5 mg TAB.' },
      { label: '	CISAPRIDE 10 mg TAB.' },
      { label: '	MOTIPRID 1mg/ml susp.' },
      { label: '	ALKAPRIDE 5mg tab.' },
      { label: '	ALKAPRIDE 5mg tab.' },
      { label: '	MOTIPRID 10mg tab.' },
    ],
  },

  {
    label: '	CISATRACURIUM BESYLATE',
    tradeLabels: [
      { label: '	CIS-ATRACURE 2mg/ml I.V. amp.' },
      { label: '	NIMBEX  2.68 mg/ml amp.' },
      { label: '	NIMBEX  2.68 mg/ml amp.' },
      { label: '	NIMBEX  2.68 mg/ml amp.' },
    ],
  },

  {
    label: '	CISPLATIN',
    tradeLabels: [
      { label: '	CYTOPLATIN 50mg/50ml vial' },
      { label: '	CISPLATINUM 50mg/100ml inj.' },
      { label: '	CISPLATIN 1mg/ml vial' },
      { label: '	CISPLATIN 1mg/ml vial' },
      { label: '	CISPLATINE MYLAN 10mg/10ml vial' },
      { label: '	CISPLATYL 50mg inj.' },
      { label: '	CISPLATYL 25mg/50ml inj.' },
      { label: '	CISPLATIN-EBEWE 0.5mg/ml vial.' },

      { label: '	CISPLATYL 10mg vial' },
      { label: '	CISPLATIN-EBEWE 0.5mg/ml vial.' },
      { label: '	CYTOPLATIN 10mg/20ml vial' },
      { label: '	CISPLATIN-EBEWE 0.5mg/ml vial.' },
      { label: '	CISPLATINUM 50mg/100ml inj.' },
      { label: '	CISPLATINE MYLAN 50mg/50ml vial' },
      { label: '	PLATINEX 25mg/50ml R.T.U  soln.inj.' },
      { label: '	PLATINEX R.T.U 50mg/100ml  I.V vial' },
      { label: '	PLATINEX R.T.U 10mg/20ml I.V vial' },
      { label: '	PLATOSIN 0.5mg/ml vial' },

      { label: '	PLATINOL 10mg vial' },
      { label: '	PLATINOL 50mg vial' },
      { label: '	UNISTIN 10mg/10ml vial for I.V. inf.' },
      { label: '	UNISTIN 10mg/10ml vial for I.V. inf.' },
      { label: '	UNISTIN 10mg/10ml vial for I.V. inf.' },
    ],
  },

  {
    label: '	CITALOPRAM',
    tradeLabels: [
      { label: '	CITALO 20mg f.c.tab.' },
      { label: '	DEPRAM 20mg f.c.tab' },
      { label: '	DEPRAM 40mg f.c.tab.' },
      { label: '	LECITAL 40mg f.c.tab.' },
      { label: '	CITALO 2mg/ml oral solution' },
      { label: '	CITALOPRAM HEXAL 60mg f.c.tab.' },
      { label: '	CEROPRAM 20mg tab.' },
      { label: '	CIPRAM 20 mg Tab.' },

      { label: '	CIPRAMAX 40mg f.c.tab.' },
      { label: '	DEPAWAY 40mg f.c. tabs.' },
      { label: '	CITALO 20mg f.c.tab.' },
      { label: '	RAMDEEP 40mg f.c.tab.' },
      { label: '	PURACIT 20mg f.c.tab.' },
      { label: '	RAMDEEP 2mg/ml syrup.' },
      { label: '	TALOPRAM 40mg f.c.tab.' },
      { label: '	SEDOPRAM 20mg f.c.tab' },
    ],
  },

  {
    label: '	CITRIC ACID+LIGHT MAGNESIUM OXIDE',
    tradeLabels: [{ label: '	JEDCOMAG effervescent sachet' }],
  },
  {
    label: '	CITRIC ACID+MAGNESIUM OXIDE+SACCHARIN+SODIUM BICAR',
    tradeLabels: [],
  },
  {
    label: '	CITRIC ACID+MAGNESIUM SULPHATE+SODIUM BICARBONATE',
    tradeLabels: [{ label: '	EPICO EFFERVESCENT SALT 17.65% sachet' }],
  },
  {
    label: '	CITRIC ACID+POTASSIUM CITRATE+SODIUM BICARBONATE',
    tradeLabels: [{ label: '	CITROCAL 14 gm/100 gm eff.granules' }],
  },

  {
    label: '	CITRIC ACID+SODIUM BICARBONATE',
    tradeLabels: [{ label: '	CITRO-SODIUM eff.granules' }],
  },

  {
    label: '	CITRIC ACID+SODIUM BICARBONTE+TARTARIC ACID',
    tradeLabels: [
      { label: '	FAWAR FRUIT sachets' },
      { label: '	ADCOFAWAR eff. Granules' },
      { label: '	EPINOS PINE APPLE EFFERVESCENCE SALT sachet' },
      { label: '	FAWAR LEMON sachets' },
      { label: '	EPINOS FRUIT EFFERVESCENCE SALT sachet' },
      { label: '	EPINOS LEMON EFFERVESCENCE SALT sachet' },
      { label: '	XENOS  cola effervecent Granules' },
      { label: '	XENOS  fruit effervecent granules' },

      { label: '	PHAROFRUIT eff. gr. in sachets' },
      { label: '	PHAROFRUIT eff. gr. in sachets' },
      { label: '	SEPCOFRUIT sachets' },
      { label: '	XENOS lemon effervecent granules' },
    ],
  },

  {
    label: '	CLARITHROMYCIN',
    tradeLabels: [
      { label: '	KLARIMIX 250mg/5ml suspension' },
      { label: '	KLARIMIX 250 mg tablet' },
      { label: '	CLARIMYCIN 500MG f.c. tablet' },
      { label: '	KLARIMIX 500mg tablet' },
      { label: '	CLARITHRO 250mg tab.' },
      { label: '	CLARIKAN  500mg S.R.f.c.tab.' },
      { label: '	CLARITHRO 500mg tab.' },
      { label: '	CLAROCIN 250mg tab.' },

      { label: '	MACROMAX 125mg/5ml susp.' },
      { label: '	CLAROCIN 500mg tab.' },
      { label: '	KLACID XL 500mg f.c.tab' },
      { label: '	KLACID 500mg f.c.tab.' },
      { label: '	KLACID 250mg/5ml susp.' },
      { label: '	KLARIMIX 125mg/5ml susp.' },
      { label: '	KLACID 125 mg/5 ml susp' },
      { label: '	LARITHROCIN 500mg f.c. tabs.' },
      { label: '	KLACID 125 mg/5 ml susp' },
      { label: '	LARITHROCIN  250mg f.c.tab.' },

      { label: '	KLACID 250 mg tab' },
      { label: '	MACROMAX 250mg/5ml susp.' },
      { label: '	KLACID 500mg Vial' },
    ],
  },
  {
    label: '	CLARITHROMYCIN+OMEPRAZOLE+TINIDAZOLE',
    tradeLabels: [
      { label: '	HELI-CURE enteric coated tab.' },
      { label: '	TRIO-CLAR caps.' },
      { label: '	PEPTIC CARE enteric coated tab.' },
      { label: '	PYLOACT (f.c.tab.+enteric coated granules+f.c.tab.)' },
    ],
  },

  {
    label: '	CLEMASTINE',
    tradeLabels: [
      { label: '	HISTA-TOP 1.34mg tab.' },
      { label: '	HISTA TOP syrup 0.67 mg/5 ml' },
      { label: '	TAVEGYL  10mg/100ml syrup' },
      { label: '	TAVEGYL 2mg/2ml amp. For I.M.,slow I.V. inj.' },
      { label: '	TAVEGYL 1mg tab.' },
    ],
  },

  {
    label: '	CLINDAMYCIN',
    tradeLabels: [
      { label: '	EPCICLIND 2% vaginal cream.' },
      { label: '	EPCICLIND 2% vaginal cream.' },
      { label: '	CLANDICIN 150mg caps.' },
      { label: '	MEPACLIND 150mg caps.' },
      { label: '	CHEMOCIN 2% vaginal cream' },
      { label: '	ALFACLINDAMYCIN 300mg/2ml amp. For I.V./I.M. inj.' },
      { label: '	MEPACLIND 300mg caps.' },
      { label: '	MEPACLIND 100mg vaginal soft gelatin ovules' },

      { label: '	CLINDAM 300 mg  capsules' },
      { label: '	CLINDACIN 150mg caps.' },
      { label: '	CLINDACIN 300mg caps.' },
      { label: '	CLINDACINE 1% topical gel' },
      { label: '	CLINDACINE 150mg caps.' },
      { label: '	CLINDACYN 150mg caps.' },
      { label: '	CLINDACYN 300mg caps.' },
      { label: '	DALACIN T 1% topical solution' },
      { label: '	CLINDACIN 1% topical solution' },
      { label: '	DALACIN C 300mg caps.' },

      { label: '	CLINDAM 150 mg  capsules' },
      { label: '	CLINDA-SOL 0.36gm/30ml solution' },
      { label: '	DALACIN 2%  vaginal cream' },
      { label: '	DALACIN 2% vaginal cream' },
      { label: '	DALACIN C  sterile solution 150 mg/ml' },
      { label: '	DALACIN C 150mg caps.' },
      { label: '	DALACIN C 150mg/1ml amp.' },
      { label: '	DALACIN C 150mg/ml I.M./I.V.amp.' },
      { label: '	DALACIN T 1% solution' },
      { label: '	CLINDAM 150 mg  capsules' },

      { label: '	VAGICLIND 2% vaginal cream' },
      { label: '	UTOCLIND 2% vag. Cream' },
      { label: '	Dalacin C 600mg Amp' },
    ],
  },
  { label: '	CLIOQUINOL', tradeLabels: [{ label: '	VIODERM 3gm/100gm cream' }] },
  {
    label: '	CLIOQUINOL+FLUMETHASONE',
    tradeLabels: [
      { label: '	LOCACORTEN VIOFORM ear drops' },
      { label: '	VIOTIC ear drops' },
    ],
  },

  {
    label: '	CLIOQUINOL+HOMATROPINE METHYLBROMIDE+PHTHALYL SULF',
    tradeLabels: [],
  },
  {
    label: '	CLIOQUINOL+HYDROCORTISONE ACETATE',
    tradeLabels: [
      { label: '	DERMOCORT cream' },
      { label: '	VIODERM HYDROCORTISONE cream' },
    ],
  },
  {
    label: '	CLIOQUINOL+HYDROCORTISONE+NYSTATIN',
    tradeLabels: [{ label: '	NYSTAFORM topical oint.' }],
  },
  {
    label: '	CLIOQUINOL+NICOTINAMIDE+PHTHALYL SULPHATHIAZOLE+VI',
    tradeLabels: [],
  },

  {
    label: '	CLIOQUINOL+PREDNISOLONE',
    tradeLabels: [{ label: '	ADCOFORM oint.' }],
  },
  { label: '	CLOBAZAM', tradeLabels: [{ label: '	FRISIUM 10mg tab.' }] },

  {
    label: '	CLOBETASOL PROPIONATE',
    tradeLabels: [
      { label: '	DERMASOL 0.05% cream' },
      { label: '	DERMASOL 0.05% oint.' },
      { label: '	CLOVACORT 0.5mg/ml scalp lotion' },
      { label: '	JEDCOVATE 0.05% cream' },
      { label: '	DERMOVATE 0.05 %w/w ointment' },
      { label: '	CLO-BUTRA 0.525mg/gm(0.05%) cream' },
      { label: '	CLO-BUTRA 0.525mg/gm(0.05%) cream' },
      { label: '	CLOBITAT 0.05% topical cream' },

      { label: '	CLOBITAT 0.05% oint.' },
      { label: '	DERMOVATE  0.05%w/w cream' },
      { label: '	CLOVACORT 0.5mg/g gel' },
      { label: '	DERMOPHARM 0.05% cream' },
      { label: '	CLEROVATE 0.05% topical oint.' },
      { label: '	CLOVACORT 0.05% cream' },
      { label: '	CLOVACORT 0.05% oint.' },
      { label: '	CLEROVATE 0.05% cream.' },
    ],
  },

  {
    label: '	CLOBETASONE',
    tradeLabels: [
      { label: '	EUMOVATE 0.05gm/100gm top. Cream' },
      { label: '	EUMOVATE 0.05gm/100gm top. Oint.' },
    ],
  },
  {
    label: '	CLOBUTINOL',
    tradeLabels: [
      { label: '	SILOMAT 20mg/5ml syrup' },
      { label: '	SILOMAT 60mg/ml oral drops' },
      { label: '	SILOMAT 20mg/2ml I.M./I.V./S.C.amp.' },
      { label: '	SILOMAT 40mg sugar coated tab.' },
    ],
  },

  {
    label: '	CLOBUTINOL+ORCIPRENALINE',
    tradeLabels: [{ label: '	SILOMAT COMPOSITUM syrup' }],
  },
  {
    label: '	CLOFOCTOL',
    tradeLabels: [
      { label: '	OCTOFENE 750mg supp' },
      { label: '	OCTOFENE 200 mg supp' },
      { label: '	OCTOFENE 100 mg supp' },
    ],
  },

  {
    label: '	CLOMIPHENE',
    tradeLabels: [
      { label: '	CLOSTILBEGYT 50mg tab.' },
      { label: '	CLOMIPHENE TAB. 50 mg' },
      { label: '	CLOMIFERT 50mg tab.' },
      { label: '	CLOMID tab.' },
      { label: '	OVUGEN TAB. 50 MG' },
    ],
  },

  {
    label: '	CLOMIPRAMINE',
    tradeLabels: [
      { label: '	ANAPRAMINE S.R. 75mg f.c.tab.' },
      { label: '	ANAPRAMINE 25 mg f.c.tab.' },
      { label: '	ANAFRANIL 25mg/2ml amp.' },
      { label: '	ANAMEPRAL 25mg sugar coated  tab.' },
      { label: '	ANAFRONIL 25mg s.c. tab.' },
      { label: '	ANAFRONIL SR 75mg f.c.tab.' },
      { label: '	ANAPRAMINE 50 mg f.c.tab.' },
      { label: '	SUPRANIL 50mg hard gelatin caps.' },

      { label: '	SUPRANIL 25mg hard gelatin caps.' },
    ],
  },

  {
    label: '	CLONAZEPAM',
    tradeLabels: [
      { label: '	AMOTRIL 0.5mg tab.' },
      { label: '	AMOTRIL 2mg tab.' },
      { label: '	APETRYL 2mg tab.' },
      { label: '	APETRYL 0.5mg tab.' },
      { label: '	CLOPAM 2mg tab.' },
      { label: '	KLOZEPAM 2.5mg/ml oral drops' },
      { label: '	SIGOTRYL 0.5mg tab.' },
      { label: '	RONATRIL 0.5mg tab.' },

      { label: '	RIVOTRIL 2mg tab.' },
      { label: '	RIVOTRIL 2.5mg/ml oral drops.(مدعم)' },
      { label: '	SIGOTRYL 2mg tab.' },
      { label: '	RIVOTRIL 0.5mg tab.' },
      { label: '	RONATRIL tab. 2 mg' },
    ],
  },

  {
    label: '	CLONIDINE',
    tradeLabels: [
      { label: '	CLOPRESS 0.2mg tab.' },
      { label: '	CATAPRES TAB. 0.150 mg' },
      { label: '	CLOPRESS 0.1mg tab.' },
      { label: '	CLOPRESS 0.15mg tab.' },
    ],
  },
  {
    label: '	CLOPAMIDE+DIHYDROERGOCRISTINE+RESERPINE',
    tradeLabels: [{ label: '	BRINERDIN f.c.tab.' }],
  },

  {
    label: '	CLOPAMIDE+DIHYDROERGOTOXINE+RESERPINE',
    tradeLabels: [{ label: '	HYPOTEN tab.' }],
  },
  {
    label: '	CLOPERASTINE',
    tradeLabels: [{ label: '	NOTUSSIL 400mg/100ml susp.' }],
  },

  {
    label: '	CLOPIDOGREL',
    tradeLabels: [
      { label: '	FIBROGREL 75mg f.c. tab.' },
      { label: '	CLOPIDOGREL 75mg f.c.tab.' },
      { label: '	IDIAVIX 75mg f.c.tab.' },
      { label: '	MYOGREL 75mg f.c.tab.' },
      { label: '	BORGAVIX  75mg f.c. tab.' },
      { label: '	BLOTAGRIL 75mg f.c. tabs.' },
      { label: '	CLATEX 75 mg f.c.tab.' },
      { label: '	CLOPEXAGREL 75mg f.c.tab' },

      { label: '	PLAVICTONAL 75mg  f.c.tab.' },
      { label: '	PLATENOR 75mg tabs.' },
      { label: '	PLAVICARD 75mg f.c. tab.' },
      { label: '	PLAVIX 75mg film coated tab.' },
      { label: '	ORGISTROK 75mg f.c.tab.' },
      { label: '	STROKA 75mg f.c.tab.' },
      { label: '	SIGAGREL 75mg f.c.tab.' },
      { label: '	THROMBO 75mg f.c.tab.' },
    ],
  },

  {
    label: '	CLOTRIMAZOLE',
    tradeLabels: [
      { label: '	CANDISTAN 200mg vaginal tab.' },
      { label: '	CANDISTAN 1% topical powder.' },
      { label: '	DERMATIN 10mg/ml topical solution' },
      { label: '	DERMATIN 1gm/100gm cream' },
      { label: '	CANESTEN 3 2% vaginal cream' },
      { label: '	CLOSOL 1gm/100ml topical solution' },
      { label: '	CANDISTAN AEROSOL 0.2g/20g' },
      { label: '	CANDISTAN 1% solution' },

      { label: '	CANDISTAN AEROSOL 0.2g/20g' },
      { label: '	CANDISTAN 1% topical cream' },
      { label: '	CANDIZOLE 1% paint' },
      { label: '	CANESTEN 1% solution' },
      { label: '	CANESTEN 1% cream' },
      { label: '	CANESTEN 500mg 1vag.tab.' },
      { label: '	DERMATIN POWDER (FOR EXTERNAL USE ONLY)' },
      { label: '	KREMA-ROSA 100mg vaginal tab.' },
      { label: '	LOCASTEN 0.1gm vag.tab.' },
      { label: '	CUTISTAD 1% topical spray' },

      { label: '	LOCASTEN 1 vaginal tab.' },
      { label: '	LOCASTEN 1% cream' },
      { label: '	LOCASTEN 1% solution' },
      { label: '	CANDISTAN 2% vaginal cream.' },
      { label: '	CANESTEN 1 vag.cream 10 %' },
      { label: '	LOCASTEN 3 vaginal cream' },
      { label: '	CANEMAZOLE 1% cream' },
      { label: '	CANDISTAN 100mg vaginal tab.' },
    ],
  },

  {
    label: '	CLOTRIMAZOLE+DEXAMETHASONE',
    tradeLabels: [{ label: '	MYCUTIN D cream.' }],
  },
  {
    label: '	CLOTRIMAZOLE+HYDROCORTISONE',
    tradeLabels: [{ label: '	DERMATIN CORT topical cream' }],
  },
  {
    label: '	CLOTRIMAZOLE+ZINC OXIDE',
    tradeLabels: [{ label: '	DERMATIN powder' }],
  },

  {
    label: '	CLOVE OIL+GERANIUM OIL+LIDOCAINE',
    tradeLabels: [{ label: '	CLOVACAINE solution' }],
  },

  {
    label: '	CLOZAPINE',
    tradeLabels: [
      { label: '	LEPONEX 100mg tab.' },
      { label: '	CLOZAPEX 100 mg tab.' },
      { label: '	LEPONEX 25mg tab.' },
      { label: '	CLOZAPINE 100mg scored tab.' },
      { label: '	CLOZAPEX 25mg tab.' },
      { label: '	CLOZAPIN HEXAL 100mg tab.' },
      { label: '	MEDAZEPINE 25mg tab.' },
      { label: '	CLOZAPINE 25mg tab.' },

      { label: '	CLOZAPIN HEXAL 25mg tab.' },
      { label: '	SCHIZONEX 25 mg tab.' },
      { label: '	SCHIZONEX 100 mg tab.' },
      { label: '	Zaclo 100mg tab.' },
    ],
  },
  {
    label: '	COAL TAR+ZINC OXIDE',
    tradeLabels: [{ label: '	COALTAR ointment U.S.P23' }],
  },
  {
    label: '	CODEINE',
    tradeLabels: [{ label: '	CODIPRONT CUM EXPECTORANT 200mg/100g syrup' }],
  },

  {
    label: '	CODEINE+CICLONIUM BROMIDE+DIPYRONE+MEPROBAMATE',
    tradeLabels: [{ label: '	DOLO-PYRALGIN M tab' }],
  },
  {
    label: '	CODEINE+DIPHENHYDRAMINE',
    tradeLabels: [{ label: '	BRONCHOLASE 10mg CAPSULES' }],
  },
  {
    label: '	CODEINE+PARACETAMOL+SALICYLAMIDE',
    tradeLabels: [
      { label: '	CODACETINE-L tab. (cancelled)' },
      { label: '	CODACETINE tab (cancelled)' },
      { label: '	CODACETINE tab (cancelled)' },
    ],
  },

  {
    label: '	CO-DERGOCRINE',
    tradeLabels: [
      { label: '	CEREBROGEN 1mg tab.' },
      { label: '	HYDERGINE 0.3mg/ml amp.(Hospital)' },
      { label: '	HYDERGINE 1.5mg tab.' },
      { label: '	CEREBROGEN 1mg tab.' },
    ],
  },
  {
    label: '	CO-DERGOCRINE +ISOSORBIDE DINITRATE+TESTOSTERONE',
    tradeLabels: [{ label: '	POTADERM PLUS cream' }],
  },

  {
    label: '	CO-DERGOCRINE+ISOSORBIDE DINITRATE+THEOPHYLLINE',
    tradeLabels: [{ label: '	ERODERM cream' }],
  },
  {
    label: '	COENZYME Q10',
    tradeLabels: [
      { label: '	COENZYME Q10 30mg caps.' },
      { label: '	EURO Q10 30mg caps.' },
      { label: '	CO QUINOL 50mg caps.' },
      { label: '	EURO Q10 50mg caps.' },
      { label: '	CO-Q10  30mg caps.' },
    ],
  },

  {
    label: '	COLCHICINE',
    tradeLabels: [
      { label: '	COLMEDITEN 0.5 mg tab' },
      { label: '	COLCHICINE 500mcg tab.' },
      { label: '	COLMEDITEN 0.5 mg tab' },
    ],
  },
  {
    label: '	COLCHICINE+HALFA BAR EXTRACT+PIPERAZINE CITRATE',
    tradeLabels: [{ label: '	UROCOLINE sachet' }],
  },
  {
    label: '	COLCHICINE+KHELLIN+PIPERAZINE CITRATE',
    tradeLabels: [{ label: '	URICOL PLUS sachets' }],
  },

  {
    label: '	COLISTIN',
    tradeLabels: [
      { label: '	COLISTIN 1.5 M.I.U.tab.' },
      { label: '	COLISTIN SULPHATE 750.000 IU/15ml powder for oral susp.' },
      { label: '	COLIMEX 50000I.U./ml syrup' },
      { label: '	COLOMYCIN 1000.000iu' },
    ],
  },
  {
    label: '	COMMIPHORA MOLMOL EXTRACT',
    tradeLabels: [{ label: '	HERBAL MIRAZID 300mg soft gelatin caps.' }],
  },

  {
    label: '	CONJUGATED ESTROGENS',
    tradeLabels: [
      { label: '	PREMARIN 0.75mg vaginal cream' },
      { label: '	PREMARIN 1.25mg tab.' },
      { label: '	PREMARIN 0.625mg tab.' },
    ],
  },
  {
    label: '	CONJUGATED ESTROGENS+LEVONORGESTREL',
    tradeLabels: [{ label: '	PREMPAK C  0.625mg tab.' }],
  },

  {
    label: '	COPPER',
    tradeLabels: [
      { label: '	EGY-T MODEL CU T 380A intrauterine device' },
      { label: '	MONA  LISA CU 375' },
      { label: '	PREGNA MODEL T CU 380A intrauterine device' },
      { label: '	U-KARE CU 375 intrauterine device.' },
      { label: '	NOVA T intrauterine device' },
    ],
  },
  {
    label: '	COPPER SULPHATE+FOLIC ACID+IRON+MANGANESE SULPHATE',
    tradeLabels: [],
  },
  {
    label: '	COPPER+FERROUS FUMARATE+FOLIC ACID+MANGANESE+VITAM',
    tradeLabels: [],
  },

  {
    label: '	CORTICOADRENAL EXTRACT+VITAMIN B6',
    tradeLabels: [
      { label: '	CORTIPLEX B6 PEDIATRIC amp.' },
      { label: '	CORTIPLEX B6 Adult amp.' },
    ],
  },
  { label: '	CRATAEGUS EXTRACT', tradeLabels: [{ label: '	CARDIOTON 300 mg' }] },

  {
    label: '	CROMOLYN SODIUM',
    tradeLabels: [
      { label: '	CROMOLYN Eye Drops' },
      { label: '	CROMOLYN 100 mg cap.' },
      { label: '	CROMOLYN 2 % nasal drops' },
      { label: '	CROMOLYN 4 % eye oint.' },
    ],
  },
  {
    label: '	CROMOLYN+OXYMETAZOLINE',
    tradeLabels: [{ label: '	NAZOCROM  nasal spray' }],
  },

  {
    label: '	CROTAMITON',
    tradeLabels: [
      { label: '	EURAX 10% lotion' },
      { label: '	EURAX 10% cream' },
      { label: '	SCABIRAX 100mg/gm cream' },
    ],
  },
  {
    label: '	CRYSTAL VIOLET',
    tradeLabels: [{ label: '	GENTIAN VIOLET 1% paint E.P.84' }],
  },
  {
    label: '	CURCUMIN+SILYMARIN',
    tradeLabels: [{ label: '	HEPAPRO soft gelatin cap.' }],
  },

  {
    label: '	CYANOCOBALAMINE',
    tradeLabels: [
      { label: '	CYANOCOBALAMINE 1000 mcg  inj.' },
      { label: '	BETO-12 1mg/ml amp.' },
      { label: '	B12 SR 1000mcg cap.' },
      { label: '	BETOLVEX 1mg/ml amp.' },
      { label: '	CIDOLVEX 1mg/ml I.M amp.' },
      { label: '	EPIVIT RETARD 1mg/ml amp.' },
      { label: '	DELTAVIT B12 1mg sublingual tab.' },
      { label: '	RUBIVAMIN 1000mcg amp.' },
    ],
  },

  {
    label: '	CYANOCOBALAMINE+NICOTINAMIDE+PHOSPHOLIPIDS+TOCOPHE',
    tradeLabels: [],
  },
  {
    label: '	CYCLIZINE',
    tradeLabels: [{ label: '	EMETREX  50mg/ml adult amp.' }],
  },
  { label: '	CYCLIZINE+VITAMIN B6', tradeLabels: [{ label: '	EMETREX tab.' }] },

  {
    label: '	CYCLOBENZAPRINE',
    tradeLabels: [
      { label: '	MULTIRELAX 10mg f.c.tab' },
      { label: '	MULTI-RELAX 5mg f.c. tab.' },
    ],
  },
  { label: '	CYCLOFENIL', tradeLabels: [{ label: '	ONDOGYNE 400mg tab.' }] },
  {
    label: '	CYCLONIUM BROMIDE+MEPROBAMATE',
    tradeLabels: [{ label: '	TRANQUOMON tab.' }],
  },

  {
    label: '	CYCLOPENTOLATE',
    tradeLabels: [
      { label: '	CYCLOPENTOLATE 0.5% eye drops' },
      { label: '	COLIR CUSI CICLOPLEJICO 1% eye drops.' },
      { label: '	CYCLOPENTOLATE 1% eye drops' },
      { label: '	CYCLOPENTOLATE 1% eye drops' },
      { label: '	PLEGICA 1% eye drops' },
      { label: '	PENTOLATE 1% eye drops' },
    ],
  },

  {
    label: '	CYCLOPENTOLATE+PHENYLEPHRINE',
    tradeLabels: [{ label: '	CYCLOPHRINE eye drops' }],
  },

  {
    label: '	CYCLOPHOSPHAMIDE',
    tradeLabels: [
      { label: '	DOXOL 200mg vial' },
      { label: '	CYCRAM 1g vial for I.V. inf.' },
      { label: '	CYCRAM 200mg powder for I.V. vial' },
      { label: '	CYCRAM 500mg vial for I.V. inj.' },
      { label: '	CYCLOPHOSPHAMIDE 200mg vial' },
      { label: '	ALKYLOXAN 200mg vial' },
      { label: '	NEOPHOS 200mg/15ml vial' },
      { label: '	DOXOL 50mg f.c.tab.' },

      { label: '	ENDOXAN 50mg sugar coated tab.' },
      { label: '	ENDOXAN 200mg I.V.vial' },
      { label: '	NEOPHOS 1000mg/50ml vial' },
      { label: '	ALKYLOXAN 50mg f.c.tab.' },
      { label: '	ENDOXAN 1gm I.V.vial' },
      { label: '	ALKYLOXAN 500mg vial' },
    ],
  },

  {
    label: '	CYCLOPIROXOLAMINE',
    tradeLabels: [
      { label: '	BATRAFEN nail lacquer' },
      { label: '	BATRAFEN 1% topical solution.' },
      { label: '	BATRAFEN 10mg/gm topical cream' },
    ],
  },

  {
    label: '	CYCLOSPORIN',
    tradeLabels: [
      { label: '	ABRAMMUNE 50mg soft gelatin caps.(Hospital)' },
      { label: '	ABRAMMUNE 50mg/ml syrup (Hospital)' },
      { label: '	ABRAMMUNE 25mg soft gelatin caps.(Hospital)' },
      { label: '	ABRAMMUNE 100mg/ml syrup (Hospital)' },
      { label: '	ARPIMUNE ME 25mg soft gelatin caps.' },
      { label: '	ABRAMMUNE 100mg soft gelatin caps. (Hospital)' },
      { label: '	ARPIMUNE ME 100mg soft gelatin capsule' },
      { label: '	ARPIMUNE ME 50mg soft gelatin caps.' },

      { label: '	SANDIMMUN  NEORAL 100mg soft gelatin caps.' },
      { label: '	SANDIMMUN NEORAL 25mg soft gelatin caps.' },
      { label: '	SANDIMMUN NEORAL 100 mg/ml oral solution' },
      { label: '	SANDIMMUN  NEORAL 50mg soft gelatin caps.' },
      { label: '	SANDIMMUM 50mg/ml amp.' },
      { label: '	SANDIMMUM 25mg caps.' },
      { label: '	SANDIMMUM 25mg caps.' },
    ],
  },
  {
    label: '	CYMBOPOGON PROXIMUS+KHELLIN',
    tradeLabels: [{ label: '	KELLAGON 20mg sachets' }],
  },

  {
    label: '	CYNARA DRY EXTRACT',
    tradeLabels: [{ label: '	HEPAREX 320mg caps.' }],
  },
  {
    label: '	CYNARA DRY EXTRACT+INOSITOL+OROTIC ACID+PHOSPHOLIP',
    tradeLabels: [],
  },
  {
    label: '	CYNARA DRY EXTRACT+MENTHOL+MAGNESIUM OXIDE+SILYMAR',
    tradeLabels: [],
  },
  {
    label: '	CYNARA+MAGNESIUM OXIDE+MENTHA',
    tradeLabels: [{ label: '	CYNCHOLINE caps.' }],
  },

  {
    label: '	CYPROHEPTADINE',
    tradeLabels: [
      { label: '	TRIACTIN 2mg/5ml syrup' },
      { label: '	TRIACTIN 4mg tab.' },
    ],
  },
  {
    label: '	CYPROHEPTADINE+NICOTINAMIDE+VITAMIN B1+VITAMIN B2+',
    tradeLabels: [],
  },
  {
    label: '	CYPROTERONE',
    tradeLabels: [
      { label: '	CYPROTERONE ACETATE 50 mg tabs.' },
      { label: '	CYPROTERONE ACETATE 50mg tab.' },
      { label: '	ANDROCUR 50mg tab.' },
    ],
  },

  {
    label: '	CYPROTERONE+ETHINYL ESTRADIOL',
    tradeLabels: [{ label: '	DIANE- 35 tab.' }],
  },
  { label: '	CYSTEINE+HOMOCYSTEINE', tradeLabels: [{ label: '	REDUCDYN tab.' }] },
  {
    label: '	CYSTEINE+PHOSPHOLIPIDS+SELENIUM+VITAMIN E',
    tradeLabels: [{ label: '	HEPATOCURE soft gelatin caps.' }],
  },

  {
    label: '	CYTARABINE',
    tradeLabels: [
      { label: '	ALEXAN 50mg/ml vial' },
      { label: '	ALEXAN 50mg/ml vial' },
      { label: '	CYTARABINE 500mg/10ml vial' },
      { label: '	ALEXAN 20mg/ml I.V.vial' },
      { label: '	CYTARABINE STADA 20mg/ml vial' },
      { label: '	CYTARABINE STADA 50mg/ml vial' },
      { label: '	CYTARABINE STADA 50mg/ml vial' },
      { label: '	CYTARABINE STADA 20mg/ml vial' },

      { label: '	CYTARABINE INJ.SOLUTION 100 MG /1 ML B.P.88' },
      { label: '	CYTARABINE 100mg/5ml amp.' },
      { label: '	ARACYTIN 100mg/5ml vial' },
      {
        label:
          '	TABINE 100mg/5ml sol. for I.V.,S.C. inj. or Intrathecal use ampoule',
      },
    ],
  },
  {
    label: '	CYTIDINE+URIDINE',
    tradeLabels: [{ label: '	NUCLEO CMP FORTE hard gelatin capsules' }],
  },
  { label: '	DACARBAZINE', tradeLabels: [{ label: '	DETICENE 200mg vial' }] },

  {
    label: '	DALTEPARIN SODIUM',
    tradeLabels: [
      { label: '	FRAGMIN 5000 I.U./0.2 ml prefilled syringe' },
      { label: '	FRAGMIN  2500I.U./0.2ml prefilled syringe' },
    ],
  },
  {
    label: '	DAMIANAE+MESTEROLONE+MUIRA P.+NICOTINIC ACID+PYGEU',
    tradeLabels: [],
  },

  {
    label: '	DANAZOL',
    tradeLabels: [
      { label: '	DANAZOL 200mg U.S.P.XXIII caps.' },
      { label: '	DANOL 200mg caps.' },
      { label: '	DANAZOL 200mg caps.' },
      { label: '	DANAZANT 200mg caps.' },
    ],
  },

  {
    label: '	DANTROLENE',
    tradeLabels: [
      { label: '	DANTRELAX 25mg caps.' },
      { label: '	DANTRONE 50mg hard gelatin caps.' },
      { label: '	DANTRONE 25mg hard gelatin caps.' },
      { label: '	BETENOLMEN 25mg hard gelatin capsules' },
    ],
  },
  {
    label: '	DANTROLENE+PARACETAMOL',
    tradeLabels: [{ label: '	DANTRELAX COMPOUND caps.' }],
  },

  { label: '	DAPSONE', tradeLabels: [{ label: '	DAPSONE 100mg tab.' }] },
  {
    label: '	DAUNORUBICIN',
    tradeLabels: [
      { label: '	DAUNOCIN 20mg vial for I.V. inf.' },
      { label: '	DAUNORUBICIN HCL 20mg/4ml vial' },
    ],
  },

  {
    label: '	DEFERASIROX',
    tradeLabels: [
      { label: '	EXJADE 250mg disp. tabs.' },
      { label: '	EXJADE 500mg dispersible tabs.' },
      { label: '	EXJADE 125mg disp. tabs.' },
    ],
  },
  {
    label: '	DEFERIPRONE',
    tradeLabels: [
      { label: '	FERRIPROX 100mg/ml oral solution' },
      { label: '	FERRIPROX 100mg/ml oral solution' },
      { label: '	KELFER 500mg hard gelatin caps.' },
    ],
  },

  {
    label: '	DEFLAZACORT',
    tradeLabels: [
      { label: '	DEFLAZACORT 30mg tabs.' },
      { label: '	DEFLAZACORT 6mg tabs.' },
    ],
  },
  {
    label: '	DEQUALINIUM CHLORIDE',
    tradeLabels: [
      { label: '	UCIFRESH (tutti-fruitti) spray' },
      { label: '	UCIFRESH (peppermint flavour) spray' },
      { label: '	UCIFRESH (lemon flavour) spray' },
    ],
  },

  {
    label: '	DEQUALINIUM+LYSOZYME',
    tradeLabels: [{ label: '	LARYPRO lozenges' }],
  },
  {
    label: '	DESFERRIOXAMIN',
    tradeLabels: [{ label: '	DESFERAL 500mg vialمدعم' }],
  },
  {
    label: '	DESFLURANE',
    tradeLabels: [{ label: '	SUPRANE 100% liquid for inhalation' }],
  },

  {
    label: '	DESLORATADINE',
    tradeLabels: [
      { label: '	DELAREX 5mg f.c.tab.' },
      { label: '	LORAFAST 2.5mg/5ml syp.' },
      { label: '	DESLORAT 0.5mg/ml syrup' },
      { label: '	DESLORAT 5mg f.c.tab.' },
      { label: '	NEOLORADIN oral disintegrating tab.' },
      { label: '	AERIUS 5mg f.c.tab.' },
      { label: '	FERNILAR  0.5mg/ml syrup' },
      { label: '	DESA 2.5mg/5ml syrup' },

      { label: '	DESA 5mg f.c.tab.' },
      { label: '	D-CLAR 5mg orally disintegrating tab.' },
      { label: '	TENDRATINE 2,5mg/5ml syp.' },
    ],
  },

  {
    label: '	DESMOPRESSIN ACETATE',
    tradeLabels: [
      { label: '	MINIRIN MELT 60mcg oral sublingual tab.' },
      { label: '	MINIRIN MELT 120mcg oral sublingual tab.' },
      { label: '	MINIRIN 4mcg/ml amp. For I.M./I.V./S.C. inj.' },
      { label: '	MINIRIN 10mcg/dose nasal spray' },
      { label: '	MINIRIN 0.2mg tab.' },
      { label: '	MINIRIN 0.1mg tab.' },
      { label: '	DESMOPRESSIN ACETATE 0.2mg tablet' },
      { label: '	OCTOSTIM 15mcg/ml amp.' },
    ],
  },

  {
    label: '	DESOGESTREL+ETHINYL ESTRADIOL',
    tradeLabels: [{ label: '	MARVELON tab.' }],
  },
  { label: '	DESOXIMETASONE', tradeLabels: [{ label: '	ESPERSON oint.' }] },

  {
    label: '	DEXAMETHASONE',
    tradeLabels: [
      { label: '	DEXAGEL 0.985mg/gm viscous eye drops' },
      { label: '	DELTASONE 0.75mg tab.' },
      { label: '	DEXA-SINE 1.5mg eye drops' },
      { label: '	DEXA-SINE 0.1% eye drops.' },
      { label: '	DEXAMETHASONE syrup' },
      { label: '	F-CORTEN 4mg/ml ampoule' },
      { label: '	DEXAMETHASONE SODIUM PHOSPHATE 8mg/2ml amp.USP 27' },
      { label: '	DEXAMETHASONE SODIUM PHOSPHATE  8mg/2ml amp.' },

      { label: '	DEXAMETHASONE 4mg/ml amp.' },
      { label: '	DELTASONE 5mg/100ml syrup' },
      { label: '	DEXAMETHASONE 0.05% eye ointment' },
      { label: '	EPIDEXONE 1mg/ml eye/ear drops' },
      { label: '	ISOPTO MAXIDEX 0.1% eye drops' },
      { label: '	EPIDEXONE 0.05% Eye oint.' },
      { label: '	DEXAZONE 0.5mg tab' },
      { label: '	F-CORTEN 4mg/ml ampoule' },
      { label: '	DEXONIUM 0.1% eye drops' },
      { label: '	CEBEDREX' },

      { label: '	FORTECORTIN 8mg/2ml  mono ampoule for I.V./I.M. inj.' },
      { label: '	ORAZONE 0.5 mg  TAB.' },
      { label: '	THILODEX 1mg eye drops' },
      { label: '	ORADEXON ORGANON  0.05mg/ml paed.elixir' },
      { label: '	ORADEXON 5mg inj.' },
      { label: '	ORAZONE 0.1mg/ml syrup' },
    ],
  },

  {
    label: '	DEXAMETHASONE SODIUM PHOSPHATE',
    tradeLabels: [
      { label: '	DEXONIUM 8mg/2ml amp.' },
      { label: '	EPIDRON 4mg/ml vial' },
      { label: '	DEXAMETHASONE SODIUM PHOSPHATE 8mg/2ml I.M/I.V amp USP 30.' },
      { label: '	DECADRON 4mg/ml vial' },
    ],
  },

  {
    label: '	DEXAMETHASONE+FRAMYCETINE',
    tradeLabels: [
      { label: '	FRAKIDEX eye drops' },
      { label: '	FRAKIDEX eye oint.' },
      { label: '	CORTICETINE ear drops' },
    ],
  },
  {
    label: '	DEXAMETHASONE+GENTAMICIN',
    tradeLabels: [
      { label: '	DEXAMYTREX OPHTIOLE eye drops.' },
      { label: '	GENTADEX eye/ear drops' },
      { label: '	DEXAMYTREX eye oint.' },
    ],
  },

  {
    label: '	DEXAMETHASONE+GRAMICIDIN+NEOMYCIN+POLYMYXIN',
    tradeLabels: [{ label: '	DEXA POLYSPECTRAN eye & ear drops' }],
  },
  {
    label: '	DEXAMETHASONE+HYDROXYETHYL SALICYLATE+SALICYLAMIDE',
    tradeLabels: [{ label: '	PAIN FREE gel' }],
  },
  {
    label: '	DEXAMETHASONE+NEOMYCIN',
    tradeLabels: [{ label: '	DECADRON WITH NEOMYCIN eye/ear drops' }],
  },
  {
    label: '	DEXAMETHASONE+NEOMYCIN SULPHATE+POLYMYXIN B SULPHA',
    tradeLabels: [],
  },

  {
    label: '	DEXAMETHASONE+NEOMYCIN+POLYMYXIN',
    tradeLabels: [
      { label: '	MAXITROL eye oint.' },
      { label: '	DEXATROL eye oint.' },
      { label: '	DEXATROL eye/ear drops' },
      { label: '	DEXARON PLUS eye/ear oint.' },
      { label: '	DEXA POLYSPECTRAN N eye/ear drops' },
      { label: '	DEXARON PLUS eye/ear drops.' },
    ],
  },

  {
    label: '	DEXAMETHASONE+OFLOXACIN',
    tradeLabels: [{ label: '	OPTIFLOX-D eye drops' }],
  },
  {
    label: '	DEXAMETHASONE+PANTHENOL',
    tradeLabels: [
      { label: '	ALEX-PANTHEN cream' },
      { label: '	DEXAPANTHEN cream' },
    ],
  },

  {
    label: '	DEXAMETHASONE+TOBRAMYCIN',
    tradeLabels: [
      { label: '	DEXATOBRIN OPHTHALMIC SUSPENSION' },
      { label: '	DEXATOB eye drops' },
      { label: '	DEXATOBRIN ophthalmic oint.' },
      { label: '	CO- AVAZIR sterile ophthalmic susp.' },
      { label: '	TOBRACOID eye drops' },
      { label: '	TOBRADEX eye oint.' },
      { label: '	TOBRADEX eye drops' },
      { label: '	OPTIDEX -T eye drops' },

      { label: '	SELECTOMYCIN D eye drops' },
    ],
  },
  {
    label: '	DEXAMETHAZONE ACETATE +HYDROXY ETHYLSALICYLATE+SAL',
    tradeLabels: [],
  },

  {
    label: '	DEXAPANTHENOL',
    tradeLabels: [
      { label: '	CORNEREGEL FLUID 50mg/ml eye drops' },
      { label: '	CORNEREGEL 50mg/g  eye gel' },
      { label: '	DEXPANTHENOL 5gm/100gm topical cream' },
      { label: '	DEX-PANTHENOL 5% cream' },
      { label: '	DEXPANOL WOUND 5gm/100ml topical spray' },
      { label: '	PANTHENOL 5% cream(CANCELLED)' },
    ],
  },

  {
    label: '	DEXAPANTHENOL+ROYAL JELLY',
    tradeLabels: [
      { label: '	PEDY PHAR oint.' },
      { label: '	PEDY PHAR oint.' },
      { label: '	PEDY PHAR oint.' },
    ],
  },
  {
    label: '	DEXFENFLURAMINE',
    tradeLabels: [{ label: '	ISOMERIDE 15mg caps.' }],
  },
  {
    label: '	DEXIBUPROFEN',
    tradeLabels: [{ label: '	DEXA-IBUFEN 400mg f.c. tab.' }],
  },

  {
    label: '	DEXKETOPROFEN',
    tradeLabels: [
      { label: '	DEXKETOPROFEN scored f.c.tab.' },
      { label: '	DEXAPROF 25mg f.c. tab.' },
    ],
  },
  {
    label: '	DEXPANTHENOL+ DIMETHYLSULFOXIDE+ HEPARIN',
    tradeLabels: [{ label: '	PARAZAD topical gel' }],
  },
  { label: '	DEXRAZOXANE', tradeLabels: [{ label: '	CARDIOXANE 500mg vial' }] },

  {
    label: '	DEXTRAN',
    tradeLabels: [
      { label: '	DEXTRAN 40 (10 %W/V) INTR.INFUSION & GLUCOSE 5 % B.P.' },
      { label: '	DEXTRAN 70 6% NORMAL SALINE' },
    ],
  },
  {
    label: '	DEXTRAN+DEXTROSE',
    tradeLabels: [
      { label: '	DEXTRAN 70 6% W/V GLUCOSE 5% I.V.infusion B.p 2003' },
      { label: '	DEXTRAN (40)10% W/V IN DEXTROSE 5% I.V.infusion B.P.2001' },
      { label: '	DEXTRAN (40)10% W/V IN DEXTROSE 5% I.V.infusion B.P.2001' },
      { label: '	DEXTRAN 40 10 % IN GLUCOSE 5% I.V.infusion B.P 2003' },
    ],
  },

  {
    label: '	DEXTRAN+FERRIC HYDROXIDE',
    tradeLabels: [{ label: '	COSMOFER amp.B.P.' }],
  },
  {
    label: '	DEXTRAN+HYDROXYPROPYL METHYLCELLULOSE',
    tradeLabels: [{ label: '	NORMO TEARS eye drops.' }],
  },

  {
    label: '	DEXTRAN+SODIUM CHLORIDE',
    tradeLabels: [
      { label: '	DEXTRAN 40 10% IN NORMAL SALINE I.V infusion B.P 2003' },
      { label: '	DEXTRAN (70)  6% W/V IN NORMAL SALINE I.V.infusion B.P2003' },
      { label: '	DEXTRAN (40)10% IN NORMAL SALINE B.P.2001 I.V.infusion' },
      { label: '	DEXTRAN (40)10% IN NORMAL SALINE B.P.2001 I.V.infusion' },
      { label: '	6% W/V DEXTRAN 70 IN NORMAL SALINE B.P 2003 I.V.infusion' },
      { label: '	DEXTRAN (40)10% IN NORMAL SALINE B.P.2001 I.V.infusion' },
    ],
  },

  {
    label: '	DEXTROMETHORPHAN',
    tradeLabels: [
      { label: '	CODIPHAN 10mg/5ml syrup.' },
      { label: '	TUSSILAR 10mg tab.' },
      { label: '	TUSSILAR-M 10mg/ml drops' },
    ],
  },
  {
    label: '	DEXTROMETHORPHAN+DIPHENHYDRAMINE+EPHEDRINE+GUAIFEN',
    tradeLabels: [],
  },
  {
    label: '	DEXTROMETHORPHAN+GUAIFENESIN',
    tradeLabels: [{ label: '	BRONCHOTEC  syrup' }],
  },

  {
    label: '	DEXTROMETHORPHAN+PARACETAMOL+PSEUDOEPHEDRINE',
    tradeLabels: [{ label: '	ADOL COLD caplets' }],
  },
  {
    label: '	DEXTROMETHORPHAN+PSEUDOEPHEDRINE',
    tradeLabels: [{ label: '	TRIAMINIC COUGH syrup.' }],
  },

  {
    label: '	DEXTROSE',
    tradeLabels: [
      { label: '	DEXTROSE 25% I.V.infusion USP 27' },
      { label: '	DEXTROSE 50% I.v infusion USP 27' },
      { label: '	DEXTROSE INJECTION 25 % B.P 88' },
      { label: '	DEXTROSE 25% I.V.infusion USP 27' },
      { label: '	DEXTROSE 10% W/V USP 24 I.V.infusion' },
      { label: '	DEXTROSE 10% W/V I.V. infusion' },
      { label: '	DEXTROSE 25% I.V.infusion USP 27' },
      { label: '	DEXTROSE 10% inj. U.S.P.24' },

      { label: '	DEXTROSE SEPACK 5%W/V I.V.infusion' },
      { label: '	DEXTROSE  50% I.V injection USP 27' },
      { label: '	DEXTROSE  5% inj. U.S.P.24' },
      { label: '	GLUCOSE 10%W/V I.V.infusion B.P.2001' },
      { label: '	GLUCOSE 10%W/V I.V.infusion B.P.2001' },
      { label: '	GLUCOSE 10%W/V I.V.infusion B.P.2001' },
      { label: '	GLUCOSE 20% W/V I.V.infusion B.P.2003' },
      { label: '	DEXTROSE INJECTION 25 % I.V injection U.S.P 29' },
      { label: '	GLUCOSE 5% W/V FOR INJ E.P. 98' },
      { label: '	GLUCOSE 5% W/V FOR INJ E.P. 98' },

      { label: '	DEXTROSE 10% W/V USP 24 I.V.infusion' },
      { label: '	DEXTROSE 5 % W/V INJ. U.S.P30 500 ML' },
      { label: '	DEXTROSE 5 % I.V INFUSION B.P.88' },
      { label: '	DEXTROSE 5% w/v U.S.P 24 I.V.infusion' },
      { label: '	DEXTROSE 5% I.V.infusion' },
      { label: '	DEXTROSE 40% I.V.infusion U.S.P.27' },
      { label: '	DEXTROSE 25 % injection' },
      { label: '	DEXTROSE 25% I.V.infusion' },
      { label: '	DEXTROSE 25% I.V.infusion' },
      { label: '	DEXTROSE 40% I.V.infusion U.S.P.27' },

      { label: '	DEXTROSE 5% w/v U.S.P 24 I.V.infusion' },
      { label: '	DEXTROSE 50 % inj. E.P.84' },
      { label: '	DEXTROSE 10% inj. U.S.P.24' },
      { label: '	Dextrose 50% 500ml/otsuka' },
    ],
  },
  {
    label: '	DEXTROSE+POTASSIUM CHLORIDE',
    tradeLabels: [
      {
        label:
          '	POTASSIUM CHLORIDE 0.2%W/V & DEXTROSE 5%W/V I.V.infusion B.P.2004',
      },
      {
        label:
          '	POTASSIUM CHLORIDE 0.2%W/V & DEXTROSE 5%W/V I.V.infusion B.P.2004',
      },
      {
        label:
          '	POTASSIUM CHLORIDE 0.2%W/V & DEXTROSE 5%W/V I.V.infusion B.P.2004',
      },
    ],
  },

  {
    label: '	DEXTROSE+POTASSIUM CHLORIDE+SODIUM CHLORIDE',
    tradeLabels: [{ label: '	NEOMAINT I.V.infusion' }],
  },
  {
    label: '	DEXTROSE+POTASSIUM CHLORIDE+SODIUM CHLORIDE+SODIUM',
    tradeLabels: [],
  },
  {
    label: '	DEXTROSE+POTASSIUM CITRATE+SODIUM CHLORIDE+SODIUM ',
    tradeLabels: [],
  },

  {
    label: '	DEXTROSE+SODIUM CHLORIDE',
    tradeLabels: [
      { label: '	DEXTROSE 5 % & SODIUM CHLORIDE 0.9 % INJ. U.S.P 25' },
      { label: '	DEXTROSE 5% & SODIUM CHLORIDE 0.45%  I.V.infusion USP 25' },
      { label: '	DEXTROSE 5% & SODIUM CHLORIDE 0.45%  I.V.infusion USP 25' },
      { label: '	DEXTROSE 5% &  0.9 % SODIUM CLORIDE I.V.infusion' },
      { label: '	DEXTROSE 5% & SODIUM CHLORIDE 0.45% I.V.infusion U.S.P.25' },
      { label: '	DEXTROSE 5% &  0.9 % SODIUM CLORIDE I.V.infusion' },
      { label: '	DEXTROSE 5 % & SODIUM CHLORIDE 0.9 % INJ. U.S.P 25' },
      { label: '	DEXTROSE 5 % & SODIUM CHLORIDE 0.9 % INJ. U.S.P 25' },

      { label: '	DEXTROSE 5 % & SODIUM CHLORIDE 0.9 % INJ. U.S.P 25' },
      { label: '	DEXTROSE 5 % & SODIUM CHLORIDE 0.45 % INJ. U.S.P 25' },
      { label: '	DEXTROSE 3.3% & SODIUM CHLORIDE 0.3% I.V.injection U.S.P 27' },
      { label: '	DEXTROSE 5 % & SODIUM CHLORIDE 0.45 % INJ. U.S.P 25' },
      { label: '	DEXTROSE 3.3% & SODIUM CHLORIDE 0.3% I.V.injection U.S.P 27' },
      { label: '	DEXTROSE 5 % & SODIUM CHLORIDE 0.45 % INJ. U.S.P 25' },
      { label: '	DEXTROSE 5% & SODIUM CHLORIDE 0.9% I.V solution USP 25' },
      { label: '	DEXTROSE 10 % AND SODIUM CHLORIDE  0.9 % injection U.S.P 27' },
      { label: '	DEXTROSE 10% & SODIUM CHLORIDE 0.9%' },
      { label: '	DEXTROSE 5% & SODIUM CHLORIDE 0.9% I.V solution USP 25' },

      { label: '	DEXTROSE 10% & SODIUM CHLORIDE 0.9%' },
      { label: '	DEXTROSE 3.3% & SODIUM CHLORIDE 0.3% I.V.injection U.S.P 27' },
      { label: '	SODIUM CHLORIDE 0.18% W/V & DEXTROSE 5% W/V I.V.infusion' },
      { label: '	SOD.CHLORIDE 0.225%W/V & DEXTROSE 5%W/V I.V.infusion' },
      {
        label:
          '	SODIUM CHLORIDE 0.18 %W/V & DEXTROSE 4.3%W/V I.V.infusion B.P.98',
      },
      {
        label:
          '	SODIUM CHLORIDE 0.18 %W/V & DEXTROSE 4.3%W/V I.V.infusion B.P.98',
      },
      { label: '	SODIUM CHLORIDE 0.18% W/V & DEXTROSE 5% W/V I.V.infusion' },
      { label: '	SOD.CHLORIDE 0.225%W/V & DEXTROSE 5%W/V I.V.infusion' },
      { label: '	SODIUM CHLORIDE 0.45% & DEXTROSE 5% I.v.infusion' },
      { label: '	SOD.CHLORIDE 0.225%W/V & DEXTROSE 5%W/V I.V.infusion' },

      { label: '	SODIUM CHLORIDE 0.18% W/V & DEXTROSE 5% W/V I.V.infusion' },
      { label: '	SODIUM CHLORIDE 0.9% & DEXTROSE 5% INJ.B.P.98' },
      { label: '	SODIUM CHLORIDE 0.9% & DEXTROSE 5% INJ.B.P.98' },
      {
        label:
          '	SODIUM CHLORIDE 0.18 %W/V & DEXTROSE 4.3%W/V I.V.infusion B.P.98',
      },
      { label: '	SODIUM CHLORIDE 0.9% and DEXTROSE 5% IV infusion B.P 2003' },
      { label: '	SODIUM CHLORIDE 0.9% & DEXTROSE 5% INJ.B.P.98' },
    ],
  },

  {
    label: '	DIACERIN',
    tradeLabels: [
      { label: '	DIACEREIN 50mg hard gelatin cap.' },
      { label: '	ARTICU-SAFE 50mg hard gelatin capsules' },
      { label: '	OSTEOCEREIN 50mg hard gelatin caps.' },
    ],
  },
  {
    label: '	DIASTASE+HEMICELLULOSE+PAPAIN+PEPSIN',
    tradeLabels: [{ label: '	POSTINE syrup.' }],
  },
  {
    label: '	DIASTASE+PAPAIN+SIMETHICONE',
    tradeLabels: [{ label: '	PEPFIZ eff.tab.' }],
  },

  {
    label: '	DIATRIZOIC ACID',
    tradeLabels: [
      { label: '	UROVIDEO 75% amp.' },
      { label: '	UROVIDEO 75% amp.' },
      { label: '	UROVIDEO 75% amp.' },
    ],
  },

  {
    label: '	DIAZEPAM',
    tradeLabels: [
      { label: '	CALIUM 5 mg scored tab.' },
      { label: '	FARCOZEPAM 2mg tab.' },
      { label: '	FARCOZEPAM 5mg tab.' },
      { label: '	NEURIL SYRUP' },
      { label: '	EPIVAL 10mg tab.' },
      { label: '	NEURIL 10mg/2ml amp.' },
      { label: '	EPIVAL 10mg/2ml amp.' },
      { label: '	FARCOZEPAM 10mg/2ml amp.' },

      { label: '	FARCOZEPAM 5mg tab.' },
      { label: '	FARCOZEPAM 2mg tab.' },
      { label: '	NEURIL 2mg tab.' },
      { label: '	NEURIL  5mg tab.' },
      { label: '	VALPAM 2mg tab.' },
      { label: '	STESOLID 5mg/ml I.v/I.m amp.' },
      { label: '	VALINIL 5mg tab.' },
      { label: '	VALIUM 10mg/2ml amp.' },
      { label: '	STESOLID 0.4mg/ml susp.' },
      { label: '	STESOLID 5mg supp.' },

      { label: '	STESOLID 10mg supp.' },
      { label: '	VALINIL 2mg tab.' },
      { label: '	VALPAM 2mg/5ml syrup' },
      { label: '	VALPAM 5mg tab.' },
    ],
  },
  {
    label: '	DIBUCAINE+PHENYLEPHRINE+SHARK-LIVER OIL',
    tradeLabels: [{ label: '	H-FORMULA cream' }, { label: '	H-FORMULA supp.' }],
  },

  { label: '	DICHLORPHENAMIDE', tradeLabels: [{ label: '	ORATROL 50mg tab.' }] },
  {
    label: '	DICLOFENAC DIETHYLAMINE',
    tradeLabels: [
      { label: '	VOLTAREN 1% emulgel.' },
      { label: '	VOLTAREN 1% emulgel.' },
      { label: '	VOLTAREN 1% emulgel.' },
    ],
  },
  {
    label: '	DICLOFENAC DIETHYLAMINE + METHYL SALICYLATE + MENT',
    tradeLabels: [],
  },

  {
    label: '	DICLOFENAC EPOLAMINE',
    tradeLabels: [
      { label: '	FLECTOR 1.292gm/100gm topical gel' },
      { label: '	FLECTOR 50mg gastro-resistant soft gelatin capsule' },
    ],
  },

  {
    label: '	DICLOFENAC POTASSIUM',
    tradeLabels: [
      { label: '	ADWIFLAM 25mg infantile and children supp.' },
      { label: '	ADWIFLAM 50mg E.R.caps.(approved re-reg)' },
      { label: '	ADWIFLAM 75mg supp.' },
      { label: '	ADWIFLAM 75mg/3ml amp.(approved re-reg)' },
      { label: '	DOLPHIN K 75mg S.R.caps.' },
      { label: '	DOLPHIN K 50mg f.c. tab.' },
      { label: '	ADWIFLAM granules in sachets.' },
      { label: '	DICLOWAD 50mg sachets.' },

      { label: '	DICLOTAZEN 50mg sachets' },
      { label: '	ANTIFLAM 25mg tab.' },
      { label: '	ANTIFLAM 50mg tab.' },
      { label: '	DOLPHIN K 25mg f.c. tab.' },
      { label: '	DICLORAPID 50mg f.c.tab.' },
      { label: '	CATAFLY 2mg/ml susp.' },
      { label: '	DOLPHIN K 75mg/3ml I.M.amp.' },
      { label: '	FLAMIFAST 50mg oral disintegrating tab.' },
      { label: '	CATAFAST 50mg sachet' },
      { label: '	CATAFEN  50mg tab.' },

      { label: '	CATAFLAM 15mg/ml oral drops.' },
      { label: '	CATAFLAM 25mg  sugar coated tab.' },
      { label: '	CATAFLAM 50mg sugar coated tab.' },
      { label: '	CATAFLAM 75mg supp.' },
      { label: '	ACTIFAST 50mg f.c.tab.' },
      { label: '	FLASH ACT 50mg/2g Sachets' },
      { label: '	ACTIFAST 50mg sachets' },
      { label: '	CATAFLAM 75mg/3ml amp.' },
      { label: '	DOLPHIN K 15mg/ml oral drops' },
      { label: '	ACTIFAST 12.5mg tab.' },

      { label: '	DOLPHIN K 75mg supp.' },
      { label: '	NOFLAM 50mg tab.' },
      { label: '	RAPIDUS 50mg f.c.tab.' },
      { label: '	OFLAM 50 QUICKETAB.' },
      { label: '	RAPIFLAM  50mg enteric coated tab.' },
      { label: '	OFLAM 25 QUICKTAB.' },
      { label: '	POTAFEN 50mg f.c.tab.' },
      { label: '	POTAFEN 75mg/3ml amp.' },
      { label: '	RAPIFLAM 25mg enteric coated tab.' },
      { label: '	POTAFEN 25mg f.c. tab.' },
    ],
  },
  {
    label: '	DICLOFENAC POTASSIUM+DICLOFENAC SODIUM',
    tradeLabels: [{ label: '	OLFEN 75 D.A. DEPO CAPS.' }],
  },
  {
    label: '	DICLOFENAC POTASSIUM+METHOCARBAMOL',
    tradeLabels: [
      { label: '	METHOQUICK 50/500  tab.' },
      { label: '	DIMRA f.c.tab.' },
    ],
  },

  {
    label: '	DICLOFENAC SODIUM',
    tradeLabels: [
      { label: '	DOLPHIN 3% topical gel' },
      { label: '	EPIFENAC 25mg enteric coated tab.' },
      { label: '	BABY RELIEF 12.5mg supp.' },
      { label: '	EPIFENAC 100mg rectal supp.' },
      { label: '	DOLPHIN 25mg supp.' },
      { label: '	EPIFENAC 0.1% eye drops' },
      { label: '	EPIFENAC 0.1% eye drops' },
      { label: '	DIVIDO 75mg dual release caps.' },

      { label: '	DOLPHIN 12.5mg supp.' },
      { label: '	DIVIDO 75mg dual release caps.' },
      { label: '	BABY RELIEF 25mg supp.' },
      { label: '	EPIFENAC 12.5mg supp.' },
      { label: '	DICLAC 100mg supp.' },
      { label: '	DECLOPHEN INFANTILE 25mg supp.' },
      { label: '	DECLOPHEN 75mg amp.' },
      { label: '	DECLOPHEN 50 mg enteric coated tab.' },
      { label: '	DECLOPHEN 25mg tab.' },
      { label: '	DECLOPHEN 12.5mg infantile supp.' },

      { label: '	DECLOPHEN 100mg supp.' },
      { label: '	DECLOPHEN 0.1%  eye drops' },
      { label: '	DECLOFENAC 50mg f.c.enteric coated tab.' },
      { label: '	DECLOFENAC 25mg enteric coated tab.' },
      { label: '	DECLOFENAC 1% gel' },
      { label: '	DICLAC 75mg/3ml amp.' },
      { label: '	DOLPHIN 5% topical gel' },
      { label: '	DECLOPHEN S.R. 100mg pellets in caps.' },
      { label: '	DOLPHIN 50mg supp.' },
      { label: '	FLECTOR 50 granules in sachets' },

      { label: '	DICLAC 150ID RETARD tab.' },
      { label: '	DICLAC 5% gel' },
      { label: '	DICLAC 50mg supp.' },
      { label: '	DICLAC 75mg ID RETARD tab.' },
      { label: '	ARTHROFAST 150 mg MR tab.' },
      { label: '	DOLPHIN 75mg/3ml I.M ampoule' },
      { label: '	DICLOFENAC 25 mg tab.' },
      { label: '	DICLOFERAZ 50mg dispersible tab.' },
      { label: '	ANUVA  50mg dispersible tab.' },
      { label: '	DICLOGESIC 12.5mg supp.' },

      { label: '	ANTIFLAM 1% emulgel' },
      { label: '	EPIFENAC 75mg/3ml I.M./I.V.amp.' },
      { label: '	EPIFENAC 50mg enteric coated tab.' },
      { label: '	EPIFENAC 25mg supp.' },
      { label: '	SIGMAFENAC 75 mg S.R. cap.' },
      { label: '	SUPPOFEN 100mg rectal supp.' },
      { label: '	VOLTAREN 100mg supp.' },
      { label: '	SUPPOFEN 25mg rectal supp.' },
      { label: '	RHEUMAFEN 100mg S.R.caps.' },
      { label: '	SUPPOFEN 50mg rectal supp.' },

      { label: '	RHEUMAFEN 25mg enteric coated tab.' },
      { label: '	RHEUMAFEN 50mg enteric coated  tab.' },
      { label: '	RHEUMAFEN 75mg/3ml sol. For I.M.  inj.' },
      { label: '	RHEUMAFEN ACTI-GEL 1% gel' },
      { label: '	RHEUMARENE 0.1gm supp.' },
      { label: '	RHEUMARENE 1% gel' },
      { label: '	RHEUMARENE 25 mg E.C.tab.' },
      { label: '	RHEUMARENE 50mg enteric coated tab.' },
      { label: '	OPTO FLAME 0.1% eye drops' },
      { label: '	VOLTAREN  12.5mg infantile supp.' },

      { label: '	RHEUMAFEN  75 mg SR  caps.' },
      { label: '	VOLTAREN 25mg enteric coated tab.' },
      { label: '	VOLTAREN 25mg supp.' },
      { label: '	VOLTAREN 50mg enteric coated tab.' },
      { label: '	VOLTAREN 75mg/3ml amp.' },
      { label: '	VOLTAREN OPHTA 0.1% ophthalmic solution' },
      { label: '	VOLTAREN S.R.75mg f.c.tab.' },
      { label: '	VOLTAREN SR 100mg f.c.tab.' },
      { label: '	VOLTARMIN 50mg tab.' },
      { label: '	ROMALEX 75mg/3ml I.M. amp.' },

      { label: '	ROMALEX 25mg rectal supp.' },
      { label: '	ROMALEX 0.1% eye drops' },
      { label: '	ROMAFEN 1% gel' },
      { label: '	RHEUMARENE 75mg/3ml amp.' },
      { label: '	TEMPREX 12.5mg supp.' },
      { label: '	OLFEN 75mg/2ml amp.' },
      { label: '	OLFEN 50mg Lactab' },
      { label: '	OLFEN 100mg S.R.depocaps.' },
      { label: '	OLFEN 100 RECTOCAP' },
      { label: '	OLFEN  1% topical gel.' },

      { label: '	OLFEN  25 mg Lactab' },
      { label: '	OLFEN  25 mg Lactab' },
      { label: '	PHAROFEN 100mg supp.' },
      { label: '	OLFEN  1% topical gel.' },
    ],
  },
  {
    label: '	DICLOFENAC SODIUM+DIFLUNISAL',
    tradeLabels: [{ label: '	RHEUMAFEN FORTE supp.' }],
  },
  {
    label: '	DICLOFENAC SODIUM+VITAMIN B1+VITAMIN B2+VITAMIN B1',
    tradeLabels: [],
  },

  {
    label: '	DICLOFENAC SODIUM+VITAMIN B1+VITAMIN B6+VITAMIN B1',
    tradeLabels: [],
  },
  {
    label: '	DICLOPHENAC RESINATE EXTRA',
    tradeLabels: [{ label: '	FLOTAC 75mg caps.' }],
  },
  {
    label: '	DICLOXACILLIN',
    tradeLabels: [{ label: '	PENSTAPH caps.  500 mg' }],
  },

  {
    label: '	DICYCLOMINE',
    tradeLabels: [
      { label: '	SPASMOREST 10mg tab.' },
      { label: '	SPASMOREST 20mg tab.' },
      { label: '	SPASMOREST 10 mg/ml amp.' },
      { label: '	SPASMOREST  0.2% syrup.' },
      { label: '	SPASMOCYCLONE 10mg/5ml syrup' },
    ],
  },
  {
    label: '	DICYCLOMINE+PAPAIN+SANZYME 3500+SIMETHICONE+SODIUM',
    tradeLabels: [],
  },

  {
    label: '	DIETHYLAMINE SALICYLATE',
    tradeLabels: [{ label: '	SALETHAN 12% cream' }],
  },
  {
    label: '	DIETHYLAMINE SALICYLATE+METHYL NICOTINATE',
    tradeLabels: [{ label: '	BAUMALGINE oint.' }],
  },
  {
    label: '	DIETHYLAMINE+LIDOCAINE',
    tradeLabels: [{ label: '	RHEUMA-REST roll on' }],
  },

  {
    label: '	DIETHYLAMINE+MYRTECAINE+SALICYLIC ACID',
    tradeLabels: [
      { label: '	ALGESAL SURACTIVE cream' },
      { label: '	ALGESAL SURACTIVE cream' },
    ],
  },

  {
    label: '	DIFLUCORTOLONE',
    tradeLabels: [
      { label: '	NERISONE CREAM' },
      { label: '	NERICID 0.1% oint.' },
      { label: '	NERICID 0.1% cream' },
      { label: '	NERISONE FORTE 0.3% fatty oint.' },
      { label: '	NERICID 0.1%  fatty ointment' },
      { label: '	NERISONE OINT. 0.1 %' },
      { label: '	NERISONE 0.1% fatty oint.' },
      { label: '	NERICID FORTE  3mg/g  fatty ointment' },
    ],
  },

  {
    label: '	DIFLUCORTOLONE VALERATE+ISOCONAZOLE NITRATE',
    tradeLabels: [{ label: '	CUTACORT cream' }, { label: '	TRAVOCORT 1% cream' }],
  },
  {
    label: '	DIFLUNISAL',
    tradeLabels: [
      { label: '	DOLOBAN 250mg tab' },
      { label: '	DOLOZAL 500mg tablet' },
      { label: '	DOLOBAN FORTE 500mg tab' },
    ],
  },

  {
    label: '	DIFLUNISAL+DICYCLOMINE+HYOSCINE+PARACETAMOL',
    tradeLabels: [{ label: '	FORTALGIN tab.' }],
  },
  {
    label: '	DIFLUNISAL+NAPROXEN',
    tradeLabels: [{ label: '	MAXIPAN supp.' }, { label: '	MAXIPAN f.c.tab.' }],
  },

  {
    label: '	DIGOXINE',
    tradeLabels: [
      { label: '	LANOXIN  0.05gm/litre paediatric elixir' },
      { label: '	CARDIXIN PAEDIATRIC 0.05mg/ml elixir' },
      { label: '	CARDIXIN  0.25mg tab.' },
      { label: '	DIGICAP 0.2mg soft gelatin caps.' },
      { label: '	LANOXIN 0.25mg tab.' },
      { label: '	DIGICAP 0.1mg caps.' },
      { label: '	CARDICAPS 0.1mg soft gelatin caps.' },
      { label: '	LANOXIN 0.5mg/2ml amp.(Hospital)' },

      { label: '	CARDICAPS 0.2mg soft gelatin caps.' },
      { label: '	CARDIXIN 0.025gm% amp.' },
    ],
  },
  {
    label: '	DIHYDROCODEINE',
    tradeLabels: [{ label: '	PARACODIN RETARD syrup' }],
  },
  {
    label: '	DIHYDROERGOTAMINE',
    tradeLabels: [{ label: '	LOTENSE capsule 1.5 mg' }],
  },

  {
    label: '	DIHYDROTACHYSTEROL',
    tradeLabels: [{ label: '	A.T.10 1mg/ml inj.' }],
  },
  {
    label: '	DIHYDROXYACETONE',
    tradeLabels: [{ label: '	VI-HIDE 5% topical solution.' }],
  },
  {
    label: '	DIHYDROXYALUMINUM SODIUM CARBONATE',
    tradeLabels: [
      { label: '	ALUCAL 320mg chewable tab.' },
      { label: '	SEMICAL 500mg chewable tab.' },
    ],
  },

  {
    label: '	DIHYDROXYALUMINUM SODIUM CARBONATE+SIMETHICONE',
    tradeLabels: [{ label: '	ALUCAL PLUS chew. tab.' }],
  },
  {
    label: '	DIIODOHYDROXYQUINOLINE',
    tradeLabels: [
      { label: '	ENTEROQUIN 250mg tab.(APPROVED RE-REG)' },
      { label: '	ENTEROQUIN 250mg tab.(APPROVED RE-REG)' },
      { label: '	PARAMIBE 250mg tab.' },
    ],
  },
  {
    label: '	DIIODOHYDROXYQUINOLINE+HYOSCINE+STREPTOMYCIN',
    tradeLabels: [{ label: '	ENTOCID H tab.' }],
  },

  {
    label: '	DIIODOHYDROXYQUINOLINE+KAOLIN+NICOTINAMIDE+PECTIN+',
    tradeLabels: [],
  },
  {
    label: '	DIIODOHYDROXYQUINOLINE+METRONIDAZOLE',
    tradeLabels: [{ label: '	PARAMIBE COMPOUND tab.' }],
  },
  {
    label: '	DIIODOHYDROXYQUINOLINE+PHTHALYLSULFATHIAZOL+STREPT',
    tradeLabels: [{ label: '	Streptoquin  Tab' }],
  },

  {
    label: '	DILOXANIDE FUROATE',
    tradeLabels: [
      { label: '	FARCOMID 500mg tab.' },
      { label: '	CYSTAMEBE 500mg tab.' },
      { label: '	AMOEBYL 500mg tablets' },
      { label: '	FURAMEBE 500mg tab.' },
      { label: '	FURAMIDE TAB. 500 mg' },
    ],
  },
  {
    label: '	DILOXANIDE FUROATE+MEBEVERINE+METRONIDAZOLE',
    tradeLabels: [{ label: '	DIMETROL f.c.tab.' }],
  },

  {
    label: '	DILOXANIDE FUROATE+METRONIDAZOLE',
    tradeLabels: [
      { label: '	FURAZOLE tab.' },
      { label: '	FURAZOLE pediatric susp.' },
      { label: '	FURAZOLE pediatric susp.' },
      { label: '	FURAMEBE FORTE tab.' },
      { label: '	FURAMEBE FORTE tab.' },
      { label: '	FURAMEBE FORTE susp.' },
      { label: '	DILOZOLE susp.' },
      { label: '	DILOZOLE tab.' },

      { label: '	FARCOZOL PLUS susp.' },
      { label: '	FLAGIMIDE suspension for children' },
      { label: '	FLAGIMIDE tab.' },
      { label: '	FLAGIMIDE tab.' },
      { label: '	DIMETROL susp.' },
      { label: '	DILOZOLE tab.' },
    ],
  },

  {
    label: '	DILTIAZEM',
    tradeLabels: [
      { label: '	DELTIAZEM 60mg tab.' },
      { label: '	DELAY-TIAZEM SR 240 mg caps.' },
      { label: '	DELAY-TIAZEM SR 120 mg caps.' },
      { label: '	ANGITECT 60mg f.c.tab.' },
      { label: '	DILTACOR XL 180mg caps.' },
      { label: '	DILTIAZEM 120mg S.R.caps.' },
      { label: '	DILTIAZEM S.R.90mg caps.' },
      { label: '	DILTIAZEM SR 180mg caps.' },

      { label: '	DILZEM PARENTERAL 25 mg' },
      { label: '	ALTIAZEM 60mg tab.' },
      { label: '	MONO-TILDIEM 300 S.R caps.' },
      { label: '	MONO-TILDIEM 200 S.R caps.' },
      { label: '	DELAYTIAZEM SR 90 mg caps.' },
      { label: '	DELAY-TIAZEM  180  mg  SR caps.' },
      { label: '	TILDIEM 60mg tab.' },
      { label: '	TELZIM 90mg S.R.caps.' },
      { label: '	TELZIM 240mg S.R.caps.' },
      { label: '	PELTIAM 300mg S.R.caps.' },

      { label: '	PELTIAM 240mg S.R.caps.' },
      { label: '	PELTIAM 120mg caps.' },
      { label: '	SLOW-ZEM 120mg pellets in caps.' },
      { label: '	SLOW-ZEM 180mg pellets in caps.' },
      { label: '	SLOW-ZEM 90mg pellets in caps.' },
    ],
  },
  {
    label: '	DIMENHYDRINATE',
    tradeLabels: [
      { label: '	DIMENBYDRINATE B.P.93 tab.' },
      { label: '	DRAMENEX 50mg tab' },
      { label: '	DRAMENEX 50mg tab' },
    ],
  },

  {
    label: '	DIMETHICON+METOCLOPRAMIDE',
    tradeLabels: [
      { label: '	INDEST susp.' },
      { label: '	PRIMPEROXANE chewable tab.' },
    ],
  },
  {
    label: '	DIMETHICONE',
    tradeLabels: [
      { label: '	BEBETO 4 gm/100 ml oral drops' },
      { label: '	BARRISILIC 10gm/100gm cream' },
    ],
  },

  {
    label: '	DIMETHICONE+MAGALDRATE',
    tradeLabels: [
      { label: '	MAGSILON chew. tab.' },
      { label: '	MAGSILON susp.' },
      { label: '	RIOPAN PLUS susp.' },
    ],
  },
  {
    label: '	DIMETHICONE+MEBEVERINE',
    tradeLabels: [{ label: '	COLOVERIN-D f.c.tab.' }],
  },
  {
    label: '	DIMETHICONE+METOCLOPRAMIDE+VITAMIN B6',
    tradeLabels: [{ label: '	VOMISTOP soft gelatin caps.' }],
  },

  {
    label: '	DIMETHICONE+PIPENZOLATE BROMIDE',
    tradeLabels: [
      { label: '	HI-CALM drops(CANCELLED)' },
      { label: '	HI-CALM drops(CANCELLED)' },
    ],
  },
  {
    label: '	DIMETHICONE+ZINC OXIDE',
    tradeLabels: [{ label: '	ULTRA CARE cream' }, { label: '	ZINCOSIL cream' }],
  },
  {
    label: '	DIMETHINDENE',
    tradeLabels: [{ label: '	FENISTIL 0.1% topical gel' }],
  },

  {
    label: '	DIMETHINDENE+PHENYLEPHRINE',
    tradeLabels: [
      { label: '	VIBROCIL  nasal gel' },
      { label: '	VIBROCIL nasal spray' },
    ],
  },

  {
    label: '	DIMETINDENE MALEATE',
    tradeLabels: [
      { label: '	FENISTIL 1mg/ml oral drops' },
      { label: '	FENISTIL 4mg amp.' },
      { label: '	FENISTIL 1mg f.c.tab.' },
      { label: '	FENISTIL 24 (4mg) S.R.caps.' },
      { label: '	FENISTIL 0.01% syrup' },
    ],
  },

  {
    label: '	DINOPROSTONE',
    tradeLabels: [
      { label: '	ENZAPROST F 5mg/ml amp.' },
      { label: '	DINOGLANDIN E2 3mg vag. Tabs.' },
    ],
  },

  {
    label: '	DIOCTAHEDRAL SMECTITE',
    tradeLabels: [
      { label: '	DIOMACTE sachet' },
      { label: '	DIASMECT 20% susp.' },
      { label: '	SMECTA 3gm sachet' },
      { label: '	SMECTA 20% susp.' },
      { label: '	SMECTA 20% susp.' },
      { label: '	Smecta Pack' },
    ],
  },

  {
    label: '	DIOSMIN',
    tradeLabels: [
      { label: '	DIOSIMAX 600mg f.c.tab.' },
      { label: '	DIOSED 150mg tab.' },
      { label: '	DIFLORUTACINE 150mg sugar coated tab.' },
      { label: '	DIOVEN 150mg tab.' },
      { label: '	INSUVEN 300mg caps.' },
      { label: '	DIOSMIL 150 mg tab.' },
      { label: '	DIFLORUTACINE  500mg f.c. tabs.' },
      { label: '	DAFLON 375mg coated tab.' },

      { label: '	DIOVEN 500mg sugar f.c. tabs.' },
      { label: '	PHLEBODIA 600mg f.c.tab.' },
    ],
  },
  {
    label: '	DIOSMIN+HESPERIDIN',
    tradeLabels: [
      { label: '	DAFLON 500mg f.c. tab.' },
      { label: '	DAFREX f.c.tab.' },
      { label: '	DIOSMIN 500mg f.c.tab.' },
    ],
  },

  {
    label: '	DIOSMIN+HESPERIDIN+VITAMIN C',
    tradeLabels: [
      { label: '	DIOSED-C  tab.' },
      { label: '	VENO-WEST tab.' },
      { label: '	VEINATONIC tab.' },
    ],
  },
  {
    label: '	DIOXYBENZONE+HYDROQUINONE+OXYBENZONE+PADIMATE',
    tradeLabels: [{ label: '	SOLAQUIN FORTE 4% cream' }],
  },

  {
    label: '	DIPHENHYDRAMINE',
    tradeLabels: [
      { label: '	AVEOMARINE 25mg caps.' },
      { label: '	SULTAN 50mg caps.' },
      { label: '	SEPCODRYL 1gm/100ml lotion' },
    ],
  },
  {
    label: '	DIPHENHYDRAMINE+DEXTROMETHORPHAN+EPHEDRINE+GUAIFEN',
    tradeLabels: [],
  },
  {
    label: '	DIPHENHYDRAMINE+EPHEDRINE+GUAIFENESIN+THEOPHYLLINE',
    tradeLabels: [{ label: '	TUSSIPECT syrup' }],
  },

  {
    label: '	DIPHENHYDRAMINE+GUAIFENESIN+THEOPHYLLINE',
    tradeLabels: [{ label: '	TUSSIPECT-N syrup' }],
  },
  {
    label: '	DIPHENHYDRAMINE+GUAIPHENSIN+POTASSIUM CITRATE+TERB',
    tradeLabels: [],
  },
  {
    label: '	DIPHENHYDRAMINE+MENTHOL',
    tradeLabels: [{ label: '	BENYLIN paed.syrup' }],
  },
  {
    label: '	DIPHENHYDRAMINE+MENTHOL+ZINC ACETATE',
    tradeLabels: [{ label: '	ZIRA topical gel.' }],
  },

  {
    label: '	DIPHENHYDRAMINE+NAPHAZOLINE+ZINC SULPHATE',
    tradeLabels: [{ label: '	OCUMETHYL eye drops' }],
  },
  {
    label: '	DIPHENHYDRAMINE+PARACETAMOL+PSEUDOEPHEDRINE',
    tradeLabels: [
      { label: '	FEVER N FLU NIGHT TIME sachets' },
      { label: '	NIGHT & DAY N f.c.tablet' },
    ],
  },
  {
    label: '	DIPHENHYDRAMINE+ZINC ACETATE',
    tradeLabels: [{ label: '	INSECT BITE gel' }],
  },

  {
    label: '	DIPHENYLPYRALINE+ISOPROPAMIDE+PHENYLPROPANOLAMINE',
    tradeLabels: [{ label: '	ESKORNADE spansule caps.' }],
  },
  {
    label: '	DIPIVEFRIN',
    tradeLabels: [
      { label: '	GLAUCOTHIL 0.1% EYE DROPS' },
      { label: '	DIPIVEFRIN 1% eye drops' },
      { label: '	PROPINE 0.1 %' },
    ],
  },

  {
    label: '	DIPYRIDAMOLE',
    tradeLabels: [
      { label: '	ANA-PLATE 25mg tab' },
      { label: '	ANAPLATE 75mg sugar coated tab.' },
      { label: '	PRESSAVEIN 50mg f.c.tab.' },
      { label: '	PERSANTIN 75mg tab.' },
      { label: '	PRESSAVEIN 75mg f.c.tab.' },
    ],
  },

  {
    label: '	DIPYRONE',
    tradeLabels: [
      { label: '	NABALGIN  50gm/100ml oral drops' },
      { label: '	ANALGIN 500mg tab.' },
      { label: '	ANALGEX OBLONG 500mg f.c.tab.' },
      { label: '	NOVALGIN CHILDREN  300mg supp.' },
      { label: '	NOVACID 1000mg adult supp.' },
      { label: '	NOVACID 500mg tab.' },
      { label: '	NOVACID INFANTILE 300mg rectal supp.' },
      { label: '	NOVACID OBLONG 500 mg tab.' },

      { label: '	NOVALGIN 1gm infant supp.' },
      { label: '	NOVALGIN 500mg tab.' },
      { label: '	NOVALGIN 500mg/ml solution for I.M./I.V. inj.' },
      { label: '	NOVALGIN OBLONG 500mg f.c tab.' },
      { label: '	NOVALGIN 50mg/ml syrup' },
      { label: '	OBLONG PHARMALGIN 500mg tab.' },
      { label: '	PHARMALGIN 50 % amp.' },
      { label: '	PHARMALGIN syrup  5 %' },
      { label: '	PHARMALGIN DROPS 50 %' },
      { label: '	ANALGIN 500mg tab.' },
    ],
  },
  {
    label: '	DIPYRONE+HYOSCINE',
    tradeLabels: [
      { label: '	BUSCAMOL COMPOSITUM amp' },
      { label: '	BUSCOPAN COMPOSITUM amp.' },
      { label: '	BUSCOPAN COMPOSITUM  sugar coated tab.' },
    ],
  },
  { label: '	DIPYRONE+VITAMIN C', tradeLabels: [{ label: '	CEVAGINE IV amp.' }] },

  {
    label: '	DISODIUM CLODRONATE',
    tradeLabels: [
      { label: '	BONEFOS 400mg caps.' },
      { label: '	BONEFOS 60mg/ml concentrate' },
      { label: '	BONEFOS 60mg/ml amp.' },
    ],
  },
  {
    label: '	DISODIUM CROMOGLYCATE',
    tradeLabels: [{ label: '	VIVIDRIN 20mg/ml nasal spray' }],
  },
  {
    label: '	DISODIUM ETIDRONATE',
    tradeLabels: [{ label: '	EDRONAL 0.2gm tab.' }],
  },

  {
    label: '	DISODIUM PHOSPHATE+MONO SODIUM PHOSPHATE',
    tradeLabels: [{ label: '	ENEMAX enema' }],
  },
  { label: '	DISOPYRAMIDE', tradeLabels: [{ label: '	RYTHMODAN 100mg caps.' }] },
  {
    label: '	DISTIGMINE BROMIDE',
    tradeLabels: [
      { label: '	UBRETID 0.5mg/ml amp.' },
      { label: '	UBRETID 5 mg tab.' },
    ],
  },

  {
    label: '	DITHRANOL',
    tradeLabels: [{ label: '	PSORANOL 100mg/100gm cream' }],
  },
  {
    label: '	DIVALPROEX SODIUM',
    tradeLabels: [
      { label: '	DIVAKOTE 500mg SR.tab.' },
      { label: '	DIVAKOTE 250mg SR tab.' },
    ],
  },
  {
    label: '	DL-ALPHA TOCOPHEROL+ERGOCALCIFEROL+RETINOL+VITAMIN',
    tradeLabels: [],
  },

  {
    label: '	DOBUTAMINE',
    tradeLabels: [
      { label: '	DOBUJECT 50mg/ml amp.' },
      { label: '	DOBUTAMINE 250mg/5ml amp. For I.V. inf.' },
      { label: '	DOBUTREX 250mg I.V.vial' },
      { label: '	DOBUTAMINE 250mg/5ml amp. For I.V. inf.' },
      { label: '	DOBUTAMINE MERCK 250mg/20ml amp.' },
      { label: '	DOBUTREX SOLUTION 250 mg vial' },
    ],
  },

  {
    label: '	DOCETAXEL',
    tradeLabels: [
      { label: '	DAXOTEL 20mg/0.5ml injection concentrate.' },
      { label: '	DOCETAX INJECTION CONCENTRATE 20mg/0.5ml vial' },
      { label: '	DOCETAX INJECTION CONCENTRATE 20mg/0.5ml vial' },
      { label: '	DOCETAXEL FILAXIS 20mg/0.5ml vial' },
      { label: '	DAXOTEL 20mg/0.5ml injection concentrate.' },
      { label: '	DOCETAX INJECTION CONCENTRATE 20mg/0.5ml vial' },
      { label: '	DOCETAXEL FILAXIS 80mg/2ml vial' },
      { label: '	TAXOTERE 20mg/0.5 ml  I.V. infusion' },

      { label: '	TAXOTERE 80mg/2ml I.V. infusion' },
    ],
  },
  {
    label: '	DOCUSATE SODIUM',
    tradeLabels: [
      { label: '	SOBOCUSATE 120mg/10gm rectal micro enema' },
      { label: '	REGUTOL 20 mg/5 ml syrup' },
      { label: '	REGUTOL ENEMA  60 mg/5ml' },
      { label: '	SOLUWAX 5 % ear drops' },
    ],
  },
  { label: '	DOMIPHEN', tradeLabels: [{ label: '	BRADORAL 0.5mg lozenge' }] },

  {
    label: '	DOMPERIDONE',
    tradeLabels: [
      { label: '	MOTINORM 10mg infant supp.' },
      { label: '	MOTILIUM 10mg baby supp.' },
      { label: '	GASTROMOTIL 30mg supp.' },
      { label: '	GASTROMOTIL 60mg supp.' },
      { label: '	GASTROMOTIL 100mg/100ml susp.' },
      { label: '	GASTROMOTIL 10mg f.c. tab.' },
      { label: '	GASTROMOTIL 10mg supp.' },
      { label: '	FARCOTILIUM 10mg soft gelatin caps.' },

      { label: '	MOTINORM 10mg tab.' },
      { label: '	FARCOTILIUM 60mg supp' },
      { label: '	MOTINORM 10mg tab.' },
      { label: '	FARCOTILIUM 10mg infantile supp.' },
      { label: '	FARCOTILIUM 100mg/100ml susp.' },
      { label: '	GASTRONORM 10mg sachet' },
      { label: '	DOMPIDONE 10mg tab.' },
      { label: '	MOTILIUM 30 mg Supp.' },
      { label: '	DOMPERIDONE 10mg tab.' },
      { label: '	DOMPERIDONE 30mg supp.' },

      { label: '	DOMPERIDONE 60mg supp.' },
      { label: '	DOMPIDONE 10 mg supp. For babies' },
      { label: '	DOMPIDONE 100% oral susp' },
      { label: '	DOMPIDONE 10mg tab.' },
      { label: '	DOMPERIDONE 10mg supp.' },
      { label: '	MOTILIUM 10mg f.c.tab.' },
      { label: '	MOTINORM 60mg supp.' },
      { label: '	MOTINORM 30mg supp.' },
      { label: '	MOTILIUM 1mg/ml susp.' },
      { label: '	DOMPIDONE 30mg supp.for children' },

      { label: '	DOMPIDONE 60 mg supp.' },
      { label: '	MOTILIUM 1mg/ml susp.' },
      { label: '	DOMI-GEST 10mg sachets' },
      { label: '	MOTINORM susp.' },
      { label: '	MOTILIUM SUPP. 60 mg' },
      { label: '	SYNCHROGIT 10mg ped. Supp.' },
      { label: '	SYNCHROGIT 10mg tab.' },
      { label: '	SYNCHROGIT 30mg supp' },
    ],
  },

  {
    label: '	DONEPEZIL',
    tradeLabels: [
      { label: '	ADVODMONTACE 5mg orally disp. Tabs.' },
      { label: '	DONHIMER 5mg f.c.tab.' },
      { label: '	DONEPEZIL 5mg f.c.tab.' },
      { label: '	ALZIMER 10mg f.c.tab.' },
      { label: '	DONEPEZIL 5mg f.c.tab.' },
      { label: '	DONEPEZIL 10mg f.c.tab.' },
      { label: '	DONEPEZIL 10mg f.c tab.' },
      { label: '	ALKAPEZIL 10mg f.c.tab.' },

      { label: '	ARICEPT 10mg  f.c.tab.' },
      { label: '	ARICEPT 5mg tab.' },
      { label: '	ALZIMER 5mg f.c.tab.' },
      { label: '	ZYMADONE 10mg oral disintegrating tab.' },
    ],
  },
  {
    label: '	DOPAMINE',
    tradeLabels: [
      { label: '	INTROPIN 200mg amp.' },
      { label: '	DOPAMINE HYDROCHLORIDE B.P.88' },
      { label: '	DOPAMINE HYDROCHLORIDE 200mg/5ml amp. for I.V.inf.' },
      { label: '	DOPAMINE FRESENIUS 200mg/5ml amp. for I.V.inf.' },
    ],
  },

  {
    label: '	DORZOLAMIDE',
    tradeLabels: [
      { label: '	DORSOPT 2% eye drop' },
      { label: '	OZOLZMIDE 2% eye drops' },
      { label: '	TRUSOPT 2 % OPTHALMIC SOLUTION' },
      { label: '	XOLA 20mg/ml eye drops' },
    ],
  },

  {
    label: '	DORZOLAMIDE+TIMOLOL',
    tradeLabels: [
      { label: '	GLAUCOSOPT eye drops' },
      { label: '	EPISOPT eye drops' },
      { label: '	COSOPT eye drops' },
      { label: '	TWINZOL eye drops' },
      { label: '	XOLAMOL eye drops' },
    ],
  },
  { label: '	DOTHIEPIN', tradeLabels: [{ label: '	PROTHIADEN 75mg tab.' }] },

  { label: '	DOXAPRAM', tradeLabels: [{ label: '	DOPRAM 100mg amp.' }] },

  {
    label: '	DOXAZOSIN',
    tradeLabels: [
      { label: '	DOSIN 2mg tab.' },
      { label: '	DOXASTINE 2mg tab.' },
      { label: '	CARDURA XL4mg prolonged release tabs.' },
      { label: '	CARDURA 4mg tab.' },
      { label: '	CARDURA 1mg tab.' },
      { label: '	DOXACOR 2mg tab.' },
      { label: '	DOSIN 4mg tab.' },
      { label: '	DOSIN 1mg tab.' },

      { label: '	DOXACOR 4mg tab.' },
      { label: '	DOXAZOSIN STADA 1mg tab.' },
      { label: '	DOXAZIN-4 4mg tab.' },
      { label: '	DOXAZIN-1  1mg tab.' },
      { label: '	DURACIN 1mg tab.' },
      { label: '	DURACIN 4mg tab.' },
    ],
  },
  {
    label: '	DOXAZOSIN+PYGEUM AFRICANUM EXTRACT',
    tradeLabels: [{ label: '	PROSTACURE  PLUS caps.' }],
  },

  {
    label: '	DOXORUBICIN',
    tradeLabels: [
      { label: '	DOXORUBICIN " Ebewe"  2mg/ml vial' },
      { label: '	ADRICIN 10mg/5ml vial for I.V. inj..' },
      { label: '	ADRIBLASTINA R.D 10mg vial.' },
      { label: '	ADRICIN 50mg vial' },
      { label: '	DOXORUBICIN Tedec 10mg vial' },
      { label: '	DOXORUBICIN HYDROCHLORIDE 50mg/25ml vial' },
      { label: '	DOXORUBICIN TEDEC 50mg vial' },
      { label: '	DOXORUBICIN " Ebewe"  2mg/ml vial' },

      { label: '	DOXORUBICIN STADA 2mg/ml vial' },
      { label: '	DOXORUBICIN STADA 2mg/ml vial' },
      { label: '	ADRIBLASTINA R.D 50mg vial' },
      { label: '	DOXORUBICIN STADA 2mg/ml vial' },
      { label: '	DOXORUBICIN HYDROCHLORIDE 10mg/5ml vial' },
      { label: '	DOXORUBIN 50mg vial' },
      { label: '	ONCODOX-50 50mg vial' },
      { label: '	ONCODOX 10mg vial' },
    ],
  },

  {
    label: '	DOXYCYCLINE',
    tradeLabels: [
      { label: '	FARCODOXIN 100mg hard gelatin capsule' },
      { label: '	DOXY M.R.100mg caps.' },
      { label: '	DOXYCOST 200mg tabs.' },
      { label: '	DOXYCYCLINE 100mg caps.' },
      { label: '	DOXYMYCIN 100mg caps.' },
      { label: '	GRANUDOXY 100mg divisible f.c.tab.' },
      { label: '	TOLEXINE 100mg caps.' },
      { label: '	VIBRAMYCIN 100mg caps.' },

      { label: '	TOLEXINE 50mg caps.' },
      { label: '	TABOCINE 100mg caps.' },
    ],
  },
  {
    label: '	DOXYCYCLINE+OMEPRAZOLE+TINIDAZOLE',
    tradeLabels: [{ label: '	TRIO caps.' }],
  },
  {
    label: '	DOXYLAMINE SUCCINATE',
    tradeLabels: [
      { label: '	DONORMYL 15mg f.c. tab.' },
      { label: '	ADWISOMN 25mg soft gelatin caps.' },
    ],
  },

  {
    label: '	D-PANTHENOL+PILOCARPINE+QUININE',
    tradeLabels: [{ label: '	HAIRGREW lotion' }],
  },
  {
    label: '	DRIED PSYLLIUM SEEDS HEMICELLULOSE',
    tradeLabels: [{ label: '	LAXIPLANT GRANULES 50mg' }],
  },
  { label: '	DROPRIPIZINE', tradeLabels: [{ label: '	TUSSAPIN 20mg lozenge' }] },

  {
    label: '	DROTAVERINE',
    tradeLabels: [
      { label: '	DO-SPA 40 mg tab.' },
      { label: '	DO-SPA 40mg/2ml amp.' },
      { label: '	DO-SPA 40 mg tab.' },
      { label: '	SPASMOCURE 60mg tab.' },
      { label: '	SPASMOCURE 40mg/2ml amp.' },
    ],
  },
  {
    label: '	DROTAVERINE+NIFUROXAZIDE',
    tradeLabels: [{ label: '	DROTAZIDE caps.' }],
  },

  {
    label: '	DROTAVERINE+PARACETAMOL',
    tradeLabels: [{ label: '	ANASPASM  tab.' }],
  },
  {
    label: '	DRY EXTRACT OF THE FRUIT OF THE CHASTE TREE',
    tradeLabels: [{ label: '	AGNUCASTON 20mg f.c.tab.' }],
  },
  {
    label: '	DULCAMARAE STIPITES',
    tradeLabels: [
      { label: '	CEFABENE 10 gm oint.' },
      { label: '	CEFABENE TAB. 200 mg' },
    ],
  },

  {
    label: '	DULOXETINE',
    tradeLabels: [
      { label: '	CYMBALTA 30mg hard gastro-resistant caps.' },
      { label: '	CYMBALTA 60mg Hard Gastro-Resistant caps.' },
    ],
  },
  {
    label: '	DUTASTERIDE',
    tradeLabels: [
      { label: '	AVODART 0.5mg soft gelatin caps.' },
      { label: '	SIGDUTASTER 0.5mg Soft Gelatin Capsule' },
    ],
  },
  {
    label: '	DYDROGESTERONE',
    tradeLabels: [{ label: '	DUPHASTON 10mg f.c.tab.' }],
  },

  {
    label: '	DYPHYLLINE+GUAIFENESIN',
    tradeLabels: [
      { label: '	VENTOBRONCHAL PLUS tab.' },
      { label: '	VENTOBRONCHAL PLUS syrup' },
    ],
  },

  {
    label: '	EBASTINE',
    tradeLabels: [
      { label: '	EBASTEL 10mg tab.' },
      { label: '	KESTINE 10mg tab.' },
      { label: '	ASTIN 5mg/5ml syrup' },
      { label: '	BASTAB 20mg tab.' },
      { label: '	EVASTINE 10mg f.c.tab.' },
      { label: '	EVASTINE 5mg/5ml syrup' },
      { label: '	ASTIN 20mg f.c.tab.' },
      { label: '	ASTIN 10mg tab.' },
    ],
  },

  {
    label: '	ECHINACEAE ANGUSTIFOLIA EXT.+SABAL EXTRACT+TROSPIU',
    tradeLabels: [],
  },
  {
    label: '	ECHINACEAE PURPUREA+VITAMIN C',
    tradeLabels: [{ label: '	IMMULONE tab' }],
  },
  {
    label: '	ECHINACEAE PURPUREA+VITAMIN C+ZINC',
    tradeLabels: [{ label: '	IMMUNO FLU soft gelatin capsule.' }],
  },

  {
    label: '	ECONAZOLE',
    tradeLabels: [
      { label: '	GYNORYL 50mg vag.ovules' },
      { label: '	ECODERM 1% topical lotion' },
      { label: '	ECODERM 1gm cream' },
      { label: '	ECONAZOLE 1% vag. Cream' },
      { label: '	ECONAZOLE 1%Topical spray' },
      { label: '	GYNO-PEVARYL 1% vaginal cream' },
      { label: '	GYNORYL  1% vag.cream' },
      { label: '	FUNGRYL   15 spray solution' },

      { label: '	FUNGRYL  1% topical cream' },
      { label: '	GYNORYL 150mg vag.supp.' },
      { label: '	CONATRATE 1% topical cream' },
      { label: '	PEVARYL 1% topical powder' },
      { label: '	PEVARYL 1% topical cream' },
    ],
  },
  {
    label: '	ECONAZOLE NITRATE+HYDROCORTISONE',
    tradeLabels: [{ label: '	RIPICONAZOLE topical cream' }],
  },

  {
    label: '	ECONAZOLE+FUCIDIC ACID+TANNIC ACID+TRIAMCINOLONE',
    tradeLabels: [{ label: '	ROFA gel' }],
  },
  {
    label: '	ECONAZOLE+TRIAMCINOLONE',
    tradeLabels: [
      { label: '	DERMALONE cream' },
      { label: '	PEVISONE topical cream' },
    ],
  },
  {
    label: '	EGG PHOSPHOLIPIDS+SOYA BEAN OIL',
    tradeLabels: [
      { label: '	INTRALIPID 20% emulsion for infusion' },
      { label: '	INTRALIPID 10 % emulsion for infusion.' },
    ],
  },

  {
    label: '	ELDER FLOWERS+GENTIAN ROOT+PRIMOSE FLOWERS+SHOP VE',
    tradeLabels: [],
  },
  { label: '	ELETRIPTAN', tradeLabels: [{ label: '	RELPAX 40mg f.c.tab.' }] },
  { label: '	EMEDASTINE', tradeLabels: [{ label: '	EMADINE 0.05% eye drops' }] },
  { label: '	EMETINE', tradeLabels: [{ label: '	EMETINE HCL inj E.P84' }] },

  {
    label: '	ENALAPRIL',
    tradeLabels: [
      { label: '	ENALAP 20mg tab.' },
      { label: '	ENALAPRIL MALEATE 5mg tab.U.S.P 28' },
      { label: '	LOTRIAL 20mg tab.' },
      { label: '	LOTRIAL 10mg tab.' },
      { label: '	EZAPRIL 10mg tab.' },
      { label: '	ENALAPRIL MALEATE 20mg tab.' },
      { label: '	ACAPRIL 20mg tab.' },
      { label: '	ACAPRIL 5 mg tab.' },

      { label: '	RENITEC 20mg tab.' },
      { label: '	RENITEC 5mg tab.' },
      { label: '	PRESSLIGHT 5mg tab.' },
      { label: '	PRESSLIGHT 10mg tab.' },
    ],
  },
  {
    label: '	ENALAPRIL+HYDROCHLOROTHIAZIDE',
    tradeLabels: [
      { label: '	EZAPRIL-CO tab' },
      { label: '	ENALAZIDE tab.' },
      { label: '	CO-RENITEC 20/12.5mg tab.' },
      { label: '	THIAZOPRIL 12.5/20mg tab.' },
    ],
  },

  {
    label: '	ENOXACIN',
    tradeLabels: [{ label: '	MAGNAFLOXACIN 400mg f.c.tab.' }],
  },

  {
    label: '	ENOXAPARIN SODIUM',
    tradeLabels: [
      { label: '	CLEXANE 40mg/0.4ml prefilled syringe' },
      { label: '	CLEXANE 80 mg/0.8ml prefilled syringe.' },
      { label: '	CLEXANE 20mg/0.2ml prefilled syringe' },
      { label: '	CLEXANE 60mg/0.6ml prefilled syringe' },
      { label: '	LOWPARIN 60mg/0.6ml soln. for S.C Injection' },
      { label: '	LOWPARIN 40mg/0.4ml S.C.amp.' },
    ],
  },

  {
    label: '	ENTACAPONE',
    tradeLabels: [
      { label: '	COMTAN 200mg f.c.tab.' },
      { label: '	PARKICAPONE 200mg f.c. tab.' },
      { label: '	DIOCTAHEDRAL SMECTITE' },
    ],
  },
  {
    label: '	ENZYMES',
    tradeLabels: [
      { label: '	NUTRIZYM 400mg f.c.tab.' },
      { label: '	SPASMO AMRASE enteric coated tab.' },
    ],
  },

  {
    label: '	EPHEDRINE',
    tradeLabels: [
      { label: '	EPHEDRINE SULPHATE 25mg/ml amp. USP 27' },
      { label: '	EPHEDRINE 30mg/ml amp.' },
    ],
  },
  {
    label: '	EPHEDRINE HCL+BENZOCAINE+ZINC OXIDE+LIQUID EXTRACT',
    tradeLabels: [],
  },
  {
    label: '	EPHEDRINE+HYDROXYZINE+THEOPHYLLINE',
    tradeLabels: [{ label: '	BRONCHALIN  tab.' }],
  },

  {
    label: '	EPHEDRINE+NAPHAZOLINE',
    tradeLabels: [{ label: '	DELTARHINO nasal spray' }],
  },
  {
    label: '	EPHEDRINE+PHENOBARBITONE+THEOPHYLLINE',
    tradeLabels: [{ label: '	ASMOLIN tab.' }, { label: '	TEPEDRONE tab.' }],
  },
  { label: '	EPINASTINE', tradeLabels: [{ label: '	RELESTAT 0.05% eye drops' }] },

  {
    label: '	EPIRUBICIN',
    tradeLabels: [
      { label: '	EPIZIN 50mg vial for I.V. inf.' },
      { label: '	EPIZIN 10mg vial for I.V. inj./inf.' },
      { label: '	FARMORUBICIN RD 10mg vial' },
      { label: '	FARMORUBICIN  RD 50mg vial' },
      { label: '	EPIRUBICIN "EBEWE" 2 mg/ml vial' },
      { label: '	EPIRUBICIN "EBEWE" 2 mg/ml vial' },
    ],
  },

  {
    label: '	EPOETIN BETA',
    tradeLabels: [{ label: '	RECORMON 2000 I.U./0.3ml prefilled syringe.' }],
  },
  {
    label: '	EPROSARTAN',
    tradeLabels: [
      { label: '	TEVETEN 600mg  f.c.tab.' },
      { label: '	TEVETEN PLUS 600/12.5mg  f.c.tab.' },
    ],
  },

  {
    label: '	ERDOSTEINE',
    tradeLabels: [
      { label: '	MUCOTEC 300mg hard gelatin caps.' },
      { label: '	MUCOTEC 150mg caps.' },
      { label: '	ERDOTINOL 300mg hard gelatin caps.' },
    ],
  },
  {
    label: '	ERGOLOID MESYLATES',
    tradeLabels: [{ label: '	LATERGAL INJ. 0.3  mg' }],
  },
  {
    label: '	ERTAPENEM',
    tradeLabels: [
      { label: '	INVANZ 1 gm pd. for concentrate for solution for inf.' },
    ],
  },

  {
    label: '	ERYTHROMYCIN',
    tradeLabels: [
      { label: '	ERYTHROMYCIN  500mg tab.' },
      { label: '	ERYTHROMICIN 0.5% eye ointment' },
      { label: '	ERYTHROCIN tab. 500 mg' },
      { label: '	ERYTHROCIN 250 mg tab' },
      { label: '	ERYTHROCIN 200 mg/5ml granules for oral suspension' },
      { label: '	ERYTHROMYCIN INSTANT 250mg/5ml susp' },
      { label: '	ERYTHRIN 500mg f.c.tab.' },
      { label: '	ERYTHROMYCIN STEARATE 250mg  B.P.2004 f.c. tab.' },

      { label: '	ERYTHRIN 250mg f.c.tab.' },
      { label: '	ERYTHRIN 200mg/5ml susp.' },
      { label: '	ERYTHRIN 2 % gel' },
      { label: '	ERYTHRIN 125 mg supp.' },
      { label: '	ERYTHRIN 100 mg/2.5 ml drops' },
      { label: '	AKNEMYCIN 2% solution' },
      { label: '	ERYTHRIN 1.5% lotion' },
      { label: '	ERYTHROCID 40mg/ml powder for oral drops' },
      { label: '	ERYTHROMYCIN PHARCO 200mg/5ml susp.' },
      { label: '	ERYTHROMYCIN STEARATE 500 mg  B.P.2004 f.c. tab.' },

      { label: '	ERYTHRORIV 200mg/5ml susp.' },
      { label: '	AKNEMYCIN 2% oint.' },
      { label: '	ERYTHROMYCIN LACTOBIONATE 1 GM FOR INTRAVENOUS INFUSION' },
      { label: '	ACNI-CARE 2% top. Gel.' },
      { label: '	ACNI-CARE  2% lotion' },
      { label: '	ETHROCIN f.c.tab.' },
      { label: '	STATICIN 1.5% topical solution' },
    ],
  },
  {
    label: '	ERYTHROMYCIN+SULFISOXAZOLE',
    tradeLabels: [{ label: '	PEDIAZOLE  suspension' }],
  },

  {
    label: '	ERYTHROMYCIN+TRETINOIN',
    tradeLabels: [
      { label: '	ERYTIN  gel' },
      { label: '	E-RETIN lotion' },
      { label: '	ERYTIN  gel' },
    ],
  },

  {
    label: '	ERYTHROMYCIN+TRIMETHOPRIM',
    tradeLabels: [
      { label: '	ERYTHROPRIM dry susp.' },
      { label: '	ERYTHROPRIM f.c.tab.' },
      { label: '	MACROPRIM 660mg tab.' },
      { label: '	PRIMOMYCIN caps.' },
      { label: '	PRIMOMYCIN susp.' },
    ],
  },

  {
    label: '	ERYTHROMYCIN+ZINC ACETATE',
    tradeLabels: [
      { label: '	ACNE BIOTIC paint' },
      { label: '	ACNE ZINCOMYCIN topical solution' },
    ],
  },
  {
    label: '	ERYTHROPOIETIN',
    tradeLabels: [
      { label: '	PRONIVEL 2000 I.u vial' },
      { label: '	PRONIVEL 4000I.u vial' },
    ],
  },

  {
    label: '	ERYTHROPOIETIN-ALPHA',
    tradeLabels: [
      { label: '	ERYPOIETIN 4000 I.U./vial' },
      { label: '	EPOTIN 4000I.U/1ml S.C/I.V vial' },
      { label: '	E.P.O. 4000I.U. I.V./S.C.vial' },
      { label: '	E.P.O. 3000I.U. I.V./S.C.vial' },
      { label: '	E.P.O. 2000I.U. I.V./S.C.vial' },
      { label: '	EPIAO 10000I.u./ml vial' },
      { label: '	EPIAO 2000I.U./ml vial' },
      { label: '	EPIAO 4000I.U./ml vial' },

      { label: '	EPOETIN SEDICO 2000I.u./ml Vial.' },
      { label: '	EPOETIN SEDICO 4000I.u./ml Vial.' },
      { label: '	EPOFORM 2000I.U/vial' },
      { label: '	EPOJET 10000I.u./ml prefilled syringe' },
      { label: '	EPOJET 2000I.u./0.5ml prefilled syringe' },
      { label: '	ERYPOIETIN 1000 I.U. vial' },
      { label: '	EPOTIN 2000I.U./ml S.C./I.V.vial' },
      { label: '	ERYPOIETIN 3000 I.U. vial' },
      { label: '	EPREX  4000 I.U./ml vial' },
      { label: '	EPREX  4000 I.U./ml vial' },

      { label: '	EPREX 10,000 I.u./ml prefilled syringe' },
      { label: '	EPREX 1000 I.U./0.5ml prefilled syringe' },
      { label: '	EPREX 1000 I.U./0.5ml prefilled syringe' },
      { label: '	EPREX 10000 I.U./ml vial' },
      { label: '	EPREX 2000 I.U./0.5ml prefilled syringe' },
      { label: '	EPREX 2000 I.U./ml vial' },
      { label: '	EPOFORM 4000I.U/vial' },
      { label: '	EPREX 4000 I.U./0.4ml prefilled syringe' },
      { label: '	ERYPOIETIN 10000 I.U. vial' },
      { label: '	ERYPOIETIN 2000 I.U./vial' },

      { label: '	EPOJET 4000I.u./0.4ml prefilled syringe' },
      { label: '	EPOFORM 10000I.U./ml vial' },
    ],
  },
  {
    label: '	ERYTHROPOIETIN-BETA',
    tradeLabels: [
      { label: '	RECORMON 5000I.u.vial' },
      { label: '	RECORMON 1000 IU vial' },
      { label: '	RECORMON 2000I.u.vial' },
    ],
  },

  {
    label: '	ESCITALOPRAM',
    tradeLabels: [
      { label: '	CIPRAPRO 20mg f.c.tab.' },
      { label: '	CIPRALEX 10mg f.c.tab.' },
      { label: '	CIPRAPRO 10mg f.c.tab.' },
      { label: '	ESCITA 10mg f.c.tab.' },
      { label: '	ESCITALOPRAM 20mg f.c. tabs.' },
      { label: '	CITALOMEP 20mg f.c.tab.' },
      { label: '	ESCITAPRAM 20mg f.c. tabs.' },
      { label: '	ESTIKAN 20mg f.c.tab.' },

      { label: '	HERMPRO 10mg f.c. tabs.' },
      { label: '	NODEP 10mg f.c.tab.' },
      { label: '	CIPRA PRO 10mg tab.' },
    ],
  },
  {
    label: '	ESMOLOL',
    tradeLabels: [
      { label: '	BREVIBLOC VIAL 10 mg/ml' },
      { label: '	BREVIBLOC 2.5 gm/10 ml AMP.' },
    ],
  },

  {
    label: '	ESOMEPRAZOLE',
    tradeLabels: [
      { label: '	NEXIUM 20mg f.c.tab.' },
      { label: '	ESMOPUMP 20mg f.c.tabs.' },
      { label: '	ESO-PROCTOL  delayed release  pellets in hard gelatin cap.' },
      { label: '	KLEMAZICE  40mg D.R.E.C pellets in hard gelatin caps.' },
      { label: '	ESMOPUMP 40mg f.c. tabs.' },
      { label: '	ESOMEPEX 40 mg enteric coated tab.' },
      { label: '	AUG Isoprazole 20mg enteric f.c. tabs.' },
      { label: '	EZOGAST 40mg delayed release caps.' },

      { label: '	EZOGAST  20mg Delayed Release Pellets in Capsule' },
      { label: '	NEXIUM 40mg f.c.tab.' },
      { label: '	NEXIUM 40mg I.V.vial.' },
      { label: '	AUG ISOPRAZOLE  40mg enteric f.c. tabs.' },
      { label: '	NIXPRAZOLE  40mg Delayed Release Hard Gelatin Capsule' },
    ],
  },

  {
    label: '	ESTRADIOL',
    tradeLabels: [
      { label: '	ESTRADERM MX 25 patch' },
      { label: '	FOLONE  5mg amp.' },
      { label: '	FEM 7 1% transdermal patches.' },
      { label: '	ETHINYL OESTRADIOL 50mcg tab.' },
      { label: '	FEM 7 1% transdermal patches.' },
      { label: '	ESTRADERM MX  50 patch' },
      { label: '	ESTRADERM MX  50 patch' },
      { label: '	ESTRADERM MX 25 patch' },

      { label: '	FEM 7 1% transdermal patches.' },
      { label: '	ESTRADERM TTS 50 patch' },
      { label: '	OESTROGEL GEL 0.06 %' },
      { label: '	PRIMOGYN DEPOT 10mg/ml I.M.amp.' },
    ],
  },
  {
    label: '	ESTRADIOL VALERATE+PRASTERONE ENANTHATE',
    tradeLabels: [{ label: '	CIDODIAN DEPOT I.M.amp.' }],
  },
  {
    label: '	ESTRADIOL+LEVONORGESTREL',
    tradeLabels: [{ label: '	CYCLO-PROGYNOVA f.c. tab.(Biphasic)' }],
  },

  {
    label: '	ESTRADIOL+NORETHISTERONE',
    tradeLabels: [
      { label: '	MESOCEPT amp.' },
      { label: '	ESTRACOMBI TTS 50 patch' },
      { label: '	ESTRACOMBI TTS 50 patch' },
      { label: '	ACTIVELLE tab.' },
      { label: '	KLIOGEST f.c.tab.' },
      { label: '	MESIGYNA amp.' },
      { label: '	TRISEQUENS f.c.tab.(Triphasic)' },
    ],
  },

  {
    label: '	ESTRADIOL+PROGESTERONE',
    tradeLabels: [{ label: '	LUTOFOLONE amp.' }, { label: '	PRIMOSISTON amp.' }],
  },
  {
    label: '	ESTRIOL',
    tradeLabels: [
      { label: '	OVESTIN 2 mg tab' },
      { label: '	OVESTIN 1mg tab' },
      { label: '	OVESTIN 0.5mg vaginal supp.' },
      { label: '	OVESTIN cream 1 mg' },
    ],
  },

  {
    label: '	ESZOPICLONE',
    tradeLabels: [{ label: '	NIGHT CALM 3mg f.c. tabs.' }],
  },
  { label: '	ETHAMBUTOL', tradeLabels: [{ label: '	T.B.TOL 100mg f.c.tab.' }] },
  {
    label: '	ETHAMBUTOL+ISONIAZID+PYRAZINAMIDE+RIFAMPICIN',
    tradeLabels: [{ label: '	RIMSTAR 4 FDC f.c.tab.' }],
  },

  { label: '	ETHAMIVAN', tradeLabels: [{ label: '	ALERTIN 20mg coated tab.' }] },

  {
    label: '	ETHAMSYLATE',
    tradeLabels: [
      { label: '	HAEMOSTAT 250mg tab.' },
      { label: '	DICYNONE 250mg tab.' },
      { label: '	HAEMOSTATINE 250mg tab.' },
      { label: '	HAEMOSTOP 250mg tab.' },
      { label: '	HAEMOSTOP 250mg/2ml amp.' },
      { label: '	ETACYNONE 500mg tab.' },
      { label: '	ETACYNONE 250mg/2ml amp.' },
      { label: '	HAEMOSTOP 500mg f.c.tab.' },

      { label: '	ESELINATE 250mg tab.' },
      { label: '	DICYNONE 250mg/2ml amp.' },
      { label: '	ETACYNONE 250mg tab.' },
      { label: '	ESELINATE 250mg/2ml amp.' },
      { label: '	HEMOSTAT 500mg tablet' },
      { label: '	DICYNONE 500mg tab.' },
      { label: '	HEMOSTAT 250mg/2ml I.M/I.V amp.' },
    ],
  },

  {
    label: '	ETHINYL ESTRADIOL',
    tradeLabels: [
      { label: '	ETHINYL OESTRADIOL 10 mcg tab' },
      { label: '	ETHINYLESTRADIOL 500mcg tab. B.P.98' },
    ],
  },
  {
    label: '	ETHINYL ESTRADIOL+DROSPIRENONE',
    tradeLabels: [{ label: '	YASMIN f.c.tab.' }],
  },
  {
    label: '	ETHINYL ESTRADIOL+ETONOGESTREL',
    tradeLabels: [{ label: '	NUVARING vaginal ring' }],
  },

  {
    label: '	ETHINYL ESTRADIOL+GESTODENE',
    tradeLabels: [{ label: '	GYNERA coated tab.' }, { label: '	MINULET tab.' }],
  },

  {
    label: '	ETHINYL ESTRADIOL+LEVONORGESTREL',
    tradeLabels: [
      { label: '	MICROVLAR tab.' },
      { label: '	MICROCEPT tab.' },
      { label: '	TRINORDIOL tab.(Triphasic)' },
      { label: '	TRIOVLAR tab.(Triphasic)' },
      { label: '	TRIOCEPT tab.(triphasic)' },
      { label: '	NORDETTE tab.' },
    ],
  },

  {
    label: '	ETHINYL ESTRADIOL+NORGESTIMATE',
    tradeLabels: [{ label: '	CILEST tab.' }],
  },
  {
    label: '	ETHINYL ESTRADIOL+TESTOSTERONE',
    tradeLabels: [{ label: '	PRIMODIAN DEPOT amp.' }],
  },

  {
    label: '	ETHOSUXIMIDE',
    tradeLabels: [
      { label: '	ETHOXA 250mg/5ml syrup' },
      { label: '	ETHOXA 250mg hard gelatin caps.' },
      { label: '	ZARONTIN 250 mg/5 ml syrup' },
      { label: '	ZARONTIN 250mg caps.' },
    ],
  },
  {
    label: '	ETHYL CHLORIDE',
    tradeLabels: [{ label: '	ETHYL CHLORIDE 88gm/100ml topical spray' }],
  },
  {
    label: '	ETHYL SALICYLATE+HYDROXYETHYL SALICYLATE+METHYL NI',
    tradeLabels: [],
  },

  {
    label: '	ETHYLENDIAMINE+THEOPHYLLINE',
    tradeLabels: [
      { label: '	CIDOPHYLLINE I.V.amp.' },
      { label: '	MINOPHYLLINE-N 2.5% I.V.amp.' },
    ],
  },
  {
    label: '	ETIDRONATE',
    tradeLabels: [
      { label: '	ETIDRON 200mg tab.' },
      { label: '	OSSIDRON 0.3gm/6ml I.V.amp.' },
    ],
  },

  {
    label: '	ETILEFRINE',
    tradeLabels: [
      { label: '	EFFORTIL 0.75gm/100gm oral drops' },
      { label: '	EFFORTIL 5mg tab.' },
      { label: '	VASCON  5mg tab.' },
      { label: '	VASCON 1% oral drops' },
    ],
  },

  {
    label: '	ETODOLAC',
    tradeLabels: [
      { label: '	MAGICDOLAC 300mg soft gelatin cap.' },
      { label: '	NAPILAC 200mg caps.' },
      { label: '	ETODOLAC 300mg tab.' },
      { label: '	ETODINE 300mg soft gelatin caps.' },
      { label: '	ETODINE 200mg soft gelatin caps.' },
      { label: '	ETODOLAC 600mg Extented Release tablets' },
    ],
  },

  {
    label: '	ETOFENAMATE',
    tradeLabels: [
      { label: '	PROMATIC 5% top. Gel' },
      { label: '	PROMATIC 5% top. Gel' },
      { label: '	RHEUMAGEL 50mg gel' },
    ],
  },
  {
    label: '	ETOFIBRATE',
    tradeLabels: [
      { label: '	LIPO-MERZ RETARD 500mg caps.' },
      { label: '	LIPO-MERZ RETARD 500mg caps.' },
    ],
  },

  {
    label: '	ETOPOSIDE',
    tradeLabels: [
      { label: '	FYTOSID 100mg/5ml vial' },
      { label: '	ETOPOSID "Ebewe" 20mg/ml vial' },
      { label: '	ETOPOSID "Ebewe" 20mg/ml vial' },
      { label: '	ETOSID 50mg soft gelatin caps.' },
      { label: '	ETOPOSIDE MERCK 100mg/5ml vial' },
      { label: '	ETOSID 100mg/5ml vial' },
      { label: '	LASTET 100mg/5ml amp.' },
      { label: '	EPOSIN 20mg/ml vial' },

      { label: '	LASTET 50mg caps.' },
      { label: '	ETOPUL 100mg/5ml sol. For I.V inj. Or I.V. inf.' },
      { label: '	VEPESID 50mg caps.' },
      { label: '	VEPESID 100mg/5ml inj.' },
    ],
  },
  {
    label: '	EUCALYPTOL+MENTHOL+METHYL SALICYLATE+THYMOL',
    tradeLabels: [
      { label: '	MINTOLINE mouth wash & gargle' },
      { label: '	ORASTRINE mouth wash' },
      { label: '	ORASTRINE mouth wash' },
    ],
  },

  {
    label: '	EUCALYPTUS OIL+MENTHOL+METHYL SALICYLATE+TERPENTIN',
    tradeLabels: [],
  },
  {
    label: '	EUCALYPTUS+FENNEL+LIQUORICE+MELISSA+SALVIA+THYME+V',
    tradeLabels: [],
  },
  {
    label: '	EUSELX OILY+HYDROCORTISONE ACETATE+HYDROQUINONE+TR',
    tradeLabels: [],
  },

  {
    label: '	EVEROLIMUS',
    tradeLabels: [
      { label: '	CERTICAN 0.25mg tab' },
      { label: '	CERTICAN 0.5mg tab.' },
      { label: '	CERTICAN 0.75mg tab.' },
      { label: '	CERTICAN 1mg tab.' },
    ],
  },

  {
    label: '	EXTRACT FREE FROM CALVES BLOOD',
    tradeLabels: [
      { label: '	SOLCOSERYL 5% oint.' },
      { label: '	SOLCOSERYL jelly' },
      { label: '	SOLCOSERYL 42.5mg/ml amp.' },
      { label: '	SOLCOSERYL 42.5mg/ml amp.' },
      { label: '	SOLCESERYL amp' },
    ],
  },

  {
    label: '	EZETIMIBE',
    tradeLabels: [
      { label: '	CHOLSTOP 10mg tab' },
      { label: '	CHOLETIMB 10 mg tablet' },
      { label: '	EZETIMIBE 10mg tabs.' },
      { label: '	EZETROL 10mg tab.' },
      { label: '	ZETLIP 10mg tab.' },
      { label: '	ZETAMIBE 10mg tab.' },
    ],
  },

  {
    label: '	EZETIMIBE+SIMVASTATIN',
    tradeLabels: [
      { label: '	DOWNSTEROLIN 10/20mg f.c. tabs.' },
      { label: '	INEGY 10/10mg tab.' },
      { label: '	ALKOR PLUS 10/40mg tab' },
      { label: '	LIPITRIN 10/40 mg tab.' },
      { label: '	LIPITRIN 10/20mg tab.' },
      { label: '	LIPITRIN 10/10mg tab.' },
      { label: '	INEGY 10/20mg tabs.' },
      { label: '	DOWNSTEROLIN 10/40mg f.c. tabs.' },

      { label: '	CAZET 10/40 f.c.tab.' },
      { label: '	CAZET 10/20 f.c. tab.' },
      { label: '	ALKOR PLUS 10/20mg tab.' },
      { label: '	INEGY 10/40mg tablet' },
      { label: '	CAZET 10/10  f.c. tab.' },
      { label: '	ZETLIP PLUS 10/40 f.c.tab.' },
      { label: '	ZETLIP PLUS 10/20 f.c.tab.' },
      { label: '	SIMVAXIBE  10/20mg f.c. tabs.' },
      { label: '	ZOCOZET 10/20mg f.c.tab.' },
      { label: '	ZOCOZET 10/10 f.c.tab.' },

      { label: '	SIMVAXIBE 10/10mg f.c.tab.' },
      { label: '	SIMVAXIBE 10/40mg f.c.tab.' },
      { label: '	SIMVA-MAP 10/80mg bilayer f.c.tab.' },
      { label: '	SIMVA-MAP 10/40mg bilayer f.c.tab.' },
      { label: '	SIMVA-MAP 10/20mg bilayer f.c.tab.' },
      { label: '	SIMVA-MAP 10/10mg bilayer f.c.tab.' },
    ],
  },

  {
    label: '	FAMCICLOVIR',
    tradeLabels: [
      { label: '	EACLOVIR  500mg f.c. tabs.' },
      { label: '	FAMVIR 250mg f.c. tab.' },
      { label: '	FAMVIR 125mg tab.' },
      { label: '	PROPENCIVIR 125mg f.c.tab.' },
      { label: '	PROPENCIVIR 500mg f.c.tab.' },
      { label: '	PROPENCIVIR 250mg f.c.tab.' },
    ],
  },

  {
    label: '	FAMOTIDINE',
    tradeLabels: [
      { label: '	FAMOTIN 20mg tab.' },
      { label: '	ANTODINE 10mg chewable tab.' },
      { label: '	GASTRODOMINA 40mg tab.' },
      { label: '	FAMOCID 40mg f.c.tab.' },
      { label: '	FAMOTAK 20mg f.c.tab.' },
      { label: '	GASTRODOMINA 20mg tab.' },
      { label: '	ANTODINE 40mg/5ml power for oral susp.' },
      { label: '	FAMOTAK 40mg tab.' },

      { label: '	FAMOTIN 40mg tab.' },
      { label: '	ANTODINE 20mg/2ml ampoule.' },
      { label: '	ANTODINE 40mg f.c.tab.' },
      { label: '	EPCIFAM  20mg orally disentigrating tabs.' },
      { label: '	ANTODINE 20mg f.c.tab.' },
      { label: '	GASTROFAM 480mg/60ml susp.' },
      { label: '	GASTRODOMINA 40mg tab.' },
      { label: '	FAMOCID 20mg f.c.tab.' },
      { label: '	EPCIFAM 10mg effervescent granules' },
      { label: '	ANTODINE 20mg effervescent tab.' },

      { label: '	PEPTOFAM 10mg chewable tab.' },
      { label: '	ULFAMID 20mg tab.' },
      { label: '	ULFAMID 40mg tab.' },
      { label: '	PEPTEC 40mg tab.' },
      { label: '	ULCETECH 40mg f.c.tab.' },
      { label: '	SERVIPEP 20mg f.c.tab.' },
      { label: '	SERVIPEP 40mg f.c.tab.' },
      { label: '	PEPTEC 20mg tab.' },
    ],
  },

  {
    label: '	FATTY ACIDS',
    tradeLabels: [
      { label: '	LIPIODOL ULTRA FLUID 480mg I/ml amp.(Hospital)' },
      { label: '	LIPOSYN  20% infusion.' },
      { label: '	LIPOSYN  10 % infusion' },
    ],
  },

  {
    label: '	FELODIPINE',
    tradeLabels: [
      { label: '	FELODIPIN STADA 2.5mg M.R. coated tab.' },
      { label: '	FELODIPIN STADA 5mg M.R. coated tab.' },
      { label: '	FELOCOR 5mg M.R. f.c.tab.' },
      { label: '	FELOCOR 10mg M.R.f.c.tab.' },
      { label: '	PLENTOPINE 5mg M.R.f.c.tab.' },
      { label: '	PLENDIL 10mg prolonged release f.c.tab.' },
      { label: '	PLENTOPINE 2.5 mg M.R.f.c.tab.' },
      { label: '	PLENTOPINE 10mg M.R. f.c.tab.' },

      { label: '	PLENDIL 5mg prolonged release f.c.tab.' },
      { label: '	PLENDIL 2.5mg prolonged release f.c.tab.' },
    ],
  },
  {
    label: '	FELODIPINE+METOPROLOL',
    tradeLabels: [{ label: '	LOGIMAX S.R. tab.' }],
  },
  {
    label: '	FELODIPINE+RAMIPRIL',
    tradeLabels: [
      { label: '	TRIACOR 5/5 f.c.tab.' },
      { label: '	TRIACOR 2.5/2.5 f.c.tab.' },
    ],
  },

  {
    label: '	FENNEL+GUAVA+LIQUORICE+MAJORAM+PEPPERMINT+TILIA+VE',
    tradeLabels: [],
  },

  {
    label: '	FENOFIBRATE',
    tradeLabels: [
      { label: '	LIPOLEX 200mg capsule' },
      { label: '	FINORATE 100mg caps.' },
      { label: '	LIPANTHYL SUPRA 160mg f.c. tabs.' },
      { label: '	FENOLIP 300mg hard gelatin cap.' },
      { label: '	FENOLIP 100mg tab.' },
      { label: '	LIPANTHYL 300mg caps.' },
      { label: '	LIPOLEX 300mg caps.' },
      { label: '	LIPOLEX 67mg capsule' },

      { label: '	LIPOMEDIZEN 300mg hard gelatin caps.' },
      { label: '	FINORATE RETARD 250mg caps.' },
    ],
  },
  {
    label: '	FENOPROFEN',
    tradeLabels: [
      { label: '	FENOPROFEN 600mg caps.' },
      { label: '	FENOPROFEN 300mg capsule.' },
      { label: '	NALFOSAB  300mg caps.' },
      { label: '	NALFOSAB 200mg caps.' },
    ],
  },

  {
    label: '	HEXOPRENALINE',
    tradeLabels: [
      { label: '	GYNIPRAL 10 mcg ampoules' },
      { label: '	ASMADOL 2.5mg/100ml syrup' },
      { label: '	GYNIPRAL 0.5mg tab.' },
      { label: '	IPRADOL 0.5mg tab.' },
      { label: '	IPRADOL 0.00525mg/2ml amp.' },
      { label: '	ASMADOL METERED AEROSOL 0.2 mg' },
    ],
  },

  {
    label: '	HIRUDIN',
    tradeLabels: [
      { label: '	EXTRAUMA DNA FORTE 420I.U./100gm topical gel' },
      { label: '	Thrombexx 15mg Amp' },
    ],
  },
  {
    label: '	HOMATROPINE METHYLBROMIDE+IODOQUINOL+KAOLIN+PHTHAL',
    tradeLabels: [],
  },

  {
    label: '	HUMAN ALBUMIN',
    tradeLabels: [
      { label: '	ALBUMINATIVE 96% I.V. infusion' },
      { label: '	HUMAN ALBUMIN 20 % Behring' },
      { label: '	HUMAN ALBUMIN 20% I.V.infusion' },
      { label: '	HUMAN ALBUMIN OCTAPHARMA 20% I.V.infusion' },
      { label: '	ALBUMINA UMANA ISI 20 % vial' },
      { label: '	SK ALBUMIN 20% vial' },
      { label: '	SK ALBUMIN 20% vial' },
      { label: '	PLASBUMIN 20% I.V.infusion' },

      { label: '	VIALEBEX 20% I.V.infusion' },
      { label: '	ZENALB-20  20% I.V.vial' },
      { label: '	HUMAN ALBUMIN 200g/l BAXTER solution for i.v. infusion' },
      { label: '	ALBUMIN HUMAN 20% I.V infusion' },
      { label: '	ALBUMIN HUMAN 20% I.V infusion' },
      { label: '	ALBAPURE 20% I.V.infusion' },
    ],
  },

  {
    label: '	HUMAN CHORIONIC GONADOTROPHIN',
    tradeLabels: [
      { label: '	CHORIOMON 5000 I.U. I.M. vial.' },
      { label: '	CHORIOFACTOR 5000 I.U. vial' },
      { label: '	CHORIONIC 5000 I.U. amp.' },
      { label: '	CHORAGON 5000 I.U.' },
      { label: '	CHORIONIC 1000 I.U. amp.' },
      { label: '	EPIFASI 5000 I.U.amp.' },
      { label: '	CHORAGON 1500 I.U.' },
      { label: '	PREGNYL 1500 IU amp.' },

      { label: '	PREGNYL 5000I.U amp.' },
      { label: '	PROFASI 1000I.u. amp.' },
      { label: '	PROFASI 500I.u.amp.' },
      { label: '	PROFASI 5000I.u.amp.' },
    ],
  },
  {
    label: '	HUMAN GAMMA GLOBLIN PROTEIN',
    tradeLabels: [{ label: '	HUMAN GAMMA GLOBULIN 16% I.M.amp.' }],
  },

  {
    label: '	HUMAN MENOPAUSAL GONADOTROPHIN (FSH+LH)',
    tradeLabels: [
      { label: '	MENOGONAL 75 I.U amp.' },
      { label: '	AMRIGONE  75I.U. amp.' },
      { label: '	MENOFACTOR 75I.U. vial' },
      { label: '	HUMEGON 75 I.U./ml pd. For injection' },
      { label: '	MENOPURE 75 I.U. vial' },
      { label: '	MERIONAL 150I.U. I.M./S.C. vial' },
      { label: '	MERIONAL 75I.U.vial' },
      { label: '	MENOGON 75I.u.amp.' },

      { label: '	EPIGONAL amp.' },
      { label: '	PERGONAL amp.' },
    ],
  },

  {
    label: '	HUMAN NORMAL IMMUNOGLOBULIN',
    tradeLabels: [
      { label: '	GLOBUMAN BERNA 160 mg/ml vial' },
      { label: '	SANDOGLOBULIN 3g I.V.infusion' },
      { label: '	SANDOGLOBULIN 1g I.V infusion' },
      { label: '	VIGAM LIQUID 5 % 2.5gm/50ml' },
      { label: '	VIGAM-S 5 % w/v inj.' },
      { label: '	PENTAGLOBIN 50mg I.V.amp & vial' },
      { label: '	VIGAM LIQUID 5 % 2.5gm/50ml' },
      { label: '	VIGAM-S 5 % w/v inj.' },

      { label: '	PENTAGLOBIN 50mg I.V.amp & vial' },
      { label: '	SANDOGLOBULIN 6g I.V infusion' },
      { label: '	PENTAGLOBIN 50mg I.V.amp & vial' },
      { label: '	PENTAGLOBIN 50mg I.V.amp & vial' },
      { label: '	OCTAGAM 50mg/ml vial' },
    ],
  },
  {
    label: '	HUMAN PAPILLOMAVIRUS VACCINE',
    tradeLabels: [
      { label: '	GARDASIL VACCINE vial' },
      { label: '	CERVARIX 0.5ml vaccine' },
    ],
  },

  {
    label: '	HUMULUS LUPULUS EXTRACT+VALERIANA EXTRACT',
    tradeLabels: [{ label: '	DORMIVAL caps.' }],
  },
  {
    label: '	HYALURONIC ACID',
    tradeLabels: [
      { label: '	HYALGAN 20mg/2ml intra-articular prefilled syringe' },
      { label: '	OPHTHALIN 1% intra-ocular prefilled syringe' },
    ],
  },
  {
    label: '	HYDROCHLOROTHIAZIDE',
    tradeLabels: [
      { label: '	HYDRETIC 12.5mg tab.' },
      { label: '	HYDREX  25mg tab.' },
    ],
  },

  {
    label: '	HYDROCHLOROTHIAZIDE+IRBESARTAN',
    tradeLabels: [
      { label: '	IRBEVASC PLUS 300/12.5 mg tab.' },
      { label: '	COAPROVEL 300/12.5 tab.' },
      { label: '	CO-IRBESARTAN 150/12.5 mg f.c.tab.' },
      { label: '	CO-IRBESARTAN 300/25 mg f.c. tabs.' },
      { label: '	IRBEZIDE 150/12.5mg tab.' },
      { label: '	COAPROVEL 150/12.5 tab.' },
      { label: '	COAPROVAL 300/25mg f.c.tab.' },
      { label: '	X-TENSION PLUS 150/12.5mg tab.' },

      { label: '	VEZIDANE 150/12.5 tab.' },
    ],
  },
  {
    label: '	HYDROCHLOROTHIAZIDE+LISINOPRIL',
    tradeLabels: [
      { label: '	LISITENS 12.5/20mg tab.' },
      { label: '	SINOPRIL-CO 12.5/20mg tab.' },
      { label: '	ZESTORETIC-20 tab.' },
      { label: '	SEDORETIC tab.' },
    ],
  },

  {
    label: '	HYDROCHLOROTHIAZIDE+LOSARTAN',
    tradeLabels: [
      { label: '	LOSARTAN-COMP 50/12.5 tab.' },
      { label: '	MODAZAR 25/100mg f.c.tab.' },
      { label: '	HYZAAR f.c.tab.' },
      { label: '	HYZAAR 100/12,5 mg f.c.tabs.' },
      { label: '	AMOSAR FORTE 100/25 mgf.c.tab.' },
      { label: '	LOSAR PLUS f.c.tab' },
      { label: '	LOSAZIDE 50/12.5mg f.c.tab.' },
      { label: '	HYSARTAN 50/12.5 tab.' },

      { label: '	FORTZAAR 100/25mg tab.' },
      { label: '	KANZAR H 25/100mg f.c.tab.' },
      { label: '	FORTZAAR 100/25mg tab.' },
      { label: '	LOZAPRESS-H  50/12.5mg tab.' },
      { label: '	LORAZ 50/12.5mg tab.' },
      { label: '	REMTOZAR-D 25/100mg f.c.tab.' },
    ],
  },
  {
    label: '	HYDROCHLOROTHIAZIDE+MOEXIPRIL',
    tradeLabels: [{ label: '	PRIMOX PLUS  f.c.tab.' }],
  },

  {
    label: '	HYDROCHLOROTHIAZIDE+OLMESARTAN',
    tradeLabels: [
      { label: '	MEDOSARTAN 20/12.5mg f.c.tab.' },
      { label: '	MEDOSARTAN 40/12.5mg f.c.tab.' },
      { label: '	ERASTAPEX PLUS 40/12.5mg f.c.tab.' },
      { label: '	ERASTAPEX PLUS 20/12.5mg f.c.tab' },
    ],
  },

  {
    label: '	HYDROCHLOROTHIAZIDE+RAMIPRIL',
    tradeLabels: [
      { label: '	TRITACE MAX 10 mg/25mg tab.' },
      { label: '	RIGHT-ACE COMP 5/25mg tab.' },
      { label: '	TRITACE COMP 25/5mg tab.' },
      { label: '	TRITACE COMP LS 2.5/12.5mg tab.' },
      { label: '	RAMIPRIL HEXAL COMP 5/25mg tabs.' },
    ],
  },

  {
    label: '	HYDROCHLOROTHIAZIDE+SPIRONOLACTONE',
    tradeLabels: [
      { label: '	DURATENSIN tab.' },
      { label: '	EPILACTAZIDE 25/25mg tab.' },
      { label: '	ALDACTAZIDE  tab' },
      { label: '	SPIROZIDE  25/25 tab.' },
    ],
  },

  {
    label: '	HYDROCHLOROTHIAZIDE+TELMISARTAN',
    tradeLabels: [
      { label: '	MICARDIS PLUS 40/12.5mg tab.' },
      { label: '	ELMISTRAN PLUS 80/12.5 mg tabs.' },
      { label: '	ELMISTRAN PLUS 40/12.5mg tabs.' },
      { label: '	MICARDIS PLUS 80/25 mg tab' },
      { label: '	MICARDIS PLUS 80/12.5mg tab.' },
    ],
  },

  {
    label: '	HYDROCHLOROTHIAZIDE+VALSARTAN',
    tradeLabels: [
      { label: '	ADWIVALSAR-CO 160/12.5mg scored f.c.tab.' },
      { label: '	DISARTAN-CO 80 caps.' },
      { label: '	CO-TAREG 160/12.5 f.c.tab.' },
      { label: '	HYDROSARTAN 160/25mg f.c. tab.' },
      { label: '	CO-TAREG 80/12.5mg f.c.tab.' },
      { label: '	CO-VALSARTAN 80/12.5mg f.c. tab.' },
      { label: '	VALSATENS 80/12.5mg f.c. tab.' },
      { label: '	CO-DIOVAN 160/25 f.c.tab.' },

      { label: '	CO-VALSARTAN 160/25mg f.c. tab.' },
      { label: '	CO-VALSARTAN 160/12.5mg f.c. tabs.' },
      { label: '	ADWIVALSAR-CO 160/25mg scored f.c.tab.' },
      { label: '	VALSARCARD COMB  80/12.5mg f.c.tab.' },
      { label: '	VALSARCARD COMB 160/12.5mg f.c. tab.' },
      { label: '	VALSATENS 160/12.5mg f.c. tab.' },
      { label: '	VALSATENS 160/25mg f.c. tab.' },
      { label: '	Co-tareg 80/12.5 Tab' },
    ],
  },

  {
    label: '	HYDROCORTISONE ACETATE',
    tradeLabels: [
      { label: '	HYDROCORTISONE lyophylized 100mg inj.' },
      { label: '	DERMOTAR cream' },
      { label: '	EFFICORT 0.1% lipocream' },
      { label: '	HYDROCORTISONE 1% oint.' },
      { label: '	HYDROCORTISONE ACETATE 1% cream U.S.P.23' },
      { label: '	HYDROCORTISONE ACETATE 1% oint. U.S.P.23' },
      { label: '	HYDROCORTISONE 1% cream' },
      { label: '	HYDROCORTISONE  2.5% cream' },

      { label: '	LOCOID  0.1 % oint.' },
      { label: '	LOCOID  0.1 % cream' },
      { label: '	HYDROCORTISONE 125mg/5ml inj.' },
      { label: '	MICORT 10mg tab.' },
      { label: '	MICORT 1% cream' },
    ],
  },
  {
    label: '	HYDROCORTISONE BUTYRATE',
    tradeLabels: [{ label: '	TEXACORT 0.1% top. Lipocream' }],
  },

  {
    label: '	HYDROCORTISONE SODIUM SUCCINATE',
    tradeLabels: [
      { label: '	HYDROCORTISONE SODIUM SUCCINATE 100mg I.V./I.M.vial' },
      { label: '	FLEBOCORTID 500mg vial' },
      { label: '	SOLU-CORTEF 100mg/2ml vial' },
    ],
  },
  {
    label: '	HYDROCORTISONE VALERATE',
    tradeLabels: [
      { label: '	WESTCORT 0.2% cream' },
      { label: '	WESTCORT 0.2% oint.' },
    ],
  },

  {
    label: '	HYDROCORTISONE+FUCIDIC ACID',
    tradeLabels: [
      { label: '	FUSI-SONE cream' },
      { label: '	DEFUSIN H topical cream' },
    ],
  },
  {
    label: '	HYDROCORTISONE+LACTIC ACID+UREA',
    tradeLabels: [{ label: '	ZEMADERMIN top. Cream' }],
  },
  {
    label: '	HYDROCORTISONE+LIDOCAINE+ZINC OXIDE',
    tradeLabels: [{ label: '	PROCTOLIDOSINE cream.' }],
  },

  {
    label: '	HYDROCORTISONE+MICONAZOLE',
    tradeLabels: [
      { label: '	MONICORT cream' },
      { label: '	MONICORT cream' },
      { label: '	MYKOTRAL H topical cream' },
      { label: '	MYCOCORT CREAM' },
      { label: '	MICONAZ-H - EMULGEL' },
      { label: '	DERMOZOL CORT cream' },
      { label: '	DAKTACORT cream' },
    ],
  },

  {
    label: '	HYDROCORTISONE+MICONAZOLE+NEOMYCIN+NYSTATIN',
    tradeLabels: [{ label: '	MONICURE NH vaginal supp.' }],
  },
  {
    label: '	HYDROCORTISONE+NEOMYCIN+NYSTATIN',
    tradeLabels: [{ label: '	NYSTACORT-N cream' }],
  },
  {
    label: '	HYDROCORTISONE+NYSTATIN+ZINC OXIDE',
    tradeLabels: [{ label: '	DERMATECT top. Oint.' }],
  },

  {
    label: '	HYDROCORTISONE+OXYTETRACYCLINE',
    tradeLabels: [
      { label: '	TERRACORTRIL  topical ointment' },
      { label: '	TERRACORTRIL eye / ear susp.' },
    ],
  },
  {
    label: '	HYDROCORTISONE+PRAMOXINE',
    tradeLabels: [{ label: '	PRAMACORT cream' }],
  },

  {
    label: '	HYDROQUINONE',
    tradeLabels: [
      { label: '	ELDOQUINE FORTE 4 % cream' },
      { label: '	ELDOPAQUE FORTE 4 % sunblock cream' },
      { label: '	ELDOPAQUE FORTE 4 % sunblock cream' },
      { label: '	ELDOQUINE 2 % cream' },
      { label: '	ELDOQUINE FORTE 4 % cream' },
      { label: '	ELDOPAQUE 2% sunblock cream' },
      { label: '	MELOQUIN 4% cream' },
      { label: '	CLEARALIQUE 2% cream' },

      { label: '	CLEARALIQUE FORTE 4% cream' },
      { label: '	RETIQUINE-H CREAM' },
    ],
  },
  {
    label: '	HYDROQUINONE+OCTYL SALICYLATE',
    tradeLabels: [{ label: '	TOPIFRAM AGE SPOT FORMULA ( FADE CREAM )' }],
  },
  {
    label: '	HYDROQUINONE+RETINOIC ACID',
    tradeLabels: [{ label: '	LUCOCID-R 3% oint.' }, { label: '	BEAUTY gel' }],
  },

  {
    label: '	HYDROXOCOBALAMIN',
    tradeLabels: [
      { label: '	DEPOLVIX B12 1mg/ml amp.' },
      { label: '	B12 DEPOT 1000mcg amp.' },
      { label: '	DEPOVIT B12-1000 amp.' },
      { label: '	DEPOFORT B12 1mg/ml amp.' },
      { label: '	HYDROVIT-B12 DEPOT 500mcg/ml amp.' },
    ],
  },

  {
    label: '	HYDROXYCHLOROQUINE SULPHATE',
    tradeLabels: [
      { label: '	HYDROQUINE 200mg tab.' },
      { label: '	PLAQUENIL 200mg f.c.tab.' },
    ],
  },
  {
    label: '	HYDROXYETHYL STARCH',
    tradeLabels: [
      { label: '	HAES-STERIL 10% I.V.infusion' },
      { label: '	HEMOHES 6% I.V.infusion' },
      { label: '	HAES-STERIL 60gm/1000ml  I.V.infusion' },
      { label: '	VOLUVEN 6% sol. for I.V.inf.' },
    ],
  },

  {
    label: '	HYDROXYPROGESTERONE CAPROATE',
    tradeLabels: [
      { label: '	CIDOLUT DEPOT 125mg amp.' },
      { label: '	CIDOLUT DEPOT 250mg amp.' },
      { label: '	PRIMOLUT DEPOT 250mg amp.' },
      { label: '	PRIMOLUT DEPOT 125mg/ml I.M.amp.' },
    ],
  },

  {
    label: '	HYDROXYPROPYL METHYLCELLULOSE',
    tradeLabels: [
      { label: '	ARTELAC OPHTIOLE 3.2mg/ml eye drops' },
      { label: '	LUBRICAN eye drops' },
      { label: '	GENTEAL 0.3% gel' },
      { label: '	TEARS GUARD 0.3% eye drops' },
    ],
  },
  {
    label: '	HYDROXYPROPYL METHYLCELLULOSE+PHENYLEPHRINE',
    tradeLabels: [{ label: '	OCUTAL-TEC eye drop' }],
  },

  {
    label: '	HYDROXYQUINOLINE+LACTIC ACID',
    tradeLabels: [{ label: '	BIOLAVAG 0.3% vaginal douche' }],
  },
  {
    label: '	HYDROXYUREA',
    tradeLabels: [
      { label: '	HYDROXYUREA 500mg caps.' },
      { label: '	CYTODROX 500mg caps.' },
      { label: '	HYDREA 500mg caps.' },
    ],
  },

  {
    label: '	HYDROXYZINE HYDROCHLORIDE',
    tradeLabels: [{ label: '	ATARAX 25mg tab.' }, { label: '	ATARAX 10mg tab.' }],
  },

  {
    label: '	HYOSCINE',
    tradeLabels: [
      { label: '	FARCORELAXIN 10mg adult supp.' },
      { label: '	FARCORELAXIN INFANTILE 7.5mg supp.' },
      { label: '	BUSCOPAN 5mg/5ml syrup' },
      { label: '	FARCORELAXIN 100mg/100ml syrup.' },
      { label: '	FARCORELAXIN 20mg I.V./I.M.amp.' },
      { label: '	BUSCOPAN 10mg supp.' },
      { label: '	HYOSCINE BUTYLBROMIDE 10mg tab.' },
      { label: '	NU-SPASM 10mg tab.' },

      { label: '	NU-SPASM 20mg/ml amp.' },
      { label: '	NU-SPASM 20mg/ml amp.' },
      { label: '	SPASMO STERILE 20mg/ml I.M./I.V.amp.' },
    ],
  },
  {
    label: '	HYOSCINE+KETOPROFEN',
    tradeLabels: [
      { label: '	FAST FREE I.M. amp.' },
      { label: '	SPASMOFEN  amp.(CANCELLED)' },
    ],
  },

  {
    label: '	HYOSCINE+PARACETAMOL',
    tradeLabels: [
      { label: '	BUSCAMOL f.c.tab.' },
      { label: '	BUSCOPAN PLUS  f. c.tab.' },
      { label: '	BUSCOPAN PLUS adult supp.' },
    ],
  },

  {
    label: '	HYOSCIN-N-BUTYLBROMID',
    tradeLabels: [
      { label: '	BUTACID 10mg tab.' },
      { label: '	BUSCOPAN 20mg/ml amp.' },
      { label: '	BUSCOPAN 10mg sugar coated tab.' },
      { label: '	SPASMOCIN 100mg/100ml syrup.' },
      { label: '	SPASMOCIN 15mg supp.' },
      { label: '	SPASMOCIN 10mg tab.' },
      { label: '	SPASMOCIN 20mg/5ml amp.' },
    ],
  },

  {
    label: '	HYOSCYAMINE SULFATE',
    tradeLabels: [{ label: '	SPAZAWAY 0.125mg Sublingual tab.' }],
  },
  {
    label: '	HYPERICIN',
    tradeLabels: [
      { label: '	ANTI DEP caps. 150 mg' },
      { label: '	ANTI DEP caps. 150 mg' },
      { label: '	PSYCHOTON DRAGEE 0.12 %' },
    ],
  },

  {
    label: '	HYPERICUM',
    tradeLabels: [
      { label: '	MOMENTUM 300mg soft gelatin caps.' },
      { label: '	SAFAMOOD FORTE 600mg f.c.tab.' },
    ],
  },
  {
    label: '	HYPERICUM+VALERIAN EXTRACT',
    tradeLabels: [{ label: '	SEDANEURIN Tab.' }],
  },

  {
    label: '	IBUPROFEN',
    tradeLabels: [
      { label: '	FAST-BRUF.' },
      { label: '	MEPABRUFEN 500mg supp.' },
      { label: '	MEPABRUFEN 5% topical gel' },
      { label: '	MEPABRUFEN 300mg supp.' },
      { label: '	MAXIPROFEN  RETARD 800mg S.R tab.' },
      { label: '	MARCOFEN 400 mg coated tab.' },
      { label: '	BRUFEN 600mg tab' },
      { label: '	MARCOFEN 300mg infantile supp.' },

      { label: '	MARCOFEN 100mg/5ml susp.' },
      { label: '	MARCOFEN 100mg infantile rectal  supp.' },
      { label: '	MARCOFEN  400 mg  SR caps.' },
      { label: '	MARCOFEN 500mg supp.' },
      { label: '	FLAMOTAL 800mg tab.' },
      { label: '	FLABU 40mg/ml oral drops.' },
      { label: '	FLABU 600f.c.  Tab' },
      { label: '	IBUPROFEN 400 mg tab. B.P.2003' },
      { label: '	BRUFEN 200mg tab' },
      { label: '	FLAMOTAL  600mg f.c.tab.' },

      { label: '	FLAMOTAL 300mg supp.' },
      { label: '	FLAMOTAL 400mg f.c. tabs.' },
      { label: '	IBUHEXAL 800mg prolonged release tablets' },
      { label: '	FLABU 400mg f.c.tab.' },
      { label: '	FLAMOTAL 500mg supp.' },
      { label: '	IBUTOP 5% gel' },
      { label: '	IBUFEN 200mg tab.' },
      { label: '	IBUFEN 200mg soft gelatin capsule' },
      { label: '	IBUFEN 2% susp.' },
      { label: '	IBUFEN 2% susp.' },

      { label: '	ALPHAFEN 800mg tab.' },
      { label: '	ALPHAFEN 600mg tab.' },
      { label: '	ALPHAFEN 300mg ped. supp.' },
      { label: '	ALPHAFEN 10gm/100gm cream' },
      { label: '	ALPHAFEN 100mg/5ml susp.' },
      { label: '	FLAMOTAL 5% top. Gel' },
      { label: '	BRUFEN RETARD 800mg M.R.f.c.tab.' },
      { label: '	BRUFEN  effervescent granules 600 mg sachet.' },
      { label: '	BRUFEN  effervescent granules 600 mg sachet.' },
      { label: '	BRUFEN 100mg/5ml susp.' },

      { label: '	BRUFEN 400mg tab' },
      { label: '	BRUFEN cream 10 gm/100 gm' },
      { label: '	FLAMOTAL  10% top. Cream' },
      { label: '	PROFUSOL 400mg S.G  liqui caps.' },
      { label: '	RAPIFEN 200mg soft gelatin caps.' },
      { label: '	ULTRAFEN 600 mg tab.' },
      { label: '	ULTRAFEN 500  mg supp.' },
      { label: '	ULTRAFEN 400 mg tab.' },
      { label: '	ULTRAFEN 400 mg tab.' },
      { label: '	ULTRAFEN  10%  cream' },

      { label: '	ULTRAFEN 200 mg supp.' },
      { label: '	PROFINAL PAEDIATRIC 20mg/ml susp.' },
      { label: '	PROFUSOL 200 S.G.  liqui-caps.' },
      { label: '	ULTRAFEN 100 mg/5ml susp.' },
      { label: '	PROFINAL 200mg tab.' },
      { label: '	PROFINAL 400mg tab.' },
      { label: '	PROFINAL 600mg tab.' },
      { label: '	PROFINAL PAEDIATRIC 20mg/ml susp.' },
      { label: '	ULTRAFEN 200mg tab.' },
      { label: '	NUPRIN 50mg/ml oral drops' },

      { label: '	NOVA-PROFEN  100mg/5ml oral susp.' },
      { label: '	NOSPRIN 5% oral drops' },
      { label: '	NUPRIN 50mg/ml oral drops' },
      { label: '	SINUFEN 800mg sustained release f.c. tabs.' },
    ],
  },
  {
    label: '	IBUPROFEN+METHOCARBAMOL',
    tradeLabels: [
      { label: '	IBUFLEX tab.' },
      { label: '	MUSLGIX hard gelatin caps' },
    ],
  },

  {
    label: '	IBUPROFEN+PARACETAMOL',
    tradeLabels: [
      { label: '	CETAFEN-KID susp.' },
      { label: '	ACETAPROFEN susp.' },
      { label: '	MEGAFEN susp.' },
      { label: '	MEGAFEN tab.' },
      { label: '	ACETAPROFEN susp.' },
      { label: '	BRUFEMOL susp.' },
      { label: '	MEPABRUFEN tab.' },
      { label: '	CETAFEN tab.' },

      { label: '	PAROFEN oblong tab.' },
      { label: '	MEGAFEN susp.' },
      { label: '	IBUFLAM PLUS susp.' },
      { label: '	CETAFEN dispersible tab.' },
      { label: '	BRUFEMOL susp.' },
    ],
  },

  {
    label: '	IBUPROFEN+PSEUDOEPHEDRINE',
    tradeLabels: [
      { label: '	BRUFEN-FLU FORTE f.c.tab.' },
      { label: '	FAREX f.c.tab.' },
      { label: '	BRUFEN-FLU susp.' },
      { label: '	MARCOFEN FLU f.c.tab.' },
      { label: '	DOLO-D susp.' },
      { label: '	DOLO-D susp.' },
      { label: '	DOLO-D tab.' },
      { label: '	BRUFEN-FLU f.c.tab.' },

      { label: '	POWER CAPS caps.' },
    ],
  },
  {
    label: '	ICHTHAMMOL',
    tradeLabels: [
      { label: '	ICHTHAMMOL 10% oint. E.P.84' },
      { label: '	ICHTHAMMOL 10% oint.U.S.P23' },
    ],
  },
  { label: '	IDROCILAMIDE', tradeLabels: [{ label: '	SRILANE 5% cream' }] },

  {
    label: '	IFOSFAMIDE',
    tradeLabels: [
      { label: '	IFOS 1gm vial' },
      { label: '	ISOXAN 1gm pd. For I.V Inf.' },
      { label: '	ISOXAN 2gm  I.V.vial' },
      { label: '	HOLOXAN 1gm I.V vial' },
      { label: '	HOLOXAN 2gm I.V. inj.' },
    ],
  },
  { label: '	IMATINIB', tradeLabels: [{ label: '	IMATIB 100mg caps.' }] },

  {
    label: '	IMIDAPRIL',
    tradeLabels: [
      { label: '	TANATRIL 5mg tab.' },
      { label: '	TANATRIL 10mg tab.' },
    ],
  },
  {
    label: '	IMIPRAMINE',
    tradeLabels: [
      { label: '	TOFRANIL 10 mg sugar coated tab.' },
      { label: '	TOFRANIL 25mg sugar coated tab.' },
      { label: '	TOFRAMINE 25mg tab.' },
    ],
  },

  {
    label: '	IMMUNO GLOBULIN G',
    tradeLabels: [
      { label: '	LIV-GAMMA 2.5 gm vial I.V injection' },
      { label: '	OCTAGAMA 10 GM VIAL' },
    ],
  },

  {
    label: '	IMMUNOGLOBULIN',
    tradeLabels: [
      { label: '	INTRAGLOBIN F 50mg/ml I.V.infusion' },
      { label: '	INTRAGLOBIN F 50mg/ml I.V.infusion' },
      { label: '	I.V-GLOBULIN 50mg/ml vial' },
      { label: '	I.V-GLOBULIN 50mg/ml vial' },
      { label: '	INTRAGLOBIN F 50mg/ml I.V.infusion' },
      { label: '	A.T.G FRESENIUS 20mg/ml vial(Hospital)' },
      { label: '	I.V-GLOBULIN 50mg/ml vial' },
      { label: '	I.V-GLOBULIN 50mg/ml vial' },

      { label: '	GLOBUMAN BERNA 2.5 gm/2 ml I.V vial' },
      { label: '	Y-GLOBULIN KGCC I.M vial' },
    ],
  },
  {
    label: '	INDAPAMIDE',
    tradeLabels: [
      { label: '	INDAMIDE 2.5mg tab.' },
      { label: '	HYPOTENSE  2.5mg tab.' },
      { label: '	HYPOTENSE  2.5mg tab.' },
      { label: '	NATRILIX 1.5mg S.R.coated tab.' },
      { label: '	NATRILIX 2.5mg sugar coated tab.' },
      { label: '	DIUREX  2.5mg sugar coated tab.' },
    ],
  },

  {
    label: '	INDAPAMIDE+PERINDOPRIL',
    tradeLabels: [
      { label: '	BI-PRETERAX 1.25/4mg tab.' },
      { label: '	PRETERAX 0.625/2mg tab.' },
    ],
  },

  {
    label: '	INDOMETHACIN',
    tradeLabels: [
      { label: '	INDOFAST 1% topical spray' },
      { label: '	INDOMETHACIN  25 mg caps.' },
      { label: '	INDOMETHACIN 25mg soft gelatin caps.' },
      { label: '	INDOMETHACIN 50mg soft gelatin caps.' },
      { label: '	INDOMETHACIN 50mg vial' },
      { label: '	INDOTOPIC 1% gel' },
      { label: '	INDOCID 100mg rectal supp.' },
      { label: '	INDOMIN 25mg caps.' },

      { label: '	INDOCID-R 75 mg caps' },
      { label: '	INDOCID-R 75 mg caps' },
      { label: '	ELMETACIN spray' },
      { label: '	LIOMETACIN 50mg/2ml lyophilized amp.' },
      { label: '	INDOMETHACIN 100 mg Suppositories B.P.98' },
      { label: '	INDO 75mg  S.R.caps' },
      { label: '	INDACIN 100mg supp.' },
      { label: '	INDACIN 1% topical gel' },
      { label: '	INDOCID capsules 25 mg' },
      { label: '	FARCOMETHACIN  1% topical gel' },

      { label: '	BONIDON 75mg depocaps.' },
      { label: '	BONIDON 10mg/gm gel' },
      { label: '	FARCOMETHACIN 1% topical solution' },
      { label: '	INDOMETHACIN  100mg supp.' },
      { label: '	RHEUMACID 25mg caps.' },
    ],
  },
  { label: '	INSULIN SOLUBLE', tradeLabels: [] },

  {
    label: '	INSULIN ANIMAL',
    tradeLabels: [
      { label: '	INSULIN NILAB INITARD 40I.u./ml vial.' },
      { label: '	INSULIN NEUTRAL 20 IU/ml vial' },
      { label: '	INSULIN LENTE 40 IU/ML' },
      { label: '	INSULIN NILAB RETARD NPH 40 IU/ML' },
      { label: '	INSULINE ISOPHANE NPH 40 IU/ ml' },
      { label: '	DEPOT-INSULIN S vial 10ml' },
      { label: '	ACTRAPID 20 I.U./ml vial 10ml' },
    ],
  },

  {
    label: '	INSULIN ANIMAL (PORCINE)',
    tradeLabels: [{ label: '	DEPOT INSULIN-S-HOECHST 40 I.U./ml vial' }],
  },
  {
    label: '	INSULIN ASPART',
    tradeLabels: [
      { label: '	NOVO RAPID 100I.u./ml penfill' },
      { label: '	NOVO RAPID 100I.u./ml novolet flexpen' },
    ],
  },
  {
    label: '	INSULIN ASPART+INSULIN ASPART PROTAMINE',
    tradeLabels: [
      { label: '	NOVO MIX 30 100I.u./ml penfill/flexpen' },
      { label: '	NOVO MIX 30 100I.u./ml penfill/flexpen' },
    ],
  },

  {
    label: '	INSULIN DETEMIR',
    tradeLabels: [
      { label: '	LEVEMIR 100I.u./ml penfill/flexpen .' },
      { label: '	LEVEMIR 100I.u./ml penfill/flexpen .' },
    ],
  },
  {
    label: '	INSULIN GLARGINE',
    tradeLabels: [
      { label: '	LANTUS 100I.u./ml optipen/optiset' },
      { label: '	LANTUS 100I.u./ml optipen/optiset' },
    ],
  },

  {
    label: '	INSULIN GLULISINE HUMAN',
    tradeLabels: [
      { label: '	APIDRA 100I.U./ml solution for inj.' },
      { label: '	APIDRA 100I.U./ml solution for inj.' },
    ],
  },
  {
    label: '	INSULIN HUMAN',
    tradeLabels: [
      { label: '	HUMULIN R 40I.u./ml vial' },
      { label: '	HUMULIN N 40I.u./ml vial' },
    ],
  },

  {
    label: '	INSULIN ISOPHANE PROTAMINE HUMAN',
    tradeLabels: [
      { label: '	INSULATARD HM 100I.u./ml vial/penfill/novolet' },
      { label: '	HUMULIN N 100 I.u./ml vial' },
      { label: '	HUMULIN N 100I.U./ml cartridge' },
      { label: '	INSULIN H BIO NPH 100I.U.vial' },
      { label: '	INSULATARD HM 40I.u./ml vial' },
      { label: '	INSUMAN BASAL 100I.u./ml vial' },
      { label: '	INSULATARD HM 100I.u./ml vial/penfill/novolet' },
      { label: '	INSULIN H Bio NPH 40I.u.vial' },

      { label: '	HUMULIN N 40I.u./ml vial' },
      { label: '	HUMULIN N 100I.u./ml vial' },
      { label: '	HUMAN INSULIN N VACSERA-BIOTON 100I.U./ml vial' },
      { label: '	HUMULIN N 100I.u./ml vial' },
      { label: '	INSUMAN BASAL 40I.u./ml vial' },
    ],
  },
  {
    label: '	INSULIN LISPRO',
    tradeLabels: [{ label: '	HUMALOG 100I.U./ml cartridge' }],
  },

  {
    label: '	INSULIN LISPRO+INSULIN LISPRO PROTAMINE',
    tradeLabels: [{ label: '	HUMALOG MIX 25/100 I.U./ml' }],
  },

  {
    label: '	SOLUBLE INSULIN',
    tradeLabels: [
      { label: '	HUMULIN R 100 I.u./ml vial' },
      { label: '	HUMULIN R 100I.u./ml vial' },
      { label: '	HUMULIN R 100I.U./ml cartridge' },
      { label: '	INSUMAN RAPID 100I.u./ml vial/penfill' },
      { label: '	HUMULIN R 40I.u./ml vial' },
      { label: '	HUMULIN N 40I.u./ml vial' },
      { label: '	ACTRAPID HM 100 I.U./ml vial' },
      { label: '	HUMULIN R 100 I.u./ml vial' },

      { label: '	HUMULIN R 40I.u./ml vial' },
      { label: '	HUMAN INSULIN VACSERA R 40 I.U./ml vial' },
      { label: '	INSUMAN RAPID 40I.u./ml vial' },
      { label: '	ACTRAPID HM 100 I.U./ml vial/penfill/novolet' },
      { label: '	INSULIN H BIO R 100I.U.vial' },
      { label: '	HUMAN INSULIN R VACSERA-BIOTON 100I.U./ml vial' },
      { label: '	ACTRAPID HM 40 I.U./ml vial' },
      { label: '	INSULIN H BIO R 40I.u.vial' },
    ],
  },
  {
    label: '	INSULIN NEUTRAL HUMAN+INSULIN ISOPHANE PROTAMINE H',
    tradeLabels: [],
  },

  {
    label: '	INSULIN ZINC HUMAN (CRYSTALLINE)',
    tradeLabels: [{ label: '	HUMULIN U ULTRALENTE 100I.u./ml vial' }],
  },
  {
    label: '	INSULIN ZINC HUMAN (MIXED)',
    tradeLabels: [
      { label: '	MONOTARD HM 40I.u./ml vial' },
      { label: '	HUMULIN L 40I.u./ml vial' },
      { label: '	HUMULIN L 40I.u./ml vial' },
      { label: '	MONOTARD HM 100I.u./ml vial' },
      { label: '	HUMULIN L 100I.u./ml vial' },
    ],
  },

  {
    label: '	INTERFERON',
    tradeLabels: [{ label: '	INTERFERON ALFANTIVE 6,000,000 I.u/ml amp.' }],
  },
  {
    label: '	INTERFERON ALFA',
    tradeLabels: [
      { label: '	NATUFERON 10M.I.U. I.M.vial' },
      { label: '	NATUFERON 5M.I.U. I.M.vial' },
      { label: '	NATUFERON 2.5M.I.U. I.M.vial' },
    ],
  },

  {
    label: '	INTERFERON ALFA-2a',
    tradeLabels: [
      { label: '	REIFERON 3M.I.U. vial S.C/I.M injection' },
      { label: '	REIFERON 6M.I.U. vial S.C/I.M injection' },
      { label: '	GREEN - ALPHA 3,000,000 IU/ml INJ.' },
      { label: '	GREEN - ALPHA 3,000,000 IU/ml INJ.' },
      { label: '	INTEFEN 5M.I.U. vial' },
      { label: '	INTEFEN 3M.I.U. vial' },
      { label: '	ROFERON A 3M.I.U/0.5ml S.C.prefilled syringe' },
    ],
  },

  {
    label: '	INTERFERON ALFA-2b',
    tradeLabels: [
      { label: '	EGYFERON 3 M.I.U. vial' },
      { label: '	INTRON-A  3MIU injection' },
      { label: '	INTRON A 5M.I.U.vial' },
      { label: '	INTRON A 3M.I.U.vial' },
      { label: '	INTRON A 18M.I.U/3ml  solution for injection,multidose.' },
      { label: '	INTRON A 25M.I.U/2.5ml  solution for injection,multidose.' },
      { label: '	EGYFERON 1 M.I.U. vial' },
      { label: '	EGYFERON 5 M.I.U. vial' },
    ],
  },

  {
    label: '	INTERFERON BETA-1a',
    tradeLabels: [
      { label: '	REBIF 22mcg/0.5ml pre-filled syringe.' },
      { label: '	REBIF 44mcg S.C. inj.' },
    ],
  },
  {
    label: '	INTERFERON BETA-1b',
    tradeLabels: [
      { label: '	BETAFERON 250 mcg/ml pd. for solutn. for S.C. inj.' },
    ],
  },

  {
    label: '	IOBITRIDOL',
    tradeLabels: [
      { label: '	XENETIX 350mg/ml vial(Hospital)' },
      { label: '	XENETIX 300mg/ml vial(Hospital)' },
      { label: '	XENETIX 300mg/ml vial(Hospital)' },
      { label: '	XENETIX 350mg/ml vial(Hospital)' },
    ],
  },
  {
    label: '	IODINE',
    tradeLabels: [
      { label: '	ALCOHOLIC SOLUTION OF IODINE  2.5% EP 84' },
      { label: '	TINCTURE OF IODINE 2.5% E.P84' },
    ],
  },

  {
    label: '	IODIXANOL',
    tradeLabels: [
      { label: '	VISIPAQUE 320mg I/ml vial' },
      { label: '	VISIPAQUE 270mg I/ml vial(Hospital)' },
      { label: '	VISIPAQUE 270mg I/ml vial(Hospital)' },
      { label: '	VISIPAQUE 320mg I/ml vial' },
      { label: '	VISIPAQUE 320mg I/ml vial' },
    ],
  },

  {
    label: '	IOHEXOL',
    tradeLabels: [
      { label: '	OMNIPAQUE 240mg I/ml intravascular/intrathecal vial' },
      { label: '	OMNIPAQUE 300mg I/ml intravascular/intrathecal vial' },
      { label: '	OMNIPAQUE 300mg I/ml intravascular/intrathecal vial' },
      { label: '	OMNIPAQUE 350mg I/ml intravascular/intrathecal vial' },
      { label: '	OMNIPAQUE 300mg I/ml intravascular/intrathecal vial' },
      { label: '	OMNIPAQUE 350mg I/ml intravascular/intrathecal vial' },
      { label: '	OMNIPAQUE 350mg I/ml intravascular/intrathecal vial' },
      { label: '	OMNIPAQUE 300mg I/ml intravascular/intrathecal vial' },

      { label: '	OMNIPAQUE 240mg I/ml intravascular/intrathecal vial' },
      { label: '	OMNIPAQUE 240mg I/ml intravascular/intrathecal vial' },
    ],
  },
  {
    label: '	IOMEPROL',
    tradeLabels: [{ label: '	IOMERON 400 vial' }, { label: '	IOMERON 400 vial' }],
  },

  {
    label: '	IOPAMIDOL',
    tradeLabels: [
      { label: '	IOPAMIRO 370mg I/ml vial' },
      { label: '	IOPAMIRO 370mg I/ml vial' },
      { label: '	IOPAMIRO 300mg I/ml vial' },
      { label: '	IOPAMIRO 300mg I/ml vial' },
      { label: '	IOPAMIRO 200  mg Amp.' },
      { label: '	SCANLUX 370mg I/ml vial' },
      { label: '	SCANLUX 300mg I/ml vial' },
    ],
  },

  {
    label: '	IOPROMIDE',
    tradeLabels: [
      { label: '	ULTRAVIST 370 (Aqueous solution) vial' },
      { label: '	ULTRAVIST VIAL 240 mg/50 ml' },
      { label: '	ULTRAVIST 300mg vial' },
    ],
  },
  { label: '	IOPYDOLUM', tradeLabels: [{ label: '	HYTRAST 20 ML VIAL SUSP.' }] },

  {
    label: '	IOTROLAN',
    tradeLabels: [
      { label: '	ISOVIST VIAL  300 mg' },
      { label: '	ISOVIST VIAL 240 mg' },
    ],
  },
  {
    label: '	IPECA+PROMETHAZINE+SULFAGUAIACOL',
    tradeLabels: [{ label: '	PHENERGAN EXPECTORANT syrup' }],
  },

  {
    label: '	IPRATROPIUM BROMIDE',
    tradeLabels: [
      { label: '	ATROVENT METERED DOSE INHALER 20 mcg' },
      { label: '	ATROVENT  250mcg/2ml unit dose vial.' },
      { label: '	BERODUAL METERED DOSE INHALER 15 ml' },
      { label: '	ATROVENT  0.5mg/2ml unit dose vial.' },
      { label: '	Atrovent 500 Mcg' },
    ],
  },

  {
    label: '	IPRATROPIUM BROMIDE+SALBUTAMOL',
    tradeLabels: [
      { label: '	COMBIVENT UNIT DOSE vial' },
      { label: '	COMBIVENT METERED AEROSOL' },
    ],
  },

  {
    label: '	IRBESARTAN',
    tradeLabels: [
      { label: '	IRBESARTAN 300mg f.c. tabs.' },
      { label: '	IRBEDRIN 150mg tab.' },
      { label: '	IRBAN 300mg tab.' },
      { label: '	KANSARTAN 75mg tab.' },
      { label: '	IRBEDRIN 300mg tab.' },
      { label: '	IRBESARTAN 75 mg f.c. tabs.' },
      { label: '	KANSARTAN 300mg tab.' },
      { label: '	KANSARTAN 150mg tab.' },

      { label: '	IRBEDRIN 75mg tab.' },
      { label: '	IRBESARTAN 150mg f.c. tabs.' },
      { label: '	IRBESARTAN 150mg tabs.' },
      { label: '	APROVEL 150mg tab.' },
      { label: '	APROVEL 300mg tab.' },
      { label: '	IRBETAN 150mg tab' },
      { label: '	APROVEL 75mg tab.' },
      { label: '	X-TENSION 150mg tab.' },
      { label: '	SARTALESS 300mg scored tab.' },
    ],
  },

  {
    label: '	IRINOTECAN',
    tradeLabels: [
      { label: '	IRINOTEL 40mg/2ml I.V.vial' },
      { label: '	CAMPTO 20mg/ml concentrate for solution I.V.vial' },
      { label: '	CAMPTO 20mg/ml concentrate for solution I.V.vial' },
      { label: '	IRINOTEL 40mg/2ml I.V.vial' },
    ],
  },

  {
    label: '	IRON',
    tradeLabels: [
      { label: '	HYDROFERRIN 100mg/2ml amp.' },
      { label: '	FEROSE 100mg chewable tab.' },
      { label: '	FEROSE 50mg/ml oral drops' },
      { label: '	FERCAYL 100mg/2ml amp.' },
      { label: '	FEROSE 50mg/5ml syrup' },
      { label: '	FER-IN-SOL 15mg/0.6ml oral drops.' },
      { label: '	HAEMOJET 50mg/5ml syrup' },
      { label: '	HYDROFERRIN 5g/100ml oral drops' },

      { label: '	POLYSACC 100mg/5ml elixir' },
      { label: '	SYTRON 27.5mg/5ml oral Solution' },
    ],
  },
  { label: '	IRON DEXTRAN', tradeLabels: [{ label: '	HAEMA 100mg/2ml amp.' }] },
  {
    label: '	IRON SUCROSE',
    tradeLabels: [{ label: '	SACROFER 100mg/5ml  amp for I.V. inj.' }],
  },
  {
    label: '	IRON+NICOTINAMIDE+PANTHENOL+VITAMIN B1+VITAMIN B2+',
    tradeLabels: [],
  },

  {
    label: '	ISOCONAZOLE NITRATE',
    tradeLabels: [
      { label: '	CANDICURE 1 600mg vag. Ovules' },
      { label: '	CIDOGEN 1% topical cream' },
      { label: '	TRAVOGEN 1% cream' },
    ],
  },

  {
    label: '	ISOFLURANE',
    tradeLabels: [
      { label: '	ISOFLUORANE 100% inhalation solution(hospital)' },
      { label: '	FORANE 100 % inhalation solution' },
      { label: '	ISOTAN 100% inhalation solution' },
      { label: '	ISOFLURANE 100% Inhaler' },
      { label: '	ISOFLURANE 100% inhalation solution' },
      { label: '	ISOFLURANE 100% inhalation solution' },
      { label: '	ISOFLURANE 100% inhalation solution' },
      { label: '	AERRANE 100% liquid for inhalation' },
    ],
  },

  { label: '	ISOLEUCINE', tradeLabels: [{ label: '	SALVIAMIN HEPAR infusion' }] },

  {
    label: '	ISONIAZID',
    tradeLabels: [
      { label: '	ISONIAZID 0.6g/60ml dry powder for syrup' },
      { label: '	ISOCID FORTE 200mg tab.' },
      { label: '	ISOCID 50mg tab.' },
      { label: '	ISOCID 100mg tab.' },
      { label: '	ISOCID FORTE 200mg tab.' },
      { label: '	T.B.ZIDE FORTE 300mg tab.' },
      { label: '	T.B.ZIDE FORTE 200mg tab.' },
      { label: '	T.B.ZIDE 50mg tab.' },

      { label: '	T.B.ZIDE 100mg tab.' },
    ],
  },
  {
    label: '	ISONIAZID+PYRAZINAMIDE+RIFAMPICIN',
    tradeLabels: [
      { label: '	RIMCURE paed 3 FDC tab.' },
      { label: '	RIMCURE 3 FDC f.c.tab.' },
    ],
  },

  {
    label: '	ISONIAZID+RIFAMPICIN',
    tradeLabels: [
      { label: '	ISORIFA 150/300 caps.' },
      { label: '	RIMACTAZIDE paed 60/60mg tab.' },
      { label: '	RIMACTAZIDE 300mg coated tab.' },
      { label: '	RIOZID 150/300 caps.' },
      { label: '	RIFAM PLUS 150/300 hard gelatin caps.' },
      { label: '	RIFAZID 150/300 caps.' },
    ],
  },

  {
    label: '	ISOPRINOSINE',
    tradeLabels: [
      { label: '	ISOPRINOSINE 500mg tab.' },
      { label: '	ISOPRINOSINE SYRUP' },
    ],
  },
  {
    label: '	ISOPROPAMIDE+TRIFLUOPERAZINE',
    tradeLabels: [{ label: '	STELLAMID tab.' }],
  },
  {
    label: '	ISOPROPYL UNOPROSTONE',
    tradeLabels: [{ label: '	RESCULA 1.2mg/ml eye drops' }],
  },

  {
    label: '	ISOPROTERENOL',
    tradeLabels: [{ label: '	ISOPROTERNOL HYDROCHLORIDE 0.2mg/ml amp. USP24' }],
  },

  {
    label: '	ISOSORBIDE DINITRATE',
    tradeLabels: [
      { label: '	CARDIOGUARD 80mg SR caps.' },
      { label: '	ISOMACK 0.278gm spray' },
      { label: '	ISORDIL 10mg tab.' },
      { label: '	DINITRA 5mg sublingual tab.' },
      { label: '	DINITRA 20mg tab.' },
      { label: '	DINITRA 10mg tab.' },
      { label: '	ISORDIL 5mg sublingual tab.' },
      { label: '	ISORDIL 10mg tab.' },

      { label: '	ISORBID 5mg sublingual tab.' },
      { label: '	ISOGUARD 1.25mg spray' },
      { label: '	CARDIKET RETARD 20mg S.R. tab.' },
      { label: '	CORONIT 40mg lentocaps.' },
      { label: '	CORONIT 20mg lentocaps.' },
      { label: '	CARDIKET 10mg tab.' },
      { label: '	CARDIKET 5mg sublingual tab.' },
      { label: '	ISOMACK RETARD 20mg caps.' },
      { label: '	ISOMAK RETARD 40mg caps.' },
      { label: '	CARDIKET R 20 mg tab.' },
    ],
  },

  {
    label: '	ISOSORBIDE-5-MONONITRATE',
    tradeLabels: [
      { label: '	EFFOX 25mg caps.' },
      { label: '	MONOMAK DEPOT 100mg f.c.tab.' },
      { label: '	CORANGIN 40mg SR divitab.' },
      { label: '	ISMN STADA 40mg M.R. cap.' },
      { label: '	CARDIOGUARD M 20mg SR caps.' },
      { label: '	CARDIOGUARD M 40 mg SR caps.' },
      { label: '	IMDUR 60mg S.R f.c. tab.' },
      { label: '	EFFOX LONG 50mg S.R caps.' },

      { label: '	ISMN STADA 60mg Retard caps.' },
      { label: '	MONOMAK 40mg tab.' },
      { label: '	MONOMAK 20mg tab.' },
      { label: '	MONOCARD 50mg cap.' },
      { label: '	EFFOX 20mg tab.' },
      { label: '	EFFOX 40mg tab.' },
      { label: '	MONOMAK DEPOT 100mg S.R.tab.' },
    ],
  },

  {
    label: '	ISOTRETINOIN',
    tradeLabels: [
      { label: '	NETLOOK 10mg soft gelatin caps.' },
      { label: '	ISOTRETINOIN 10mg soft gelatin caps.' },
      { label: '	ISOTRETINOIN 20mg soft gelatin caps.' },
      { label: '	NETLOOK 40mg soft gelatin capsule' },
      { label: '	ISOTREX 0.05% gel' },
      { label: '	NETLOOK 20mg soft gelatin caps.' },
      { label: '	ROACCUTANE 20mg caps.' },
      { label: '	ROACCUTANE 10mg soft gelatin caps.' },
    ],
  },

  {
    label: '	ISOXSUPRINE',
    tradeLabels: [
      { label: '	DUVADILAN 20mg tab.' },
      { label: '	PERIVAS 20mg tab.' },
      { label: '	VASOXUPRINE 20mg tab.' },
      { label: '	VASOXUPRINE 20mg tab.' },
      { label: '	VASCULAR 20mg tab.' },
    ],
  },
  {
    label: '	ISPAGHULA HUSK+PLANTAGO SEED+SENNA',
    tradeLabels: [{ label: '	AGIOLAX granules' }],
  },

  {
    label: '	ISRADIPINE',
    tradeLabels: [
      { label: '	LOMIR 2.5mg tab.' },
      { label: '	LOMIR SRO 5mg caps.' },
    ],
  },

  {
    label: '	ITOPRIDE',
    tradeLabels: [
      { label: '	GANATON 50mg f.c.tab.' },
      { label: '	GASTORELIVE 50mg f.c.tab.' },
      { label: '	ALKAPRIDE 50mg scored tab.' },
      { label: '	EMA ITOPRIDE.' },
      { label: '	ITOPRIDE 50mg f.c. tab.' },
      { label: '	ITOPRIDE 50mg scored tab' },
    ],
  },

  {
    label: '	ITRACONAZOLE',
    tradeLabels: [
      { label: '	ITRAFUNGEX  100mg hard gelatin capsules' },
      { label: '	ITRACON 100mg caps.' },
      { label: '	ITRANOX 100mg caps.' },
      { label: '	ITRACON 100mg caps.' },
      { label: '	AROZOLE 100mg caps.' },
      { label: '	ITRAFUNGEX  100mg hard gelatin capsules' },
      { label: '	ITRAPEX 100mg caps.' },
      { label: '	SPORANOX 100mg caps.' },

      { label: '	SPORANOX 100mg caps.' },
    ],
  },
  {
    label: '	IVABRADINE',
    tradeLabels: [
      { label: '	PROCORALAN 7.5mg f.c.tab.' },
      { label: '	PROCORALAN 5mg f.c.tab.' },
    ],
  },

  {
    label: '	IVERMECTIN',
    tradeLabels: [
      { label: '	IVERMINE 6mg caps.' },
      { label: '	IVACTIN 6mg f.c.tab.' },
      { label: '	IVERMINE 10mg/10ml susp.' },
      { label: '	IVERZINE 1% lotion' },
      { label: '	IVERZINE 1% lotion' },
      { label: '	IVERZINE 6mg tab.' },
    ],
  },

  {
    label: '	IVY LEAVES',
    tradeLabels: [
      { label: '	IVYPRONT Syrup' },
      { label: '	SINUC 0.9gm/100ml syrup' },
      { label: '	PEOPOSPAN 0.7gm/100ml syrup' },
    ],
  },
  { label: '	JOJOBA OIL', tradeLabels: [{ label: '	SORANA oint' }] },

  {
    label: '	JOJOBA OIL+LIDOCAINE',
    tradeLabels: [{ label: '	JOBADEL oral gel' }, { label: '	JOGEL oral gel' }],
  },
  {
    label: '	JOJOBA OIL+ZINC OXIDE',
    tradeLabels: [
      { label: '	RASHA oint.' },
      { label: '	RASHA oint.' },
      { label: '	RASHA oint.' },
    ],
  },

  {
    label: '	KANAMYCIN',
    tradeLabels: [
      { label: '	KANAMYCIN 0.25gm vial B.P.88' },
      { label: '	KANAMYCIN 1gm vial' },
    ],
  },
  {
    label: '	KAOLIN+PECTIN',
    tradeLabels: [{ label: '	KAPECT susp.' }, { label: '	PECTOKAL susp.' }],
  },
  {
    label: '	KAOLIN+PECTIN+SULFAMETHOXAZOLE+TRIMETHOPRIM',
    tradeLabels: [{ label: '	KAPECT COMPOUND susp.' }],
  },

  {
    label: '	KAVA-KAVA',
    tradeLabels: [
      { label: '	KAVA 150mg caps.' },
      { label: '	RAWAKAN 100mg caps.' },
    ],
  },

  {
    label: '	KETAMINE',
    tradeLabels: [
      { label: '	KETAMINE 50mg/ml vial' },
      { label: '	CALYPSOL 500mg/10ml vial' },
      { label: '	KETAMINE HYDROCLORIDE 50mg/ml vial USP.' },
      { label: '	KEIRAN 500mg/10ml vial' },
      { label: '	KEIRAN 50mg/ml vial' },
      { label: '	KETAMAR 50mg/ml vial.10ml' },
      { label: '	KETAM 500mg/10ml vial' },
    ],
  },

  {
    label: '	KETOCONAZOLE',
    tradeLabels: [
      { label: '	KIZOL 200mg tab.' },
      { label: '	KETOCONAZOLE  200mg tab. U.S.P29' },
      { label: '	KETODERM  2% gel' },
      { label: '	KONAZOLE Cream   2 gm' },
      { label: '	KONAZOLE 2% shampoo' },
      { label: '	KETOZOLE 200mg tab.' },
      { label: '	KETODERM 2% cream' },
      { label: '	FUNGIZOLE 200mg tab.' },

      { label: '	CURAZOLE 2gm/100gm cream' },
      { label: '	NIZAPEX 2% shampoo' },
      { label: '	NIZO-ARM 200mg tab.' },
      { label: '	NIZODERM 2% cream' },
      { label: '	NIZORAL  2% topical shampoo.' },
      { label: '	ZAKAN 2gm/100ml shampoo' },
      { label: '	ZAKAN 2% cream' },
      { label: '	NIZORAL 200mg tab.' },
      { label: '	NIZORAL 200mg tab.' },
      { label: '	NIZORAL 20mg/g cream.' },
    ],
  },

  {
    label: '	KETOPROFEN',
    tradeLabels: [
      { label: '	BI-ALCOFAN 150mg tab.' },
      { label: '	KETOLGIN 25mg enteric coated tab.' },
      { label: '	KETOLGIN 50mg enteric coated tab.' },
      { label: '	COLOSALAZINE-EC 500mg enteric coated tab.' },
      { label: '	KETOLGIN SR 200mg caps.' },
      { label: '	KETOLGIN SR 200mg caps.' },
      { label: '	KETOPREK 75mg caps.' },
      { label: '	KETOPREK 75mg caps.' },

      { label: '	KETOPROF  200mg E.R.caps.' },
      { label: '	FASTUM 2.5% topical gel' },
      { label: '	KETOPROF 100mg/2ml I.M amp. For I.M. inj.' },
      { label: '	KETOLGIN 2.5% gel' },
      { label: '	KITI S.R. 200mg caps.' },
      { label: '	KUPAN 50mg caps.' },
      { label: '	BI-PROFENID 150mg scored tabs.' },
      { label: '	KUPAN 25mg tab.' },
      { label: '	KUPAN 200mg S.R.caps.' },
      { label: '	FASTUM 2.5% topical gel' },

      { label: '	KUPAN 100mg supp.' },
      { label: '	KETOFAN 2.5% gel' },
      { label: '	BI-KETOGESIC 150mg tab.' },
      { label: '	KETOFAN 12.5mg/5ml susp.' },
      { label: '	KEFENTECH 30mg  plaster sheet.' },
      { label: '	MEPACOFEN L.A. 150mg tab.' },
      { label: '	MEPACOFEN 25mg tab.' },
      { label: '	MEPACOFEN 2.5% topical gel' },
      { label: '	MEPACOFEN 100mg S.R.caps.' },
      { label: '	KETALGIPAN 50mg f.c. tab.' },

      { label: '	ALCOFAN 2.5% gel' },
      { label: '	ALCOFAN 25mg tab.' },
      { label: '	ALCOFAN 25mg tab.' },
      { label: '	KETOFAN 100mg S.R caps.' },
      { label: '	KETOFAN 200mg S.R. caps.' },
      { label: '	KETOFAN 100mg/2ml I.M.amp.' },
      { label: '	KETOLGIN 12.5mg/5ml syrup' },
      { label: '	ALCOFAN 100mg supp.' },
      { label: '	DOLOKET 100mg/2ml I.M.amp.' },
      { label: '	KETOFAN 25mg tab.' },

      { label: '	KETOFAN 50mg caps.' },
      { label: '	KETOGESIC 100mg supp.' },
      { label: '	KETOGESIC 100mg/2ml amp.' },
      { label: '	KETOGESIC 200mg S.R. pellets in caps.' },
      { label: '	FASTUM 2.5% topical gel' },
      { label: '	KETOGESIC 50mg caps.' },
      { label: '	KETOLGIN 100mg amp.' },
      { label: '	KETOLGIN 100mg supp.' },
      { label: '	KETOFAN 100mg supp.' },
      { label: '	ALCOFAN 50mg caps.' },

      { label: '	GESIKET 75mg hard gelatin caps.' },
      { label: '	FLAMOGUARD 150mg  extended release hard gelatin caps.' },
      { label: '	FLAMIBRU 75mg caps.' },
      { label: '	PROFENID 100mg ampoule' },
      { label: '	PROFENID 100mg I.M.vial (Hospital)' },
      { label: '	TOP FAM 25mg tab.' },
      { label: '	PROFENID 100mg tab.' },
      { label: '	PROFENID 2.5% top. Gel' },
      { label: '	PROFENID 50mg caps.' },
      { label: '	ORUDIS 100mg supp.' },

      { label: '	PROFENID 100mg supp.' },
      { label: '	PROFENID 200mg tab.' },
    ],
  },
  {
    label: '	KETOROLAC',
    tradeLabels: [
      { label: '	ACULAR 0.5% eye drops' },
      { label: '	FAM  30mg/2ml amp.' },
      { label: '	KETORAL TAB. 10 mg' },
      { label: '	ADOLOR 15mg amp.' },
      { label: '	KETRAC 10mg tab.' },
    ],
  },

  {
    label: '	KETOROLAC TROMETHAMINE',
    tradeLabels: [
      { label: '	FAM 5mg/ml eye drops' },
      { label: '	KETOROLIN' },
      { label: '	KETOROLAC 0.5gm/100ml eye drops' },
      { label: '	DOLOMINE STERILE 15mg/ml I.V./I.M.amp.' },
      { label: '	KETOLAC 10mg tab.' },
      { label: '	KETOLAC 30mg I.M amp.' },
      { label: '	DOLOMINE STERILE 0.5gm/100ml eye drops' },
      { label: '	FAM 10mg tab.' },

      { label: '	KETOROLIN 0.5% eye drops' },
      { label: '	SAMULGIN  0.5gm/100ml eye drops' },
      { label: '	SAMULGIN 15mg/ml I.V./I.M.amp.' },
      { label: '	SAMULGIN 30mg/ml I.V./I.M.amp.' },
      { label: '	SAMULGIN 60mg/2ml amp.' },
    ],
  },

  {
    label: '	KETOTIFEN',
    tradeLabels: [
      { label: '	KETOTI 1mg tab.' },
      { label: '	KETOTI PHARCO 1mg/5ml syrup' },
      { label: '	KETOTEN S.R.2mg f.c.tab.' },
      { label: '	MASTOSYTEX 0.025% ophthalmic solution' },
      { label: '	ALLERBAN syrup' },
      { label: '	ALLERBAN S.R. 2mg tab.' },
      { label: '	ORCHAZID 0.025% eye dps.' },
      { label: '	PROPHALLERGE 1mg/5ml syrup' },

      { label: '	REDNOTT 0.25mg/ml Eye Drops' },
      { label: '	ZEDOTEFEN 1mg/1ml oral drops' },
      { label: '	ZYLOFEN 20mg syrup' },
      { label: '	ZYLOFEN TAB. 1 MG' },
      { label: '	ZEDOTEFEN 1mg/5ml syrup' },
      { label: '	PROPHALLERGE 1mg tab' },
      { label: '	ZADITEN 1mg tab.' },
      { label: '	ZEDOTEFEN 1mg tab.' },
      { label: '	ZADITEN  1mg/5ml syrup.' },
      { label: '	ZADITEN 1mg/ml oral drops' },
    ],
  },
  {
    label: '	KHELLIN',
    tradeLabels: [
      { label: '	EZALLIN 2%  paint' },
      { label: '	PSORVITIL 25mg tab.' },
    ],
  },
  {
    label: '	KHELLIN+DIPROPHYLLINE+GLUCOSE+THEOPHYLLINE',
    tradeLabels: [
      { label: '	GLUCOLYNAMINE I.V amp.' },
      { label: '	GLUCOLYNAMINE I.V amp.' },
    ],
  },

  {
    label: '	LACIDIPINE',
    tradeLabels: [
      { label: '	LACIDAC 2mg f.c.tab.' },
      { label: '	LACIPIL 2 mg tab.' },
      { label: '	LODIPINE 2mg f.c.tab.' },
      { label: '	LACIPIL 4 mg tab.' },
      { label: '	LACIDAC 4mg f.c.tab.' },
      { label: '	NORMOTENSIL 2mg f.c. tabs.' },
    ],
  },

  {
    label: '	LACTIC ACID',
    tradeLabels: [{ label: '	CLEAR FACE 10%w/w topical solution' }],
  },
  {
    label: '	LACTIC ACID+POLIDOCANOL+SALICYLIC ACID',
    tradeLabels: [{ label: '	COLLOMAK top. Soution' }],
  },
  {
    label: '	LACTIC ACID+SALICYLIC ACID',
    tradeLabels: [{ label: '	DUOFILM topical solution' }],
  },

  {
    label: '	LACTITOL',
    tradeLabels: [
      { label: '	IMPORTAL10g sachet' },
      { label: '	IMPORTAL10g sachet' },
    ],
  },
  {
    label: '	LACTOBACILLUS',
    tradeLabels: [
      { label: '	LACTEOL FORTE  5billion caps.' },
      { label: '	LACTEOL FORTE 10billion sachet' },
    ],
  },
  {
    label: '	LACTOBACILLUS+AMINO ACIDS+MINERALS',
    tradeLabels: [{ label: '	HYLAK oral drops' }],
  },

  {
    label: '	LACTO-SERUM',
    tradeLabels: [
      { label: '	LACTACYD 1.9 % liquid' },
      { label: '	LACTACYD  2.16 % cake' },
    ],
  },

  {
    label: '	LACTULOSE',
    tradeLabels: [
      { label: '	LACTOLINE 100% syrup' },
      { label: '	LACTULOSE HEK 65% syrup' },
      { label: '	LACTOLINE 100% syrup' },
      { label: '	LAXULOSE 65% syrup' },
      { label: '	LACTOLINE 5gm powder' },
      { label: '	LACTULAX 67% syrup' },
      { label: '	LAXOLAC SYRUP 67 % W/V' },
      { label: '	FARCOLAC 667gm/1000ml syp.' },

      { label: '	LACTULAX 67% syrup' },
      { label: '	LACTULOSE HEK 65% syrup' },
      { label: '	LAXOLAC SYRUP 67 % W/V' },
      { label: '	DUPHALAC 667gm/l syrup' },
      { label: '	LAXULOSE 65% syrup' },
      { label: '	SEDALAC 3.35gm/5ml syrup' },
      { label: '	SEDALAC 3.35gm/5ml syrup' },
    ],
  },

  {
    label: '	L-ALANYL-L-GLUTAMINE',
    tradeLabels: [
      { label: '	DIPEPTIVEN 20% I.v. infusion.' },
      { label: '	DIPEPTIVEN 20% I.v. infusion.' },
    ],
  },
  {
    label: '	LAMIVUDINE',
    tradeLabels: [
      { label: '	LAMIDINE 100 mg f.c.tab.' },
      { label: '	LAMIDINE 150mg f.c.tab' },
      { label: '	ZEFFIX 100mg f.c.tab.' },
    ],
  },

  {
    label: '	LAMIVUDINE+ZIDOVUDINE',
    tradeLabels: [{ label: '	LAMIZIDINE f.c.tab.' }],
  },

  {
    label: '	LAMOTRIGINE',
    tradeLabels: [
      { label: '	LAMOTRINE 100mg tab.' },
      { label: '	LAMOTRINE 25mg tab.' },
      { label: '	LAMOTRINE 2mg chew. Tab.' },
      { label: '	LABILENO 100mg tabs.' },
      { label: '	LABILENO 25mg tab.' },
      { label: '	LABILENO 50mg tabs.' },
      { label: '	LAMOTRINE 50mg tab.' },
      { label: '	LAROGEN 25mg tab.' },

      { label: '	LEPTROGINE 200mg tab.' },
      { label: '	LAMICTAL 25mg tab.' },
      { label: '	LEPTROGINE 25mg chewable tab.' },
      { label: '	LAROGEN 100mg tab.' },
      { label: '	LAMICTAL 100mg tab.' },
      { label: '	LAMICTAL 2mg chewable disp.tab.' },
      { label: '	LAMICTAL 50mg tab.' },
    ],
  },
  { label: '	LANOLIN+ZINC OXIDE', tradeLabels: [{ label: '	CREAM IDEAL' }] },

  {
    label: '	LANZOPRAZOL',
    tradeLabels: [
      { label: '	LANTANON 30mg pellets caps.' },
      { label: '	LORAL 30mg caps.' },
      { label: '	LOPRAL 30mg caps.' },
      { label: '	LANSOPRAZOLE 15mg caps.' },
      { label: '	GASTROCURE 30mg caps.' },
      { label: '	LANZOR 15mg cap.' },
      { label: '	LANZOR 30mg caps.' },
      { label: '	LANZOFUTAL 15mg hard gelatin capsules' },

      { label: '	LANZOR 30mg cap.' },
      { label: '	ZOLLIPAK 15mg caps.' },
      { label: '	PEPTAZOL 30mg caps.' },
      { label: '	ZOLLIPAK 30mg caps' },
    ],
  },
  {
    label: '	LATANOPROST',
    tradeLabels: [
      { label: '	IOPROST 50mcg/ml eye drops' },
      { label: '	XALATAN 50mcg/ml eye drops' },
    ],
  },

  {
    label: '	LATANOPROST+TIMOLOL',
    tradeLabels: [{ label: '	XALACOM eye drops' }],
  },

  {
    label: '	L-CARNITINE',
    tradeLabels: [
      { label: '	CARNITINE 1gm amp.' },
      { label: '	CARNITOL 30% syrup' },
      { label: '	CARNITINE 30% oral drops' },
      { label: '	CARNITOL 500mg caps.' },
      { label: '	L-CARNTTNE  caps. 350 mg' },
      { label: '	L-CARNITINE 1gm/5ml amp.' },
      { label: '	L-CARNITINE 30gm/100ml syrup' },
      { label: '	L-CARNITINE 300mg tab.' },

      { label: '	LEVOCARNINE 500mg tab.' },
      { label: '	CARNIVITA  30% Oral Solution' },
      { label: '	CARDIMORE 10% syrup' },
      { label: '	LEVO-CARNINE 250mg caps.' },
      { label: '	LEVOCARNINE 10gm/100ml oral solution' },
    ],
  },
  {
    label: '	L-CARNITINE L-TARTRATE+ZINC',
    tradeLabels: [{ label: '	CARNIVITA FORTE f.c.tab.' }],
  },

  {
    label: '	LEFLUNOMIDE',
    tradeLabels: [
      { label: '	ARTHFREE 20mg f.c.tab.' },
      { label: '	AVARA 10mg f.c.tab.' },
      { label: '	LEFLUMINE 100mg tabs.' },
      { label: '	LEFLUMINE 20mg tabs.' },
      { label: '	AVARA  20mg f.c.tab.' },
      { label: '	AVARA 100mg f.c.tab.' },
      { label: '	APETOID 100mg f.c.tab.' },
      { label: '	APETOID 20mg f.c.tab.' },

      { label: '	ARTHFREE 100mg f.c.tab.' },
      { label: '	RAFIX 10mg tab.' },
      { label: '	VAMID 20mg tab.' },
      { label: '	VAMID 10mg tab.' },
      { label: '	RAFIX 20mg tab.' },
      { label: '	VAMID 100mg tab.' },
      { label: '	RAFIX 100mg f.c.tab' },
    ],
  },
  {
    label: '	LENOGRASTIM',
    tradeLabels: [{ label: '	GRANOCYTE 34M.I.U./ml vial (hospital)' }],
  },

  {
    label: '	LETROZOLE',
    tradeLabels: [
      { label: '	FEMARA 2.5mg f.c.tab.' },
      { label: '	FEMARA 2.5mg f.c.tab.' },
    ],
  },

  {
    label: '	LEUCOVORIN CALCIUM',
    tradeLabels: [
      { label: '	CALCIUM FOLINATE STADA 10mg/ml vial' },
      { label: '	CALCIUM LEUCOVORIN 50 mg/5 ml' },
      { label: '	CALCIUM FOLINATE STADA 10mg/ml vial' },
      { label: '	CALCIUM FOLINATE 50mg/5ml vial' },
      { label: '	LEUCOVORIN CALCIUM FILAXIS 50mg vial.' },
      { label: '	CALCIUM FOLINATE STADA 10mg/ml vial' },
      { label: '	CALCIUM LEUCOVORIN 50mg/2ml vial' },
      { label: '	CALCIUM FOLINATE 3mg/ml ampoule' },

      { label: '	CALCIUM FOLINATE STADA 10mg/ml vial' },
      { label: '	CALCIUM FOLINATE 50mg/5ml vial' },
      { label: '	NYRIN  50mg/5ml sol. In amp. For I.V inj.' },
    ],
  },
  {
    label: '	LEUPROLIDE  ACETATE',
    tradeLabels: [{ label: '	LUCRINE 5mg/ml vial' }],
  },

  {
    label: '	LEVAMISOLE',
    tradeLabels: [
      { label: '	LEVAMISOLE 40mg tab.' },
      { label: '	KATREX 40mg tab' },
      { label: '	KATREX  0.8% syrup' },
      { label: '	LEVAMISOLE 40mg/5ml syrup.' },
      { label: '	WORMINE 40mg/5ml syrup.' },
    ],
  },

  {
    label: '	LEVETIRACETAM',
    tradeLabels: [
      { label: '	LEVEPEX 500mg f.c.tab.' },
      { label: '	LEVEPEX 750mg f.c.tab' },
      { label: '	LEVEPEX 1000 mg f.c.tab.' },
      { label: '	KEPPRA 500mg f.c.tab.' },
      { label: '	FUTATREAT 250mg f.c. tabs.' },
      { label: '	KEPPRA 1000mg f.c.tab.' },
      { label: '	KEPPRA 250mg f.c.tab.' },
      { label: '	LEVEPEX 100mg/ml syrup' },

      { label: '	FUTATREAT 500mg f.c. tabs.' },
      { label: '	TRINOVUME 500mg f.c. tabs.' },
      { label: '	TIRATAM 1000mg f.c. tabs.' },
      { label: '	TIRATAM 500mg f.c.tab.' },
      { label: '	SEIZURLESS 100mg/ml oral solution' },
      { label: '	SEIZURLESS 500mg f.c. tab.' },
      { label: '	TIRALEPSY 1000mg f.c tab.' },
      { label: '	TRINOVUME 750mg f.c. tabs.' },
      { label: '	TIRATAM 100mg oral solution' },
    ],
  },

  {
    label: '	LEVOBUNOLOL',
    tradeLabels: [{ label: '	BETAGAN 0.5% ophthalmic solution' }],
  },
  {
    label: '	LEVOCABASTINE',
    tradeLabels: [
      { label: '	LIVOSTIN 0.5 mg/ml nasal spray' },
      { label: '	LIVOSTIN  0.5mg/ml eye drops' },
    ],
  },

  {
    label: '	LEVOCETIRIZINE',
    tradeLabels: [
      { label: '	LEVCET 5mg tab.' },
      { label: '	ALLEVO 5mg f.c.tab.' },
      { label: '	LEVOCTIVAN 5mg f.c. tabs.' },
      { label: '	ALLEAR 5mg f.c.tab.' },
      { label: '	XALTEC 5mg tab' },
      { label: '	ORGITRIZINE 5 mg f.c.tab.' },
      { label: '	ZALKEVOR 5mg f.c. tabs.' },
    ],
  },

  {
    label: '	LEVOFLOXACIN',
    tradeLabels: [
      { label: '	LEVOXIN 250mg vial' },
      { label: '	ALFACEF 750mg f.c.tab.' },
      { label: '	LEVOXIN 500mg f.c.tab.' },
      { label: '	ALFACEF 500mg/100ml vial for I.V. inf.' },
      { label: '	LEVOXIN 250mg f.c.tab.' },
      { label: '	LEE-FLOX 750mg f.c.tab.' },
      { label: '	LEVOFLOXACIN 750mg  f.c. tab.' },
      { label: '	LEE-FLOX 750mg f.c.tab.' },

      { label: '	LARIVEX  500mg tab.' },
      { label: '	LEVOMAGICTAM  f.c.tab.' },
      { label: '	LEE-FLOX 500mg f.c.tab.' },
      { label: '	MEPAFLOXIN 750mg f.c. tab.' },
      { label: '	KEVORK 500mg f.c.tab.' },
      { label: '	LEVOXIN 500mg vial' },
      { label: '	MONOSHO 500mg f.c. tabs.' },
      { label: '	LEE-FLOX 250mg tab.' },
      { label: '	LEVOFLOX 250mg f.c.tab.' },
      { label: '	LEVOXIN 5mg ophthalmic drops' },

      { label: '	LEE-FLOX 0.5% eye drops' },
      { label: '	LEVANIC 500mg f.c.tab.' },
      { label: '	LEVOFLOX 500mg solution for I.V. inf.' },
      { label: '	LEVOFLOX 500mg f.c. tabs.' },
      { label: '	UNIBIOTIC 500mg f.c.tab.' },
      { label: '	UNIBIOTIC 250mg f.c.tab.' },
      { label: '	TAVONIFLOX  500mg f.c. tabs.' },
      { label: '	TAVANIC 500mg tab.' },
      { label: '	TAVANIC 500mg/100ml infusion' },
      { label: '	TAVONIFLOX 750mg f.c. tabs.' },

      { label: '	VENAXAN 500mg f.c.tab.' },
      { label: '	VENAXAN 250mg f.c.tab.' },
      { label: '	TAVACIN 750mg f.c.tab.' },
      { label: '	TAVACIN 500mg f.c.tab.' },
      { label: '	TARGOFLOXIN 750 mg f.c.tab.' },
      { label: '	TAVANIC 250mg tab.' },
      { label: '	VENAXAN 500mg vial' },
      { label: '	Tavanic 500mg Vial' },
      { label: '	Tavanic 750 mg vial' },
    ],
  },

  {
    label: '	LEVONORDEFRIN+MEPIVACAINE',
    tradeLabels: [{ label: '	MEPECAINE-L carpoule' }],
  },
  {
    label: '	LEVONORGESTREL',
    tradeLabels: [
      { label: '	MICROLUT 0.03mg coated tab.' },
      { label: '	MIRENA IUS (20Ug/24 hr) intrauterine system' },
      { label: '	POSTINOR-2 0.75mg tab.' },
    ],
  },

  {
    label: '	LEVOTHYROXINE',
    tradeLabels: [
      { label: '	EUTHYROX 25mcg tab.' },
      { label: '	EUTHYROX 100mcg tab.' },
      { label: '	EUTHYROX 50mcg tab.' },
      { label: '	THYROXINE 100mcg tab.' },
      { label: '	T4-THYRO 50mcg tab.' },
      { label: '	T4-THYRO 100mcg tab.' },
      { label: '	THYROXINE 50mcg tab.' },
    ],
  },

  {
    label: '	LIDOCAINE',
    tradeLabels: [
      { label: '	LIGNORAL 10gm/100ml oral spray' },
      { label: '	LIGNOCAINE 2% topical gel' },
      { label: '	LIGNOCAINE HYDROCHLORIDE 2% gel' },
      { label: '	LIDOGED 5% topical gel' },
      { label: '	LIDOCAINE 2% amp.' },
      { label: '	BABY DENT ADWIA 2.5% oral gel  (COCONUT)' },
      { label: '	LIDOCAINE HCL 2% vial' },
      { label: '	LIDO 40mg/1ml topical spray' },

      { label: '	LIDOCAINE HCl 20mg/ml vial USP24' },
      { label: '	BABY DENT ADWIA 2.5% oral gel  (COCONUT)' },
      { label: '	LIGNOCAINE 10% spray' },
      { label: '	LIGNOCAINE 5% emulgel' },
      { label: '	LIDOCAINE 10% topical spray' },
      { label: '	LIGNOCAINE 5% cream' },
      { label: '	LIDOCAINE  2% gel.' },
      { label: '	GELICAIN 2% gel' },
      { label: '	LIGNOCAINE 10% spray' },
      { label: '	LIDOCAINE 1 % CARTRIDGES' },

      { label: '	DEBOCAINE HCL 2% vial' },
      { label: '	FARCO-CAINE 5% oint.' },
      { label: '	DENTO GEL 2% oral gel' },
      { label: '	LIDOSINE  5% topical oint.oint.' },
      { label: '	BABY DENT ADWIA 2.5% oral gel (PINEAPPLE)' },
      { label: '	BABY DENT ADWIA 2.5% oral gel (PINEAPPLE)' },
      { label: '	FARCO-CAINE 10% spray.' },
      { label: '	LIDOCAINE 2 % CART.' },
      { label: '	LIDOCAINE 10% topical spray' },
      { label: '	XYLOCAINE 5% oint.' },

      { label: '	PROCTOLIDOSINE supp.' },
      { label: '	ULTRACAINE 5% gel' },
      { label: '	XYLOCAINE JELLY 2%' },
      { label: '	TRADOCAN FORTE  8mg Lozenges' },
      { label: '	XYLOCAINE 2% vial' },
      { label: '	XYLOCAINE 10% pump spray' },
      { label: '	XYLOCARD 20% prefilled syringe' },
    ],
  },
  {
    label: '	LIDOCAINE+MICONAZOLE',
    tradeLabels: [{ label: '	MICOBAN oral gel' }],
  },

  {
    label: '	LIDOCAINE+NAPROXENE',
    tradeLabels: [{ label: '	APRANAX injection 550mg' }],
  },
  {
    label: '	LIDOCAINE+NITROFURAZONE',
    tradeLabels: [{ label: '	FURASEEN-L oint.in soluble dressing(Cancelled)' }],
  },
  {
    label: '	LIDOCAINE+PANTHENOL',
    tradeLabels: [
      { label: '	LIGNOPANTHEN  gel' },
      { label: '	LIGNOPANTHEN  gel' },
    ],
  },

  {
    label: '	LIDOCAINE+PHENYLEPHRINE+THIOMERSAL',
    tradeLabels: [{ label: '	CHROMODERM topical solution' }],
  },
  {
    label: '	LIDOCAINE+PRILOCAINE',
    tradeLabels: [
      { label: '	EZANAL top. Cream' },
      { label: '	EZANAL top. Cream' },
      { label: '	EMLA patches' },
      { label: '	EMLA cream' },
      { label: '	PRIDOCAINE topical cream' },
    ],
  },

  {
    label: '	LIDOCAINE+TRIBENOSIDE',
    tradeLabels: [
      { label: '	PROCTO-GLYVENOL supp.' },
      { label: '	PROCTO-GLYVENOL topical cream' },
    ],
  },
  {
    label: '	LINCOMYCIN',
    tradeLabels: [
      { label: '	LINCOBIOTIC 300mg amp.' },
      { label: '	LINCOCIN 300mg/ml amp.' },
      { label: '	LINCOCIN 600mg/2ml I.M./I.V.amp' },
    ],
  },

  {
    label: '	LINDANE',
    tradeLabels: [
      { label: '	SCABINE 0.3% cream' },
      { label: '	SCABINE 0.3 % lotion.' },
    ],
  },
  {
    label: '	LINEZOLID',
    tradeLabels: [
      { label: '	AVEROZOLID f.c.tab.' },
      { label: '	AVEROZOLID 100mg/5ml granules for oral susp.' },
      { label: '	RESPENZO 600mg f.c.tab.' },
      { label: '	ZYVOX 600 mg Vial' },
    ],
  },

  {
    label: '	LISINOPRIL',
    tradeLabels: [
      { label: '	ACINOPRIL 20mg tab.' },
      { label: '	LISINOPRIL-10 10mg tab.' },
      { label: '	LISOPRIL 10mg tabs.' },
      { label: '	MAXIPRIL 20mg tab.' },
      { label: '	MAXIPRIL 5mg scored tab.' },
      { label: '	SINOPRIL 5mg tab.' },
      { label: '	SINOPRIL 20mg tab.' },
      { label: '	ZESTRIL 10mg tab.' },

      { label: '	ZESTRIL 5mg tab.' },
      { label: '	SINOPRIL 10mg tab.' },
      { label: '	ZESTRIL 20mg tab.' },
    ],
  },
  {
    label: '	LISURIDE HYDROGEN MALEATE',
    tradeLabels: [{ label: '	DOPERGIN 0.2mg scored tab.' }],
  },

  {
    label: '	LITHIUM CARBONATE',
    tradeLabels: [
      { label: '	PRIADEL 400mg tab.' },
      { label: '	PRIANIL C.R.400mg controlled release tab.' },
      { label: '	PRIANIL C.R.400mg controlled release tab.' },
    ],
  },
  {
    label: '	LIVE ATTENUATED ROTAVIRUS',
    tradeLabels: [
      { label: '	ROTARIX ORAL VACCINE not less than 1000000 CCID50' },
      { label: '	ROTATEQ VACCINE' },
    ],
  },

  {
    label: '	LIVE ATTENUATED VARICELLA VIRUS',
    tradeLabels: [
      { label: '	VARILRIX 2000 PFU monodose/0.5ml vial and pre-filled syringe' },
      { label: '	VARICELLA VACCINE GCC 1400PEU/0.7ml  S.C. vial' },
    ],
  },
  { label: '	LOBELIA TINCTURE', tradeLabels: [{ label: '	STRIPSORE lozenges' }] },
  {
    label: '	LODOXAMIDE',
    tradeLabels: [
      { label: '	ALOMIDE 1mg/ml eye drops' },
      { label: '	THILOMIDE Oph. Sol.' },
    ],
  },

  {
    label: '	LOFEXIDINE',
    tradeLabels: [{ label: '	DETOXYDINE 0.175mg f.c.tab.' }],
  },

  {
    label: '	LOMEFLOXACIN',
    tradeLabels: [
      { label: '	MAXA-FLOX 400mg f.c.tab.' },
      { label: '	MAXA-FLOX 3mg/ml eye drops' },
      { label: '	LOMEFLOX  400mg tab.' },
      { label: '	LOMOXEN 400mg tab.' },
      { label: '	LOMEX 400 mg tablet' },
      { label: '	OKACIN 3mg/ml eye drops' },
      { label: '	ORCHACIN 0.3% eye dps.' },
    ],
  },

  { label: '	LOMUSTINE', tradeLabels: [{ label: '	CEE NU 10-40-100mg caps.' }] },
  {
    label: '	LONAZOLAC CALCIUM',
    tradeLabels: [{ label: '	IRRITREN 200mg  f.c.tab.' }],
  },

  {
    label: '	LOPERAMIDE',
    tradeLabels: [
      { label: '	LOPERASIN 2mg caps.' },
      { label: '	LOPODIUM 1mg/5m syrup' },
      { label: '	LOPODIUM 2mg caps' },
      { label: '	IMODIUM 2mg caps.' },
      { label: '	DIALOP 2mg caps.' },
      { label: '	LOPERASIN syrup' },
      { label: '	SEDOMID 2mg caps' },
    ],
  },

  {
    label: '	LOPERAMIDE+SIMETHICONE',
    tradeLabels: [{ label: '	SIMODATI tabs.' }],
  },

  {
    label: '	LORATADINE',
    tradeLabels: [
      { label: '	CLARITINE 1mg/ml syrup' },
      { label: '	LORATADINE 10mg tab.' },
      { label: '	CLARITINE 10mg tab.' },
      { label: '	LORINE 10mg tab.' },
      { label: '	LORANO 10mg tab.' },
      { label: '	LORINE 5mg/5ml syrup' },
      { label: '	LORANO 5mg/5ml syrup' },
      { label: '	CLARITINE 10mg tab.' },

      { label: '	LORANO 5mg/5ml syrup' },
      { label: '	CLARIHIST 5mg/5ml syrup' },
      { label: '	LORATIN INSTAN 10mg tab.' },
      { label: '	CLARIHIST 10mg tab.' },
      { label: '	LORATADINE 5mg/5ml susp.' },
      { label: '	LORATAN 5mg/5ml syrup' },
      { label: '	LORATAN 10mg M.R. tab.' },
      { label: '	MOSEDIN 5mg/5ml  syrup' },
      { label: '	MOSEDIN 10mg tab.' },
      { label: '	LORATIN 10mg tab.' },
    ],
  },
  {
    label: '	LORATADINE+PARACETAMOL+PSEUDOEPHEDRINE',
    tradeLabels: [
      { label: '	ATSHI f.c.tab' },
      { label: '	TRIMED FLU  f.c.tab.' },
    ],
  },

  {
    label: '	LORATADINE+PSEUDOEPHEDRINE',
    tradeLabels: [
      { label: '	MOSEDIN PLUS S.R.caps' },
      { label: '	LORATIN D repetabs' },
      { label: '	DECONGESS L caps.' },
      { label: '	CLARINASE repetabs.' },
      { label: '	LORATIN D repetabs' },
    ],
  },

  {
    label: '	LORAZEPAM',
    tradeLabels: [
      { label: '	APO-LORAZEPAM 2 mg TAB.' },
      { label: '	ATIVAN 1  mg tab.' },
    ],
  },
  { label: '	LORMETAZEPAM', tradeLabels: [{ label: '	LORAMET 1mg tab.' }] },

  {
    label: '	L-ORNITHINE-L-ASPARTATE',
    tradeLabels: [
      { label: '	HEPA-MERZ CONCENTRATE 5gm/10ml infusion' },
      { label: '	HEPA-MERZ CONCENTRATE 5gm/10ml infusion' },
      { label: '	ASPATREND granules in sachets' },
      { label: '	LOLAWEST 3gm Sachets' },
      { label: '	ORNIHEPARATE 5gm/10ml solution for I.V inf.' },
      { label: '	TIGORNICINE 3g sachets' },
    ],
  },

  {
    label: '	LORNOXICAM',
    tradeLabels: [
      { label: '	LORNOXICAM  8mg f.c.tab' },
      { label: '	LORGEQUE 8mg f.c.tab.' },
      { label: '	LORNICAM 8mg rapid disintegrating tab.' },
      { label: '	LORNOXICAM  4mg f.c.tab' },
      { label: '	XEFO 4mg f.c.tab.' },
      { label: '	RHEUXICAM 4mg f.c.tab.' },
      { label: '	RHEUXICAM 8mg f.c.tab.' },
      { label: '	XEFO 8mg/2ml vial for I.M./I.V. inj.' },

      { label: '	TOPRANO 8mg f.c.tab.' },
      { label: '	XEFO RAPID 8mg f.c.tab.' },
      { label: '	ZEFICAM 8mg f.c. tab.' },
      { label: '	ZEFICAM 4mg f.c. tablets' },
      { label: '	TOPRANO 4mg f.c.tab.' },
      { label: '	XEFO 8mg f.c.tab.' },
    ],
  },

  {
    label: '	LOSARTAN POTASSIUM',
    tradeLabels: [
      { label: '	AMOSAR 100mg f.c.tab.' },
      { label: '	COZAAR 50mg tab.' },
      { label: '	AMOSAR 25mg f.c.tab.' },
      { label: '	LOSARTAN 50mg tab.' },
      { label: '	LOSARTAN 100mg  scored f.c.tab.' },
      { label: '	LOZAPRESS 25mg f.c.tab.' },
      { label: '	LOZAPRESS 50mg f.c. tablet' },
      { label: '	LOSARTAN  50mg tab.' },

      { label: '	LOSAR 50mg f.c.tab.' },
      { label: '	COZAAR 100mg f.c.tab' },
      { label: '	AMOSAR 50mg f.c. tab.' },
      { label: '	KANZAR 25mg tab.' },
      { label: '	KANZAR 100mg f.c. tab.' },
      { label: '	ARATINS 25mg tab.' },
      { label: '	RASIN 25mg tab.' },
      { label: '	REMTOZAR 100mg f.c.tab.' },
      { label: '	SANITRAN 50mg f.c. tab.' },
    ],
  },

  {
    label: '	LOVASTATIN',
    tradeLabels: [
      { label: '	LIPDIP.' },
      { label: '	CHOLILYSIS 40mg tab.' },
      { label: '	LOWCHOL 10mg tab.' },
      { label: '	CHOLILYSIS 10mg tab.' },
      { label: '	LOWCHOL 10mg tab.' },
      { label: '	CHOLILYSIS 20mg tab.' },
      { label: '	LIPDIP 10mg tab.' },
      { label: '	LOWCHOL 40mg tab.' },

      { label: '	LOWCHOL 20mg tab.' },
      { label: '	LOVASTAN 20mg tab.' },
    ],
  },
  {
    label: '	LOXAPINE',
    tradeLabels: [
      { label: '	LOXAPINE 25mg caps.' },
      { label: '	LOXAPINE 50mg caps.' },
    ],
  },

  {
    label: '	LOXOPROFEN',
    tradeLabels: [
      { label: '	LOUJAIN 60mg hard gelatin caps.' },
      { label: '	ROXOGESIC 60mg tab.' },
      { label: '	ROXONIN 60mg f.c.tab.' },
    ],
  },
  { label: '	LYNESTRENOL', tradeLabels: [{ label: '	EXLUTON 0.5mg tab.' }] },

  {
    label: '	LYSINE ACETYLSALICYLATE',
    tradeLabels: [
      { label: '	AMRIGIC 0.9gm vial' },
      { label: '	ASPIRGINE 0.9gm I.V./I.M. vial' },
    ],
  },
  {
    label: '	MACROGOL 4000',
    tradeLabels: [
      { label: '	FORTANS 64gm sachets' },
      { label: '	FORLAX 10gm sachet' },
    ],
  },

  {
    label: '	MAGALDRATE',
    tradeLabels: [
      { label: '	ACICONE 720mg chewable tab.' },
      { label: '	ANTACID-JEDCO 480mg chewable tab.' },
      { label: '	ACICONE SUSPENSION' },
      { label: '	MIOPAN 10.8gm/100ml susp.' },
      { label: '	ACICONE SUSPENSION' },
      { label: '	GLYCODAL-M 480mg/5ml susp.' },
      { label: '	RIOPAN 800mg chewable tab.' },
      { label: '	RIOPAN 1600mg /10ml gel' },
    ],
  },

  {
    label: '	MAGALDRATE+SIMETHICONE',
    tradeLabels: [
      { label: '	NEUTRALON chewable tab.' },
      { label: '	ACICONE -S susp.' },
      { label: '	ACICONE -S susp.' },
      { label: '	ACICONE-S chewable tab.' },
      { label: '	MIOPAN PLUS susp.' },
      { label: '	NEUTRALON chewable tab.' },
    ],
  },

  {
    label: '	MAGALDRATE+SIMETHICONE+SODIUM ALGINATE',
    tradeLabels: [{ label: '	SEDO-MAG susp' }],
  },
  {
    label: '	MAGNESIUM CHLORIDE',
    tradeLabels: [
      { label: '	PERITONEAL DIALYSIS SOLUTION ( LACTATE ) IN GLUCOSE 7%' },
    ],
  },

  {
    label: '	MAGNESIUM CITRATE',
    tradeLabels: [
      { label: '	MAGNESIUM DIASPORAL 610mg lozenges' },
      { label: '	MAGNESIUM eff.sachets' },
      { label: '	MAGNESIUM DIASPORAL 300mg sachets' },
      { label: '	EPIMAG 2.125g effervescent powder' },
    ],
  },
  {
    label: '	MAGNESIUM GLUCONATE+MAGNESIUM OXIDE',
    tradeLabels: [{ label: '	MAGNESIUM PLUS tab.' }],
  },

  {
    label: '	MAGNESIUM HYDROXIDE',
    tradeLabels: [{ label: '	LAXOMAG 7.5% susp.' }],
  },
  {
    label: '	MAGNESIUM HYDROXIDE+PARAFFIN OIL',
    tradeLabels: [{ label: '	LAXOFIN susp.' }],
  },
  {
    label: '	MAGNESIUM OXIDE',
    tradeLabels: [
      { label: '	COLIMAG-V Eff.granules' },
      { label: '	CITRO-MAG eff.granules 7.11 gm/100 gm' },
    ],
  },

  {
    label: '	MAGNESIUM SULPHATE',
    tradeLabels: [
      { label: '	MAGNESIUM SULPHATE 100mg/ml amp. B.P.2003' },
      { label: '	LAXEL effervescent sachet' },
      { label: '	MAGNESIUM DIASPORAL FORTE 640mg amp.' },
      { label: '	MAGNESIUM SULPHATE 100mg/ml amp. B.P.2003' },
      { label: '	MAGNESIUM SULFATE 10% injection  U.S.P 27' },
      { label: '	BIDAREWS eff.salt 16 gm/100 gm' },
      { label: '	MAGNISOL AMP.' },
      { label: '	Magnesium Sulphate /amp/otsuka' },
    ],
  },

  {
    label: '	MAGNESIUM SULPHATE+YEAST',
    tradeLabels: [{ label: '	SPASMAG caps.' }],
  },
  {
    label: '	MAGNESIUM+CITRIC ACID+VITAMIN B6',
    tradeLabels: [{ label: '	CITROCID MAGNESIUM PLUS eff. Salt.' }],
  },
  {
    label: '	MAJORAM+PEPPERMINT+ROSEMARY+SALVIA',
    tradeLabels: [{ label: '	MEPACO HERBS FOR HEADACHE' }],
  },

  {
    label: '	MALATHION',
    tradeLabels: [
      { label: '	LICE CLEAN 0.5gm/100ml topical lotion' },
      { label: '	PRIODERM  0.5 % lotion' },
      { label: '	QUICK OINT.  0.5 %' },
      { label: '	QUICK OINT.  0.5 %' },
      { label: '	QUICK 0.5 %  LOTION' },
    ],
  },
  {
    label: '	MANGANESE GLYCEROPHOSPHATE+NICOTINAMIDE+POTASSIUM ',
    tradeLabels: [],
  },

  {
    label: '	MANNITOL',
    tradeLabels: [
      { label: '	MANNITOL 20% I.V.infusion W/V BP2000' },
      { label: '	MANNITOL 20%W/V I.V.infusion B.P.2002' },
      { label: '	MANNITOL 10% I.V.infusion U.S.P 28' },
      { label: '	MANNITOL 20% I.V.infusion W/V BP2000' },
      { label: '	MANNITOL 10%W/V I.V.infusion BP 2003' },
      { label: '	MANNITOL 20% inj.' },
      { label: '	MANNITOL 10% I.V.infusion BP 2002' },
      { label: '	MANNITOL 20% I.V.infusion U.S.P 28' },

      { label: '	MANNITOL 10% I.V.infusion' },
      { label: '	MANNITOL 10% I.V.infusion U.S.P 28' },
      { label: '	MANNITOL 20% I.V.infusion U.S.P 28' },
      { label: '	MANNITOL 10%W/V I.V.infusion BP 2003' },
      { label: '	MANNITOL 20% W/V I.V.infusion B.P.2003' },
      { label: '	MANNITOL INJECTION 5% U.S.P.XXX' },
      { label: '	MANNITOL 20% W/V I.V.infusion B.P.2003' },
    ],
  },

  {
    label: '	MAPROTILINE',
    tradeLabels: [
      { label: '	LUDIOMIL 10mg f.c.tab.' },
      { label: '	LUDIOMIL 75mg f.c.tab.' },
      { label: '	LUDIOMIL 25mg f.c.tab.' },
      { label: '	LUDIOMIL 10mg f.c.tab.' },
      { label: '	LUDIOMIL 75mg f.c.tab.' },
    ],
  },

  {
    label: '	MEBENDAZOLE',
    tradeLabels: [
      { label: '	ANTIVER 100mg tab.' },
      { label: '	ANTIVER 100mg tab.' },
      { label: '	ANTHELMIN 0.6gm/30ml susp.' },
      { label: '	ANTIVER 100mg/5ml susp.' },
      { label: '	MEBAMOX 100mg  tab.' },
      { label: '	PENTALMIN 2% susp.' },
      { label: '	VERMIN 100mg/5ml susp.' },
      { label: '	VERM 1 500mg tab.' },

      { label: '	PENTALMIN 100mg tab.' },
      { label: '	VERMIN 100mg tab.' },
      { label: '	PERMAX 100mg Tab.' },
      { label: '	PERMAX 100mg/5ml susp.' },
    ],
  },

  {
    label: '	MEBEVERINE',
    tradeLabels: [
      { label: '	COLOSPASMIN FORTE 135mg sugar coated tab.' },
      { label: '	DUSPATALIN  135mg tab.' },
      { label: '	COLOVERIN 200mg S.R.caps.' },
      { label: '	COLOSPASMIN 100mg tab.' },
      { label: '	COLORELAX 135mg f.c.tab.' },
      { label: '	MEPACOLON 200mg SR f.c.tab.' },
      { label: '	COLOVERINE 135mg sugar coated tab.' },
      { label: '	MEPACOLON 135mg f.c.tab.' },

      { label: '	DUSPATALIN 100mg tab.' },
      { label: '	DUSPATALIN LIQUID 10mg/ml' },
      { label: '	SPASMOTALIN  100mg tab.' },
      { label: '	USPAVERINE 200 MR cap.' },
      { label: '	SPASTALIN 100mg tab.' },
    ],
  },
  {
    label: '	MEBEVERINE+SULPIRIDE',
    tradeLabels: [{ label: '	COLONA f.c.tab.' }],
  },

  {
    label: '	MECLIZINE HYDROCHLORIDE',
    tradeLabels: [{ label: '	NAVOPROXEN 50mg supp.' }],
  },

  {
    label: '	MECLIZINE+VITAMIN B6',
    tradeLabels: [
      { label: '	EMEZINE B6 30/62.5 supp.' },
      { label: '	NAVOPROXIN f.c.tab.' },
      { label: '	DIZIREST B6 tab.' },
      { label: '	EZADOXINE tab' },
      { label: '	EMEZINE 25/50mg tab.' },
      { label: '	MECLODOXINE tab.' },
      { label: '	POSTADOXINE tab.' },
      { label: '	RESTINE TAB.(APPROVED RE-REG)' },

      { label: '	VOMIDOXINE tab.' },
      { label: '	VOMIDOXINE 30mg supp.' },
    ],
  },
  {
    label: '	MECLOFENOXATE',
    tradeLabels: [
      { label: '	LOMEDRIL 250mg tab.' },
      { label: '	LUCIDRIL 250mg vial' },
      { label: '	LUCIDRIL Mille 1000mg vial' },
      { label: '	LUCIFORTE 500mg vial' },
      { label: '	LUCIDRIL 250mg f.c tab.' },
      { label: '	NOODRIL 250mg tab.' },
    ],
  },

  {
    label: '	MECOBALAMIN',
    tradeLabels: [
      { label: '	COBAL 500mcg f.c.tab.' },
      { label: '	ADWINERVE 500mcg caps.' },
      { label: '	VIVOPAL 500mcg f.c.tab.' },
    ],
  },
  { label: '	MEDROGESTONE', tradeLabels: [{ label: '	COLPRONE 5 mg tab.' }] },

  {
    label: '	MEDROXYPROGESTERONE',
    tradeLabels: [
      { label: '	FARLUTAL 250mg tab.' },
      { label: '	DEPO-PROVERA 150mg/ml vial' },
      { label: '	MEGESTRON 150mg/ml I.M.vial' },
      { label: '	PROVERA 5mg tab.' },
      { label: '	ONCOPROVERA 1000 mg' },
    ],
  },

  {
    label: '	MEFENAMIC ACID',
    tradeLabels: [
      { label: '	MAFEPAIN 500mg f.c. tab.' },
      { label: '	MEFENAM 500mg caps.' },
      { label: '	MEFENTAN 250mg caps.' },
      { label: '	FAROSTAN FORTE 500mg tab.' },
      { label: '	MEFENTAN 250mg supp.' },
      { label: '	PONO 250mg caps.' },
      { label: '	PONOFORTE 500mg caps.' },
      { label: '	PONSTAN FORTE  500mg caps.' },

      { label: '	PONAGIC FORTE 500mg f.c.tab.' },
    ],
  },
  {
    label: '	MEGESTROL ACETATE',
    tradeLabels: [
      { label: '	MEGACE 160mg tab.' },
      { label: '	MEGACE 40mg tab.' },
    ],
  },
  {
    label: '	MEGLUMINE AMIDOTRIZOATE+SODIUM AMIDOTRIZOATE',
    tradeLabels: [
      { label: '	ANGIOGRAPHIN  65 % inj.' },
      { label: '	GASTROGRAFIN 76% solution' },
      { label: '	UROGRAFIN 76% (Aqueous solution) amp.' },
    ],
  },

  {
    label: '	MEGLUMINE IOXAGLATE+SODIUM IOXAGLATE',
    tradeLabels: [
      { label: '	HEXABRIX 320 mg/ml vial' },
      { label: '	HEXABRIX 320 mg/ml vial' },
    ],
  },
  {
    label: '	MEGLUMINE IOXITALAMATE+SODIUM IOXITALAMATE',
    tradeLabels: [
      { label: '	TELEBRIX -35 vial.50ml' },
      { label: '	TELEBRIX -38 vial.20ml' },
      { label: '	TELEBRIX-35 vial (Hospital)' },
    ],
  },

  {
    label: '	MELATONIN',
    tradeLabels: [
      { label: '	MELATONIN 3mg caps.' },
      { label: '	MELATONIN caps.' },
      { label: '	MELATONIN 1 MG CAP.' },
      { label: '	MELATONIN 3mg tab.' },
      { label: '	ORIGINAL MELATONIN 3mg caps.' },
      { label: '	VIVA-MAX 3mg tab.' },
    ],
  },

  {
    label: '	MELATONIN+PYRIDOXIN+VALERIAN',
    tradeLabels: [{ label: '	EZATIN 1 mg caps' }],
  },
  {
    label: '	MELATONIN+VITAMIN B6',
    tradeLabels: [
      { label: '	MELATONIN-P tab.' },
      { label: '	VIVA-MAX  Micro tab.' },
      { label: '	VIVA-MAX 1 tablet' },
    ],
  },

  {
    label: '	MELOXICAM',
    tradeLabels: [
      { label: '	MEXICAM 15mg f.c.tab.' },
      { label: '	MEXICAM 15mg/3ml I.M.amp.' },
      { label: '	MEXICAM 7.5mg f.c.tab.' },
      { label: '	MEXICAM 15mg supp.' },
      { label: '	MELOCAM 7.5mg tab.' },
      { label: '	MOXEN 7.5mg tab.' },
      { label: '	MOXEN 15mg tabs.' },
      { label: '	ANTICOX II 15mg/3ml amp.' },

      { label: '	MELOXICAM 5mg/ml I.M.amp.' },
      { label: '	MOBIC 15 mg tab.' },
      { label: '	ANTICOX II 15mg supp.' },
      { label: '	MELOXICAM 15mg/2ml amp.' },
      { label: '	ANTICOX II 15mg tab.' },
      { label: '	ANTICOX II 7.5mg caps.' },
      { label: '	MELOXICAM 15mg tab.(APPROVED RE-REG)' },
      { label: '	MELOXICAM  15mg supp.' },
      { label: '	MELOFLAM 15mg f.c.tab.' },
      { label: '	MOBITIL 7.5mg tablet' },

      { label: '	MOBIC 15mg supp.' },
      { label: '	MOBIC 15mg/1.5ml amp.' },
      { label: '	MOBIC 7.5mg tab.' },
      { label: '	MOBITIL 15 MG SUPPOSITORY' },
      { label: '	MELOFLAM 7.5mg supp.' },
      { label: '	MOBITIL 15mg/1.5ml ampoule' },
      { label: '	MELOCAM 15mg/2ml amp.' },
      { label: '	MELOCAM 15mg supp.' },
      { label: '	MELOCAM 15mg tab.' },
      { label: '	MOBITIL 15mg tablet' },
    ],
  },
  { label: '	MELPHALAN', tradeLabels: [{ label: '	ALKERAN 2mg f.c.tab.' }] },

  {
    label: '	MEMANTINE',
    tradeLabels: [
      { label: '	ALZMENDA 10mg f.c.tab' },
      { label: '	MANTINE 10mg f.c.tab.' },
      { label: '	MEMEXA 10mg f.c.tab.' },
      { label: '	DEMENTEXA 10mg f.c. tabs.' },
      { label: '	ALZMENDA 5mg f.c. tabs.' },
      { label: '	ALZMENDA 20mg f.c. tabs.' },
      { label: '	CONDOMANIA f.c.tab' },
      { label: '	EBIXA 10mg f.c. tab.' },

      { label: '	RAVEMANTINE 10mg f.c. tabs.' },
    ],
  },
  {
    label: '	MENTHOL+METHYL SALICYLATE',
    tradeLabels: [
      { label: '	ARTHRITIS FREE SPRAY topical spray.' },
      { label: '	SEPCOMOUTH mouth wash' },
    ],
  },
  {
    label: '	MEPIVACAINE',
    tradeLabels: [
      { label: '	MEPICATON 3% carpule' },
      { label: '	MEPECAINE 3% Cartridges' },
      { label: '	SCANDONEST PLAIN 3 %' },
    ],
  },

  {
    label: '	MEQUITAZINE',
    tradeLabels: [
      { label: '	MEQUITAZINE 5 mg tab.' },
      { label: '	MEKI AH 2.5mg/5ml syrup' },
      { label: '	PRIMALAN 5mg tab.' },
      { label: '	PRIMALAN 30mg/60ml syrup' },
      { label: '	PRIMA tab.' },
      { label: '	PRIMA 0.05g/100ml syrup' },
    ],
  },

  {
    label: '	MERCAPTOPURINE',
    tradeLabels: [{ label: '	PURI-NETHOL 50mg tab.' }],
  },
  {
    label: '	MERCUROCHROME',
    tradeLabels: [
      { label: '	MERCUROCHROME PAINT 2% E.P84' },
      { label: '	MERCUROCHROME PAINT 2% E.P84' },
      { label: '	AQUEOUS PIGMENT OF MERCUROCHROME 2% EP 84' },
    ],
  },

  {
    label: '	MEROPENEM',
    tradeLabels: [
      { label: '	MERONEM 500mg I.M.vial' },
      { label: '	MERONEM 500mg I.V.vial' },
      { label: '	MERONEM 1000mg I.V.vial(Hospital)' },
    ],
  },

  {
    label: '	MESALAZINE',
    tradeLabels: [
      { label: '	SALAZINE 500mg caps.' },
      { label: '	SALOFALK 250mg tab.' },
      { label: '	SALAZINE 1gm rectal supp.' },
      { label: '	PROCTASA 500mg adult supp.' },
      { label: '	SALOFALK 250mg tab.' },
      { label: '	PENTASA 500mg slow release tab.' },
      { label: '	SALOFALK 500mg tab.' },
      { label: '	PENTASA 1gm supp.' },

      { label: '	PENTASA 1gm/100ml enema' },
    ],
  },
  {
    label: '	MESNA',
    tradeLabels: [
      { label: '	MESNA 100mg/ml amp.' },
      { label: '	MESNA 100mg/ml amp.' },
      { label: '	UROMITEXAN 400mg/4ml I.V.amp.' },
      { label: '	UROMITEXAN 200mg/2ml amp.' },
      { label: '	UROMES 200mg/2ml amp.for I.V. inj.' },
    ],
  },

  {
    label: '	MESTEROLONE',
    tradeLabels: [
      { label: '	CIDOVIRON 25mg tab.' },
      { label: '	HORMO-6 25mg f.c.tab.' },
      { label: '	PROVIMIST tab.' },
      { label: '	PROVIRON 25mg tab.' },
    ],
  },
  {
    label: '	METAXALONE',
    tradeLabels: [
      { label: '	METAXALON 800mg tab.' },
      { label: '	SABAXALONE 800mg tab.' },
    ],
  },

  {
    label: '	METFORMIN + SITAGLIPTIN',
    tradeLabels: [
      { label: '	JANAGLIP PLUS  50/1000mg f.c. tab.' },
      { label: '	JANUMET 50/1000mg f.c.tab.' },
    ],
  },

  {
    label: '	METFORMIN HYDROCHLORIDE',
    tradeLabels: [
      { label: '	MEGLUCON 850mg f.c.tab.' },
      { label: '	JASPROMIN 1000mg extended release f.c.tab.' },
      { label: '	METFORMIN 500mg tab.B.P.2000' },
      { label: '	EAFORMEAT 1000mg f.c. tabs.' },
      { label: '	DIAQUIT 850mg tab.' },
      { label: '	CIDOPHAGE RETARD 850mg S.R.tab.' },
      { label: '	CIDOPHAGE RETARD 850mg S.R.tab.' },
      { label: '	CIDOPHAGE 1000mg f.c.tab.' },

      { label: '	CIDOPHAGE  500mg  tab.' },
      { label: '	DIAPHAGE 850mg S.R.tab.' },
      { label: '	ALEXODIAB 1000mg tablets' },
      { label: '	AMOPHAGE 850mg tab.' },
      { label: '	GLUCOPHAGE 850mg f.c.tab.' },
      { label: '	GLUCOPHAGE 500mg f.c.tab.' },
      { label: '	GLUCOPHAGE 1000mg f.c.tab.' },
      { label: '	AMOPHAGE 500mg tab.' },
      { label: '	DIAPHAGE 500mg tab.' },
      { label: '	GLUCOFORMIN 500mg tab.' },

      { label: '	DIAPHAGE 1000mg f.c.tab.' },
      { label: '	GLUCOLIGHT XR 500mg f.c.tab.' },
      { label: '	RETARDOPHAGE 500mg tab.' },
    ],
  },
  {
    label: '	METFORMIN+NATEGLINIDE',
    tradeLabels: [{ label: '	STARLIX COMBI film coated tab.' }],
  },

  {
    label: '	METFORMIN+PIOGLITAZONE',
    tradeLabels: [
      { label: '	BIOGLITA PLUS 15/850mg f.c.tab.' },
      { label: '	BIOGLITA  PLUS 15/500mg f.c.tab.' },
      { label: '	PIOGLUMET 500/15MG f.c. tabs.' },
      { label: '	PIOGLUMET 15/850mg f.c. tabs.' },
    ],
  },

  {
    label: '	METFORMIN+ROSIGLITAZONE',
    tradeLabels: [
      { label: '	AVANDAMET 1/500 mg f.c.tab.' },
      { label: '	AVANDAMET 2/500mg f.c.tab.' },
      { label: '	ROSIPLUS 4/500mg f.c.tab.' },
      { label: '	ROSECOVER 2/1000mg f.c. tabs.' },
      { label: '	ROSECOVER 2/500mg f.c. tabs.' },
      { label: '	ROSECOVER 4/1000mg f.c. tabs.' },
      { label: '	ROSECOVER 4/500mg f.c. tabs.' },
      { label: '	ROSIDIAB 2/500mg f.c. tabs.' },

      { label: '	ROSIPLUS 2/500mg f.c.tab.' },
    ],
  },
  {
    label: '	METHIONINE+PARACETAMOL',
    tradeLabels: [
      { label: '	HEPAMOL 500mg  tab.' },
      { label: '	TEMPGESIC f.c.tab.' },
      { label: '	PARATHIONE 600mg f.c.tab.' },
      { label: '	PARALEX  PLUS tab.' },
    ],
  },

  {
    label: '	METHOCARBAMOL+PARACETAMOL',
    tradeLabels: [
      { label: '	METHORELAX tab.' },
      { label: '	FLEXPRO EXTRA f.c.tab.' },
    ],
  },

  {
    label: '	METHOTREXATE',
    tradeLabels: [
      { label: '	METHOTREXATE 50mg/2ml vial' },
      { label: '	METHOTREXATE 1gm/10ml vialB.P.88' },
      { label: '	METHOTREXATE 2.5mg tab.' },
      { label: '	METHOTREXATE 2.5mg tab.' },
      { label: '	METHOTREXATE 2.5mg tab.' },
      { label: '	METHOTREXATE 2.5mg tab.' },
      { label: '	METHOTREXATE 2.5mg tab.' },
      { label: '	METHOTREXATE 2.5mg tab.' },

      { label: '	METHOTREXATE 20mg vial' },
      { label: '	METHOTREXATE 25mg/ml vial' },
      { label: '	METHOCIP 50mg/2ml vial' },
      { label: '	METHOTREXATE 500mg vial' },
      { label: '	METHOTREXATE 1gm/10ml vialB.P.88' },
      { label: '	METHOTREXATE 50mg/2ml vial' },
      { label: '	METHOTREXATE 20mg vial' },
      { label: '	METHOTREXATE 50mg/2ml vial' },
      { label: '	METHOTREXATE 5mg vial' },
      { label: '	EMTHEXATE PF 25mg/ml vial' },

      { label: '	METHOTREXATE MERCK 50mg\2ml vial' },
      { label: '	METHOTREXATE SODIUM 500mg vial' },
      { label: '	METHOTREXATE SODIUM 50mg/2ml vial' },
      { label: '	METHOTREXATE SODIUM 50mg/2ml vial' },
      { label: '	METHOTREXATE-EBEWE 100mg/ml vial' },
      { label: '	METHOTREXATE-EBEWE 50mg/5ml vial.' },
      { label: '	EMTHEXATE PF 25mg/ml vial' },
      { label: '	EMTHEXATE PF 100mg/ml vial' },
      { label: '	EMTHEXATE PF 100mg/ml vial' },
      { label: '	METHOTREXATE 50mg/2ml B.P.88 injection.' },

      { label: '	MTX  25mg/ml vial' },
      { label: '	METHOTREXAT EBEWE 2.5mg tab.' },
      { label: '	METHOTREXATE 25mg/ml vial' },
      { label: '	MTX  25mg/ml vial' },
      { label: '	UNITREXATE 50mg/2ml sol. For I.M,I.V inj & I.V inf.' },
      { label: '	UNITREXATE 50mg/2ml sol. For I.M,I.V inj & I.V inf.' },
      { label: '	UNITREXATE 50mg/2ml sol. For I.M,I.V inj & I.V inf.' },
      { label: '	UNITREXATE 50mg/2ml sol. For I.M,I.V inj & I.V inf.' },
    ],
  },

  {
    label: '	METHOXSALEN',
    tradeLabels: [
      { label: '	NEO-MEDANINE 15mg tab.' },
      { label: '	NEO-MEDANINE F.R.10mg tab.' },
      { label: '	ULTRA-MEDANINE 10mg caps.' },
      { label: '	ULTRA-MELADININE' },
      { label: '	ULTRA-MEDANINE 0.03g/15ml  local paint.' },
    ],
  },
  {
    label: '	METHYL CHALCONE HESPERIDINE+RUSCUS ACULEATUS EXTRA',
    tradeLabels: [],
  },

  {
    label: '	METHYL CYSTIENE',
    tradeLabels: [{ label: '	VISCOFREE 100 mg hard gelatin cap.' }],
  },
  {
    label: '	METHYL PHENOBARBITONE+PHENOBARBITONE+PHENYTOIN',
    tradeLabels: [{ label: '	COMIDAL-L  tab.' }],
  },
  {
    label: '	METHYL SALICYLATE',
    tradeLabels: [{ label: '	RUBALGIN 15 % topical cream' }],
  },

  {
    label: '	METHYLCOBALAMIN',
    tradeLabels: [{ label: '	COBALVEX B12 0.5mg/ml amp.' }],
  },

  {
    label: '	METHYLDOPA',
    tradeLabels: [
      { label: '	EPIDOPA 250mg f.c. tab.' },
      { label: '	KADOMET 250mg tab' },
      { label: '	METHYLDOPA 250mg f.c.tab.' },
      { label: '	ALDOMET 500 mg tab' },
      { label: '	ALDOMET 250mg/5ml vial(Hospital)' },
      { label: '	ADAMAT 250mg caps.' },
      { label: '	ALDOMET 250mg tab' },
      { label: '	ALFADOPA 250mg f.c.tab.' },
    ],
  },

  {
    label: '	METHYLERGOMETRINE HYDROGEN MALEATE',
    tradeLabels: [
      { label: '	METHERGIN 0.125mg sugar coated tab.' },
      { label: '	METHERGIN 0.2mg/ml amp.' },
    ],
  },
  {
    label: '	METHYLPHENIDATE',
    tradeLabels: [
      { label: '	CONCERTA 36mg extended release tab.' },
      { label: '	CONCERTA 18mg extended release tab.' },
    ],
  },

  {
    label: '	METHYLPREDNISOLONE',
    tradeLabels: [
      { label: '	METHYL PREDNISOLONE SOD. SUCCINATE' },
      { label: '	M.P.A 40mg/ml vial' },
      { label: '	METHYLPREDNISOLONE MYLAN 1g vial for I.V. inj./inf.' },
      { label: '	METHYLPREDNISOLONE MERCK 500mg vials.' },
      { label: '	DEPO-MEDROL 40mg/ml vial' },
      { label: '	METHYL PREDNISOLONE SOD.SUCCINATE' },
      { label: '	URBASON TAB. 4 MG (PLAIN)' },
      { label: '	SOLU-MEDROL 1gm I.M./I.V.vial' },

      { label: '	SOLU-MEDROL 500mg vial.' },
      { label: '	URBASON 8mg tab.' },
      { label: '	URBASON RETARD 4mg enteric coated tab.' },
      { label: '	URBASON RETARD 8mg tab.' },
    ],
  },
  {
    label: '	METHYLTESTOSTERONE+MINERALS+PHOSPHOLIPIDS+SAFFLOWE',
    tradeLabels: [],
  },
  {
    label: '	METIPRANOLOL+PILOCARPINE',
    tradeLabels: [{ label: '	NORMOGLAUCON 20mg/ml eye drops' }],
  },

  {
    label: '	METOCLOPRAMIDE',
    tradeLabels: [
      { label: '	MECLOPRAM 20mg adult supp.' },
      { label: '	MEPRAM 1mg/ml syrup' },
      { label: '	MECLOPRAM 10mg paed.supp.' },
      { label: '	MECLOPRAM 10mg/2ml I.M./I.V.amp.' },
      { label: '	METOCLOPRAMIDE 10mg/2ml amp. for IV/IM inj.' },
      { label: '	MECLOPRAM 2mg/ml oral drops.' },
      { label: '	MECLOPRAM 10mg tab.' },
      { label: '	MECLOPRAM 5mg/5ml syp.' },

      { label: '	CLOPRAM 10mg tab.' },
      { label: '	PLASIL paediatric 4mg/ml drops' },
      { label: '	PRIMPERAN 0.252gm/100ml oral drops' },
      { label: '	PLASIL 10mg/2ml amp.' },
      { label: '	PRIMPERAN 10mg supp.' },
      { label: '	PRIMPERAN 20mg supp.' },
      { label: '	PLEMAZOL 10mg tab.' },
      { label: '	PLEMAZOL 0.1% oral drops' },
      { label: '	PLASIL 10mg tab.' },
      { label: '	PRIMPERAN 0.1gm/100ml syrup' },

      { label: '	PRIMPERAN 10mg/2ml amp.' },
      { label: '	PRIMPERAN 10mg tab.' },
      { label: '	PLEMAZOL 10mg/2ml amp.' },
      { label: '	PLASIL100mg/100ml syrup' },
    ],
  },

  {
    label: '	METOCLOPRAMIDE+PARACETAMOL',
    tradeLabels: [
      { label: '	MIGAURA 5mg/500mg tab.' },
      { label: '	MIGRACID  tab.' },
      { label: '	MIGRACID syrup' },
      { label: '	PASSAMOL tab.' },
      { label: '	PASSAMOL syrup' },
    ],
  },

  {
    label: '	METOCLOPRAMIDE+VITAMIN B6',
    tradeLabels: [{ label: '	ANAUSAN syrup' }, { label: '	ANAUSAN amp.' }],
  },
  {
    label: '	METOPROLOL TARTRATE',
    tradeLabels: [
      { label: '	BETALOL S.R.200mg f.c.tab.' },
      { label: '	LOWPRESS  tab. 100 mg' },
      { label: '	BETALOC 100mg tab.' },
      { label: '	SELOKEN-ZOC 100 MG TABLET' },
    ],
  },

  {
    label: '	METRONIDAZOLE',
    tradeLabels: [
      { label: '	AMRIZOLE 1gm supp.' },
      { label: '	AMRIZOLE 250mg tab.' },
      { label: '	AMRIZOLE 500mg tab.' },
      { label: '	AMRIZOLE 500mg vaginal supp.' },
      { label: '	AMRIZOLE 0.5% vial' },
      { label: '	AMRIZOLE 125mg/5ml susp.' },
      { label: '	FLAGYL 0.5% I.V. infusion' },
      { label: '	METRONIDAZOLE 500mg /100ml I.V. infusion' },

      { label: '	KLION D 100mg vaginal tab.' },
      { label: '	ENTOPHAR 125mg/5ml susp.' },
      { label: '	GEDAZOLE 500mg tab.' },
      { label: '	FARCOZOL 0.75gm/100gm vaginal gel.' },
      { label: '	METRON 0.75 % vag. Gel' },
      { label: '	FLAGELLAT FORTE 200mg/5ml susp.' },
      { label: '	FLAGICURE 200mg/5ml susp.' },
      { label: '	FLAGICURE 250mg tab.' },
      { label: '	DUMOZOL 500mg f.c. tab.' },
      { label: '	FLAGICURE FORTE 500 mg f.c. tab' },

      { label: '	DUMOZOL 125mg/5ml susp.' },
      { label: '	FLAGYL 250mg tab.' },
      { label: '	FLAGYL 4 % susp.' },
      { label: '	FLAGYL 4 % susp.' },
      { label: '	FLAGYL 500mg tab.' },
      { label: '	FLAZOL 500mg/100ml I.V.infusion' },
      { label: '	METROZOLE 250mg tab.' },
      { label: '	METROZOLE 125mg/5ml susp.' },
      { label: '	METROZOL VAGINAL PESSARIES' },
      { label: '	METRONAL  500mg vaginal tab.' },

      { label: '	METRONIDAZOLE 5mg/ml sterile solution for I.V. inf.' },
      { label: '	FLAGICURE 500mg vaginal tab' },
      { label: '	DUMOZOL 500mg/ml I.V.infusion' },
      { label: '	TRICHOGEL 0.75% vaginal gel' },
      { label: '	TRICHOGYL 500mg f.c.tab.' },
      { label: '	ROSAGEL 0.75gm/100gm gel' },
      { label: '	TRICHOGYL 250 mg tab.' },
      { label: '	TRICHOGYL 0.5% I.V.infusion' },
      { label: '	Flagyl 500mg Tab' },
    ],
  },

  {
    label: '	METRONIDAZOLE+NEOMYCIN',
    tradeLabels: [{ label: '	NEOENTROCIN FORT tab.(CANCELLED)' }],
  },
  {
    label: '	METRONIDAZOLE+NYSTATIN',
    tradeLabels: [
      { label: '	AMRIZOLE  N vag.supp.' },
      { label: '	NYSTAZOLE vaginal tab.' },
    ],
  },

  {
    label: '	METRONIDAZOLE+SPIRAMYCIN',
    tradeLabels: [
      { label: '	SPIRAZOLE  tab.' },
      { label: '	SPIRAZOLE FORTE tab.' },
      { label: '	RODOGYL f.c.tab.' },
    ],
  },
  {
    label: '	MEXILETINE',
    tradeLabels: [
      { label: '	MEXITIL 200 mg caps.' },
      { label: '	MEXITIL 250mg amp.' },
    ],
  },

  { label: '	MIANSERIN', tradeLabels: [{ label: '	TOLVON 30mg F.C.tab' }] },
  {
    label: '	MICAFUNGIN',
    tradeLabels: [{ label: '	MYCAMINE 50 mg vial for I.V infusion.' }],
  },

  {
    label: '	MICONAZOLE',
    tradeLabels: [
      { label: '	DAKTARIN 2% oral gel' },
      { label: '	DAKTARIN 2% cream' },
      { label: '	MICOBAN 100mg vaginal supp.' },
      { label: '	GYNO-MYKOTRAL 2% vaginal cream.' },
      { label: '	GYNOZOL 2% vaginal cream' },
      { label: '	MICOBAN 2% topical powder' },
      { label: '	MICONAZ powder' },
      { label: '	GYNOZOL 400mg vaginal soft gelatin cap.' },

      { label: '	MYCOPHARM 2% tincture' },
      { label: '	MONICURE 400mg vaginal supp.' },
      { label: '	MYCOCIDIN  2% cream' },
      { label: '	MICAZOLE 2gm/100gm oral gel' },
      { label: '	BUCCAZOLE 2% oral gel' },
      { label: '	MICAZOLE 2gm/100gm oral gel' },
      { label: '	MICONAZ VAGINAL PESSARIES' },
      { label: '	MICONOL 2% cream' },
      { label: '	MICONAZ 400mg VAGINAL OVULES' },
      { label: '	MONICURE 200mg vaginal supp.' },

      { label: '	ADCOZOLE 2% topical cream' },
      { label: '	MYKOTRAL TINCTURE 2% topical paint' },
      { label: '	GYNOZOL 200mg vaginal soft gelatin capsules' },
      { label: '	MICONAZ- H emulgel' },
      { label: '	MICOBAN  2% cream' },
      { label: '	MICONAZ 2gm/100gm CREAM' },
      { label: '	MICO ORAL 2% oral gel' },
      { label: '	MYKOTRAL 400mg vaginal tab.' },
      { label: '	MYKOTRAL 200mg vaginal tab.' },
      { label: '	MICOBAN 600mg/30ml topical solution' },

      { label: '	GYNO-DAKTARIN 400mg vaginal ovules' },
      { label: '	MYKOTRAL 2% topical powder' },
      { label: '	DERMIZOL 20mg/gm gel' },
      { label: '	MICONOL 2% topical powder' },
      { label: '	DERMOZOLE 2% gel' },
      { label: '	GYNO-DAKTARIN 2% vaginal cream' },
      { label: '	MICONAZ 2% oral gel' },
      { label: '	PEOPODAK 400mg vag. Ovule' },
      { label: '	PEOPODAK 1200 mg vaginal Ovule' },
    ],
  },

  { label: '	MICONAZOLE+MOMETASON', tradeLabels: [{ label: '	ELICA-M cream' }] },
  {
    label: '	MICONAZOLE+NYSTATIN',
    tradeLabels: [{ label: '	MONICURE PLUS vaginal supp.(APPROVED RE-REG)' }],
  },

  {
    label: '	MIDAZOLAM',
    tradeLabels: [
      { label: '	MIDATHETIC 5mg/ml amp.' },
      { label: '	DORMICUM 7.5mg tab.' },
      { label: '	DORMICUM 5mg/ml amp.' },
      { label: '	DORMICUM 5mg/ml amp.' },
      { label: '	MIDATHETIC 7.5mg f.c. tab.' },
      { label: '	MIDATHETIC 5mg/ml amp.' },
    ],
  },

  {
    label: '	MIDODRINE',
    tradeLabels: [
      { label: '	GUTRON 1% oral drops' },
      { label: '	MIDODRINE 1% oral drops' },
      { label: '	GUTRON 2.5mg tab.' },
      { label: '	GUTRON 5mg tab.' },
      { label: '	MIDODRINE 2.5mg tab.' },
    ],
  },

  {
    label: '	MIGLITOL',
    tradeLabels: [
      { label: '	LITOMEN 25mg f.c.tab.' },
      { label: '	LITOMEN 50mg f.c.tab.' },
    ],
  },
  {
    label: '	MINERAL OIL+WHITE PETROLATUM',
    tradeLabels: [{ label: '	LACRI-LUBE S.O.P eye ointment' }],
  },

  {
    label: '	MINERALS+VITAMINS',
    tradeLabels: [
      { label: '	APIFORTYL soft gelatin capsule' },
      { label: '	MINERAVIT soft gelatin caps.' },
      { label: '	ELBAVIT PINEAPPLE syrup.*' },
      { label: '	APIFORTYL soft gelatin capsule' },
      { label: '	MOTHER VIT f.c.tab.' },
      { label: '	MULTIVITOL COMPOUND syrup' },
      { label: '	MULTIVITOL FORTE syrup' },
      { label: '	NEURIMAX soft gelatin caps.' },

      { label: '	VITAMOUNT STRESS soft gelatin caps.' },
      { label: '	VITAMOUNT FOR WOMEN  soft gelatin caps.' },
      { label: '	REGNAVIT f.c.tab.' },
      { label: '	VITAMOUNT FOR MEN soft gelatin caps.' },
      { label: '	PHAROVIT IRON syrup' },
      { label: '	VITAMOUNT ANTIOXIDANTS soft gelatin caps.' },
      { label: '	PHARMATON soft gelatin capsule.' },
      { label: '	SUPRAVIT caps.' },
    ],
  },

  {
    label: '	MINOCYCLINE',
    tradeLabels: [
      { label: '	MINOCIN 100 mg tab' },
      { label: '	MINOCYCLINE HYDROCHLORIDE 50mg caps.USP23' },
      { label: '	MINOCIN 50 mg tab' },
    ],
  },

  {
    label: '	MINOXIDIL',
    tradeLabels: [
      { label: '	MINOX 5% Scalp lotion' },
      { label: '	HAIR ACT 5%topical solution' },
      { label: '	HAIR GAIN 2% lotion' },
      { label: '	MINOXITRIM 5% top. Solution' },
      { label: '	HAIR PLUS-BACK 2% scalp lotion' },
      { label: '	HAIR PLUS-BACK 5% lotion' },
      { label: '	GAST MINOXY 5% topical solution' },
      { label: '	MINOXIDIL FORTE 5% topical gel' },

      { label: '	BOLD STOP 5% topical lotion.' },
      { label: '	MINOXITRIM 2% topical sol.' },
      { label: '	REHAIR 2% topical solution' },
      { label: '	REGAINE 2 % topical solution' },
      { label: '	REHAIR 2% topical solution' },
      { label: '	PERFORMA EXTRA STRENGTH 5% topical solution' },
      { label: '	PERFECTODIL 5% top. Solution' },
    ],
  },

  {
    label: '	MIOCAMYCIN',
    tradeLabels: [
      { label: '	MIOCAMEN 600mg tab.' },
      { label: '	MIOCAMEN 50mg/ml susp.' },
    ],
  },
  {
    label: '	MIRTAZAPINE',
    tradeLabels: [
      { label: '	REMERON 30mg tab.' },
      { label: '	REMERON SOLTAB 30mg orodisp.tabs.' },
    ],
  },

  {
    label: '	MISOPROSTOL',
    tradeLabels: [
      { label: '	MISOTAC 200mcg tablet' },
      { label: '	MISOPROST 200mcg tab.' },
      { label: '	VAGIPROST 25mcg vaginal tab.' },
    ],
  },
  {
    label: '	MISTLETOE EXTRACT FROM THE HOST TREE ASH',
    tradeLabels: [
      { label: '	VISCUM FRAXINI-4' },
      { label: '	VISCUM FRAXINI-2 amp.' },
    ],
  },

  {
    label: '	MITIGLINIDE',
    tradeLabels: [
      { label: '	GLUFAST 5mg tab.' },
      { label: '	GLUFAST 10mg tab.' },
    ],
  },
  {
    label: '	MITOMYCIN',
    tradeLabels: [
      { label: '	MITONCO 10mg vial for I.V. inj. & inf.' },
      { label: '	MUTAMYCIN 20mg vial' },
      { label: '	MUTAMYCIN 5mg vial' },
    ],
  },

  {
    label: '	MITOXANTRONE',
    tradeLabels: [
      { label: '	MITOXANTRON ASTA MEDICA 2mg/ml vial' },
      { label: '	NOVANTRONE 2mg/ml vial' },
      { label: '	SANTRONE  20mg/10ml Vial for I.V. Inf.' },
    ],
  },
  {
    label: '	MOCLOBEMIDE',
    tradeLabels: [{ label: '	AURORIX 150 mg  F.C.TAB.' }],
  },

  {
    label: '	MOEXIPRIL',
    tradeLabels: [
      { label: '	PRIMOX 7.5 mg f.c.tab.' },
      { label: '	PRIMOX 15mg f.c.tab.' },
    ],
  },
  {
    label: '	MOLGRAMOSTIM',
    tradeLabels: [
      { label: '	LEUCOMAX 400mcg vial' },
      { label: '	LEUCOMAX 150mcg vial' },
      { label: '	LEUCOMAX 300mcg vial' },
    ],
  },

  {
    label: '	MOMETASONE FUROATE',
    tradeLabels: [
      { label: '	BORGASONE 0.1% cream' },
      { label: '	ELOCON 1mg/gm oint.' },
      { label: '	BORGASONE 0.1% lotion' },
      { label: '	MOMSONE 0.1% cream' },
      { label: '	ELECORTIN 0.1% oint.' },
      { label: '	ELOCON 0.1% lotion.' },
      { label: '	ELOCON 1mg/gm oint.' },
      { label: '	ELECORTIN 0.1% topical lotion' },

      { label: '	MINASONE 1mg/gm oint.' },
      { label: '	METAZ 0.1% cream' },
      { label: '	METAZ 0.1% oint.' },
      { label: '	ELOCON 0.1% cream' },
      { label: '	BORGASONE 0.1% oint.' },
      { label: '	ELOCON 0.1% cream' },
      { label: '	ELECORTIN 0.1% cream' },
      { label: '	SNIFFACAN 50mcg/gm nasal spray' },
    ],
  },

  {
    label: '	MOMETASONE FUROATE+SALICYLIC ACID',
    tradeLabels: [{ label: '	ELICASAL topical ointment' }],
  },

  {
    label: '	MONTELUKAST',
    tradeLabels: [
      { label: '	DELMONKAST 10mg f.c. tabs.' },
      { label: '	INLETAIR 10mg f.c.tab.' },
      { label: '	MONTELAIR 4mg  chewable tab.' },
      { label: '	KAST 5mg chewable tab.' },
      { label: '	MONTEL 10mg f.c. tab.' },
      { label: '	KOKAST 4mg chewable tab.' },
      { label: '	CLEAR AIR 10mg tablet' },
      { label: '	DELMONKAST 5mg chewable tabs.' },

      { label: '	MONTEKAL 10mg tab.' },
      { label: '	IDULAIR 5mg chewable tab.' },
      { label: '	CLEAR AIR 4mg chewable tab.' },
      { label: '	KAST 10mg tab.' },
      { label: '	MONTEKAL 5 5mg chew.tab.' },
      { label: '	ASMALAIR 10mg tab.' },
      { label: '	IDULAIR 10mg f.c.tab.' },
      { label: '	SINGULAIR 10mg f.c.tab.' },
      { label: '	SEDOKAST 4mg chewable tabs.' },
      { label: '	PIRONTAGONIST 10mg f.c. tabs.' },

      { label: '	WESTAIR 4 mg sachets.' },
      { label: '	SINGULAIR 5mg chewable tab.' },
      { label: '	SINGULAIR PAEDIATRIC 4mg gr.' },
      { label: '	SINGULAIR 4mg ped. Chewable tab.' },
      { label: '	SINGUKAST 5mg chewable tab.' },
    ],
  },
  {
    label: '	MORPHINE',
    tradeLabels: [
      { label: '	MORPHINE SULPHATE 20 mg/ml injection' },
      { label: '	MST 30mg  continus tab.' },
      { label: '	MORPHINE SULPHATE 10 mg/ml injection B.P 2004' },
    ],
  },

  {
    label: '	MOSAPRIDE',
    tradeLabels: [
      { label: '	GASMOVAC 5mg tab.' },
      { label: '	FLUXOPRIDE 5mg tab.' },
      { label: '	MOSAPRIDE 2.5mg f.c.tab.' },
    ],
  },

  {
    label: '	MOXIFLOXACIN',
    tradeLabels: [
      { label: '	MOXACIN 400mg f.c.tab.' },
      { label: '	MOFLOX 400mg f.c.tab.' },
      { label: '	MOXIFLOXACIN 400mg f.c.tab.' },
      { label: '	MOXIFLOX 400mg f.c.tab.' },
      { label: '	MOXAVIDEX 400mg f.c.tab.' },
      { label: '	ADVANCRIB 400mg f.c. tabs.' },
      { label: '	MOGRAFLOX 400mg f.c.tab.' },
      { label: '	MOXITRIX 400mg f.c.tab.' },

      { label: '	FLUROQUINOMOX 0.5% ophthalmic solution' },
      { label: '	GASTAMOXACINE 400mg f.c. tabs.' },
      { label: '	AVALOX 400mg f.c.tab.' },
      { label: '	IDELOX 400mg f.c.tab.' },
      { label: '	VIGAMOX 0.5% ophthalmic solution' },
      { label: '	RASPELOCIN 400mg f.c.tab.' },
      { label: '	VIGAMOX 0.5% ophthalmic solution' },
      { label: '	FORTYMOX ophthalmic solution' },
    ],
  },

  {
    label: '	MOXONIDINE',
    tradeLabels: [
      { label: '	CYNT 0.3 MG' },
      { label: '	CYNT TAB. 0.4 MG' },
      { label: '	CYNT 0.2 mg' },
    ],
  },

  {
    label: '	MUCOPOLYSACCHARIDE POLYSULFATE',
    tradeLabels: [
      { label: '	HIRUDOID CREAM 0.3gm/100gm' },
      { label: '	HIRUDOID  topical gel 0.3gm/100gm' },
      { label: '	VARICOID 250 IU/gm topical gel' },
      { label: '	VARICOID 250 IU/g cream' },
    ],
  },

  {
    label: '	MUCOPOLYSACHARIDE POLYSULFURIC ACID+SALICYLIC ACID',
    tradeLabels: [
      { label: '	MOBILAT cream' },
      { label: '	MOBILAT gel' },
      { label: '	ADWIMOVE  top. Gel' },
      { label: '	ADWIMOVE top. Cream' },
    ],
  },

  {
    label: '	MUPIROCIN',
    tradeLabels: [
      { label: '	BACTROCIN 2% top. oint.' },
      { label: '	MUPIRAX 2% oint.' },
      { label: '	PROBACTCIN 2% top. Cream' },
    ],
  },

  {
    label: '	MYCOPHENOLATE MOFETIL',
    tradeLabels: [
      { label: '	MOFETYL 250mg f.c.tab.' },
      { label: '	MYFORTIC 180mg f.c.tab.' },
      { label: '	CELLCEPT 500mg tab.' },
      { label: '	MOFETYL 500mg f.c.tab.' },
      { label: '	CELLCEPT 250 mg caps.' },
      { label: '	MYFORTIC 360mg f.c.tab.' },
      { label: '	CELLCEPT 500 mg tab' },
    ],
  },

  {
    label: '	NABUMETONE',
    tradeLabels: [
      { label: '	NABUXAN 500mg coated tab.' },
      { label: '	RHEUMATON 750mg f.c. tab.' },
      { label: '	RHEUMATON 500mg f.c.tab.' },
    ],
  },
  { label: '	NADOLOL', tradeLabels: [{ label: '	CORGARD 80mg tab.' }] },

  {
    label: '	NADROPARIN CALCIUM',
    tradeLabels: [
      { label: '	FRAXIPARINE 25000 ICU/ml prefilled syringe' },
      { label: '	FRACTIONARIN 2850 I.U.Inj.' },
      { label: '	FRAXIPARINE 25000 ICU/ml prefilled syringe' },
      { label: '	FRACTIONARIN 3800 I.U.Inj.' },
      { label: '	FRAXIPARINE 25000 ICU/ml prefilled syringe' },
      { label: '	FRACTIONARIN 5700 I.U.Inj.' },
    ],
  },

  {
    label: '	NAFTAZONE',
    tradeLabels: [
      { label: '	MEDIAVEN 5mg tab.' },
      { label: '	MEDIAVEN 10mg tab.' },
    ],
  },

  {
    label: '	NAFTIDROFURYL',
    tradeLabels: [
      { label: '	NAFTILONG 200mg M.R.caps' },
      { label: '	CEREBROMAP 200mg hard gelatin caps.' },
      { label: '	CEREBROMAP 100mg hard gelatin caps.' },
      { label: '	FURYXEL 200mg hard gelatin capsules' },
      { label: '	PRAXILENE 200mg f.c.tab.' },
    ],
  },

  {
    label: '	NAFTIFINE',
    tradeLabels: [
      { label: '	EXODERIL 1% solution' },
      { label: '	EXODERIL 1% cream' },
    ],
  },

  {
    label: '	NALBUPHINE',
    tradeLabels: [
      { label: '	NALBUPHINE 20mg/2ml amp.' },
      { label: '	NALBUPHINE 20mg/ml I.M./I.V./S.C.amp.' },
      { label: '	NALPAIN 20mg/ml amp.' },
      { label: '	NALUFIN 20mg/1ml amp.' },
      { label: '	NUBAIN 20mg/ml amp.' },
    ],
  },

  {
    label: '	NALIDIXIC ACID',
    tradeLabels: [
      { label: '	NALIDIXIC ACID 500mg tab.' },
      { label: '	NALIDRAM 500mgTAB.' },
    ],
  },
  {
    label: '	NALOXONE',
    tradeLabels: [
      { label: '	NARCAN NEO-NATAL 0.02 mg/ml amp.' },
      { label: '	NARCAN 0.4mg/ml amp.' },
    ],
  },

  {
    label: '	NALTREXONE',
    tradeLabels: [
      { label: '	NERQUON 50mg f.c.tab.' },
      { label: '	ANARCOL 50mg f.c.tab.' },
      { label: '	DELTREXONE 50mg tab.' },
      { label: '	REVIA 50mg scored f.c.tab.' },
    ],
  },
  {
    label: '	NANDROLONE DECANOATE',
    tradeLabels: [
      { label: '	DECADURABOLIN 50mg/ml amp.' },
      { label: '	DECADURABOLIN 25mg/1ml amp.' },
    ],
  },

  {
    label: '	NAPHAZOLINE+PHENIRAMINE',
    tradeLabels: [
      { label: '	KONJUNCTIVAL eye drops.' },
      { label: '	NAPHCON A eye drops' },
    ],
  },
  {
    label: '	NAPHAZOLINE+PHENYLEPHRINE+PYRILAMINE',
    tradeLabels: [{ label: '	4-WAY ( fast acting ) nasal spray' }],
  },
  {
    label: '	NAPHAZOLINE+PHENYLTOLOXAMINE DIHYDROGEN CITRATE',
    tradeLabels: [{ label: '	RHINOXAN nasal drops' }],
  },

  {
    label: '	NAPROXEN',
    tradeLabels: [
      { label: '	NAPROGESIC 250 mg tab.' },
      { label: '	MYOPROX 250mg f.c.tab.' },
      { label: '	NAPROSYN GRANULES 500 mg' },
      { label: '	NAPROSYN 500 mg tab.' },
      { label: '	NAPROSYN 500 mg supp.' },
      { label: '	NAPROSYN 250 mg tab.' },
      { label: '	NAPROX 250mg f.c. tab.' },
      { label: '	NAPROGESIC 500mg supp.' },

      { label: '	NAPROGESIC  500 mg tab.' },
      { label: '	NAPROFEN 250mg tab.' },
      { label: '	NAPROFEN 500mg tab.' },
      { label: '	NAPROSYN 10 % gel' },
      { label: '	NAPROGESIC 125mg/5ml susp.' },
      { label: '	PRODEXIN CREAM 5%' },
    ],
  },
  { label: '	NATAMYCIN', tradeLabels: [{ label: '	PIMAFUCORT oint.' }] },

  {
    label: '	NATEGLINIDE',
    tradeLabels: [
      { label: '	STARLIDINE 60mg f.c.tab.' },
      { label: '	STARLIDINE 120mg f.c.tab.' },
      { label: '	STARLIX 120mg f.c.tab.' },
    ],
  },

  {
    label: '	NEBIVOLOL HYDROCHLORIDE',
    tradeLabels: [
      { label: '	NEVILOB 5mg tab.' },
      { label: '	NEBILET 5mg tab.' },
      { label: '	HIKMAVOLOL 5mg tab.' },
      { label: '	NEVILOB 2.5mg tab.' },
      { label: '	SYMBIAN 5mg tab.' },
    ],
  },

  {
    label: '	NEDOCROMIL SODIUM',
    tradeLabels: [
      { label: '	TILADE MINT 112 dose' },
      { label: '	TILADE MINT 112 dose' },
    ],
  },

  {
    label: '	NEFAZODONE',
    tradeLabels: [
      { label: '	NEFAZONE 100mg f.c.tab.' },
      { label: '	FAZODONE 100mg tab.' },
      { label: '	FAZODONE 50mg tab.' },
      { label: '	FAZODONE 250mg tab.' },
      { label: '	FAZODONE 150mg tab.' },
      { label: '	SERZONE 50 mg tab.' },
      { label: '	SERZONE 150 mg tab.' },
      { label: '	SERZONE 100 mg tab.' },

      { label: '	SERZONE 250 mg tab.' },
      { label: '	SERZONE 200 mg tab.' },
    ],
  },
  {
    label: '	NEFOPAM',
    tradeLabels: [
      { label: '	NEFOPAM 30 mg tab.' },
      { label: '	NEFOPAM 20mg/ml amp.' },
      { label: '	NEFOPAM 30mg f.c.tab.' },
      { label: '	NOPAIN  20mg/ml amp.' },
    ],
  },

  { label: '	NEOMYCIN', tradeLabels: [{ label: '	NEOMYCIN 350 I.U. tab.' }] },

  {
    label: '	NEOMYCIN+POLYMYXIN',
    tradeLabels: [
      { label: '	CEBAMYXIN eye oint.' },
      { label: '	ADCOMEX STERILE eye drops' },
      { label: '	CONJUNCTIN LIQUIFILM eye drops' },
      { label: '	NEOMYCIN & POLYMEXIN B SULFATE  cream' },
      { label: '	NEOMYCIN & POLYMEXIN B SULFATE  cream' },
      { label: '	NEOMYCIN AND POLYMYXIN B SULFATE topical spray' },
      { label: '	NEOMYCIN AND POLYMYXIN B SULFATE topical spray' },
      { label: '	ISOPTO STATROL eye/ear drops' },

      { label: '	CEBAMYXIN eye drops' },
      { label: '	NEOPOL eye/ear drops' },
      { label: '	STATROL eye oint.' },
      { label: '	TITACETYN topical spray powder' },
      { label: '	POLYSPECTRAN eye/ear oint.' },
    ],
  },
  {
    label: '	NEOMYCIN+POLYMYXIN+PRAMOXINE',
    tradeLabels: [{ label: '	NEOSPORE P.R topical cream' }],
  },

  {
    label: '	NEOMYCIN+POLYMYXIN+PREDNISOLONE',
    tradeLabels: [
      { label: '	NEOPRED-P eye/ear susp.' },
      { label: '	ISOMAXIN EYE/EAR DROPS' },
      { label: '	PREDMYCIN-P LIQUIFILM sterile ophthalmic solution' },
    ],
  },
  {
    label: '	NEOMYCIN+TRIAMCINOLONE',
    tradeLabels: [{ label: '	ULTEXIV  eye ointment' }],
  },

  {
    label: '	NEOSTIGMINE',
    tradeLabels: [
      { label: '	NEOSTIGMINE 15mg tab.' },
      { label: '	NEOSTIGMINE 1mg/ml vial' },
      { label: '	NEOSTIGMINE METHYL SULPHATE 0.5mg/ml amp.' },
      { label: '	AMOSTIGMINE 15mg tab.' },
      { label: '	AMOSTIGMINE 0.5mg/ml amp.' },
      { label: '	AMOSTIGMINE 15mg tab.' },
      { label: '	EPISTIGMIN 0.5mg/ml amp.' },
      { label: '	EPISTIGMIN 2.5mg/ml vial' },

      { label: '	PROSTIGMIN (ROCHE) VIALS 12.5 mg/5 ml' },
      { label: '	PROSTIGMIN 12.5mg/5ml vial' },
    ],
  },
  {
    label: '	NETTLE ROOT DRY EXTRACT',
    tradeLabels: [{ label: '	PROSTAFORTON UNO 285mg  f.c.tab' }],
  },
  {
    label: '	NIACIN+VITAMIN A+VITAMIN B1+VITAMIN B2+VITAMIN B6+',
    tradeLabels: [],
  },

  {
    label: '	NICARDIPINE',
    tradeLabels: [
      { label: '	MICARD 30 mg cap.' },
      { label: '	MICARD  20 mg cap.' },
      { label: '	PELCARD 50mg S.R.caps.' },
    ],
  },
  {
    label: '	NICERGOLINE',
    tradeLabels: [
      { label: '	DINACER 5mg F.C.tabs.' },
      { label: '	SERMION 10mg tab.' },
      { label: '	REBRAVAS 15mg caps.' },
    ],
  },

  {
    label: '	NICLOSAMIDE',
    tradeLabels: [
      { label: '	NICLOSAN 500mg chewable tab.' },
      { label: '	YOMESAN 500mg tab.' },
    ],
  },
  {
    label: '	NICORANDIL',
    tradeLabels: [
      { label: '	NICORANDIL 10mg tab.' },
      { label: '	DILIKORELL 10 mg tab.' },
      { label: '	DILIKORELL 20 mg tab.' },
      { label: '	RANDIL 20mg tab.' },
    ],
  },

  {
    label: '	NICOTINAMIDE+PANTHENOL+VITAMIN B1+VITAMIN B2+VITAM',
    tradeLabels: [],
  },
  {
    label: '	NICOTINAMIDE+PHOSPHOLIPIDS+VITAMIN B1+VITAMIN B2+V',
    tradeLabels: [],
  },
  {
    label: '	NICOTINAMIDE+PIROXICAM',
    tradeLabels: [{ label: '	PIROCAM STERILE I.M.amp.' }],
  },
  {
    label: '	NICOTINAMIDE+VITAMIN A+VITAMIN B1+VITAMIN B2+VITAM',
    tradeLabels: [],
  },
  {
    label: '	NICOTINAMIDE+VITAMIN A+VITAMIN B1+VITAMIN B2+VITAM',
    tradeLabels: [],
  },

  {
    label: '	NICOTINAMIDE+VITAMIN B1+VITAMIN B2',
    tradeLabels: [{ label: '	VITAMIN B COMPLEX sugar coated tab.' }],
  },
  {
    label: '	NICOTINE',
    tradeLabels: [
      { label: '	NICOTINELL TTS 10 (CM.SQUARE)' },
      { label: '	NICOTINELL TTS 20 CM SQUARE' },
      { label: '	NICOTINELL TTS 30 CM SQUARE' },
    ],
  },

  {
    label: '	NICOTINIC ACID',
    tradeLabels: [
      { label: '	NIASPAN 500mg prolonged release tab.' },
      { label: '	NIASPAN 375mg prolonged release tablets' },
      { label: '	NIASPAN 750mg prolonged release tabs.' },
      { label: '	NIASPAN 1000mg prolonged release tab.' },
    ],
  },

  {
    label: '	NIFEDIPINE',
    tradeLabels: [
      { label: '	DILCOR 30mg caps.' },
      { label: '	NIFEPIN 5mg caps.' },
      { label: '	EPILAT RETARD 20mg SR.f.c.tab.' },
      { label: '	NIFAM 10mg soft gelatin caps.' },
      { label: '	EPILAT 10mg soft gelatin caps.' },
      { label: '	DILCOR 20mg caps.' },
      { label: '	ADALAT LA 30mg f.c. tab.' },
      { label: '	NIFEPIN 10mg soft gelatin caps.' },
    ],
  },

  { label: '	NIFLUMIC ACID', tradeLabels: [{ label: '	NIFLUMA 2.5% gel' }] },

  {
    label: '	NIFUROXAZIDE',
    tradeLabels: [
      { label: '	DIAX 220mg/5ml susp.' },
      { label: '	DIAX 220mg/5ml susp.' },
      { label: '	DIAX 200mg caps.' },
      { label: '	DIASTAT 200mg caps.' },
      { label: '	DIA-FURYL 220mg/5ml susp.' },
      { label: '	ANTINAL 200mg caps.' },
      { label: '	FURFURIL 200mg hard gelatin cap.' },
      { label: '	DIA-FURYL 200mg hard gelatin caps.' },

      { label: '	NIFUNAL 200mg caps.' },
      { label: '	ERCEFURYL 200mg caps.' },
      { label: '	ANTINAL 220mg/5ml susp.' },
      { label: '	INTEST-RELIEF 200mg hard gelatin caps.' },
      { label: '	ERCEFURYL 200mg/5ml susp.' },
      { label: '	NIFUNAL 4% susp.' },
      { label: '	DIA-FURYL 100mg caps.' },
      { label: '	PANAX DIARREX 200mg/5ml oral susp.' },
      { label: '	NIFUROXAZIDE 220mg/5ml suspension' },
      { label: '	NIFUROXAZIDE.' },

      { label: '	NIFUNAL 4% susp.' },
      { label: '	NITROFURINAL  220mg/5ml susp.' },
      { label: '	NIFUROX 200mg/5ml susp.' },
      { label: '	PANAX DIARREX 200mg/5ml oral susp.' },
    ],
  },
  {
    label: '	NILUTAMIDE',
    tradeLabels: [
      { label: '	ANANDRON 50mg tab.' },
      { label: '	ANANDRON 50mg tab.' },
    ],
  },

  {
    label: '	NIMESULIDE',
    tradeLabels: [
      { label: '	MESULID 200mg supp.' },
      { label: '	MESULID 100mg tab.' },
      { label: '	MESULAN 5% gel' },
      { label: '	NILSID 5% cream' },
      { label: '	NILSID 100mg sachets' },
      { label: '	SULIDE 100mg f.c.tab.' },
      { label: '	NIMALOX 100mg sachet' },
      { label: '	SULIDE 100mg supp.' },

      { label: '	SULIDAN 100mg f.c.tab.' },
      { label: '	SULIDE 1% susp.(CANCELLED)' },
      { label: '	NILSID 100mg f.c.tab.' },
      { label: '	SULIDE 200mg Supp.' },
      { label: '	NIMALOX 100mg sachet' },
      { label: '	NIMALOX 100mg tablet' },
      { label: '	NILSID 1% susp.(CANCELLED)' },
      { label: '	NIMALOX 200mg supp.' },
      { label: '	NIMALOX 50mg/5ml susp.(CANCELLED)' },
      { label: '	NIMALOX 50mg/5ml susp.(CANCELLED)' },

      { label: '	SULIDE 5% gel' },
      { label: '	NILSID 200mg supp.' },
    ],
  },
  {
    label: '	NIMODIPINE',
    tradeLabels: [
      { label: '	BRAINAL 0.02% vial for I.V. inf.' },
      { label: '	NIMOTOP 30mg tab.' },
      { label: '	NIMOTOP 0.01gm/50ml I.V. inf.' },
    ],
  },

  {
    label: '	NITAZOXANIDE',
    tradeLabels: [
      { label: '	NANAZOXID 100mg/5ml pd. For oral susp.' },
      { label: '	CRYPTONAZ 100mg/5ml susp.' },
      { label: '	ANTIDIAZOX 100mg/5ml pd. For oral sol.' },
      { label: '	NANAZOXID 500mg f.c. tabs.' },
      { label: '	ANTIDIAZOX 500mg f.c.tab.' },
      { label: '	NITAZODE 100mg/5ml powder for oral suspension' },
      { label: '	NIT CLEAN 500mg f.c. tabs.' },
      { label: '	PROTOSTOP 500mg f.c. tabs.' },

      { label: '	XEROVIRINC 500mg f.c. tab.' },
    ],
  },

  {
    label: '	NITROFURANTOIN',
    tradeLabels: [
      { label: '	MACROFURAN 100 mg caps.' },
      { label: '	MACROFURAN 100 mg caps.' },
      { label: '	MACROFURAN 50 mg caps.' },
      { label: '	MACROFURAN 50 mg caps.' },
      { label: '	MEPAFURAN 100mg caps.' },
      { label: '	MACRODANTIN 50 mg caps.' },
      { label: '	MEPAFURAN 50mg caps.' },
      { label: '	COLIFURAN 100mg tab.' },

      { label: '	UVAMINE RETARD 100mg caps.' },
    ],
  },
  {
    label: '	NITROFURAZONE',
    tradeLabels: [
      { label: '	FURAZONE SOLUBLE DRESSING 0.2 %(Cancelled)' },
      { label: '	FURASEEN 0.2% viscous gel(Cancelled)' },
      { label: '	FURADERM 0.2% soluble dressing(Cancelled)' },
      { label: '	GERMIKS 0.2% ointment(Cancelled)' },
      { label: '	FURADERM 0.2% soluble dressing(Cancelled)' },
      { label: '	TOPIFURAN OINTMENT 0.2 %(Cancelled)' },
    ],
  },

  {
    label: '	NITROGLYCERIN',
    tradeLabels: [
      { label: '	DEPONIT 32mg patches' },
      { label: '	DEPONIT 16mg patches' },
      { label: '	DEPONIT NT10 37.4mg patches.' },
      { label: '	DEPONIT NT5 18.7mg patches.' },
      { label: '	GLYCERYL TRINITRATE FOR INJ. 50 mg/10 ml amp.' },
      { label: '	NITROTARD 2.5mg caps.' },
      { label: '	NITROCARE 6.5mg S.R.caps.' },
      { label: '	NITRONAL AQUEOUS 50mg/50ml I.V.infusion' },

      { label: '	NITRODERM TTS 10mg patch' },
      { label: '	NITROCARE 2.5mg S.R.caps.' },
      { label: '	NITROMAK RETARD 5mg caps.' },
      { label: '	NITROMAK RETARD 2.5mg caps.' },
      { label: '	NITRODERM TTS 5mg patch' },
      { label: '	NITROLINGUAL 0.4mg/dose oral spray' },
      { label: '	NITRODERM TTS 5mg patch' },
      { label: '	NITROGLYCERIN 50mg/10ml vial U.S.P XXII' },
      { label: '	NITRODERM TTS 15 transdermal therapeutic system.' },
      { label: '	NITROCIN I.V.infusion' },

      { label: '	TRIDIL 50mg/10ml amp.' },
      { label: '	NITROCARE 9mg S.R.caps.' },
      { label: '	NITRODERM TTS 10mg patch' },
      { label: '	NITRODERM TTS 15 transdermal therapeutic system.' },
      { label: '	NITRODERM TTS 10mg patch' },
    ],
  },
  {
    label: '	NITROXOLINE',
    tradeLabels: [
      { label: '	NIBIOL 50mg/5ml  susp.' },
      { label: '	NIBIOL 100mg f.c.tab' },
    ],
  },

  {
    label: '	NIZATIDINE',
    tradeLabels: [
      { label: '	DOMADINE 300mg caps.' },
      { label: '	DOMADINE 150mg caps.' },
      { label: '	RECEPTOLOC 300mg caps.' },
      { label: '	NIZATINE 150mg  hard gelatin caps.' },
      { label: '	ULCFREE 150mg caps.' },
      { label: '	NIZATINE 300mg hard gelatin caps.' },
      { label: '	NIZATECT 300mg caps.' },
    ],
  },

  {
    label: '	NONIVAMIDE',
    tradeLabels: [{ label: '	GOTHAPLAST CAPSICUM 2.43mg plaster.' }],
  },
  {
    label: '	NONOXYNOL',
    tradeLabels: [{ label: '	CONTRASEED 100mg vag.ovule' }],
  },
  {
    label: '	NONOXYNOL 9',
    tradeLabels: [
      { label: '	SENDOCIN 9 100mg vaginal ovules' },
      { label: '	NO GRAVIDA Vaginal supp.' },
      { label: '	NONSEED 100mg pessary' },
    ],
  },

  {
    label: '	NONOXYNOL+POVIDONE IODINE',
    tradeLabels: [{ label: '	POVIDERMINE vaginal douche' }],
  },
  {
    label: '	NORADRENALINE',
    tradeLabels: [
      { label: '	LEVOPHRINE 4mg/4ml amp.' },
      { label: '	LEVOPHRINE 8mg/4ml amp.' },
    ],
  },

  {
    label: '	NORETHISTERONE',
    tradeLabels: [
      { label: '	CIDOLUT NOR 5mg tab.' },
      { label: '	PRIMULOT NOR 5mg tab.' },
      { label: '	NORISTERAT 200mg/ml amp.' },
      { label: '	STERONATE 5mg tab.' },
      { label: '	NORISTERATE AMP. 200 mg' },
      { label: '	NORICEPT amp.' },
    ],
  },

  {
    label: '	NORFLOXACIN',
    tradeLabels: [
      { label: '	NEOFLOXIN 400mg f.c.tab.' },
      { label: '	EPINOR 400mg tab.' },
      { label: '	NEOFLOXIN 400mg f.c.tab.' },
      { label: '	OPTO Q3  0.3 % EYE DROPS' },
      { label: '	NORFLOXIN 0.3gm/100ml eye drops' },
      { label: '	NORBACTIN 800mg f.c.tab.' },
      { label: '	NOROXIN 400mg tab.' },
      { label: '	NORBACTIN 400mg f.c.tab.' },

      { label: '	NORACIN 400mg f.c.tab.' },
      { label: '	NORACIN 0.3gm/100ml eye drops' },
      { label: '	SPECTRAMA 400mg tab.' },
    ],
  },
  {
    label: '	NORFLOXACIN+TINIDAZOLE',
    tradeLabels: [
      { label: '	CONAZ f.c.tab.' },
      { label: '	ENTEROLOK  f.c.tab.' },
      { label: '	TINIDOL PLUS f.c. tab.' },
      { label: '	NORFLOXACIN-TZ 400/600 f.c.tab.' },
    ],
  },

  {
    label: '	NORPSEUDOEPHEDRINE',
    tradeLabels: [
      { label: '	MIRAPRONT-N 200mg caps.' },
      { label: '	MIRAPRO N 20mg caps.' },
    ],
  },
  {
    label: '	NOSCAPINE',
    tradeLabels: [
      { label: '	COFLIN 30mg tab.' },
      { label: '	TUSSCAPINE 0.3% syrup' },
      { label: '	NOSCAPINE 15mg/5ml syrup' },
    ],
  },

  {
    label: '	NYSTATIN',
    tradeLabels: [
      { label: '	FUNGISTATIN 100 000I.U./ml susp.' },
      { label: '	MYCOSTAN caps.' },
      { label: '	MYCOSTAN VAGINAL INSERTS' },
      { label: '	MYCOSTATIN oral drops' },
      { label: '	MYCOSTATIN eff.vaginal tab.' },
      { label: '	MYCOSTATIN cream' },
      { label: '	FUNGIFREE 100000I.U./ml  oral drops' },
      { label: '	NYSTATIN 10M.I.U. cream U.S.P.23' },

      { label: '	ORASTATIN  100.000 U/ml oral susp.' },
      { label: '	NYSTATIN 100000 IU vaginal pessaries.' },
      { label: '	NYSTATIN 100 000I.u./ml susp.' },
      { label: '	NYSTATIN 100,000I.U.vaginal tab.' },
      { label: '	NYSTATIN 100,000 I.u.vaginal supp.U.S.P.23' },
    ],
  },
  {
    label: '	NYSTATIN+NEOMYCIN+PREDNISOLONE+TERNIDAZOLE',
    tradeLabels: [{ label: '	TERGYNAN vaginal tab.' }],
  },

  {
    label: '	NYSTATIN+ZINC OXIDE',
    tradeLabels: [
      { label: '	MYCOSTATIN BABY ointment' },
      { label: '	MYCOSTATIN BABY ointment' },
      { label: '	NICE BABY oint.' },
    ],
  },
  {
    label: '	OCTREOTIDE',
    tradeLabels: [
      { label: '	SANDOSTATIN 0.1mg/ml amp.' },
      { label: '	SANDOSTATIN 0.05 mg/ml amp.' },
      { label: '	SANDOSTATIN M.D. 15 mg/5ml vial' },
    ],
  },

  {
    label: '	OFLOXACIN',
    tradeLabels: [
      { label: '	FLOXAVID 200mg caps.' },
      { label: '	KIROLL 200mg f.c.tab.' },
      { label: '	CEMI-FLOX 400mg f.c tab.' },
      { label: '	EPICOFLOCIN 200 mg f.c.tab.' },
      { label: '	HEALTHIBACT 400mg scored f.c.tab' },
      { label: '	OFLICIN 200mg f.c.tab.' },
      { label: '	OFLOXIN 200mg f.c.tab.' },
      { label: '	OTOXIN 3mg/ml ear drops' },

      { label: '	OFLICIN 0.3gm/100ml  eye drops' },
      { label: '	TARIFLOX 3mg/ml ophthalmic solution' },
      { label: '	TARIFLOX 400tab.' },
      { label: '	TARIVAN 200mg tab.' },
      { label: '	TARIVID 200mg I.V.infusion' },
      { label: '	OCUFLOX 3mg/ml eye drops' },
      { label: '	OFLOXIN 0.3gm/100ml eye drops' },
      { label: '	OFLOGUIDE 400mg f.c.tab.' },
      { label: '	OPTOXIN 0.3% eye drops' },
      { label: '	TARIFLOX 200mg tab.' },

      { label: '	OCUFLOXINE 0.3% eye drops' },
      { label: '	OFLOX 0.3% ophth.solution' },
      { label: '	OFLOXACIN  200mg tab' },
      { label: '	OPTIFLOX 0.3% eye drops' },
      { label: '	TARIVID 200mg f.c. tab.' },
    ],
  },
  {
    label: '	OILS',
    tradeLabels: [{ label: '	HIMCOLIN CREAM' }, { label: '	HIMCOLIN CREAM' }],
  },

  {
    label: '	OLANZAPINE',
    tradeLabels: [
      { label: '	LANZAPINE 10mg f.c.tab.' },
      { label: '	OLAPEX 10mg f.c.tab.' },
      { label: '	OLAPEX 5mg f.c.tab.' },
      { label: '	OLAZINE 10mg f.c.tab.' },
      { label: '	ZYPREXA 10mg coated tab.' },
      { label: '	ZYPREXA 7.5mg f.c.tab.' },
      { label: '	ZYPREXA 5mg coated tab.' },
      { label: '	ZYPREXA 10mg powder for solution for inj.' },

      { label: '	PREXAL 5 caplets' },
    ],
  },
  {
    label: '	OLEYL POLYPEPTIDE',
    tradeLabels: [{ label: '	CERUMENEX N 0.9074gm/10ml ear drops' }],
  },
  {
    label: '	OLIVE OIL+ZINC OXIDE',
    tradeLabels: [
      { label: '	BABY cream' },
      { label: '	ZINC OLIVE lotion' },
      { label: '	ZINC OLIVE 25% lotion' },
    ],
  },

  {
    label: '	OLMESARTAN',
    tradeLabels: [
      { label: '	ANGIOSARTAN 10mg f.c. tabs.' },
      { label: '	ANGIOSARTAN 20mg f.c. tabs.' },
      { label: '	ERASTAPEX 5mg f.c.tab.' },
      { label: '	ERASTAPEX 40 mg f.c.tab.' },
      { label: '	ERASTAPEX 20mg f.c.tab.' },
      { label: '	ANGIOSARTAN 40mg f.c. tabs.' },
      { label: '	NORMESAR 40mg f.c. tabs.' },
      { label: '	NORMESAR 20mg f.c. tabs.' },
    ],
  },

  { label: '	OLOPATADINE', tradeLabels: [{ label: '	PATANOL 0.1% eye drops.' }] },
  { label: '	OMALIZUMAB', tradeLabels: [{ label: '	XOLAIR 150mg vial' }] },

  {
    label: '	OMEPRAZOLE',
    tradeLabels: [
      { label: '	MINAPRAZOLE 20mg caps.' },
      { label: '	EPIRAZOLE 20mg caps.' },
      { label: '	EPIRAZOLE 20mg caps.' },
      { label: '	LEES-SEC 20mg enteric coated pellets in caps.' },
      { label: '	GASEC capsule' },
      { label: '	GASEC capsule' },
      { label: '	GASTRAZOLE  20mg hard gelatin cap.' },
      { label: '	GASTROLOC 40mg capsule' },

      { label: '	HYPOSEC 20mg caps.' },
      { label: '	LOSEC 20mg caps.' },
      { label: '	NAPIZOLE 20mg caps.' },
      { label: '	LOSEC 40mg/ml vial' },
      { label: '	HEALSEC 40mg caps.' },
      { label: '	FASTCURE 20mg enteric coated caps.' },
      { label: '	HEALSEC 10mg Cap.' },
      { label: '	LEES-SEC 20mg enteric coated pellets in caps.' },
      { label: '	HEALSEC 10mg Cap.' },
      { label: '	HEALSEC 20 mg pellets in cap.' },

      { label: '	HEALSEC 20 mg pellets in cap.' },
      { label: '	HEALSEC 40mg caps.' },
      { label: '	FASTCURE 40mg enteric coated pellet in cap' },
      { label: '	RISEK 10mg Hard gelatin caps.' },
      { label: '	OMEPRAL 20mg caps.' },
      { label: '	RISEK 20mg caps.' },
      { label: '	RISEK 40mg hard gelatin caps.' },
      { label: '	ULSTOP 20mg S.R.caps.' },
      { label: '	OMEPAK 10mg caps.' },
      { label: '	OMEPAK 20mg caps.' },

      { label: '	OMEPAK 20mg caps.' },
      { label: '	RISEK 20mg caps.' },
      { label: '	OMEPRAL 10mg caps.' },
      { label: '	OMEPAK 40mg caps.' },
      { label: '	OMEZ 10mg enteric coated pellet in caps.' },
      { label: '	OMEZ 20mg enteric coated pellets in caps.' },
      { label: '	OMISEC 20mg caps.(enteric coated pellets)' },
      { label: '	RISEK 40mg hard gelatin caps.' },
      { label: '	RISEK 40mg I.V.infusion' },
      { label: '	PEPZOL 20 mg MR hard gelatin cap.' },

      { label: '	PEPZOL 40mg caps.' },
      { label: '	OMEPAK 40mg caps.' },
      { label: '	PEPZOL 40mg caps.' },
      { label: '	RISEK 10mg Hard gelatin caps.' },
    ],
  },
  {
    label: '	OMEPRAZOLE+SODIUM BICARBONATE',
    tradeLabels: [
      { label: '	AZGOVANC 20mg  immediate release hard gelatin caps.' },
      { label: '	AZGOVANC 40mg immediate release hard gelatin caps.' },
      { label: '	OMEHEALTH hard gelatin caps.' },
    ],
  },

  {
    label: '	ONDANSETRON',
    tradeLabels: [
      { label: '	DANSET 4mg/2ml amp.' },
      { label: '	EMEREST 4mg amp.' },
      { label: '	DANOFRAN 8mg f.c.tab.' },
      { label: '	DANOFRAN 4mg f.c.tab.' },
      { label: '	DANOFRAN 4mg amp.' },
      { label: '	EMEREST 4mg tab.' },
      { label: '	DANOFRAN 8mg amp.' },
      { label: '	ONDAN 4mg f.c.tab.' },

      { label: '	ZOFRAN 4mg tab.' },
      { label: '	ONDAN 8mg f.c.tab.' },
      { label: '	ZOFRAN 4mg/2ml amp. For I.V/I.M inj.,I.V. inf.' },
      { label: '	ZOFRAN 8mg tab.' },
      { label: '	ZOFRAN  25mg supp.' },
      { label: '	ZOFRAN 8mg/4ml amp. For I.V./I.M. inj.' },
    ],
  },
  { label: '	ORCIPRENALINE', tradeLabels: [{ label: '	ALUPENT 2mg/ml syrup' }] },

  {
    label: '	ORLISTAT',
    tradeLabels: [
      { label: '	FATLOSE 120mg hard gelatin cap.' },
      { label: '	EASY SLIM 120mg hard gelatin caps.' },
      { label: '	ORLY 120mg caps.' },
      { label: '	SLIM SAFE 120mg caps.' },
      { label: '	ORGANO-ORLISTAT 120mg hard gelatin capsules' },
      { label: '	ORLISMART 120mg hard gelatin caps.' },
      { label: '	XENICAL 120mg Caps.' },
      { label: '	QUICK-SLIM 120mg hard gelatin caps.' },
    ],
  },

  {
    label: '	ORNIDAZOLE',
    tradeLabels: [
      { label: '	TIBEZOLE 500mg f.c.tab.' },
      { label: '	TIBEZOLE 125mg tab.' },
      { label: '	ORNIDAZ 500mg f.c.tab.' },
      { label: '	TIBEZOLE 500mg vaginal supp.' },
      { label: '	TIBEZOLE 500mg f.c.tab.' },
      { label: '	ORNIDAZ 500mg f.c.tab.' },
    ],
  },

  { label: '	ORNITHINE', tradeLabels: [{ label: '	HEPA-MERZ 3gm sachets' }] },
  {
    label: '	OROTIC ACID+PHOSPHOLIPIDS+SILYMARINE',
    tradeLabels: [{ label: '	HEPATIC FORTE soft gelatin caps.' }],
  },

  {
    label: '	ORPHENADRIN',
    tradeLabels: [
      { label: '	MYORELAX STERILE 60mg/2ml amp.' },
      { label: '	MYORELAX STERILE 60mg/2ml amp.' },
      { label: '	NORFLEX 100mg tab.' },
      { label: '	NORFLEX 30mg/ml amp.' },
    ],
  },

  {
    label: '	ORPHENADRIN+PARACETAMOL',
    tradeLabels: [
      { label: '	NORGESIC tab.' },
      { label: '	NORGESIC tab.' },
      { label: '	ORPHENADRINE-PLUS tab.' },
      { label: '	ORPHENADRINE-PLUS tab.' },
      { label: '	ORPHAMOL tab.' },
    ],
  },

  {
    label: '	OSELTAMIVIR',
    tradeLabels: [
      { label: '	TAMINIL-N 12mg/ml granules for oral susp.' },
      { label: '	TAMINIL- N  75mg hard gelatin caps.' },
      { label: '	TAMINIL-N 12mg/ml granules for oral susp.' },
    ],
  },
  {
    label: '	OSSEIN HYDROXYAPATITE COMPOUND',
    tradeLabels: [
      { label: '	OSSOPAN 800mg f.c.tab.' },
      { label: '	OSSOPAN 200mg tab.' },
    ],
  },

  {
    label: '	OTILONIUM BROMIDE',
    tradeLabels: [{ label: '	SPASMOMEN 40mg tab.' }],
  },
  {
    label: '	OX BILE+PANCREATIN+PAPAIN',
    tradeLabels: [{ label: '	AMRASE enteric coated tab.' }],
  },
  { label: '	OXACILLIN', tradeLabels: [{ label: '	PROSTAPHLIN 250 mg vial' }] },

  {
    label: '	OXALIPLATIN',
    tradeLabels: [
      { label: '	ELOXATIN 5mg/ml concentrate for sol.for inf.' },
      { label: '	ELOXATIN 5mg/ml concentrate for sol.for inf.' },
      { label: '	ELOXATIN 100mg vial' },
      { label: '	ELOXATIN  50mg vial' },
      { label: '	OXALIPLATIN MAYNE 50mg powder for solution for infusion.' },
      { label: '	OXITAN 2mg/ml vial' },
      { label: '	OXALIPLATIN MAYNE 100mg powder for solution for infusion.' },
      { label: '	OXITAN 2mg/ml vial' },
    ],
  },

  { label: '	OXAMNIQUINE', tradeLabels: [{ label: '	VANSIL 250 mg caps.' }] },
  {
    label: '	OXAZEPAM',
    tradeLabels: [
      { label: '	COMEDORMIR 10mg tab.' },
      { label: '	COMEDORMIR 15mg tab.' },
      { label: '	OXEPAM 15mg hard gelatin cap.' },
      { label: '	OXAZIN 10mg tab.' },
    ],
  },

  {
    label: '	OXCARBAZEPINE',
    tradeLabels: [
      { label: '	TRILEPTAL 300mg f.c.tab.' },
      { label: '	TRILEPTAL 60mg/ml oral susp.' },
      { label: '	TRILEPTAL 600mg f.c.tab.' },
      { label: '	TRILEPTAL 300mg f.c.tab.' },
      { label: '	TRILEPTAL 150mg f.c.tab.' },
      { label: '	OXALEPTAL 600mg f.c. tab.' },
      { label: '	TRILEPTAL 600mg divitabs.' },
    ],
  },

  {
    label: '	OXELADIN',
    tradeLabels: [
      { label: '	OXELADINE 200mg/100ml syrup.' },
      { label: '	PAXELADINE 40 mg  caps.' },
      { label: '	OXELADINE 0.2% syrup' },
      { label: '	PAXELADINE 0.2% syrup' },
    ],
  },
  { label: '	OXETHAZAINE', tradeLabels: [{ label: '	MUCAIN 10mg susp.' }] },

  {
    label: '	OXICONAZOLE',
    tradeLabels: [
      { label: '	APEXAZOLE 1% topical lotion' },
      { label: '	APEXAZOLE 1% top. Cream' },
      { label: '	TINOX 1% cream' },
    ],
  },
  {
    label: '	OXYBUPROCAINE',
    tradeLabels: [{ label: '	BENOXINATE 0.4 % eye drops' }],
  },

  {
    label: '	OXYBUTYNIN',
    tradeLabels: [
      { label: '	DETRONIN 5mg tab.' },
      { label: '	CONTIMAX 100mg/100ml syrup' },
      { label: '	DRY TROPAN 5mg MR hard gelatin caps.' },
      { label: '	DRY TROPAN 10mg MR hard gelatin caps.' },
      { label: '	DRY TROPAN  15mg MR Hard gelatin cap.' },
      { label: '	DETRONIN 0.1% syrup' },
      { label: '	DETRUSAN 100mg/100ml syrup' },
      { label: '	DETRUSAN 5mg tab.' },

      { label: '	OXURATE 100mg/100ml syrup' },
      { label: '	URIPAN 0.1% syrup(APPROVED RE-REG.)' },
      { label: '	URIPAN X.R.tab.' },
      { label: '	URIPAN 5mg tab.' },
    ],
  },

  {
    label: '	OXYMETAZOLINE',
    tradeLabels: [
      { label: '	ILIADIN 0.05%  nasal spray' },
      { label: '	ILIADIN  0.025 %  nasal solution' },
      { label: '	NASOPHARM 0.05% spray' },
      { label: '	ILIADIN  0.05 %  nasal solution' },
      { label: '	4 - WAY (long acting) nasal spray' },
      { label: '	AFRIN PEDIATRIC 0.25mg/ml nasal drops' },
      { label: '	AFRIN 0.05% nasal spray' },
      { label: '	AFRIN ADULT 0.5mg/ml nasal drops' },

      { label: '	OXYMET 0.025% paed.nasal drops' },
      { label: '	OXYMET 0.05% adult nasal drops' },
    ],
  },
  {
    label: '	OXYPHENONIUM BROMIDE',
    tradeLabels: [{ label: '	SPASMODIN 5 mg tab.' }],
  },
  {
    label: '	OXYQUINOL',
    tradeLabels: [{ label: '	OXYMERIA mouth wash and gargle' }],
  },

  {
    label: '	OXYTETRACYCLINE',
    tradeLabels: [
      { label: '	OXYTETRACYCLINE 250mg caps.' },
      { label: '	OXYTETRIN 3.33gm/100gm oint.(APPROVED RE-REG)' },
    ],
  },

  {
    label: '	OXYTETRACYCLINE+POLYMYXIN',
    tradeLabels: [
      { label: '	OXYMYCIN eye ointment' },
      { label: '	OXYPOL eye oint.' },
      { label: '	TERRAMYCIN eye oint.' },
      { label: '	TERRACORTRIL eye / ear oint.' },
      { label: '	TETRAMEXIN topical Cream' },
      { label: '	TETRA eye oint.' },
      { label: '	TERRAMYCIN oint.' },
    ],
  },

  {
    label: '	OXYTOCIN',
    tradeLabels: [
      { label: '	OXYTOCIN 10 I.U AMP.' },
      { label: '	SYNTOCINON 10 I.U/ml I.M/I.V.amp.' },
      { label: '	SYNTOCINON 5 I.U./ml  I.M/I.Vamp.' },
      { label: '	OXYTOCIN 10I.U./ml amp.' },
      { label: '	OXYTOCIN 5 I.U./ml amp.' },
      { label: '	OXYTOCIN 5 I.U/ml amp.' },
      { label: '	OXYTOCIN 5 IU/ml inj.' },
      { label: '	OXYTOCIN 10I.U./ml amp.' },
    ],
  },

  {
    label: '	PACLITAXEL',
    tradeLabels: [
      { label: '	GENEXOL 6mg/ml I.V.infusion' },
      { label: '	ANZATAX 6mg/ml I.V.vial' },
      { label: '	INTAXEL 6mg/ml vial.' },
      { label: '	GENEXOL 6mg/ml I.V.infusion' },
      { label: '	ANZATAX 6mg/ml I.V.vial' },
      { label: '	PACLITAX 30mg/5ml vial' },
      { label: '	TAXOL 30mg/5ml vial' },
      { label: '	UNITAXEL 30mg/5ml vial for I.V inf.' },

      { label: '	UNITAXEL 30mg/5ml vial for I.V inf.' },
      { label: '	UNITAXEL 30mg/5ml vial for I.V inf.' },
      { label: '	UNITAXEL 30mg/5ml vial for I.V inf.' },
      { label: '	PACLITAX 30mg/5ml vial' },
      { label: '	PACLITAXEL" Ebewe" 6 mg/ml vial' },
      { label: '	PACLITAXEL" Ebewe" 6 mg/ml vial' },
      { label: '	PACLITAXEL" Ebewe" 6 mg/ml vial' },
      { label: '	PAKLITAXFIL 100mg/16.7ml vial' },
      { label: '	PAKLITAXFIL 150mg/25ml vial' },
      { label: '	PAKLITAXFIL 30mg/5ml concentrate I.V.infusion' },

      { label: '	PACLI-B.U.P. 30mg/5ml  Vial for I.V. Inf.(Cancelled)' },
    ],
  },
  {
    label: '	PALIPERIDONE',
    tradeLabels: [
      { label: '	INVEGA 6mg extended release tabs.' },
      { label: '	INVEGA 3 mg extended release tab.' },
    ],
  },
  {
    label: '	PAMABROM+PARACETAMOL',
    tradeLabels: [{ label: '	ACETOFUL FOR WOMEN.' }],
  },

  {
    label: '	PAMIDRONATE DISODIUM',
    tradeLabels: [{ label: '	AREDIA 15mg vial' }, { label: '	AREDIA 15mg vial' }],
  },
  {
    label: '	PANCREATIN',
    tradeLabels: [{ label: '	PANCREATIN 100mg caps.U.S.P30' }],
  },
  {
    label: '	PANCREATIN+PAPAIN',
    tradeLabels: [{ label: '	DIGENORM enteric coated tab.' }],
  },

  {
    label: '	PANCURONIUM',
    tradeLabels: [
      { label: '	LAXACURIUM 2mg/ml ap.' },
      { label: '	PAVULON 4mg/2ml I.V.amp.' },
      { label: '	PANCURON 4mg/2ml amp.' },
      { label: '	PANCURONIUM BROMIDE 4mg/2ml I.V.amp.B.P.88' },
    ],
  },
  {
    label: '	PANCURONIUM BROMIDE',
    tradeLabels: [{ label: '	BROMUREX 2mg/ml amp.' }],
  },

  {
    label: '	PANTHENOL',
    tradeLabels: [
      { label: '	PANTHENOL 5% topical solution' },
      { label: '	PANTHENATE 100mg tab.' },
      { label: '	PANTHENOL 5% emulgel' },
      { label: '	PANTHENOL 5% emulgel' },
      { label: '	PANTHO EVA 5% emulgel' },
      { label: '	PANTHENOL 5% topical Cream' },
      { label: '	PANTHENOL 500mg/2ml amp.' },
      { label: '	PANTHO EVA 7.5% topical sol.' },
    ],
  },

  {
    label: '	PANTHENOL+SILVER SULPHADIAZINE',
    tradeLabels: [
      { label: '	ARGIDERM- P cream' },
      { label: '	ARGIDERM- P cream' },
      { label: '	ARGIDERM- P cream' },
    ],
  },

  {
    label: '	PANTOPRAZOLE',
    tradeLabels: [
      { label: '	ANTOPRAL 40mg tab.' },
      { label: '	CONTROLOC 20mg gastroresistant tab.' },
      { label: '	CONTROLOC 40mg gastroresistant tab.' },
      { label: '	CONTROLOC 40mg I.V.vial' },
      { label: '	ANTOPRAL 20 mg Gastro-resistant tab.' },
      { label: '	ANTOPRAL 40mg tab.' },
      { label: '	JERDAZOLIN 40mg enteric coated tabs.' },
      { label: '	DELPANTO 20mg enteric coated tab.' },

      { label: '	PANTOLOC 40mg tab.' },
      { label: '	PANTAZOL 40mg vial' },
      { label: '	PANTOLOC 20mg E.C.tab.' },
      { label: '	PANTOLOC 40mg tab.' },
      { label: '	PANTOPI  20mg enteric coated tabs.' },
      { label: '	PANTOPRAZOLE 40mg entric coated tab.' },
      { label: '	PEPTOLIC 40mg tab.' },
      { label: '	PEPTOLIC 40mg tab.' },
      { label: '	PERLOC 40mg f.c.tab.' },
      { label: '	PANTOLOC 20mg E.C.tab.' },

      { label: '	PROTOFIX 40 gastro-resistant enteric coated tab.' },
      { label: '	PROTOFIX 20 GASTRO-RESISTANT 20mg enteric coated tab.' },
      { label: '	PANTAZOL 40mg enteric coated tab.' },
      { label: '	PANTAZOL 40mg enteric coated tab.' },
      { label: '	PANTOPI 40mg enteric coated tabs.' },
      { label: '	PROTOFIX I.V. 40mg vial' },
      { label: '	Controloc 40mg Amp' },
    ],
  },

  {
    label: '	PAPAIN+PEPSIN+SANZYME 3500',
    tradeLabels: [
      { label: '	DIGENORM syrup' },
      { label: '	NEO-DIGESTIN syrup' },
      { label: '	DIGESTIN syrup(APPROVED RE-REG)' },
    ],
  },
  { label: '	PAPAIN+SANZYME 3500', tradeLabels: [{ label: '	DIGESTIN tab.' }] },
  { label: '	PAPAVERINE', tradeLabels: [{ label: '	VASORIN 0.06g/2ml amp.' }] },

  {
    label: '	PAPAVERINE+PIPERAZINE',
    tradeLabels: [{ label: '	SPASMOPIPERAZINE eff.granules' }],
  },

  {
    label: '	PARACETAMOL',
    tradeLabels: [
      { label: '	EFFERALGAN ODIS 500mg dispersible tab.' },
      { label: '	ACETAMINOPHEN 125mg paed. supp.U.S.P.XXIII' },
      { label: '	CETAL 10% oral drops' },
      { label: '	FEVANO 200mg/5ml syrup' },
      { label: '	GRIPPO 200mg supp.' },
      { label: '	EFFERALGAN 150mg supp.' },
      { label: '	EFFERALGAN 1000mg effervescent tab.' },
      { label: '	CETAMOL 120mg/5ml pediatric syrup.' },

      { label: '	ADOL 500mg caplets' },
      { label: '	CETAL 500mg tab.' },
      { label: '	CETAL 120mg infantile supp.' },
      { label: '	ABIMOL 500mg tab.' },
      { label: '	ABIMOL 300mg  rectal supp.' },
      { label: '	ABIMOL 150mg/5ml syrup' },
      { label: '	CETAL 250mg/5ml susp.' },
      { label: '	EFFERALGAN 600mg supp.' },
      { label: '	PYREMOL 500mg tab.' },
      { label: '	PARAGESIC 500mg supp.' },

      { label: '	PARALEX 125 rectal pediatric supp.' },
      { label: '	PARALEX 160mg supp.(cancelled)' },
      { label: '	PARAMOL 120mg/5ml syrup' },
      { label: '	PARAMOL 125mg paediatric supp.' },
      { label: '	PARAMOL 500mg tab.' },
      { label: '	PYREMOL 150mg/5ml syrup' },
      { label: '	PARA-XENOS 250mg sachet' },
      { label: '	PARACETAMOL 120mg/5ml susp.' },
      { label: '	OPTALIDON WITH PARACETAMOL 200 mg tab.' },
      { label: '	PERFALGAN 1g/100ml sol.for I.V.vial' },

      { label: '	PERFALGAN 1g/100ml sol.for I.V.vial' },
      { label: '	NOVALDOL 1gm  tab.' },
      { label: '	PARATUSS 325 mg tab.' },
      { label: '	TEMPRA 160 mg/5ml syp.' },
      { label: '	PANDOL 500 mg f.c. tab.' },
      { label: '	PANADOL SUPPOSITORIES' },
      { label: '	PANADOL SOLUBLE 500 mg TAB.' },
      { label: '	PANADOL 500 mg f.c. tab.' },
      { label: '	TEMPORAL 250mg/5ml susp.' },
      { label: '	PYREMOL 300mg supp.' },

      { label: '	PARACETAMOL 500mg tab. B.P.80' },
      { label: '	PHARMALGIN TAB.500 mg' },
      { label: '	THERA-LO 3.2gm/100ml oral susp.' },
      { label: '	PARACETAGEN 10 mg/ml vial for I.V. inf.' },
      { label: '	PYRAL  2.4g/100ml syrup' },
      { label: '	PYRAL 100mg/ml oral drops' },
      { label: '	PYRAL 250mg children supp.' },
      { label: '	PYRAL 500mg tab.' },
      { label: '	PARACETAMOL 500mg tab.' },
      { label: '	TEMPRA 100mg/ml oral drops' },

      { label: '	PYREMOL 10mg/100ml oral drops.' },
    ],
  },
  {
    label: '	PARACETAMOL+PHENOBARBITONE',
    tradeLabels: [
      { label: '	VEGASKINE paediatric rectal supp.' },
      { label: '	SEDAMOL paed.supp.' },
    ],
  },
  {
    label: '	PARACETAMOL+PHENYLEPHERINE+VITAMIN C',
    tradeLabels: [{ label: '	FEVERIN FLU SACHETS' }],
  },

  {
    label: '	PARACETAMOL+PHENYLEPHRINE + SODIUM ASCORBATE',
    tradeLabels: [{ label: '	M.P.COLD & FLU sachet.' }],
  },
  {
    label: '	PARACETAMOL+PHENYLEPHRINE+PROMETHAZINE+SALICYLAMID',
    tradeLabels: [],
  },
  {
    label: '	PARACETAMOL+PRIFINIUM BROMIDE',
    tradeLabels: [{ label: '	PRISPASM COMPOUND sugar coated tab.' }],
  },

  {
    label: '	PARACETAMOL+PSEUDOEPHEDRINE',
    tradeLabels: [
      { label: '	ADOL SINUS caplets' },
      { label: '	CETAPHED tab.' },
      { label: '	SINUTAB tab.' },
    ],
  },
  {
    label: '	PARACETAMOL+PSEUDOEPHEDRINE +DEXTROMETHORPHAN+CHLO',
    tradeLabels: [],
  },
  {
    label: '	PARACETAMOL+PSEUDOEPHEDRINE+SODIUM ASCORBATE+VITAM',
    tradeLabels: [],
  },

  {
    label: '	PARACETAMOL+PSEUDOEPHEDRINE+VITAMIN C',
    tradeLabels: [{ label: '	SUDOFLUCET tab.' }],
  },
  {
    label: '	PARACETAMOL+TERFINADINE',
    tradeLabels: [{ label: '	HISTAMOL  tab.' }, { label: '	HISTAMOL  tab.' }],
  },
  {
    label: '	PARACETAMOL+TRAMADOL',
    tradeLabels: [
      { label: '	TRAMACET f.c.tab.' },
      { label: '	ZALDIAR f.c. tabs.' },
    ],
  },

  {
    label: '	PARACETAMOL+VITAMIN C',
    tradeLabels: [
      { label: '	CEVAMOL eff. tab.' },
      { label: '	EFFERALGAN WITH VITAMIN C effervescent tab.' },
    ],
  },
  {
    label: '	PARAFFIN',
    tradeLabels: [{ label: '	PARAFFIN Gauze Dressing B.P.27' }],
  },

  {
    label: '	PAROXETINE',
    tradeLabels: [
      { label: '	DEPANX 20mg f.c.tab.' },
      { label: '	PAROXETINE 20mg f.c.tab' },
      { label: '	XANDOL 20mg tab.' },
      { label: '	SEROXAT 20mg f.c.tab.' },
      { label: '	SEROXAT CR 12.5mg enteric f.c.tab' },
      { label: '	SEROXAT CR 25mg enteric f.c.tab' },
      { label: '	PAXETIN 20mg tab.' },
    ],
  },

  { label: '	PECTIN', tradeLabels: [{ label: '	VITIVERA  90% cream' }] },

  {
    label: '	PEFLOXACIN',
    tradeLabels: [
      { label: '	GLOBACIN 400mg coated tab.' },
      { label: '	PEFLOX 400mg tab.' },
      { label: '	PELOX 400mg infusion' },
      { label: '	PEFLACINE 400 mg' },
      { label: '	PEFLACINE 400 mg' },
      { label: '	SUSCEPTIN 400mg f.c. tab.' },
      { label: '	PELOX 400mg tab.' },
    ],
  },

  {
    label: '	PEGINTERFERON ALFA - 2a',
    tradeLabels: [
      { label: '	REIFERON RETARD 160mcg/1.2ml vial' },
      { label: '	PEGASYS 180mcg/0.5ml prefilled syringe' },
    ],
  },
  {
    label: '	PEGINTERFERON ALFA - 2b',
    tradeLabels: [
      { label: '	PEG-INTRON 150mcg/0.5ml S.C injection' },
      { label: '	PEG-INTRON 50mcg/0.5ml vial' },
      { label: '	PEG-INTRON 120mcg/0.5ml vial.' },
      { label: '	PEG-INTRON 100mcg/0.5ml vial' },
    ],
  },

  { label: '	PEMIROLAST', tradeLabels: [{ label: '	MIROLAST 0.1% eye drops' }] },
  { label: '	PENCICLOVIR', tradeLabels: [{ label: '	PENCICLOVIR 1%' }] },
  {
    label: '	PENICILLAMINE',
    tradeLabels: [
      { label: '	ARTAMINE 250mg caps.' },
      { label: '	ARTAMIN 150 mg caps.' },
      { label: '	RETADEL 250mg caps.' },
    ],
  },

  {
    label: '	PENICILLIN',
    tradeLabels: [
      { label: '	MAXICILLIN R 1.2 M.I.U vial' },
      { label: '	PENICILLIN G SODIUM FOR INJ. U.S.P 20' },
    ],
  },
  {
    label: '	PENICILLIN G',
    tradeLabels: [
      { label: '	BENZYL PENICILLIN 1M.I.U. B.P2004 vial.' },
      { label: '	BENZACILLIN 1.2 M.I.U.for I.M.inj vial.' },
      { label: '	SOLUPEN 1000,000 IU vial' },
      { label: '	SOLUPEN 1000,000 IU vial' },
    ],
  },

  {
    label: '	PENICILLIN G PROCAINE+PENICILLIN G',
    tradeLabels: [
      { label: '	DIACILLIN 400.000 I.U. I.M vial' },
      { label: '	PROCAINE PENICILLIN 400,000I.U  (I.M.)vial B.P.2001' },
    ],
  },
  {
    label: '	PENICILLIN G PROCAINE+PENICILLIN G SODIUM+STREPTOM',
    tradeLabels: [],
  },
  {
    label: '	PENTOSAN POLYSULPHATE',
    tradeLabels: [{ label: '	HAEMOCLAR cream' }, { label: '	HEMOCURE 0.5% gel' }],
  },

  {
    label: '	PENTOXIFYLLINE',
    tradeLabels: [
      { label: '	NORMOBRAL S.R. 400mg f.c.tab.' },
      { label: '	REBCOFLEX 300mg amp.' },
      { label: '	VASOTAL 100mg/5ml amp.' },
      { label: '	VASOTAL 400mg f.c. S.R.tab.' },
      { label: '	VASOTAL 300mg/15ml amp.' },
      { label: '	PEXAL-400DEPOTABS S.R.tab.' },
      { label: '	PENTOX 400mg SR f.c.tab' },
      { label: '	TRENTAL 20mg/ml I.V.infusion' },

      { label: '	TRENTAL 20mg/ml infusion' },
      { label: '	TRENTAL 400 SR f.c. tab.' },
      { label: '	OXYPENTAL 400mg tab.' },
      { label: '	PENTAL 400mg S.R.tab.' },
      { label: '	REBCOFLEX CR 400mg tab.' },
      { label: '	REBCOFLEX 600mg C.R.tab.' },
      { label: '	PENTOX 600mg sustainede release  f.c.tab.' },
      { label: '	PENTOXAL 100mg/5ml amp.' },
      { label: '	VASOCARE 400mg S.R.tab.' },
      { label: '	VASOCARE 600mg S.R.tab.' },
    ],
  },
  {
    label: '	PENTOXYVERINE',
    tradeLabels: [{ label: '	CABELLA  21.3mg/10ml syrup.' }],
  },
  {
    label: '	PEPPERMINT OIL',
    tradeLabels: [
      { label: '	COLOMINT 0.2ml  enteric coated soft gelatin caps.' },
    ],
  },
  {
    label: '	PEPPERMINT OIL+SIMETHICONE',
    tradeLabels: [{ label: '	MENTOTHICONE enteric coated caps.' }],
  },

  {
    label: '	PEPPERMINT+SENNA',
    tradeLabels: [
      { label: '	MEPACO LAXATIVE herbal tea bags' },
      { label: '	MENTHOLAX HERBAL soft gelatin caps.' },
    ],
  },
  {
    label: '	PERGOLIDE MESYLATE',
    tradeLabels: [
      { label: '	PERMAX 1mg tab.' },
      { label: '	PERMAX 0.25mg tab.' },
      { label: '	PERMAX 0.05mg tab.' },
    ],
  },

  {
    label: '	PERINDOPRIL',
    tradeLabels: [
      { label: '	ADWIPRIL 2mg tab.' },
      { label: '	COVERSYL 10mg f.c.tab.' },
      { label: '	COVERSYL 200mg tab.  200 mg tab.' },
      { label: '	COVERSYL 2mg tab.' },
      { label: '	ADWIPRIL4mg tab.' },
      { label: '	COVERSYL 4mg scored tab.' },
      { label: '	COVERSYL 4mg scored tab.' },
      { label: '	COVERSYL 5mg f.c.tab.' },

      { label: '	COVERSYL 8mg tab.' },
      { label: '	NORMAFASTEN 8 mg  scored tab.' },
    ],
  },

  {
    label: '	PERMETHRIN',
    tradeLabels: [
      { label: '	ECTOMETHRIN 2.5 % lotion.' },
      { label: '	ECTOMETHRIN 5% lotion' },
      { label: '	ECTOMETHRIN 2.5 % cream' },
      { label: '	ECTOMETHRIN 2.5 % oint.' },
      { label: '	ECTOMETHRIN 2.5% emulsion' },
      { label: '	ECTOMETHRIN 5 % emulsion' },
      { label: '	ECTOMETHRIN 5% oint.for children' },
      { label: '	NEWCID SHAMPOO 1 %(APPROVED RE-REG)' },

      { label: '	ECTOMETHRIN 5 % cream.' },
      { label: '	NEWCID SHAMPOO 1 %(APPROVED RE-REG)' },
      { label: '	PERMETHRIN 2.5% cream' },
      { label: '	PERMETHRIN 5% cream' },
    ],
  },
  {
    label: '	PERMETHRIN+PIPERONYL BUTOXIDE',
    tradeLabels: [{ label: '	CHARLIEU ANTI-LICE shampoo' }],
  },

  {
    label: '	PERPHENAZINE',
    tradeLabels: [
      { label: '	PERLAFON TAB. 4 MG' },
      { label: '	TRILAFON 8mg tab.' },
      { label: '	TRILAFON 4 mg tab.' },
      { label: '	PERLAFON TAB. 8 MG' },
    ],
  },
  { label: '	PETHIDINE', tradeLabels: [{ label: '	PETHIDINE inj.B.P.88' }] },

  {
    label: '	PHENAZOPYRIDINE',
    tradeLabels: [{ label: '	URISEPT 100 mg sugar coated tab.' }],
  },
  {
    label: '	PHENAZOPYRIDINE HYDROCHLORIDE+SULPHAMETHOXAZOLE+TR',
    tradeLabels: [],
  },
  {
    label: '	PHENAZOPYRIDINE+TRIMETHOPRIM',
    tradeLabels: [{ label: '	CARMURIT-T 25mg tab.' }],
  },

  {
    label: '	PHENIRAMINE',
    tradeLabels: [
      { label: '	AVIL 0.3gm/100ml syrup' },
      { label: '	ALLERVIL 10 mg/5 ml syrup' },
      { label: '	AVIL RETARD 75mg tab.' },
      { label: '	AVIL 45.5mg/2ml amp.' },
    ],
  },

  {
    label: '	PHENOBARBITONE',
    tradeLabels: [
      { label: '	SOMINALETTA 40mg/ml I.M.amp.' },
      { label: '	SOMINAL 60mg tab.' },
      { label: '	SOMINALETTA  0.3% elixir' },
      { label: '	SOMINALETTA 15mg tab.' },
    ],
  },
  {
    label: '	PHENOBARBITONE+PIPENZOLATE BROMIDE',
    tradeLabels: [{ label: '	SPASMOTAL PEADIATRIC drops(CANCELLED)' }],
  },

  { label: '	PHENOL', tradeLabels: [{ label: '	ORA FREE 1.4% oral spray' }] },
  {
    label: '	PHENOL+SULPHACETAMIDE',
    tradeLabels: [{ label: '	SULPHA BORACYL solution' }],
  },
  {
    label: '	PHENOL+THYMOL',
    tradeLabels: [{ label: '	PHENOCRAMINE mouth wash' }],
  },

  {
    label: '	PHENOTHRIN',
    tradeLabels: [
      { label: '	ITEM 0.4% shampoo' },
      { label: '	ITEM 0.4% shampoo' },
      { label: '	ANTILICE hair lotion' },
      { label: '	NOLICE 0.4gm/100ml shampoo' },
      { label: '	NOLICE 0.4gm/100 ml lotion' },
    ],
  },
  {
    label: '	PHENOXYETHANOL+PURIFIED WATER',
    tradeLabels: [{ label: '	AQUEOUS cream B.P.93' }],
  },

  {
    label: '	PHENOXYMETHYL PENICILLIN',
    tradeLabels: [
      { label: '	CLIACIL 150000 I.U. dry syrup' },
      { label: '	CLIACIL MEGA 1.2M.I.U.f.c.tab.' },
      { label: '	OSPEN 1000 tab.' },
      { label: '	OSPEN 400,000IU syrup' },
      { label: '	OSPEN 1500 f.c.tab.' },
      { label: '	V-PEN 625mg tab.' },
      { label: '	V-PEN 250mg/5ml granules for oral suspension' },
    ],
  },

  {
    label: '	PHENTOLAMINE',
    tradeLabels: [
      { label: '	VASOMAX 40mg tab.' },
      { label: '	ROGITAMINE 10mg/ml amp.' },
    ],
  },
  {
    label: '	PHENYLEPHRINE',
    tradeLabels: [
      { label: '	ISOPTOFRIN 0.12% eye drops' },
      { label: '	EPHRIMEX 2.5% eye drops' },
      { label: '	PHENYL EPHRINE 10 % eye drops' },
      { label: '	PHENYLEPHRINE 2.5% eye drops USP 27' },
    ],
  },

  {
    label: '	PHENYLEPHRINE+POLYVINYL ALCOHOL',
    tradeLabels: [{ label: '	PREFRIN LIQUIFILM eye drops' }],
  },
  {
    label: '	PHENYLEPHRINE+ZINC SULPHATE',
    tradeLabels: [{ label: '	ZINCFRIN  eye drops' }],
  },
  {
    label: '	PHENYLPROPANOLAMINE+PHOLCODINE+PROMETHAZINE+TOLU S',
    tradeLabels: [],
  },

  {
    label: '	PHENYTOIN',
    tradeLabels: [
      { label: '	IPANTEN 50mg caps.' },
      { label: '	EPITOIN 100mg caps.' },
      { label: '	HEALOSOL 40mg/150ml topical spray' },
      { label: '	IPANTEN 100mg caps.' },
      { label: '	EPANUTIN 100mg caps.' },
      { label: '	EXTENDED PHENYTION SODIUM 100MG USP 23 caps' },
      { label: '	EXTENDED PHENYTION SODIUM 100MG USP 23 caps' },
      { label: '	IPANTEN 30mg/5ml susp.' },

      { label: '	PHENYTOIN 100mg hard gelatin caps.' },
      { label: '	PHENYTIN 50mg/ml amp.' },
      { label: '	PHENYTOIN SODIUM 50mg/ml amp.USP24' },
      { label: '	PHENYTOIN 50mg caps.' },
      { label: '	PHENYTIN 50mg/ml amp.' },
      { label: '	PHAROTOIN 50mg hard gelatin caps.' },
      { label: '	PHENYTIN 30mg/5ml susp.' },
      { label: '	PHENYTIN 50mg caps.' },
      { label: '	PHENYTIN 100mg caps.' },
    ],
  },

  {
    label: '	PHLOROGLUCINOL+TRIMETHYLPHLOROGLUCINOL',
    tradeLabels: [{ label: '	STOPSPASM f.c. tabs.' }],
  },
  { label: '	PHOSPHOLIPIDS', tradeLabels: [{ label: '	LIPOSTABILE caps.' }] },

  {
    label: '	PILOCARPINE',
    tradeLabels: [
      { label: '	ISOPTO CARPINE 2% eye drops' },
      { label: '	ISOPTO CARPINE 1% eye drops' },
      { label: '	ISOPTO CARPINE 2% eye drops' },
      { label: '	ISOPTO CARPINE 4% eye drops' },
      { label: '	ISOPTO CARPINE 3% eye drops' },
      { label: '	ISOPTO CARPINE 3% eye drops' },
      { label: '	OCUCARPINE 2% eye drops' },
      { label: '	OCUCARPINE 1% eye drops' },

      { label: '	OCUCARPINE 4% eye drops' },
      { label: '	OCUCARPINE 3% eye drops' },
      { label: '	PILOCARPINE OPTIFILM  1% eye drops' },
      { label: '	PILOCARPINE OPTIFILM 2% eye drops' },
    ],
  },
  { label: '	PIMECROLIMUS', tradeLabels: [{ label: '	ELIDEL 1% cream' }] },

  {
    label: '	PIMOZIDE',
    tradeLabels: [{ label: '	ORAP FORTE 4mg tab.' }, { label: '	PIMOZIDE.' }],
  },
  {
    label: '	PINAVERIUM BROMIDE',
    tradeLabels: [
      { label: '	SPASCOLON 50mg f.c.tab.' },
      { label: '	SPASMOPINAVER 100mg f.c.tab.' },
      { label: '	SPASMOPINAVER  50mg f.c. tabs.' },
      { label: '	SPASCOLON 100mg f.c.tab.' },
    ],
  },

  {
    label: '	PINE RESIN+LARCH RESIN+PROPOLIS',
    tradeLabels: [{ label: '	DIAFORMIN cream' }],
  },

  {
    label: '	PIOGLITAZONE',
    tradeLabels: [
      { label: '	GLUCOPRO 15mg tab.' },
      { label: '	GLUSTIN 15mg tab.' },
      { label: '	GLUSTIN 30mg tab.' },
      { label: '	ENSUDYNE 45mg tab.' },
      { label: '	ENSUDYNE 30mg tab.' },
      { label: '	ENSUDYNE 15mg tab.' },
      { label: '	DIABETIN 30mg tab.' },
      { label: '	HI-GLITAZONE 30mg tab.' },

      { label: '	DIABETIN 15mg tab.' },
      { label: '	ACTOS 15mg tab.' },
      { label: '	ACTOS 30mg tab.' },
      { label: '	ACTOZONE 30mg tab.' },
      { label: '	ACTOZONE 45mg tab.' },
      { label: '	HI-GLITAZONE 15mg tab.' },
      { label: '	PIOJET 30mg tab.' },
    ],
  },

  {
    label: '	PIPAZETHATE',
    tradeLabels: [
      { label: '	SELGON 10mg infant.supp.(APPROVED RE-REG)' },
      { label: '	SELGON 20mg tab.(APPROVED RE-REG)' },
      { label: '	SELGON 40mg/ml oral drops(APPROVED RE-REG)' },
    ],
  },
  {
    label: '	PIPECURONIUM BROMIDE',
    tradeLabels: [{ label: '	ARDUAN 4 mg vial' }, { label: '	ARDUAN 4mg amp.' }],
  },

  {
    label: '	PIPENZOLATE BROMIDE',
    tradeLabels: [{ label: '	BROMEER  400mg/100ml oral drops(CANCELLED)' }],
  },
  {
    label: '	PIPERACILLIN',
    tradeLabels: [
      { label: '	PIPRACIL 4gm I.M./I.V.vial' },
      { label: '	PIPRACIL 2gm I.M./I.V. vial' },
      { label: '	PRACIL 2gm I.V./I.M.vial' },
    ],
  },

  {
    label: '	PIPERACILLIN+TAZOBACTAM',
    tradeLabels: [
      { label: '	TAZOCIN INJ. 4.5 gm' },
      { label: '	TAZOCIN INJ. 2.25 gm' },
    ],
  },
  {
    label: '	PIPERAZINE',
    tradeLabels: [{ label: '	PIPERAZINE MISR EFF GRANULES' }],
  },

  {
    label: '	PIPERAZINE THEOPHYLLINE ETHANOATE',
    tradeLabels: [
      { label: '	FARCOPHYLLINE 500mg adult supp.' },
      { label: '	ETAPHYLLINE 0.1gm/ml amp.' },
      { label: '	FARCOPHYLLINE 125mg paed.supp.' },
      { label: '	MINOPHYLLINE 500mg adult supp.' },
      { label: '	MINOPHYLLINE 10% amp.' },
    ],
  },

  {
    label: '	PIPOXOLAN',
    tradeLabels: [
      { label: '	ROWAPRAXIN 10mg supp.' },
      { label: '	ROWAPRAXIN 10mg supp.' },
      { label: '	ROWAPRAXIN 10mg tab.' },
      { label: '	ROWAPRAXIN FORTE 20mg tab.' },
      { label: '	ROWAPRAXIN FORTE 30mg supp.' },
    ],
  },

  {
    label: '	PIRACETAM',
    tradeLabels: [
      { label: '	CEREBROFORTE 800mg f.c.tab.' },
      { label: '	MEMORAL 1gm/5ml ampoule' },
      { label: '	EGYRAM 800 mg f.c.tab.' },
      { label: '	CEREBROFORTE 20% syrup' },
      { label: '	CEREBRO 400mg caps.' },
      { label: '	NEUROCET 400mg caps.' },
      { label: '	NEUROCET 20% syrup' },
      { label: '	EGYRAM 1gm/5ml syrup' },

      { label: '	STIMULAN 800mg tab.' },
      { label: '	OXITROPIL 1200mg f.c.tab.' },
      { label: '	NOOTROPIL 800mg f.c.tab.' },
      { label: '	STIMULAN 400mg caps.' },
      { label: '	STIMULAN 200mg/ml syrup' },
      { label: '	STIMULAN 1gm/5ml amp.' },
      { label: '	NOOTROPIL 1gm/5ml I.V./I.M.amp.' },
      { label: '	NOOTROPIL 20% syrup' },
      { label: '	NOOTRIPIL 400 mg caps.' },
    ],
  },

  { label: '	PIRACETAM+VINCAMINE', tradeLabels: [{ label: '	CERVITAM caps.' }] },
  { label: '	PIRETANIDE', tradeLabels: [{ label: '	ARELIX  6mg caps' }] },
  {
    label: '	PIRIBEDIL',
    tradeLabels: [
      { label: '	CEREBRODIL 20mg tab.' },
      { label: '	TRIVASTAL 20mg sugar coated tab.' },
      { label: '	TRIVASTAL RETARD 50mg tab.' },
    ],
  },

  {
    label: '	PIROXICAM',
    tradeLabels: [
      { label: '	INFLACAM 20mg supp.' },
      { label: '	INFLACAM 20mg dispersible tab.' },
      { label: '	INFLACAM 20mg caps.' },
      { label: '	INFLACAM 20mg/ml amp.' },
      { label: '	INFLACAM 10mg caps.' },
      { label: '	INFLACAM 0.5% gel' },
      { label: '	INFLACAM 10mg dispersible tab.' },
      { label: '	DISPERCAM  20 mg ampoule' },

      { label: '	DISPERCAM  20 mg supp.' },
      { label: '	DISPERCAM  gel 0.5%' },
      { label: '	DISPERCAM 10mg dispersible tablet' },
      { label: '	DISPERCAM 20mg dispersible tab.' },
      { label: '	BREXIN 20mg eff. tab.' },
      { label: '	BREXIN 20mg tab.' },
      { label: '	BREXIN 20mg sachet' },
      { label: '	FELDENE 20mg dispersible tab.' },
      { label: '	FELDENE 10mg dispersible .tab.' },
      { label: '	FELDENE 10mg caps.' },

      { label: '	FELDENE 0.5%w/w topical gel' },
      { label: '	FELDENE 20mg supp.' },
      { label: '	FELDENE 20mg caps.' },
      { label: '	FELDENE 20mg/ml I.M.amp.' },
      { label: '	FELDENE FLASH 20mg fast dissolving tab.' },
      { label: '	FELDORAL 20mg caps.' },
      { label: '	FELDORAL 20mg supp.' },
      { label: '	FELDORAL 20mg/ml amp.' },
      { label: '	FELDOXAM  20mg caps.' },
      { label: '	VENDOCID 20mg cap.' },

      { label: '	PIROXIDEN 20mg caps.' },
      { label: '	PIROXIFAR 20mg dispersable tab.' },
      { label: '	PIROXIFAR 20mg supp.' },
      { label: '	PIROXIFAR 20mg/ml amp.' },
    ],
  },
  {
    label: '	PIZOTIFEN HYDROGEN MALEATE',
    tradeLabels: [
      { label: '	MOSEGOR 5mg/100ml syrup.' },
      { label: '	MOSEGOR 0.5mg coated tab.' },
    ],
  },

  {
    label: '	PLANTAGO SEED',
    tradeLabels: [{ label: '	LAXIPLANT SOFT GRANULES 50 mg' }],
  },
  {
    label: '	PLASMA SUBISTITUTE',
    tradeLabels: [{ label: '	HAEMAGEL PLASMA SUBSTITUTE I.V.infusion' }],
  },
  {
    label: '	POLICRESULEN',
    tradeLabels: [
      { label: '	ALBOTHYL 90mg vag.supp.' },
      { label: '	ALBOTHYL 90mg vag.supp.' },
    ],
  },

  {
    label: '	POLYGELINE',
    tradeLabels: [{ label: '	HAEMACCEL 35gm/L Infusion Solution' }],
  },
  {
    label: '	POLYMYXIN+TETRACYCLINE',
    tradeLabels: [{ label: '	MICYCLINE (WITH POLYMYXIN B) eye oint.' }],
  },
  {
    label: '	POLYMYXIN+TRIMETHOPRIM',
    tradeLabels: [
      { label: '	POLYTRIM eye drops' },
      { label: '	POLAPRIM eye drops' },
      { label: '	OFTALMOTRIM eye drops' },
    ],
  },

  {
    label: '	POLYNOXYLINUM',
    tradeLabels: [
      { label: '	ANAFLEX 10% oint.' },
      { label: '	ANAFLEX 10% powder' },
    ],
  },
  { label: '	POLYTAR', tradeLabels: [{ label: '	POLYTAR 1% liquid' }] },
  {
    label: '	POLYVINYL ALCOHOL',
    tradeLabels: [{ label: '	LIQUIFILM TEARS 1.4% eye drops' }],
  },

  {
    label: '	POLYVINYL ALCOHOL+POVIDONE',
    tradeLabels: [{ label: '	OPTIFRESH eye drops' }],
  },
  {
    label: '	POLYVINYLPYRROLIDONE',
    tradeLabels: [
      { label: '	PROTAGENT 2% eye drops' },
      { label: '	VIDISEPT N 50mg/ml eye drops' },
    ],
  },
  {
    label: '	POTASSIUM BICARBONATE+SODIUM ALGINATE',
    tradeLabels: [{ label: '	ALGICAB susp.' }],
  },

  {
    label: '	POTASSIUM CHLORIDE',
    tradeLabels: [
      { label: '	K-CHLOR  6% syrup.' },
      { label: '	POTASSIUM M 3.3gm/100ml  syrup' },
      { label: '	POTASSIUM CHLORIDE 7.45 % I.V.injection' },
      { label: '	POTASSIUM CHLORIDE 15% W/V CONCENTRATE infusion USP 24' },
      { label: '	SLOW K 600mg f.c.tab.' },
      { label: '	POTASSIUM CHLORIDE 15% I.V.amp.U.S.P 27' },
      { label: '	POTASSIUM CHLORIDE 15% amp.E.P.2005' },
      {
        label:
          '	STERILE POTSSIUM CHLORIDE CONCENTRATE 15%  solution for I.V inf.',
      },

      { label: '	POTASSIUM  syrup' },
      { label: '	Potassium Chloride 15% Amp./otsuka' },
      { label: '	GEOPTA tab.' },
    ],
  },
  {
    label: '	POTASSIUM CHLORIDE+SODIUM CHLORIDE',
    tradeLabels: [
      {
        label:
          '	POTASSIUM CHLORIDE 0.3% &  SODIUM CHLORIDE 0.9% I.V.infusion B.P.98',
      },
      {
        label:
          '	POTASSIUM CHLORIDE 0.3% &  SODIUM CHLORIDE 0.9% I.V.infusion B.P.98',
      },
    ],
  },

  {
    label: '	POTASSIUM CHLORIDE+SODIUM CHLORIDE+SODIUM LACTATE',
    tradeLabels: [
      { label: '	LACTATED POTASSIC SALINE (1/2 STRENGTH DARROWS) I.V.infusion' },
      { label: '	LACTATED POTASSIC SALINE (1/2 STRENGTH DARROWS) I.V.infusion' },
      { label: '	LACTATED POTASSIC SALINE (1/2 STRENGTH DARROWS) I.V.infusion' },
    ],
  },
  {
    label: '	POTASSIUM CITRATE',
    tradeLabels: [{ label: '	CITRO-K 1.102g/5ml syrup' }],
  },

  {
    label: '	POTASSIUM CLORAZEPATE',
    tradeLabels: [
      { label: '	TRANEXENE 5mg caps.' },
      { label: '	TRANXENE 10mg caps.' },
      { label: '	ZEPEXENE  5  mg caps.' },
    ],
  },
  { label: '	POTASSIUM GLUCONATE', tradeLabels: [] },
  {
    label: '	POTASSIUM HYDROGEN SULPHATE+POTASSIUM MONOPERSULPH',
    tradeLabels: [],
  },

  {
    label: '	POTASSIUM NITRATE+POTASSIUM SULPHATE',
    tradeLabels: [{ label: '	EMOFORM NEW FORMULA mouth bath' }],
  },
  {
    label: '	POTASSIUM NITRATE+SODIUM MONOFLUROPHOSPHATE',
    tradeLabels: [{ label: '	EMOFORM-F mouth bath' }],
  },
  {
    label: '	POTASSIUM SODIUM HYDROGEN CITRATE',
    tradeLabels: [
      { label: '	ALKALIPURIN 2.4g/2.5gm granules' },
      { label: '	SODITRATE 2.4gm/2.5gm granules' },
      { label: '	URALYT-U granules' },
    ],
  },

  {
    label: '	POVIDONE',
    tradeLabels: [
      { label: '	ORCHATEARS PLUS 50mg/ml eye drops' },
      { label: '	OCCU-TEAR 2% eye drops' },
    ],
  },

  {
    label: '	POVIDONE- IODINE',
    tradeLabels: [
      { label: '	IODOSEPT 10% mouth wash' },
      { label: '	EZADINE 10% antiseptic solution' },
      { label: '	BETAVIDONE 10gm/100gm antiseptic topical oint.' },
      { label: '	BETAVIDONE 200mg Vag. Pessaries' },
      { label: '	BETAVIDONE 7.5gm/100ml shampoo' },
      { label: '	BETAVIDONE 7.5gm/100ml surgical scrub' },
      { label: '	IODOSEPT 10% oint.' },
      { label: '	BETAVIDONE 1% mouth wash & gargle' },

      { label: '	BETADINE 10gm/100ml vaginal douch' },
      { label: '	ISODINE 7.5 gm/100ml surgical scrub' },
      { label: '	EZADINE 7.5% Shampoo' },
      { label: '	EZADINE 10gm/100ml vaginal douche' },
      { label: '	BETADINE 1% mouth wash & gargle' },
      { label: '	BETADINE 10% oint.' },
      { label: '	BETADINE 10% oint.' },
      { label: '	BETADINE 10% sterile gauze dressing' },
      { label: '	ISODINE SHAMPOO 4%' },
      { label: '	IODOSEPT 10% mouth wash' },

      { label: '	ISODINE VAGINAL 11gm/100gm GEL' },
      { label: '	BETADINE 200mg vaginal ovule' },
      { label: '	IODOSEPT VAGINAL DOUCHE 10% topical solution' },
      { label: '	BETADINE 7.5g/100ml surgical scrub' },
      { label: '	BETADINE MEDICATED shampoo' },
      { label: '	EZADINE 7.5% surgical scrub' },
      { label: '	BETADINE SKIN CLEANSER 7.5g/100ml topical solution' },
      { label: '	IODOSEPT 200mg vaginal pessaries.' },
      { label: '	ISODINE VAGINAL DOUCHE' },
      { label: '	IODOSEPT 10% topical solution' },

      { label: '	ISODINE OINTMENT 10 %' },
      { label: '	BETADINE ANTISEPTIC solution' },
      { label: '	POVIDONE SKIN CLEANSER 7.5% topical solution.' },
      { label: '	POVIDONE 1% mouth wash' },
      { label: '	POVIDONE IODINE 10% topical solution' },
      { label: '	POVIDONE SKIN CLEANSER 7.5% topical solution.' },
      { label: '	POVIDONE-IODINE 1% mouth wash and gargle' },
      { label: '	POVIDONE-IODINE 10% oint.USP 23' },
      { label: '	POVIDONE-IODINE 200mg vaginal supp.' },
      { label: '	PROCIDAL 10% topical solution' },

      { label: '	POVIDIN 1% gargle' },
      { label: '	POVIDERMINE DERMAL ANTISEPTIC SOLN. 10 %' },
      { label: '	PROCIDAL 7.5% topical solution' },
      { label: '	PANAVIDON 10% top. antiseptic solution' },
      { label: '	POVIDIN OINT.' },
      { label: '	POVIDIN 10% antiseptic solution' },
      { label: '	POVIDENT 10% mouth wash & gargle' },
    ],
  },
  {
    label: '	POVIDONE K 25',
    tradeLabels: [{ label: '	PROTAGENT 2% eye drops.' }],
  },

  {
    label: '	POVIDONE K30',
    tradeLabels: [{ label: '	LACRI-STULLN 2% eye drops' }],
  },

  {
    label: '	PRAMIPEXOL',
    tradeLabels: [
      { label: '	DOPAROXEN 0.25mg tab.' },
      { label: '	DOPAROXEN 0.125mg tab.' },
      { label: '	RAMIXOLE 0.75mg tab.' },
      { label: '	RAMIXOLE 0.175mg tab.' },
      { label: '	SOBOPEXOLE 1mg tab' },
      { label: '	SIFROL 0.088mg tab.' },
      { label: '	SIFROL 0.18mg tab.' },
      { label: '	SIFROL 0.7mg tab.' },

      { label: '	SOBOPEXOLE 0.25mg tab.' },
    ],
  },
  {
    label: '	PRAVASTATIN',
    tradeLabels: [
      { label: '	LIPOSTAT 20 mg tab.' },
      { label: '	LIPOSTAT 10 mg tab.' },
      { label: '	LIPOSTAT 40mg tab.' },
      { label: '	CHOLESTATE 10mg f.c. tab.' },
    ],
  },

  {
    label: '	PRAZIQUANTEL',
    tradeLabels: [
      { label: '	DISTOCIDE 600mg f.c.tab.' },
      { label: '	EPIQUANTEL 150mg f.c.tab.' },
      { label: '	BELICIDE 600mg tab.' },
      { label: '	BILHARZIA 600mg tab.' },
      { label: '	BILHARZID 12gm/100ml susp.' },
      { label: '	BILHARZID 600mg tab.' },
      { label: '	BILHARZINE 600mg f.c.tab.' },
      { label: '	BILTRICIDE 600mg f.c. tab.' },

      { label: '	EPIQUANTEL 600mg/5ml susp.' },
      { label: '	PRAZIQUANTEL 1.8gm/15ml susp.' },
      { label: '	PRAZIQUANTEL 600mg f.c.tab.' },
      { label: '	SCHISTOCIDE 600mg/5ml susp.' },
    ],
  },
  {
    label: '	PRAZOSIN',
    tradeLabels: [
      { label: '	MINIPRESS 1mg tab.' },
      { label: '	MINIPRESS  2mg tab.' },
    ],
  },

  {
    label: '	PREDNICARBATE',
    tradeLabels: [
      { label: '	DERMATOP 2.5mg/g cream' },
      { label: '	DERMATOP 2.5mg solution' },
      { label: '	DERMATOP 0.25% oint.' },
    ],
  },

  {
    label: '	PREDNISOLONE',
    tradeLabels: [
      { label: '	ECONOPRED PLUS 1% eye drops' },
      { label: '	DISPRELONE-D 20mg dispersable tabs.' },
      { label: '	HOSTACORTIN H 5mg tab.' },
      { label: '	APICORTE FORTE 1% eye drops' },
      { label: '	DELTACORTRIL 5mg tab.' },
      { label: '	EZAPRED 20mg/100ml enema' },
      { label: '	PREDSOL FORTE 15mg/5ml syrup' },
      { label: '	PREDSOL FORTE 15mg/5ml syrup' },

      { label: '	PRED FORTE 1% eye drops' },
      { label: '	PREDSOL 5mg/5ml syrup' },
      { label: '	PREDNISOLONE 5mg tab.' },
      { label: '	OPTIPRED 10mg/ml eye susp.' },
      { label: '	PREDSOL 5mg/5ml syrup' },
      { label: '	SALCODIN 10mg/ml ophthalmic solution' },
      { label: '	PREDNISOLONE 5mg tab.' },
      { label: '	SOLUPRED ORO 5 mg orodispersible tabs.' },
      { label: '	ORCHAPRED eye gel' },
      { label: '	PREDNISOLONE 10mg/ml ophthalamic suspension' },

      { label: '	XILONE 5mg/5ml syrup' },
      { label: '	PHARMA PRED 10mg/ml  ophthalmic susp.' },
      { label: '	SOLU-DACORTIN H 25mg amp.' },
      { label: '	SOLUPRED 20mg tabs.' },
      { label: '	XILONE FORTE 15mg/5ml syrup' },
      { label: '	SOLU-DACORTIN 250mg vial (Hospital)' },
    ],
  },
  {
    label: '	PREDNISOLONE+PHENYLEPHERINE',
    tradeLabels: [{ label: '	ISOPTO STEROFRIN eye drops' }],
  },

  {
    label: '	PREDNISOLONE+RESORCINOL+SULPHUR',
    tradeLabels: [{ label: '	ESKADERM CREAM' }],
  },
  {
    label: '	PREDNISOLONE+SULFACETAMIDE',
    tradeLabels: [
      { label: '	ISOPTO-CETAPRED eye drops' },
      { label: '	CORTIBIOTAN ophthalmic suspension' },
      { label: '	BLEPHAMIDE  Ophthalmic suspension' },
      { label: '	SULFAPRED eye drops' },
    ],
  },

  {
    label: '	PREDNISOLONE+TETRACYCLINE',
    tradeLabels: [{ label: '	TETRACORT oint.' }, { label: '	TETRACORT oint.' }],
  },
  { label: '	PREDNISONE', tradeLabels: [{ label: '	HOSTACORTIN 5mg tab.' }] },

  {
    label: '	PREGABALIN',
    tradeLabels: [
      { label: '	KEMIRICA 50mg hard gelatin caps' },
      { label: '	KEMIRICA 300mg hard gelatin caps.' },
      { label: '	KEMIRICA 25mg hard gelatin caps.' },
      { label: '	KEMIRICA 200mg hard gelatin caps.' },
      { label: '	LYCROBALIN 100mg hard gelatin caps.' },
      { label: '	LYRICA 150mg caps.' },
      { label: '	HEXGABALIN 75 mg hard gelatin caps.' },
      { label: '	LYRICA 50mg caps' },

      { label: '	HEXGABALIN 150mg Hard Gelatin Capsules' },
      { label: '	DEPAPALIN 300mg hard gelatin caps.' },
      { label: '	LYROLIN 75mg hard gelatin caps.' },
      { label: '	LYRICA 75mg caps.' },
      { label: '	LYROLIN 150mg hard gelatin caps.' },
      { label: '	KEMIRICA 150mg hard gelatin caps.' },
      { label: '	KEMIRICA 100mg hard gelatin caps.' },
      { label: '	LYRICA 300mg  caps' },
      { label: '	IRENYPATHIC  75mg Hard Gelatin Capsules' },
      { label: '	KEMIRICA 75mg hard gelatin caps.' },

      { label: '	GABLOVAC  150mg hard gelatin capsule' },
      { label: '	ANDOGABLIN 75mg hard gelatin capsules' },
      { label: '	GABLOVAC 50mg hard gelatin caps.' },
      { label: '	AVEROPREG 50mg hard gelatin caps.' },
      { label: '	IRENYPATHIC  150mg Hard Gelatin Capsules' },
      { label: '	AVEROPREG 100mg hard gelatin caps.' },
      { label: '	PREGABA 100mg hard gelatin cap.' },
      { label: '	PREGABA 50mg hard gelatin cap.' },
      { label: '	PREGAVALEX 300mg hard gelatin caps.' },
      { label: '	PREGDINAPEX 100mg hard gelatin caps.' },

      { label: '	PREGDINAPEX 300mg hard gelatin caps.' },
      { label: '	PREGATREND 100mg hard gelatin caps.' },
      { label: '	PAINICA 150mg hard gelatin capsules' },
      { label: '	PREGAVALEX 150mg hard gelatin cap.' },
      { label: '	PREGDINAPEX 50mg hard gelatin caps.' },
      { label: '	PAINICA 75mg hard gelatin capsules' },
    ],
  },
  {
    label: '	PRENOXDIAZINE',
    tradeLabels: [
      { label: '	PHILOBAXINE 100mg tab.' },
      { label: '	PHILOBAXIN suspension' },
    ],
  },

  {
    label: '	PRIFINIUM BROMIDE',
    tradeLabels: [
      { label: '	PRISPASM 30mg sugar coated tab.' },
      { label: '	PRISPASM 7.5mg/ml amp.' },
    ],
  },
  {
    label: '	PRIMIDONE',
    tradeLabels: [
      { label: '	PRIDONE 250mg tab.' },
      { label: '	PRIDONE 250mg/5ml susp.' },
      { label: '	PRIDONE 50mg tab.' },
    ],
  },

  {
    label: '	PROCHLORPERAZINE',
    tradeLabels: [{ label: '	EMEDROTEC 3mg Buccal Bioadhesive Tablet' }],
  },

  {
    label: '	PROGESTERONE',
    tradeLabels: [
      { label: '	LUTONE 25mg/ml I.M.amp.' },
      { label: '	CYCLOTRONE 200mg soft gelatin caps.' },
      { label: '	CYCLOTRONE 200mg supp.' },
      { label: '	CYCLOGEST 200mg rectal or vag. Pessaries' },
      { label: '	CYCLOGEST 400mg rectal or vag. Pessaries' },
      { label: '	HYSTROGEST 200mg Soft gelatin capsules' },
      { label: '	UTROCARE 100mg soft gelatin caps.' },
      { label: '	UTROGESTAN 100mg soft gelatin caps.' },

      { label: '	PRONTOGEST 400mg vag. Pessaries' },
      { label: '	PROGEST 100mg soft gelatin caps.' },
      { label: '	PRONTOGEST 200mg vaginal pessaries.' },
      { label: '	PROGESTERONE 400mg rectal or vag. Pessaries' },
      { label: '	PROGESTERONE KAHIRA.' },
      { label: '	PROGETRONE 200mg vaginal tab.' },
      { label: '	PRONTOGEST 100mg/2ml I.M.amp.' },
    ],
  },
  { label: '	PROMAZINE', tradeLabels: [{ label: '	SPARIN 50mg vial' }] },

  {
    label: '	PROMETHAZINE',
    tradeLabels: [
      { label: '	PROMANTINE SYRUP 6 mg/5 ml' },
      { label: '	PHENERGAN 5mg/5ml syrup.' },
      { label: '	PROMANTINE 25 mg amp.' },
    ],
  },
  { label: '	PROPACETAMOL', tradeLabels: [{ label: '	PRO-DAFALGAN 2gm vial' }] },

  {
    label: '	PROPAFENONE',
    tradeLabels: [
      { label: '	RYTMONORM 150mg f.c.tab.' },
      { label: '	RYTMONORM 70mg/20ml amp.' },
    ],
  },
  {
    label: '	PROPIVERINE HYDROCHLORIDE',
    tradeLabels: [{ label: '	MICTONORM 15 mg sugar coated tab.' }],
  },

  {
    label: '	PROPOFOL',
    tradeLabels: [
      { label: '	DIPRIVAN 2% vial' },
      { label: '	DIPRIVAN 10mg/ml amp.' },
      { label: '	POFOL 10mg/ml amp. For I.V. inj. Or inf.' },
      { label: '	POFOL 10mg/ml amp. For I.V. inj. Or inf.' },
      { label: '	RECOFOL 10mg/ml amp./vial (Hospital)' },
      { label: '	RECOFOL 10mg/ml amp./vial (Hospital)' },
      { label: '	PROPOFOL 1% FRESENIUS amp.' },
      { label: '	PROPOFOL 1% FRESENIUS amp.' },

      { label: '	PROPOFOL 1% FRESENIUS amp.' },
      { label: '	RECOFOL 10mg/ml amp./vial (Hospital)' },
    ],
  },

  {
    label: '	PROPRANOLOL',
    tradeLabels: [
      { label: '	INDOLOL 10 mg tab' },
      { label: '	MAYESTROTENSE 1mg/ml  I.V. amp.' },
      { label: '	INDERAL 40 mg tab' },
      { label: '	INDERAL 1mg amp.(Hospital)' },
      { label: '	INDERAL 10 mg tab' },
      { label: '	INDOLOL 40 mg tab' },
      { label: '	PROLOL 40mg tab.' },
      { label: '	PROLOL 10mg tab.' },
    ],
  },

  {
    label: '	PROPYLTHIOURACIL',
    tradeLabels: [
      { label: '	THYROCIL 50mg tab.' },
      { label: '	PROPYLTHIOURACIL 50mg tab. B.P 2002' },
    ],
  },
  { label: '	PROQUAZONE', tradeLabels: [{ label: '	BIARISON 300 mg supp.' }] },

  {
    label: '	PROTAMINE SULPHATE',
    tradeLabels: [
      { label: '	PROTAM 10mg/ml I.V.vial' },
      { label: '	PROTAMINE SULPHATE 10 mg/10 ml VIAL' },
      { label: '	PROTAM 10mg/ml I.V.vial' },
    ],
  },
  {
    label: '	PROXIMADIOL',
    tradeLabels: [{ label: '	PROXIMOL 0.4mg sugar coated tab.' }],
  },

  {
    label: '	PSEUDOEPHEDRINE',
    tradeLabels: [
      { label: '	DECONGESS 120mg S.R.caps.' },
      { label: '	MINI PSEUDO 60mg tab.' },
      { label: '	SUDOPHINE 10mg/5ml syrup' },
      { label: '	PSEUDOEPHEDRINE 60 mg tab.' },
    ],
  },
  {
    label: '	PSEUDOEPHEDRINE+TERFENADINE',
    tradeLabels: [{ label: '	DECODINE PLUS tab.' }],
  },

  {
    label: '	PSEUDOEPHEDRINE+TRIPROLIDINE',
    tradeLabels: [
      { label: '	ACTIFED syrup' },
      { label: '	ACTIFED tab.' },
      { label: '	HISTARHINE syrup' },
    ],
  },

  {
    label: '	PURIFIED WATER',
    tradeLabels: [
      { label: '	HEALTH AQUA solution' },
      { label: '	EL NASR SOLVENT FOR ANTIBIOTICS-DRY MIX 50ml' },
      { label: '	WATER FOR INJECTION amp.B.P.2002' },
      { label: '	STERILE WATER FOR INJECTION USP 20' },
      { label: '	WATER FOR INJECTION ampoules' },
      { label: '	STERILIZED WATER FOR INJECTION B.P.2002' },
      { label: '	STERILE WATER FOR IRRIGATION U.S.P.27' },
      { label: '	STERILE WATER FOR IRRIGATION U.S.P.27' },

      { label: '	WATER FOR INJECTION B.P.2003' },
      { label: '	STERILE WATER FOR IRRIGATION U.S.P.26' },
      { label: '	STERILE WATER FOR INJ. E.P.84' },
      { label: '	STERILE WATER FOR INJ.' },
      { label: '	WATER FOR INJECTION amp.B.P.2002' },
      { label: '	PURIFIED WATER 100% sachet' },
      { label: '	WATER FOR INJECTION amp.' },
      { label: '	WATER FOR INJECTION amp.B.P.2002' },
    ],
  },

  {
    label: '	PYGEUM AFRICANUM EXTRACT',
    tradeLabels: [
      { label: '	PROSTACURE 50mg caps.' },
      { label: '	PROSTACAP 50mg caps.' },
      { label: '	TADENAN 25 mg caps' },
      { label: '	TADENAN 50 mg soft gelatin caps' },
    ],
  },

  {
    label: '	PYRAZINAMIDE',
    tradeLabels: [
      { label: '	PYRAZIDE 500mg tab.' },
      { label: '	PYRAZINAMIDE 500mg U.S.P.27 tab.' },
      { label: '	P.T.B. 500mg tab.' },
    ],
  },

  {
    label: '	PYRIDOSTIGMIN BROMIDE',
    tradeLabels: [
      { label: '	MESTINON 60mg sugar coated tab.' },
      { label: '	DELOSTIGAR 180mg S.R. f.c. tabs.' },
      { label: '	STIGMIDE 60mg/5ml syrup' },
      { label: '	PYSTINON 60mg sugar coated tab.' },
    ],
  },
  {
    label: '	PYRIDYLCARBIMOL',
    tradeLabels: [{ label: '	RONICOL RETARD 150mg tab.' }],
  },

  {
    label: '	PYRIMETHAMINE',
    tradeLabels: [
      { label: '	DARAPRIM 25mg tab.' },
      { label: '	NU-MAL 25mg tab.' },
      { label: '	PYRIMETHAMINE 25mg B.P. 98 tab.' },
    ],
  },
  {
    label: '	PYRITHIONE ZINC',
    tradeLabels: [
      { label: '	ZINCOPAN CREAM 2 gm' },
      { label: '	ZINCOPAN CREAM 2 gm' },
    ],
  },

  {
    label: '	PYRITINOL',
    tradeLabels: [
      { label: '	ENCEPHOHOL 200mg I.V.infusion' },
      { label: '	ENCEPHABOL FORTE 200mg coated tab.' },
      { label: '	ENCEPHABOL 80.5mg/5ml syrup' },
      { label: '	ENCEPHABOL 100mg coated tab.' },
    ],
  },

  {
    label: '	QUETIAPINE',
    tradeLabels: [
      { label: '	QUETIAPINE 200mg f.c. tab.' },
      { label: '	QUETIAPINE  100mg f.c. tab.' },
      { label: '	QUITAPEX 100mg f.c. tabs.' },
      { label: '	QUITAPEX 200mg  f.c.tab.' },
      { label: '	SEROQUEL 25mg tab.' },
      { label: '	SEROQUEL 100mg tab.' },
      { label: '	SHIZOTEC 100mg f.c.tab.' },
      { label: '	QUETIAPINE  25mg f.c. tab.' },

      { label: '	SEROQUEL 25mg tab.' },
      { label: '	SEROQUEL 200mg tab.' },
      { label: '	SEROQUEL 200mg tab.' },
      { label: '	SEROQUEL 100mg tab.' },
      { label: '	QUITAPEX 25 mg f.c.tab' },
      { label: '	PSYQUEL 200mg scored f.c tab.' },
      { label: '	PSYQUEL 25mg f.c.tab.' },
    ],
  },

  {
    label: '	QUINAGOLIDE',
    tradeLabels: [
      { label: '	NORPROLAC 75mcg tab.' },
      { label: '	NORPROLAC 25/50  tab.' },
    ],
  },
  {
    label: '	QUINAPRIL',
    tradeLabels: [
      { label: '	ACUITEL 20mg  scored coated tab.' },
      { label: '	ACUITEL 5mg scored coated tab.' },
    ],
  },

  {
    label: '	QUINIDINE SULPHATE',
    tradeLabels: [
      { label: '	QUINACARD SR 200mg tab.' },
      { label: '	QUINACARD SR 200mg tab.' },
      { label: '	QUINIDINE SULPHATE 200mg tab.BP 98' },
    ],
  },

  {
    label: '	RABEPRAZOLE SODIUM',
    tradeLabels: [
      { label: '	IDIZOLE 20mg enteric coated tab.' },
      { label: '	BEPRA 20mg f.c.tab.' },
      { label: '	RABEZOLE 20mg enteric coated tab.' },
      { label: '	ULCEROSTATE 10mg enteric coated tab.' },
      { label: '	RABEZOLE 10mg enteric coated tab.' },
      { label: '	RABICID 10mg enteric coated tab.' },
      { label: '	RABICID 20mg enteric coated tab.' },
      { label: '	PARIET 20mg tab.' },
    ],
  },

  {
    label: '	RABIES IMMUNE GLOBULIN (HUMAN)',
    tradeLabels: [{ label: '	BERIRAB P 150I.u./ml ampI.M injection.' }],
  },
  {
    label: '	RACECADOTRIL',
    tradeLabels: [
      { label: '	ACETORPHAN INFANT 10mg oral sachets' },
      { label: '	RACECAROX 10mg/gm sachet.' },
    ],
  },

  {
    label: '	RALOXIFENE HYDROCHLORIDE',
    tradeLabels: [
      { label: '	EVISTA 60mg f.c.tab.' },
      { label: '	ROSEVA 60mg f.c.tab.' },
      { label: '	SEDOVESTA 60mg f.c.tab.' },
      { label: '	RALOGEN 60mg tab.' },
      { label: '	RALOX 60mg f.c.tab.' },
      { label: '	RALOPAUSE 60mg f.c.tab.' },
      { label: '	OSTEO 60mg f.c.tab.' },
    ],
  },

  {
    label: '	RAMIPRIL',
    tradeLabels: [
      { label: '	CORPRIL 1.25mg caps.' },
      { label: '	CORPRIL 5mg caps.' },
      { label: '	CORPRIL 2.5mg caps.' },
      { label: '	RAMPITENSIVE  5mg tab.' },
      { label: '	RAMPITENSIVE 2.5mg tab.' },
      { label: '	RAMPITENSIVE 10mg tab.' },
      { label: '	TRITACE 5mg tab.' },
      { label: '	RIGHT-ACE 5mg tab.' },

      { label: '	RIGHT-ACE 10 mg tab.' },
      { label: '	TRITACE 2.5mg tab.' },
      { label: '	RAMIPRIL 2.5mg caps.' },
      { label: '	TRITACE 1.25mg tab.' },
      { label: '	RAMACEIN 5mg tab.' },
      { label: '	RAMITAC 2.5mg tab.' },
      { label: '	RAMIPRIL 5mg caps.' },
      { label: '	RAMACEIN 1.25mg tab.' },
      { label: '	RAMACEIN 2.5mg tab.' },
      { label: '	TRITACE PROTECT 10mg tab.' },

      { label: '	RAMIPRIL 1.25mg caps.' },
    ],
  },

  {
    label: '	RANITIDINE',
    tradeLabels: [
      { label: '	ACILIGHT 75mg coated tab.' },
      { label: '	ACILOC 75mg film coated tablet' },
      { label: '	APO-RANITIDINE 300mg tab.' },
      { label: '	ACILOC 150mg eff.granules' },
      { label: '	GASTROPROTECT 150mg tab.' },
      { label: '	GASTROPROTECT 300mg tab.' },
      { label: '	EPIRAN 75mg  tab.' },
      { label: '	EPIRAN 75mg sachet' },

      { label: '	ACILOC 300mg film coated tablet' },
      { label: '	APO-RANITIDINE 150mg tab.' },
      { label: '	HISTAC 50mg/2ml amp.' },
      { label: '	GASTAC 75mg/5ml syrup' },
      { label: '	HISTAC 300mg f.c. tab.' },
      { label: '	HISTAC 150mg tab.' },
      { label: '	RANI 50mg/2ml Ampoules for I.V/IM injection' },
      { label: '	RANITAK 150mg tab.' },
      { label: '	OSMORAN 300mg tab.' },
      { label: '	TAURAL 300mg coated tab.' },

      { label: '	RANI 150mg sachets.' },
      { label: '	RANTICARE 75mg/5ml syrup' },
      { label: '	ZANTAC 75mg tab.' },
      { label: '	ZANTAC 50mg/2ml I.M/I.V amp.' },
      { label: '	ZANTAC 300mg f.c.tab.' },
      { label: '	ZANTAC 300 mg eff.tab.' },
      { label: '	ZANTAC 150mg tab.' },
      { label: '	ZANTAC 150mg  eff.tab.' },
      { label: '	ZANTAC 150mg  eff.tab.' },
      { label: '	NOEROSIVE 15mg/ml syrup' },

      { label: '	PYLORID 400mg tab.' },
      { label: '	RANITAK 25mg/ml amp. For I.M./slow I.V inj. & I.V. inf.' },
      { label: '	RANTIDOL 150mg tab.' },
      { label: '	RANITAK 150mg tab.' },
      { label: '	RANTIBLOCK 150mg f.c. tab.' },
      { label: '	RANITIDINE AMPOULE 25mg/ml' },
      { label: '	RANITIDINE 150mg U.S.P.27  tab.' },
      { label: '	RANITIDINE 75mg tab.' },
      { label: '	TAURAL 50mg/5ml I.V.amp.' },
      { label: '	TAURAL 150mg  tab.' },

      { label: '	RAPIDAHEAL 150mg eff. Tabs' },
      { label: '	RANACID 75mg tab.' },
      { label: '	RANITIDINE 150mg tablet' },
      { label: '	RANITAK 300mg f.c.tab' },
      { label: '	RANITIDINE 300mg f.c.tab.' },
      { label: '	RANITIDINE 50mg/5ml amp.' },
      { label: '	RANITIDINE 75mg eff. Gr. in sachets' },
    ],
  },
  {
    label: '	RANITIDINE+TRIPOTASSIUM  DICITROBISMUTHATE',
    tradeLabels: [{ label: '	ULCERCURE f.c.tab.' }],
  },

  { label: '	REBAMIPIDE', tradeLabels: [{ label: '	MUCOSTA 100mg f.c.tab.' }] },
  {
    label: '	REBOXETINE',
    tradeLabels: [
      { label: '	EDRONAX 4mg tab.' },
      { label: '	SENOREIN 4mg tabs.' },
    ],
  },

  {
    label: '	RECOMBINANT HIRUDIN',
    tradeLabels: [
      { label: '	EXTRAUMA DNA cream' },
      { label: '	THROMBEXX DNA 1120 I.U/100gm topical gel.' },
      { label: '	THROMBEXX DNA 1120 I.U/100gm cream' },
      { label: '	THROMBEXX 15mg/ml S.C.amp.' },
      { label: '	XIRUVASC 50mg vial' },
    ],
  },

  {
    label: '	RECOMBINANT HUMAN INTERFERON ALFA 2B',
    tradeLabels: [
      { label: '	ALFARON 3M.I.U inj.' },
      { label: '	ALFARON 5M.I.U inj.' },
    ],
  },
  {
    label: '	REMIFENTANIL',
    tradeLabels: [
      { label: '	Ultiva 5mg vial' },
      { label: '	ULTIVA 2mg I.V.vial' },
      { label: '	ULTIVA 1mg I.V.vial' },
    ],
  },

  {
    label: '	REPAGLINIDE',
    tradeLabels: [
      { label: '	DIAROL 2mg tab.' },
      { label: '	DIAROL 1mg tab.' },
      { label: '	DIAROL 0.5mg tab.' },
      { label: '	REPAGLID 1mg tab.' },
      { label: '	REPANDIN 1mg tab.' },
      { label: '	REPANDIN  2mg tab.' },
      { label: '	REPAGLINIDE.' },
      { label: '	NOVONORM 2mg tab' },

      { label: '	REPAGLINIDE 0.5 mg.' },
      { label: '	REPAGLID 0.5mg tab.' },
      { label: '	NOVONORM 0.5mg tab' },
      { label: '	NOVONORM 1mg tab.' },
      { label: '	REPAGLINIDE 1mg tab.' },
    ],
  },
  { label: '	REPROTEROL', tradeLabels: [{ label: '	ASTHMOBRONCHIN 20 mg tab' }] },

  {
    label: '	RHO(D)HUMAN IMMUNOGLOBULIN',
    tradeLabels: [
      { label: '	NATEAD 100mcg/2ml vial' },
      { label: '	RHESOGAMMA P 300mcg/1.5ml amp I.M inj.' },
      { label: '	WINRHO SDF 120mcg (600I.u.) I.M./I.V. vial' },
      { label: '	WINRHO SDF 300mcg (1500I.u.) I.M./I.V.vial' },
      { label: '	RHOPHYLAC 300mcg/2ml prefilled syringe' },
    ],
  },

  {
    label: '	RIBAVIRIN',
    tradeLabels: [
      { label: '	HEPATOVIRIN 400 mg hard gelatin cap.' },
      { label: '	RIBAVARIN 400mg caps.(Hospital)' },
      { label: '	VIROKAN 100mg/5ml syrup' },
      { label: '	VIRIN 400mg caps.(hospital)' },
      { label: '	VIRAZOLE 200mg caps.' },
      { label: '	RIBAVIRIN syrup' },
      { label: '	VIRACURE 7.5% cream' },
      { label: '	VIRACURE 400mg caps.' },

      { label: '	VIRACURE 200mg caps.' },
      { label: '	RIBA 200mg caps.' },
      { label: '	PANVIRIN 400mg caps.(Hospital)' },
      { label: '	VIROKAN 200mg caps.' },
      { label: '	RIBAVARIN 200mg caps.(Hospital)' },
      { label: '	VIRIN 200mg caps.(hospital)' },
      { label: '	RIBAVIRIN 200mg caps.' },
      { label: '	PANVIRIN 200mg caps.(Hospital)' },
      { label: '	RIBAVIRIN 200mg caps.' },
      { label: '	RIBAVIRIN 400mg caps.' },

      { label: '	RIBOVINAL 200mg Hard Gelatin Capsule' },
      { label: '	RIBAZOLE 400mg caps.' },
      { label: '	RIBA 400mg caps.' },
      { label: '	VIROKAN 400mg caps.' },
    ],
  },

  {
    label: '	RIFAMPICIN',
    tradeLabels: [
      { label: '	RIMACTANE 2% syrup' },
      { label: '	RIFAMYCIN 1% eye oint.' },
      { label: '	RIFAMYCINE EYE DROPS' },
      { label: '	RIFACTINE 2% susp.' },
      { label: '	RIFACTINE 300 mg capsule' },
      { label: '	RIFADIN  2gm/100ml susp.' },
      { label: '	RIFOCIN 250mg amp.' },
      { label: '	RIFAMPIN 150 mg caps.' },

      { label: '	RIMACTANE 150mg capsule' },
      { label: '	RIFAMPIN 150 mg caps' },
      { label: '	RIFAMPIN 150mg caps.' },
      { label: '	RIMACTANE 300mg caps.' },
      { label: '	RIFAMPIN 300mg caps.' },
      { label: '	RIFAM 100mg/5ml susp.' },
      { label: '	RIFAMPIN 300mg Caps. USP 27' },
      { label: '	RIFAMOX 100mg/5ml susp.' },
      { label: '	RIFAM 300mg caps.' },
      { label: '	RIFAMPIN 150 mg caps' },

      { label: '	RIFAMPIN 300mg caps B.P.2004 Misr' },
      { label: '	RIFAMPIN 300 mg caps.' },
      { label: '	RIFAMPICIN 150mg caps.' },
      { label: '	RIFAMPICIN 300mg caps.' },
    ],
  },
  {
    label: '	RILMENIDINE DIHYDROGEN PHOSPHATE',
    tradeLabels: [{ label: '	HYPERIUM  1mg  tabs.' }],
  },
  { label: '	RILUZOLE', tradeLabels: [{ label: '	RILUTEK 50mg f.c. tabs.' }] },

  {
    label: '	RIMANTADINE HYDROCHLORIDE',
    tradeLabels: [
      { label: '	RYMANTA 50mg/5ml syrup' },
      { label: '	VIROLYSIS 50mg/5ml syrup.' },
    ],
  },
  {
    label: '	RIMONABANT',
    tradeLabels: [{ label: '	ACOMPLIA 20mg f.c.tablet(Withdrawal)' }],
  },

  {
    label: '	RISEDRONATE SODIUM',
    tradeLabels: [
      { label: '	ACTONEL 5mg f.c.tab.' },
      { label: '	ACTONEL 35mg once a week f.c.tab.' },
      { label: '	RISALDENE 5mg f.c.tab.' },
      { label: '	RISALDENE 35mg f.c.tab.' },
      { label: '	RISEONATE 5mg f.c.tab.' },
    ],
  },

  {
    label: '	RISPERIDONE',
    tradeLabels: [
      { label: '	APEXIDONE 4mg f.c.tab.' },
      { label: '	APEXIDONE 2mg f.c.tab.' },
      { label: '	APEXIDONE 0.5mg f.c.tab.' },
      { label: '	APEXIDONE 3mg f.c.tab.' },
      { label: '	APEXIDONE 1mg f.c.tab.' },
      { label: '	APEXIDONE 1mg/ml syrup' },
      { label: '	RISCURE 4mg f.c.tab.' },
      { label: '	RISDAL 2mg f.c.tab.' },

      { label: '	SCHIZOPERDAL 1mg/ml syrup.' },
      { label: '	SCHIZODAL 2mg f.c.tab.' },
      { label: '	RISDAL 4mg f.c.tab.' },
      { label: '	PSYCHODAL 4mg f.c.tab.' },
      { label: '	RISPERDAL 3 mg tab.' },
      { label: '	RISPERDAL 2mg f.c.tab.' },
      { label: '	PSYCHODAL 3mg f.c.tab.' },
      { label: '	RISPERDAL 1mg/ml Oral solution' },
      { label: '	RISPERDAL 1mg tab.' },
      { label: '	RISPADEX 3mg f.c.tab.' },

      { label: '	PSYCHODAL 2mg f.c.tab.' },
      { label: '	RISPERIDONE 2mg f.c.tab.' },
      { label: '	ZESPERONE 4mg f.c.tab.' },
      { label: '	ZESPERONE 2mg f.c.tab.' },
      { label: '	RISPADEX 1mg/ml syrup' },
      { label: '	RISIDRONE 3mg f.c.tab.' },
      { label: '	PSYCHODAL 1mg/ml syrup' },
      { label: '	PSYCHODAL 1mg f.c.tab.' },
      { label: '	RISCURE 1mg f.c.tab.' },
      { label: '	RISPERDAL CONSTA 25mg vial' },

      { label: '	RISIDRONE 1mg f.c.tab.' },
      { label: '	RISCURE 2mg f.c.tab.' },
      { label: '	SIGMADONE 3mg tab.' },
      { label: '	RISPERIDONE 3mg f.c.tab.' },
      { label: '	RISPERDAL 4mg coated tab.' },
    ],
  },

  {
    label: '	RITODRINE',
    tradeLabels: [
      { label: '	RITOPAR 10mg tab.' },
      { label: '	TORIAR 10mg f.c.tab.' },
      { label: '	YUTOPAR 10mg/ml amp.' },
      { label: '	YUTOPAR 10mg tab.' },
    ],
  },

  {
    label: '	RIVASTIGMINE',
    tradeLabels: [
      { label: '	EXELON 1.5mg hard gelatin caps.' },
      { label: '	EXELON 4.5mg hard gelatin caps.' },
      { label: '	EXELON 3mg hard gelatin caps.' },
      { label: '	EXELON Patch 10 Transdermal Patches' },
      { label: '	EXELON PATCH 5 transdermal patches' },
      { label: '	EXELON 4.5mg hard gelatin caps.' },
      { label: '	EXELON 6mg hard gelatin caps.' },
      { label: '	EXELON 1.5mg hard gelatin caps.' },

      { label: '	EXELON 3mg hard gelatin caps.' },
      { label: '	EXELON 6mg hard gelatin caps.' },
      { label: '	RIVAXEL 6mg hard gelatin caps.' },
      { label: '	RIVAXEL 4.5mg hard gelatin caps.' },
      { label: '	RIVAXEL 3mg hard gelatin caps.' },
      { label: '	RIVAXEL 1.5mg hard gelatin caps.' },
    ],
  },
  { label: '	RIZATRIPTAN', tradeLabels: [{ label: '	MIGRIZA 10mg tabs.' }] },

  {
    label: '	ROCURONIUM BROMIDE',
    tradeLabels: [{ label: '	ESMERON 50mg/5ml I.V vial' }],
  },

  {
    label: '	ROFECOXIB',
    tradeLabels: [
      { label: '	ARTHIDOL 25mg tab.' },
      { label: '	MINATOID 25mg/5ml susp.' },
      { label: '	ARTHIDOL 12.5mg tab.' },
      { label: '	MINATOID 12.5mg/5ml susp.' },
      { label: '	ROFCOX 12.5mg/5ml susp.' },
      { label: '	RHUMA-CURE 12.5mg tab.' },
      { label: '	ROMACOX 12.5mg tab.' },
      { label: '	PROX 25mg tab.' },

      { label: '	RHUMA-CURE  25mg tab.' },
      { label: '	VIOXX 12.5mg tab.' },
      { label: '	ROFCOX 12.5mg/5ml susp.' },
      { label: '	ROMACOX 50mg tab.' },
      { label: '	SELOX 12.5mg tablet' },
      { label: '	ROMACOX 25mg tab.' },
      { label: '	VIOXX  50mg tab.' },
      { label: '	VIOXX 25mg tab.' },
      { label: '	SELOX  25mg/5ml suspension' },
      { label: '	SELOX  25mg tablet' },

      { label: '	PROX 12.5mg tab.' },
    ],
  },
  {
    label: '	ROPIVACAINE',
    tradeLabels: [
      { label: '	NAROPIN 7.5mg/ml amp.' },
      { label: '	NAROPIN 7.5mg/ml amp.' },
    ],
  },

  {
    label: '	ROSIGLITAZONE',
    tradeLabels: [
      { label: '	AVAVLIT 2mg f.c.tabs' },
      { label: '	AVAGLIT f.c.tab.' },
      { label: '	AVAGLIT 8mg f.c.tab' },
      { label: '	DIAZAN 4mg tab.' },
      { label: '	AVANDIA 4mg tab.' },
      { label: '	ROSIZONE 4mg tab.' },
      { label: '	ROSANDIA 2mg f.c.tab.' },
      { label: '	ROSIDEXX 2mg f.c.tab.' },

      { label: '	ROSILON 4mg f.c.tab.' },
      { label: '	ROSIDEXX 4mg f.c.tab.' },
      { label: '	ROSIDEXX 8mg f.c.tab.' },
      { label: '	ROSIGLIT 4mg f.c.tab.' },
    ],
  },

  {
    label: '	ROSUVASTATIN',
    tradeLabels: [
      { label: '	CRESTOR 5mg f.c. tab.' },
      { label: '	ADVOCHOL 10mg f.c. tabs.' },
      { label: '	CHOLEROSE 10 mg f.c.tab.' },
      { label: '	CHOLEROSE 20mg f.c. tabs.' },
      { label: '	CHOLEROSE 5 mg  f.c.tab.' },
      { label: '	FROSITOR 5mg f.c. tabs.' },
      { label: '	JUSTECHOL 20mg f.c. tabs.' },
      { label: '	ADVOCHOL 10mg f.c. tabs.' },

      { label: '	MEROSATIN 10mg f.c.tab.' },
      { label: '	CRESTOR 20mg f.c.tab.' },
      { label: '	CRESTOR 10mg f.c.tab.' },
      { label: '	CRESTOLIP 20mg f.c.tab.' },
      { label: '	CRESTOLIP 10mg f.c. tabs.' },
      { label: '	ESTERO-MAP 20mg f.c. tabs.' },
      { label: '	ESTERO-MAP 10mg f.c. tabs.' },
      { label: '	LIPOREGISTATE 5mg f.c. tabs.' },
      { label: '	ROSUVAST 5mg f.c.tab.' },
      { label: '	SUVIKAN 10mg f.c.tab.' },

      { label: '	ROSUVAST  20 mg f.c.tab.' },
      { label: '	ROSUVASTATIN  10mg f.c. tab.' },
      { label: '	ROSUVAST 10mg f.c.tab' },
      { label: '	SUVIKAN 20mg f.c.tab.' },
    ],
  },

  {
    label: '	ROXITHROMYCIN',
    tradeLabels: [
      { label: '	ROXID 100mg tab.' },
      { label: '	ROXICIN 150mg f.c.tab.' },
      { label: '	ROXICIN 300mg f.c.tab.' },
      { label: '	ROXITHROMYCIN 150mg tab.' },
      { label: '	ROXITHROMYCIN 300mg f.c.tab.' },
      { label: '	RUXID 150mg f.c. tab.' },
      { label: '	RULID 100mg tab.' },
      { label: '	RULID 150mg tab.' },

      { label: '	RULID 300 mg tab.' },
      { label: '	RULID 50mg sachet' },
      { label: '	RULID 50mg tab.' },
      { label: '	ROXID 300mg tab.' },
    ],
  },
  {
    label: '	RUTIN+VITAMIN C',
    tradeLabels: [
      { label: '	RUTA-C 60mg tab.' },
      { label: '	RUTIN-C soft gelatin caps.' },
      { label: '	RUTALEX-C  tab.' },
      { label: '	RUTALEX-C  tab.' },
    ],
  },

  {
    label: '	RUTIN+VITAMIN C+VITAMIN K1',
    tradeLabels: [{ label: '	STYPTOBION amp.' }, { label: '	STYPTOBION  tab.' }],
  },
  {
    label: '	RUTOSIDE',
    tradeLabels: [
      { label: '	VENORUTON 2% topical gel.' },
      { label: '	VENORUTON 300mg hard gelatin caps.' },
      { label: '	VENORUTON FORTE 500mg tab.' },
    ],
  },

  {
    label: '	SACCHARIN',
    tradeLabels: [{ label: '	SACCHARIN SODIUM 33mg tab.' }],
  },

  {
    label: '	SALBUTAMOL',
    tradeLabels: [
      { label: '	BRONCHOVENT 2mg tab.' },
      { label: '	BUTALIN 100mcg/actuation' },
      { label: '	AEROLIN 100mcg/dose inhaler' },
      { label: '	MEPACOVENT 2mg/5ml syrup.' },
      { label: '	FARCOLIN RESPIRATOR 0.5% solution' },
      { label: '	FARCOLIN 2mg tab.' },
      { label: '	BRONCAL 8mg S.R.caps.' },
      { label: '	BRONCAL 4mg S.R.caps.' },

      { label: '	ACTIVENT 8mg SR Cap.' },
      { label: '	OCTOVENT 4mg C.R. tab.' },
      { label: '	VENTAL INHALER 100 mcg/dose' },
      { label: '	VENTOLIN EVOHALER 100mcg/actuation inhaler' },
      { label: '	VENHALER 100mcg/dose spray' },
      { label: '	VENTAL 2mg/5ml syrup' },
      { label: '	VENTOLIN DISKUS 200mcg/dose accuhaler' },
      { label: '	SALBOVENT 2mg tab.' },
      { label: '	SALBOVENT 2mg/5ml syrup' },
      { label: '	SALBOVENT FORTE 4mg tab.' },

      { label: '	SALBUTAMOL 2mg/5ml syrup' },
      { label: '	SALBUTAMOL 5mg/ml nebulizer solution' },
      { label: '	SALBOVENT 0.05% amp.' },
      { label: '	VENTAL TAB. 2 mg' },
      { label: '	VENTOLIN 2mg/5ml syrup' },
      { label: '	Ventolin 2mg tab.' },
      { label: '	VENTOLIN 0.5mg/ml amp. For S.C./I.M. inj.' },
      { label: '	VENTOLIN 0.5% respirator solution' },
      { label: '	VENTOLIN  100 mcg/dose inhaler' },
      { label: '	VENTENE 2 mg tab.' },

      { label: '	VENTAMOL 4 mg SR caps.' },
      { label: '	Farcolin Solu.' },
    ],
  },
  {
    label: '	SALICYLAMIDE',
    tradeLabels: [
      { label: '	ASCO  tab.' },
      { label: '	SALICYLAMIDE 0.5gm tab. (cancelled)' },
    ],
  },
  {
    label: '	SALICYLHYDROXAMIC ACID',
    tradeLabels: [{ label: '	SHAM 300mg caps.' }],
  },

  {
    label: '	SALICYLIC ACID',
    tradeLabels: [
      { label: '	DERMACYCLIC 6% topical lotion' },
      { label: '	DERMACYCLIC 6% topical lotion' },
      { label: '	DERMACYCLIC 6% topical lotion' },
      { label: '	BIOCLEAR gel for acne' },
      { label: '	SALICYLIC ACID 2% topical oint. B.P.2004' },
      { label: '	SALICYLIC ACID COLLODION 12% paint B.P.2001' },
      { label: '	SALICYLIC ACID 2% oint.B.P93' },
    ],
  },

  {
    label: '	SALICYLIC ACID+UREA',
    tradeLabels: [{ label: '	HEEL FORTE oint.' }],
  },
  {
    label: '	SALMETEROL',
    tradeLabels: [
      { label: '	METROVENT 5mg inhaler.' },
      { label: '	SEREVENT DISKUS 50mcg/dose accuhaler' },
      { label: '	SEREVENT 25mcg rotadisks' },
      { label: '	SEREVENT 25 mcg/dose inhaler' },
    ],
  },

  {
    label: '	SECNIDAZOLE',
    tradeLabels: [
      { label: '	FLADAZOLE 500mg sachet' },
      { label: '	AMEBAZOL 1gm f.c.tab.' },
      { label: '	FLAGENTYL 500mg/15ml susp.' },
      { label: '	FLADAZOLE 500mg tab.' },
      { label: '	EUROZOLE 500mg tab.' },
      { label: '	FLAGENTYL 500mg f.c. tabs.' },
      { label: '	CIPAZOLE FORT 1g tab.' },
      { label: '	SENIDAL 500mg f.c.tab.' },

      { label: '	OPINIDAZOLE 1000mg f.c.tab.' },
      { label: '	SECNIDAZOLE 500mg tab.' },
      { label: '	SECINDA-MISR 500mg tab.' },
    ],
  },
  {
    label: '	SELEGILINE CHLORIDE',
    tradeLabels: [{ label: '	JUMEX TAB. 5  mg' }, { label: '	TONUS 5mg tab.' }],
  },

  {
    label: '	SELENIUM SULFIDE',
    tradeLabels: [
      { label: '	SULFISELEN  2.5% lotion' },
      { label: '	TINASEL 2.5gm/100ml topical lotion' },
      { label: '	TINASEL CREAM 2.5 gm' },
    ],
  },
  {
    label: '	SELENIUM+VITAMIN A+VITAMIN C+VITAMIN E',
    tradeLabels: [{ label: '	PROTECVIT soft gelatin caps.' }],
  },
  { label: '	SENNOSIDE', tradeLabels: [{ label: '	SENNALAX tab.' }] },

  { label: '	SENNOSIDES', tradeLabels: [{ label: '	DIOLAX 7.5mg tab.' }] },
  {
    label: '	SERENOA REPENS PURIFIED EXTRACT',
    tradeLabels: [
      { label: '	PERMIXON tablet 80mg' },
      { label: '	PROSTA-S 160mg caps.' },
      { label: '	PROSTA-S 160mg caps.' },
      { label: '	SEROPROST  80mg caps.' },
    ],
  },

  {
    label: '	SERTACONAZOLE',
    tradeLabels: [
      { label: '	DERMOFIX 2% cream' },
      { label: '	DERMOFIX 2% powder' },
      { label: '	DERMOFIX 2% spray solution' },
      { label: '	AMOSERTADERM 2% top. Cream' },
      { label: '	AMOSERTADERM 2% top. Cream' },
    ],
  },

  {
    label: '	SERTINDOLE',
    tradeLabels: [
      { label: '	SERDOLECT 4mg f.c.tab.' },
      { label: '	SERDOLECT 12mg f.c.tab.' },
      { label: '	SERDOLECT 16mg f.c.tab.' },
      { label: '	SERDOLECT 20mg f.c.tab.' },
    ],
  },

  {
    label: '	SERTRALINE',
    tradeLabels: [
      { label: '	MOODAPEX 50mg f.c.tab.' },
      { label: '	LUSTRAL 50mg f.c.tab.' },
      { label: '	LUSTRAL 100 mg tab.' },
      { label: '	DEPR-STAT 50mg caps.' },
      { label: '	SERTRALINE 25mg f.c. tab.' },
      { label: '	SERTRALINE 20mg/ml oral concentrate' },
      { label: '	SERTRAL 50mg tab.' },
      { label: '	SERPASS 100mg f.c.tab.' },

      { label: '	SESERINE 50mg tab.' },
      { label: '	SERLIFT 100mg f.c.tab.' },
      { label: '	SIRTO 50mg tab.' },
      { label: '	OPIRALINE 100mg f.c.tab.' },
    ],
  },
  { label: '	SEVELAMER', tradeLabels: [{ label: '	RENAGEL 800mg f.c.tab' }] },
  {
    label: '	SEVOFLURANE',
    tradeLabels: [{ label: '	SEVOFLURANE 100% liquid for inhalation' }],
  },

  {
    label: '	SIBUTRAMINE',
    tradeLabels: [
      { label: '	MERIDIA 15mg caps.' },
      { label: '	MERIDIA 15mg caps.' },
      { label: '	MERIDIA 10mg caps.' },
      { label: '	DIETMAX 15mg caps.' },
      { label: '	DIETMAX 10mg caps.' },
      { label: '	MERIDIA 10mg caps.' },
      { label: '	SMARTAN 10mg tab.' },
      { label: '	REGITRIM 5mg Cap.' },

      { label: '	REGITRIM 15mg caps.' },
      { label: '	REGITRIM 10mg caps.' },
      { label: '	SIBOTRIM 15mg caps.' },
      { label: '	SLIMAX 15mg caps.' },
      { label: '	SLIMAX 10mg caps.' },
      { label: '	SIBOTRIM 10mg caps.' },
    ],
  },

  {
    label: '	SILDENAFIL',
    tradeLabels: [
      { label: '	NAPIFIT 75mg f.c. tab.' },
      { label: '	NAPIFIT 100mg f.c. tabs.' },
      { label: '	ERECTON 75mg f.c.tab' },
      { label: '	KEMAGRA 75mg f.c.tab.' },
      { label: '	FAROVIGA 25mg f.c.tab.' },
      { label: '	EREC 100mg f.c.tab.' },
      { label: '	FAROVIGA 100mg f.c.tab.' },
      { label: '	NAPIFIT 50mg f.c. tabs.' },

      { label: '	V-GONE 50mg f.c.tab.' },
      { label: '	VIGORAMA 50mg f.c.tab.' },
      { label: '	VEORA  25mg f.c.tab.' },
      { label: '	VIAVAG 100mg f.c.tab.' },
      { label: '	VIAGRA 50mg f.c.tab.' },
      { label: '	SILDAVA 100mg f.c.tab.' },
      { label: '	VIRECTA 100mg f.c.tab.' },
      { label: '	SILVIGO 50mg f.c. tabs.' },
      { label: '	VIAVAG 25mg f.c.tab.' },
      { label: '	VIGADOL 100mg f.c.tab.' },

      { label: '	SILVAGRA 100mg f.c.tab.' },
      { label: '	SPIKA 100mg f.c.tab.' },
      { label: '	STIMU-MAX 100mg f.c.tab.' },
      { label: '	SILDEN 25mg f.c.tab.' },
      { label: '	VIGOR 50mg f.c.tab.' },
      { label: '	SILANIL 100mg f.c.tab.' },
      { label: '	VIGOREX 50mg f.c.tab.' },
      { label: '	SILDENAFIL100mg f.c.tab.' },
      { label: '	ORGODENAFIL f.c.tab.' },
      { label: '	ORAGAWELL 100mg scored f.c. tabs.' },

      { label: '	VIGORAN 50mg f.c.tab.' },
    ],
  },
  {
    label: '	SILICIC ACID+SORBIC ACID',
    tradeLabels: [{ label: '	SUPRA cream' }],
  },

  {
    label: '	SILVER SULFADIAZINE',
    tradeLabels: [
      { label: '	DERMAZIN 5gm/50gm cream' },
      { label: '	DERMAZIN 5gm/50gm cream' },
      { label: '	BURNAZIN cream' },
      { label: '	ARGIDERM 1% cream' },
      { label: '	SULPHARGIN 1% cream' },
      { label: '	SILVAZINE 1gm/100gm cream' },
      { label: '	SILVERZINE 1% gauze dressing .' },
    ],
  },

  {
    label: '	SILYMARIN',
    tradeLabels: [
      { label: '	LEGALON 70mg  tab.' },
      { label: '	LIVAMARIN 140mg sachets' },
      { label: '	HEPATICUM 140mg caps.' },
      { label: '	LEGALON 140mg caps.' },
      { label: '	HEPAMARIN 140mg caps.' },
      { label: '	HEPATICUM 1gm/100ml susp.' },
      { label: '	LIVOPROTEC 140mg sachet' },
      { label: '	MARIAGON capsule 140 mg' },

      { label: '	LEGALEX 70mg tab.' },
      { label: '	SILYMARIN INSTANT 140mg sachets' },
      { label: '	SILYMARIN 70mg f.c.tab.' },
      { label: '	BIONAL cap' },
    ],
  },
  {
    label: '	SILYMARIN+URSODEOXYCHOLIC ACID',
    tradeLabels: [{ label: '	URSOPLUS Cap.' }],
  },

  {
    label: '	SIMETHICONE',
    tradeLabels: [
      { label: '	LUFTAL 125mg chew. tab.' },
      { label: '	MAXIFLAT 80mg chewable tab.' },
      { label: '	FLATIDYL 40mg chewable tab.' },
      { label: '	FLATIDYL 40mg chewable tab.' },
      { label: '	FLATIDYL 30% oral drops' },
      { label: '	DISFLATYL chewable tab.' },
      { label: '	DISFLATYL 40mg/ml oral drops' },
      { label: '	BABY REST 40mg/0.6ml oral drops' },

      { label: '	SIMETHICONE EMULSION 2g/100ml  U.S.P 22 oral drops.' },
      { label: '	SIMETHICONE 80mg tab.U.S.P.XXII(APPROVED,RE-REG)' },
      { label: '	SIMETHICONE EMULSION 2g/100ml  U.S.P 22 oral drops.' },
      { label: '	SIMETHICONE emulsion 2gm/100ml' },
    ],
  },
  {
    label: '	SIMETHICONE+SILICON DIOXIDE',
    tradeLabels: [{ label: '	MAXIFLAT susp.' }],
  },
  {
    label: '	SIMETHICONE+SODIUM CHLORIDE+SODIUM LAURYL SULPHATE',
    tradeLabels: [],
  },

  {
    label: '	SIMETHICONE+SORBITOL',
    tradeLabels: [{ label: '	DEFLAX  sachets' }],
  },

  {
    label: '	SIMVASTATIN',
    tradeLabels: [
      { label: '	LOW-STEROL 10mg f.c.tab.' },
      { label: '	ALKOR 40mg f.c.tab.' },
      { label: '	ALKOR 80mg f.c.tab.' },
      { label: '	CORVAST 80mg f.c.tab.' },
      { label: '	ALKOR 20mg f.c.tab.' },
      { label: '	MINALIP 20mg f.c. tabs.' },
      { label: '	ALKOR 10mg tab.' },
      { label: '	AMRISTATIN 20mg tab.' },

      { label: '	SIMVAGED 80mg tab.' },
      { label: '	ZOCOR 20mg tab.' },
      { label: '	SIMVACOR 10 mg f.c.tab.' },
      { label: '	SIMVACOR 20 mg f.c.tab.' },
      { label: '	SIMVACOR 40mg f.c.tab.' },
      { label: '	SIMVACOR 80mg f.c.tab.' },
      { label: '	ZOCOR 40mg tab.' },
      { label: '	SIMVAHEXAL 40mg f.c.tab.' },
      { label: '	SIMVASTAT 10mg tab.' },
      { label: '	SIMVASTAT 20mg tab.' },

      { label: '	SIMVASTAT 5mg tab.' },
      { label: '	ZOCOR 20mg tab.' },
      { label: '	ZOCOR 10mg f.c.tab.' },
      { label: '	SIMVACOR 5 mg f.c.tablet' },
    ],
  },
  {
    label: '	SIROLIMUS',
    tradeLabels: [
      { label: '	SIROJECT 1mg f.c.tab.' },
      { label: '	RAPAMUNE 1mg sugar coated tablet' },
    ],
  },

  {
    label: '	SITAGLIPTIN',
    tradeLabels: [
      { label: '	JANUVIA 100mg f.c.tab.' },
      { label: '	JANAGLIP  50mg f.c. tabs.' },
      { label: '	JANAGLIP 100mg f.c. tab.' },
      { label: '	DIBACURE 100mg f.c. tabs.' },
    ],
  },
  {
    label: '	SODIUM ACID PHOSPHATE',
    tradeLabels: [{ label: '	PHOSPHATES enema B.P 93' }],
  },

  {
    label: '	SODIUM ASCORBATE+VITAMIN C',
    tradeLabels: [{ label: '	VITASCORBOL 500mg chew. tab.' }],
  },
  {
    label: '	SODIUM AUROTHIOMALATE',
    tradeLabels: [{ label: '	MYOCRISIN 50 mg amp.' }],
  },

  {
    label: '	SODIUM BICARBONATE',
    tradeLabels: [
      { label: '	SODIUM BICARBONATE INJ. 5 %' },
      { label: '	SODIUM BICARBONATE 8.4% I.V.infusion' },
      { label: '	SODIUM BICARBONATE 5% USP30 solution for I.V. inf.' },
      { label: '	SODIUM BICARBONATE 8.4%W/V I.v.infusion BP 98' },
      { label: '	SODIUM BICARBONATE 4.8% I.V.infusion' },
      { label: '	SODIUM BICARBONATE 2.1% I.V.injection' },
      { label: '	SODIUM BICARBONATE 8.4% I.V.infusion B.P2003' },
      { label: '	SODIUM BICARBONATE 4.2 % INJECTION' },

      { label: '	SODIUM BICARBONATE I.V.infusion B.P.88' },
      { label: '	Sodium Bicarbonte Tablet' },
    ],
  },
  {
    label: '	SODIUM BICARBONATE+SODIUM BORATE+SODIUM CHLORIDE',
    tradeLabels: [{ label: '	ALKAPOWDER sachet' }],
  },
  {
    label: '	SODIUM CARBOXYMETHYLCELLULOSE',
    tradeLabels: [
      { label: '	REFRESH LIQUIGEL 1% eye drops' },
      { label: '	REFRESH PLUS 0.5 % eye drops' },
      { label: '	REFRESH TEARS 0.5% lubricant eye drops' },
    ],
  },

  {
    label: '	SODIUM CHLORIDE',
    tradeLabels: [
      { label: '	LYSE 0.65% nasal drops' },
      { label: '	PERITONEAL DIALYSIS SOL. WITH GLUCOSE 1.36 % W/V' },
      { label: '	SODIUM CHLORIDE 0.9% irrigation solution USP 28' },
      { label: '	SODIUM CHLORIDE 0.9% W/V I.V.infusion B.P.2000' },
      { label: '	SODIUM CHLORIDE 0.9% irrigation solution U.S.P.27' },
      { label: '	SODIUM CHLORIDE 0.9% irrigation solution U.S.P.27' },
      { label: '	SODIUM CHLORIDE 0.9% W/V I.V.infusion B.P.2000' },
      { label: '	SODIUM CHLORIDE 0.9% I.V. infusion' },

      { label: '	SODIUM CHLORIDE 0.9% I.V. infusion' },
      { label: '	SODIUM CHLORIDE 0.9% W/V I.V.infusion B.P.2000' },
      { label: '	SODIUM CHLORIDE 0.9% I.V infusion' },
      { label: '	SODIUM CHLORIDE 10 % W/V B.P.88 injection.' },
      { label: '	SODIUM CHLORIDE 0.9%  I.V.infusion B.P.2001' },
      { label: '	SODIUM CHLORIDE 0.9%  I.V.infusion B.P.2001' },
      { label: '	SODIUM CHLORIDE 0.45% I.V infusion  B.P.98' },
      { label: '	PERI-LACTATE (C) IN GLUCOSE 4.25 %' },
      { label: '	PERI-LACTATE (C) IN GLUCOSE 4.25 %' },
      { label: '	SODIUM CHLORIDE 0.45% I.V infusion  B.P.98' },

      { label: '	SODIUM CHLORIDE 0.45% I.V infusion  B.P.98' },
      { label: '	SODIUM CHLORIDE 0.45 % W/V I.V.infusion B.P2003' },
      { label: '	SODIUM CHLORIDE 10 % W/V B.P.88 injection.' },
      { label: '	SODIUM CHLORID 3 % W/V E I.V. infusion B.P.2003' },
      { label: '	SODIUM CHLORIDE 2.7%W/V I.V infusion B.P.2004' },
      { label: '	SODIUM CHLORIDE 2.7%W/V I.V infusion B.P.2004' },
      { label: '	SODIUM CHLORIDE 2.7%W/V I.V infusion B.P.2004' },
      { label: '	PERITONEAL DIALYSIS SOL. WITH GLUCOSE 3.86 % W/V' },
      { label: '	SODIUM CHLORID 3 % W/V E I.V. infusion B.P.2003' },
      { label: '	SALINE TREAT 0.74% nasal drops' },

      { label: '	OXYSEPT 2' },
      { label: '	PERITONEAL DIALYSIS SOLN.WITH GLUCOSE 2.27 % w/w' },
      { label: '	NORMAL SALINE 0.9% inj.' },
      { label: '	NORMAL SALINE injection 0.9 %' },
      { label: '	SALINE 7.4mg/ml nasal drops' },
      { label: '	SALINEX 0.9gm/100ml nasal drops' },
      { label: '	SALINOL 0.9% nasal gel' },
      { label: '	SALVI-CAL E-G 40 infusion' },
      { label: '	OTRIVIN BABY SALINE 7.4mg/ml  nasal drops' },
      { label: '	SODIUM SEPACK  0.9% W/V I.V.infusion BP' },

      { label: '	SODIUM CHLORIDE 0.9%W/V I.V.infusion B.P.2005' },
      { label: '	Sodium Chloride 0.9%elnile' },
    ],
  },

  {
    label: '	SODIUM CROMOGLYCATE',
    tradeLabels: [
      { label: '	CUSICROM 2% nasal spray' },
      { label: '	FARCOCROM 4% eye drops.' },
      { label: '	INTAL NEBULIZER SOLUTION' },
      { label: '	CROMOLYN 2% nasal drops' },
      { label: '	ACROMOLYN 4% eye ointment' },
      { label: '	COLLYCROM 4% eye drops' },
      { label: '	EPICROM 4% eye drops' },
      { label: '	ACROMOLYN  2%  nasal drops' },

      { label: '	NASOTAL 2gm/100ml spray' },
      { label: '	INTAL caps.' },
      { label: '	INTAL 5mg inhaler' },
      { label: '	INTAL caps.' },
      { label: '	VISICROME 4% eye drops' },
      { label: '	OCUCROM 4% eye drops' },
      { label: '	OPTICROM 4% eye drops' },
      { label: '	OPTICURE 2% eye drops' },
    ],
  },

  {
    label: '	SODIUM CROMOGLYCATE+XYLOMETAZOLINE',
    tradeLabels: [{ label: '	NASOTAL COMPOUND spray' }],
  },
  {
    label: '	SODIUM FLUORIDE',
    tradeLabels: [{ label: '	FLUOCAL 200mg/100ml mouth wash' }],
  },
  {
    label: '	SODIUM FLUORIDE+VITAMIN B1+VITAMIN B2+VITAMIN B6',
    tradeLabels: [{ label: '	VITAFLOUR syrup' }],
  },

  {
    label: '	SODIUM FLURBIPROFEN',
    tradeLabels: [{ label: '	OCUFEN  0.03 % ophth.soln.' }],
  },

  {
    label: '	SODIUM FUSIDATE',
    tradeLabels: [
      { label: '	FUCIN 2% sterile gauze dressing' },
      { label: '	FUCIN 2% sterile gauze dressing' },
      { label: '	FUTASOLE 2% oint.' },
      { label: '	FUSI 2% oint.' },
      { label: '	FUCIN 2% sterile gauze dressing' },
      { label: '	DEFUCIN 250mg tab.' },
      { label: '	DEFUCIN 500mg vial' },
      { label: '	STAPH BUSTER 2% top. Oint.' },
    ],
  },

  {
    label: '	SODIUM GLYCEROPHOSPHATE',
    tradeLabels: [{ label: '	GLYCOPHOS 216mg/ml vial' }],
  },

  {
    label: '	SODIUM HYALURONATE',
    tradeLabels: [
      { label: '	HEALON 10 mg/ml intra-ocular prefilled syringe' },
      { label: '	HEALON 10 mg/ml intra-ocular prefilled syringe' },
      { label: '	ADANT 25mg/2.5ml intra-articular prefilled syringe' },
      { label: '	CURAVISC 20mg/2ml intra-articular prefilled syringe' },
      { label: '	HEALON 10 mg/ml intra-ocular prefilled syringe' },
      { label: '	HYFRESH 0.2% eye drops' },
      { label: '	HYALUGRAND 20mg/2ml vial' },
      { label: '	HURSEN DISPO 25mg/2.5ml intra-articular  prefilled syringe' },

      { label: '	BIOCORNEAL 13.5 mg/ml intra-ocular prefilled syringe' },
      { label: '	LUBRIVISC 0.1% eye drops' },
      { label: '	PROVISC 10mg/ml intra-ocular prefilled syringe' },
      { label: '	PROVISC 10mg/ml intra-ocular prefilled syringe' },
      { label: '	PE-HA-LURON F 1.6% prefilled syringe.' },
      { label: '	VISCORNEAL 10mg/ml intra-ocular prefilled syringe' },
      { label: '	VISCORNEAL 10mg/ml intra-ocular prefilled syringe' },
      { label: '	PROVISC 10mg/ml intra-ocular prefilled syringe' },
      { label: '	SUPLASYN 20mg/2ml intra-articular prefilled syringe.' },
      { label: '	OCU+ 1.4% pre-filled syringe' },

      { label: '	POLYFRESH 2mg/ml sterile ophthalmic solution' },
      { label: '	PE-HA-LURON F 1.6% prefilled syringe.' },
      { label: '	ORTHOVISC 15mg/ml intra-articular prefilled syringe' },
    ],
  },
  { label: '	SODIUM IOPODATE', tradeLabels: [{ label: '	BILOPTIN  caps.' }] },
  {
    label: '	SODIUM LACTATE',
    tradeLabels: [
      { label: '	SODIUM LACTATE 1/6 MOLAR I.V.infusion U.S.P.27' },
      { label: '	SODIUM LACTATE (1/6 MOLAR) I.V.infusion B.P 2004' },
    ],
  },

  {
    label: '	SODIUM NITROPRUSSIDE',
    tradeLabels: [
      { label: '	NIPRUSS 60mg amp.' },
      { label: '	SODIUM NITROPRUSSIDE FOR I.V. INJECTION' },
      { label: '	NITRIATE 50mg vial' },
    ],
  },
  {
    label: '	SODIUM PERBORATE',
    tradeLabels: [
      { label: '	PERASAFE 50% powder' },
      { label: '	PERASAFE 50% powder' },
    ],
  },

  {
    label: '	SODIUM PICOSULPHATE',
    tradeLabels: [
      { label: '	LAXOBERAL  5 mg  tab.' },
      { label: '	LAXEOL-PI 750mg/100 ml oral drops' },
      { label: '	LAXEOL PI 5mg tab.' },
      { label: '	LAXEOL-PI 750mg/100 ml oral drops' },
      { label: '	SKILAX 750mg/100 ml oral drops' },
      { label: '	PICOLAX 0.75% drops' },
      { label: '	NORMALAX 0.75% oral drops' },
    ],
  },

  {
    label: '	SODIUM VALPROATE',
    tradeLabels: [
      { label: '	DAVIKEN 200mg enteric coated tab.' },
      { label: '	DAVIKEN 200mg/ml syrup' },
      { label: '	DAVIKEN 250mg/5ml syrup' },
      { label: '	DEKADEL 200mg E.C.tab.' },
      { label: '	CONVULEX 300mg/ml oral drops' },
      { label: '	DEPAKINE 200mg enteric coated tab.' },
      { label: '	DEPAKINE 200mg/ml oral solution' },
      { label: '	DEPAKINE 5.764gm/100ml syrup' },

      { label: '	DEKADEL 200mg/5ml oral solution' },
      { label: '	VALPOKINE 200mg tab.' },
      { label: '	VALPO 200mg enteric coated tab.' },
      { label: '	SEIZOLOW 200mg/ml oral dps.' },
      { label: '	VALPROTEC 4 gm/100 ml syrup' },
      { label: '	VALPROTEC 200mg tab.' },
      { label: '	VALPONEX 200mg/5ml syrup.' },
      { label: '	VALPONEX 200mg enteric coated tabs.' },
      { label: '	VALPOKINE 20% syrup' },
    ],
  },

  {
    label: '	SODIUM VALPROATE+VALPROIC ACID',
    tradeLabels: [
      { label: '	DEPAKINE CHRONO 500mg scored prolonged release f.c.tab.' },
      { label: '	VALPOEAST-SR  500mg tab.' },
      { label: '	VALPOKINE 500mg tab.' },
    ],
  },
  {
    label: '	SOLIDAGO VIRAGUREA',
    tradeLabels: [{ label: '	CYSTINOL 425mg hard gelatin caps.' }],
  },

  {
    label: '	SOLIFENACIN SUCCINATE',
    tradeLabels: [
      { label: '	SOFENACIN 5mg f.c. tabs.' },
      { label: '	SOFENACIN 10mg f.c. tabs.' },
    ],
  },
  {
    label: '	SOMATOSTATIN',
    tradeLabels: [{ label: '	SOMATOSTATIN LYOMARK 3mg/3ml amp.' }],
  },

  {
    label: '	SOMATROPIN',
    tradeLabels: [
      { label: '	HUMATROPE 4 I.U.' },
      { label: '	GENOTROPIN 4 I.U.vial' },
      { label: '	NORDITROPIN 12 I.U' },
      { label: '	NORDITROPIN 4 I.U inj.' },
      { label: '	SOMATROPIN 4I.U./vial B.P.2003' },
      {
        label: '	NORDITROPIN SIMPLEXX/ NORDILET 5mg/1.5ml penfill/prefilled pen',
      },
    ],
  },

  {
    label: '	SORBITOL',
    tradeLabels: [
      { label: '	SORBIT PACKETS 5 GM' },
      { label: '	SORBITOL IRRIGATION SOLUTION 2.5%' },
    ],
  },

  {
    label: '	SOTALOL',
    tradeLabels: [
      { label: '	BETACORE 80mg tab.' },
      { label: '	CORTEC 160mg f.c.tab.' },
      { label: '	BETALOL 120mg tab.' },
      { label: '	BETALOL 160mg tab.' },
      { label: '	CORTEC 80mg tab.' },
      { label: '	SOTACOR 160mg tab.' },
    ],
  },

  {
    label: '	SOYA BEAN OIL',
    tradeLabels: [
      { label: '	LIPOVENOUS 10% I.V.infusion (CANCELED)' },
      { label: '	LIPOVENOUS 10% I.V.infusion (CANCELED)' },
      { label: '	LIPOVENOUS 20% I.V.infusion (CANCELED)' },
    ],
  },
  {
    label: '	SOYA BEAN OIL+TRIGLYCERIDE',
    tradeLabels: [
      { label: '	LIPOFUNDIN MCT/LCT 20% I.V.infusion' },
      { label: '	LIPOFUNDIN MCT/LCT 10% I.V.infusion' },
    ],
  },

  {
    label: '	SPARFLOXACIN',
    tradeLabels: [
      { label: '	SPARCIN 200mg  f.c.tab.' },
      { label: '	PAROX 200mg f.c. tab.' },
      { label: '	SPARA f.c.tab.' },
      { label: '	SPARATEC 200mg tab.' },
      { label: '	SPARCIN 200mg  f.c.tab.' },
    ],
  },
  { label: '	SPECTINOMYCIN', tradeLabels: [{ label: '	TOGAMYCIN  2gm vial' }] },

  {
    label: '	SPIRAMYCIN',
    tradeLabels: [
      { label: '	ASPRAM 1.5M.I.U. f.c.tab.' },
      { label: '	SPIRAMYCIN 3M.I.U.tab.' },
      { label: '	SPIRACIN 0.65M.I.U. infantile supp.' },
      { label: '	SPIRACIN 1.300000 I.u. child supp.' },
      { label: '	UNISPIRA 3M.I.U. tab.' },
      { label: '	SPIRAMYCIN 1.5M.I.U.tab.' },
      { label: '	SPIREX 1.5M.I.U.tab.' },
      { label: '	SPIREX 3M.I.U.tab.' },

      { label: '	UNISPIRA 1.5MIU f.c.tab' },
      { label: '	ROVAPEX 3M.I.U. f.c.tab.' },
      { label: '	ROVAC 1.5M.I.U. f.c.tab.' },
      { label: '	ROVAC 3M.I.U. f.c.tab.' },
      { label: '	ROVAMYCIN 1.5M.I.U.tab.' },
      { label: '	ROVAMYCIN 3M.I.U tab.' },
      { label: '	ROVAMYCINE YOUNES CHILDREN 0.75mg sachet.' },
      { label: '	ROVAMYCINE YOUNES CHILDREN 0.75mg sachet.' },
    ],
  },

  {
    label: '	SPIRONOLACTONE',
    tradeLabels: [
      { label: '	ALDACTONE 25mg tab' },
      { label: '	EPILACTONE 100mg tab.' },
      { label: '	ALDACTONE 100mg tab' },
      { label: '	EPILACTONE 25mg tab.' },
      { label: '	POTASAVE TAB. 100 mg' },
      { label: '	POTASPIRONO 100mg tabs.' },
      { label: '	SPIRONOLACTONE 25mg tab.' },
      { label: '	SPIRONOLACTONE 100mg tab.' },

      { label: '	SPIRONOLACTONE 100mg tab.' },
      { label: '	SPIRONOLACTONE 25mg tab.' },
      { label: '	POTASAVE 25 mg tab.' },
      { label: '	SPIRONOLACTONE 50mg tab.' },
      { label: '	POTASPIRONO 25mg tabs.' },
    ],
  },
  {
    label: '	SPIRONOLACTONE+XIPAMIDE',
    tradeLabels: [{ label: '	EPILACTONE X tab.' }],
  },
  {
    label: '	SQUILL TINCTURE+STRAMONIUM TINCTURE+LIQUORICE EXTR',
    tradeLabels: [],
  },

  {
    label: '	STAR ANISE OIL+THYME LIQUID EXTRACT',
    tradeLabels: [{ label: '	FLUCALM oral solution' }],
  },
  {
    label: '	STAVUDINE',
    tradeLabels: [{ label: '	STADIVIR 40mg hard gelatin caps.' }],
  },
  {
    label: '	STERCULIA GUM',
    tradeLabels: [
      { label: '	LAXIQUILL 62%w/w granules in sachets' },
      { label: '	NORMACOL 6.1gm sachet' },
    ],
  },

  {
    label: '	STREPTOKINASE',
    tradeLabels: [
      { label: '	KABILKINASE 1 500 000 I.u. vial' },
      { label: '	DURAKINASE 1500,000 I.U./vial for I.V. inf.' },
      { label: '	SEDONASE 750 000I.u. vial' },
      { label: '	SEDONASE 1500000I.u.vial' },
      { label: '	STREPTOLASE 1.5 MIU I.V vial' },
      { label: '	STREPTASE 1500000 I.u./vial' },
    ],
  },

  {
    label: '	STREPTOMYCIN',
    tradeLabels: [
      { label: '	STREPTOMYCIN 1gm vial' },
      { label: '	STREPTOMYCIN SULPHATE 1gm I.M.vial' },
      { label: '	STREPTOMYCIN 1gm vial USP 24' },
    ],
  },
  {
    label: '	STRONTIUM RANELATE',
    tradeLabels: [
      { label: '	OSTEOPAUSE 2gm gr. in sachets' },
      { label: '	PROTELOS 2gm sachet' },
    ],
  },

  {
    label: '	SUBTILISIN A-SORBITOL',
    tradeLabels: [{ label: '	ULTRAZYME protein remover 0.8 % tab.' }],
  },
  {
    label: '	SUCCINYLCHOLINE CHLORIDE',
    tradeLabels: [{ label: '	SUCCINYL CHOLINE CHLORIDE U.S.P.27 I.V. inj.' }],
  },

  {
    label: '	SUCRALFATE',
    tradeLabels: [
      { label: '	GASTROFAIT 1gm tab.' },
      { label: '	GASTROFAIT 0.5gm tab.' },
      { label: '	GASTROFAIT 1gm/10ml susp.' },
      { label: '	ULCICURE 1gm tab.' },
      { label: '	ULCAR 1gm granules for susp.' },
      { label: '	ULCAR TAB. 1 gm' },
    ],
  },

  {
    label: '	SULBUTIAMINE',
    tradeLabels: [
      { label: '	ARCALION FORTE f.c.tab.' },
      { label: '	ACTIVATE 200mg sugar coated tablet' },
      { label: '	CERCOBION 200mg tab.' },
      { label: '	ACTIVATE 200mg sugar coated tablet' },
      { label: '	ARCALION 200mg sugar coated tab.' },
      { label: '	YONATONE 200mg tab.' },
    ],
  },

  {
    label: '	SULBUTIAMINE+ZINC SULPHATE',
    tradeLabels: [{ label: '	ARCA-ZINC Caps.' }],
  },
  {
    label: '	SULCONAZOLE',
    tradeLabels: [{ label: '	SULCO-FUNG 1% top. Cream' }],
  },

  {
    label: '	SULINDAC',
    tradeLabels: [
      { label: '	HI-DAC 200mg supp.' },
      { label: '	HI-DAC 200mg tab.' },
      { label: '	HI-DAC 200mg tab.' },
      { label: '	RUDAC 150 mg tab.' },
      { label: '	RUDAC 150 mg tab.' },
      { label: '	RUDAC 200mg tablet' },
      { label: '	RUDAC 200mg tablet' },
      { label: '	SULINDAC 200mg tab.' },
    ],
  },

  {
    label: '	SULPHACETAMIDE',
    tradeLabels: [
      { label: '	ISOCET 15% eye drops' },
      { label: '	ISOPTO CETAMIDE 150mg/ml eye drops' },
      { label: '	CETAPRED eye oint.' },
      { label: '	OCUSUL 10% eye drops' },
      { label: '	OCUSUL 20% eye drops' },
      { label: '	OCUSUL 30% eye drops' },
    ],
  },

  {
    label: '	SULPHADIAZINE',
    tradeLabels: [
      { label: '	SULPHADIAZINE  500mg tab.' },
      { label: '	Dermazin Cream Tube' },
    ],
  },
  {
    label: '	SULPHADIMIDINE',
    tradeLabels: [{ label: '	SULPHADIMIDINE 0.5gm tab.' }],
  },
  {
    label: '	SULPHAGUANIDINE',
    tradeLabels: [{ label: '	SULPHAGUANIDINE 500mg tab.E.P.84' }],
  },

  {
    label: '	SULPHAMETHOXAZOLE+TRIMETHOPRIM',
    tradeLabels: [
      { label: '	CHEMOTRIM FORTE  tab.' },
      { label: '	CHEMOTRIM 400/80  tab.' },
      { label: '	ETHAPRIM 200/40mg susp.' },
      { label: '	ETHAPRIM 300/60 mg susp.' },
      { label: '	CHEMOTRIM 200/40 susp.' },
      { label: '	COTRIL 400/80mg tab.' },
      { label: '	COTRIL FORT 800/160mg tab.' },
      { label: '	SUTRIM 200/40 susp.' },

      { label: '	SEPTRIN D.S coated tab.' },
      { label: '	SUTAPRIM I instant susp.' },
      { label: '	SUTAPRIM II instant susp.' },
      { label: '	SEPTAZOLE 200/40 susp.' },
      { label: '	SEPTRIN paediatric 200/40 susp.' },
      { label: '	SEPTAZOLE FORTE  800/160 tab.' },
      { label: '	SEPTAZOLE 400/80mg tab.' },
      { label: '	SUTRIM tab.' },
      { label: '	SUTAPRIM D.S.tablets' },
    ],
  },

  {
    label: '	SULPHAMETROLE+TRIMETHOPRIM',
    tradeLabels: [
      { label: '	LIDAPRIM FORTE f.c.tab.' },
      { label: '	LIDAPRIM FOR CHILDREN susp.' },
    ],
  },
  {
    label: '	SULPHAMOXOLE+TRIMETHOPRIM',
    tradeLabels: [
      { label: '	ENTRIM tab.' },
      { label: '	SUPRISTOL tab.' },
      { label: '	SUPRISTOL syrup' },
    ],
  },

  {
    label: '	SULPHASALAZINE',
    tradeLabels: [
      { label: '	SALAZO 500mg enteric coated  tab.' },
      { label: '	SALAZO SULF-PYRINE 500mg tab.' },
    ],
  },
  { label: '	SULPHUR', tradeLabels: [{ label: '	SULPHUR 10% oint.U.S.P23' }] },

  {
    label: '	SULPIRIDE',
    tradeLabels: [
      { label: '	DOGMATIL 50mg caps.' },
      { label: '	DOGMATIL 50mg caps.' },
      { label: '	DOGMATIL FORT 200mg tab' },
      { label: '	TOPMODE FORTE 200mg tab.' },
      { label: '	TOPMODE 50mg caps.' },
    ],
  },

  {
    label: '	SULTAMICILLIN',
    tradeLabels: [
      { label: '	FORTIBIOTIC 375mg f.c. tab.' },
      { label: '	SIGMACYN 250mg/5ml susp.' },
      { label: '	UNICTAM vial 750 mg I.M/I.V' },
      { label: '	UNICTAM 375mg tablet' },
      { label: '	UNICTAM 250mg/5ml susp.' },
      { label: '	UNICTAM VIAL 375 mg I.m/I.v' },
      { label: '	UNICTAM 1.5gm  I.M/I.V.vial' },
      { label: '	UNICTAM 3g vial' },
    ],
  },

  {
    label: '	SUMATRIPTAN',
    tradeLabels: [
      { label: '	IMIGRAN 100mg tab.' },
      { label: '	IMIGRAN 50mg tab.' },
      { label: '	MEGATAB  100mg tab.' },
      { label: '	IMIGRAN 100mg tab.' },
      { label: '	IMIGRAN  amp.' },
      { label: '	SUMIGRAN  6mg/0.5 ml prefilled syringe' },
      { label: '	SUMAPTAN 50mg tab.' },
      { label: '	SUMAGRAINE 6mg amp.' },

      { label: '	SUMAGRAINE 100mg f.c.tab.' },
      { label: '	SUMIGRAN 25mg tab.' },
    ],
  },
  {
    label: '	SUPRARENAL CORTEX  EXTRACT+VITAMIN B6',
    tradeLabels: [
      { label: '	CORTIGEN B6 adult 100C.D.U./ml amp.' },
      { label: '	CORTIGEN B6 pediatric amp.' },
      { label: '	VOMITAL adult amp.' },
    ],
  },
  {
    label: '	SUXAMETHONIUM CHLORIDE',
    tradeLabels: [{ label: '	PHARCOSUXIN 100mg/5ml amp.' }],
  },

  {
    label: '	TACRINE',
    tradeLabels: [
      { label: '	TAHIMER 10mg caps.' },
      { label: '	TACRINE 20mg caps.' },
    ],
  },
  {
    label: '	TACROLIMUS',
    tradeLabels: [
      { label: '	TAROLIMUS 0.03% topical oint.' },
      { label: '	PROGRAF 1mg hard gelatin caps.' },
      { label: '	PROGRAF 5mg Hard Gelatin capsules' },
    ],
  },

  {
    label: '	TADALAFIL',
    tradeLabels: [
      { label: '	CIALIS 20mg f.c.tab.' },
      { label: '	SNAFI 20mg f.c.tab.' },
    ],
  },

  {
    label: '	TAMOXIFEN',
    tradeLabels: [
      { label: '	EPICOTAM 10mg tab.' },
      { label: '	APOTAMOX 10mg tab.' },
      { label: '	TAMOFEN 10mg tablet' },
      { label: '	NOLVADEX D 20mg tab' },
      { label: '	TAMOXIFEN  20mg tab.' },
      { label: '	TAMOXIFEN 20mg tab.' },
      { label: '	TAMOXIFEN 40mg tab.' },
      { label: '	ZITAZOMIUM 10mg tab.' },

      { label: '	NOLVADEX D 20 mg tab' },
      { label: '	NOLVADEX 10mg tab.' },
      { label: '	NOLVADEX 10 mg tab' },
      { label: '	TAMOXIN 10mg f.c.tab.' },
      { label: '	TAMOXIFEN 10mg tab.' },
    ],
  },

  {
    label: '	TAMSULOSIN',
    tradeLabels: [
      { label: '	BLOCK ALPHA 0.4mg MR hard gelatin caps.' },
      { label: '	CURE PRO 0.2mg hard gelatin caps.' },
      { label: '	KEMPROST  0.4mg Hard Gelatin Capsule' },
      { label: '	OMNIC 0.4mg modified release caps.' },
      { label: '	TAMSULIN 0.4mg caps.' },
      { label: '	TAMIC 0.4mg M.R cap.' },
      { label: '	TAMSUL 0.4mg capsule' },
    ],
  },

  {
    label: '	TAZAROTENE',
    tradeLabels: [
      { label: '	ACNITAZ 0.1% topical gel.' },
      { label: '	SABOTAZ 0.1 % top. Gel' },
      { label: '	PALIZAGE 0.1% topical cream.' },
      { label: '	ZAROTEX 0.1% gel' },
      { label: '	ZAROJEL 0.1% topical gel' },
      { label: '	PALIZAGE 0.1g/100g topical gel' },
    ],
  },

  { label: '	TEGAFUR+URACIL', tradeLabels: [{ label: '	UFT hard capsule' }] },
  {
    label: '	TEGASEROD',
    tradeLabels: [
      { label: '	ZELTROD 6mg tab.' },
      { label: '	TEGSORAN 6mg tab.' },
      { label: '	ZELMAC 6mg tab.' },
    ],
  },
  { label: '	TELITHROMYCIN', tradeLabels: [{ label: '	KETEK 400mg f.c.tab.' }] },

  {
    label: '	TELMISARTAN',
    tradeLabels: [
      { label: '	CHARTOREG 40mg tab.' },
      { label: '	BIOCARDIS 40mg tab.' },
      { label: '	MICARDIS (R) 80mg tab.' },
      { label: '	MICARDIS (R) 40mg' },
      { label: '	CHARTOREG 80mg tab.' },
    ],
  },

  {
    label: '	TENOXICAM',
    tradeLabels: [
      { label: '	EPICOTIL 20mg I.M./I.V.vial' },
      { label: '	ANOXICAM 20mg tab.' },
      { label: '	EPICOTIL 20mg f.c.tab.' },
      { label: '	EPICOTIL 20mg supp.' },
      { label: '	ANOXICAM 20mg supp.' },
      { label: '	TENOCAM 20mg caps.' },
      { label: '	TENOCAM 20mg supp.' },
      { label: '	TENOXICAM 20mg caps.' },

      { label: '	TENOXICAM 20mg caps.' },
      { label: '	TENOXICAM 20mg caps.' },
      { label: '	TENOXIL 20mg I.V./I.M. lyophilized vial' },
      { label: '	TENOXIL 20mg tab.' },
      { label: '	SORAL 20mg amp.' },
      { label: '	SORAL 20mg supp.' },
      { label: '	SORAL 20mg caps.' },
    ],
  },

  {
    label: '	TERAZOCIN',
    tradeLabels: [
      { label: '	ITRIN 2mg tab.' },
      { label: '	E-ZE-P 2mg S.G. caps.' },
      { label: '	E-ZE-P 1mg s.g. cap.' },
      { label: '	E-ZE-P 5mg S.G. cap.' },
      { label: '	ITRIN 5mg tab.' },
      { label: '	TERACIN 5mg soft gelatin caps.' },
      { label: '	PROSTASIN 2mg tab.' },
      { label: '	PROSTASIN 5mg tab.' },

      { label: '	TERACIN 2mg soft gelatin capsule' },
      { label: '	TERAZIN 5MG TABS.' },
      { label: '	TERAZIN  2mg tab.' },
    ],
  },

  {
    label: '	TERBINAFINE',
    tradeLabels: [
      { label: '	FUNGISAFE 250mg tab.' },
      { label: '	LAMISIL 1% topical cream' },
      { label: '	FUNGISAFE 250mg tab.' },
      { label: '	LAMISIL 1% dermgel.' },
      { label: '	BENAFIN 1gm/100gm cream' },
      { label: '	LAMISIL 250mg tab.' },
      { label: '	FUNGIBAN 1% top. Gel' },
      { label: '	DERMINAFINE 1% cream' },

      { label: '	LAMISIL 1% spray' },
      { label: '	LAMIFEN 1%cream' },
      { label: '	LAMISIL 125mg tab.' },
      { label: '	TERSIL 125mg tablet' },
      { label: '	TERSIL 250mg tab.' },
      { label: '	TERBIN tab.' },
      { label: '	TERBIN 1% topical solution' },
      { label: '	TERBIN 1% cream' },
    ],
  },

  {
    label: '	TERBINAFINE HCL',
    tradeLabels: [
      { label: '	LAMISIL ONCE film forming solution.' },
      { label: '	FUNGISTAT gel.' },
      { label: '	FUNGISAFE 10mg cream' },
      { label: '	TERBINAFINE 1% Topical aerosol powder.' },
    ],
  },

  {
    label: '	TERBUTALINE',
    tradeLabels: [
      { label: '	AIRONYL 2.5mg tab.' },
      { label: '	AIRONYL  30mg/100ml syrup' },
      { label: '	BRICANYL 2.5mg tab.' },
      { label: '	BRICANYL 30mg/100ml syrup' },
      { label: '	BRICANYL solution for nebulizing 2.5 mg/ml' },
      { label: '	BUTALINE 7.5mg E.R.caps.' },
    ],
  },

  {
    label: '	TERCONAZOLE',
    tradeLabels: [
      { label: '	GYNOCONAZOL 0.4% vag. Cream' },
      { label: '	GYNOCONAZOLE 80mg vag. supp.' },
      { label: '	GYNOCONAZOL 0.8% vaginal cream.' },
    ],
  },

  {
    label: '	TERFENADINE',
    tradeLabels: [
      { label: '	HISTALERT 600mg/100ml susp' },
      { label: '	HISTADIN 30mg/5ml syp.' },
      { label: '	ALERGIST 60mg  tablet' },
      { label: '	HISTADIN 60mg tab.' },
      { label: '	HISTALERT 60mg tab' },
      { label: '	HISTAPHAR 0.6gm/100ml susp.' },
      { label: '	TRILUDAN 60 mg tab.' },
      { label: '	TERFINE 120 mg tab.' },

      { label: '	TRILUDAN 60mg tab.' },
      { label: '	SERVINADINE 60mg tab.' },
    ],
  },
  { label: '	TERLIPRESSIN', tradeLabels: [{ label: '	GLYPRESSIN 1mg vial' }] },
  {
    label: '	TESTOSTERONE',
    tradeLabels: [
      { label: '	ANDRIOL 40mg caps' },
      { label: '	TRIOLANDREN 250 mg amp.' },
    ],
  },

  {
    label: '	TESTOSTERONE (DECANOATE+ISOCAPROATE+PHENYLPROPIONA',
    tradeLabels: [],
  },
  {
    label: '	TESTOSTERONE (HEXONATE+PHENYLPROPIONATE+PROPIONATE',
    tradeLabels: [],
  },
  {
    label: '	TESTOSTERONE ENANTHATE',
    tradeLabels: [
      { label: '	CIDOTESTONE 250mg amp.' },
      { label: '	PRIMOTESTON DEPOT AMP. 250 mg' },
    ],
  },

  {
    label: '	TESTOSTERONE ENANTHATE+TESTOSTERONE PROPIONATE',
    tradeLabels: [
      { label: '	CIDOTESTONE 100mg amp.' },
      { label: '	PRIMOTESTON DEPOT AMP.' },
    ],
  },
  {
    label: '	TESTOSTERONE UNDECANOATE',
    tradeLabels: [{ label: '	ANDROMEN 40mg soft gelatin caps.' }],
  },
  {
    label: '	TESTOSTERONE+VITAMIN E',
    tradeLabels: [{ label: '	TESTONE E amp.' }],
  },

  {
    label: '	TETANUS IMMUNE GLOBULIN (HUMAN)',
    tradeLabels: [
      { label: '	BERIGLOBIN P 160mg/ml I.M.amp.' },
      { label: '	TETAGAM  P 250I.u./ml I.M injection' },
    ],
  },
  {
    label: '	TETRACOSACTIDE',
    tradeLabels: [
      { label: '	CORTROSYN DEPOT AMP. 1 mg/ml' },
      { label: '	SYNACTHEN DEPOT 1mg/ml amp.' },
    ],
  },

  {
    label: '	TETRACYCLINE',
    tradeLabels: [
      { label: '	HOSTACYCLIN 500mg f.c.tab.' },
      { label: '	HOSTACYCLIN 500mg f.c.tab.' },
      { label: '	MICYCLINE 250 mg caps.' },
      { label: '	ADCOCYCLINE 3% oint.' },
      { label: '	TETRACYCLINE HYDROCHLORIDE 250mg caps. USP24' },
      { label: '	TETRACID  250 mg hard gelatin cap.' },
      { label: '	TETRACYCLINE 250 mg PSULES B.P 93' },
      { label: '	TETRACYCLINE 250mg caps.' },
    ],
  },

  {
    label: '	TETRAHYDROZOLINE',
    tradeLabels: [
      { label: '	EYE CLEAR 0.05% ophthalmic drops' },
      { label: '	NAZINE 1mg/ml nasal drops' },
      { label: '	BERBERIL-N 0.05% eye drops' },
      { label: '	OCUZOLINE 0.05% eye drops' },
      { label: '	VISINE 0.05% eye drops' },
    ],
  },
  {
    label: '	TETRAHYDROZOLINE+ZINC SULPHATE',
    tradeLabels: [{ label: '	VISINE AC eye drops' }],
  },

  {
    label: '	TETRAMETHRIN +PIPERONYL BUTOXIDE',
    tradeLabels: [{ label: '	LICID LOTION' }, { label: '	LICID SPRAY' }],
  },
  {
    label: '	TETRAZEPAM',
    tradeLabels: [
      { label: '	MYOLOSTAN 50mg coated tab.' },
      { label: '	TETHEXAL 50mg tab.' },
    ],
  },

  {
    label: '	THEOPHYLLINE',
    tradeLabels: [
      { label: '	CIDOPHYLLINE 250mg/2ml I.M.amp.' },
      { label: '	EUPHYLONG 375mg S.R.caps.' },
      { label: '	AMRIPHYLLINE 100mg supp.' },
      { label: '	EUPHYLONG 250mg S.R.caps.' },
      { label: '	AMRIPHYLLINE 300mg supp.' },
      { label: '	CIDOPHYLLINE 300mg/5ml I.M.amp.' },
      { label: '	MINOPHILLINE 300mg S.R.tab.' },
      { label: '	THEO 200mg S.R.caps.' },

      { label: '	THEO 100mg S.R.caps.' },
      { label: '	VENT RETARD 300mg caps.' },
      { label: '	THEO 300mg S.R.caps.' },
      { label: '	THEOFAR 0.6% syrup' },
      { label: '	THEOFAR 1gm/100ml adult syrup.' },
      { label: '	VENTOPHYL 100mg S.R.caps.' },
      { label: '	VENT RETARD 100mg caps.' },
      { label: '	THEOPHYLLINE 200mg S.R. tab.' },
      { label: '	THEOPHYL -12 200mg tab.' },
      { label: '	VENT RETARD 200mg caps.' },

      { label: '	QUIBRON T/SR 300 mg tab.' },
      { label: '	QUIBRON T/SR 300mg tab.' },
      { label: '	UNIPHYLLINE  CONTINUS 300mg SR tab.' },
      { label: '	QUIBRON T/SR 300mg tab.' },
      { label: '	UNIPHYLLINE CONTINUS 400mg tab.' },
    ],
  },
  {
    label: '	THEOPHYLLINE ETHANOATE OF PIPERAZINE',
    tradeLabels: [{ label: '	MINOPHILLINE 125mg infantile supp.' }],
  },

  {
    label: '	THEOPHYLLINE SODIUM GLYCINATE',
    tradeLabels: [{ label: '	AMRIPHYLLINE  0.05gm/5ml syrup' }],
  },
  {
    label: '	THIAMPHENICOL',
    tradeLabels: [
      { label: '	THIOPHENICOL 750mg vial' },
      { label: '	THIAMPHENICOL 250mg caps.' },
    ],
  },
  {
    label: '	THIAZOLIDINE',
    tradeLabels: [
      { label: '	HEPATON 100mg  tab.' },
      { label: '	HEPAREGEN 100mg tab.' },
    ],
  },

  {
    label: '	THIOCOLCHICOSIDE',
    tradeLabels: [
      { label: '	MARELIX TAB. 4 mg' },
      { label: '	MARELIX  4mg amp.' },
      { label: '	RELAXINE 4mg tab.' },
    ],
  },

  {
    label: '	THIOCTIC ACID',
    tradeLabels: [
      { label: '	ALPHA LIPOIC 600mg tabs.' },
      { label: '	LIPOIC 600mg tab.' },
      { label: '	THIOLKAN 300mg tab.' },
      { label: '	THIOTEX 300mg caps.' },
      { label: '	SABOCTIC 300mg f.c.tab.' },
      { label: '	THIOTACID 600mg f.c.tab.' },
      { label: '	THIOTEX FORTE 600mg caps.' },
      { label: '	THIOTACID 300mg tab.' },

      { label: '	THIOTACID 300mg/10ml amp.' },
      { label: '	SOBOXIDANT 300mg f.c. tab.' },
      { label: '	THIOLKAN 600mg tab.' },
      { label: '	SABOCTIC 600mg f.c.tab.' },
      { label: '	SOBOXIDANT 600mg f.c. tab.' },
    ],
  },
  {
    label: '	THIOCTIC ACID+VITAMIN B1+VITAMIN B12',
    tradeLabels: [
      { label: '	THIOTACID COMPOUND 600  f.c.caplets' },
      { label: '	THIOTACID COMPOUND caps.' },
    ],
  },

  { label: '	THIOGUANINE', tradeLabels: [{ label: '	LANVIS 40 mg tab.' }] },
  {
    label: '	THIOMERSAL',
    tradeLabels: [{ label: '	STERI-SOLV' }, { label: '	STERI-SAL 2' }],
  },

  {
    label: '	THIOPENTAL',
    tradeLabels: [
      { label: '	ANAPENTAL 500mg vial.' },
      { label: '	THIOPENTAL 1g I.V. vial' },
      { label: '	THIOPENTAL SODIUM 0.5gm vial U.S.P.21' },
      { label: '	THIOPENTAL SODIUM 1gm IV vial U.S.P.23' },
      { label: '	THIOPENTAL SODIUM 1gm USP 27 vial' },
      { label: '	THIOPENTAL SODIUM 500mg IV vial U.S.P23' },
      { label: '	THIOPENTONE 500mg I.V.vial.' },
      { label: '	THIOPENTAL 0.5g I.V. vial' },
    ],
  },

  {
    label: '	THIORIDAZINE',
    tradeLabels: [
      { label: '	MELLERIL 200mg retard tab.(CANCELLED)' },
      { label: '	MELLERIL 30mg retard tab.(CANCELLED)' },
      { label: '	MELLERIL 30mg retard tab.(CANCELLED)' },
      { label: '	THIOZIN 100mg f.c.tab.(CANCELLED)' },
      { label: '	THIOZIN 50mg f.c.tab.(CANCELLED)' },
      { label: '	THIOZIN 25mg f.c.tab.(CANCELLED)' },
    ],
  },

  {
    label: '	THYROXINE',
    tradeLabels: [
      { label: '	ELTROXIN 50mcg tab.' },
      { label: '	ELTROXIN 100mcg tab.' },
      { label: '	THYROXINE 50mcg tab.' },
    ],
  },
  {
    label: '	TIANEPTINE SODIUM SALT',
    tradeLabels: [{ label: '	STABLON 12.5mg sugar coated tab.' }],
  },

  {
    label: '	TIAPRIDE',
    tradeLabels: [
      { label: '	TIAPRIDAL 100mg tab.' },
      { label: '	TIAPRIDAL 100MG/2ML AMP.' },
    ],
  },

  {
    label: '	TIAPROFENIC ACID',
    tradeLabels: [
      { label: '	SURGAM 300 mg tab.' },
      { label: '	SURGAM 300 mg supp.' },
      { label: '	SURGAM 200 mg vial' },
      { label: '	SURGAM 300mg S.R.tab.' },
      { label: '	SURGAM 100 mg tab.' },
      { label: '	SURGAM SA 300 mg caps.' },
    ],
  },

  {
    label: '	TIBEZONIUM IODIDE',
    tradeLabels: [
      { label: '	MAXIUS LOZENGES 0.5mg' },
      { label: '	MAXORAL MOUTH AND THROAT 0.05% mouth wash' },
    ],
  },
  {
    label: '	TIBOLONE',
    tradeLabels: [
      { label: '	LIVIAL 2.5mg tab.' },
      { label: '	TIBOLONE 2.5mg tab' },
    ],
  },

  {
    label: '	TICLOPIDINE',
    tradeLabels: [
      { label: '	TICLOPIDE 250mg f.c.tab.' },
      { label: '	SEDOPLATE 250mg f.c.tab.' },
      { label: '	TICLOPIDINE 250mg f.c.tab.' },
      { label: '	TICLID 250mg f.c.tab.' },
    ],
  },

  {
    label: '	TIEMONIUM METHYLSULPHATE',
    tradeLabels: [
      { label: '	VISCERALGINE 5mg/2ml I.M./I.V.amp.' },
      { label: '	SPASMOFREE 50mg f.c. tab.' },
      { label: '	SPASMOFREE 10mg/5ml syrup' },
      { label: '	SPASMOFREE 5mg/2ml I.V./I.M. amp.' },
      { label: '	VISCERA 5mg/2ml amp.' },
      { label: '	TIMOGEN 10mg/5ml syrup' },
      { label: '	VISCERALGIN 50mg f.c.tab.' },
      { label: '	VISCERALGINE 20mg supp.' },

      { label: '	VISCERA 10mg/5ml syrup' },
      { label: '	VISCERALGINE 10mg/5ml syrup' },
    ],
  },
  {
    label: '	TILBROQUINOL',
    tradeLabels: [
      { label: '	INTETRIX PEDIATRIC GRANULES' },
      { label: '	INTETRIX PEDIATRIC GRANULES' },
    ],
  },
  {
    label: '	TILBROQUINOL+TILIQUINOL+TILIQUINOL LAURYL SULPHATE',
    tradeLabels: [{ label: '	INTETRIX caps' }],
  },

  {
    label: '	TIMOLOL',
    tradeLabels: [
      { label: '	CUSIMOLOL 0.25% eye drops.' },
      { label: '	CUSIMOLOL 0.5% eye drops' },
      { label: '	OPTIMOL 0.5% eye drops' },
      { label: '	NYOLOL 0.1% gel' },
      { label: '	TIMOLOL MALEATE 0.5% eye drops U.S.P.27' },
      { label: '	TIMOLOL MALEATE 0.25% eye drops U.S.P.27' },
      { label: '	TIMOLOL CHAUVIN' },
      { label: '	TIMOLOL 0.5g/100ml eye drops' },

      { label: '	TIMOLOL 0.5% eye drops' },
      { label: '	TIMOLOL 0.25% eye drops' },
      { label: '	TIMOLOL 0.5% EYE DROPS' },
    ],
  },
  {
    label: '	TIMOLOL+TRAVOPROST',
    tradeLabels: [
      { label: '	DUOTRAV eye drops.' },
      { label: '	TRAVOPROSTQUEEN COMB 40µg/5mg/ml Eye drops' },
    ],
  },

  {
    label: '	TINIDAZOLE',
    tradeLabels: [
      { label: '	FASIGYN  500mg tab.' },
      { label: '	PROTOZOLE 500  mg tablet' },
    ],
  },

  {
    label: '	TINZAPARIN SODIUM',
    tradeLabels: [
      { label: '	INNOHEP ANTI-XA 4500I.u./0.45 ml prefilled syringe' },
      { label: '	INNOHEP ANTI-XA 20.000 I.u./ml vial' },
      { label: '	INNOHEP ANTIXA 10000I..u./0.5ml  Prefilled Syringe' },
      { label: '	INNOHEP ANTIXA 10000I..u./0.5ml  Prefilled Syringe' },
      { label: '	INNOHEP ANTIXA 10000I..u./0.5ml  Prefilled Syringe' },
      { label: '	INNOHEP ANTI-XA 10.000 I.u./ml vial' },
      { label: '	INNOHEP ANTI-XA 3500I.U. /0.35ml prefilled syringe' },
    ],
  },

  {
    label: '	TIOCONAZOLE',
    tradeLabels: [
      { label: '	MIPAZOLE 100mg vaginal ovule.' },
      { label: '	MIPAZOLE 28% nail solution' },
      { label: '	GYNO PREMAZOLE 2% vaginal cream' },
      { label: '	GYTRO 100mg vag.tab.' },
      { label: '	GYNO-TROSYD 2% vag. Cream' },
      { label: '	GYNO-TROSID 100 mg vag.tab.' },
      { label: '	TOPZOL 1% cream' },
      { label: '	TOPZOL V  2% vaginal cream' },

      { label: '	TROZAL 28% nail soln' },
      { label: '	TROZAL 1% topical lotion' },
      { label: '	TROZAL 1% topical cream' },
      { label: '	TROSYD 1% dermal  lotion' },
      { label: '	TROSYD 1% dermal powder' },
      { label: '	TROSYD 1% dermal cream' },
      { label: '	TIOCON 1% cream' },
      { label: '	TROSYD 28% nail solution' },
    ],
  },

  {
    label: '	TIOTROPIUM BROMIDE',
    tradeLabels: [
      { label: '	SPIRIVA 18mcg caps.for inhalation' },
      { label: '	SPIRIVA 18mcg caps.for inhalation' },
    ],
  },
  {
    label: '	TIROFIBAN',
    tradeLabels: [{ label: '	AGGRASTAT 12.5mg/50ml I.V.infusion' }],
  },

  {
    label: '	TIZANIDINE',
    tradeLabels: [
      { label: '	MYOLDIN 4mg tab.' },
      { label: '	CAREDALUD S.R. 6mg f.c. tab.' },
      { label: '	ROYSAN 4mg tab.' },
      { label: '	SIRDALUD 4mg tab.' },
      { label: '	SIRDALUD 2mg tab.' },
      { label: '	REKAN 4mg tab.' },
      { label: '	TIZYL 4mg tab.' },
      { label: '	S.M.R 2mg tab.' },
    ],
  },

  {
    label: '	TOBRAMYCIN',
    tradeLabels: [
      { label: '	NEBCIN 80MG/2ML INJ.' },
      { label: '	NEBCIN 20mg/2ml vial' },
      { label: '	NEBCIN 80mg/2ml vial.' },
      { label: '	NEBCIN 20 MG/2 ML INJECTION' },
      { label: '	NEBCIN 20  mg/2 ml vial' },
      { label: '	TOBCIN 80MG/2ML AMP.' },
      { label: '	THILOMICINE OPHTHALMIC oint. 3.5 gm' },
      { label: '	OCULOTOB sterile ophthalmic suspension' },

      { label: '	THILOMICINE OPHTHALMIC SOLUTION' },
      { label: '	TOBCIN 20MG/2ML AMP. PEDIATRIC' },
      { label: '	TOBRIN 20mg/2ml vial' },
      { label: '	TOBRA-ALEX 20mg/2ml amp.' },
      { label: '	TOBRA-ALEX 80mg/2ml I.V./I.M. amp.' },
      { label: '	TOBRACIN 40 mg/2ml vial' },
      { label: '	TOBRACIN 80 mg/2ml vial' },
      { label: '	TOBRACTIVA 0.3g/100ml eye drops' },
      { label: '	TOBRAL 0.3gm/100ml eye drops' },
      { label: '	TOBRALEX 0.3% eye drops.' },

      { label: '	TOBREX  0.3% eye oint.' },
      { label: '	TOBREX 0.3% eye drops' },
      { label: '	TOBRIN 0.3% eye drops' },
      { label: '	TOBRIN 0.3% eye oint.' },
      { label: '	TOBRIN 80mg/2ml vial' },
      { label: '	T GRAND 0.3% eye drops' },
    ],
  },
  {
    label: '	TOFISOPAM',
    tradeLabels: [
      { label: '	GRANDAXIN 50mg tab.' },
      { label: '	NO DEPRINE 50mg tab.' },
    ],
  },

  {
    label: '	TOLETERODINE TARTRATE',
    tradeLabels: [{ label: '	TERODINE 1mg scored tab.' }],
  },
  {
    label: '	TOLFENAMIC ACID',
    tradeLabels: [{ label: '	FASTGRAINE RAPID dispersible 200mg tab.' }],
  },
  {
    label: '	TOLMETIN',
    tradeLabels: [
      { label: '	TOLMETIN 400mg caps.' },
      { label: '	TOLMETIN 200mg caps.' },
      { label: '	TOLMETIN 200mg hard gelatin caps.' },
    ],
  },

  {
    label: '	TOLMETIN SODIUM',
    tradeLabels: [
      { label: '	TOLMET DS 400mg hard gelatin caps' },
      { label: '	RUMATOL 400 mg  capsule' },
      { label: '	RUMATOL 200 mg  capsules' },
      { label: '	RUMATOL 200 mg  capsules' },
      { label: '	TOLECTIN 400mg caps.' },
      { label: '	TOLECTIN 200mg caps.' },
    ],
  },

  {
    label: '	TOLNAFTATE',
    tradeLabels: [
      { label: '	TINEA CURE 1  %w/w cream' },
      { label: '	TINEA CURE 1 gm/100ml paint' },
      { label: '	TINEA CURE powder' },
    ],
  },

  {
    label: '	TOLTERODINE L TARTARATE',
    tradeLabels: [
      { label: '	DETRUSITOL RETARD 4mg prolonged release caps.' },
      { label: '	INCONT 4mg long acting tab.' },
      { label: '	CYSTORIDINE sustained release  f.c.tab' },
      { label: '	CYSTOLAX 1mg f.c. tab.' },
      { label: '	DETRUSITOL 2mg f.c.tab.' },
      { label: '	URICONTROL 2mg tab.' },
      { label: '	TOLTERODINE 2mg f.c.tab.' },
      { label: '	TERODINE 2mg scored tab.' },
    ],
  },

  {
    label: '	TOPIRAMATE',
    tradeLabels: [
      { label: '	NANCYDAL 25mg f.c. tabs.' },
      { label: '	DELPIRAMATE 100mg f.c.tab.' },
      { label: '	CONVIBAN 100mg scored f.c. tabs.' },
      { label: '	TOPIRAMATE 200mg f.c.tab.' },
      { label: '	TOPAMAX  25mg f.c. tab.' },
      { label: '	TOPAMAX 100mg f.c.tab.' },
      { label: '	SPRINKAZEN 100mg f.c.tab.' },
      { label: '	TOPIRAMATE 25mg f.c.tab.' },

      { label: '	SPRINKAZEN 200mg f.c. tab.' },
    ],
  },
  {
    label: '	TOPOTECAN',
    tradeLabels: [
      { label: '	TOPOTEL 1mg/ml vial' },
      { label: '	TOPOTEL 1mg/ml vial' },
    ],
  },

  {
    label: '	TORSEMIDE',
    tradeLabels: [
      { label: '	EXAMIDE 10mg Tablets' },
      { label: '	EXAMIDE 20mg tab.' },
      { label: '	EXAMIDE 5mg tab.' },
      { label: '	TORSERETIC  20mg tab.' },
      { label: '	TORSERETIC  10mg tab.' },
      { label: '	EXAMIDE 10mg Amp.' },
      { label: '	TORSERETIC amp' },
    ],
  },

  {
    label: '	TRACE ELEMENTS',
    tradeLabels: [
      { label: '	PAEDIATRIC TRACE ELEMENTS 10ML VIAL' },
      { label: '	Addamel N' },
      { label: '	Soluvit-n Vial' },
    ],
  },

  {
    label: '	TRAMADOL',
    tradeLabels: [
      { label: '	CONTRAMAL 150mg S.R.tab.' },
      { label: '	AMADOL 50mg hard gelatin caps.' },
      { label: '	AMADOL 100mg S.R. tab.' },
      { label: '	CONTRAMAL 50 mg capsules' },
      { label: '	AMADOL 100mg/2ml amp.' },
      { label: '	CONTRAMAL 50 mg capsules' },
      { label: '	CONTRAMAL 100mg supp.' },
      { label: '	CONTRAMAL 100mg/ml oral drops' },

      { label: '	CONTRAMAL 200mg S.R.tab.' },
      { label: '	TRAMAL 100mg/ml oral drops.' },
      { label: '	TRAMADOL RECTOCAP 100mg supp.' },
      { label: '	ULTRADOL 100mg supp.' },
      { label: '	TRAMAL 100mg amp.' },
      { label: '	TRADOL 100mg supp.' },
      { label: '	TRAMAL 100mg supp.' },
      { label: '	TAMOL 200mg tab.' },
      { label: '	ULTRADOL 100mg amp.' },
      { label: '	TRAMADOL 50mg caps.' },

      { label: '	ULTRADOL 150mg tab.' },
      { label: '	TRAMADOL 50mg caps.' },
      { label: '	TRAMADOL 1gm/10ml oral drops' },
      { label: '	TAMOL 100mg/ml oral drops' },
      { label: '	TRAMADOL 100mg/2ml amp.' },
      { label: '	TRAMADOL 100mg amp.' },
      { label: '	TRAMA S.R.100mg f.c.tab.' },
      { label: '	TRAMADOL 50mg caps.' },
      { label: '	TRAMUNDIN 150mg REYARD tab.' },
      { label: '	TRAMAL 50mg caps.' },

      { label: '	TRAMAX amp. 100 mg' },
      { label: '	TRAMAX caps. 50 mg' },
      { label: '	TRAMAX caps. 50 mg' },
      { label: '	TRAMUNDIN 100mg S.R.tab.' },
      { label: '	TRAMUNDIN 200mg S.R.tab.' },
    ],
  },
  {
    label: '	TRANDOLAPRIL+VERAPAMIL',
    tradeLabels: [{ label: '	TARKA 180/2 M.R. tab.' }],
  },

  {
    label: '	TRANEXAMIC ACID',
    tradeLabels: [
      { label: '	CYCLOKAPRON 100mg/ml amp. 5ml' },
      { label: '	KAPRON 500mg/5ml amp.' },
      { label: '	KAPRON 500mg f.c tab.' },
      { label: '	CYCLOKAPRON 500mg tab.' },
      { label: '	HEMOXAMINE 500mg/5ml amp.' },
      { label: '	BELDEX 100mg/ml I.V.amp.' },
      { label: '	TRANEX 500mg tab.' },
    ],
  },

  { label: '	TRANYLCYPROMINE', tradeLabels: [{ label: '	PARNETIL 10mg tab.' }] },
  {
    label: '	TRAVOPROST',
    tradeLabels: [
      { label: '	TRAVOPROSTQUEEN  40µg/ml Eye drops' },
      { label: '	TRAVATAN 0.004% eye drops.' },
    ],
  },
  {
    label: '	TRAZODONE',
    tradeLabels: [
      { label: '	TRITTICO 100mg tab.' },
      { label: '	TRITTICO 50mg tab.' },
    ],
  },

  {
    label: '	TRETINOIN',
    tradeLabels: [
      { label: '	ACNETIN- A 0.025gm/100gm gel' },
      { label: '	LOCATRET lotion.' },
      { label: '	ACNE FREE 0.02% gel' },
      { label: '	EUDYNA 0.05% gel' },
      { label: '	ACNETIN- A 0.05% topical solution' },
      { label: '	EUDYNA 0.05% cream' },
      { label: '	ACRETIN 0.05% cream' },
      { label: '	ACNE FREE 0.05% cream' },

      { label: '	ACNE-FREE 1.12mg/ml top. Solution' },
      { label: '	ACRETIN 0.025% cream' },
      { label: '	ACNETIN- A 0.05% cream' },
      { label: '	RETIN A gel 0.025 %' },
      { label: '	RETIN A 0.05% cream' },
    ],
  },

  {
    label: '	TRIAMCINOLONE',
    tradeLabels: [
      { label: '	AZMACORT 60mg oral inhaler' },
      { label: '	KENACORT 4 mg tab.' },
      { label: '	KENACORT-A 0.1% cream' },
      { label: '	KENACORT-A 0.1% ointment' },
      { label: '	TRIAMCINOLONE 4mg tab.U.S.P23' },
      { label: '	TRIAMCINOLONE ACETONIDE 40mg/ml IM vial' },
    ],
  },

  {
    label: '	TRIAMCINOLONE ACETONIDE',
    tradeLabels: [
      { label: '	KENACORT-A 40mg/ml vial' },
      { label: '	KENALOG IN ORABASE 1% oral gel' },
      { label: '	AMCINOL 40mg/ml I.M amp.' },
      { label: '	KENALOG IN ORABASE 1% oral gel' },
      { label: '	TOPICORT 0.1gm/100gm cream.' },
    ],
  },
  {
    label: '	TRIAMCINOLONE+SALICYLIC ACID',
    tradeLabels: [{ label: '	CINOLONE-S gel' }],
  },

  { label: '	TRIAMTERENE+XIPAMIDE', tradeLabels: [{ label: '	EPITENS tab.' }] },
  { label: '	TRIETHANOLAMINE', tradeLabels: [{ label: '	MYOFIT 10% cream' }] },
  {
    label: '	TRIFLUOROTHYMIDINE',
    tradeLabels: [{ label: '	BEPHEN 1% eye drops' }],
  },

  {
    label: '	TRIFLUPERAZINE',
    tradeLabels: [
      { label: '	STELLASIL 1mg tab.' },
      { label: '	STELLASIL 5 mg tab.' },
    ],
  },
  {
    label: '	TRIFLURIDINE',
    tradeLabels: [{ label: '	TRIHERPIN 10mg/gm eye oint.' }],
  },

  {
    label: '	TRIHEXYPHENIDYLE',
    tradeLabels: [
      { label: '	TRIXY 5mg tab.' },
      { label: '	TRIXY 2mg tab.' },
      { label: '	PARKINOL 5mg tab.' },
    ],
  },

  {
    label: '	TRIMEBUTINE',
    tradeLabels: [
      { label: '	G-REGULATOR 100mg tab.' },
      { label: '	DEBRIDAT 200mg tab.' },
      { label: '	GAST-REG 100mg tab.' },
      { label: '	G-REGULATOR 24mg/5ml susp.' },
      { label: '	DEBRIDAT 1.2gm susp.' },
      { label: '	DEBRIDAT 100mg supp.' },
      { label: '	DEBRIDAT 50mg inj.' },
      { label: '	DEBRIDAT 100mg tab.' },

      { label: '	GAST-REG 50mg/5ml I.V./I.M.amp.' },
      { label: '	GAST-REG 200mg tab.' },
      { label: '	GAST-REG 100mg supp.' },
      { label: '	GAST-REG  24mg/5ml susp.' },
      { label: '	TRITONE 200mg tab' },
      { label: '	TRIBUDAT 100mg tablet' },
      { label: '	TRITONE 100mg tab.' },
      { label: '	TRITONE  480mg/100ml powder For oral susp.' },
    ],
  },

  {
    label: '	TRIMETAZIDINE',
    tradeLabels: [
      { label: '	METACARDIA 20mg f.c.tab.' },
      { label: '	VASTOR 20mg f.c. tab.' },
      { label: '	TRICARDIA 20mg tab' },
      { label: '	VASTAREL MR 35mg modified release f.c.tab.' },
      { label: '	VASTAREL 20mg f.c.tab.' },
    ],
  },
  {
    label: '	TRIPOTASSIUM DICITRATO BISMUTHATE',
    tradeLabels: [{ label: '	TRICATE 120mg tab.' }],
  },

  {
    label: '	TRIPTORELIN ACETATE',
    tradeLabels: [
      { label: '	DECAPEPTYL CR 3.75 mg IM INJ.' },
      { label: '	DECAPEPTYL CR  3.75mg  prefilled syringe' },
      { label: '	DECAPEPTYL 0.1mg/ml prefilled syringe' },
    ],
  },
  {
    label: '	TROMANTADINE',
    tradeLabels: [{ label: '	VIRU-MERZ SEROL 1gm/100gm gel' }],
  },

  {
    label: '	TROPICAMIDE',
    tradeLabels: [
      { label: '	MYDRAPID  1% eye drops' },
      { label: '	MYDRIAMEX 1% eye drops' },
      { label: '	MYDRIACYL 1% eye drops' },
      { label: '	MYDRAPID 0.5% eye drops' },
      { label: '	TROPICOL 1% eye drops.' },
    ],
  },

  {
    label: '	TROPISETRON',
    tradeLabels: [
      { label: '	NAVOBAN 5mg caps.' },
      { label: '	NAVOBAN 2mg/2ml amp.' },
      { label: '	NAVOBAN 5mg/5ml amp.' },
    ],
  },
  { label: '	TROSPIUM', tradeLabels: [{ label: '	TROSPIKAN 20mg f.c. tabs.' }] },

  {
    label: '	TUBOCURARINE CHLORIDE',
    tradeLabels: [
      { label: '	BRICANYL 0.25mg/dose aerosol' },
      { label: '	BRICANYL 0.25mg/dose aerosol' },
    ],
  },
  {
    label: '	UBIDECARENONE',
    tradeLabels: [{ label: '	BIO Q-10 50mg soft gelatin caps.' }],
  },
  {
    label: '	ULOBETASOL',
    tradeLabels: [
      { label: '	MIRACORTON 0.05% cream' },
      { label: '	MIRACORTEN 0.05% ointment' },
    ],
  },

  { label: '	UREA', tradeLabels: [{ label: '	URECARE 10% cream' }] },
  {
    label: '	UROFOLLITROPIN',
    tradeLabels: [
      { label: '	FOSTIMON 150I.U. I.M./S.C. vial' },
      { label: '	FOSTIMON 75 I.U. I.M. vial' },
      { label: '	METRODIN HIGHLY PURIFIED 75I.u.amp.' },
    ],
  },

  {
    label: '	UROKINASE',
    tradeLabels: [
      { label: '	ANGIKINASE 500,000I.U. vial' },
      { label: '	ANGIKINASE 100,000I.U. vial' },
      { label: '	ANGIKINASE 250,000I.U. vial' },
    ],
  },
  {
    label: '	URO-VAXOM LYOPHILIZATE',
    tradeLabels: [{ label: '	URO-VAXOM 60mg caps.' }],
  },

  {
    label: '	URSODEOXYCHOLIC ACID',
    tradeLabels: [
      { label: '	EGYRESOLVE 250mg soft gelatin capsules' },
      { label: '	LIVAGOAL 450mg caps.' },
      { label: '	BILIVER 450mg hard gelatin caps.' },
      { label: '	URSOCHOL 250mg caps.' },
      { label: '	URSODOL 250mg caps.' },
      { label: '	URSOFALK 250mg caps.' },
      { label: '	URSOGALL 250mg/5ml susp.' },
      { label: '	URSOGALL 300mg caps.' },

      { label: '	URSOGALL 300mg caps.' },
      { label: '	URSODIOL 250mg caps U.S.P 23' },
      { label: '	URSOTWIN 500mg caps.' },
    ],
  },
  {
    label: '	VACCINE BCG',
    tradeLabels: [
      { label: '	B.C.G. VACCINE 1 mg amp.' },
      { label: '	B.C.G. VACCINE 2 mg amp.' },
    ],
  },
  {
    label: '	VACCINE CHOLERA',
    tradeLabels: [{ label: '	CHOLERA VACCINE vial E.P. 84' }],
  },

  {
    label: '	VACCINE DIPHTHERIA+HAEMOPHILUS INFLUENZA B',
    tradeLabels: [{ label: '	HIBTITER VACCINE 0.5ml vial' }],
  },
  {
    label: '	VACCINE DIPHTHERIA+HAEMOPHILUS INFLUENZA TYBE B+PE',
    tradeLabels: [],
  },
  {
    label: '	VACCINE DIPHTHERIA+HAEMOPHILUS INFLUENZA TYPE B+PE',
    tradeLabels: [],
  },
  {
    label: '	VACCINE DIPHTHERIA+HEPATITIS B+PERTUSSIS+TETANUS',
    tradeLabels: [{ label: '	TRITANRIX-HB vial I.M. injection' }],
  },

  {
    label: '	VACCINE DIPHTHERIA+PERTUSSIS+POLIOMYLITIS+TETANUS',
    tradeLabels: [{ label: '	TETRA-COQ vial S.C/I.M injection' }],
  },
  {
    label: '	VACCINE DIPHTHERIA+PERTUSSIS+TETANUS',
    tradeLabels: [{ label: '	D.T.P. VACCINE (E.P 72) vial' }],
  },
  {
    label: '	VACCINE DIPHTHERIA+TETANUS',
    tradeLabels: [
      { label: '	D.T. VACCINE (DIPHTERIA TOXOID &TETANUS TOXOID) vial' },
    ],
  },

  {
    label: '	VACCINE HEPATITIS A',
    tradeLabels: [
      { label: '	AVAXIM PEDIATRIC 80 antigen unit/0.5ml pref.syringe' },
      { label: '	HAVRIX 1440 I.U./ml vial' },
      { label: '	HAVRIX 720 I.U./ml vial' },
      { label: '	AVAXIM 160antigen unit /0.5ml prefilled syringe' },
    ],
  },
  {
    label: '	VACCINE HEPATITIS A (INACTIVATED)+VACCINE HEPATITI',
    tradeLabels: [],
  },

  {
    label: '	VACCINE HEPATITIS B',
    tradeLabels: [
      { label: '	ENGERIX B (PEDIATRIC)I.M. injection 10 mcg/0.5ml vial' },
      { label: '	EUVAX-B 20mcg/ml I.M vial' },
      { label: '	EUVAX-B 20mcg/ml I.M vial' },
      { label: '	EUVAX-B 20mcg/ml I.M vial' },
      { label: '	EUVAX-B 20mcg/ml I.M vial' },
      { label: '	ENGERIX-B VACCINE (ADULT)I.M. injection  20mcg/ml vial' },
      { label: '	HEPAVAX-GENE 10mcg vial' },
    ],
  },

  {
    label: '	VACCINE INACTIVATED POLIOMYELITIS TYPE 1+TYPE 2+TY',
    tradeLabels: [],
  },
  {
    label: '	VACCINE INFLUENZA',
    tradeLabels: [
      { label: '	FLUVIRIN inj.' },
      {
        label:
          '	FLUARIX 15 mcg/0.5ml I.M. or S.C. injection in  prefilled syringe.',
      },
      { label: '	INFLUVAC 2007/2008 suspension for inj 15MCG/0.5ml.' },
      { label: '	AGRIPPAL S1 vaccine' },
      { label: '	INFLEXAL BERNA V 15mcg vial' },
      { label: '	VAXIGRIP vaccine 15MCG/0.5ml prefilled syringe' },
    ],
  },

  {
    label: '	VACCINE MEASLES',
    tradeLabels: [
      { label: '	ROUVAX 1000CCID/0.5ml vial I.M/S.C injection' },
      { label: '	ROUVAX 1000CCID/0.5ml vial I.M/S.C injection' },
    ],
  },
  {
    label: '	VACCINE MEASLES+MUMPS+RUBELLA',
    tradeLabels: [
      { label: '	TRIVRATEN BERNA vial  (MMR vaccine)' },
      { label: '	PRIORIX VACCINE S.C.injection and prefilled syring' },
      { label: '	TRIMOVAX MERIEUX vial I.M/S.C injection' },
      { label: '	TRIMOVAX MERIEUX vial I.M/S.C injection' },
    ],
  },

  {
    label: '	VACCINE MENINGITIS',
    tradeLabels: [{ label: '	MENCEVAX AC vial 0.5ml single dose' }],
  },
  {
    label: '	VACCINE MENINGITIS (GROUP A+C)',
    tradeLabels: [
      { label: '	POLYSACCHARIDE MENINGOCOCCAL A+C VACCINE 50MCG/0.5ml vial' },
      { label: '	POLYSACCHARIDE MENINGOCOCCAL A+C VACCINE 50MCG/0.5ml vial' },
      { label: '	POLYSACCHARIDE MENINGOCOCCAL A+C VACCINE 50MCG/0.5ml vial' },
    ],
  },
  {
    label: '	VACCINE PERTUSSIS',
    tradeLabels: [{ label: '	TOSUMAN BERNA  vial 2 ml' }],
  },

  {
    label: '	VACCINE PNEUMOCOCCAL',
    tradeLabels: [
      { label: '	PNEUMO 23 (25mcg/0.5ml) vaccine S.C/ I.M inj.' },
      { label: '	PREVENAR prefilled syringe for I.M. inj.' },
    ],
  },
  {
    label: '	VACCINE RABIES',
    tradeLabels: [
      { label: '	RABIPUR ≥2.5I.U./vial (PCEC RABIES VACCINE FOR HUMAN )' },
      {
        label:
          '	RABIES VACCINE (VERO CELL) 2.5I.U./0.5ml  freeze-dried I.M.inj.',
      },
      { label: '	VERORAB 2.5I.U./0.5ml vial' },
      { label: '	RABIES VACCINE' },
    ],
  },

  {
    label: '	VACCINE TETANUS',
    tradeLabels: [
      { label: '	ADSORBED TETANUS TOXOID VACCINE.' },
      { label: '	TETANUS  ANTITOXIN ( A.T.S ) 1500 I.u.amp.' },
    ],
  },
  {
    label: '	VACCINE TYPHOID',
    tradeLabels: [
      { label: '	VIVOTIF B  CAPSULES' },
      { label: '	TYPHIM VI 0.025MG/0.5ml I.M or S.C injection' },
      { label: '	TYPHOID VACCINE' },
    ],
  },

  {
    label: '	VACCINE YELLOW FEVER',
    tradeLabels: [{ label: '	STAMARIL vaccine' }],
  },
  {
    label: '	VACCINIUM MYRTILLUM+VITAMIN E',
    tradeLabels: [{ label: '	DIFRAREL E f.c.tab.' }],
  },
  {
    label: '	VALACYCLOVIR',
    tradeLabels: [
      { label: '	VIROCLEAR tab.' },
      { label: '	VALTREX 500mg tab.' },
      { label: '	VALTROVIR 1gm f.c.tab.' },
    ],
  },

  {
    label: '	VALPROIC ACID',
    tradeLabels: [
      { label: '	CONVULEX 300mg caps.' },
      { label: '	CONVULEX 150mg caps.' },
      { label: '	CONVULEX 500mg caps.' },
      { label: '	VALPROIC ACID 200mg caps.USP 22' },
      { label: '	XOPLICT 250mg/5ml syrup' },
      { label: '	SEIZOLOW 250mg/5ml syrup' },
    ],
  },

  {
    label: '	VALSARTAN',
    tradeLabels: [
      { label: '	ADWIVALSAR 160mg Scored f.c.tab.' },
      { label: '	DISARTAN 160mg caps.' },
      { label: '	DISARTAN 80mg caps.' },
      { label: '	LASAROMEP 80mg f.c. tabs.' },
      { label: '	IDISARTAN 80mg caps.' },
      { label: '	LASAROMEP 160mg f.c. tabs.' },
      { label: '	LASAROMEP 320mg f.c. tabs.' },
      { label: '	LASAROMEP 40mg f.c. tabs.' },

      { label: '	SORDEVAN 320mg f.c. tab.' },
      { label: '	SORDEVAN 160 mg f.c.tab.' },
      { label: '	VALSARCARD 80mg f.c. tab.' },
      { label: '	TAREG 160mg f.c.tab.' },
      { label: '	TAREG 80mg f.c.tab.' },
      { label: '	TAREG 40mg f.c.tab.' },
      { label: '	TAREG 320mg f.c.tab.' },
      { label: '	VALSAR 80mg caps.' },
      { label: '	VALSATENS 40mg f.c. tab.' },
      { label: '	VALSATENS 80mg f.c.tab.' },
    ],
  },

  {
    label: '	VANCOMYCIN',
    tradeLabels: [
      { label: '	KEMPOVANCOM' },
      { label: '	VANCOLED 500mg vial' },
      { label: '	VANCOLON 500mg I.V.vial' },
      { label: '	VANCOMIX 1g I.V. vial' },
      { label: '	VANCOMIX 500mg I.V.vial' },
      { label: '	VANCOCIN  CP 500mg vial.' },
      { label: '	VANCOMYCIN HYDROCHLORIDE 500mg vial' },
      { label: '	VANCOZIN 500 mg vial' },

      { label: '	VANCOMYCINE MYLAN 500mg vial' },
      { label: '	Vancomix 1gm Vial' },
    ],
  },
  {
    label: '	VARALIPRIDE',
    tradeLabels: [
      { label: '	AGREAL 100mg caps.' },
      { label: '	AGREAL 100mg caps.' },
    ],
  },
  { label: '	VARDENAFIL', tradeLabels: [{ label: '	LEVITRA 20mg f.c. tabs.' }] },

  {
    label: '	VARENICLINE',
    tradeLabels: [
      { label: '	CHAMPIX 1mg f.c.tablet' },
      { label: '	CHAMPIX 0.5mg &1mg f.c.tab.(Titration Pack)' },
    ],
  },
  {
    label: '	VECURONIUM BROMIDE',
    tradeLabels: [{ label: '	NORCURON 4mg/ml amp.' }],
  },

  {
    label: '	VENLAFAXINE',
    tradeLabels: [
      { label: '	EFEXOR 37.5 mg' },
      { label: '	EFEXOR XR 150mg caps.' },
      { label: '	DELVENA 100mg tab' },
      { label: '	EFEXOR 50 mg tab.' },
      { label: '	EFEXOR 75 mg TAB.' },
      { label: '	IDIXOR 75mg  tab.' },
      { label: '	IDIXOR 37.5 mg tab.' },
      { label: '	EFEXOR XR 75mg caps.' },

      { label: '	EFFEGAD 75mg E.R.cap' },
      { label: '	DELVENA 75mg tab.' },
      { label: '	DELVENA 37.5mg tabs.' },
      { label: '	EFFOXBELLE 100mg scored tab.' },
      { label: '	VENLAFAXINE 75mg SR Hard Gelatin Capsule' },
      { label: '	VEXAMOD 150mg SR caps.' },
      { label: '	VEXAMOD 37.5mg S.R.caps.' },
      { label: '	VENLATRIN 37.5mg tab.' },
      { label: '	VENLAFAXINE 37.5mg SR hard gelatin capsule' },
      { label: '	VENLAFAXINE 150mg SR Hard Gelatin Capsules' },

      { label: '	VEXAMOD 75mg SR caps' },
      { label: '	VENLAXINE 75mg f.c.tab.' },
    ],
  },

  {
    label: '	VERAPAMIL',
    tradeLabels: [
      { label: '	ISOPAMIL 240mg S.R.caps.' },
      { label: '	IZOPTOMIL 80mg s.c.tab.' },
      { label: '	ISOPTIN 5mg/2ml I.V.amp.' },
      { label: '	ISOPTIN RETARD 240mg f.c.tab.' },
      { label: '	CARDIOMIL 240mg S.R.caps.' },
      { label: '	CARDIOMIL 120mg S.R.caps.' },
      { label: '	IZOPTOMIL 5mg/2ml amp.' },
      { label: '	IZOPTOMIL 240mg SR tab.' },

      { label: '	ISOPTIN 80mg f.c.tab.' },
      { label: '	IZOPTOMIL 120mg scored coated tabs.' },
      { label: '	GLOPAMIL 120mg S.R.caps.' },
      { label: '	GLOPAMIL 120mg tab.' },
      { label: '	GLOPAMIL 240mg S.R.caps.' },
      { label: '	VERATENS 240mg S.R.pellets in caps.' },
      { label: '	VERATENS 80mg tab.' },
      { label: '	VERATENS 40mg tab.' },
      { label: '	VERAPAMIL 40mg f.c.tab.' },
      { label: '	VERATENS 180mg S.R.pellets in caps.' },

      { label: '	VERAPAMIL 80mg f.c.tab. B.P.2001' },
    ],
  },
  { label: '	VERTEPORFIN', tradeLabels: [{ label: '	VISUDYNE 15mg vial' }] },
  { label: '	VIDARABINE', tradeLabels: [{ label: '	VIDARABINE 3 % eye oint.' }] },
  { label: '	VIGABATRIN', tradeLabels: [{ label: '	SABRIL 500mg tab.' }] },

  {
    label: '	VINBLASTINE SULPHATE',
    tradeLabels: [
      { label: '	CYTOBLASTIN 10mg/10ml vial' },
      { label: '	VELBASTINE 10mg/vial for I.V. inf.' },
      { label: '	VELBE 10mg vial' },
      { label: '	VINBLASTINE SULPHATE 10mg/10ml vial' },
      { label: '	VELBE 10mg/10ml vial' },
      { label: '	VINBLASTINE FREEZE DRIED 10mg/10ml vial' },
    ],
  },

  {
    label: '	VINBURNINE',
    tradeLabels: [{ label: '	CEREBRINE  20mg Hard Gelatin caps.' }],
  },

  {
    label: '	VINCAMINE',
    tradeLabels: [
      { label: '	BRAIN-OX 30mg S.R.caps.' },
      { label: '	VINCAMORE 30mg SR Cap.' },
      { label: '	OXYBRAL 10mg/5ml syrup' },
      { label: '	OXYBRAL 30mg S.R.caps.' },
      { label: '	VINCABRAL 30mg SR caps.' },
      { label: '	OXYBRAL 10mg/5ml syrup' },
      { label: '	OXYBRAL 7.5 mg amp.' },
    ],
  },

  {
    label: '	VINCRISTINE',
    tradeLabels: [
      { label: '	VINRACINE 1mg/ml vial' },
      { label: '	ONCOVIN 1mg vial' },
      { label: '	VINRACINE 1mg/ml vial' },
      { label: '	VINCRISTINE SULPHATE 1mg/ml I.V.vial' },
      { label: '	VINCRISTINE SULPHATE 1mg/ml I.V.vial' },
      { label: '	VINCRISTINE SULPHATE 1mg/ml I.V.vial' },
      { label: '	VINCRISTINE LYOPHILEZED' },
      { label: '	VINCRISTINE LYOPHILEZED' },

      { label: '	VINCRISTIN 1mg vial' },
    ],
  },

  {
    label: '	VINPOCETINE',
    tradeLabels: [
      { label: '	CAVINIL 5mg tab.' },
      { label: '	ANGIOVAN 5mg tab.' },
      { label: '	CAVESTIN 5mg tab.' },
      { label: '	CAVINTON 10mg amp.' },
      { label: '	CAVINTON 5mg tab.' },
      { label: '	CIRCUFIT 10mg caps.' },
      { label: '	CAVINTON 5mg tab.' },
      { label: '	VEINPO 5mg tab.' },

      { label: '	VINPORAL 5mg tab.' },
      { label: '	VINPORAL 10mg amp' },
    ],
  },
  {
    label: '	VINPOCTINE+VITAMIN E',
    tradeLabels: [
      { label: '	ACAPI-CAV caps.' },
      { label: '	VASODIL suspension' },
    ],
  },

  {
    label: '	VITAMIN A',
    tradeLabels: [
      { label: '	HYPOTEARS 1000I.U./g eye gel' },
      { label: '	A-VITON 50.000 I.U. caps.' },
      { label: '	VITAMIN A 50.000I.u. soft gelatin caps.' },
      { label: '	VITAMIN A 25000 I.u.soft gelatin caps.' },
    ],
  },
  {
    label: '	VITAMIN A PALMITATE',
    tradeLabels: [
      { label: '	ABIVIT A  50000 I.U.  soft gelatin caps.' },
      { label: '	CORNETEARS 10mg/g aqueous eye gel' },
    ],
  },

  {
    label: '	VITAMIN A+VITAMIN C+VITAMIN E',
    tradeLabels: [{ label: '	VITAGUARD caps.' }],
  },
  {
    label: '	VITAMIN A+VITAMIN E',
    tradeLabels: [
      { label: '	DIVITON A&E chewable tab.' },
      { label: '	VITAMIN A & E soft gelatin caps.' },
    ],
  },
  {
    label: '	VITAMIN A+VITAMIN E+ZINC GLUCONATE',
    tradeLabels: [{ label: '	VITAZINC soft gelatin caps.' }],
  },

  {
    label: '	VITAMIN B1+VITAMIN B2+VITAMIN B6+VITAMIN B12',
    tradeLabels: [{ label: '	NEUROTON amp.' }, { label: '	TETRAVITON amp.' }],
  },
  {
    label: '	VITAMIN B1+VITAMIN B6',
    tradeLabels: [{ label: '	BEDOXINE tab.' }, { label: '	PYRAMINE tab.' }],
  },

  {
    label: '	VITAMIN B1+VITAMIN B6+VITAMIN B12',
    tradeLabels: [
      { label: '	NEURORUBINE FORTE lactab' },
      { label: '	NEURORUBINE FORTE lactab' },
      { label: '	NEURORUBINE amp.' },
      { label: '	NEUROBION amp. For I.M inj.' },
      { label: '	NEURORUBINE amp.' },
      { label: '	NEUROBION coated tab.' },
      { label: '	ADWINERVE PLUS caps.' },
      { label: '	BECOZYME I.M./I.V.amp.' },

      { label: '	NEUROVIT sugar coated tab.' },
      { label: '	ECAPLEX  syrup' },
      { label: '	NEUROVIT amp.' },
      { label: '	TRI-B  I.M.amp.' },
      { label: '	VITA-3 amp.' },
      { label: '	VITAMIN B COMPLEX tab.' },
      { label: '	TRIVAROL amp.' },
    ],
  },
  {
    label: '	VITAMIN B12',
    tradeLabels: [{ label: '	ORAVIT B12 1mg S.R.caps.' }],
  },

  {
    label: '	VITAMIN C',
    tradeLabels: [
      { label: '	CEVAROL 500mg tab.' },
      { label: '	CEBION 1gm eff.tab.' },
      { label: '	C-Retard 500mg hard gelatin caps.' },
      { label: '	CEBION 1gm eff.tab.' },
      { label: '	CEBION 100mg/ml oral drops' },
      { label: '	C-VITON 500 mg tab' },
      { label: '	CEVAROL 1000mg/5ml amp. for I.V/I.M inj.' },
      { label: '	ABIVIT C  1gm  eff.tab.' },

      { label: '	CEVAROL 500mg/5ml amp.' },
      { label: '	CEVILENE drops 10 gm/100 ml' },
      { label: '	CEVITAL 1gm eff.tab.' },
      { label: '	CEVITIL 1gm effervescent tab.' },
      { label: '	ASCORBOVIT 1gm sachets' },
      { label: '	C-VITON 500 mg tab' },
      { label: '	VITAMIN C SEDICO 1g effervescent sachets' },
      { label: '	VITAMIN C  500 mg  SR caps.' },
      { label: '	VITACID C  1gm effervescent tab.' },
      { label: '	VITACID C 500mg tab.' },

      { label: '	VITAMIN C 500mg C.R.caps.' },
    ],
  },

  {
    label: '	VITAMIN E',
    tradeLabels: [
      { label: '	E-SQUIBB 400I.U.soft gelatin caps.' },
      { label: '	E-VITON caps. 100 mg' },
      { label: '	VITAMIN E 1000mg soft gelatin caps.' },
      { label: '	TOCO 400mg soft gelatin capsule' },
      { label: '	TOCO 1000mg soft gelatin caps.' },
      { label: '	VITAMIN E 1000mg soft gelatin cap.' },
      { label: '	VITAMIN E 400mg soft gelatin caps.' },
      { label: '	VITAMIN E FORTE  400mg soft gelatin capsules' },

      { label: '	VITAMIN E 100mg soft gelatin caps.' },
    ],
  },

  {
    label: '	VITAMIN K1',
    tradeLabels: [
      { label: '	K-DION 10mg chewable tab.' },
      { label: '	CONA-ADIONE 10mg chewable tabs.' },
      { label: '	HAYA-K 10mg chewable f.c.tab.' },
      { label: '	CONA-ADIONE 10mg chewable tabs.' },
      { label: '	K1 APEX 10mg chewable tab.' },
      { label: '	EPIKAVIT 10mg/ml amp.' },
      { label: '	CONA-ADIONE 10mg chewable tabs.' },
      { label: '	ADCO KION 10mg chew.tab.' },

      { label: '	KONAVIT-K 10mg sugar coated tab.' },
      { label: '	HAEMOKION 10mg tab.' },
      { label: '	HAEMOKION 10mg chewable tab.' },
      { label: '	AMRI-K 10mg/ml amp.' },
      { label: '	HAEMOKION 10mg/ml amp.' },
      { label: '	K-SABAA.' },
      { label: '	KONAKION MM PAEDIATRIC 2mg/0.2ml amp.' },
      { label: '	KONAKION 10mg chewable tab.' },
      { label: '	KONAKION MM 10 mg/ml amp.' },
      { label: '	VITAMIN K 10mg chewable tabs.' },

      { label: '	PHYTONADIONE 10 mg inj.' },
      { label: '	ORIGIN- K1 10mg f.c.chewable tab' },
      { label: '	PHYTONADIONE 10mg chewable tab.' },
      { label: '	PHYTOVIT MM 10mg/ml amp.' },
      { label: '	PHYTOMENADIONE 10mg/ml amp.' },
      { label: '	PHYTOMENADIONE 10mg/ml amp.' },
    ],
  },
  { label: '	VITAMIN K4', tradeLabels: [{ label: '	K-VITON 10mg tab' }] },

  {
    label: '	VITAMINS',
    tradeLabels: [
      { label: '	HAEMA caps.' },
      { label: '	G R six capsules' },
      { label: '	MAX VIT caps.' },
      { label: '	MARVIT syrup' },
      { label: '	MAX VIT caps.' },
      { label: '	MULTI-CAP  caps.' },
      { label: '	MEGAVIT ZINC caps.' },
      { label: '	FRUITAL syrup' },

      { label: '	GERIATRIC PHARMATON soft gelatin caps.' },
      { label: '	MEGAVIT ZINC caps.' },
      { label: '	KEROVIT soft gelatin caps.' },
      { label: '	CENTRUM tablets' },
      { label: '	BECO-C SYRUP' },
      { label: '	HI-VIT 21 CAPSULE' },
      { label: '	THERAGRAN HEMATENIC tab.' },
      { label: '	VITAPHOS elixir' },
      { label: '	VITAMAX soft gelatin caps.' },
      { label: '	VITAMOUNT syrup' },

      { label: '	VITAMOUNT syrup' },
      { label: '	VITASTRESS f.c.tab.' },
      { label: '	VITERRA PLUS caps.' },
      { label: '	THERAGRAN- M tab.' },
      { label: '	SANSOVIT syrup' },
      { label: '	SANSOVIT syrup' },
      { label: '	SANSOVIT syrup' },
      { label: '	PHOSPHOPLEX WITH IRON syrup' },
      { label: '	STRESSTABS  WITH ZINC 600mg  tablets' },
      { label: '	SERVIVIT PLUS soft gelatin caps.' },

      { label: '	THERAGRAN STRESS tab.' },
      { label: '	PHAROVIT syrup' },
      { label: '	SANSOVIT WITH IRON syrup' },
      { label: '	SANSOVIT WITH IRON syrup' },
      { label: '	THERAGRAN HEMATENIC tab.' },
      { label: '	THEREGRAN syrup' },
      { label: '	SANSOVIT WITH IRON syrup' },
      { label: '	V-2 PLUS soft gelatin caps.' },
      { label: '	V2 soft gelatin caps.' },
      { label: '	OBRON PLUS caps.' },

      { label: '	PREGVIT-ZINC soft gelatin caps.' },
      { label: '	POLYSACC PLUS hard gelatin cap.' },
      { label: '	THERAGRAN HEMATENIC tab.' },
    ],
  },
  {
    label: '	VITIS VINIFERA',
    tradeLabels: [{ label: '	ENDOTELON 150mg enteric coated tab.' }],
  },

  {
    label: '	VORICONAZOLE',
    tradeLabels: [
      { label: '	VFEND 200mg f.c.tab.' },
      { label: '	VFEND 200mg vial(Hospital)' },
      { label: '	VFEND 50mg f.c.tab.' },
    ],
  },

  {
    label: '	WARFARIN',
    tradeLabels: [
      { label: '	HAEMOFARIN 1mg tab.' },
      { label: '	MAREVAN 1 mg tab.' },
      { label: '	COUMADIN 5mg tab.' },
      { label: '	HAEMOFARIN 5mg tab.' },
      { label: '	COUMADIN 2mg tab.' },
      { label: '	MAREVAN 3 mg tab.' },
      { label: '	MAREVAN 5 mg tab.' },
      { label: '	HAEMOFARIN 3mg tab.' },

      { label: '	HAEMOFARIN 2mg tab.' },
      { label: '	MARIVANIL 1mg tab.' },
      { label: '	MARIVANIL 5mg tab.' },
      { label: '	MARIVANIL 3mg tab.' },
      { label: '	WARFARIN  2mg tab.' },
    ],
  },
  { label: '	WESTWOOD TAR', tradeLabels: [{ label: '	ESTAR 2.2% gel' }] },

  {
    label: '	WHEAT GERM OIL',
    tradeLabels: [{ label: '	GOLDEN E 1000mg caps.' }],
  },
  {
    label: '	WHOLE BILE EXT.+BELLADONNA EXT.+SENNA EXT.+FRANGUL',
    tradeLabels: [],
  },

  {
    label: '	XYLOMETAZOLINE',
    tradeLabels: [
      { label: '	BALKIS 0.05% nasal drops' },
      { label: '	BALKIS 0.1% nasal drops' },
      { label: '	NASOSTOP 0.1% nasal drops' },
      { label: '	OTRIVIN 0.05% pediatric nasal drops' },
      { label: '	RHINEX INFANTILE 0.005g/10ml nasal drops' },
      { label: '	OTRIVIN MENTHOL 0.1% nasal drops.' },
      { label: '	OTRIVIN 0.1% Adult nasal drops' },
      { label: '	RHINEX adult nasal drops' },

      { label: '	OTRIVIN 0.1% adult nasal spray' },
    ],
  },
  {
    label: '	YOHIMBINE',
    tradeLabels: [
      { label: '	YOHIMBEX  5.4mg  tab.' },
      { label: '	YOHIMBEX  5.4mg  tab.' },
    ],
  },

  {
    label: '	ZAFIRLUKAST',
    tradeLabels: [
      { label: '	ACCOLATE 20mg f.c.tab.' },
      { label: '	MONOKAST 20mg f.c.tab.' },
      { label: '	ALUKAST 20mg f.c. tab.' },
      { label: '	VENTAIR 20mg f.c.tab.' },
      { label: '	ZAFIR 20mg f.c.tab.' },
    ],
  },

  {
    label: '	ZALEPLON',
    tradeLabels: [
      { label: '	ZALOSED 10mg caps.' },
      { label: '	SIESTA 10mg caps.' },
      { label: '	SLEEP-AID 10mg tab.' },
      { label: '	SLEEP-AID 5mg tab.' },
    ],
  },
  { label: '	ZIDOVUDINE', tradeLabels: [{ label: '	ZIDIN 300mg f.c.tab.' }] },

  {
    label: '	ZINC',
    tradeLabels: [
      { label: '	OCTOZINC 25mg caps.' },
      { label: '	ZINC ORIGIN 0.2gm/100ml syrup.' },
    ],
  },
  {
    label: '	ZINC GLUCONATE',
    tradeLabels: [{ label: '	ZINC ORIGIN 20mg dispersible tab.' }],
  },

  {
    label: '	ZINC OXIDE',
    tradeLabels: [
      { label: '	NAPI-CARE  oint.' },
      { label: '	BABY RASH FREE 30% oint.' },
      { label: '	ZINC OXIDE 20% oint.U.S.P.22' },
      { label: '	ZINC OXIDE 20% oint.U.S.P23' },
    ],
  },
  {
    label: '	ZINC SULPHATE',
    tradeLabels: [
      { label: '	ZINC SULFATE 10mg/5ml powder for syrup' },
      { label: '	SULFOZINC 20mg/5ml syrup' },
    ],
  },

  {
    label: '	ZIPRASIDONE',
    tradeLabels: [
      { label: '	ZELDOX 60mg caps.' },
      { label: '	ZELDOX 40mg caps.' },
    ],
  },
  {
    label: '	ZOLEDRONIC ACID',
    tradeLabels: [
      { label: '	ACLASTA 5mg/100ml soln. for inf.' },
      { label: '	ZOMETA 4mg vial' },
    ],
  },

  {
    label: '	ZOLMITRIPTAN',
    tradeLabels: [
      { label: '	AMIGRAWEST 2.5mg f.c.tab.' },
      { label: '	SOLPADOL 5mg oro-dispersible tabs.' },
      { label: '	NO-MIGRAIN Z 2.5mg f.c.tab' },
      { label: '	NO-MIGRAIN Z 5mg f.c.tab' },
      { label: '	ZOMIG 2.5mg f.c. tab.' },
    ],
  },

  {
    label: '	ZOLPIDEM TARTRATE',
    tradeLabels: [
      { label: '	STILNOX  10mg tab.' },
      { label: '	ZODIUM 10mg f.c.tab.' },
      { label: '	ZOLPIDEM 10mg tab.' },
    ],
  },
  {
    label: '	ZOPICLONE',
    tradeLabels: [
      { label: '	HYPNOR 7.5mg tab.' },
      { label: '	IMOVANE 7.5mg tab.' },
      { label: '	ZOPICLONE 7.5mg f.c.tabs.' },
    ],
  },

  {
    label: '	ZUCLOPENTHIXOL',
    tradeLabels: [
      { label: '	CLOPIXOL ACUPHASE 100mg/2ml L amp.' },
      { label: '	CLOPIXOL DEPOT 200mg/ml I.M.amp.' },
      { label: '	CLOPIXOL DEPOT 500mg/ml amp.' },
    ],
  },

  {
    label: '	FENOTEROL HYDROBROMIDE',
    tradeLabels: [
      { label: '	BEROTEC 0.05% syrup' },
      { label: '	BEROTEC 0.2% aerosol' },
      { label: '	BEROTEC 2.5mg tab.' },
      { label: '	BEROTEC 200 mcg inhalation caps.' },
      { label: '	BEROTEC METERED AEROSOL 2 mg/ml' },
      { label: '	BRONOTROL 2.5mg/5ml Syrup' },
    ],
  },

  {
    label: '	FENTANYL',
    tradeLabels: [
      { label: '	DUROGESIC 50mcg/hr' },
      { label: '	DUROGESIC 25mcg/hr' },
      { label: '	DUROGESIC 100mcg/hr' },
      { label: '	DUROGESIC 75mcg/hr' },
      { label: '	FENTANYL 100 mcg/2 ML Amp' },
    ],
  },
  {
    label: '	FERRIC HYDROXIDE POLYMALTOSE',
    tradeLabels: [{ label: '	HAEMOJET 100mg/2ml amp.' }],
  },

  {
    label: '	FERRIC HYDROXIDE SACCHARATE COMPLEX',
    tradeLabels: [{ label: '	FEROSAC 100mg/5ml amp.' }],
  },
  {
    label: '	FERRIC SACCHARATE',
    tradeLabels: [{ label: '	INTEROFER 100mg/5ml I.V.amp.' }],
  },
  {
    label: '	FERROUS FUMARATE',
    tradeLabels: [{ label: '	FERRONIL  125mg/5ml  syrup' }],
  },

  {
    label: '	FERROUS FUMARATE+FOLIC ACID',
    tradeLabels: [{ label: '	FERROL f.c.tablet' }, { label: '	FOLIFER tab.' }],
  },
  {
    label: '	FERROUS FUMARATE+FOLIC ACID+VITAMIN C',
    tradeLabels: [{ label: '	FUMIRON PLUS caps.' }],
  },
  {
    label: '	FERROUS GLUCONATE',
    tradeLabels: [{ label: '	GLUCOFER 300mg sugar coated tab.' }],
  },

  {
    label: '	FERROUS GLYCINE SULPHATE COMPLEX',
    tradeLabels: [{ label: '	FERRO SANOL DUODENAL Cap.' }],
  },
  {
    label: '	FERROUS SULPHATE+FOLIC ACID',
    tradeLabels: [
      { label: '	FOLICRON S.R.cap.' },
      { label: '	FERROFOL caps.' },
      { label: '	FEFOL spansule caps.' },
    ],
  },
  {
    label: '	FERROUS SULPHATE+FOLIC ACID+NICOTINAMIDE+VITAMIN B',
    tradeLabels: [],
  },

  {
    label: '	FERROUS SULPHATE+FOLIC ACID+NICOTINAMIDE+VITAMIN B',
    tradeLabels: [],
  },
  {
    label: '	FERROUS SULPHATE+NICOTINAMIDE+VITAMIN B1+VITAMIN B',
    tradeLabels: [],
  },

  {
    label: '	FEXOFENADINE',
    tradeLabels: [
      { label: '	FASTEL 120mg f.c. tab.' },
      { label: '	FASTOFEN 60mg tab.' },
      { label: '	HISTAFREE 120mg tab.' },
      { label: '	FEXODINE 120mg hard gelatin cap.' },
      { label: '	FEXON 120mg f.c.tab.' },
      { label: '	FASTOFEN 120mg tab.' },
      { label: '	FEXON 180mg f.c.tab.' },
      { label: '	FASTEL 180mg f.c. tab.' },

      { label: '	ALLERGYNA 120mg f.c.tab.' },
      { label: '	ALERTAM 120mg f.c.tab.' },
      { label: '	ALLERFEN 180mg f.c.tab.' },
      { label: '	ALLERFEN 60mg tab.' },
      { label: '	LINOFENADINE 180mg scored f.c.tab.' },
      { label: '	ALERTAM 60mg f.c.tab.' },
      { label: '	ALERTAM 180mg f.c.tab.' },
      { label: '	FEXODINE 180mg caps.' },
      { label: '	ORGOFEXADINE 120mg Film Coated Tablets' },
      { label: '	TELFAST 120mg f.c. tabs.' },

      { label: '	RAPIDO 180mg caps.' },
      { label: '	ORGOFEXADINE 180mg f.c.tab.' },
      { label: '	TELFAST 180mg f.c. tabs.' },
      { label: '	RAPIDO 120mg caps.' },
    ],
  },
  {
    label: '	FILGRASTIM',
    tradeLabels: [
      { label: '	FILGRASTIM 300mcg/vial SEDICO liquid for injection.' },
      { label: '	GENELEUKIM 300UG/ml vial' },
    ],
  },

  {
    label: '	FINASTERIDE',
    tradeLabels: [
      { label: '	FINCAR 5mg f.c.tab.' },
      { label: '	PROSTARELIEF 5mg tab.' },
      { label: '	PROHIR 1mg tab.' },
      { label: '	NOPECIA 1mg caps.' },
      { label: '	PROSTEC 5 mg f.c.tab.' },
      { label: '	PROSTAT 5mg tab.' },
      { label: '	PROSTRIDE 5mg caps.' },
      { label: '	PROSCAR 5mg f.c.tab.' },
    ],
  },

  {
    label: '	FISH OIL+OLIVE OIL+SOYA BEAN OIL+TRIGLYCERIDE',
    tradeLabels: [{ label: '	SMOFLIPID 20% fat emulsion for I.V. Infusion' }],
  },
  {
    label: '	FLAVOXATE',
    tradeLabels: [
      { label: '	NEPHROFLAM 200 mg f.c.tab.' },
      { label: '	GENURIN 200mg tab.' },
    ],
  },
  {
    label: '	FLAVOXATE+MAGNESIUM OXIDE',
    tradeLabels: [{ label: '	UROXATE eff.sachet' }],
  },

  {
    label: '	FLECAINIDE ACETATE',
    tradeLabels: [
      { label: '	TAMBOCOR 100mg tab.' },
      { label: '	TAMBOCOR 10mg amp.' },
    ],
  },
  {
    label: '	FLOCTAFENINE',
    tradeLabels: [
      { label: '	IDARAC 200mg tab.' },
      { label: '	IDARELAX 200mg tab.' },
    ],
  },

  {
    label: '	FLUBENDAZOLE',
    tradeLabels: [
      { label: '	FLUBENZOLE 100mg tab.' },
      { label: '	FLUBEN 100mg tab.' },
      { label: '	FLUVER 100mg tab.' },
      { label: '	FLUVERMAL 20mg/ml Susp.' },
      { label: '	FLUVER 20mg/ml susp.' },
      { label: '	FLUB 20mg/ml susp.' },
      { label: '	FLUB 100mg tab.' },
      { label: '	FLUVERMAL 100 mg tab.' },

      { label: '	FLUBEN 20mg/ml susp.' },
      { label: '	FLUBENZOLE  20mg/ml susp.' },
      { label: '	VERM-ALL 100mg/5ml suspension' },
      { label: '	VERMALL 100mg tab.' },
    ],
  },

  {
    label: '	FLUCONAZOLE',
    tradeLabels: [
      { label: '	FLOCAZOLE 150mg caps.' },
      { label: '	FLUCORAL 50mg caps.' },
      { label: '	FLUCORAL 150mg caps.' },
      { label: '	FUNGICAN 50mg caps.' },
      { label: '	FLUCAND 2mg/ml vial for inf.' },
      { label: '	DIFLUCAN 50mg/5ml powder for oral susp.' },
      { label: '	DIFLUCAN 150mg caps.' },
      { label: '	FUNGICAN 150mg caps.' },

      { label: '	FLOCAZOLE 50mg caps.' },
      { label: '	FUNGICAN  5 mg/ml syrup' },
      { label: '	DIFLUCAN 5mg/ml syrup' },
      { label: '	ALKANAZOLE 150mg caps.' },
      { label: '	ALKANAZOLE 50mg caps.' },
      { label: '	DIFLUCAN 2mg/ml I.V. infusion' },
      { label: '	DIFLUCAN 50mg caps.' },
      { label: '	DIFLUCAN 2mg/ml I.V. infusion' },
      { label: '	TREFLUCAN 150mg caps.' },
      { label: '	TRICONAL 150mg caps.' },

      { label: '	TRICONAL 50mg caps.' },
      { label: '	TREFFLUCAN 50mg caps.' },
    ],
  },
  { label: '	FLUDARABINE', tradeLabels: [{ label: '	FLUDARA 50mg I.V vial' }] },
  {
    label: '	FLUDROCORTISONE',
    tradeLabels: [
      { label: '	ASTONIN H 0.1mg tab.' },
      { label: '	CORTILON 0.1mg tab.' },
      { label: '	ADRECORT H 0.1mg tab.' },
    ],
  },

  {
    label: '	FLUMAZENIL',
    tradeLabels: [
      { label: '	ANEXATE 1mg/10ml amp.' },
      { label: '	ANEXATE 0.5mg/5ml I.V.amp.' },
      { label: '	ANEXNIL 0.5mg/5ml I.V.amp.' },
    ],
  },
  {
    label: '	FLUMETHASONE',
    tradeLabels: [
      { label: '	LOCARTEN 0.02% cream' },
      { label: '	LOCACORTEN VIOFORM ear drops' },
    ],
  },

  {
    label: '	FLUMETHASONE+CLIOQUINOL',
    tradeLabels: [
      { label: '	LOCARTEN VIOFORM cream' },
      { label: '	OTOCORT Ear drops' },
    ],
  },
  {
    label: '	FLUMETHASONE+CORTICOSTEROID+TAR+SALICYLIC ACID',
    tradeLabels: [{ label: '	LOCACORTEN TAR ointment' }],
  },
  {
    label: '	FLUMETHASONE+SALICYLIC ACID',
    tradeLabels: [{ label: '	LOCASEN oint.' }],
  },

  { label: '	FLUNARIZINE', tradeLabels: [{ label: '	SIBELIUM 5mg caps.' }] },
  { label: '	FLUOCINOLONE', tradeLabels: [{ label: '	TRETOFLAMIN.' }] },
  {
    label: '	FLUOCINOLONE+HYDROQUINONE+TRETINOIN',
    tradeLabels: [{ label: '	HAYATMEL topical cream' }],
  },

  {
    label: '	FLUOCINOLONE+NEOMYCIN',
    tradeLabels: [{ label: '	DORICUM sterile eye drops' }],
  },
  { label: '	FLUOCORTOLONE', tradeLabels: [{ label: '	ULTRALAN  5mg tab.' }] },
  {
    label: '	FLUOCORTOLONE PIVALATE+LIDOCAINE',
    tradeLabels: [
      { label: '	NEO-ANOPROCT supp.' },
      { label: '	NEO-ULTRAPROCT SUPP.' },
    ],
  },

  {
    label: '	FLUORESCEIN',
    tradeLabels: [{ label: '	FLUORESCITE  10% injection.' }],
  },
  {
    label: '	FLUORESCEIN SODIUM',
    tradeLabels: [{ label: '	FLUORESCEIN IV amp.' }],
  },

  {
    label: '	FLUOROMETHOLONE',
    tradeLabels: [
      { label: '	FML S.O.P 0.1% eye ointment' },
      { label: '	FLUMETOL S 0.2 % sterile eye drops' },
      { label: '	FLUMETOL S 0.1% sterile eye drops' },
      { label: '	FLUCON 0.1% eye drops' },
      { label: '	FML LIQUIFILM 0.1% eye drops' },
    ],
  },

  {
    label: '	FLUOROMETHOLONE+NEOMYCIN',
    tradeLabels: [
      { label: '	HELPOMETIL eye drops' },
      { label: '	FML NEO eye drops' },
    ],
  },
  {
    label: '	FLUOROMETHOLONE+SODIUM CROMOGLYCATE',
    tradeLabels: [{ label: '	FLUCA ophtalamic susp.' }],
  },
  {
    label: '	FLUOROMETHOLONE+TETRAHYDROZOLINE',
    tradeLabels: [{ label: '	FLUMETOL eye drops' }],
  },

  {
    label: '	FLUOROURACIL',
    tradeLabels: [
      { label: '	NEOFLUR 250mg/5ml amp.' },
      { label: '	FLUORO-URACIL 250mg/5ml amp.' },
      { label: '	5-FLUOROURACIL 1000mg vial' },
      { label: '	5-FLUOROURACIL 500mg vial' },
      { label: '	5-FLUOROURACIL EBEWE 50mg/ml I.V.amp.' },
      { label: '	5FU 250mg/5ml vial' },
      { label: '	5-FLUOROURACIL 250mg/5ml amp.' },
      { label: '	EZADEX 5% cream' },

      { label: '	5FU 250mg/5ml vial' },
      { label: '	UTORAL 250mg/5ml sol. For I.V. inf.' },
      { label: '	UTORAL 250mg/5ml sol. For I.V. inf.' },
    ],
  },

  {
    label: '	FLUOXETINE',
    tradeLabels: [
      { label: '	DEPREBAN 20mg caps.' },
      { label: '	FIESTO 90mg delayed release caps.' },
      { label: '	FLOROSIN 20mg caps.' },
      { label: '	FLUOXETINE 20 mg  caps.' },
      { label: '	FLUTIN 20mg caps.' },
      { label: '	DURAZAC WEEKLY 90mg delayed release caps.' },
      { label: '	ALZAC 10mg caps.' },
      { label: '	FLUOZAC 40mg caps.' },

      { label: '	PHILOZAC 20mg caps.' },
      { label: '	OCTOZAC 20mg caps.' },
      { label: '	PROZAC 20mg disp.tab.' },
      { label: '	PHILOZAC 10mg caps.' },
      { label: '	PROZAC 20mg caps.' },
    ],
  },
  {
    label: '	FLUPENTIXOL DECANOATE',
    tradeLabels: [
      { label: '	FLUANXOL DEPOT 40mg/2ml amp.' },
      { label: '	FLUANXOL DEPOT 40mg/2ml amp.' },
    ],
  },

  {
    label: '	FLUPENTIXOL DIHYDROCHLORIDE',
    tradeLabels: [
      { label: '	FLUANXOL 3mg tab.' },
      { label: '	FLUVIXAL 2mg f.c.tab.' },
      { label: '	FLUANXOL 0.5mg sugar coated tab.' },
      { label: '	FLUANXOL 1mg tab.' },
    ],
  },
  {
    label: '	FLUPHENAZINE',
    tradeLabels: [
      { label: '	MODECATE 25mg/ml vial for I.M injection' },
      { label: '	MODITEN 1mg tab.' },
    ],
  },

  {
    label: '	FLUPHENAZINE+NORTIPTYLINE',
    tradeLabels: [{ label: '	MOTIVAL tab.' }],
  },
  {
    label: '	FLUPREDNIDENE',
    tradeLabels: [
      { label: '	DECODERM lotion 0.1 gm/100 ml' },
      { label: '	DECODERM cream' },
      { label: '	DECODERM COMP cream' },
    ],
  },
  {
    label: '	FLUPREDNIDENE+SALICYLIC ACID',
    tradeLabels: [{ label: '	SALIDECODERM ointment' }],
  },

  {
    label: '	FLURBIPROFEN',
    tradeLabels: [
      { label: '	FROBEN SR 200 mg caps' },
      { label: '	FROBEN 100mg tab.' },
      { label: '	FROBEN 5% top. Gel' },
      { label: '	FROBEN 50mg tab.' },
      { label: '	SIGMAPROFEN 0.03% ophthalmic solution' },
    ],
  },
  {
    label: '	FLUROIDE+ IRON+ VIT(A+B1+B2+B3+B6+C+D+E)',
    tradeLabels: [{ label: '	VITA POLY oral drops.' }],
  },

  { label: '	FLUSPIRILENE', tradeLabels: [{ label: '	IMAP 2mg/ml amp.' }] },
  {
    label: '	FLUTAMIDE',
    tradeLabels: [
      { label: '	EULEXIN 250mg tab.' },
      { label: '	ANDROXINE 250mg tab.' },
      { label: '	EULEXIN 250mg tab' },
      { label: '	CYTOMID 250mg tab.' },
      { label: '	FLUTAMIDE 250mg f.c.tab.' },
    ],
  },

  {
    label: '	FLUTICASONE',
    tradeLabels: [{ label: '	TICANASE 0.05% nasal spray' }],
  },

  {
    label: '	FLUTICASONE PROPIONATE',
    tradeLabels: [
      { label: '	FLIXOTIDE 125 mcg/dose inhaler' },
      { label: '	FLIXOTIDE  DISKUS 50mcg/dose accuhaler' },
      { label: '	FLIXOTIDE  DISKUS 250 mcg/dose  inhaler' },
      { label: '	CUTASONE 0.005% oint.' },
      { label: '	FLIXOTIDE 25 mcg/dose inhaler' },
      { label: '	FLIXOTIDE 250 mcg /dose inhaler' },
      { label: '	FLIXOTIDE 50 mcg/dose  inhaler' },
      { label: '	FLIXOTIDE DISKUS  100mcg/dose accuhaler' },

      { label: '	CUTIVATE  0.005% w/w ointment' },
      { label: '	FLIXONASE  AQUEOUS  50 mcg/metered spray dose' },
      { label: '	CUTIVATE  0.05%w/w cream.' },
      { label: '	CUTASONE 0.05% cream' },
      { label: '	FLIXOTIDE EVOHALER 50mcg/actuation inhaler (CFC free)' },
      { label: '	FLIXOTIDE EVOHALER 250mcg/actuation inhaler' },
      { label: '	DERMAFLUTISONE 0.05% topical cream' },
      { label: '	FLIXOTIDE EVOHALER 125mcg/actuation inhaler (CFC free)' },
      { label: '	TOPCAN 0.05% cream' },
    ],
  },

  {
    label: '	FLUTICASONE+SALMETEROL',
    tradeLabels: [
      { label: '	SERETIDE DISKUS 250/50mcg accuhaler' },
      { label: '	SERETIDE DISKUS 250/50mcg accuhaler' },
      { label: '	SERETIDE DISKUS 500/50  accuhaler' },
      { label: '	SERETIDE DISKUS 100/50mcg accuhaler' },
    ],
  },

  {
    label: '	FLUVASTATIN',
    tradeLabels: [
      { label: '	LESCOL 40mg caps.' },
      { label: '	LESCOL XL 80mg f.c.tab.' },
      { label: '	HYPOCOL 40mg caps.' },
      { label: '	HYPOCOL 20mg caps.' },
      { label: '	LESCOL 20mg caps.' },
      { label: '	LESCOL XL 80mg f.c.tab.' },
    ],
  },

  {
    label: '	FLUVOXAMINE MALEATE',
    tradeLabels: [
      { label: '	FAVERIN 100mg scored f.c.tab.' },
      { label: '	FAVERIN 50mg f.c.tab.' },
      { label: '	FLUXAMINE 50mg tab.' },
      { label: '	FLUXAMINE 100mg f.c.tab.' },
    ],
  },

  {
    label: '	FOLIC ACID',
    tradeLabels: [
      { label: '	FOLICAP 2.5mg soft gelatin caps' },
      { label: '	FOLICAP 0.5mg caps.' },
      { label: '	FOLIC ACID 5mg tablet' },
      { label: '	FOLIC ACID 5mg tab. U.S.P.29' },
      { label: '	FOLIC ACID 5mg tab. B.P 2007' },
      { label: '	FOLIC ACID 5mg tab.' },
      { label: '	FOLIC 0.8mg tab.' },
    ],
  },

  {
    label: '	FOLIC ACID+IRON',
    tradeLabels: [
      { label: '	GYNO-TARDYFERON 80mg slow release sugar coated tab.' },
      { label: '	FEROSE-F chewable tab.' },
      { label: '	FERRO-SANOL GYN hard gelatin cap.' },
    ],
  },
  {
    label: '	FOLIC ACID+IRON+MANGANESE+VITAMIN B12+VITAMIN C+ZI',
    tradeLabels: [],
  },
  {
    label: '	FOLIC ACID+MECOBALAMIN',
    tradeLabels: [{ label: '	COBAL F f.c.tab' }],
  },

  {
    label: '	FOLIC ACID+NICOTINAMIDE+OROTIC ACID+PANTHENOL+VITA',
    tradeLabels: [],
  },
  {
    label: '	FOLIC ACID+VITAMIN B1+VITAMIN B2+VITAMIN B6+VITAMI',
    tradeLabels: [],
  },
  {
    label: '	FOLIC ACID+VITAMIN B1+VITAMIN B6+VITAMIN B12',
    tradeLabels: [{ label: '	TRIVAROL tab.' }, { label: '	TRI B tab.' }],
  },

  {
    label: '	FOLIC ACID+VITAMIN B6+VITAMIN B12',
    tradeLabels: [
      { label: '	CRONOGUARD caps.' },
      { label: '	BIOVIT 12 DEPOT amp.' },
    ],
  },
  {
    label: '	FOLLITROPIN (RECOMBINANT FSH)',
    tradeLabels: [
      { label: '	FSH injection 75I.u/1 ml amp of lyophilized powder.' },
      { label: '	FERTILINE 75 I.U. amp.' },
      { label: '	FOLLIFACTOR 75I.U. vial' },
    ],
  },

  {
    label: '	FOLLITROPIN ALFA',
    tradeLabels: [
      { label: '	GONAL-F 75 I.u. amp.' },
      { label: '	GONAPURE 150I.U./ml I.M./S.C.amp.' },
      { label: '	GONAL-F 150 I.u.amp.' },
      { label: '	GONAPURE 75I.U./ml I.M./S.C.amp.' },
    ],
  },

  {
    label: '	FOLLITROPIN BETA',
    tradeLabels: [
      { label: '	PUREGON 100I.u.amp.' },
      { label: '	PUREGON 50I.u.amp' },
      { label: '	PUREGON 100I.u./0.5ml vial' },
    ],
  },

  {
    label: '	FONDAPARINUX SODIUM',
    tradeLabels: [
      { label: '	ARIXTRA 10mg/0.8ml S.C. injection' },
      { label: '	ARIXTRA 2.5mg/0.5ml  solution for injection.' },
      { label: '	ARIXTRA 5mg/0.4ml S.C. injection' },
      { label: '	ARIXTRA 7.5mg/0.6ml S.C injection' },
    ],
  },
  {
    label: '	FORMAMOL+LITHIUM CARBONATE+PIPERAZINE CITRATE',
    tradeLabels: [{ label: '	UROLITHINE eff.granules' }],
  },

  { label: '	FORMESTANE', tradeLabels: [{ label: '	LENTAION I .M DEPOT inj.' }] },
  {
    label: '	FORMOTEROL FUMARATE',
    tradeLabels: [
      { label: '	BRONCHOSTIM 12mcg/dose aerosol' },
      { label: '	FORADIL 10 cap+inhaler dry powder' },
      { label: '	OXIS 4.5mcg/dose turbuhaler' },
      { label: '	OXIS 9mcg/dose turbuhaler' },
    ],
  },

  { label: '	FORTASEPT', tradeLabels: [{ label: '	PYRGAROL LOZENGES' }] },
  {
    label: '	FOSINOPRIL',
    tradeLabels: [
      { label: '	MONOPRIL 10mg tab.' },
      { label: '	MONOPRIL 20mg tab.' },
    ],
  },
  {
    label: '	FOSINOPRIL+HYDROCHLOROTHIAZIDE',
    tradeLabels: [
      { label: '	MONOZIDE 10/12.5  tab.' },
      { label: '	MONOZIDE 20/12.5 tab.' },
    ],
  },

  {
    label: '	FRAMYCETIN',
    tradeLabels: [
      { label: '	SOFRAMYCIN EYE DROPS' },
      { label: '	SOFRAMYCIN 0.5% w/v eye oint.' },
      { label: '	SOFRATAULLE intertaulle 1.05 %  w/w' },
    ],
  },
  {
    label: '	FRUCTOSE+DEXTROSE',
    tradeLabels: [
      { label: '	INVERTOSE 20% W/V I.V.infusion' },
      { label: '	INVERTOSE 20% W/V I.V.infusion' },
    ],
  },

  { label: '	FTIBAMZONE', tradeLabels: [{ label: '	TDA 0.1g/10g oint.' }] },
  {
    label: '	FURAZOLIDONE',
    tradeLabels: [
      { label: '	FURAKIN-M tab.' },
      { label: '	FURAZONE 100mg tab.' },
    ],
  },
  {
    label: '	FURAZOLIDONE+KAOLIN +PHTHALYL SULPHATHIAZOLE+SULPH',
    tradeLabels: [],
  },

  {
    label: '	FURAZOLIDONE+NIFUROXIME',
    tradeLabels: [{ label: '	TRICOF vaginal supp.' }],
  },

  {
    label: '	FUROSEMIDE',
    tradeLabels: [
      { label: '	LAFUREX 20mg/2ml amp.' },
      { label: '	DIUSEX 40mg/4ml ampoule' },
      { label: '	LASIX  20mg/2ml amp.' },
      { label: '	FUROSEMIDE 20mg amp.' },
      { label: '	LAFUREX 20mg tab.' },
      { label: '	BON-ONE 0.5mcg tab.' },
      { label: '	LAFUREX 40mg tab.' },
      { label: '	FUROSEMIDE 40mg tab.' },

      { label: '	LASIX 40mg tab.' },
      { label: '	FRUSEMIDE 40mg tab. B.P.2003' },
      { label: '	FRUZEX 40mg tab.' },
      { label: '	FUROSEMIDE 20mg/2ml amp.' },
      { label: '	ODEMENT 40mg tab.' },
      { label: '	SALEX AMP. 20 mg/2 ml' },
      { label: '	SALEX TAB. 40 mg' },
    ],
  },
  {
    label: '	FUROSEMIDE+POTASIUM CHLORIDE',
    tradeLabels: [{ label: '	OCTOSEMIDE-K E.R tab.' }],
  },

  {
    label: '	FUROSEMIDE+SPIRONOLACTONE',
    tradeLabels: [
      { label: '	LASILACTONE 100/20mg f.c.tab.' },
      { label: '	LASILACTONE 100/20mg f.c.tab.' },
      { label: '	LASILACTONE 50/20mg tab.' },
      { label: '	SPIROMIDE 20/100mg  f.c.tab.' },
      { label: '	SPIROMIDE 50/20mg f.c.tab.' },
    ],
  },
  {
    label: '	FUSAFUNGINE',
    tradeLabels: [
      { label: '	LOCABIOTAL 1% solution for oral or nasal inhalation' },
    ],
  },

  {
    label: '	FUSIDIC ACID',
    tradeLabels: [
      { label: '	FUSIDICTAM  2 % top. Cream' },
      { label: '	FUCI-TOP 2% oint.' },
      { label: '	FUSIDERM 2gm/100gm gel' },
      { label: '	FUSIDERM 2gm/100gm cream' },
      { label: '	FUCIDIN 250mg f.c.tab.' },
      { label: '	FUCI-TOP 2% cream' },
      { label: '	FUCIDEL 2% cream' },
      { label: '	FUSIDIC ACID 2% gel' },

      { label: '	FUCIDIN 2% intertulle' },
      { label: '	FUSIDERM 2gm/100gm oint.' },
      { label: '	FUTHALM 1% ophthalmic susp.' },
      { label: '	FUCIDIN  20mg/gm gel' },
      { label: '	FUCIPHAC  2g/100g top. Cream' },
      { label: '	FUCIDIN 2% intertulle' },
      { label: '	FUCITHALMIC 1% viscous eye drops' },
      { label: '	FUCIDIN 2% cream' },
      { label: '	FUCIDIN 2% oint.' },
      { label: '	FUSI 2% cream' },

      { label: '	OPTIFUCIN 1% viscous eye drops' },
      { label: '	Fucicort Cream' },
    ],
  },

  {
    label: '	GABAPENTIN',
    tradeLabels: [
      { label: '	CONVENTIN 100mg caps.' },
      { label: '	NEURONTIN 300mg caps.' },
      { label: '	GABAPENTIN 600mg f.c. tab.' },
      { label: '	GAPTIN 400mg caps.' },
      { label: '	GAPTIN 300mg caps.' },
      { label: '	CONVENTIN 400mg caps.' },
      { label: '	ADAPTAN 250mg/5ml oral solution' },
      { label: '	ADAPTAN 400mg soft gelatin caps.' },

      { label: '	ADAPTAN soft gelatin cap.' },
      { label: '	GABAPENTIN 800mg f.c.tab.' },
      { label: '	NEURONTIN 400mg caps.' },
      { label: '	GAPTIN 250mg/5ml oral solution' },
      { label: '	NEUROGLOPENTIN 300mg hard gelatin capsule' },
      { label: '	NEUROGLOPENTIN 400mg hard gelatin capsules' },
      { label: '	GAPTIN 100mg caps.' },
      { label: '	GAPTIN 100mg caps.' },
      { label: '	NEUROGLOPENTIN 100mg hard gelatin capsule' },
      { label: '	GABALEPSY 300mg caps.' },

      { label: '	CONVENTIN 300mg hard gelatin caps.' },
      { label: '	VEGAPANTIN  600mg f.c.tab.' },
    ],
  },
  {
    label: '	GADOBENATE DIMEGLUMINE',
    tradeLabels: [
      { label: '	MULTIHANCE 529mg/ml vial' },
      { label: '	MULTIHANCE 529mg/ml vial' },
    ],
  },

  {
    label: '	GADODIAMIDE',
    tradeLabels: [
      { label: '	OMNISCAN 0.5mmol/ml vial for I.V. inj.' },
      { label: '	OMNISCAN 0.5mmol/ml vial for I.V. inj.' },
      { label: '	OMNISCAN 0.5mmol/ml vial for I.V. inj.' },
    ],
  },
  {
    label: '	GADOPENTETATE DIMEGLUMINE',
    tradeLabels: [
      { label: '	MAGNEVIST 469.01mg/ml I.V.infusion' },
      { label: '	MAGNEVIST 469.01mg/ml I.V.infusion' },
    ],
  },

  {
    label: '	GADOTERIC ACID+MEGLUMINE',
    tradeLabels: [
      { label: '	DOTAREM vial/prefilled syringe' },
      { label: '	DOTAREM vial/prefilled syringe' },
      { label: '	DOTAREM vial/prefilled syringe' },
    ],
  },
  {
    label: '	GALLAMINE TRIETHIODIDE',
    tradeLabels: [
      { label: '	GALLAMINE 40mg/2ml amp.' },
      { label: '	GALLAMINE 40 mg/100ml amp.' },
    ],
  },

  {
    label: '	GAMMAGLOBULIN',
    tradeLabels: [
      { label: '	GLOBUMAN BERNA vial 2 ml' },
      { label: '	HUMAN GAMMA GLOBULIN 16 %' },
    ],
  },
  { label: '	GANCICLOVIR', tradeLabels: [{ label: '	CYMEVENE 500mg I.V.vial' }] },
  { label: '	GARLIC', tradeLabels: [{ label: '	ATROPLEX 300 mg TAB.' }] },

  {
    label: '	GATIFLOXACINE',
    tradeLabels: [
      { label: '	FLOXIN 400mg f.c.tab.' },
      { label: '	FLOXIN 200mg f.c.tab.' },
      { label: '	GATIFLOXACIN I.V.infusion.' },
      { label: '	IDIQUIN 400mg f.c.tab.' },
      { label: '	IDIQUIN 200mg f.c.tab.' },
      { label: '	GATICIN 200mg f.c.tab.' },
      { label: '	GATICIN 400mg f.c.tab.' },
      { label: '	GATIGRAND 0.3% eye dps.' },

      { label: '	GATILOX 0.3% ophthalmic solution' },
      { label: '	GATILOX 400mg f.c.tab.' },
      { label: '	GATIPRAM 3mg/ml ophthalmic solution' },
      { label: '	ZYMAR 0.3% ophthalmic solution.' },
      { label: '	TYMER 0.3% eye drops' },
      { label: '	PHARMAGATIN 3mg/ml eye drops solution' },
      { label: '	TEQUIN 400mg tab.(Cancelled)' },
    ],
  },

  {
    label: '	GELATIN+GLYCERIN',
    tradeLabels: [
      { label: '	GLYCERIN INFANT supp.' },
      { label: '	GLYCERIN infantile supp.' },
      { label: '	GLYCERIN adult supp.' },
    ],
  },
  {
    label: '	GELATIN+SODIUM CHLORIDE+SODIUM HYDROXIDE',
    tradeLabels: [{ label: '	GELOFUSINE I.V. infusion.' }],
  },
  {
    label: '	GELSEMIUM EXTRACT+GRINDELIA EXTRACT+NIAOULI ESSENC',
    tradeLabels: [],
  },

  {
    label: '	GEMCITABINE',
    tradeLabels: [
      { label: '	GEMZAR 1gm I.V.vial' },
      { label: '	GEMZAR 200mg I.V.vial' },
    ],
  },

  {
    label: '	GEMFIBROZIL',
    tradeLabels: [
      { label: '	LOPID 600mg f.c.tab.' },
      { label: '	LOWLIP 300mg tab.' },
      { label: '	LOPID 300mg caps.' },
      { label: '	REGULIP 600mg tab..' },
      { label: '	REGULIP 300mg caps.' },
    ],
  },

  {
    label: '	GEMIFLOXACIN',
    tradeLabels: [
      { label: '	FLOBIOTIC 320mg f.c.tab.' },
      { label: '	GEMIQUE 320mg f.c.tab.' },
      { label: '	FLOXGUARD 320mg f.c. tabs.' },
      { label: '	GEMILOXES 320 mg f.c. tabs.' },
      { label: '	FACTIVE  320mg f.c. tabs.' },
      { label: '	QUINABIOTIC 320mg f.c. tabs.' },
      { label: '	QUINABIOTIC 320mg f.c. tabs.' },
    ],
  },

  {
    label: '	GENTAMICIN',
    tradeLabels: [
      { label: '	CIDOMYCIN 0.3% eye oint.' },
      { label: '	CIDOMYCIN 0.3% eye/ear drops' },
      { label: '	CIDOMYCIN 0.3% oint.' },
      { label: '	CIDOMYCIN 80mg/2ml  inj.' },
      { label: '	CIDOMYCIN 3mg/gm cream.' },
      { label: '	CIDOMYCIN 160mg/2ml  I.V/I.M. amp.' },
      { label: '	GARAMYCIN 1mg/gm oint.' },
      { label: '	GENTAMICIN 0.1% topical  Oint.' },

      { label: '	GENTAMICIN 0.1% cream' },
      { label: '	GENTAMICIN  20mg/2ml solution for IM/IV inj.' },
      { label: '	GENTAL 0.1% oint.' },
      { label: '	GENMYCIN 0.3% cream' },
      { label: '	APIGENT 0.1% cream.' },
      { label: '	APIGENT 3mg/gm eye/ear oint.' },
      { label: '	GARAMYCIN 20mg/2ml amp.' },
      { label: '	GENTAMICIN 0.3% eye oint.' },
      { label: '	GARAMYCIN 40mg/ml amp.' },
      { label: '	GENTAMICIN  0.1% top. Cream' },

      { label: '	FARCOCIN 0.1% oint.' },
      { label: '	GARAMYCIN 0.3% eye oint.' },
      { label: '	GARAMYCIN 1mg/gm topical cream' },
      { label: '	BIOGENTACIN  0.1%top. Cream' },
      { label: '	GARAMYCIN 80mg/2ml amp.' },
      { label: '	FARCOCIN 0.1% cream' },
      { label: '	EPIGENT 20mg/2ml I.V./I.M.amp.' },
      { label: '	EPIGENT 80mg/2ml I.M./I.V.amp.' },
      { label: '	APIGENT 3mg/ml eye/ear drops' },
      { label: '	GENTAMICIN 80mg/2ml amp.' },

      { label: '	GENTAMYTREX OPHTHIOLE 5mg/ml eye drops' },
      { label: '	GENTAMYTREX 5mg/gm eye oint.' },
      { label: '	GENTAMYCIN 40mg/ml amp.' },
      { label: '	GENTAMYCIN 40mg/ml amp.' },
      { label: '	GENTAMICIN SULPHATE 40mg/ml amp.USP 23' },
      { label: '	GENMYCIN 0.3% oint.' },
      { label: '	GENTAMICIN 80mg/2ml amp. for I.M/I.V inj.' },
      { label: '	GENTAMICIN 80mg/2ml amp.' },
      { label: '	GENTAMICIN 40mg/ml Solution for I.M/I.V injection' },
      { label: '	GENTAMICIN 20mg/2ml I.M./I.V. paediatric amp.' },

      { label: '	GENTAMICIN SULPHATE 20 mg/0.5ml amp. For I.M./I.V. inj.' },
      { label: '	GENTAMICIN 20mg/2ml I.M./I.V. paediatric amp.' },
      { label: '	GENTAMICIN 20mg/2ml Pediatric amp.' },
      { label: '	GENTAMICIN 40mg/ml I.V./I.M.amp.' },
      { label: '	GENTAMICIN 40mg/ml I.V./I.M.amp.' },
      { label: '	GRAMIDIN oint.' },
      { label: '	REFOBACIN 0.1% cream' },
      { label: '	OPTIGENT 0.3% eye/ear drops' },
      { label: '	OFTALMOLOSA CUSI GENTAMICIN 0.3% eye oint.' },
      { label: '	OCUGENT 3mg/gm eye/ear oint.' },

      { label: '	OPHTAGRAM eye drops' },
      { label: '	OPTIGENT 0.3% eye/ear oint.' },
      { label: '	REFOBACIN 40mg amp.' },
      { label: '	OCUGENT 3% eye/ear drops' },
      { label: '	OPHTAGRAM eye ointment 0.5%' },
      { label: '	REFOBACIN 10mg amp.' },
      { label: '	REFOBACIN 80mg amp.' },
    ],
  },

  {
    label: '	GENTAMICIN+PREDNISOLONE',
    tradeLabels: [
      { label: '	APIGENT-P eye/ear drops' },
      { label: '	APIGENT-P eye/ear oint.' },
    ],
  },
  {
    label: '	GENTAMICIN+ZINC SULPHATE',
    tradeLabels: [{ label: '	ZINCOMYCIN eye drops' }],
  },
  {
    label: '	GESTONORONE CAPROATE',
    tradeLabels: [{ label: '	PRIMOSTAT 200mg/2ml amp.' }],
  },

  {
    label: '	GINKGO BILOBA',
    tradeLabels: [
      { label: '	GINKO 40mg f.c.tab.' },
      { label: '	GINCOFAR 40mg f.c.tab.' },
      { label: '	TANAKAN 40mg f.c tab.' },
      { label: '	TEBONINA FORTE 40mg f.c.tab.' },
    ],
  },
  {
    label: '	GINKGO BILOBA+HEPTAMINOL+TROXERUTIN',
    tradeLabels: [{ label: '	GINKOR FORT  capsule' }],
  },

  {
    label: '	GINKGO BILOBA+TROXERUTIN',
    tradeLabels: [{ label: '	GINKOR topical gel' }],
  },
  {
    label: '	GINSENG',
    tradeLabels: [
      { label: '	GINSANA TONIC 140mg/15ml syrup' },
      { label: '	GINSENG CAP. 85  mg' },
      { label: '	GINSENG 100mg soft gelatin caps.' },
      { label: '	GINSANA 100mg soft gelatin caps.' },
    ],
  },

  {
    label: '	GINSENG+MINERALS+ROYAL JELLY+VITAMINS',
    tradeLabels: [{ label: '	ROYAL VIT G soft gelatin caps' }],
  },
  {
    label: '	GINSENG+ROYAL JELLY+WHEAT GERM OIL',
    tradeLabels: [{ label: '	BIOSTRONG soft gelatin caps.' }],
  },
  {
    label: '	GINSENG+VITAMIN B1+VITAMIN B6',
    tradeLabels: [{ label: '	GINSAVIT FORTE cap.' }],
  },

  {
    label: '	GLAFENINE',
    tradeLabels: [
      { label: '	GLIFEN 200mg tab.' },
      { label: '	GLAPHINE 200mg tab. (cancelled)' },
      { label: '	GLIFEN 1gm supp.' },
      { label: '	GLIFANAN 200mg TAB.' },
      { label: '	GLIFEN 500mg supp.' },
      { label: '	ANALFAN 200mg tab.' },
    ],
  },

  {
    label: '	GLAFENINE+THIOCOLCHICOSIDE',
    tradeLabels: [{ label: '	GLIFARELAX tab.' }],
  },

  {
    label: '	GLIBENCLAMIDE',
    tradeLabels: [
      { label: '	EUGLUCON  5mg tab.' },
      { label: '	GLIBENEZE 5mg tab.' },
      { label: '	DAONIL 5mg tab.' },
      { label: '	GLIBENCLAMIDE BP 2004' },
      { label: '	DIABEN 5mg tab.' },
      { label: '	SEMI-DAONIL 2.5mg tab.' },
    ],
  },

  {
    label: '	GLIBENCLAMIDE+ METFORMIN',
    tradeLabels: [
      { label: '	GLIMET 2.5/400  f.c.tab.' },
      { label: '	DIAVANCE 1.25/250mg f.c.tab.' },
      { label: '	DIAVANCE 2.5/500mg f.c.tab.' },
      { label: '	DIAVANCE 5/500mg f.c.tab.' },
      { label: '	GLUOKAN 5/500mg f.c.tab.' },
      { label: '	METCLAMIDE 5/500mg tab.' },
      { label: '	METCLAMIDE 2.5/500mg tab.' },
      { label: '	GLUCOVANCE 500mg/5mg f.c.tab.' },

      { label: '	AMOPHAGE EXTRA 5/500mg tab.' },
      { label: '	AMOPHAGE EXTRA 2.5mg/500mg tab' },
      { label: '	GLUCOVANCE 500/2.5mg f.c.tab.' },
      { label: '	MEBURIDE 2.5/500mg f.c.tab.' },
    ],
  },

  {
    label: '	GLICLAZIDE',
    tradeLabels: [
      { label: '	DIAMEDIZEN 60mg MR f.c.tab.' },
      { label: '	DIABETRON 40mg tab.' },
      { label: '	DIABETRON 80mg tab.' },
      { label: '	DIABYL 80mg tab.' },
      { label: '	DIAMEDIZEN 30mg MR f.c.tab.' },
      { label: '	DIANORMAL 80mg tab.' },
      { label: '	DIAMICRON 60mg M.R.tab.' },
      { label: '	DIAMICRON 80mg compressed scored tab.' },

      { label: '	GLIPICRONE 80mg tab.' },
      { label: '	DIAMICRON MR 30mg tab.' },
      { label: '	GLICLAZIDE 80mg tab.' },
      { label: '	UNOCRON M.R.30mg f.c.tab.' },
      { label: '	SERVICLAZID 80mg tab.' },
      { label: '	SEMI-GLIPICRONE   40mg tab.' },
    ],
  },

  {
    label: '	GLIMEPIRIDE',
    tradeLabels: [
      { label: '	GLIMADEL 3mg f.c.tab.' },
      { label: '	GLIMADEL 4mg tab.' },
      { label: '	GLIMARYL 1mg tab.' },
      { label: '	GLIMARYL 2mg tab.' },
      { label: '	GLIMARYL 3mg tab.' },
      { label: '	GLIMEPIR 3mg tabs.' },
      { label: '	GLIMEPIR 4mg tabs.' },
      { label: '	GLUCORYL 2mg f.c.tab.' },

      { label: '	GLIMADEL 2mg f.c.tab.' },
      { label: '	GLUCORYL 4mg f. c. tab.' },
      { label: '	DOLCYL 6mg tab.' },
      { label: '	DOLCYL 4mg tab.' },
      { label: '	DOLCYL 3mg tablet' },
      { label: '	DOLCYL 2mg tablet' },
      { label: '	DOLCYL 1mg tablet' },
      { label: '	GLUCORYL 3mg f.c. tabs.' },
      { label: '	DIABRIDE 2mg tab.' },
      { label: '	DIABRIDE 3mg tab.' },

      { label: '	GEDIMADEL 2mg tab.' },
      { label: '	DIABENOR 3mg tab.' },
      { label: '	GEDIMADEL 3mg tab.' },
      { label: '	GEDIMADEL 1mg tab.' },
      { label: '	AMARYL 4mg tab.' },
      { label: '	AMARYL 3mg tab.' },
      { label: '	GLIMADEL 1mg f.c.tab.' },
      { label: '	DIABETLESS 4mg Scored tab.' },
      { label: '	AMARYL 2mg tab.' },
      { label: '	DIAMEPRYL 3mg tab.' },

      { label: '	GLARYL 3mg tab.' },
      { label: '	AMARYL 1mg tab.' },
      { label: '	DIABENOR 2mg tab.' },
      { label: '	GLARYL 4mg tab.' },
      { label: '	CONIDA 4mg tab.' },
      { label: '	DIABRIDE 1mg tab.' },
      { label: '	GLEMAX 4mg caplets' },
      { label: '	DIABETO 2mg tab.' },
      { label: '	REGLIDIB 3mg tab.' },
      { label: '	REGLIDIB 2mg tab.' },
    ],
  },
  {
    label: '	GLIMEPIRIDE+METFORMIN',
    tradeLabels: [
      { label: '	AMARYL M 2/500mg f.c.tab' },
      { label: '	GLIMET FORTE 5/800 f.c.tab.' },
    ],
  },
  {
    label: '	GLIMEPIRIDE+PIOGLITAZONE',
    tradeLabels: [{ label: '	GLIMEPIRIDE PLUS 4\30 mg scored tab.' }],
  },

  {
    label: '	GLIMEPIRIDE+ROSIGLITAZONE',
    tradeLabels: [
      { label: '	AVANDARYL 4mg/2mg f.c.tab.' },
      { label: '	AVANDARYL 4mg/1mg f.c.tab.' },
      { label: '	AVANDARYL 4mg/4mg f.c.tab.' },
      { label: '	DOWNBETES 2/4mg f.c. tabs.' },
    ],
  },

  {
    label: '	GLIPIZIDE',
    tradeLabels: [
      { label: '	GLIPIZIDE 5mg tab.' },
      { label: '	MINIDIAB 5mg tab.' },
      { label: '	GLUPIZIDE 5mg tab.' },
    ],
  },
  {
    label: '	GLIPIZIDE+METFORMIN',
    tradeLabels: [
      { label: '	ENGILOR 2.5\500 tab.' },
      { label: '	ENGILOR 5/500 tab.' },
    ],
  },

  { label: '	GLIQUIDONE', tradeLabels: [{ label: '	GLURENOR 30mg tab.' }] },
  {
    label: '	GLOBULINS',
    tradeLabels: [{ label: '	ANTI-HAEMOPHYLIC GLOBULIN (A.H.G)INJ.' }],
  },
  { label: '	GLUCAGON', tradeLabels: [{ label: '	GLUCAGEN 1mg/ml vial' }] },

  { label: '	GLUCOSAMINE', tradeLabels: [{ label: '	JOFLEX 500mg caps.' }] },
  {
    label: '	GLUCOSAMINE+GINKO BILOBA LEAF EXTRACT',
    tradeLabels: [
      { label: '	GINCOSTAZEN hard gelatin cap' },
      { label: '	ARTHROSAMINE caps.' },
      { label: '	CARTISAMINE caps.' },
      { label: '	DOROFEN caps.' },
    ],
  },

  {
    label: '	GLUCOSAMINE+VITAMIN C',
    tradeLabels: [{ label: '	GLUCOSAMINE caps.' }],
  },

  {
    label: '	GLUCOSE',
    tradeLabels: [
      { label: '	DEXTROSE 5% I.V.inf.' },
      { label: '	GLUCOSE 10 %W/V  I.V.infusion BP 2001' },
      { label: '	GLUCOSE 5% W/V I.v.infusion B.P.2001' },
      { label: '	GLUCOSE 5% W/V I.v.infusion B.P.2001' },
      { label: '	GLUCOSE 5% W/V I.v.infusion B.P.2001' },
      { label: '	GLUCOSE 40%w/v I.V inf.' },
      { label: '	GLUCOSE 25%W/V I.V.infusion B.P.2001' },
      { label: '	GLUCOSE 25%W/V I.V.infusion B.P.2001' },

      { label: '	GLUCOSE 25%W/V I.V.infusion B.P.2001' },
      { label: '	GLUCOSE 5%w/v I.V infusion' },
      { label: '	GLUCOSE 10 %W/V  I.V.infusion BP 2001' },
      { label: '	GLUCOSE 40%w/v I.V inf.' },
      { label: '	GLUCOSE 10 %W/V  I.V.infusion BP 2001' },
    ],
  },
  {
    label: '	GLUCOSE OXIDASE+LACTOFERRIN+LACTOPEROXIDASE+LYSOZY',
    tradeLabels: [],
  },
  {
    label: '	GLUCOSE+POTASSIUM CHLORIDE+SODIUM ACETATE+SODIUM C',
    tradeLabels: [],
  },

  {
    label: '	GLUCOSE+POTASSIUM CHLORIDE+SODIUM CHLORIDE+SODIUM ',
    tradeLabels: [],
  },
  {
    label: '	GLUCOSE+POTASSIUM CITRATE+SODIUM CHLORIDE+SODIUM C',
    tradeLabels: [],
  },
  {
    label: '	GLUCOSE+SODIUM CHLORIDE',
    tradeLabels: [
      { label: '	SODIUM CHLORIDE 0.18% & GLUCOSE 4.3% I.V.infusion B.P 2003' },
    ],
  },
  {
    label: '	GLUCOSE+SODIUM CHLORIDE+POTASSIUM CHLORIDE',
    tradeLabels: [{ label: '	RAWDAMENT solution for I.V inf.' }],
  },

  { label: '	GLUTAMIC ACID', tradeLabels: [{ label: '	GLUTAMIC 500mg tab.' }] },
  {
    label: '	GLUTAMIC ACID+VITAMIN B12',
    tradeLabels: [{ label: '	RUBIVAMINE  oral drops' }],
  },
  {
    label: '	GLUTATHIONE+SELENIUM+SILYMARIN+VITAMIN(A+B1+B2+B6+',
    tradeLabels: [],
  },
  {
    label: '	GLUTATHIONE+SILYMARINE+VITAMIN B12+VITAMIN C',
    tradeLabels: [{ label: '	GLUTOMARINE caps.' }],
  },

  {
    label: '	GLYCERIN',
    tradeLabels: [
      { label: '	GLYCERIN 735mg infantile supp.' },
      { label: '	GLYCERIN 1.47gm adult supp.' },
      { label: '	GLYCERINE 1.61gm supp.B.P.2003' },
      { label: '	GLYCEROL paed.supp.B.P.2003' },
      { label: '	GLYCEROL adult supp.B.P.2003' },
    ],
  },
  {
    label: '	GLYCERIN+ICHTAMMOL',
    tradeLabels: [{ label: '	GLYCERIN ICHTHYOL vaginal pessaries' }],
  },

  {
    label: '	GLYCERIN+PHOSPHOLIPIDS+SOYA BEAN OIL',
    tradeLabels: [{ label: '	LIPOVENOUS 10% PLR I.V.infusion' }],
  },
  {
    label: '	GLYCERIN+POLYDOCANOL+RHUBARB+SALICYLIC ACID',
    tradeLabels: [{ label: '	SALIOCT paint' }],
  },
  {
    label: '	GLYCERIN+SODIUM CARBOXYMETHYLCELLULOSE',
    tradeLabels: [{ label: '	OPTIVE lubricant eye dps.' }],
  },

  {
    label: '	GLYCINE',
    tradeLabels: [
      { label: '	GLYCINE IRRIGATION SOLUTION 1.5% U.S.P 27' },
      { label: '	GLYCINE 1.5 %  irrigation solution  B.P.2003' },
      { label: '	GLYCINE 1.5 %  irrigation solution  B.P.2003' },
    ],
  },
  {
    label: '	GLYCINE+LYSINE ACETYLSALICYLATE',
    tradeLabels: [{ label: '	ASPEGIC vial' }, { label: '	SEDO-PEGIC vial' }],
  },

  {
    label: '	GLYCINE+MAGNESIUM SULPHATE',
    tradeLabels: [{ label: '	AMA G sachets' }],
  },
  {
    label: '	GLYCOPROTEINS+RIBOSOMES OF(DIPLOCOCCUS PNEUMONIA+H',
    tradeLabels: [],
  },
  { label: '	GLYVENOL', tradeLabels: [{ label: '	GLYVENOL 200mg f.c.tab.' }] },
  {
    label: '	GOSERELIN ACETATE',
    tradeLabels: [{ label: '	ZOLADEX DEPOT 3.6mg amp.' }],
  },

  {
    label: '	GRAMICIDIN+NEOMYCIN+NYSTATIN+TRIAMCINOLONE',
    tradeLabels: [
      { label: '	AMOCOMB cream' },
      { label: '	KENACOMB topical cream' },
      { label: '	KENACOMB oint.' },
      { label: '	TOP-FLAM cream' },
      { label: '	TOP-FLAM oint.' },
      { label: '	PANDERMAL topical cream' },
      { label: '	PANDERMAL oint.' },
    ],
  },

  {
    label: '	GRAMICIDIN+NEOMYCIN+POLYMYXIN',
    tradeLabels: [
      { label: '	NEO-MYXIDINE eye/ear drops' },
      { label: '	PANSPECT eye /ear drops' },
      { label: '	POLYSPECTRAN eye/ear drops' },
    ],
  },

  {
    label: '	GRANISETRON',
    tradeLabels: [
      { label: '	G-SETRON f.c.tab.' },
      { label: '	KYTRIL 3mg/3ml amp. For I.V. inj.&inf.' },
      { label: '	EM-EX 1mg/ml amp.1ml' },
      { label: '	EM-EX 1mg/ml amp.1ml' },
      { label: '	KYTRIL 1mg f.c.tab.' },
      { label: '	GRANISETRON 1mg/ml amp.' },
      { label: '	EM-EX 1mg f.c.tab.' },
    ],
  },

  {
    label: '	GRANULOCYTE MACROFAGE COLONY STIMULATING FACTOR',
    tradeLabels: [
      { label: '	LEUCONIL 300mcg lyophilized vial' },
      { label: '	LEUCONIL 500mcg lyophilized vial' },
      { label: '	LEUCONIL 150 mcg lyophilized vial' },
    ],
  },
  {
    label: '	GRAPE SEED EXTRACT',
    tradeLabels: [{ label: '	VINICAP 100mg soft gelatin caps.' }],
  },

  {
    label: '	GRISEOFULVIN',
    tradeLabels: [
      { label: '	GRISEOVIN 2.5% susp.(APPROVED RE-REG)' },
      { label: '	FULVIN 125mg tab.' },
      { label: '	ULTRAFULVIN 125mg tab.' },
      { label: '	ULTRAGRISEOFULVIN 2.5 g/100 ml susp.' },
      { label: '	ULTRAGRISEOFULVIN 125mg tab.' },
    ],
  },
  {
    label: '	GUAIAZULENE',
    tradeLabels: [{ label: '	GARMASTAN N  0.05gm oint.' }],
  },

  {
    label: '	GUAIFENESIN+OXOMEMAZINE+PARACETAMOL',
    tradeLabels: [{ label: '	EXE-TOP syrup(Approved re-reg)' }],
  },
  {
    label: '	GUAIFENESIN+OXOMEMAZINE+PARACETAMOL+SODIUM BENZOAT',
    tradeLabels: [],
  },
  {
    label: '	GUAIFENESIN+PARACETAMOL+VITAMIN C',
    tradeLabels: [{ label: '	G.C. MOL sachet' }],
  },

  {
    label: '	GUAIFENESIN+PSEUDOEPHEDRINE',
    tradeLabels: [
      { label: '	BRONEX oral drops' },
      { label: '	TRIAMINIC CHEST CONGESTION syrup.' },
    ],
  },
  {
    label: '	GUAIFENESIN+PSEUDOEPHEDRINE+TRIPROLIDINE',
    tradeLabels: [{ label: '	ACTIFED EXPECTORANT  syrup' }],
  },

  {
    label: '	GUAIFENESIN+SALBUTAMOL',
    tradeLabels: [
      { label: '	BRONCHOVENT syrup' },
      { label: '	VENTOLIN expectorant syp.(approved re-reg)' },
      { label: '	OCTOVENT PLUS syrup' },
    ],
  },
  {
    label: '	GUAIFENESIN+THEOPHYLLINE',
    tradeLabels: [{ label: '	NEO-MINOPHYLLINE syrup' }],
  },
  {
    label: '	GUAIPHENSIN+PAPAVERINE',
    tradeLabels: [{ label: '	GLUCAFENE syrup' }],
  },

  {
    label: '	HAEMODIALYSIS SOLUTION',
    tradeLabels: [
      { label: '	CONCENTRATED HAEMODIALYSIS SOLUTION FORMULA HDI C903' },
      { label: '	HAEMODIALYSIS CONCENTRATE CK112' },
      {
        label: '	HAEMODIALYSIS CONCENTRATE (FORMULA 1017) to be diluted (1:36)',
      },
      { label: '	HAEMODIALYSIS CONCENTRATE CK113' },
      { label: '	HAEMODIALYSIS CONCENTRATED SOLUTION FORMULA HDI 903' },
      { label: '	HAEMODIALYSIS CONCENTRATE SOLUTION  (1:35) (FORMULA 1014)' },
      { label: '	HAEMODIALYSIS CONCENTRATE (FORMULA 1013)' },
      { label: '	HAEMODIALYSIS CONCENTRATE  (FORMULA 1015)' },

      { label: '	HAEMODIALYSIS CONCENTRATE SOLUTION  (1:35) (FORMULA 1014)' },
      {
        label:
          '	HAEMODIALYSIS CONCENTRATED SOLUTION (BICARBONATE FORMULA) B.P. 2003',
      },
      {
        label:
          '	HAEMODIALYSIS CONCENTRATED SOLUTION (BICARBONATE FORMULA) B.P. 2003',
      },
      { label: '	HAEMODIALYSIS CONCENTRATE  (FORMULA 1015)' },
      {
        label:
          '	HAEMODIALYSIS CONCENTRATE SOLUTION (BICARBONATE) (FORMULA 1048)',
      },
      {
        label:
          '	HAEMODIALYSIS CONCENTRATE SOLUTION (BICARBONATE) (FORMULA 1047)',
      },
      { label: '	HAEMODIALYSIS CONCENTRATE SOLUTION (1:35) (FORMULA 1012)' },
      { label: '	HAEMODIALYSIS CONCENTRATE SOLUTION (1:35) (FORMULA 1012)' },
      { label: '	HAEMODIALYSIS CONCENTRATED SOLUTION FORMULA HDI 903' },
      { label: '	HAEMODIALYSIS CONCENTRATED SOLUTION FORMULA HDI 901' },

      { label: '	HAEMODIALYSIS CONCENTRATED SOLUTION FORMULA HDI 901' },
      { label: '	HAEMODIALYSIS CONCENTRATE (1:35) (FORMULA 1011)' },
      {
        label: '	HAEMODIALYSIS CONCENTRATE (BICARBONATE) (1:44) (FORMULA 1044)',
      },
      { label: '	HAEMODIALYSIS CONCENTRATED SOLUTION FORMULA HDI 902' },
      { label: '	HAEMODIALYSIS CONCENTRATED SOLUTION FORMULA HDI 902' },
      { label: '	HAEMODIALYSIS CONCENTRATE SOLUTION 35X formulation 4' },
      { label: '	HAEMODIALYSIS CONCENTRATE CK- S 581 (bicarbonate)' },
      { label: '	HAEMODIALYSIS CONCENTRATE CK114' },
    ],
  },

  {
    label: '	HAEMOPHILUS INFLUENZA+TETANUS TOXOID',
    tradeLabels: [
      { label: '	ACT-HIB vaccine 10mcg/0.5ml vial' },
      { label: '	HIBERIX VACCINE vial and prefilled syringe' },
      { label: '	PENTAXIM 0.5ml VACCINE' },
    ],
  },
  {
    label: '	HALCICONIDE',
    tradeLabels: [{ label: '	VOLOG 0.1% cream' }, { label: '	VOLOG 0.1% cream' }],
  },

  {
    label: '	HALFA BAR EXTRACT+HEXAMINE',
    tradeLabels: [{ label: '	SEPTOBAR sachet.' }],
  },
  {
    label: '	HALFA BAR EXTRACT+KHELLIN',
    tradeLabels: [{ label: '	KELLAGON 20mg caps.' }],
  },
  { label: '	HALOMERASOLINE', tradeLabels: [{ label: '	SICORTEN 0.05% cream' }] },

  {
    label: '	HALOMERASOLINE+TRICLOSAN',
    tradeLabels: [{ label: '	SICORTEN PLUS cream' }],
  },

  {
    label: '	HALOPERIDOL',
    tradeLabels: [
      { label: '	HALOPERIDOL RETARD 50mg/ml I.M.amp.' },
      { label: '	HALOPERIDOL RETARD100mg/ml I.M.amp.' },
      { label: '	HALOPERIDOL 5mg/ml I.M./I.V.amp.' },
      { label: '	HALONACE 5mg tab.' },
      { label: '	HALDOL DECANOAS 50 mg/ml amp.' },
      { label: '	HALOPROL 5mg/ml I.M. amp.' },
      { label: '	HALONACE 1.5mg tab.' },
      { label: '	HALONACE 10mg/ml oral drops' },

      { label: '	HALOPROLDECANOAS 100mg/ml amp.' },
      { label: '	HALONACE 2mg/ml ped.drops' },
      { label: '	HALONACE 5mg/ml I.M./I.V.amp.' },
      { label: '	HALOPERIDOL 10mg/ml oral drops' },
      { label: '	SAFINACE 5mg tab.' },
      { label: '	SAFINACE 1.5mg tab.' },
      { label: '	PERIDOL 100mg I.M.amp.' },
    ],
  },

  {
    label: '	HALOTHANE',
    tradeLabels: [
      { label: '	HALOTHANE-PHARCO inhaler' },
      { label: '	HALOTHANE-PHARCO inhaler' },
      { label: '	HALOTHANE inhaler B.P 93' },
      { label: '	HALOTHANE inhaler' },
      { label: '	HALOTHANE inhaler' },
      { label: '	NARCOTAN inhaler' },
      { label: '	NARCOTAN inhaler' },
      { label: '	FLUOTHANE (HALOTHANE) 100 % w/w' },

      { label: '	NEW-FLOTAN inhaled anaesthetic liquid' },
      { label: '	NEW-FLOTAN inhaled anaesthetic liquid' },
    ],
  },
  {
    label: '	HAMAMELIS EXTRACT+ICHTAMMOL+POTASSIUM IODIDE',
    tradeLabels: [
      { label: '	DECONGESTYL  supp.' },
      { label: '	PROSTALIN rectal supp.' },
    ],
  },
  {
    label: '	HAMMAMELIS',
    tradeLabels: [{ label: '	HAMELIS 5.35gm/100gm cream' }],
  },

  {
    label: '	HARPAGOPHYTUM PROCUMBENS (DEVILS CLAW ROOT)',
    tradeLabels: [{ label: '	TELTONAL480mg  f.c.tab.' }],
  },
  { label: '	HAWTHORN', tradeLabels: [{ label: '	EMA CARDIN capsules.' }] },

  {
    label: '	HEPARIN',
    tradeLabels: [
      { label: '	CAL-HEPARINE 20000 I.U./0.8ml amp.' },
      { label: '	CAL-HEPARINE 5000I.u. amp.' },
      { label: '	CALCIPARINE 25000 I.u./ml prefilled syringe' },
      { label: '	CALCIPARINE 25000 I.u./ml prefilled syringe' },
      { label: '	HEPARIN SODIUM 5000I.u./ml amp. USP26' },
      { label: '	CAL-HEPARINE 12000I.u.amp.' },
      { label: '	THROMBOPHOB 60000 I.u/100gm gel' },
      { label: '	THROMBOPHOB-S 30000 I.u./100gm gel' },
    ],
  },

  { label: '	HEPARINOID+RUTOSIDE', tradeLabels: [{ label: '	RIMANAL gel' }] },
  {
    label: '	HEPATITIS B IMMUNE GLOBULIN',
    tradeLabels: [
      { label: '	HEPATECT CP 50I.u./ml amp.' },
      { label: '	HEPATECT  CP I.V. 50 I.U. amp.' },
      { label: '	HEPABIG 200 I.U./ml  inj.' },
    ],
  },

  {
    label: '	HEPTAMINOL',
    tradeLabels: [
      { label: '	CORASORE 150mg tab.' },
      { label: '	HEPTAMINOL 150mg tab.' },
      { label: '	CORASORE 150mg/ml oral drops' },
      { label: '	HEPTA 150mg/ml oral drops' },
      { label: '	COTESOR 150mg/5ml drops' },
      { label: '	COTESOR188 mg tab.' },
      { label: '	RESPIRIN 150mg/ml oral drops' },
    ],
  },

  {
    label: '	HEXAHYDRO-ADIPHENINE+PROPYPHENAZONE',
    tradeLabels: [
      { label: '	SPASMO CIBALGIN  supp. For adult 440 mg+40 mg' },
      { label: '	SPASMIN paed.supp.' },
    ],
  },
  {
    label: '	HEXAMINE+KHELLIN+PIPERAZINE',
    tradeLabels: [
      { label: '	JEDCORENE sachet' },
      { label: '	COLI-URINAL effervescent granules' },
      { label: '	RENAL-S sachet' },
      { label: '	URICOL eff.granules' },
    ],
  },

  {
    label: '	HEXAMINE+PIPERAZINE',
    tradeLabels: [{ label: '	CILURYL EFFERVESCENT GRANULES' }],
  },
  {
    label: '	HEXAMINE+PIPERAZINE+PROXIMADIOL',
    tradeLabels: [{ label: '	PROXIMOL COMPOUND eff.granules' }],
  },
  {
    label: '	HEXBENDINE+ETHAMIVAN+ETOPHYLLINE',
    tradeLabels: [{ label: '	REMIND coated tab.' }],
  },

  {
    label: '	HEXETIDINE',
    tradeLabels: [{ label: '	ORALDENE 5mg/5ml mouth wash' }],
  },
  {
    label: '	HEXETIDINE+LIDOCAINE+METHYL SALICYLATE',
    tradeLabels: [{ label: '	CLINITOL mouth wash' }],
  },
  {
    label: '	HEXOBENDINE DIHYDROCHLORIDE',
    tradeLabels: [{ label: '	NORPROLAC 0.075mg tab.' }],
  },

  {
    label: '	CAFFEINE CITRATE',
    tradeLabels: [{ label: '	CAFFEINE CITRATE Vial' }],
  },
  { label: '	TICAGRELOR', tradeLabels: [] },
  { label: '	GRAPEFRUIT JUICE', tradeLabels: [] },
  { label: '	DAPOXETINE', tradeLabels: [] },
  { label: '	DABIGATRAN', tradeLabels: [] },

  {
    label: '	CALCIUM GLUCONATE',
    tradeLabels: [{ label: '	CALCIUM GLUCONATE 1% SOLN. AMP' }],
  },
  {
    label: '	CITACHOLINE',
    tradeLabels: [
      { label: '	SOMAZINA 1000 MG/10ML SYRUP' },
      { label: '	SOMAZINA 500 MG AMP.' },
    ],
  },

  {
    label: '	RIFAXIMIN',
    tradeLabels: [
      { label: '	GASTROBIOTIC 550 MG 30 TAB' },
      { label: '	IDIBACT 550 MG TAB' },
      { label: '	GASTROBIOTIC 200 MG 30 TAB' },
    ],
  },
  {
    label:
      '	 Sodium chloride, Potassium chloride, Calcium chloride and Sodium Bicarbonate',
    tradeLabels: [
      { label: '	RingerS solution' },
      { label: '	Ringer Acetate 500ml Motta.' },
    ],
  },
  { label: '	Human Albumin 50ml Infusion', tradeLabels: [] },

  { label: '	Glycophos Vial', tradeLabels: [] },
  { label: '	Lipitor 20mg Tab', tradeLabels: [] },
  { label: '	Unasyn 1.5gm Vial', tradeLabels: [] },
  { label: '	Dermazin Cream Tube', tradeLabels: [] },
  { label: '	Farcolin Solu.', tradeLabels: [] },
  { label: '	Calcionate Amp', tradeLabels: [] },

  { label: '	Controloc 40mg Amp', tradeLabels: [] },
  { label: '	Tavanic 500mg Vial', tradeLabels: [] },
  { label: '	Dalacin C 600mg Amp', tradeLabels: [] },
  { label: '	Windy Eff', tradeLabels: [] },
  { label: '	Dextrose 50% 500ml/otsuka', tradeLabels: [] },
  { label: '	Fucicort Cream', tradeLabels: [] },

  { label: '	Vancomix 1gm Vial', tradeLabels: [] },
  {
    label: '	ENTERAL NUTRITION',
    tradeLabels: [
      { label: '	Nuttrison Protein Plus' },
      { label: '	FRESUBIN 500 ml' },
      { label: '	DIASONE' },
      { label: '	ensure' },
    ],
  },
  {
    label: '	PARENTERAL NUTRITION',
    tradeLabels: [{ label: '	Vita Lipid-n-adult' }],
  },

  { label: '	Not drug related', tradeLabels: [] },
  { label: '	CEFOXITIN', tradeLabels: [] },
  { label: '	IMIPENEM', tradeLabels: [] },
  { label: '	NALIDIXIC ACID', tradeLabels: [] },
  {
    label: '	DEXTROSE+POTASSIUM CHLORIDE+SODIUM CHLORIDE',
    tradeLabels: [{ label: '	PANSOL soln.' }],
  },

  { label: '	BLOOD TRANSFUSION', tradeLabels: [{ label: '	PACKED RBCs' }] },
  {
    label: '	CALCIUM CITRATE + MAGNESIUM CITRATE',
    tradeLabels: [{ label: '	CAL MAG TABLET' }],
  },
  { label: '	AZTREONAM', tradeLabels: [{ label: '	AZACTAM 1000 MG VIAL' }] },

  {
    label: '	NON PHARMACOLOGICAL DVT PROPHYLAIS',
    tradeLabels: [{ label: '	MEDICAL SOCKS' }, { label: '	PNEUMATIC CUFF' }],
  },
  { label: '	WATER', tradeLabels: [{ label: '	DISTILLED WATER' }] },
  { label: '', tradeLabels: [] },

  {
    label: '	Epanutin 250 mg/amp.',
    tradeLabels: [{ label: '	Epanutin 250 mg/amp.' }],
  },
  { label: '	tavanic 750', tradeLabels: [{ label: '	tavani' }] },
  { label: '	REMIDISIVIR', tradeLabels: [{ label: '	Remidisvir' }] },

  { label: '	linzeolid', tradeLabels: [{ label: '	linzeolid 600mg' }] },
  { label: '	pirefenidone', tradeLabels: [{ label: '	pirefenidone' }] },
  { label: '	nitrofurantoine', tradeLabels: [{ label: '	uvamin retard' }] },

  {
    label: '	prepared ryle feeding',
    tradeLabels: [{ label: '	prepared ryle feeding' }],
  },
  {
    label: '	Aminoacid supplements',
    tradeLabels: [{ label: '	Aminoacid supplements' }],
  },
  { label: '	ACTILYSE', tradeLabels: [{ label: '	Alteplase' }] },

  { label: '	Oxygen therapy', tradeLabels: [{ label: '	Oxygen therapy' }] },
  { label: '	B.COM', tradeLabels: [{ label: '	B.COM IV' }] },
  { label: '	Amphotericin B', tradeLabels: [{ label: '	Amphotericin-B' }] },
  { label: '	fresubin', tradeLabels: [] },

  { label: '	Labipress', tradeLabels: [{ label: '	Labetalol 100mg' }] },
  { label: '	Lactoferrin', tradeLabels: [] },
  { label: '	Armodafinil', tradeLabels: [{ label: '	Armowake 50mg' }] },
  { label: '	targocid 200mg iv', tradeLabels: [] },

  { label: '	ticoplanin 200 IV', tradeLabels: [{ label: '	targocid 200' }] },
  { label: '	levetiracetam', tradeLabels: [{ label: '	Tiratam 500mg vial' }] },
  {
    label: '	Doxylamine succinate + pyridoxine',
    tradeLabels: [{ label: '	Vomibreak 10/10mg' }],
  },
  { label: '	 compression stocking', tradeLabels: [] },

  { label: '	ferusbin', tradeLabels: [{ label: '	ferusbin 2kcal' }] },
  { label: '	duloxetine', tradeLabels: [{ label: '	cymbatex  60mg' }] },
  { label: '	levofloxacin', tradeLabels: [{ label: '	levofloxacin 750mg' }] },

  { label: '	AMIODARONE', tradeLabels: [{ label: '	CORDARONE 150MG' }] },
  { label: '	bilastin', tradeLabels: [{ label: '	contrahistadine' }] },
  { label: '	loamotrigine', tradeLabels: [{ label: '	LAMICTAL' }] },

  {
    label: '	adamel + soluvit + vitalipid',
    tradeLabels: [{ label: '	Adamel + soluvit + vitalipid' }],
  },
  { label: '	thyroxin', tradeLabels: [{ label: '	L-troxin' }] },
  { label: '	nutrisone', tradeLabels: [{ label: '	Nutrisone' }] },

  { label: '	rotacystiene', tradeLabels: [{ label: '	rotacystiene' }] },
  { label: '	insulin +glucose', tradeLabels: [{ label: '	insulin+ glucose' }] },
  { label: '	AVEROZOLIDE VIAL', tradeLabels: [{ label: '	AVEROZOLIDE VIAL' }] },

  { label: '	Tigecycline', tradeLabels: [{ label: '	Tygacil 50mg' }] },
  { label: '	Blood transfusion', tradeLabels: [{ label: '	Blood transfusion' }] },
  { label: '	Packed RBCs', tradeLabels: [{ label: '	Packed RBCs' }] },

  { label: '	WATER ON RYLE', tradeLabels: [{ label: '	Water on ryle' }] },
  { label: '	Water on ryle', tradeLabels: [{ label: '	Water on ryle' }] },
  { label: '	glucose 50%', tradeLabels: [] },
  { label: '	glucose 50%', tradeLabels: [{ label: '	glucose 50%' }] },

  { label: '	ACYCLOVIR', tradeLabels: [{ label: '	ACYCLOVIR 250MG' }] },
  { label: '	Aspirin protect', tradeLabels: [{ label: '	Aspirin protect' }] },
  { label: '	Precedex 200MCG/2ML', tradeLabels: [{ label: '	DEXMEDETOMIDINE' }] },

  {
    label: '	RAMIPRIL5mg+FELODIPINE5mg',
    tradeLabels: [{ label: '	TRIACOR 5/5mg' }],
  },
  {
    label: '	FELODIPINE5mg+RAMIPRIL5mg',
    tradeLabels: [{ label: '	TRIACOR 5/5mg' }],
  },
  { label: '	sodium bicarbonate', tradeLabels: [{ label: '	Replaced' }] },
]

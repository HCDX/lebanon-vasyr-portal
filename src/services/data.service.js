/* The data service acts as a data provider for all components and pages
* the static data in this class can be later replaced by an API and connected through this service so minimum changes
* would need to happen in all the different components
*/
export default class DataService {
    topMenu = [
        {
            item: 'HOME',
            url: '/',
            isScrollable: true
        },
        {
            item: 'CHAPTERS',
            url: 'chapters',
            isScrollable: true
        },
        {
            item: 'MAPS',
            url: 'maps',
            isScrollable: true
        },
        {
            item: 'REPORTS',
            url: 'reports',
            isScrollable: true
        },
        {
            item: 'TOOLS',
            url: 'tools',
            isScrollable: true
        },
        {
            item: 'VAULT',
            url: 'vault',
            isScrollable: true
        }
    ];

    vasyrDownloadLinks = {
        '2019': '/files/vasyr_2019/VASyR 2019 18 DEC digital version.pdf',
        // '2018': 'link',
        // '2017': 'link',
        // '2016': 'link'
    };

    chaptersData = [
        {
            title: 'ASSISTANCE',
            description: `The Assistance chapter examines whether families are recipients of cash assistance and studies their access to household assets. Vulnerable Syrian refugees in Lebanon can receive two main types of assistance: cash assistance and in-kind support, both of which are aimed at covering their basic needs.`,
            image_url: 'images/chapters/ch-assistance.jpg',
            download_url: '/files/vasyr_chapters/1 VASyR 2019 Assistance & HH assets.pdf',
            knowledge_hub_url: '',
            textPosition: 'top'
        },
        {
            title: 'COPING STRATEGIES',
            description: `This chapter studies the range of strategies households employ in order to cope with a lack of food and/or the means to buy it. Coping mechanisms related to the household’s capacity to earn a sustainable income, are also examined.`,
            image_url: 'images/chapters/ch-coping-strategies.jpg',
            download_url: '/files/vasyr_chapters/2 VASyR 2019 Coping Strategies.pdf',
            knowledge_hub_url: '',
            textPosition: 'bottom'
        },
        {
            title: 'DEMOGRAPHICS',
            description: `This chapter contains the key demographic characteristics of the Syrian refugee population in Lebanon, including household composition, profile of the head of household, dependency and prevalence of certain specific needs.`,
            image_url: 'images/chapters/ch-demographics.jpg',
            download_url: '/files/vasyr_chapters/3 VASyR 2019 Demographics.pdf',
            knowledge_hub_url: '',
            textPosition: 'top'
        },
        {
            title: 'VULNERABILITY',
            description: `This chapter provides insight into the economic vulnerability of Syrian refugee households in Lebanon, studied on the dimensions of the composition and amount of expenditures, Survival and Minimum Expenditures Basket (S)MEB, and debt.`,
            image_url: 'images/chapters/ch-eco-vulnerability.jpg',
            download_url: '/files/vasyr_chapters/4 VASyR 2019 Economic Vulnerability.pdf',
            knowledge_hub_url: '',
            textPosition: 'top'
        },
        {
            title: 'ENERGY',
            description: `The Energy chapter analyses the access to electricity by Syrian refugee households in Lebanon. It also studies the hours of electricity supplied by the national grid versus private diesel generators, expenditure on electricity and bill collection, as well as the sources of energy used for heating and cooking.`,
            image_url: 'images/chapters/ch-energy.jpg',
            download_url: '/files/vasyr_chapters/5 VASyR 2019 Energy.pdf',
            knowledge_hub_url: '',
            textPosition: 'bottom'
        },
        {
            title: 'EDUCATION',
            description: `The Education chapter studies the school enrolment rates of Syrian refugee girls and boys aged 3 to 24 years old. It also analyses the reasons why children and youth were not enrolled in schools and examines the share of youth who were neither employed nor attending a training.`,
            image_url: 'images/chapters/ch-education.jpg',
            download_url: '/files/vasyr_chapters/6 VASyR 2019 Education.pdf',
            knowledge_hub_url: '',
            textPosition: 'top'
        },
        {
            title: 'FOOD CONSUMPTION',
            description: `This chapter examines food consumption indicators, which are essential for studying food security and classifying households according to their food security status. The dimensions considered in this chapter include food quantity, as well as food quality and diversity.`,
            image_url: 'images/chapters/ch-food-consumption.jpg',
            download_url: '/files/vasyr_chapters/7 VASyR 2019 Food Consumption.pdf',
            knowledge_hub_url: '',
            textPosition: 'top'
        },
        {
            title: 'FOOD SECURITY',
            description: `This chapter analyses the food security trends among Syrian refugee households in Lebanon, including the characteristics of food insecure households.  It also looks at differences in food security levels among districts and governorates.`,
            image_url: 'images/chapters/ch-food-security.jpg',
            download_url: '/files/vasyr_chapters/8 VASyR 2019 Food Security.pdf',
            knowledge_hub_url: '',
            textPosition: 'bottom'
        },
        {
            title: 'GENDER',
            description: `This section explores the gender dimensions of vulnerabilities faced by Syrian refugees in Lebanon and identifies gender-based differences and inequalities.`,
            image_url: 'images/chapters/ch-gender.jpg',
            // download_url: '/files/vasyr_chapters/1 VASyR 2019 Assistance & HH assets.pdf',
            knowledge_hub_url: '',
            textPosition: 'top'
        },
        {
            title: 'HEALTH',
            description: `The Health chapter studies access of Syrian refugee households to needed health care, which is available to refugees through primary health care outlets, hospitals and mobile medical units. Barriers to healthcare access are also examined.`,
            image_url: 'images/chapters/ch-health.jpg',
            download_url: '/files/vasyr_chapters/9 VASyR 2019 Health.pdf',
            knowledge_hub_url: '',
            textPosition: 'top'
        },
        {
            title: 'LIVELIHOODS',
            description: `This chapter provides  insight into income-generating activities, including the type of work and wages earned, as well as employment and unemployment levels and number of days worked, all measured at an individual level. Questions were asked at a household level to assess the main reliance of income sources for each household.`,
            image_url: 'images/chapters/ch-livelihoods.jpg',
            download_url: '/files/vasyr_chapters/10 VASyR 2019 Livelihoods and Income.pdf',
            knowledge_hub_url: '',
            textPosition: 'bottom'
        },
        {
            title: 'PROTECTION',
            description: `The Protection chapter offers an analysis of the protection space for Syrian refugees in Lebanon through key indicators, including legal residency and birth- and marriage registration. Protection indicators also include those related to safety and security, as well as community relations. The child protection space is studied through child labour and child marriage indicators.`,
            image_url: 'images/chapters/ch-protection.jpg',
            download_url: '/files/vasyr_chapters/11 VASyR 2019 Protection.pdf',
            knowledge_hub_url: '',
            textPosition: 'top'
        },
        {
            title: 'SHELTER',
            description: `While the majority of Syrian refugees live in cities and villages, the remaining percentage live in spontaneously set-up tented settlements throughout the country. The Shelter chapter summarizes the physical conditions of all types of refugee settlements, as well as occupancy agreements and rental costs. It also studies the mobility of households between places of residence, which includes the reasons of eviction.`,
            image_url: 'images/chapters/ch-shelter.jpg',
            download_url: '/files/vasyr_chapters/12 VASyR 2019 Shelter.pdf',
            knowledge_hub_url: '',
            textPosition: 'top'
        },
        {
            title: 'WASH',
            description: `The WASH chapter examines access to drinking water and other water sources, as well as the sanitation and hygiene situation of Syrian refugee households in Lebanon.`,
            image_url: 'images/chapters/ch-wash.jpg',
            download_url: '/files/vasyr_chapters/13 VASyR 2019 WASH.pdf',
            knowledge_hub_url: '',
            textPosition: 'bottom'
        }
    ]

    roadMapData = [
        {
            title: 'CHAPTERS',
            description: `Here is where you can download individual VASyR thematic chapters in pdf.`,
            icon: '/icons/icon-chapters.png',
            top: true,
            scrollLocation: 'chapters'
        },
        {
            title: 'MAPS',
            description: `The Dynamic Maps are an interactive tool to help you visualize VASyR data. You will find maps here visualizing VASyR data from the past three years, allowing for geographical comparison.`,
            icon: '/icons/icon-maps.png',
            top: false,
            scrollLocation: 'maps'
        },
        {
            title: 'REPORTS',
            description: `Download the full publication in pdf here.`,
            icon: '/icons/icon-report.png',
            top: true,
            scrollLocation: 'reports'
        },
        {
            title: 'VAULT',
            description: `The VAULT is where you can find data tabulations for each chapter and theme, with information disaggregated per governorate, district, gender and other aspects. The VAULT can be of particular help for those wanting to have a more detailed look at VASyR data.`,
            icon: '/icons/icon-vault.png',
            top: false,
            scrollLocation: 'vault'
        },
        {
            title: 'TOOLS',
            description: `If you are an NGO designing an assessment, you can find a variety of resources in the Tools section, including the VASyR questionnaire, quality assurance & monitoring documents and enumerator training materials.`,
            icon: '/icons/icon-tools.png',
            top: true,
            scrollLocation: 'tools'
        },
        {
            title: 'REQUEST',
            description: `If you would like to access the full- or part of the VASyR dataset, please submit your request here. This section is particularly relevant for researchers or anyone willing to develop their own analysis using VASyR data.`,
            icon: '/icons/icon-requests.png',
            top: false,
            url: 'http://ialebanon.unhcr.org/DataHub/'
        }
    ];
    
    maps = [
        {
            title: 'Maps Gateway',
            url: 'https://app.powerbi.com/view?r=eyJrIjoiYjAwOGE4NjYtY2QxNy00YmIxLWFmNzEtZTUxZGJiMDE5YWJiIiwidCI6ImU1YzM3OTgxLTY2NjQtNDEzNC04YTBjLTY1NDNkMmFmODBiZSIsImMiOjh9',
            image: '/images/maps/maps-dashboard.png',
            description: 'This will take you to the maps page'
        },
        // {
        //     title: 'Health Getaways',
        //     url: 'link',
        //     image: '/images/maps/health-getaways.png',
        //     description: 'This is the map description if needed to be added'
        // },
        // {
        //     title: 'Informal Setlements - Flood Risks and Snow Accumulation',
        //     url: 'link',
        //     image: '/images/maps/informal-settlements.png',
        //     description: 'This is the map description if needed to be added'
        // },
        // {
        //     title: 'Shelter Upgraded 2015-2018',
        //     url: 'link',
        //     image: '/images/maps/shelter-upgraded.png',
        //     description: 'This is the map description if needed to be added'
        // },
        // {
        //     title: 'Shelter National Gap Analysis 2018',
        //     url: 'link',
        //     image: '/images/maps/shelter-national-gap.png',
        //     description: 'This is the map description if needed to be added'
        // },
        // {
        //     title: 'Informal Settlements (IAMP 57)',
        //     url: 'link',
        //     image: '/images/maps/informal-settlements-iamp57.png',
        //     description: 'This is the map description if needed to be added'
        // },
        // {
        //     title: 'Out of School Children - June 2016',
        //     url: 'link',
        //     image: '/images/maps/out-of-school-children.png',
        //     description: 'This is the map description if needed to be added'
        // },
        // {
        //     title: 'Social Development Center',
        //     url: 'link',
        //     image: '/images/maps/social-development.png',
        //     description: 'This is the map description if needed to be added'
        // },
        // {
        //     title: 'Lebanon Admin',
        //     url: 'link',
        //     image: '/images/maps/lebanon-admin.png',
        //     description: 'This is the map description if needed to be added'
        // }
    ];

    reportsData = [
        {
            title: 'VASyR 2019',
            year: '2019',
            image_url: '/images/reports/vasyr-2019.jpg',
            download_url: '/files/vasyr_2019/VASyR 2019 18 DEC digital version.pdf'
        },
        {
            title: 'VASyR 2018',
            year: '2018',
            image_url: '/images/reports/vasyr-2018.jpg',
            download_url: '/files/previous_vasyr_reports/vasyr-2018.pdf'
        },
        {
            title: 'VASyR 2017',
            year: '2017',
            image_url: '/images/reports/vasyr-2017.jpg',
            download_url: '/files/previous_vasyr_reports/vasyr-2017.pdf'
        },
        {
            title: 'VASyR 2016',
            year: '2016',
            image_url: '/images/reports/vasyr-2016.jpg',
            download_url: '/files/previous_vasyr_reports/vasyr-2016.pdf'
        },
        {
            title: 'VASyR 2015',
            year: '2015',
            image_url: '/images/reports/vasyr-2015.jpg',
            download_url: '/files/previous_vasyr_reports/vasyr-2015.pdf'
        },
        {
            title: 'VASyR 2014',
            year: '2014',
            image_url: '/images/reports/vasyr-2014.jpg',
            download_url: '/files/previous_vasyr_reports/vasyr-2014.pdf'
        },
        {
            title: 'VASyR 2013',
            year: '2013',
            image_url: '/images/reports/vasyr-2013.jpg',
            download_url: '/files/previous_vasyr_reports/vasyr-2013.pdf'
        }
    ];

    toolsData = [
        {
            title: 'VASyR Questionnaire',
            icon: '/icons/tools-question.png',
            url: 'https://data2.unhcr.org/en/documents/details/71337',
            description: 'This will take you to the questionnaire page'
        },
        {
            title: 'VASyR Data Quality Assurance',
            icon: '/icons/tools-data-quality.png',
            download_url: '/files/vasyr_tools/VASyR_for_Web.zip',
            description: 'This downloads the vasyr data quality assurance tools'
        },
        {
            title: 'Training Material',
            icon: '/icons/tools-training-material.png',
            download_url: '/files/vasyr_tools/VASyR_TRAININGS.zip',
            description: 'This downloads the vasyr training tools'
        },
        {
            title: 'Site Code',
            icon: '/icons/tools-code.png',
            url: 'https://github.com/HCDX/lebanon-vasyr-portal',
            description: 'This takes you to the github repository'
        }
    ];

    vaultData = [
        {
            'id': 'De1',
            'sector': 'Demographics',
            'indicator': 'Average household size',
            'year': '2018',
            'download_link': '/files/demographics/De1.xlsx'
        },
        {
            'id': 'De2',
            'sector': 'Demographics',
            'indicator': 'Household size (by size categories)',
            'year': '2018',
            'download_link': '/files/demographics/De2.xlsx'
        },
        {
            'id': 'De3',
            'sector': 'Demographics',
            'indicator': 'Head of HH by gender',
            'year': '2018',
            'download_link': '/files/demographics/De3.xlsx'
        },
        {
            'id': 'De4',
            'sector': 'Demographics',
            'indicator': '% HHs with a dependency ratio',
            'year': '2018',
            'download_link': '/files/demographics/De4.xlsx'
        },
        {
            'id': 'De5',
            'sector': 'Demographics',
            'indicator': '% HHs who reported all household members arriving to Lebanon at the same time',
            'year': '2018',
            'download_link': '/files/demographics/De5.xlsx'
        },
        {
            'id': 'De6',
            'sector': 'Demographics',
            'indicator': 'Average dependency ratio',
            'year': '2018',
            'download_link': '/files/demographics/De6.xlsx'
        },
        {
            'id': 'De7',
            'sector': 'Demographics',
            'indicator': 'Gender ',
            'year': '2018',
            'download_link': '/files/demographics/De7.xlsx'
        },
        {
            'id': 'De8',
            'sector': 'Demographics',
            'indicator': '% HHs with 100% dependents',
            'year': '2018',
            'download_link': '/files/demographics/De8.xlsx'
        },
        {
            'id': 'De9',
            'sector': 'Demographics',
            'indicator': 'Average age range of interviewees',
            'year': '2018',
            'download_link': '/files/demographics/De9.xlsx'
        },
        {
            'id': 'De10',
            'sector': 'Demographics',
            'indicator': '% Child headed households with dependents ',
            'year': '2018',
            'download_link': '/files/demographics/De10.xlsx'
        },
        {
            'id': 'De11',
            'sector': 'Demographics',
            'indicator': '% HH with child head of household (<15 years old)',
            'year': '2018',
            'download_link': '/files/demographics/De11.xlsx'
        },
        {
            'id': 'De12',
            'sector': 'Demographics',
            'indicator': '% HH with child head of household (<18 years old)',
            'year': '2018',
            'download_link': '/files/demographics/De12.xlsx'
        },
        {
            'id': 'De13',
            'sector': 'Demographics',
            'indicator': '% of child headed households with head of household between 15 and 18 years ',
            'year': '2018',
            'download_link': '/files/demographics/De13.xlsx'
        },
        {
            'id': 'De14',
            'sector': 'Demographics',
            'indicator': '% of HH with elderly head of household',
            'year': '2018',
            'download_link': '/files/demographics/De14.xlsx'
        },
        {
            'id': 'De15',
            'sector': 'Demographics',
            'indicator': '% of HH with female head of household',
            'year': '2018',
            'download_link': '/files/demographics/De15.xlsx'
        },
        {
            'id': 'De16',
            'sector': 'Demographics',
            'indicator': '% of HH with male head of household',
            'year': '2018',
            'download_link': '/files/demographics/De16.xlsx'
        },
        {
            'id': 'De17',
            'sector': 'Demographics',
            'indicator': '% of HHs with dependents',
            'year': '2018',
            'download_link': '/files/demographics/De17.xlsx'
        },
        {
            'id': 'De18',
            'sector': 'Demographics',
            'indicator': '% of HH with at least one member with specific needs',
            'year': '2018',
            'download_link': '/files/demographics/De18.xlsx'
        },
        {
            'id': 'EC1',
            'sector': 'Economic Vulnerability',
            'indicator': '% of HHs who borrowed money in the past three months along with reason for borrowing and source',
            'year': '2018',
            'download_link': '/files/economic_vulnerability/EC1.xlsx'
        },
        {
            'id': 'EC2',
            'sector': 'Economic Vulnerability',
            'indicator': 'Debt per Household & per capita ',
            'year': '2018',
            'download_link': '/files/economic_vulnerability/EC2.xlsx'
        },
        {
            'id': 'EC3',
            'sector': 'Economic Vulnerability',
            'indicator': 'Household MEB/SMEB Categories',
            'year': '2018',
            'download_link': '/files/economic_vulnerability/EC3.xlsx'
        },
        {
            'id': 'EC4',
            'sector': 'Economic Vulnerability',
            'indicator': 'Poverty Line per Capita per Day ',
            'year': '2018',
            'download_link': '/files/economic_vulnerability/EC4.xlsx'
        },
        {
            'id': 'EC5',
            'sector': 'Economic Vulnerability',
            'indicator': '% of HHs by debt categories',
            'year': '2018',
            'download_link': '/files/economic_vulnerability/EC5.xlsx'
        },
        {
            'id': 'CP1',
            'sector': 'Child Protection',
            'indicator': 'Child labour (age 5-17)',
            'year': '2018',
            'download_link': '/files/child_protection/CP1.xlsx'
        },
        {
            'id': 'CP2',
            'sector': 'Child Protection',
            'indicator': 'Child Labour by type of labour (economic activities vs. household chores)',
            'year': '2018',
            'download_link': '/files/child_protection/CP2.xlsx'
        },
        {
            'id': 'CP3',
            'sector': 'Child Protection',
            'indicator': 'Children under 18 years old that have experienced at least one form of violent discipline',
            'year': '2018',
            'download_link': '/files/child_protection/CP3.xlsx'
        },
        {
            'id': 'CP4',
            'sector': 'Child Protection',
            'indicator': 'Women age 15-19 years currently married',
            'year': '2018',
            'download_link': '/files/child_protection/CP4.xlsx'
        },
        {
            'id': 'HE1',
            'sector': 'Health',
            'indicator': '% HH that required primary health care',
            'year': '2018',
            'download_link': '/files/health/HE1.xlsx'
        },
        {
            'id': 'HE2',
            'sector': 'Health',
            'indicator': '% HH that received the required primary health care asisstance',
            'year': '2018',
            'download_link': '/files/health/HE2.xlsx'
        },
        {
            'id': 'HE3',
            'sector': 'Health',
            'indicator': 'Method of accessing primary healthcare',
            'year': '2018',
            'download_link': '/files/health/HE3.xlsx'
        },
        {
            'id': 'HE4',
            'sector': 'Health',
            'indicator': '% of households that required hospital health care',
            'year': '2018',
            'download_link': '/files/health/HE4.xlsx'
        },
        {
            'id': 'HE5',
            'sector': 'Health',
            'indicator': '% HH that received the required hospital health care',
            'year': '2018',
            'download_link': '/files/health/HE5.xlsx'
        },
        {
            'id': 'HE6',
            'sector': 'Health',
            'indicator': '% HH that know where to access medical services/assistance in case of emergency',
            'year': '2018',
            'download_link': '/files/health/HE6.xlsx'
        },
        {
            'id': 'FO1',
            'sector': 'Food Security',
            'indicator': 'Food Consumption (diet, weekly consumption, score, number of meals consumed)',
            'year': '2018',
            'download_link': '/files/food_security/FO1.xlsx'
        },
        {
            'id': 'FO2',
            'sector': 'Food Security',
            'indicator': 'Vitamin, Iron, Protetin Consumption',
            'year': '2018',
            'download_link': '/files/food_security/FO2.xlsx'
        },
        {
            'id': 'FO3',
            'sector': 'Food Security',
            'indicator': 'Expenditure share by category',
            'year': '2018',
            'download_link': '/files/food_security/FO3.xlsx'
        },
        {
            'id': 'FO4',
            'sector': 'Food Security',
            'indicator': 'Food related coping strategies in the last 7 days ',
            'year': '2018',
            'download_link': '/files/food_security/FO4.xlsx'
        },
        {
            'id': 'FO5',
            'sector': 'Food Security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days',
            'year': '2018',
            'download_link': '/files/food_security/FO5.xlsx'
        },
        {
            'id': 'FO6',
            'sector': 'Food Security',
            'indicator': 'Reduced Coping Strategy Index',
            'year': '2018',
            'download_link': '/files/food_security/FO6.xlsx'
        },
        {
            'id': 'FO7',
            'sector': 'Food Security',
            'indicator': 'Food Security Classification',
            'year': '2018',
            'download_link': '/files/food_security/FO7.xlsx'
        },
        {
            'id': 'ED1',
            'sector': 'Education',
            'indicator': 'Reasons for not attending school',
            'year': '2018',
            'download_link': '/files/education/ED1.xlsx'
        },
        {
            'id': 'ED2',
            'sector': 'Education',
            'indicator': 'Reasons for disabled children and adolescents not attending school',
            'year': '2018',
            'download_link': '/files/education/ED2.xlsx'
        },
        {
            'id': 'ED3',
            'sector': 'Education',
            'indicator': 'Primary school net attendance ratio (adjusted)',
            'year': '2018',
            'download_link': '/files/education/ED3.xlsx'
        },
        {
            'id': 'ED4',
            'sector': 'Education',
            'indicator': 'Lower secondary school net attendance ratio (adjusted)',
            'year': '2018',
            'download_link': '/files/education/ED4.xlsx'
        },
        {
            'id': 'ED5',
            'sector': 'Education',
            'indicator': 'Not in Education, Employment or Training (NEET)',
            'year': '2018',
            'download_link': '/files/education/ED5.xlsx'
        },
        {
            'id': 'ED6',
            'sector': 'Education',
            'indicator': 'Reasons provided by refugee youth respondents aged 15 -18 years for school dropout',
            'year': '2018',
            'download_link': '/files/education/ED6.xlsx'
        },
        {
            'id': 'ED7',
            'sector': 'Education',
            'indicator': 'Reasons provided by refugee youth respondents aged 19 -24 years for school dropout',
            'year': '2018',
            'download_link': '/files/education/ED7.xlsx'
        },
        {
            'id': 'PR1',
            'sector': 'Protection',
            'indicator': 'Legal residency of individuals above 15 years old',
            'year': '2018',
            'download_link': '/files/protection/PR1.xlsx'
        },
        {
            'id': 'PR2',
            'sector': 'Protection',
            'indicator': 'Level of birth registration',
            'year': '2018',
            'download_link': '/files/protection/PR2.xlsx'
        },
        {
            'id': 'PR3',
            'sector': 'Protection',
            'indicator': 'Legal residency at  household level',
            'year': '2018',
            'download_link': '/files/protection/PR3.xlsx'
        },
        {
            'id': 'PR4',
            'sector': 'Protection',
            'indicator': 'Level of marriage documentation for those married in Lebanon',
            'year': '2018',
            'download_link': '/files/protection/PR4.xlsx'
        },
        {
            'id': 'PR5',
            'sector': 'Protection',
            'indicator': '% HHs who received an eviction notice and/or any other threat of removal in the last 6 months and HHs above/below S/MEB',
            'year': '2018',
            'download_link': '/files/protection/PR5.xlsx'
        },
        {
            'id': 'PR6',
            'sector': 'Protection',
            'indicator': '% HHs who received an eviction notice and/or any other threat of removal in the last 6 months and legal residency',
            'year': '2018',
            'download_link': '/files/protection/PR6.xlsx'
        },
        {
            'id': 'PR7',
            'sector': 'Protection',
            'indicator': ' % HHs who received an eviction notice and/or any other threat of removal in the last 6 months and % expenditure on food',
            'year': '2018',
            'download_link': '/files/protection/PR7.xlsx'
        },
        {
            'id': 'PR8',
            'sector': 'Protection',
            'indicator': '% HHs that received an eviction notice or other threat of removal in the past 6 months with type of occupancy',
            'year': '2018',
            'download_link': '/files/protection/PR8.xlsx'
        },
        {
            'id': 'PR9',
            'sector': 'Protection',
            'indicator': '% HHs that received an eviction notice or other threat of removal in the past 6 months with type of housing',
            'year': '2018',
            'download_link': '/files/protection/PR9.xlsx'
        },
        {
            'id': 'PR10',
            'sector': 'Protection',
            'indicator': '% HHs that received an eviction notice or other threat of removal in the past 6 months and HHs adopting specific coping strategies',
            'year': '2018',
            'download_link': '/files/protection/PR10.xlsx'
        },
        {
            'id': 'PR11',
            'sector': 'Protection',
            'indicator': 'Average HH size that received an eviction notice or other threat of removal in the past 6 months',
            'year': '2018',
            'download_link': '/files/protection/PR11.xlsx'
        },
        {
            'id': 'SH1',
            'sector': 'Shelter',
            'indicator': '% of households with sufficient access to essential household assets',
            'year': '2018',
            'download_link': '/files/shelter/SH1.xlsx'
        },
        {
            'id': 'SH2',
            'sector': 'Shelter',
            'indicator': 'Detailed conditions in surrounding setting, for those in an area with physical security threats',
            'year': '2018',
            'download_link': '/files/shelter/SH2.xlsx'
        },
        {
            'id': 'SH3',
            'sector': 'Shelter',
            'indicator': '% of households in different monthly rent categories',
            'year': '2018',
            'download_link': '/files/shelter/SH3.xlsx'
        },
        {
            'id': 'SH4',
            'sector': 'Shelter',
            'indicator': 'Services included in rental payments',
            'year': '2018',
            'download_link': '/files/shelter/SH4.xlsx'
        },
        {
            'id': 'SH5',
            'sector': 'Shelter',
            'indicator': 'Types of rental agreements',
            'year': '2018',
            'download_link': '/files/shelter/SH5.xlsx'
        },
        {
            'id': 'SH6',
            'sector': 'Shelter',
            'indicator': 'Reasons for selecting a place of residence',
            'year': '2018',
            'download_link': '/files/shelter/SH6.xlsx'
        },
        {
            'id': 'SH7',
            'sector': 'Shelter',
            'indicator': 'Distribution of HHs among the three shelter categories',
            'year': '2018',
            'download_link': '/files/shelter/SH7.xlsx'
        },
        {
            'id': 'SH8',
            'sector': 'Shelter',
            'indicator': 'Detailed conditions in surrounding setting, for those in an area with poor sanitation conditions',
            'year': '2018',
            'download_link': '/files/shelter/SH8.xlsx'
        },
        {
            'id': 'SH9',
            'sector': 'Shelter',
            'indicator': 'Density and overcrowding',
            'year': '2018',
            'download_link': '/files/shelter/SH9.xlsx'
        },
        {
            'id': 'SH10',
            'sector': 'Shelter',
            'indicator': 'Period of rental agreement',
            'year': '2018',
            'download_link': '/files/shelter/SH10.xlsx'
        },
        {
            'id': 'SH11',
            'sector': 'Shelter',
            'indicator': 'Monthly average and median Rental Cost in USD',
            'year': '2018',
            'download_link': '/files/shelter/SH11.xlsx'
        },
        {
            'id': 'SH12',
            'sector': 'Shelter',
            'indicator': 'Distribution of HHs among the different shelter types',
            'year': '2018',
            'download_link': '/files/shelter/SH12.xlsx'
        },
        {
            'id': 'SH13',
            'sector': 'Shelter',
            'indicator': 'Percentage of HHs sharing toilets/latrines',
            'year': '2018',
            'download_link': '/files/shelter/SH13.xlsx'
        },
        {
            'id': 'SH14',
            'sector': 'Shelter',
            'indicator': ' % HH that received an eviction notice or other threat of removal in the past 6 months',
            'year': '2018',
            'download_link': '/files/shelter/SH14.xlsx'
        },
        {
            'id': 'SH15',
            'sector': 'Shelter',
            'indicator': 'Source of eviction notice',
            'year': '2018',
            'download_link': '/files/shelter/SH15.xlsx'
        },
        {
            'id': 'SH16',
            'sector': 'Shelter',
            'indicator': '% HH who had an incident with their current landlord in the past 6 months',
            'year': '2018',
            'download_link': '/files/shelter/SH16.xlsx'
        },
        {
            'id': 'SH17',
            'sector': 'Shelter',
            'indicator': 'Incidents with landlord in the past 6 months',
            'year': '2018',
            'download_link': '/files/shelter/SH17.xlsx'
        },
        {
            'id': 'SH18',
            'sector': 'Shelter',
            'indicator': ' % HH moved in the past 6 months',
            'year': '2018',
            'download_link': '/files/shelter/SH18.xlsx'
        },
        {
            'id': 'SH19',
            'sector': 'Shelter',
            'indicator': 'Reasons for changing accomodation in the past 6 months',
            'year': '2018',
            'download_link': '/files/shelter/SH19.xlsx'
        },
        {
            'id': 'SH20',
            'sector': 'Shelter',
            'indicator': 'Length of time living in current shelter',
            'year': '2018',
            'download_link': '/files/shelter/SH20.xlsx'
        },
        {
            'id': 'SH21',
            'sector': 'Shelter',
            'indicator': 'Type of previous shelter, for those who have moved in the past 6 months',
            'year': '2018',
            'download_link': '/files/shelter/SH21.xlsx'
        },
        {
            'id': 'SH22',
            'sector': 'Shelter',
            'indicator': '% HH planning to move in the next 6 months',
            'year': '2018',
            'download_link': '/files/shelter/SH22.xlsx'
        },
        {
            'id': 'SH23',
            'sector': 'Shelter',
            'indicator': 'Reasons for planning to change accomodation, for those planning to move in the next 6 months',
            'year': '2018',
            'download_link': '/files/shelter/SH23.xlsx'
        },
        {
            'id': 'SH24',
            'sector': 'Shelter',
            'indicator': 'Future type of accomodation, for those planning to move in the past 6 months',
            'year': '2018',
            'download_link': '/files/shelter/SH24.xlsx'
        },
        {
            'id': 'SH25',
            'sector': 'Shelter',
            'indicator': 'HHs who have been evicted during their stay in Lebanon',
            'year': '2018',
            'download_link': '/files/shelter/SH25.xlsx'
        },
        {
            'id': 'SH26',
            'sector': 'Shelter',
            'indicator': 'Shelter conditions of HHs',
            'year': '2018',
            'download_link': '/files/shelter/SH26.xlsx'
        },
        {
            'id': 'SH27',
            'sector': 'Shelter',
            'indicator': 'Type of occupancy',
            'year': '2018',
            'download_link': '/files/shelter/SH27.xlsx'
        },
        {
            'id': 'SH28',
            'sector': 'Shelter',
            'indicator': 'Conditions in surrounding setting',
            'year': '2018',
            'download_link': '/files/shelter/SH28.xlsx'
        },
        {
            'id': 'EV20191',
            'sector': 'Economic Vulnerability',
            'indicator': 'SMEB and POVERTY',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV20192',
            'sector': 'Economic Vulnerability',
            'indicator': 'Percentage of Household living under Minimum Expenditure Basket (MEB) and Survival Minimum Expenditure Basket (SMEB) Categories',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV20193',
            'sector': 'Economic Vulnerability',
            'indicator': 'Percentage of households living below/above Poverty Line ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV20194',
            'sector': 'Economic Vulnerability',
            'indicator': 'Households by debt category',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV20195',
            'sector': 'Economic Vulnerability',
            'indicator': 'Average Debt per Household (all Households) ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV20196',
            'sector': 'Economic Vulnerability',
            'indicator': 'Average Debt per Capita (all Households) ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV20197',
            'sector': 'Economic Vulnerability',
            'indicator': 'Average Debt per Household (only Households with Debt) 	',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV20198',
            'sector': 'Economic Vulnerability',
            'indicator': 'Average Debt per Capita (only Households with Debt) 	',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV20199',
            'sector': 'Economic Vulnerability',
            'indicator': 'Percentage of Households who Borrowed Money in the past 3 Months ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201910',
            'sector': 'Economic Vulnerability',
            'indicator': 'Reason for Borrowing: Debt Repayment',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201911',
            'sector': 'Economic Vulnerability',
            'indicator': 'Reason for Borrowing: Business Development',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201912',
            'sector': 'Economic Vulnerability',
            'indicator': 'Reason for Borrowing: Assets Procurement',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201913',
            'sector': 'Economic Vulnerability',
            'indicator': 'Reason for Borrowing: Pay Documentation fees',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201914',
            'sector': 'Economic Vulnerability',
            'indicator': 'Reason for Borrowing: Other reasons',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201915',
            'sector': 'Economic Vulnerability',
            'indicator': 'Reason for Borrowing: Buy Food',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201916',
            'sector': 'Economic Vulnerability',
            'indicator': 'Reason for Borrowing: Pay Rent',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201917',
            'sector': 'Economic Vulnerability',
            'indicator': 'Reason for Borrowing: Buy Shelter Material',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201918',
            'sector': 'Economic Vulnerability',
            'indicator': 'Reason for Borrowing: Buy House',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201919',
            'sector': 'Economic Vulnerability',
            'indicator': 'Reason for Borrowing: Pay Health',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201920',
            'sector': 'Economic Vulnerability',
            'indicator': 'Reason for Borrowing: Buy Medicine',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201921',
            'sector': 'Economic Vulnerability',
            'indicator': 'Reason for Borrowing: Buy Water',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201922',
            'sector': 'Economic Vulnerability',
            'indicator': 'Reason for Borrowing: Pay Transportation',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201923',
            'sector': 'Economic Vulnerability',
            'indicator': 'Source of Borrowing: Friends in Lebanon',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201924',
            'sector': 'Economic Vulnerability',
            'indicator': 'Source of Borrowing: Friends not in Lebanon',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201925',
            'sector': 'Economic Vulnerability',
            'indicator': 'Source of Borrowing: Money Lender',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201926',
            'sector': 'Economic Vulnerability',
            'indicator': 'Source of Borrowing:  Local Charity',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201927',
            'sector': 'Economic Vulnerability',
            'indicator': 'Source of Borrowing: Landlord',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201928',
            'sector': 'Economic Vulnerability',
            'indicator': 'Source of Borrowing: Supermarket',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201929',
            'sector': 'Economic Vulnerability',
            'indicator': 'Source of Borrowing: Shawish',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'EV201930',
            'sector': 'Economic Vulnerability',
            'indicator': 'Source of Borrowing: Other',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_MEB_SMEB.xlsx'
        },
        {
            'id': 'LIV20191',
            'sector': 'Livelihoods',
            'indicator': 'Reason for unemployment',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx'
        },
        {
            'id': 'LIV20192',
            'sector': 'Livelihoods',
            'indicator': 'Percent of working age (over 15) that stated Legal residency as a reason for unemployment',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx'
        },
        {
            'id': 'LIV20193',
            'sector': 'Livelihoods',
            'indicator': 'Percent of working age (over 15) that stated Dependent children as a reason for unemployment',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx'
        },
        {
            'id': 'LIV20194',
            'sector': 'Livelihoods',
            'indicator': 'Percent of working age (over 15) that stated Gender considerations as a reason for unemployment',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx'
        },
        {
            'id': 'LIV20195',
            'sector': 'Livelihoods',
            'indicator': 'Percent of working age (over 15) that stated Lack of skill/experience as a reason for unemployment',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx'
        },
        {
            'id': 'LIV20196',
            'sector': 'Livelihoods',
            'indicator': 'Percent of working age (over 15) that stated Continuing Education as a reason for unemployment',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx'
        },
        {
            'id': 'LIV20197',
            'sector': 'Livelihoods',
            'indicator': 'Percent of working age (over 15) that stated Has been subject to serious abuse/exploitation in previous work as a reason for unemployment',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx'
        },
        {
            'id': 'LIV20198',
            'sector': 'Livelihoods',
            'indicator': 'Percent of working age (over 15) that stated Unwillingness to work as a reason for unemployment',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx'
        },
        {
            'id': 'LIV20199',
            'sector': 'Livelihoods',
            'indicator': 'Percent of working age (over 15) that stated Elderly as a reason for unemployment',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx'
        },
        {
            'id': 'LIV201910',
            'sector': 'Livelihoods',
            'indicator': 'Percent of working age (over 15) that stated Other as a reason for unemployment',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx'
        },
        {
            'id': 'LIV201911',
            'sector': 'Livelihoods',
            'indicator': 'Income and livelihood HH level',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201912',
            'sector': 'Livelihoods',
            'indicator': 'Percentage of Households with members working in the past 7 days ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201913',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Agriculture',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201914',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Begging',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201915',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Cash from charitable organizations',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201916',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Cash from humanitarian organizations',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201917',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Concierge',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201918',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Construction',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201919',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Credit/debts (formal  banks)',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201920',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Credit/debts (informal)shops, friends hosts)',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201921',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: E-cards WFP FOOD',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201922',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Gifts from family/relatives',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201923',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Manufacturing',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201924',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Other (specify)',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201925',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Other services: hotel, restaurant, transport, personal services',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201926',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Other types of sales',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201927',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Professional Services',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201928',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Remittances',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201929',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Sale of assets (car, bicycle, refrigerator, TV, jewelry)',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201930',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Sale of crops ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201931',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Sale of livestock and animal produce    ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201932',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Sale of food assistance',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201933',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Savings',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201934',
            'sector': 'Livelihoods',
            'indicator': 'Main household source of income: Wholesale and retail trade;',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201935',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Agriculture',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201936',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Begging',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201937',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Cash from charitable organizations',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201938',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): ATM Cards/Cash from humanitarian organizations',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201939',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Concierge',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201940',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Construction',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201941',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Credit/debts (formal  banks)',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201942',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Credit/debts (informal)shops, friends hosts)',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201943',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): E-cards WFP FOOD',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201944',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Gifts from family/relatives',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201945',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Manufacturing',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201946',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Other',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201947',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Other services: hotel, restaurant, transport, personal services',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201948',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Other types of sales',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201949',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Professional Services',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201950',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Remittances',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201951',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Sale of assets (car, bicycle, refrigerator, TV, jewelry)',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201952',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Sale of crops ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201953',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Sale of livestock and animal produce    ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201954',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Sale of non-food assistance',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201955',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Wholesale and retail trade;',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'LIV201956',
            'sector': 'Livelihoods',
            'indicator': 'Cash and income sources reported by household (three main sources): Sale of food aid (food vouchers or parcels) ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx'
        },
        {
            'id': 'FS20191',
            'sector': 'Food security',
            'indicator': 'Food related coping strategies: Restricted Food Consumption of Female Head of Households',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS20192',
            'sector': 'Food security',
            'indicator': 'Food related coping strategies: Relied on Less Preferred/Less Expensive Food',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS20193',
            'sector': 'Food security',
            'indicator': 'Food related coping strategies: Borrowed Food or Relied on Help from Friends or Relatives',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS20194',
            'sector': 'Food security',
            'indicator': 'Food related coping strategies: Reduced the Number of Meals Eaten per Day',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS20195',
            'sector': 'Food security',
            'indicator': 'Food related coping strategies: Reduced portion size of meals',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS20196',
            'sector': 'Food security',
            'indicator': 'Food related coping strategies: Spent Days without Eating',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS20197',
            'sector': 'Food security',
            'indicator': 'Food related coping strategies: Restricted Consumption by Adults in order of Children Can Eat',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS20198',
            'sector': 'Food security',
            'indicator': 'Food related coping strategies: Sent Household Members to Eat Elsewhere',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS20199',
            'sector': 'Food security',
            'indicator': 'Number of days food related  copings were applied:Less Expensive Food',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201910',
            'sector': 'Food security',
            'indicator': 'Number of days food related  copings were applied:Borrowed Food',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201911',
            'sector': 'Food security',
            'indicator': 'Number of days food related  copings were applied:Reduced Meals',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201912',
            'sector': 'Food security',
            'indicator': 'Number of days food related  copings were applied:Reduced Portions',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201913',
            'sector': 'Food security',
            'indicator': 'Number of days food related  copings were applied:Spent Days without Food',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201914',
            'sector': 'Food security',
            'indicator': 'Number of days food related  copings were applied:Restricted Consumption by Adults',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201915',
            'sector': 'Food security',
            'indicator': 'Number of days food related  copings were applied:Sent HH members eat Elsewhere',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201916',
            'sector': 'Food security',
            'indicator': 'Number of days food related  copings were applied:Other',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201917',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Sold Household Goods (radio, furniture, television, jewelry etc..)',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201918',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Sold Productive assets or means of transport (sewing machine, wheelbarrow, bicycle, car, livestock..)',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201919',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Reduced essential non-food: Education',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201920',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Reduced essential non-food expenditures: Health',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201921',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Spent savings ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201922',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Bought food on credit or borrowed money to purchase food',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201923',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Sold house or land',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201924',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Withdrew children from school ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201925',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Begged',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201926',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Marriage of children under 18',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201927',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Accepted High Risk, Illegal, Socially Degrading Activities',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201928',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Had School Children (6 -15 years old) Involved in Income Generation',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201929',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Household has Debt',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201930',
            'sector': 'Food security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days: Bought food on credit or borrowed money to purchase food',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Coping.xlsx'
        },
        {
            'id': 'FS201931',
            'sector': 'Food security',
            'indicator': 'Food Security Classification',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Food_Security.xlsx'
        },
        {
            'id': 'FS201932',
            'sector': 'Food security',
            'indicator': 'Percent of households who are Food Secure',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Food_Security.xlsx'
        },
        {
            'id': 'FS201933',
            'sector': 'Food security',
            'indicator': 'Percent of households who are Marginally Food Insecure',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Food_Security.xlsx'
        },
        {
            'id': 'FS201934',
            'sector': 'Food security',
            'indicator': 'Percent of households who are Moderately Food Insecure',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Food_Security.xlsx'
        },
        {
            'id': 'FS201935',
            'sector': 'Food security',
            'indicator': 'Percent of households who are Severely Food Insecure',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Food_Security.xlsx'
        },
        {
            'id': 'FS201936',
            'sector': 'Food security',
            'indicator': 'Average number of meals consumed by adults',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201937',
            'sector': 'Food security',
            'indicator': 'Average number of Meals Consumed by Chidren under 5',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201938',
            'sector': 'Food security',
            'indicator': 'Average Food Consumption Score',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201939',
            'sector': 'Food security',
            'indicator': 'Percentage of households with Poor food consumption ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201940',
            'sector': 'Food security',
            'indicator': 'Percentage of households with Borderline food consumption ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201941',
            'sector': 'Food security',
            'indicator': 'Percentage of households with Acceptable food consumption ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201942',
            'sector': 'Food security',
            'indicator': 'Household Daily Average Diet Diversity (HDADD)',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201943',
            'sector': 'Food security',
            'indicator': 'HDADD Category: <4.5 food groups',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201944',
            'sector': 'Food security',
            'indicator': 'HDADD Category: 4.5-6.4 food groups',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201945',
            'sector': 'Food security',
            'indicator': 'HDADD Category: >=6.5 food groups',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201946',
            'sector': 'Food security',
            'indicator': 'Household Weekly Average Diet Diversity (HWDD)',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201947',
            'sector': 'Food security',
            'indicator': 'HWDD <= 6 food groups',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201948',
            'sector': 'Food security',
            'indicator': 'HWDD 7-8 food groups',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201949',
            'sector': 'Food security',
            'indicator': 'HWDD >= 9 food groups',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201950',
            'sector': 'Food security',
            'indicator': 'Weekly Food Consumption: Weekly Food Consumption: Cereal/ Tubers',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201951',
            'sector': 'Food security',
            'indicator': 'Weekly Food Consumption: Roots',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201952',
            'sector': 'Food security',
            'indicator': 'Weekly Food Consumption:  Dairy Products',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201953',
            'sector': 'Food security',
            'indicator': 'Weekly Food Consumption: Meat/ Fish/ Eggs',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201954',
            'sector': 'Food security',
            'indicator': 'Weekly Food Consumption: Vegetable/ Leaves',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201955',
            'sector': 'Food security',
            'indicator': 'Weekly Food Consumption: Fruits',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201956',
            'sector': 'Food security',
            'indicator': 'Weekly Food Consumption: Oils',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201957',
            'sector': 'Food security',
            'indicator': 'Weekly Food Consumption: Sugar',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_Foodconsumption.xlsx'
        },
        {
            'id': 'FS201958',
            'sector': 'Food security',
            'indicator': 'Food consumption score nutrition',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx'
        },
        {
            'id': 'FS201959',
            'sector': 'Food security',
            'indicator': 'Vitamin A Consumption: Never Consumed',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx'
        },
        {
            'id': 'FS201960',
            'sector': 'Food security',
            'indicator': 'Vitamin A Consumption: 1 to 6 Times a Week',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx'
        },
        {
            'id': 'FS201961',
            'sector': 'Food security',
            'indicator': 'Vitamin A Consumption: at Least Daily',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx'
        },
        {
            'id': 'FS201962',
            'sector': 'Food security',
            'indicator': 'Protein Consumption: Never Consumed',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx'
        },
        {
            'id': 'FS201963',
            'sector': 'Food security',
            'indicator': 'Protein Consumption:  1 to 6 Times a Week',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx'
        },
        {
            'id': 'FS201964',
            'sector': 'Food security',
            'indicator': 'Protein Consumption: at Least Daily',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx'
        },
        {
            'id': 'FS201965',
            'sector': 'Food security',
            'indicator': 'Iron Consumption: Never Consumed',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx'
        },
        {
            'id': 'FS201966',
            'sector': 'Food security',
            'indicator': 'Iron Consumption: 1 to 6 Times a Week',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx'
        },
        {
            'id': 'FS201967',
            'sector': 'Food security',
            'indicator': 'Iron Consumption: at Least Daily',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx'
        },
        {
            'id': 'FS201968',
            'sector': 'Food security',
            'indicator': 'Reduced Coping Strategy Index',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_foodsecurity_rCSI.xlsx'
        },
        {
            'id': 'LIV201957',
            'sector': 'Livelihoods',
            'indicator': 'Sector of employment - Individual level',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201958',
            'sector': 'Livelihoods',
            'indicator': 'AgriculturePercent of working age individuals (above 15) employed in ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201959',
            'sector': 'Livelihoods',
            'indicator': 'ConstructionPercent of working age individuals (above 15) employed in ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201960',
            'sector': 'Livelihoods',
            'indicator': 'ConciergePercent of working age individuals (above 15) employed in ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201961',
            'sector': 'Livelihoods',
            'indicator': 'ManufacturingPercent of working age individuals (above 15) employed in ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201962',
            'sector': 'Livelihoods',
            'indicator': 'Retail (Shops)Percent of working age individuals (above 15) employed in ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201963',
            'sector': 'Livelihoods',
            'indicator': 'BeggingPercent of working age individuals (above 15) employed in ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201964',
            'sector': 'Livelihoods',
            'indicator': 'Professional ServicesPercent of working age individuals (above 15) employed in ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201965',
            'sector': 'Livelihoods',
            'indicator': 'Occasional WorkPercent of working age individuals (above 15) employed in ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201966',
            'sector': 'Livelihoods',
            'indicator': 'Other ServicesPercent of working age individuals (above 15) employed in ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201967',
            'sector': 'Livelihoods',
            'indicator': 'Selling in the streetPercent of working age individuals (above 15) employed in ',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201968',
            'sector': 'Livelihoods',
            'indicator': 'Average Number of hours per week the person usually work for all jobs',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201969',
            'sector': 'Livelihoods',
            'indicator': 'Average Number of days this person work during the last 7 days for all jobs',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201970',
            'sector': 'Livelihoods',
            'indicator': 'Percent of individuals who had a Regular work',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'LIV201971',
            'sector': 'Livelihoods',
            'indicator': 'Percent of individuals who had More than one job',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx'
        },
        {
            'id': 'EXP20191',
            'sector': 'Expenditure',
            'indicator': 'Household Expenditures',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP20192',
            'sector': 'Expenditure',
            'indicator': 'Total Expenditures per Month per Capita in US$',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP20193',
            'sector': 'Expenditure',
            'indicator': 'Food Expenditure Share Categories',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP20194',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Food',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP20195',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Health',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP20196',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Education',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP20197',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Rent',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP20198',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Water',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP20199',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Alcohol',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201910',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Soap and Hygiene',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201911',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Fuel',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201912',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Transportation',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201913',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Clothing',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201914',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Telecome',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201915',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Electricity: Electricite du Liban (EDL)',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201916',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Electricity: Private Generators',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201917',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Assets',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201918',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Other',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201919',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Shelter',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201920',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Gas',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201921',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Legal Assistance',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201922',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Entertainment',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201923',
            'sector': 'Expenditure',
            'indicator': 'Monthly Expenditure share on: Debt Repayment',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201924',
            'sector': 'Expenditure',
            'indicator': 'Single Food Item Expenditure Share- Monthly average: Bread & Pasta',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201925',
            'sector': 'Expenditure',
            'indicator': 'Single Food Item Expenditure Share- Monthly average: Cereal',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201926',
            'sector': 'Expenditure',
            'indicator': 'Single Food Item Expenditure Share- Monthly average: Tubers',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201927',
            'sector': 'Expenditure',
            'indicator': 'Single Food Item Expenditure Share- Monthly average: Dairy Products',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201928',
            'sector': 'Expenditure',
            'indicator': 'Single Food Item Expenditure Share- Monthly average: Oil',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201929',
            'sector': 'Expenditure',
            'indicator': 'Single Food Item Expenditure Share- Monthly average: Sugar',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201930',
            'sector': 'Expenditure',
            'indicator': 'Single Food Item Expenditure Share- Monthly average: Canned Food',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201931',
            'sector': 'Expenditure',
            'indicator': 'Single Food Item Expenditure Share- Monthly average: Beans & nuts',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201932',
            'sector': 'Expenditure',
            'indicator': 'Single Food Item Expenditure Share- Monthly average: Fresh Meat',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201933',
            'sector': 'Expenditure',
            'indicator': 'Single Food Item Expenditure Share- Monthly average: Fruits & Vegetables',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201934',
            'sector': 'Expenditure',
            'indicator': 'Single Food Item Expenditure Share- Monthly average: Cooked Food',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'EXP201935',
            'sector': 'Expenditure',
            'indicator': 'Single Food Item Expenditure Share- Monthly average: Condiments',
            'year': '2019',
            'download_link': '/files/fs_livelihoods_economic/Vault_Expenditure.xlsx'
        },
        {
            'id': 'Health20191',
            'sector': 'Health',
            'indicator': '% of households that required hospital health care assistance in the past 6 months',
            'year': '2019',
            'download_link': '/files/health/vault_Health_hospitalcare.xlsx'
        },
        {
            'id': 'Health20192',
            'sector': 'Health',
            'indicator': '% households that received the required hospital health care assistance in the past 6 months',
            'year': '2019',
            'download_link': '/files/health/vault_Health_hospitalcare.xlsx'
        },
        {
            'id': 'Health20193',
            'sector': 'Health',
            'indicator': 'Types of hospitalization assistance that households reported benefiting from',
            'year': '2019',
            'download_link': '/files/health/vault_Health_hospitalcare.xlsx'
        },
        {
            'id': 'Health20194',
            'sector': 'Health',
            'indicator': 'Place of accessing Hospital health care',
            'year': '2019',
            'download_link': '/files/health/vault_Health_hospitalcare.xlsx'
        },
        {
            'id': 'Health20195',
            'sector': 'Health',
            'indicator': 'Reasons for not receiving the required hospital health care',
            'year': '2019',
            'download_link': '/files/health/vault_Health_hospitalcare.xlsx'
        },
        {
            'id': 'Health20196',
            'sector': 'Health',
            'indicator': '% households that know where to access medical services assistance in case of emergency',
            'year': '2019',
            'download_link': '/files/health/vault_Health_hospitalcare.xlsx'
        },
        {
            'id': 'Health20197',
            'sector': 'Health',
            'indicator': '% households that have private health insurance',
            'year': '2019',
            'download_link': '/files/health/vault_Health_hospitalcare.xlsx'
        },
        {
            'id': 'Health20198',
            'sector': 'Health',
            'indicator': 'Overlap with receiving primary health care PHC and hospital care',
            'year': '2019',
            'download_link': '/files/health/vault_Health_hospitalcare.xlsx'
        },
        {
            'id': 'Health20199',
            'sector': 'Health',
            'indicator': '% household legal residency status and receiving primary health care',
            'year': '2019',
            'download_link': '/files/health/vault_Health_healthprotectioncrosstabs.xlsx'
        },
        {
            'id': 'Health201910',
            'sector': 'Health',
            'indicator': 'Household legal residency status and receiving hospital health care',
            'year': '2019',
            'download_link': '/files/health/vault_Health_healthprotectioncrosstabs.xlsx'
        },
        {
            'id': 'Health201911',
            'sector': 'Health',
            'indicator': 'Type of community interactions and receiving primary health care',
            'year': '2019',
            'download_link': '/files/health/vault_Health_healthprotectioncrosstabs.xlsx'
        },
        {
            'id': 'Health201912',
            'sector': 'Health',
            'indicator': 'Type of community interactions and receiving hospital health care',
            'year': '2019',
            'download_link': '/files/health/vault_Health_healthprotectioncrosstabs.xlsx'
        },
        {
            'id': 'Health201913',
            'sector': 'Health',
            'indicator': 'Having a card to withdraw cash or buy food and receiving primary health care',
            'year': '2019',
            'download_link': '/files/health/vault_Health_healthprotectioncrosstabs.xlsx'
        },
        {
            'id': 'Health201914',
            'sector': 'Health',
            'indicator': 'Having a card to withdraw cash or buy food and receiving hospital health care',
            'year': '2019',
            'download_link': '/files/health/vault_Health_healthprotectioncrosstabs.xlsx'
        },
        {
            'id': 'Health201915',
            'sector': 'Health',
            'indicator': 'Percentage of newborns who were delivered in a hospital',
            'year': '2019',
            'download_link': '/files/health/vault_Health_childbirthdetails.xlsx'
        },
        {
            'id': 'Health201916',
            'sector': 'Health',
            'indicator': 'Percentage of newborns who were delivered at home',
            'year': '2019',
            'download_link': '/files/health/vault_Health_childbirthdetails.xlsx'
        },
        {
            'id': 'Health201917',
            'sector': 'Health',
            'indicator': 'Percentage of newborns who were delivered in a health care facility- other than hospital',
            'year': '2019',
            'download_link': '/files/health/vault_Health_childbirthdetails.xlsx'
        },
        {
            'id': 'Health201918',
            'sector': 'Health',
            'indicator': 'Percentage of newborns who were delivered in a hospital by age',
            'year': '2019',
            'download_link': '/files/health/vault_Health_childbirthdetails.xlsx'
        },
        {
            'id': 'Health201919',
            'sector': 'Health',
            'indicator': 'Percentage of newborns who were delivered at home by age',
            'year': '2019',
            'download_link': '/files/health/vault_Health_childbirthdetails.xlsx'
        },
        {
            'id': 'Health201920',
            'sector': 'Health',
            'indicator': 'Percentage of newborns who were delivered in a health care facility- other than hospital by age',
            'year': '2019',
            'download_link': '/files/health/vault_Health_childbirthdetails.xlsx'
        },
        {
            'id': 'Health201921',
            'sector': 'Health',
            'indicator': '% households that required primary health care assistance in the last 6 months',
            'year': '2019',
            'download_link': '/files/health/vault_Health_Primaryhealthcare.xlsx'
        },
        {
            'id': 'Health201922',
            'sector': 'Health',
            'indicator': '% households that received the required primary health care assistance in the last 6 months',
            'year': '2019',
            'download_link': '/files/health/vault_Health_Primaryhealthcare.xlsx'
        },
        {
            'id': 'Health201923',
            'sector': 'Health',
            'indicator': 'Types of primary health care assistance that households reported benefiting from',
            'year': '2019',
            'download_link': '/files/health/vault_Health_Primaryhealthcare.xlsx'
        },
        {
            'id': 'Health201924',
            'sector': 'Health',
            'indicator': 'Place of accessing primary health care',
            'year': '2019',
            'download_link': '/files/health/vault_Health_Primaryhealthcare.xlsx'
        },
        {
            'id': 'Health201925',
            'sector': 'Health',
            'indicator': 'Method of accessing primary health care',
            'year': '2019',
            'download_link': '/files/health/vault_Health_Primaryhealthcare.xlsx'
        },
        {
            'id': 'Health201926',
            'sector': 'Health',
            'indicator': 'Reasons for visiting a doctor in a private clinic',
            'year': '2019',
            'download_link': '/files/health/vault_Health_Primaryhealthcare.xlsx'
        },
        {
            'id': 'Health201927',
            'sector': 'Health',
            'indicator': 'Reasons for not receiving the required primary health care',
            'year': '2019',
            'download_link': '/files/health/vault_Health_Primaryhealthcare.xlsx'
        },
        {
            'id': 'Prot20191',
            'sector': 'Protection',
            'indicator': '% of Syrian individuals aged 15 years and above with legal residency permits',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot20192',
            'sector': 'Protection',
            'indicator': '% of individuals 15-18 years old holding legal residency permits',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot20193',
            'sector': 'Protection',
            'indicator': '% of individuals above 18 years old holding legal residency permits',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot20194',
            'sector': 'Protection',
            'indicator': '% of households that have all members aged 15 years and above holding legal residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot20195',
            'sector': 'Protection',
            'indicator': '% of households that have at least one member aged 15 years and above holding legal residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot20196',
            'sector': 'Protection',
            'indicator': '% households that do not have any members aged 15 years and above holding legal residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot20197',
            'sector': 'Protection',
            'indicator': '% of individuals who reported expiry of residency as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot20198',
            'sector': 'Protection',
            'indicator': '% of individuals who reported being registered with UNHCR but GSO asked them to obtain a Lebanese sponsor as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot20199',
            'sector': 'Protection',
            'indicator': '% of individuals who reported not being registered with UNHCR or arriving after 2015 and being unable to obtain a sponsor as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201910',
            'sector': 'Protection',
            'indicator': '% of individuals who reported being registered with UNHCR but previously renewing based on sponsorship and being unable to obtain a sponsor as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201911',
            'sector': 'Protection',
            'indicator': '% of individuals who reported GSO refusing their application without explanation as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201912',
            'sector': 'Protection',
            'indicator': '% of individuals who reported GSO telling them to come back as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201913',
            'sector': 'Protection',
            'indicator': '% of individuals who reported waiting for a housing attestation as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201914',
            'sector': 'Protection',
            'indicator': '% of individuals who reported GSO refusing residency due to illegal entry as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201915',
            'sector': 'Protection',
            'indicator': '% of individuals who reported reluctance to obtain residency for personal reasons as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201916',
            'sector': 'Protection',
            'indicator': '% of individuals who reported having a deportation order as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201917',
            'sector': 'Protection',
            'indicator': '% of individuals who reported being unaware of procedures as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201918',
            'sector': 'Protection',
            'indicator': '% of individuals who reported fear of approaching GSO as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201919',
            'sector': 'Protection',
            'indicator': '% of individuals who reported being discouraged to approach GSO because they heard GSO is now renewing based on UNHCR certification and asking for money and sponsors as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201920',
            'sector': 'Protection',
            'indicator': '% of individuals who reported lacking ID as a reason for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201921',
            'sector': 'Protection',
            'indicator': '% of individuals who reported other reasons for lack of residency',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201922',
            'sector': 'Protection',
            'indicator': '% of individuals who have legal residency permits through the UNHCR certification',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201923',
            'sector': 'Protection',
            'indicator': '% of individuals who have legal residency permits through sponsorship',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201924',
            'sector': 'Protection',
            'indicator': '% of individuals who have legal residency permits through tourism',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201925',
            'sector': 'Protection',
            'indicator': '% of individuals who have legal residency permits through rent/property ownership',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        },
        {
            'id': 'Prot201926',
            'sector': 'Protection',
            'indicator': '% of individuals who have legal residency permits through courtesy',
            'year': '2019',
            'download_link': '/files/protection/Protection_Legal_Residency.xlsx'
        }
    ];

    homeIntro = {
        'part_1': `The Vulnerability Assessment of Syrian Refugees in Lebanon (VASyR 2019) provides an insight into the evolving situation of Syrian refugees in Lebanon. As per Government of Lebanon estimates, Lebanon is currently hosting 1.5 million of the 6.7 million Syrian refugees displaced globally.`,
        'part_2': `Now in its seventh year, the VASyR assesses a representative sample of Syrian refugee households, providing an overview of the geographical variations in vulnerabilities at a district and governorate levels. The VASyR is the only annual assessment in Lebanon covering all sectors and allows for the identification of changes and trends.`,
        'part_3': `The report, issued jointly by the United Nations High Commissioner for Refugees (UNHCR), the United Nations Children’s Fund (UNICEF) and the World Food Programme (WFP) is an essential resource for planning, decision-making and needs-based programme design.`
    };

    getTopMenuData() {
        return this.topMenu;
    }

    getHomeIntro() {
        return this.homeIntro;
    }

    getVasyrDownloadLink(year) {
        return this.vasyrDownloadLinks[year];
    }

    getRoadMapData() {
        return this.roadMapData;
    }

    getChaptersData() {
        return this.chaptersData;
    }

    getMapsData() {
        return this.maps;
    }

    getReportsData() {
        return this.reportsData;
    }

    getToolsData() {
        return this.toolsData;
    }

    getVaultData() {
        return this.vaultData;
    }

    getTrainingData() {
        return this.vaultData;
    }
}
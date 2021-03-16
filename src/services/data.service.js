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
        '2019': '/vasyr/files/vasyr_2019/VASyR 2019 digital version.pdf',
        '2020': '/vasyr/files/vasyr_2020/VASyR 2020.pdf',
        // '2018': 'link',
        // '2017': 'link',
        // '2016': 'link'
    };

    chaptersData = [
        {
            title: 'Introduction',
            description: `Introduction.`,
            image_url: 'images/chapters/ch-introduction.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/VASyR 2019 Introduction.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Introduction.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            // download_url: '/vasyr/files/vasyr_chapters/0 VASyR 2019 Executive Summary.pdf',
            // knowledge_hub_url: '',
            textPosition: 'top'
        },
        {
            title: 'EXECUTIVE SUMMARY',
            description: `Executive summary and recommendations of the 2019 vulnerability assessment.`,
            image_url: 'images/chapters/ch-executive-summary.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/0 VASyR 2019 Executive Summary.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Executive Summary.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            // download_url: '/vasyr/files/vasyr_chapters/0 VASyR 2019 Executive Summary.pdf',
            // knowledge_hub_url: '',
            textPosition: 'bottom'
        },
        {
            title: 'ASSISTANCE',
            description: `The Assistance chapter examines whether families are recipients of cash assistance and studies their access to household assets. Vulnerable Syrian refugees in Lebanon can receive two main types of assistance: cash assistance and in-kind support, both of which are aimed at covering their basic needs.`,
            image_url: 'images/chapters/ch-assistance.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/1 VASyR 2019 Assistance & HH assets.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'top'
        },
        {
            title: 'COPING STRATEGIES',
            description: `This chapter studies the range of strategies households employ in order to cope with a lack of food and/or the means to buy it. Coping mechanisms related to the household’s capacity to earn a sustainable income, are also examined.`,
            image_url: 'images/chapters/ch-coping-strategies.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/2 VASyR 2019 Coping Strategies.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Coping Strategies.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'bottom'
        },
        {
            title: 'DEMOGRAPHICS',
            description: `This chapter contains the key demographic characteristics of the Syrian refugee population in Lebanon, including household composition, profile of the head of household, dependency and prevalence of certain specific needs.`,
            image_url: 'images/chapters/ch-demographics.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/3 VASyR 2019 Demographics.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Demographics.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'top'
        },
        {
            title: 'ECONOMIC VULNERABILITY',
            description: `This chapter provides insight into the economic vulnerability of Syrian refugee households in Lebanon, studied on the dimensions of the composition and amount of expenditures, Survival and Minimum Expenditures Basket (S)MEB, and debt.`,
            image_url: 'images/chapters/ch-eco-vulnerability.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/4 VASyR 2019 Economic Vulnerability.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Economic Vulnerability.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'bottom'
        },
        {
            title: 'ENERGY',
            description: `The Energy chapter analyses the access to electricity by Syrian refugee households in Lebanon. It also studies the hours of electricity supplied by the national grid versus private diesel generators, expenditure on electricity and bill collection, as well as the sources of energy used for heating and cooking.`,
            image_url: 'images/chapters/ch-energy.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/5 VASyR 2019 Energy.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Energy.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'top'
        },
        {
            title: 'EDUCATION',
            description: `The Education chapter studies the school enrolment rates of Syrian refugee girls and boys aged 3 to 24 years old. It also analyses the reasons why children and youth were not enrolled in schools and examines the share of youth who were neither employed nor attending a training.`,
            image_url: 'images/chapters/ch-education.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/6 VASyR 2019 Education.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/VASyR 2020 - Education.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'bottom'
        },
        {
            title: 'FOOD CONSUMPTION',
            description: `This chapter examines food consumption indicators, which are essential for studying food security and classifying households according to their food security status. The dimensions considered in this chapter include food quantity, as well as food quality and diversity.`,
            image_url: 'images/chapters/ch-food-consumption.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/7 VASyR 2019 Food Consumption.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Food Consumption.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'top'
        },
        {
            title: 'FOOD SECURITY',
            description: `This chapter analyses the food security trends among Syrian refugee households in Lebanon, including the characteristics of food insecure households.  It also looks at differences in food security levels among districts and governorates.`,
            image_url: 'images/chapters/ch-food-security.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/8 VASyR 2019 Food Security.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Food Security.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'bottom'
        },
        {
            title: 'GENDER',
            description: `This section explores the gender dimensions of vulnerabilities faced by Syrian refugees in Lebanon and identifies gender-based differences and inequalities.`,
            image_url: 'images/chapters/ch-gender.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/1 VASyR 2019 Assistance & HH assets.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Gender Analysis.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'top'
        },
        {
            title: 'HEALTH',
            description: `The Health chapter studies access of Syrian refugee households to needed health care, which is available to refugees through primary health care outlets, hospitals and mobile medical units. Barriers to healthcare access are also examined.`,
            image_url: 'images/chapters/ch-health.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/9 VASyR 2019 Health.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Health.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'bottom'
        },
        {
            title: 'LIVELIHOODS',
            description: `This chapter provides  insight into income-generating activities, including the type of work and wages earned, as well as employment and unemployment levels and number of days worked, all measured at an individual level. Questions were asked at a household level to assess the main reliance of income sources for each household.`,
            image_url: 'images/chapters/ch-livelihoods.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/10 VASyR 2019 Livelihoods and Income.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Livelihoods and Income.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'top'
        },
        {
            title: 'PROTECTION',
            description: `The Protection chapter offers an analysis of the protection space for Syrian refugees in Lebanon through key indicators, including legal residency and birth- and marriage registration. Protection indicators also include those related to safety and security, as well as community relations. The child protection space is studied through child labour and child marriage indicators.`,
            image_url: 'images/chapters/ch-protection.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/11 VASyR 2019 Protection.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Protection.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'bottom'
        },
        {
            title: 'SHELTER',
            description: `While the majority of Syrian refugees live in cities and villages, the remaining percentage live in spontaneously set-up tented settlements throughout the country. The Shelter chapter summarizes the physical conditions of all types of refugee settlements, as well as occupancy agreements and rental costs. It also studies the mobility of households between places of residence, which includes the reasons of eviction.`,
            image_url: 'images/chapters/ch-shelter.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/12 VASyR 2019 Shelter.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Shelter.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'top'
        },
        {
            title: 'WASH',
            description: `The WASH chapter examines access to drinking water and other water sources, as well as the sanitation and hygiene situation of Syrian refugee households in Lebanon.`,
            image_url: 'images/chapters/ch-wash.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/13 VASyR 2019 WASH.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - WASH.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'bottom'
        },
        {
            title: 'METHODOLOGY',
            description: `Methodology`,
            image_url: 'images/chapters/ch-methodology.jpg',
            versions: [
                {
                    'year': '2019',
                    'download_url': '/vasyr/files/vasyr_chapters/VASyR 2019 Methodology.pdf',
                    'knowledge_hub_url': ''
                },
                {
                    'year': '2020',
                    'download_url': '/vasyr/files/vasyr_chapters/2020/VASyR 2020 - Methodology.pdf',
                    'knowledge_hub_url': ''
                }
            ],
            textPosition: 'top'
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
        }
    ];

    reportsData = [
        {
            title: 'VASyR 2020',
            year: '2020',
            image_url: '/images/reports/vasyr-2020.jpg',
            download_url: '/vasyr/files/vasyr_2020/VASyR 2020.pdf'
        },
        {
            title: 'VASyR 2019',
            year: '2019',
            image_url: '/images/reports/vasyr-2019.jpg',
            download_url: '/vasyr/files/vasyr_2019/VASyR 2019 digital version.pdf'
        },
        {
            title: 'VASyR 2018',
            year: '2018',
            image_url: '/images/reports/vasyr-2018.jpg',
            download_url: '/vasyr/files/previous_vasyr_reports/vasyr-2018.pdf'
        },
        {
            title: 'VASyR 2017',
            year: '2017',
            image_url: '/images/reports/vasyr-2017.jpg',
            download_url: '/vasyr/files/previous_vasyr_reports/vasyr-2017.pdf'
        },
        {
            title: 'VASyR 2016',
            year: '2016',
            image_url: '/images/reports/vasyr-2016.jpg',
            download_url: '/vasyr/files/previous_vasyr_reports/vasyr-2016.pdf'
        },
        {
            title: 'VASyR 2015',
            year: '2015',
            image_url: '/images/reports/vasyr-2015.jpg',
            download_url: '/vasyr/files/previous_vasyr_reports/vasyr-2015.pdf'
        },
        {
            title: 'VASyR 2014',
            year: '2014',
            image_url: '/images/reports/vasyr-2014.jpg',
            download_url: '/vasyr/files/previous_vasyr_reports/vasyr-2014.pdf'
        },
        {
            title: 'VASyR 2013',
            year: '2013',
            image_url: '/images/reports/vasyr-2013.jpg',
            download_url: '/vasyr/files/previous_vasyr_reports/vasyr-2013.pdf'
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
            download_url: '/vasyr/files/vasyr_tools/VASyR_for_Web.zip',
            description: 'This downloads the vasyr data quality assurance tools'
        },
        {
            title: 'Training Material',
            icon: '/icons/tools-training-material.png',
            download_url: '/vasyr/files/vasyr_tools/VASyR_TRAININGS.zip',
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
            'download_link': '/vasyr/files/demographics/De1.xlsx'
        },
        {
            'id': 'De2',
            'sector': 'Demographics',
            'indicator': 'Household size (by size categories)',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De2.xlsx'
        },
        {
            'id': 'De3',
            'sector': 'Demographics',
            'indicator': 'Head of HH by gender',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De3.xlsx'
        },
        {
            'id': 'De4',
            'sector': 'Demographics',
            'indicator': '% HHs with a dependency ratio',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De4.xlsx'
        },
        {
            'id': 'De5',
            'sector': 'Demographics',
            'indicator': '% HHs who reported all household members arriving to Lebanon at the same time',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De5.xlsx'
        },
        {
            'id': 'De6',
            'sector': 'Demographics',
            'indicator': 'Average dependency ratio',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De6.xlsx'
        },
        {
            'id': 'De7',
            'sector': 'Demographics',
            'indicator': 'Gender ',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De7.xlsx'
        },
        {
            'id': 'De8',
            'sector': 'Demographics',
            'indicator': '% HHs with 100% dependents',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De8.xlsx'
        },
        {
            'id': 'De9',
            'sector': 'Demographics',
            'indicator': 'Average age range of interviewees',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De9.xlsx'
        },
        {
            'id': 'De10',
            'sector': 'Demographics',
            'indicator': '% Child headed households with dependents ',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De10.xlsx'
        },
        {
            'id': 'De11',
            'sector': 'Demographics',
            'indicator': '% HH with child head of household (<15 years old)',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De11.xlsx'
        },
        {
            'id': 'De12',
            'sector': 'Demographics',
            'indicator': '% HH with child head of household (<18 years old)',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De12.xlsx'
        },
        {
            'id': 'De13',
            'sector': 'Demographics',
            'indicator': '% of child headed households with head of household between 15 and 18 years ',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De13.xlsx'
        },
        {
            'id': 'De14',
            'sector': 'Demographics',
            'indicator': '% of HH with elderly head of household',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De14.xlsx'
        },
        {
            'id': 'De15',
            'sector': 'Demographics',
            'indicator': '% of HH with female head of household',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De15.xlsx'
        },
        {
            'id': 'De16',
            'sector': 'Demographics',
            'indicator': '% of HH with male head of household',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De16.xlsx'
        },
        {
            'id': 'De17',
            'sector': 'Demographics',
            'indicator': '% of HHs with dependents',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De17.xlsx'
        },
        {
            'id': 'De18',
            'sector': 'Demographics',
            'indicator': '% of HH with at least one member with specific needs',
            'year': '2018',
            'download_link': '/vasyr/files/demographics/De18.xlsx'
        },
        {
            'id': 'EC1',
            'sector': 'Economic Vulnerability',
            'indicator': '% of HHs who borrowed money in the past three months along with reason for borrowing and source',
            'year': '2018',
            'download_link': '/vasyr/files/economic_vulnerability/EC1.xlsx'
        },
        {
            'id': 'EC2',
            'sector': 'Economic Vulnerability',
            'indicator': 'Debt per Household & per capita ',
            'year': '2018',
            'download_link': '/vasyr/files/economic_vulnerability/EC2.xlsx'
        },
        {
            'id': 'EC3',
            'sector': 'Economic Vulnerability',
            'indicator': 'Household MEB/SMEB Categories',
            'year': '2018',
            'download_link': '/vasyr/files/economic_vulnerability/EC3.xlsx'
        },
        {
            'id': 'EC4',
            'sector': 'Economic Vulnerability',
            'indicator': 'Poverty Line per Capita per Day ',
            'year': '2018',
            'download_link': '/vasyr/files/economic_vulnerability/EC4.xlsx'
        },
        {
            'id': 'EC5',
            'sector': 'Economic Vulnerability',
            'indicator': '% of HHs by debt categories',
            'year': '2018',
            'download_link': '/vasyr/files/economic_vulnerability/EC5.xlsx'
        },
        {
            'id': 'CP1',
            'sector': 'Child Protection',
            'indicator': 'Child labour (age 5-17)',
            'year': '2018',
            'download_link': '/vasyr/files/child_protection/CP1.xlsx'
        },
        {
            'id': 'CP2',
            'sector': 'Child Protection',
            'indicator': 'Child Labour by type of labour (economic activities vs. household chores)',
            'year': '2018',
            'download_link': '/vasyr/files/child_protection/CP2.xlsx'
        },
        {
            'id': 'CP3',
            'sector': 'Child Protection',
            'indicator': 'Children under 18 years old that have experienced at least one form of violent discipline',
            'year': '2018',
            'download_link': '/vasyr/files/child_protection/CP3.xlsx'
        },
        {
            'id': 'CP4',
            'sector': 'Child Protection',
            'indicator': 'Women age 15-19 years currently married',
            'year': '2018',
            'download_link': '/vasyr/files/child_protection/CP4.xlsx'
        },
        {
            'id': 'HE1',
            'sector': 'Health',
            'indicator': '% HH that required primary health care',
            'year': '2018',
            'download_link': '/vasyr/files/health/HE1.xlsx'
        },
        {
            'id': 'HE2',
            'sector': 'Health',
            'indicator': '% HH that received the required primary health care asisstance',
            'year': '2018',
            'download_link': '/vasyr/files/health/HE2.xlsx'
        },
        {
            'id': 'HE3',
            'sector': 'Health',
            'indicator': 'Method of accessing primary healthcare',
            'year': '2018',
            'download_link': '/vasyr/files/health/HE3.xlsx'
        },
        {
            'id': 'HE4',
            'sector': 'Health',
            'indicator': '% of households that required hospital health care',
            'year': '2018',
            'download_link': '/vasyr/files/health/HE4.xlsx'
        },
        {
            'id': 'HE5',
            'sector': 'Health',
            'indicator': '% HH that received the required hospital health care',
            'year': '2018',
            'download_link': '/vasyr/files/health/HE5.xlsx'
        },
        {
            'id': 'HE6',
            'sector': 'Health',
            'indicator': '% HH that know where to access medical services/assistance in case of emergency',
            'year': '2018',
            'download_link': '/vasyr/files/health/HE6.xlsx'
        },
        {
            'id': 'FO1',
            'sector': 'Food Security',
            'indicator': 'Food Consumption (diet, weekly consumption, score, number of meals consumed)',
            'year': '2018',
            'download_link': '/vasyr/files/food_security/FO1.xlsx'
        },
        {
            'id': 'FO2',
            'sector': 'Food Security',
            'indicator': 'Vitamin, Iron, Protetin Consumption',
            'year': '2018',
            'download_link': '/vasyr/files/food_security/FO2.xlsx'
        },
        {
            'id': 'FO3',
            'sector': 'Food Security',
            'indicator': 'Expenditure share by category',
            'year': '2018',
            'download_link': '/vasyr/files/food_security/FO3.xlsx'
        },
        {
            'id': 'FO4',
            'sector': 'Food Security',
            'indicator': 'Food related coping strategies in the last 7 days ',
            'year': '2018',
            'download_link': '/vasyr/files/food_security/FO4.xlsx'
        },
        {
            'id': 'FO5',
            'sector': 'Food Security',
            'indicator': 'Livelihood-related Coping Strategies in the Last 30 Days',
            'year': '2018',
            'download_link': '/vasyr/files/food_security/FO5.xlsx'
        },
        {
            'id': 'FO6',
            'sector': 'Food Security',
            'indicator': 'Reduced Coping Strategy Index',
            'year': '2018',
            'download_link': '/vasyr/files/food_security/FO6.xlsx'
        },
        {
            'id': 'FO7',
            'sector': 'Food Security',
            'indicator': 'Food Security Classification',
            'year': '2018',
            'download_link': '/vasyr/files/food_security/FO7.xlsx'
        },
        {
            'id': 'ED1',
            'sector': 'Education',
            'indicator': 'Reasons for not attending school',
            'year': '2018',
            'download_link': '/vasyr/files/education/ED1.xlsx'
        },
        {
            'id': 'ED2',
            'sector': 'Education',
            'indicator': 'Reasons for disabled children and adolescents not attending school',
            'year': '2018',
            'download_link': '/vasyr/files/education/ED2.xlsx'
        },
        {
            'id': 'ED3',
            'sector': 'Education',
            'indicator': 'Primary school net attendance ratio (adjusted)',
            'year': '2018',
            'download_link': '/vasyr/files/education/ED3.xlsx'
        },
        {
            'id': 'ED4',
            'sector': 'Education',
            'indicator': 'Lower secondary school net attendance ratio (adjusted)',
            'year': '2018',
            'download_link': '/vasyr/files/education/ED4.xlsx'
        },
        {
            'id': 'ED5',
            'sector': 'Education',
            'indicator': 'Not in Education, Employment or Training (NEET)',
            'year': '2018',
            'download_link': '/vasyr/files/education/ED5.xlsx'
        },
        {
            'id': 'ED6',
            'sector': 'Education',
            'indicator': 'Reasons provided by refugee youth respondents aged 15 -18 years for school dropout',
            'year': '2018',
            'download_link': '/vasyr/files/education/ED6.xlsx'
        },
        {
            'id': 'ED7',
            'sector': 'Education',
            'indicator': 'Reasons provided by refugee youth respondents aged 19 -24 years for school dropout',
            'year': '2018',
            'download_link': '/vasyr/files/education/ED7.xlsx'
        },
        {
            'id': 'PR1',
            'sector': 'Protection',
            'indicator': 'Legal residency of individuals above 15 years old',
            'year': '2018',
            'download_link': '/vasyr/files/protection/PR1.xlsx'
        },
        {
            'id': 'PR2',
            'sector': 'Protection',
            'indicator': 'Level of birth registration',
            'year': '2018',
            'download_link': '/vasyr/files/protection/PR2.xlsx'
        },
        {
            'id': 'PR3',
            'sector': 'Protection',
            'indicator': 'Legal residency at  household level',
            'year': '2018',
            'download_link': '/vasyr/files/protection/PR3.xlsx'
        },
        {
            'id': 'PR4',
            'sector': 'Protection',
            'indicator': 'Level of marriage documentation for those married in Lebanon',
            'year': '2018',
            'download_link': '/vasyr/files/protection/PR4.xlsx'
        },
        {
            'id': 'PR5',
            'sector': 'Protection',
            'indicator': '% HHs who received an eviction notice and/or any other threat of removal in the last 6 months and HHs above/below S/MEB',
            'year': '2018',
            'download_link': '/vasyr/files/protection/PR5.xlsx'
        },
        {
            'id': 'PR6',
            'sector': 'Protection',
            'indicator': '% HHs who received an eviction notice and/or any other threat of removal in the last 6 months and legal residency',
            'year': '2018',
            'download_link': '/vasyr/files/protection/PR6.xlsx'
        },
        {
            'id': 'PR7',
            'sector': 'Protection',
            'indicator': ' % HHs who received an eviction notice and/or any other threat of removal in the last 6 months and % expenditure on food',
            'year': '2018',
            'download_link': '/vasyr/files/protection/PR7.xlsx'
        },
        {
            'id': 'PR8',
            'sector': 'Protection',
            'indicator': '% HHs that received an eviction notice or other threat of removal in the past 6 months with type of occupancy',
            'year': '2018',
            'download_link': '/vasyr/files/protection/PR8.xlsx'
        },
        {
            'id': 'PR9',
            'sector': 'Protection',
            'indicator': '% HHs that received an eviction notice or other threat of removal in the past 6 months with type of housing',
            'year': '2018',
            'download_link': '/vasyr/files/protection/PR9.xlsx'
        },
        {
            'id': 'PR10',
            'sector': 'Protection',
            'indicator': '% HHs that received an eviction notice or other threat of removal in the past 6 months and HHs adopting specific coping strategies',
            'year': '2018',
            'download_link': '/vasyr/files/protection/PR10.xlsx'
        },
        {
            'id': 'PR11',
            'sector': 'Protection',
            'indicator': 'Average HH size that received an eviction notice or other threat of removal in the past 6 months',
            'year': '2018',
            'download_link': '/vasyr/files/protection/PR11.xlsx'
        },
        {
            'id': 'SH1',
            'sector': 'Shelter',
            'indicator': '% of households with sufficient access to essential household assets',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH1.xlsx'
        },
        {
            'id': 'SH2',
            'sector': 'Shelter',
            'indicator': 'Detailed conditions in surrounding setting, for those in an area with physical security threats',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH2.xlsx'
        },
        {
            'id': 'SH3',
            'sector': 'Shelter',
            'indicator': '% of households in different monthly rent categories',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH3.xlsx'
        },
        {
            'id': 'SH4',
            'sector': 'Shelter',
            'indicator': 'Services included in rental payments',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH4.xlsx'
        },
        {
            'id': 'SH5',
            'sector': 'Shelter',
            'indicator': 'Types of rental agreements',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH5.xlsx'
        },
        {
            'id': 'SH6',
            'sector': 'Shelter',
            'indicator': 'Reasons for selecting a place of residence',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH6.xlsx'
        },
        {
            'id': 'SH7',
            'sector': 'Shelter',
            'indicator': 'Distribution of HHs among the three shelter categories',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH7.xlsx'
        },
        {
            'id': 'SH8',
            'sector': 'Shelter',
            'indicator': 'Detailed conditions in surrounding setting, for those in an area with poor sanitation conditions',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH8.xlsx'
        },
        {
            'id': 'SH9',
            'sector': 'Shelter',
            'indicator': 'Density and overcrowding',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH9.xlsx'
        },
        {
            'id': 'SH10',
            'sector': 'Shelter',
            'indicator': 'Period of rental agreement',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH10.xlsx'
        },
        {
            'id': 'SH11',
            'sector': 'Shelter',
            'indicator': 'Monthly average and median Rental Cost in USD',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH11.xlsx'
        },
        {
            'id': 'SH12',
            'sector': 'Shelter',
            'indicator': 'Distribution of HHs among the different shelter types',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH12.xlsx'
        },
        {
            'id': 'SH13',
            'sector': 'Shelter',
            'indicator': 'Percentage of HHs sharing toilets/latrines',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH13.xlsx'
        },
        {
            'id': 'SH14',
            'sector': 'Shelter',
            'indicator': ' % HH that received an eviction notice or other threat of removal in the past 6 months',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH14.xlsx'
        },
        {
            'id': 'SH15',
            'sector': 'Shelter',
            'indicator': 'Source of eviction notice',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH15.xlsx'
        },
        {
            'id': 'SH16',
            'sector': 'Shelter',
            'indicator': '% HH who had an incident with their current landlord in the past 6 months',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH16.xlsx'
        },
        {
            'id': 'SH17',
            'sector': 'Shelter',
            'indicator': 'Incidents with landlord in the past 6 months',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH17.xlsx'
        },
        {
            'id': 'SH18',
            'sector': 'Shelter',
            'indicator': ' % HH moved in the past 6 months',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH18.xlsx'
        },
        {
            'id': 'SH19',
            'sector': 'Shelter',
            'indicator': 'Reasons for changing accomodation in the past 6 months',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH19.xlsx'
        },
        {
            'id': 'SH20',
            'sector': 'Shelter',
            'indicator': 'Length of time living in current shelter',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH20.xlsx'
        },
        {
            'id': 'SH21',
            'sector': 'Shelter',
            'indicator': 'Type of previous shelter, for those who have moved in the past 6 months',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH21.xlsx'
        },
        {
            'id': 'SH22',
            'sector': 'Shelter',
            'indicator': '% HH planning to move in the next 6 months',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH22.xlsx'
        },
        {
            'id': 'SH23',
            'sector': 'Shelter',
            'indicator': 'Reasons for planning to change accomodation, for those planning to move in the next 6 months',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH23.xlsx'
        },
        {
            'id': 'SH24',
            'sector': 'Shelter',
            'indicator': 'Future type of accomodation, for those planning to move in the past 6 months',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH24.xlsx'
        },
        {
            'id': 'SH25',
            'sector': 'Shelter',
            'indicator': 'HHs who have been evicted during their stay in Lebanon',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH25.xlsx'
        },
        {
            'id': 'SH26',
            'sector': 'Shelter',
            'indicator': 'Shelter conditions of HHs',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH26.xlsx'
        },
        {
            'id': 'SH27',
            'sector': 'Shelter',
            'indicator': 'Type of occupancy',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH27.xlsx'
        },
        {
            'id': 'SH28',
            'sector': 'Shelter',
            'indicator': 'Conditions in surrounding setting',
            'year': '2018',
            'download_link': '/vasyr/files/shelter/SH28.xlsx'
        },
        {
            id: "CH2019001",
            sector: "Child Health",
            indicator: "Children under two years of age who suffered from diarrhea in the past two weeks",
            year: "2019",
            download_link: "/vasyr/files/health/Vault_ChildHealth.xlsx"
        },
        {
            id: "CH2019002",
            sector: "Child Health",
            indicator: "Children under two years of age who suffered from severe diarrhea in the past two weeks",
            year: "2019",
            download_link: "/vasyr/files/health/Vault_ChildHealth.xlsx"
        },
        {
            id: "CH2019003",
            sector: "Child Health",
            indicator: "Children under two years of age who suffered from cough in the past two weeks",
            year: "2019",
            download_link: "/vasyr/files/health/Vault_ChildHealth.xlsx"
        },
        {
            id: "CH2019004",
            sector: "Child Health",
            indicator: "Children under two years of age who suffered from an acute respiratory infection in the past two weeks",
            year: "2019",
            download_link: "/vasyr/files/health/Vault_ChildHealth.xlsx"
        },
        {
            id: "CH2019005",
            sector: "Child Health",
            indicator: "Children under two years of age who suffered from fever in the past two weeks",
            year: "2019",
            download_link: "/vasyr/files/health/Vault_ChildHealth.xlsx"
        },
        {
            id: "CH2019006",
            sector: "Child Health",
            indicator: "Children under two years of age who suffered from a skin disease in the past two weeks",
            year: "2019",
            download_link: "/vasyr/files/health/Vault_ChildHealth.xlsx"
        },
        {
            id: "CH2019007",
            sector: "Child Health",
            indicator: "Children under two years of age who suffered from other symptoms in the past two weeks",
            year: "2019",
            download_link: "/vasyr/files/health/Vault_ChildHealth.xlsx"
        },
        {
            id: "CH2019008",
            sector: "Child Health",
            indicator: "Children under two years of age who suffered from at least one disease in the past two weeks",
            year: "2019",
            download_link: "/vasyr/files/health/Vault_ChildHealth.xlsx"
        },
        {
            id: "CH2019009",
            sector: "Child Health",
            indicator: "Children under two years of age who suffered from severe diarrhea in the past two weeks that required hospitalization or a doctor's consultation",
            year: "2019",
            download_link: "/vasyr/files/health/Vault_ChildHealth.xlsx"
        },
        {
            id: "CH2019010",
            sector: "Child Health",
            indicator: "Children under two years of age who suffered from an acute respiratory infection in the past two weeks that required hospitalization or a doctor's consultation",
            year: "2019",
            download_link: "/vasyr/files/health/Vault_ChildHealth.xlsx"
        },
        {
            id: "CP2019001",
            sector: "Child Protection",
            indicator: "% children aged 5-17 engaged in child labour",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019002",
            sector: "Child Protection",
            indicator: "% children aged 5-17 working during school hours in the last 30 days",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019003",
            sector: "Child Protection",
            indicator: "% children working in economic activities",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019004",
            sector: "Child Protection",
            indicator: "% children working in household chores",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019005",
            sector: "Child Protection",
            indicator: "Average number of hours worked by children in economic activities",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019006",
            sector: "Child Protection",
            indicator: "Average number of hours worked by children in household chores",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019007",
            sector: "Child Protection",
            indicator: "% children engaged in labour - agriculture - in the past 7 days",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019008",
            sector: "Child Protection",
            indicator: "% children engaged in labour - construction - in the past 7 days",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019009",
            sector: "Child Protection",
            indicator: "% children engaged in labour - manufacturing - in the past 7 days",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019010",
            sector: "Child Protection",
            indicator: "% children engaged in labour - wholesale and retail trade - in the past 7 days",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019011",
            sector: "Child Protection",
            indicator: "% children engaged in labour - begging - in the past 7 days",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019012",
            sector: "Child Protection",
            indicator: "% children engaged in labour - professional services - in the past 7 days",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019013",
            sector: "Child Protection",
            indicator: "% children engaged in labour - selling on the street - in the past 7 days",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019014",
            sector: "Child Protection",
            indicator: "% children engaged in labour - other services (hotel, restaurant,…) - in the past 7 days",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019015",
            sector: "Child Protection",
            indicator: "% children engaged in labour - other (specify) - in the past 7 days",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildLabour.xlsx"
        },
        {
            id: "CP2019016",
            sector: "Child Protection",
            indicator: "% females aged 15-19 married",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildMarriage.xlsx"
        },
        {
            id: "CP2019017",
            sector: "Child Protection",
            indicator: "Marital status of children and youth aged 10-24 per gender",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildMarriage.xlsx"
        },
        {
            id: "CP2019018",
            sector: "Child Protection",
            indicator: "% of children and youth aged 10-24 married per gender",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_ChildMarriage.xlsx"
        },
        {
            id: "CP2019019",
            sector: "Child Protection",
            indicator: "% children aged 1-14 who have experienced psychological aggression in the past month",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019020",
            sector: "Child Protection",
            indicator: "% children aged 1-14 who have experienced physical aggression (any) in the past month",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019021",
            sector: "Child Protection",
            indicator: "% children aged 1-14 who have experienced severe physical aggression in the past month",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019022",
            sector: "Child Protection",
            indicator: "% children aged 1-14 who have experienced only non-violent methods of child discipline in the past month",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019023",
            sector: "Child Protection",
            indicator: "% children aged 1-14 who have experienced at least one form of violent child discipline in the past month",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019024",
            sector: "Child Protection",
            indicator: "Individuals aged 0-17 who have any disability",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019025",
            sector: "Child Protection",
            indicator: "Individuals aged 0-17 who have a visual impairment",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019026",
            sector: "Child Protection",
            indicator: "Individuals aged 0-17 who have a hearing impairment",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019027",
            sector: "Child Protection",
            indicator: "Individuals aged 0-17 who have a physical disability",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019028",
            sector: "Child Protection",
            indicator: "Individuals aged 0-17 who have a mental disability",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019029",
            sector: "Child Protection",
            indicator: "Individuals aged 0-17 who have a speech impairment",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019030",
            sector: "Child Protection",
            indicator: "Individuals aged 18-24 who have any disability",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019031",
            sector: "Child Protection",
            indicator: "Individuals aged 18-24 who have a visual impairment",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019032",
            sector: "Child Protection",
            indicator: "Individuals aged 18-24 who have a hearing impairment",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019033",
            sector: "Child Protection",
            indicator: "Individuals aged 18-24 who have a physical disability",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019034",
            sector: "Child Protection",
            indicator: "Individuals aged 18-24 who have a mental disability",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019035",
            sector: "Child Protection",
            indicator: "Individuals aged 18-24 who have a speech impairment",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019036",
            sector: "Child Protection",
            indicator: "Individuals above 24 years old who have a disability",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019037",
            sector: "Child Protection",
            indicator: "Individuals above 24 years old who have a visual impairment",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019038",
            sector: "Child Protection",
            indicator: "Individuals above 24 years old who have a hearing impairment",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019039",
            sector: "Child Protection",
            indicator: "Individuals above 24 years old who have a physical disability",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019040",
            sector: "Child Protection",
            indicator: "Individuals above 24 years old who have a mental disability",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019041",
            sector: "Child Protection",
            indicator: "Individuals above 24 years old who have a speech impairment",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019042",
            sector: "Child Protection",
            indicator: "Individuals of all ages who have a disability",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019043",
            sector: "Child Protection",
            indicator: "Individuals of all ages who have a visual impairment",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019044",
            sector: "Child Protection",
            indicator: "Individuals of all ages who have a hearing impairment",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019045",
            sector: "Child Protection",
            indicator: "Individuals of all ages  who have a physical disability",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019046",
            sector: "Child Protection",
            indicator: "Individuals of all ages who have a mental disability",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019047",
            sector: "Child Protection",
            indicator: "Individuals of all ages who have a speech impairment",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019048",
            sector: "Child Protection",
            indicator: "% of children with disabilities in households in the two lowest wealth quintiles (expenditure baskets)",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019049",
            sector: "Child Protection",
            indicator: "% of children with disabilities in households that received any type of social transfer",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019050",
            sector: "Child Protection",
            indicator: "School attendance rate of children with disabilities by age (3-5 years old) and gender",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019051",
            sector: "Child Protection",
            indicator: "School attendance rate of children with disabilities by age (6-14 years old) and gender",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "CP2019052",
            sector: "Child Protection",
            indicator: "School attendance rate of children with disabilities by age (15-17 years old) and gender",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_CP_ViolentDiscipline.xlsx"
        },
        {
            id: "DE2019001",
            sector: "Demographics",
            indicator: "% single individuals <18 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Civil_status.xlsx"
        },
        {
            id: "DE2019002",
            sector: "Demographics",
            indicator: "%  individuals married (all ages)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Civil_status.xlsx"
        },
        {
            id: "DE2019003",
            sector: "Demographics",
            indicator: " % adult individuals (>18 years) married (out of total no. of individuals)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Civil_status.xlsx"
        },
        {
            id: "DE2019004",
            sector: "Demographics",
            indicator: "% adult individuals (>18 years) married (out of total no. of adults) ",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Civil_status.xlsx"
        },
        {
            id: "DE2019005",
            sector: "Demographics",
            indicator: "% children 13-14 years old married",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Civil_status.xlsx"
        },
        {
            id: "DE2019006",
            sector: "Demographics",
            indicator: "% children 15 years old married",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Civil_status.xlsx"
        },
        {
            id: "DE2019007",
            sector: "Demographics",
            indicator: "% children 16 years old married",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Civil_status.xlsx"
        },
        {
            id: "DE2019008",
            sector: "Demographics",
            indicator: "% children 17 years old married",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Civil_status.xlsx"
        },
        {
            id: "DE2019009",
            sector: "Demographics",
            indicator: "% individuals engaged (all ages)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Civil_status.xlsx"
        },
        {
            id: "DE2019010",
            sector: "Demographics",
            indicator: "% individuals separated (all ages)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Civil_status.xlsx"
        },
        {
            id: "DE2019011",
            sector: "Demographics",
            indicator: "% individuals divorced (all ages)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Civil_status.xlsx"
        },
        {
            id: "DE2019012",
            sector: "Demographics",
            indicator: "% individuals widowed (all ages)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Civil_status.xlsx"
        },
        {
            id: "DE2019013",
            sector: "Demographics",
            indicator: "% individuals common law married (all ages)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Civil_status.xlsx"
        },
        {
            id: "DE2019014",
            sector: "Demographics",
            indicator: "% households with no dependant",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Dependency.xlsx"
        },
        {
            id: "DE2019015",
            sector: "Demographics",
            indicator: "% households with one or more dependants",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Dependency.xlsx"
        },
        {
            id: "DE2019016",
            sector: "Demographics",
            indicator: "% households with two or more dependants",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Dependency.xlsx"
        },
        {
            id: "DE2019017",
            sector: "Demographics",
            indicator: "% households with three or more dependants",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Dependency.xlsx"
        },
        {
            id: "DE2019018",
            sector: "Demographics",
            indicator: "% of households with a dependency ratio of 0.00-0.24",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Dependency.xlsx"
        },
        {
            id: "DE2019019",
            sector: "Demographics",
            indicator: "% of households with a dependency ratio of 0.25-0.49",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Dependency.xlsx"
        },
        {
            id: "DE2019020",
            sector: "Demographics",
            indicator: "% of households with a dependency ratio of 0.50-0.74",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Dependency.xlsx"
        },
        {
            id: "DE2019021",
            sector: "Demographics",
            indicator: "% of households with a dependency ratio of 0.75 and higher",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Dependency.xlsx"
        },
        {
            id: "DE2019022",
            sector: "Demographics",
            indicator: "% households with 100% dependants",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Dependency.xlsx"
        },
        {
            id: "DE2019023",
            sector: "Demographics",
            indicator: "% of child-headed households with dependants",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Dependency.xlsx"
        },
        {
            id: "DE2019024",
            sector: "Demographics",
            indicator: "% of female-headed households with dependants",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Dependency.xlsx"
        },
        {
            id: "DE2019025",
            sector: "Demographics",
            indicator: "% of female single-headed households with dependants",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Dependency.xlsx"
        },
        {
            id: "DE2019026",
            sector: "Demographics",
            indicator: "Average dependency ratios",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Dependency.xlsx"
        },
        {
            id: "DE2019027",
            sector: "Demographics",
            indicator: "% households with a child as the head of household (<18 years old)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Head_of_household.xlsx"
        },
        {
            id: "DE2019028",
            sector: "Demographics",
            indicator: "% of households with an elderly person as the head of household (over 59 years old) ",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Head_of_household.xlsx"
        },
        {
            id: "DE2019029",
            sector: "Demographics",
            indicator: "% of households with a female as the head of household",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Head_of_household.xlsx"
        },
        {
            id: "DE2019030",
            sector: "Demographics",
            indicator: "% of households with a male as the head of household",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Head_of_household.xlsx"
        },
        {
            id: "DE2019031",
            sector: "Demographics",
            indicator: "Average age of the head of household",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Head_of_household.xlsx"
        },
        {
            id: "DE2019032",
            sector: "Demographics",
            indicator: "% households with children under 2 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019033",
            sector: "Demographics",
            indicator: "% households with children under 5 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019034",
            sector: "Demographics",
            indicator: "% households with children between 12 and 14 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019035",
            sector: "Demographics",
            indicator: "% households with children between 15 and 17 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019036",
            sector: "Demographics",
            indicator: "% households with children under 18 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019037",
            sector: "Demographics",
            indicator: "% households with children under 15 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019038",
            sector: "Demographics",
            indicator: "% households with members above 59 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019039",
            sector: "Demographics",
            indicator: "% households with four or less household members",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019040",
            sector: "Demographics",
            indicator: "% households with five to six household members",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019041",
            sector: "Demographics",
            indicator: "% households with seven or more household members",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019042",
            sector: "Demographics",
            indicator: "Average household size",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019043",
            sector: "Demographics",
            indicator: "Average number of household members aged five years old or less",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019044",
            sector: "Demographics",
            indicator: "Average number of household members between 6 and 17 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019045",
            sector: "Demographics",
            indicator: "Average number of household members between 18 and 65 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019046",
            sector: "Demographics",
            indicator: "Gender ratio",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019047",
            sector: "Demographics",
            indicator: "% households with children (<18 years old) with the closest relationship to an adult member being extended family or no family relationship",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019048",
            sector: "Demographics",
            indicator: "Average number of non-immediately related children within household",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Household_size_composition.xlsx"
        },
        {
            id: "DE2019049",
            sector: "Demographics",
            indicator: "% individuals 0-4 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019050",
            sector: "Demographics",
            indicator: "% individuals 5-9 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019051",
            sector: "Demographics",
            indicator: "% individuals 10-14 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019052",
            sector: "Demographics",
            indicator: "% individuals 15-19 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019053",
            sector: "Demographics",
            indicator: "% individuals 20-24 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019054",
            sector: "Demographics",
            indicator: "% individuals 25-29 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019055",
            sector: "Demographics",
            indicator: "% individuals 30-34 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019056",
            sector: "Demographics",
            indicator: "% individuals 35-39 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019057",
            sector: "Demographics",
            indicator: "% individuals 40-44 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019058",
            sector: "Demographics",
            indicator: "% individuals 45-49 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019059",
            sector: "Demographics",
            indicator: "% individuals 50-54 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019060",
            sector: "Demographics",
            indicator: "% individuals 55-59 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019061",
            sector: "Demographics",
            indicator: "% individuals 60-64 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019062",
            sector: "Demographics",
            indicator: "% individuals 65-69 years old",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019063",
            sector: "Demographics",
            indicator: "% individuals 70 years old till highest age",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019064",
            sector: "Demographics",
            indicator: "% individuals 0-4 years old (age subcategory 1)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019065",
            sector: "Demographics",
            indicator: "% individuals 5-11 years old (age subcategory 1)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019066",
            sector: "Demographics",
            indicator: "% individuals 12-17 years old (age subcategory 1)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019067",
            sector: "Demographics",
            indicator: "% individuals 18-59 years old (age subcategory 1)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019068",
            sector: "Demographics",
            indicator: "% individuals over 59 years old (age subcategory 1)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019069",
            sector: "Demographics",
            indicator: "% individuals less than 15 years old (age subcategory 2)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019070",
            sector: "Demographics",
            indicator: "% individuals 15 years old and over (age subcategory 2)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019071",
            sector: "Demographics",
            indicator: "% individuals less than 18 years old (age subcategory 3)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019072",
            sector: "Demographics",
            indicator: "% individuals 18 years old and over (age subcategory 3)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019073",
            sector: "Demographics",
            indicator: "% male individuals",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019074",
            sector: "Demographics",
            indicator: "% female individuals",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_PopulationPyramid.xlsx"
        },
        {
            id: "DE2019075",
            sector: "Demographics",
            indicator: "% households who reported all household members arriving to Lebanon at the same time",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Registration_arrival_LEB.xlsx"
        },
        {
            id: "DE2019076",
            sector: "Demographics",
            indicator: "Average time in days between first member arriving to Lebanon and last member arriving to Lebanon",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Registration_arrival_LEB.xlsx"
        },
        {
            id: "DE2019077",
            sector: "Demographics",
            indicator: "Average number of unique registered/recorded case numbers belonging to a household",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Registration_arrival_LEB.xlsx"
        },
        {
            id: "DE2019078",
            sector: "Demographics",
            indicator: "% households with at least one member pregnant or lactating",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019079",
            sector: "Demographics",
            indicator: "% households with at least one member having a visual impairment",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019080",
            sector: "Demographics",
            indicator: "% households with at least one member having a hearing impairment",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019081",
            sector: "Demographics",
            indicator: "% households with at least one member having a physical disability",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019082",
            sector: "Demographics",
            indicator: "% households with at least one member having a intellectual/mental disability",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019083",
            sector: "Demographics",
            indicator: "% households with at least one member having a speech impairment",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019084",
            sector: "Demographics",
            indicator: "% households with at least one member having a temporary illness or injury",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019085",
            sector: "Demographics",
            indicator: "% households with at least one member having a chronic disease",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019086",
            sector: "Demographics",
            indicator: "% households with at least one member having a serious / life-threatening medical condition",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019087",
            sector: "Demographics",
            indicator: "% households having at least one older person unable to care for self",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019088",
            sector: "Demographics",
            indicator: "% households having at least one older person-sole caregiver for children",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019089",
            sector: "Demographics",
            indicator: "% households having a single parent",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019090",
            sector: "Demographics",
            indicator: "% households with at least one member needing support in daily activities",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019091",
            sector: "Demographics",
            indicator: "% households with at least one member with a specific need (including pregnant/lactating)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019092",
            sector: "Demographics",
            indicator: "% households with at least one member with a specific need (2018 categories)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019093",
            sector: "Demographics",
            indicator: "% households with at least one member with a specific need (excluding needs support in daily activities)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019094",
            sector: "Demographics",
            indicator: "% households with at least one member pregnant or lactating under the age of 16",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019095",
            sector: "Demographics",
            indicator: "% female individuals who are pregnant or lactating",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019096",
            sector: "Demographics",
            indicator: "% female individuals under the age of 16 who are pregnant or lactating",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019097",
            sector: "Demographics",
            indicator: "% individuals having a visual impairment",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019098",
            sector: "Demographics",
            indicator: "% individuals having a hearing impairment",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019099",
            sector: "Demographics",
            indicator: "% individuals having a physical disability",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019100",
            sector: "Demographics",
            indicator: "% individuals having an intellectual/mental disability",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019101",
            sector: "Demographics",
            indicator: "% individuals having a temporary illness or injury",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019102",
            sector: "Demographics",
            indicator: "% individuals having a chronic disease",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019103",
            sector: "Demographics",
            indicator: "% individuals having a serious / life-threatening medical condition",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019104",
            sector: "Demographics",
            indicator: "% individuals who are older persons unable to care for self",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019105",
            sector: "Demographics",
            indicator: "% individuals who are older persons-sole caregivers for children",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019106",
            sector: "Demographics",
            indicator: "% individuals who are single parents",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019107",
            sector: "Demographics",
            indicator: "% individuals who need support in daily activities",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019108",
            sector: "Demographics",
            indicator: "% Individuals with a specific need (including pregnant/lactating)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019109",
            sector: "Demographics",
            indicator: "% Individuals with a specific need (2018 categories)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "DE2019110",
            sector: "Demographics",
            indicator: "% Individuals with a specific need (excluding needs support in daily activities)",
            year: "2019",
            download_link: "/vasyr/files/demographics/Vault_Specific_needs.xlsx"
        },
        {
            id: "EV2019001",
            sector: "Economic Vulnerability",
            indicator: "SMEB and POVERTY",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019002",
            sector: "Economic Vulnerability",
            indicator: "Percentage of Household living under Minimum Expenditure Basket (MEB) and Survival Minimum Expenditure Basket (SMEB) Categories",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019003",
            sector: "Economic Vulnerability",
            indicator: "Percentage of households living below/above Poverty Line ",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019004",
            sector: "Economic Vulnerability",
            indicator: "Households by debt category",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019005",
            sector: "Economic Vulnerability",
            indicator: "Average Debt per Household (all Households) ",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019006",
            sector: "Economic Vulnerability",
            indicator: "Average Debt per Capita (all Households) ",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019007 ", 
            sector:"Economic Vulnerability",
            indicator: "Average Debt per Household(only Households with Debt)",
            year: "2019",
            download_link: "/vasyr/ files/ economic_vulnerability/ Vault_MEB_SMEB.xlsx "
        },
        {
            id: "EV2019008",
            sector:"Economic Vulnerability",
            indicator: "Average Debt per Capita(only Households with Debt)",
            year: "2019",
            download_link: "/vasyr/ files/ economic_vulnerability/ Vault_MEB_SMEB.xlsx "
        }, 
        {
            id: "EV2019009",
            sector: "Economic Vulnerability",
            indicator: "Percentage of Households who Borrowed Money in the past 3 Months ",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019010",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Debt Repayment",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019011",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Business Development",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019012",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Assets Procurement",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019013",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Pay Documentation fees",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019014",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Other reasons",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019015",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Buy Food",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019016",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Pay Rent",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019017",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Buy Shelter Material",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019018",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Buy House",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019019",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Pay Health",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019020",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Buy Medicine",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019021",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Buy Water",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019022",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Pay Transportation",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019023",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Friends in Lebanon",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019024",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Friends not in Lebanon",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019025",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Money Lender",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019026",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing:  Local Charity",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019027",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Landlord",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019028",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Supermarket",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019029",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Shawish",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "EV2019030",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Other",
            year: "2019",
            download_link: "/vasyr/files/economic_vulnerability/Vault_MEB_SMEB.xlsx"
        },
        {
            id: "ED2019001",
            sector: "Education",
            indicator: "% children of primary school age (6-11) not attending primary or secondary school",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019002",
            sector: "Education",
            indicator: "% children of lower secondary school age (12-14) not attending lower secondary school or higher",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019003",
            sector: "Education",
            indicator: "% adolescents of upper secondary school age (15-17) not attending upper secondary school or higher",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019004",
            sector: "Education",
            indicator: "% adolescents of post-primary school age (12-19) not attending Technical Vocational Education and Training school or higher",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019005",
            sector: "Education",
            indicator: "Gender Parity Index",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019006",
            sector: "Education",
            indicator: "% of children aged 6 who entered the first grade of primary school",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019007",
            sector: "Education",
            indicator: "% of children aged 3-5 attending an early childhood education programme (KG2-KG1-Nursery)",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019008",
            sector: "Education",
            indicator: "% of students across all grades attending primary school who are 2 or more years older than the intended age",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019009",
            sector: "Education",
            indicator: "Reasons for not attending school during this school year (2018/2019)",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019010",
            sector: "Education",
            indicator: "% children 3 to 5 years old enrolled at school",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019011",
            sector: "Education",
            indicator: "% children 6 to 14 years old enrolled at school",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019012",
            sector: "Education",
            indicator: "% adolescents 15 to 17 years old enrolled at school",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019013",
            sector: "Education",
            indicator: "% children aged 3-5 with no disabilities enrolled at school",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019014",
            sector: "Education",
            indicator: "% children aged 3-5 with disabilities enrolled at school",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019015",
            sector: "Education",
            indicator: "% children aged 6-14 with no disabilities enrolled at school",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019016",
            sector: "Education",
            indicator: "% children aged 6-14 with disabilities enrolled at school",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019017",
            sector: "Education",
            indicator: "% children aged 15-17 with no disabilities enrolled at school",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019018",
            sector: "Education",
            indicator: "% children aged 15-17 with disabilities enrolled at school",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019019",
            sector: "Education",
            indicator: "% of children in first grade of primary school who attended pre-school last year",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_Education.xlsx"
        },
        {
            id: "ED2019020",
            sector: "Education",
            indicator: "% of Syrian youth aged 15-24 not enrolled in formal education during this school year (2018/2019)",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_EducationYouth.xlsx"
        },
        {
            id: "ED2019021",
            sector: "Education",
            indicator: "% of Syrian youth aged 15-24 not enrolled in formal education during previous school year (2017/2018)",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_EducationYouth.xlsx"
        },
        {
            id: "ED2019022",
            sector: "Education",
            indicator: "Reasons provided by refugee youth aged 15-18 for school dropout",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_EducationYouth.xlsx"
        },
        {
            id: "ED2019023",
            sector: "Education",
            indicator: "Reasons provided by refugee youth aged 19-24 for school dropout",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_EducationYouth.xlsx"
        },
        {
            id: "ED2019024",
            sector: "Education",
            indicator: "Reasons provided by refugee youth aged 15-24 for school dropout",
            year: "2019",
            download_link: "/vasyr/files/education/Vault_EducationYouth.xlsx"
        },
        {
            id: "EX2019001",
            sector: "Expenditure",
            indicator: "Household Expenditures",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019002",
            sector: "Expenditure",
            indicator: "Total Expenditures per Month per Capita in US$",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019003",
            sector: "Expenditure",
            indicator: "Food Expenditure Share Categories",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019004",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Food",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019005",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Health",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019006",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Education",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019007",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Rent",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019008",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Water",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019009",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Alcohol",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019010",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Soap and Hygiene",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019011",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Fuel",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019012",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Transportation",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019013",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Clothing",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019014",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Telecome",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019015",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Electricity: Electricite du Liban (EDL)",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019016",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Electricity: Private Generators",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019017",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Assets",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019018",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Other",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019019",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Shelter",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019020",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Gas",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019021",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Legal Assistance",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019022",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Entertainment",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019023",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Debt Repayment",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019024",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Bread & Pasta",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019025",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Cereal",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019026",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Tubers",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019027",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Dairy Products",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019028",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Oil",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019029",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Sugar",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019030",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Canned Food",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019031",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Beans & nuts",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019032",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Fresh Meat",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019033",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Fruits & Vegetables",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019034",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Cooked Food",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "EX2019035",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Condiments",
            year: "2019",
            download_link: "/vasyr/files/expenditure/Vault_Expenditure.xlsx"
        },
        {
            id: "FS2019001",
            sector: "Food security",
            indicator: "Food related coping strategies: Restricted Food Consumption of Female Head of Households",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019002",
            sector: "Food security",
            indicator: "Food related coping strategies: Relied on Less Preferred/Less Expensive Food",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019003",
            sector: "Food security",
            indicator: "Food related coping strategies: Borrowed Food or Relied on Help from Friends or Relatives",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019004",
            sector: "Food security",
            indicator: "Food related coping strategies: Reduced the Number of Meals Eaten per Day",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019005",
            sector: "Food security",
            indicator: "Food related coping strategies: Reduced portion size of meals",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019006",
            sector: "Food security",
            indicator: "Food related coping strategies: Spent Days without Eating",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019007",
            sector: "Food security",
            indicator: "Food related coping strategies: Restricted Consumption by Adults in order of Children Can Eat",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019008",
            sector: "Food security",
            indicator: "Food related coping strategies: Sent Household Members to Eat Elsewhere",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019009",
            sector: "Food security",
            indicator: "Number of days food related  copings were applied:Less Expensive Food",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019010",
            sector: "Food security",
            indicator: "Number of days food related  copings were applied:Borrowed Food",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019011",
            sector: "Food security",
            indicator: "Number of days food related  copings were applied:Reduced Meals",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019012",
            sector: "Food security",
            indicator: "Number of days food related  copings were applied:Reduced Portions",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019013",
            sector: "Food security",
            indicator: "Number of days food related  copings were applied:Spent Days without Food",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019014",
            sector: "Food security",
            indicator: "Number of days food related  copings were applied:Restricted Consumption by Adults",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019015",
            sector: "Food security",
            indicator: "Number of days food related  copings were applied:Sent HH members eat Elsewhere",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019016",
            sector: "Food security",
            indicator: "Number of days food related  copings were applied:Other",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019017",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Sold Household Goods (radio, furniture, television, jewelry etc..)",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019018",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Sold Productive assets or means of transport (sewing machine, wheelbarrow, bicycle, car, livestock..)",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019019",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Reduced essential non-food: Education",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019020",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Reduced essential non-food expenditures: Health",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019021",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Spent savings ",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019022",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Bought food on credit or borrowed money to purchase food",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019023",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Sold house or land",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019024",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Withdrew children from school ",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019025",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Begged",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019026",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Marriage of children under 18",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019027",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Accepted High Risk, Illegal, Socially Degrading Activities",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019028",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Had School Children (6 -15 years old) Involved in Income Generation",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019029",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Household has Debt",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019030",
            sector: "Food security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Bought food on credit or borrowed money to purchase food",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Coping.xlsx"
        },
        {
            id: "FS2019031",
            sector: "Food security",
            indicator: "Food Security Classification",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Food_Security.xlsx"
        },
        {
            id: "FS2019032",
            sector: "Food security",
            indicator: "Percent of households who are Food Secure",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Food_Security.xlsx"
        },
        {
            id: "FS2019033",
            sector: "Food security",
            indicator: "Percent of households who are Marginally Food Insecure",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Food_Security.xlsx"
        },
        {
            id: "FS2019034",
            sector: "Food security",
            indicator: "Percent of households who are Moderately Food Insecure",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Food_Security.xlsx"
        },
        {
            id: "FS2019035",
            sector: "Food security",
            indicator: "Percent of households who are Severely Food Insecure",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Food_Security.xlsx"
        },
        {
            id: "FS2019036",
            sector: "Food security",
            indicator: "Average number of meals consumed by adults",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019037",
            sector: "Food security",
            indicator: "Average number of Meals Consumed by Chidren under 5",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019038",
            sector: "Food security",
            indicator: "Average Food Consumption Score",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019039",
            sector: "Food security",
            indicator: "Percentage of households with Poor food consumption ",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019040",
            sector: "Food security",
            indicator: "Percentage of households with Borderline food consumption ",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019041",
            sector: "Food security",
            indicator: "Percentage of households with Acceptable food consumption ",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019042",
            sector: "Food security",
            indicator: "Household Daily Average Diet Diversity (HDADD)",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019043",
            sector: "Food security",
            indicator: "HDADD Category: <4.5 food groups",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019044",
            sector: "Food security",
            indicator: "HDADD Category: 4.5-6.4 food groups",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019045",
            sector: "Food security",
            indicator: "HDADD Category: >=6.5 food groups",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019046",
            sector: "Food security",
            indicator: "Household Weekly Average Diet Diversity (HWDD)",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019047",
            sector: "Food security",
            indicator: "HWDD <= 6 food groups",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019048",
            sector: "Food security",
            indicator: "HWDD 7-8 food groups",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019049",
            sector: "Food security",
            indicator: "HWDD >= 9 food groups",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019050",
            sector: "Food security",
            indicator: "Weekly Food Consumption: Weekly Food Consumption: Cereal/ Tubers",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019051",
            sector: "Food security",
            indicator: "Weekly Food Consumption: Roots",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019052",
            sector: "Food security",
            indicator: "Weekly Food Consumption:  Dairy Products",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019053",
            sector: "Food security",
            indicator: "Weekly Food Consumption: Meat/ Fish/ Eggs",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019054",
            sector: "Food security",
            indicator: "Weekly Food Consumption: Vegetable/ Leaves",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019055",
            sector: "Food security",
            indicator: "Weekly Food Consumption: Fruits",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019056",
            sector: "Food security",
            indicator: "Weekly Food Consumption: Oils",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019057",
            sector: "Food security",
            indicator: "Weekly Food Consumption: Sugar",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_Foodconsumption.xlsx"
        },
        {
            id: "FS2019058",
            sector: "Food security",
            indicator: "Food consumption score nutrition",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx"
        },
        {
            id: "FS2019059",
            sector: "Food security",
            indicator: "Vitamin A Consumption: Never Consumed",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx"
        },
        {
            id: "FS2019060",
            sector: "Food security",
            indicator: "Vitamin A Consumption: 1 to 6 Times a Week",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx"
        },
        {
            id: "FS2019061",
            sector: "Food security",
            indicator: "Vitamin A Consumption: at Least Daily",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx"
        },
        {
            id: "FS2019062",
            sector: "Food security",
            indicator: "Protein Consumption: Never Consumed",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx"
        },
        {
            id: "FS2019063",
            sector: "Food security",
            indicator: "Protein Consumption:  1 to 6 Times a Week",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx"
        },
        {
            id: "FS2019064",
            sector: "Food security",
            indicator: "Protein Consumption: at Least Daily",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx"
        },
        {
            id: "FS2019065",
            sector: "Food security",
            indicator: "Iron Consumption: Never Consumed",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx"
        },
        {
            id: "FS2019066",
            sector: "Food security",
            indicator: "Iron Consumption: 1 to 6 Times a Week",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx"
        },
        {
            id: "FS2019067",
            sector: "Food security",
            indicator: "Iron Consumption: at Least Daily",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx"
        },
        {
            id: "FS2019068",
            sector: "Food security",
            indicator: "Reduced Coping Strategy Index",
            year: "2019",
            download_link: "/vasyr/files/food_security/Vault_foodsecurity_foodconsumptionscorenutrition.xlsx"
        },
        {
            id: "HE2019001",
            sector: "Health",
            indicator: "% of households that required hospital health care assistance in the past 6 months",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_hospitalcare.xlsx"
        },
        {
            id: "HE2019002",
            sector: "Health",
            indicator: "% households that received the required hospital health care assistance in the past 6 months",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_hospitalcare.xlsx"
        },
        {
            id: "HE2019003",
            sector: "Health",
            indicator: "Types of hospitalization assistance that households reported benefiting from",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_hospitalcare.xlsx"
        },
        {
            id: "HE2019004",
            sector: "Health",
            indicator: "Place of accessing Hospital health care",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_hospitalcare.xlsx"
        },
        {
            id: "HE2019005",
            sector: "Health",
            indicator: "Reasons for not receiving the required hospital health care",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_hospitalcare.xlsx"
        },
        {
            id: "HE2019006",
            sector: "Health",
            indicator: "% households that know where to access medical services assistance in case of emergency",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_hospitalcare.xlsx"
        },
        {
            id: "HE2019007",
            sector: "Health",
            indicator: "% households that have private health insurance",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_hospitalcare.xlsx"
        },
        {
            id: "HE2019008",
            sector: "Health",
            indicator: "Overlap with receiving primary health care PHC and hospital care",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_hospitalcare.xlsx"
        },
        {
            id: "HE2019009",
            sector: "Health",
            indicator: "% household legal residency status and receiving primary health care",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_healthprotectioncrosstabs.xlsx"
        },
        {
            id: "HE2019010",
            sector: "Health",
            indicator: "Household legal residency status and receiving hospital health care",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_healthprotectioncrosstabs.xlsx"
        },
        {
            id: "HE2019011",
            sector: "Health",
            indicator: "Type of community interactions and receiving primary health care",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_healthprotectioncrosstabs.xlsx"
        },
        {
            id: "HE2019012",
            sector: "Health",
            indicator: "Type of community interactions and receiving hospital health care",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_healthprotectioncrosstabs.xlsx"
        },
        {
            id: "HE2019013",
            sector: "Health",
            indicator: "Having a card to withdraw cash or buy food and receiving primary health care",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_healthprotectioncrosstabs.xlsx"
        },
        {
            id: "HE2019014",
            sector: "Health",
            indicator: "Having a card to withdraw cash or buy food and receiving hospital health care",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_healthprotectioncrosstabs.xlsx"
        },
        {
            id: "HE2019015",
            sector: "Health",
            indicator: "Percentage of newborns who were delivered in a hospital",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_childbirthdetails.xlsx"
        },
        {
            id: "HE2019016",
            sector: "Health",
            indicator: "Percentage of newborns who were delivered at home",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_childbirthdetails.xlsx"
        },
        {
            id: "HE2019017",
            sector: "Health",
            indicator: "Percentage of newborns who were delivered in a health care facility- other than hospital",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_childbirthdetails.xlsx"
        },
        {
            id: "HE2019018",
            sector: "Health",
            indicator: "Percentage of newborns who were delivered in a hospital by age",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_childbirthdetails.xlsx"
        },
        {
            id: "HE2019019",
            sector: "Health",
            indicator: "Percentage of newborns who were delivered at home by age",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_childbirthdetails.xlsx"
        },
        {
            id: "HE2019020",
            sector: "Health",
            indicator: "Percentage of newborns who were delivered in a health care facility- other than hospital by age",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_childbirthdetails.xlsx"
        },
        {
            id: "HE2019021",
            sector: "Health",
            indicator: "% households that required primary health care assistance in the last 6 months",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_Primaryhealthcare.xlsx"
        },
        {
            id: "HE2019022",
            sector: "Health",
            indicator: "% households that received the required primary health care assistance in the last 6 months",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_Primaryhealthcare.xlsx"
        },
        {
            id: "HE2019023",
            sector: "Health",
            indicator: "Types of primary health care assistance that households reported benefiting from",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_Primaryhealthcare.xlsx"
        },
        {
            id: "HE2019024",
            sector: "Health",
            indicator: "Place of accessing primary health care",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_Primaryhealthcare.xlsx"
        },
        {
            id: "HE2019025",
            sector: "Health",
            indicator: "Method of accessing primary health care",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_Primaryhealthcare.xlsx"
        },
        {
            id: "HE2019026",
            sector: "Health",
            indicator: "Reasons for visiting a doctor in a private clinic",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_Primaryhealthcare.xlsx"
        },
        {
            id: "HE2019027",
            sector: "Health",
            indicator: "Reasons for not receiving the required primary health care",
            year: "2019",
            download_link: "/vasyr/files/health/vault_Health_Primaryhealthcare.xlsx"
        },
        {
            id: "IY2019001",
            sector: "IYCF",
            indicator: "% of infants 0-5 month old who received only breastmilk during the previous day",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_Infant_Child_Feeding_Practices.xlsx"
        },
        {
            id: "IY2019002",
            sector: "IYCF",
            indicator: "% of infants 6-8 month old who received solid, semi-solid or soft foods or other liquids during the previous day",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_Infant_Child_Feeding_Practices.xlsx"
        },
        {
            id: "IY2019003",
            sector: "IYCF",
            indicator: "% of children 12-15 month old who are fed breastmilk during the previous day",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_Infant_Child_Feeding_Practices.xlsx"
        },
        {
            id: "IY2019004",
            sector: "IYCF",
            indicator: "% children 6-23 month old with minimum adequate diet diversity",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_Infant_Child_Feeding_Practices.xlsx"
        },
        {
            id: "IY2019005",
            sector: "IYCF",
            indicator: "% children 6-23 month old with minimum acceptable meal frequency",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_Infant_Child_Feeding_Practices.xlsx"
        },
        {
            id: "LI2019001",
            sector: "Livelihoods",
            indicator: "Percentage of households with members working in the past 7 days ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019002",
            sector: "Livelihoods",
            indicator: "Income per person during the past 7 days for those who are working ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019003",
            sector: "Livelihoods",
            indicator: "Income per person: gender breakdown",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019004",
            sector: "Livelihoods",
            indicator: "Income per person: age groups",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019005",
            sector: "Livelihoods",
            indicator: "Main household source of income: Agriculture",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019006",
            sector: "Livelihoods",
            indicator: "Main household source of income: Begging",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019007",
            sector: "Livelihoods",
            indicator: "Main household source of income: Cash from charitable organizations",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019008",
            sector: "Livelihoods",
            indicator: "Main household source of income: Cash from humanitarian organizations",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019009",
            sector: "Livelihoods",
            indicator: "Main household source of income: Concierge",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019010",
            sector: "Livelihoods",
            indicator: "Main household source of income: Construction",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019011",
            sector: "Livelihoods",
            indicator: "Main household source of income: Credit/debts (formal) - banks)",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019012",
            sector: "Livelihoods",
            indicator: "Main household source of income: Credit/debts (informal) - shops, friends hosts)",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019013",
            sector: "Livelihoods",
            indicator: "Main household source of income: E-cards WFP FOOD",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019014",
            sector: "Livelihoods",
            indicator: "Main household source of income: Gifts from family/relatives",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019015",
            sector: "Livelihoods",
            indicator: "Main household source of income: Manufacturing",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019016",
            sector: "Livelihoods",
            indicator: "Main household source of income: Other (specify)",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019017",
            sector: "Livelihoods",
            indicator: "Main household source of income: Other services: hotel, restaurant, transport, personal services",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019018",
            sector: "Livelihoods",
            indicator: "Main household source of income: Other types of sales",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019019",
            sector: "Livelihoods",
            indicator: "Main household source of income: Professional Services",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019020",
            sector: "Livelihoods",
            indicator: "Main household source of income: Remittances",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019021",
            sector: "Livelihoods",
            indicator: "Main household source of income: Sale of assets (car, bicycle, refrigerator, TV, jewelry)",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019022",
            sector: "Livelihoods",
            indicator: "Main household source of income: Sale of crops ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019023",
            sector: "Livelihoods",
            indicator: "Main household source of income: Sale of livestock and animal produce    ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019024",
            sector: "Livelihoods",
            indicator: "Main household source of income: Sale of food assistance",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019025",
            sector: "Livelihoods",
            indicator: "Main household source of income: Savings",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019026",
            sector: "Livelihoods",
            indicator: "Main household source of income: Wholesale and retail trade",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019027",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Agriculture",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019028",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Begging",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019029",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Cash from charitable organizations",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019030",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): ATM Cards/Cash from humanitarian organizations",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019031",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Concierge",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019032",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Construction",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019033",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Credit/debts (formal - banks)",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019034",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Credit/debts (informal - shops, friends, hosts)",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019035",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): E-cards WFP FOOD",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019036",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Gifts from family/relatives",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019037",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Manufacturing",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019038",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Other",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019039",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Other services: hotel, restaurant, transport, personal services",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019040",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Other types of sales",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019041",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Professional Services",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019042",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Remittances",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019043",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Sale of assets (car, bicycle, refrigerator, TV, jewelry)",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019044",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Sale of crops ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019045",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Sale of livestock and animal produce    ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019046",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Sale of non-food assistance",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019047",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Wholesale and retail trade",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019048",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Sale of food aid (food vouchers or parcels) ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Livelihoods.xlsx"
        },
        {
            id: "LI2019049",
            sector: "Livelihoods",
            indicator: "Reason for unemployment",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx"
        },
        {
            id: "LI2019050",
            sector: "Livelihoods",
            indicator: "Percent of working age (over 15) that stated Legal residency as a reason for unemployment",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx"
        },
        {
            id: "LI2019051",
            sector: "Livelihoods",
            indicator: "Percent of working age (over 15) that stated Dependent children as a reason for unemployment",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx"
        },
        {
            id: "LI2019052",
            sector: "Livelihoods",
            indicator: "Percent of working age (over 15) that stated Gender considerations as a reason for unemployment",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx"
        },
        {
            id: "LI2019053",
            sector: "Livelihoods",
            indicator: "Percent of working age (over 15) that stated Lack of skill/experience as a reason for unemployment",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx"
        },
        {
            id: "LI2019054",
            sector: "Livelihoods",
            indicator: "Percent of working age (over 15) that stated Continuing Education as a reason for unemployment",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx"
        },
        {
            id: "LI2019055",
            sector: "Livelihoods",
            indicator: "Percent of working age (over 15) that stated Has been subject to serious abuse/exploitation in previous work as a reason for unemployment",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx"
        },
        {
            id: "LI2019056",
            sector: "Livelihoods",
            indicator: "Percent of working age (over 15) that stated Unwillingness to work as a reason for unemployment",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx"
        },
        {
            id: "LI2019057",
            sector: "Livelihoods",
            indicator: "Percent of working age (over 15) that stated Elderly as a reason for unemployment",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx"
        },
        {
            id: "LI2019058",
            sector: "Livelihoods",
            indicator: "Percent of working age (over 15) that stated Other as a reason for unemployment",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_livelihoods_Reasonnotworking.xlsx"
        },
        {
            id: "LI2019059",
            sector: "Livelihoods",
            indicator: "Sector of employment - Individual level",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019060",
            sector: "Livelihoods",
            indicator: "AgriculturePercent of working age individuals (above 15) employed in ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019061",
            sector: "Livelihoods",
            indicator: "ConstructionPercent of working age individuals (above 15) employed in ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019062",
            sector: "Livelihoods",
            indicator: "ConciergePercent of working age individuals (above 15) employed in ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019063",
            sector: "Livelihoods",
            indicator: "ManufacturingPercent of working age individuals (above 15) employed in ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019064",
            sector: "Livelihoods",
            indicator: "Retail (Shops)Percent of working age individuals (above 15) employed in ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019065",
            sector: "Livelihoods",
            indicator: "BeggingPercent of working age individuals (above 15) employed in ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019066",
            sector: "Livelihoods",
            indicator: "Professional ServicesPercent of working age individuals (above 15) employed in ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019067",
            sector: "Livelihoods",
            indicator: "Occasional WorkPercent of working age individuals (above 15) employed in ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019068",
            sector: "Livelihoods",
            indicator: "Other ServicesPercent of working age individuals (above 15) employed in ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019069",
            sector: "Livelihoods",
            indicator: "Selling in the streetPercent of working age individuals (above 15) employed in ",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019070",
            sector: "Livelihoods",
            indicator: "Average Number of hours per week the person usually work for all jobs",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019071",
            sector: "Livelihoods",
            indicator: "Average Number of days this person work during the last 7 days for all jobs",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019072",
            sector: "Livelihoods",
            indicator: "Percent of individuals who had a Regular work",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "LI2019073",
            sector: "Livelihoods",
            indicator: "Percent of individuals who had More than one job",
            year: "2019",
            download_link: "/vasyr/files/fs_livelihoods_economic/Vault_Sectors Individual.xlsx"
        },
        {
            id: "PR2019001",
            sector: "Protection",
            indicator: "% of Syrian individuals aged 15 years and above with legal residency permits",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019002",
            sector: "Protection",
            indicator: "% of individuals 15-18 years old holding legal residency permits",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019003",
            sector: "Protection",
            indicator: "% of individuals above 18 years old holding legal residency permits",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019004",
            sector: "Protection",
            indicator: "% of households that have all members aged 15 years and above holding legal residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019005",
            sector: "Protection",
            indicator: "% of households that have at least one member aged 15 years and above holding legal residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019006",
            sector: "Protection",
            indicator: "% households that do not have any members aged 15 years and above holding legal residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019007",
            sector: "Protection",
            indicator: "% of individuals who reported expiry of residency as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019008",
            sector: "Protection",
            indicator: "% of individuals who reported being registered with UNHCR but GSO asked them to obtain a Lebanese sponsor as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019009",
            sector: "Protection",
            indicator: "% of individuals who reported not being registered with UNHCR or arriving after 2015 and being unable to obtain a sponsor as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019010",
            sector: "Protection",
            indicator: "% of individuals who reported being registered with UNHCR but previously renewing based on sponsorship and being unable to obtain a sponsor as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019011",
            sector: "Protection",
            indicator: "% of individuals who reported GSO refusing their application without explanation as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019012",
            sector: "Protection",
            indicator: "% of individuals who reported GSO telling them to come back as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019013",
            sector: "Protection",
            indicator: "% of individuals who reported waiting for a housing attestation as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019014",
            sector: "Protection",
            indicator: "% of individuals who reported GSO refusing residency due to illegal entry as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019015",
            sector: "Protection",
            indicator: "% of individuals who reported reluctance to obtain residency for personal reasons as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019016",
            sector: "Protection",
            indicator: "% of individuals who reported having a deportation order as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019017",
            sector: "Protection",
            indicator: "% of individuals who reported being unaware of procedures as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019018",
            sector: "Protection",
            indicator: "% of individuals who reported fear of approaching GSO as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019019",
            sector: "Protection",
            indicator: "% of individuals who reported being discouraged to approach GSO because they heard GSO is now renewing based on UNHCR certification and asking for money and sponsors as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019020",
            sector: "Protection",
            indicator: "% of individuals who reported lacking ID as a reason for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019021",
            sector: "Protection",
            indicator: "% of individuals who reported other reasons for lack of residency",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019022",
            sector: "Protection",
            indicator: "% of individuals who have legal residency permits through the UNHCR certification",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019023",
            sector: "Protection",
            indicator: "% of individuals who have legal residency permits through sponsorship",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019024",
            sector: "Protection",
            indicator: "% of individuals who have legal residency permits through tourism",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019025",
            sector: "Protection",
            indicator: "% of individuals who have legal residency permits through rent/property ownership",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "PR2019026",
            sector: "Protection",
            indicator: "% of individuals who have legal residency permits through courtesy",
            year: "2019",
            download_link: "/vasyr/files/protection/Protection_Legal_Residency.xlsx"
        },
        {
            id: "SH2019001",
            sector: "Shelter",
            indicator: "% households that moved accommodation in the past 12 months",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019002",
            sector: "Shelter",
            indicator: "% households that moved accommodation in the past 6 months (of those who moved in the past 12 months)",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019003",
            sector: "Shelter",
            indicator: "Reasons for changing accommodation in the past 12 months: Eviction",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019004",
            sector: "Shelter",
            indicator: "Reasons for changing accommodation in the past 12 months: End of rental agreement",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019005",
            sector: "Shelter",
            indicator: "Reasons for changing accommodation in the past 12 months: End of free hosting agreement / rent assistance",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019006",
            sector: "Shelter",
            indicator: "Reasons for changing accommodation in the past 12 months: Rent too expensive",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019007",
            sector: "Shelter",
            indicator: "Reasons for changing accommodation in the past 12 months: Lack of livelihood opportunities in the area/location",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019008",
            sector: "Shelter",
            indicator: "Reasons for changing accommodation in the past 12 months: Shelter and WASH Conditions not acceptable",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019009",
            sector: "Shelter",
            indicator: "Reasons for changing accommodation in the past 12 months: Tension with community / restrictive measures",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019010",
            sector: "Shelter",
            indicator: "Reasons for changing accommodation in the past 12 months: Tension with landlord",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019011",
            sector: "Shelter",
            indicator: "Reasons for changing accommodation in the past 12 months: Security threats and harassment",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019012",
            sector: "Shelter",
            indicator: "Reasons for changing accommodation in the past 12 months: Not enough privacy for my family",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019013",
            sector: "Shelter",
            indicator: "Reasons for changing accommodation in the past 12 months: To seek healthcare as it was not available in the area where we were staying",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019014",
            sector: "Shelter",
            indicator: "Reasons for changing accommodation in the past 12 months: Other (specify)",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019015",
            sector: "Shelter",
            indicator: "Reasons for eviction, for those who were evicted: Alternative use by the landlord/owner",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019016",
            sector: "Shelter",
            indicator: "Reasons for eviction, for those who were evicted: Dispute with landlord/owner",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019017",
            sector: "Shelter",
            indicator: "Reasons for eviction, for those who were evicted: Environment and/or sanitation",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019018",
            sector: "Shelter",
            indicator: "Reasons for eviction, for those who were evicted: Inability to pay rent",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019019",
            sector: "Shelter",
            indicator: "Reasons for eviction, for those who were evicted: Safety and/or security",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019020",
            sector: "Shelter",
            indicator: "Reasons for eviction, for those who were evicted: Social tensions",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019021",
            sector: "Shelter",
            indicator: "% of households that received an eviction notice prior to being evicted: Yes, written notice",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019022",
            sector: "Shelter",
            indicator: "% of households that received an eviction notice prior to being evicted: Yes, verbal notice",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019023",
            sector: "Shelter",
            indicator: "% of households that received an eviction notice prior to being evicted: No",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019024",
            sector: "Shelter",
            indicator: "Notice period given before eviction: Within 1 week",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019025",
            sector: "Shelter",
            indicator: "Notice period given before eviction: Within 1 month",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019026",
            sector: "Shelter",
            indicator: "Notice period given before eviction: Within 3 months",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019027",
            sector: "Shelter",
            indicator: "Notice period given before eviction: Within 6 months",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019028",
            sector: "Shelter",
            indicator: "% households that have been evicted during their stay in Lebanon",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019029",
            sector: "Shelter",
            indicator: "% households that have been evicted more than once during their stay in Lebanon",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019030",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months: Active construction site",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019031",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months: Agricultural/engine/pump room",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019032",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months:",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019033",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months:",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019034",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months:",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019035",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months: Apartment/house/room",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019036",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months: Concierge's room in residential building",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019037",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months: Factory",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019038",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months: Farm",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019039",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months: Garage",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019040",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months: Hotel room",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019041",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months: School",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019042",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months: Shop",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019043",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months: Tent",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019044",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months: Warehouse",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019045",
            sector: "Shelter",
            indicator: "Type of previous shelter, for those who have moved in the past 12 months: Workshop",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_Previousmovementevictions.xlsx"
        },
        {
            id: "SH2019046",
            sector: "Shelter",
            indicator: "% households that are currently living under an eviction notice",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_Currentevictionnotices.xlsx"
        },
        {
            id: "SH2019047",
            sector: "Shelter",
            indicator: "Expected time to leave the property/shelter: Within 1 week",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_Currentevictionnotices.xlsx"
        },
        {
            id: "SH2019048",
            sector: "Shelter",
            indicator: "Expected time to leave the property/shelter: Within 1 month",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_Currentevictionnotices.xlsx"
        },
        {
            id: "SH2019049",
            sector: "Shelter",
            indicator: "Expected time to leave the property/shelter: Within 3 months",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_Currentevictionnotices.xlsx"
        },
        {
            id: "SH2019050",
            sector: "Shelter",
            indicator: "Expected time to leave the property/shelter: Within 6 months",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_Currentevictionnotices.xlsx"
        },
        {
            id: "SH2019051",
            sector: "Shelter",
            indicator: "Expected time to leave the property/shelter: Within 1 year",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_Currentevictionnotices.xlsx"
        },
        {
            id: "SH2019052",
            sector: "Shelter",
            indicator: "Source of eviction notice: Municipality or mayor",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_Currentevictionnotices.xlsx"
        },
        {
            id: "SH2019053",
            sector: "Shelter",
            indicator: "Source of eviction notice: LAF or ISF",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_Currentevictionnotices.xlsx"
        },
        {
            id: "SH2019054",
            sector: "Shelter",
            indicator: "Source of eviction notice: Other authority (please specify)",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_Currentevictionnotices.xlsx"
        },
        {
            id: "SH2019055",
            sector: "Shelter",
            indicator: "Source of eviction notice: Landlord/owner",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_Currentevictionnotices.xlsx"
        },
        {
            id: "SH2019056",
            sector: "Shelter",
            indicator: "Source of eviction notice: Other (please specify)",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_Currentevictionnotices.xlsx"
        },
        {
            id: "SH2019057",
            sector: "Shelter",
            indicator: "% households that had an incident with their current landlord in the past 6 months",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_IncidentsLandlord.xlsx"
        },
        {
            id: "SH2019058",
            sector: "Shelter",
            indicator: "Incidents with landlord in the past 6 months: Blackmailed",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_IncidentsLandlord.xlsx"
        },
        {
            id: "SH2019059",
            sector: "Shelter",
            indicator: "Incidents with landlord in the past 6 months: Coerced",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_IncidentsLandlord.xlsx"
        },
        {
            id: "SH2019060",
            sector: "Shelter",
            indicator: "Incidents with landlord in the past 6 months: Threatened",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_IncidentsLandlord.xlsx"
        },
        {
            id: "SH2019061",
            sector: "Shelter",
            indicator: "Incidents with landlord in the past 6 months: Others",
            year: "2019",
            download_link: "/vasyr/files/shelter/Vault_shelter_IncidentsLandlord.xlsx"
        },
        {
            id: "SH2019062",
            sector: "Shelter",
            indicator: "% households with a living space of < 4.5 m2 per person",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Overcrowding.xlsx"
        },
        {
            id: "SH2019063",
            sector: "Shelter",
            indicator: "% households with a living space of >= 4.5 m2 per person",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Overcrowding.xlsx"
        },
        {
            id: "SH2019064",
            sector: "Shelter",
            indicator: "% of households planning to move in the next 6 months",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019065",
            sector: "Shelter",
            indicator: "Reasons for planning to change accommodation, for those planning to move in the next 6 months: Eviction",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019066",
            sector: "Shelter",
            indicator: "Reasons for planning to change accommodation, for those planning to move in the next 6 months: End of rental agreement",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019067",
            sector: "Shelter",
            indicator: "Reasons for planning to change accommodation, for those planning to move in the next 6 months: End of free hosting agreement / rent assistance",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019068",
            sector: "Shelter",
            indicator: "Reasons for planning to change accommodation, for those planning to move in the next 6 months: Rent too expensive",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019069",
            sector: "Shelter",
            indicator: "Reasons for planning to change accommodation, for those planning to move in the next 6 months: Lack of livelihood opportunities in the area/location",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019070",
            sector: "Shelter",
            indicator: "Reasons for planning to change accommodation, for those planning to move in the next 6 months: Shelter and WASH conditions not acceptable",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019071",
            sector: "Shelter",
            indicator: "Reasons for planning to change accommodation, for those planning to move in the next 6 months: Tension with landlord",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019072",
            sector: "Shelter",
            indicator: "Reasons for planning to change accommodation, for those planning to move in the next 6 months: Security threats and harassment",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019073",
            sector: "Shelter",
            indicator: "Reasons for planning to change accommodation, for those planning to move in the next 6 months: Not enough privacy for my family",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019074",
            sector: "Shelter",
            indicator: "Reasons for planning to change accommodation, for those planning to move in the next 6 months: To seek healthcare as it was not available in the area where we were staying",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019075",
            sector: "Shelter",
            indicator: "Reasons for planning to change accommodation, for those planning to move in the next 6 months: Others (specify)",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019076",
            sector: "Shelter",
            indicator: "Future type of accommodation, for those planning to move in the next 6 months: Active construction site",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019077",
            sector: "Shelter",
            indicator: "Future type of accommodation, for those planning to move in the next 6 months: Agricultural/engine/pump room",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019078",
            sector: "Shelter",
            indicator: "Future type of accommodation, for those planning to move in the next 6 months: Apartment/house/room",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019079",
            sector: "Shelter",
            indicator: "Future type of accommodation, for those planning to move in the next 6 months: Concierge's room in residential building",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019080",
            sector: "Shelter",
            indicator: "Future type of accommodation, for those planning to move in the next 6 months: Prefab unit",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019081",
            sector: "Shelter",
            indicator: "Future type of accommodation, for those planning to move in the next 6 months: School",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019082",
            sector: "Shelter",
            indicator: "Future type of accommodation, for those planning to move in the next 6 months: Shop",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019083",
            sector: "Shelter",
            indicator: "Future type of accommodation, for those planning to move in the next 6 months: Tent",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_plannedmovement.xlsx"
        },
        {
            id: "SH2019084",
            sector: "Shelter",
            indicator: "Monthly average and median rent in USD (per household)",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019085",
            sector: "Shelter",
            indicator: "% households with rent cost below 88 USD",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019086",
            sector: "Shelter",
            indicator: "% households with rent cost 88-150 USD",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019087",
            sector: "Shelter",
            indicator: "% households with rent cost 151-200 USD",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019088",
            sector: "Shelter",
            indicator: "% households with rent cost 201-250 USD",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019089",
            sector: "Shelter",
            indicator: "% households with rent cost above 250 USD",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019090",
            sector: "Shelter",
            indicator: "Services included in rental payments: Water supply only",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019091",
            sector: "Shelter",
            indicator: "Services included in rental payments: Electricity supply only",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019092",
            sector: "Shelter",
            indicator: "Services included in rental payments: Water and electricity",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019093",
            sector: "Shelter",
            indicator: "Services included in rental payments: Other services only",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019094",
            sector: "Shelter",
            indicator: "Services included in rental payments: Water, electricity and other services",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019095",
            sector: "Shelter",
            indicator: "Services included in rental payments: None",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019096",
            sector: "Shelter",
            indicator: "Types of rental agreements: Written agreement",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019097",
            sector: "Shelter",
            indicator: "Types of rental agreements: Verbal agreement",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019098",
            sector: "Shelter",
            indicator: "Lease agreement registered with the municipality",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019099",
            sector: "Shelter",
            indicator: "Payment of municipal taxes",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019100",
            sector: "Shelter",
            indicator: "Period of rental agreement: One month",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019101",
            sector: "Shelter",
            indicator: "Period of rental agreement: 3 months",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019102",
            sector: "Shelter",
            indicator: "Period of rental agreement: 6 months",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019103",
            sector: "Shelter",
            indicator: "Period of rental agreement: 12 months",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019104",
            sector: "Shelter",
            indicator: "% households with a proof of rental payment in the past 6 months",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019105",
            sector: "Shelter",
            indicator: "Rental proof type among those having proof of rental payment in the past 6 months: Paper receipt",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019106",
            sector: "Shelter",
            indicator: "Rental proof type among those having proof of rental payment in the past 6 months: Presence of witness",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019107",
            sector: "Shelter",
            indicator: "Rental proof type among those having proof of rental payment in the past 6 months: Other",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Rentrentalagreements.xlsx"
        },
        {
            id: "SH2019108",
            sector: "Shelter",
            indicator: "% households living in dangerous conditions",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_vault_shelter_Shelter conditionsnewcategors.xlsx"
        },
        {
            id: "SH2019109",
            sector: "Shelter",
            indicator: "% households living in substandard conditions",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_vault_shelter_Shelter conditionsnewcategors.xlsx"
        },
        {
            id: "SH2019110",
            sector: "Shelter",
            indicator: "Shelter conditions: shelter in dangerous condition",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019111",
            sector: "Shelter",
            indicator: "Shelter conditions: shelter much below shelter standards",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019112",
            sector: "Shelter",
            indicator: "Shelter conditions: no observed adverse shelter conditions",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019113",
            sector: "Shelter",
            indicator: "Detailed shelter conditions: Shelter in danger to collapse",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019114",
            sector: "Shelter",
            indicator: "Detailed shelter conditions: Shelter with damaged roof",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019115",
            sector: "Shelter",
            indicator: "Detailed shelter conditions: Shelter with damaged columns",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019116",
            sector: "Shelter",
            indicator: "Detailed shelter conditions: Shelter with unsealed windows/doors",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019117",
            sector: "Shelter",
            indicator: "Detailed shelter conditions: Shelters with leaking roof",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019118",
            sector: "Shelter",
            indicator: "Detailed shelter conditions: Shelters with leakage/rot in the walls",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019119",
            sector: "Shelter",
            indicator: "Detailed shelter conditions: Shelter with damaged walls",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019120",
            sector: "Shelter",
            indicator: "Detailed shelter conditions: Shelters with water pipes not functional",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019121",
            sector: "Shelter",
            indicator: "Detailed shelter conditions: Shelters with sanitation pipes not functional",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019122",
            sector: "Shelter",
            indicator: "Detailed shelter conditions: Shelters with Rats/insect infestation",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019123",
            sector: "Shelter",
            indicator: "Detailed shelter conditions: Shelters with latrine/toilet not usable",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019124",
            sector: "Shelter",
            indicator: "Detailed shelter conditions: Shelters with bathing/washing facilities not usable",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019125",
            sector: "Shelter",
            indicator: "Detailed shelter conditions: Shelter with inadequate electricity installment",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019126",
            sector: "Shelter",
            indicator: "Conditions in surrounding setting: Shelters in area with physical security threats",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019127",
            sector: "Shelter",
            indicator: "Conditions in surrounding setting: Shelters in area with high population density",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019128",
            sector: "Shelter",
            indicator: "Conditions in surrounding setting: Shelters in area with generally low standard living conidtions",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019129",
            sector: "Shelter",
            indicator: "Conditions in surrounding setting: Shelters in area that is isolated and far from basic services",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019130",
            sector: "Shelter",
            indicator: "Conditions in surrounding setting: Shelters in area that is in proximity to watersprings, rivers, and other protected areas",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019131",
            sector: "Shelter",
            indicator: "Conditions in surrounding setting: Shelter in area that has poor sanitation conditions",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019132",
            sector: "Shelter",
            indicator: "Conditions in surrounding setting: Shelters with with proximity to manmade hazards",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019133",
            sector: "Shelter",
            indicator: "Conditions in surrounding setting: Shelters  in proximity to dumpsites, solid waste treatment plant",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019134",
            sector: "Shelter",
            indicator: "Conditions in surrounding setting: Shelters with poor solid waste management",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019135",
            sector: "Shelter",
            indicator: "WASH / Latrines: % households that share latrines with 15 people and more per toilet",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019136",
            sector: "Shelter",
            indicator: "WASH / Latrines: % households with no access to bathroom/ toilets",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Shelterconditions.xlsx"
        },
        {
            id: "SH2019137",
            sector: "Shelter",
            indicator: "Type of shelter: Active construction site",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019138",
            sector: "Shelter",
            indicator: "Type of shelter: Agricultural/engine/pump room",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019139",
            sector: "Shelter",
            indicator: "Type of shelter: Apartment/house/room",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019140",
            sector: "Shelter",
            indicator: "Type of shelter: Concierge's room in residential building",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019141",
            sector: "Shelter",
            indicator: "Type of shelter: Factory",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019142",
            sector: "Shelter",
            indicator: "Type of shelter: Farm",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019143",
            sector: "Shelter",
            indicator: "Type of shelter: Garage",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019144",
            sector: "Shelter",
            indicator: "Type of shelter: Hotel room",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019145",
            sector: "Shelter",
            indicator: "Type of shelter: Prefab unit",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019146",
            sector: "Shelter",
            indicator: "Type of shelter: School",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019147",
            sector: "Shelter",
            indicator: "Type of shelter: Shop",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019148",
            sector: "Shelter",
            indicator: "Type of shelter: Tent",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019149",
            sector: "Shelter",
            indicator: "Type of shelter: Warehouse",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019150",
            sector: "Shelter",
            indicator: "Type of shelter: Workshop",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019151",
            sector: "Shelter",
            indicator: "Shelter category: Residential",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019152",
            sector: "Shelter",
            indicator: "Shelter category: Non-residential",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019153",
            sector: "Shelter",
            indicator: "Shelter category: Non-Permanent",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019154",
            sector: "Shelter",
            indicator: "Crosstabulation between shelter type and expenditure baskets",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019155",
            sector: "Shelter",
            indicator: "Occupancy type: Owned",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019156",
            sector: "Shelter",
            indicator: "Occupancy type: Rented (direct rent payment)",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019157",
            sector: "Shelter",
            indicator: "Occupancy type: Rented (in exchange of work)",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019158",
            sector: "Shelter",
            indicator: "Occupancy type: Hosted for free",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019159",
            sector: "Shelter",
            indicator: "Occupancy type: Assisted (by organizations, agencies, charity)",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019160",
            sector: "Shelter",
            indicator: "Occupancy type: Squatting",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019161",
            sector: "Shelter",
            indicator: "Occupancy type: Other, please specify",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019162",
            sector: "Shelter",
            indicator: "Crosstabulation between types of housing and types of occupancy",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019163",
            sector: "Shelter",
            indicator: "Most important factor for selecting place of residence: Rent cost",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019164",
            sector: "Shelter",
            indicator: "Most important factor for selecting place of residence: Proximity to family or relatives",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019165",
            sector: "Shelter",
            indicator: "Most important factor for selecting place of residence: Proximity to work/livelihoods",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019166",
            sector: "Shelter",
            indicator: "Most important factor for selecting place of residence: Proximity to services village, school, health",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019167",
            sector: "Shelter",
            indicator: "Most important factor for selecting place of residence: Be within community with same background",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019168",
            sector: "Shelter",
            indicator: "Most important factor for selecting place of residence: Being far from the conflict",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019169",
            sector: "Shelter",
            indicator: "Most important factor for selecting place of residence: Adult informal labour for rent",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019170",
            sector: "Shelter",
            indicator: "Most important factor for selecting place of residence: Being far away from military bases or checkpoints",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "SH2019171",
            sector: "Shelter",
            indicator: "Most important factor for selecting place of residence: Others (specify)",
            year: "2019",
            download_link: "/vasyr/files/shelter/vault_shelter_Typeshelteroccupancy.xlsx"
        },
        {
            id: "ST2019001",
            sector: "Social transfers",
            indicator: "% children and adolescents under 18 living in households who received any kind of social transfers in the last 3 months",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_SocialTransfers.xlsx"
        },
        {
            id: "ST2019002",
            sector: "Social transfers",
            indicator: "% households in the two lowest wealth quintiles (under MEB) that received any kind of social transfers in the last 3 months",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_SocialTransfers.xlsx"
        },
        {
            id: "ST2019003",
            sector: "Social transfers",
            indicator: "% household members who received any type of social transfers in the last 3 months",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_SocialTransfers.xlsx"
        },
        {
            id: "ST2019004",
            sector: "Social transfers",
            indicator: "% youth aged 18-24 living in households who received any type of social transfers in the last 3 months",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_SocialTransfers.xlsx"
        },
        {
            id: "ST2019005",
            sector: "Social transfers",
            indicator: "% children & youth aged 5-24 currently attending school who received any kind of school-related support during the 2018/2019 academic year",
            year: "2019",
            download_link: "/vasyr/files/child_protection/Vault_SocialTransfers.xlsx"
        },
        {
            id: "WA2019001",
            sector: "WASH",
            indicator: "% of individuals who use a flush toilet",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Sanitation.xlsx"
        },
        {
            id: "WA2019002",
            sector: "WASH",
            indicator: "% of individuals who use an improved pit latrine with cement slab",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Sanitation.xlsx"
        },
        {
            id: "WA2019003",
            sector: "WASH",
            indicator: "% of individuals who use a traditional/ pit latrine with no slab",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Sanitation.xlsx"
        },
        {
            id: "WA2019004",
            sector: "WASH",
            indicator: "% of individuals who use a bucket as a sanitation facility",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Sanitation.xlsx"
        },
        {
            id: "WA2019005",
            sector: "WASH",
            indicator: "% of individuals who use open air as a sanitation facility ",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Sanitation.xlsx"
        },
        {
            id: "WA2019006",
            sector: "WASH",
            indicator: "% of individuals who use improved sanitation facilities",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Sanitation.xlsx"
        },
        {
            id: "WA2019007",
            sector: "WASH",
            indicator: "% of  individuals who use a basic sanitation service",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Sanitation.xlsx"
        },
        {
            id: "WA2019008",
            sector: "WASH",
            indicator: "% of individuals with a disability who use disability-adjusted sanitation facilities",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Sanitation.xlsx"
        },
        {
            id: "WA2019009",
            sector: "WASH",
            indicator: "% individuals who use improved drinking water sources",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019010",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is water tap/water network <2 hrs per day",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019011",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is water tap/water network >2 hrs per day",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019012",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is piped water to yard/plot",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019013",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is protected well",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019014",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is bottled mineral water",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019015",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is protected borehole",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019016",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is protected spring",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019017",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is water tank/trucked water (UN/NGO provided)",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019018",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is water tank/trucked water (non-UN/NGO private provider)",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019019",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is public/shared water stand/taps",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019020",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is unprotected well",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019021",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is unprotected borehole",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019022",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is unprotected spring",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019023",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is rainwater",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019024",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is surface water",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019025",
            sector: "WASH",
            indicator: "% individuals whose main drinking water source is other source (not listed above)",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019026",
            sector: "WASH",
            indicator: "% of individuals who have a water source available when needed (immediate availability)",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "WA2019027",
            sector: "WASH",
            indicator: "% of individuals who use a basic drinking water service (available within 30min round trip collection time) ",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_Water.xlsx"
        },
        {
            id: "YO2019001",
            sector: "Youth",
            indicator: "% Syrian youth aged 15-24 who are not employed, not in education, and not attending any training (NEET)",
            year: "2019",
            download_link: "/vasyr/files/wash/Vault_NEET.xlsx"
        },
        {
            id: "WA2020001",
            sector: "WASH & Sanitation",
            indicator: "Types of improved water sources",
            year: "2020",
            download_link: "/vasyr/files/wash/VASyR_2020_Vault_WASH_Sanitation.xlsx"
        },
        {
            id: "WA2020002",
            sector: "WASH & Sanitation",
            indicator: "Types of unimproved water sources",
            year: "2020",
            download_link: "/vasyr/files/wash/VASyR_2020_Vault_WASH_Sanitation.xlsx"
        },
        {
            id: "WA2020003",
            sector: "WASH & Sanitation",
            indicator: "Use of improved drinking water sources",
            year: "2020",
            download_link: "/vasyr/files/wash/VASyR_2020_Vault_WASH_Sanitation.xlsx"
        },
        {
            id: "WA2020004",
            sector: "WASH & Sanitation",
            indicator: "Availability of drinking water",
            year: "2020",
            download_link: "/vasyr/files/wash/VASyR_2020_Vault_WASH_Sanitation.xlsx"
        },
        {
            id: "WA2020005",
            sector: "WASH & Sanitation",
            indicator: "Use of basic drinking water service",
            year: "2020",
            download_link: "/vasyr/files/wash/VASyR_2020_Vault_WASH_Sanitation.xlsx"
        },
        {
            id: "WA2020006",
            sector: "WASH & Sanitation",
            indicator: "Types of sanitation facilities",
            year: "2020",
            download_link: "/vasyr/files/wash/VASyR_2020_Vault_WASH_Sanitation.xlsx"
        },
        {
            id: "WA2020007",
            sector: "WASH & Sanitation",
            indicator: "Use of improved sanitation facilities",
            year: "2020",
            download_link: "/vasyr/files/wash/VASyR_2020_Vault_WASH_Sanitation.xlsx"
        },
        {
            id: "WA2020008",
            sector: "WASH & Sanitation",
            indicator: "Use of basic sanitation service",
            year: "2020",
            download_link: "/vasyr/files/wash/VASyR_2020_Vault_WASH_Sanitation.xlsx"
        },
        {
            id: "WA2020009",
            sector: "WASH & Sanitation",
            indicator: "Use of disability-adjusted sanitation facilities",
            year: "2020",
            download_link: "/vasyr/files/wash/VASyR_2020_Vault_WASH_Sanitation.xlsx"
        },
        {
            id: "De2020001",
            sector: "Demographics",
            indicator: "Average Household Size",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020002",
            sector: "Demographics",
            indicator: "Household Composition",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020003",
            sector: "Demographics",
            indicator: "Household Size By Category",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020004",
            sector: "Demographics",
            indicator: "Average number of HH members 5 years old or less",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020005",
            sector: "Demographics",
            indicator: "Average number of HH members between 6 and 17 years old",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020006",
            sector: "Demographics",
            indicator: "Average number of HH members between 18 and 65 years old",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020007",
            sector: "Demographics",
            indicator: "Gender ratio",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020008",
            sector: "Demographics",
            indicator: "Average number of registered case numbers within a household",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020009",
            sector: "Demographics",
            indicator: "Population pyramid",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020010",
            sector: "Demographics",
            indicator: "Gender breakdown - Individuals",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020011",
            sector: "Demographics",
            indicator: "Population Age categories",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020012",
            sector: "Demographics",
            indicator: "Percentage of households with child head of household (<18 years old)",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020013",
            sector: "Demographics",
            indicator: "Percentage of child headed households with head of household <15 years old",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020014",
            sector: "Demographics",
            indicator: "Percentage of child headed households with head of household between 15 and 18 years old",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020015",
            sector: "Demographics",
            indicator: "Percentage of households with female head of household",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020016",
            sector: "Demographics",
            indicator: "Percentage of households with elderly head of household",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020017",
            sector: "Demographics",
            indicator: "Percentage single individuals <18 years old",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020018",
            sector: "Demographics",
            indicator: "Percentage individuals married",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020019",
            sector: "Demographics",
            indicator: "Percentage adult individuals (>18 years) married",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020020",
            sector: "Demographics",
            indicator: "Percentage children married, by age category",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020021",
            sector: "Demographics",
            indicator: "Civil Status of all individuals",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020022",
            sector: "Demographics",
            indicator: "Commom law married",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020023",
            sector: "Demographics",
            indicator: "Average dependency ratio",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020024",
            sector: "Demographics",
            indicator: "Number of dependents per household, by category",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020025",
            sector: "Demographics",
            indicator: "Percentage of households with 100% dependents",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020026",
            sector: "Demographics",
            indicator: "Percentage of child headed households with dependents",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020027",
            sector: "Demographics",
            indicator: "Percentage of female headed households with dependents",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020028",
            sector: "Demographics",
            indicator: "Percentage of individuals with a specific need (pregnant/lactating, chronic illness, older person unable to care for self, older person with minor,  single parent)",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "De2020029",
            sector: "Demographics",
            indicator: "At least one household member has a specific need by (pregnant/lactating, chronic illness, older person unable to care for self, older person with minor,  single parent)",
            year: "2020",
            download_link: "Demographics VASyR 2020 VAULT.xlsx"
        },
        {
            id: "Di2020001",
            sector: "Disablities",
            indicator: "Washington Group Questions: Percent individuals with difficulty seeing, even when wearing glasse",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020002",
            sector: "Disablities",
            indicator: "Washington Group Questions: Percent individuals with difficulty hearing, even when using a hearing aid",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020003",
            sector: "Disablities",
            indicator: "Washington Group Questions: Percent individuals with difficulty walking or climbing steps",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020004",
            sector: "Disablities",
            indicator: "Washington Group Questions: Pecent of children with difficulty walking",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020005",
            sector: "Disablities",
            indicator: "Washington Group Questions: Pecent of children with difficulty understanding",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020006",
            sector: "Disablities",
            indicator: "Washington Group Questions: Pecent of children with difficulty communicating",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020007",
            sector: "Disablities",
            indicator: "Washington Group Questions: Pecent of children with difficulty speaking",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020008",
            sector: "Disablities",
            indicator: "Washington Group Questions: Pecent of children with difficulty learning",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020009",
            sector: "Disablities",
            indicator: "Washington Group Questions: Percent individuals with difficulty remembering or concentrating",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020010",
            sector: "Disablities",
            indicator: "Washington Group Questions: Percent individuals with difficulty with self care",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020011",
            sector: "Disablities",
            indicator: "Washington Group Questions: Percent individuals with difficulty raising a 2 litre jug of water from waist to eye level",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020012",
            sector: "Disablities",
            indicator: "Washington Group Questions: Pecent of children with difficulty picking up small objects with his/her hand",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020013",
            sector: "Disablities",
            indicator: "Washington Group Questions: Percent individuals with difficulty using their hands and fingers",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020014",
            sector: "Disablities",
            indicator: "Washington Group Questions:Percent individuals feeling worried, nervous, or anxious",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020015",
            sector: "Disablities",
            indicator: "Washington Group Questions:Level of feeling worried, nervous, or anxious (for those who felt this way)",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020016",
            sector: "Disablities",
            indicator: "Washington Group Questions:Percent individuals of feeling depressed",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Di2020017",
            sector: "Disablities",
            indicator: "Washington Group Questions:Level of feeling worried, nervous, or anxious (for those who felt this way)",
            year: "2020",
            download_link: "vasyr/files/disabilities/Disability_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "En2020001",
            sector: "Energy",
            indicator: "% households that have access to electricity",
            year: "2020",
            download_link: "/vasyr/files/energy/Energy_VASYR2020.xlsx"
        },
        {
            id: "En2020002",
            sector: "Energy",
            indicator: "Sources of electricity",
            year: "2020",
            download_link: "/vasyr/files/energy/Energy_VASYR2020.xlsx"
        },
        {
            id: "En2020003",
            sector: "Energy",
            indicator: "Average hours (per day) of electricity supply",
            year: "2020",
            download_link: "/vasyr/files/energy/Energy_VASYR2020.xlsx"
        },
        {
            id: "En2020004",
            sector: "Energy",
            indicator: "Electricity bill collection",
            year: "2020",
            download_link: "/vasyr/files/energy/Energy_VASYR2020.xlsx"
        },
        {
            id: "En2020005",
            sector: "Energy",
            indicator: "Frequency of electricity bills collection by EDL",
            year: "2020",
            download_link: "/vasyr/files/energy/Energy_VASYR2020.xlsx"
        },
        {
            id: "En2020006",
            sector: "Energy",
            indicator: "Frequency of electricity bills collection by private generator",
            year: "2020",
            download_link: "/vasyr/files/energy/Energy_VASYR2020.xlsx"
        },
        {
            id: "En2020007",
            sector: "Energy",
            indicator: "% households with exepnditure on EDL vs % households with expenditure on private generators",
            year: "2020",
            download_link: "/vasyr/files/energy/Energy_VASYR2020.xlsx"
        },
        {
            id: "En2020008",
            sector: "Energy",
            indicator: "Average household exependiture on EDL and on private generators (out of all households)",
            year: "2020",
            download_link: "/vasyr/files/energy/Energy_VASYR2020.xlsx"
        },
        {
            id: "En2020009",
            sector: "Energy",
            indicator: "Average household exependiture on EDL  (out of households who had expenditure on electricty)",
            year: "2020",
            download_link: "/vasyr/files/energy/Energy_VASYR2020.xlsx"
        },
        {
            id: "En2020010",
            sector: "Energy",
            indicator: "Average household exependiture on private generators  (out of households who had expenditure on generators)",
            year: "2020",
            download_link: "/vasyr/files/energy/Energy_VASYR2020.xlsx"
        },
        {
            id: "He2020001",
            sector: "Health",
            indicator: "Percent of households that required primary health care in the last 6 months",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020002",
            sector: "Health",
            indicator: "Percent of households received the required primary health care in the last 6 months",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020003",
            sector: "Health",
            indicator: "Primary Health Care services that were not accessed",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020004",
            sector: "Health",
            indicator: "Barriers to accessing Primay Health Care Services",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020005",
            sector: "Health",
            indicator: "Country where Primary health care was accessed.",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020006",
            sector: "Health",
            indicator: "Places where Primay Health Care Services were accessed in Lebanon",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020007",
            sector: "Health",
            indicator: "Reasons for accessing Primay Health Care Services at a private doctor clinic or pharmacy",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020008",
            sector: "Health",
            indicator: "Payment of Primary health care services",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020009",
            sector: "Health",
            indicator: "Percent of households that required hospital care in the last 6 months",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020010",
            sector: "Health",
            indicator: "Percent of households received the required hospital care in the last 6 months",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020011",
            sector: "Health",
            indicator: "Types of hospital care that were not accessed",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020012",
            sector: "Health",
            indicator: "Method of payment for hospital care",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020013",
            sector: "Health",
            indicator: "Country hospital care was receieved in",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020014",
            sector: "Health",
            indicator: "Barriers to accessing hospital care",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020015",
            sector: "Health",
            indicator: "Knowledge on where to access emergency medical services",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020016",
            sector: "Health",
            indicator: "Percentage of households that have private medical insurance",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020017",
            sector: "Health",
            indicator: "Percentage of households that have recieved information related to COVID19",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020018",
            sector: "Health",
            indicator: "Type of information recieved related to COVID19",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020019",
            sector: "Health",
            indicator: "Knowledge on where to access services if someone in the household is suspected to have COVID19",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "He2020020",
            sector: "Health",
            indicator: "Place of birth for those born in Lebanon",
            year: "2020",
            download_link: "/vasyr/files/health/Health VASyR 2020 Vault.xlsx"
        },
        {
            id: "Pr2020001",
            sector: "Protection",
            indicator: "Safety and Security Issues Reported",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020002",
            sector: "Protection",
            indicator: "Percentage of households that worry that Family member will be exploited while accessing housing",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020003",
            sector: "Protection",
            indicator: "Percentage of households that worry that Family member will be exploited while accessing food",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020004",
            sector: "Protection",
            indicator: "Percentage of households that worry that Family member will be exploited while accessing other commodities",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020005",
            sector: "Protection",
            indicator: "Percentage of households that worry that Family member will be exploited while accessing health services",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020006",
            sector: "Protection",
            indicator: "Percentage of households that worry that Family member will be exploited while accessing jobs",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020007",
            sector: "Protection",
            indicator: "Percentage of households that worry that Family member will be exploited while accessing legal services",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020008",
            sector: "Protection",
            indicator: "Percentage of households that worry that Family member will be exploited while accessing other services",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020009",
            sector: "Protection",
            indicator: "Percentage of households that heard of a refugee being exploited while accessing housing",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020010",
            sector: "Protection",
            indicator: "Percentage of households that heard of a refugee being  exploited while accessing food",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020011",
            sector: "Protection",
            indicator: "Percentage of households that heard of a refugee being  exploited while accessing other commodities",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020012",
            sector: "Protection",
            indicator: "Percentage of households that heard of a refugee being  exploited while accessing health services",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020013",
            sector: "Protection",
            indicator: "Percentage of households that heard of a refugee being  exploited while accessing jobs",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020014",
            sector: "Protection",
            indicator: "Percentage of households that heard of a refugee being  exploited while accessing legal services",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020015",
            sector: "Protection",
            indicator: "Percentage of households tthat heard of a refugee being  exploited while accessing other services",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020016",
            sector: "Protection",
            indicator: "Households that reported lack of safety limiting their freedom of movement",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020017",
            sector: "Protection",
            indicator: "Households that reported lack of safety compelling their movement",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020018",
            sector: "Protection",
            indicator: "Households that reporwitnessed a physical confrontation in their area involving at least one Refugee",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020019",
            sector: "Protection",
            indicator: "Percentage of households that report having a curfew imposed on them in the area they are living",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020020",
            sector: "Protection",
            indicator: "Frequency of curfew being implemented",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020021",
            sector: "Protection",
            indicator: "Period of curfew being implemented",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020022",
            sector: "Protection",
            indicator: "Source of curfew",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020023",
            sector: "Protection",
            indicator: "Sanctions of breaching curfews",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020024",
            sector: "Protection",
            indicator: "Frequency of interactions with other Syrians at work",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020025",
            sector: "Protection",
            indicator: "Frequency of interactions with other Syrians in social circles",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020026",
            sector: "Protection",
            indicator: "Frequency of interactions with other Syrians when paying rent",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020027",
            sector: "Protection",
            indicator: "Frequency of interactions with other Syrians in the street",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020028",
            sector: "Protection",
            indicator: "Frequency of interactions with other Syrians in the shop",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020029",
            sector: "Protection",
            indicator: "Frequency of interactions with other Syrians at religious events",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020030",
            sector: "Protection",
            indicator: "Frequency of interactions with other Syrians  at activities organized by NGOs or local organizations",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020031",
            sector: "Protection",
            indicator: "Quality of interactions with the refugee community and host community",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020032",
            sector: "Protection",
            indicator: "Quality of interactions between refugees in this town/village",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020033",
            sector: "Protection",
            indicator: "Reported factors driving community tensions",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020034",
            sector: "Protection",
            indicator: "Reported factors  that would improve community relationships",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020035",
            sector: "Protection",
            indicator: "Households feelings about the situation and future",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020036",
            sector: "Protection",
            indicator: "Place of Marriage",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020037",
            sector: "Protection",
            indicator: "Level of Marriage Registration - Cummilitive (for those married in Lebanon)",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020038",
            sector: "Protection",
            indicator: "Level of Marriage Registration - for those married in Syria",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020039",
            sector: "Protection",
            indicator: "Place of divorce",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020040",
            sector: "Protection",
            indicator: "Level of divorce documentation for those divorced in Lebanon",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020041",
            sector: "Protection",
            indicator: "Level of divorce documentation for those divorced in Syria",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020042",
            sector: "Protection",
            indicator: "Place of birth",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020043",
            sector: "Protection",
            indicator: "Births registered at the Foreigns Registry and Beyond",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020044",
            sector: "Protection",
            indicator: "Levels of birth registration- cummilitive",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020045",
            sector: "Protection",
            indicator: "Reasons for Children only reaching the level of Mukhtar birth registration and not beyond (amoung those that only reached Mukhtar level",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020046",
            sector: "Protection",
            indicator: "Reasons for Children only reaching the level of Noufous birth registration and not beyond (amoung those that only reached Noufous Level",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020047",
            sector: "Protection",
            indicator: "Level of birth registration for births in Syria",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020048",
            sector: "Protection",
            indicator: "Legal residency of Syrian individuals above 15 years old",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020049",
            sector: "Protection",
            indicator: "Percentage of Individuals that had legal residency at some point in 2020- amoung those with no legal residency currently",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020050",
            sector: "Protection",
            indicator: "Legal residency of Syrian individuals by age groups (MALES)",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020051",
            sector: "Protection",
            indicator: "Legal residency of Syrian individuals by age groups (FEMALES)",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020052",
            sector: "Protection",
            indicator: "Percentage of households that have all household members above 15 with legal residency",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020053",
            sector: "Protection",
            indicator: "Percentage of households that have at least one household membrs above 15 with legal residency",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020054",
            sector: "Protection",
            indicator: "Reasons for not having legal residency",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020055",
            sector: "Protection",
            indicator: "Residency categories, for those with legal residency",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020056",
            sector: "Protection",
            indicator: " Percentage of individuals that had a past residency based on sponsorship, tourism, lease agreement, property owner, courtesy (among those with no legal residency)",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020057",
            sector: "Protection",
            indicator: "Percentage of Individuals in the past that exited and re-entered regularly to Lebanon after 2015 for those with no legal residency",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020058",
            sector: "Protection",
            indicator: "Last time the individual approached GSO to renew residency, for those with no legal residency",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020059",
            sector: "Protection",
            indicator: "Sources used to recieve information related to refugee services",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020060",
            sector: "Protection",
            indicator: "Percentage of households that reported that the information received through each channel was helpful in accessing services",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020061",
            sector: "Protection",
            indicator: "Percentage of households that have internet on phone",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020062",
            sector: "Protection",
            indicator: "Percentage of households that have internet at home",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020063",
            sector: "Protection",
            indicator: "Frequency of social media usage",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Pr2020064",
            sector: "Protection",
            indicator: " Type of social media usage",
            year: "2020",
            download_link: "/vasyr/files/protection/Protection_VASyR_2020_VAULT.xlsx"
        },
        {
            id: "Sh2020001",
            sector: "Shelter",
            indicator: "Monthly average and median Rent in LBP",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020002",
            sector: "Shelter",
            indicator: "% of households in different monthly rent categories",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020003",
            sector: "Shelter",
            indicator: "Types of rental agreements",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020004",
            sector: "Shelter",
            indicator: "Lease agreement registered with the municipality",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020005",
            sector: "Shelter",
            indicator: "Payment of municipal taxes",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020006",
            sector: "Shelter",
            indicator: "Period of rental agreement",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020007",
            sector: "Shelter",
            indicator: "% HH that reported increase/decrease / change  in rent over the past three months",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020008",
            sector: "Shelter",
            indicator: "% HH that reported increase/decrease  in rent over the past three months",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020009",
            sector: "Shelter",
            indicator: "average and median increase in rent in LBP our of households who reported an increase",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020010",
            sector: "Shelter",
            indicator: "average and median decrease in rent in LBP our of households who reported a decrease",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020011",
            sector: "Shelter",
            indicator: "% of households by type of shelter",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020012",
            sector: "Shelter",
            indicator: "% of households by shelter ( categories ) ",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020013",
            sector: "Shelter",
            indicator: "% of households by Type of occupancy",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020014",
            sector: "Shelter",
            indicator: "Crosstabulation between types of housing and types of occupancy",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020015",
            sector: "Shelter",
            indicator: "Most important factor for selecting place of residence",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020016",
            sector: "Shelter",
            indicator: "Average m2 per person ",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020017",
            sector: "Shelter",
            indicator: "% HH with more than 4.5m2 per person overcrowding",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020018",
            sector: "Shelter",
            indicator: "% HH living in dangerous conditions",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020019",
            sector: "Shelter",
            indicator: "Detailed Shelter Conditions",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020020",
            sector: "Shelter",
            indicator: "Detailed Shelter Conditions by Shelter Type and governorate ",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020021",
            sector: "Shelter",
            indicator: "Households living in dangerous, substandard or overcrowded conditions",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Sh2020022",
            sector: "Shelter",
            indicator: "Percentage of households sharing toilets and mean number of people sharing toilets",
            year: "2020",
            download_link: "/vasyr/files/shelter/Shelter_VASYR2020.xlsx"
        },
        {
            id: "Ex2020001",
            sector: "Expenditure",
            indicator: "Total Expenditures per Month per Capita in LBP",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020002",
            sector: "Expenditure",
            indicator: "Food Expenditure Share Category",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020003",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Food",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020004",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Health",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020005",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Education",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020006",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Rent",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020007",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Water",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020008",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Alcohol / Tobacco",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020009",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Soap and Hygiene",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020010",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Fuel",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020011",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Transportation",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020012",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Clothing",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020013",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Telecome",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020014",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Electricity: Electricite du Liban (EDL)",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020015",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Electricity: Private Generators",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020016",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Assets",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020017",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Other",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020018",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Shelter",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020019",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Gas",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020020",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Registration",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020021",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Entertainment",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020022",
            sector: "Expenditure",
            indicator: "Monthly Expenditure share on: Debt Repayment",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020023",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Bread & Pasta",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020024",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Cereal",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020025",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Tubers",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020026",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Dairy Products",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020027",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Oil",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020028",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Sugar",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020029",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Canned Food",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020030",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Beans & nuts",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020031",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Fresh Meat",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020032",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Fruits & Vegetables",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020033",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Cooked Food",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ex2020034",
            sector: "Expenditure",
            indicator: "Single Food Item Expenditure Share- Monthly average: Condiments",
            year: "2020",
            download_link: "/vasyr/files/expenditure/Vault_Econ_Vuln1_2020.xlsx"
        },
        {
            id: "Ec2020001",
            sector: "Economic Vulnerability",
            indicator: "Percentage of Household living under Minimum Expenditure Basket (MEB) and Survival Minimum Expenditure Basket (SMEB) Categories",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020002",
            sector: "Economic Vulnerability",
            indicator: "Percentage of households by Debt Categories",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020003",
            sector: "Economic Vulnerability",
            indicator: "Debt per Household & per capita ",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020004",
            sector: "Economic Vulnerability",
            indicator: "Average Debt per Household (all Households) ",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020005",
            sector: "Economic Vulnerability",
            indicator: "Average Debt per Capita (all Households) ",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020006",
            sector: "Economic Vulnerability",
            indicator: "Average Debt per Household (only Households with Debt) 	",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020007",
            sector: "Economic Vulnerability",
            indicator: "Average Debt per Capita (only Households with Debt) 	",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020008",
            sector: "Economic Vulnerability",
            indicator: "Percentage of Households who Borrowed Money in the past 3 Months",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020009",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Debt Repayment",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020010",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Procure Sponsorship",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020011",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Business Development",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020012",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Assets Procurement",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020013",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Pay Documentation fees",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020014",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Other reasons",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020015",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Buy Food",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020016",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Pay Rent",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020017",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Buy Shelter Material",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020018",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Buy House",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020019",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Pay Health",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020020",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Buy Medicine",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020021",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Buy Water",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020022",
            sector: "Economic Vulnerability",
            indicator: "Reason for Borrowing: Pay Transportation",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020023",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Friends in Lebanon",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020024",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Friends not in Lebanon",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020025",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Money Lender",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020026",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing:  Local Charity",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020027",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Landlord",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020028",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Supermarket",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020029",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Shawish",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Ec2020030",
            sector: "Economic Vulnerability",
            indicator: "Source of Borrowing: Other",
            year: "2020",
            download_link: "/vasyr/files/economic_vulnerability/Vault_Econ_Vuln2_2020.xlsx"
        },
        {
            id: "Fo2020001",
            sector: "Food Security",
            indicator: "Vitamin A Consumption: Never Consumed",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_FC+N_2020.xlsx"
        },
        {
            id: "Fo2020002",
            sector: "Food Security",
            indicator: "Vitamin A Consumption: 1 to 6 Times a Week",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_FC+N_2020.xlsx"
        },
        {
            id: "Fo2020003",
            sector: "Food Security",
            indicator: "Vitamin A Consumption: at Least Daily",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_FC+N_2020.xlsx"
        },
        {
            id: "Fo2020004",
            sector: "Food Security",
            indicator: "Protein Consumption: Never Consumed",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_FC+N_2020.xlsx"
        },
        {
            id: "Fo2020005",
            sector: "Food Security",
            indicator: "Protein Consumption: 1 to 6 Times a Week",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_FC+N_2020.xlsx"
        },
        {
            id: "Fo2020006",
            sector: "Food Security",
            indicator: "Protein Consumption: at Least Daily",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_FC+N_2020.xlsx"
        },
        {
            id: "Fo2020007",
            sector: "Food Security",
            indicator: "Iron Consumption: Never Consumed",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_FC+N_2020.xlsx"
        },
        {
            id: "Fo2020008",
            sector: "Food Security",
            indicator: "Iron Consumption: 1 to 6 Times a Week",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_FC+N_2020.xlsx"
        },
        {
            id: "Fo2020009",
            sector: "Food Security",
            indicator: "Iron Consumption: at Least Daily",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_FC+N_2020.xlsx"
        },
        {
            id: "Fo2020010",
            sector: "Food Security",
            indicator: "Number of meals consumed by adults",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020011",
            sector: "Food Security",
            indicator: "Number of Meals Consumed by Chidren under 5",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020012",
            sector: "Food Security",
            indicator: "Food Consumption Score",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020013",
            sector: "Food Security",
            indicator: "Percentage of households with Poor food consumption",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020014",
            sector: "Food Security",
            indicator: "Percentage of households with Borderline food consumption",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020015",
            sector: "Food Security",
            indicator: "Percentage of households with Acceptable food consumption",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020016",
            sector: "Food Security",
            indicator: "Household Daily Average Diet Diversity (HDADD)",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020017",
            sector: "Food Security",
            indicator: "HDADD Category: <4.5 food groups",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020018",
            sector: "Food Security",
            indicator: "HDADD Category: 4.5-6.4 food groups",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020019",
            sector: "Food Security",
            indicator: "HDADD Category: >=6.5 food groups",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020020",
            sector: "Food Security",
            indicator: "Household Weekly Diet Diversity (HWDD)",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020021",
            sector: "Food Security",
            indicator: "HWDD <= 6 food groups",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020022",
            sector: "Food Security",
            indicator: "HWDD 7-8 food groups",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020023",
            sector: "Food Security",
            indicator: "HWDD >= 9 food groups",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020024",
            sector: "Food Security",
            indicator: "Weekly Food Consumption: Cereal/ Tubers",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020025",
            sector: "Food Security",
            indicator: "Weekly Food Consumption: Roots",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020026",
            sector: "Food Security",
            indicator: "Weekly Food Consumption: Dairy Products",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020027",
            sector: "Food Security",
            indicator: "Weekly Food Consumption: Meat/ Fish/ Eggs",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020028",
            sector: "Food Security",
            indicator: "Weekly Food Consumption: Vegetable/ Leaves",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020029",
            sector: "Food Security",
            indicator: "Weekly Food Consumption: Fruits",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020030",
            sector: "Food Security",
            indicator: "Weekly Food Consumption: Oils",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020031",
            sector: "Food Security",
            indicator: "Weekly Food Consumption: Sugar",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Consumption_2020.xlsx"
        },
        {
            id: "Fo2020032",
            sector: "Food Security",
            indicator: "Percent of households who are Food Secure",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Security_2020.xlsx"
        },
        {
            id: "Fo2020033",
            sector: "Food Security",
            indicator: "Percent of households who are Marginally Food Insecure",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Security_2020.xlsx"
        },
        {
            id: "Fo2020034",
            sector: "Food Security",
            indicator: "Percent of households who are Moderately Food Insecure",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Security_2020.xlsx"
        },
        {
            id: "Fo2020035",
            sector: "Food Security",
            indicator: "Percent of households who are Severely Food Insecure",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Food_Security_2020.xlsx"
        },
        {
            id: "co2020037",
            sector: "Food Security",
            indicator: "Reduced Coping Strategy Index",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_rCSI_2020.xlsx"
        },
        {
            id: "co2020001",
            sector: "Food Security",
            indicator: "Food related coping strategies: Restricted Food Consumption of Female members of Households",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020002",
            sector: "Food Security",
            indicator: "Food related coping strategies: Relied on Less Preferred/Less Expensive Food",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020003",
            sector: "Food Security",
            indicator: "Food related coping strategies: Borrowed Food or Relied on Help from Friends or Relatives",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020004",
            sector: "Food Security",
            indicator: "Food related coping strategies: Reduced the Number of Meals Eaten per Day",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020005",
            sector: "Food Security",
            indicator: "Food related coping strategies: Reduced portion size of meals",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020006",
            sector: "Food Security",
            indicator: "Food related coping strategies: Spent Days without Eating",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020007",
            sector: "Food Security",
            indicator: "Food related coping strategies:  Restricted Consumption by Adults in order of Children Can Eat",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020008",
            sector: "Food Security",
            indicator: "Food related coping strategies: Sent Household Members to Eat Elsewhere",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020009",
            sector: "Food Security",
            indicator: "Number of days food related copings were applied: Less Expensive Food",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020010",
            sector: "Food Security",
            indicator: "Number of days food related copings were applied: Borrowed Food",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020011",
            sector: "Food Security",
            indicator: "Number of days food related copings were applied: Reduced Meals",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020012",
            sector: "Food Security",
            indicator: "Number of days food related copings were applied: Reduced Portions",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020013",
            sector: "Food Security",
            indicator: "Number of days food related copings were applied: Spent Days without Food",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020014",
            sector: "Food Security",
            indicator: "Number of days food related copings were applied: Restricted Consumption by Adults",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020015",
            sector: "Food Security",
            indicator: "Number of days food related copings were applied: Sent HH members eat Elsewhere",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020016",
            sector: "Food Security",
            indicator: "Number of days food related copings were applied: Restricted Food Consumption of Female HH Members",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020017",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Sold Household Goods (radio, furniture, television, jewelry etc..)",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020018",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Sold Productive assets or means of transport (sewing machine, wheelbarrow, bicycle, car, livestock..)",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020019",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Reduced essential non-food: Education",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020020",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Reduced essential non-food expenditures: Health",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020021",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Spent savings ",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020022",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Bought food on credit or borrowed money to purchase food",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020023",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Sold house or land",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020024",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Withdrew children from school ",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020025",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Begged",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020026",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Marriage of children under 18",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020027",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Accepted High Risk, Illegal, Socially Degrading Activities",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020028",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Had School Children (6 -15 years old) Involved in Income Generation",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020029",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Reduce expense on food",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020030",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Moved to a cheaper rental place/live on the street",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020031",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Household members 18 years and over accepting high risk, dangerous, or exploitative work",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020032",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Adult work elsewhere",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020033",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Child work elsewhere",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020034",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days:  Other forms of exploitation",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020035",
            sector: "Food Security",
            indicator: "Livelihood-related Coping Strategies in the Last 30 Days: Sent household member sought work elsewhere (regardless of the usual seasonal migration)",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "co2020036",
            sector: "Food Security",
            indicator: "Summary of asset depletion coping strategies",
            year: "2020",
            download_link: "/vasyr/files/food_security/Vault_Coping_2020.xlsx"
        },
        {
            id: "Li2020001",
            sector: "Livelihoods",
            indicator: "Employment Status",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods1_2020.xlsx"
        },
        {
            id: "Li2020002",
            sector: "Livelihoods",
            indicator: "Individual above 18 Years",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods1_2020.xlsx"
        },
        {
            id: "Li2020003",
            sector: "Livelihoods",
            indicator: "Employment to Polulation Ratio (Employed/Total Person 18+)",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods1_2020.xlsx"
        },
        {
            id: "Li2020004",
            sector: "Livelihoods",
            indicator: "Labor Force Participation Rate ((Employed+Unemployed)/total persons >18)",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods1_2020.xlsx"
        },
        {
            id: "Li2020005",
            sector: "Livelihoods",
            indicator: "Unemployment Rate (Unemployed over Labor Force)",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods1_2020.xlsx"
        },
        {
            id: "Li2020006",
            sector: "Livelihoods",
            indicator: "Sector of employment - Individual level",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020007",
            sector: "Livelihoods",
            indicator: "Percent of working age individuals employed in Agriculture",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020008",
            sector: "Livelihoods",
            indicator: "Percent of working age individuals employed in Construction",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020009",
            sector: "Livelihoods",
            indicator: "Percent of working age individuals employed in Concierge",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020010",
            sector: "Livelihoods",
            indicator: "Percent of working age individuals employed in Manufacturing",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020011",
            sector: "Livelihoods",
            indicator: "Percent of working age individuals employed in Wholesale and retail trade",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020012",
            sector: "Livelihoods",
            indicator: "Percent of working age individuals employed in Begging",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020013",
            sector: "Livelihoods",
            indicator: "Percent of working age individuals employed in Professional Services",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020014",
            sector: "Livelihoods",
            indicator: "Percent of working age individuals employed in Occasional Work",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020015",
            sector: "Livelihoods",
            indicator: "Percent of working age individuals employed in Selling (tissues, water, etc.) on the street",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020016",
            sector: "Livelihoods",
            indicator: "Percent of working age individuals employed in Forestry",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020017",
            sector: "Livelihoods",
            indicator: "Percent of working age individuals employed in Waste collection / management",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020018",
            sector: "Livelihoods",
            indicator: "Percent of working age individuals employed in Other Services: hotel, restaurant, transport, personal services",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020019",
            sector: "Livelihoods",
            indicator: "Percent of working age individuals employed in Other",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods2_2020.xlsx"
        },
        {
            id: "Li2020020",
            sector: "Livelihoods",
            indicator: "Percentage of households with members working in the past 7 days",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020021",
            sector: "Livelihoods",
            indicator: "Per capita Income (LBP) (All Households)",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020022",
            sector: "Livelihoods",
            indicator: "Per capita Income (LBP) (Households with working members)",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020023",
            sector: "Livelihoods",
            indicator: "Main household source of income: Agriculture",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020024",
            sector: "Livelihoods",
            indicator: "Main household source of income: Adult Begging",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020025",
            sector: "Livelihoods",
            indicator: "Main household source of income: Cash from charitable organizations",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020026",
            sector: "Livelihoods",
            indicator: "Main household source of income: ATM cards used in ATM machines from UN or humanitarian organizations",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020027",
            sector: "Livelihoods",
            indicator: "Main household source of income: Child Begging",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020028",
            sector: "Livelihoods",
            indicator: "Main household source of income: Concierge",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020029",
            sector: "Livelihoods",
            indicator: "Main household source of income: Construction",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020030",
            sector: "Livelihoods",
            indicator: "Main household source of income: Concierge",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020031",
            sector: "Livelihoods",
            indicator: "Main household source of income: Credit/debts (formal  banks)",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020032",
            sector: "Livelihoods",
            indicator: "Main household source of income: Credit/debts (informal)shops, friends hosts)",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020033",
            sector: "Livelihoods",
            indicator: "Main household source of income: E-cards WFP FOOD",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020034",
            sector: "Livelihoods",
            indicator: "Main household source of income: Gifts from family/relatives",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020035",
            sector: "Livelihoods",
            indicator: "Main household source of income: Home based work / skill",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020036",
            sector: "Livelihoods",
            indicator: "Main household source of income: Manufacturing",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020037",
            sector: "Livelihoods",
            indicator: "Main household source of income: Other (specify)",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020038",
            sector: "Livelihoods",
            indicator: "Main household source of income: Other services: hotel, restaurant, transport, personal services",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020039",
            sector: "Livelihoods",
            indicator: "Main household source of income: Other types of sales",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020040",
            sector: "Livelihoods",
            indicator: "Main household source of income: Professional Services",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020041",
            sector: "Livelihoods",
            indicator: "Main household source of income: Remittances",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020042",
            sector: "Livelihoods",
            indicator: "Main household source of income: Sale of assets (car, bicycle, refrigerator, TV, jewelry)",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020043",
            sector: "Livelihoods",
            indicator: "Main household source of income: Sale of crops ",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020044",
            sector: "Livelihoods",
            indicator: "Main household source of income: Sale of livestock and animal produce    ",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020045",
            sector: "Livelihoods",
            indicator: "Main household source of income: Sale of food assistance",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020046",
            sector: "Livelihoods",
            indicator: "Main household source of income: Savings",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020047",
            sector: "Livelihoods",
            indicator: "Main household source of income: Wholesale and retail trade",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020048",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Credit, debts, informal shops, friends",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020049",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): ATM cards used, ATM UN humanitarian organizations",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020050",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Agriculture",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020051",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Construction ",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020052",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Professional Services",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020053",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Other",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020054",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Other services",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020055",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Gifts, family relatives",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020056",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Home based work skill",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020057",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Concierge",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020058",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Manufacturing",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020059",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Sale assets",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020060",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Remittances",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020061",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Wholesale, retail trade",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020062",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Cash charitable organizations ",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020063",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Child begging",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020064",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Credit, debts formal banks ",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020065",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Adult begging",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020066",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Sale food aid",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020067",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Sale livestock animal produce",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020068",
            sector: "Livelihoods",
            indicator: "Cash and income sources reported by household (three main sources): Sale of crops",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods3_2020.xlsx"
        },
        {
            id: "Li2020069",
            sector: "Livelihoods",
            indicator: "Reason for unemployment",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods4_2020.xlsx"
        },
        {
            id: "Li2020070",
            sector: "Livelihoods",
            indicator: "Percent of working age that stated Injury or Medical Condition as a reason for unemployment",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods4_2020.xlsx"
        },
        {
            id: "Li2020071",
            sector: "Livelihoods",
            indicator: "Percent of working age that stated No Work in the Area where I live as a reason for unemployment",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods4_2020.xlsx"
        },
        {
            id: "Li2020072",
            sector: "Livelihoods",
            indicator: "Percent of working age that stated  Seasonal Work as a reason for unemployment",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods4_2020.xlsx"
        },
        {
            id: "Li2020073",
            sector: "Livelihoods",
            indicator: "Percent of working age that stated Dependent Children at Home as a reason for unemployment",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods4_2020.xlsx"
        },
        {
            id: "Li2020074",
            sector: "Livelihoods",
            indicator: "Percent of working age that stated Dependent Family Member(s) as a reason for unemployment",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods4_2020.xlsx"
        },
        {
            id: "Li2020075",
            sector: "Livelihoods",
            indicator: "Percent of working age that stated Has been subject to serious abuse/exploitation in previous work as a reason for unemployment",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods4_2020.xlsx"
        },
        {
            id: "Li2020076",
            sector: "Livelihoods",
            indicator: "Percent of working age that stated  Lack of Skills as a reason for unemployment",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods4_2020.xlsx"
        },
        {
            id: "Li2020077",
            sector: "Livelihoods",
            indicator: "Percent of working age that stated Education Continuation as a reason for unemployment",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods4_2020.xlsx"
        },
        {
            id: "Li2020078",
            sector: "Livelihoods",
            indicator: "Percent of working age that stated Elderly as a reason for unemployment",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods4_2020.xlsx"
        },
        {
            id: "Li2020079",
            sector: "Livelihoods",
            indicator: "Percent of working age that stated Education Continuation as a reason for unemployment",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods4_2020.xlsx"
        },
        {
            id: "Li2020080",
            sector: "Livelihoods",
            indicator: "Percent of working age that stated Lack of Legal Residency as a reason for unemployment",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods4_2020.xlsx"
        },
        {
            id: "Li2020081",
            sector: "Livelihoods",
            indicator: "Percent of working age that stated Other as a reason for unemployment",
            year: "2020",
            download_link: "/vasyr/files/livelihoods/Vault_Livelihoods4_2020.xlsx"
        }
    ];

    homeIntro = {
        'part_1': `The Vulnerability Assessment of Syrian Refugees in Lebanon (VASyR) analyses a representative sample of Syrian refugee families in Lebanon to provide a multi-sectoral update of the situation of this population. Conducted annually, 2020 marks the eighth year of this assessment. The contents of this report, jointly issued by the United Nations High Commissioner for Refugees (UNHCR), the United Nations Children’s Fund (UNICEF) and the World Food Programme (WFP), show that the economic downturn, steep inflation, COVID-19 and finally the Beirut blast have pushed vulnerable communities in Lebanon - including Syrian refugees - to the brink, with thousands of families sinking further into poverty and vulnerability`,
        'part_2': ``,
        'part_3': ``
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
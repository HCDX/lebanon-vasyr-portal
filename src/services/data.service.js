export default class DataService {
    topMenu = [
        {
            item: 'HOME',
            url: '/',
            isScrollable: false
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
            item: 'FULL REPORT',
            url: 'reports',
            isScrollable: true
        },
        {
            item: 'TOOLS',
            url: 'tools',
            isScrollable: false
        },
        {
            item: 'VAULT',
            url: 'vault',
            isScrollable: false
        }
    ];

    vasyrDownloadLinks = {
        '2019': 'link',
        '2018': 'link',
        '2017': 'link',
        '2016': 'link'
    };

    chaptersData = [
        {
            title: 'ASSISTANCE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna. Adipiscing diam donec adipiscing tristique risus nec feugiat.',
            image_url: 'images/chapters/ch-assistance.jpg',
            download_url: '',
            knowledge_hub_url: ''
        },
        {
            title: 'COPING STRATEGIES',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Blandit aliquam etiam erat velit scelerisque in dictum non. Purus semper eget duis at tellus at urna condimentum.',
            image_url: 'images/chapters/ch-coping-strategies.jpg',
            download_url: '',
            knowledge_hub_url: ''
        },
        {
            title: 'DEMOGRAPHICS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Et odio pellentesque diam volutpat commodo. Tortor aliquam nulla facilisi cras fermentum. Habitasse platea dictumst quisque sagittis purus sit.',
            image_url: 'images/chapters/ch-demographics.jpg',
            download_url: '',
            knowledge_hub_url: ''
        },
        {
            title: 'VULNERABILITY',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae auctor eu augue. Neque vitae tempus quam pellentesque nec nam. Donec enim diam vulputate ut. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.',
            image_url: 'images/chapters/ch-eco-vulnerability.jpg',
            download_url: '',
            knowledge_hub_url: ''
        },
        {
            title: 'EDUCATION',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas sed. Integer eget aliquet nibh praesent tristique.',
            image_url: 'images/chapters/ch-education.jpg',
            download_url: '',
            knowledge_hub_url: ''
        },
        {
            title: 'FOOD CONSUMPTION',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ante in nibh mauris cursus mattis molestie a. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Nam aliquam sem et tortor consequat id porta nibh. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Vitae suscipit tellus mauris a diam maecenas sed. Semper feugiat nibh sed pulvinar.',
            image_url: 'images/chapters/ch-food-consumption.jpg',
            download_url: '',
            knowledge_hub_url: ''
        },
        {
            title: 'FOOD SECURITY',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Fermentum leo vel orci porta.',
            image_url: 'images/chapters/ch-food-security.jpg',
            download_url: '',
            knowledge_hub_url: ''
        },
        {
            title: 'GENDER',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Fermentum leo vel orci porta.',
            image_url: 'images/chapters/ch-gender.jpg',
            download_url: '',
            knowledge_hub_url: ''
        },
        {
            title: 'HEALTH',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Fermentum leo vel orci porta.',
            image_url: 'images/chapters/ch-health.jpg',
            download_url: '',
            knowledge_hub_url: ''
        },
        {
            title: 'LIVELIHOODS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Fermentum leo vel orci porta.',
            image_url: 'images/chapters/ch-livelihoods.jpg',
            download_url: '',
            knowledge_hub_url: ''
        },
        {
            title: 'PROTECTION',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Fermentum leo vel orci porta.',
            image_url: 'images/chapters/ch-protection.jpg',
            download_url: '',
            knowledge_hub_url: ''
        },
        {
            title: 'SHELTER',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Fermentum leo vel orci porta.',
            image_url: 'images/chapters/ch-shelter.jpg',
            download_url: '',
            knowledge_hub_url: ''
        },
        {
            title: 'WASH',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Fermentum leo vel orci porta.',
            image_url: 'images/chapters/ch-wash.jpg',
            download_url: '',
            knowledge_hub_url: ''
        },
    ]

    roadMapData = [
        {
            title: 'CHAPTERS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
            icon: '/icons/icon-chapters.png',
            top: true
        },
        {
            title: 'MAPS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
            icon: '/icons/icon-maps.png',
            top: false
        },
        {
            title: 'FULL REPORT',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
            icon: '/icons/icon-report.png',
            top: true
        },
        {
            title: 'VAULT',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
            icon: '/icons/icon-vault.png',
            top: false
        },
        {
            title: 'TOOLS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
            icon: '/icons/icon-tools.png',
            top: true
        },
        {
            title: 'REQUEST',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
            icon: '/icons/icon-requests.png',
            top: false
        },
    ];
    
    maps = [
        {
            title: 'Health Getaways',
            url: 'link',
            image: '/images/maps/health-getaways.png',
            description: 'This is the map description if needed to be added'
        },
        {
            title: 'Informal Setlements - Flood Risks and Snow Accumulation',
            url: 'link',
            image: '/images/maps/informal-settlements.png',
            description: 'This is the map description if needed to be added'
        },
        {
            title: 'Shelter Upgraded 2015-2018',
            url: 'link',
            image: '/images/maps/shelter-upgraded.png',
            description: 'This is the map description if needed to be added'
        },
        {
            title: 'Shelter National Gap Analysis 2018',
            url: 'link',
            image: '/images/maps/shelter-national-gap.png',
            description: 'This is the map description if needed to be added'
        },
        {
            title: 'Informal Settlements (IAMP 57)',
            url: 'link',
            image: '/images/maps/informal-settlements-iamp57.png',
            description: 'This is the map description if needed to be added'
        },
        {
            title: 'Out of School Children - June 2016',
            url: 'link',
            image: '/images/maps/out-of-school-children.png',
            description: 'This is the map description if needed to be added'
        },
        {
            title: 'Social Development Center',
            url: 'link',
            image: '/images/maps/social-development.png',
            description: 'This is the map description if needed to be added'
        },
        {
            title: 'Lebanon Admin',
            url: 'link',
            image: '/images/maps/lebanon-admin.png',
            description: 'This is the map description if needed to be added'
        },
    ];

    homeIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

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
}
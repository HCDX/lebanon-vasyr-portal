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

    logos = [
        {
            title: 'inter agency',
            url: 'Interagency-logo.png'
        },
        {
            title: 'unhcr',
            url: 'unhcr-logo.png'
        },
        {
            title: 'wfp',
            url: 'wfp-logo.png'
        },
        {
            title: 'unicef',
            url: 'unicef-logo.png'
        },
    ];

    homeIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

    getTopMenuData() {
        return this.topMenu;
    }

    getLogos() {
        return this.logos;
    }

    getHomeIntro() {
        return this.homeIntro;
    }
}
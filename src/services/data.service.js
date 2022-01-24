import Chapters from '@/assets/constants/chapters';
import TopMenuItems from '@/assets/constants/topmenuitems';
import RoadMapItems from '@/assets/constants/roadmapitems';
import Reports from '@/assets/constants/reports';
import Tools from '@/assets/constants/tools';
import Vault from '@/assets/constants/vault';

/* The data service acts as a data provider for all components and pages
 * the static data in this class can be later replaced by an API and connected through this service so minimum changes
 * would need to happen in all the different components
 */
export default class DataService {
    topMenu = TopMenuItems.TOPMENUITEMS;

    vasyrDownloadLinks = {
        '2019': '/vasyr/files/vasyr_reports/VASyR 2019 digital version.pdf',
        '2020': '/vasyr/files/vasyr_reports/VASyR 2020.pdf',
        '2021': '/vasyr/files/vasyr_reports/VASyR 2021.pdf',
        // '2018': 'link',
        // '2017': 'link',
        // '2016': 'link'
    };

    chaptersData = Chapters.CHAPTERS;

    roadMapData = RoadMapItems.ROADMAPITEMS;

    maps = [
        {
            title: 'Maps Gateway',
            url: 'https://app.powerbi.com/view?r=eyJrIjoiYjAwOGE4NjYtY2QxNy00YmIxLWFmNzEtZTUxZGJiMDE5YWJiIiwidCI6ImU1YzM3OTgxLTY2NjQtNDEzNC04YTBjLTY1NDNkMmFmODBiZSIsImMiOjh9',
            image: '/images/maps/maps-dashboard.png',
            description: 'This will take you to the maps page'
        }
    ];

    reportsData = Reports.REPORTS;

    toolsData = Tools.TOOLS;

    vaultData = Vault.VAULT;

    homeIntro = {
        'part_1': `The Vulnerability Assessment of Syrian Refugees in Lebanon (VASyR) analyzes a representative sample 
                   of Syrian refugee households in Lebanon to provide a multi-sectoral update of the situation of this 
                   population. Conducted annually, 2021 marks the ninth year of this assessment. The contents of this 
                   report, jointly issued by the United Nations High Commissioner for Refugees (UNHCR), 
                   the United Nations Children’s Fund (UNICEF), and the United Nations World Food Programme (WFP), 
                   show that the situation of Syrian refugees continues to worsen as Lebanon faces a compounded 
                   socio-economic and health crisis. With the currency depreciation, price spikes, and subsidy removals, 
                   nine out of 10 Syrian refugee households were not able to afford essential goods and services that ensure 
                   minimum living standards, despite increasing humanitarian support`,
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
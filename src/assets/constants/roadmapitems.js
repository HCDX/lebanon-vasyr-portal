const ROADMAPITEMS = [
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
        url: 'https://microdata.unhcr.org/index.php/catalog?sk=Lebanon&search='
    }
];

export default {
	ROADMAPITEMS: ROADMAPITEMS
}
import {modelList} from "./modelList";

export const parseApplicationList = () => {
    const list =applicationList.map((item) => {
        return {
            title: item.name,
            heat:item.heat,
            influence:item.influence,
            faculty:item.faculty,
            imgSrc:item.backgroundUrl,
            user:item.user,
            href:item.link,
        }
    })
    return list;
}
export const applicationList = [
    {
        backgroundUrl: 'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/81c6299f65a333b90bf91e88b947de7b.png',
        heat: 11589,
        data: [
            '城市道路交通流数据'
        ],
        name: '交通拥堵预测-联邦学习与差分隐私',
        link: 'http://8.140.124.245:38080/#/',
        model: [
            'GWNET',
            '基于深度学习模型DeepLabV3P实现高精度车道线检测'
        ],
        user: '系统管理员',
        logoUrl: 'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/f422b57b3eaf84f177d9c2a6edd25676.jpg',
        faculty: '该用户未注册机构',
        influence: 0
    },{
        backgroundUrl: 'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/97f4413480b4b203abbd1eb03a18f10e.png',
        heat: 39241,
        data: [
            '深圳出租车GPS数据',
            '中山大学—车道线检测数据集',
            '中山-城市poi数据',
            '中山-城市红绿灯数据',
            '中山-贵阳-智慧交通预测数据集',
            'mini_CULane',
            'instagram数据',
            '城市道路交通流数据',
            'METR_LA',
            'PEMS_BAY',
            '中科院-PEMSD3',
            '中科院-NYCTaxi20150103',
            'Los Angeles (METR-LA) and the Bay Area (PEMS-BAY) Traffic Data',
            '北京一卡通交通记录',
            '北京市城市天气记录',
            '国家-城市温度数据集',
            'NYCBike20140409',
            'PEMSD7',
            'LOS_LOOP',
            'PEMSD7(M)',
            'PEMSD8'
        ],
        name: '城市天眼监控系统',
        link: 'http://221.122.78.148:18888/',
        model: [],
        user: '系统管理员',
        logoUrl: 'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/6c2b6e57ff86535d435a47d6d330add2.png',
        faculty: '该用户未注册机构',
        influence: 0
    },{
        backgroundUrl: 'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/686fc2ae65a775c7eadce617c1126c74.png',
        heat: 39240,
        data: [
            '深圳出租车GPS数据',
            '中山大学—车道线检测数据集',
            '中山-城市poi数据',
            '中山-城市红绿灯数据',
            '中山-贵阳-智慧交通预测数据集',
            'mini_CULane',
            'instagram数据',
            '城市道路交通流数据',
            'METR_LA',
            'PEMS_BAY',
            '中科院-PEMSD3',
            '中科院-NYCTaxi20150103',
            'Los Angeles (METR-LA) and the Bay Area (PEMS-BAY) Traffic Data',
            '北京一卡通交通记录',
            '北京市城市天气记录',
            '国家-城市温度数据集',
            'NYCBike20140409',
            'PEMSD7',
            'LOS_LOOP',
            'PEMSD7(M)',
            'PEMSD8'
        ],
        name: '城市数据知识挖掘与系统画像',
        link: 'http://221.122.78.148:18080/portal/',
        model: [
            'AGCRN',
            'DCRNN',
            'MTGNN',
            'CCRNN',
            'DeepMove',
            'STRNN',
            'ACFM',
            'STResNet',
            'GWNET',
            'STTN',
            'DMVSTNet',
            'LSTPM',
            '基于深度学习模型DeepLabV3P实现高精度车道线检测',
            'TTPnet',
            'Ada-STNet',
            '深圳出租车预测',
            'Artificial Bee Colony模型',
            'ASTGCN',
            'STGCN',
            'HGCN',
            'STG2Seq',
            'CARA',
            'HSTLSTM',
            'DeepTTE'
        ],
        user: '系统管理员',
        logoUrl: 'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/eeaae2324e2fd55c65f13d2dab015831.png',
        faculty: '该用户未注册机构',
        influence: 0
    },{
        backgroundUrl: 'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/168f491be7222b70e36be992d067a814.png',
        heat: 16995,
        data: [
            'NYCBike20140409',
            'PEMSD7',
            'LOS_LOOP',
            'PEMSD7(M)',
            'PEMSD8'
        ],
        name: '基于图神经网络的路网结构分析工具',
        link: 'https://ogb.stanford.edu/docs/leader_graphprop/',
        model: [
            'AGCRN',
            'DCRNN',
            'MTGNN',
            'CCRNN',
            'DeepMove',
            'STRNN',
            'ACFM',
            'STResNet',
            'GWNET',
            'STTN',
            'DMVSTNet',
            'LSTPM',
            '基于深度学习模型DeepLabV3P实现高精度车道线检测',
            'TTPnet',
            'Ada-STNet',
            '深圳出租车预测',
            'Artificial Bee Colony模型',
            'ASTGCN',
            'STGCN',
            'HGCN',
            'STG2Seq',
            'CARA',
            'HSTLSTM',
            'DeepTTE'
        ],
        user: '系统管理员',
        logoUrl: 'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/4dc6b127268dacf533c953e493b68703.png',
        faculty: '该用户未注册机构',
        influence: 0
    }
]

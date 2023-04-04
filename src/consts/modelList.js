import {isElementOfType} from "react-dom/test-utils";
import { getIndexPic } from '~/utils/GetRandomPic';
export const parseModelList = () => {
    const list =modelList.map((item) => {
        return {
            title: item.name,
            description:item.description,
            imgSrc: getIndexPic(item.id),
            tags: item.tags,
            author: item.author,
            authorImgSrc: 'http://placekitten.com/300/300',
            date: item.publish,
            href:`/model/detail/${item.id}`,
            source: item.source,
        }
    })
    return list;
}

export const modelList = [
    {
        date: 1654176136000,
        img: '/mnt/deploy/resource/faculty-logo/974a8b2937afb7c0445e7a2184b23103.jpg',
        author: '系统管理员',
        num: 2,
        source: '自有模型',
        influence: 0,
        path: '8.140.124.245:8129/mnt/deploy/resource/model/Ada-STNet-master.zip',
        organization: '北航计算机学院交通大数据组',
        publish: '2022-02-04 19:49:09',
        name: 'Ada-STNet',
        donation: 104,
        id: 1,
        support: 2,
        description:'交通需求预测很重要，之前的区域交通需求预测方法已有很多，然而预测不同群体（如老年人、青少年）的多样化交通需求仍然是一个尚未探索的问题。该任务有两个难点：a. 区域间联合的时空关联 b. 不同社区间内含的关联 因此，本模型为具有相互监督自适应任务分组的多任务时空网络（Ada-MSTNet），用于群体感知的交通需求预测。首先从空间和群体角度构建了一系列多视角图，并设计一个时空神经网络，分别同时捕获区域和群体之间的复杂关联。然后提出了一个自适应聚类的多任务学习模块其中每个区域特定的交通需求被视为不同的任务。此外，引入了一种相互监督的自适应任务分组策略，通过利用来自另一个视角图的监督信号，将每个任务软聚类到不同的任务组中。通过这种方法，Ada-MSTNet能够： a. 在高度相关的群体和区域间共享公共知识 b. 通以端到端的方式屏蔽无关任务的噪声。',
        tags: ['交通', '图卷积','自动化','目标检测'],
    },{
        date: 1654176136000,
        img: '/mnt/deploy/resource/faculty-logo/1c87270eb0f8f8a812d9c0b46b137295.jpg',
        author: '系统管理员',
        num: 10,
        source: '自有模型',
        influence: 0,
        path: '8.140.124.245:8129null',
        organization: '北航计算机学院交通大数据组',
        publish: '2022-02-06 20:24:01',
        name: '深圳出租车预测',
        donation: 70,
        id: 2,
        support: 5,
        description:'1.环境要求\n' +
            'python >= 3.6, cuda >= 10.0, cudnn >= 7.1\n' +
            '2.作者\n' +
            'zhangchizhan2018@ia.ac.cn\n' +
            '3.机构\n' +
            '北京航空航天大学\n' +
            '4.依赖包\n' +
            'pytorch >= 1.2, numpy >= 1.16\n' +
            '5.使用要求\n' +
            '将涉及到的原始数据 NYC_2018Y_10M_yellow_green_fhv_pick_drop_orders_per_30min 放入data目录，并参考 main.py 运行',
        tags: ['交通','预测','交通事故'],
    },{
        date: 1654087437000,
        img: '/mnt/deploy/resource/faculty-logo/c704ef613cbdc6fc64307621a044c301.png',
        author: '系统管理员',
        num: 5,
        source: '自有模型',
        influence: 0,
        path: '8.140.124.245:8129null',
        organization: '北航计算机学院交通大数据组',
        publish: '2022-06-01 20:43:57',
        name: '基于深度学习模型DeepLabV3P实现高精度车道线检测',
        donation: 11,
        id: 3,
        support: 3,
        description: '使用用于行车道检测学术研究的大规模具有挑战性的CULane数据集进行实验',
        tags: ['交通','目标预测','交通事故'],
    },
    {
        date: 1654521438000,
        img: '/mnt/deploy/resource/faculty-logo/ccb167ac254da42e917c4df36e4c5193.jpg',
        author: '系统管理员',
        num: 0,
        source: '自有模型',
        influence: 0,
        path: '8.140.124.245:8129null',
        organization: '北航计算机学院交通大数据组',
        publish: '2022-06-06 21:17:18',
        name: 'Artificial Bee Colony模型',
        donation: 14,
        id: 4,
        support: 2,
        description: '这是一个基于Artificial Bee Colony算法的预测模型。',
        tags: ['目标预测','交通事故','时序数据']
    },
    {
        date: 1654176136000,
        img: '/mnt/deploy/resource/faculty-logo/f38c30edd2d269929c02b62f4efef3df.png',
        author: '系统管理员',
        num: 13,
        source: '自有模型',
        influence: 0,
        path: '8.140.124.245:8129null',
        organization: 'Libcity交通大数据组',
        publish: '2022-06-02 21:22:16',
        name: 'ACFM',
        donation: 24,
        id: 5,
        support: 1,
        description: '注意力人群流量机，能推断人群流量，通过注意力机制学习随时间变化数据的动态表示。Lingbo Liu，Ruimao Zhang，Jiefeng Peng，Guanbin Li，Bowen Du，and Liang Lin.2018. Attentive Crowd Flow Machines. In ACM Multimedia. ACM，1553–1561.',
        tags: ['交通','图卷积','自动化']
    },{
        date: 1644067342000,
        img: '/mnt/deploy/resource/faculty-logo/f9601d80719b3b3473e9d5980304d03d.jpg',
        author: '系统管理员',
        num: 0,
        source: '自有模型',
        influence: 0,
        path: '8.140.124.245:8129null',
        organization: '中山大学交通大数据组',
        publish: '2022-02-05 21:22:22',
        name: 'AGCRN',
        donation: 70,
        id: 6,
        support: 2,
        description: '自适应图卷积循环网络，通过自适应模块增强传统图卷积，并组合成循环神经网络，以捕捉细粒度时空关联。Lei Bai，Lina Yao，Can Li，Xianzhi Wang，and Can Wang. 2020. Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting. In NeurIPS.',
        tags: ['交通','预测','交通事故']
    },{
        date: 1641388946000,
        img: '/mnt/deploy/resource/faculty-logo/31b2afe97919a416e92e0e9ee7516a10.jpg',
        author: '系统管理员',
        num: 16,
        source: '自有模型',
        influence: 0,
        path: '8.140.124.245:8129null',
        organization: '北航计算机学院交通大数据组',
        publish: '2022-01-05 21:22:26',
        name: 'ASTGCN',
        donation: 88,
        id: 7,
        support: 1,
        description: '基于注意力的时空图卷积网络，融合时空注意力机制与时空卷积捕捉动态时空特征。Shengnan Guo，Youfang Lin，Ning Feng，Chao Song，and Huaiyu Wan. 2019.Attention Based Spatial-Temporal Graph Convolutional Networks for Traffic Flow Forecasting. In AAAI. AAAI Press，922–929.',
        tags: ['交通','目标预测','结构健康监测']
    },{
        date: 1628169751000,
        img: '/mnt/deploy/resource/faculty-logo/f38c30edd2d269929c02b62f4efef3df.png',
        author: '系统管理员',
        num: 7,
        source: '自有模型',
        influence: 0,
        path: '8.140.124.245:8129null',
        organization: 'Libcity交通大数据组',
        publish: '2021-08-05 21:22:31',
        name: 'STResNet',
        donation: 38,
        id: 8,
        support: 1,
        description: '时空残差网络，广泛用于基于网格的流量预测任务，以残差单元建模时空关联。Junbo Zhang，Yu Zheng，and Dekang Qi. 2017. Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction. In AAAI. AAAI Press，1655–1661.',
        tags: ['目标预测','交通事故','图神经网络']
    },{
        date: 1636032156000,
        img: '/mnt/deploy/resource/faculty-logo/f9601d80719b3b3473e9d5980304d03d.jpg',
        author: '系统管理员',
        num: 0,
        source: '自有模型',
        influence: 0,
        path: '8.140.124.245:8129null',
        organization: '中山大学交通大数据组',
        publish: '2021-11-04 21:22:36',
        name: 'DCRNN',
        donation: 96,
        id: 9,
        support: 0,
        description: '扩散卷积循环神经网络，用由扩散过程形式化的图卷积捕捉时间依赖，并用编码器-解码器框架捕捉空间依赖。Yaguang Li，Rose Yu，Cyrus Shahabi，and Yan Liu. 2018. Diffusion Convolutional Recurrent Neural Network: Data-Driven Traffic Forecasting. In ICLR (Poster).OpenReview.net.',
        tags: ['交通','图卷积','自动化']
    },{
        date: 1612617766000,
        img: '/mnt/deploy/resource/faculty-logo/31b2afe97919a416e92e0e9ee7516a10.jpg',
        author: '系统管理员',
        num: 1,
        source: '自有模型',
        influence: 0,
        path: '8.140.124.245:8129null',
        organization: '北航计算机学院交通大数据组',
        publish: '2021-02-06 21:22:46',
        name: 'STGCN',
        donation: 85,
        id: 10,
        support: 0,
        description: '交通速度预测模型，时空图卷积网络，综合图卷积和门控时间卷积捕捉时空关联。Bing Yu，Haoteng Yin，and Zhanxing Zhu. 2018. Spatio-Temporal Graph Convolutional Networks: A Deep Learning Framework for Traffic Forecasting. In IJCAI. ijcai.org，3634–3640.',
        tags: ['交通','预测','交通事故']
    }

]
console.log("model", modelList.length)
